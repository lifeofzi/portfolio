import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/molecules/Navigation';
import { CheckoutSection } from './CheckoutSection';
import { CallbackModal } from '@/components/molecules/CallbackModal';

export const metadata: Metadata = {
  title: 'Supercharge — 814 Claude Code Skills for $1',
  description: 'Install 814 Claude Code skills in 60 seconds. One slash command. Claude handles the rest. Engineering, design, iOS, SEO, marketing, video and more.',
  alternates: { canonical: 'https://zamanishtiyaq.work/supercharge' },
  openGraph: {
    title: 'Supercharge — 814 Claude Code Skills for $1',
    description: 'Install 814 Claude Code skills in 60 seconds. One slash command. Claude handles the rest.',
    url: 'https://zamanishtiyaq.work/supercharge',
  },
};


const categories = [
  { name: 'Engineering & Backend', count: 37, color: '#bfdbfe', skills: ['agent-designer', 'rag-architect', 'mcp-server-builder', 'database-schema-designer', 'ci-cd-pipeline-builder'] },
  { name: 'Engineering Team', count: 31, color: '#bbf7d0', skills: ['senior-frontend', 'senior-backend', 'senior-fullstack', 'code-reviewer', 'security-pen-testing'] },
  { name: 'Frontend & Design', count: 15, color: '#fde68a', skills: ['impeccable', 'extract-design', 'shadcn-ui', 'image-to-code', 'high-end-visual-design'] },
  { name: 'Open Design Templates', count: 354, color: '#fce7f3', skills: ['html-ppt', 'video templates', 'social cards', 'web prototypes', 'dashboards'] },
  { name: 'iOS / Swift / Apple', count: 42, color: '#e9d5ff', skills: ['swiftui-pro', 'storekit', 'asc-workflow', 'ios-ui-craft', 'ios-liquid-glass'] },
  { name: 'SEO Suite', count: 30, color: '#fed7aa', skills: ['seo-audit', 'seo-technical', 'seo-geo', 'seo-cluster', 'seo-schema'] },
  { name: 'Blog & Content', count: 30, color: '#cffafe', skills: ['blog-write', 'blog-audit', 'blog-translate', 'blog-seo-check', 'blog-repurpose'] },
  { name: 'Marketing & Growth', count: 45, color: '#fef08a', skills: ['x-twitter-growth', 'cold-email', 'ad-creative', 'launch-strategy', 'page-cro'] },
  { name: 'C-Level & Product', count: 45, color: '#d1fae5', skills: ['ceo-advisor', 'cto-advisor', 'product-strategist', 'founder-coach', 'roadmap-communicator'] },
  { name: 'Video & Media', count: 25, color: '#ffe4e6', skills: ['hyperframes', 'remotion', 'video-shortform', 'embedded-captions', 'motion-graphics'] },
  { name: 'AI Image & Generation', count: 30, color: '#f3e8ff', skills: ['fal-generate', 'venice-image-generate', 'imagen', 'fal-lip-sync', 'replicate'] },
  { name: 'Code Quality', count: 12, color: '#ecfccb', skills: ['ponytail', 'careful', 'self-eval', 'pr-review-expert', 'spec-driven-workflow'] },
];

const steps = [
  {
    number: '01',
    title: 'Buy for $1',
    description: 'Download SKILL.md — one file, no subscription, yours forever.',
    color: '#facc15',
  },
  {
    number: '02',
    title: 'Drop it in ~/.claude/skills/supercharge/',
    description: 'One folder, one file. Takes 10 seconds.',
    color: '#bfdbfe',
  },
  {
    number: '03',
    title: 'Run /supercharge in Claude Code',
    description: 'Claude asks what you want, installs your chosen packs, done.',
    color: '#bbf7d0',
  },
];

const highlights = [
  { skill: '/impeccable', description: 'Full UI critique and redesign — any frontend, any framework' },
  { skill: '/ponytail', description: 'Forces the laziest solution that works. Kills over-engineering.' },
  { skill: '/senior-frontend', description: 'Senior-level frontend agent — reviews, implements, advises' },
  { skill: '/blog-write', description: 'Full blog writing pipeline from brief to published post' },
  { skill: '/seo-audit', description: 'Technical SEO audit with actionable fixes' },
  { skill: '/autoplan', description: 'Auto-generates a plan before any complex task' },
  { skill: '/extract-design', description: 'Extract a full design system from any live URL' },
  { skill: '/swiftui-pro', description: 'Senior SwiftUI agent — production iOS code, patterns, reviews' },
];

export default function SuperchargePage() {
  return (
    <div className="min-h-screen bg-[#fef3c7]">
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-[#fef3c7] border-b-[3px] border-black">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#bbf7d0] border-[3px] border-black rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] mb-6 font-display text-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            814 skills · One command · $1
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold text-black leading-tight mb-6">
            Supercharge<br />
            <span className="px-2 py-1 bg-[#facc15] border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] inline-block mt-2">
              Claude Code
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-black/80 font-display max-w-2xl mb-4 leading-relaxed">
            814 community-curated Claude Code skills — engineering, design, iOS, SEO, marketing, video, AI generation and more — installed in 60 seconds.
          </p>
          <p className="text-base sm:text-lg text-black/60 font-display max-w-2xl mb-10 leading-relaxed">
            One slash command. Claude asks what you want. Claude does the install. You get back to building.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-start flex-wrap">
            <CheckoutSection />
            <CallbackModal
              source="supercharge"
              buttonLabel="Get a Callback"
              buttonClassName="btn-neo bg-white text-black text-lg px-8 py-4"
            />
            <div className="flex items-center gap-2 px-4 py-4 font-display text-sm text-black/60 w-full sm:w-auto">
              One-time purchase · Instant download · Works with Claude Code
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad border-b-[3px] border-black bg-white">
        <div className="section-inner">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="section-heading mb-3">How it works</h2>
            <p className="section-sub">Three steps. No CLI. No config files. Claude handles everything.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="neo-card rounded-2xl p-6 sm:p-8"
                style={{ backgroundColor: step.color }}
              >
                <div className="text-5xl font-display font-extrabold text-black/20 mb-4">{step.number}</div>
                <h3 className="text-lg sm:text-xl font-display font-extrabold text-black mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-black/70 font-display leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Terminal demo */}
          <div className="mt-10 rounded-2xl border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] bg-black overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-white/40 text-xs font-mono">Claude Code</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <p className="text-white/60">{'>'} /supercharge</p>
              <p className="text-green-400 mt-2">You&apos;re about to install 814 Claude Code skills. What do you want?</p>
              <p className="text-white/60 mt-1 ml-4">[1] Engineering &amp; Backend</p>
              <p className="text-white/60 ml-4">[2] Frontend &amp; Design</p>
              <p className="text-white/60 ml-4">[3] iOS / Swift / Apple</p>
              <p className="text-white/60 ml-4">...</p>
              <p className="text-white/60 ml-4">[A] All of them</p>
              <p className="text-white/60 mt-2">{'>'} A</p>
              <p className="text-blue-400 mt-2">Installing Engineering skills... ✓</p>
              <p className="text-blue-400">Installing Design templates... ✓</p>
              <p className="text-blue-400">Installing iOS / Swift skills... ✓</p>
              <p className="text-blue-400">Installing Marketing skills... ✓</p>
              <p className="text-green-400 mt-2 font-bold">Supercharge complete. 814 skills installed. Restart Claude Code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-pad border-b-[3px] border-black bg-[#fef3c7]">
        <div className="section-inner">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="section-heading mb-3">Start with these</h2>
            <p className="section-sub">Eight skills worth the $1 on their own</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div key={h.skill} className="neo-card rounded-xl p-5 bg-white flex items-start gap-4 hover:-translate-y-0.5 transition-transform duration-150">
                <code className="shrink-0 px-3 py-1.5 bg-black text-[#facc15] text-sm font-mono rounded-lg border-2 border-black font-bold">
                  {h.skill}
                </code>
                <p className="text-sm text-black/70 font-display leading-relaxed pt-1">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-pad border-b-[3px] border-black bg-white">
        <div className="section-inner">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="section-heading mb-3">
              Everything you get
            </h2>
            <p className="section-sub">12 categories. 814 skills. All from the best community repos.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="neo-card rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-150"
                style={{ backgroundColor: cat.color }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base sm:text-lg font-display font-extrabold text-black leading-tight">{cat.name}</h3>
                  <span className="shrink-0 ml-2 px-2 py-0.5 bg-black text-white text-xs font-display font-bold rounded-full">
                    {cat.count}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 bg-white/70 border border-black/20 rounded text-xs font-mono text-black/70">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad border-b-[3px] border-black bg-[#fef3c7]">
        <div className="section-inner max-w-2xl">
          <h2 className="section-heading text-center mb-10">Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'What is Claude Code?', a: 'Claude Code is Anthropic\'s AI coding assistant that runs in your terminal. Skills are slash commands that extend what it can do — from designing UIs to writing blog posts to reviewing security.' },
              { q: 'What exactly do I get?', a: 'A single SKILL.md file. Drop it in your ~/.claude/skills/supercharge/ directory, run /supercharge in Claude Code, and Claude installs up to 814 skills from the best community repos — interactively, no manual config needed.' },
              { q: 'Are these skills free on GitHub?', a: 'Yes — the underlying repos are public. What you\'re buying is the curation (knowing which ones are worth installing) and the installer (so Claude handles setup instead of you doing it manually).' },
              { q: 'Do I need to restart Claude Code after?', a: 'Yes — after /supercharge finishes, restart Claude Code once and all new skills appear automatically.' },
              { q: 'Will this work on any OS?', a: 'Yes. Claude Code runs on Mac, Linux, and Windows (WSL). The skill uses git under the hood, so git needs to be installed.' },
            ].map(({ q, a }) => (
              <div key={q} className="neo-card rounded-xl p-5 bg-white">
                <h3 className="font-display font-extrabold text-black mb-2">{q}</h3>
                <p className="text-sm text-black/70 font-display leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-pad bg-black">
        <div className="section-inner text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            814 skills.<br />
            <span className="px-2 py-1 bg-[#facc15] text-black border-[3px] border-white rounded-xl shadow-[4px_4px_0_0_rgba(255,255,255,0.3)] inline-block mt-2">
              One dollar.
            </span>
          </h2>
          <p className="text-white/60 font-display text-lg mb-10 max-w-md mx-auto">
            Instant download. No subscription. Works with Claude Code on any OS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CheckoutSection />
            <CallbackModal
              source="supercharge-bottom"
              buttonLabel="Get a Callback"
              buttonClassName="btn-neo bg-white text-black text-lg px-8 py-4"
            />
          </div>
          <p className="mt-6 text-white/30 font-display text-sm">
            Built by{' '}
            <Link href="/" className="underline hover:text-white/60 transition-colors">
              Zaman Ishtiyaq
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
