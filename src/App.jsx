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
