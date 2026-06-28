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
  projectId?: string; // Link to project detail page
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-architex-architecture-practice-management',
    title: 'Building Architex: A Project Management Platform for Architects',
    excerpt: 'How I built a comprehensive project management platform specifically designed for architecture practices, with stage-based workflows, document control, and AI assistance.',
    content: `# Building Architex: A Project Management Platform for Architects

**Quick answer:** Architex is a Next.js project management platform built specifically for architecture practices. It solves the version-control and workflow problem architects face daily — stage-based project tracking, automatic document revision numbering, site visit documentation, and an AI assistant that understands architectural terminology. Built with Next.js, TypeScript, and OpenAI. Currently in active testing with a real architecture practice.

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
    updatedAt: '2026-06-23',
    readTime: 10,
    category: 'Development',
    tags: ['Next.js', 'TypeScript', 'AI', 'Architecture', 'Project Management'],
    featured: true,
    projectId: 'architex',
  },
  {
    slug: 'ai-powered-offer-letter-analysis',
    title: 'AI-Powered Offer Letter Analysis: Building Offer X-Ray',
    excerpt: 'Creating an AI platform that helps job seekers evaluate offer letters in minutes, with comprehensive analysis of compensation, benefits, and contract terms.',
    content: `# AI-Powered Offer Letter Analysis: Building Offer X-Ray

**Quick answer:** Offer X-Ray is an AI tool that analyzes job offer letters in under 5 minutes. Upload a PDF, and it extracts compensation components, identifies risk factors (like unusually long notice periods or missing leave policies), and generates negotiation talking points. Built with Next.js and GPT-4. All documents are processed securely and never stored permanently.

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
    updatedAt: '2026-06-23',
    readTime: 6,
    category: 'AI',
    tags: ['AI', 'OpenAI', 'Next.js', 'Privacy', 'Career'],
    featured: true,
    projectId: 'offer-letter-analyzer',
  },
  {
    slug: 'neo-brutalist-design-principles',
    title: 'Neo-Brutalist Design: Bold, Bold, Bold',
    excerpt: 'Exploring neo-brutalist design principles and how I applied them to create a distinctive portfolio that stands out from the crowd.',
    content: `# Neo-Brutalist Design: Bold, Bold, Bold

**Quick answer:** Neo-brutalism is a web design movement defined by thick black borders, bold offset box-shadows, high-contrast colors (typically black, white, and vivid accent colors), and chunky typography. Unlike minimalism, it embraces rawness and personality. In web development, it is implemented using utility-first CSS (Tailwind CSS) with consistent border widths (3px+), shadow utilities, and a restrained but punchy color palette. It is increasingly popular for developer portfolios and startup landing pages.

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
    updatedAt: '2026-06-23',
    readTime: 5,
    category: 'Design',
    tags: ['Design', 'UI/UX', 'Tailwind CSS', 'Portfolio'],
    featured: false,
  },
  {
    slug: 'ugc-content-creation-platform-tiktok-automation',
    title: 'Building a UGC Content Creation Platform: Rethinking TikTok Automation',
    excerpt: 'Exploring the future of user-generated content creation with AI-powered video automation, TikTok workflows, and intelligent content generation.',
    content: `# Building a UGC Content Creation Platform: Rethinking TikTok Automation

**Quick answer:** ReelRocket is an AI-powered UGC (user-generated content) platform for TikTok creators and brands. It generates hook scripts from trends, combines them with demo videos via an AI mixing engine, supports AI avatars and face-swapping, and automates posting across multiple TikTok accounts. The goal is to reduce video creation time from hours to minutes without sacrificing quality or authenticity. Built with Next.js, Python (FastAPI), and AI video-processing APIs.

I'm currently working on a UGC (User Generated Content) content creation platform that aims to revolutionize how creators and brands produce TikTok videos. The idea stems from observing the massive time investment required to create engaging content consistently.

## The Problem with Current Content Creation

Creating viral TikTok content is incredibly time-consuming:
- Finding the right hook that captures attention
- Sourcing or creating demo videos
- Writing compelling captions
- Editing and combining multiple elements
- Maintaining consistency across multiple videos
- Managing multiple social accounts

Most creators spend hours on a single video, and brands struggle to scale their content production without hiring large teams.

![UGC Platform Interface](/ugc/ugc.png)

## What I'm Building

The platform I'm developing focuses on **intelligent video automation** rather than just basic scheduling. Here's what I'm building:

### Core Features

**Home Section:**
- **Library**: Centralized storage for all your content assets
- **Schedule**: Plan and schedule your TikTok posts
- **Analytics**: Track performance and engagement metrics
- **Autopilot**: Automated content creation and posting workflows

**Playground - Content Creation Tools:**
- **Slideshows**: Create engaging slideshow content
- **AI Avatars**: Generate and customize AI-powered avatars for videos
- **Hook + Demo**: Combine attention-grabbing hooks with demo videos (currently the main focus)
- **Product Review**: Template-based product review creation
- **Trending Video Mixer**: Blend your content with trending formats
- **Swap**: Face and element swapping capabilities
- **TikTok Research**: Research trending content and formats

**Social Accounts:**
- Direct TikTok integration for seamless posting

**Settings & Management:**
- **Usage**: Track platform usage and limits
- **My Products**: Manage product catalogs for reviews
- **My Demos**: Organize your demo video library
- **Connect Social Accounts**: Link multiple social platforms

### 1. Hook Generation & Selection

The platform uses AI to generate and suggest hooks based on:
- Trending topics in your niche
- Performance data from your previous videos
- Industry-specific patterns
- A/B testing different hook styles

Users can select from AI-generated hooks (templates), create their own (user created), or use the "Create New" feature. The system learns from what works and suggests hook lines with a dropdown of AI-generated suggestions.

### 2. Demo Video Library & AI Avatars

Instead of creators having to film every demo themselves, the platform provides:
- A library of pre-made demo videos (Available Demos section)
- AI-generated avatars that can be customized
- The ability to swap faces, backgrounds, and elements
- Product review templates that can be quickly customized
- Easy demo video management with add/remove functionality

This dramatically reduces the time from idea to published video.

### 3. TikTok Automation Workflow

The automation isn't just about posting—it's about the entire workflow:
- **Hook + Demo Mixing**: Automatically combine hooks with relevant demo videos
- **Trending Video Mixer**: Blend your content with trending formats
- **Smart Scheduling**: Post at optimal times based on your audience data
- **Multi-Account Management**: Manage multiple TikTok accounts from one dashboard
- **Video History**: Search and manage previously created videos by title, description, or prompt

### 4. Video Automation Intelligence

The platform learns and adapts:
- Tracks which hooks perform best for your audience
- Suggests demo videos based on successful combinations
- Automatically adjusts posting times based on engagement
- Provides analytics on what's working and what's not
- Real-time video preview with full editing capabilities

## My Thinking on TikTok Automation

TikTok automation shouldn't be about spamming content—it should be about **intelligent content creation and distribution**. Here's my philosophy:

### Quality Over Quantity
Automation should help creators produce better content faster, not just more content. The AI should understand context, trends, and audience preferences.

### Creator-Centric Design
The platform should feel like a creative tool, not a robot. Creators maintain full control while automation handles the repetitive, time-consuming tasks.

### Data-Driven Decisions
Every automation decision should be backed by data:
- Which hooks convert best?
- What demo videos resonate with your audience?
- When do your followers engage most?
- What content formats drive the most views?

### Ethical Automation
I'm thinking carefully about:
- Maintaining authenticity in automated content
- Ensuring creators still have creative input
- Following TikTok's guidelines and best practices
- Building tools that enhance creativity, not replace it

## Technical Challenges

Building this platform presents interesting challenges:

### Video Processing at Scale
- Real-time video editing and composition
- Face swapping and AI avatar integration
- Efficient video rendering and optimization
- Storage and delivery of video assets

### AI Integration
- Natural language processing for hook generation
- Computer vision for video analysis
- Recommendation systems for content suggestions
- Trend detection and analysis

### TikTok API Limitations
- Working within TikTok's API constraints
- Handling rate limits and authentication
- Ensuring compliance with platform policies
- Building reliable automation that doesn't get flagged

## Current Status

The platform is in active development. I'm focusing on:
- Building the core video composition engine
- Integrating AI for hook generation
- Creating a seamless user experience
- Testing with real creators to gather feedback

## Vision

My vision is to create a platform where:
- A creator can go from idea to published TikTok video in minutes, not hours
- Brands can scale their content production without massive teams
- Automation enhances creativity rather than replacing it
- Data drives every decision, making content creation more strategic

The future of content creation isn't about replacing creators—it's about empowering them with intelligent tools that handle the grunt work so they can focus on what matters: creativity and connection with their audience.

This is still early days, but I'm excited about the potential to transform how UGC content is created and distributed.`,
    author: 'Zaman Ishtiyaq',
    publishedAt: '2025-01-20',
    updatedAt: '2026-06-23',
    readTime: 8,
    category: 'Development',
    tags: ['UGC', 'TikTok', 'Automation', 'AI', 'Video', 'Content Creation'],
    featured: true,
  },
  {
    slug: 'building-ai-agent-system-restaurant-owners-pet-pooja-integration',
    title: 'Building an AI Agent System for Restaurant Owners: Why I Chose an Agentic Framework Over Traditional Solutions',
    excerpt: 'How I built a conversational AI system for restaurant owners using an agentic framework, with deep integration into Pet Pooja—one of India\'s most popular restaurant management platforms.',
    content: `# Building an AI Agent System for Restaurant Owners: Why I Chose an Agentic Framework Over Traditional Solutions

**Quick answer:** This project is a multi-agent AI system that gives restaurant owners conversational access to their operational data. Instead of waiting for managers to pull reports, a café owner can ask: "How did coffee sales change after the price increase?" and get an instant answer with a chart — in seconds. Built with FastAPI, OpenAI Agents SDK, React, and Neon (PostgreSQL). Agents specialize by domain (sales, inventory, visualization) and hand off work to each other, mimicking how a real analytics team collaborates. Integrated with Pet Pooja, one of India's most popular restaurant POS platforms.

## The Problem: A Café Owner's Frustration

A friend introduced me to a café owner who was dealing with a common issue: getting insights from their business data took too long. His managers would pull reports, analyze them, and present them—a process that drained time and slowed decisions.

The conversation made the problem clear: business owners need instant, conversational access to their data, not reports that arrive hours or days later.

The owner wanted to ask questions like:
- "Show me how coffee sales changed after we raised prices"
- "What are our top-selling items this month?"
- "How's our inventory looking for the most popular menu items?"

Each query required manual work: query the database, analyze results, format a response, and create visualizations. This wasn't scalable.

![First Conversation with Café Owner](/easy-day/first-conversaton.jpeg)

## The Real Value: It's All About the Data

The framework is only as good as the data it connects to. The value comes from integrating with real operational systems that restaurants already use.

### Why Pet Pooja?

Pet Pooja is one of the most popular restaurant management platforms in India, handling:
- Point-of-Sale (POS) transactions
- Inventory management
- Customer relationship management (CRM)
- Staff scheduling
- Menu management
- Real-time reporting and analytics

By building over Pet Pooja, we can leverage:
- Years of historical transaction data
- Real-time inventory levels
- Customer ordering patterns
- Menu performance metrics
- Staff productivity data
- Financial data

The agentic framework becomes powerful when it can access this operational data in real time.

![Base System Architecture](/easy-day/base.png)

## The Solution: An Agentic AI System Connected to Real Data

I decided to build a system where specialized AI agents collaborate to answer business questions in real time, using natural language, connected directly to the restaurant's operational data.

### Why Agentic Architecture?

After exploring options, I chose OpenAI's Agents SDK with an agentic framework for these reasons:

**Specialized Agents for Different Tasks:** Instead of one general model, I created specialized agents:
- **Sales Agent**: Answers sales questions, queries the database, and provides insights
- **Inventory Agent**: Handles inventory questions and stock analysis
- **Plotter Agent**: Creates visualizations when users ask to "see" data
- **Response Agent**: Formats final outputs for consistency

**Agent Collaboration (Handoffs):** Agents hand off work when needed. When the Sales Agent detects a visualization request, it provides analysis first, then hands off to the Plotter Agent with the data. This mirrors how teams collaborate.

**Data Grounding:** Each agent is constrained to use actual database results—no hallucinations. The Sales Agent must query before answering and uses exact numbers from query results.

**Temperature Control:** Critical agents use low temperature (0.1) for deterministic, data-grounded responses while maintaining natural conversation.

## The Architecture

The system uses:
- **Backend**: FastAPI with OpenAI Agents SDK
- **Database**: Neon (PostgreSQL) with schema introspection
- **Frontend**: React + TypeScript with streaming responses
- **Agent Orchestrator**: Routes messages and manages agent collaboration

Key features:
- Streaming responses for real-time feedback
- Automatic visualizations when users say "show me"
- Database schema introspection so agents understand the data structure
- Session management to maintain conversation context
- Multi-agent handoffs for complex workflows

## Integrating with Pet Pooja: The Data Pipeline

Pet Pooja's API capabilities enable seamless integration. Here's how the data flow works:

### 1. Data Export and Import

Pet Pooja allows exporting data in various formats. The system includes a CSV import utility that:
- Automatically infers database schema from exported data
- Handles batch imports for large datasets
- Sanitizes column names for database compatibility
- Supports incremental updates (append mode) for daily syncs

For example, a restaurant can export:
- Daily sales transactions
- Inventory movements
- Menu item performance
- Customer order history

This data gets imported into our PostgreSQL database where agents can query it.

### 2. Real-Time API Integration (Future)

Pet Pooja's API enables:
- Real-time transaction data sync
- Live inventory level monitoring
- Customer data access
- Order status updates

This means agents can answer questions with up-to-the-minute data, not yesterday's export.

### 3. Schema-Aware Querying

The system's schema introspection allows agents to:
- Understand table structures automatically
- Discover available data columns
- Write accurate SQL queries
- Handle schema changes gracefully

When a Pet Pooja export structure changes, agents adapt without code changes.

## What Makes This Framework "Worth the Juice"

The real value comes from connecting the agentic framework to comprehensive operational data:

### 1. Real-Time Insights from Operational Data

Instead of analyzing stale exports, agents can access:
- **Live sales data**: "What did we sell in the last hour?"
- **Current inventory**: "Do we have enough flour for tomorrow's orders?"
- **Customer patterns**: "Which customers order the most during lunch hours?"

### 2. Cross-Domain Analysis

Pet Pooja's integrated data allows agents to answer complex questions:
- "How does inventory turnover correlate with sales peaks?"
- "Which menu items have the best profit margins considering ingredient costs?"
- "What's the relationship between staff scheduling and customer wait times?"

### 3. Historical Context

Years of Pet Pooja data enable:
- **Trend analysis**: "How have coffee sales changed seasonally over 3 years?"
- **Pattern recognition**: "What menu items typically sell better on weekends?"
- **Predictive insights**: "Based on last year's data, how much inventory should we order for Diwali?"

### 4. Business-Specific Intelligence

Pet Pooja's data includes restaurant-specific context:
- Menu structure and categories
- Pricing history and changes
- Promotional campaign impacts
- Multi-location performance comparisons

Agents understand this context and provide relevant insights.

## The Integration Strategy

### Phase 1: CSV Export/Import (Current)

Restaurants can:
- Export data from Pet Pooja (daily/weekly)
- Import CSV files using the provided utility
- Ask questions about their data immediately

This works for:
- Historical analysis
- Periodic reporting
- Data exploration

### Phase 2: API Integration (Next)

Building direct API integration for:
- Real-time data sync
- Live querying without exports
- Automatic updates
- Webhook-based triggers

### Phase 3: Native Integration (Future)

Working with Pet Pooja for:
- OAuth-based authentication
- Official API partnerships
- Seamless data flow
- Plugin/extension capabilities

## The User Experience with Real Data

The café owner can now:
- Connect their Pet Pooja data (via export or API)
- Ask questions: "Show me coffee sales trends after our price increase"
- Get immediate analysis with exact numbers from their transactions
- See visualizations automatically generated
- Ask follow-ups that build on the conversation

All powered by their actual operational data.

## Why This Matters

The agentic framework is powerful, but its real value comes from:
- Access to comprehensive operational data
- Integration with tools restaurants already use
- Real-time insights from live data
- Historical context for trend analysis
- Business-specific intelligence

By building over Pet Pooja, we're not creating another siloed system—we're adding an intelligent layer on top of existing infrastructure. Restaurant owners get:
- Zero learning curve (they already use Pet Pooja)
- No data migration needed
- Instant access to their business intelligence
- Natural language interface to their data

## What I've Built So Far

The current system includes:
- Multi-agent orchestration with automatic routing
- Database query tools with schema awareness
- Automatic chart generation from natural language requests
- Streaming responses for real-time interaction
- Specialized agents for sales and inventory
- A clean React interface for conversations
- CSV import utilities for Pet Pooja data

## The Future

This is just the beginning. The agentic framework makes it straightforward to add agents for:
- Financial analysis
- Menu optimization recommendations
- Staff scheduling insights
- Customer behavior analysis

Each new capability becomes a new specialized agent that collaborates with existing ones.

As we integrate deeper with Pet Pooja:
- Agents will understand restaurant operations better
- Real-time insights will become the norm
- Predictive analytics will guide decisions
- Multi-location analysis will scale easily

The agentic framework makes this possible, but the data makes it valuable.

## Key Takeaway

Agentic architecture isn't just a technical choice—it's a way to model how humans work. By creating specialized agents that collaborate, we can build systems that feel natural, are reliable, and scale as business needs grow.

But the framework alone isn't enough. The real value comes from connecting it to comprehensive, real-world data. By integrating with Pet Pooja—a platform that restaurants already trust and use daily—we're not asking them to change their workflow. We're enhancing it.

For restaurant owners overwhelmed by data requests, this approach transforms hours of manual work into seconds of conversation, powered by the data they're already generating in their day-to-day operations.`,
    author: 'Zaman Ishtiyaq',
    publishedAt: '2025-01-25',
    updatedAt: '2026-06-23',
    readTime: 12,
    category: 'AI',
    tags: ['AI', 'OpenAI', 'Agents', 'Pet Pooja', 'Restaurant Tech', 'Data Integration', 'FastAPI'],
    featured: true,
  },
  {
    slug: 'openai-agents-sdk-builders-guide',
    title: 'OpenAI Agents SDK: A Builder\'s Honest Guide',
    excerpt: 'A first-person account of building a multi-agent restaurant analytics system — what the four core SDK concepts mean in practice, how handoffs work, and what was genuinely hard.',
    content: `# OpenAI Agents SDK: A Builder's Honest Guide

**Quick answer:** The OpenAI Agents SDK is a Python framework for building systems where multiple AI agents collaborate, hand off tasks to each other, and call tools to interact with real data. It's well-suited for conversational interfaces over structured data, multi-step workflows, and anything that benefits from specialized agents working together. It's not a no-code tool — you'll write real Python and wrestle with prompt engineering. If you want a production-ready orchestration layer without building from scratch, it's worth the learning curve.

## The problem that sent me looking for this

A restaurant owner I know runs a mid-sized café group. Three locations, a Neon PostgreSQL database holding sales records, inventory counts, supplier invoices — the whole operation. She had all the data. She had zero easy way to ask questions of it.

"Can you just build me something where I type a question and it tells me which location sold the most pasta last Tuesday?" That was the brief. Casual. Completely reasonable.

What she was actually asking for was a natural language interface to a relational database, with charts when she wanted them, formatted summaries when she didn't, and no hallucinated numbers. That last part is the hard one.

I'd used raw function-calling with the Chat API before. It works, but the orchestration glue — deciding which tool to call, handling multi-step flows, routing between different capabilities — that's code you have to write and maintain yourself. The OpenAI Agents SDK promised to handle a lot of that scaffolding. I decided to find out if it delivered.

## What the SDK actually gives you

The SDK ships four core concepts. It's worth understanding each before you design anything.

**Agents** are the workers. Each agent has a name, a model, instructions (its system prompt), and a list of tools it can call. That's it. The simplicity is deliberate — you configure what the agent knows and what it can do, and the SDK handles the conversation loop.

**Tools** are functions your agent can call. You decorate a Python function with \`@function_tool\` and the SDK automatically generates the JSON schema for it. The agent sees the schema, decides when to call the function, passes arguments, and gets the return value back. Clean.

**Handoffs** let one agent transfer control to another. The first agent stays in the conversation history but the receiving agent takes over. This is what makes multi-agent architectures practical — you don't have to route everything through a single orchestrator.

**Guardrails** let you run validation logic before or after agent responses. You can use them to check output format, catch hallucinations, or refuse off-topic requests. I used them lightly, mostly for input sanitization.

## Why I chose four specialized agents instead of one

My first instinct was to build one agent and give it every tool. Query the database, plot charts, format responses — all in one place. I tried it. It was a mess.

The agent kept conflating responsibilities. It would try to plot data before querying for it. It would format a response and then also try to generate a chart nobody asked for. One big prompt trying to describe four different behaviors is a recipe for inconsistency.

Specialization fixed almost all of that. Here's what I landed on:

- **Sales Agent** — Queries the database for sales data, interprets results, answers questions about revenue, top items, location comparisons. Knows the schema.
- **Inventory Agent** — Same pattern but focused on stock levels, supplier data, reorder triggers.
- **Plotter Agent** — Gets activated only when the user asks for a chart ("show me," "visualize," "graph it"). Takes structured data and generates a chart via a plotting tool.
- **Response Agent** — Receives output from other agents and formats it into clean, readable summaries. Handles tone and presentation.

The Sales Agent hands off to the Plotter Agent when it detects a visualization request. The Response Agent formats the final output before it reaches the user. Each agent has one job, one set of tools, and a tight system prompt describing exactly that job.

This is more code to set up. But the reliability improvement is real.

## How the handoff actually works

The user asks: "Show me last week's top-selling items by location." The Sales Agent runs — it queries the database, gets the data, and then checks the user's intent. "Show me" is a visualization cue. The Sales Agent is configured to hand off to the Plotter Agent when it detects that intent.

In code, you define the Plotter Agent as a handoff target when you initialize the Sales Agent. The SDK handles the transfer — the Plotter Agent receives the structured data as context, calls its chart-generation tool, and returns a chart object to the frontend.

You need to be explicit in your agent instructions about when to hand off. If you're vague ("hand off when appropriate"), the agent will sometimes try to handle things itself. Specific trigger phrases in the system prompt work better: "If the user uses words like 'show', 'graph', 'plot', or 'visualize', hand off to the Plotter Agent immediately."

## Grounding agents to real data

Hallucinated numbers are a dealbreaker in a business analytics tool. The café owner needs to trust the figures. She's making purchasing decisions based on this output.

The most effective technique I found was schema introspection combined with temperature 0.1. Before the agent runs any query, it has access to a tool that pulls the current table schema from the database. The agent sees column names, data types, and relationships — the actual shape of the data, not a description written weeks ago in a prompt.

This does two things. First, the agent generates SQL that actually works, because it knows what columns exist. Second, it stops the agent from inventing fields that don't exist. Without schema access, agents confidently hallucinate column names.

Temperature 0.1 handles the rest. Data-grounded tasks need deterministic behavior. The tradeoff is that creative formatting suffers a bit — for that reason, the Response Agent runs at a slightly higher temperature (0.4) since its job is presentation, not precision.

## What was genuinely hard

**Debugging tool calls.** When an agent calls a tool and gets unexpected output, the failure mode is often silent. The agent absorbs the bad output and continues. The SDK has tracing built in, and it helps — but you still need to add your own logging inside each tool function. I wasted hours before I got disciplined about this.

**Orchestration loops.** Twice during development, I got the agents into a loop where Sales Agent handed off to Plotter Agent, which handed back to Sales Agent for more data, which handed back to Plotter. The SDK doesn't break loops automatically. You need maximum turn limits and clear handoff instructions.

**Prompt engineering for SQL.** Getting agents to generate correct SQL for complex joins is harder than it sounds. Giving the agent 2–3 example query patterns in the system prompt for the most common question types cut SQL errors by roughly 60%.

**Streaming with FastAPI.** Wiring streaming responses through FastAPI with server-sent events required careful handling of the async generator pattern. Not hard once you understand it, but the documentation is thin on this specific integration.

## When to use the Agents SDK — and when not to

**Use it when:**
- You have a genuinely multi-step workflow where different capabilities need to collaborate
- You want agents to call real tools (database queries, APIs, file operations) and act on results
- You're building something where specialization will produce better outputs than one generalist agent
- You're comfortable with Python and want a structured framework rather than raw API calls

**Don't use it when:**
- Your use case is a single-turn Q&A with no tool use. The Chat API is simpler and cheaper.
- You need deep observability out of the box. The tracing is decent but not production-grade monitoring. You'll supplement it.
- You're prototyping fast and don't want to think about agent design yet. Start with the API directly.

## My verdict

The SDK solved the actual problem. The café owner now types questions in plain English and gets answers backed by real database queries, with charts when she asks for them.

The learning curve was steeper than the documentation suggests. Orchestration loops, prompt engineering for SQL grounding, streaming integration — none of that is covered deeply. You learn it by doing it wrong first.

But the core architecture — Agents, Tools, Handoffs — is genuinely well designed. Once it clicks, building new capabilities is fast. I added the Inventory Agent in about a day once the Sales Agent was stable.

If you're building a conversational analytics tool, a multi-step workflow automation, or anything where specialized agents make sense, the SDK is worth your time. Budget for the debugging time. It's real.`,
    author: 'Zaman Ishtiyaq',
    publishedAt: '2026-06-26',
    readTime: 12,
    category: 'AI',
    tags: ['AI', 'OpenAI', 'Agents SDK', 'Agentic AI', 'Multi-Agent', 'Python'],
    featured: false,
  },
  {
    slug: 'why-temporal-for-ai-workflows',
    title: 'Why I Use Temporal for Long-Running AI Workflows',
    excerpt: 'After debugging silent partial failures in Argo for months, I migrated Fivetran connector pipelines to Temporal. Here\'s what durable execution actually means, and when it\'s worth the setup cost.',
    content: `# Why I Use Temporal for Long-Running AI Workflows

**Quick answer:** Temporal is a durable execution platform that runs your code as fault-tolerant workflows. If a step fails — an LLM timeout, a flaky API, a crashed worker — Temporal retries exactly that step, not the whole pipeline. For AI workflows specifically, where individual calls can hang for 30 seconds or silently fail, this changes how reliable your system can actually be.

We had an Argo workflow that synced connector metadata from Fivetran into our internal catalog. It ran fine, mostly. But "mostly fine" in data pipelines means "broken in ways you don't find out about until 3am."

The workflow would fail midway. Argo would mark it as failed, but the partial writes had already gone to the database. The next run would start from scratch, sometimes doubling records, sometimes skipping updates. Retry logic was hand-rolled in the YAML. Every edge case was someone's personal contribution to a growing ball of undocumented YAML mud.

We were migrating this to Temporal as part of moving our connector infrastructure to Automation Engine. That's when I got a proper look at what durable execution actually means in practice.

## What broke with Argo

Argo Workflows is great for batch jobs and simple DAGs. It's Kubernetes-native, has a clean UI, and the community is solid. The problems showed up when we started building workflows that had real external dependencies.

**Silent partial failures.** A workflow would complete steps 1 through 6, fail on step 7, and Argo would flag the whole thing as failed. But steps 1 through 6 had already written data. The next retry would run from step 1, giving us duplicate writes, missing foreign keys, or stale state depending on which step had side effects.

**Manual retry logic.** Every step that needed retry behavior needed its own retry block in the YAML. Want exponential backoff with jitter? That's a custom wrapper or a templating hack.

**No state between steps.** Passing data between Argo steps meant writing to shared storage (usually S3) and reading it back. It added latency, a failure point, and made debugging a treasure hunt across logs and buckets.

The killer issue for AI workloads: LLM calls. A step that calls GPT-4 might take 10 seconds, might take 30, might time out, might return a rate-limit error at peak hours. Argo's timeout and retry model wasn't designed for this.

## What Temporal actually is

Temporal splits your workflow into two concepts worth understanding clearly before you write a single line of code.

**Workflows** are the orchestration layer. They define the sequence of steps, the logic, the branching. Workflows are durable — Temporal records every event to a history log. If your worker process crashes mid-workflow, when it comes back up, Temporal replays the history and resumes exactly where it left off. The Workflow code must be deterministic for this to work.

**Activities** are the actual units of work. Each Activity is a function that does something: calls an API, writes to a database, invokes an LLM. Activities can be retried independently. If Activity 8 fails, Temporal retries Activity 8. Activities 1 through 7 are done. Their results are cached in the workflow history.

This distinction is the whole game. Retries become surgical instead of blunt. Failures don't cascade backwards.

## The pattern I use for AI pipelines

Here's the concrete pattern for an LLM-powered data pipeline. Polling an external API, enriching the response with an LLM, writing the result to a database:

\`\`\`python
@workflow.defn
class EnrichmentWorkflow:
    @workflow.run
    async def run(self, connector_id: str) -> dict:
        raw_data = await workflow.execute_activity(
            fetch_connector_metadata,
            connector_id,
            start_to_close_timeout=timedelta(seconds=30),
            retry_policy=RetryPolicy(maximum_attempts=3),
        )

        enriched = await workflow.execute_activity(
            call_llm_enrichment,
            raw_data,
            start_to_close_timeout=timedelta(seconds=60),
            retry_policy=RetryPolicy(
                maximum_attempts=5,
                initial_interval=timedelta(seconds=2),
                backoff_coefficient=2.0,
                non_retryable_error_types=["InvalidInputError"],
            ),
        )

        result = await workflow.execute_activity(
            write_to_catalog,
            enriched,
            start_to_close_timeout=timedelta(seconds=15),
            retry_policy=RetryPolicy(maximum_attempts=3),
        )

        return result
\`\`\`

The LLM activity gets a 60-second timeout and up to 5 retries with exponential backoff. If it hits a rate limit on attempt 2, Temporal waits and retries. If it gets an \`InvalidInputError\`, it stops immediately — no point retrying bad input.

If the worker process crashes between step 2 and step 3, Temporal knows step 2 completed (it's in the history). When the worker restarts, it picks up at step 3. The LLM call doesn't re-run. That's the part that actually saves you.

## Why Temporal fits AI workloads specifically

**Timeouts that don't lie.** Temporal's \`start_to_close_timeout\` is per Activity execution. You set it at the call site, close to the code making the HTTP request. When something times out, you know exactly which Activity timed out.

**Long waits without blocking.** Some AI pipelines need to wait on an async process — a batch job, a human review, an external enrichment service that takes hours. Temporal Workflows can sleep using \`workflow.sleep()\`. The worker process isn't blocked during that wait.

**Audit history for free.** Every Activity, every input, every result is recorded in the workflow history. When something goes wrong, you open the Temporal UI and read what happened. No reconstructing from logs across six services.

## Before and after: one Fivetran connector step

**Before (Argo YAML):**

\`\`\`yaml
- name: enrich-metadata
  retryStrategy:
    limit: 3
    backoff: "2m"
  container:
    image: connector-worker:latest
    command: [python, enrich.py, "{{inputs.parameters.connector_id}}"]
  outputs:
    artifacts:
      - name: enriched-metadata
        path: /tmp/enriched.json
        s3:
          bucket: connector-artifacts
          key: "{{workflow.name}}/enriched.json"
\`\`\`

Failure here meant the artifact might or might not exist in S3. The next step would try to read it. If the artifact was corrupt or half-written, the next step would fail with a cryptic S3 error, not an enrichment error.

**After (Temporal Activity):** The Activity function returns the enriched data directly. Temporal stores it in the workflow history. The next Activity receives it as a typed Python argument. No S3. No artifact path. No ambiguity about whether the file exists.

When the Activity fails, you see a Python exception in the Temporal UI, not an S3 key-not-found error that sends you on a 45-minute debugging detour.

## What I found hard

**Local dev is a chore.** You need to run the Temporal server locally (or use their cloud). Docker Compose with a separate service, a UI, and a database. It's overhead on every developer's machine.

**Workflow determinism is a constraint you feel.** No \`datetime.now()\`, no random number generation, no direct I/O in Workflow code. Push all side effects into Activities. This is the right design, but it takes a mental shift.

**Signals and Queries.** The pattern for implementing them in the Python SDK is not obvious the first time. I spent a day building a signal handler before I understood that the Workflow had to explicitly loop and wait for signals using \`workflow.wait_condition\`.

## When I'd reach for Temporal vs something simpler

**Reach for Temporal when:**
- The pipeline has 5+ distinct steps with external dependencies
- Any step calls an LLM, a slow API, or something that fails unpredictably
- Partial failures leave your data in inconsistent states
- You need long waits (hours, days) inside the pipeline

**Reach for a simpler queue (Celery, BullMQ, SQS + Lambda) when:**
- The workflow is really just "run this job and retry on failure" — one or two steps
- The team doesn't have bandwidth to learn a new SDK and run a new service
- Idempotency is easy and failures are recoverable by re-running from scratch

The migration from Argo to Temporal wasn't free. It took time to learn the SDK, time to set up the infrastructure, and time to rewrite the workflows. The bet is that the operational reliability pays back that investment when you're not debugging silent partial failures at 3am.

So far, that bet is paying off.`,
    author: 'Zaman Ishtiyaq',
    publishedAt: '2026-06-26',
    readTime: 10,
    category: 'Development',
    tags: ['Temporal', 'AI', 'Workflows', 'Python', 'Durable Execution', 'Atlan'],
    featured: false,
  },
  {
    slug: 'freelance-developer-kashmir-international-clients',
    title: 'I\'m a Full-Stack Developer from Kashmir. Here\'s What I\'ve Learned About International Client Work.',
    excerpt: 'Location matters less than reliability. After years working remotely with Goldman Sachs, BrightEdge, and Atlan from Srinagar, here\'s what actually matters for landing and keeping international clients.',
    content: `# I'm a Full-Stack Developer from Kashmir. Here's What I've Learned About International Client Work.

**Quick answer:** Yes, you can work with international clients from Srinagar, Kashmir. I've spent years building software for US and UK companies — Goldman Sachs, BrightEdge, Atlan — all while based here. What it takes isn't a different location. It's async-first communication, a portfolio that ships real products, and the discipline to treat every timezone gap as a solvable problem, not an excuse.

## Why I'm writing this

People make assumptions.

When I say I'm from Srinagar, Kashmir, the conversation sometimes stalls. Not maliciously. Just the unspoken inference: *remote, sure, but... that remote?*

I graduated from IIT Bhubaneswar in Computer Science. Cleared JEE in 2015, top 0.05%. Spent five years at Goldman Sachs. Moved to BrightEdge, a US SEO tech company. Now I'm at Atlan, a data cataloging platform used by global data teams. Every single one of these has been a global company, not a local one.

Kashmir didn't stop any of it. But it did shape *how* I work.

## What IST actually means for international work

The timezone is awkward. Let's be honest about that.

IST is UTC+5:30. That puts you 10.5 hours ahead of US Eastern, which means a 9am New York standup is 7:30pm for you. That's not sustainable five days a week.

But here's what people miss: IST overlaps *beautifully* with UK and EU hours. London is only 4.5 hours behind. Central Europe is 3.5 hours. If you target UK and European clients, your working day lines up almost exactly. I've had calls at 2pm IST that were 9:30am in London. That's a normal morning meeting for both of us.

For US clients, the answer is async-first. You send the update before you sleep. They review it when they wake up. When it works well, you're essentially giving clients a 24-hour turnaround loop — which is actually a selling point if you frame it right.

## How I actually get clients

The portfolio is the pitch. Not the resume. Not the degree.

I've built projects for Ali Saffudin, an artist and musician, and for Architex, an architecture platform. These aren't side projects to fill a GitHub profile. They're shipped products that someone actually uses. When a prospective client sees that, they're not wondering where I went to school.

My niche helps. I focus on AI/LLM integrations, iOS development, and Next.js. These are specific enough that when someone searches for a developer with that stack, the shortlist is short. Generalists are competing in a crowd. Specialists get the inquiry.

I've never once been asked to verify my IIT degree by a freelance client. I've been asked to walk through my work, explain decisions, and in one case, fix a live bug on a call while someone watched. That's the actual interview.

The pipeline, in practice:

1. Portfolio site with real case studies and live links
2. Niche focus in my bio (AI integrations, Next.js, iOS)
3. First-contact response under 4 hours during my working day
4. A Loom walkthrough ready to send within 24 hours of any serious inquiry

## The communication reality

Bad communication kills client relationships faster than bad code.

With freelance clients, the loop is fast. They don't have visibility into your work. They can't walk to your desk. The only thing they know is what you tell them and what you ship.

So I over-communicate. Not in a way that spams anyone's inbox. I mean: I send a short update at the end of every working session. I flag blockers *before* they become delays. I confirm scope in writing before I start any significant chunk of work. If something is going to take longer than I said, I say so early.

The developers who lose international clients usually lose them not because of code quality but because the client felt uninformed. Silence feels like negligence when you're 10 time zones apart. An honest 3-sentence update at the end of your day prevents 90% of that anxiety.

Loom is underrated for this. Instead of writing a five-paragraph email to explain a UI decision, I record a 90-second video. Clients watch it on their schedule, rewind, forward it to a teammate. It's faster for me to record and faster for them to absorb.

## Portfolio beats resume for international freelancers

An international client in San Francisco or London cannot call IIT Bhubaneswar to verify my grades. They won't. They can, however, click a link and try my product in 30 seconds. That asymmetry is everything.

A portfolio case study should answer three questions: What was the problem? What did you build? What happened after? Skip the tech stack bullet list. Tell the story.

## The Ali Saffudin project: how a real client engagement works

Ali reached out with a straightforward brief: he needed a website that felt like his music. Not a template. Something with texture and identity.

The first thing I did was ask questions before touching any code. What does your audience expect when they land on the site? Where do you want them to go? What do you want to *not* look like? That conversation took two async back-and-forths over two days. By the end, I had a clear direction and he had confidence I was listening.

I sent a Loom walkthrough of the initial design concept before building it. Saved probably three revision rounds. He approved with minor tweaks.

The gap between brief and shipped was tight. What made it work wasn't speed for its own sake. It was that every step was visible. He knew where the project was because I told him. That's the whole job, in some ways.

## Honest advice for Kashmir developers who want to work internationally

Internet in Srinagar can be unstable. I keep a mobile hotspot as a backup. I schedule calls with enough lead time to switch if the main connection drops. These are just logistics. Annoying, but manageable.

**Stop waiting until you feel "ready."** Ship something small. Put it online with your name on it. The portfolio builds while you're learning, not after.

**Pick a niche and be explicit about it.** "Full-stack developer" is background noise. "Next.js developer who integrates LLMs into SaaS products" is a search query with a short result list.

**Respond fast, always.** Your first contact response time is the first data point a client collects about how you work.

**Don't apologize for where you are.** Your timezone, framed right, is an asset. Your work ethic, documented in shipped products, speaks louder than any geography.

Location matters less than reliability. Reliability shows up as communication. I'm from Srinagar. I build software for companies in the US, UK, and globally. These two facts aren't in tension. They're just my context.`,
    author: 'Zaman Ishtiyaq',
    publishedAt: '2026-06-26',
    readTime: 9,
    category: 'Freelance',
    tags: ['Freelance', 'Remote Work', 'Kashmir', 'Client Work', 'Full-Stack'],
    featured: false,
  },
  {
    slug: 'building-muhasaba-islamic-journal-app',
    title: 'How I Built Muhasaba — An AI-Powered Islamic Journal App',
    excerpt: 'The gap in Islamic apps wasn\'t Quran players or prayer trackers — it was the daily practice of muhasaba. Voice journaling with Whisper, AI guidance from Quran and Sunnah, and a content strategy for App Store discovery.',
    content: `# How I Built Muhasaba — An AI-Powered Islamic Journal App

**Quick answer:** Muhasaba is a free iOS journaling app built on the Islamic practice of daily self-accounting. You write or speak your reflection, and the app returns AI-generated guidance drawn from Quran and Sunnah — not generic self-help advice. It tracks virtues like sabr and shukr, sends dhikr reminders, and runs on a no-ads Pro subscription model. [Download it on the App Store](https://apps.apple.com/app/islamic-journal-muhasaba/id6774862794) or visit [muhasaba.me](https://muhasaba.me).

## The problem I was actually trying to solve

Every night after Isha, I'd sit with my thoughts and try to do muhasaba — reflecting on my day through the lens of my deen. Was I patient? Did I show gratitude? Did I catch myself when I slipped?

The problem wasn't motivation. It was tooling.

Generic journaling apps — Day One, Notion, even the Notes app — are built for productivity or memory. They don't understand the difference between muhasaba and muraqaba. They don't know that shukr is more than just "gratitude." They definitely don't pull from hadith when you write about a moment you lost your temper.

Islamic apps are better on the deen side, but most are Quran players or prayer trackers. The reflective, journaling-focused space was almost empty.

I kept a text file for months. Plain text, no structure, no prompts, no feedback. I'd write a paragraph about something I struggled with and then just... close the file. There was no response. No framework. No reminder of what the Prophet, peace be upon him, said about patience in hardship.

That gap is what I built Muhasaba to fill.

## Why the existing Islamic app market misses this

There are some genuinely good Islamic apps. Muslim Pro handles prayer times. Pillars handles Quran learning. But when it comes to *reflection*, the space is thin.

The reason is nuance. Muhasaba isn't a mood tracker. It isn't a gratitude log. It's self-accounting in front of Allah — an honest audit of your intentions, your actions, your character. The Islamic scholars wrote extensively about it. Ibn Qayyim, al-Muhasibi. This is centuries-old spiritual technology.

The apps that try to cover this usually either go too generic (basically a journaling app with an Islamic skin) or too rigid (structured checklists that miss the personal, emotional reality of the practice). What I wanted was something that *responds* to what you actually wrote — not a template you fill in.

That's where AI changed everything.

## How I built the voice journaling feature

One of the earliest decisions I made was: this app needs to support voice input.

Here's why. For many Muslims, the natural time to do muhasaba is right after Salah. You're already in a reflective state. You've just finished prayer. The last thing you want to do is unlock your phone, open an app, and start typing.

Speaking is more natural in that moment.

I used OpenAI's Whisper API for transcription. The integration itself is straightforward — record audio, send it to the Whisper endpoint, get back a transcript. But the UX decisions mattered more than the API call.

I wanted the recording experience to feel calm, not clinical. No waveform animations that look like a podcast studio. A simple mic button, a soft visual pulse, and silence otherwise. When you're done, the transcript appears for you to review before the AI processes it.

I tested the early voice builds by actually using them after Fajr. The first version had a "tap and hold to record" interaction that felt awkward when you're half-asleep. Changed it to a tap-to-start, tap-to-stop model and that friction dropped immediately.

## Crafting the AI prompt — the hard part

The AI guidance is the core of the product. Getting it right took longer than any other part of the build.

The failure mode I was trying to avoid: generic therapeutic advice. "It sounds like you're being hard on yourself. Try to practice self-compassion." That's not what a Muslim doing muhasaba needs. It misses the entire frame.

What I wanted instead: a response that meets the user where they are and responds through the lens of the Quran and Sunnah.

Here's roughly how I approached the system prompt:

- Establish the role: this is an AI guide for the Islamic practice of muhasaba, not a general journaling assistant
- Instruct it to reference specific ayat or hadith relevant to what the user wrote, with proper attribution
- Prioritize sincerity and gentleness — the tone of a wise elder, not a chatbot
- Explicitly prohibit generic self-help language and therapeutic framing
- Anchor responses in the four virtues the app tracks: sabr, shukr, tawbah, tawakkul

The trick with Quran and Sunnah citations is specificity. A vague "as Allah says, be patient" feels hollow. Citing Surah Al-Baqarah 2:286 — "Allah does not burden a soul beyond that it can bear" — with a sentence connecting it to *what the user actually wrote* is a completely different experience. The prompt engineering is mostly about forcing that specificity.

I also added an explicit instruction: if the user writes something that requires scholarly guidance beyond the scope of this tool, acknowledge the limitation and encourage them to seek a knowledgeable person.

## Why SwiftUI

Straightforward choice for this project. I wanted to ship fast and maintain the app as a solo developer. SwiftUI's declarative syntax lets me iterate quickly. The virtue-tracking UI — the sabr/shukr/tawbah/tawakkul display — would have taken much longer to build in UIKit.

The one place SwiftUI pushes back is complex animations and certain custom controls. For this app, the UI is intentionally calm and minimal, so that pressure rarely came up.

## The /learn content strategy

Building the app is only half the problem. Discovery is the other half.

The App Store has real search limitations. So I built a content layer at [muhasaba.me/learn](https://muhasaba.me/learn) — articles targeting the actual questions people search for:

- [What is muhasaba in Islam?](https://muhasaba.me/what-is-muhasaba)
- [Islamic journaling prompts](https://muhasaba.me/learn/islamic-journaling-prompts)
- What is muraqaba?
- Best Islamic apps for daily practice

The insight here is that people searching "Islamic journaling prompts" on Google are exactly the people who need this app. They're already doing some version of the practice. They just don't have a tool built for it. A well-written article that answers their question, introduces the app naturally, and links to the App Store is a far more durable acquisition channel than paid ads.

Each article is written for humans first, search visibility second. No keyword stuffing. Just genuinely useful content about the practice.

## Pricing: no ads, ever

This was a values decision before it was a business one.

Ads in a spiritual reflection app feel wrong to me. You've just written something vulnerable and honest — a moment you failed, something you're asking for forgiveness about. The last thing that moment should be followed by is a banner ad.

Muhasaba is free to download. The free tier covers a set number of reflections per month so you can genuinely try it. Pro unlocks unlimited reflections, full virtue history, and any features I add going forward.

No ads. No data selling. That's a hard constraint, not a launch-day promise I'll revisit later.

## What I learned building this

**Specificity beats breadth.** An app that deeply serves one practice — muhasaba — is more useful than an Islamic super-app that skims ten things.

**The AI prompt is a product decision, not a technical one.** How the AI responds determines whether the app feels spiritually grounded or like a chatbot wearing a thobe. That prompt took weeks of iteration and is still evolving.

**Voice input changes who can use the app.** Older users, users with accessibility needs, users who prefer to speak — Whisper opened the app to people who wouldn't have engaged with a text-first interface.

**Content is underrated for app discovery.** The /learn articles bring in users who are already motivated, already curious, already practicing. They convert better than any other channel I've tried.

If you practice muhasaba or want to start, [download Muhasaba on the App Store](https://apps.apple.com/app/islamic-journal-muhasaba/id6774862794) and try it after your next Salah. Free to start. No ads.`,
    author: 'Zaman Ishtiyaq',
    publishedAt: '2026-06-26',
    readTime: 10,
    category: 'iOS',
    tags: ['iOS', 'Swift', 'SwiftUI', 'AI', 'OpenAI', 'Islamic Apps', 'App Store'],
    featured: true,
    projectId: 'muhasaba',
  },
  {
    slug: 'building-spree-ai-wishlist-ios-app',
    title: 'How I Built Spree — An AI Wishlist App with Virtual Try-On',
    excerpt: 'My wishlist was screenshots in a Notes app. I built Spree to fix that — any product URL from any store, swipe-to-rank for decisions, and AI virtual try-on for clothes. Native SwiftUI, live on the App Store.',
    content: `# How I Built Spree — An AI Wishlist App with Virtual Try-On

**Quick answer:** Spree is a free iOS wishlist app that lets you paste any product URL from any online store and automatically imports the title, price, and image. It includes swipe-to-rank for decision-making and an AI virtual try-on feature for clothing. You can find it at [tryspree.app](https://tryspree.app) or search "Spree Wishlist" on the App Store.

## The real problem with online wishlists

My wishlist was a mess of screenshots inside a Notes app. Hundreds of them. No prices, no links, no order. Just a graveyard of things I'd once wanted and completely forgotten about.

Talk to almost anyone who shops online and they'll describe the same thing. Screenshots in Notes. Maybe a browser bookmarks folder that spirals into chaos. Amazon Wishlist if everything you want happens to be on Amazon, which it rarely is.

That gap bothered me long enough that I eventually just built something.

The existing tools solve the wrong problem. Amazon Wishlist works great — inside Amazon. The moment you find something on ASOS, Zara, or a small brand's Shopify store, you're back to screenshots.

Pinterest fills a different role. It's mood board energy. Discovery. You're not going to Pinterest to decide between two specific jackets you're ready to buy. That's fine. But inspiration and purchase decisions are different mental modes.

What I actually wanted was something that could hold items from *any* store, help me rank them so I could figure out what I actually wanted most, and — this is the part that kept coming back to me — show me what clothes would look like on me before I committed.

## Why I chose Swift/SwiftUI

I'll be direct: this app has a heavy gesture layer. The swipe-to-rank mechanic is the core interaction. Cards need to feel physical. The drag resistance, the rotation, the snap-back animation — all of it has to feel instant.

I prototyped the swipe UX in React Native first. It worked. It was also obviously not good enough. There was a subtle latency in the gesture recognition that made cards feel slightly detached from your finger. On paper the frame rate was fine. In practice it felt off.

SwiftUI with native gesture recognizers removed that entirely. The cards track your finger at 120Hz on supported hardware. That's the difference between "this feels like a real app" and "this feels like a web wrapper."

For a reading app or a form-heavy tool, React Native is a perfectly reasonable choice. For an app where the primary interaction is physical, native wins.

## How product import actually works

The core promise of Spree is simple: paste a URL, get a clean product card. Making that actually work across thousands of different store layouts is the hard part.

### The scraping layer

Most e-commerce sites include Open Graph meta tags. \`og:title\`, \`og:image\`, \`og:price:amount\`. These were designed for social sharing previews, but they're exactly what I needed. For well-structured stores — Shopify, major retailers — Open Graph alone gets me 80% of the way there.

The remaining 20% is messier. Sites that don't populate OG tags need structured data parsing (JSON-LD product schema) as a fallback. And then there's a small category of sites that require deeper parsing of the HTML itself.

I wrote the import service to cascade through those layers in order. Try OG tags first. Fall back to JSON-LD. Fall back to heuristic HTML parsing. It's not perfect — nothing scraping arbitrary HTML will be — but the success rate is high enough that the core experience works.

### Why not a third-party API?

I looked at services that offer structured product data extraction. Some of them are good. All of them add cost per request, which is a problem for a free tier app. More importantly, they add latency I couldn't control. The import had to feel fast or the UX would break. I wanted the card to appear in under two seconds. Building the parser myself gave me that control.

## The swipe-to-rank mechanic

Most wishlists are just lists. You add things and they sit there. The list gets longer and you never actually decide.

Swipe-to-rank forces a decision. You see two items from your wishlist and you swipe to say which one you want more. Do it enough times and Spree has a ranked list of what you actually want, not just what you saved.

The psychological mechanism is borrowed from pairwise comparison. It's cognitively much easier to answer "do I want this more than that?" than "how much do I want this on a scale of 1 to 10?" One question at a time. Binary answer. The ranking emerges from the comparisons.

It also just feels satisfying. Swiping through your wishlist is genuinely more enjoyable than staring at a static list. That's not an accident.

## AI virtual try-on: the feature that makes Spree different

The idea was simple: tap on any clothing item in your wishlist and see it on yourself. Take a photo, or use one you already have. The AI composites the garment onto your body in a way that accounts for your shape, the angle, the lighting.

I evaluated a few approaches here. Diffusion-based try-on models have gotten genuinely impressive. I settled on an API-based integration with a specialized virtual try-on service rather than running inference locally or building a fine-tuned model myself. Running a garment try-on model locally on an iPhone would be wildly impractical at current model sizes.

The results are good enough to be useful. Not perfect — AI try-on at this stage still struggles with complex patterns and very fitted garments — but good enough that you can tell whether a piece is approximately your vibe and roughly how it might fit.

The value of virtual try-on isn't perfect photorealism. It's directional confidence. If the AI try-on looks wrong on you, the real thing probably won't work either. That's the actual use case.

Your photo never leaves the request pipeline in a way that's stored or used for training. The API I use processes and discards. No persistent storage of user photos.

## The landing page: static HTML

[tryspree.app](https://tryspree.app) is static HTML and vanilla JS. No framework. No server.

I could have built it in Next.js. I know Next.js. It would have been overkill for a marketing page with no dynamic data needs. Static HTML loads faster, costs less to host, and has zero server surface area to maintain.

Use the simplest tool that solves the problem. The landing page needed to load fast, look good, and direct people to the App Store. Static HTML does all of that.

## What I learned building Spree

**Scraping is always messier than you expect.** There's no such thing as "all product pages follow this format." Budget time for edge cases. There will be many.

**Native performance isn't optional for gesture-heavy apps.** The swipe mechanic is the product. It had to feel real.

**AI features set expectations fast.** The try-on feature is genuinely useful. It's also the first thing users notice when it's wrong. If you ship an AI feature, the failure mode is as visible as the success mode. Ship it anyway, but be transparent about its limits.

**The simple version ships.** I had a more complex ranking algorithm planned. I had a social feed concept. I had browser extension ideas. None of that is in the 1.0. What shipped was: paste a URL, rank your list, try on clothes. The rest can come later.

Spree is free on the App Store with an optional Pro subscription. No ads.

[tryspree.app](https://tryspree.app)`,
    author: 'Zaman Ishtiyaq',
    publishedAt: '2026-06-26',
    readTime: 10,
    category: 'iOS',
    tags: ['iOS', 'Swift', 'SwiftUI', 'AI', 'App Store', 'Shopping', 'Virtual Try-On'],
    featured: true,
    projectId: 'spree',
  },
  {
    slug: 'ai-lipsync-ugc-platform-elevenlabs',
    title: 'Adding AI Lipsync and a Generative Marketing Studio to a UGC Platform',
    excerpt: 'Adding lipsync to ReelRocket — why avatar selection beats user photo uploads, how the ElevenLabs pipeline works, and what the ByteDance OmniHuman and Seedance models mean for the future of UGC tooling.',
    content: `# Adding AI Lipsync and a Generative Marketing Studio to a UGC Platform

**Quick answer:** You can add AI lipsync to a UGC platform by combining ElevenLabs TTS with avatar-based animation instead of user photo uploads. This cuts privacy concerns, reduces friction, and keeps output quality consistent. Pair that with client-side video export and you have a system that scales without ballooning server costs.

I've been heads-down on [ReelRocket](https://ugccreatorsfrontend.vercel.app) for the past few weeks, and two features have been competing for my attention at the same time: a lipsync studio and a generative marketing suite. One is shipping, one is still in research mode. This post covers both because the decisions behind each one are connected.

## What just shipped: product review video tiers

Before I get into lipsync, I want to briefly cover what just landed in PR #3: tiered product review videos.

The feature itself isn't complicated. Users pick Basic, Medium, or Pro when they request a product review video, and the backend adjusts the prompt depth, video length, and quality settings accordingly. But the reasoning behind it took longer to land on than the code did.

The problem with a single output level is that it serves no one perfectly. A solo creator testing a $12 face wash doesn't need a three-minute, studio-quality breakdown. A brand running a paid campaign does. Tiering lets both users get what they actually need, and it gives the platform a natural pricing surface without artificially limiting core functionality.

It also changes how people interact with the tool. When you give someone a "Pro" option, they take the output more seriously. That shapes the use case they bring to the platform.

## Why I chose avatar selection over image upload for lipsync

Most lipsync demos you see online follow the same pattern: user uploads a photo, system animates it to match audio. It looks impressive in a demo. In production, it creates problems.

The first problem is quality variance. A headshot taken in bad lighting, at an odd angle, or with a cluttered background produces a noticeably worse lipsync result. Users blame the tool, not their photo. That's a support and retention problem.

The second problem is privacy. Asking users to upload their face for processing through a third-party API pipeline raises questions most platforms don't want to answer in their terms of service.

Avatar selection sidesteps both. Users pick from a set of pre-built AI avatars. The quality baseline is fixed because you control the input. There's no privacy surface. And the UX matches what's already on the hooks and demo pages in ReelRocket, so new users don't have to learn a new interaction model.

The consistency argument is underrated here. When every lipsync output starts from the same high-quality avatar assets, you can tune the system once and it works for everyone. With user photo uploads, you're essentially running a different pipeline for every input.

## How the lipsync pipeline actually works

The architecture follows a pattern I first saw in the open-generative-ai reference implementation and adapted to fit ReelRocket's existing patterns.

### Step 1: Script input and TTS via ElevenLabs

The user types or pastes a script. ElevenLabs converts it to audio. This part is straightforward — POST the script, get audio back, store it in Cloudflare R2.

The storage pattern here is identical to what handles hooks and demo videos elsewhere in the platform. That consistency matters more than it sounds. When you're debugging at 1am, knowing that all generated assets live in the same R2 bucket structure with the same naming convention saves real time.

### Step 2: Avatar selection and lipsync animation

The selected avatar asset and the generated audio file go into the lipsync pipeline. The avatar is animated to match the audio timing. The result is stored back in R2.

### Step 3: History tab

One thing I added early that I'm glad about: a history tab showing past lipsync generations. Users iterate. They tweak the script, regenerate, compare. Without history, every generation is a dead end. With it, the tool feels like a workspace.

## What I'm researching: the generative AI marketing studio

This is still in the investigation phase, but the model landscape has moved fast and it's worth documenting.

The starting point is the open-generative-ai architecture. It's a clean reference for how to structure a generative video studio, and it gave me a framework for thinking about what a marketing studio would look like inside ReelRocket.

### ByteDance models worth watching

Through testing on Kie.ai's model marketplace, I've been evaluating three ByteDance models that are directly relevant to UGC:

**Seedance 2.0 and 2.5** handle general video generation. The output quality is noticeably better than earlier open-source alternatives for product-focused content. Seedance 2.5 handles motion consistency well, which matters for demo-style videos where a product needs to stay in frame.

**OmniHuman 1.5** is the more interesting one for this use case. It generates talking-head video from a single image plus an audio file — the same workflow as the lipsync feature, but with a different model underneath. This opens the door to brand avatar creation from a product mascot or spokesperson photo without requiring video footage as input.

**Volcengine Lip Sync API** is ByteDance's own lipsync offering, available through the same Kie.ai marketplace. I haven't benchmarked it against the current ElevenLabs-driven pipeline yet, but it's on the list.

The reason all three matter together is that they suggest a coherent marketing studio workflow: generate a script (existing), generate audio (ElevenLabs), generate a talking-head video (OmniHuman), optionally add B-roll or product footage (Seedance). That's a full UGC ad in a few API calls.

## The client-side video export decision

This one came down to cost and scale.

The existing demo video feature runs ffmpeg on the server. That's fine for low volume. It doesn't scale cleanly when you add lipsync generations, which can be heavier to process. Running ffmpeg on every export means server compute costs that grow directly with usage.

The alternative: move final video export to the client side. The user's browser does the processing. This is now live on the hooks page, the demo page, and the automations section.

The tradeoff is that slower machines will have slower exports. That's real. But for the target user — a creator or small brand running TikTok campaigns — the machine doing the export is almost always a reasonably modern laptop, and the files aren't large.

The bigger win is that the server cost for export drops to near zero. That changes what's economically viable to offer at lower tiers.

## What I've learned building this

**UX consistency compounds.** Every time I've mirrored an existing ReelRocket pattern (avatar selection, R2 storage, history tabs), onboarding the feature has been faster and bugs have been easier to trace. New patterns introduce new failure modes.

**Model marketplaces change the economics.** Two years ago, adding talking-head video to a platform meant building or fine-tuning your own model. Now Kie.ai and similar marketplaces put Seedance and OmniHuman behind a straightforward API. The barrier is integration work, not ML work.

**Tiers force clarity.** Shipping the Basic/Medium/Pro review tiers made me think harder about what actually differentiates each output level. That thinking made the prompts better and the feature more useful.

The lipsync feature is shipping soon. The marketing studio is still in research, but the model landscape is mature enough that it's more an integration project than a research project at this point.`,
    author: 'Zaman Ishtiyaq',
    publishedAt: '2026-06-26',
    readTime: 11,
    category: 'AI',
    tags: ['AI', 'UGC', 'Lipsync', 'ElevenLabs', 'Video Generation', 'Marketing', 'ReelRocket'],
    featured: false,
    projectId: 'ugc-ai-platform',
  },
  {
    slug: 'ai-automations-small-business-what-actually-works',
    title: 'What AI Automations Can Actually Do for a Small Business (And What They Can\'t)',
    excerpt: 'Most small businesses drown in manual tasks that follow a predictable pattern: pull data, analyze it, decide, act. That pattern is exactly what AI automations are built for — but only when the conditions are right.',
    content: `# What AI Automations Can Actually Do for a Small Business (And What They Can't)

**Quick answer:** AI automations for small businesses aren't chatbots. They're systems that pull real data from your tools, analyze it with a language model, make a decision, and write results back somewhere useful — a database, a CRM, a Slack channel. They work well for repetitive, data-driven tasks with clear inputs and outputs. They don't work well for anything requiring judgment, strategy, or relationship-building. If you have a task that takes someone 1+ hours per week and follows a predictable pattern, it's probably automatable.

---

I was talking to a restaurant owner about his reporting problem. Every Monday morning, one of his managers would spend two hours pulling sales data from their POS system, dropping it into a spreadsheet, and writing a summary for ownership. Same process. Every week. Without fail.

It wasn't a hard job. It was a predictable one. Pull data. Analyze it. Format it. Send it.

That's the pattern I look for. And once I see it, I know the job belongs to a machine.

## The Real Problem: Manual Work That Shouldn't Be Manual

Most small businesses aren't drowning in complex problems. They're drowning in repetitive ones.

Think about the manual tasks that eat time at a typical small business. Someone exports a report from one system and pastes it into another. Someone checks the CRM, writes follow-up emails, logs the activity. Someone reads through submitted forms, decides who qualifies, and sends out next steps.

These tasks feel different from each other. They're not. Underneath the surface, they all follow the same structure: pull data from somewhere, analyze or filter it, make a decision based on rules, act on that decision.

That four-step pattern — pull, analyze, decide, act — is exactly what AI automation handles well. The LLM sits in the middle, handling the "analyze and decide" step. Everything else is just connecting the right data sources.

The bottleneck isn't usually the analysis. It's the human time wasted on the pull and the act.

## What Actually Works

### Data Analysis and Reporting

This is where I've seen the clearest wins. Take the restaurant system I built. The owner wanted to stop waiting for weekly summaries. He wanted to ask questions and get answers immediately.

So I built a system where he types a question in plain English, an agent queries the database, an LLM interprets the results, and a response comes back in seconds. "How did coffee sales change after the price increase?" gets a real answer, not a scheduled report.

The same pattern applies to almost any business with structured data — sales pipelines, inventory counts, customer behavior, ad spend. If the data exists somewhere, an automated system can analyze it and surface what matters.

### Document Processing

Offer letters, invoices, contracts, application forms. Documents that follow a template and need to be read, classified, and acted on.

This is straightforward work for a language model. You feed it a PDF, tell it what to extract, and it pulls out the relevant fields with high accuracy. Connect that to a database write or a CRM update and you've eliminated an entire category of manual data entry.

I built exactly this kind of system for offer letter analysis. Upload a document, get back a structured breakdown of compensation, risk factors, and contract terms. The LLM reads what a human would read, in seconds.

### Content Generation Pipelines

Drafting product descriptions, generating weekly update emails, creating variations of ad copy. These work well when the content follows a clear format and the inputs are structured.

The key word is "pipelines." The automation doesn't just generate content — it pulls the right source data, generates the draft, and routes it for review or posts it directly. That full loop is what makes it useful.

### Lead Enrichment and Qualification

Someone fills out a form on your website. An automated system can look up their company, check it against your ideal customer criteria, score the lead, draft a personalized follow-up, and log everything to your CRM — before a human ever touches it.

That used to require a team member monitoring a queue. Now it's a trigger in your system.

### Scheduling and Coordination

Anything that involves reading availability, matching constraints, and sending confirmations. Interview scheduling, appointment booking, meeting coordination. Rule-based decisions with structured inputs are fast and cheap to automate.

## What Doesn't Work Yet

Honest answer: anything requiring real-world judgment that isn't captured in your data.

An AI system can tell you which customers are most likely to churn based on usage patterns. It cannot tell you whether you should drop your price to retain a specific customer whose situation you know personally from years of relationship. That's context the system doesn't have.

Creative strategy is the same. You can automate the generation of five ad headline options. You cannot automate the judgment call about which one is right for where your brand needs to go next year.

Relationship-building is off the table. Clients know when they're talking to a system. For high-stakes interactions — sales conversations, client conflict resolution, partnership discussions — automation is a liability, not an asset.

The pattern I use to check: if a smart human making this decision would want to ask questions you haven't thought to include in the data, the task isn't ready for automation.

## What "Agentic" Actually Means

The word "agentic" gets used loosely. Here's what it means in practice.

An agent is a language model that can call tools, check the results, and take next actions based on what it finds. Not just generating text — actually doing things. Querying a database. Calling an API. Writing data somewhere. Deciding what to do next based on the output.

The restaurant system I built uses this architecture. When the owner asks a sales question, a Sales Agent queries the database and returns analysis. If the question includes "show me" or "visualize," the Sales Agent detects that, hands off to a Plotter Agent with the data, and the Plotter Agent generates a chart. A Response Agent formats the final output and sends it back.

Three agents. Each has one job. They collaborate by passing context when one agent's output becomes another agent's input.

This is different from a chatbot because the agents are actually doing work, not just generating text about work. They're touching real data, calling real tools, producing real outputs.

The handoff model matters. One generalist agent trying to do everything gets confused. Specialized agents with clear responsibilities and explicit handoff rules are far more reliable. I learned this the hard way — my first version was one agent with every tool, and it constantly tried to plot data before querying for it.

## The Stack I Use

For orchestration, I use the OpenAI Agents SDK. It handles the agent loop, tool calls, and handoffs cleanly without forcing you to build all that scaffolding yourself.

For long-running workflows — anything that takes more than a few seconds or has steps that might fail independently — I use Temporal. Temporal is durable execution: if step 3 of a 7-step pipeline fails, it retries step 3, not the whole pipeline. For AI workflows specifically, where an LLM call can time out or an API can flake, this matters a lot.

The backend is FastAPI. Fast to write, easy to reason about, works well with async Python which is what the Agents SDK expects.

For data, Neon (managed PostgreSQL). The agents introspect the schema at runtime, which means they write accurate SQL without needing hardcoded column names in every prompt.

## How to Know If Your Business Is Ready

Three questions. If the answer to all three is yes, the task is probably automatable.

**Does it follow a predictable pattern?** The same steps, roughly the same inputs, roughly the same kind of output every time. If it does, you can describe it to a system.

**Does it take someone 1+ hours per week?** Below that threshold, the setup cost usually isn't worth it in the near term. Above it, the math gets interesting quickly.

**Is it data-driven?** Meaning: could a well-informed outsider make the same decision if you handed them the right data? If yes, an LLM can do it. If the decision requires institutional knowledge that lives only in someone's head, you're not there yet.

A fourth question worth asking: do you actually have the data? The system I built for the restaurant owner works because Pet Pooja had years of structured transaction data. If your data is locked in PDFs, inconsistent spreadsheets, or just not captured at all, data cleanup comes before automation.

## The Honest Close

Setup takes time. Not weeks, usually, but real hours of design work before you write a single line of code. You have to understand the task deeply enough to describe it precisely. That means talking to whoever currently does the work and watching them do it, not just reading a job description.

The payoff is real but measured in weeks and months. The restaurant system I built didn't show ROI on day one. It showed ROI after the owner stopped scheduling those Monday morning report sessions, after his managers reclaimed two hours per week, after he started making inventory decisions based on questions he could ask himself instead of waiting for someone to pull the numbers.

Automation is a tool, not magic. It doesn't solve unclear processes or bad data. It amplifies what you already have. If you have a structured, repetitive, data-driven task and the discipline to set it up properly, the leverage is real.

If you're trying to figure out whether something in your business fits that pattern, I'm happy to think through it with you.`,
    author: 'Zaman Ishtiyaq',
    publishedAt: '2026-06-27',
    readTime: 9,
    category: 'AI',
    tags: ['AI', 'Automations', 'Agentic AI', 'Small Business', 'OpenAI', 'LLM'],
    featured: true,
  },
  {
    slug: 'what-hiring-managers-look-for-nextjs-developer',
    title: 'What Hiring Managers Actually Look for in a Next.js Developer',
    excerpt: 'Seven years shipping Next.js in production across Goldman Sachs, BrightEdge, and Atlan. Here\'s what actually moves the needle when you\'re being evaluated — and what doesn\'t matter as much as you think.',
    content: `# What Hiring Managers Actually Look for in a Next.js Developer

**Quick answer:** Hiring managers want to see three things from a Next.js developer: shipped product experience with real users, solid TypeScript competency, and genuine awareness of performance and SEO. Everything else is secondary.

I've been a Next.js developer for over seven years. I've worked at Goldman Sachs, BrightEdge, and now Atlan. I've also reviewed enough portfolios and codebases as a senior engineer to tell you what actually moves the needle when you're being evaluated. This post is for developers who want the unfiltered version.

---

**Key Takeaways**

- One shipped Next.js app with real users signals seniority. A GitHub full of tutorial clones doesn't.
- TypeScript is a baseline in 2026, not a differentiator. Shaky types are a red flag.
- App Router knowledge means understanding *why* it exists, not just that you've used it.
- LLM integration is now a genuine differentiator for Next.js roles.

---

## The Portfolio vs. Resume Divide

This is the most consistent signal I see when evaluating developers. A GitHub full of "todo-app-with-next" and starter template forks tells me you've been learning. One shipped Next.js app with a real domain, real users, and a README that explains your technical decisions tells me you've been building.

It's not about commit count. It's not about stars. It's about evidence that you've dealt with real constraints: production deploys, performance under real traffic, integrating third-party APIs that don't behave the way the docs say they will.

When I'm reviewing someone's work, the first thing I check is whether anything they built is actually live. If the answer is no, that's a gap. Not a dealbreaker, but a gap.

### What "shipped" actually means

Shipped means a real URL, not a Vercel preview link. It means the app handles edge cases. It means there's a README that isn't just the default Next.js boilerplate text. Explain why you made the routing decisions you made. Explain what you'd do differently. That kind of reflection is what separates someone who followed a tutorial from someone who understood what they were building.

---

## TypeScript Is a Baseline Now, Not a Differentiator

Most teams in 2026 use TypeScript. Being shaky on types isn't a quirk anymore. It's a red flag.

I'm not talking about basic prop typing. I'm talking about generic types, discriminated unions, and properly typing API responses, especially when the shape of that response can vary. If you're casting everything to \`any\` or writing \`as SomeType\` everywhere without understanding why, experienced reviewers will notice.

The developers who impress me are the ones who use TypeScript to make their code self-documenting. A well-typed API client or a properly typed server action tells me you understand your own codebase. That matters more than whether you've memorized the TypeScript handbook.

### A specific thing to practice

Write a typed fetch wrapper that handles error states and success states as a discriminated union. If that sentence confused you, that's your starting point. Most Next.js candidates skip this because tutorials don't cover it. That's exactly why it's worth knowing.

---

## App Router vs. Pages Router: Know the Why, Not Just the What

Hiring managers will ask about App Router. But the answer they're looking for isn't "yes, I've used it." They want to know whether you understand why it exists.

App Router introduced React Server Components, nested layouts, and native streaming support. These aren't cosmetic changes. They fundamentally change how you think about data fetching and component boundaries. If you're using App Router but still fetching everything client-side because that's what you know, you've missed the point.

Know the tradeoffs. Server Components can't use browser APIs or React hooks. Client Components re-introduce the client boundary. Streaming with Suspense changes how loading states work. Understanding these tradeoffs — and being able to articulate when you'd reach for each approach — is what signals a senior-level grasp of the framework.

### Pages Router isn't dead

A lot of production Next.js apps still use Pages Router. Don't pretend it doesn't exist. Being able to work in both, and knowing when a team might reasonably stick with Pages Router, shows pragmatism. Hiring managers notice that too.

---

## Performance and SEO Are Basic Competencies

This is where most Next.js candidates reveal they're more junior than they think. Performance and SEO awareness are not advanced topics. They're baseline expectations for anyone calling themselves a Next.js developer.

The framework gives you the tools: \`next/image\` for optimized images, \`next/font\` for font loading without layout shift, the Metadata API for structured SEO, and built-in Core Web Vitals reporting. If you haven't used these, you haven't used Next.js seriously.

Interviewers will ask about Largest Contentful Paint, Cumulative Layout Shift, and Interaction to Next Paint. They want to know if you've actually measured these things in a real project, not just recited what they stand for.

### What I tell junior developers

Run Lighthouse on something you've built. Fix what it flags. Do that three or four times across different projects, and you'll have concrete examples to talk about in any interview. Most candidates skip this step entirely.

---

## The AI Integration Angle in 2026

This is the differentiator right now. Teams are actively looking for Next.js developers who can build LLM-powered features — not just developers who've used ChatGPT.

Practically, that means: API routes that call OpenAI or Anthropic, streaming responses using server-sent events or the Vercel AI SDK, and understanding the edge runtime tradeoffs when you need low latency. It also means knowing when to run inference on the edge versus calling an external API, and how to handle token limits and rate limits gracefully in a production app.

I've built several projects combining Next.js with LLM backends. The developers who can do this fluently — who've dealt with streaming latency, prompt engineering for structured outputs, and error handling when the model returns something unexpected — are genuinely hard to find. If you can show that experience, you stand out.

---

## What Doesn't Actually Matter Much

I'll save you some time. Deep \`next.config.js\` mastery is not a meaningful signal. Exhaustive knowledge of every Next.js feature — including ones you'd never use in a real project — doesn't impress anyone. And deep webpack knowledge is increasingly irrelevant as Turbopack continues to replace it.

Hiring managers care about outcomes. They care about whether you can ship something that works, performs well, and that other developers can maintain. The framework is a tool. Know your tools well, but don't confuse tool knowledge with engineering judgment.

---

## Portfolio Advice: One Live App Beats Ten Clones

If you're building your portfolio now, here's what I'd actually do. Pick one project. Make it something you'd use yourself or something that solves a real problem. Deploy it on a real domain. Write a README that explains your architecture decisions, what you'd do differently, and what technical problems you ran into.

That single project, done seriously, is worth more than ten tutorial clones across ten repositories. Quality signals judgment. Volume signals busywork.

---

## A Note for Freelancers

Freelance clients don't care about your Next.js version history. They care whether the site is fast, shows up in Google, and doesn't require a specialist to update. When you're pitching freelance work, frame your Next.js skills in those terms.

Fast: talk about image optimization and Core Web Vitals scores you've achieved. Indexable: talk about the Metadata API and server-rendered content. Maintainable: talk about clean component structure and documentation you leave behind.

That framing converts. The technical depth matters for getting hired at a company. For freelance clients, the outcome is what sells.

---

## The Honest Summary

Here's what I'd tell someone getting ready for a Next.js interview or putting together a freelance pitch:

Ship something real and put it on the internet. Know your TypeScript well enough that it makes your code better, not just valid. Understand App Router deeply enough to explain the tradeoffs. Know your Core Web Vitals. And if you can integrate an LLM into a Next.js app cleanly, say so explicitly — because that skill is in demand right now.

The developers who stand out aren't the ones who've memorized the most. They're the ones who've built the most, reflected on what they built, and can explain the reasoning behind their decisions.

That's it. Everything else is noise.`,
    author: 'Zaman Ishtiyaq',
    publishedAt: '2026-06-27',
    readTime: 10,
    category: 'Development',
    tags: ['Next.js', 'Career', 'Web Development', 'TypeScript', 'Full-Stack', 'LLM'],
    featured: false,
  },
  {
    slug: 'shipping-two-ios-apps-solo-developer',
    title: 'How I Shipped Two iOS Apps to the App Store as a Solo Developer',
    excerpt: 'Yes, you can ship to the App Store alone. The real bottlenecks aren\'t technical — they\'re App Review timing, code signing, and scope creep. Here\'s what actually happened building Muhasaba and Spree.',
    content: `# How I Shipped Two iOS Apps to the App Store as a Solo Developer

**Quick answer:** Yes, you can ship to the App Store as a solo developer. The real bottlenecks aren't technical — they're App Review timing (unpredictable), code signing (annoying but solvable), and scope creep (the actual killer). If you cut ruthlessly, pick SwiftUI, and treat v1 as the smallest thing with real value, you can get there.

---

In 2026, I shipped two iOS apps to the App Store. Both are live. Both have real users. I built them alone, around a full-time job, without a co-founder.

One is [Muhasaba](https://muhasaba.me) — an Islamic daily reflection app where you write or speak your thoughts and get AI-guided responses grounded in Quran and Sunnah. The other is [Spree](https://tryspree.app) — a wishlist app where you paste any product URL and it auto-imports the title, price, and image. Two different categories, two different problems, one developer.

Here's what actually happened.

---

## Why These Apps Exist

Both apps came from genuine personal frustration. That matters more than it sounds.

With Muhasaba, I was already doing a daily reflection practice. I wanted something that could respond to my thoughts through an Islamic lens — not generic self-help prompts, not a basic journaling app. I wanted Quran and Sunnah woven into the feedback. Nothing like that existed, so I built it.

With Spree, my wishlist was a Notes folder full of screenshots. Disorganized. No prices. No way to rank or compare. Every time someone asked what I wanted for a birthday, I had to dig through a chaotic mess. The app I wanted already existed in my head — I just had to build it.

Neither app started as a business idea. They started as tools I actually needed. That's the honest origin story for both.

---

## The SwiftUI Decision

When I started Muhasaba, I made a deliberate call: SwiftUI only, no UIKit.

In 2025 and into 2026, SwiftUI has matured enough for a production app. Declarative syntax means faster iteration. State management is cleaner. You can go from idea to screen without the overhead UIKit demands. For a solo developer, that velocity matters.

The tradeoffs are real. SwiftUI still has rough edges around certain animations and complex list behaviors. There are moments where you hit a wall and UIKit would have had a clear solution for years. But for most screens in a productivity or content app, SwiftUI moves faster — and as one person doing everything, faster is the constraint you optimize for.

---

## What Nobody Tells You About App Review

The hardest part of App Review isn't rejection. It's the waiting.

Muhasaba was approved in 36 hours. That's fast. But when you submit, you don't know it'll be 36 hours. Apple's review times can range from under a day to two weeks, depending on the category, the features, and factors nobody fully understands.

So you plan for two weeks and hope for two days. That means you can't schedule a launch around a review submission. You submit, you wait, you do other work. When approval comes, you launch.

For apps using AI or microphone access — which both of mine do — you need clear privacy justifications in your metadata. Muhasaba uses voice input via Whisper and reads microphone data. Spree accesses the network for URL scraping. Both required explicit usage descriptions. Reviewers read them. Make them clear.

---

## Code Signing Is Annoying, Not Hard

Let me save you a few hours: enable automatic signing in Xcode.

The Apple Developer Program costs $99 per year. You need it to submit to the App Store. Inside Xcode, under Signing and Capabilities, there's an option to let Xcode manage your signing automatically. Turn it on. Let it generate and rotate certificates and provisioning profiles for you.

I spent time early on manually managing certificates. I rotated an expired certificate wrong, broke my build, and spent an afternoon fixing it. After switching to automatic signing, I haven't touched a provisioning profile manually since.

The concepts are worth understanding — what a certificate is, what a provisioning profile does, the difference between development and distribution signing. But you don't need to manage them by hand. That's what the tooling is for.

---

## The Feature I Cut (And Why That Was Right)

Both apps launched without features I had planned.

Muhasaba had a community or social layer on the roadmap — a place to share reflections, see others' virtue tracking. It didn't ship in v1. Spree had a browser extension so you could save products without opening the app. Also didn't ship.

Neither of those omissions was a failure. They were correct decisions.

V1 should be the smallest thing that delivers the core value. For Muhasaba, the core value is: write a reflection, receive Islamic guidance. Everything else is a layer on top. For Spree, the core value is: paste a URL, get your product saved cleanly. The browser extension makes that easier — it's not the thing itself.

If I had built both those features, I'd still be building. Instead, I have users, feedback, and a clear sense of what actually matters to people. That's worth more than a feature list.

---

## What Actually Gets People Downloading

Shipping isn't the end of the work. It's the beginning of a different kind of work.

For Muhasaba, the growth vector has been content. I built a learning section at [muhasaba.me/learn](https://muhasaba.me/learn) with articles on Islamic journaling, the practice of muhasaba, and virtue development. People search for those topics. They land on the page. They find the app. Organic search to landing page to App Store — that's the funnel.

For Spree, the AI virtual try-on feature is what people share. When someone can paste a clothing product URL and see themselves wearing it, they show their friends. Word of mouth from a genuinely surprising feature does more than most marketing.

Neither of those things happened by accident. I thought about what would give someone a reason to tell another person about the app, and I built toward that.

---

## The AI in Each App

Both apps use AI. Neither uses it as a gimmick.

Muhasaba uses Whisper for voice-to-text transcription of spoken reflections. It then uses GPT-4 to generate responses grounded in Quran and Sunnah — referenced properly, not hallucinated. The model is prompted carefully to stay within Islamic scholarly frameworks. That's the whole product premise.

Spree uses a virtual try-on API that composites the user's photo with clothing product images. It's technically impressive, but the value is practical: you see what something looks like on you before buying. Returns drop. Confidence goes up.

Both AI features add real value to the specific use case. That's the bar I'd recommend: if removing the AI feature makes the app worse in a meaningful way, keep it. If you're adding it because it sounds impressive, cut it.

---

## The Revenue Model

Both apps are free with a Pro subscription. No ads.

I thought about ads for about ten minutes. Then I thought about what it would feel like to have an ad appear after someone typed out a vulnerable reflection in Muhasaba. That was the end of that conversation.

Pro unlocks unlimited usage — more AI responses, unlimited wishlist items. It's a clean value exchange. Free users get enough to understand what the app does. Pro users get the full experience.

---

## Would I Do It Again?

Yes. Without hesitation.

Building alone means you make faster decisions. You don't need to align with a co-founder on every call. You ship earlier because there's no one to defer to. And you learn the entire stack — design, backend, submission, marketing — because nobody else is doing any of it.

That constraint isn't a disadvantage. It's a forcing function. It makes you figure out what actually matters in an app, and it strips away everything that doesn't.

If you're sitting on an app idea and waiting for the right time or the right team, this is the post where I tell you that the right time is now and the right team is you. The App Store doesn't care how many people built the thing. It cares whether the thing works.

Both of mine work. Yours can too.`,
    author: 'Zaman Ishtiyaq',
    publishedAt: '2026-06-27',
    readTime: 10,
    category: 'iOS',
    tags: ['iOS', 'Swift', 'SwiftUI', 'App Store', 'Muhasaba', 'Spree', 'Solo Developer', 'AI'],
    featured: false,
  },
  {
    slug: 'claude-seo-free-seo-audit-tool-claude-code',
    title: 'claude-seo: Full SEO Audit in 15 Minutes — Free, Open Source, No Subscriptions',
    excerpt: 'claude-seo is a Claude Code plugin that runs 25 AI specialist agents in parallel to audit your entire SEO stack in 15 minutes. Core Web Vitals, Schema, AI Search visibility, Local SEO, and a 32-page PDF report. MIT licensed, free forever.',
    content: `# claude-seo: Full SEO Audit in 15 Minutes — Free, Open Source, No Subscriptions

**Quick answer:** claude-seo is an open-source Claude Code plugin with 25 AI agents that audits your entire SEO stack in 15 minutes. It covers Core Web Vitals, Schema markup, AI Search visibility (ChatGPT, Perplexity), E-E-A-T, Local SEO, and auto-generates a 32-page PDF report. You're currently paying $99–$999/mo for tools that do less. This does more, for $0, forever.

---

## The Problem With SEO Tools in 2026

SEO tools haven't kept up with how search actually works now.

You're paying $999/month for Ahrefs, SEMrush, or similar — and none of them tell you whether ChatGPT or Perplexity can cite your content. They don't audit your AI Search visibility. They run one agent at a time. A full audit takes 4–8 hours of manual work across multiple dashboards.

Meanwhile, AI search is eating traditional search traffic. If your site isn't optimised for GEO (Generative Engine Optimisation), you're invisible to a growing chunk of your potential audience — and your $999/month tool doesn't even check for it.

---

## What claude-seo Does

claude-seo is a plugin for [Claude Code](https://claude.ai/code) — Anthropic's AI coding assistant — that turns your terminal into a full SEO audit station.

One command. 25 agents run in parallel. 15 minutes later you have a complete audit.

### What the 25 agents cover:

**Core Web Vitals** — LCP, CLS, INP measured against real-world thresholds. Flags issues before Google penalises you.

**Schema Markup** — Validates 20+ schema types. Checks JSON-LD implementation, required fields, and markup errors that kill rich results.

**AI Search (GEO)** — This is the one no other tool does. Audits your content's visibility to ChatGPT, Perplexity, and Google AI Overviews. Checks passage-level citability, brand mentions, and llms.txt compliance.

**E-E-A-T** — Evaluates Experience, Expertise, Authoritativeness, and Trustworthiness signals across your content and technical setup.

**Local SEO** — GBP optimisation, NAP consistency, citations, review signals, and location page quality.

**32-Page PDF Report** — Auto-generated. Every audit produces a formatted PDF you can share with clients, stakeholders, or your team.

**SQLite Drift Monitoring** — Stores baseline metrics and flags regressions before Google does. A silent watchdog running in the background.

---

## Before vs After

| | Before claude-seo | After claude-seo |
|---|---|---|
| Audit time | 4–8 hours | 15 minutes |
| Monthly cost | $99–$999 | $0 |
| AI search audit | Not available | Included |
| Number of agents | 1 at a time | 18 running in parallel |

---

## How to Set It Up (60 Seconds)

### Option 1 — Git Clone

\`\`\`bash
git clone https://github.com/AgricIDaniel/claude-seo
cd claude-seo && bash install.sh
\`\`\`

### Option 2 — Claude Code Plugin Marketplace

\`\`\`
/plugin marketplace add claude-seo
\`\`\`

### Then run your first audit

\`\`\`
/seo audit https://yoursite.com  # full audit
/seo schema                       # schema check only
/seo geo                          # AI search visibility
/seo local                        # local SEO audit
\`\`\`

One command. 15 minutes. 32-page report in your folder.

---

## Why I'm Sharing This

I use claude-seo on every project I build. When I ran it on my own portfolio ([zamanishtiyaq.work](https://zamanishtiyaq.work)), it flagged three schema errors I didn't know existed and showed me my AI Search visibility score was lower than it should be for the keywords I was targeting.

It's MIT licensed. The underlying repos are all public on GitHub. I'm not selling you the tool — I'm sharing a curated setup that installs everything in 60 seconds instead of you spending a weekend figuring out which repos are worth using.

---

## The Upsell (Optional, Not Required)

claude-seo is 25 of the 814 skills I've packaged in [Supercharge](/supercharge) — a ₹99 one-time purchase that installs the full community skill library across engineering, iOS, design, marketing, content, and more.

You don't need Supercharge to use claude-seo. But if you're building with Claude Code and want the full toolkit — that's where to go.

---

## Get claude-seo Free

→ [Get the free tool at zamanishtiyaq.work/claude-seo](/claude-seo)

Drop your email and I'll send you the GitHub link plus a quick-start guide. MIT licensed, free forever, no strings.`,
    author: 'Zaman Ishtiyaq',
    publishedAt: '2026-06-28',
    readTime: 6,
    category: 'Tools',
    tags: ['SEO', 'Claude Code', 'AI', 'Open Source', 'Developer Tools', 'GEO', 'Free Tools'],
    featured: true,
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

