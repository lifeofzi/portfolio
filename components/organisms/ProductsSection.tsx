import Link from 'next/link';
import './ProductsSection.css';

const products = [
  {
    href: '/supercharge',
    cardClass: 'ps-card--yellow',
    availability: 'Available now',
    price: '₹99',
    name: 'Supercharge',
    tagline: '814 Claude Code skills. One command.',
    desc: 'Install 814 community-curated Claude Code skills in 60 seconds. Claude handles the setup.',
    cta: 'Get it →',
  },
  {
    href: '/switchline',
    cardClass: 'ps-card--dark',
    availability: 'Available now',
    price: 'From $297/mo',
    name: 'Switchline',
    tagline: 'AI receptionist. 24/7.',
    desc: 'Answers every call, books appointments, qualifies leads, and texts you a summary. No voicemail.',
    cta: 'Learn more →',
  },
];

export function ProductsSection() {
  return (
    <section className="ps-section">
      <div className="ps-inner">
        <div className="ps-header">
          <div className="ps-header-left">
            <span className="ps-badge">Digital Products</span>
            <h2 className="ps-title">
              Tools I <span className="ps-title-highlight">Sell</span>
            </h2>
          </div>
          <Link href="/products" className="btn-neo bg-black text-white self-start sm:self-auto">
            View all →
          </Link>
        </div>

        <div className="ps-grid">
          {products.map((p) => (
            <Link key={p.href} href={p.href} className={`ps-card ${p.cardClass}`}>
              <div className="ps-card-top">
                <span className="ps-card-availability">{p.availability}</span>
                <span className="ps-card-price">{p.price}</span>
              </div>
              <div className="ps-card-body">
                <h3 className="ps-card-name">{p.name}</h3>
                <p className="ps-card-tagline">{p.tagline}</p>
                <p className="ps-card-desc">{p.desc}</p>
              </div>
              <span className="ps-card-cta">{p.cta}</span>
            </Link>
          ))}

          <div className="ps-card ps-card--placeholder">
            <span className="ps-placeholder-label">More coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
