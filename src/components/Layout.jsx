import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';

// React Router doesn't scroll on navigation: jump to the #section if there is one, else the top.
function useScrollOnNavigate() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, key]);
}

// Thin header + footer shared by every route, wrapping whichever page is active.
export default function Layout() {
  useScrollOnNavigate();

  return (
    <>
      <SiteHeader />
      <Outlet />
      <footer className="site-footer">
        <SiteFooter />
      </footer>
    </>
  );
}
