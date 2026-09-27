import { Link } from 'react-router-dom';
import StarfieldBackground from '../components/StarfieldBackground.jsx';
import PixelBackground from '../components/PixelBackground.jsx';
import SqualrusMark from '../components/SqualrusMark.jsx';
import { useSeo } from '../lib/seo.js';

const GAMES = [
  { to: '/#chogots', name: 'Chogots', platforms: 'Android · Testing' },
  { to: '/#infinity-space', name: 'Infinity Space', platforms: 'Android · Xbox · Steam' },
];

export default function Home() {
  useSeo({
    title: 'Squalrus Games',
    description: 'Squalrus Games makes small, focused games — currently Chogots, a pixel-art creature-care game for Android, and Infinity Space, a top-down survival space shooter.',
    path: '/',
  });

  return (
    <div className="panels">
      <section className="panel panel--brand dots" aria-label="Intro">
        <div className="glow" aria-hidden="true"></div>

        <div className="hud" aria-hidden="true">
          <span><b>1UP</b> 000000</span>
          <span><b>Hi-score</b> 0133742</span>
          <span className="hud-credit"><b>Credit</b> 02</span>
        </div>

        <div className="panel-content">
          <SqualrusMark size={176} className="hero-mark" />

          <h1 className="hero-title">Squalrus</h1>
          <div className="hero-sub" aria-hidden="true">
            <span className="rule"></span>
            <span className="hero-games">Games</span>
            <span className="rule"></span>
          </div>

          <p className="hero-tagline">Small, focused games.</p>
          <p className="subhead">We make small games and finish them. Pick one below to see what we're working on.</p>

          <div className="select-frame px">
            <nav className="select-menu px" aria-label="Games">
              <div className="select-title">— Select game —</div>
              {GAMES.map(({ to, name, platforms }) => (
                <Link key={to} to={to} className="select-item">
                  <span className="select-name">
                    <span className="cursor blink" aria-hidden="true">▶</span>{name}
                  </span>
                  <span className="select-platforms">{platforms}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <Link to="/#chogots" className="press-start blink">▼ Press start ▼</Link>
        <div className="scan" aria-hidden="true"></div>
      </section>

      <section className="panel panel--chogots" id="chogots">
        <PixelBackground />
        <div className="game-tag px">Game 01</div>

        <div className="panel-content">
          <div className="kicker">Pixel-art creature care · Android</div>

          <h2 className="headline">Chogots</h2>

          <p className="tagline">It's probably fine.</p>

          <p className="subhead">
            A pocket creature-care game with a deadpan sense of humor. Feed it, play Gem Match to
            keep it happy, and check back later — it'll still be there, mostly fine.
          </p>

          <div className="cta-row">
            <a
              className="px-btn px"
              href="https://play.google.com/apps/testing/com.SqualrusGames.Chogots"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get the Test Build
            </a>
            <a
              className="px-btn px-btn--outline px"
              href="mailto:games@squalr.us?subject=Chogots%20tester%20request"
            >
              <span className="px">Request to Join</span>
            </a>
          </div>

          <p className="cta-note">
            Closed testing on Android. Not on the list yet? Email{' '}
            <a href="mailto:games@squalr.us?subject=Chogots%20tester%20request">games@squalr.us</a>{' '}
            and we'll add you.
          </p>

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
        <div className="game-tag px">Game 02</div>

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
            <div className="px-btn px">Coming Soon</div>
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
          <span aria-hidden="true">✥</span>
          <span>Drag to explore</span>
        </div>
      </section>
    </div>
  );
}
