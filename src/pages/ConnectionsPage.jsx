import HeroSection from '../components/sections/HeroSection.jsx';
import FeatureGrid from '../components/sections/FeatureGrid.jsx';
import CtaBanner from '../components/sections/CtaBanner.jsx';
import Cta from '../components/common/Cta.jsx';
import { connectionsContent } from '../content/pages/connections.js';
import './ConnectionsPage.css';

export default function ConnectionsPage() {
  const {
    hero,
    comparison,
    howItWorks,
    categories,
    featuredMentors,
    closingCta,
  } = connectionsContent;

  return (
    <>
      <HeroSection {...hero} />

      <section className="comparison section section--soft">
        <div className="container">
          <header className="comparison__header">
            <span className="eyebrow">{comparison.eyebrow}</span>
            <h2>{comparison.title}</h2>
            <p className="lede">{comparison.intro}</p>
          </header>
          <div className="comparison__grid">
            {comparison.columns.map((col) => (
              <article key={col.label} className="comparison__col">
                <header>
                  <p className="comparison__label">{col.label}</p>
                  <p className="comparison__tagline">{col.tagline}</p>
                </header>
                {col.sections.map((s) => (
                  <div key={s.heading} className="comparison__section">
                    <h4>{s.heading}</h4>
                    <p>{s.body}</p>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id={howItWorks.id} className="how-it-works section">
        <div className="container">
          <header className="how-it-works__header">
            <span className="eyebrow">{howItWorks.eyebrow}</span>
            <h2>{howItWorks.title}</h2>
            <p className="lede">{howItWorks.intro}</p>
          </header>
          <ol className="how-it-works__steps">
            {howItWorks.steps.map((step) => (
              <li key={step.number} className="how-it-works__step">
                <span className="how-it-works__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="how-it-works__cta">
            <Cta cta={howItWorks.cta} variant="primary" />
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow={categories.eyebrow}
        title={categories.title}
        intro={categories.intro}
        items={categories.items}
        columns={4}
        variant="soft"
      />

      <section className="mentors section section--dark">
        <div className="container">
          <header className="mentors__header">
            <span className="eyebrow eyebrow--inverse">{featuredMentors.eyebrow}</span>
            <h2>{featuredMentors.title}</h2>
            <p className="lede">{featuredMentors.intro}</p>
            <p className="mentors__note">{featuredMentors.note}</p>
          </header>
          <div className="mentors__grid">
            {featuredMentors.items.map((mentor, i) => (
              <article key={i} className="mentor-card">
                {mentor.placeholder && (
                  <span className="mentor-card__tag">Placeholder</span>
                )}
                <div className="mentor-card__avatar" aria-hidden="true">
                  <span>
                    {mentor.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')
                      .slice(0, 2)}
                  </span>
                </div>
                <h3>{mentor.name}</h3>
                <p className="mentor-card__focus">{mentor.focus}</p>
                <p>{mentor.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={closingCta.title}
        body={closingCta.body}
        note={closingCta.note}
        primaryCta={closingCta.primaryCta}
        variant="accent"
      />
    </>
  );
}
