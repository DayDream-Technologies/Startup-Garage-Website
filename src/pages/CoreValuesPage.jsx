import HeroSection from '../components/sections/HeroSection.jsx';
import FeatureGrid from '../components/sections/FeatureGrid.jsx';
import ContentNotice from '../components/common/ContentNotice.jsx';
import { coreValuesContent } from '../content/pages/coreValues.js';
import './AboutSubpages.css';

export default function CoreValuesPage() {
  const { hero, notice, intro, values, needsFinalContent } = coreValuesContent;

  return (
    <>
      <HeroSection {...hero} />
      <section className="section section--soft">
        <div className="container">
          {needsFinalContent && (
            <ContentNotice>
              <p>{notice}</p>
            </ContentNotice>
          )}
          <p className="lede about-values__intro">{intro}</p>
        </div>
      </section>
      <FeatureGrid items={values} columns={2} variant="soft" />
    </>
  );
}
