import type { Metadata } from 'next';
import './switchline.css';

export const metadata: Metadata = {
  title: 'Switchline — AI Front Desk · Plans & Pricing',
  description: 'Switchline answers every call to your business 24/7 — books appointments, qualifies leads, transfers urgent calls. No voicemail. No missed leads.',
  alternates: { canonical: 'https://zamanishtiyaq.work/switchline' },
  openGraph: {
    title: 'Switchline — AI Front Desk · Plans & Pricing',
    description: 'Your front desk, on every call. Answers 24/7, books appointments, texts you a summary of every conversation.',
    url: 'https://zamanishtiyaq.work/switchline',
  },
};

const BOOK_LINK = 'mailto:zaman.ishtiyaq@gmail.com?subject=Switchline%20%E2%80%94%20Book%20a%20Setup%20Call';

export default function SwitchlinePage() {
  return (
    <div className="sw">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Instrument+Sans:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

      {/* NAV */}
      <header className="nav">
        <div className="wrap">
          <div className="brand"><span className="live-dot" /><span>Switchline</span></div>
          <a className="nav-cta" href={BOOK_LINK}>Book a 15-min setup call</a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow"><span className="live-dot" />Your front desk, on every call</span>
          <h1>The calls you miss are the jobs you <em>lose</em>.</h1>
          <p className="sub">Switchline answers every call to your business — day, night, weekends, and when the line&apos;s already busy. It books appointments straight into your calendar, answers the questions callers actually ask, and texts you a summary of every conversation. No voicemail. No missed leads.</p>
          <div className="hero-actions">
            <a className="btn-primary" href="#pricing">See plans &amp; pricing</a>
            <a className="btn-ghost" href="#how">How it works</a>
          </div>

          <div className="calllog" aria-label="Sample of calls handled">
            <div className="calllog-head"><span className="live-dot" /><span>Calls handled today</span></div>
            <div className="call"><span className="t mono">8:42a</span><span className="who">New caller <small>&ldquo;Do you have anything tomorrow morning?&rdquo;</small></span><span className="tag booked">Booked</span></div>
            <div className="call"><span className="t mono">11:07a</span><span className="who">Repeat customer <small>Asked about pricing &amp; service area</small></span><span className="tag qual">Qualified</span></div>
            <div className="call"><span className="t mono">1:55p</span><span className="who">Urgent job <small>Wanted to speak to a person</small></span><span className="tag xfer">Transferred</span></div>
            <div className="call"><span className="t mono">9:21p</span><span className="who">After-hours lead <small>Booked a Saturday slot</small></span><span className="tag booked">Booked</span></div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="value">
        <div className="wrap">
          <div className="stat"><div className="n">1&nbsp;in&nbsp;<span>3</span></div><div className="l">inbound calls to local businesses go unanswered — most never call back.</div></div>
          <div className="stat"><div className="n"><span>24/7</span></div><div className="l">Answered on the first ring — after hours, holidays, and during your busiest stretch.</div></div>
          <div className="stat"><div className="n"><span>~1/6</span></div><div className="l">the cost of a full-time front-desk hire, with no sick days and no hold music.</div></div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="pricing">
        <div className="wrap">
          <div className="section-head">
            <div className="kick">Plans &amp; pricing</div>
            <h2>Simple monthly pricing. No per-minute surprises.</h2>
            <p>Pick the plan that fits your call volume. Each plan includes a generous monthly minute allowance — if you go over, you only pay a flat rate for the extra. No contracts, month-to-month, cancel anytime.</p>
          </div>

          <div className="plans">
            {/* Starter */}
            <div className="plan">
              <div className="pname">Starter</div>
              <p className="blurb">For solo operators and quieter front desks.</p>
              <div className="price"><span className="amt">$297</span><span className="per">/mo</span></div>
              <div className="cap">Up to 500 talk-minutes / month<br />then $0.20/min</div>
              <ul className="feat">
                <li><span className="ck">+</span> Answers every inbound call, 24/7</li>
                <li><span className="ck">+</span> Books appointments into your calendar</li>
                <li><span className="ck">+</span> Answers your top FAQs (hours, pricing, service area)</li>
                <li><span className="ck">+</span> Text + email summary of every call</li>
                <li><span className="ck">+</span> Keep your existing number, or a new one</li>
              </ul>
              <a className="choose dark" href={BOOK_LINK}>Choose Starter</a>
            </div>

            {/* Pro (featured) */}
            <div className="plan feature">
              <span className="ribbon">Most popular</span>
              <div className="pname">Pro</div>
              <p className="blurb">For busy service businesses with steady call flow.</p>
              <div className="price"><span className="amt">$497</span><span className="per">/mo</span></div>
              <div className="cap">Up to 1,200 talk-minutes / month<br />then $0.15/min</div>
              <div className="hipaa-badge on-dark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                HIPAA-ready
              </div>
              <ul className="feat">
                <li><span className="ck">+</span> Everything in Starter</li>
                <li><span className="ck">+</span> Live transfer to your team for urgent calls</li>
                <li><span className="ck">+</span> Lead qualifying before it reaches you</li>
                <li><span className="ck">+</span> Booking confirmations + reminders by text</li>
                <li><span className="ck">+</span> Monthly call-insights report</li>
                <li><span className="ck">+</span> Priority response on script changes</li>
              </ul>
              <a className="choose amber" href={BOOK_LINK}>Choose Pro</a>
            </div>

            {/* Multi-location */}
            <div className="plan">
              <div className="pname">Multi-location</div>
              <p className="blurb">For multiple sites or high call volume.</p>
              <div className="price"><span className="amt">$997</span><span className="per">/mo</span></div>
              <div className="cap">Up to 3,000 talk-minutes / month<br />then $0.15/min</div>
              <div className="hipaa-badge on-light">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                HIPAA-ready
              </div>
              <ul className="feat">
                <li><span className="ck">+</span> Everything in Pro</li>
                <li><span className="ck">+</span> Routing across multiple locations</li>
                <li><span className="ck">+</span> Per-location call reporting</li>
                <li><span className="ck">+</span> Calendar &amp; CRM integration</li>
                <li><span className="ck">+</span> Dedicated support line</li>
              </ul>
              <a className="choose dark" href={BOOK_LINK}>Choose Multi-location</a>
            </div>
          </div>

          <div className="setup-note">
            <div className="st">One-time setup &amp; onboarding: <b>$750</b> <small>Includes: we learn your business on a short intake call, build your agent on your real services and FAQs, test it against 20+ real call scenarios, connect your calendar, and have you answering calls live — usually within 3 business days.</small></div>
            <a className="btn-primary" href={BOOK_LINK}>Get set up this week</a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section how" id="how">
        <div className="wrap">
          <div className="section-head">
            <div className="kick">How it works</div>
            <h2>Live in days, not weeks.</h2>
          </div>
          <div className="steps">
            <div className="step"><div className="num">Step 01</div><h3>We learn your business</h3><p>A short intake call — your services, hours, pricing, and the questions callers ask most.</p></div>
            <div className="step"><div className="num">Step 02</div><h3>We build &amp; test</h3><p>We set up your front desk on your real info, connect your calendar, and test it on real call scenarios.</p></div>
            <div className="step"><div className="num">Step 03</div><h3>We point your line</h3><p>Forward your existing number — or use a fresh one. Nothing changes for your callers except faster answers.</p></div>
            <div className="step"><div className="num">Step 04</div><h3>It runs itself</h3><p>Every call answered, booked, and summarized. We tune it as your business changes.</p></div>
          </div>
        </div>
      </section>

      {/* INCLUDED / NOT */}
      <section className="section">
        <div className="wrap twocol">
          <div>
            <h3><span className="live-dot" />What&apos;s included</h3>
            <ul className="clist">
              <li><span className="yes">✓</span> Natural, on-brand conversations — not a phone-tree menu</li>
              <li><span className="yes">✓</span> Appointment booking directly into your calendar</li>
              <li><span className="yes">✓</span> Answers to your real FAQs, in your words</li>
              <li><span className="yes">✓</span> Handoff to a human for anything urgent or out of scope</li>
              <li><span className="yes">✓</span> A written summary of every single call</li>
              <li><span className="yes">✓</span> Ongoing tuning and script updates</li>
            </ul>
          </div>
          <div>
            <h3>Good to know</h3>
            <ul className="clist">
              <li><span className="no">•</span> Month-to-month — no long contracts, cancel anytime</li>
              <li><span className="no">•</span> Minute allowances cover talk-time only; calls under 15 seconds aren&apos;t counted</li>
              <li><span className="no">•</span> Overage is billed at the flat per-minute rate shown on your plan</li>
              <li><span className="yes">✓</span> HIPAA-compliant setup for medical &amp; dental practices — signed BAA provided, PHI handled correctly</li>
              <li><span className="no">•</span> You own your number and your call data, always</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq">
        <div className="wrap">
          <div className="section-head">
            <div className="kick">Questions</div>
            <h2>The things owners ask first.</h2>
          </div>
          <div className="qa"><h3>Does it use my current phone number?</h3><p>Yes. We simply forward your existing line so callers dial the same number they always have. Prefer a separate number for tracking? We can set one up too.</p></div>
          <div className="qa"><h3>What happens if someone needs a real person?</h3><p>On Pro and above, urgent or complex calls are transferred straight to you or your team — with the caller&apos;s details already captured, so nobody repeats themselves.</p></div>
          <div className="qa"><h3>Will callers know it&apos;s not a person?</h3><p>It sounds natural and handles real back-and-forth, including interruptions and changes mid-call. We set the tone to match your business, and we&apos;re upfront where disclosure is required.</p></div>
          <div className="qa"><h3>How fast can we go live?</h3><p>Most single-location setups are answering calls within 3 business days of the intake call.</p></div>
          <div className="qa"><h3>What if my call volume jumps?</h3><p>Your plan&apos;s minute allowance covers normal months. If you have a busy stretch, extra minutes are billed at the flat rate on your plan — never a surprise. If you consistently run over, we&apos;ll move you to the right plan.</p></div>
          <div className="qa"><h3>Is this HIPAA-compliant for medical practices?</h3><p>Yes. The Pro plan includes a signed Business Associate Agreement (BAA) — required for any practice handling patient information over the phone. We handle call data in a HIPAA-eligible environment, and we&apos;ll walk you through the setup during onboarding. If you&apos;re a clinic, medspa, or dental office, just mention it when you book and we&apos;ll make sure everything is configured correctly from day one.</p></div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final" id="book">
        <div className="wrap">
          <h2>Stop sending your customers to <em>voicemail</em>.</h2>
          <p>Book a 15-minute call. We&apos;ll set up a live demo on your own business so you can hear it before you decide.</p>
          <a className="btn-primary" href={BOOK_LINK}>Book your setup call</a>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">
          <div className="brand" style={{ fontSize: '16px' }}><span className="live-dot" /><span>Switchline</span></div>
          <div>The front desk that never sleeps. · <a href={BOOK_LINK}>Book a call</a></div>
        </div>
      </footer>
    </div>
  );
}
