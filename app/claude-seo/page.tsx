import type { Metadata } from 'next';
import { Navigation } from '@/components/molecules/Navigation';
import { HeroSection } from './HeroSection';
import { BeforeAfterSection } from './BeforeAfterSection';
import { WhatYouGetSection } from './WhatYouGetSection';
import { SetupSection } from './SetupSection';
import { CtaSection } from './CtaSection';

export const metadata: Metadata = {
  title: 'claude-seo — Full SEO Audit in 15 Minutes. Free.',
  description: '25 AI agents run your entire SEO stack inside Claude Code. Core Web Vitals, Schema, AI Search, Local SEO, 32-page PDF report. MIT licensed. Zero subscriptions.',
  alternates: { canonical: 'https://zamanishtiyaq.work/claude-seo' },
  openGraph: {
    title: 'claude-seo — Full SEO Audit in 15 Minutes. Free.',
    description: '25 AI agents. One command. Full SEO audit in 15 minutes. Free forever.',
    url: 'https://zamanishtiyaq.work/claude-seo',
  },
};

export default function ClaudeSeoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <BeforeAfterSection />
      <WhatYouGetSection />
      <SetupSection />
      <CtaSection />
    </div>
  );
}
