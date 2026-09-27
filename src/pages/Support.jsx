import { Link } from 'react-router-dom';
import DocPage from '../components/DocPage.jsx';
import { useSeo } from '../lib/seo.js';

export default function Support() {
  useSeo({
    title: 'Support — Squalrus Games',
    description: 'Need help with an Infinity Space, Chogots, or another Squalrus Games title? Contact SQUALRUS GAMES support.',
    path: '/support',
  });

  return (
    <DocPage crumb="Help" title="Support" meta="SQUALRUS GAMES LLC">

      <p>Need help with one of our games, found a bug, or have feedback? Email us at <a href="mailto:games@squalr.us">games@squalr.us</a> — let us know which game you're writing about — and we'll get back to you.</p>

      <h2>When reporting a problem</h2>
      <p>Including the following helps us track down issues faster:</p>
      <ul>
        <li>Which game you're playing (Infinity Space, Chogots, etc.)</li>
        <li>Your device model and OS version</li>
        <li>The app version, if shown in the game's menus</li>
        <li>What you were doing when the problem happened</li>
        <li>A screenshot or screen recording, if possible</li>
      </ul>

      <h2>Privacy</h2>
      <p>See our <Link to="/privacy">Privacy Policy</Link> for details on what data our games collect (in short: none beyond what you send us directly).</p>
    </DocPage>
  );
}
