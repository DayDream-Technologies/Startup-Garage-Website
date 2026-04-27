import { externalLinks } from '../siteMeta.js';

export const resourcesToolsContent = {
  hero: {
    eyebrow: 'Resources & Tools',
    title: 'Tools for the Journey.',
    body:
      'Building a business is hard. A good tool at the right moment can change what’s possible — a template that saves you a week, a worksheet that reframes a stuck question, a checklist that keeps you from forgetting the thing that matters.',
    secondary: 'Everything here is free. Made for faith-driven founders. Designed to be used, not just read.',
    primaryCta: { label: 'Browse the Library', to: '#library' },
    secondaryCta: { label: 'Access More Resources', to: '#sg-portal' },
  },
  howToUse: {
    eyebrow: 'How to Use This Page',
    title: 'What You’ll Find Here',
    intro:
      'This is our growing library of downloadable guides and templates for early-stage founders. Practical documents you can fill in, print out, or build from. Everything is created by Startup Garage or vetted by our coaches and mentors.',
    items: [
      'Business plan starters, pitch deck templates, and financial model worksheets.',
      'Operations tools — hiring checklists, founder agreements, simple contracts.',
      'Faith-at-work reflection guides and founder rhythms for the long haul.',
      'Decision frameworks for the hardest calls — co-founders, fundraising, scaling, exits.',
    ],
    note:
      'New resources are added as coaches, mentors, and founders contribute. If something you need isn’t here yet, let us know.',
  },
  library: {
    id: 'library',
    eyebrow: 'Resource Library',
    title: 'Browse the Library',
    intro: 'Filter by topic to find what you need. Click any card to download.',
    topics: [
      'All',
      'Starting Up',
      'Funding',
      'Operations',
      'Marketing',
      'Leadership',
      'Faith & Work',
      'Legal & Finance',
    ],
    formats: ['All Formats', 'Guide', 'Template', 'Worksheet', 'Checklist'],
    emptyState: {
      title: 'The first resources land here soon.',
      body: 'Want to be notified when new guides drop? Join the list and we’ll send a note when the next one is ready.',
      cta: { label: 'Join the Resource List', href: externalLinks.emailSignup },
    },
    items: [
      // Library starts intentionally empty per spec; structure below is ready when uploads begin.
      // Example (commented for reference):
      // {
      //   format: 'TEMPLATE',
      //   title: 'Pitch Deck Starter for Faith-Driven Founders',
      //   description:
      //     'A 10-slide deck built for early-stage founders who want to tell a clear story without losing what makes their venture distinct.',
      //   topics: ['Funding', 'Starting Up', 'Faith & Work'],
      //   downloadHref: '#',
      // },
    ],
  },
  portal: {
    id: 'sg-portal',
    eyebrow: 'SG Portal',
    title: 'More Resources. One Conversation Away.',
    body:
      'Beyond the public library, Startup Garage maintains a deeper portal of curated resources — deal templates, vetted vendor lists, founder playbooks, partner introductions, and more. These are tools we’ve built or sourced for founders who are actively building.',
    secondary:
      'Access starts with a conversation. Book a short meeting with our Executive Director to talk through what you’re working on and what would actually be useful. If it’s a fit, you’ll get access to the portal at the end of the call.',
    audience: {
      title: 'Who This Is For',
      items: [
        'Founders actively building a venture who need more than starter-level tools.',
        'Faith-driven entrepreneurs looking for vetted partners and introductions.',
        'Second-time founders who’ve outgrown generic startup content.',
        'Anyone who’s been around SG and is ready for the next layer.',
      ],
    },
    primaryCta: { label: 'Book a Meeting with the Executive Director', href: externalLinks.edScheduling },
    secondaryCta: { label: 'Ask a Question First', href: externalLinks.contact },
  },
  suggest: {
    eyebrow: 'Suggest a Resource',
    title: 'Something Missing?',
    body:
      'This library grows because founders, coaches, and mentors share what has actually helped them. If you have a resource that belongs here — something you built, something you love, something you wish you’d had earlier — we’d love to see it.',
    cta: { label: 'Suggest a Resource', href: externalLinks.resourceSuggestion },
  },
  closingCta: {
    title: 'Tools Help. People Help More.',
    body:
      'A great template can save you a week. A great conversation can change the direction you’re headed. Both matter. Here’s how to get both.',
    primaryCta: { label: 'Book a Meeting with the Executive Director', href: externalLinks.edScheduling },
    secondaryCta: { label: 'Request a Connection', href: externalLinks.intakeForm },
  },
};
