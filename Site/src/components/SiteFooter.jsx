import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <div className="legal">
      <span>&copy; 2026 SQUALRUS GAMES LLC</span>
      <span className="legal-links">
        <Link to="/privacy">Privacy Policy</Link>
        <span className="dot">&middot;</span>
        <Link to="/support">Support</Link>
        <span className="dot">&middot;</span>
        <a href="mailto:games@squalr.us">games@squalr.us</a>
      </span>
    </div>
  );
}
