'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import styles from './DesignFAQ.module.css';
import { faqs } from '@/data/design';

gsap.registerPlugin(ScrollTrigger, SplitText);

export function DesignFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const split = SplitText.create(headingRef.current, { type: 'words' });
    gsap.from(split.words, {
      y: 32,
      opacity: 0,
      duration: 0.5,
      stagger: 0.09,
      ease: 'power3.out',
      scrollTrigger: { trigger: headingRef.current, start: 'top 88%' },
    });

    gsap.from('.df-item', {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={`section-pad ${styles.section}`}>
      <div className="section-inner-md">
        <div className={styles.intro}>
          <h2 ref={headingRef} className="section-heading mb-3">Common Questions</h2>
          <p className="section-sub">Everything you need to know before we start</p>
        </div>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={faq.q} className={`neo-card df-item ${styles.item}`}>
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
