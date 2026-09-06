# Kinetic Dashboard Guide

## Project Overview

Kinetic is a mock internal operations dashboard for monitoring revenue, team delivery, capacity, and recent activity. It is a single-page TanStack Start application deployed on Netlify.

## Architecture

- `src/routes/__root.tsx` defines the document shell, global metadata, and global stylesheet import.
- `src/routes/index.tsx` contains the dashboard route, mock datasets, Chart.js configuration, and lightweight UI state.
- `src/styles.css` contains the complete visual system, responsive layout, motion, and component styling.
- `src/router.tsx` creates the TanStack Router instance from the generated route tree.
- `public/` contains static site assets.
- `netlify.toml` and `vite.config.ts` configure Netlify and Vite integration.

## Technology

- React 19 with TypeScript
- TanStack Start and TanStack Router
- Chart.js with `react-chartjs-2`
- Tailwind CSS 4 for stylesheet processing
- Lucide React icons
- Netlify deployment tooling

## Conventions

- Use PascalCase for React components and camelCase for local values and functions.
- Keep route-specific mock data and chart options near the route that consumes them.
- Prefer semantic HTML and accessible names for icon-only controls.
- Extend the existing CSS variables before introducing one-off colors.
- Preserve the warm editorial visual direction and avoid generic dashboard component styling.
- Add responsive behavior alongside new layout changes.

## Non-Obvious Decisions

- Charts render only after hydration to avoid server/client canvas differences.
- The dashboard intentionally uses mock data and has no persistence layer.
- Mobile navigation uses local state and a CSS transform rather than a component library.
- Google Fonts are imported from the global stylesheet; a self-hosted font can replace this for stricter environments.

## Local Development

Install dependencies with `pnpm install`, then run `pnpm dev`. Use `pnpm build` for a production build.
