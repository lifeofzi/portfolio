import type { Metadata } from 'next';
import { Navigation } from '@/components/molecules/Navigation';
import { DesignHero } from '@/components/organisms/DesignHero';
import { PricingTiers } from '@/components/organisms/PricingTiers';
import { PastWorkGrid } from '@/components/organisms/PastWorkGrid';
import { DesignProcess } from '@/components/organisms/DesignProcess';
import { DesignFAQ } from '@/components/organisms/DesignFAQ';
import { DesignCta } from '@/components/organisms/DesignCta';
import { faqs, pricingTiers } from '@/data/design';

const BASE = 'https://www.zamanishtiyaq.work';

export const metadata: Metadata = {
  title: 'Landing Page & Custom Web Design Services | Zaman Ishtiyaq',
  description:
    'Custom landing page design from $299. Full custom web design & development for startups. Fixed price, fast delivery, SEO-ready. Book a free call.',
  alternates: { canonical: `${BASE}/design` },
  openGraph: {
    title: 'Landing Page & Custom Web Design Services | Zaman Ishtiyaq',
    description:
      'Landing pages from $299, multi-page sites from $749, custom platforms from $1,800. Fixed price, mobile-first, SEO-ready.',
    url: `${BASE}/design`,
  },
};

const designSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${BASE}/design#webpage`,
      url: `${BASE}/design`,
      name: 'Landing Page & Custom Web Design Services | Zaman Ishtiyaq',
      description: 'Custom landing page design from $299. Full custom web design & development for startups. Fixed price, fast delivery, SEO-ready.',
      isPartOf: { '@id': `${BASE}/#website` },
      about: { '@id': `${BASE}/#person` },
      breadcrumb: { '@id': `${BASE}/design#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE}/design#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Website Design', item: `${BASE}/design` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${BASE}/design#service`,
      name: 'Landing Page & Custom Web Design',
      provider: {
        '@type': 'Person',
        '@id': `${BASE}/#person`,
        name: 'Zaman Ishtiyaq',
        email: 'zaman.ishtiyaq@gmail.com',
        url: BASE,
      },
      serviceType: [
        'Landing Page Design',
        'Custom Web Design',
        'Web Development',
        'Website Design',
        'Startup Website Design',
        'SaaS Landing Page',
        'Portfolio Website Design',
        'Mobile-First Web Design',
      ],
      description:
        'Fixed-price landing page and custom web design services. Starter landing pages from $299, Standard multi-page sites from $749, Custom platforms from $1,800. Mobile-first, SEO-ready, fast delivery.',
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'India' },
        'Worldwide',
      ],
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${BASE}/design`,
        availableLanguage: { '@type': 'Language', name: 'English' },
      },
      offers: pricingTiers.map((tier) => ({
        '@type': 'Offer',
        name: `${tier.name} Website Design`,
        price: tier.id === 'starter' ? '299' : tier.id === 'standard' ? '749' : '1800',
        priceCurrency: 'USD',
        description: tier.bullets.join('. '),
        availability: 'https://schema.org/InStock',
        seller: { '@id': `${BASE}/#person` },
      })),
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
    <div>
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
      <DesignCta />
    </div>
  );
}
