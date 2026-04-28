import HeroSection from '../components/sections/HeroSection.jsx';
import { contactContent } from '../content/pages/contact.js';
import './ContactPage.css';

export default function ContactPage() {
  const { hero, newsletter, contact } = contactContent;

  return (
    <>
      <HeroSection {...hero} />

      <section className="contact-newsletter section section--soft">
        <div className="container container--narrow">
          <span className="eyebrow">{newsletter.eyebrow}</span>
          <h2>{newsletter.title}</h2>
          <p className="contact-newsletter__note">{newsletter.note}</p>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Email Address *
              <input type="email" name="email" required />
            </label>
            <label>
              First Name *
              <input type="text" name="firstName" required />
            </label>
            <label>
              Last Name *
              <input type="text" name="lastName" required />
            </label>
            <button type="submit" className="btn btn--primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="contact-main section">
        <div className="container container--narrow">
          <h2>{contact.title}</h2>
          <p className="lede">{contact.body}</p>
          <p>
            <strong>Startup Garage</strong>
            <br />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
