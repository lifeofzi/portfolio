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

type Segment =
  | { type: 'code'; language: string; content: string }
  | { type: 'line'; content: string };

function parseSegments(content: string): Segment[] {
  const lines = content.split('\n');
  const segments: Segment[] = [];
  let i = 0;

  while (i < lines.length) {
    const codeMatch = lines[i].match(/^```(\w*)$/);
    if (codeMatch) {
      const language = codeMatch[1] || '';
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      segments.push({ type: 'code', language, content: codeLines.join('\n') });
    } else {
      segments.push({ type: 'line', content: lines[i] });
      i++;
    }
  }

  return segments;
}

function processInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`\n]+?)`/g, '<code class="px-1.5 py-0.5 bg-[#fef3c7] border-[2px] border-black rounded text-sm font-mono">$1</code>')
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-700 underline underline-offset-2 hover:text-blue-900 transition-colors font-semibold">$1</a>'
    )
    .replace(
      /\[([^\]]+)\]\((\/[^)]*)\)/g,
      '<a href="$2" class="text-blue-700 underline underline-offset-2 hover:text-blue-900 transition-colors font-semibold">$1</a>'
    );
}

export const BlogPostDetail = ({ post, relatedPosts }: { post: BlogPost; relatedPosts?: BlogPost[] }) => {
  const segments = parseSegments(post.content);

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

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-black mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-black/70 font-display mb-6">
          <span className="font-bold text-black">By {post.author}</span>
          <span>•</span>
          <span>{formatDate(post.publishedAt)}</span>
          <span>•</span>
          <span>{post.readTime} min read</span>
        </div>

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
      <div className="neo-card rounded-2xl p-6 sm:p-10 bg-white border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
        <div className="blog-content font-display text-black leading-relaxed">
          {segments.map((seg, idx) => {
            if (seg.type === 'code') {
              return (
                <div key={idx} className="my-6">
                  {seg.language && (
                    <div className="px-3 py-1 bg-black text-yellow-300 text-xs font-mono rounded-t-lg border-[3px] border-black border-b-0 inline-block">
                      {seg.language}
                    </div>
                  )}
                  <pre
                    className={`bg-[#1e1e1e] text-[#d4d4d4] p-5 border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] overflow-x-auto text-sm font-mono leading-relaxed whitespace-pre ${seg.language ? 'rounded-b-xl rounded-tr-xl' : 'rounded-xl'}`}
                  >
                    <code>{seg.content}</code>
                  </pre>
                </div>
              );
            }

            const line = seg.content;

            if (line.startsWith('# ')) {
              return (
                <h2 key={idx} className="text-3xl font-display font-bold text-black mb-4 mt-8 first:mt-0">
                  {line.substring(2)}
                </h2>
              );
            }
            if (line.startsWith('## ')) {
              return (
                <h3 key={idx} className="text-2xl font-display font-bold text-black mb-3 mt-8">
                  {line.substring(3)}
                </h3>
              );
            }
            if (line.startsWith('### ')) {
              return (
                <h4 key={idx} className="text-xl font-display font-bold text-black mb-2 mt-5">
                  {line.substring(4)}
                </h4>
              );
            }
            if (line.trim() === '---') {
              return <hr key={idx} className="my-8 border-[2px] border-black/15" />;
            }
            if (line.startsWith('- ')) {
              return (
                <li
                  key={idx}
                  className="ml-6 mb-2 text-lg leading-relaxed list-disc"
                  dangerouslySetInnerHTML={{ __html: processInline(line.substring(2)) }}
                />
              );
            }

            const imageMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
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

            if (!line.trim()) {
              return <div key={idx} className="h-2" />;
            }

            // Table row — collect all consecutive table lines and render as one block
            if (line.trim().startsWith('|')) {
              // Only emit a table when this is the first row of the block
              // (skip separator rows — they're consumed as part of the block)
              const tableLines: string[] = [];
              let j = idx;
              while (j < segments.length && segments[j].type === 'line' && (segments[j] as { type: 'line'; content: string }).content.trim().startsWith('|')) {
                tableLines.push((segments[j] as { type: 'line'; content: string }).content);
                j++;
              }
              const isSeparator = /^\s*\|[\s\-|]+\|\s*$/.test(line);
              if (isSeparator) return null;
              const isFirstRow = idx === 0 || segments[idx - 1].type !== 'line' || !(segments[idx - 1] as { type: 'line'; content: string }).content.trim().startsWith('|');
              if (!isFirstRow) return null;

              const rows = tableLines.filter((r) => !/^\s*\|[\s\-|]+\|\s*$/.test(r));
              const parseRow = (r: string) =>
                r.split('|').map((c) => c.trim()).filter((_, i, a) => i > 0 && i < a.length - 1);

              const [headerRow, ...bodyRows] = rows;
              if (!headerRow) return null;
              const headers = parseRow(headerRow);
              return (
                <div key={idx} className="my-6 overflow-x-auto">
                  <table className="w-full border-[3px] border-black rounded-xl overflow-hidden shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">
                    <thead>
                      <tr className="bg-black text-white">
                        {headers.map((h, hi) => (
                          <th key={hi} className="px-4 py-3 text-left font-display font-bold text-sm" dangerouslySetInnerHTML={{ __html: processInline(h) }} />
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {bodyRows.map((row, ri) => (
                        <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-[#fef3c7]'}>
                          {parseRow(row).map((cell, ci) => (
                            <td key={ci} className="px-4 py-3 border-t-[2px] border-black/10 text-sm font-display" dangerouslySetInnerHTML={{ __html: processInline(cell) }} />
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            return (
              <p
                key={idx}
                className="mb-4 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: processInline(line) }}
              />
            );
          })}
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

      {/* Hire CTA */}
      <div className="mt-10 neo-card rounded-2xl p-6 sm:p-8 bg-[#facc15] border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-display font-bold text-black/50 uppercase tracking-widest mb-1">Want to build something like this?</p>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-black mb-1">I&apos;m available for freelance projects</h2>
            <p className="text-black/70 font-display text-sm">AI systems, full-stack web apps, iOS — from idea to deployed product.</p>
          </div>
          <Link
            href="/hire"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-display font-bold rounded-xl border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-transform duration-150 whitespace-nowrap"
          >
            Hire Me ↗
          </Link>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <div className="mt-14">
          <h2 className="text-2xl font-display font-bold text-black mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="neo-card rounded-xl p-5 bg-white border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] hover:-translate-y-1 transition-transform duration-150 block"
              >
                <span className="inline-block px-2 py-0.5 bg-[#facc15] border-[2px] border-black rounded text-xs font-display font-bold text-black uppercase tracking-wide mb-2">
                  {related.category}
                </span>
                <h3 className="text-base font-display font-bold text-black leading-snug mb-2 line-clamp-2">{related.title}</h3>
                <p className="text-sm text-black/50 font-display">{related.readTime} min read</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};
