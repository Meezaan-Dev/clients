# Anele Pama Portfolio

Static Astro portfolio for Anele Pama, artist and graphic designer.

## Commands

```bash
npm install
npm run dev
npm run build
```

`npm run build` generates a static `dist/` directory suitable for uploading to Afrihost Shared Hosting `public_html` or Netlify.

## Netlify (monorepo)

This app lives in the `clients` repo under **`anele/`**. If the site shows Netlify’s generic “Page not found”, the build is almost certainly running from the repo root instead of this folder.

In **Site configuration → Build & deploy → Build settings** for [anele-portfolio](https://anele-portfolio.netlify.app/):

| Setting | Value |
|--------|--------|
| **Base directory** | `anele` |
| **Build command** | `npm run build` (or leave blank to use [`netlify.toml`](netlify.toml)) |
| **Publish directory** | `dist` (relative to base, i.e. `anele/dist`) |

Save, then **Deploys → Trigger deploy → Clear cache and deploy site**.

## Content

Portfolio items live in `src/content/work/`. Add one Markdown file per artwork or design project, then add matching images under `public/images/work/` or migrate final source assets into Astro-managed image imports later.

Current content and imagery are placeholders only.
