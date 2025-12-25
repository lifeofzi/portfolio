'use client';

import { BlogCard } from '@/components/molecules/BlogCard';
import { type BlogPost } from '@/data/blog';

/**
 * Organism: BlogList Component
 * Displays a grid of blog post cards
 */
export const BlogList = ({ posts }: { posts: BlogPost[] }) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-black/60 font-display text-lg">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

