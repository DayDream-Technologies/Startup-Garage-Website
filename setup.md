# Local setup — Startup Garage website

This project is a **React 18** single-page app built with **Vite 5**. There is no separate backend in the repo; everything runs in the browser after a static build.

---

## Prerequisites

| Requirement | Notes |
|-------------|--------|
| **Node.js** | **v20 LTS** (or current LTS) recommended. Vite 5 expects a modern Node. Check with `node -v`. |
| **npm** | Comes with Node. Check with `npm -v`. (pnpm/yarn are not configured in this repo.) |
| **Git** | To clone the repository. |

Optional:

- **VS Code** or Cursor with the official **ESLint** extension if you add ESLint later (not required to run the site today).

---

## 1. Get the code

```bash
git clone https://github.com/<your-org-or-user>/Startup-Garage-Website.git
cd Startup-Garage-Website
```

If you use SSH remotes, swap the clone URL accordingly.

---

## 2. Install dependencies

From the project root (the folder that contains `package.json`):

```bash
npm install
```

This installs React, React DOM, React Router, Vite, and `@vitejs/plugin-react` per `package.json`.

---

## 3. Run the development server

```bash
npm run dev
```

By default Vite serves at **http://localhost:5173/**

- Open that URL in a browser.
- Hot module replacement (HMR) is enabled: edits to `src/` files refresh quickly.

**Custom port** (if 5173 is busy):

```bash
npm run dev -- --port 5174
```

---

## 4. Build for production (local check)

```bash
npm run build
```

Output goes to **`dist/`** — static HTML, JS, CSS, and everything under `public/` (including `public/404.html` for GitHub Pages SPA routing).

Preview the production build locally:

```bash
npm run preview
```

Then open the URL Vite prints (often **http://localhost:4173**).

---

## 5. Base path (`VITE_BASE`) — when it matters

`vite.config.js` sets the app **base URL** from the environment variable `VITE_BASE` (default in repo is `'/'` for local dev).

- **Local dev:** Leaving `VITE_BASE` unset is fine; the app runs at `/`.
- **GitHub project Pages** (site at `https://<user>.github.io/<repo>/`): the build must use a base like `/Startup-Garage-Website/` so asset URLs resolve. The GitHub Actions workflow sets this via the `VITE_BASE` repository variable.

To simulate a subpath build on your machine (PowerShell):

```powershell
$env:VITE_BASE="/Startup-Garage-Website/"
npm run build
npm run preview
```

Unset when done:

```powershell
Remove-Item Env:VITE_BASE -ErrorAction SilentlyContinue
```

---

## 6. Project layout (quick reference)

| Path | Purpose |
|------|---------|
| `src/main.jsx` | React root + `BrowserRouter` with `basename` from `import.meta.env.BASE_URL` |
| `src/App.jsx` | Routes, scroll behavior, layout shell |
| `src/pages/*.jsx` | Page components |
| `src/content/` | Copy and structured data (`siteMeta.js`, `pages/*.js`) |
| `src/components/` | Reusable UI (layout, sections, CTAs) |
| `src/styles/` | `tokens.css`, `global.css` |
| `public/` | Static files copied to `dist/` as-is (`favicon.svg`, `404.html`, `images/`) |
| `.github/workflows/deploy-pages.yml` | CI deploy to GitHub Pages |

---

## 7. Common issues

| Issue | What to try |
|-------|----------------|
| **`npm install` errors** | Use Node 20+. Delete `node_modules` and `package-lock.json` (if present), then `npm install` again. |
| **Port already in use** | `npm run dev -- --port <other>` |
| **Blank page on GitHub Pages** | Wrong `VITE_BASE` for the repo URL. Match the repo name segment in the Pages URL. |
| **404 on refresh of `/events` etc. on Pages** | Ensure `public/404.html` is deployed and the workflow does not overwrite it with a plain copy of `index.html` without the SPA redirect script. |

---

## 8. Related docs

- [`README.md`](README.md) — overview, routes, deployment summary  
- [`docs/link-audit.md`](docs/link-audit.md) — external URLs and migration notes  
- [`docs/deploy/aws-migration.md`](docs/deploy/aws-migration.md) — production hosting on AWS  
- [`todo.md`](todo.md) — upcoming work (Eventbrite, forms, imagery, etc.)

---

## 9. Optional: strict engine (not in repo today)

If the team wants to enforce Node version, you can add an `engines` field to `package.json` and use `.nvmrc` — not required for local setup as documented here.
