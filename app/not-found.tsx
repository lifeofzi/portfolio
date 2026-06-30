import Link from 'next/link';
import { Navigation } from '@/components/molecules/Navigation';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fef3c7] text-gray-900">
      <Navigation />

      <section className="flex flex-col items-center justify-center px-4 py-32 text-center">
        {/* Big 404 */}
        <div className="relative mb-8 select-none">
          <span
            className="text-[clamp(120px,22vw,240px)] font-bold font-display text-black leading-none"
            style={{ textShadow: '8px 8px 0 rgba(0,0,0,0.12)' }}
          >
            404
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-black mb-4">
          Oops.{' '}
          <span className="px-2 py-1 bg-[#fca5a5] border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">
            Wrong turn.
          </span>
        </h1>

        <p className="text-black/60 font-display text-lg max-w-md mb-10">
          This page doesn&apos;t exist. But the rest of the site does — and it&apos;s much better than a blank page.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="btn-neo bg-black text-white font-display"
          >
            ← Back home
          </Link>
          <Link
            href="/projects"
            className="btn-neo bg-[#facc15] text-black font-display"
          >
            See my work
          </Link>
        </div>
      </section>
    </main>
  );
}
