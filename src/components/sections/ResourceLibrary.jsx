import { useMemo, useState } from 'react';
import Cta from '../common/Cta.jsx';
import './ResourceLibrary.css';

export default function ResourceLibrary({
  id,
  eyebrow,
  title,
  intro,
  topics,
  formats,
  items,
  emptyState,
}) {
  const [topic, setTopic] = useState(topics?.[0] || 'All');
  const [format, setFormat] = useState(formats?.[0] || 'All Formats');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return (items || []).filter((item) => {
      const topicMatch = topic === 'All' || item.topics?.includes(topic);
      const formatMatch =
        format === 'All Formats' ||
        (item.format || '').toLowerCase() === format.toLowerCase();
      const haystack =
        `${item.title} ${item.description} ${(item.topics || []).join(' ')}`.toLowerCase();
      const queryMatch = !query || haystack.includes(query.toLowerCase());
      return topicMatch && formatMatch && queryMatch;
    });
  }, [items, topic, format, query]);

  const hasItems = (items || []).length > 0;

  return (
    <section id={id} className="resource-library section">
      <div className="container">
        <header className="resource-library__header">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2>{title}</h2>}
          {intro && <p className="lede">{intro}</p>}
        </header>

        <div className="resource-library__controls" role="region" aria-label="Filter resources">
          <label className="resource-library__search">
            <span className="visually-hidden">Search resources</span>
            <input
              type="search"
              placeholder="Search the library"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <div className="resource-library__chips" role="tablist" aria-label="Topic filter">
            {topics.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={topic === t}
                className={`chip ${topic === t ? 'is-active' : ''}`}
                onClick={() => setTopic(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <label className="resource-library__select">
            <span className="visually-hidden">Format filter</span>
            <select value={format} onChange={(e) => setFormat(e.target.value)}>
              {formats.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </label>
        </div>

        {hasItems && filtered.length > 0 && (
          <ul className="resource-library__grid">
            {filtered.map((item) => (
              <li key={item.title} className="resource-card">
                <span className="resource-card__format">{item.format}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="resource-card__topics">
                  {(item.topics || []).map((t) => (
                    <span key={t} className="resource-card__topic">
                      {t}
                    </span>
                  ))}
                </div>
                {item.downloadHref && (
                  <a
                    className="resource-card__link"
                    href={item.downloadHref}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Download
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}

        {(!hasItems || filtered.length === 0) && emptyState && (
          <div className="resource-library__empty">
            <h3>{emptyState.title}</h3>
            <p>{emptyState.body}</p>
            <Cta cta={emptyState.cta} variant="primary" />
          </div>
        )}
      </div>
    </section>
  );
}
