import { processSteps } from '@/data/design';

export function DesignProcess() {
  return (
    <section className="section-pad border-b-[3px] border-black bg-white">
      <div className="section-inner">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-heading mb-3">How It Works</h2>
          <p className="section-sub">From first call to live site in 4 steps</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className="neo-card rounded-2xl p-6 relative"
              style={{ backgroundColor: step.color }}
            >
              <div className="text-5xl font-display font-extrabold text-black/10 mb-2 leading-none">
                {step.number}
              </div>
              <h3 className="text-xl font-display font-extrabold text-black mb-2">{step.title}</h3>
              <p className="text-sm font-display text-black/70 leading-relaxed">{step.description}</p>
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-2xl text-black/30 font-display font-bold">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
