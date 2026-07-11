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
  description:
    'Fixed-price website design services: landing pages from $299, multi-page sites from $749, and custom builds from $1,800. Fast delivery, mobile-first, SEO-ready.',
  alternates: { canonical: `${BASE}/design` },
  openGraph: {
    title: 'Website Design Services — Zaman Ishtiyaq',
    description:
      'Landing pages, multi-page sites, and custom builds. Fixed price, clear timeline, you own everything.',
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
      description:
        'Fixed-price website design and development services. Starter landing pages, Standard multi-page sites, and Custom platform builds — all mobile-optimized, SEO-ready, and delivered on time.',
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
            Book a free 30-minute call or drop me a WhatsApp — I&apos;ll reply within 24 hours with
            a quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookCallButton
              label="Book a free call"
              className="bg-[#facc15] text-black border-[#facc15]"
            />
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
