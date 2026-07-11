import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/molecules/Navigation';
import { ProjectDetail } from '@/components/organisms/ProjectDetail';
import { getProjectById, projects } from '@/data/projects';

const BASE = 'https://www.zamanishtiyaq.work';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return {};

  const url = `${BASE}/projects/${project.id}`;
  const description = project.description.slice(0, 160);
  const image = project.image ? `${BASE}${project.image}` : `${BASE}/me.png`;

  return {
    title: project.title,
    description,
    openGraph: {
      title: `${project.title} | Zaman Ishtiyaq`,
      description,
      url,
      type: 'website',
      images: [{ url: image, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Zaman Ishtiyaq`,
      description,
      images: [image],
    },
    alternates: { canonical: url },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const mobileAppMeta: Record<string, { category: string; downloadUrl: string }> = {
    muhasaba: { category: 'LifestyleApplication', downloadUrl: 'https://muhasaba.me/' },
    spree:    { category: 'ShoppingApplication',  downloadUrl: 'https://www.tryspree.app/' },
  };

  const isMobileApp = project.id in mobileAppMeta;

  const softwareSchema = isMobileApp
    ? {
        '@context': 'https://schema.org',
        '@type': 'MobileApplication',
        name: project.title,
        description: project.description,
        url: project.url,
        downloadUrl: mobileAppMeta[project.id].downloadUrl,
        applicationCategory: mobileAppMeta[project.id].category,
        operatingSystem: 'iOS',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        author: { '@type': 'Person', '@id': `${BASE}/#person`, name: 'Zaman Ishtiyaq' },
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: project.title,
        description: project.description,
        url: project.url,
        applicationCategory: 'WebApplication',
        author: { '@type': 'Person', '@id': `${BASE}/#person`, name: 'Zaman Ishtiyaq' },
      };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${BASE}/projects` },
      { '@type': 'ListItem', position: 3, name: project.title, item: `${BASE}/projects/${project.id}` },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Navigation />
      <ProjectDetail project={project} />
    </main>
  );
}
