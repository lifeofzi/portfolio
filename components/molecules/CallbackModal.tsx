'use client';

import { useState } from 'react';

interface CallbackFormProps {
  source: string;
}

export function CallbackModal({ source }: CallbackFormProps) {
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [sameNumber, setSameNumber] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  function handleSameNumber(checked: boolean) {
    setSameNumber(checked);
    if (checked) setWhatsapp(phone);
  }

  function handlePhoneChange(val: string) {
    setPhone(val);
    if (sameNumber) setWhatsapp(val);
  }

  async function handleSubmit() {
    setError('');
    if (!phone) {
      setError('Please enter your phone number.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, whatsapp: sameNumber ? phone : whatsapp, source }),
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
          Got it — I&apos;ll reach out on WhatsApp or call you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      <input
        type="tel"
        value={phone}
        onChange={(e) => handlePhoneChange(e.target.value)}
        placeholder="Phone number"
        className="w-full px-4 py-3 border-[3px] border-black rounded-xl bg-white font-display text-sm focus:outline-none focus:ring-2 focus:ring-black shadow-[3px_3px_0_0_rgba(0,0,0,0.85)]"
      />
      <input
        type="tel"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        disabled={sameNumber}
        placeholder="WhatsApp number (optional)"
        className="w-full px-4 py-3 border-[3px] border-black rounded-xl bg-white font-display text-sm focus:outline-none focus:ring-2 focus:ring-black shadow-[3px_3px_0_0_rgba(0,0,0,0.85)] disabled:opacity-50"
      />
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={sameNumber}
          onChange={(e) => handleSameNumber(e.target.checked)}
          className="w-4 h-4 border-2 border-black rounded accent-black"
        />
        <span className="text-xs font-display text-black/60">Same as phone number</span>
      </label>
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
