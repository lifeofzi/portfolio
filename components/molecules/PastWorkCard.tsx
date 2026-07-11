import styles from './PastWorkCard.module.css';
import Image from 'next/image';
import type { PastWorkItem } from '@/data/design';

interface Props {
  item: PastWorkItem;
}

export function PastWorkCard({ item }: Props) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`neo-card ${styles.card}`}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={item.image}
          alt={`Screenshot of ${item.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className={styles.meta}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.caption}>{item.caption}</p>
        <div className={styles.visitLink}>Visit site →</div>
      </div>
    </a>
  );
}
