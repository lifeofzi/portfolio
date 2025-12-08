import { Navigation } from '@/components/molecules/Navigation';
import { Hero } from '@/components/molecules/Hero';
import { Timeline } from '@/components/organisms/Timeline';
import { SkillsSection } from '@/components/organisms/SkillsSection';
import { ProjectsTimeline } from '@/components/organisms/ProjectsTimeline';
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

