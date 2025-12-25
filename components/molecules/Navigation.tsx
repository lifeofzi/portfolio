'use client';

import { CustomLink } from '@/components/atoms/Link';
import { SocialIcon } from '@/components/atoms/SocialIcon';
import { usePathname } from 'next/navigation';
import { profileInfo } from '@/data/profile';
import { contactInfo } from '@/data/contact';

/**
 * Molecule: Navigation Component
 * Neo-brutalist navigation with chunky borders and bold colors
 */
export const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
  ];

  const socialLinks = [
    {
      href: contactInfo.linkedin,
      label: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      href: contactInfo.github,
      label: 'GitHub',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      href: contactInfo.twitter,
      label: 'Twitter/X',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between neo-card rounded-2xl px-5 sm:px-7 py-3 bg-[#fde68a]">
          <div className="text-xl sm:text-2xl font-bold font-display text-black flex items-center gap-2">
            <span className="px-3 py-1 bg-white border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,0.85)] rounded-xl">
              {profileInfo.name.split(' ')[0]}
            </span>
            <span className="px-3 py-1 bg-black text-yellow-300 border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,0.85)] rounded-xl">
              {profileInfo.name.split(' ')[1] || ''}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Navigation Links */}
            <div className="hidden sm:flex items-center gap-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href === '/projects' && pathname.startsWith('/projects')) ||
                  (item.href === '/blog' && pathname.startsWith('/blog'));
                
                // Special styling for Blog button
                if (item.href === '/blog') {
                  return (
                    <CustomLink
                      key={item.href}
                      href={item.href}
                      className={`font-display text-sm sm:text-base px-3 py-2 border-[3px] rounded-xl transition-transform duration-200 !text-black no-underline ${
                        isActive
                          ? 'bg-[#fce7f3] border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] -translate-y-0.5'
                          : 'bg-[#fce7f3] border-black hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]'
                      }`}
                    >
                      {item.label}
                    </CustomLink>
                  );
                }
                
                return (
                  <CustomLink
                    key={item.href}
                    href={item.href}
                    className={`font-display text-sm sm:text-base px-3 py-2 border-[3px] rounded-xl transition-transform duration-200 !text-black no-underline ${
                      isActive
                        ? 'bg-white border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] -translate-y-0.5'
                        : 'bg-[#bfdbfe] border-black hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]'
                    }`}
                  >
                    {item.label}
                  </CustomLink>
                );
              })}
              <a
                href={`mailto:${contactInfo.email}`}
                className="font-display text-sm sm:text-base px-3 py-2 bg-[#fca5a5] border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] hover:-translate-y-0.5 transition-transform duration-200 no-underline text-black"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.label}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

