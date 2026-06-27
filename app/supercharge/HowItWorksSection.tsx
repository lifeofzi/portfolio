const steps = [
  {
    number: '01',
    title: 'Buy for $1',
    description: 'Download SKILL.md — one file, no subscription, yours forever.',
    color: '#facc15',
  },
  {
    number: '02',
    title: 'Drop it in ~/.claude/skills/supercharge/',
    description: 'One folder, one file. Takes 10 seconds.',
    color: '#bfdbfe',
  },
  {
    number: '03',
    title: 'Run /supercharge in Claude Code',
    description: 'Claude asks what you want, installs your chosen packs, done.',
    color: '#bbf7d0',
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-pad border-b-[3px] border-black bg-white">
      <div className="section-inner">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-heading mb-3">How it works</h2>
          <p className="section-sub">Three steps. No CLI. No config files. Claude handles everything.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="neo-card rounded-2xl p-6 sm:p-8" style={{ backgroundColor: step.color }}>
              <div className="text-5xl font-display font-extrabold text-black/20 mb-4">{step.number}</div>
              <h3 className="text-lg sm:text-xl font-display font-extrabold text-black mb-2">{step.title}</h3>
              <p className="text-sm sm:text-base text-black/70 font-display leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] bg-black overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-white/40 text-xs font-mono">Claude Code</span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed">
            <p className="text-white/60">{'>'} /supercharge</p>
            <p className="text-green-400 mt-2">You&apos;re about to install 814 Claude Code skills. What do you want?</p>
            <p className="text-white/60 mt-1 ml-4">[1] Engineering &amp; Backend</p>
            <p className="text-white/60 ml-4">[2] Frontend &amp; Design</p>
            <p className="text-white/60 ml-4">[3] iOS / Swift / Apple</p>
            <p className="text-white/60 ml-4">...</p>
            <p className="text-white/60 ml-4">[A] All of them</p>
            <p className="text-white/60 mt-2">{'>'} A</p>
            <p className="text-blue-400 mt-2">Installing Engineering skills... ✓</p>
            <p className="text-blue-400">Installing Design templates... ✓</p>
            <p className="text-blue-400">Installing iOS / Swift skills... ✓</p>
            <p className="text-blue-400">Installing Marketing skills... ✓</p>
            <p className="text-green-400 mt-2 font-bold">Supercharge complete. 814 skills installed. Restart Claude Code.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
