/**
 * Projects Data
 */
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
    duration: '2024',
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
  },
];

/**
 * Get project by ID
 */
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

