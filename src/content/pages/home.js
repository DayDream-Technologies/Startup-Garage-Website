import { externalLinks } from '../siteMeta.js';

export const homeContent = {
  hero: {
    eyebrow: 'A Nonprofit for Faith-Driven Founders',
    title: 'Built for Founders Who Build for More',
    body:
      'Startup Garage is a nonprofit equipping early-stage, faith-driven entrepreneurs to launch real ventures through events, intentional connections, and a small group community called The Forge.',
    secondary: "It's completely free. And it starts with showing up.",
    primaryCta: { label: 'Find an Event', to: '/events' },
    secondaryCta: { label: 'Learn About The Forge', to: '/groups/the-forge' },
  },
  pathway: {
    eyebrow: 'The Pathway',
    title: 'One Pathway. Your Pace.',
    intro:
      "We meet founders where they are. Whether you're still figuring out your idea or ready to go all in, there's a place for you here.",
    steps: [
      {
        number: '01',
        label: 'Events',
        tagline: 'Explore & Learn',
        body:
          'Open to everyone. No application, no commitment. Just come. We host workshops, speaker nights, and pitch competitions throughout the year and partner with local universities to bring these experiences directly to students, campus programs, and the local community.',
        bullets: [
          'Workshops on business, funding, and faith in work',
          'Guest speakers from across industries',
          'Pitch competitions and startup showcases',
          'University and campus program partnerships',
        ],
        cta: { label: 'See Upcoming Events', to: '/events' },
      },
      {
        number: '02',
        label: 'Connections',
        tagline: 'Clarity & Next Steps',
        body:
          "When you're ready for more than a hallway conversation, Connections brings you face-to-face with experienced coaches who can help you think through your next move. Our coaches bring expertise across industries and business stages. We match you based on where you are and what you need — not a public directory or a self-serve booking link. Every connection is intentional.",
        bullets: [
          '1:1 coaching conversations',
          'Matched by expertise and your specific needs',
          'Access to tools and resources to keep you moving',
        ],
        cta: { label: 'Request a Connection', href: externalLinks.intakeForm },
      },
      {
        number: '03',
        label: 'Groups',
        tagline: 'Build & Grow',
        body:
          'The deepest level of Startup Garage. The Forge is where founders stop going it alone. Through mentorship from deeply vetted leaders and access to our small groups called The Forge, you’ll find the community that helps you build your venture and live out your calling.',
        bullets: [
          "Mentorship from leaders who've been where you are",
          'Participation in The Forge, small groups for founders',
          'Special events and curated founder experiences',
        ],
        cta: { label: 'Learn About The Forge', to: '/groups/the-forge' },
        emphasized: true,
      },
    ],
  },
  forgeCallout: {
    eyebrow: 'The Forge',
    title: 'Small groups. Big questions. Built for the long haul.',
    body:
      "The Forge isn't a class or a time-bound cohort. It's a small group of founders who meet regularly, go deep, and walk through the hard parts of building something together. Faith-centered. Relationship-first. Practically grounded.",
    note: 'Spots are limited. Participation is free.',
    cta: { label: 'Apply for The Forge', href: externalLinks.forgeApplication },
    pullQuote:
      "“I didn't know I was lonely until I was in a room full of people building like me.”",
    pullAttribution: 'Forge participant',
  },
  belong: {
    eyebrow: 'Who We Serve',
    title: 'You Belong Here If…',
    note: 'Startup Garage is free for all participants. Always.',
    items: [
      "You have an idea you can't stop thinking about.",
      "You're early-stage and building something from scratch.",
      'You want to build a business that reflects your faith and values.',
      "You're a student, a young professional, or a local community member ready to take the next step.",
      "You're not sure what you are yet, but you want to be around people who are figuring it out too.",
    ],
  },
  stories: {
    eyebrow: 'Founder Stories',
    title: 'What Founders Are Saying',
    intro:
      'Real founders, real stories. These quotes will be replaced with named founders and their ventures before launch.',
    items: [
      {
        name: 'Founder Name',
        venture: 'Venture Name',
        quote:
          'Startup Garage gave me a community when I needed it most. I came in with an idea and left with the people who would help me build it.',
        placeholder: true,
      },
      {
        name: 'Founder Name',
        venture: 'Venture Name',
        quote:
          'My Forge group has become the room I bring the hardest questions to — about the business, about my family, about my faith.',
        placeholder: true,
      },
    ],
  },
  closingCta: {
    title: 'Start with an Event. Take Your Next Step. Find Intentional Community in The Forge.',
    body: 'Startup Garage is open to everyone. Free for all participants. Rooted in West Michigan and growing.',
    primaryCta: { label: 'Find an Event', to: '/events' },
    secondaryCta: { label: 'Get Involved', href: externalLinks.contact },
  },
};
