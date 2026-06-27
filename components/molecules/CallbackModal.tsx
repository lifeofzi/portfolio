'use client';

import { useState } from 'react';

interface CallbackFormProps {
  source: string;
}

export function CallbackModal({ source }: CallbackFormProps) {
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit() {
    setError('');
    if (!whatsapp) {
      setError('Please enter your WhatsApp number.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: whatsapp, whatsapp, email, source }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Try again.');
        setLoading(false);
        return;
      }

      setDone(true);
    } catch {
      setError('Something went wrong. Try again.');
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="flex items-center gap-3 px-5 py-4 bg-[#bbf7d0] border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">
        <span className="text-xl">✓</span>
        <p className="font-display font-bold text-black text-sm">
          Got it — I&apos;ll reach out on WhatsApp soon.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      <input
        type="tel"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        placeholder="WhatsApp number"
        className="w-full px-4 py-3 border-[3px] border-black rounded-xl bg-white font-display text-sm focus:outline-none focus:ring-2 focus:ring-black shadow-[3px_3px_0_0_rgba(0,0,0,0.85)]"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address (optional)"
        className="w-full px-4 py-3 border-[3px] border-black rounded-xl bg-white font-display text-sm focus:outline-none focus:ring-2 focus:ring-black shadow-[3px_3px_0_0_rgba(0,0,0,0.85)]"
      />
      {error && (
        <p className="text-red-600 text-sm font-display font-semibold">{error}</p>
      )}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="btn-neo bg-black text-white py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Submitting…' : 'Request Callback'}
      </button>
    </div>
  );
}
