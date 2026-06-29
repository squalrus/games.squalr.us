// Procedural parallax starfield background for the Infinity Space coming-soon page.
// Generates seamless nebula tiles + a non-tiling galaxy decal on canvas at load time
// (no image assets to ship), then pans them via a drag-or-idle-drift camera.

// Locked palette: deep teal/cyan space, matching the game's HUD accent color.
var PAL = { base: [4, 14, 18], clouds: [[30, 160, 170], [40, 120, 200], [60, 190, 150]], core: [170, 255, 235] };
var NEB = 0.5;
var DENS = 1;
var DRIFT = 0.8;
var STAR_COLS = ['255,255,255', '210,235,255', '210,255,245', '230,250,255'];

function rnd(a, b) { return a + Math.random() * (b - a); }
function pick(arr) { return arr[(Math.random() * arr.length) | 0]; }
function newCanvas(s) { var c = document.createElement('canvas'); c.width = c.height = s; return c; }

function wrap(ctx, size, fn) {
  for (var dx = -size; dx <= size; dx += size) {
    for (var dy = -size; dy <= size; dy += size) {
      ctx.save();
      ctx.translate(dx, dy);
      fn();
      ctx.restore();
    }
  }
}

function cloud(ctx, x, y, r, rgb, a) {
  var g = ctx.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + a + ')');
  g.addColorStop(1, 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 7);
  ctx.fill();
}

function star(ctx, x, y, r, col, glow) {
  if (glow) {
    var g = ctx.createRadialGradient(x, y, 0, x, y, r * 7);
    g.addColorStop(0, 'rgba(' + col + ',0.85)');
    g.addColorStop(0.3, 'rgba(' + col + ',0.22)');
    g.addColorStop(1, 'rgba(' + col + ',0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r * 7, 0, 7);
    ctx.fill();
  }
  ctx.fillStyle = 'rgba(' + col + ',1)';
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 7);
  ctx.fill();
}

function makeDeep(size) {
  var pal = PAL, I = NEB, D = DENS, k = size / 512;
  var c = newCanvas(size), ctx = c.getContext('2d');
  ctx.fillStyle = 'rgb(' + pal.base[0] + ',' + pal.base[1] + ',' + pal.base[2] + ')';
  ctx.fillRect(0, 0, size, size);
  ctx.globalCompositeOperation = 'lighter';

  var G = 4, cell = size / G;
  for (var gx = 0; gx < G; gx++) {
    for (var gy = 0; gy < G; gy++) {
      var cx = gx * cell + rnd(0.1, 0.9) * cell;
      var cy = gy * cell + rnd(0.1, 0.9) * cell;
      var r = rnd(70, 150) * k, col = pick(pal.clouds), a = rnd(0.05, 0.12) * I;
      wrap(ctx, size, (function (cx, cy, r, col, a) { return function () { cloud(ctx, cx, cy, r, col, a); }; })(cx, cy, r, col, a));
    }
  }
  for (var i = 0; i < 8; i++) {
    var x = rnd(0, size), y = rnd(0, size), r2 = rnd(30, 65) * k;
    var col2 = Math.random() < 0.4 ? pal.core : pick(pal.clouds), a2 = rnd(0.08, 0.16) * I;
    wrap(ctx, size, (function (x, y, r2, col2, a2) { return function () { cloud(ctx, x, y, r2, col2, a2); }; })(x, y, r2, col2, a2));
  }
  for (var j = 0; j < 240; j++) {
    var sx = rnd(0, size), sy = rnd(0, size), sr = rnd(0.3, 0.7) * k, sc = pick(STAR_COLS);
    wrap(ctx, size, (function (sx, sy, sr, sc) { return function () { star(ctx, sx, sy, sr, sc, false); }; })(sx, sy, sr, sc));
  }
  var n = Math.round(90 + D * 16);
  for (var m = 0; m < n; m++) {
    var bx = rnd(0, size), by = rnd(0, size), bc = pick(STAR_COLS);
    var glow = Math.random() < 0.05, br = (glow ? rnd(1.1, 1.7) : rnd(0.5, 1.2)) * k;
    wrap(ctx, size, (function (bx, by, br, bc, glow) { return function () { star(ctx, bx, by, br, bc, glow); }; })(bx, by, br, bc, glow));
  }
  return c.toDataURL('image/png');
}

function makeMid(size) {
  var pal = PAL, I = NEB, D = DENS, k = size / 512;
  var c = newCanvas(size), ctx = c.getContext('2d');
  ctx.globalCompositeOperation = 'lighter';
  for (var i = 0; i < 3; i++) {
    var x = rnd(0, size), y = rnd(0, size), r = rnd(120, 220) * k;
    var col = pick(pal.clouds), a = rnd(0.03, 0.07) * I;
    wrap(ctx, size, (function (x, y, r, col, a) { return function () { cloud(ctx, x, y, r, col, a); }; })(x, y, r, col, a));
  }
  var n = Math.round(28 + D * 6);
  for (var m = 0; m < n; m++) {
    var bx = rnd(0, size), by = rnd(0, size), bc = pick(STAR_COLS);
    var glow = Math.random() < 0.12, br = (glow ? rnd(1.4, 2.1) : rnd(0.7, 1.4)) * k;
    wrap(ctx, size, (function (bx, by, br, bc, glow) { return function () { star(ctx, bx, by, br, bc, glow); }; })(bx, by, br, bc, glow));
  }
  return c.toDataURL('image/png');
}

function makeFore(size) {
  var D = DENS, k = size / 512;
  var c = newCanvas(size), ctx = c.getContext('2d');
  ctx.globalCompositeOperation = 'lighter';
  var n = Math.round(7 + D * 2);
  for (var i = 0; i < n; i++) {
    var x = rnd(0, size), y = rnd(0, size);
    var col = Math.random() < 0.3 ? '200,255,245' : '255,255,255';
    var glow = Math.random() < 0.4;
    var r = (glow ? rnd(1.8, 2.8) : rnd(1, 1.7)) * k;
    wrap(ctx, size, (function (x, y, r, col, glow) { return function () { star(ctx, x, y, r, col, glow); }; })(x, y, r, col, glow));
  }
  return c.toDataURL('image/png');
}

function makeGalaxy(size) {
  var pal = PAL, I = NEB, k = size / 1024;
  var c = newCanvas(size), ctx = c.getContext('2d');
  var cx = size / 2, cy = size / 2;
  ctx.globalCompositeOperation = 'lighter';
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rnd(0, Math.PI));
  ctx.scale(1, 0.62);
  for (var i = 0; i < 7; i++) {
    var r = size * rnd(0.18, 0.42);
    var ox = rnd(-1, 1) * size * 0.08, oy = rnd(-1, 1) * size * 0.08;
    cloud(ctx, ox, oy, r, pick(pal.clouds), rnd(0.05, 0.10) * I);
  }
  ctx.restore();
  cloud(ctx, cx, cy, size * 0.14, pal.core, 0.22 * I);
  cloud(ctx, cx, cy, size * 0.06, [255, 255, 255], 0.4 * I);
  for (var j = 0; j < 90; j++) {
    var ang = rnd(0, 7);
    var rad = Math.pow(Math.random(), 1.7) * size * 0.42;
    var x = cx + Math.cos(ang) * rad, y = cy + Math.sin(ang) * rad * 0.62;
    star(ctx, x, y, rnd(0.5, 1.3) * k, pick(STAR_COLS), Math.random() < 0.08);
  }
  return c.toDataURL('image/png');
}

// Decorative, non-tiling galaxy decals scattered in world space (independent of the
// tiling deep/mid/fore layers), panned at their own parallax factor.
var GALAXY_FIELD = [
  { wx: 540, wy: 250, scale: 0.95, rot: 16 },
  { wx: -360, wy: 760, scale: 0.7, rot: -28 },
  { wx: 1820, wy: 560, scale: 1.3, rot: 55 },
  { wx: -1150, wy: 820, scale: 0.85, rot: -14 },
  { wx: 560, wy: 1380, scale: 0.6, rot: 38 },
  { wx: 2400, wy: 1560, scale: 1.0, rot: -48 }
];
var GALAXY_FACTOR = 0.08;
var GBASE = 1024;

// Mounts the procedural starfield onto #bg-root/#galaxy-wrap and starts the drift/drag
// camera loop. Returns a cleanup function that cancels the loop and detaches listeners,
// since this is driven from a React effect that can unmount the page mid-animation.
export function initStarfield() {
  var root = document.getElementById('bg-root');
  var gwrap = document.getElementById('galaxy-wrap');
  if (!root || !gwrap) return function () {};

  var urls = {
    deep: makeDeep(512),
    mid: makeMid(512),
    fore: makeFore(512),
    galaxy: makeGalaxy(1024)
  };

  var layers = root.querySelectorAll('[data-depth]');
  layers.forEach(function (el) {
    el.style.backgroundImage = 'url(' + urls[el.dataset.depth] + ')';
  });

  var decals = GALAXY_FIELD.map(function (g) {
    var w = GBASE * g.scale;
    var el = document.createElement('div');
    el.style.cssText = 'position:absolute; left:0; top:0; width:' + w + 'px; height:' + w + 'px; ' +
      'background-image:url(' + urls.galaxy + '); background-size:contain; background-repeat:no-repeat; ' +
      'transform-origin:center; will-change:transform;';
    gwrap.appendChild(el);
    return { el: el, wx: g.wx, wy: g.wy, rot: g.rot, w: w };
  });

  var cam = { x: 0, y: 0 };
  var base = { x: 14, y: 9 };
  var dragging = false;
  var last = performance.now();
  var px, py, raf;

  function update() {
    layers.forEach(function (el) {
      var f = parseFloat(el.dataset.factor);
      el.style.backgroundPosition = (-cam.x * f).toFixed(2) + 'px ' + (-cam.y * f).toFixed(2) + 'px';
    });
    decals.forEach(function (d) {
      var dx = d.wx - cam.x * GALAXY_FACTOR - d.w / 2;
      var dy = d.wy - cam.y * GALAXY_FACTOR - d.w / 2;
      d.el.style.transform = 'translate(' + dx.toFixed(1) + 'px, ' + dy.toFixed(1) + 'px) rotate(' + d.rot + 'deg)';
    });
  }

  function loop(t) {
    var dt = Math.min(0.05, (t - last) / 1000);
    last = t;
    if (!dragging) {
      cam.x += base.x * DRIFT * dt;
      cam.y += base.y * DRIFT * dt;
    }
    update();
    raf = requestAnimationFrame(loop);
  }
  raf = requestAnimationFrame(loop);

  function onPointerDown(e) {
    dragging = true;
    px = e.clientX;
    py = e.clientY;
    root.classList.add('dragging');
    if (root.setPointerCapture) root.setPointerCapture(e.pointerId);
  }
  function onPointerMove(e) {
    if (!dragging) return;
    cam.x -= (e.clientX - px);
    cam.y -= (e.clientY - py);
    px = e.clientX;
    py = e.clientY;
  }
  function onPointerUp() {
    dragging = false;
    root.classList.remove('dragging');
  }

  root.addEventListener('pointerdown', onPointerDown);
  root.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);

  return function cleanup() {
    cancelAnimationFrame(raf);
    root.removeEventListener('pointerdown', onPointerDown);
    root.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    decals.forEach(function (d) { d.el.remove(); });
  };
}
