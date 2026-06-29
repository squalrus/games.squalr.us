import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter.jsx';

export default function Support() {
  useEffect(() => {
    document.title = 'Support — Infinity Space';
    document.body.classList.add('legal-page');
    return () => document.body.classList.remove('legal-page');
  }, []);

  return (
    <>
      <Link className="back-link" to="/">&larr; Infinity Space</Link>

      <article className="doc">
        <h1>Support</h1>
        <p className="updated">SQUALRUS GAMES LLC</p>

        <p>Need help with Infinity Space, found a bug, or have feedback? Email us at <a href="mailto:games@squalr.us">games@squalr.us</a> and we'll get back to you.</p>

        <h2>When reporting a problem</h2>
        <p>Including the following helps us track down issues faster:</p>
        <ul>
          <li>Your device model and OS version</li>
          <li>The app version (shown on the main menu / pause menu)</li>
          <li>What you were doing when the problem happened</li>
          <li>A screenshot or screen recording, if possible</li>
        </ul>

        <h2>Privacy</h2>
        <p>See our <Link to="/privacy">Privacy Policy</Link> for details on what data the game collects (in short: none beyond what you send us directly).</p>
      </article>

      <footer className="site-footer">
        <SiteFooter />
      </footer>
    </>
  );
}
