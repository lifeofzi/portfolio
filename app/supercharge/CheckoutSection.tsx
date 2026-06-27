'use client';

import { useState } from 'react';

type CashfreeInstance = { checkout: (opts: { paymentSessionId: string; redirectTarget: string }) => void };
type LoadFn = (opts: { mode: string }) => Promise<CashfreeInstance>;
// eslint-disable-next-line
const { load } = require('@cashfreepayments/cashfree-js') as { load: LoadFn };

export function CheckoutSection() {
  const [expanded, setExpanded] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handlePay() {
    setError('');
    if (!email || !phone) {
      setError('Please enter your email and phone number.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      const cashfree = await load({ mode: 'production' });
      cashfree.checkout({ paymentSessionId: data.paymentSessionId, redirectTarget: '_self' });
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  if (!expanded) {
    return (
      <button
        onClick={() => setExpanded(true)}
        className="btn-neo bg-black text-white text-lg px-8 py-4"
      >
        Get Supercharge — $1
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        autoFocus
        className="w-full px-4 py-3 border-[3px] border-black rounded-xl bg-white font-display text-sm focus:outline-none focus:ring-2 focus:ring-black shadow-[3px_3px_0_0_rgba(0,0,0,0.85)]"
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone number (required by payment processor)"
        className="w-full px-4 py-3 border-[3px] border-black rounded-xl bg-white font-display text-sm focus:outline-none focus:ring-2 focus:ring-black shadow-[3px_3px_0_0_rgba(0,0,0,0.85)]"
      />
      {error && (
        <p className="text-red-600 text-sm font-display font-semibold">{error}</p>
      )}
      <button
        onClick={handlePay}
        disabled={loading}
        className="btn-neo bg-black text-white text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Starting checkout…' : 'Pay $1 and Download'}
      </button>
      <p className="text-xs text-black/40 font-display text-center">
        Secured by Cashfree · One-time · Instant download
      </p>
    </div>
  );
}
