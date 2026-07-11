import { pricingTiers } from '@/data/design';
import { PricingCard } from '@/components/molecules/PricingCard';

export function PricingTiers() {
  return (
    <section className="section-pad border-b-[3px] border-black bg-white">
      <div className="section-inner">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-heading mb-3">Choose a Package</h2>
          <p className="section-sub">Fixed price, clear timeline — no surprises</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-start mt-8">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
