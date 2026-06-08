/**
 * Projects Data
 */
export interface WorkflowStep {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  url: string;
  githubUrl?: string;
  image?: string;
  screenshots?: string[];
  technologies: string[];
  featured?: boolean;
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  overview?: string;
  role?: string;
  duration?: string;
  workflowSteps?: WorkflowStep[];
  mainFeatures?: Array<{
    number: string;
    title: string;
    description: string;
    items: string[];
  }>;
  workflowStages?: string[];
}

export const projects: Project[] = [
  {
    id: 'offer-letter-analyzer',
    title: 'Offer X-Ray',
    description: 'Offer X-Ray is an AI-powered platform that transforms how job seekers evaluate offer letters. Upload your offer letter and receive instant, comprehensive analysis including risk assessment, compensation breakdown, negotiation guidance, and detailed insights—all in under 5 minutes. Built with privacy-first principles, your documents are processed securely and never stored permanently.',
    longDescription: 'Offer X-Ray is an AI-powered platform that transforms how job seekers evaluate offer letters. Upload your offer letter and receive instant, comprehensive analysis including risk assessment, compensation breakdown, negotiation guidance, and detailed insights—all in under 5 minutes. Built with privacy-first principles, your documents are processed securely and never stored permanently.',
    url: 'https://www.offerxray.com/',
    image: '/offer-xray.png',
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'React', 'Tailwind CSS'],
    featured: true,
    overview: 'Offer X-Ray is an AI-powered web application designed to help job seekers make informed decisions when evaluating job offers. The tool uses advanced natural language processing to extract, analyze, and compare key information from offer letters, including compensation, benefits, equity, and contract terms.',
    role: 'Full-Stack Developer & Product Designer',
    duration: '2025-Present',
    features: [
      'AI-powered document parsing and extraction of key offer details',
      'Side-by-side comparison of multiple offer letters',
      'Comprehensive analysis of compensation packages including base salary, bonuses, and equity',
      'Benefits breakdown and evaluation',
      'Contract term analysis and risk assessment',
      'Interactive and intuitive user interface',
      'Secure document processing with privacy-first approach',
      'Real-time analysis with instant results'
    ],
    challenges: [
      'Accurately parsing unstructured PDF and text documents with varying formats',
      'Handling sensitive personal information securely',
      'Creating a user-friendly interface for complex financial data',
      'Ensuring accurate extraction of compensation details across different offer letter formats',
      'Optimizing API costs while maintaining high-quality analysis'
    ],
    solutions: [
      'Implemented OpenAI GPT-4 for advanced document understanding and extraction',
      'Built a robust parsing pipeline that handles multiple document formats',
      'Designed a clean, modern UI with Tailwind CSS for easy data visualization',
      'Created secure client-side processing to minimize data exposure',
      'Optimized prompts and implemented caching to reduce API costs',
      'Added comprehensive error handling and user feedback mechanisms'
    ],
    workflowSteps: [
      { title: 'Document Upload', description: 'Upload PDF, DOC, DOCX securely', icon: '⬆', color: '#60a5fa' },
      { title: 'AI Analysis', description: 'Comp, benefits, legal terms', icon: '⚡', color: '#22c55e' },
      { title: 'Risk Assessment', description: 'Red / Amber / Green clarity', icon: '!', color: '#f59e0b' },
      { title: 'Negotiation Guidance', description: 'Strategies, templates, talking points', icon: '💬', color: '#0ea5e9' },
      { title: 'Export Report', description: 'Detailed PDF to share or keep', icon: '↘', color: '#10b981' },
    ],
  },
  {
    id: 'architex',
    title: 'Architex',
    description: 'A comprehensive project management platform designed specifically for architecture practices. Architex streamlines workflows with stage-based project tracking, intelligent document control, site visit documentation, and an integrated AI assistant to help architects manage their projects more efficiently.',
    longDescription: 'Architex is a professional architecture practice management platform built by architects, for architects. The platform provides stage-based workflows that guide projects from initial brief through construction documentation, intelligent document control with automatic revision numbering, comprehensive site visit logging with photo documentation, payment milestone tracking, and an AI assistant that provides project summaries, document search, and deadline alerts. Every feature is designed around how architecture practices actually operate, from customizable project stages to intelligent version control for drawings and specifications.',
    url: 'https://architex-two.vercel.app/',
    image: '/architex.png',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'AI/LLM Integration'],
    featured: false,
    overview: 'Architex is a specialized project management solution designed around how architecture practices actually operate. Built by architects who understand the workflow, the platform combines stage-based project tracking (Intro → Analysis → Design → Complete), intelligent document version control for drawings and specifications, comprehensive site visit documentation with photo integration, payment milestone tracking linked to project progress, and an AI assistant that understands architectural context. The platform helps architects manage every aspect of their projects from conception to completion, ensuring nothing falls through the cracks.',
    role: 'Full-Stack Developer & Product Designer',
    duration: '2025-Present (In Progress)',
    features: [
      'Stage-based project workflows with customizable stages (Intro, Analysis, Design, Complete)',
      'Natural project lifecycle tracking from initial brief through construction documentation',
      'Progress visualization with percentage completion and milestone indicators',
      'Deadline and milestone tracking with automated alerts',
      'Intelligent document control with automatic revision numbering',
      'Full document history with version comparison capabilities',
      'Multi-format support: PDF, DWG, and image files',
      'Site visit documentation with photo uploads and detailed notes',
      'Visit history and reporting for comprehensive project records',
      'Client communication log integrated with site visits',
      'Payment milestone tracking linked to project stages',
      'Billing integration that aligns invoicing with project progress',
      'AI assistant with natural language project queries',
      'Instant project summaries with status, progress, and deadlines',
      'Document search across all projects with AI-powered retrieval',
      'Deadline alerts and proactive reminders',
      'Smart suggestions based on workflow patterns',
      'Checklist system to ensure no deliverables are missed',
      'Stage-based organization for clear project structure',
      'Modern, intuitive interface designed for architectural workflows'
    ],
    challenges: [
      'Designing intuitive workflows that accurately match real architecture practice operations',
      'Implementing robust document version control system for multiple file types (PDF, DWG, images)',
      'Creating an AI assistant that understands architectural project context and terminology',
      'Building a flexible stage system that adapts to different project types and practice methodologies',
      'Integrating multiple complex features (documents, visits, billing, AI) into a cohesive platform',
      'Handling large file uploads for architectural drawings and site visit photos',
      'Ensuring document version comparison works across different file formats',
      'Creating a payment tracking system that accurately links milestones to project stages',
      'Building an AI system that can query project data and provide meaningful insights',
      'Designing a checklist system that prevents missed deliverables',
      'Maintaining data integrity across interconnected features (visits, billing, documents)',
      'Creating a user experience that feels natural to architects familiar with traditional workflows'
    ],
    solutions: [
      'Conducted research with architecture practices to understand real-world workflows and pain points',
      'Developed stage-based workflow system based on actual architecture practice patterns (Intro → Analysis → Design → Complete)',
      'Built comprehensive document management system with automatic revision numbering and full version history',
      'Implemented version comparison capabilities to track changes across document revisions',
      'Created multi-format file handling system supporting PDF, DWG, and image files',
      'Integrated AI assistant with project-specific context understanding using advanced language models',
      'Designed natural language interface for querying project status, payments, and documents',
      'Built flexible, customizable project stages to accommodate various practice needs and methodologies',
      'Developed unified interface that seamlessly connects documents, site visits, billing, and AI features',
      'Implemented photo upload and management system for site visit documentation',
      'Created payment milestone tracking that automatically links to project stages and progress',
      'Built intelligent checklist system with automated reminders and deadline tracking',
      'Designed progress visualization with percentage completion and milestone indicators',
      'Implemented client communication log integrated with site visits for comprehensive project records',
      'Created responsive, modern UI with Tailwind CSS that feels intuitive to architects',
      'Built robust data relationships ensuring consistency across all platform features',
      'Developed AI-powered document search that understands architectural terminology and context'
    ],
    mainFeatures: [
      {
        number: '01',
        title: 'Project Tracking',
        description: 'Guide every project through its natural lifecycle with stage-based workflows—from initial brief through construction documentation.',
        items: [
          'Customizable project stages',
          'Progress visualization',
          'Deadline & milestone tracking',
          'Stage-based organization'
        ]
      },
      {
        number: '02',
        title: 'Document Control',
        description: 'Keep every drawing, specification, and report organized with intelligent version control. Access any revision instantly.',
        items: [
          'Automatic revision numbering',
          'PDF, DWG & image support',
          'Full document history',
          'Version comparison'
        ]
      },
      {
        number: '03',
        title: 'Site Visits & Billing',
        description: 'Document every site visit with photos and notes. Link visits to billing milestones and keep invoicing aligned with progress.',
        items: [
          'Photo documentation',
          'Payment milestone tracking',
          'Visit history & reporting',
          'Client communication log'
        ]
      }
    ],
    workflowStages: ['Intro', 'Analysis', 'Design', 'Complete'],
  },
  {
    id: 'ugc-ai-platform',
    title: 'ReelRocket',
    description: 'An AI-powered UGC content creation platform that helps creators and brands generate hook scripts, demo videos, product reviews, and TikTok content strategies — all in one place.',
    longDescription: 'ReelRocket is an AI-powered UGC content creation platform designed to streamline how creators and brands produce short-form video content. The platform combines AI-generated hook scripts, avatar-based demo video creation, TikTok content research, and a product review generator into a single workflow — drastically reducing the time from idea to published content.',
    url: 'https://ugccreatorsfrontend.vercel.app/',
    image: '/ugc/ugc.png',
    screenshots: [
      '/ugc/ugc-ai-content-studio.png',
      '/ugc/ugc-hook-demo.png',
      '/ugc/ugc-library.png',
    ],
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'AI/LLM Integration', 'TikTok API'],
    featured: false,
    overview: 'ReelRocket gives creators a full content studio powered by AI. From generating compelling hook scripts and demo video overlays to researching trending TikTok content and analyzing existing videos, the platform covers every stage of UGC production. A credit-based system tracks usage, while a built-in library organizes uploaded products and demo assets for reuse across campaigns.',
    role: 'Full-Stack Developer & Product Designer',
    duration: '2025-Present (In Progress)',
    features: [
      'AI Content Studio with tabs for Hooks & Demo, Product Review, TikTok Research, and Video Analyzer',
      'Hook + Demo video generation with selectable AI avatars and hook templates',
      'Real-time preview of generated video overlays before exporting',
      'TikTok content research to identify trending hooks and formats',
      'Video Analyzer for auditing existing UGC content performance',
      'Product Review generator tailored to highlight key benefits',
      'Content Library organized by Products and Demo Videos',
      'Credit-based usage system with transaction history',
      'Schedule management for planned content drops',
      'Analytics dashboard for tracking content performance',
      'Autopilot mode for automated content generation pipelines',
      'Social account integration for TikTok and Instagram',
      'AI Avatars for faceless UGC video creation',
      'Slideshow generator for image-based content'
    ],
    mainFeatures: [
      {
        number: '01',
        title: 'AI Content Studio',
        description: 'A unified workspace for generating all types of UGC content — hooks, demos, product reviews, and TikTok research — powered by AI.',
        items: [
          'Hook & Demo script generation',
          'Product Review writer',
          'TikTok Content Research',
          'Video Analyzer'
        ]
      },
      {
        number: '02',
        title: 'Hook + Demo Creator',
        description: 'Select a hook template, attach demo videos, choose an AI avatar, and generate a ready-to-post video overlay with a single click.',
        items: [
          'Avatar-based video generation',
          'Customizable hook templates',
          'Real-time preview',
          'Credit-based generation'
        ]
      },
      {
        number: '03',
        title: 'Content Library & Automation',
        description: 'Manage all uploaded assets in one place and automate your content pipeline with scheduling and autopilot features.',
        items: [
          'Product & demo asset library',
          'Upload tracking by category',
          'Content scheduling',
          'Autopilot automation'
        ]
      }
    ],
  },
  {
    id: 'muhasaba',
    title: 'Muhasaba',
    description: 'A quiet iOS companion for the daily Islamic practice of muhasaba — written or spoken reflection, with gentle guidance rooted in the Quran and Sunnah. Coming soon to the App Store.',
    longDescription: 'Muhasaba is an iOS app built around the Islamic tradition of self-accounting — a daily practice of honest reflection encouraged by scholars for centuries. The app offers a private space to write or speak each day, then receive guidance drawn from the Quran and Sunnah tailored to what you actually said. Voice entries are transcribed by Whisper. Insights track virtue patterns like sabr, shukr, and tawbah over time. Everything stays in an encrypted vault you control — reflections never train an AI and can be fully exported or deleted in one tap.',
    url: 'https://muhasaba.me/',
    image: '/muhasaba.png',
    technologies: ['Swift', 'SwiftUI', 'iOS', 'Whisper', 'AI/LLM Integration', 'Next.js'],
    featured: false,
    overview: 'Muhasaba brings the centuries-old Islamic practice of self-accounting into a focused daily ritual. Five minutes after Isha, a prompt arrives. You write a sentence or speak for a minute. The app responds with a relevant ayah or hadith, a small actionable insight, and a dhikr for the night. Over time, virtue patterns like sabr, shukr, and tawbah surface — a private mirror of the soul, not a social feed. Privacy is foundational: entries live in an encrypted vault you control, never used to train any model.',
    role: 'Founder & Full-Stack Developer',
    duration: '2025-Present (In Progress)',
    features: [
      'Daily reflection prompts delivered after Isha prayer',
      'Write or speak — voice journaling with Whisper transcription',
      'AI guidance grounded in Quran and Sunnah, shaped to what you said',
      'Insights tracking virtue patterns: sabr, shukr, tawbah over time',
      'Unlimited reflections with no monthly caps',
      'Privacy-first: entries stored in an encrypted vault you control',
      'Reflections never used to train any AI model',
      'One-tap full account deletion and data export',
      'No newsletter, no marketing — single launch notification only',
      'iPhone-first, coming to the App Store'
    ],
    mainFeatures: [
      {
        number: '01',
        title: 'Daily Reflection',
        description: 'A quiet prompt arrives after Isha. Write a sentence or speak for a minute — your private thread for the soul.',
        items: [
          'Daily after-Isha prompts',
          'Write or voice entry',
          'Whisper transcription',
          'Unlimited entries'
        ]
      },
      {
        number: '02',
        title: 'Guided Response',
        description: 'Receive a short ayah or hadith, an insight shaped to what you wrote, one small action for tomorrow, and a dhikr for tonight.',
        items: [
          'Quran & Sunnah guidance',
          'Personalized insight',
          'Actionable next step',
          'Evening dhikr'
        ]
      },
      {
        number: '03',
        title: 'Privacy & Ownership',
        description: 'Your reflections live in an encrypted vault you control. Export, delete, and erase your account in one tap — no forms, no waiting.',
        items: [
          'Encrypted local vault',
          'No AI training on your data',
          'One-tap account deletion',
          'Full data export'
        ]
      }
    ],
  },
  {
    id: 'ali-saffudin',
    title: 'Ali Saffudin',
    description: 'A cinematic artist website for musician Ali Saffudin, built around his debut EP "Irtiqa" (ارتقا) — featuring an immersive dark aesthetic, interactive tracklist with a cassette player, and bilingual Arabic/English design.',
    longDescription: 'A bespoke artist website built for musician Ali Saffudin to launch his debut EP "Irtiqa" (ارتقا — meaning "ascent"). The site leads with full-bleed album art and a bold typographic hero, then flows into an interactive cassette-tape player for the four-track EP. The dark red-and-black visual language matches the raw, intimate tone of the music. Built entirely as a personal project for a friend.',
    url: 'https://alisaffudin.com/',
    image: '/alisaffudin/cover.jpg',
    screenshots: [
      '/alisaffudin/screenshot-desktop.png',
      '/alisaffudin/screenshot-mobile.png',
    ],
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    featured: false,
    overview: 'Ali Saffudin needed a home for his debut EP — not a template, but something that felt like the music. The site opens with the album cover full-bleed, the title in both Latin and Arabic script, and an animated scrolling marquee. Below, a cassette-tape interface lets visitors browse and select from the four tracks. The whole thing is built on Next.js and ships as a fast static site.',
    role: 'Designer & Developer',
    duration: '2026',
    features: [
      'Full-bleed hero with album art and bilingual Arabic/English typography',
      'Animated scrolling marquee with EP title and artist name',
      'Interactive cassette tape player with four-track tracklist',
      'Dark cinematic aesthetic in red and black matching the EP mood',
      'Responsive design across mobile, tablet, and desktop',
      'Fast static site with Next.js',
    ],
    mainFeatures: [
      {
        number: '01',
        title: 'Immersive Hero',
        description: 'Album cover fills the screen. The EP title appears in both Latin script and Arabic (ارتقا), with the artist name beneath.',
        items: [
          'Full-bleed album art',
          'Bilingual typography',
          'Animated marquee',
          'Dark cinematic palette'
        ]
      },
      {
        number: '02',
        title: 'Cassette Player',
        description: 'A vintage cassette tape graphic anchors the music section. Visitors select any of the four tracks from the tracklist panel alongside it.',
        items: [
          'Interactive track selection',
          '4-track EP: Irtiqa 2026',
          'Cassette tape visual',
          'Minimal, focused UI'
        ]
      },
    ],
  },
];

/**
 * Get project by ID
 */
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

