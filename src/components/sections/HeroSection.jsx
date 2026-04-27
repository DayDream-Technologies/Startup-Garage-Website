import Cta from '../common/Cta.jsx';
import './HeroSection.css';

export default function HeroSection({
  eyebrow,
  title,
  body,
  secondary,
  primaryCta,
  secondaryCta,
  variant = 'dark',
  align = 'left',
}) {
  const className = `hero hero--${variant} hero--${align}`;
  return (
    <section className={className}>
      <div className="container hero__inner">
        {eyebrow && <span className="eyebrow eyebrow--inverse">{eyebrow}</span>}
        <h1 className="hero__title">{title}</h1>
        {body && <p className="hero__body">{body}</p>}
        {secondary && <p className="hero__secondary">{secondary}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="hero__ctas">
            <Cta cta={primaryCta} variant="primary" />
            <Cta cta={secondaryCta} variant="ghost" />
          </div>
        )}
      </div>
    </section>
  );
}
