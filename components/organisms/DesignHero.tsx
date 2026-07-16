'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import styles from './DesignHero.module.css';
import { BookCallButton } from '@/components/atoms/BookCallButton';
import { WhatsAppButton } from '@/components/atoms/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger, SplitText);

export function DesignHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Badge drops in
    tl.from(badgeRef.current, { y: -24, opacity: 0, duration: 0.5 });

    // Split headline by words and stagger reveal
    const split = SplitText.create(headingRef.current, { type: 'words,lines', linesClass: styles.splitLine });
    gsap.set(headingRef.current, { visibility: 'visible' });
    tl.from(
      split.words,
      { y: '110%', opacity: 0, duration: 0.7, stagger: 0.06, ease: 'power4.out' },
      '-=0.2'
    );

    // Subtitle fade up
    tl.from(subtitleRef.current, { y: 24, opacity: 0, duration: 0.6 }, '-=0.3');

    // CTAs
    tl.from(ctaRef.current, { y: 20, opacity: 0, duration: 0.5 }, '-=0.3');
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div ref={badgeRef} className={styles.badge}>
          <span className={styles.badgeDot} />
          Websites that convert
        </div>

        <h1 ref={headingRef} className={styles.heading} style={{ visibility: 'hidden' }}>
          Landing Page Design &amp;{' '}
          <span className={styles.headingHighlight}>Custom Web Development for Startups</span>
        </h1>

        <p ref={subtitleRef} className={styles.subtitle}>
          Custom landing pages from $299. Full multi-page websites and SaaS platforms from $749. I design and build fast, conversion-focused websites for startups, consultants, and creators — mobile-first, SEO-ready, delivered on time.
        </p>

        <div ref={ctaRef} className={styles.ctaRow}>
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
