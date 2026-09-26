import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSeo } from '../lib/seo.js';

// Headshots live in public/team/. Every role shares one photo for now; give a role its own by changing `photo`.
const DEFAULT_PHOTO = '/team/chad.jpg';

const TEAM = [
  {
    photo: DEFAULT_PHOTO,
    slug: 'ceo',
    role: 'Founder & CEO',
    bio: 'Sets the vision, then immediately second-guesses it. Has never lost a vote in a board meeting.',
  },
  {
    photo: DEFAULT_PHOTO,
    slug: 'lead-programmer',
    role: 'Lead Programmer',
    bio: 'Writes all of the code, and therefore all of the bugs. Calls this "vertical integration."',
  },
  {
    photo: DEFAULT_PHOTO,
    slug: 'qa',
    role: 'Head of QA',
    bio: 'Files bug reports against the Lead Programmer. The two are not currently speaking.',
  },
  {
    photo: DEFAULT_PHOTO,
    slug: 'marketing',
    role: 'Director of Marketing',
    bio: 'Built this website. Considers you reading this sentence a significant win for the department.',
  },
  {
    photo: DEFAULT_PHOTO,
    slug: 'cfo',
    role: 'Chief Financial Officer',
    bio: 'Approved the $200 LLC filing fee and is still recovering. Guards the coffee budget with their life.',
  },
  {
    photo: DEFAULT_PHOTO,
    slug: 'player-support',
    role: 'Head of Player Support',
    bio: 'Personally reads every email sent to games@squalr.us, largely because nobody else will.',
  },
];

const NAME = 'Chad Schulz';

function Headshot({ photo, role }) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return <div className="team-photo team-photo--placeholder" aria-hidden="true">CS</div>;
  }
  return (
    <img
      className="team-photo"
      src={photo}
      alt={`${NAME}, ${role}`}
      loading="lazy"
      onError={() => setMissing(true)}
    />
  );
}

export default function About() {
  useSeo({
    title: 'About — Squalrus Games',
    description: 'Squalrus Games is an independent studio in Seattle, Washington making small games, trying strange ideas, and building software no one asked for.',
    path: '/about',
  });

  return (
    <article className="doc">
      <h1>About</h1>
      <p className="updated">SQUALRUS GAMES LLC · Seattle, Washington</p>

      <p>Squalrus Games is an independent studio based in Seattle, Washington. We make small games, try out strange ideas, and build software that no one asked for — then finish it anyway, out of spite.</p>

      <p>Our games are self-published and deliberately small. A creature that is probably fine. A space shooter that goes on forever. We aim for entertaining, occasionally sarcastic, and fun to play for more than one sitting. If that sounds like a low bar, that's intentional; we like to clear it.</p>

      <p>See what we're working on: <Link to="/#chogots">Chogots</Link> and <Link to="/#infinity-space">Infinity Space</Link>.</p>

      <h2>The team</h2>
      <p>A small but dedicated staff, each a specialist in their field.</p>

      <ul className="team-grid">
        {TEAM.map(({ slug, photo, role, bio }) => (
          <li key={slug} className="team-card">
            <Headshot photo={photo} role={role} />
            <div className="team-name">{NAME}</div>
            <div className="team-role">{role}</div>
            <p className="team-bio">{bio}</p>
          </li>
        ))}
      </ul>

      <p className="fine-print">Any resemblance between team members is purely coincidental. Interested in making it less coincidental? See <Link to="/careers">Careers</Link>.</p>
    </article>
  );
}
