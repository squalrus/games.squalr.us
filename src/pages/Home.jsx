import StarfieldBackground from '../components/StarfieldBackground.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { useSeo } from '../lib/seo.js';

export default function Home() {
  useSeo({
    title: 'Infinity Space — Coming Soon',
    description: 'A top-down survival space shooter with procedurally generated sectors. Fight, scavenge, and push as deep as you can.',
    path: '/',
  });

  return (
    <StarfieldBackground>
      <main className="hero">
        <div className="kicker">Procedurally generated · Top-down · Survival shooter</div>

        <h1 className="headline">Infinity Space</h1>

        <p className="tagline">Worlds that never end.</p>

        <p className="subhead">
          A top-down survival space shooter coming to Android, Xbox, and Steam (all TBD). Fight
          through procedurally generated sectors, scavenge ship parts to stay fueled and armed,
          and push as deep as you can before the next sector ends you.
        </p>

        <div className="cta-row">
          <div className="cta-pill">Coming Soon</div>
        </div>
      </main>

      <div className="drag-hint">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/></svg>
        <span>Drag to explore the sector</span>
      </div>

      <footer className="site-footer">
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
        <SiteFooter />
      </footer>
    </StarfieldBackground>
  );
}
