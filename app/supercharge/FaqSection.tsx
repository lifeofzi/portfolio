const faqs = [
  {
    q: 'What is Claude Code?',
    a: "Claude Code is Anthropic's AI coding assistant that runs in your terminal. Skills are slash commands that extend what it can do — from designing UIs to writing blog posts to reviewing security.",
  },
  {
    q: 'What exactly do I get?',
    a: "A single SKILL.md file. Drop it in your ~/.claude/skills/supercharge/ directory, run /supercharge in Claude Code, and Claude installs up to 814 skills from the best community repos — interactively, no manual config needed.",
  },
  {
    q: 'Are these skills free on GitHub?',
    a: "Yes — the underlying repos are public. What you're buying is the curation (knowing which ones are worth installing) and the installer (so Claude handles setup instead of you doing it manually).",
  },
  {
    q: 'Do I need to restart Claude Code after?',
    a: 'Yes — after /supercharge finishes, restart Claude Code once and all new skills appear automatically.',
  },
  {
    q: 'Will this work on any OS?',
    a: 'Yes. Claude Code runs on Mac, Linux, and Windows (WSL). The skill uses git under the hood, so git needs to be installed.',
  },
];

export function FaqSection() {
  return (
    <section className="section-pad border-b-[3px] border-black bg-[#fef3c7]">
      <div className="section-inner max-w-2xl">
        <h2 className="section-heading text-center mb-10">Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="neo-card rounded-xl p-5 bg-white">
              <h3 className="font-display font-extrabold text-black mb-2">{q}</h3>
              <p className="text-sm text-black/70 font-display leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
