import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

// Game links deep-link to homepage sections; Layout scrolls to the hash on navigation.
const NAV_ITEMS = [
  { to: '/#chogots', label: 'Chogots' },
  { to: '/#infinity-space', label: 'Infinity Space' },
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
];

export default function SiteHeader() {
  // On narrow screens the nav collapses behind a toggle; close it whenever the route or hash changes.
  const [open, setOpen] = useState(false);
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash, key]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`site-header-bar${open ? ' menu-open' : ''}`}>
      <Link to="/" className="brand-mark">Squalrus Games</Link>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6L6 18"/> : <path d="M4 7h16M4 12h16M4 17h16"/>}
        </svg>
      </button>
      <nav id="site-nav" className="site-nav" aria-label="Main">
        {NAV_ITEMS.map(({ to, label }) =>
          to.includes('#') ? (
            <Link key={to} to={to} className="nav-link" onClick={() => setOpen(false)}>{label}</Link>
          ) : (
            <NavLink key={to} to={to} className="nav-link" onClick={() => setOpen(false)}>{label}</NavLink>
          )
        )}
      </nav>
    </header>
  );
}
