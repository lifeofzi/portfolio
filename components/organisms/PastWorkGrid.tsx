import styles from './PastWorkGrid.module.css';
import { pastWork } from '@/data/design';
import { PastWorkCard } from '@/components/molecules/PastWorkCard';

export function PastWorkGrid() {
  return (
    <section className={`section-pad ${styles.section}`}>
      <div className="section-inner">
        <div className={styles.intro}>
          <h2 className="section-heading mb-3">Recent Work</h2>
          <p className="section-sub">Websites I&apos;ve designed and built</p>
        </div>
        <div className={styles.grid}>
          {pastWork.map((item) => (
            <PastWorkCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
