import { useEffect } from 'react';
import { initStarfield } from '../lib/starfield.js';

// Fills its nearest positioned ancestor (e.g. a `.panel`) with the procedural
// drag/drift starfield. Renders only the background layers — panel content is
// a sibling, not a child, so it isn't dragged along with the background.
export default function StarfieldBackground() {
  useEffect(() => {
    const cleanup = initStarfield();
    return cleanup;
  }, []);

  return (
    <div id="bg-root" className="bg-root">
      <div className="layer" data-depth="deep" data-factor="0.15"></div>
      <div id="galaxy-wrap" className="galaxy-wrap"></div>
      <div className="layer" data-depth="mid" data-factor="0.45"></div>
      <div className="layer" data-depth="fore" data-factor="1"></div>

      <div className="vignette-radial"></div>
      <div className="vignette-linear"></div>
    </div>
  );
}
