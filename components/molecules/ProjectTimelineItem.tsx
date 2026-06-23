'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { type Project } from '@/data/projects';

interface ProjectTimelineItemProps {
  project: Project;
  isLast: boolean;
  index: number;
}

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export const ProjectTimelineItem: React.FC<ProjectTimelineItemProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const isInProgress = project.duration?.includes('In Progress') || project.duration?.includes('Present');

  return (
    <div className="relative flex gap-4 sm:gap-6 pb-6 w-full">
      {/* Node */}
      <div className="relative z-10 flex-shrink-0 mt-4">
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#34d399] border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]" />
      </div>

      {/* Card */}
      <div className="flex-1 pt-0.5">
        <div className="neo-card rounded-2xl bg-white overflow-hidden">
          {/* Collapsed header — always visible */}
          <button
            className="w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left hover:bg-amber-50/40 transition-colors duration-150"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {project.image && (
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg overflow-hidden border-[2px] border-black bg-white p-1">
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
                <span className="font-display font-extrabold text-base sm:text-lg text-black leading-tight">
                  {project.title}
                </span>
                {project.duration && (
                  <span className={`text-xs font-display font-bold px-2 py-0.5 border border-black rounded-full whitespace-nowrap ${isInProgress ? 'bg-[#bbf7d0]' : 'bg-white'}`}>
                    {project.duration}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-black/50 font-display mt-0.5 truncate">
                {project.technologies.slice(0, 4).join(' · ')}
              </p>
            </div>
            <div className={`flex-shrink-0 w-8 h-8 rounded-full border-[2px] border-black bg-white flex items-center justify-center text-xs transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>
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
                    className="px-2.5 py-1 bg-white text-black text-xs font-display font-semibold neo-pill"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="pt-1">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#facc15] text-black border-[2px] border-black rounded-full font-display font-bold text-sm shadow-[3px_3px_0_0_rgba(0,0,0,0.85)] hover:-translate-y-0.5 transition-transform duration-150"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Details <ExternalLinkIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
