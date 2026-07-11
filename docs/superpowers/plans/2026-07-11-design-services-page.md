# Design Services Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/design` page offering 3 tiers of website design services, a past-work grid with screenshots, a Cal.com booking CTA, a WhatsApp CTA, full JSON-LD schema, and a homepage teaser — all matching the existing neo-brutalist design system.

**Architecture:** Route `app/design/page.tsx` assembles 6 organism components that each own their own styling. Data lives in `data/design.ts`. A one-time Playwright script captures 5 screenshots into `public/design-work/`. Homepage teaser, nav link, sitemap, and llms.txt are wired up after the page is assembled.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS (utility classes in components), global CSS classes from `globals.css`, Playwright (already installed at `^1.61.1`).

## Global Constraints

- No `@apply font-display` in CSS modules — use `className="font-display"` in JSX (it's defined as a regular class in `globals.css`, not a Tailwind utility)
- No inline layout/flex styles in page.tsx JSX — layout belongs in component files
- Global utility classes to reuse (defined in `globals.css`): `neo-card`, `neo-pill`, `btn-neo`, `btn-neo-sm`, `section-pad`, `section-inner`, `section-inner-md`, `section-heading`, `section-sub`, `font-display`
- `neo-card` expands to: `bg-white border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]`
- `btn-neo` expands to: `font-display text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-[3px] border-black rounded-xl shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] hover:-translate-y-1 transition-transform duration-150 inline-flex items-center gap-2 justify-center`
- Site background: `#fef3c7` (amber-100). Dark sections use `bg-black text-white`.
- Cal.com URL: `https://cal.com/zaman-ishtiyaq-20r7dl/30min?overlayCalendar=true`
- WhatsApp base: `https://wa.me/918851985235`
- BASE URL constant: `https://www.zamanishtiyaq.work`
- TypeScript strict — no `any`, no unused imports

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `data/design.ts` | Create | All page content: tiers, past work, FAQ, process steps |
| `components/atoms/BookCallButton.tsx` | Create | Cal.com CTA button (reusable) |
| `components/atoms/WhatsAppButton.tsx` | Create | WhatsApp CTA button with prefilled message prop |
| `components/organisms/DesignHero.tsx` | Create | Hero section with headline + two CTAs |
| `components/molecules/PricingCard.tsx` | Create | Single pricing card (name, price, bullets, two CTAs, badge) |
| `components/organisms/PricingTiers.tsx` | Create | Three-column pricing grid |
| `components/molecules/PastWorkCard.tsx` | Create | Screenshot card (image, caption, URL) |
| `components/organisms/PastWorkGrid.tsx` | Create | 5-card grid of past websites |
| `components/organisms/DesignProcess.tsx` | Create | 4-step how-it-works timeline |
| `components/organisms/DesignFAQ.tsx` | Create | Accordion FAQ (client component) |
| `app/design/page.tsx` | Create | Route shell: metadata, JSON-LD, section assembly |
| `scripts/capture-design-screenshots.ts` | Create | One-time Playwright screenshot capture |
| `public/design-work/*.png` | Create (script) | 5 site screenshots committed to repo |
| `app/page.tsx` | Modify | Add homepage teaser section |
| `app/page.module.css` | Modify | Add teaser section styles |
| `components/molecules/Navigation.tsx` | Modify | Add `/design` nav link |
| `app/sitemap.ts` | Modify | Add `/design` route |
| `public/llms.txt` | Modify | Add design services page entry |

---

## Task 1: Data Layer

**Files:**
- Create: `data/design.ts`

**Interfaces:**
- Produces: `PricingTier`, `PastWorkItem`, `FaqItem`, `ProcessStep` types + named exports `pricingTiers`, `pastWork`, `faqs`, `processSteps`

- [ ] **Step 1: Create `data/design.ts`**

```typescript
export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  delivery: string;
  bullets: string[];
  revisions: string;
  popular?: boolean;
  waMessage: string;
  color: string;
}

export interface PastWorkItem {
  id: string;
  name: string;
  caption: string;
  url: string;
  image: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  color: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$299',
    delivery: '1 week',
    bullets: [
      '1-page website',
      'Mobile-optimized',
      'Contact form',
      'Basic on-page SEO',
    ],
    revisions: '2 revisions',
    popular: false,
    waMessage: "Hi, I'm interested in the Starter website design package ($299).",
    color: '#bfdbfe',
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '$749',
    delivery: '2 weeks',
    bullets: [
      '3–5 pages',
      'CMS-ready (blog/portfolio)',
      'SEO basics + analytics',
      'Mobile-optimized',
      'Contact form',
    ],
    revisions: '3 revisions',
    popular: true,
    waMessage: "Hi, I'm interested in the Standard website design package ($749).",
    color: '#bbf7d0',
  },
  {
    id: 'custom',
    name: 'Custom',
    price: 'from $1,800',
    delivery: '3–4 weeks',
    bullets: [
      'Multi-page, any scope',
      'Custom features (booking, dashboards, integrations)',
      'Full SEO setup + analytics',
      'Performance optimization',
    ],
    revisions: 'Unlimited (in scope)',
    popular: false,
    waMessage: "Hi, I'm interested in a Custom website design — happy to share more details.",
    color: '#fde68a',
  },
];

export const pastWork: PastWorkItem[] = [
  {
    id: 'muhasaba',
    name: 'Muhasaba',
    caption: 'iOS-companion marketing site',
    url: 'https://muhasaba.me/',
    image: '/design-work/muhasaba.png',
  },
  {
    id: 'villa-cottages',
    name: 'Villa Cottages',
    caption: 'Full-stack booking site for a Kashmir boutique stay',
    url: 'https://villacottages.in/',
    image: '/design-work/villa-cottages.png',
  },
  {
    id: 'altayyab',
    name: 'Al Tayyab Global Consultants',
    caption: 'Corporate site for a global consulting firm',
    url: 'https://www.altayyabglobalconsultants.com/',
    image: '/design-work/altayyab.png',
  },
  {
    id: 'ali-saffudin',
    name: 'Ali Saffudin',
    caption: 'Cinematic artist site with interactive cassette EP player',
    url: 'https://alisaffudin.com/',
    image: '/design-work/alisaffudin.png',
  },
  {
    id: 'offerxray',
    name: 'Offer X-Ray',
    caption: 'AI SaaS landing page for offer-letter analysis',
    url: 'https://www.offerxray.com/',
    image: '/design-work/offerxray.png',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Book a call',
    description: 'A 30-minute intro call to understand your goals, audience, and timeline.',
    color: '#bfdbfe',
  },
  {
    number: '02',
    title: 'Brief & quote',
    description: 'You share brand assets and content. I send a fixed-price quote within 24 hours.',
    color: '#bbf7d0',
  },
  {
    number: '03',
    title: 'Design & build',
    description: 'I design and develop the site, sharing progress for your feedback.',
    color: '#fde68a',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Final review, revisions, and go-live. You own everything.',
    color: '#fce7f3',
  },
];

export const faqs: FaqItem[] = [
  {
    q: 'How long does it take to build a website?',
    a: 'Starter sites take about 1 week, Standard 2 weeks, and Custom projects 3–4 weeks. Timeline starts once I have all content and assets from you.',
  },
  {
    q: 'How many revisions are included?',
    a: 'Starter includes 2 rounds of revisions, Standard includes 3, and Custom includes unlimited revisions within the agreed scope.',
  },
  {
    q: 'Do you handle domain and hosting?',
    a: 'I set up and configure hosting for your site. You purchase and own the domain — I guide you through connecting it.',
  },
  {
    q: 'Can I update the site myself after launch?',
    a: 'Standard and Custom sites are CMS-ready, so yes — you can update content without touching code. I also hand over a short walkthrough video.',
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'All packages include 2 weeks of post-launch support for bug fixes. Ongoing support is available as a retainer — ask me for details.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a free 30-minute call using the button on this page, or drop me a WhatsApp. We\'ll scope the project and I\'ll send a quote within 24 hours.',
  },
];
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/zamanishtiyaq/conductor/workspaces/portfolio/las-vegas
npx tsc --noEmit 2>&1 | head -20
```
Expected: no errors from `data/design.ts`.

- [ ] **Step 3: Commit**

```bash
git add data/design.ts
git commit -m "feat(design): add design services data layer"
```

---

## Task 2: Atom Components — BookCallButton + WhatsAppButton

**Files:**
- Create: `components/atoms/BookCallButton.tsx`
- Create: `components/atoms/WhatsAppButton.tsx`

**Interfaces:**
- Consumes: nothing from prior tasks
- Produces:
  - `BookCallButton({ className?: string, label?: string })` — links to Cal.com
  - `WhatsAppButton({ message: string, className?: string, label?: string })` — links to wa.me with prefilled message

- [ ] **Step 1: Create `components/atoms/BookCallButton.tsx`**

```tsx
interface Props {
  className?: string;
  label?: string;
}

export function BookCallButton({ className = '', label = 'Book a call' }: Props) {
  return (
    <a
      href="https://cal.com/zaman-ishtiyaq-20r7dl/30min?overlayCalendar=true"
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-neo bg-black text-white ${className}`}
    >
      {label}
    </a>
  );
}
```

- [ ] **Step 2: Create `components/atoms/WhatsAppButton.tsx`**

```tsx
interface Props {
  message: string;
  className?: string;
  label?: string;
}

export function WhatsAppButton({ message, className = '', label = 'WhatsApp me' }: Props) {
  const encoded = encodeURIComponent(message);
  return (
    <a
      href={`https://wa.me/918851985235?text=${encoded}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-neo bg-[#25D366] text-black ${className}`}
    >
      {label}
    </a>
  );
}
```

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit 2>&1 | head -20
```
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/atoms/BookCallButton.tsx components/atoms/WhatsAppButton.tsx
git commit -m "feat(design): add BookCallButton and WhatsAppButton atoms"
```

---

## Task 3: DesignHero Component

**Files:**
- Create: `components/organisms/DesignHero.tsx`

**Interfaces:**
- Consumes: `BookCallButton` from `@/components/atoms/BookCallButton`, `WhatsAppButton` from `@/components/atoms/WhatsAppButton`
- Produces: `DesignHero()` — no props (self-contained)

- [ ] **Step 1: Create `components/organisms/DesignHero.tsx`**

```tsx
import { BookCallButton } from '@/components/atoms/BookCallButton';
import { WhatsAppButton } from '@/components/atoms/WhatsAppButton';

export function DesignHero() {
  return (
    <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-[#fef3c7] border-b-[3px] border-black">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#bfdbfe] border-[3px] border-black rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] mb-6 font-display text-sm font-bold">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Websites that convert
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-black leading-tight mb-6">
          Websites built<br />end-to-end —{' '}
          <span className="px-2 py-1 bg-[#facc15] border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] inline-block mt-2">
            design to launch
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-black/80 font-display max-w-2xl mb-8 leading-relaxed">
          I design and build fast, conversion-focused websites for startups, consultants, and creators — from a single landing page to a full multi-page platform. Fixed price, clear timeline, you own everything at the end.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <BookCallButton label="Book a free call" />
          <WhatsAppButton
            message="Hi, I'm interested in getting a website built — can we chat?"
            label="WhatsApp me"
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit 2>&1 | head -20
```
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/organisms/DesignHero.tsx
git commit -m "feat(design): add DesignHero organism"
```

---

## Task 4: PricingCard + PricingTiers

**Files:**
- Create: `components/molecules/PricingCard.tsx`
- Create: `components/organisms/PricingTiers.tsx`

**Interfaces:**
- Consumes: `PricingTier` type from `@/data/design`, `pricingTiers` array, `BookCallButton`, `WhatsAppButton`
- Produces: `PricingCard({ tier: PricingTier })`, `PricingTiers()` (no props)

- [ ] **Step 1: Create `components/molecules/PricingCard.tsx`**

```tsx
import { BookCallButton } from '@/components/atoms/BookCallButton';
import { WhatsAppButton } from '@/components/atoms/WhatsAppButton';
import type { PricingTier } from '@/data/design';

interface Props {
  tier: PricingTier;
}

export function PricingCard({ tier }: Props) {
  return (
    <div
      className={`neo-card rounded-2xl p-6 sm:p-8 flex flex-col relative ${tier.popular ? 'ring-4 ring-black' : ''}`}
      style={{ backgroundColor: tier.color }}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-black text-white text-xs font-display font-bold border-[2px] border-black rounded-full shadow-[3px_3px_0_0_rgba(0,0,0,0.4)] whitespace-nowrap">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-display font-extrabold text-black mb-1">{tier.name}</h3>
      <div className="text-3xl sm:text-4xl font-display font-extrabold text-black mb-1">{tier.price}</div>
      <div className="text-sm font-display text-black/70 mb-5">Delivered in {tier.delivery}</div>

      <ul className="space-y-2 mb-4 flex-1">
        {tier.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm font-display text-black/80">
            <span className="mt-1 w-4 h-4 flex-shrink-0 rounded-full bg-black text-white flex items-center justify-center text-[10px]">✓</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="text-xs font-display text-black/60 mb-5">{tier.revisions}</div>

      <div className="flex flex-col gap-2">
        <BookCallButton className="w-full justify-center" label="Book a call" />
        <WhatsAppButton
          message={tier.waMessage}
          className="w-full justify-center"
          label="WhatsApp me"
        />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create `components/organisms/PricingTiers.tsx`**

```tsx
import { pricingTiers } from '@/data/design';
import { PricingCard } from '@/components/molecules/PricingCard';

export function PricingTiers() {
  return (
    <section className="section-pad border-b-[3px] border-black bg-white">
      <div className="section-inner">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-heading mb-3">Choose a Package</h2>
          <p className="section-sub">Fixed price, clear timeline — no surprises</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-start mt-8">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit 2>&1 | head -20
```
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/molecules/PricingCard.tsx components/organisms/PricingTiers.tsx
git commit -m "feat(design): add PricingCard and PricingTiers components"
```

---

## Task 5: PastWorkCard + PastWorkGrid

> **Note:** Screenshots in `public/design-work/` are captured by Task 8. These components render an `<img>` pointing to those paths. If Task 8 hasn't run yet, the images will 404 in dev — that is expected. Complete Task 8 before testing this visually.

**Files:**
- Create: `components/molecules/PastWorkCard.tsx`
- Create: `components/organisms/PastWorkGrid.tsx`

**Interfaces:**
- Consumes: `PastWorkItem` type, `pastWork` array from `@/data/design`
- Produces: `PastWorkCard({ item: PastWorkItem })`, `PastWorkGrid()` (no props)

- [ ] **Step 1: Create `components/molecules/PastWorkCard.tsx`**

```tsx
import Image from 'next/image';
import type { PastWorkItem } from '@/data/design';

interface Props {
  item: PastWorkItem;
}

export function PastWorkCard({ item }: Props) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="neo-card rounded-2xl overflow-hidden group block hover:-translate-y-1 transition-transform duration-150"
    >
      <div className="relative w-full aspect-video bg-[#f5f5f5]">
        <Image
          src={item.image}
          alt={`Screenshot of ${item.name}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-base font-display font-bold text-black mb-1">{item.name}</h3>
        <p className="text-sm font-display text-black/60">{item.caption}</p>
        <div className="mt-2 text-xs font-display font-semibold text-black/40 group-hover:text-black transition-colors">
          Visit site →
        </div>
      </div>
    </a>
  );
}
```

- [ ] **Step 2: Create `components/organisms/PastWorkGrid.tsx`**

```tsx
import { pastWork } from '@/data/design';
import { PastWorkCard } from '@/components/molecules/PastWorkCard';

export function PastWorkGrid() {
  return (
    <section className="section-pad border-b-[3px] border-black bg-[#fef3c7]">
      <div className="section-inner">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-heading mb-3">Recent Work</h2>
          <p className="section-sub">Websites I&apos;ve designed and built</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastWork.map((item) => (
            <PastWorkCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit 2>&1 | head -20
```
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/molecules/PastWorkCard.tsx components/organisms/PastWorkGrid.tsx
git commit -m "feat(design): add PastWorkCard and PastWorkGrid components"
```

---

## Task 6: DesignProcess Component

**Files:**
- Create: `components/organisms/DesignProcess.tsx`

**Interfaces:**
- Consumes: `processSteps` from `@/data/design`
- Produces: `DesignProcess()` (no props)

- [ ] **Step 1: Create `components/organisms/DesignProcess.tsx`**

```tsx
import { processSteps } from '@/data/design';

export function DesignProcess() {
  return (
    <section className="section-pad border-b-[3px] border-black bg-white">
      <div className="section-inner">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-heading mb-3">How It Works</h2>
          <p className="section-sub">From first call to live site in 4 steps</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className="neo-card rounded-2xl p-6 relative"
              style={{ backgroundColor: step.color }}
            >
              <div className="text-5xl font-display font-extrabold text-black/10 mb-2 leading-none">
                {step.number}
              </div>
              <h3 className="text-xl font-display font-extrabold text-black mb-2">{step.title}</h3>
              <p className="text-sm font-display text-black/70 leading-relaxed">{step.description}</p>
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-2xl text-black/30 font-display font-bold">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit 2>&1 | head -20
```
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/organisms/DesignProcess.tsx
git commit -m "feat(design): add DesignProcess organism"
```

---

## Task 7: DesignFAQ Component

**Files:**
- Create: `components/organisms/DesignFAQ.tsx`

**Interfaces:**
- Consumes: `faqs` from `@/data/design`
- Produces: `DesignFAQ()` (no props) — `'use client'` (accordion needs state)

- [ ] **Step 1: Create `components/organisms/DesignFAQ.tsx`**

```tsx
'use client';

import { useState } from 'react';
import { faqs } from '@/data/design';

export function DesignFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-pad border-b-[3px] border-black bg-[#fef3c7]">
      <div className="section-inner-md">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-heading mb-3">Common Questions</h2>
          <p className="section-sub">Everything you need to know before we start</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="neo-card rounded-2xl bg-white overflow-hidden">
              <button
                className="w-full text-left px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-base sm:text-lg font-display font-bold text-black">{faq.q}</span>
                <span className="text-xl font-display font-bold text-black flex-shrink-0">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div className="px-5 sm:px-7 pb-4 sm:pb-5">
                  <p className="text-sm sm:text-base font-display text-black/70 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit 2>&1 | head -20
```
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/organisms/DesignFAQ.tsx
git commit -m "feat(design): add DesignFAQ accordion organism"
```

---

## Task 8: Screenshot Capture Script

**Files:**
- Create: `scripts/capture-design-screenshots.ts`
- Create (output): `public/design-work/muhasaba.png`, `villa-cottages.png`, `altayyab.png`, `alisaffudin.png`, `offerxray.png`

**Interfaces:**
- Produces: 5 PNG files at `public/design-work/` — used by `PastWorkCard` via `<Image src="/design-work/<id>.png" />`

- [ ] **Step 1: Create the screenshots directory**

```bash
mkdir -p /Users/zamanishtiyaq/conductor/workspaces/portfolio/las-vegas/public/design-work
```

- [ ] **Step 2: Create `scripts/capture-design-screenshots.ts`**

```typescript
import { chromium } from 'playwright';
import path from 'path';

const sites = [
  { id: 'muhasaba', url: 'https://muhasaba.me/' },
  { id: 'villa-cottages', url: 'https://villacottages.in/' },
  { id: 'altayyab', url: 'https://www.altayyabglobalconsultants.com/' },
  { id: 'alisaffudin', url: 'https://alisaffudin.com/' },
  { id: 'offerxray', url: 'https://www.offerxray.com/' },
];

const OUT_DIR = path.join(process.cwd(), 'public', 'design-work');

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  for (const site of sites) {
    console.log(`Capturing ${site.id}...`);
    try {
      await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(1500);
      const outPath = path.join(OUT_DIR, `${site.id}.png`);
      await page.screenshot({ path: outPath, fullPage: false });
      console.log(`  ✓ Saved ${outPath}`);
    } catch (err) {
      console.error(`  ✗ Failed ${site.id}:`, err);
    }
  }

  await browser.close();
}

main();
```

- [ ] **Step 3: Run the script**

```bash
cd /Users/zamanishtiyaq/conductor/workspaces/portfolio/las-vegas
npx ts-node --project tsconfig.json scripts/capture-design-screenshots.ts
```

If `ts-node` is not available, run via tsx:
```bash
npx tsx scripts/capture-design-screenshots.ts
```

Expected output:
```
Capturing muhasaba...
  ✓ Saved .../public/design-work/muhasaba.png
Capturing villa-cottages...
  ✓ Saved .../public/design-work/villa-cottages.png
...
```

- [ ] **Step 4: Verify 5 PNG files exist**

```bash
ls -lh public/design-work/
```
Expected: 5 `.png` files, each >50KB.

- [ ] **Step 5: Commit**

```bash
git add scripts/capture-design-screenshots.ts public/design-work/
git commit -m "feat(design): add screenshot capture script and committed screenshots"
```

---

## Task 9: Page Assembly — app/design/page.tsx

> **Requires Tasks 1–8 complete** before this task — all components and screenshots must exist.

**Files:**
- Create: `app/design/page.tsx`

**Interfaces:**
- Consumes: all organism components, `faqs` from `@/data/design` (for JSON-LD), `pricingTiers` (for schema Offers)
- Produces: `/design` route with full metadata and JSON-LD

- [ ] **Step 1: Create `app/design/page.tsx`**

```tsx
import type { Metadata } from 'next';
import { Navigation } from '@/components/molecules/Navigation';
import { DesignHero } from '@/components/organisms/DesignHero';
import { PricingTiers } from '@/components/organisms/PricingTiers';
import { PastWorkGrid } from '@/components/organisms/PastWorkGrid';
import { DesignProcess } from '@/components/organisms/DesignProcess';
import { DesignFAQ } from '@/components/organisms/DesignFAQ';
import { BookCallButton } from '@/components/atoms/BookCallButton';
import { WhatsAppButton } from '@/components/atoms/WhatsAppButton';
import { faqs, pricingTiers } from '@/data/design';

const BASE = 'https://www.zamanishtiyaq.work';

export const metadata: Metadata = {
  title: 'Website Design Services — Zaman Ishtiyaq',
  description: 'Fixed-price website design services: landing pages from $299, multi-page sites from $749, and custom builds from $1,800. Fast delivery, mobile-first, SEO-ready.',
  alternates: { canonical: `${BASE}/design` },
  openGraph: {
    title: 'Website Design Services — Zaman Ishtiyaq',
    description: 'Landing pages, multi-page sites, and custom builds. Fixed price, clear timeline, you own everything.',
    url: `${BASE}/design`,
  },
};

const designSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${BASE}/design#service`,
      name: 'Website Design & Development',
      provider: {
        '@type': 'Person',
        '@id': `${BASE}/#person`,
        name: 'Zaman Ishtiyaq',
        email: 'zaman.ishtiyaq@gmail.com',
        url: BASE,
      },
      serviceType: ['Website Design', 'Web Development', 'Landing Page Design'],
      description: 'Fixed-price website design and development services. Starter landing pages, Standard multi-page sites, and Custom platform builds — all mobile-optimized, SEO-ready, and delivered on time.',
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${BASE}/design`,
        availableLanguage: 'English',
      },
      offers: pricingTiers.map((tier) => ({
        '@type': 'Offer',
        name: `${tier.name} Website Design`,
        price: tier.id === 'starter' ? '299' : tier.id === 'standard' ? '749' : '1800',
        priceCurrency: 'USD',
        description: tier.bullets.join('. '),
        seller: { '@id': `${BASE}/#person` },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Website Design', item: `${BASE}/design` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

export default function DesignPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(designSchema) }}
      />

      <DesignHero />
      <PricingTiers />
      <PastWorkGrid />
      <DesignProcess />
      <DesignFAQ />

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold mb-4">
            Ready to build your website?
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-display mb-8 max-w-xl mx-auto">
            Book a free 30-minute call or drop me a WhatsApp — I&apos;ll reply within 24 hours with a quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookCallButton label="Book a free call" className="bg-[#facc15] text-black border-[#facc15]" />
            <WhatsAppButton
              message="Hi, I'd like to get a website built — can we chat?"
              label="WhatsApp me"
              className="bg-white text-black"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit 2>&1 | head -30
```
Expected: no errors.

- [ ] **Step 3: Verify dev server renders the page**

```bash
# Start dev server in background if not running
npx next dev --port 3001 &
sleep 5
curl -s http://localhost:3001/design | grep -o '<title>[^<]*' | head -3
```
Expected: contains `Website Design Services`.

- [ ] **Step 4: Commit**

```bash
git add app/design/page.tsx
git commit -m "feat(design): add /design page with full metadata and JSON-LD schema"
```

---

## Task 10: Homepage Teaser + Nav + Sitemap + llms.txt

**Files:**
- Modify: `app/page.tsx` — add teaser section
- Modify: `app/page.module.css` — add teaser styles
- Modify: `components/molecules/Navigation.tsx` — add `/design` nav item
- Modify: `app/sitemap.ts` — add `/design` route
- Modify: `public/llms.txt` — add design page entry

**Interfaces:**
- Consumes: existing `page.tsx` structure, existing `navItems` array in Navigation

- [ ] **Step 1: Add `/design` to Navigation `navItems`**

In `components/molecules/Navigation.tsx`, find the `navItems` array and add the Design entry after Hire Me:

```typescript
// EXISTING (find this):
const navItems = [
  { href: '/', label: 'Home', bg: 'bg-[#fef08a]' },
  { href: '/projects', label: 'Projects', bg: 'bg-[#bfdbfe]' },
  { href: '/blog', label: 'Blog', bg: 'bg-[#fce7f3]' },
  { href: '/products', label: 'Products', bg: 'bg-[#e9d5ff]' },
  { href: '/hire', label: 'Hire Me', bg: 'bg-[#bbf7d0]' },
];

// REPLACE WITH:
const navItems = [
  { href: '/', label: 'Home', bg: 'bg-[#fef08a]' },
  { href: '/projects', label: 'Projects', bg: 'bg-[#bfdbfe]' },
  { href: '/blog', label: 'Blog', bg: 'bg-[#fce7f3]' },
  { href: '/products', label: 'Products', bg: 'bg-[#e9d5ff]' },
  { href: '/hire', label: 'Hire Me', bg: 'bg-[#bbf7d0]' },
  { href: '/design', label: 'Web Design', bg: 'bg-[#fde68a]' },
];
```

- [ ] **Step 2: Add teaser CSS to `app/page.module.css`**

Append to the end of `app/page.module.css`:

```css
/* Design teaser section */
.designTeaserSection {
  padding: 5rem 1rem;
  background: #ffffff;
  border-bottom: 3px solid #000;
  text-align: center;
}

.designTeaserSection .container {
  max-width: 720px;
  margin: 0 auto;
}
```

- [ ] **Step 3: Add the teaser section in `app/page.tsx`**

First, add the import at the top of `app/page.tsx` (with existing imports):
```tsx
import Link from 'next/link';
```

Then find the `{/* Callback Section */}` in `app/page.tsx` and insert the design teaser **before** it:

```tsx
{/* Design Teaser Section */}
<section className={styles.designTeaserSection}>
  <div className={styles.container}>
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fde68a] border-[3px] border-black rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] mb-6 font-display text-sm font-bold">
      Website Design
    </div>
    <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-black mb-4">
      Need a website?
    </h2>
    <p className="text-base sm:text-lg font-display text-black/70 mb-8 max-w-lg mx-auto">
      Landing pages, multi-page sites, and custom builds — designed and built end-to-end. Fixed price, fast delivery.
    </p>
    <Link
      href="/design"
      className="btn-neo bg-black text-white inline-flex"
    >
      See services & pricing →
    </Link>
  </div>
</section>
```

- [ ] **Step 4: Add `/design` to `app/sitemap.ts`**

In `app/sitemap.ts`, find the `staticRoutes` array and add:

```typescript
// Add after the /hire entry:
{ url: `${BASE}/design`, lastModified: new Date('2026-07-11'), changeFrequency: 'monthly', priority: 0.9 },
```

- [ ] **Step 5: Add to `public/llms.txt`**

In `public/llms.txt`, find the `## Key Pages` section and add:

```
- [Website Design](https://www.zamanishtiyaq.work/design): Fixed-price website design services — Starter ($299), Standard ($749), Custom (from $1,800). Landing pages, multi-page sites, and custom platforms. Book a free 30-minute call.
```

Also in the `## Services` section, update the Custom Websites entry:

```
- Custom Websites: Marketing sites, landing pages, and portfolio sites — see /design for packages and pricing
```

- [ ] **Step 6: Verify TypeScript**

```bash
npx tsc --noEmit 2>&1 | head -30
```
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add components/molecules/Navigation.tsx app/page.tsx app/page.module.css app/sitemap.ts public/llms.txt
git commit -m "feat(design): wire up nav link, homepage teaser, sitemap, and llms.txt"
```

---

## Task 11: Full Build Verify + TypeScript Check

- [ ] **Step 1: Run TypeScript check**

```bash
npx tsc --noEmit 2>&1
```
Expected: zero errors.

- [ ] **Step 2: Run Next.js build**

```bash
npx next build 2>&1 | tail -30
```
Expected: `✓ Compiled successfully` with `/design` listed in the route output.

- [ ] **Step 3: Spot-check the /design page manually**

```bash
npx next start &
sleep 3
curl -s http://localhost:3000/design | grep -oE '(Website Design|Book a call|PricingTiers|DesignHero|application/ld\+json)' | head -10
```
Expected: finds `Website Design` and `application/ld+json`.

- [ ] **Step 4: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix(design): final build fixes and type errors"
```

---

## Parallel Execution Guide

Tasks **2–8 can run in parallel** after Task 1 completes (they only depend on the data file).  
Tasks **9** needs Tasks 2–8 all done.  
Task **10** needs Task 9 done.  
Task **11** needs Task 10 done.

Recommended agent dispatch order:
1. Task 1 (solo, first)
2. Tasks 2, 3, 4, 5, 6, 7, 8 in parallel (6 agents)
3. Task 9 (solo, after all parallel tasks done)
4. Task 10 (solo)
5. Task 11 (solo, verify)
