import HeroSection from '../components/sections/HeroSection.jsx';
import FeatureGrid from '../components/sections/FeatureGrid.jsx';
import BulletSection from '../components/sections/BulletSection.jsx';
import CtaBanner from '../components/sections/CtaBanner.jsx';
import Cta from '../components/common/Cta.jsx';
import { theForgeContent } from '../content/pages/theForge.js';
import './TheForgePage.css';

export default function TheForgePage() {
  const { hero, whatItIs, whatToExpect, whoItsFor, voice, howToApply, closingCta } =
    theForgeContent;

  return (
    <>
      <HeroSection {...hero} />

      <section className="forge-what section section--soft">
        <div className="container">
          <header className="forge-what__header">
            <span className="eyebrow">{whatItIs.eyebrow}</span>
            <h2>{whatItIs.title}</h2>
            <p className="lede">{whatItIs.intro}</p>
          </header>
          <div className="forge-what__grid">
            {whatItIs.columns.map((col) => (
              <div key={col.title} className="forge-what__col">
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow={whatToExpect.eyebrow}
        title={whatToExpect.title}
        intro={whatToExpect.intro}
        items={whatToExpect.items}
        columns={2}
        variant="light"
      />

      <BulletSection
        eyebrow={whoItsFor.eyebrow}
        title={whoItsFor.title}
        items={whoItsFor.items}
        note={whoItsFor.note}
        variant="soft"
      />

      <section className="forge-voice section section--dark">
        <div className="container forge-voice__inner">
          <span className="eyebrow eyebrow--inverse">{voice.eyebrow}</span>
          <h2>{voice.title}</h2>
          <blockquote>
            {voice.placeholder && (
              <span className="forge-voice__tag">Placeholder</span>
            )}
            <p>{voice.quote}</p>
            <footer>
              <strong>{voice.name}</strong>
              <span>{voice.venture}</span>
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="forge-apply section">
        <div className="container forge-apply__inner">
          <div>
            <span className="eyebrow">{howToApply.eyebrow}</span>
            <h2>{howToApply.title}</h2>
            <p className="lede">{howToApply.body}</p>
            <p>{howToApply.secondary}</p>
            <Cta cta={howToApply.cta} variant="primary" />
          </div>
          <aside className="forge-apply__timing">
            <h3>{howToApply.timing.title}</h3>
            <p>{howToApply.timing.body}</p>
          </aside>
        </div>
      </section>

      <CtaBanner
        title={closingCta.title}
        body={closingCta.body}
        note={closingCta.note}
        primaryCta={closingCta.primaryCta}
        variant="dark"
      />
    </>
  );
}
