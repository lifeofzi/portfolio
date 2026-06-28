'use client';

import Link from 'next/link';
import { useState } from 'react';

function FreeForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit() {
    setError('');
    if (!email) { setError('Please enter your email.'); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: 'N/A', email, source: 'claude-seo-free' }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Something went wrong.'); setLoading(false); return; }
      setDone(true);
      window.open('https://github.com/AgricIDaniel/claude-seo', '_blank');
    } catch {
      setError('Something went wrong. Try again.');
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 px-5 py-4 bg-white/10 border border-white/20 rounded-xl max-w-md">
          <span className="text-lg">✓</span>
          <p className="font-display font-bold text-white text-sm">GitHub opening now — enjoy the audit tool!</p>
        </div>
        <p className="text-white/40 font-display text-sm">I&apos;ll also send you a quick-start guide.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 w-full max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        placeholder="Your email address"
        autoFocus
        className="w-full px-4 py-3 border-[3px] border-white/30 rounded-xl bg-white/10 text-white placeholder:text-white/40 font-display text-sm focus:outline-none focus:border-white/60"
      />
      {error && <p className="text-red-400 text-sm font-display">{error}</p>}
      <button
        onClick={handleSubmit}
        disabled={loading || !email}
        className="w-full btn-neo bg-[#f97316] text-black border-[#f97316] disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-y-0"
      >
        {loading ? 'Opening…' : 'Get claude-seo Free →'}
      </button>
      <p className="text-white/30 font-display text-xs text-center">
        Drop your email — I&apos;ll send the link + a quick-start guide. No spam, ever.
      </p>
    </div>
  );
}

export function CtaSection() {
  return (
    <>
      {/* Free first — micro-yes, they came for this */}
      <section id="get-free" className="section-pad bg-black border-b-[3px] border-black">
        <div className="section-inner text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-2">
            Want just the SEO skills?
          </h2>
          <p className="text-white/50 font-display mb-8">Free forever. MIT licensed. No strings.</p>
          <FreeForm />
        </div>
      </section>

      {/* Supercharge upsell — after they've said yes to free */}
      <section className="section-pad bg-[#facc15] border-b-[3px] border-black">
        <div className="section-inner max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full font-display text-sm font-bold mb-6">
            ⚡ Start free. Upgrade when you&apos;re ready.
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-black mb-4">
            claude-seo is just 25 of the{' '}
            <span className="px-2 py-1 bg-white border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">814 skills</span>{' '}
            in Supercharge.
          </h2>
          <p className="text-lg text-black/70 font-display mb-8 max-w-xl mx-auto">
            Engineering, iOS, design, marketing, content, video — every Claude Code skill pack, curated and installed in 60 seconds.
          </p>
          <Link href="/supercharge" className="btn-neo bg-black text-white text-lg px-10 py-4">
            Get Supercharge — ₹99 →
          </Link>
          <p className="mt-4 text-black/50 font-display text-sm">One-time · Instant download · Includes all SEO skills + 789 more</p>
        </div>
      </section>
    </>
  );
}
