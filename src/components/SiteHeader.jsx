import { Link } from 'react-router-dom';

export default function SiteHeader() {
  return (
    <header className="site-header-bar">
      <Link to="/" className="brand-mark">Squalrus Games</Link>
    </header>
  );
}
