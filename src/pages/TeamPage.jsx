import HeroSection from '../components/sections/HeroSection.jsx';
import ContentNotice from '../components/common/ContentNotice.jsx';
import CtaBanner from '../components/sections/CtaBanner.jsx';
import { teamContent } from '../content/pages/team.js';
import './TeamPage.css';

function PersonCard({ person }) {
  const initials = person.name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 3);

  return (
    <article className={`team-card ${person.placeholder ? 'is-placeholder' : ''}`}>
      {person.placeholder && <span className="team-card__tag">Placeholder</span>}
      {person.image ? (
        <img
          className="team-card__image"
          src={person.image}
          alt={`${person.name} headshot`}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="team-card__avatar" aria-hidden="true">
          {initials}
        </div>
      )}
      <h3>{person.name}</h3>
      <p className="team-card__role">{person.role}</p>
      <p className="team-card__bio">{person.bio}</p>
      {person.linkedin && (
        <a
          className="team-card__link"
          href={person.linkedin}
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn →
        </a>
      )}
    </article>
  );
}

export default function TeamPage() {
  const { hero, notice, staff, board, closingCta, needsFinalContent } = teamContent;

  return (
    <>
      <HeroSection {...hero} />
      <section className="section">
        <div className="container">
          {needsFinalContent && (
            <ContentNotice>
              <p>{notice}</p>
            </ContentNotice>
          )}

          <h2 className="team-section__title">{staff.title}</h2>
          <div className="team-grid">
            {staff.people.map((p, i) => (
              <PersonCard key={`${p.name}-${i}`} person={p} />
            ))}
          </div>

          <h2 className="team-section__title team-section__title--spaced">{board.title}</h2>
          <div className="team-grid">
            {board.people.map((p, i) => (
              <PersonCard key={`${p.name}-${i}`} person={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={closingCta.title}
        body={closingCta.body}
        primaryCta={closingCta.primaryCta}
        variant="accent"
      />
    </>
  );
}
