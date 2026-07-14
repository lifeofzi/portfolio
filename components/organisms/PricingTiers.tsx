'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import styles from './PricingTiers.module.css';
import { pricingTiers } from '@/data/design';
import { PricingCard } from '@/components/molecules/PricingCard';

gsap.registerPlugin(ScrollTrigger, SplitText);

export function PricingTiers() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const split = SplitText.create(headingRef.current, { type: 'words' });
    gsap.from(split.words, {
      y: 36,
      opacity: 0,
      duration: 0.55,
      stagger: 0.09,
      ease: 'power3.out',
      scrollTrigger: { trigger: headingRef.current, start: 'top 88%' },
    });

    gsap.from('.pt-card', {
      y: 50,
      opacity: 0,
      duration: 0.65,
      stagger: 0.13,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={`section-pad ${styles.section}`}>
      <div className="section-inner">
        <div className={styles.intro}>
          <h2 ref={headingRef} className="section-heading mb-3">Choose a Package</h2>
          <p className="section-sub">Fixed price, clear timeline — no surprises</p>
        </div>
        <div className={styles.grid}>
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} className="pt-card" />
          ))}
        </div>
      </div>
    </section>
  );
}
