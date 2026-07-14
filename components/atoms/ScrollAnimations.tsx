'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

/*
 * Global scroll animation provider.
 * Add data-anim attributes to any server-rendered element to opt in:
 *   data-anim="split"        → SplitText word reveal
 *   data-anim="fade-up"      → simple fade + translate
 *   data-anim="stagger"      → stagger direct children
 *
 * /design page components use their own scoped useGSAP — excluded via
 * data-anim-skip on the page wrapper so we don't double-animate.
 */
export function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Skip /design — each section manages its own GSAP context
    if (pathname === '/design') return;

    const ctx = gsap.context(() => {
      // SplitText word reveal
      document.querySelectorAll<HTMLElement>('[data-anim="split"]').forEach((el) => {
        const split = SplitText.create(el, { type: 'words' });
        gsap.set(el, { visibility: 'visible' });
        gsap.from(split.words, {
          y: '110%',
          opacity: 0,
          duration: 0.7,
          stagger: 0.055,
          ease: 'power4.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        });
      });

      // Simple fade up
      document.querySelectorAll<HTMLElement>('[data-anim="fade-up"]').forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.65,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      // Stagger direct children
      document.querySelectorAll<HTMLElement>('[data-anim="stagger"]').forEach((el) => {
        gsap.from(el.children, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%' },
        });
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
