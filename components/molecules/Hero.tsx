'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { profileInfo } from '@/data/profile';
import { contactInfo } from '@/data/contact';

/**
 * Molecule: Hero Component
 * Neo-brutalist hero with bold color blocking and chunky borders
 */
export const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 bg-[#fef3c7]">
      {/* Dotted grid background */}
      <div className="absolute inset-0 text-black">
        <div className="w-full h-full neo-dot-grid" />
      </div>

      {/* Floating geometric shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-16 w-28 h-20 bg-[#60a5fa] border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] rotate-1" />
        <div className="absolute right-12 top-24 w-16 h-24 bg-[#f472b6] border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] rotate-3" />
        <div className="absolute left-1/4 bottom-16 w-32 h-32 bg-[#34d399] border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] -rotate-6" />
        <div className="absolute right-1/4 bottom-10 w-40 h-20 bg-white border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] rotate-2" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-10 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Profile + Name */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 neo-card rounded-3xl bg-white overflow-hidden">
                <div className="absolute -left-3 -top-3 px-3 py-1 bg-black text-yellow-300 font-display text-sm border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,0.85)] rounded-xl">
                  Always shipping
                </div>
                <Image
                  src="/me.png"
                  alt={profileInfo.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                />
              </div>
            </div>

            <div className="space-y-4 text-center lg:text-left">
              <p className="font-display text-lg text-black">Hello, I&apos;m</p>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-black">
                <span className="block neo-underline inline-block">{profileInfo.name.split(' ')[0]}</span>{' '}
                <span className="block sm:inline-block px-3 py-1 bg-[#bfdbfe] border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] rounded-xl mt-2 sm:mt-0">
                  {profileInfo.name.split(' ')[1] || ''}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-display text-black max-w-2xl">
                {profileInfo.title}
              </p>
              <p className="text-base sm:text-lg text-black max-w-2xl leading-relaxed">
                {profileInfo.bio}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-display text-lg px-6 py-3 bg-[#facc15] border-[3px] border-black rounded-xl shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] hover:-translate-y-1 transition-transform duration-150 text-black flex items-center justify-center gap-2"
                >
                  Let&apos;s Connect
                  <span className="text-sm">↗</span>
                </a>
                <a
                  href="/Zaman_Ishtiyaq_Resume.pdf"
                  download="Zaman_Ishtiyaq_Resume.pdf"
                  className="font-display text-lg px-6 py-3 bg-white border-[3px] border-black rounded-xl shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] hover:-translate-y-1 transition-transform duration-150 text-black flex items-center justify-center gap-2"
                >
                  Download Resume
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <span className="font-display text-sm uppercase tracking-wide bg-black text-white px-3 py-1 rounded-lg border-[3px] border-black">
                  Based in Srinagar · Remote friendly
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-pill bg-white text-black flex items-center gap-2 px-4 py-2 hover:-translate-y-1 transition-transform duration-150"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="font-display text-sm">GitHub</span>
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-pill bg-[#bfdbfe] text-black flex items-center gap-2 px-4 py-2 hover:-translate-y-1 transition-transform duration-150"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="font-display text-sm">LinkedIn</span>
            </a>
            <a
              href={contactInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-pill bg-[#fca5a5] text-black flex items-center gap-2 px-4 py-2 hover:-translate-y-1 transition-transform duration-150"
              aria-label="Twitter/X"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="font-display text-sm">Twitter/X</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

