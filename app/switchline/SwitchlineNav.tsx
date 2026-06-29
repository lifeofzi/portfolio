'use client';

import { useState } from 'react';

const links = [
  { href: '#pricing', label: 'Pricing' },
  { href: '#how', label: 'How it works' },
  { href: '#contact', label: 'Contact' },
];

export function SwitchlineNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap">
        <div className="brand"><span className="live-dot" /><span>Switchline</span></div>

        {/* Desktop section links */}
        <nav className="nav-links" aria-label="Page sections">
          {links.map((l) => (
            <a key={l.href} className="nav-link" href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="sw-nav-right">
          <a className="nav-cta" href="#contact">Get in touch</a>

          {/* Hamburger — mobile only */}
          <button
            className="sw-hamburger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`sw-bar ${open ? 'sw-bar-top-open' : ''}`} />
            <span className={`sw-bar ${open ? 'sw-bar-mid-open' : ''}`} />
            <span className={`sw-bar ${open ? 'sw-bar-bot-open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`sw-mobile-menu ${open ? 'sw-mobile-menu-open' : ''}`} aria-hidden={!open}>
        {links.map((l) => (
          <a key={l.href} className="sw-mobile-link" href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
