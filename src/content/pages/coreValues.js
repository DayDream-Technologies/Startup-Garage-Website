import { externalLinks } from '../siteMeta.js';

/** Official value statements and icons TBD — see todo.md */
export const coreValuesContent = {
  needsFinalContent: true,
  hero: {
    eyebrow: 'Core values',
    title: 'What We Stand For',
    body:
      'These values guide how Startup Garage shows up for founders, volunteers, partners, and the wider community. Replace the draft cards below with your board-approved list and definitions.',
    primaryCta: { label: 'Our pathway', to: '/our-pathway' },
    secondaryCta: { label: 'Contact us', href: externalLinks.contact },
  },
  notice:
    'Confirm the exact list of values, order, and wording with the board. Optional: add an icon or small illustration per value under public/images/values/.',
  intro:
    'Draft placeholders — edit in src/content/pages/coreValues.js once leadership signs off.',
  values: [
    {
      title: 'Faith-centered',
      body:
        'We believe entrepreneurship is a vocation that can glorify God and serve neighbors — not a compartment separate from spiritual life.',
    },
    {
      title: 'Founder-first',
      body:
        'We meet founders where they are: curious students, first-time builders, and seasoned operators who still need a table.',
    },
    {
      title: 'Generosity & access',
      body:
        'Programs are free to participants. Coaches and mentors give time because they have been given much.',
    },
    {
      title: 'Truth in community',
      body:
        'We make space for honest questions about business, family, and faith — in rooms where nothing leaves without trust.',
    },
    {
      title: 'Excellence with humility',
      body:
        'We bring serious tools and practitioners while remembering that every venture is a work in progress.',
    },
  ],
};
