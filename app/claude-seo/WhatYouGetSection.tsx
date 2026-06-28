const features = [
  { icon: '⚡', title: 'Core Web Vitals', desc: 'LCP · CLS · INP', color: '#fde68a' },
  { icon: '🏷', title: 'Schema', desc: '20+ types validated', color: '#bfdbfe' },
  { icon: '🤖', title: 'AI Search (GEO)', desc: 'ChatGPT · Perplexity', color: '#e9d5ff', highlight: true },
  { icon: '🏆', title: 'E-E-A-T', desc: 'Author · Trust · Depth', color: '#fef3c7' },
  { icon: '📍', title: 'Local SEO', desc: 'GBP · NAP · Citations', color: '#fce7f3' },
  { icon: '📄', title: '32-Page PDF', desc: 'Auto-generated report', color: '#fed7aa', highlight: true },
];

export function WhatYouGetSection() {
  return (
    <section className="section-pad border-b-[3px] border-black bg-white">
      <div className="section-inner">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#bbf7d0] border-[3px] border-black rounded-full font-display text-sm font-bold mb-6">
          🔍 What You Get
        </div>
        <h2 className="section-heading mb-3">
          25 agents.<br />
          <span className="text-[#f97316]">One command.</span>
        </h2>
        <p className="section-sub mb-12">18 agents run in parallel. Full audit in 15 minutes.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="neo-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-150"
              style={{ backgroundColor: f.color }}
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-display font-extrabold text-black text-lg mb-1">{f.title}</h3>
              <p className="text-sm text-black/60 font-display">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border-[3px] border-black bg-black text-white px-6 py-4 font-display text-sm flex items-center gap-3">
          <span className="text-lg">📊</span>
          <span>
            <strong>+ SQLite drift monitoring</strong>
            <span className="text-white/50"> — catch regressions before Google does</span>
          </span>
        </div>
      </div>
    </section>
  );
}
