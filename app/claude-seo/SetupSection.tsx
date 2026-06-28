export function SetupSection() {
  return (
    <section className="section-pad border-b-[3px] border-black bg-[#fef3c7]">
      <div className="section-inner max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#bbf7d0] border-[3px] border-black rounded-full font-display text-sm font-bold mb-6">
          ✓ The Setup
        </div>
        <h2 className="section-heading mb-2">Up and running</h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#f97316] mb-10">in 60 seconds.</h2>

        <div className="space-y-4">
          <div>
            <p className="text-xs font-display font-bold text-black/40 uppercase tracking-widest mb-2">Option 1 — Git Clone</p>
            <div className="rounded-2xl border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] bg-black overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="p-5 font-mono text-sm leading-relaxed">
                <p className="text-white/40"># clone the repo</p>
                <p className="text-green-400">git clone https://github.com/AgricIDaniel/claude-seo</p>
                <p className="text-blue-400">cd claude-seo && bash install.sh</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-display font-bold text-black/40 uppercase tracking-widest mb-2">Option 2 — Claude Code Plugin Marketplace</p>
            <div className="rounded-2xl border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] bg-black overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="p-5 font-mono text-sm">
                <p><span className="text-[#f97316]">/plugin</span> <span className="text-purple-400">marketplace</span> <span className="text-white/60">add</span> <span className="text-green-400">claude-seo</span></p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-display font-bold text-black/40 uppercase tracking-widest mb-2">Then run your first audit</p>
            <div className="rounded-2xl border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] bg-black overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="p-5 font-mono text-sm leading-relaxed">
                <p><span className="text-[#f97316]">/seo</span> <span className="text-white/60">audit https://yoursite.com</span> <span className="text-white/30"># full audit</span></p>
                <p><span className="text-[#f97316]">/seo</span> <span className="text-white/60">schema</span> <span className="text-white/30"># schema check</span></p>
                <p><span className="text-[#f97316]">/seo</span> <span className="text-white/60">geo</span> <span className="text-white/30"># AI search visibility</span></p>
                <p><span className="text-[#f97316]">/seo</span> <span className="text-white/60">local</span> <span className="text-white/30"># local SEO audit</span></p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-black/50 font-display text-center">
          One command. 15 minutes later you have a 32-page audit.
        </p>
      </div>
    </section>
  );
}
