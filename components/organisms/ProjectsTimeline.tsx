'use client';

import React, { useEffect, useState } from 'react';
import { ProjectTimelineItem } from '@/components/molecules/ProjectTimelineItem';
import { projects, type Project } from '@/data/projects';

/**
 * Organism: ProjectsTimeline Component
 * Timeline-based display of projects, easily extendible
 * Similar structure to Experience Timeline
 */
export const ProjectsTimeline: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sort projects by date (most recent first)
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = a.duration ? new Date(a.duration).getTime() : 0;
    const dateB = b.duration ? new Date(b.duration).getTime() : 0;
    return dateB - dateA;
  });

  return (
    <div className="w-full max-w-6xl mx-auto relative">
      {/* Single Vertical Line - neo-brutalist */}
      <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-[3px] bg-black z-0" />

      <div className="space-y-0 relative">
        {sortedProjects.map((project, index) => {
          const isLast = index === sortedProjects.length - 1;

          return (
            <div
              key={project.id}
              className={`${mounted ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProjectTimelineItem
                project={project}
                isLast={isLast}
                index={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

