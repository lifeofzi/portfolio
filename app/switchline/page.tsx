import type { Metadata } from 'next';
import './switchline.css';
import { LeadForm } from './LeadForm';
import { SwitchlineNav } from './SwitchlineNav';

const BASE = 'https://www.zamanishtiyaq.work';

export const metadata: Metadata = {
  title: 'Switchline — AI Receptionist for Service Businesses',
  description: 'Switchline is an AI phone receptionist that answers every call 24/7, books appointments into your calendar, qualifies leads, and texts you a summary of every conversation. Plans from $297/mo.',
  keywords: ['AI receptionist', 'AI phone answering service', 'virtual receptionist', 'AI front desk', 'HIPAA compliant answering service', 'AI appointment booking', '24/7 phone answering', 'small business phone answering', 'automated receptionist'],
  alternates: { canonical: `${BASE}/switchline` },
  openGraph: {
    type: 'website',
    title: 'Switchline — AI Receptionist for Service Businesses',
    description: 'Answers every call 24/7. Books appointments. Qualifies leads. Texts you a summary. Plans from $297/mo. No voicemail. No missed leads.',
    url: `${BASE}/switchline`,
    images: [{ url: `${BASE}/switchline-og.png`, width: 1200, height: 630, alt: 'Switchline — AI Front Desk' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Switchline — AI Receptionist for Service Businesses',
    description: 'Answers every call 24/7. Books appointments. Qualifies leads. Plans from $297/mo.',
    images: [`${BASE}/switchline-og.png`],
  },
};

const switchlineSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${BASE}/switchline#service`,
      name: 'Switchline',
      description: 'AI phone receptionist that answers every business call 24/7, books appointments directly into your calendar, qualifies leads, transfers urgent calls to a human, and sends a written summary of every conversation.',
      provider: { '@id': `${BASE}/#person` },
      serviceType: 'AI Phone Receptionist',
      url: `${BASE}/switchline`,
      offers: [
        {
          '@type': 'Offer',
          name: 'Starter',
          description: 'For solo operators and quieter front desks. Up to 500 talk-minutes per month.',
          price: '297',
          priceCurrency: 'USD',
          priceSpecification: { '@type': 'UnitPriceSpecification', price: '297', priceCurrency: 'USD', unitCode: 'MON' },
        },
        {
          '@type': 'Offer',
          name: 'Pro',
          description: 'For busy service businesses with steady call flow. Up to 1,200 talk-minutes per month. HIPAA-ready.',
          price: '497',
          priceCurrency: 'USD',
          priceSpecification: { '@type': 'UnitPriceSpecification', price: '497', priceCurrency: 'USD', unitCode: 'MON' },
        },
        {
          '@type': 'Offer',
          name: 'Multi-location',
          description: 'For multiple sites or high call volume. Custom pricing. HIPAA-ready.',
          price: '0',
          priceCurrency: 'USD',
          eligibleCustomerType: 'Enterprise',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Switchline use my current phone number?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. We simply forward your existing line so callers dial the same number they always have. Prefer a separate number for tracking? We can set one up too.' },
        },
        {
          '@type': 'Question',
          name: 'What happens if someone needs a real person?',
          acceptedAnswer: { '@type': 'Answer', text: 'On Pro and above, urgent or complex calls are transferred straight to you or your team — with the caller\'s details already captured, so nobody repeats themselves.' },
        },
        {
          '@type': 'Question',
          name: 'Will callers know Switchline is not a person?',
          acceptedAnswer: { '@type': 'Answer', text: 'It sounds natural and handles real back-and-forth, including interruptions and changes mid-call. We set the tone to match your business, and we\'re upfront where disclosure is required.' },
        },
        {
          '@type': 'Question',
          name: 'How fast can a business go live with Switchline?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most single-location setups are answering calls within 3 business days of the intake call.' },
        },
        {
          '@type': 'Question',
          name: 'What if call volume increases?',
          acceptedAnswer: { '@type': 'Answer', text: 'Your plan\'s minute allowance covers normal months. If you have a busy stretch, extra minutes are billed at the flat rate on your plan — never a surprise. If you consistently run over, we\'ll move you to the right plan.' },
        },
        {
          '@type': 'Question',
          name: 'Is Switchline HIPAA-compliant for medical practices?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Pro plan includes a signed Business Associate Agreement (BAA) — required for any practice handling patient information over the phone. We handle call data in a HIPAA-eligible environment. If you\'re a clinic, medspa, or dental office, just mention it when you book and we\'ll make sure everything is configured correctly from day one.' },
        },
      ],
    },
  ],
};

export default function SwitchlinePage() {
  return (
    <div className="sw">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(switchlineSchema) }} />

      <SwitchlineNav />

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-text">
            <span className="eyebrow"><span className="live-dot" />Switchline · AI Receptionist</span>
            <h1>The calls you miss are the jobs you <em>lose</em>.</h1>
            <p className="sub">Switchline is an AI receptionist that answers every call to your business — day, night, weekends, and when the line&apos;s already busy. It books appointments straight into your calendar, answers the questions callers actually ask, and texts you a summary of every conversation. No voicemail. No missed leads. Plans from $297/mo.</p>
            <div className="hero-actions">
              <a className="btn-primary" href="#pricing">See plans &amp; pricing</a>
              <a className="btn-ghost" href="#how">How it works</a>
            </div>
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
          <div className="stat"><div className="n">1&nbsp;in&nbsp;<span>3</span></div><div className="l">inbound calls to local businesses go unanswered — and most callers never call back. <span style={{ fontSize: '11px', opacity: 0.6 }}>(BIA Advisory Services)</span></div></div>
          <div className="stat"><div className="n"><span>24/7</span></div><div className="l">Answered on the first ring — after hours, holidays, and during your busiest stretch.</div></div>
          <div className="stat"><div className="n"><span>~1/6</span></div><div className="l">the cost of a full-time front-desk hire at $45,000+/yr, with no sick days and no hold music.</div></div>
        </div>
      </section>

      {/* DEMO */}
      <section className="demo">
        <div className="wrap">
          <div className="demo-inner">
            <span className="demo-label"><span className="live-dot" />Live demo — try it now</span>
            <h2>We&apos;ve set up a sample demo you can try right now. Call this number and talk to Taylor, a digital scheduling assistant for Trudy Auto Services:</h2>
            <a className="demo-phone" href="tel:+18312499939" aria-label="Call Switchline demo">
              <svg className="demo-phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="demo-phone-num">+1 (831) 249-9939</span>
            </a>
            <p className="demo-sub">US number · standard call rates apply · demo runs 24/7</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="pricing">
        <div className="wrap">
          <div className="section-head">
            <div className="kick">Plans &amp; pricing</div>
            <h2>How much does an AI receptionist cost?</h2>
            <p>Simple monthly pricing with no per-minute surprises. Each plan includes a generous minute allowance — if you go over, you only pay a flat rate for the extra. No contracts, month-to-month, cancel anytime.</p>
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
            </div>

            {/* Multi-location */}
            <div className="plan">
              <div className="pname">Multi-location</div>
              <p className="blurb">For multiple sites or high call volume.</p>
              <div className="price"><span className="amt custom-price">Custom</span></div>
              <div className="cap">Volume-based minute pools<br />bespoke per your locations</div>
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
            </div>
          </div>

          <div className="setup-note">
            <div className="setup-note-header">
              <div>
                <div className="kick" style={{ marginBottom: '6px' }}>One-time</div>
                <div className="setup-price">Setup &amp; Onboarding — <span>$750</span></div>
                <div className="setup-sub">Everything we do to get you live, included.</div>
              </div>
              <a className="btn-primary" href="#contact" style={{ whiteSpace: 'nowrap' }}>Get set up this week</a>
            </div>
            <ul className="feat setup-items">
              <li><span className="ck">+</span> Short intake call — we learn your services, hours, pricing, and the questions callers actually ask</li>
              <li><span className="ck">+</span> Custom agent built on your real business info and FAQs, not a generic template</li>
              <li><span className="ck">+</span> Tested against 20+ real call scenarios before going live</li>
              <li><span className="ck">+</span> Calendar connected — appointments booked directly, no manual hand-off</li>
              <li><span className="ck">+</span> Live and answering calls within 3 business days of the intake call</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section how" id="how">
        <div className="wrap">
          <div className="section-head">
            <div className="kick">How it works</div>
            <h2>How does Switchline set up? Live in days, not weeks.</h2>
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
            <h2 className="section-subhead">What&apos;s included</h2>
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
            <h2 className="section-subhead">Good to know</h2>
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
            <h2>Common questions about AI receptionists.</h2>
          </div>
          <div className="qa"><h3>Does it use my current phone number?</h3><p>Yes. We simply forward your existing line so callers dial the same number they always have. Prefer a separate number for tracking? We can set one up too.</p></div>
          <div className="qa"><h3>What happens if someone needs a real person?</h3><p>On Pro and above, urgent or complex calls are transferred straight to you or your team — with the caller&apos;s details already captured, so nobody repeats themselves.</p></div>
          <div className="qa"><h3>Will callers know it&apos;s not a person?</h3><p>It sounds natural and handles real back-and-forth, including interruptions and changes mid-call. We set the tone to match your business, and we&apos;re upfront where disclosure is required.</p></div>
          <div className="qa"><h3>How fast can we go live?</h3><p>Most single-location setups are answering calls within 3 business days of the intake call.</p></div>
          <div className="qa"><h3>What if my call volume jumps?</h3><p>Your plan&apos;s minute allowance covers normal months. If you have a busy stretch, extra minutes are billed at the flat rate on your plan — never a surprise. If you consistently run over, we&apos;ll move you to the right plan.</p></div>
          <div className="qa"><h3>Is this HIPAA-compliant for medical practices?</h3><p>Yes. The Pro plan includes a signed Business Associate Agreement (BAA) — required for any practice handling patient information over the phone. We handle call data in a HIPAA-eligible environment. If you&apos;re a clinic, medspa, or dental office, just mention it when you book and we&apos;ll make sure everything is configured correctly from day one.</p></div>
        </div>
      </section>

      {/* CONTACT / LEAD FORM */}
      <section className="final" id="contact">
        <div className="wrap">
          <h2>Stop sending your customers to <em>voicemail</em>.</h2>
          <p>Drop your email and phone number — we&apos;ll reach out to set up a live demo on your own business so you can hear it before you decide.</p>
          <LeadForm />
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">
          <div className="brand" style={{ fontSize: '16px' }}><span className="live-dot" /><span>Switchline</span></div>
          <div>The front desk that never sleeps. · <a href="mailto:zaman@zamanishtiyaq.work">zaman@zamanishtiyaq.work</a> · <a href="https://www.zamanishtiyaq.work">zamanishtiyaq.work</a></div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/918851985235?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Switchline%20AI%20Receptionist."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="sw-wa-fab"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
        <span className="sw-wa-label">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
