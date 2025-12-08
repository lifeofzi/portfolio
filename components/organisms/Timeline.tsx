'use client';

import React, { useEffect, useState } from 'react';
import { TimelineItem, type TimelineItemData } from '@/components/molecules/TimelineItem';

interface TimelineProps {
  items: TimelineItemData[];
}

interface GroupedData {
  company: string;
  logo?: string;
  location?: string;
  projects: TimelineItemData[];
  startDate: string;
  endDate: string;
}

interface TimelineItemWithMetadata extends TimelineItemData {
  companyId?: string; // For projects, this is the company they belong to
  isProject?: boolean; // True if this is a project under a company
}

/**
 * Organism: Timeline Component
 * Single vertical line with all items (companies and projects) on it
 * Everything expanded by default
 * When a company is collapsed, all its projects are also collapsed
 */
export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [mounted, setMounted] = useState(false);
  const [collapsedCompanies, setCollapsedCompanies] = useState<Set<string>>(new Set());
  const [collapsedProjects, setCollapsedProjects] = useState<Set<string>>(new Set());

  useEffect(() => {
    setMounted(true);
  }, []);

  // Flatten all items into a single timeline (companies + their projects + solo items)
  const flattenTimeline = (): TimelineItemWithMetadata[] => {
    const companyMap = new Map<string, GroupedData>();
    const soloItems: TimelineItemData[] = [];
    const timelineItems: TimelineItemWithMetadata[] = [];

    // Group by company
    items.forEach((item) => {
      if (item.type === 'education' || !item.organization) {
        soloItems.push(item);
        return;
      }

      const company = item.organization;
      if (!companyMap.has(company)) {
        companyMap.set(company, {
          company,
          logo: item.logo,
          location: item.location,
          projects: [],
          startDate: item.startDate,
          endDate: item.endDate || 'Present',
        });
      }
      companyMap.get(company)!.projects.push(item);
    });

    // Sort companies by most recent project
    const companyGroups = Array.from(companyMap.values()).sort((a, b) => {
      const dateA = new Date(a.startDate).getTime();
      const dateB = new Date(b.startDate).getTime();
      return dateB - dateA;
    });

    // Flatten: for each company, add company header (as a special item) then all projects
    companyGroups.forEach((group) => {
      const sortedProjects = group.projects.sort((a, b) => {
        const dateA = new Date(a.startDate).getTime();
        const dateB = new Date(b.startDate).getTime();
        return dateB - dateA;
      });

      const companyId = `company-${group.company}`;

      // Add company as a special timeline item
      timelineItems.push({
        id: companyId,
        title: group.company,
        organization: group.company,
        logo: group.logo,
        location: group.location,
        startDate: group.startDate,
        endDate: group.endDate,
        type: 'work',
        description: [],
        isCompanyHeader: true,
        projectCount: sortedProjects.length,
      });

      // Add all projects with company reference
      sortedProjects.forEach((project) => {
        timelineItems.push({
          ...project,
          companyId,
          isProject: true,
        });
      });
    });

    // Add solo items
    const sortedSoloItems = soloItems.sort((a, b) => {
      const dateA = new Date(a.startDate).getTime();
      const dateB = new Date(b.startDate).getTime();
      return dateB - dateA;
    });
    timelineItems.push(...sortedSoloItems);

    return timelineItems;
  };

  const handleCompanyToggle = (companyId: string) => {
    setCollapsedCompanies((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(companyId)) {
        newSet.delete(companyId);
      } else {
        newSet.add(companyId);
      }
      return newSet;
    });
  };

  const handleProjectToggle = (projectId: string) => {
    setCollapsedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const timelineItems = flattenTimeline();

  return (
    <div className="w-full max-w-6xl mx-auto relative">
      {/* Single Vertical Line - neo-brutalist */}
      <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-[3px] bg-black z-0" />

      <div className="space-y-0 relative">
        {timelineItems.map((item, index) => {
          const isLast = index === timelineItems.length - 1;
          const isCompanyCollapsed = item.companyId ? collapsedCompanies.has(item.companyId) : false;
          const isProjectCollapsed = collapsedProjects.has(item.id);
          
          // For company headers: check only company collapse state
          // For projects: check both company collapse (hides the project) and individual project collapse (collapses content)
          const isExpanded = item.isCompanyHeader 
            ? !collapsedCompanies.has(item.id)
            : !isCompanyCollapsed && !isProjectCollapsed; // Projects are collapsed if their company is collapsed OR if individually collapsed

          return (
            <div
              key={item.id}
              className={`${mounted ? 'animate-slide-up' : 'opacity-0'} ${
                item.isProject && isCompanyCollapsed ? 'hidden' : ''
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <TimelineItem
                item={item}
                isLast={isLast}
                index={index}
                isExpanded={isExpanded}
                onToggle={
                  item.isCompanyHeader 
                    ? () => handleCompanyToggle(item.id)
                    : () => handleProjectToggle(item.id)
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
