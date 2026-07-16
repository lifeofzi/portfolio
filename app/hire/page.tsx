import type { Metadata } from 'next';
import { Navigation } from '@/components/molecules/Navigation';
import { contactInfo } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Hire AI & Full-Stack Developer | Zaman Ishtiyaq',
  description: 'Hire a full-stack React & Python developer for AI agents, SaaS builds & iOS apps. Goldman Sachs · BrightEdge. Remote, fixed price.',
  alternates: { canonical: 'https://www.zamanishtiyaq.work/hire' },
  openGraph: {
    title: 'Hire an AI & Full-Stack Developer for AI Systems, SaaS & iOS',
    description: 'Hire a full-stack React & Python developer for AI agent development, SaaS builds & iOS apps. Goldman Sachs · BrightEdge. Remote worldwide, fixed price.',
    url: 'https://www.zamanishtiyaq.work/hire',
  },
};

const services = [
  {
    title: 'AI Automations & Agentic Systems',
    description: 'Custom AI agent development and AI workflow automation — built with OpenAI Agents SDK, Temporal, and FastAPI. Agentic systems that take real actions inside your business workflows, not just chatbot demos.',
    examples: ['Multi-agent restaurant analytics (OpenAI Agents SDK)', 'Durable AI pipelines with Temporal', 'LLM + tool-calling workflows'],
    color: '#fde68a',
  },
  {
    title: 'SaaS & Web Application',
    description: 'Full-stack SaaS platforms and MVPs built with React and Python. From database schema to deployed frontend — one developer, full ownership, fast time to market.',
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
  {
    q: 'Do you work on a retainer basis?',
    a: 'Yes — for ongoing work I offer monthly retainer arrangements. This works well for teams that need continuous development without the overhead of a full-time hire. Ask me about current availability.',
  },
  {
    q: 'Can you work with an existing React or Next.js codebase?',
    a: 'Absolutely. I work with existing React and Next.js codebases regularly — auditing, extending features, and reducing technical debt. Send me a link and I\'ll take a look before we commit to anything.',
  },
];

const BASE = 'https://www.zamanishtiyaq.work';

const hireSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${BASE}/hire#webpage`,
      url: `${BASE}/hire`,
      name: 'Hire React, AI & Full-Stack Developer | Zaman Ishtiyaq',
      description: 'Hire a full-stack React & Python developer for AI agent development, SaaS builds & iOS apps. Goldman Sachs · BrightEdge. Remote, fixed price.',
      isPartOf: { '@id': `${BASE}/#website` },
      about: { '@id': `${BASE}/#person` },
      breadcrumb: { '@id': `${BASE}/hire#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE}/hire#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Hire', item: `${BASE}/hire` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${BASE}/hire#service`,
      name: 'Freelance React, AI & Full-Stack Development',
      provider: {
        '@type': 'Person',
        '@id': `${BASE}/#person`,
        name: 'Zaman Ishtiyaq',
        email: 'zaman.ishtiyaq@gmail.com',
        url: BASE,
      },
      serviceType: [
        'AI Agent Development',
        'AI Workflow Automation',
        'React Developer for Hire',
        'Full-Stack Development',
        'SaaS Development',
        'MVP Development',
        'Python Developer for Hire',
        'Next.js Development',
        'iOS App Development',
        'LLM Integration',
        'Web Application Development',
      ],
      description: 'Full-stack React and Python developer for hire. Specializing in AI agent development, agentic systems, SaaS MVPs, and iOS apps. Remote worldwide, fixed price.',
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'India' },
        'Worldwide',
      ],
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${BASE}/hire`,
        availableLanguage: { '@type': 'Language', name: 'English' },
      },
      hasPart: [
        {
          '@type': 'Service',
          name: 'AI Agent Development',
          description: 'Custom AI agents and multi-agent systems built with OpenAI Agents SDK, Temporal, and FastAPI.',
        },
        {
          '@type': 'Service',
          name: 'React & Next.js Development',
          description: 'Full-stack web applications built with React, Next.js, and TypeScript.',
        },
        {
          '@type': 'Service',
          name: 'SaaS & MVP Development',
          description: 'End-to-end SaaS platforms and MVPs from concept to deployed product.',
        },
        {
          '@type': 'Service',
          name: 'iOS App Development',
          description: 'Native Swift/SwiftUI iOS apps shipped to the App Store.',
        },
      ],
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        seller: { '@id': `${BASE}/#person` },
      },
      review: {
        '@type': 'Review',
        itemReviewed: { '@id': `${BASE}/hire#service` },
        author: {
          '@type': 'Person',
          name: 'Benjamin McDermott',
          jobTitle: 'AI Product Manager',
          url: 'https://www.linkedin.com/in/bmcde/',
        },
        reviewBody: 'Zaman was a key backend engineer on the AI Catalyst project at BrightEdge, and his contributions were essential to the success of the feature. He brought a steady, dependable presence to the team—consistently delivering high-quality code and tackling complex backend challenges with care and precision. Zaman was a pleasure to work with—quietly reliable, technically solid, and a great teammate throughout the project. Any team would benefit from having him on board.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
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
            Hire an AI &amp; Full-Stack Developer for{' '}
            <span className="px-2 py-1 bg-[#facc15] border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] inline-block mt-2">
              AI Systems, SaaS &amp; iOS
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-display font-semibold text-black/70 mb-4">
            AI agent development · React & Python · SaaS · iOS apps
          </p>

          <p className="text-lg sm:text-xl text-black/80 font-display max-w-2xl mb-8 leading-relaxed">
            I&apos;m Zaman — a full-stack React and Python developer with 7+ years at Goldman Sachs, BrightEdge, and Atlan. I build AI agent systems, SaaS platforms, web apps, and iOS apps for startups and businesses. Available to hire remotely worldwide, fixed price.
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

      {/* AI Agent Development */}
      <section className="section-pad border-b-[3px] border-black bg-[#fef3c7]">
        <div className="section-inner-md">
          <h2 className="section-heading mb-4">AI Agent Development &amp; Integration Services</h2>
          <p className="text-base sm:text-lg text-black/80 font-display leading-relaxed mb-6">
            I build custom AI agents and agentic systems that plug into real business workflows — not chatbot wrappers. Using OpenAI Agents SDK, Temporal for durable execution, and FastAPI for high-throughput backends.
          </p>
          <div data-anim="stagger" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Multi-agent pipelines', body: 'Orchestrated agents with tool-calling, memory, and handoffs — production-grade with retry logic and observability.' },
              { label: 'AI workflow automation', body: 'Automate internal and customer-facing processes with LLM-powered pipelines. Real actions, not just summarization.' },
              { label: 'LLM application development', body: 'RAG systems, structured extraction, evaluation pipelines, and custom LLM integrations with any model.' },
              { label: 'API & system integration', body: 'Connect AI agents to your existing tools, databases, and APIs. Durable execution with Temporal for long-running jobs.' },
            ].map((item) => (
              <div key={item.label} className="neo-card rounded-2xl p-5 bg-white">
                <h3 className="text-base font-display font-extrabold text-black mb-1">{item.label}</h3>
                <p className="text-sm text-black/70 font-display leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS & MVP Development */}
      <section className="section-pad border-b-[3px] border-black bg-white">
        <div className="section-inner-md">
          <h2 className="section-heading mb-4">SaaS &amp; MVP Development Services</h2>
          <p className="text-base sm:text-lg text-black/80 font-display leading-relaxed mb-6">
            From idea to deployed product in 3–6 weeks. I build SaaS platforms and MVPs end-to-end — UI design, React frontend, Python backend, database, auth, payments, and deployment — so you can start acquiring customers instead of managing engineers.
          </p>
          <div data-anim="stagger" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Week 1–2', body: 'UI design, tech stack setup, core features, and database schema.' },
              { label: 'Week 3–4', body: 'Auth, payments, remaining features, and initial deployment.' },
              { label: 'Week 5–6', body: 'Polish, performance, SEO, and production-ready launch.' },
            ].map((item) => (
              <div key={item.label} className="neo-card rounded-2xl p-5 bg-[#bbf7d0]">
                <h3 className="text-base font-display font-extrabold text-black mb-1">{item.label}</h3>
                <p className="text-sm text-black/70 font-display leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remote Developer CTA section */}
      <section className="section-pad border-b-[3px] border-black bg-[#bfdbfe]">
        <div className="section-inner-md">
          <h2 className="section-heading mb-4">Hire a React, Python &amp; Next.js Developer — Full Stack, Fully Remote</h2>
          <p className="text-base sm:text-lg text-black/80 font-display leading-relaxed mb-6 max-w-2xl">
            Looking to hire a React developer, Python developer, or full-stack engineer? I&apos;m available for project-based engagements, short-term contracts, and monthly retainers — remote worldwide. US, UK, and international clients welcome.
          </p>
          <div className="flex flex-wrap gap-2">
            {['React developer for hire', 'Python developer for hire', 'Next.js developer', 'Full-stack engineer', 'AI engineer', 'Remote developer'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-white border-[2px] border-black rounded-full font-display text-sm font-semibold text-black">
                {tag}
              </span>
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
