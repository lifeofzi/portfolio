'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import styles from './PastWorkGrid.module.css';
import { pastWork } from '@/data/design';
import { PastWorkCard } from '@/components/molecules/PastWorkCard';

gsap.registerPlugin(ScrollTrigger, SplitText);

export function PastWorkGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Heading word reveal on scroll
    const split = SplitText.create(headingRef.current, { type: 'words' });
    gsap.from(split.words, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 88%',
      },
    });

    // Cards stagger in from below
    gsap.from('.pw-card', {
      y: 60,
      opacity: 0,
      duration: 0.65,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={`section-pad ${styles.section}`}>
      <div className="section-inner">
        <div className={styles.intro}>
          <h2 ref={headingRef} className="section-heading mb-3">Recent Work</h2>
          <p className="section-sub">Websites I&apos;ve designed and built</p>
        </div>
        <div className={styles.grid}>
          {pastWork.map((item) => (
            <PastWorkCard key={item.id} item={item} className="pw-card" />
          ))}
        </div>
      </div>
    </section>
  );
}
