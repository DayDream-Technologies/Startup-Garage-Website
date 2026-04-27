import { externalLinks } from '../siteMeta.js';

/** Staff roster, board list, bios, and headshots TBD — see todo.md */
export const teamContent = {
  needsFinalContent: true,
  hero: {
    eyebrow: 'Who we are',
    title: 'Staff & Board of Directors',
    body:
      'Startup Garage is led by a small staff and governed by a board committed to the mission. The lists below are structural placeholders until names, titles, bios, and photos are provided.',
    primaryCta: { label: 'Our founding story', to: '/our-story' },
    secondaryCta: { label: 'Strategic partners', to: '/strategic-partners' },
  },
  notice:
    'Add each staff and board member with approved bio, role, optional LinkedIn, and headshot (square crop, ~800px) under public/images/team/. Remove placeholder rows when real data is entered.',
  staff: {
    title: 'Staff',
    people: [
      {
        name: 'Role title (e.g. Executive Director)',
        role: 'Title',
        bio: 'Short bio — background, why Startup Garage, one line on what they lead.',
        image: null,
        linkedin: null,
        placeholder: true,
      },
    ],
  },
  board: {
    title: 'Board of Directors',
    people: [
      {
        name: 'Board member name',
        role: 'Board role (e.g. Chair, Treasurer)',
        bio: 'One to two sentences — professional context and connection to the mission.',
        image: null,
        linkedin: null,
        placeholder: true,
      },
      {
        name: 'Board member name',
        role: 'Member',
        bio: 'One to two sentences.',
        image: null,
        linkedin: null,
        placeholder: true,
      },
    ],
  },
  closingCta: {
    title: 'Serve alongside us',
    body:
      'Interested in volunteering, joining a committee, or exploring board service? Reach out and tell us how you would like to help.',
    primaryCta: { label: 'Contact Startup Garage', href: externalLinks.contact },
  },
};
