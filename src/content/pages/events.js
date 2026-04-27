import { externalLinks } from '../siteMeta.js';

export const eventsContent = {
  hero: {
    eyebrow: 'Events',
    title: 'Just Come.',
    body:
      'Events are the easiest way to meet Startup Garage. No application. No commitment. No cost. Show up and see what we’re about.',
    secondary:
      'We host workshops, speaker nights, and pitch competitions across West Michigan and partner with local colleges to bring Startup Garage programming directly to students, campus entrepreneurship programs, and the local community.',
    primaryCta: { label: 'Find an Event', href: externalLinks.eventsFeed },
    secondaryCta: { label: 'See What to Expect', to: '#what-to-expect' },
  },
  upcoming: {
    title: "What's Coming Up",
    intro: 'Everything we’re putting on next. Every event is free and open to anyone who wants to come.',
    fallback:
      'Nothing on the calendar this week — new events go up about a month out. Want us to let you know when the next one drops?',
    fallbackCta: { label: 'Join the Event List', href: externalLinks.emailSignup },
    feedCta: { label: 'See All Upcoming Events', href: externalLinks.eventsFull },
  },
  types: {
    eyebrow: 'Event Types',
    title: 'What We Put On',
    intro: 'Different events for different seasons. Here’s what you’ll find on our calendar over the course of a year.',
    items: [
      {
        title: 'Workshops',
        body:
          'Practical, hands-on sessions on business, funding, marketing, and faith-in-work questions that don’t get asked at most conferences. Led by practitioners who’ve done the work, not just talked about it.',
      },
      {
        title: 'Speaker Nights',
        body:
          'Industry leaders and experienced founders sharing real stories — the wins, the losses, and the hard-earned lessons they wish someone had told them earlier. Come hungry for questions.',
      },
      {
        title: 'Pitch Competitions & Showcases',
        body:
          'Opportunities for early-stage founders to pitch their ventures, get sharp feedback, and compete for microgrants and other resources. Judged by coaches, mentors, and investors from the SG network.',
      },
      {
        title: 'University & Campus Partnerships',
        body:
          'We plug into campus entrepreneurship programming across West Michigan with guest speakers, workshop facilitators, and pitch competition judges.',
      },
    ],
  },
  whatToExpect: {
    eyebrow: 'What to Expect',
    title: 'New Here? Here’s What to Expect',
    intro:
      'Most people show up to their first Startup Garage event wondering if they’ll fit. They do. Here’s what every event looks like:',
    items: [
      'You don’t need to apply or pay — just RSVP and show up.',
      'Everyone is welcome: founders, students, curious locals, and the faith-is-interesting-but-I’m-not-sure crowd.',
      'Every event has a clear start and end time, so you can come and go as your schedule allows.',
      'Most events include food or coffee. We try to make showing up feel easy.',
      'You’ll leave with at least one new conversation, one new idea, and probably a business card or two.',
    ],
    note: 'Startup Garage is free for all participants. Always.',
  },
  university: {
    eyebrow: 'For Universities & Campus Programs',
    title: 'Plug Into Your Campus Programming',
    body:
      'If you run a student entrepreneurship program, an incubator, a startup course, or a campus pitch competition, we’d love to plug in. Startup Garage doesn’t run our own programs on your campus — instead, we add value to the programming you already have by bringing in trusted practitioners who step into your existing calendar.',
    list: {
      title: 'Ways We Show Up',
      items: [
        'Guest speakers for classes, chapel, or campus events.',
        'Workshop facilitators for entrepreneurship programs or student organizations.',
        'Judges and mentors for pitch competitions and demo days.',
        'Faith-in-work and founder-life conversations for student life programming.',
      ],
    },
    closing:
      'We serve schools across West Michigan and are always open to new relationships. Reach out and tell us what you’re working on — we’ll figure out how we can help.',
    cta: { label: 'Partner With Us', href: externalLinks.universityPartnership },
  },
  closingCta: {
    title: 'Start with Showing Up',
    body:
      'Every founder who finds their people here started the same way. They came to one event. That’s all it takes. The rest unfolds from there.',
    note: 'Free for all participants. Always.',
    primaryCta: { label: 'Find an Event', href: externalLinks.eventsFeed },
  },
};
