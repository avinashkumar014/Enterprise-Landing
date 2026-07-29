## Stack note (important)

Next.js is not supported on Lovable. This project runs **TanStack Start (React 19 + TypeScript + Vite 7 + Tailwind v4)**, which is functionally equivalent for everything requested: file-based routing, server route handlers (the direct analogue of Next Route Handlers), SSR, and metadata via each route's `head()`. Everything else you listed — Framer Motion, React Hook Form, Zod, Lucide, SEO, a11y, animations, component architecture — is built exactly as specified.

Endpoint paths map like this:
```text
/app/api/features/route.ts      ->  src/routes/api/public/features.ts
/app/api/testimonials/route.ts  ->  src/routes/api/public/testimonials.ts
/app/api/stats/route.ts         ->  src/routes/api/public/stats.ts
/app/api/leads/route.ts         ->  src/routes/api/public/leads.ts (POST)
```

## What gets built

A single landing page at `/` recreating the Accredian Enterprise experience with original copy, layout, and styling (no copied markup or assets):

1. **Sticky navbar** — wordmark logo, nav links with smooth scroll to sections, "Enquire Now" CTA, mobile hamburger sheet, background blur/shadow on scroll.
2. **Hero** — "Next-Gen Expertise for Your Enterprise"-style headline, subcopy, four value pills (Tailored Solutions, Industry Insights, Expert Guidance, Measurable Impact), primary + secondary CTAs, generated illustration, staggered entrance animation.
3. **Trusted companies** — infinite marquee of partner logo cards (generic enterprise wordmarks generated for the clone).
4. **Statistics** — "Our Track Record" cards driven by `/api/public/stats`, count-up animation on scroll.
5. **Enterprise benefits** — "The Accredian Edge" card grid.
6. **Why choose us** — domain-expertise grid (Gen-AI, Leadership, Tech & Data, Fintech, Ops, Digital, Product) plus the three-step delivery process timeline.
7. **Features** — cards from `/api/public/features` with Lucide icon mapped by name, hover lift, stagger reveal.
8. **Testimonials** — cards from `/api/public/testimonials` in an animated carousel.
9. **FAQ** — accordion with tabbed categories (Course / Delivery / Miscellaneous), animated height + keyboard accessible.
10. **CTA + Lead form** — gradient section wrapping the lead capture form.
11. **Footer** — brand blurb, link columns, socials, legal row.

## Lead capture form

React Hook Form + Zod resolver: Full Name (2–80), Email (format + max 255), Phone (7–15 digits, optional country code), Company (2–120), Message (10–1000). Client-side inline errors, submit posts to `POST /api/public/leads`, which re-validates with the same Zod schema server-side and persists the lead.

**Storage:** I'll enable Lovable Cloud (built-in database) and store leads in a `leads` table — insert-only from the public endpoint, readable only by admins, with grants and RLS set up correctly. Toast on success, inline error banner on failure. If you'd rather not have a database, say so and the endpoint will log-and-echo instead.

## Architecture

```text
src/
  routes/
    __root.tsx            sitewide head defaults
    index.tsx             page assembly + SEO head() + JSON-LD
    api/public/*.ts       features | testimonials | stats | leads
    sitemap[.]xml.ts
  components/ui/          Button, Container, SectionTitle, Badge, Card...
  components/             Navbar, Footer, FeatureCard, StatsCard,
                          TestimonialCard, FaqItem, LeadForm, LogoMarquee
  sections/               Hero, Trusted, Benefits, WhyChoose, Features,
                          Stats, Testimonials, Faq, CtaSection
  hooks/                  useScrolled, useCountUp, useMediaQuery
  services/               api client fns (typed fetch wrappers)
  lib/                    validation schemas, icon map, utils
  types/                  shared interfaces
  constants/              nav links, static section copy
  data/                   server-side source data for the mock APIs
```

Section data comes from the API routes via TanStack Query (`ensureQueryData` in the route loader + `useSuspenseQuery` in components), so nothing is hardcoded inside components.

## Design system

Deliberately not generic: deep navy/ink base with an electric-teal and warm-amber accent pair, Sora display + Manrope body loaded via `<link>` in the root head. All colors as oklch tokens in `src/styles.css` — no hardcoded color utilities. Glass surfaces, soft layered shadows, rounded-2xl cards, gradient mesh backdrops, focus-visible rings on every interactive element.

## SEO, a11y, performance

- Per-route `head()`: unique title/description, og + twitter tags, canonical, Organization + FAQPage JSON-LD.
- `public/robots.txt` and a `/sitemap.xml` server route.
- Custom favicon generated from the brand mark.
- Semantic landmarks, one `<h1>`, single `<main>`, aria-labels on icon buttons, alt text on every image, keyboard-operable accordion/menu/carousel, `prefers-reduced-motion` respected.
- Generated images exported as optimized assets, below-the-fold images lazy-loaded, heavy sections code-split with `React.lazy`, memoized list items.

## Also included

A professional `README.md` covering overview, features, folder structure, install/run, deployment, API routes, tech stack, AI usage, manual improvements, and future scope.

Deployment is via Lovable's Publish button (`.lovable.app` + optional custom domain) rather than Vercel, since the app builds for Lovable's edge runtime.
