import HeroSection from '../components/sections/HeroSection.jsx';
import ContentNotice from '../components/common/ContentNotice.jsx';
import { strategicPartnersContent } from '../content/pages/strategicPartners.js';
import './StrategicPartnersPage.css';

export default function StrategicPartnersPage() {
  const { hero, notice, intro, partners, needsFinalContent } = strategicPartnersContent;

  return (
    <>
      <HeroSection {...hero} />
      <section className="section section--soft">
        <div className="container">
          {needsFinalContent && (
            <ContentNotice>
              <p>{notice}</p>
            </ContentNotice>
          )}
          <p className="lede partners-intro">{intro}</p>
          <ul className="partners-grid">
            {partners.map((p, i) => (
              <li key={`${p.name}-${i}`} className={`partner-card ${p.placeholder ? 'is-placeholder' : ''}`}>
                {p.placeholder && <span className="partner-card__tag">Placeholder</span>}
                {p.logo ? (
                  <img
                    className="partner-card__logo"
                    src={p.logo}
                    alt={`${p.name} logo`}
                    loading="lazy"
                  />
                ) : (
                  <div className="partner-card__logo-fallback" aria-hidden="true">
                    Logo
                  </div>
                )}
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                {p.website && (
                  <a
                    className="partner-card__link"
                    href={p.website}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Visit website →
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
