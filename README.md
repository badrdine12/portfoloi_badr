# Portfolio — Badr Eddine Binoua

Personal portfolio built with React, TypeScript, Vite, Tailwind CSS and shadcn/ui.

## Getting started

Prerequisites:

- Node.js 18+ and npm

Install and run:

```sh
npm install
npm run dev
```

Build for production:

```sh
npm run build
npm run preview
```

## Scripts

- `npm run dev`: start Vite dev server
- `npm run build`: build production bundle
- `npm run preview`: preview the production build locally

## Tech stack

- React + TypeScript (Vite)
- Tailwind CSS
- shadcn/ui components

## Project structure

```
public/           # static assets (favicon, images, robots.txt)
src/
  components/     # UI sections and shared UI primitives
  hooks/          # custom hooks
  lib/            # utilities
  pages/          # route-level pages
  main.tsx        # app bootstrap
index.html        # app HTML template
```

## Customization

- Favicon: update `public/favicon.svg` (or point `index.html` to another icon).
- SEO: edit meta tags in `index.html` (title, description, og:*, twitter:*).
- Styles: adjust Tailwind config in `tailwind.config.ts` and global styles in `src/index.css`.

## Deployment

You can deploy the `dist/` folder on any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

Typical steps (Vercel example):

1. Push the repository to GitHub
2. Import the repo on Vercel
3. Framework preset: Vite
4. Build command: `npm run build`
5. Output directory: `dist`

## License

This project is for personal portfolio use. You may use it as a reference; please give credit if you reuse significant parts.
