import { Link } from 'react-router-dom';
import { useSeo } from '../lib/seo.js';

export default function Careers() {
  useSeo({
    title: 'Careers — Squalrus Games',
    description: 'Squalrus Games has no open positions right now, but we are always interested in collaborating. Email games@squalr.us.',
    path: '/careers',
  });

  return (
    <article className="doc">
      <h1>Careers</h1>
      <p className="updated">SQUALRUS GAMES LLC</p>

      <h2>Open positions</h2>
      <p>None at the moment. Every role at Squalrus Games is currently filled, several of them by <Link to="/about">the same person</Link>.</p>

      <h2>Collaboration</h2>
      <p>That said, we're always open to working with people on the right project. If you're an artist, musician, sound designer, writer, programmer, or anyone else who makes things and likes small, strange games, we'd love to hear from you.</p>

      <p>Same goes if you don't make things but have strong opinions about what we're making. Those are welcome too.</p>

      <p>Email <a href="mailto:games@squalr.us?subject=Collaboration">games@squalr.us</a> with a bit about yourself, what you make, and a link to your work. Our Head of Player Support will read it, and pass it along to the rest of the team with remarkable speed.</p>
    </article>
  );
}
