import type { Metadata } from 'next';
import { Navigation } from '@/components/molecules/Navigation';
import { HeroSection } from './HeroSection';
import { HowItWorksSection } from './HowItWorksSection';
import { HighlightsSection } from './HighlightsSection';
import { CategoriesSection } from './CategoriesSection';
import { FaqSection } from './FaqSection';
import { CtaSection } from './CtaSection';

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

export default function SuperchargePage() {
  return (
    <div className="min-h-screen bg-[#fef3c7]">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <HighlightsSection />
      <CategoriesSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
