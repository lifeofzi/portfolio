import Link from 'next/link';
import { Navigation } from '@/components/molecules/Navigation';
import { Hero } from '@/components/molecules/Hero';
import { Timeline } from '@/components/organisms/Timeline';
import { SkillsSection } from '@/components/organisms/SkillsSection';
import { ProjectsTimeline } from '@/components/organisms/ProjectsTimeline';
import { CallbackModal } from '@/components/molecules/CallbackModal';
import { timelineData } from '@/data/timeline';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fef3c7] text-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white border-y-[3px] border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-4 text-black">
              Experience <span className="px-2 py-1 bg-[#facc15] border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">& Education</span>
            </h2>
            <p className="text-lg sm:text-xl text-black/80 max-w-2xl mx-auto font-display">
              A journey through my professional growth
            </p>
          </div>
          <Timeline items={timelineData} />
        </div>
      </section>

      {/* Projects Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#fef08a] border-y-[3px] border-black overflow-hidden">
        {/* Neo-brutalist dots + shapes */}
        <div className="absolute inset-0 text-black opacity-20">
          <div className="w-full h-full neo-dot-grid" />
        </div>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-6 top-10 w-20 h-20 bg-white border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] rotate-[-4deg]" />
          <div className="absolute right-10 top-16 w-24 h-14 bg-[#bfdbfe] border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] rotate-3" />
          <div className="absolute left-1/3 bottom-6 w-28 h-10 bg-[#fca5a5] border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] -rotate-2" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white font-display text-sm uppercase tracking-wide border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] rounded-xl">
              Featured Projects
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-black">
              <span className="px-2 py-1 bg-white border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">Timeline</span>{' '}
              <span className="px-2 py-1 bg-[#fef3c7] border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">of Builds</span>
            </h2>
            <p className="text-lg sm:text-xl text-black/80 max-w-2xl mx-auto font-display">
              A timeline of projects I&apos;ve built and deployed
            </p>
          </div>
          <ProjectsTimeline />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y-[3px] border-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e9d5ff] border-[3px] border-black rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] mb-4 font-display text-sm font-bold">
                Digital Products
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold font-display text-black">
                Tools I{' '}
                <span className="px-2 py-1 bg-[#facc15] border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">Sell</span>
              </h2>
            </div>
            <Link href="/products" className="btn-neo bg-black text-white self-start sm:self-auto">
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Supercharge */}
            <Link
              href="/supercharge"
              className="neo-card rounded-2xl p-6 bg-[#facc15] flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-150 no-underline"
            >
              <div className="flex items-start justify-between">
                <span className="px-3 py-1 bg-[#bbf7d0] border-[2px] border-black rounded-full text-xs font-display font-bold">
                  Available now
                </span>
                <span className="text-xl font-display font-extrabold text-black">$1</span>
              </div>
              <div>
                <h3 className="text-2xl font-display font-extrabold text-black mb-1">Supercharge</h3>
                <p className="text-sm font-display font-bold text-black/70 mb-2">814 Claude Code skills. One command.</p>
                <p className="text-sm font-display text-black/60 leading-relaxed">
                  Install 814 community-curated Claude Code skills in 60 seconds. Claude handles the setup.
                </p>
              </div>
              <span className="mt-auto font-display text-sm font-bold text-black">Get it →</span>
            </Link>

            {/* Coming soon cards */}
            <div className="neo-card rounded-2xl p-6 bg-[#bfdbfe] flex items-center justify-center min-h-[220px] opacity-40">
              <p className="font-display font-bold text-black/50 text-sm">More coming soon</p>
            </div>
            <div className="neo-card rounded-2xl p-6 bg-[#fce7f3] flex items-center justify-center min-h-[220px] opacity-40 hidden lg:flex">
              <p className="font-display font-bold text-black/50 text-sm">More coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Callback Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b-[3px] border-black bg-[#fef3c7]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-black mb-3">
            Want a{' '}
            <span className="px-2 py-1 bg-[#fca5a5] border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">Callback?</span>
          </h2>
          <p className="text-black/60 font-display mb-8">
            Leave your number and I&apos;ll reach out within 24 hours.
          </p>
          <CallbackModal source="homepage" />
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Footer */}
      <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t-[3px] border-black bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-black font-display text-sm">
            &copy; {new Date().getFullYear()} Zaman Ishtiyaq. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

