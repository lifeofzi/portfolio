import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Switchline — AI Receptionist for Service Businesses';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0C2A2E',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top: brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF8A3D' }} />
          <span style={{ fontSize: '22px', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>Switchline</span>
        </div>

        {/* Middle: headline */}
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#9DB4B0', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '24px' }}>
            AI Receptionist · 24/7 · No missed calls
          </div>
          <div style={{ fontSize: '64px', fontWeight: 800, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '760px' }}>
            The calls you miss are the jobs you{' '}
            <span style={{ color: '#FF8A3D' }}>lose.</span>
          </div>
        </div>

        {/* Bottom: stats + price */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '40px' }}>
            {[
              { value: '24/7', label: 'Every call answered' },
              { value: '3 days', label: 'To go live' },
              { value: '$297/mo', label: 'Starter plan' },
            ].map((s) => (
              <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '28px', fontWeight: 800, color: '#FF8A3D', letterSpacing: '-0.02em' }}>{s.value}</span>
                <span style={{ fontSize: '13px', color: '#9DB4B0' }}>{s.label}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '14px', color: '#9DB4B0' }}>zamanishtiyaq.work/switchline</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
