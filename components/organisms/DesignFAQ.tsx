'use client';

import styles from './DesignFAQ.module.css';
import { useState } from 'react';
import { faqs } from '@/data/design';

export function DesignFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={`section-pad ${styles.section}`}>
      <div className="section-inner-md">
        <div className={styles.intro}>
          <h2 className="section-heading mb-3">Common Questions</h2>
          <p className="section-sub">Everything you need to know before we start</p>
        </div>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={faq.q} className={`neo-card ${styles.item}`}>
              <button
                className={styles.button}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
              >
                <span className={styles.question}>{faq.q}</span>
                <span aria-hidden="true" className={styles.toggle}>
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div id={`faq-panel-${i}`} className={styles.answer}>
                  <p className={styles.answerText}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
