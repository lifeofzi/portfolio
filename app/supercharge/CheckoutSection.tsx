'use client';

import { useState } from 'react';
type CashfreeInstance = { checkout: (opts: { paymentSessionId: string; redirectTarget: string }) => void };
type LoadFn = (opts: { mode: string }) => Promise<CashfreeInstance>;
// Cashfree JS has no types package — using require with explicit type
// eslint-disable-next-line
const { load } = require('@cashfreepayments/cashfree-js') as { load: LoadFn };

export function CheckoutSection() {
  const [open, setOpen] = useState(false);
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
      cashfree.checkout({
        paymentSessionId: data.paymentSessionId,
        redirectTarget: '_self',
      });
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn-neo bg-black text-white text-lg px-8 py-4"
      >
        Get Supercharge — $1
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <div className="relative w-full max-w-md bg-[#fef3c7] border-[3px] border-black rounded-2xl shadow-[8px_8px_0_0_rgba(0,0,0,0.85)] p-6 sm:p-8">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border-[2px] border-black rounded-lg bg-white font-bold text-black hover:bg-black hover:text-white transition-colors"
            >
              ✕
            </button>

            <h2 className="text-2xl font-display font-extrabold text-black mb-1">
              Get Supercharge
            </h2>
            <p className="text-black/60 font-display text-sm mb-6">
              814 Claude Code skills · One-time $1 · Instant download
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-display font-bold text-black mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 border-[2px] border-black rounded-xl bg-white font-display text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-display font-bold text-black mb-1.5">
                  Phone number
                  <span className="ml-1 font-normal text-black/40">(required by payment processor)</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 555 000 0000"
                  className="w-full px-4 py-3 border-[2px] border-black rounded-xl bg-white font-display text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm font-display font-semibold">{error}</p>
              )}

              <button
                onClick={handlePay}
                disabled={loading}
                className="btn-neo w-full bg-black text-white py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Starting checkout…' : 'Pay $1 and Download'}
              </button>

              <p className="text-center text-xs text-black/40 font-display">
                Secured by Cashfree Payments. Your card details are never stored here.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
