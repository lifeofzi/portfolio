'use client';

import React from 'react';
import { formatDate, formatDateRange } from '@/utils/dateFormatter';

export interface TimelineItemData {
  id: string;
  title: string;
  projectName?: string;
  organization?: string;
  logo?: string;
  projectLogo?: string;
  images?: string[];
  location?: string;
  startDate: string;
  endDate?: string;
  role?: string;
  projectUrl?: string;
  description: string[];
  type: 'work' | 'education' | 'project';
  isCompanyHeader?: boolean;
  projectCount?: number;
}

interface TimelineItemProps {
  item: TimelineItemData;
  isLast: boolean;
  index: number;
  isExpanded?: boolean;
  onToggle?: () => void;
}

/**
 * Molecule: TimelineItem Component
 * Neo-brutalist single-line timeline with chunky borders and bold color blocks
 */
export const TimelineItem: React.FC<TimelineItemProps> = ({ item, isExpanded = true, onToggle }) => {
  const typeColor = (() => {
    switch (item.type) {
      case 'work':
        return 'bg-[#60a5fa]';
      case 'education':
        return 'bg-[#f472b6]';
      case 'project':
        return 'bg-[#34d399]';
      default:
        return 'bg-black';
    }
  })();

  // Soft card backgrounds per type (override neo-card white)
  const typeCardBg = (() => {
    switch (item.type) {
      case 'education':
        return '!bg-[#ffeef8]';
      case 'project':
        return '!bg-[#f0fff4]';
      case 'work':
      default:
        return 'bg-white';
    }
  })();

  // Get unique color for company headers
  const getCompanyHeaderStyles = (companyName: string) => {
    const colorMap: Record<string, { bubble: string; card: string }> = {
      BrightEdge: {
        bubble: 'bg-[#f97316]', // Orange
        card: '!bg-[#fff4ec]',   // Light orange wash
      },
      'Goldman Sachs': {
        bubble: 'bg-[#8b5cf6]', // Purple
        card: '!bg-[#f3e8ff]',   // Light purple wash
      },
    };

    return (
      colorMap[companyName] || {
        bubble: 'bg-[#ec4899]', // Pink bubble default
        card: '!bg-[#ffe4ef]',   // Light pink wash
      }
    );
  };

  // Company Header styling
  if (item.isCompanyHeader) {
    const companyStyles = getCompanyHeaderStyles(item.title);
    return (
      <div className="relative flex gap-6 pb-10">
        {/* Node */}
        <div className="relative z-10 flex-shrink-0">
          <div
            className={`w-6 h-6 rounded-full ${companyStyles.bubble} border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] cursor-pointer hover:-translate-y-0.5 transition-transform duration-150`}
            onClick={onToggle}
          />
        </div>

        {/* Card */}
        <div className="flex-1 pt-0.5">
          <div
            className={`neo-card rounded-2xl p-6 sm:p-8 ${companyStyles.card} cursor-pointer transition-transform duration-150 hover:-translate-y-1`}
            onClick={onToggle}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-3 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-black leading-tight break-words overflow-wrap-anywhere">
                    {item.title}
                  </h2>
                  <button
                    className={`w-10 h-10 neo-pill bg-white text-black flex items-center justify-center ${
                      isExpanded ? 'rotate-180' : ''
                    } transition-transform duration-200 hover:-translate-y-0.5`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggle?.();
                    }}
                    aria-label={isExpanded ? 'Collapse' : 'Expand'}
                  >
                    <span className="text-base">▼</span>
                  </button>
                </div>

                {isExpanded && (
                  <div className="space-y-3 pt-1">
                    {item.location && (
                      <p className="text-lg font-display text-black/80">{item.location}</p>
                    )}
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="neo-pill bg-[#bfdbfe] text-black px-4 py-2">
                        <span className="text-sm font-bold font-display">{formatDate(item.startDate)}</span>
                        <span className="px-2 text-black/70">→</span>
                        <span className="text-sm font-bold font-display">{formatDate(item.endDate || 'Present')}</span>
                      </div>
                      {item.projectCount && (
                        <span className="neo-pill bg-[#facc15] text-black px-4 py-2 font-display text-sm font-bold">
                          {item.projectCount} {item.projectCount === 1 ? 'Project' : 'Projects'}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Regular items
  return (
    <div className="relative flex gap-6 pb-10">
      {/* Node */}
      <div className="relative z-10 flex-shrink-0">
        <div className={`w-5 h-5 rounded-full ${typeColor} border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]`} />
      </div>

      {/* Card */}
      <div className="flex-1 pt-0.5">
        <div
          className={`neo-card rounded-2xl p-6 sm:p-8 ${typeCardBg} cursor-pointer transition-transform duration-150 hover:-translate-y-1`}
          onClick={onToggle}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-5">
            <div className="flex-1 space-y-3">
              {/* Type Badge */}
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${typeColor} shadow-[2px_2px_0_0_rgba(0,0,0,0.85)]`} />
                <span className="text-xs font-display font-bold uppercase tracking-widest px-3 py-1.5 neo-pill bg-white">
                  {item.type}
                </span>
              </div>

              {/* Title / Project */}
              {item.projectName ? (
                <div className="flex items-center gap-4 flex-wrap">
                  {item.projectLogo && (
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] flex-shrink-0 bg-white p-2">
                      <img
                        src={item.projectLogo}
                        alt={item.projectName}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-3 flex-wrap flex-1 min-w-0">
                    <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-black leading-tight break-words overflow-wrap-anywhere">
                      {item.projectName}
                    </h3>
                    {item.projectUrl && (
                      <a
                        href={item.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neo-pill bg-[#facc15] text-black px-4 py-2 text-sm font-display font-bold hover:-translate-y-0.5 transition-transform duration-150"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Visit project"
                      >
                        ↗
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-black leading-tight break-words overflow-wrap-anywhere">
                  {item.title}
                </h3>
              )}

              {/* Role */}
              {item.role && (
                <p className="text-lg sm:text-xl text-black font-display leading-relaxed">
                  {item.role}
                </p>
              )}

              {/* Organization & Location */}
              {item.organization && (
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-xl sm:text-2xl font-display font-bold text-black">
                    {item.organization}
                  </span>
                  {item.location && (
                    <>
                      <span className="text-black/50 text-xl">•</span>
                      <span className="text-lg text-black/70 font-display">{item.location}</span>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Date & toggle */}
            <div className="flex flex-col items-end gap-3 sm:items-start sm:flex-row sm:gap-4">
              <div className="neo-pill bg-white text-black px-5 py-2.5">
                <div className="text-sm font-display font-bold whitespace-nowrap">
                  {formatDateRange(item.startDate, item.endDate)}
                </div>
              </div>
              <button
                className={`w-10 h-10 neo-pill bg-white text-black flex items-center justify-center ${
                  isExpanded ? 'rotate-180' : ''
                } transition-transform duration-200 hover:-translate-y-0.5`}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle?.();
                }}
                aria-label={isExpanded ? 'Collapse' : 'Expand'}
              >
                <span className="text-base">▼</span>
              </button>
            </div>
          </div>

          {/* Images Gallery */}
          {item.images && item.images.length > 0 && (
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pt-6 border-t-[3px] border-black/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {item.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative rounded-2xl overflow-hidden border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] hover:-translate-y-1 transition-transform duration-200"
                    >
                      <img
                        src={image}
                        alt={`${item.projectName || item.title} - Image ${imageIndex + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Description */}
          {item.description.length > 0 && (
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className={`${item.images && item.images.length > 0 ? '' : 'pt-6 border-t-[3px] border-black/10'}`}>
                <ul className="space-y-4">
                  {item.description.map((desc, descIndex) => (
                    <li
                      key={descIndex}
                      className="text-black leading-relaxed flex items-start gap-3 text-base sm:text-lg font-display"
                    >
                      <span className="mt-1.5 flex-shrink-0 w-3 h-3 rounded-sm bg-black shadow-[2px_2px_0_0_rgba(0,0,0,0.85)]" />
                      <span className="flex-1">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

