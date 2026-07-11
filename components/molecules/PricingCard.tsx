import styles from './PricingCard.module.css';
import { BookCallButton } from '@/components/atoms/BookCallButton';
import { WhatsAppButton } from '@/components/atoms/WhatsAppButton';
import type { PricingTier } from '@/data/design';

interface Props {
  tier: PricingTier;
}

export function PricingCard({ tier }: Props) {
  return (
    <div
      className={`neo-card ${styles.card}${tier.popular ? ` ${styles.cardPopular}` : ''}`}
      style={{ backgroundColor: tier.color }}
    >
      {tier.popular && (
        <div className={styles.popularBadge}>Most Popular</div>
      )}

      <h3 className={styles.name}>{tier.name}</h3>
      <div className={styles.price}>{tier.price}</div>
      <div className={styles.delivery}>Delivered in {tier.delivery}</div>

      <ul className={styles.bullets}>
        {tier.bullets.map((b) => (
          <li key={b} className={styles.bullet}>
            <span className={styles.bulletIcon}>✓</span>
            {b}
          </li>
        ))}
      </ul>

      <div className={styles.revisions}>{tier.revisions}</div>

      <div className={styles.buttons}>
        <BookCallButton label="Book a call" />
        <WhatsAppButton message={tier.waMessage} label="WhatsApp me" />
      </div>
    </div>
  );
}
