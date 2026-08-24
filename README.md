# Keratin Treatment Elmwood Park

Astro + Tailwind lead-gen site. Pillar page at `/`, cluster pages scaffolded per the build spec.

## Develop

```
npm install
npm run dev       # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Before launch — replace every placeholder

All of these live in one place: [src/config.ts](src/config.ts). Update it and the values flow into
every page's copy, footer NAP, and JSON-LD schema.

- `businessName`, `phone` (CallRail number), `phoneDisplay`, `address`, `email`
- Real pricing on the home page (`src/pages/index.astro`) and [/keratin-treatment-cost/](src/pages/keratin-treatment-cost/index.astro) — search for `BUILDER NOTE`
- Real photos in `public/images/` — the current files are lightweight SVG placeholders (hero, before/after, Brazilian blowout, OG image, logo). Swap in real WebP photos (<100KB, matching the filenames referenced in each page) from the partner salon, with permission for any before/after shots.
- Real reviews — the "What Our Clients Say" section on the home page intentionally ships without quotes. Do not fabricate reviews (FTC + Google policy risk); add real ones once the Google Business Profile / Yelp presence exists.
- `/about/` — real stylist name, years of experience, certifications, product lines (`src/pages/about/index.astro`)
- `/contact/` — the map embed uses a public "search by address" Google Maps URL as a placeholder; swap for a proper embed once the address is confirmed (Google Maps → Share → Embed a map)

## Form + hosting notes

- The quote form ([src/components/QuoteForm.astro](src/components/QuoteForm.astro)) is wired for **Netlify Forms** (zero backend, free tier). If deploying to Cloudflare Pages instead, swap it for a Cloudflare Pages Function or a service like Formspree.
- `public/_redirects` handles the two alias-domain 301s (`keratinhairelmwoodpark.com`, `elmwoodparkkeratin.com`) **on Netlify only**. On Cloudflare Pages, set those up via Bulk Redirects / custom domain redirect rules in the dashboard instead.
- `@astrojs/sitemap` is pinned to `3.2.1` — newer 3.7.x releases crash against Astro 4's build hook signature.

## Pre-launch checklist (from the spec)

- [ ] Swap all placeholders above with real data
- [ ] Core Web Vitals passing (LCP <2.5s, CLS <0.1) — run Lighthouse after real images are in
- [ ] Submit `/sitemap-index.xml` to Google Search Console
- [ ] Verify rich results at search.google.com/test/rich-results
- [ ] CallRail number installed and routed
- [ ] NAP identical across site, Google Business Profile, and directories
