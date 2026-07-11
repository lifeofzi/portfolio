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
      description: 'AI-Native Backend Engineer with 7+ years building production backend systems and AI infrastructure at Goldman Sachs, BrightEdge, and Atlan. IIT Bhubaneswar Computer Science graduate.',
      url: BASE,
      image: `${BASE}/me.png`,
      jobTitle: 'AI Native Engineer',
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
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: BASE,
      name: 'Zaman Ishtiyaq',
      description: 'Portfolio of Zaman Ishtiyaq, AI-Native Backend Engineer. Building agent systems, LLM pipelines, and durable execution workflows. Currently at Atlan.',
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
            text: 'Zaman Ishtiyaq is an AI-Native Backend Engineer with 7+ years of experience, currently working as an AI Native Engineer at Atlan (Gartner Magic Quadrant Leader for Data & Analytics Governance). He previously worked at Goldman Sachs (5 years, market risk systems) and BrightEdge (lead backend engineer on AI Catalyst, 200K+ daily API requests, 250+ Fortune 500 clients). He is an IIT Bhubaneswar Computer Science graduate and an independent app developer with two iOS apps live on the App Store: Muhasaba and Spree.',
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
            text: 'Yes. Zaman Ishtiyaq is available for freelance web development, full-stack application development, and AI integration projects. He works with startups and businesses worldwide on a remote basis. He has shipped production projects including Offer X-Ray, Spree, Muhasaba, Architex, ReelRocket, and Ali Saffudin. Contact: zaman.ishtiyaq@gmail.com or visit https://www.zamanishtiyaq.work/hire',
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
        {
          '@type': 'Question',
          name: 'Can I hire a Next.js developer from India for my project?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Zaman Ishtiyaq is a Next.js developer based in Srinagar, India, available for freelance and contract projects worldwide. He has built production Next.js applications including Offer X-Ray, Architex, ReelRocket, and this portfolio. He works remotely with clients across time zones. To hire him, email zaman.ishtiyaq@gmail.com or visit https://www.zamanishtiyaq.work/hire.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Zaman Ishtiyaq available to build iOS apps for the App Store?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Zaman Ishtiyaq builds native iOS apps using Swift and SwiftUI. He has two live apps on the App Store: Muhasaba (Islamic daily reflection app) and Spree (AI wishlist and virtual try-on app). He handles the full iOS build from design to App Store submission.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I integrate AI into my existing web application?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zaman Ishtiyaq specializes in AI/LLM integration — adding OpenAI API, Whisper, or custom LLM pipelines to existing web apps or building AI-native products from scratch. Examples: Offer X-Ray (AI offer letter analysis with GPT-4), Spree (AI virtual try-on), and ReelRocket (AI UGC content generation). He can add AI chat, document analysis, content generation, or voice transcription features to your product.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a good web developer in Kashmir or Srinagar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zaman Ishtiyaq is a Srinagar-based (Kashmir, India) AI-Native Backend Engineer with 7+ years of professional experience at Goldman Sachs, BrightEdge, and Atlan. He is available for freelance projects worldwide — agent systems, LLM pipelines, full-stack web apps, and iOS apps. IIT Bhubaneswar graduate. Contact: zaman.ishtiyaq@gmail.com.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are agentic AI systems and can Zaman Ishtiyaq build them?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Agentic AI systems are AI applications where LLM-powered agents take autonomous actions — calling tools, making decisions, and coordinating with other agents to complete complex tasks. Zaman Ishtiyaq has designed and built multi-agent AI architectures using the OpenAI Agents SDK, Temporal for durable workflows, and LLM orchestration pipelines. He built a multi-agent restaurant management system and uses agentic patterns at Atlan for enterprise data pipelines.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Zaman Ishtiyaq build UGC content tools or TikTok automation platforms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Zaman built ReelRocket — an AI UGC content creation platform that generates hook scripts, demo video briefs, TikTok trend research, and product review content. It uses OpenAI for content generation and is live at ugccreatorsfrontend.vercel.app. He can build similar UGC creation, social media automation, or content generation tools.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Offer X-Ray and how does it work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Offer X-Ray (offerxray.com) is an AI-powered offer letter analysis tool built by Zaman Ishtiyaq. Users upload a job offer letter and receive an instant risk assessment, compensation breakdown, and negotiation guidance in under 5 minutes. It uses GPT-4 to parse offer letters and generate structured insights. It is live at offerxray.com.',
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
