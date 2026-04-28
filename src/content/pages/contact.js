import { siteMeta } from '../siteMeta.js';

export const contactContent = {
  hero: {
    eyebrow: 'Contact Us',
    title: 'Join a Community That Fuels Faith-Driven Founders',
    body:
      'At Startup Garage, we believe no founder should walk the entrepreneurial journey alone. We are here to listen, learn, and come alongside faith-driven founders with support, resources, and encouragement in a biblical community that nurtures both personal and professional growth.',
    secondary:
      'If you are interested in supporting redemptive-minded entrepreneurs as a mentor, speaker, or resource partner, we would love to connect with you too.',
    primaryCta: { label: 'Email Startup Garage', href: `mailto:${siteMeta.contactEmail}` },
  },
  newsletter: {
    eyebrow: 'Newsletter & Email Updates',
    title: 'Subscribe to receive email updates from Startup Garage',
    note: '* indicates required',
  },
  contact: {
    title: 'Connect With Our Leadership Team',
    body:
      'Please share your information below to connect with someone from our leadership team. We look forward to hearing your story and exploring how we can partner with you for lasting kingdom impact.',
    email: siteMeta.contactEmail,
  },
};
