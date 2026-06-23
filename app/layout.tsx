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
      description: 'Full-Stack and AI Engineer with 7+ years of experience building AI-native products, data pipelines, and iOS apps. Currently AI Native Engineer at Atlan. IIT Bhubaneswar Computer Science graduate.',
      url: BASE,
      image: `${BASE}/me.png`,
      jobTitle: 'AI Native Engineer',
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
      description: 'Portfolio of Zaman Ishtiyaq, Full-Stack and AI Engineer. Building AI-native products, data systems, and iOS apps. Currently at Atlan.',
      publisher: { '@id': `${BASE}/#person` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is Zaman Ishtiyaq?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zaman Ishtiyaq is a Full-Stack and AI Engineer with 7+ years of experience, currently working as an AI Native Engineer at Atlan. He previously worked at Goldman Sachs (5 years) and BrightEdge (2+ years). He is an IIT Bhubaneswar Computer Science graduate and an independent app developer with two iOS apps live on the App Store: Muhasaba and Spree.',
          },
        },
        {
          '@type': 'Question',
          name: 'What has Zaman Ishtiyaq built?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zaman Ishtiyaq has built Offer X-Ray (AI offer letter analysis tool), Spree (iOS wishlist app with AI virtual try-on, live on App Store), Muhasaba (iOS Islamic reflection app, live on App Store), Architex (architecture practice management platform), and ReelRocket (AI UGC content creation platform for TikTok automation).',
          },
        },
        {
          '@type': 'Question',
          name: 'What does Zaman Ishtiyaq specialize in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zaman Ishtiyaq specializes in AI/LLM integration, distributed data pipelines (Kafka, Temporal, GCP), full-stack web development (Next.js, TypeScript, React), and iOS app development (Swift, SwiftUI). He focuses on building production-grade AI-native products that solve real-world problems.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Zaman Ishtiyaq available for freelance web development projects?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Zaman Ishtiyaq is available for freelance web development, full-stack application development, and AI integration projects. He works with startups and businesses worldwide on a remote basis. He has shipped production projects including Offer X-Ray, Spree, Muhasaba, Architex, ReelRocket, and Ali Saffudin. Contact: zaman.ishtiyaq@gmail.com or visit https://zamanishtiyaq.work/hire',
          },
        },
        {
          '@type': 'Question',
          name: 'What kind of websites and apps can Zaman Ishtiyaq build?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zaman Ishtiyaq builds custom websites, SaaS web applications, AI-powered tools, and iOS apps. His stack is Next.js, TypeScript, React, Python, and Swift. He handles the full build: design, frontend, backend, database, deployment, and AI feature integration. Past work includes an architecture practice management platform (Architex), an AI offer-letter analyzer (Offer X-Ray), and a bespoke artist website (Ali Saffudin).',
          },
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${BASE}/#service`,
      name: 'Freelance Web & AI Development',
      provider: { '@id': `${BASE}/#person` },
      serviceType: ['Web Development', 'Full-Stack Development', 'AI Integration', 'iOS App Development'],
      description: 'Custom website and web application development for startups and businesses. Services include full-stack web apps (Next.js, React, TypeScript), AI/LLM feature integration, iOS apps (Swift/SwiftUI), and API development. Remote-friendly, fixed-price or hourly.',
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
      </body>
    </html>
  );
}
