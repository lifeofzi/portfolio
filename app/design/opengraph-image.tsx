import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function loadFont() {
  const url = `https://fonts.googleapis.com/css2?family=Inter:wght@700;800&display=swap`;
  const css = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)' },
  }).then((r) => r.text());
  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype|woff2?)'\)/);
  if (!match) throw new Error('Font URL not found');
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const fontData = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#fef3c7',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '72px 80px',
          fontFamily: 'Inter',
          position: 'relative',
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, #00000018 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Decorative shapes */}
        <div style={{ position: 'absolute', top: 52, right: 80, width: 120, height: 80, background: '#bfdbfe', border: '3px solid #1a1a1a', boxShadow: '6px 6px 0 #1a1a1a', borderRadius: 12, transform: 'rotate(3deg)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 60, right: 200, width: 80, height: 56, background: '#bbf7d0', border: '3px solid #1a1a1a', boxShadow: '5px 5px 0 #1a1a1a', borderRadius: 10, transform: 'rotate(-4deg)', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 180, right: 60, width: 60, height: 60, background: '#fde68a', border: '3px solid #1a1a1a', boxShadow: '4px 4px 0 #1a1a1a', borderRadius: 10, transform: 'rotate(6deg)', display: 'flex' }} />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, position: 'relative', maxWidth: 900 }}>
          {/* Domain pill */}
          <div
            style={{
              display: 'flex',
              background: '#1a1a1a',
              color: 'white',
              padding: '8px 18px',
              borderRadius: 10,
              fontSize: 18,
              fontWeight: 700,
              alignSelf: 'flex-start',
              letterSpacing: '0.02em',
            }}
          >
            zamanishtiyaq.work/design
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#1a1a1a',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Website Design Services
          </div>

          {/* Subtitle badge */}
          <div
            style={{
              display: 'flex',
              background: '#facc15',
              border: '3px solid #1a1a1a',
              boxShadow: '5px 5px 0 #1a1a1a',
              padding: '12px 24px',
              fontSize: 24,
              fontWeight: 800,
              color: '#1a1a1a',
              borderRadius: 12,
              alignSelf: 'flex-start',
            }}
          >
            Starter $299 · Standard $749 · Custom from $1,800
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 22,
              color: '#555',
              lineHeight: 1.5,
              fontWeight: 700,
            }}
          >
            Fixed price. Clear timeline. Designed and built end-to-end.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Inter', data: fontData, weight: 800, style: 'normal' }],
    }
  );
}
