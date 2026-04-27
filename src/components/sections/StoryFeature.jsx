import './StoryFeature.css';

export default function StoryFeature({ story }) {
  const { marker, subtitle, quote, body, meta, reverse, placeholder } = story;
  return (
    <article className={`story-feature ${reverse ? 'is-reverse' : ''}`}>
      <div className="story-feature__media" aria-hidden="true">
        <div className="story-feature__media-inner">
          <span className="story-feature__marker">{marker}</span>
          <span className="story-feature__subtitle">{subtitle}</span>
        </div>
      </div>
      <div className="story-feature__content">
        {placeholder && <span className="story-feature__placeholder">Placeholder</span>}
        <blockquote className="story-feature__quote">{quote}</blockquote>
        <p className="story-feature__body">{body}</p>
        {meta && <p className="story-feature__meta">{meta}</p>}
      </div>
    </article>
  );
}
