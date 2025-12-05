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
 * Single vertical line timeline with modern design
 * Collapse state is controlled by parent component
 */
export const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLast, isExpanded = true, onToggle }) => {
  const getTypeColor = () => {
    switch (item.type) {
      case 'work':
        return 'from-blue-500 to-cyan-500';
      case 'education':
        return 'from-purple-500 to-pink-500';
      case 'project':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  // Company Header (special styling with logo) - Collapsible
  if (item.isCompanyHeader) {
    return (
      <div className="relative flex gap-8 pb-8">
        {/* Logo on the single line */}
        <div className="relative z-10 flex-shrink-0">
          {item.logo ? (
            <div 
              className="w-20 h-20 rounded-full bg-white border-4 border-white flex items-center justify-center overflow-hidden shadow-xl hover:scale-110 transition-all duration-300 ring-4 ring-blue-100 cursor-pointer"
              onClick={onToggle}
            >
              <img 
                src={item.logo} 
                alt={item.organization || ''} 
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div 
              className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white flex items-center justify-center shadow-xl ring-4 ring-blue-100 cursor-pointer"
              onClick={onToggle}
            >
              <span className="text-white font-bold text-2xl">{item.title.charAt(0)}</span>
            </div>
          )}
        </div>

        {/* Company Header Card */}
        <div className="flex-1 pt-1">
          <div 
            className={`glass-effect rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-200 shadow-2xl shadow-blue-200/30 cursor-pointer transition-all duration-500 hover:scale-[1.01] ${
              isExpanded ? '' : 'opacity-80'
            }`}
            onClick={onToggle}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="space-y-4 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h2 className={`text-4xl sm:text-5xl font-extrabold text-gray-900 gradient-text leading-normal pb-1 transition-all duration-300 break-words overflow-wrap-anywhere ${
                    isExpanded ? '' : 'text-gray-600'
                  }`}>
                    {item.title}
                  </h2>
                  <button
                    className={`w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    } hover:scale-110 shadow-sm`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggle?.();
                    }}
                    aria-label={isExpanded ? 'Collapse' : 'Expand'}
                  >
                    <span className="text-gray-600 text-sm">▼</span>
                  </button>
                </div>
                {isExpanded && (
                  <div className="space-y-4 pt-2">
                    {item.location && (
                      <p className="text-xl text-gray-600 font-medium">{item.location}</p>
                    )}
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-center gap-3 px-4 py-2 bg-white/60 rounded-full border border-gray-200">
                        <span className="text-sm font-bold text-gray-700">{formatDate(item.startDate)}</span>
                        <span className="text-gray-400">→</span>
                        <span className="text-sm font-bold text-gray-700">{formatDate(item.endDate || 'Present')}</span>
                      </div>
                      {item.projectCount && (
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-bold shadow-lg">
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

  // Regular timeline items (projects, education) - always expanded
  return (
    <div className="relative flex gap-8 pb-8">
      {/* Dot on the single line */}
      <div className="relative z-10 flex-shrink-0">
        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${getTypeColor()} border-4 border-white shadow-lg hover:scale-125 transition-transform duration-300`} />
      </div>

      {/* Content Card */}
      <div className="flex-1 pt-0.5">
        <div 
          className={`glass-effect rounded-3xl p-8 sm:p-10 cursor-pointer transition-all duration-500 ${
            isExpanded 
              ? 'bg-gradient-to-br from-white to-gray-50/50 border-2 border-gray-200 shadow-xl shadow-blue-100/30' 
              : 'hover:bg-gradient-to-br hover:from-white hover:to-gray-50/50 hover:border-blue-300 hover:shadow-xl'
          } hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-200/20`}
          onClick={onToggle}
        >
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
            <div className="flex-1 space-y-4">
              {/* Type Badge */}
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getTypeColor()} shadow-md`} />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest px-3 py-1.5 bg-gray-100 rounded-full">
                  {item.type}
                </span>
              </div>

              {/* Project/Title Section */}
              {item.projectName ? (
                <div className="flex items-center gap-4 flex-wrap">
                  {item.projectLogo && (
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 flex-shrink-0 bg-white p-2">
                      <img 
                        src={item.projectLogo} 
                        alt={item.projectName}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-3 flex-wrap flex-1 min-w-0">
                    <h3 className={`text-3xl sm:text-4xl font-extrabold transition-all duration-300 leading-tight break-words overflow-wrap-anywhere ${
                      isExpanded ? 'text-gray-900 gradient-text' : 'text-gray-700'
                    }`}>
                      {item.projectName}
                    </h3>
                    {item.projectUrl && (
                      <a 
                        href={item.projectUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-md"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Visit project"
                      >
                        <span className="text-lg">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <h3 className={`text-3xl sm:text-4xl font-extrabold transition-all duration-300 leading-tight break-words overflow-wrap-anywhere ${
                  isExpanded ? 'text-gray-900 gradient-text' : 'text-gray-700'
                }`}>
                  {item.title}
                </h3>
              )}

              {/* Role Section */}
              {item.role && (
                <div className="pt-2">
                  <p className="text-lg sm:text-xl text-gray-700 font-semibold leading-relaxed">
                    {item.role}
                  </p>
                </div>
              )}

              {/* Organization & Location */}
              {item.organization && (
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-xl sm:text-2xl font-bold text-gray-800">
                    {item.organization}
                  </span>
                  {item.location && (
                    <>
                      <span className="text-gray-400 text-xl">•</span>
                      <span className="text-lg text-gray-500 font-medium">{item.location}</span>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Date Badge & Collapse Icon */}
            <div className="flex flex-col items-end gap-3 sm:items-start sm:flex-row sm:gap-4">
              <div className="px-5 py-2.5 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full shadow-sm">
                <div className="text-sm font-bold text-gray-700 whitespace-nowrap">
                  {formatDateRange(item.startDate, item.endDate)}
                </div>
              </div>
              <button
                className={`w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                } hover:scale-110`}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle?.();
                }}
                aria-label={isExpanded ? 'Collapse' : 'Expand'}
              >
                <span className="text-gray-600 text-sm">▼</span>
              </button>
            </div>
          </div>
          
          {/* Images Gallery - Expandable */}
          {item.images && item.images.length > 0 && (
            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
              isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="pt-6 border-t-2 border-gradient-to-r from-gray-200 to-transparent">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {item.images.map((image, imageIndex) => (
                    <div 
                      key={imageIndex}
                      className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
                    >
                      <img 
                        src={image} 
                        alt={`${item.projectName || item.title} - Image ${imageIndex + 1}`}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Description - Expandable */}
          {item.description.length > 0 && (
            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
              isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className={`${item.images && item.images.length > 0 ? '' : 'pt-6 border-t-2 border-gradient-to-r from-gray-200 to-transparent'}`}>
                <ul className="space-y-4">
                  {item.description.map((desc, descIndex) => (
                    <li 
                      key={descIndex} 
                      className="text-gray-700 leading-relaxed flex items-start gap-4 text-base sm:text-lg group"
                    >
                      <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-sm group-hover:scale-150 transition-transform duration-300" />
                      <span className="flex-1 font-medium">{desc}</span>
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
