import HeroSection from '../components/sections/HeroSection.jsx';
import FeatureGrid from '../components/sections/FeatureGrid.jsx';
import BulletSection from '../components/sections/BulletSection.jsx';
import CtaBanner from '../components/sections/CtaBanner.jsx';
import Cta from '../components/common/Cta.jsx';
import { eventsContent } from '../content/pages/events.js';
import './EventsPage.css';

export default function EventsPage() {
  const { hero, upcoming, types, whatToExpect, university, closingCta } = eventsContent;

  return (
    <>
      <HeroSection {...hero} />

      <section className="events-upcoming section">
        <div className="container">
          <header className="events-upcoming__header">
            <h2>{upcoming.title}</h2>
            <p className="lede">{upcoming.intro}</p>
          </header>
          <div className="events-upcoming__panel">
            <p className="events-upcoming__fallback">{upcoming.fallback}</p>
            <div className="events-upcoming__ctas">
              <Cta cta={upcoming.fallbackCta} variant="primary" />
              <Cta cta={upcoming.feedCta} variant="outline" />
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow={types.eyebrow}
        title={types.title}
        intro={types.intro}
        items={types.items}
        columns={2}
        variant="soft"
      />

      <BulletSection
        eyebrow={whatToExpect.eyebrow}
        title={whatToExpect.title}
        intro={whatToExpect.intro}
        items={whatToExpect.items}
        note={whatToExpect.note}
        variant="light"
      />

      <section id="what-to-expect" className="events-university section section--dark">
        <div className="container events-university__inner">
          <div>
            <span className="eyebrow eyebrow--inverse">{university.eyebrow}</span>
            <h2>{university.title}</h2>
            <p className="lede">{university.body}</p>
            <p className="events-university__closing">{university.closing}</p>
            <Cta cta={university.cta} variant="primary" />
          </div>
          <aside className="events-university__list">
            <h3>{university.list.title}</h3>
            <ul>
              {university.list.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
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
