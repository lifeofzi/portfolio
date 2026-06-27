import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const orderId = req.nextUrl.searchParams.get('order_id');

  if (!orderId) {
    return NextResponse.json({ error: 'Missing order_id' }, { status: 400 });
  }

  const res = await fetch(`https://api.cashfree.com/pg/orders/${orderId}`, {
    headers: {
      'x-client-id': process.env.CASHFREE_APP_ID!,
      'x-client-secret': process.env.CASHFREE_SECRET_KEY!,
      'x-api-version': '2023-08-01',
    },
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ paid: false }, { status: 200 });
  }

  return NextResponse.json({ paid: data.order_status === 'PAID' });
}
