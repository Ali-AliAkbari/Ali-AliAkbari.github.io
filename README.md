# Ali AliAkbari — personal site

Modern static site built with [Astro](https://astro.build), styled for CFD / ML research. Content lives in `src/data/site.ts`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321

```bash
npm run build
npm run preview
```

## Deploy to https://ali-aliakbari.github.io/

This repo is set up for **GitHub Pages via GitHub Actions** (`site` + `base` are already configured for a user site).

1. Create a GitHub repo (for example `Ali-AliAkbari/ali-akbari-site`) and push this project, **or** replace the contents of `Ali-AliAkbari.github.io` with this codebase.
2. In the repo: **Settings → Pages → Build and deployment → Source** → **GitHub Actions**.
3. Push to `main` or `master`. The workflow publishes `dist/` to Pages.

To use the `username.github.io` URL directly, the deploying repo should still be named `Ali-AliAkbari.github.io`.

## Edit content

| What | File |
|------|------|
| Bio, links, papers, projects | `src/data/site.ts` |
| Colors & typography | `src/styles/global.css` |
| Profile photo | `public/profile.png` |
| CV PDF | `public/files/Ali-AliAkbari-CV.pdf` |

Inspired by open academic Astro sites such as [astro-micro-academic](https://github.com/jingwu2121/astro-micro-academic) and [matteospanio.github.io](https://github.com/matteospanio/matteospanio.github.io).