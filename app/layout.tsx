import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/organisms/Footer";
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

const BASE = 'https://www.zamanishtiyaq.work';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Zaman Ishtiyaq — AI-Native Backend Engineer',
    template: '%s | Zaman Ishtiyaq',
  },
  description: 'Zaman Ishtiyaq — AI-Native Backend Engineer available for hire. Building the backend infrastructure AI products run on: agent systems, LLM pipelines, durable workflows. 7+ years at Goldman Sachs, BrightEdge, Atlan. IIT Bhubaneswar.',
  keywords: ['Zaman Ishtiyaq', 'full-stack engineer', 'AI engineer', 'Next.js developer', 'iOS developer', 'software engineer', 'freelance web developer', 'web developer Kashmir', 'web developer Srinagar', 'hire Next.js developer India', 'AI integration developer', 'agentic AI systems', 'multi-agent architecture', 'Atlan', 'BrightEdge', 'Goldman Sachs'],
  authors: [{ name: 'Zaman Ishtiyaq', url: BASE }],
  creator: 'Zaman Ishtiyaq',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE,
    siteName: 'Zaman Ishtiyaq',
    title: 'Zaman Ishtiyaq — AI-Native Backend Engineer',
    description: 'AI-Native Backend Engineer with 7+ years at Goldman Sachs (market risk systems), BrightEdge (200K+ daily API requests, 250+ Fortune 500 clients), and Atlan. Builds agent systems, LLM pipelines, and durable execution workflows.',
    images: [{ url: '/me.png', width: 800, height: 800, alt: 'Zaman Ishtiyaq' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@i_am_za_man',
    creator: '@i_am_za_man',
    title: 'Zaman Ishtiyaq — AI-Native Backend Engineer',
    description: 'AI-Native Backend Engineer. Goldman Sachs → BrightEdge → Atlan. Builds agent systems, LLM pipelines, and the backend infrastructure AI products run on.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Zaman Ishtiyaq — AI-Native Backend Engineer' }],
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
      description: 'AI-Native Backend Engineer with 7+ years building production backend systems and AI infrastructure at Goldman Sachs, BrightEdge, and Atlan. IIT Bhubaneswar Computer Science graduate.',
      url: BASE,
      image: `${BASE}/me.png`,
      jobTitle: 'AI-Native Backend Engineer',
      mainEntityOfPage: { '@id': `${BASE}/#webpage` },
      worksFor: { '@type': 'Organization', name: 'Atlan' },
      alumniOf: [
        { '@type': 'Organization', name: 'BrightEdge' },
        { '@type': 'Organization', name: 'Goldman Sachs' },
        { '@type': 'CollegeOrUniversity', name: 'Indian Institute of Technology (IIT), Bhubaneswar' },
      ],
      knowsAbout: ['Next.js', 'TypeScript', 'React', 'AI/LLM Integration', 'Python', 'Swift', 'SwiftUI', 'Temporal', 'Kafka', 'GCP', 'OpenAI API', 'Agentic AI Systems', 'Multi-Agent Architecture', 'OpenAI Agents SDK', 'LLM Pipelines'],
      sameAs: [
        'https://github.com/lifeofzi',
        'https://www.linkedin.com/in/zaman-ishtiyaq',
        'https://x.com/i_am_za_man',
      ],
      email: 'zaman.ishtiyaq@gmail.com',
      addressLocality: 'Srinagar',
      addressRegion: 'Jammu & Kashmir',
      addressCountry: 'IN',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${BASE}/#webpage`,
      url: BASE,
      name: 'Zaman Ishtiyaq — AI-Native Backend Engineer',
      description: 'Portfolio of Zaman Ishtiyaq, AI-Native Backend Engineer. Building agent systems, LLM pipelines, and durable execution workflows. Currently at Atlan.',
      isPartOf: { '@id': `${BASE}/#website` },
      about: { '@id': `${BASE}/#person` },
      mainEntity: { '@id': `${BASE}/#person` },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: BASE,
      name: 'Zaman Ishtiyaq',
      description: 'Portfolio of Zaman Ishtiyaq, AI-Native Backend Engineer. Building agent systems, LLM pipelines, and durable execution workflows. Currently at Atlan.',
      publisher: { '@id': `${BASE}/#person` },
    },
    {
      '@type': 'Service',
      '@id': `${BASE}/#service`,
      name: 'Freelance Web & AI Development',
      provider: { '@id': `${BASE}/#person` },
      serviceType: ['Web Development', 'Full-Stack Development', 'AI Integration', 'iOS App Development'],
      description: 'AI-native backend engineering and full-stack development for startups and businesses. Services include agent systems, LLM pipelines, durable execution workflows (Temporal), full-stack web apps (Next.js, React, TypeScript), and iOS apps (Swift/SwiftUI). Remote worldwide, fixed-price or hourly.',
      areaServed: 'Worldwide',
      url: `${BASE}/hire`,
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${BASE}/hire`,
        availableLanguage: 'English',
      },
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
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
