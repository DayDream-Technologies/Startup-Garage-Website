import { externalLinks } from '../siteMeta.js';

export const ourPathwayContent = {
  hero: {
    eyebrow: 'Our Pathway',
    title: 'A Path for Founders Who Want to Build Something That Lasts.',
    body:
      'Building a business is hard. Building one that reflects who you are, what you believe, and what you’re called to is harder still. No one does it alone.',
    secondary: 'Our pathway is simple. Three steps, each one deeper than the last. You don’t have to take them all at once. You just have to take the next one.',
    primaryCta: { label: 'See the Pathway', to: '#pathway' },
    secondaryCta: { label: 'Help Me Find My Starting Point', to: '#where-to-start' },
  },
  why: {
    eyebrow: 'Why This Pathway Exists',
    title: 'A Way In, A Way Forward, A Way Deeper',
    body:
      'Startup Garage exists because faith-driven founders need more than good ideas and capital. They need people who’ve walked the road, rooms where the hard questions belong, and relationships that go the distance.',
    secondary:
      'We built this pathway because most founders don’t need another webinar or cohort. They need a way in, a way forward, and a way deeper. So that’s what we offer.',
  },
  pathway: {
    id: 'pathway',
    eyebrow: 'The Pathway',
    title: 'Three Steps. Your Pace.',
    intro:
      'Most founders start at the beginning and move through the pathway as they’re ready. A few jump in further along. Either works. What matters is that wherever you are, there’s a next step.',
    steps: [
      {
        number: '01',
        label: 'Events',
        tagline: 'Explore',
        body:
          'The front door. No application, no cost, no commitment — just show up and see what Startup Garage is about. Workshops, speaker nights, pitch competitions, and partnerships with campus entrepreneurship programs across West Michigan.',
        secondary:
          'Events are where most founders first meet SG. You’ll hear real founders tell real stories, meet coaches and mentors in the wild, and start to see whether this community fits who you’re becoming. For a lot of founders, one event is all it takes for them to know they’ve found their people.',
        cta: { label: 'Find an Event', to: '/events' },
      },
      {
        number: '02',
        label: 'Connections',
        tagline: 'Get Help',
        body:
          'Once you’ve explored, the next step is getting help. Connections pairs you 1:1 with a coach or mentor from our vetted network — experienced founders, operators, and faith-aware practitioners who’ve built what you’re building.',
        secondary:
          'Coaches help you think. Mentors share what they’ve learned. Both are free to you, introduced intentionally, and matched to where you actually are — not where someone else thinks you should be. You ask for help. We make the introduction. You take it from there.',
        cta: { label: 'Request a Connection', to: '/connections' },
      },
      {
        number: '03',
        label: 'Small Groups',
        tagline: 'Build & Grow',
        body:
          'The deepest tier of the pathway. Small Groups is where founders commit to building alongside others — not just occasionally, but on a rhythm. Smaller circles. Longer relationships. Harder questions. Real accountability.',
        secondary:
          'The Forge is our Small Group offering: a group of faith-driven founders who gather regularly to wrestle with the spiritual, emotional, and strategic realities of building a business that reflects who they’re becoming. Not a class. Not a program. A community.',
        cta: { label: 'Learn About The Forge', to: '/groups/the-forge' },
        emphasized: true,
      },
    ],
  },
  whoBelongs: {
    eyebrow: 'Who We Serve',
    title: 'Who Belongs Here',
    intro:
      'Startup Garage is built for founders who want their work and their faith to belong together — not in separate compartments, but in one life. If that’s you, you’re in good company.',
    items: [
      'Early-stage founders with an idea they can’t shake.',
      'Second-time founders looking for deeper community than they found the first time around.',
      'Operators, marketers, and product people dreaming about their own thing.',
      'Students and recent grads testing whether entrepreneurship is their path.',
      'Faith-driven founders who’ve felt lonely in secular rooms — and under-equipped in faith rooms.',
    ],
    note: 'And if you’re not sure yet — come anyway. Events are a no-risk way to find out.',
  },
  stories: {
    eyebrow: 'Founder Stories',
    title: 'Founders Walking This Pathway',
    intro:
      'The best way to understand our pathway is to hear it from founders who’ve walked it. Different stages. Different industries. Same journey — from first event to deep community.',
    items: [
      {
        marker: 'Story 01',
        subtitle: 'From First Event to First Investor',
        quote:
          'I came to one event thinking I’d grab some free pizza. I walked out with the person who would become my first investor.',
        body:
          'A founder shares how a first Startup Garage event sparked the relationship that became a first investor. Final story copy will replace this placeholder once a founder is selected.',
        meta: 'Founder Name · Venture Name · City',
        placeholder: true,
      },
      {
        marker: 'Story 02',
        subtitle: 'The Mentor Who Stayed',
        quote: 'My SG mentor has been in my corner for three years now. He’s seen the ugly. He’s still here.',
        body:
          'A founder shares how a long-running mentor relationship carried them through a failed raise, a co-founder conflict, and a faith question they couldn’t ask anywhere else. Final story copy will replace this placeholder.',
        meta: 'Founder Name · Venture Name · City',
        placeholder: true,
        reverse: true,
      },
      {
        marker: 'Story 03',
        subtitle: 'What The Forge Made Possible',
        quote: 'I didn’t know I was lonely until I was in a room full of people building like me.',
        body:
          'A founder shares what The Forge made possible — in their business, in their marriage, in their soul. Final story copy will replace this placeholder.',
        meta: 'Founder Name · Venture Name · City',
        placeholder: true,
      },
    ],
  },
  whereToStart: {
    id: 'where-to-start',
    eyebrow: 'Where to Start',
    title: 'Pick the One That Sounds Most Like You',
    intro:
      'Not sure which step is yours? Here’s the shortcut. Pick the one that sounds most like you right now — that’s your starting point. You can always move deeper later.',
    options: [
      {
        title: 'If you’re just exploring…',
        body:
          'You’re curious but not committed. You want to see what SG is about before you share anything about what you’re building. Come to an event. That’s all. Free, no commitment, and the best way to meet the community.',
        cta: { label: 'Find an Event', to: '/events' },
      },
      {
        title: 'If you’re stuck on something…',
        body:
          'You’ve got an idea, a venture, or a decision, and you need help thinking it through. Request a connection. We’ll introduce you to a coach or mentor who’s been where you are.',
        cta: { label: 'Request a Connection', href: externalLinks.intakeForm },
      },
      {
        title: 'If you’re ready to go deeper…',
        body:
          'You’ve been around SG for a while. You’re tired of building alone. You want a rhythm of real community with other faith-driven founders. Learn about The Forge — our Small Groups community for founders who want to build together.',
        cta: { label: 'Learn About The Forge', to: '/groups/the-forge' },
      },
    ],
  },
  closingCta: {
    title: 'Wherever You Are, There’s a Next Step.',
    body: 'You don’t have to have it figured out to take the first step. You just have to take it.',
    primaryCta: { label: 'Find an Event', to: '/events' },
    secondaryCta: { label: 'Request a Connection', href: externalLinks.intakeForm },
  },
};
