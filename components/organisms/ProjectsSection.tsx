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
      className={`${mounted ? 'animate-slide-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="bg-white rounded-2xl border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] overflow-hidden">
        {/* Header row — always visible */}
        <button
          className="w-full flex items-center gap-4 p-4 sm:p-5 text-left hover:bg-amber-50/50 transition-colors duration-150"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {project.image && (
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-xl overflow-hidden border-[2px] border-black bg-white p-1">
              <Image
                src={project.image}
                alt={project.title}
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-display font-extrabold text-lg sm:text-xl text-black leading-tight">
                {project.title}
              </span>
              {isInProgress && (
                <span className="text-xs font-display font-bold px-2 py-0.5 bg-[#bbf7d0] border border-black rounded-full whitespace-nowrap">
                  In Progress
                </span>
              )}
            </div>
            <p className="text-sm text-black/50 font-display mt-0.5 truncate">
              {project.technologies.slice(0, 4).join(' · ')}
            </p>
          </div>
          <div
            className={`flex-shrink-0 w-9 h-9 rounded-full border-[2px] border-black flex items-center justify-center text-sm transition-transform duration-200 bg-white ${expanded ? 'rotate-180' : ''}`}
          >
            ▼
          </div>
        </button>

        {/* Expandable body */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-[500px]' : 'max-h-0'}`}>
          <div className="px-4 sm:px-5 pb-5 space-y-4 border-t-[2px] border-black/10">
            <p className="text-sm sm:text-base text-black/70 leading-relaxed font-display pt-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#fef3c7] border border-black text-xs sm:text-sm font-display font-semibold rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 pt-1">
              <Link
                href={`/projects/${project.id}`}
                className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-full font-display font-bold text-sm hover:-translate-y-0.5 transition-transform duration-150"
              >
                View Details <ExternalLinkIcon />
              </Link>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 bg-white border-[2px] border-black rounded-full font-display font-bold text-sm hover:-translate-y-0.5 transition-transform duration-150"
                >
                  <GithubIcon /> Code
                </a>
              )}
            </div>
          </div>
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
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-8 sm:mb-12 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 text-gray-900">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
            A collection of projects I&apos;ve built and deployed
          </p>
        </div>

        <div className="space-y-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
