import { siHubspot, siWhatsapp, siIntercom, siN8n, siMake, siVonage } from 'simple-icons';

type SimpleIcon = { path: string; hex: string };

const ICONS: Record<string, SimpleIcon> = {
  'HubSpot': siHubspot,
  'WhatsApp': siWhatsapp,
  'Intercom': siIntercom,
  'n8n': siN8n,
  'Make': siMake,
  'Vonage': siVonage,
};

// Brand colors for tools without simple-icons entries
const COLORS: Record<string, string> = {
  'Salesforce': '00A1E0',
  'Go High Level': '02B9EB',
  'Dentrix': '005596',
  'OpenDental': '0066A0',
  'Jane App': '00B27A',
  'Epic': 'C8102E',
  'ChiroTouch': 'F26522',
  'Twilio': 'F22F46',
  'Telnyx': '00C48C',
  'viaSocket': '7C3AED',
  'SMS': '64748B',
  'SIP / custom': '64748B',
};

export function IntegrationLogo({ name, size = 16 }: { name: string; size?: number }) {
  const icon = ICONS[name];

  if (icon) {
    return (
      <svg
        role="img"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-label={name}
        style={{ flexShrink: 0, display: 'block' }}
        fill={`#${icon.hex}`}
      >
        <path d={icon.path} />
      </svg>
    );
  }

  const color = COLORS[name] ?? '64748B';
  const label = name === 'SIP / custom' ? 'SIP' : name === 'SMS' ? 'SMS' : name.charAt(0).toUpperCase();
  const fontSize = label.length > 1 ? Math.round(size * 0.42) : Math.round(size * 0.58);

  return (
    <span
      aria-label={name}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.25),
        background: `#${color}`,
        color: '#fff',
        fontSize,
        fontWeight: 700,
        fontFamily: 'var(--font-space-mono)',
        flexShrink: 0,
        lineHeight: 1,
        letterSpacing: label.length > 1 ? '-0.04em' : undefined,
      }}
    >
      {label}
    </span>
  );
}
