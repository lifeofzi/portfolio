import { Navigation } from '@/components/molecules/Navigation';
import { Hero } from '@/components/molecules/Hero';
import { Timeline } from '@/components/organisms/Timeline';
import { SkillsSection } from '@/components/organisms/SkillsSection';
import { ProjectsTimeline } from '@/components/organisms/ProjectsTimeline';
import { timelineData } from '@/data/timeline';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Timeline Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              Experience <span className="gradient-text">&</span> Education
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A journey through my professional growth
            </p>
          </div>
          <Timeline items={timelineData} />
        </div>
      </section>

      {/* Projects Timeline Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A timeline of projects I&apos;ve built and deployed
            </p>
          </div>
          <ProjectsTimeline />
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Zaman Ishtiyaq. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

