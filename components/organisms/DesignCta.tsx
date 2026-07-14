'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import styles from '@/app/design/page.module.css';
import { BookCallButton } from '@/components/atoms/BookCallButton';
import { WhatsAppButton } from '@/components/atoms/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger, SplitText);

export function DesignCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const split = SplitText.create(headingRef.current, { type: 'words' });
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
      defaults: { ease: 'power3.out' },
    });
    tl.from(split.words, { y: 40, opacity: 0, duration: 0.55, stagger: 0.08 })
      .from(`.${styles.ctaSubtext}`, { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
      .from(`.${styles.ctaButtons}`, { y: 16, opacity: 0, duration: 0.45 }, '-=0.2');
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 ref={headingRef} className={styles.ctaHeading}>
          Ready to build your website?
        </h2>
        <p className={styles.ctaSubtext}>
          Book a free 30-minute call or drop me a WhatsApp — I&apos;ll reply within 24 hours with a quote.
        </p>
        <div className={styles.ctaButtons}>
          <BookCallButton label="Book a free call" />
          <WhatsAppButton
            message="Hi, I'd like to get a website built — can we chat?"
            label="WhatsApp me"
          />
        </div>
      </div>
    </section>
  );
}
