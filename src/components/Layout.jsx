import { Outlet } from 'react-router-dom';
import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';

// Thin header + footer shared by every route, wrapping whichever page is active.
export default function Layout() {
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
