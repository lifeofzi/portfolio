import type { Metadata } from 'next';
import { Navigation } from '@/components/molecules/Navigation';
import { contactInfo } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Hire Zaman Ishtiyaq — AI-Native Backend Engineer',
  description: 'AI-Native Backend Engineer for hire. Agent systems, LLM pipelines, full-stack products. Goldman Sachs · BrightEdge · Atlan. Remote worldwide.',
  alternates: { canonical: 'https://www.zamanishtiyaq.work/hire' },
  openGraph: {
    title: 'Hire Zaman Ishtiyaq — AI Automations, Agentic Systems & Full-Stack Development',
    description: 'AI-Native Backend Engineer for hire. Agent systems, LLM pipelines, and full-stack products built to Goldman Sachs and BrightEdge production standards. Remote worldwide.',
    url: 'https://www.zamanishtiyaq.work/hire',
  },
};

const services = [
  {
    title: 'AI Automations & Agentic Systems',
    description: 'Multi-agent systems, LLM pipelines, and end-to-end AI automations — built with OpenAI Agents SDK, Temporal, and FastAPI. Agents that take real actions, not just chatbots.',
    examples: ['Multi-agent restaurant analytics (OpenAI Agents SDK)', 'Durable AI pipelines with Temporal', 'LLM + tool-calling workflows'],
    color: '#fde68a',
  },
  {
    title: 'Web Application',
    description: 'Full-stack SaaS products, dashboards, and tools. From database schema to deployed frontend — one person, full ownership.',
    examples: ['Offer X-Ray — AI offer analysis', 'Architex — architecture platform', 'ReelRocket — UGC content studio'],
    color: '#bbf7d0',
  },
  {
    title: 'Custom Website',
    description: 'Marketing sites, landing pages, portfolio sites, and artist websites — designed and built to convert. Fast, SEO-optimised, mobile-first.',
    examples: ['Ali Saffudin — artist site', 'zamanishtiyaq.work — this site'],
    color: '#bfdbfe',
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

const BASE = 'https://www.zamanishtiyaq.work';

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
        seller: { '@id': `${BASE}/#person` },
      },
      review: {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Benjamin McDermott',
          jobTitle: 'AI Product Manager',
          url: 'https://www.linkedin.com/in/bmcde/',
        },
        reviewBody: 'Zaman was a key backend engineer on the AI Catalyst project at BrightEdge, and his contributions were essential to the success of the feature. He brought a steady, dependable presence to the team—consistently delivering high-quality code and tackling complex backend challenges with care and precision. Zaman was a pleasure to work with—quietly reliable, technically solid, and a great teammate throughout the project. Any team would benefit from having him on board.',
        datePublished: '2025-06-24',
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
          <div data-anim="fade-up" className="inline-flex items-center gap-2 px-4 py-2 bg-[#bbf7d0] border-[3px] border-black rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] mb-6 font-display text-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Currently accepting new projects
          </div>

          <h1 data-anim="split" className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-black leading-tight mb-4" style={{ visibility: 'hidden' }}>
            Hire an AI-Native<br />
            <span className="px-2 py-1 bg-[#facc15] border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] inline-block mt-2">
              Backend Engineer
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-display font-semibold text-black/70 mb-4">
            Agent systems · LLM pipelines · Full-stack products · iOS apps
          </p>

          <p className="text-lg sm:text-xl text-black/80 font-display max-w-2xl mb-8 leading-relaxed">
            I&apos;m Zaman — a freelance AI-native backend engineer with 7+ years at Goldman Sachs (market risk systems), BrightEdge (200K+ daily API requests, 250+ Fortune 500 clients), and Atlan. Available to hire remotely worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="btn-neo bg-black text-white"
            >
              Start a Project Conversation
            </a>
            <a
              href="https://cal.com/zaman-ishtiyaq-20r7dl/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neo bg-white text-black"
            >
              Book a Free 30-min Call
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
          <div data-anim="stagger" className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
          <div data-anim="stagger" className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { label: 'AI-native engineering', body: 'Multi-agent systems with OpenAI Agents SDK, durable pipelines with Temporal, LLM integrations in production — not toy demos.' },
              { label: 'Full ownership', body: 'I handle design, frontend, backend, AI integration, and deployment — one person, no hand-offs, no bottlenecks.' },
              { label: 'Shipped products', body: '7+ years at Goldman Sachs (market risk systems), BrightEdge (250+ Fortune 500 clients), and Atlan (Gartner Magic Quadrant Leader). 6 live indie projects. Production-grade, not proof-of-concept.' },
            ].map((item) => (
              <div key={item.label} className="neo-card rounded-2xl p-5 sm:p-6 bg-white hover:-translate-y-1 transition-transform duration-150">
                <h3 className="text-lg sm:text-xl font-display font-extrabold text-black mb-2">{item.label}</h3>
                <p className="text-sm sm:text-base text-black/70 font-display leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-pad border-b-[3px] border-black bg-white">
        <div className="section-inner-md">
          <h2 className="section-heading text-center mb-10">What Colleagues Say</h2>
          <div data-anim="fade-up" className="neo-card rounded-2xl p-6 sm:p-8 bg-[#fef3c7] max-w-2xl mx-auto">
            <p className="text-base sm:text-lg font-display text-black/85 leading-relaxed mb-6">
              &ldquo;Zaman was a key backend engineer on the AI Catalyst project at BrightEdge, and his contributions were essential to the success of the feature. He brought a steady, dependable presence to the team—consistently delivering high-quality code and tackling complex backend challenges with care and precision.
              <br /><br />
              Whether it was implementing new services, optimizing performance, or supporting integration efforts, Zaman was always proactive and detail-oriented. He had a strong grasp of the system architecture and was quick to jump in and troubleshoot when needed.
              <br /><br />
              Zaman was a pleasure to work with—quietly reliable, technically solid, and a great teammate throughout the project. Any team would benefit from having him on board.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-[2px] border-black overflow-hidden flex-shrink-0 bg-[#bfdbfe] flex items-center justify-center">
                <span className="font-display font-bold text-sm text-black">BM</span>
              </div>
              <div>
                <p className="font-display font-bold text-black text-sm">Benjamin McDermott</p>
                <p className="font-display text-black/60 text-xs">AI Product Manager · BrightEdge · MSCS, MBA</p>
              </div>
              <a
                href="https://www.linkedin.com/in/bmcde/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs font-display font-semibold text-black/50 hover:text-black underline underline-offset-2 transition-colors"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad border-b-[3px] border-black bg-white">
        <div className="section-inner-md">
          <h2 className="section-heading text-center mb-10">Common Questions</h2>
          <div data-anim="stagger" className="space-y-4">
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
      <section className="py-16 sm:py-20 bg-[#fde68a] border-b-[3px] border-black">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold mb-4 text-black">
            Ready to build something?
          </h2>
          <p className="text-base sm:text-lg text-black/65 font-display mb-8 max-w-xl mx-auto">
            AI automation, agentic system, or full-stack product — send me a short brief with what you want to build. I&apos;ll reply within 24 hours.
          </p>
          <a
            href={`mailto:${contactInfo.email}?subject=Project Enquiry`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-display font-bold text-lg border-[3px] border-black rounded-xl shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-transform duration-150"
          >
            Email zaman.ishtiyaq@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
