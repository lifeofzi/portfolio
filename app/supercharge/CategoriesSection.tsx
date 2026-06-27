const categories = [
  { name: 'Engineering & Backend', count: 37, color: '#bfdbfe', skills: ['agent-designer', 'rag-architect', 'mcp-server-builder', 'database-schema-designer', 'ci-cd-pipeline-builder'] },
  { name: 'Engineering Team', count: 31, color: '#bbf7d0', skills: ['senior-frontend', 'senior-backend', 'senior-fullstack', 'code-reviewer', 'security-pen-testing'] },
  { name: 'Frontend & Design', count: 15, color: '#fde68a', skills: ['impeccable', 'extract-design', 'shadcn-ui', 'image-to-code', 'high-end-visual-design'] },
  { name: 'Open Design Templates', count: 354, color: '#fce7f3', skills: ['html-ppt', 'video templates', 'social cards', 'web prototypes', 'dashboards'] },
  { name: 'iOS / Swift / Apple', count: 42, color: '#e9d5ff', skills: ['swiftui-pro', 'storekit', 'asc-workflow', 'ios-ui-craft', 'ios-liquid-glass'] },
  { name: 'SEO Suite', count: 30, color: '#fed7aa', skills: ['seo-audit', 'seo-technical', 'seo-geo', 'seo-cluster', 'seo-schema'] },
  { name: 'Blog & Content', count: 30, color: '#cffafe', skills: ['blog-write', 'blog-audit', 'blog-translate', 'blog-seo-check', 'blog-repurpose'] },
  { name: 'Marketing & Growth', count: 45, color: '#fef08a', skills: ['x-twitter-growth', 'cold-email', 'ad-creative', 'launch-strategy', 'page-cro'] },
  { name: 'C-Level & Product', count: 45, color: '#d1fae5', skills: ['ceo-advisor', 'cto-advisor', 'product-strategist', 'founder-coach', 'roadmap-communicator'] },
  { name: 'Video & Media', count: 25, color: '#ffe4e6', skills: ['hyperframes', 'remotion', 'video-shortform', 'embedded-captions', 'motion-graphics'] },
  { name: 'AI Image & Generation', count: 30, color: '#f3e8ff', skills: ['fal-generate', 'venice-image-generate', 'imagen', 'fal-lip-sync', 'replicate'] },
  { name: 'Code Quality', count: 12, color: '#ecfccb', skills: ['ponytail', 'careful', 'self-eval', 'pr-review-expert', 'spec-driven-workflow'] },
];

export function CategoriesSection() {
  return (
    <section className="section-pad border-b-[3px] border-black bg-white">
      <div className="section-inner">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-heading mb-3">Everything you get</h2>
          <p className="section-sub">12 categories. 814 skills. All from the best community repos.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="neo-card rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-150"
              style={{ backgroundColor: cat.color }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base sm:text-lg font-display font-extrabold text-black leading-tight">{cat.name}</h3>
                <span className="shrink-0 ml-2 px-2 py-0.5 bg-black text-white text-xs font-display font-bold rounded-full">
                  {cat.count}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span key={s} className="px-2 py-0.5 bg-white/70 border border-black/20 rounded text-xs font-mono text-black/70">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
