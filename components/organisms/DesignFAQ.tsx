'use client';

import { useState } from 'react';
import { faqs } from '@/data/design';

export function DesignFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-pad border-b-[3px] border-black bg-[#fef3c7]">
      <div className="section-inner-md">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-heading mb-3">Common Questions</h2>
          <p className="section-sub">Everything you need to know before we start</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="neo-card rounded-2xl bg-white overflow-hidden">
              <button
                className="w-full text-left px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-base sm:text-lg font-display font-bold text-black">{faq.q}</span>
                <span className="text-xl font-display font-bold text-black flex-shrink-0">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div className="px-5 sm:px-7 pb-4 sm:pb-5">
                  <p className="text-sm sm:text-base font-display text-black/70 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
