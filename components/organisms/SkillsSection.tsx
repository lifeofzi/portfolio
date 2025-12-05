'use client';

import { useEffect, useState } from 'react';
import * as SimpleIcons from 'react-icons/si';
import type { IconType } from 'react-icons';
import * as SimpleIconsData from 'simple-icons';

// Mapping of skill names to Simple Icons components
const skillIconMap: Record<string, IconType> = {
  'Python': SimpleIcons.SiPython,
  'JavaScript': SimpleIcons.SiJavascript,
  'TypeScript': SimpleIcons.SiTypescript,
  'React': SimpleIcons.SiReact,
  'Next.js': SimpleIcons.SiNextdotjs,
  'GCP': SimpleIcons.SiGooglecloud,
  'AWS': SimpleIcons.SiAmazon,
  'Apache Kafka': SimpleIcons.SiApachekafka,
  'Kafka': SimpleIcons.SiApachekafka,
  'PostgreSQL': SimpleIcons.SiPostgresql,
  'MongoDB': SimpleIcons.SiMongodb,
  'Docker': SimpleIcons.SiDocker,
  'Redis': SimpleIcons.SiRedis,
  'Git': SimpleIcons.SiGit,
  'GitLab': SimpleIcons.SiGitlab,
  'Jenkins': SimpleIcons.SiJenkins,
  'Prometheus': SimpleIcons.SiPrometheus,
  'Grafana': SimpleIcons.SiGrafana,
  'Django': SimpleIcons.SiDjango,
  'Flask': SimpleIcons.SiFlask,
  'FastAPI': SimpleIcons.SiFastapi,
  'ClickHouse': SimpleIcons.SiClickhouse,
  'BigQuery': SimpleIcons.SiGooglebigquery,
  'SQLite': SimpleIcons.SiSqlite,
  'JIRA': SimpleIcons.SiJira,
  'OpenAI API': SimpleIcons.SiOpenai,
  // Fallback for technologies not in Simple Icons
  'Clerk': SimpleIcons.SiAuth0, // Using Auth0 as fallback
  'Neon': SimpleIcons.SiPostgresql, // Using PostgreSQL as fallback
};

// Mapping of skill names to their Simple Icons key name for brand colors
const skillIconKeyMap: Record<string, string> = {
  'Python': 'siPython',
  'JavaScript': 'siJavascript',
  'TypeScript': 'siTypescript',
  'React': 'siReact',
  'Next.js': 'siNextdotjs',
  'GCP': 'siGooglecloud',
  'AWS': 'siAmazon',
  'Apache Kafka': 'siApachekafka',
  'Kafka': 'siApachekafka',
  'PostgreSQL': 'siPostgresql',
  'MongoDB': 'siMongodb',
  'Docker': 'siDocker',
  'Redis': 'siRedis',
  'Git': 'siGit',
  'GitLab': 'siGitlab',
  'Jenkins': 'siJenkins',
  'Prometheus': 'siPrometheus',
  'Grafana': 'siGrafana',
  'Django': 'siDjango',
  'Flask': 'siFlask',
  'FastAPI': 'siFastapi',
  'ClickHouse': 'siClickhouse',
  'BigQuery': 'siGooglebigquery',
  'SQLite': 'siSqlite',
  'JIRA': 'siJira',
  'OpenAI API': 'siOpenai',
  'Clerk': 'siAuth0',
  'Neon': 'siPostgresql',
};

// Helper function to get brand color
const getBrandColor = (skill: string): string => {
  const iconKey = skillIconKeyMap[skill];
  if (!iconKey) return '#000000';
  
  try {
    const iconData = (SimpleIconsData as any)[iconKey];
    return iconData?.hex ? `#${iconData.hex}` : '#000000';
  } catch {
    return '#000000';
  }
};

const skills = [
  'OpenAI API',
  'Python', 'JavaScript', 'TypeScript', 'React', 'Next.js',
  'GCP', 'AWS', 'Kafka', 'PostgreSQL', 'MongoDB',
  'Docker', 'Redis', 'Git', 'GitLab',
  'Jenkins', 'Prometheus', 'Grafana', 'Django', 'Flask', 'FastAPI',
  'ClickHouse', 'BigQuery', 'SQLite', 'JIRA',
  'Clerk', 'Neon'
];

/**
 * Atom: SkillLogo Component
 * Displays a tech logo using Simple Icons with brand colors
 */
const SkillLogo = ({ skill, Icon }: { skill: string; Icon?: IconType }) => {
  if (!Icon) {
    return (
      <div className="text-xs font-bold text-gray-900 group-hover:gradient-text transition-all duration-300">
        {skill}
      </div>
    );
  }

  const brandColor = getBrandColor(skill);

  return (
    <div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center">
      <Icon 
        className="w-full h-full transition-all duration-300 group-hover:scale-110"
        style={{ color: brandColor }}
      />
    </div>
  );
};

/**
 * Organism: SkillsSection Component
 * Modern, polished skills showcase with tech logos
 */
export const SkillsSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">
            <span className="gradient-text">Technologies</span> I Work With
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A curated stack of modern tools and frameworks powering my projects
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => {
            const Icon = skillIconMap[skill];
            
            return (
              <div
                key={skill}
                className={`group relative min-w-[120px] ${mounted ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div className="relative h-full bg-white rounded-full p-1.5 border-2 border-gray-200 transition-all duration-500 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 flex flex-col items-center justify-center text-center min-h-[112px] overflow-hidden">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-pink-50/0 group-hover:from-blue-50/50 group-hover:via-purple-50/30 group-hover:to-pink-50/20 transition-all duration-500 rounded-full" />
                  
                  {/* Content */}
                  <div className="relative z-10 w-full flex flex-col items-center justify-center">
                    {Icon ? (
                      <>
                        <SkillLogo skill={skill} Icon={Icon} />
                        <div className="text-xs font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 mt-2 transform translate-y-2 group-hover:translate-y-0">
                          {skill}
                        </div>
                      </>
                    ) : (
                      <div className="text-sm font-bold text-gray-900 group-hover:gradient-text transition-all duration-300">
                        {skill}
                      </div>
                    )}
                  </div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};
