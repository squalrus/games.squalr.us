import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import SqualrusMark from './SqualrusMark.jsx';

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
      <Link to="/" className="brand-mark" aria-label="Squalrus Games home">
        <SqualrusMark size={32} />
        <span className="brand-word">Squalrus</span>
        <span className="brand-tag px">Games</span>
      </Link>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="20" height="20" viewBox="0 0 10 10" shapeRendering="crispEdges" fill="currentColor" aria-hidden="true">
          {open
            ? <path d="M1 1h2v1h-2zM2 2h2v1h-2zM3 3h1v1h-1zM4 4h2v2h-2zM6 3h1v1h-1zM6 2h2v1h-2zM7 1h2v1h-2zM3 6h1v1h-1zM2 7h2v1h-2zM1 8h2v1h-2zM6 6h1v1h-1zM6 7h2v1h-2zM7 8h2v1h-2z"/>
            : <path d="M1 2h8v1h-8zM1 5h8v1h-8zM1 8h8v1h-8z"/>}
        </svg>
      </button>
      <nav id="site-nav" className="site-nav" aria-label="Main">
        {NAV_ITEMS.map(({ to, label }) =>
          to.includes('#') ? (
            <Link key={to} to={to} className="nav-link" onClick={() => setOpen(false)}>{label}</Link>
          ) : (
            <NavLink key={to} to={to} className="nav-link" onClick={() => setOpen(false)}>
              <span className="cursor blink" aria-hidden="true">▶</span>{label}
            </NavLink>
          )
        )}
        <a className="nav-link nav-link--external" href="https://squalr.us/">
          squalr.us <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
