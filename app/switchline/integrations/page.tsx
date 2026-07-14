import type { Metadata } from 'next';
import '../switchline.css';
import { SwitchlineNav } from '../SwitchlineNav';
import { IntegrationLogo } from '../IntegrationLogo';

const BASE = 'https://www.zamanishtiyaq.work';

export const metadata: Metadata = {
  title: 'Switchline Integrations — CRM, EMR, Automation & Telephony Connections',
  description: 'Switchline connects to HubSpot, Salesforce, Go High Level, Dentrix, OpenDental, Jane App, Epic, ChiroTouch, Twilio, n8n, Make, WhatsApp, and more. Works with the tools your service business already runs on.',
  alternates: { canonical: `${BASE}/switchline/integrations` },
  openGraph: {
    type: 'website',
    title: 'Switchline Integrations',
    description: 'Connect your AI receptionist to HubSpot, GHL, Dentrix, Twilio, n8n, WhatsApp, and 20+ more tools.',
    url: `${BASE}/switchline/integrations`,
  },
};

const categories = [
  {
    label: 'CRM & Sales',
    desc: 'Call outcomes, booked appointments, and lead data flow directly into your CRM — no manual entry.',
    tools: [
      {
        name: 'HubSpot',
        badge: null,
        detail: 'Native two-way sync. Call summaries and contact data written to HubSpot records automatically. Trigger Switchline calls from HubSpot workflows and fire follow-up sequences the moment a call ends.',
      },
      {
        name: 'Salesforce',
        badge: null,
        detail: 'OAuth 2.0 connection with full CRM field mapping. Persistent contact memory means Switchline knows a caller\'s history before they say a word. Custom field mapping per your Salesforce object structure.',
      },
      {
        name: 'Go High Level',
        badge: 'Popular',
        detail: 'Books directly into GHL calendars. Writes call tags, notes, and outcomes back into your GHL pipeline stages. Trigger outbound Switchline calls from any GHL workflow — forms, pipeline moves, tags, and more. No Zaps needed.',
      },
    ],
  },
  {
    label: 'Healthcare EMR & Practice Management',
    desc: 'Switchline Pro is HIPAA-ready with a signed BAA. These integrations connect your AI receptionist directly to your practice software.',
    tools: [
      {
        name: 'Dentrix',
        badge: null,
        detail: 'Books new patient appointments and reschedules directly inside Dentrix. Pulls appointment availability in real time so callers are never given a slot that\'s already taken.',
      },
      {
        name: 'OpenDental',
        badge: null,
        detail: 'Full scheduling integration for dental practices on OpenDental. Confirms appointments, handles rescheduling requests, and updates the schedule without staff involvement.',
      },
      {
        name: 'Jane App',
        badge: null,
        detail: 'For clinics, physiotherapy, and wellness practices. Books and reschedules appointments directly in Jane, sends confirmation details to callers, and logs call summaries against patient records.',
      },
      {
        name: 'Epic',
        badge: null,
        detail: 'For larger medical groups and hospital-adjacent practices. Switchline connects via Epic\'s scheduling APIs to handle inbound patient calls — new appointments, rescheduling, and after-hours inquiries.',
      },
      {
        name: 'ChiroTouch',
        badge: null,
        detail: 'Chiropractic-specific scheduling. Switchline handles new patient intake calls, appointment requests, and post-visit follow-up — all flowing back into ChiroTouch without manual hand-off.',
      },
    ],
  },
  {
    label: 'Automation & Workflow',
    desc: 'Connect Switchline to virtually any tool in your stack via these automation platforms. Trigger calls, push results, and build multi-step workflows.',
    tools: [
      {
        name: 'Make',
        badge: null,
        detail: 'Trigger Switchline calls from any Make scenario. Push call outcomes — transcripts, booked appointments, lead scores — to any app Make supports. Handles complex multi-step logic without code.',
      },
      {
        name: 'n8n',
        badge: null,
        detail: 'Self-hosted or cloud n8n workflows. Switchline fires webhooks that n8n can pick up and route into any downstream system. Full bidirectional control — trigger calls from n8n and receive results back.',
      },
      {
        name: 'viaSocket',
        badge: null,
        detail: 'Lightweight multi-app connector. Trigger Switchline from form submissions, CRM events, or any webhook source, then route call results to Sheets, Slack, email, or anywhere else viaSocket reaches.',
      },
    ],
  },
  {
    label: 'Messaging & Follow-Up',
    desc: 'Switchline doesn\'t just answer calls — it follows up across the channels callers actually respond to.',
    tools: [
      {
        name: 'WhatsApp',
        badge: null,
        detail: 'Send post-call follow-up messages via WhatsApp. Booking confirmations, appointment reminders, and missed call recovery — delivered where your customers are most likely to respond.',
      },
      {
        name: 'SMS',
        badge: null,
        detail: 'Auto-text every caller after the call ends. Missed the booking? An SMS fires within seconds. Appointment tomorrow? A reminder goes out the night before. All without staff involvement.',
      },
      {
        name: 'Intercom',
        badge: null,
        detail: 'Route call outcomes to Intercom conversations. Useful for businesses that use Intercom as their customer support hub — Switchline creates or updates conversations based on call data.',
      },
    ],
  },
  {
    label: 'Telephony & Phone Infrastructure',
    desc: 'Bring your own carrier or use ours. Switchline works with the phone setup you already have.',
    tools: [
      {
        name: 'Twilio',
        badge: null,
        detail: 'Connect via your existing Twilio account. Keep your current phone numbers, call routing, and any Twilio-based tooling — Switchline layers on top without replacing your setup.',
      },
      {
        name: 'Vonage',
        badge: null,
        detail: 'Vonage-powered telephony support for businesses already on the Vonage platform. Switchline integrates at the SIP level so your number and carrier stay unchanged.',
      },
      {
        name: 'Telnyx',
        badge: null,
        detail: 'High-quality voice infrastructure via Telnyx. Preferred for businesses that need ultra-low latency, international numbers, or carrier-grade reliability at a lower cost than Twilio.',
      },
      {
        name: 'SIP / Custom',
        badge: null,
        detail: 'Already have a SIP-based PBX or VOIP system? Switchline connects via SIP trunk so your existing infrastructure stays in place — no rip-and-replace required.',
      },
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <div className="sw">
      <SwitchlineNav />

      {/* HERO */}
      <section className="hero" style={{ paddingBottom: '60px' }}>
        <div className="wrap">
          <div className="hero-text" style={{ maxWidth: '640px' }}>
            <span className="eyebrow"><span className="live-dot" />Switchline · Integrations</span>
            <h1>Works with the tools you already run on.</h1>
            <p className="sub">Switchline connects to your CRM, practice management software, automation platform, and phone carrier. No new logins, no manual hand-offs — call outcomes flow directly into the systems your team already uses.</p>
            <div className="hero-actions">
              <a className="btn-primary" href="/switchline#contact">Book a setup call</a>
              <a className="btn-ghost" href="/switchline">Back to Switchline</a>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATION CATEGORIES */}
      {categories.map((cat) => (
        <section key={cat.label} className="section" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--line)' }}>
          <div className="wrap">
            <div className="section-head" style={{ marginBottom: '36px' }}>
              <div className="kick">{cat.label}</div>
              <p style={{ marginTop: '8px', color: 'var(--txt-mut)', fontSize: '16px' }}>{cat.desc}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {cat.tools.map((tool) => (
                <div key={tool.name} style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', padding: '22px 24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ flex: 'none' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                      <IntegrationLogo name={tool.name} size={22} />
                      <span style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '17px', color: 'var(--ink)', letterSpacing: '-0.01em' }}>{tool.name}</span>
                      {tool.badge && <span style={{ fontSize: '10.5px', background: 'var(--signal)', color: 'var(--ink)', padding: '2px 8px', borderRadius: '999px', fontWeight: 700 }}>{tool.badge}</span>}
                    </div>
                  </div>
                  <p style={{ fontSize: '15px', color: 'var(--txt-mut)', lineHeight: 1.6, margin: 0 }}>{tool.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="final" id="contact">
        <div className="wrap">
          <h2>Need a specific integration?</h2>
          <p>If the tool you use isn&apos;t listed here, get in touch — we&apos;ll tell you if it&apos;s already supported or how to connect it via API or webhook.</p>
          <a className="btn-primary" href="/switchline#contact" style={{ marginTop: '32px', display: 'inline-block' }}>
            Talk to us →
          </a>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">
          <div className="brand" style={{ fontSize: '16px' }}><span className="live-dot" /><span>Switchline</span></div>
          <div>The front desk that never sleeps. · <a href="mailto:zaman@zamanishtiyaq.work">zaman@zamanishtiyaq.work</a> · <a href="/switchline">switchline</a></div>
        </div>
      </footer>
    </div>
  );
}
