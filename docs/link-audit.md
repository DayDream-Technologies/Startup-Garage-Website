# Link Audit — Startup Garage Website

This file tracks the external destinations referenced across the rebuilt site so we can quickly see which links point to confirmed live pages on the existing Squarespace site (`startupgarage.org`) and which still need a final URL before launch.

All links are centralized in [`src/content/siteMeta.js`](../src/content/siteMeta.js) (`externalLinks`) so updates touch a single file.

> Status legend
> - **Confirmed** — URL exists today on `startupgarage.org` and matches intent.
> - **Mapped** — No public URL exists for the spec'd CTA, so it routes to the live `Contact Us` form (or another best-fit page) until a dedicated destination is published.
> - **Needs decision** — Spec calls for something with no clear public equivalent yet; product/marketing should decide where it should ultimately point.

## Confirmed live links

| Spec reference | Used on | Resolved URL | Notes |
|---|---|---|---|
| Events list | Events, Header CTA, Home, About | https://www.startupgarage.org/events | Live Squarespace events page. Will be replaced with embedded calendar once the React events feed is built. |
| Our Story | Footer | https://www.startupgarage.org/our-story | Live page on current site. |
| Blog | Footer | https://www.startupgarage.org/blog | Live page. |
| Videos | Footer | https://www.startupgarage.org/videos | Live page. |
| Contact | Footer / many CTAs | https://www.startupgarage.org/contact-us | Single contact form on live site; used as the "front door" for several requests below. |
| Mentors & Speakers | Footer | https://www.startupgarage.org/mentors-speakers | Live page. |
| Student Founders | Footer | https://www.startupgarage.org/student-founders | Live page. |
| Strategic Partners | Footer | https://www.startupgarage.org/strategic-partners | Live page. |
| Instagram | Footer / social | https://www.instagram.com/startupgarageorg | Confirmed handle. |
| LinkedIn | Footer / social | https://www.linkedin.com/company/startup-garage-org | Confirmed company page. |
| Facebook | Footer / social | https://www.facebook.com/startupgarageorg | Confirmed page. |
| YouTube | Footer / social | https://www.youtube.com/@startupgarage | Confirmed channel. |

## Mapped to contact form (interim)

These spec CTAs do not yet have dedicated public URLs. They currently route to the existing live Contact Us form so users always reach a working destination, with a note for the SG team to triage incoming messages. Replace each one with its dedicated destination once available.

| Spec reference | Used on | Currently routes to | Recommended destination |
|---|---|---|---|
| Coach/mentor intake form | Connections (Request a Connection), Home | https://www.startupgarage.org/contact-us | Dedicated intake form (Typeform / Tally / SG portal) capturing focus area, stage, and need. |
| Forge application | Home, Forge page | https://www.startupgarage.org/contact-us | Dedicated Forge application form (or Calendly intake link). |
| University / campus partnership | Events page | https://www.startupgarage.org/contact-us | Dedicated partnership inquiry page or scheduling link. |
| Resource suggestion | Resources & Tools | https://www.startupgarage.org/contact-us | Dedicated suggestion form (Tally/Typeform) or `mailto:` alias. |
| Executive Director scheduling | Resources & Tools (Portal) | https://www.startupgarage.org/contact-us | Calendly / SavvyCal direct booking link for the ED. |
| Email signup (event list / resource list) | Events fallback, Resources empty state | https://www.startupgarage.org/contact-us | Dedicated newsletter signup (Mailchimp / ConvertKit embed). |

## Needs decision before launch

| Question | Where it shows up | Decision needed |
|---|---|---|
| Should `Coaches & Mentors` page live at `/connections` or keep the existing `/coaches-mentors` slug? | Top nav, internal links | Routing currently supports both slugs — pick one canonical for SEO and 301 the other. |
| Is there a public `/our-pathway` page on the new domain or only on this site? | Cross-links from external comms | If only on this site, no action. If a Squarespace mirror is needed during transition, add a redirect plan. |
| Final founder + mentor names/quotes for the placeholder content blocks | Home, Forge, Connections, Pathway | Marketing to provide named founders and mentors before public launch. |

## Where placeholders are visible

Each placeholder is tagged in the UI (small "Placeholder" pill) so it's easy to spot during QA. Replace by editing the matching content module:

- Founder testimonials — [`src/content/pages/home.js`](../src/content/pages/home.js)
- Forge participant voice — [`src/content/pages/theForge.js`](../src/content/pages/theForge.js)
- Mentor profiles — [`src/content/pages/connections.js`](../src/content/pages/connections.js)
- Pathway founder stories — [`src/content/pages/ourPathway.js`](../src/content/pages/ourPathway.js)
- Resource library items — [`src/content/pages/resourcesTools.js`](../src/content/pages/resourcesTools.js)
