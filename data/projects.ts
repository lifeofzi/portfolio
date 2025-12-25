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
];

/**
 * Get project by ID
 */
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

