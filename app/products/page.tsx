import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/molecules/Navigation';

export const metadata: Metadata = {
  title: 'Products — Zaman Ishtiyaq',
  description: 'Digital products for vibe coders and developers. Tools that make Claude Code and AI development faster.',
  alternates: { canonical: 'https://zamanishtiyaq.work/products' },
  openGraph: {
    title: 'Products — Zaman Ishtiyaq',
    description: 'Digital products for vibe coders and developers.',
    url: 'https://zamanishtiyaq.work/products',
  },
};

const products = [
  {
    name: 'Supercharge',
    tagline: '814 Claude Code skills. One command.',
    description: 'Install 814 community-curated Claude Code skills across engineering, design, iOS, SEO, marketing, video, and more — in 60 seconds. Claude handles the entire setup.',
    price: '₹99',
    href: '/supercharge',
    color: '#facc15',
    badge: 'Available now',
    badgeColor: '#bbf7d0',
    tags: ['Claude Code', 'Developer Tools', 'AI'],
  },
];

const comingSoon = [
  { name: 'More products dropping soon', color: '#bfdbfe' },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#fef3c7]">
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 border-b-[3px] border-black">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e9d5ff] border-[3px] border-black rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] mb-6 font-display text-sm font-bold">
            Digital Products
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-black leading-tight mb-4">
            Tools for{' '}
            <span className="px-2 py-1 bg-[#facc15] border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] inline-block">
              Vibe Coders
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-black/70 font-display max-w-2xl leading-relaxed">
            Digital products that make Claude Code and AI development faster. Built by a developer, for developers.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section-pad border-b-[3px] border-black bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="neo-card rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-150 no-underline"
                style={{ backgroundColor: p.color }}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    className="px-3 py-1 text-xs font-display font-bold border-[2px] border-black rounded-full"
                    style={{ backgroundColor: p.badgeColor }}
                  >
                    {p.badge}
                  </span>
                  <span className="text-xl font-display font-extrabold text-black">{p.price}</span>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-extrabold text-black mb-1">{p.name}</h2>
                  <p className="text-sm font-display font-bold text-black/70 mb-3">{p.tagline}</p>
                  <p className="text-sm font-display text-black/60 leading-relaxed">{p.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-black/10 border border-black/20 rounded text-xs font-mono text-black/60">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 font-display text-sm font-bold text-black">
                  Get it →
                </div>
              </Link>
            ))}

            {/* Coming soon placeholders */}
            {comingSoon.map((c) => (
              <div
                key={c.name}
                className="neo-card rounded-2xl p-6 flex items-center justify-center min-h-[240px] opacity-50"
                style={{ backgroundColor: c.color }}
              >
                <p className="font-display font-bold text-black/50 text-sm text-center">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t-[3px] border-black bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-black font-display text-sm">
            &copy; {new Date().getFullYear()} Zaman Ishtiyaq. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
