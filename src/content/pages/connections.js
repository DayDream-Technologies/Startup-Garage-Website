import { externalLinks } from '../siteMeta.js';

export const connectionsContent = {
  hero: {
    eyebrow: 'Coaches & Mentors',
    title: 'The Right Voice at the Right Moment',
    body:
      'Every founder hits a wall. A legal question you can’t Google your way out of. A pitch deck that still isn’t landing. A hiring decision that feels bigger than it should. You don’t have to figure it out alone.',
    secondary:
      'Startup Garage connects you with experienced coaches and vetted mentors who’ve walked this road and want to walk it with you. Free for all participants. Personally matched. No public booking links, no cold outreach — just the right conversation at the right time.',
    primaryCta: { label: 'Request a Connection', href: externalLinks.intakeForm },
    secondaryCta: { label: 'See How It Works', to: '#how-it-works' },
  },
  comparison: {
    eyebrow: 'Coaches vs. Mentors',
    title: 'Two Words, Used on Purpose',
    intro:
      'Coaches and mentors play different roles in a founder’s journey. Knowing the difference helps you ask for what you actually need — and helps us match you well.',
    columns: [
      {
        label: 'Coaches',
        tagline: 'Targeted help, when you need it',
        sections: [
          {
            heading: 'What they are',
            body: 'Industry experts who step in for a specific question, project, or short season.',
          },
          {
            heading: 'When to ask for one',
            body:
              'You need focused help. A go-to-market strategy. A pricing gut-check. A pitch deck critique. A marketing plan you can actually follow.',
          },
          {
            heading: 'How it works',
            body:
              'You tell us what you’re working on. We match you to someone in the right area. These coaches offer a 30-minute virtual coaching meeting to guide you with your specific needs.',
          },
        ],
      },
      {
        label: 'Mentors',
        tagline: 'Ongoing relationship, built over time',
        sections: [
          {
            heading: 'What they are',
            body:
              'Deeply vetted leaders who walk with founders over the long haul. Higher bar to become one. Usually seasoned entrepreneurs, operators, or investors themselves.',
          },
          {
            heading: 'When to ask for one',
            body:
              'You’re looking for an intentional, ongoing relationship with someone who learns your business, challenges your thinking, and shows up in the harder seasons.',
          },
          {
            heading: 'How it works',
            body:
              'Mentorship is a thoughtful match and is embedded within our small groups called The Forge. To join a Forge group and be paired with a mentor, apply today.',
          },
        ],
      },
    ],
  },
  howItWorks: {
    id: 'how-it-works',
    eyebrow: 'How It Works',
    title: 'One Path In',
    intro:
      'No awkward cold DMs. No public directories to scroll through. No self-booking. You tell us what you need, and we do the matching so you can focus on the work.',
    steps: [
      {
        number: '1',
        title: 'Tell us what you’re working on',
        body:
          'Fill out the information in our Startup Garage portal. It takes about five minutes. The more specific you are about what you need, the better the match will be.',
      },
      {
        number: '2',
        title: 'We make the match',
        body:
          'A Startup Garage team member reviews your request and connects you with the right coach or mentor from our network. Most founders hear back within a week.',
      },
      {
        number: '3',
        title: 'You meet — free',
        body:
          'Every conversation is free for participants. Always. No surprise fees, no upsells, no hidden program costs. Just real help from someone who’s done it before.',
      },
    ],
    cta: { label: 'Start Your Intake', href: externalLinks.intakeForm },
  },
  categories: {
    eyebrow: 'Coach Categories',
    title: 'Where Our Coaches Can Help',
    intro: 'If your question doesn’t neatly fit one of these categories, ask anyway. We’ll figure it out together.',
    items: [
      {
        title: 'Marketing & Branding',
        body:
          'Positioning, messaging, storytelling, content, social, email, and ads that actually convert.',
      },
      {
        title: 'Legal',
        body:
          'Entity formation, contracts, IP basics, partnership agreements, and common employment questions.',
      },
      {
        title: 'Finance & Accounting',
        body:
          'Bookkeeping, cash flow, pricing, financial modeling, and tax-adjacent questions (for the complicated stuff, we’ll refer you to a pro).',
      },
      {
        title: 'Sales',
        body:
          'Outbound strategy, pipeline design, discovery conversations, closing, and building a repeatable process.',
      },
      {
        title: 'Operations',
        body:
          'Systems, tools, hiring your first teammates, and standing up processes that can actually scale.',
      },
      {
        title: 'Product & Tech',
        body:
          'MVP decisions, tech stack choices, finding developers, user research, and the path to product-market fit.',
      },
      {
        title: 'HR & People',
        body:
          'Hiring, onboarding, team culture, handling tough conversations, and leading well as you grow.',
      },
      {
        title: 'Fundraising',
        body:
          'Readiness check, pitch critique, investor lists, understanding terms, and knowing when not to raise.',
      },
    ],
  },
  featuredMentors: {
    eyebrow: 'Featured Mentors',
    title: 'Meet a Few of Our Forge Mentors',
    intro:
      'Our mentors are some of the most generous, experienced leaders in West Michigan and beyond. They’re here because they’ve built things, lost things, learned plenty, and want to help the next generation of founders do it a little better.',
    note: 'This is a small highlight of our mentor bench — not a full directory. Connections are made through the intake process, not through this page. These mentors lead our small groups called The Forge.',
    items: [
      {
        name: 'Mentor Name',
        focus: 'Focus Area',
        bio: 'Two-to-three sentence bio — professional background plus a personal note about what they care about, who they love to help, or why they say yes to this work.',
        placeholder: true,
      },
      {
        name: 'Mentor Name',
        focus: 'Focus Area',
        bio: 'Two-to-three sentence bio — professional background plus a personal note about what they care about, who they love to help, or why they say yes to this work.',
        placeholder: true,
      },
      {
        name: 'Mentor Name',
        focus: 'Focus Area',
        bio: 'Two-to-three sentence bio — professional background plus a personal note about what they care about, who they love to help, or why they say yes to this work.',
        placeholder: true,
      },
    ],
  },
  closingCta: {
    title: 'One Conversation Can Change Your Week',
    body:
      'Whatever you’re building, there’s probably someone in our network who’s wrestled with exactly what’s on your plate today. Tell us what you need. We’ll take it from there.',
    note: 'Free for all participants. Always.',
    primaryCta: { label: 'Request a Connection', href: externalLinks.intakeForm },
  },
};
