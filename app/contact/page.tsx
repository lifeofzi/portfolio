import type { Metadata } from 'next';
import styles from './page.module.css';
import { Navigation } from '@/components/molecules/Navigation';
import { BookCallButton } from '@/components/atoms/BookCallButton';
import { WhatsAppButton } from '@/components/atoms/WhatsAppButton';
import { contactInfo } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Get in Touch — Zaman Ishtiyaq',
  description: 'Book a free call, send an email, or drop a WhatsApp. I reply within 24 hours.',
  alternates: { canonical: 'https://www.zamanishtiyaq.work/contact' },
};

const BASE = 'https://www.zamanishtiyaq.work';

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${BASE}/contact`,
  url: `${BASE}/contact`,
  name: 'Get in Touch — Zaman Ishtiyaq',
  description: 'Book a free call, send an email, or message on WhatsApp. Zaman Ishtiyaq replies within 24 hours.',
  isPartOf: { '@id': `${BASE}/#website` },
  about: { '@id': `${BASE}/#person` },
  mainEntity: {
    '@type': 'Person',
    '@id': `${BASE}/#person`,
    name: 'Zaman Ishtiyaq',
    email: 'zaman.ishtiyaq@gmail.com',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'zaman.ishtiyaq@gmail.com',
        availableLanguage: 'English',
        contactOption: 'TollFree',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Navigation />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 data-anim="split" className={styles.heading} style={{ visibility: 'hidden' }}>Get in Touch</h1>
          <p className={styles.subtext}>
            Pick whichever way works best for you — I reply within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className={styles.section}>
        <div data-anim="stagger" className={styles.grid}>

          {/* Book a call */}
          <div className={`neo-card ${styles.card}`} style={{ backgroundColor: '#bfdbfe' }}>
            <div className={styles.cardIcon}>
              <svg width="22" height="22" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardLabel}>Free · 30 min</p>
              <h2 className={styles.cardTitle}>Book a call</h2>
              <p className={styles.cardDesc}>
                Let&apos;s talk through your project. No sales pitch — just a focused conversation about what you want to build.
              </p>
            </div>
            <BookCallButton label="Pick a time" className={styles.ctaBtn} />
          </div>

          {/* Email */}
          <div className={`neo-card ${styles.card}`} style={{ backgroundColor: '#bbf7d0' }}>
            <div className={styles.cardIcon}>
              <svg width="22" height="22" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardLabel}>Email</p>
              <h2 className={styles.cardTitle}>Send an email</h2>
              <p className={styles.cardDesc}>
                Prefer writing? Send me a brief about your project and I&apos;ll come back with thoughts and a quote.
              </p>
            </div>
            <a
              href={`mailto:${contactInfo.email}?subject=Project Enquiry`}
              className={`btn-neo ${styles.ctaBtn}`}
            >
              {contactInfo.email}
            </a>
          </div>

          {/* WhatsApp */}
          <div className={`neo-card ${styles.card}`} style={{ backgroundColor: '#fce7f3' }}>
            <div className={styles.cardIcon}>
              <svg width="22" height="22" fill="#25D366" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardLabel}>WhatsApp</p>
              <h2 className={styles.cardTitle}>Message me</h2>
              <p className={styles.cardDesc}>
                Quickest way to reach me. Drop a message with what you&apos;re working on and I&apos;ll reply fast.
              </p>
            </div>
            <WhatsAppButton message="Hi, I'd like to discuss a project with you." label="WhatsApp me" className={styles.ctaBtn} />
          </div>

        </div>
      </section>
    </main>
  );
}
