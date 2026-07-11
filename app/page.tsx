import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Navigation } from '@/components/molecules/Navigation';
import { Hero } from '@/components/molecules/Hero';
import { timelineData } from '@/data/timeline';
import styles from './page.module.css';

const Timeline = dynamic(() => import('@/components/organisms/Timeline').then(m => ({ default: m.Timeline })));
const SkillsSection = dynamic(() => import('@/components/organisms/SkillsSection').then(m => ({ default: m.SkillsSection })));
const ProjectsTimeline = dynamic(() => import('@/components/organisms/ProjectsTimeline').then(m => ({ default: m.ProjectsTimeline })));
const ProductsSection = dynamic(() => import('@/components/organisms/ProductsSection').then(m => ({ default: m.ProductsSection })));
const CallbackModal = dynamic(() => import('@/components/molecules/CallbackModal').then(m => ({ default: m.CallbackModal })));

const BASE = 'https://www.zamanishtiyaq.work';

const homepageFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Zaman Ishtiyaq?',
      acceptedAnswer: { '@type': 'Answer', text: 'Zaman Ishtiyaq is an AI-Native Backend Engineer with 7+ years of experience, currently at Atlan (Gartner Magic Quadrant Leader for Data & Analytics Governance). Previously at Goldman Sachs (5 years, market risk systems) and BrightEdge (lead backend engineer, 200K+ daily API requests, 250+ Fortune 500 clients). IIT Bhubaneswar Computer Science graduate. Two iOS apps live on the App Store: Muhasaba and Spree.' },
    },
    {
      '@type': 'Question',
      name: 'What has Zaman Ishtiyaq built?',
      acceptedAnswer: { '@type': 'Answer', text: 'Zaman Ishtiyaq has built Offer X-Ray (AI offer letter analysis tool), Spree (iOS wishlist app with AI virtual try-on, live on App Store), Muhasaba (iOS Islamic reflection app, live on App Store), Architex (architecture practice management platform), and ReelRocket (AI UGC content creation platform for TikTok automation).' },
    },
    {
      '@type': 'Question',
      name: 'What does Zaman Ishtiyaq specialize in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Zaman Ishtiyaq specializes in AI/LLM integration, distributed data pipelines (Kafka, Temporal, GCP), full-stack web development (Next.js, TypeScript, React), and iOS app development (Swift, SwiftUI). He focuses on building production-grade AI-native products that solve real-world problems.' },
    },
    {
      '@type': 'Question',
      name: 'Is Zaman Ishtiyaq available for freelance projects?',
      acceptedAnswer: { '@type': 'Answer', text: `Yes. Zaman Ishtiyaq is available for freelance web development, full-stack application development, and AI integration projects. He works with startups and businesses worldwide on a remote basis. Contact: zaman.ishtiyaq@gmail.com or visit ${BASE}/hire` },
    },
    {
      '@type': 'Question',
      name: 'What kind of websites and apps can Zaman Ishtiyaq build?',
      acceptedAnswer: { '@type': 'Answer', text: 'Zaman Ishtiyaq builds custom websites, SaaS web applications, AI-powered tools, and iOS apps. His stack is Next.js, TypeScript, React, Python, and Swift. He handles the full build: design, frontend, backend, database, deployment, and AI feature integration.' },
    },
    {
      '@type': 'Question',
      name: 'Can I hire a Next.js developer from India for my project?',
      acceptedAnswer: { '@type': 'Answer', text: `Yes. Zaman Ishtiyaq is a Next.js developer based in Srinagar, India, available for freelance and contract projects worldwide. He works remotely with clients across time zones. To hire him, email zaman.ishtiyaq@gmail.com or visit ${BASE}/hire.` },
    },
    {
      '@type': 'Question',
      name: 'What are agentic AI systems and can Zaman Ishtiyaq build them?',
      acceptedAnswer: { '@type': 'Answer', text: 'Agentic AI systems are AI applications where LLM-powered agents take autonomous actions — calling tools, making decisions, and coordinating with other agents to complete complex tasks. Zaman Ishtiyaq has built multi-agent AI architectures using the OpenAI Agents SDK and Temporal for durable workflows.' },
    },
    {
      '@type': 'Question',
      name: 'Is there a good web developer in Kashmir or Srinagar?',
      acceptedAnswer: { '@type': 'Answer', text: 'Zaman Ishtiyaq is a Srinagar-based (Kashmir, India) AI-Native Backend Engineer with 7+ years of professional experience at Goldman Sachs, BrightEdge, and Atlan. Available for freelance projects worldwide. IIT Bhubaneswar graduate. Contact: zaman.ishtiyaq@gmail.com.' },
    },
  ],
};

export default function Home() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }}
      />
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Experience{' '}
              <span className={styles.badgeGold}>& Education</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              A journey through my professional growth
            </p>
          </div>
          <Timeline items={timelineData} />
        </div>
      </section>

      {/* Projects Timeline Section */}
      <section className={styles.projectsSection}>
        <div className={styles.projectsDots}>
          <div className="w-full h-full neo-dot-grid" />
        </div>
        <div className={styles.projectsShapes}>
          <div className={styles.projectsShape1} />
          <div className={styles.projectsShape2} />
          <div className={styles.projectsShape3} />
        </div>
        <div className={styles.projectsContent}>
          <div className={styles.projectsHeader}>
            <div className={styles.projectsFeaturedBadge}>
              Featured Projects
            </div>
            <h2 className={styles.sectionTitle}>
              <span className={styles.badgeWhite}>Timeline</span>{' '}
              <span className={styles.badgeCream}>of Builds</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              A timeline of projects I&apos;ve built and deployed
            </p>
          </div>
          <ProjectsTimeline />
        </div>
      </section>

      {/* Products Section */}
      <ProductsSection />

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
            See services &amp; pricing →
          </Link>
        </div>
      </section>

      {/* Callback Section */}
      <section className={styles.callbackSection}>
        <div className={styles.containerNarrow}>
          <h2 className={styles.callbackTitle}>
            Want a{' '}
            <span className={styles.badgePink}>Callback?</span>
          </h2>
          <p className={styles.callbackSubtitle}>
            Leave your WhatsApp and I&apos;ll be in touch.
          </p>
          <CallbackModal source="homepage" />
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

    </main>
  );
}
