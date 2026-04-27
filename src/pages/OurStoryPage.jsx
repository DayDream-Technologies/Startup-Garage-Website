import HeroSection from '../components/sections/HeroSection.jsx';
import ContentNotice from '../components/common/ContentNotice.jsx';
import { ourStoryContent } from '../content/pages/ourStory.js';
import './AboutSubpages.css';

export default function OurStoryPage() {
  const { hero, notice, sections, needsFinalContent } = ourStoryContent;

  return (
    <>
      <HeroSection {...hero} />
      <section className="about-prose section">
        <div className="container container--narrow">
          {needsFinalContent && (
            <ContentNotice>
              <p>{notice}</p>
            </ContentNotice>
          )}
          {sections.map((sec) => (
            <article key={sec.title} className="about-prose__block">
              <h2>{sec.title}</h2>
              {sec.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
