const highlights = [
  { skill: '/impeccable', description: 'Full UI critique and redesign — any frontend, any framework' },
  { skill: '/ponytail', description: 'Forces the laziest solution that works. Kills over-engineering.' },
  { skill: '/senior-frontend', description: 'Senior-level frontend agent — reviews, implements, advises' },
  { skill: '/blog-write', description: 'Full blog writing pipeline from brief to published post' },
  { skill: '/seo-audit', description: 'Technical SEO audit with actionable fixes' },
  { skill: '/autoplan', description: 'Auto-generates a plan before any complex task' },
  { skill: '/extract-design', description: 'Extract a full design system from any live URL' },
  { skill: '/swiftui-pro', description: 'Senior SwiftUI agent — production iOS code, patterns, reviews' },
];

export function HighlightsSection() {
  return (
    <section className="section-pad border-b-[3px] border-black bg-[#fef3c7]">
      <div className="section-inner">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-heading mb-3">Start with these</h2>
          <p className="section-sub">Eight skills worth the $1 on their own</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((h) => (
            <div key={h.skill} className="neo-card rounded-xl p-5 bg-white flex items-start gap-4 hover:-translate-y-0.5 transition-transform duration-150">
              <code className="shrink-0 px-3 py-1.5 bg-black text-[#facc15] text-sm font-mono rounded-lg border-2 border-black font-bold">
                {h.skill}
              </code>
              <p className="text-sm text-black/70 font-display leading-relaxed pt-1">{h.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
