import Cta from '../common/Cta.jsx';
import './PathwaySteps.css';

export default function PathwaySteps({ eyebrow, title, intro, steps, variant = 'light' }) {
  return (
    <section className={`pathway pathway--${variant} section`}>
      <div className="container">
        <header className="pathway__header">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2>{title}</h2>}
          {intro && <p className="lede">{intro}</p>}
        </header>
        <ol className="pathway__steps">
          {steps.map((step) => (
            <li
              key={step.number}
              className={`pathway__step ${step.emphasized ? 'is-emphasized' : ''}`}
            >
              <div className="pathway__step-head">
                <span className="pathway__number">{step.number}</span>
                <div>
                  <p className="pathway__label">{step.label}</p>
                  {step.tagline && <p className="pathway__tagline">{step.tagline}</p>}
                </div>
              </div>
              <p className="pathway__body">{step.body}</p>
              {step.secondary && <p className="pathway__secondary">{step.secondary}</p>}
              {step.bullets && (
                <ul className="pathway__bullets">
                  {step.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {step.cta && (
                <div className="pathway__cta">
                  <Cta cta={step.cta} variant={step.emphasized ? 'primary' : 'outline'} />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
