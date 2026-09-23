// Procedural pixel-art tile for the Chogots section background — a warm
// paper-and-ink palette matching the game's actual pixel-art creature-care
// visual language, distinct from Infinity Space's cool space palette. Static
// (no drag interaction); the panel gives it a slow CSS background-position
// drift for ambient motion instead.

var PAPER = [244, 233, 214];
var INK = [58, 42, 30];
var ACCENTS = [[214, 122, 84], [122, 158, 108], [214, 176, 92]];

function rnd(a, b) { return a + Math.random() * (b - a); }
function pick(arr) { return arr[(Math.random() * arr.length) | 0]; }

export function makePixelTile(size) {
  size = size || 64;
  var px = 4;
  var c = document.createElement('canvas');
  c.width = c.height = size;
  var ctx = c.getContext('2d');

  ctx.fillStyle = 'rgb(' + PAPER.join(',') + ')';
  ctx.fillRect(0, 0, size, size);

  var cols = size / px;
  var n = Math.round(cols * cols * 0.12);
  for (var i = 0; i < n; i++) {
    var gx = Math.floor(rnd(0, cols)) * px;
    var gy = Math.floor(rnd(0, cols)) * px;
    var col = Math.random() < 0.7 ? pick(ACCENTS) : INK;
    var a = rnd(0.06, 0.2);
    ctx.fillStyle = 'rgba(' + col[0] + ',' + col[1] + ',' + col[2] + ',' + a + ')';
    ctx.fillRect(gx, gy, px, px);
  }

  return c.toDataURL('image/png');
}
