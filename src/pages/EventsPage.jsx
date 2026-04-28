/* global __EVENTBRITE_API_KEY__ */
import { useEffect, useState } from 'react';
import HeroSection from '../components/sections/HeroSection.jsx';
import FeatureGrid from '../components/sections/FeatureGrid.jsx';
import BulletSection from '../components/sections/BulletSection.jsx';
import CtaBanner from '../components/sections/CtaBanner.jsx';
import Cta from '../components/common/Cta.jsx';
import { eventsContent } from '../content/pages/events.js';
import './EventsPage.css';

function formatEventDate(value) {
  if (!value) return 'Date TBD';
  try {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(new Date(value));
  } catch {
    return 'Date TBD';
  }
}

function normalizeEventbriteEvent(event) {
  return {
    id: event.id,
    title: event.name?.text || 'Untitled event',
    summary: event.summary || event.description?.text || '',
    start: formatEventDate(event.start?.local),
    url: event.url,
    venue: event.venue?.name || '',
  };
}

export default function EventsPage() {
  const { hero, upcoming, types, whatToExpect, university, closingCta } = eventsContent;
  const [events, setEvents] = useState([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [eventsError, setEventsError] = useState('');

  useEffect(() => {
    let mounted = true;

    const loadEvents = async () => {
      const apiKey = (typeof __EVENTBRITE_API_KEY__ === 'string' && __EVENTBRITE_API_KEY__) || '';
      if (!apiKey) {
        if (mounted) {
          setEventsError('Event feed is not configured yet.');
          setEventsLoading(false);
        }
        return;
      }

      try {
        const orgRes = await fetch('https://www.eventbriteapi.com/v3/users/me/organizations/', {
          headers: { Authorization: `Bearer ${apiKey}` },
        });
        if (!orgRes.ok) throw new Error('Failed loading organizations');
        const orgData = await orgRes.json();
        const organizationId = orgData?.organizations?.[0]?.id;
        if (!organizationId) throw new Error('No Eventbrite organization found');

        const eventsRes = await fetch(
          `https://www.eventbriteapi.com/v3/organizations/${organizationId}/events/?status=live&order_by=start_asc&expand=venue`,
          { headers: { Authorization: `Bearer ${apiKey}` } }
        );
        if (!eventsRes.ok) throw new Error('Failed loading events');
        const eventsData = await eventsRes.json();
        const normalized = (eventsData?.events || []).map(normalizeEventbriteEvent);

        if (mounted) {
          setEvents(normalized);
          setEventsError('');
          setEventsLoading(false);
        }
      } catch {
        if (mounted) {
          setEventsError('We could not load live events right now.');
          setEventsLoading(false);
        }
      }
    };

    loadEvents();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <HeroSection {...hero} />

      <section className="events-upcoming section">
        <div className="container">
          <header className="events-upcoming__header">
            <h2>{upcoming.title}</h2>
            <p className="lede">{upcoming.intro}</p>
          </header>
          <div className="events-upcoming__panel">
            {eventsLoading && <p className="events-upcoming__fallback">Loading live events...</p>}

            {!eventsLoading && events.length > 0 && (
              <div className="events-upcoming__list">
                {events.map((event) => (
                  <article key={event.id} className="events-upcoming__item">
                    <h3>{event.title}</h3>
                    <p className="events-upcoming__meta">
                      {event.start}
                      {event.venue ? ` · ${event.venue}` : ''}
                    </p>
                    {event.summary && <p>{event.summary}</p>}
                    <a
                      className="events-upcoming__link"
                      href={event.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      View event
                    </a>
                  </article>
                ))}
              </div>
            )}

            {!eventsLoading && events.length === 0 && (
              <p className="events-upcoming__fallback">{upcoming.fallback}</p>
            )}

            {!eventsLoading && eventsError && (
              <p className="events-upcoming__fallback">{eventsError}</p>
            )}

            <div className="events-upcoming__ctas">
              <Cta cta={upcoming.fallbackCta} variant="primary" />
              <Cta cta={upcoming.feedCta} variant="outline" />
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow={types.eyebrow}
        title={types.title}
        intro={types.intro}
        items={types.items}
        columns={2}
        variant="soft"
      />

      <BulletSection
        eyebrow={whatToExpect.eyebrow}
        title={whatToExpect.title}
        intro={whatToExpect.intro}
        items={whatToExpect.items}
        note={whatToExpect.note}
        variant="light"
      />

      <section id="what-to-expect" className="events-university section section--dark">
        <div className="container events-university__inner">
          <div>
            <span className="eyebrow eyebrow--inverse">{university.eyebrow}</span>
            <h2>{university.title}</h2>
            <p className="lede">{university.body}</p>
            <p className="events-university__closing">{university.closing}</p>
            <Cta cta={university.cta} variant="primary" />
          </div>
          <aside className="events-university__list">
            <h3>{university.list.title}</h3>
            <ul>
              {university.list.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <CtaBanner
        title={closingCta.title}
        body={closingCta.body}
        note={closingCta.note}
        primaryCta={closingCta.primaryCta}
        variant="accent"
      />
    </>
  );
}
