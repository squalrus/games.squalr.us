import { Link } from 'react-router-dom';
import SqualrusMark from './SqualrusMark.jsx';

// 88×31 buttons, a nod to squalr.us's web-1.0 badges. Claims here describe the games, so keep them true to the privacy policy.
const BADGES = [
  { label: 'No ads', tone: 'cyan' },
  { label: 'No IAP', tone: 'pink' },
  { label: 'Made in SEA', tone: 'tusk' },
  { label: '60 FPS OK', tone: 'grid' },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="checker" aria-hidden="true"></div>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-lockup">
              <SqualrusMark size={32} />
              <span>Squalrus Games</span>
            </Link>
            <span className="footer-legal">&copy; 2026 SQUALRUS GAMES LLC &middot; Seattle, WA</span>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="sep" aria-hidden="true">■</span>
            <Link to="/support">Support</Link>
            <span className="sep" aria-hidden="true">■</span>
            <Link to="/press">Press Kit</Link>
            <span className="sep" aria-hidden="true">■</span>
            <a href="mailto:games@squalr.us">games@squalr.us</a>
          </nav>

          <button
            type="button"
            className="continue"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span aria-hidden="true">▲</span>Continue?
          </button>
        </div>

        <div className="footer-bottom">
          <ul className="badges" aria-label="Our games have">
            {BADGES.map(({ label, tone }) => (
              <li key={label} className={`badge badge--${tone}`}>{label}</li>
            ))}
          </ul>
          <span className="thanks">Thanks for playing</span>
        </div>
      </div>
    </footer>
  );
}
