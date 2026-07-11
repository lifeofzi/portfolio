import type { Metadata } from 'next';
import { Navigation } from '@/components/molecules/Navigation';
import { BlogList } from '@/components/organisms/BlogList';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog — AI, Development & Product Design',
  description: 'Articles on building AI products, scalable backend systems, and product design by Zaman Ishtiyaq — Senior Software Engineer and AI Native Engineer at Atlan.',
  openGraph: {
    title: 'Blog — AI, Development & Product Design | Zaman Ishtiyaq',
    description: 'Articles on building AI products, scalable backend systems, and product design by Zaman Ishtiyaq.',
    url: 'https://www.zamanishtiyaq.work/blog',
    type: 'website',
  },
  alternates: { canonical: 'https://www.zamanishtiyaq.work/blog' },
};

export default function BlogPage() {
  // Sort posts by published date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <main className="min-h-screen bg-[#fef3c7] text-gray-900">
      <Navigation />
      
      {/* Blog Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative bg-[#fef08a] border-y-[3px] border-black">
        <div className="absolute inset-0 text-black opacity-20">
          <div className="w-full h-full neo-dot-grid" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-4 text-black">
              Blog <span className="px-2 py-1 bg-white border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">Posts</span>
            </h1>
            <p className="text-lg sm:text-xl text-black/80 max-w-2xl mx-auto font-display">
              Thoughts on development, design, and building products
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b-[3px] border-black">
        <div className="max-w-7xl mx-auto">
          <BlogList posts={sortedPosts} />
        </div>
      </section>
    </main>
  );
}

