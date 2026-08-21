# QuickRuit Landing Page

Astro-based public marketing site for [QuickRuit](https://quickruit.in) — AI-powered hiring automation.

## Tech Stack

- [Astro](https://astro.build) (SSG, static output)
- [Tailwind CSS](https://tailwindcss.com) (`@astrojs/tailwind`)
- [React](https://react.dev) for interactive islands (`@astrojs/react`)
- TypeScript

## Local Development

```bash
npm install
npm run dev
```

The site runs on `http://localhost:4321` by default.

## Environment Variables

Create a `.env` file at the root:

```
# URL of the React authentication app
# Local dev:
PUBLIC_APP_URL=http://localhost:8080
# Production:
# PUBLIC_APP_URL=https://app.quickruit.in
```

## Project Structure

```
src/
  layouts/
    Layout.astro        # Base HTML shell (head, fonts)
  pages/
    index.astro         # Landing page (all sections)
  components/
    NavBar.astro        # Sticky glassmorphism header
    Hero.astro          # Hero section with email CTA
    LogoCloud.astro     # Social proof strip
    ProductIsland.tsx   # Interactive tabs (React island)
    ComparisonSlider.tsx# Before/after drag slider (React island)
    BrainSection.astro  # AI scoring + proctoring
    BentoGrid.astro     # Feature cards
    Pricing.astro       # HR & Campus pricing plans
    FinalCTA.astro      # Email capture banner
    Footer.astro        # Footer with links
```

## Build

```bash
npm run build       # Outputs static site to dist/
npm run preview     # Preview the built site locally
```
