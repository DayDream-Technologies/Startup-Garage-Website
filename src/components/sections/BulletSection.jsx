import './BulletSection.css';

export default function BulletSection({
  eyebrow,
  title,
  intro,
  items,
  note,
  variant = 'soft',
  align = 'left',
}) {
  return (
    <section className={`bullet-section bullet-section--${variant} section`}>
      <div className={`container ${align === 'center' ? 'bullet-section__center' : ''}`}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h2>{title}</h2>}
        {intro && <p className="lede">{intro}</p>}
        <ul className="bullet-section__list">
          {items.map((item, i) => (
            <li key={i}>
              <span className="bullet-section__bullet" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {note && <p className="bullet-section__note">{note}</p>}
      </div>
    </section>
  );
}
