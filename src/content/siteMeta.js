export const siteMeta = {
  name: 'Startup Garage',
  tagline: 'Expanding Christ-Centered Entrepreneurship',
  description:
    'Startup Garage is a nonprofit equipping early-stage, faith-driven founders through free events, coaching connections, mentorship, and small groups called The Forge.',
  city: 'West Michigan',
  social: {
    instagram: 'https://www.instagram.com/startupgarageorg',
    linkedin: 'https://www.linkedin.com/company/startup-garage-org',
    facebook: 'https://www.facebook.com/startupgarageorg',
    youtube: 'https://www.youtube.com/@startupgarage',
  },
  contactEmail: 'hello@startupgarage.org',
};

// Links for destinations not yet implemented locally.
// Use in-app routes whenever a local page exists.
export const externalLinks = {
  eventsFeed: '/events',
  eventsFull: '/events',
  intakeForm: '/contact',
  forgeApplication: '/contact',
  contact: '/contact',
  blog: 'https://www.startupgarage.org/blog',
  videos: 'https://www.startupgarage.org/videos',
  ourStory: '/our-story',
  studentFounders: 'https://www.startupgarage.org/student-founders',
  mentorsSpeakers: '/connections',
  strategicPartners: '/strategic-partners',
  universityPartnership: '/contact',
  resourceSuggestion: '/contact',
  edScheduling: '/contact',
  emailSignup: '/contact',
};

export const navItems = [
  { label: 'Our Pathway', to: '/our-pathway' },
  { label: 'Events', to: '/events' },
  { label: 'Coaches & Mentors', to: '/connections' },
  { label: 'The Forge', to: '/groups/the-forge' },
  { label: 'Resources & Tools', to: '/resources-tools' },
];

/** Footer “Explore” — mix of internal routes and external URLs still on legacy hosts until migrated */
export const footerExploreLinks = [
  { label: 'Our founding story', to: '/our-story' },
  { label: 'Core values', to: '/core-values' },
  { label: 'Staff & Board', to: '/team' },
  { label: 'Blog', href: externalLinks.blog, external: true },
  { label: 'Videos', href: externalLinks.videos, external: true },
  { label: 'Contact', to: '/contact' },
];

/** Footer “Network” — internal routes preferred where the experience now lives in-app */
export const footerNetworkLinks = [
  { label: 'Mentors & Speakers', to: '/connections' },
  { label: 'Student Founders', href: externalLinks.studentFounders, external: true },
  { label: 'Strategic partners', to: '/strategic-partners' },
];
