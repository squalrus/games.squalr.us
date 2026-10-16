"""Draw the squalrus mark onto a Void square, pixel-exact, for the LinkedIn page logo.

Canvas is 20 mark-pixels (16 + 2 clear space per side), so 300px = 15x and 400px = 20x.
Usage: python docs/linkedin/render_logo.py
"""
import re
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[2]
SVG = ROOT / 'public' / 'press' / 'squalrus-mark.svg'
OUT = Path(__file__).resolve().parent
VOID = '#050c11'

paths = re.findall(r'fill="(#[0-9a-fA-F]{6})" d="([^"]+)"', SVG.read_text())
rects = [(fill, int(x), int(y), int(w))
         for fill, d in paths
         for x, y, w in re.findall(r'M(\d+) (\d+)h(\d+)v1h-\d+z', d)]

for size in (300, 400):
    scale = size // 20
    img = Image.new('RGB', (size, size), VOID)
    draw = ImageDraw.Draw(img)
    pad = 2 * scale
    for fill, x, y, w in rects:
        x0, y0 = pad + x * scale, pad + y * scale
        draw.rectangle([x0, y0, x0 + w * scale - 1, y0 + scale - 1], fill=fill)
    img.save(OUT / f'squalrus-linkedin-logo-{size}.png')
    print(f'squalrus-linkedin-logo-{size}.png')
