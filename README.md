# Lumina Enterprise — Landing Page Clone

A production-ready, original recreation of an enterprise corporate-training landing page: animated marketing sections, mock JSON APIs and a validated lead-capture flow backed by a database.

## Tech Stack

TanStack Start v1 (React 19 + TypeScript, file-based routing, SSR, server route handlers), Vite 7, Tailwind CSS v4, shadcn/ui + Radix, Framer Motion, React Hook Form, Zod, TanStack Query, Lucide React, Lovable Cloud (Postgres) for lead storage.

> Note: Next.js is not supported on this platform. TanStack Start provides the same capabilities used here — file routing, SSR, and route handlers (the equivalent of Next Route Handlers).

## Features

- Sticky, blur-on-scroll navbar with mobile menu
- Animated hero with generated illustration
- Partner logo marquee
- Animated statistics with count-up on scroll
- Enterprise benefits + domain expertise + three-step delivery process
- Capability feature grid, testimonial carousel, tabbed FAQ accordion
- Gradient CTA with lead capture form (client + server validation)
- Semantic HTML, ARIA labels, keyboard navigation, reduced-motion support
- SEO: per-route metadata, OpenGraph/Twitter tags, JSON-LD, robots.txt, sitemap.xml, favicon

## Folder Structure

```
src/
  assets/        generated imagery
  components/    reusable UI (navbar, footer, cards, lead form) + ui/ primitives
  constants/     static site copy and navigation
  data/          source data served by the mock APIs
  hooks/         useScrolled, useCountUp
  lib/           validation schema, icon map, motion presets, utils
  routes/        index.tsx, __root.tsx, sitemap[.]xml.ts, api/public/*
  sections/      hero, trusted, stats, benefits, why-choose-us, features,
                 testimonials, faq, cta
  services/      typed fetch wrappers + query options
  types/         shared interfaces
public/          robots.txt, favicon
```

## Installation & Running Locally

```bash
bun install     # or npm install
bun run dev     # http://localhost:8080
bun run build   # production build
bun run lint    # eslint
```

## API Routes

| Method | Path                      | Description                                    |
| ------ | ------------------------- | ---------------------------------------------- |
| GET    | `/api/public/features`    | `{ id, title, description, icon }[]`           |
| GET    | `/api/public/testimonials`| `{ id, name, designation, company, image, review }[]` |
| GET    | `/api/public/stats`       | `{ id, title, value }[]`                       |
| POST   | `/api/public/leads`       | Validates and stores a lead enquiry            |

All section data is fetched with `fetch()` through TanStack Query — no hardcoded arrays inside components.

## Deployment

Publish from the Lovable editor (Publish button). The app builds for an edge runtime and is served at a `.lovable.app` URL, with optional custom domains.

## AI Usage

Layout, copy, component architecture and imagery were generated with AI assistance from a written brief and the reference site's information architecture. No markup, CSS or assets were copied from the reference site.

## Manual Improvements

- Custom oklch design-token system (ink navy, electric teal, warm amber) instead of default palettes
- Shared Zod schema reused on both client and server
- Count-up hook with IntersectionObserver and reduced-motion handling
- Lazy-loaded below-the-fold sections and memoised list cards

## Future Scope

- Admin dashboard for reviewing captured leads
- CMS-backed content for features, testimonials and FAQs
- Multi-page expansion (per-domain program pages, case studies, blog)
- Email notifications and CRM sync on lead submission
- Analytics and A/B testing on the CTA
