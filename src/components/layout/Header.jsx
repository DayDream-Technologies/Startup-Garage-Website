import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { navItems, siteMeta } from '../../content/siteMeta.js';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand" aria-label={`${siteMeta.name} home`}>
          <img
            className="site-header__brand-logo"
            src="/images/startup-garage-logo.png"
            alt="Startup Garage"
          />
        </Link>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className={`hamburger ${open ? 'is-open' : ''}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          id="site-nav"
          className={`site-header__nav ${open ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `site-header__link ${isActive ? 'is-active' : ''}`
                  }
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link className="btn btn--primary site-header__cta" to="/events">
            Find an Event
          </Link>
        </nav>
      </div>
    </header>
  );
}
