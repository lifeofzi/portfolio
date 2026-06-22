import { ImageResponse } from 'next/og';
import { getBlogPostBySlug, blogPosts } from '@/data/blog';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

async function loadFont() {
  const url = `https://fonts.googleapis.com/css2?family=Inter:wght@700;800&display=swap`;
  const css = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)' },
  }).then((r) => r.text());
  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype|woff2?)'\)/);
  if (!match) throw new Error('Font URL not found');
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

const CATEGORY_COLORS: Record<string, string> = {
  Development: '#bfdbfe',
  Design: '#fce7f3',
  AI: '#d1fae5',
  Product: '#fef3c7',
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  const fontData = await loadFont();

  const title = post?.title ?? 'Blog — Zaman Ishtiyaq';
  const category = post?.category ?? 'Development';
  const readTime = post?.readTime ?? 5;
  const categoryColor = CATEGORY_COLORS[category] ?? '#fef3c7';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'white',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Inter',
          position: 'relative',
        }}
      >
        {/* Yellow top bar */}
        <div style={{ width: '100%', height: 16, background: '#facc15', display: 'flex' }} />

        {/* Dot grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, #00000010 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '56px 80px',
            flex: 1,
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          {/* Top row — category + read time */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                display: 'flex',
                background: categoryColor,
                border: '3px solid #1a1a1a',
                boxShadow: '4px 4px 0 #1a1a1a',
                padding: '8px 18px',
                fontSize: 20,
                fontWeight: 800,
                color: '#1a1a1a',
                borderRadius: 10,
              }}
            >
              {category}
            </div>
            <div
              style={{
                display: 'flex',
                background: 'white',
                border: '3px solid #1a1a1a',
                boxShadow: '4px 4px 0 #1a1a1a',
                padding: '8px 18px',
                fontSize: 20,
                fontWeight: 700,
                color: '#555',
                borderRadius: 10,
              }}
            >
              {readTime} min read
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: title.length > 60 ? 52 : title.length > 40 ? 60 : 68,
              fontWeight: 800,
              color: '#1a1a1a',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: 980,
            }}
          >
            {title}
          </div>

          {/* Bottom row — author */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div
                style={{
                  display: 'flex',
                  background: '#1a1a1a',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: 10,
                  fontSize: 20,
                  fontWeight: 800,
                }}
              >
                Zaman Ishtiyaq
              </div>
              <div style={{ fontSize: 20, color: '#888', fontWeight: 700 }}>
                zamanishtiyaq.work/blog
              </div>
            </div>

            {/* Z logo */}
            <div
              style={{
                width: 64,
                height: 64,
                background: '#1a1a1a',
                border: '3px solid #1a1a1a',
                boxShadow: '4px 4px 0 #facc15',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 36,
                fontWeight: 800,
                color: '#facc15',
              }}
            >
              Z
            </div>
          </div>
        </div>

        {/* Yellow bottom bar */}
        <div style={{ width: '100%', height: 8, background: '#facc15', display: 'flex' }} />
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Inter', data: fontData, weight: 800, style: 'normal' }],
    }
  );
}
