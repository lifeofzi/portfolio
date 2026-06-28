export function BeforeAfterSection() {
  return (
    <section className="section-pad border-b-[3px] border-black bg-[#fef3c7]">
      <div className="section-inner max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fca5a5] border-[3px] border-black rounded-full font-display text-sm font-bold mb-6">
          ⚠ The Problem
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-black leading-tight mb-12">
          Old tools.<br />
          Old thinking.<br />
          <span className="text-[#f97316]">AI search? Silent.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="neo-card rounded-2xl p-6 bg-[#fce7f3]">
            <div className="text-xs font-display font-bold text-red-500 uppercase tracking-widest mb-4">✗ Before</div>
            {[
              { label: 'Audit time', value: '4–8 hrs', valueClass: 'text-red-500' },
              { label: 'Monthly cost', value: '$999', valueClass: 'text-red-500' },
              { label: 'AI search audit', value: 'None', valueClass: 'text-red-500' },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-center py-3 border-b border-black/10 last:border-0">
                <span className="font-display text-black/70 text-sm">{row.label}</span>
                <span className={`font-display font-extrabold text-lg ${row.valueClass}`}>{row.value}</span>
              </div>
            ))}
          </div>

          <div className="neo-card rounded-2xl p-6 bg-[#bbf7d0]">
            <div className="text-xs font-display font-bold text-green-600 uppercase tracking-widest mb-4">✓ After</div>
            {[
              { label: 'Audit time', value: '15 min', valueClass: 'text-green-600' },
              { label: 'Monthly cost', value: '$0', valueClass: 'text-green-600' },
              { label: 'AI search audit', value: 'Included', valueClass: 'text-green-600' },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-center py-3 border-b border-black/10 last:border-0">
                <span className="font-display text-black/70 text-sm">{row.label}</span>
                <span className={`font-display font-extrabold text-lg ${row.valueClass}`}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
