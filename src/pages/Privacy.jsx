import DocPage from '../components/DocPage.jsx';
import { useSeo } from '../lib/seo.js';

export default function Privacy() {
  useSeo({
    title: 'Privacy Policy — Squalrus Games',
    description: "Squalrus Games' privacy policy, covering all our games: what data they collect (none beyond what you send us directly) and how it's used.",
    path: '/privacy',
  });

  return (
    <DocPage crumb="Legal" title="Privacy Policy" meta="Last updated: September 22, 2026">

      <p>SQUALRUS GAMES LLC ("we", "us") publishes games including Infinity Space and Chogots (each, a "Game"). This policy explains what data our Games collect and how it's used.</p>

      <h2>What we collect</h2>
      <p>None of our Games require an account or collect personal information. Gameplay progress and statistics are saved locally on your device only, and are never transmitted to us or any third party.</p>
      <p>If you contact us directly (for example, by email), we receive whatever information you choose to include in that message, such as your email address and its contents. We use this only to respond to you.</p>

      <h2>Third-party services</h2>
      <p>Our Games do not currently integrate any advertising, analytics, or in-app purchase services. If that changes for a given Game in a future update, this policy will be updated first, and the relevant store listing (Google Play, Microsoft Store, Steam, or Nintendo eShop) will disclose the change as required by that platform.</p>
      <p>Distribution platforms themselves (e.g. Google Play, Steam) may collect data under their own privacy policies, independent of anything described here.</p>

      <h2>Data retention</h2>
      <p>Since gameplay data stays on your device, you can remove it at any time by uninstalling the relevant Game or clearing its local data through your device's app settings.</p>

      <h2>Children's privacy</h2>
      <p>Our Games do not knowingly collect personal information from anyone, including children.</p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy as our Games evolve. Changes will be posted on this page with an updated revision date.</p>

      <h2>Contact</h2>
      <p>Questions about this policy can be sent to <a href="mailto:games@squalr.us">games@squalr.us</a>.</p>
    </DocPage>
  );
}
