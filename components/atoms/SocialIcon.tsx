import React from 'react';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

/**
 * Atom: SocialIcon Component
 * Reusable social media icon link
 */
export const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  icon,
  label,
  className = '',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/80 border border-gray-200 text-gray-700 hover:text-blue-600 hover:bg-white hover:border-blue-300 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md ${className}`}
    >
      {icon}
    </a>
  );
};

