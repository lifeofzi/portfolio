import Image from 'next/image';
import type { PastWorkItem } from '@/data/design';

interface Props {
  item: PastWorkItem;
}

export function PastWorkCard({ item }: Props) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="neo-card rounded-2xl overflow-hidden group block hover:-translate-y-1 transition-transform duration-150"
    >
      <div className="relative w-full aspect-video bg-[#f5f5f5]">
        <Image
          src={item.image}
          alt={`Screenshot of ${item.name}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-base font-display font-bold text-black mb-1">{item.name}</h3>
        <p className="text-sm font-display text-black/60">{item.caption}</p>
        <div className="mt-2 text-xs font-display font-semibold text-black/40 group-hover:text-black transition-colors">
          Visit site →
        </div>
      </div>
    </a>
  );
}
