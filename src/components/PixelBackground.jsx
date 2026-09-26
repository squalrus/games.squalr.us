import { useEffect, useRef } from 'react';
import { startPixelField } from '../lib/pixelfield.js';

// Fills its nearest positioned ancestor (e.g. a `.panel`) with drifting
// pixel-art squares of varying sizes, each moving in its own direction.
export default function PixelBackground() {
  const canvasRef = useRef(null);

  useEffect(() => startPixelField(canvasRef.current), []);

  return <canvas ref={canvasRef} className="pixel-bg" aria-hidden="true"></canvas>;
}
