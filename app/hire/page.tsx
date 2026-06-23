import type { Metadata } from 'next';
import { Navigation } from '@/components/molecules/Navigation';
import { contactInfo } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Hire Zaman Ishtiyaq — Freelance Web & AI Developer',
  description: 'Hire Zaman Ishtiyaq to build your website, web app, or AI-powered product. Full-stack developer with 7+ years of experience. Remote-friendly worldwide. Fast turnaround. Get in touch today.',
  alternates: { canonical: 'https://zamanishtiyaq.work/hire' },
  openGraph: {
    title: 'Hire Zaman Ishtiyaq — Freelance Web & AI Developer',
    description: 'Custom websites, web apps, and AI tools built from idea to production. 7+ years of experience. Remote-friendly.',
    url: 'https://zamanishtiyaq.work/hire',
  },
};

const services = [
  {
    title: 'Custom Website',
    description: 'Marketing sites, landing pages, portfolio sites, and artist websites — designed and built to convert. Fast, SEO-optimised, mobile-first.',
    examples: ['Ali Saffudin — artist site', 'zamanishtiyaq.work — this site'],
    color: '#bfdbfe',
  },
  {
    title: 'Web Application',
    description: 'Full-stack SaaS products, dashboards, and tools. From database schema to deployed frontend — one person, full ownership.',
    examples: ['Offer X-Ray — AI offer analysis', 'Architex — architecture platform', 'ReelRocket — UGC content studio'],
    color: '#bbf7d0',
  },
  {
    title: 'AI Integration',
    description: 'Add AI features to your existing product or build one from scratch — LLM pipelines, document analysis, content generation, chatbots.',
    examples: ['OpenAI API integrations', 'Whisper voice transcription', 'Custom LLM workflows'],
    color: '#fde68a',
  },
  {
    title: 'iOS App',
    description: 'Native Swift/SwiftUI iOS apps shipped to the App Store. Two live apps with real users — Muhasaba and Spree.',
    examples: ['Muhasaba — App Store', 'Spree — App Store'],
    color: '#fce7f3',
  },
];

const faqs = [
  {
    q: 'How quickly can you start?',
    a: 'Usually within a week. Send me a message and I\'ll let you know current availability.',
  },
  {
    q: 'How do you charge?',
    a: 'Fixed-price for well-defined projects. Hourly or retainer for ongoing work. I send a detailed quote before any work starts.',
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes — all my client work is remote. I\'ve worked with clients across time zones and am comfortable with async communication.',
  },
  {
    q: 'Can you handle design as well as development?',
    a: 'Yes. I handle the full stack including UI/UX design. You can see the design quality across my projects — Spree, Architex, and this portfolio.',
  },
];

const BASE = 'https://zamanishtiyaq.work';

const hireSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${BASE}/hire#service`,
      name: 'Freelance Web & AI Development',
      provider: {
        '@type': 'Person',
        '@id': `${BASE}/#person`,
        name: 'Zaman Ishtiyaq',
        email: 'zaman.ishtiyaq@gmail.com',
        url: BASE,
      },
      serviceType: ['Web Development', 'Full-Stack Development', 'AI Integration', 'iOS App Development'],
      description: 'Custom website and web application development for startups and businesses. Services include full-stack web apps (Next.js, React, TypeScript), AI/LLM feature integration, iOS apps (Swift/SwiftUI), and API development.',
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${BASE}/hire`,
        availableLanguage: 'English',
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        availableDeliveryMethod: 'https://schema.org/OnSitePickup',
        seller: { '@id': `${BASE}/#person` },
      },
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

export default function HirePage() {
  return (
    <div className="min-h-screen bg-[#fef3c7]">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hireSchema) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-[#fef3c7] border-b-[3px] border-black">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#bbf7d0] border-[3px] border-black rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] mb-6 font-display text-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Currently accepting new projects
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-black leading-tight mb-6">
            Hire Me to Build<br />
            <span className="px-2 py-1 bg-[#facc15] border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] inline-block mt-2">
              Your Website or App
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-black/80 font-display max-w-2xl mb-8 leading-relaxed">
            I&apos;m Zaman — a freelance full-stack developer with 7+ years of experience building for Goldman Sachs, BrightEdge, and Atlan. I take your idea from zero to a live, production-ready product.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${contactInfo.email}?subject=Project Enquiry`}
              className="btn-neo bg-black text-white"
            >
              Email Me a Brief
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neo bg-white text-black"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad border-b-[3px] border-black bg-white">
        <div className="section-inner">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="section-heading mb-3">What I Build</h2>
            <p className="section-sub">End-to-end delivery — design, development, and deployment</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="neo-card rounded-2xl p-5 sm:p-7 hover:-translate-y-1 transition-transform duration-150"
                style={{ backgroundColor: s.color }}
              >
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-black mb-2">{s.title}</h3>
                <p className="text-sm sm:text-base text-black/80 font-display leading-relaxed mb-4">{s.description}</p>
                <div className="space-y-1">
                  {s.examples.map((ex) => (
                    <div key={ex} className="flex items-center gap-2 text-xs sm:text-sm font-display font-semibold text-black/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why me */}
      <section className="section-pad border-b-[3px] border-black bg-[#fef08a]">
        <div className="section-inner-md">
          <h2 className="section-heading text-center mb-10">Why Work With Me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { label: 'Full ownership', body: 'I handle design, frontend, backend, and deployment — no hand-offs, no bottlenecks.' },
              { label: 'Shipped products', body: '6 live projects including two App Store apps. I know what it takes to cross the finish line.' },
              { label: 'Senior-level quality', body: '7+ years at Goldman Sachs, BrightEdge, and Atlan. Production-grade code, not just demos.' },
            ].map((item) => (
              <div key={item.label} className="neo-card rounded-2xl p-5 sm:p-6 bg-white hover:-translate-y-1 transition-transform duration-150">
                <h3 className="text-lg sm:text-xl font-display font-extrabold text-black mb-2">{item.label}</h3>
                <p className="text-sm sm:text-base text-black/70 font-display leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad border-b-[3px] border-black bg-white">
        <div className="section-inner-md">
          <h2 className="section-heading text-center mb-10">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="neo-card rounded-2xl p-5 sm:p-6 bg-[#fef3c7]">
                <h3 className="text-base sm:text-lg font-display font-bold text-black mb-2">{q}</h3>
                <p className="text-sm sm:text-base text-black/70 font-display leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold mb-4">
            Ready to build something?
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-display mb-8 max-w-xl mx-auto">
            Send me a short brief — what you want to build, your timeline, and your budget. I&apos;ll reply within 24 hours.
          </p>
          <a
            href={`mailto:${contactInfo.email}?subject=Project Enquiry`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#facc15] text-black font-display font-bold text-lg border-[3px] border-[#facc15] rounded-xl shadow-[6px_6px_0_0_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-transform duration-150"
          >
            Email zaman.ishtiyaq@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
