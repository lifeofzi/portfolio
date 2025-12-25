/**
 * Blog Posts Data
 */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: number; // in minutes
  category: string;
  tags: string[];
  featured?: boolean;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-architex-architecture-practice-management',
    title: 'Building Architex: A Project Management Platform for Architects',
    excerpt: 'How I built a comprehensive project management platform specifically designed for architecture practices, with stage-based workflows, document control, and AI assistance.',
    content: `# Building Architex: A Project Management Platform for Architects

Architex is a project management platform I built specifically for architecture practices. The idea came from a real-world problem I witnessed firsthand.

I was working with my long-time friend Tauseef, who is an architect, and I saw how he was struggling to find the latest file for a client. He had multiple versions of drawings, specifications, and documents scattered across different folders, and it was taking him way too long to locate the most recent version. That's when we sat down together and designed the workflow that would become Architex.

## The Problem

Traditional project management tools don't understand the architectural workflow. Architects like Tauseef need:
- Stage-based project tracking (Intro → Analysis → Design → Complete)
- Intelligent document version control for drawings and specifications
- Site visit documentation with photos
- Payment milestone tracking linked to project stages
- An AI assistant that understands architectural context

## The Solution

I designed Architex around how architecture practices actually operate. The platform combines:

### Stage-Based Workflows
Projects move through natural stages from initial brief to construction documentation. Each stage has customizable checklists and deliverables.

### Document Control
Automatic revision numbering, full document history, and version comparison for PDFs, DWG files, and images.

### Site Visits & Billing
Document every site visit with photos and notes. Link visits to billing milestones to keep invoicing aligned with progress.

### AI Assistant
An intelligent assistant that understands architectural terminology and can answer questions about project status, find documents, and provide deadline alerts.

## Designing the Workflow

After identifying the problem, Tauseef and I spent time mapping out the actual workflow that architects follow. We sketched out the stages, document management needs, and how site visits connect to billing. This collaborative design process ensured that Architex would solve real problems, not theoretical ones.

![Architex Design Process](/architex/architext-desing.png)

![Architex Design 2](/architex/desing-2.png)

## Technical Implementation

Built with Next.js, TypeScript, React, and Tailwind CSS. The AI assistant uses advanced language models to understand project context and provide meaningful insights.

![Current Architex Website](/architex/current-website.png)

## User Testing & Iteration

Currently, Tauseef is actively testing Architex in his daily workflow. This real-world testing is invaluable—he's using it with actual projects, real clients, and genuine deadlines. Every week, we sit down to discuss what's working, what's not, and what features would make his life easier.

Based on his user experience, we're continuously iterating on:
- The document version control system
- The stage-based workflow customization
- The AI assistant's understanding of architectural terminology
- The site visit documentation process

This iterative approach, driven by real user feedback, ensures that Architex evolves into a tool that truly serves architects' needs rather than forcing them to adapt to a generic solution.

## Lessons Learned

Building Architex taught me the importance of:
- Understanding your users' actual workflows through direct observation
- Collaborating with domain experts (like Tauseef) from the start
- Designing for domain-specific needs rather than generic solutions
- Creating intuitive interfaces for complex data
- Integrating AI in a way that adds real value
- Iterating based on real-world usage, not assumptions

The platform is currently in active development and testing. With Tauseef's ongoing feedback, we're building something that will genuinely help architects manage their practices more efficiently.`,
    author: 'Zaman Ishtiyaq',
    publishedAt: '2025-01-15',
    readTime: 10,
    category: 'Development',
    tags: ['Next.js', 'TypeScript', 'AI', 'Architecture', 'Project Management'],
    featured: true,
  },
  {
    slug: 'ai-powered-offer-letter-analysis',
    title: 'AI-Powered Offer Letter Analysis: Building Offer X-Ray',
    excerpt: 'Creating an AI platform that helps job seekers evaluate offer letters in minutes, with comprehensive analysis of compensation, benefits, and contract terms.',
    content: `# AI-Powered Offer Letter Analysis: Building Offer X-Ray

Offer X-Ray is an AI-powered platform that transforms how job seekers evaluate offer letters. The idea came from a personal mistake I made that I never want anyone else to repeat.

I received a job offer and, in my excitement, I didn't thoroughly review the details. It wasn't until later that I realized my notice period was 2 months—much longer than I expected. Even worse, there was no mention of leaves in the offer letter, and it had completely slipped my mind to check these critical details. By the time I noticed, I had already accepted the offer.

That experience made me realize how easy it is to miss important details in offer letters when you're excited about a new opportunity. I decided to build Offer X-Ray so that no one else would make the same mistake I did.

## The Challenge

Offer letters are complex documents with:

Offer letters are complex documents with:
- Multiple compensation components (base, bonus, equity)
- Complex benefits packages
- Legal terms and conditions
- Risk factors that aren't immediately obvious

Most people don't have the expertise to fully evaluate these documents, leading to poor decisions.

## The Solution

Offer X-Ray uses AI to:
1. Parse and extract key information from offer letters
2. Analyze compensation packages comprehensively
3. Assess risks and identify potential issues
4. Provide negotiation guidance with strategies and talking points
5. Generate detailed reports for comparison

## Privacy-First Approach

All document processing happens securely, and documents are never stored permanently. This was crucial for building trust with users handling sensitive information.

## Technical Stack

- Next.js for the frontend
- OpenAI GPT-4 for document understanding
- Secure client-side processing
- Real-time analysis with instant results

## Impact

The platform helps job seekers make informed decisions in under 5 minutes, something that would typically take hours of research and analysis.`,
    author: 'Zaman Ishtiyaq',
    publishedAt: '2025-01-10',
    readTime: 6,
    category: 'AI',
    tags: ['AI', 'OpenAI', 'Next.js', 'Privacy', 'Career'],
    featured: true,
  },
  {
    slug: 'neo-brutalist-design-principles',
    title: 'Neo-Brutalist Design: Bold, Bold, Bold',
    excerpt: 'Exploring neo-brutalist design principles and how I applied them to create a distinctive portfolio that stands out from the crowd.',
    content: `# Neo-Brutalist Design: Bold, Bold, Bold

Neo-brutalism is a design movement that embraces raw, bold aesthetics. It's characterized by:
- Thick borders and shadows
- High contrast colors
- Bold typography
- Flat design with depth through shadows
- Playful, unapologetic styling

## Why Neo-Brutalism?

In a world of minimalist, clean designs, neo-brutalism stands out. It's:
- **Memorable**: The bold aesthetic creates strong visual impressions
- **Playful**: The design doesn't take itself too seriously
- **Accessible**: High contrast improves readability
- **Distinctive**: It breaks away from cookie-cutter designs

## Key Principles

### 1. Thick Borders
Everything has a thick border (3px minimum). This creates clear boundaries and visual hierarchy.

### 2. Bold Shadows
Shadows are not subtle. They're bold, offset shadows that create depth: \`shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]\`

### 3. High Contrast
Black and white with bold accent colors. No subtle grays or pastels.

### 4. Chunky Typography
Bold, heavy fonts that command attention.

### 5. Playful Elements
Rotated shapes, unexpected colors, and whimsical details.

## Implementation

I used Tailwind CSS to implement these principles consistently across my portfolio. The design system includes:
- Consistent border widths
- Shadow utilities
- Color palette
- Typography scale

## Results

The neo-brutalist design has made my portfolio:
- More memorable
- Easier to navigate
- More engaging
- Stand out from typical portfolios

It's not for everyone, but for a developer portfolio, it perfectly captures personality and technical skill.`,
    author: 'Zaman Ishtiyaq',
    publishedAt: '2025-01-05',
    readTime: 5,
    category: 'Design',
    tags: ['Design', 'UI/UX', 'Tailwind CSS', 'Portfolio'],
    featured: false,
  },
];

/**
 * Get blog post by slug
 */
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

/**
 * Get featured blog posts
 */
export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

/**
 * Get posts by category
 */
export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

