import { Link } from 'react-router-dom';

const arrow = '\u2192';

export default function Cta({
  cta,
  variant = 'primary',
  showArrow = true,
  className = '',
}) {
  if (!cta) return null;
  const label = (
    <>
      {showArrow && <span aria-hidden="true">{arrow}</span>}
      <span>{cta.label}</span>
    </>
  );

  const classes = `btn btn--${variant} ${className}`.trim();

  if (cta.href) {
    const isAnchor = cta.href.startsWith('#');
    if (isAnchor) {
      return (
        <a className={classes} href={cta.href}>
          {label}
        </a>
      );
    }
    return (
      <a
        className={classes}
        href={cta.href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {label}
      </a>
    );
  }

  if (cta.to && cta.to.startsWith('#')) {
    return (
      <a className={classes} href={cta.to}>
        {label}
      </a>
    );
  }

  return (
    <Link className={classes} to={cta.to || '/'}>
      {label}
    </Link>
  );
}
