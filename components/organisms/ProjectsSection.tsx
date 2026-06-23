'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, type Project } from '@/data/projects';

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const isInProgress = project.duration?.includes('In Progress') || project.duration?.includes('Present');

  useEffect(() => { setMounted(true); }, []);

  return (
    <div
      className={`group relative ${mounted ? 'animate-slide-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* ── Mobile card (collapsible) ── */}
      <div className="md:hidden bg-white rounded-2xl border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] overflow-hidden">
        {/* Collapsed header — always visible */}
        <button
          className="w-full flex items-center gap-3 p-4 text-left"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {project.image && (
            <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden border-[2px] border-black bg-white p-1">
              <Image
                src={project.image}
                alt={project.title}
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-display font-extrabold text-lg text-black leading-tight">
                {project.title}
              </span>
              {isInProgress && (
                <span className="text-xs font-display font-bold px-2 py-0.5 bg-[#bbf7d0] border border-black rounded-full">
                  In Progress
                </span>
              )}
            </div>
            <p className="text-sm text-black/60 font-display line-clamp-1 mt-0.5">
              {project.technologies.slice(0, 3).join(' · ')}
            </p>
          </div>
          <span
            className={`flex-shrink-0 w-8 h-8 rounded-full border-[2px] border-black flex items-center justify-center transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          >
            ▼
          </span>
        </button>

        {/* Expandable content */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-[600px]' : 'max-h-0'}`}>
          <div className="px-4 pb-4 space-y-3 border-t-[2px] border-black/10">
            <p className="text-sm text-black/70 leading-relaxed font-display pt-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-[#fef3c7] border border-black text-xs font-display font-semibold rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 pt-1">
              <Link
                href={`/projects/${project.id}`}
                className="flex items-center gap-1.5 px-4 py-2 bg-black text-white rounded-full font-display font-bold text-sm hover:-translate-y-0.5 transition-transform duration-150"
              >
                View Details <ExternalLinkIcon />
              </Link>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-white border-[2px] border-black rounded-full font-display font-bold text-sm hover:-translate-y-0.5 transition-transform duration-150"
                >
                  <GithubIcon /> Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Desktop card (unchanged full card) ── */}
      <div className="hidden md:block relative h-full bg-white rounded-3xl p-8 border-2 border-gray-200 transition-all duration-500 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-pink-50/0 group-hover:from-blue-50/30 group-hover:via-purple-50/20 group-hover:to-pink-50/10 transition-all duration-500 rounded-3xl" />
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              {project.image ? (
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-white p-2 border-2 border-gray-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    {isInProgress && (
                      <span className="text-xs font-semibold px-2 py-1 bg-green-100 border border-green-300 text-green-700 rounded-full">
                        In Progress
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
              )}
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
            <Link
              href={`/projects/${project.id}`}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              View Details <ExternalLinkIcon />
            </Link>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 border-2 border-gray-300 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:border-gray-900"
              >
                <GithubIcon /> Code
              </a>
            )}
          </div>
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (projects.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-10 sm:mb-20 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-6 text-gray-900">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A collection of projects I&apos;ve built and deployed
          </p>
        </div>

        {/* Mobile: stacked list */}
        <div className="md:hidden space-y-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
