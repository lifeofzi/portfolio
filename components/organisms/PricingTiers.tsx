import styles from './PricingTiers.module.css';
import { pricingTiers } from '@/data/design';
import { PricingCard } from '@/components/molecules/PricingCard';

export function PricingTiers() {
  return (
    <section className={`section-pad ${styles.section}`}>
      <div className="section-inner">
        <div className={styles.intro}>
          <h2 className="section-heading mb-3">Choose a Package</h2>
          <p className="section-sub">Fixed price, clear timeline — no surprises</p>
        </div>
        <div className={styles.grid}>
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
