# Startup Garage Website

Rebuilt site for [Startup Garage](https://www.startupgarage.org/), a nonprofit equipping early-stage, faith-driven founders through events, intentional connections, and a small-group community called The Forge.

Built with **React + Vite**. Deployed to **GitHub Pages** today, ready for migration to **AWS (S3 + CloudFront)** when production cutover happens.

## Quick start

```bash
npm install
npm run dev      # local dev server on http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

Node 20+ is recommended.

## Project layout

```
src/
  main.jsx               # React entry point + BrowserRouter setup
  App.jsx                # Route definitions + ScrollManager
  components/
    common/Cta.jsx       # Smart CTA (router link / external link / anchor)
    layout/              # Header, Footer
    sections/            # Reusable page sections (Hero, PathwaySteps, FeatureGrid, etc.)
  pages/                 # One component per route, composed from section components
  content/
    siteMeta.js          # Site-wide metadata, nav, external link map
    pages/*.js           # Per-page content modules (copy lives here, not in JSX)
  styles/
    tokens.css           # Design tokens (color, spacing, type)
    global.css           # Global resets, type scale, button + container utilities
public/
  favicon.svg
  404.html               # GitHub Pages SPA fallback for deep links
docs/
  link-audit.md          # Confirmed vs. mapped vs. unresolved external links
  deploy/aws-migration.md  # Production migration plan
.github/workflows/
  deploy-pages.yml       # CI build + deploy to GitHub Pages
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/our-pathway` | Our Pathway |
| `/events` | Events |
| `/connections` _(alias `/coaches-mentors`)_ | Coaches & Mentors |
| `/groups/the-forge` _(alias `/the-forge`)_ | The Forge |
| `/resources-tools` | Resources & Tools |
| `*` | 404 fallback |

Deep links work on GitHub Pages via [`public/404.html`](public/404.html), which encodes the originally requested path into the query string and bounces the visitor back to the SPA shell, where a small script in [`index.html`](index.html) restores the URL before React Router renders.

## Editing content

All copy lives in [`src/content/pages/*.js`](src/content/pages). To update headlines, body copy, or CTAs, edit the relevant module — no component changes needed. Placeholders (founder testimonials, mentor profiles, resource library entries) are tagged in the UI with a small "Placeholder" pill so they're easy to find.

External destinations (events feed, intake forms, social, etc.) are centralized in [`src/content/siteMeta.js`](src/content/siteMeta.js) under `externalLinks`. See [`docs/link-audit.md`](docs/link-audit.md) for status.

## Deployment

### GitHub Pages (current)

Pushes to `main` trigger [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). The workflow builds with `VITE_BASE=/Startup-Garage-Website/` so assets resolve correctly under the project Pages URL. To override (e.g. user/org Pages or custom domain), set the `VITE_BASE` repository variable.

If you switch to a custom domain, set `VITE_BASE=/` and add a `CNAME` file under `public/`.

### AWS (production target)

The site is fully static, so the recommended target is S3 (private origin) + CloudFront + Route 53 + ACM. Step-by-step instructions, IAM and DNS guidance, and an SSR upgrade path are in [`docs/deploy/aws-migration.md`](docs/deploy/aws-migration.md).

## Design system

Token-driven via CSS custom properties in [`src/styles/tokens.css`](src/styles/tokens.css). Themes:

- Dark, accent-rich hero / banner sections (`--color-bg`, `--color-accent`).
- Soft cream "editorial" sections (`--color-bg-soft`).
- Light card surfaces (`--color-bg-light`).

Typography pairs **Fraunces** (display) with **Inter** (UI) loaded from Google Fonts.

Responsive breakpoints (informal): `880px`, `960px`, `980px`, `720px`, `640px`. Header collapses to a full-screen nav under `960px`.

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `nav`).
- Visible focus styles via `:focus-visible`.
- Skip link to `#main`.
- All interactive elements are real `<a>` or `<button>` elements.
- Mobile nav uses `aria-expanded`/`aria-controls` and traps `body` scroll while open.

## License & ownership

Code in this repository is owned by Startup Garage. Logo, copy, and brand assets remain the property of Startup Garage.
