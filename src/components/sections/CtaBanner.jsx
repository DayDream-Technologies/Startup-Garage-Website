import Cta from '../common/Cta.jsx';
import './CtaBanner.css';

export default function CtaBanner({ title, body, note, primaryCta, secondaryCta, variant = 'dark' }) {
  return (
    <section className={`cta-banner cta-banner--${variant}`}>
      <div className="container cta-banner__inner">
        <div className="cta-banner__content">
          {title && <h2 className="cta-banner__title">{title}</h2>}
          {body && <p className="cta-banner__body">{body}</p>}
          {note && <p className="cta-banner__note">{note}</p>}
        </div>
        {(primaryCta || secondaryCta) && (
          <div className="cta-banner__ctas">
            <Cta cta={primaryCta} variant="primary" />
            <Cta cta={secondaryCta} variant={variant === 'dark' ? 'ghost' : 'outline'} />
          </div>
        )}
      </div>
    </section>
  );
}
