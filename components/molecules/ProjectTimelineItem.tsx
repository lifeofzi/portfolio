'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { type Project } from '@/data/projects';

interface ProjectTimelineItemProps {
  project: Project;
  isLast: boolean;
  index: number;
}

// SVG Icons
const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

/**
 * Molecule: ProjectTimelineItem Component
 * Neo-brutalist project timeline card
 */
export const ProjectTimelineItem: React.FC<ProjectTimelineItemProps> = ({ 
  project, 
  isLast
}) => {
  return (
    <div className="relative flex gap-6 pb-10">
      {/* Node on the line */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-5 h-5 rounded-full bg-[#34d399] border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]" />
      </div>

      {/* Content Card */}
      <div className="flex-1 pt-0.5">
        <Link
          href={`/projects/${project.id}`}
          className="block neo-card rounded-2xl p-6 sm:p-8 bg-white transition-transform duration-150 hover:-translate-y-1 cursor-pointer"
        >
          <div className="flex flex-col gap-6">
            {/* Top Row: Badge, Date, and Link */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span className="text-xs font-display font-bold uppercase tracking-widest px-3 py-1.5 neo-pill bg-white">
                Project
              </span>
              <div className="flex items-center gap-3">
                {project.duration && (
                  <div className="neo-pill bg-[#bbf7d0] text-black px-4 py-1.5">
                    <div className="text-sm font-display font-bold whitespace-nowrap">
                      {project.duration}
                    </div>
                  </div>
                )}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#facc15] text-black neo-pill font-display font-semibold text-sm">
                  View Details
                  <ExternalLinkIcon />
                </div>
              </div>
            </div>

            {/* Project Logo and Title */}
            <div className="flex items-start gap-4">
              {project.image && (
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] flex-shrink-0 bg-white p-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-black leading-tight mb-3">
                  {project.title}
                </h3>
                <p className="text-base sm:text-lg text-black leading-relaxed font-display">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-2 border-t-[3px] border-black/10">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-white text-black text-xs font-display font-semibold neo-pill"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

