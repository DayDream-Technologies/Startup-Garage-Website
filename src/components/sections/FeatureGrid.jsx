import './FeatureGrid.css';

export default function FeatureGrid({
  eyebrow,
  title,
  intro,
  items,
  columns = 2,
  variant = 'light',
  numbered = false,
}) {
  return (
    <section className={`feature-grid feature-grid--${variant} section`}>
      <div className="container">
        <header className="feature-grid__header">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2>{title}</h2>}
          {intro && <p className="lede">{intro}</p>}
        </header>
        <div
          className={`feature-grid__items feature-grid__items--cols-${columns}`}
        >
          {items.map((item, i) => (
            <article key={item.title} className="feature-grid__item">
              {numbered && (
                <span className="feature-grid__number">
                  {String(i + 1).padStart(2, '0')}
                </span>
              )}
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
