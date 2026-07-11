# Design Services Page — Spec
**Date:** 2026-07-11  
**Route:** `/design`  
**Status:** Approved

---

## 1. Goal

Add a dedicated `/design` page to zamanishtiyaq.work offering three tiers of website design services. A teaser section is also added to the homepage. The page must rank for website design service keywords and be AI-search optimized.

---

## 2. Route & Files

- `app/design/page.tsx` — main page component
- `app/design/page.module.css` — all layout styles (no inline CSS in JSX)
- `data/design.ts` — all content: pricingTiers, pastWork, faqs, howItWorks
- `scripts/capture-design-screenshots.ts` — one-time Playwright script to capture 5 site screenshots
- `public/design-work/*.png` — committed screenshots

---

## 3. Page Sections (top → bottom)

1. **Hero** — headline, subhead, "Book a call" (primary) + "WhatsApp me" (secondary)
2. **Pricing Tiers** — 3 cards, middle = "Most Popular", each with Book + WhatsApp CTAs
3. **Recent Work** — 5 screenshot cards in a grid, click opens live site in new tab
4. **How It Works** — 4-step horizontal timeline
5. **FAQ** — accordion, 6 items
6. **Final CTA** — repeat Book / WhatsApp

---

## 4. Pricing Tiers

| Tier | Price | Delivery | Included | Revisions |
|------|-------|----------|----------|-----------|
| Starter | $299 | 1 week | 1-page, mobile-optimized, contact form | 2 |
| Standard | $749 | 2 weeks | 3–5 pages, CMS-ready, SEO basics, analytics | 3 |
| Custom | from $1,800 | 3–4 weeks | Multi-page + custom features (booking, dashboards, integrations) | Unlimited in scope |

Standard = "Most Popular" badge.

---

## 5. Past Work

| Site | URL | Caption |
|------|-----|---------|
| Muhasaba | https://muhasaba.me/ | iOS-companion marketing site |
| Villa Cottages | https://villacottages.in/ | Full-stack booking site for a Kashmir boutique stay |
| Al Tayyab Global Consultants | https://www.altayyabglobalconsultants.com/ | Corporate site for a consulting firm |
| Ali Saffudin | https://alisaffudin.com/ | Cinematic artist site with cassette-tape EP player |
| Offer X-Ray | https://www.offerxray.com/ | AI SaaS landing for offer-letter analysis |

Screenshots: captured via Playwright at 1280×800, stored in `/public/design-work/`.

---

## 6. CTAs

- **Book a call:** `https://cal.com/zaman-ishtiyaq-20r7dl/30min?overlayCalendar=true` (target=_blank)
- **WhatsApp:** `https://wa.me/918851985235?text=<prefilled per tier>`
  - Starter: "Hi, I'm interested in the Starter website design package ($299)."
  - Standard: "Hi, I'm interested in the Standard website design package ($749)."
  - Custom: "Hi, I'm interested in a Custom website design — happy to share more details."

---

## 7. New Components

- `components/organisms/DesignHero.tsx`
- `components/organisms/PricingTiers.tsx`
- `components/molecules/PricingCard.tsx`
- `components/organisms/PastWorkGrid.tsx`
- `components/molecules/PastWorkCard.tsx`
- `components/organisms/DesignProcess.tsx`
- `components/organisms/DesignFAQ.tsx`
- `components/atoms/BookCallButton.tsx`
- `components/atoms/WhatsAppButton.tsx`

---

## 8. Homepage Teaser

Short section inserted between `ProductsSection` and `CallbackSection` in `app/page.tsx`:
- Heading: "Need a website?"
- One-line subhead about end-to-end design
- CTA: "See services →" → `/design`

---

## 9. Styling

- CSS Modules throughout (matches project convention)
- No inline layout classes in JSX
- Reuse existing design tokens: `--font-space-grotesk`, `--font-inter`, badge styles, dot grid, color palette from `globals.css`
- Responsive: mobile-first, pricing cards stack on mobile

---

## 10. SEO & GEO

### On-page
- `<title>`: "Website Design Services — Zaman Ishtiyaq"
- Meta description: benefit-forward, ~155 chars
- Heading hierarchy: H1 in hero, H2 per section
- Image alt text on all past-work screenshots

### Structured Data (JSON-LD)
- `Service` schema with 3 `Offer` entries (one per tier)
- `BreadcrumbList` schema (Home > Design)
- `FAQPage` schema from accordion items
- `Person` author reference matching site identity

### Sitemap & llms.txt
- Add `/design` to `sitemap.ts` with today's date
- Add to `llms.txt` index

### GEO (AI search)
- Hero text answers "who offers website design services" directly (passage-level citability)
- Process section answers "how does website design work" directly
- FAQ covers "how much does a website cost" — highest-traffic AI query for this space
- Service schema signals topic authority to AI crawlers

---

## 11. FAQ Items

1. How long does it take to build a website?
2. How many revisions are included?
3. Do you handle domain and hosting?
4. Can I update the site myself after launch?
5. Do you offer post-launch support?
6. How do I get started?
