export function HeroSection() {
  return (
    <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-white border-b-[3px] border-black">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full font-display text-sm font-bold mb-8">
          ⭐ 10K Stars · Open Source · MIT Licensed
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-extrabold text-black leading-none mb-4">
          Full SEO audit.
          <br />
          15 minutes.
          <br />
          <span className="text-[#f97316]">Free.</span>
        </h1>

        <p className="text-lg sm:text-xl text-black/60 font-display max-w-2xl mt-6 mb-10 leading-relaxed">
          claude-seo runs 25 AI specialist agents in parallel inside Claude Code. One command. Zero subscriptions. Zero vendor lock-in.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { value: '25', label: 'AI specialist agents' },
            { value: '$0', label: 'vs $99–$999/mo tools', color: 'text-green-600' },
            { value: '10K', label: 'GitHub stars', color: 'text-purple-600' },
            { value: 'MIT', label: 'Open source license', color: 'text-blue-600' },
          ].map((stat) => (
            <div key={stat.label} className="neo-card rounded-xl p-4 text-center bg-white">
              <div className={`text-2xl sm:text-3xl font-display font-extrabold ${stat.color || 'text-black'}`}>
                {stat.value}
              </div>
              <div className="text-xs text-black/50 font-display mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <a
          href="https://github.com/AgricIDaniel/claude-seo"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neo bg-black text-white text-lg px-10 py-4 inline-flex items-center gap-3"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          Get Free on GitHub
        </a>
      </div>
    </section>
  );
}
