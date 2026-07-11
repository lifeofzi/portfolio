import styles from './DesignHero.module.css';
import { BookCallButton } from '@/components/atoms/BookCallButton';
import { WhatsAppButton } from '@/components/atoms/WhatsAppButton';

export function DesignHero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Websites that convert
        </div>

        <h1 className={styles.heading}>
          Websites built<br />end-to-end —{' '}
          <span className={styles.headingHighlight}>design to launch</span>
        </h1>

        <p className={styles.subtitle}>
          I design and build fast, conversion-focused websites for startups, consultants, and creators — from a single landing page to a full multi-page platform. Fixed price, clear timeline, you own everything at the end.
        </p>

        <div className={styles.ctaRow}>
          <BookCallButton label="Book a free call" />
          <WhatsAppButton
            message="Hi, I'm interested in getting a website built — can we chat?"
            label="WhatsApp me"
          />
        </div>
      </div>
    </section>
  );
}
