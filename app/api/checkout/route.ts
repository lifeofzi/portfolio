import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, phone } = await req.json();

  if (!email || !phone) {
    return NextResponse.json({ error: 'Email and phone are required.' }, { status: 400 });
  }

  const orderId = `SC_${crypto.randomUUID().replace(/-/g, '').slice(0, 20).toUpperCase()}`;

  const res = await fetch('https://api.cashfree.com/pg/orders', {
    method: 'POST',
    headers: {
      'x-client-id': process.env.CASHFREE_APP_ID!,
      'x-client-secret': process.env.CASHFREE_SECRET_KEY!,
      'x-api-version': '2023-08-01',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      order_id: orderId,
      order_amount: 99,
      order_currency: 'INR',
      customer_details: {
        customer_id: `GUEST_${crypto.randomUUID().replace(/-/g, '').slice(0, 8)}`,
        customer_email: email,
        customer_phone: phone,
      },
      order_meta: {
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/supercharge/success?order_id={order_id}`,
      },
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ error: data.message || 'Payment init failed.' }, { status: 400 });
  }

  return NextResponse.json({ paymentSessionId: data.payment_session_id });
}
