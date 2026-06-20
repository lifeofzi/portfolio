import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const BASE = 'https://zamanishtiyaq.work';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Zaman Ishtiyaq — Full-Stack & AI Engineer',
    template: '%s | Zaman Ishtiyaq',
  },
  description: 'Portfolio of Zaman Ishtiyaq, Senior Software Engineer and AI Native Engineer. Building scalable AI products, data systems, and iOS apps. Currently at Atlan.',
  keywords: ['Zaman Ishtiyaq', 'full-stack engineer', 'AI engineer', 'Next.js developer', 'iOS developer', 'software engineer', 'Atlan', 'BrightEdge', 'Goldman Sachs'],
  authors: [{ name: 'Zaman Ishtiyaq', url: BASE }],
  creator: 'Zaman Ishtiyaq',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE,
    siteName: 'Zaman Ishtiyaq',
    title: 'Zaman Ishtiyaq — Full-Stack & AI Engineer',
    description: 'Portfolio of Zaman Ishtiyaq, Senior Software Engineer and AI Native Engineer. Building scalable AI products, data systems, and iOS apps.',
    images: [{ url: '/me.png', width: 800, height: 800, alt: 'Zaman Ishtiyaq' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@i_am_za_man',
    creator: '@i_am_za_man',
    title: 'Zaman Ishtiyaq — Full-Stack & AI Engineer',
    description: 'Portfolio of Zaman Ishtiyaq, Senior Software Engineer and AI Native Engineer.',
    images: ['/me.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-small.png', sizes: '64x64', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon-small.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: BASE },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${BASE}/#person`,
      name: 'Zaman Ishtiyaq',
      url: BASE,
      image: `${BASE}/me.png`,
      jobTitle: 'Senior Software Engineer',
      worksFor: { '@type': 'Organization', name: 'Atlan' },
      alumniOf: [
        { '@type': 'Organization', name: 'BrightEdge' },
        { '@type': 'Organization', name: 'Goldman Sachs' },
        { '@type': 'CollegeOrUniversity', name: 'Indian Institute of Technology (IIT), Bhubaneswar' },
      ],
      knowsAbout: ['Next.js', 'TypeScript', 'React', 'AI/LLM Integration', 'Python', 'Swift', 'SwiftUI', 'Temporal', 'Kafka', 'GCP'],
      sameAs: [
        'https://github.com/lifeofzi',
        'https://www.linkedin.com/in/zaman-ishtiyaq',
        'https://x.com/i_am_za_man',
      ],
      email: 'zaman.ishtiyaq@gmail.com',
      addressLocality: 'Srinagar',
      addressCountry: 'IN',
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: BASE,
      name: 'Zaman Ishtiyaq',
      description: 'Portfolio of Zaman Ishtiyaq, Senior Software Engineer and AI Native Engineer.',
      publisher: { '@id': `${BASE}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-amber-50 text-gray-900`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
