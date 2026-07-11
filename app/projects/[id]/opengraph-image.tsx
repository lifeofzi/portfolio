import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';
import { getProjectById, projects } from '@/data/projects';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
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

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);
  const fontData = await loadFont();

  const title = project?.title ?? 'Project';
  const description = (project?.description ?? '').slice(0, 120) + (project?.description && project.description.length > 120 ? '…' : '');
  const techs = (project?.technologies ?? []).slice(0, 4);
  const duration = project?.duration ?? '';
  const isInProgress = duration.includes('In Progress');

  let logoSrc: string | null = null;
  if (project?.image) {
    try {
      const imgPath = join(process.cwd(), 'public', project.image);
      const buf = readFileSync(imgPath);
      const ext = project.image.endsWith('.png') ? 'png' : 'jpeg';
      logoSrc = `data:image/${ext};base64,${buf.toString('base64')}`;
    } catch {
      logoSrc = null;
    }
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#fef3c7',
          display: 'flex',
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

        {/* Left — content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '64px 40px 64px 72px',
            flex: 1,
            justifyContent: 'center',
            gap: 22,
            position: 'relative',
          }}
        >
          {/* Tag row */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                background: '#1a1a1a',
                color: 'white',
                padding: '8px 16px',
                borderRadius: 8,
                fontSize: 17,
                fontWeight: 800,
              }}
            >
              zamanishtiyaq.work
            </div>
            {isInProgress && (
              <div
                style={{
                  display: 'flex',
                  background: '#bbf7d0',
                  border: '2px solid #1a1a1a',
                  padding: '6px 14px',
                  borderRadius: 8,
                  fontSize: 17,
                  fontWeight: 800,
                  color: '#1a1a1a',
                }}
              >
                In Progress
              </div>
            )}
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: '#1a1a1a',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 21,
              color: '#444',
              lineHeight: 1.5,
              maxWidth: 580,
              fontWeight: 700,
            }}
          >
            {description}
          </div>

          {/* Tech pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {techs.map((tech) => (
              <div
                key={tech}
                style={{
                  display: 'flex',
                  background: 'white',
                  border: '2px solid #1a1a1a',
                  boxShadow: '3px 3px 0 #1a1a1a',
                  padding: '6px 14px',
                  borderRadius: 8,
                  fontSize: 17,
                  fontWeight: 800,
                  color: '#1a1a1a',
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Right — logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 72px 48px 16px',
            position: 'relative',
          }}
        >
          {logoSrc ? (
            <div
              style={{
                width: 240,
                height: 240,
                border: '4px solid #1a1a1a',
                boxShadow: '10px 10px 0 #1a1a1a',
                borderRadius: 24,
                overflow: 'hidden',
                display: 'flex',
                background: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 16,
              }}
            >
              <img
                src={logoSrc}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          ) : (
            <div
              style={{
                width: 200,
                height: 200,
                background: '#facc15',
                border: '4px solid #1a1a1a',
                boxShadow: '10px 10px 0 #1a1a1a',
                borderRadius: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 80,
                fontWeight: 800,
                color: '#1a1a1a',
              }}
            >
              {title[0]}
            </div>
          )}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Inter', data: fontData, weight: 800, style: 'normal' }],
    }
  );
}
