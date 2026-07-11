import styles from './DesignProcess.module.css';
import { processSteps } from '@/data/design';

export function DesignProcess() {
  return (
    <section className={`section-pad ${styles.section}`}>
      <div className="section-inner">
        <div className={styles.intro}>
          <h2 className="section-heading mb-3">How It Works</h2>
          <p className="section-sub">From first call to live site in 4 steps</p>
        </div>
        <div className={styles.grid}>
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className={`neo-card ${styles.step}`}
              style={{ backgroundColor: step.color }}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              {i < processSteps.length - 1 && (
                <div className={styles.arrow}>→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
