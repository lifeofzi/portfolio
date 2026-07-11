import { pastWork } from '@/data/design';
import { PastWorkCard } from '@/components/molecules/PastWorkCard';

export function PastWorkGrid() {
  return (
    <section className="section-pad border-b-[3px] border-black bg-[#fef3c7]">
      <div className="section-inner">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-heading mb-3">Recent Work</h2>
          <p className="section-sub">Websites I&apos;ve designed and built</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastWork.map((item) => (
            <PastWorkCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
