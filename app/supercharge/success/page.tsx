'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Navigation } from '@/components/molecules/Navigation';

function SuccessContent() {
  const params = useSearchParams();
  const orderId = params.get('order_id');
  const [status, setStatus] = useState<'loading' | 'paid' | 'failed'>('loading');

  useEffect(() => {
    if (!orderId) {
      setStatus('failed');
      return;
    }

    fetch(`/api/verify-payment?order_id=${orderId}`)
      .then((r) => r.json())
      .then((data) => setStatus(data.paid ? 'paid' : 'failed'))
      .catch(() => setStatus('failed'));
  }, [orderId]);

  if (status === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="w-8 h-8 border-[3px] border-black border-t-transparent rounded-full animate-spin" />
        <p className="font-display text-black/60">Verifying your payment…</p>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="max-w-lg mx-auto text-center py-24 px-4">
        <div className="neo-card rounded-2xl p-8 bg-red-100 mb-6">
          <h1 className="text-2xl font-display font-extrabold text-black mb-2">
            Payment not confirmed
          </h1>
          <p className="text-black/60 font-display text-sm">
            We couldn&apos;t verify your payment. If you were charged, email{' '}
            <a href="mailto:zaman.ishtiyaq@gmail.com" className="underline font-semibold">
              zaman.ishtiyaq@gmail.com
            </a>{' '}
            and I&apos;ll sort it out within 24 hours.
          </p>
        </div>
        <Link href="/supercharge" className="btn-neo bg-black text-white">
          ← Back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto text-center py-24 px-4">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#bbf7d0] border-[3px] border-black rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] mb-6 text-3xl">
        ✓
      </div>

      <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-black mb-3">
        You&apos;re supercharged.
      </h1>
      <p className="text-black/60 font-display mb-8 leading-relaxed">
        Download the SKILL.md file below. Drop it into{' '}
        <code className="bg-black text-[#facc15] px-2 py-0.5 rounded text-sm font-mono">
          ~/.claude/skills/supercharge/
        </code>{' '}
        then run <code className="bg-black text-[#facc15] px-2 py-0.5 rounded text-sm font-mono">/supercharge</code> in Claude Code.
      </p>

      <a
        href={`/api/download?order_id=${orderId}`}
        download="SKILL.md"
        className="btn-neo bg-black text-white text-lg px-8 py-4 inline-block mb-8"
      >
        Download SKILL.md
      </a>

      <div className="neo-card rounded-2xl p-6 bg-white text-left space-y-3">
        <p className="font-display font-extrabold text-black text-sm">What to do next</p>
        <ol className="space-y-2 text-sm text-black/70 font-display list-decimal list-inside">
          <li>Create the folder: <code className="font-mono bg-black/5 px-1 rounded">mkdir -p ~/.claude/skills/supercharge</code></li>
          <li>Move the file there: <code className="font-mono bg-black/5 px-1 rounded">mv ~/Downloads/SKILL.md ~/.claude/skills/supercharge/</code></li>
          <li>Open Claude Code and type <code className="font-mono bg-black/5 px-1 rounded">/supercharge</code></li>
          <li>Choose your packs — or just say &ldquo;all&rdquo;</li>
          <li>Restart Claude Code when done</li>
        </ol>
      </div>

      <p className="mt-8 text-black/30 font-display text-xs">
        Questions? <a href="mailto:zaman.ishtiyaq@gmail.com" className="underline">zaman.ishtiyaq@gmail.com</a>
      </p>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#fef3c7]">
      <Navigation />
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="w-8 h-8 border-[3px] border-black border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <SuccessContent />
      </Suspense>
    </div>
  );
}
