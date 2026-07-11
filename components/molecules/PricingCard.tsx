import { BookCallButton } from '@/components/atoms/BookCallButton';
import { WhatsAppButton } from '@/components/atoms/WhatsAppButton';
import type { PricingTier } from '@/data/design';

interface Props {
  tier: PricingTier;
}

export function PricingCard({ tier }: Props) {
  return (
    <div
      className={`neo-card rounded-2xl p-6 sm:p-8 flex flex-col relative ${tier.popular ? 'ring-4 ring-black' : ''}`}
      style={{ backgroundColor: tier.color }}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-black text-white text-xs font-display font-bold border-[2px] border-black rounded-full shadow-[3px_3px_0_0_rgba(0,0,0,0.4)] whitespace-nowrap">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-display font-extrabold text-black mb-1">{tier.name}</h3>
      <div className="text-3xl sm:text-4xl font-display font-extrabold text-black mb-1">{tier.price}</div>
      <div className="text-sm font-display text-black/70 mb-5">Delivered in {tier.delivery}</div>

      <ul className="space-y-2 mb-4 flex-1">
        {tier.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm font-display text-black/80">
            <span className="mt-1 w-4 h-4 flex-shrink-0 rounded-full bg-black text-white flex items-center justify-center text-[10px]">✓</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="text-xs font-display text-black/60 mb-5">{tier.revisions}</div>

      <div className="flex flex-col gap-2">
        <BookCallButton className="w-full justify-center" label="Book a call" />
        <WhatsAppButton
          message={tier.waMessage}
          className="w-full justify-center"
          label="WhatsApp me"
        />
      </div>
    </div>
  );
}
