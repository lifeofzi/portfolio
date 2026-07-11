import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

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
  const [fontData, photo] = await Promise.all([
    loadFont(),
    Promise.resolve(readFileSync(join(process.cwd(), 'public/me.png'))),
  ]);

  const photoSrc = `data:image/png;base64,${photo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#fef3c7',
          display: 'flex',
          position: 'relative',
          fontFamily: 'Inter',
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
        <div style={{ position: 'absolute', top: 48, right: 340, width: 80, height: 56, background: '#60a5fa', border: '3px solid #1a1a1a', boxShadow: '5px 5px 0 #1a1a1a', borderRadius: 8, transform: 'rotate(2deg)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 64, left: 480, width: 56, height: 56, background: '#34d399', border: '3px solid #1a1a1a', boxShadow: '5px 5px 0 #1a1a1a', borderRadius: 8, transform: 'rotate(-4deg)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 40, right: 320, width: 100, height: 36, background: '#f472b6', border: '3px solid #1a1a1a', boxShadow: '4px 4px 0 #1a1a1a', borderRadius: 8, transform: 'rotate(3deg)', display: 'flex' }} />

        {/* Left content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '64px 48px 64px 72px',
            flex: 1,
            justifyContent: 'center',
            gap: 20,
            position: 'relative',
          }}
        >
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
            zamanishtiyaq.work
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: '#1a1a1a',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Zaman Ishtiyaq
          </div>

          {/* Title badge */}
          <div
            style={{
              display: 'flex',
              background: '#facc15',
              border: '3px solid #1a1a1a',
              boxShadow: '5px 5px 0 #1a1a1a',
              padding: '12px 22px',
              fontSize: 26,
              fontWeight: 800,
              color: '#1a1a1a',
              borderRadius: 12,
              alignSelf: 'flex-start',
            }}
          >
            AI-Native Backend Engineer
          </div>

          {/* Bio */}
          <div
            style={{
              fontSize: 20,
              color: '#555',
              lineHeight: 1.5,
              maxWidth: 500,
              fontWeight: 700,
            }}
          >
            Building AI products, data systems &amp; iOS apps.
            Currently at Atlan.
          </div>
        </div>

        {/* Right — photo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 72px 48px 16px',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: 280,
              height: 280,
              border: '4px solid #1a1a1a',
              boxShadow: '10px 10px 0 #1a1a1a',
              borderRadius: 24,
              overflow: 'hidden',
              display: 'flex',
              background: 'white',
            }}
          >
            <img
              src={photoSrc}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
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
