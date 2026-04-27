import HeroSection from '../components/sections/HeroSection.jsx';
import PathwaySteps from '../components/sections/PathwaySteps.jsx';
import BulletSection from '../components/sections/BulletSection.jsx';
import CtaBanner from '../components/sections/CtaBanner.jsx';
import Cta from '../components/common/Cta.jsx';
import { homeContent } from '../content/pages/home.js';
import './HomePage.css';

export default function HomePage() {
  const { hero, pathway, forgeCallout, belong, stories, closingCta } = homeContent;

  return (
    <>
      <HeroSection {...hero} />

      <PathwaySteps {...pathway} variant="light" />

      <section className="forge-callout section section--dark">
        <div className="container forge-callout__inner">
          <div className="forge-callout__content">
            <span className="eyebrow eyebrow--inverse">{forgeCallout.eyebrow}</span>
            <h2>{forgeCallout.title}</h2>
            <p className="lede">{forgeCallout.body}</p>
            <p className="forge-callout__note">{forgeCallout.note}</p>
            <Cta cta={forgeCallout.cta} variant="primary" />
          </div>
          <aside className="forge-callout__quote">
            <p>{forgeCallout.pullQuote}</p>
            <span>— {forgeCallout.pullAttribution}</span>
          </aside>
        </div>
      </section>

      <BulletSection
        eyebrow={belong.eyebrow}
        title={belong.title}
        items={belong.items}
        note={belong.note}
        variant="soft"
      />

      <section className="stories section">
        <div className="container">
          <header className="stories__header">
            <span className="eyebrow">{stories.eyebrow}</span>
            <h2>{stories.title}</h2>
            <p className="lede">{stories.intro}</p>
          </header>
          <div className="stories__grid">
            {stories.items.map((item, i) => (
              <figure key={i} className="story-card">
                {item.placeholder && (
                  <span className="story-card__tag">Placeholder</span>
                )}
                <blockquote>{item.quote}</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{item.venture}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={closingCta.title}
        body={closingCta.body}
        primaryCta={closingCta.primaryCta}
        secondaryCta={closingCta.secondaryCta}
        variant="dark"
      />
    </>
  );
}
