import { useEffect, useState } from 'react';
import { makePixelTile } from '../lib/pixelfield.js';

// Fills its nearest positioned ancestor (e.g. a `.panel`) with a tiled,
// slowly-drifting pixel-art pattern. Generated once on mount, same approach
// as StarfieldBackground but static (no drag) since nothing calls for it here.
export default function PixelBackground() {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(makePixelTile(64));
  }, []);

  return (
    <div
      className="pixel-bg"
      style={url ? { backgroundImage: `url(${url})` } : undefined}
    ></div>
  );
}
