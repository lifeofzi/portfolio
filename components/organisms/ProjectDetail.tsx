'use client';

import React, { useEffect, useState } from 'react';
import { type Project } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
const GithubIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);
const ArrowLeftIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const heroBgColor: Record<string, string> = {
  architex: 'bg-[#3b82f6]',
  'ugc-ai-platform': 'bg-[#f97316]',
  muhasaba: 'bg-[#d97706]',
  'ali-saffudin': 'bg-[#dc2626]',
  spree: 'bg-[#f43f5e]',
};

export const ProjectDetail = ({ project }: { project: Project }) => {
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const heroBg = heroBgColor[project.id] ?? 'bg-[#facc15]';

  return (
    <div className="min-h-screen bg-[#fef3c7]">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center overflow-hidden pt-28 pb-10 sm:pb-16 min-h-[60vh] sm:min-h-[80vh]">

        <Link href="/projects" className="btn-neo-sm absolute top-[88px] left-4 z-20 bg-white text-black">
          <ArrowLeftIcon />
          Back to Projects
        </Link>

        <div className="absolute inset-0 text-black">
          <div className="w-full h-full neo-dot-grid" />
        </div>

        {/* Decorative shapes — desktop only */}
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          {project.id === 'offer-letter-analyzer' ? (
            <>
              <div className="absolute left-10 top-16 w-28 h-20 bg-[#60a5fa] border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] rotate-1" />
              <div className="absolute right-12 top-24 w-16 h-24 bg-[#f472b6] border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] rotate-3" />
              <div className="absolute left-1/4 bottom-16 w-32 h-32 bg-[#34d399] border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] -rotate-6" />
              <div className="absolute right-1/4 bottom-10 w-40 h-20 bg-white border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] rotate-2" />
            </>
          ) : (
            <>
              <div className="absolute left-10 top-16 w-32 h-24 bg-[#3b82f6] border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] rotate-2" />
              <div className="absolute right-12 top-24 w-20 h-28 bg-[#8b5cf6] border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] -rotate-3" />
              <div className="absolute left-1/4 bottom-16 w-36 h-36 bg-[#06b6d4] border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] rotate-6" />
              <div className="absolute right-1/4 bottom-10 w-44 h-24 bg-[#facc15] border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] -rotate-2" />
              <div className="absolute left-1/2 top-1/3 w-24 h-24 bg-[#ec4899] border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] rotate-12" />
            </>
          )}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6">

            {project.image && (
              <div className={`flex items-center justify-center ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className="relative w-28 h-28 sm:w-44 sm:h-44 md:w-56 md:h-56 neo-card rounded-3xl bg-white overflow-hidden flex items-center justify-center">
                  <Image src={project.image} alt={`${project.title} Logo`} width={256} height={256} className="object-contain" priority />
                </div>
              </div>
            )}

            <div className="space-y-3 sm:space-y-4">
              {project.id === 'offer-letter-analyzer' && (
                <p className="font-display text-base sm:text-lg text-black">AI-Powered</p>
              )}
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-black leading-tight">
                <span className="neo-underline inline-block">{project.title}</span>
              </h1>
              <p className="section-sub max-w-3xl mx-auto">
                {project.longDescription || project.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className={`btn-neo text-black ${heroBg}`}>
                <ExternalLinkIcon /> Visit Live Project
              </a>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-neo bg-white text-black">
                  <GithubIcon /> View Code
                </a>
              )}
            </div>

            {/* Offer X-Ray stats */}
            {project.id === 'offer-letter-analyzer' && (
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
                {[
                  { label: 'AI-Powered', value: '100%', color: '#60a5fa' },
                  { label: 'Analysis Time', value: '5 Min', color: '#facc15' },
                  { label: 'Privacy First', value: 'Secure', color: '#34d399' },
                ].map((stat) => (
                  <div key={stat.label} className="neo-card rounded-2xl p-3 sm:p-5 text-center hover:-translate-y-1 transition-transform duration-150">
                    <div className="text-xl sm:text-3xl font-display font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-black/80 font-display text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Architex workflow stages */}
            {project.id === 'architex' && project.workflowStages && (
              <div className="max-w-2xl mx-auto">
                <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
                  {project.workflowStages.map((stage, idx) => (
                    <React.Fragment key={stage}>
                      <div
                        className="neo-card rounded-xl px-4 sm:px-6 py-2 sm:py-3 text-center hover:-translate-y-1 transition-transform duration-150 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]"
                        style={{ backgroundColor: idx === 0 ? '#dbeafe' : idx === 1 ? '#e0e7ff' : idx === 2 ? '#fce7f3' : '#dcfce7' }}
                      >
                        <div className="text-sm sm:text-lg font-display font-bold text-black">{stage}</div>
                      </div>
                      {idx < project.workflowStages!.length - 1 && (
                        <span className="text-xl sm:text-2xl font-display font-bold text-black">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Screenshots ──────────────────────────────────── */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="section-pad bg-white border-y-[3px] border-black">
          <div className="section-inner">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-heading mb-2 sm:mb-3">Screenshots</h2>
              <p className="section-sub">A look inside the platform</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {project.screenshots.map((src, idx) => (
                <button
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] hover:-translate-y-1 transition-transform duration-150 bg-white focus:outline-none"
                  onClick={() => setSelectedImage(src)}
                  aria-label={`View screenshot ${idx + 1}`}
                >
                  <Image src={src} alt={`${project.title} screenshot ${idx + 1}`} width={600} height={400} className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-150 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-white border-[2px] border-black rounded-lg px-3 py-1 text-xs font-display font-bold shadow-[3px_3px_0_0_rgba(0,0,0,0.85)]">
                      Click to expand
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── How It Works ─────────────────────────────────── */}
      {project.workflowSteps && project.workflowSteps.length > 0 && (
        <section className="section-pad bg-white border-y-[3px] border-black">
          <div className="section-inner">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-heading mb-2 sm:mb-3">How It Works</h2>
              <p className="section-sub">Get comprehensive insights in 5 steps</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              {project.workflowSteps.map((step, idx) => (
                <div key={step.title} className="neo-card rounded-2xl p-4 sm:p-6 relative hover:-translate-y-1 transition-transform duration-150">
                  <div
                    className="absolute -top-3 -right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,0.85)] flex items-center justify-center font-display font-bold text-black text-sm"
                    style={{ backgroundColor: step.color }}
                  >
                    {idx + 1}
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-[3px] border-black flex items-center justify-center text-lg sm:text-xl font-display" style={{ backgroundColor: `${step.color}33` }}>
                    {step.icon}
                  </div>
                  <h3 className="text-base sm:text-xl font-display font-bold text-black mt-3 sm:mt-4 mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-black/80 font-display text-xs sm:text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Main Features ────────────────────────────────── */}
      {project.mainFeatures && project.mainFeatures.length > 0 && (
        <section className="section-pad bg-[#fef3c7] border-y-[3px] border-black relative">
          <div className="absolute inset-0 text-black opacity-10">
            <div className="w-full h-full neo-dot-grid" />
          </div>
          <div className="section-inner relative">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-heading mb-2 sm:mb-3">01 — Features</h2>
              <p className="section-sub">Built by Architects, for Architects</p>
            </div>
            <div className="space-y-4 sm:space-y-8">
              {project.mainFeatures.map((feature, idx) => {
                const colors = [
                  { bg: '#dbeafe', accent: '#60a5fa' },
                  { bg: '#e0e7ff', accent: '#818cf8' },
                  { bg: '#fce7f3', accent: '#f472b6' },
                ];
                const { bg, accent } = colors[idx] ?? colors[0];
                return (
                  <div key={feature.number} className="neo-card rounded-2xl p-4 sm:p-8 border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] hover:-translate-y-1 transition-transform duration-150" style={{ backgroundColor: bg }}>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl border-[3px] border-black flex items-center justify-center font-display font-bold text-xl sm:text-2xl text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]" style={{ backgroundColor: accent }}>
                          {feature.number}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-black mb-2 sm:mb-3">{feature.title}</h3>
                        <p className="text-base text-black/90 font-display mb-3 sm:mb-4">{feature.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {feature.items.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 sm:gap-3">
                              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-[2px] border-black flex-shrink-0" style={{ backgroundColor: accent }} />
                              <span className="text-sm sm:text-base text-black font-display font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── AI Assistant (Architex) ───────────────────────── */}
      {project.id === 'architex' && (
        <section className="section-pad bg-white border-y-[3px] border-black">
          <div className="section-inner-md">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-heading mb-2 sm:mb-3">02 — AI Assistant</h2>
              <p className="section-sub">Your Intelligent Project Partner</p>
            </div>
            <div className="grid items-start gap-8 md:gap-16 md:grid-cols-2">
              <div>
                <p className="mb-6 sm:mb-8 text-sm sm:text-base text-black/60 leading-relaxed font-display">
                  Ask questions about your projects, get instant summaries, and let AI help you stay on top of deadlines and deliverables.
                </p>
                <div className="space-y-4 sm:space-y-5">
                  {[
                    { title: 'Project Summaries', desc: 'Get instant overviews of any project status' },
                    { title: 'Document Search', desc: 'Find files and information across all projects' },
                    { title: 'Deadline Alerts', desc: 'AI monitors and reminds you of upcoming deadlines' },
                    { title: 'Smart Suggestions', desc: 'Recommendations based on your workflow patterns' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3 sm:gap-4">
                      <div className="w-1.5 h-1.5 bg-[#3b82f6] mt-2 rounded-full flex-shrink-0" />
                      <div>
                        <span className="font-display font-bold text-black text-sm sm:text-base">{item.title}</span>
                        <span className="text-black/50 font-display text-sm sm:text-base"> — {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-[3px] border-black bg-[#fef3c7] shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] rounded-xl overflow-hidden">
                <div className="border-b-[3px] border-black px-4 py-3 flex items-center gap-3 bg-white">
                  <div className="w-8 h-8 rounded-full bg-[#3b82f6]/20 flex items-center justify-center border-[2px] border-black">
                    <span className="text-[#3b82f6] text-xs font-display font-bold">AI</span>
                  </div>
                  <div>
                    <div className="text-xs font-display font-bold uppercase tracking-wider text-black">Architex Assistant</div>
                    <div className="text-[10px] text-black/40 font-display">Always available</div>
                  </div>
                </div>
                <div className="p-4 space-y-4 min-h-[240px] sm:min-h-[300px] bg-[#fef3c7]">
                  <div className="flex justify-end">
                    <div className="bg-[#3b82f6] text-white px-4 py-2 text-xs max-w-[80%] rounded-lg border-[2px] border-black font-display shadow-[3px_3px_0_0_rgba(0,0,0,0.85)]">
                      What&apos;s the status of the Morrison Residence?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="border-[2px] border-black bg-white px-4 py-3 text-xs max-w-[85%] rounded-lg space-y-2 font-display shadow-[3px_3px_0_0_rgba(0,0,0,0.85)]">
                      <p className="text-black/80">
                        <span className="font-bold text-black">Morrison Residence</span> is in{' '}
                        <span className="text-[#3b82f6] font-bold">Design Development</span>.
                      </p>
                      <div className="border-t border-black/10 pt-2 space-y-1 text-black/60">
                        <div className="flex justify-between"><span>Progress</span><span className="text-[#3b82f6] font-bold">68%</span></div>
                        <div className="flex justify-between"><span>Next deadline</span><span>Dec 15 — CD Set</span></div>
                        <div className="flex justify-between"><span>Open items</span><span>3 checklist items</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[#3b82f6] text-white px-4 py-2 text-xs max-w-[80%] rounded-lg border-[2px] border-black font-display shadow-[3px_3px_0_0_rgba(0,0,0,0.85)]">
                      Show me pending payments
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="border-[2px] border-black bg-white px-4 py-3 text-xs max-w-[85%] rounded-lg font-display shadow-[3px_3px_0_0_rgba(0,0,0,0.85)]">
                      <p className="text-black/80 mb-2">You have <span className="font-bold text-[#3b82f6]">2 pending payments</span>:</p>
                      <div className="space-y-1 text-black/60">
                        <div>• Morrison — $12,500 (DD milestone)</div>
                        <div>• Chen Office — $8,200 (SD milestone)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t-[3px] border-black px-4 py-3 bg-white flex items-center gap-3">
                  <div className="flex-1 border-[2px] border-black/20 px-3 py-2 text-xs text-black/40 rounded-lg font-display bg-[#fef3c7]">
                    Ask about your projects...
                  </div>
                  <div className="w-8 h-8 bg-[#3b82f6] flex items-center justify-center text-white text-xs rounded-lg border-[2px] border-black font-display shadow-[3px_3px_0_0_rgba(0,0,0,0.85)]">
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Features List ────────────────────────────────── */}
      {project.features && project.features.length > 0 && (
        <section className={`section-pad border-y-[3px] border-black relative ${project.id === 'architex' ? 'bg-[#e0e7ff]' : 'bg-[#bfdbfe]'}`}>
          <div className="absolute inset-0 text-black opacity-25">
            <div className="w-full h-full neo-dot-grid" />
          </div>
          <div className="section-inner relative">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-heading mb-2 sm:mb-3">
                {project.id === 'architex' ? '03 — About' : 'Everything You Need'}
              </h2>
              <p className="section-sub">
                {project.id === 'architex'
                  ? "Designed around how architecture practices actually operate."
                  : 'Comprehensive tools to make confident decisions'}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
              {(project.id === 'architex' ? project.features.slice(0, 6) : project.features).map((feature, idx) => {
                const palette = ['#dbeafe', '#e0e7ff', '#fce7f3', '#dcfce7', '#fef3c7', '#fde68a'];
                const bg = project.id === 'architex' ? palette[idx % palette.length] : 'white';
                return (
                  <div key={idx} className="neo-card rounded-2xl p-4 sm:p-6 border-[3px] border-black hover:-translate-y-1 transition-transform duration-150 shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]" style={{ backgroundColor: bg }}>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckIcon />
                      <p className="text-sm sm:text-base text-black font-display leading-relaxed font-medium">{feature}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Tech Stack ───────────────────────────────────── */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white border-b-[3px] border-black">
        <div className="section-inner-md text-center space-y-4 sm:space-y-6">
          <h2 className="section-heading">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="neo-pill bg-white text-black px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-display font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose (Offer X-Ray) ─────────────────────── */}
      {project.id === 'offer-letter-analyzer' && (
        <section className="section-pad bg-[#fef08a] border-b-[3px] border-black relative">
          <div className="absolute inset-0 text-black opacity-20">
            <div className="w-full h-full neo-dot-grid" />
          </div>
          <div className="section-inner relative">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-heading">Why Choose Offer X-Ray?</h2>
              <p className="section-sub mt-2">The most comprehensive AI-powered offer letter analysis platform</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
              {[
                { title: 'Lightning Fast', desc: 'Get results in minutes', color: '#60a5fa' },
                { title: '100% Secure', desc: 'Encrypted, never stored', color: '#34d399' },
                { title: 'AI-Powered', desc: 'Trained on thousands of offers', color: '#f59e0b' },
                { title: 'Export Reports', desc: 'Shareable, detailed PDFs', color: '#f472b6' },
              ].map((item) => (
                <div key={item.title} className="neo-card rounded-2xl p-4 sm:p-6 text-center hover:-translate-y-1 transition-transform duration-150">
                  <div className="mx-auto mb-2 sm:mb-3 w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-[3px] border-black flex items-center justify-center text-xl" style={{ backgroundColor: `${item.color}33` }}>•</div>
                  <h3 className="text-sm sm:text-lg font-display font-bold text-black mb-1">{item.title}</h3>
                  <p className="text-black/80 text-xs sm:text-sm font-display">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="section-heading mb-3 sm:mb-4">Ready to Explore?</h2>
          <p className="section-sub mb-6 sm:mb-8 max-w-2xl mx-auto">Check out the live application and see it in action</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-neo bg-[#facc15] text-black">
              <ExternalLinkIcon /> Visit Live Project
            </a>
            <Link href="/projects" className="btn-neo bg-white text-black">
              <ArrowLeftIcon /> Back to Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ── Image Modal ──────────────────────────────────── */}
      {selectedImage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 z-10 w-12 h-12 bg-white text-black border-[3px] border-black rounded-full flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]" aria-label="Close modal">×</button>
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <Image src={selectedImage} alt="Full size preview" fill className="object-contain p-8" sizes="100vw" priority />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
