'use client';

import { useState } from 'react';

interface CallbackModalProps {
  source: string;
  buttonLabel?: string;
  buttonClassName?: string;
}

export function CallbackModal({
  source,
  buttonLabel = 'Get a Callback',
  buttonClassName = 'btn-neo bg-white text-black',
}: CallbackModalProps) {
  const [open, setOpen] = useState(false);
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
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    setOpen(false);
    setTimeout(() => {
      setDone(false);
      setPhone('');
      setWhatsapp('');
      setSameNumber(false);
      setError('');
    }, 300);
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className={buttonClassName}>
        {buttonLabel}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={handleClose} />

          <div className="relative w-full max-w-md bg-[#fef3c7] border-[3px] border-black rounded-2xl shadow-[8px_8px_0_0_rgba(0,0,0,0.85)] p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border-[2px] border-black rounded-lg bg-white font-bold text-black hover:bg-black hover:text-white transition-colors"
            >
              ✕
            </button>

            {done ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-[#bbf7d0] border-[3px] border-black rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">
                  ✓
                </div>
                <h2 className="text-2xl font-display font-extrabold text-black mb-2">Got it!</h2>
                <p className="text-black/60 font-display text-sm">
                  I&apos;ll reach out on WhatsApp or call you back shortly.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 btn-neo bg-black text-white"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-display font-extrabold text-black mb-1">
                  Get a Callback
                </h2>
                <p className="text-black/60 font-display text-sm mb-6">
                  Leave your number and I&apos;ll reach out within 24 hours.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-display font-bold text-black mb-1.5">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      placeholder="+1 555 000 0000"
                      className="w-full px-4 py-3 border-[2px] border-black rounded-xl bg-white font-display text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-display font-bold text-black mb-1.5">
                      WhatsApp number
                      <span className="ml-1 font-normal text-black/40">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      disabled={sameNumber}
                      placeholder="+1 555 000 0000"
                      className="w-full px-4 py-3 border-[2px] border-black rounded-xl bg-white font-display text-sm focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
                    />
                    <label className="flex items-center gap-2 mt-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={sameNumber}
                        onChange={(e) => handleSameNumber(e.target.checked)}
                        className="w-4 h-4 border-2 border-black rounded accent-black"
                      />
                      <span className="text-xs font-display text-black/60">Same as phone number</span>
                    </label>
                  </div>

                  {error && (
                    <p className="text-red-600 text-sm font-display font-semibold">{error}</p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="btn-neo w-full bg-black text-white py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Submitting…' : 'Request Callback'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
