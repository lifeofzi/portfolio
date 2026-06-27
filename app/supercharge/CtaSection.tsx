import Link from 'next/link';
import { CheckoutSection } from './CheckoutSection';

export function CtaSection() {
  return (
    <section className="section-pad bg-black">
      <div className="section-inner text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
          814 skills.
          <br />
          <span className="px-2 py-1 bg-[#facc15] text-black border-[3px] border-white rounded-xl shadow-[4px_4px_0_0_rgba(255,255,255,0.3)] inline-block mt-2">
            One dollar.
          </span>
        </h2>
        <p className="text-white/60 font-display text-lg mb-10 max-w-md mx-auto">
          Instant download. No subscription. Works with Claude Code on any OS.
        </p>
        <CheckoutSection />
        <p className="mt-6 text-white/30 font-display text-sm">
          Built by{' '}
          <Link href="/" className="underline hover:text-white/60 transition-colors">
            Zaman Ishtiyaq
          </Link>
        </p>
      </div>
    </section>
  );
}
