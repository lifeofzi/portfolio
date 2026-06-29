'use client';

import { useState } from 'react';

export function LeadForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!email || !phone) { setError('Please fill in both fields.'); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone, source: 'switchline' }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Something went wrong. Try again.'); setLoading(false); return; }
      setDone(true);
    } catch {
      setError('Something went wrong. Try again.');
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="sw-lead-wrap">
        <div className="sw-lead-done">
          <div className="sw-lead-done-icon">✓</div>
          <h3>You&apos;re on the list.</h3>
          <p>Expect an email from Zaman within 24 hours to set up your demo.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sw-lead-wrap">
      <form onSubmit={handleSubmit} noValidate>
        <div className="sw-lead-fields">
          <div className="sw-lead-field">
            <label htmlFor="sl-email">Your email</label>
            <input
              id="sl-email"
              type="email"
              placeholder="you@yourbusiness.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div className="sw-lead-field">
            <label htmlFor="sl-phone">Your phone</label>
            <input
              id="sl-phone"
              type="tel"
              placeholder="+1 555 000 0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
            />
          </div>
        </div>
        {error && <p className="sw-lead-error">{error}</p>}
        <button type="submit" className="sw-lead-submit" disabled={loading}>
          {loading ? 'Sending…' : 'Get in touch →'}
        </button>
        <p className="sw-lead-alt">
          Or email directly at{' '}
          <a href="mailto:zaman@zamanishtiyaq.work">zaman@zamanishtiyaq.work</a>
        </p>
      </form>
    </div>
  );
}
