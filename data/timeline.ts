import { type TimelineItemData } from '@/components/molecules/TimelineItem';

/**
 * Timeline Data - Grouped by Company
 * Projects are grouped under their respective companies
 * Solo projects (without organization) are handled separately
 */
export const timelineData: TimelineItemData[] = [
  // BrightEdge Projects
  {
    id: '1',
    title: 'AI Catalyst',
    projectName: 'BrightEdge AI Catalyst',
    organization: 'BrightEdge',
    logo: '/brightedge.png',
    projectLogo: '/ai_catalyst_logo.png',
    images: ['/ai_catalyst_1.png', '/ai_catalyst_2.png'],
    location: 'Remote',
    startDate: '2025-05',
    endDate: 'Present',
    type: 'work',
    role: 'Senior Software Engineer • Lead Backend Engineer',
    projectUrl: 'https://www.brightedge.com/ai-catalyst',
    description: [
      'Lead Backend Engineer for BrightEdge AI Catalyst — flagship command center delivering unified visibility across AI-powered search engines, used daily by 50+ organizations including Fortune 500 brands',
      'Developed unified brand presence and sentiment tracking across Google AI Overviews, ChatGPT, Perplexity, Google AI Mode, Gemini, etc.',
      'Implemented "optimize once, rank everywhere" functionality for consistent optimization across AI platforms',
      'Delivered real-time analytics, recommendations, and audience intelligence (persona, intent, journey insights) to drive AI strategies',
    ],
  },
  {
    id: '2',
    title: 'Search Volume API',
    projectName: 'BrightEdge Search Volume API',
    organization: 'BrightEdge',
    logo: '/brightedge.png',
    location: 'Remote',
    startDate: '2025-01',
    endDate: '2025-05',
    type: 'work',
    role: 'Senior Software Engineer • Owner',
    description: [
      'Owner of the BrightEdge Search Volume API — a Dockerized service deployed on GCP, serving 250+ enterprise customers',
      'Delivers both Google search volume insights and proprietary BrightEdge Volume data via a scalable, production-grade API',
      'Handles average 200K+ requests daily, including mission-critical, on-demand SV queries from customers and internal pipelines',
    ],
  },
  {
    id: '3',
    title: 'Search Volume Module',
    projectName: 'BrightEdge Search Volume (BE SV)',
    organization: 'BrightEdge',
    logo: '/brightedge.png',
    location: 'Remote',
    startDate: '2023-11',
    endDate: '2024-12',
    type: 'work',
    role: 'Software Engineer III • Owner',
    description: [
      'Owner of Search Volume(SV) module, reducing time to display SV on the platform from over 1 week to <48 hours with 99% availability',
      'Led backend development of BrightEdge Search Volume (BE SV), delivering proprietary search volume insights platform-wide',
      'Enabled seamless integration of BE SV across pipelines, APIs, and customer applications',
      'Core developer in the VIP team, responsible for resolving high-priority customer issues',
    ],
  },
  // Goldman Sachs Projects
  {
    id: '4',
    title: 'COMET',
    projectName: 'Central Orchestrator for Market Risk Metrics',
    organization: 'Goldman Sachs',
    logo: '/goldman.png',
    location: 'Bengaluru, India',
    startDate: '2022-01',
    endDate: '2023-10',
    type: 'work',
    role: 'Software Engineer II • Core Developer',
    description: [
      'Core Developer on the flagship Central Orchestrator for Market Risk Metrics (COMET), delivering 30+ critical features',
      'Built event-driven integration with market risk pricing via Kafka, ensuring seamless and reliable data flow',
      'Integrated Prometheus and Grafana, cutting detection time to <1 hour and automating mitigations',
      'Reduced deliverable onboarding from weeks to 1 day, achieving 80% faster issue resolution',
    ],
  },
  {
    id: '5',
    title: 'LIBOR Transition',
    projectName: 'LIBOR Regulatory Reporting',
    organization: 'Goldman Sachs',
    logo: '/goldman.png',
    location: 'Bengaluru, India',
    startDate: '2019-06',
    endDate: '2021-12',
    type: 'work',
    role: 'Software Engineer • Subject Matter Expert',
    description: [
      'Delivered regulatory reports for the LIBOR transition, cutting reporting time from 1 month to 1 week',
      'Optimized pipeline workflows, reducing operational risk by 70%',
      'Developed MrAgg — distributed framework for aggregating risk metrics, and onboarded 5 deliverables — integration time reduced to 24 hours',
      'Acted as Subject Matter Expert for LIBOR reporting, advising team members and stakeholders',
    ],
  },
  {
    id: '6',
    title: 'Market Risk Query Layer',
    projectName: 'Market Risk Data Reporting System',
    organization: 'Goldman Sachs',
    logo: '/goldman.png',
    location: 'Bengaluru, India',
    startDate: '2018-05',
    endDate: '2018-06',
    type: 'work',
    role: 'Software Developer Intern',
    description: [
      'Developed a query layer on Vert.x framework for reporting market risk data',
      'Integrated new layer with web clients and abstracted datastore, boosting flexibility and UX',
    ],
  },
  // Education
  {
    id: '7',
    title: 'B.Tech in Computer Science and Engineering',
    organization: 'Indian Institute of Technology (IIT), Bhubaneswar',
    location: 'Bhubaneswar, India',
    startDate: '2015-05',
    endDate: '2019-06',
    type: 'education',
    description: [
      'CGPA: 8.97/10',
      'Top 0.05% in JEE Main and JEE Advanced (2015)',
      'Gold Prize, Business Plan Presentation — Center for Entrepreneurship, IIT Bhubaneswar (2016)',
    ],
  },
];
