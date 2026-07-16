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
      'On-page SEO + GEO basics',
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
      'SEO + GEO setup + analytics',
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
      'Full SEO + GEO setup + analytics',
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
    id: 'gocsfl',
    name: 'Go Construction Services FL',
    caption: 'Portfolio and lead-gen site for a Florida general contractor',
    url: 'https://gocsfl.com/',
    image: '/design-work/gocsfl.png',
  },
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
  {
    q: 'Can you build a SaaS platform or MVP for a startup?',
    a: 'Yes — the Custom tier covers full SaaS and MVP builds. I handle everything: UI design, frontend, backend, database, auth, payments integration, and deployment. Most MVPs ship in 3–6 weeks.',
  },
];
