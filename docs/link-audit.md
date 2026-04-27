# Link Audit — Startup Garage Website

This file tracks the external destinations referenced across the rebuilt site so we can quickly see which links were sourced from the previous live Squarespace site and which links are now canonical in the rebuilt experience.

All links are centralized in [`src/content/siteMeta.js`](../src/content/siteMeta.js) (`externalLinks`) so updates touch a single file.

> Status legend
> - **Confirmed** — URL exists today on `startupgarage.org` and matches intent.
> - **Mapped** — No public URL exists for the spec'd CTA, so it routes to the live `Contact Us` form (or another best-fit page) until a dedicated destination is published.
> - **Needs decision** — Spec calls for something with no clear public equivalent yet; product/marketing should decide where it should ultimately point.

## Confirmed live links

| Spec reference | Used on | Resolved URL | Notes |
|---|---|---|---|
| Events list | Events, Header CTA, Home, About | https://www.startupgarage.org/events | Live Squarespace events page. Will be replaced with embedded calendar once the React events feed is built. |
| Our founding story | Footer | `/our-story` (in-app) | Rebuilt in this repo; final copy/images tracked in `todo.md`. |
| Blog | Footer | https://www.startupgarage.org/blog | Live page. |
| Videos | Footer | https://www.startupgarage.org/videos | Live page. |
| Contact | Footer / many CTAs | https://www.startupgarage.org/contact-us | Single contact form on live site; used as the "front door" for several requests below. |
| Mentors & Speakers | Footer | `/connections` (in-app) | Mentor roster lives on Coaches & Mentors page. |
| Student Founders | Footer | https://www.startupgarage.org/student-founders | Live page. |
| Strategic partners | Footer | `/strategic-partners` (in-app) | Rebuilt in this repo; partner logos/copy tracked in `todo.md`. |
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

## Resolved decisions

| Decision | Outcome |
|---|---|
| Canonical URL for Coaches & Mentors | Use `/connections` as canonical. Keep `/coaches-mentors` as a legacy alias/redirect for discoverability. |
| Squarespace transition model | No transition mirror required. Squarespace will be deactivated and all functionality is rebuilt in this site. |
| Mentor profiles and images | Replaced mentor placeholders using live `/mentors-speakers` data (names, role/company, LinkedIn, and headshots pulled into local `public/images/mentors`). |

## Where placeholders are visible

Each placeholder is tagged in the UI (small "Placeholder" pill) so it's easy to spot during QA. Replace by editing the matching content module:

- Founder testimonials — [`src/content/pages/home.js`](../src/content/pages/home.js)
- Forge participant voice — [`src/content/pages/theForge.js`](../src/content/pages/theForge.js)
- Mentor profiles — [`src/content/pages/connections.js`](../src/content/pages/connections.js) (now populated from the live mentors roster)
- Pathway founder stories — [`src/content/pages/ourPathway.js`](../src/content/pages/ourPathway.js)
- Resource library items — [`src/content/pages/resourcesTools.js`](../src/content/pages/resourcesTools.js)
