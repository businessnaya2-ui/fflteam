# Kinetic

Kinetic is a polished internal dashboard that brings team performance, revenue momentum, project delivery, capacity, and recent activity into one responsive view. The experience uses realistic mock data and interactive chart ranges, making it suitable for demos, design exploration, or as a starting point for a connected operations product.

## Key Technologies

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Chart.js and `react-chartjs-2`
- Tailwind CSS 4
- Lucide React icons
- Netlify deployment integration

## Run Locally

```bash
pnpm install
pnpm dev
```

The local Vite server starts on port 3000 by default. For a production bundle, run `pnpm build`.

## Project Structure

```text
src/routes/index.tsx    Dashboard UI, mock data, and chart configuration
src/routes/__root.tsx  Document shell and page metadata
src/styles.css          Visual system, responsive layout, and motion
public/                 Static assets
```

## Data

All dashboard values are mock data stored in the dashboard route. No database or external service is required.
