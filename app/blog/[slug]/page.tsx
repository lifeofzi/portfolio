import { notFound } from 'next/navigation';
import { Navigation } from '@/components/molecules/Navigation';
import { BlogPostDetail } from '@/components/organisms/BlogPost';
import { getBlogPostBySlug } from '@/data/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fef3c7] text-gray-900">
      <Navigation />
      
      {/* Blog Post Content */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white border-b-[3px] border-black">
        <div className="max-w-7xl mx-auto">
          <BlogPostDetail post={post} />
        </div>
      </section>

      {/* Footer */}
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

