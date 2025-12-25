'use client';

import Link from 'next/link';
import { type BlogPost } from '@/data/blog';
import { formatDate } from '@/utils/dateFormatter';

/**
 * Molecule: BlogCard Component
 * Displays a blog post preview card with neo-brutalist styling
 */
export const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block group"
    >
      <article className="neo-card rounded-2xl p-6 bg-white border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] hover:-translate-y-1 transition-transform duration-150 h-full flex flex-col">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-[#facc15] border-[2px] border-black rounded-lg text-xs font-display font-bold text-black uppercase tracking-wide">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-display font-bold text-black mb-3 group-hover:text-[#3b82f6] transition-colors">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-black/70 font-display mb-4 flex-1 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between pt-4 border-t-[2px] border-black/20">
          <div className="flex items-center gap-3 text-sm text-black/60 font-display">
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
          {post.featured && (
            <span className="px-2 py-1 bg-[#f472b6] border-[2px] border-black rounded text-xs font-display font-bold text-white">
              Featured
            </span>
          )}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-[#e0e7ff] border-[2px] border-black rounded text-xs font-display text-black"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
};

