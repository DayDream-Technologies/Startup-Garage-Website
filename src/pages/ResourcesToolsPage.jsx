import HeroSection from '../components/sections/HeroSection.jsx';
import BulletSection from '../components/sections/BulletSection.jsx';
import ResourceLibrary from '../components/sections/ResourceLibrary.jsx';
import CtaBanner from '../components/sections/CtaBanner.jsx';
import Cta from '../components/common/Cta.jsx';
import { resourcesToolsContent } from '../content/pages/resourcesTools.js';
import './ResourcesToolsPage.css';

export default function ResourcesToolsPage() {
  const { hero, howToUse, library, portal, suggest, closingCta } = resourcesToolsContent;

  return (
    <>
      <HeroSection {...hero} />

      <BulletSection
        eyebrow={howToUse.eyebrow}
        title={howToUse.title}
        intro={howToUse.intro}
        items={howToUse.items}
        note={howToUse.note}
        variant="soft"
      />

      <ResourceLibrary
        id={library.id}
        eyebrow={library.eyebrow}
        title={library.title}
        intro={library.intro}
        topics={library.topics}
        formats={library.formats}
        items={library.items}
        emptyState={library.emptyState}
      />

      <section id={portal.id} className="portal section section--dark">
        <div className="container portal__inner">
          <div className="portal__content">
            <span className="eyebrow eyebrow--inverse">{portal.eyebrow}</span>
            <h2>{portal.title}</h2>
            <p className="lede">{portal.body}</p>
            <p>{portal.secondary}</p>
            <div className="portal__ctas">
              <Cta cta={portal.primaryCta} variant="primary" />
              <Cta cta={portal.secondaryCta} variant="ghost" />
            </div>
          </div>
          <aside className="portal__audience">
            <h3>{portal.audience.title}</h3>
            <ul>
              {portal.audience.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="suggest section section--soft">
        <div className="container container--narrow suggest__inner">
          <span className="eyebrow">{suggest.eyebrow}</span>
          <h2>{suggest.title}</h2>
          <p className="lede">{suggest.body}</p>
          <Cta cta={suggest.cta} variant="primary" />
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
