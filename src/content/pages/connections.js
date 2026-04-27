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
    title: 'Meet Our Mentors & Speakers',
    intro:
      'Our mentors are generous, experienced leaders across West Michigan and beyond. They have built, led, invested, coached, and stayed in the room for founders who need wise next steps.',
    note: 'Connections are made through the intake process. This directory highlights the mentor and speaker network available to Startup Garage founders.',
    items: [
      {
        name: 'Nathan Baar',
        focus: 'FOUNDER / CEO',
        bio: 'HEALTHBAR',
        linkedin: 'https://www.linkedin.com/in/nathanbaar/',
        image: '/images/mentors/nathan-baar.jpeg',
      },
      {
        name: 'Shannon Badgero',
        focus: 'FOUNDER / OWNER / COACH',
        bio: 'ULTIMATE FITNESS & HEALTH',
        linkedin: 'https://www.linkedin.com/in/shannon-badgero-044427233/',
        image: '/images/mentors/shannon-badgero.png',
      },
      {
        name: 'Sara Barco',
        focus: 'FOUNDER / CEO',
        bio: 'TRUE SELF LLC & 52 CONNECTIONS',
        linkedin: 'https://www.linkedin.com/in/sara-barco-468760111/',
        image: '/images/mentors/sara-barco.jpg',
      },
      {
        name: 'Josh Barker',
        focus: 'CEO & MANAGING PARTNER',
        bio: 'CITY INNOVATIONS',
        linkedin: 'https://www.linkedin.com/in/joshuabarker/',
        image: '/images/mentors/josh-barker.jpg',
      },
      {
        name: 'Dayna Beal',
        focus: 'FOUNDER',
        bio: 'STRATEGIC VISION MAPPING',
        linkedin: 'https://www.linkedin.com/in/daynabeal/',
        image: '/images/mentors/dayna-beal.jpeg',
      },
      {
        name: 'Kirk Bierens',
        focus: 'FOUNDER',
        bio: 'WITH',
        linkedin: 'https://www.linkedin.com/in/kirk-bierens-5b5383181/',
        image: '/images/mentors/kirk-bierens.jpg',
      },
      {
        name: 'Taylor Blom',
        focus: 'CO-FOUNDER',
        bio: 'NEXT DOOR PHOTOS',
        linkedin: 'https://www.linkedin.com/in/taylorblom/',
        image: '/images/mentors/taylor-blom.jpeg',
      },
      {
        name: 'Ken Bogard',
        focus: 'FOUNDER',
        bio: 'KNOW HONESTY',
        linkedin: 'https://www.linkedin.com/in/kenbogard/',
        image: '/images/mentors/ken-bogard.jpeg',
      },
      {
        name: 'Sheena Brown',
        focus: 'FOUNDER / CEO',
        bio: 'FATIRAH’S DESIGNS BY SHEENA LLC',
        linkedin: 'https://www.linkedin.com/in/sheena-brown-29a3a4343/',
        image: '/images/mentors/sheena-brown.jpg',
      },
      {
        name: 'Bill Cousineau',
        focus: 'CEO',
        bio: 'THE FULL CIRCLE',
        linkedin: 'https://www.linkedin.com/in/bill-cousineau-mentor/',
        image: '/images/mentors/bill-cousineau.jpg',
      },
      {
        name: 'Chris Cowling',
        focus: 'EXECUTIVE COACH / FACILITATOR',
        bio: 'PATHWAY COACHING / KNOW HONESTY',
        linkedin: 'https://www.linkedin.com/in/pathway-coaching-chris-cowling/',
        image: '/images/mentors/chris-cowling.jpeg',
      },
      {
        name: 'Leann DeKryger',
        focus: 'FOUNDER',
        bio: 'LEANN’S COLLEGE CUPCAKES',
        linkedin: 'https://www.linkedin.com/in/leann-dekryger-837694178/',
        image: '/images/mentors/leann-dekryger.jpg',
      },
      {
        name: 'Nikki Dupont',
        focus: 'FOUNDER',
        bio: 'SIDE DOOR APP',
        linkedin: 'https://www.linkedin.com/in/nikki-dupont-12057b204/',
        image: '/images/mentors/nikki-dupont.jpeg',
      },
      {
        name: 'Leslie Fiorenzo',
        focus: 'FOUNDER / CEO',
        bio: 'BUSINESS SPEAKING SOLUTIONS',
        linkedin: 'https://www.linkedin.com/in/lesliefiorenzo/',
        image: '/images/mentors/leslie-fiorenzo.jpg',
      },
      {
        name: 'Ben & Laura Harrison',
        focus: 'FOUNDERS (CEO & COO)',
        bio: 'JONAS PAUL EYEWEAR',
        linkedin: 'https://www.linkedin.com/in/benkharrison/',
        image: '/images/mentors/ben-amp-laura-harrison.jpg',
      },
      {
        name: 'Dan Hungerford',
        focus: 'FOUNDER',
        bio: 'EVERFRIENDS AI',
        linkedin: 'https://www.linkedin.com/in/daniel-hungerford/',
        image: '/images/mentors/dan-hungerford.png',
      },
      {
        name: 'Joanna Hogan',
        focus: 'FOUNDER / CEO',
        bio: 'INSPIRE GENEROSITY',
        linkedin: 'https://www.linkedin.com/in/inspire-generosity/',
        image: '/images/mentors/joanna-hogan.jpeg',
      },
      {
        name: 'Paul Hontz',
        focus: 'FOUNDER',
        bio: 'THE STARTUP FOUNDRY',
        linkedin: 'https://www.linkedin.com/in/paulhontz/',
        image: '/images/mentors/paul-hontz.jpg',
      },
      {
        name: 'Dave Johnson',
        focus: 'PRESIDENT',
        bio: 'NATIONAL CHRISTIAN FOUNDATION MICHIGAN',
        linkedin: 'https://www.linkedin.com/in/david-johnson-exec-leader/',
        image: '/images/mentors/dave-johnson.jpg',
      },
      {
        name: 'Mark Johnson',
        focus: 'CO-FOUNDER & PARTNER',
        bio: 'MICHIGAN SOFTWARE LABS',
        linkedin: 'https://www.linkedin.com/in/mrmarkjohnson/',
        image: '/images/mentors/mark-johnson.jpg',
      },
      {
        name: 'Mike King',
        focus: 'OWNER',
        bio: 'KING FAMILY CONSULTING',
        linkedin: 'https://www.linkedin.com/in/mike-king-marketing-expert/',
        image: '/images/mentors/mike-king.jpg',
      },
      {
        name: 'Grant Koops',
        focus: 'FOUNDER',
        bio: 'HIVER',
        linkedin: 'https://www.linkedin.com/in/grantkoops/',
        image: '/images/mentors/grant-koops.jpeg',
      },
      {
        name: 'Neil Kraay',
        focus: 'PRESIDENT & CEO',
        bio: 'LEISURE LIVING',
        linkedin: 'https://www.linkedin.com/in/neil-kraay-10949611/',
        image: '/images/mentors/neil-kraay.jpg',
      },
      {
        name: 'Adam Locker',
        focus: 'OWNER',
        bio: 'ELECTRIC HERO',
        linkedin: 'https://www.linkedin.com/in/adam-locker-mba-b226b8148/',
        image: '/images/mentors/adam-locker.jpg',
      },
      {
        name: 'Brett Logan',
        focus: 'CEO & OWNER',
        bio: 'IMMACULATE FLIGHT',
        linkedin: 'https://www.linkedin.com/in/brett-logan-0619b61/',
        image: '/images/mentors/brett-logan.png',
      },
      {
        name: 'Jim Mallekoote',
        focus: 'FORMER SR DIRECTOR OF RETAIL SALES',
        bio: 'APPLE',
        linkedin: 'https://www.linkedin.com/in/jim-mallekoote-b0a408/',
        image: '/images/mentors/jim-mallekoote.jpeg',
      },
      {
        name: 'Junior Martinez',
        focus: 'VP OF GROWTH & STRATEGY',
        bio: 'SIDE DOOR APP',
        linkedin: 'https://www.linkedin.com/in/junior-martinez-7a2a75377/',
        image: '/images/mentors/junior-martinez.jpeg',
      },
      {
        name: 'Jim McClurg',
        focus: 'FOUNDER',
        bio: 'VENTURE CAPITAL',
        linkedin: 'https://www.linkedin.com/in/jimmcclurg/',
        image: '/images/mentors/jim-mcclurg.jpg',
      },
      {
        name: 'Bill McKendry',
        focus: 'FOUNDER & CCO',
        bio: 'BRANDHAVEN',
        linkedin: 'https://www.linkedin.com/in/billmckendry/',
        image: '/images/mentors/bill-mckendry.png',
      },
      {
        name: 'Lord Milan Oiseau',
        focus: 'FOUNDER',
        bio: 'DAY1 MINDSET',
        linkedin: 'https://www.linkedin.com/in/lordmilan/',
        image: '/images/mentors/lord-milan-oiseau.jpeg',
      },
      {
        name: 'Zach Ramirez',
        focus: 'HEAD OF CORPORATE PARTNERSHIPS',
        bio: 'CITY INNOVATIONS',
        linkedin: 'https://www.linkedin.com/in/zachary-ramirez-10b737a7/',
        image: '/images/mentors/zach-ramirez.png',
      },
      {
        name: 'Julie Schweihofer',
        focus: 'VICE PRESIDENT OF OPERATIONS',
        bio: 'TITHELY',
        linkedin: 'https://www.linkedin.com/in/julieschweihofer/',
        image: '/images/mentors/julie-schweihofer.jpg',
      },
      {
        name: 'Mike Smock',
        focus: 'FOUNDER',
        bio: 'SENIOR STRATEGIC ADVISOR',
        linkedin: 'https://www.linkedin.com/in/smocko2da/',
        image: '/images/mentors/mike-smock.png',
      },
      {
        name: 'Mya Stone',
        focus: 'FOUNDER',
        bio: 'STONE CAPITAL PARTNERS',
        linkedin: 'https://www.linkedin.com/in/mya-stone-scp/',
        image: '/images/mentors/mya-stone.jpg',
      },
      {
        name: 'Wesley Trimpe',
        focus: 'VICE PRESIDENT',
        bio: 'ICOR ADVANTAGE',
        linkedin: 'https://www.linkedin.com/in/wesley-trimpe-23200734/',
        image: '/images/mentors/wesley-trimpe.jpeg',
      },
      {
        name: 'Dr. Dan Zomerlei',
        focus: 'CO-FOUNDER & PRINCIPAL PARTNER',
        bio: 'ALLIANCE COUNSELING GROUP',
        linkedin: 'https://www.linkedin.com/in/dan-zomerlei-mdiv-lmft-phd-667b2724/',
        image: '/images/mentors/dr-dan-zomerlei.jpg',
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
