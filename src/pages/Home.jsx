import StarfieldBackground from '../components/StarfieldBackground.jsx';
import PixelBackground from '../components/PixelBackground.jsx';
import { useSeo } from '../lib/seo.js';

export default function Home() {
  useSeo({
    title: 'Squalrus Games',
    description: 'Squalrus Games makes small, focused games — currently Chogots, a pixel-art creature-care game for Android, and Infinity Space, a top-down survival space shooter.',
    path: '/',
  });

  return (
    <main className="panels">
      <section className="panel panel--brand">
        <div className="panel-content">
          <div className="kicker">Indie · Self-published</div>

          <h1 className="headline">Squalrus Games</h1>

          <p className="tagline">Small, focused games.</p>

          <p className="subhead">
            We make small games and finish them. Scroll down to see what we're working on.
          </p>

          <div className="hint scroll-hint">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>

      <section className="panel panel--chogots" id="chogots">
        <PixelBackground />

        <div className="panel-content">
          <div className="kicker">Pixel-art creature care · Android</div>

          <h2 className="headline">Chogots</h2>

          <p className="tagline">It's probably fine.</p>

          <p className="subhead">
            A pocket creature-care game with a deadpan sense of humor. Feed it, play Gem Match to
            keep it happy, and check back later — it'll still be there, mostly fine.
          </p>

          <div className="cta-row">
            <div className="cta-pill">Coming Soon</div>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="stat-value">2D</div>
              <div className="stat-label">Pixel-art creature care</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-value">Match-3</div>
              <div className="stat-label">Gem Match minigame</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-value">TBD</div>
              <div className="stat-label">Android</div>
            </div>
          </div>
        </div>
      </section>
      <section className="panel panel--infinity-space" id="infinity-space">
        <StarfieldBackground />

        <div className="panel-content">
          <div className="kicker">Procedurally generated · Top-down · Survival shooter</div>

          <h2 className="headline">Infinity Space</h2>

          <p className="tagline">Worlds that never end.</p>

          <p className="subhead">
            A top-down survival space shooter coming to Android, Xbox, and Steam (all TBD). Fight
            through procedurally generated sectors, scavenge ship parts to stay fueled and armed,
            and push as deep as you can before the next sector ends you.
          </p>

          <div className="cta-row">
            <div className="cta-pill">Coming Soon</div>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="stat-value">∞</div>
              <div className="stat-label">Procedural sectors</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-value">2D</div>
              <div className="stat-label">Top-down survival</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-value">TBD</div>
              <div className="stat-label">Android · Xbox · Steam</div>
            </div>
          </div>
        </div>

        <div className="hint drag-hint">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/></svg>
          <span>Drag to explore</span>
        </div>
      </section>

    </main>
  );
}
