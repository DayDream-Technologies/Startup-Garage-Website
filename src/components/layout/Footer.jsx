import { Link } from 'react-router-dom';
import { externalLinks, navItems, siteMeta } from '../../content/siteMeta.js';
import './Footer.css';

const exploreLinks = [
  { label: 'Our Story', href: externalLinks.ourStory, external: true },
  { label: 'Blog', href: externalLinks.blog, external: true },
  { label: 'Videos', href: externalLinks.videos, external: true },
  { label: 'Contact', href: externalLinks.contact, external: true },
];

const networkLinks = [
  { label: 'Mentors & Speakers', href: externalLinks.mentorsSpeakers, external: true },
  { label: 'Student Founders', href: externalLinks.studentFounders, external: true },
  { label: 'Strategic Partners', href: externalLinks.strategicPartners, external: true },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <p className="site-footer__brand-name">Startup Garage</p>
          <p className="site-footer__tag">{siteMeta.tagline}</p>
          <p className="site-footer__description">{siteMeta.description}</p>
          <p className="site-footer__free">Free for all participants. Always.</p>
        </div>

        <nav className="site-footer__col" aria-label="Pathway">
          <h4 className="site-footer__heading">Pathway</h4>
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="site-footer__col" aria-label="Explore">
          <h4 className="site-footer__heading">Explore</h4>
          <ul>
            {exploreLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer noopener">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="site-footer__col" aria-label="Network">
          <h4 className="site-footer__heading">Network</h4>
          <ul>
            {networkLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer noopener">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container site-footer__bottom">
        <p>
          © {year} {siteMeta.name}. Rooted in {siteMeta.city}.
        </p>
        <div className="site-footer__social">
          <a href={siteMeta.social.instagram} target="_blank" rel="noreferrer noopener">
            Instagram
          </a>
          <a href={siteMeta.social.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <a href={siteMeta.social.facebook} target="_blank" rel="noreferrer noopener">
            Facebook
          </a>
          <a href={siteMeta.social.youtube} target="_blank" rel="noreferrer noopener">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
