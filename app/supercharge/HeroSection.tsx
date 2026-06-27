import { CheckoutSection } from './CheckoutSection';

export function HeroSection() {
  return (
    <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-[#fef3c7] border-b-[3px] border-black">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#bbf7d0] border-[3px] border-black rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] mb-6 font-display text-sm font-bold">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          814 skills · One command · ₹99
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold text-black leading-tight mb-6">
          Supercharge
          <br />
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

        <CheckoutSection />
      </div>
    </section>
  );
}
