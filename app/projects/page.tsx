import type { Metadata } from 'next';
import { Navigation } from '@/components/molecules/Navigation';
import { ProjectsTimeline } from '@/components/organisms/ProjectsTimeline';

const BASE = 'https://www.zamanishtiyaq.work';

const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${BASE}/projects`,
  url: `${BASE}/projects`,
  name: 'Projects — Zaman Ishtiyaq',
  description: 'AI-powered products, SaaS platforms, and web applications built by Zaman Ishtiyaq — including Offer X-Ray, Architex, ReelRocket, Muhasaba, and Spree.',
  author: { '@id': `${BASE}/#person` },
  isPartOf: { '@id': `${BASE}/#website` },
  inLanguage: 'en',
};

export const metadata: Metadata = {
  title: 'Projects — Web & AI Applications',
  description: 'AI-powered products, SaaS platforms, and web applications built by Zaman Ishtiyaq — including Offer X-Ray, Architex, ReelRocket, Muhasaba, and more.',
  openGraph: {
    title: 'Projects — Web & AI Applications | Zaman Ishtiyaq',
    description: 'AI-powered products, SaaS platforms, and web applications by Zaman Ishtiyaq.',
    url: 'https://www.zamanishtiyaq.work/projects',
    type: 'website',
  },
  alternates: { canonical: 'https://www.zamanishtiyaq.work/projects' },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#fef3c7] text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <Navigation />
      
      {/* Projects Timeline Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative bg-[#fef08a] border-y-[3px] border-black">
        <div className="absolute inset-0 text-black opacity-20">
          <div className="w-full h-full neo-dot-grid" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-4 text-black">
              Featured <span className="px-2 py-1 bg-white border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">Projects</span>
            </h1>
            <p className="text-lg sm:text-xl text-black/80 max-w-2xl mx-auto font-display">
              A timeline of projects I&apos;ve built and deployed
            </p>
          </div>
          <ProjectsTimeline />
        </div>
      </section>
    </main>
  );
}

