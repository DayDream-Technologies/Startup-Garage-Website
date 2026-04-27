# Next steps — Startup Garage website

This checklist reflects decisions from recent work: **canonical `/connections`**, **Squarespace will be fully replaced** (no mirror), **mentor roster + headshots** are in-repo under `public/images/mentors/`, and **events** are still static outbound links today.

---

## About pages — final copy & imagery (new)

These routes are live in the app with **draft structure** and a visible **“Draft content”** notice where `needsFinalContent: true` in the content module. Replace placeholders, then set `needsFinalContent` to `false` in the corresponding file when leadership approves.

| Page | Route | Content file | What’s still needed |
|------|--------|----------------|---------------------|
| Our founding story | `/our-story` | `src/content/pages/ourStory.js` | Approved narrative (who, when, why West Michigan), specific milestones, quotes, **historical photos** under e.g. `public/images/our-story/` (founders, early events, team). Optional timeline graphic. |
| Core values | `/core-values` | `src/content/pages/coreValues.js` | **Final list of values**, exact wording, order, and optional **icon or illustration per value** under e.g. `public/images/values/`. Remove or rewrite draft value cards. |
| Staff & Board | `/team` | `src/content/pages/team.js` | Real **staff** roster (name, title, short bio, optional LinkedIn). Full **board** list with roles (Chair, Treasurer, etc.). **Square headshots** (~800px) under `public/images/team/` referenced from each `image` field. Remove placeholder rows. |
| Strategic partners | `/strategic-partners` | `src/content/pages/strategicPartners.js` | Real partner **names**, **one-line descriptions**, **website URLs**, and **logos** (SVG or transparent PNG, reasonable file size) under e.g. `public/images/partners/`. Replace placeholder partner cards. |

**Navigation:** Footer **Explore** links to founding story, core values, staff/board, plus blog/videos/contact. Footer **Network** links Mentors to `/connections` and Strategic partners to `/strategic-partners`.

**Optional questions:** Should `/our-story` redirect from legacy `/our-story` on the old domain only (host-level), or do you also want a short URL like `/about` that summarizes all four sections on one scroll page?

---

## Integrate Eventbrite on the Events page

**Current behavior:** `src/pages/EventsPage.jsx` always shows the “What’s Coming Up” fallback copy plus CTAs. Event URLs come from `src/content/siteMeta.js` → `externalLinks.eventsFeed` and `externalLinks.eventsFull` (both still point at the old site’s `/events` path until you change them).

**Goal:** Surface real upcoming events on `/events` and/or deep-link to Eventbrite for RSVP, per the overhaul spec.

### Option A — Embed Eventbrite’s widget (fastest, no backend)

1. In [Eventbrite](https://www.eventbrite.com/), open your **organizer profile** or a specific **event**, then use **Marketing → Widgets** (wording may vary) to generate an embed code. Typical outputs:
   - A **`<script>`** snippet that loads `widget.evbuc.com` and renders a list or button.
   - Sometimes an **iframe** URL for a calendar or event list.

2. **In a React + Vite app**, raw `<script>` tags in JSX are not ideal. Recommended patterns:
   - Add a small component (e.g. `EventbriteEmbed.jsx`) that uses `useEffect` to create a `<script>` element, set `src` to the script URL Eventbrite provides, append it to a `ref` container, and remove it on unmount to avoid duplicates when navigating client-side.
   - If Eventbrite gives a **single iframe**, you can render `<iframe src="..." title="Startup Garage events" loading="lazy" />` inside the “What’s Coming Up” section with fixed `min-height` and responsive width (`width: 100%` + `max-width`).

3. **Wire it into the page:** Replace or augment the static panel in `EventsPage.jsx` (the block that uses `upcoming.fallback` / `upcoming.feedCta`) with your embed component. Keep the secondary CTA as “See all on Eventbrite” pointing at your public organizer or events URL.

4. **Update links:** In `siteMeta.js`, set `eventsFeed` and `eventsFull` to your Eventbrite organizer page or main events listing URL so every `Cta` that references those keys stays consistent.

5. **Privacy & performance:** Embedded third-party scripts may set cookies; document that in your privacy policy if required. Lazy-load the embed (e.g. only when the Events tab is visible or after `requestIdleCallback`) if the script hurts LCP.

6. **CSP (later):** If you add a Content Security Policy on AWS/CloudFront, allowlist Eventbrite domains (`*.eventbrite.com`, `*.evbuc.com`, etc.) for `script-src` and `frame-src` as needed.

### Option B — Eventbrite API (richer UI, more work)

Use the [Eventbrite API](https://www.eventbrite.com/platform/api/) to fetch events for your organization and render cards in React.

- **Caution:** A private OAuth token must **not** ship in the browser. Use a tiny serverless function (GitHub Actions won’t help for runtime), or a build-time fetch if you only need periodic updates, or proxy through your future API.
- Good fit when you want full control over layout and filtering on the Events page.

### After integration

- Update [`docs/link-audit.md`](docs/link-audit.md) so the “Events list” row reflects Eventbrite (or your embed) instead of the old Squarespace URL.
- Remove or shorten the static fallback copy in `src/content/pages/events.js` if the embed always shows upcoming events; keep a short fallback if the embed fails to load.

---

## Replace Squarespace-dependent URLs

Squarespace is being turned off; anything still pointing at `https://www.startupgarage.org/...` must be rebuilt or re-pointed.

| Area | File / location | Action |
|------|-----------------|--------|
| Intake, Forge apply, partnership, resource suggest, ED booking, newsletter | `src/content/siteMeta.js` | Point to new forms (Typeform, Tally, HubSpot, etc.), `mailto:`, or internal routes. |
| Footer + blog / videos / our story | `src/components/layout/Footer.jsx` + `siteMeta.js` | Rebuild those pages in this app or link to permanent hosts. |
| Events | `siteMeta.js` | Eventbrite (or other) as above. |

Track each swap in [`docs/link-audit.md`](docs/link-audit.md).

---

## Content still using placeholders

These are still marked with “Placeholder” in the UI where applicable:

| Location | File |
|----------|------|
| Home founder quotes | `src/content/pages/home.js` |
| Forge participant quote | `src/content/pages/theForge.js` |
| Our Pathway founder stories | `src/content/pages/ourPathway.js` |
| Resource library entries | `src/content/pages/resourcesTools.js` |

Replace with real names, ventures, cities, and approved quotes when marketing signs off.

---

## Images — missing or enhancement opportunities

| Item | Suggestion |
|------|------------|
| **Hero / editorial photography** | Home, Events, Pathway, and Forge use gradient-heavy sections without custom photography. Add brand-approved images under `public/images/` and reference them from content modules or new section components. |
| **Social / SEO preview** | Add `og:image` (and optional `twitter:image`) in `index.html` or a small head-management approach (e.g. `react-helmet-async` later) using a 1200×630 asset in `public/`. |
| **Favicon / PWA** | Only `public/favicon.svg` today. Optional: `apple-touch-icon`, `favicon.ico` for older clients. |
| **Events page** | After Eventbrite embed, optional thumbnail strip or banner image for “community at events” if you have assets. |
| **Large mentor assets** | Some files under `public/images/mentors/` are large PNGs (e.g. multi‑MB). Re-export as WebP or compressed JPEG/PNG for faster loads without visible loss. |
| **Our Pathway story blocks** | `StoryFeature.jsx` uses decorative gradients; optional real founder photos per story when content is finalized. |
| **About pages** | `/our-story`, `/core-values`, `/team`, `/strategic-partners` — see [About pages — final copy & imagery](#about-pages--final-copy--imagery-new) above for photography and asset folders. |

---

## Routing and SEO

- **Canonical:** Prefer `/connections` everywhere in new links; keep `/coaches-mentors` only as a redirect at the host (GitHub Pages redirect rules are limited — consider Netlify-style `_redirects` or CloudFront when on AWS).
- **Sitemap / robots.txt:** Add when the production domain is final.

---

## Deployment follow-through

- Confirm **GitHub Actions** `VITE_BASE` repo variable matches the real Pages URL or custom domain (`/` for apex custom domain).
- When moving to **AWS**, follow [`docs/deploy/aws-migration.md`](docs/deploy/aws-migration.md).

---

## Questions for you (optional)

1. **Eventbrite:** Do you have a fixed **organizer profile URL** and/or **organization ID** for API use later?
2. **Forms:** Which stack will replace Squarespace forms (single vendor vs. separate tools for intake vs. newsletter)?
3. **Blog / videos:** Will those live inside this React app, on a subdomain, or elsewhere?

---

*Last aligned with repo state and team decisions through mentor roster + Squarespace deprecation plan.*
