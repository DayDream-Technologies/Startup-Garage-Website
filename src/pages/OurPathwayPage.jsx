import HeroSection from '../components/sections/HeroSection.jsx';
import PathwaySteps from '../components/sections/PathwaySteps.jsx';
import BulletSection from '../components/sections/BulletSection.jsx';
import StoryFeature from '../components/sections/StoryFeature.jsx';
import CtaBanner from '../components/sections/CtaBanner.jsx';
import Cta from '../components/common/Cta.jsx';
import { ourPathwayContent } from '../content/pages/ourPathway.js';
import './OurPathwayPage.css';

export default function OurPathwayPage() {
  const { hero, why, pathway, whoBelongs, stories, whereToStart, closingCta } =
    ourPathwayContent;

  return (
    <>
      <HeroSection {...hero} />

      <section className="why section section--soft">
        <div className="container container--narrow">
          <span className="eyebrow">{why.eyebrow}</span>
          <h2>{why.title}</h2>
          <p className="lede">{why.body}</p>
          <p>{why.secondary}</p>
        </div>
      </section>

      <PathwaySteps
        eyebrow={pathway.eyebrow}
        title={pathway.title}
        intro={pathway.intro}
        steps={pathway.steps}
        variant="dark"
      />

      <BulletSection
        eyebrow={whoBelongs.eyebrow}
        title={whoBelongs.title}
        intro={whoBelongs.intro}
        items={whoBelongs.items}
        note={whoBelongs.note}
        variant="soft"
      />

      <section className="pathway-stories section">
        <div className="container">
          <header className="pathway-stories__header">
            <span className="eyebrow">{stories.eyebrow}</span>
            <h2>{stories.title}</h2>
            <p className="lede">{stories.intro}</p>
          </header>
          <div className="pathway-stories__list">
            {stories.items.map((story, i) => (
              <StoryFeature key={i} story={story} />
            ))}
          </div>
        </div>
      </section>

      <section id={whereToStart.id} className="where-to-start section section--dark">
        <div className="container">
          <header className="where-to-start__header">
            <span className="eyebrow eyebrow--inverse">{whereToStart.eyebrow}</span>
            <h2>{whereToStart.title}</h2>
            <p className="lede">{whereToStart.intro}</p>
          </header>
          <div className="where-to-start__grid">
            {whereToStart.options.map((option) => (
              <article key={option.title} className="where-to-start__card">
                <h3>{option.title}</h3>
                <p>{option.body}</p>
                <Cta cta={option.cta} variant="ghost" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={closingCta.title}
        body={closingCta.body}
        primaryCta={closingCta.primaryCta}
        secondaryCta={closingCta.secondaryCta}
        variant="accent"
      />
    </>
  );
}
