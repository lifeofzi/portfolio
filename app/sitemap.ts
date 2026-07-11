import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';
import { projects } from '@/data/projects';

const BASE = 'https://www.zamanishtiyaq.work';

const PROJECT_DATES: Record<string, string> = {
  'offer-letter-analyzer': '2025-01-10',
  'architex': '2025-01-15',
  'ugc-ai-platform': '2025-01-20',
  'spree': '2026-06-01',
  'muhasaba': '2026-06-01',
  'ali-saffudin': '2026-05-01',
  'villa-cottages': '2026-07-01',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                        lastModified: new Date('2026-07-10'), changeFrequency: 'weekly',  priority: 1   },
    { url: `${BASE}/projects`,          lastModified: new Date('2026-07-01'), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/blog`,              lastModified: new Date('2026-06-28'), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/products`,          lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/switchline`,        lastModified: new Date('2026-07-07'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/supercharge`,       lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/claude-seo`,        lastModified: new Date('2026-06-28'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/hire`,              lastModified: new Date('2026-07-07'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/design`,            lastModified: new Date('2026-07-11'), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE}/contact`,           lastModified: new Date('2026-07-11'), changeFrequency: 'monthly', priority: 0.5 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE}/projects/${project.id}`,
    lastModified: new Date(PROJECT_DATES[project.id] ?? '2026-06-01'),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}
