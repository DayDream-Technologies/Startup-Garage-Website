import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection.jsx';

export default function NotFoundPage() {
  return (
    <>
      <HeroSection
        eyebrow="404"
        title="That page hasn’t been built — yet."
        body="The URL you were looking for doesn’t exist on the new site. Try the pathway, or head back to the homepage."
        primaryCta={{ label: 'Back to Home', to: '/' }}
        secondaryCta={{ label: 'See the Pathway', to: '/our-pathway' }}
      />
      <section className="section">
        <div className="container container--narrow">
          <p>
            If you arrived here from another site or a saved link, please email us at{' '}
            <a href="mailto:hello@startupgarage.org">hello@startupgarage.org</a> and we’ll
            point you to the right page. You can also try{' '}
            <Link to="/events">events</Link>, <Link to="/connections">coaches & mentors</Link>,
            or <Link to="/groups/the-forge">The Forge</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
