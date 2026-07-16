import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/organisms/Footer";
import { ScrollAnimations } from "@/components/atoms/ScrollAnimations";
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
    default: 'Zaman Ishtiyaq — AI Automation Engineer & Developer for Hire',
    template: '%s | Zaman Ishtiyaq',
  },
  description: 'AI automation engineer & backend developer for hire. Agentic AI systems, LLM pipelines, React & Python. Goldman Sachs · BrightEdge · Atlan. Remote.',
  keywords: ['Zaman Ishtiyaq', 'AI automation engineer', 'hire React developer', 'hire Python developer', 'full-stack developer', 'AI agent development', 'agentic AI systems', 'LLM pipelines', 'Next.js developer', 'iOS developer', 'freelance developer', 'web developer Kashmir', 'hire full-stack developer', 'AI workflow automation', 'Atlan', 'BrightEdge', 'Goldman Sachs'],
  authors: [{ name: 'Zaman Ishtiyaq', url: BASE }],
  creator: 'Zaman Ishtiyaq',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE,
    siteName: 'Zaman Ishtiyaq',
    title: 'Zaman Ishtiyaq — AI Automation Engineer & Developer for Hire',
    description: 'AI automation engineer & full-stack developer. Agentic AI systems, LLM pipelines, React & Python. 7+ years at Goldman Sachs, BrightEdge, Atlan. Remote worldwide.',
    images: [{ url: '/me.png', width: 800, height: 800, alt: 'Zaman Ishtiyaq' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@i_am_za_man',
    creator: '@i_am_za_man',
    title: 'Zaman Ishtiyaq — AI Automation Engineer & Developer for Hire',
    description: 'AI automation engineer & full-stack developer. Goldman Sachs → BrightEdge → Atlan. Agentic AI systems, LLM pipelines, React & Python. Remote worldwide.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Zaman Ishtiyaq — AI Automation Engineer' }],
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
      description: 'AI Automation Engineer and full-stack developer with 7+ years at Goldman Sachs, BrightEdge, and Atlan. Specializes in agentic AI systems, LLM pipelines, AI workflow automation, React, Python, and iOS development.',
      url: BASE,
      image: `${BASE}/me.png`,
      jobTitle: 'AI Automation Engineer & Full-Stack Developer',
      mainEntityOfPage: { '@id': `${BASE}/#webpage` },
      worksFor: { '@type': 'Organization', name: 'Atlan', url: 'https://atlan.com' },
      alumniOf: [
        { '@type': 'Organization', name: 'BrightEdge', url: 'https://brightedge.com' },
        { '@type': 'Organization', name: 'Goldman Sachs', url: 'https://goldmansachs.com' },
        { '@type': 'CollegeOrUniversity', name: 'Indian Institute of Technology (IIT), Bhubaneswar', url: 'https://iitbbs.ac.in' },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Srinagar',
        addressRegion: 'Jammu & Kashmir',
        addressCountry: 'IN',
      },
      nationality: { '@type': 'Country', name: 'India' },
      knowsLanguage: [
        { '@type': 'Language', name: 'English' },
        { '@type': 'Language', name: 'Urdu' },
      ],
      hasOccupation: {
        '@type': 'Occupation',
        name: 'AI Automation Engineer',
        occupationalCategory: '15-1252.00',
        skills: 'Agentic AI Systems, LLM Pipelines, AI Workflow Automation, React, Next.js, Python, TypeScript, Temporal, iOS Development',
        occupationLocation: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'India' },
        ],
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Freelance Development Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', '@id': `${BASE}/hire#service` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', '@id': `${BASE}/design#service` } },
        ],
      },
      knowsAbout: ['Next.js', 'TypeScript', 'React', 'AI/LLM Integration', 'Python', 'Swift', 'SwiftUI', 'Temporal', 'Kafka', 'GCP', 'OpenAI API', 'Agentic AI Systems', 'Multi-Agent Architecture', 'OpenAI Agents SDK', 'LLM Pipelines', 'AI Workflow Automation'],
      sameAs: [
        'https://github.com/lifeofzi',
        'https://www.linkedin.com/in/zaman-ishtiyaq',
        'https://x.com/i_am_za_man',
      ],
      email: 'zaman.ishtiyaq@gmail.com',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${BASE}/#webpage`,
      url: BASE,
      name: 'Zaman Ishtiyaq — AI Automation Engineer & Developer for Hire',
      description: 'Portfolio of Zaman Ishtiyaq, AI Automation Engineer and full-stack developer. Agentic AI systems, LLM pipelines, React & Python. Remote worldwide.',
      isPartOf: { '@id': `${BASE}/#website` },
      about: { '@id': `${BASE}/#person` },
      mainEntity: { '@id': `${BASE}/#person` },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: BASE,
      name: 'Zaman Ishtiyaq',
      description: 'Portfolio of Zaman Ishtiyaq, AI Automation Engineer and full-stack developer. Building agentic AI systems, LLM pipelines, and durable execution workflows.',
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
        <ScrollAnimations />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
