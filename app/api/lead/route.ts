import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { phone, whatsapp, email, source } = await req.json();

  if (!phone) {
    return NextResponse.json({ error: 'Phone number is required.' }, { status: 400 });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK;
  if (!webhookUrl) {
    return NextResponse.json({ error: 'Webhook not configured.' }, { status: 500 });
  }

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, whatsapp: whatsapp || '', email: email || '', source: source || 'unknown' }),
    redirect: 'manual',
  });

  // Google Apps Script returns 302 after executing doPost — treat any 2xx or 3xx as success
  if (res.status >= 400) {
    return NextResponse.json({ error: 'Failed to save. Try again.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
