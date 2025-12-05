import { Navigation } from '@/components/molecules/Navigation';
import { ProjectsTimeline } from '@/components/organisms/ProjectsTimeline';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navigation />
      
      {/* Projects Timeline Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A timeline of projects I&apos;ve built and deployed
            </p>
          </div>
          <ProjectsTimeline />
        </div>
      </section>

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

