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
  'Cloudflare R2': SimpleIcons.SiCloudflare,
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
  'Cloudflare R2': 'siCloudflare',
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
  'Docker', 'Redis', 'Git', 'GitLab', 'Cloudflare R2',
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
    <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
      <Icon 
        className="w-full h-full transition-all duration-300 group-hover:scale-110"
        style={{ color: brandColor }}
      />
    </div>
  );
};

/**
 * Organism: SkillsSection Component
 * Neo-brutalist skills grid with bold borders and accent chips
 */
export const SkillsSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#bfdbfe] border-t-[3px] border-b-[3px] border-black">
      <div className="absolute inset-0 text-black opacity-30">
        <div className="w-full h-full neo-dot-grid" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className={`text-center mb-16 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display mb-4 text-black">
            Technologies I Work With
          </h2>
          <p className="text-lg sm:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed font-display">
            A curated stack of modern tools powering shipping speed and reliability
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => {
            const Icon = skillIconMap[skill];
            
            return (
              <div
                key={skill}
                className={`group relative min-w-[140px] ${mounted ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.025}s` }}
              >
                <div className="neo-card rounded-2xl px-4 py-5 bg-white flex flex-col items-center justify-center text-center min-h-[140px] hover:-translate-y-1 transition-transform duration-150">
                  <div className="relative z-10 w-full flex flex-col items-center justify-center gap-3">
                    {Icon ? (
                      <>
                        <SkillLogo skill={skill} Icon={Icon} />
                        <div className="text-sm font-display font-semibold text-black">
                          {skill}
                        </div>
                      </>
                    ) : (
                      <div className="text-sm font-bold text-black">
                        {skill}
                      </div>
                    )}
                  </div>
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#facc15] border-[3px] border-black shadow-[2px_2px_0_0_rgba(0,0,0,0.85)] rounded-sm" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#f472b6] border-[3px] border-black shadow-[2px_2px_0_0_rgba(0,0,0,0.85)] rounded-sm" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

