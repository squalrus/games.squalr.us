import { Link, NavLink } from 'react-router-dom';

// Game links deep-link to homepage sections; Layout scrolls to the hash on navigation.
const NAV_ITEMS = [
  { to: '/#chogots', label: 'Chogots' },
  { to: '/#infinity-space', label: 'Infinity Space' },
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
];

export default function SiteHeader() {
  return (
    <header className="site-header-bar">
      <Link to="/" className="brand-mark">Squalrus Games</Link>
      <nav className="site-nav" aria-label="Main">
        {NAV_ITEMS.map(({ to, label }) =>
          to.includes('#') ? (
            <Link key={to} to={to} className="nav-link">{label}</Link>
          ) : (
            <NavLink key={to} to={to} className="nav-link">{label}</NavLink>
          )
        )}
      </nav>
    </header>
  );
}
