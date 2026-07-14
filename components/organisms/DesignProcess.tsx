'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import styles from './DesignProcess.module.css';
import { processSteps } from '@/data/design';

gsap.registerPlugin(ScrollTrigger, SplitText);

export function DesignProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Heading reveal
    const split = SplitText.create(headingRef.current, { type: 'words' });
    gsap.from(split.words, {
      y: 36,
      opacity: 0,
      duration: 0.55,
      stagger: 0.09,
      ease: 'power3.out',
      scrollTrigger: { trigger: headingRef.current, start: 'top 88%' },
    });

    // Step cards cascade in
    gsap.from('.dp-step', {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={`section-pad ${styles.section}`}>
      <div className="section-inner">
        <div className={styles.intro}>
          <h2 ref={headingRef} className="section-heading mb-3">How It Works</h2>
          <p className="section-sub">From first call to live site in 4 steps</p>
        </div>
        <div className={styles.grid}>
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className={`neo-card dp-step ${styles.step}`}
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
