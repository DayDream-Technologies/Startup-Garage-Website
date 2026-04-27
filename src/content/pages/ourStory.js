import { externalLinks } from '../siteMeta.js';

/** Final narrative, timeline dates, and imagery TBD — see todo.md */
export const ourStoryContent = {
  needsFinalContent: true,
  hero: {
    eyebrow: 'Our founding story',
    title: 'Why Startup Garage Exists',
    body:
      'Startup Garage began with a conviction: faith-driven founders deserve a community that takes their calling seriously — not as a side note, but as the center of the work. What started as a handful of conversations in West Michigan has grown into a nonprofit pathway of events, coaching, mentorship, and small groups called The Forge.',
    secondary:
      'This page is a working draft. Replace paragraphs below with your approved founding story, key milestones, and named founders or board voices when ready.',
    primaryCta: { label: 'See our pathway', to: '/our-pathway' },
    secondaryCta: { label: 'Get involved', href: externalLinks.contact },
  },
  notice:
    'Replace placeholder copy with the final founding story from leadership or marketing. Add historical photos or illustrations under public/images/our-story/ when available.',
  sections: [
    {
      title: 'The problem we saw',
      paragraphs: [
        'Early-stage founders often feel isolated — especially when they want to build something that honors God, family, and vocation together. Accelerators and pitch nights rarely make space for those questions.',
        '[Add specific examples or statistics your team wants to cite.]',
      ],
    },
    {
      title: 'What we set out to build',
      paragraphs: [
        'A nonprofit that is free to participants, relational at its core, and practical about business — workshops and pitch nights alongside 1:1 coaching and long-haul community in The Forge.',
        '[Add founding date, first event, or pivotal story beat.]',
      ],
    },
    {
      title: 'Where we’re headed',
      paragraphs: [
        'We continue to expand Christ-centered entrepreneurship across West Michigan and beyond — one event, one connection, one Forge group at a time.',
        '[Add vision line or capital campaign framing if applicable.]',
      ],
    },
  ],
};
