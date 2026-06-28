import Link from 'next/link';

export function CtaSection() {
  return (
    <>
      {/* Free CTA */}
      <section className="section-pad border-b-[3px] border-black bg-black">
        <div className="section-inner text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full font-display text-sm font-bold text-white mb-8">
            🎁 Get It Free
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white mb-4">
            Your SEO stack<br />
            <span className="text-[#f97316]">just got free.</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto my-10">
            {[
              { value: '15 min', label: 'Full audit', color: 'text-[#f97316]' },
              { value: '$0', label: 'Forever', color: 'text-green-400' },
              { value: '10K', label: 'GitHub stars', color: 'text-purple-400' },
              { value: '25', label: 'AI agents', color: 'text-white' },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className={`text-2xl font-display font-extrabold ${s.color}`}>{s.value}</div>
                <div className="text-xs text-white/40 font-display mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <a
            href="https://github.com/AgricIDaniel/claude-seo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neo bg-[#f97316] text-black border-[#f97316] text-lg px-10 py-4 inline-flex items-center gap-3 shadow-[6px_6px_0_0_rgba(255,255,255,0.2)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub — Free
          </a>

          <p className="mt-4 text-white/30 font-display text-sm">MIT licensed · No account needed · Clone and run</p>
        </div>
      </section>

      {/* Supercharge upsell */}
      <section className="section-pad bg-[#facc15] border-b-[3px] border-black">
        <div className="section-inner max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full font-display text-sm font-bold mb-6">
            ⚡ Want more?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-black mb-4">
            claude-seo is just<br />25 of the <span className="px-2 py-1 bg-white border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">814 skills</span> in Supercharge.
          </h2>
          <p className="text-lg text-black/70 font-display mb-8 max-w-xl mx-auto">
            Engineering, iOS, design, marketing, content, video — every Claude Code skill pack, curated and installed in 60 seconds.
          </p>
          <Link
            href="/supercharge"
            className="btn-neo bg-black text-white text-lg px-10 py-4"
          >
            Get Supercharge — ₹99 →
          </Link>
          <p className="mt-4 text-black/50 font-display text-sm">One-time · Instant download · Includes all SEO skills + 789 more</p>
        </div>
      </section>
    </>
  );
}
