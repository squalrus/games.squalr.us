// Animated pixel field for the Chogots section background — a warm
// paper-and-ink palette matching the game's pixel-art creature-care visual
// language, distinct from Infinity Space's cool space palette. Square pixels of
// varying sizes, plus sprites from the game itself (public/chogots/), each
// drift in their own direction and wrap around the edges.

var INK = [58, 42, 30];
var ACCENTS = [[214, 122, 84], [122, 158, 108], [214, 176, 92]];
var PIXEL_SIZES = [3, 4, 4, 6, 6, 8, 10, 14];

// Sheets mirror the game's Unity slicing: `frame` is the cell size, and each
// entry in `anims` is a looping sequence of [col, row] cells (row 0 = top).
// A floating sprite picks one sequence; sprites without `frame` are a single image.
var CREATURE_ANIMS = [
  [[0, 0], [1, 0], [0, 0], [1, 0], [2, 0]], // idle, with a blink
  [[3, 0], [4, 0]],                         // walk
  [[5, 0], [6, 0]],                         // eat
  [[7, 0], [0, 1]],                         // happy grin + hop
  [[4, 1], [5, 1]],                         // sleep
];
var SPRITES = [
  { name: 'creature_hatchling_stage1', frame: 12, anims: CREATURE_ANIMS, scales: [4, 5], weight: 3 },
  { name: 'creature_sprout_stage2', frame: 16, anims: CREATURE_ANIMS, scales: [3, 4], weight: 3 },
  { name: 'creature_hatchling', scales: [3, 4], weight: 2 },
  { name: 'creature_sprout', scales: [3, 4], weight: 2 },
  { name: 'creature_egg', scales: [3], weight: 1 },
  { name: 'gem_berry', scales: [1, 2], weight: 1 },
  { name: 'gem_drop', scales: [1, 2], weight: 1 },
  { name: 'gem_honey', scales: [1, 2], weight: 1 },
  { name: 'gem_leaf', scales: [1, 2], weight: 1 },
  { name: 'gem_plum', scales: [1, 2], weight: 1 },
  { name: 'item_coin', scales: [3, 4], weight: 2 },
  { name: 'item_coffee', scales: [2, 3], weight: 1 },
  { name: 'item_egg', scales: [2, 3], weight: 1 },
  { name: 'item_hamburger', scales: [2, 3], weight: 1 },
  { name: 'item_hot_dog', scales: [2, 3], weight: 1 },
  { name: 'item_mochi_puff', scales: [2, 3], weight: 1 },
  { name: 'item_moon_jelly', scales: [2, 3], weight: 1 },
  { name: 'item_pizza', scales: [2, 3], weight: 1 },
  { name: 'item_ramen', scales: [2, 3], weight: 1 },
  { name: 'item_sea_biscuit', scales: [2, 3], weight: 1 },
  { name: 'item_sponge', scales: [2, 3], weight: 1 },
  { name: 'toy_balloon', frame: 16, anims: [[[0, 0], [1, 0]]], scales: [2, 3], weight: 1 },
  { name: 'toy_cat_wand', frame: 16, anims: [[[0, 0], [1, 0], [2, 0], [3, 0]]], scales: [2, 3], weight: 1 },
  { name: 'toy_tennis_ball', frame: 16, anims: [[[0, 0], [1, 0], [2, 0], [1, 0]]], scales: [2, 3], weight: 1 },
];
var SPRITE_FPS = 4;

function rnd(a, b) { return a + Math.random() * (b - a); }
function pick(arr) { return arr[(Math.random() * arr.length) | 0]; }

function velocity(min, max) {
  var angle = rnd(0, Math.PI * 2);
  var speed = rnd(min, max);
  return { vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed };
}

function makePixel(w, h) {
  var size = pick(PIXEL_SIZES);
  // Smaller pixels move a little faster, for a loose sense of depth.
  var v = velocity(4 * (10 / (size + 6)), 14 * (10 / (size + 6)));
  var col = Math.random() < 0.7 ? pick(ACCENTS) : INK;
  return {
    x: rnd(0, w),
    y: rnd(0, h),
    vx: v.vx,
    vy: v.vy,
    w: size,
    h: size,
    fill: 'rgba(' + col[0] + ',' + col[1] + ',' + col[2] + ',' + rnd(0.1, 0.32).toFixed(2) + ')',
  };
}

var spritePool = [];
SPRITES.forEach(function (s) {
  for (var i = 0; i < s.weight; i++) spritePool.push(s);
});

function makeSprite(w, h, images) {
  var def = pick(spritePool);
  var img = images[def.name];
  var frameW = def.frame || img.naturalWidth;
  var frameH = def.frame || img.naturalHeight;
  var cells = def.anims ? pick(def.anims) : [[0, 0]];
  var scale = pick(def.scales);
  var v = velocity(6, 16);
  return {
    x: rnd(0, w),
    y: rnd(0, h),
    vx: v.vx,
    vy: v.vy,
    w: frameW * scale,
    h: frameH * scale,
    img: img,
    frameW: frameW,
    frameH: frameH,
    cells: cells,
    phase: rnd(0, cells.length),
    alpha: rnd(0.35, 0.6),
  };
}

function loadSprites() {
  var images = {};
  return Promise.all(SPRITES.map(function (s) {
    var img = new Image();
    img.src = '/chogots/' + s.name + '.png';
    return img.decode().then(function () { images[s.name] = img; });
  })).then(function () { return images; });
}

// Starts animating on `canvas`, sized to its parent. Returns a cleanup function.
export function startPixelField(canvas) {
  var ctx = canvas.getContext('2d');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var pixels = [];
  var sprites = [];
  var images = null;
  var w = 0, h = 0, raf = 0, last = 0, elapsed = 0, visible = true, stopped = false;

  function populate() {
    var targetPixels = Math.round((w * h) / 5500);
    while (pixels.length < targetPixels) pixels.push(makePixel(w, h));
    pixels.length = targetPixels;

    if (!images) return;
    var targetSprites = Math.max(6, Math.round((w * h) / 70000));
    while (sprites.length < targetSprites) sprites.push(makeSprite(w, h, images));
    sprites.length = targetSprites;
  }

  function resize() {
    var dpr = window.devicePixelRatio || 1;
    var rect = canvas.parentElement.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = false;
    populate();
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    var i, p;
    for (i = 0; i < pixels.length; i++) {
      p = pixels[i];
      ctx.fillStyle = p.fill;
      // Snap to whole pixels so everything stays crisp.
      ctx.fillRect(Math.round(p.x), Math.round(p.y), p.w, p.h);
    }
    for (i = 0; i < sprites.length; i++) {
      p = sprites[i];
      var cell = p.cells[Math.floor(p.phase + elapsed * SPRITE_FPS) % p.cells.length];
      ctx.globalAlpha = p.alpha;
      ctx.drawImage(p.img, cell[0] * p.frameW, cell[1] * p.frameH, p.frameW, p.frameH, Math.round(p.x), Math.round(p.y), p.w, p.h);
    }
    ctx.globalAlpha = 1;
  }

  function move(list, dt) {
    for (var i = 0; i < list.length; i++) {
      var p = list[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      if (p.x < -p.w) p.x += w + p.w; else if (p.x > w) p.x -= w + p.w;
      if (p.y < -p.h) p.y += h + p.h; else if (p.y > h) p.y -= h + p.h;
    }
  }

  function step(t) {
    var dt = last ? Math.min((t - last) / 1000, 0.1) : 0;
    last = t;
    elapsed += dt;
    move(pixels, dt);
    move(sprites, dt);
    draw();
    raf = requestAnimationFrame(step);
  }

  function play() {
    if (reduceMotion || raf || !visible || stopped) return;
    last = 0;
    raf = requestAnimationFrame(step);
  }

  function pause() {
    cancelAnimationFrame(raf);
    raf = 0;
  }

  // Only animate while the panel is on screen.
  var io = new IntersectionObserver(function (entries) {
    visible = entries[0].isIntersecting;
    if (visible) play(); else pause();
  });
  var ro = new ResizeObserver(resize);

  resize();
  io.observe(canvas);
  ro.observe(canvas.parentElement);
  play();

  loadSprites().then(function (loaded) {
    if (stopped) return;
    images = loaded;
    populate();
    draw();
  }).catch(function () {
    // Missing sprites just leave the plain pixel field.
  });

  return function () {
    stopped = true;
    pause();
    io.disconnect();
    ro.disconnect();
  };
}
