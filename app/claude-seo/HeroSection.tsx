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

        <p className="text-black/40 font-display text-sm">↓ Scroll to see what's included</p>
      </div>
    </section>
  );
}
