import { externalLinks } from '../siteMeta.js';

/** Partner logos, descriptions, and URLs TBD — see todo.md */
export const strategicPartnersContent = {
  needsFinalContent: true,
  hero: {
    eyebrow: 'Strategic partners',
    title: 'Organizations That Fuel the Mission',
    body:
      'Strategic partners extend what Startup Garage can offer founders — through funding, in-kind support, venues, expertise, and prayer. Replace the placeholder cards with real partners and their stories.',
    primaryCta: { label: 'Become a partner', href: externalLinks.contact },
    secondaryCta: { label: 'Student founders', href: externalLinks.studentFounders },
  },
  notice:
    'Collect each partner’s one-line description, optional website URL, and logo (SVG or PNG on transparent background, max width ~400px) under public/images/partners/.',
  intro:
    'Draft layout only. Swap `partners` array entries for real organizations.',
  partners: [
    {
      name: 'Partner organization',
      description:
        'How they support Startup Garage — e.g. event sponsorship, mentor pipeline, university collaboration.',
      website: null,
      logo: null,
      placeholder: true,
    },
    {
      name: 'Partner organization',
      description: 'Short description of the partnership.',
      website: null,
      logo: null,
      placeholder: true,
    },
    {
      name: 'Partner organization',
      description: 'Short description of the partnership.',
      website: null,
      logo: null,
      placeholder: true,
    },
  ],
};
