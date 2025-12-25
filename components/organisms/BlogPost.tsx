'use client';

import { type BlogPost } from '@/data/blog';
import { formatDate } from '@/utils/dateFormatter';
import Link from 'next/link';
import Image from 'next/image';

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

/**
 * Organism: BlogPost Component
 * Displays a full blog post with neo-brutalist styling
 */
export const BlogPostDetail = ({ post }: { post: BlogPost }) => {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-display text-sm px-4 py-2 bg-white border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] hover:-translate-y-1 transition-transform duration-150 mb-8"
      >
        <ArrowLeftIcon />
        Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-8">
        {/* Category & Featured Badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block px-3 py-1 bg-[#facc15] border-[2px] border-black rounded-lg text-sm font-display font-bold text-black uppercase tracking-wide">
            {post.category}
          </span>
          {post.featured && (
            <span className="px-3 py-1 bg-[#f472b6] border-[2px] border-black rounded-lg text-sm font-display font-bold text-white">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-black mb-4 leading-tight">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-black/70 font-display mb-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-black">By {post.author}</span>
          </div>
          <span>•</span>
          <span>{formatDate(post.publishedAt)}</span>
          <span>•</span>
          <span>{post.readTime} min read</span>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#e0e7ff] border-[2px] border-black rounded-lg text-sm font-display text-black"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div className="neo-card rounded-2xl p-8 bg-white border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
          <div className="blog-content font-display text-black leading-relaxed">
            {post.content.split('\n').map((paragraph, idx) => {
              // Handle headings
              if (paragraph.startsWith('# ')) {
                return <h2 key={idx} className="text-3xl font-display font-bold text-black mb-4 mt-8">{paragraph.substring(2)}</h2>;
              }
              if (paragraph.startsWith('## ')) {
                return <h3 key={idx} className="text-2xl font-display font-bold text-black mb-3 mt-6">{paragraph.substring(3)}</h3>;
              }
              if (paragraph.startsWith('### ')) {
                return <h4 key={idx} className="text-xl font-display font-bold text-black mb-2 mt-4">{paragraph.substring(4)}</h4>;
              }
              
              // Handle bold text
              let processedParagraph = paragraph;
              processedParagraph = processedParagraph.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
              processedParagraph = processedParagraph.replace(/\*(.+?)\*/g, '<em>$1</em>');
              
              // Handle code blocks
              processedParagraph = processedParagraph.replace(/`(.+?)`/g, '<code class="px-2 py-1 bg-[#fef3c7] border-[2px] border-black rounded text-sm font-mono">$1</code>');
              
              // Handle images: ![Alt text](/path/to/image.png)
              const imageMatch = paragraph.match(/!\[([^\]]*)\]\(([^)]+)\)/);
              if (imageMatch) {
                const [, alt, src] = imageMatch;
                return (
                  <div key={idx} className="my-8">
                    <div className="neo-card rounded-2xl overflow-hidden border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">
                      <Image
                        src={src}
                        alt={alt || 'Blog post image'}
                        width={1200}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                    {alt && (
                      <p className="text-sm text-black/60 font-display mt-2 text-center italic">{alt}</p>
                    )}
                  </div>
                );
              }
              
              // Skip empty paragraphs
              if (!paragraph.trim()) {
                return <br key={idx} />;
              }
              
              return (
                <p 
                  key={idx} 
                  className="mb-4 text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: processedParagraph }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t-[3px] border-black">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-display text-lg px-6 py-3 bg-[#facc15] border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] hover:-translate-y-1 transition-transform duration-150 text-black"
          >
            <ArrowLeftIcon />
            Back to Blog
          </Link>
          
          {post.projectId && (
            <Link
              href={`/projects/${post.projectId}`}
              className="inline-flex items-center gap-2 font-display text-lg px-6 py-3 bg-[#3b82f6] border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] hover:-translate-y-1 transition-transform duration-150 text-white"
            >
              View Project Details
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          )}
        </div>
      </footer>
    </article>
  );
};

