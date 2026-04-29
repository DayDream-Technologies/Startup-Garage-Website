import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import ConnectionsPage from './pages/ConnectionsPage.jsx';
import TheForgePage from './pages/TheForgePage.jsx';
import OurPathwayPage from './pages/OurPathwayPage.jsx';
import ResourcesToolsPage from './pages/ResourcesToolsPage.jsx';
import OurStoryPage from './pages/OurStoryPage.jsx';
import CoreValuesPage from './pages/CoreValuesPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import StrategicPartnersPage from './pages/StrategicPartnersPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.documentElement.classList.remove('is-scrolling');
  }, [pathname, hash]);

  useEffect(() => {
    const root = document.documentElement;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    let idleTimer = null;
    const hideAfterMs = 900;

    const clearIdle = () => {
      if (idleTimer !== null) {
        window.clearTimeout(idleTimer);
        idleTimer = null;
      }
    };

    const onScroll = () => {
      root.classList.add('is-scrolling');
      clearIdle();
      idleTimer = window.setTimeout(() => {
        root.classList.remove('is-scrolling');
        idleTimer = null;
      }, hideAfterMs);
    };

    const onMqChange = () => {
      if (mq.matches) {
        clearIdle();
        root.classList.remove('is-scrolling');
      }
    };

    if (!mq.matches) {
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    mq.addEventListener('change', onMqChange);

    return () => {
      window.removeEventListener('scroll', onScroll);
      mq.removeEventListener('change', onMqChange);
      clearIdle();
      root.classList.remove('is-scrolling');
    };
  }, []);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Defer to allow page render before scrolling.
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        window.scrollTo({ top: 0, behavior: 'instant' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <ScrollManager />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-pathway" element={<OurPathwayPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/connections" element={<ConnectionsPage />} />
          <Route path="/coaches-mentors" element={<ConnectionsPage />} />
          <Route path="/groups/the-forge" element={<TheForgePage />} />
          <Route path="/the-forge" element={<TheForgePage />} />
          <Route path="/resources-tools" element={<ResourcesToolsPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/core-values" element={<CoreValuesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/strategic-partners" element={<StrategicPartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
