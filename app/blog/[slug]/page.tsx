import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/molecules/Navigation';
import { BlogPostDetail } from '@/components/organisms/BlogPost';
import { getBlogPostBySlug, blogPosts } from '@/data/blog';

const BASE = 'https://zamanishtiyaq.work';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const url = `${BASE}/blog/${post.slug}`;
  const images = post.image ? [{ url: post.image, alt: post.title }] : [{ url: '/me.png', alt: 'Zaman Ishtiyaq' }];

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author, url: BASE }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: images.map((i) => i.url),
    },
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      '@id': `${BASE}/#person`,
      name: post.author,
      url: BASE,
    },
    publisher: { '@id': `${BASE}/#person` },
    url: `${BASE}/blog/${post.slug}`,
    image: post.image || `${BASE}/me.png`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/${post.slug}` },
    keywords: post.tags.join(', '),
  };

  return (
    <main className="min-h-screen bg-[#fef3c7] text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white border-b-[3px] border-black">
        <div className="max-w-7xl mx-auto">
          <BlogPostDetail post={post} />
        </div>
      </section>

      <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t-[3px] border-black bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-black font-display text-sm">
            &copy; {new Date().getFullYear()} Zaman Ishtiyaq. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
