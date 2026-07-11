import { BookCallButton } from '@/components/atoms/BookCallButton';
import { WhatsAppButton } from '@/components/atoms/WhatsAppButton';

export function DesignHero() {
  return (
    <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-[#fef3c7] border-b-[3px] border-black">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#bfdbfe] border-[3px] border-black rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] mb-6 font-display text-sm font-bold">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Websites that convert
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-black leading-tight mb-6">
          Websites built<br />end-to-end —{' '}
          <span className="px-2 py-1 bg-[#facc15] border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] inline-block mt-2">
            design to launch
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-black/80 font-display max-w-2xl mb-8 leading-relaxed">
          I design and build fast, conversion-focused websites for startups, consultants, and creators — from a single landing page to a full multi-page platform. Fixed price, clear timeline, you own everything at the end.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <BookCallButton label="Book a free call" />
          <WhatsAppButton
            message="Hi, I'm interested in getting a website built — can we chat?"
            label="WhatsApp me"
          />
        </div>
      </div>
    </section>
  );
}
