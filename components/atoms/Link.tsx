import Link from 'next/link';
import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

/**
 * Atom: Link Component
 * Reusable link element with consistent styling
 */
export const CustomLink: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  external = false,
}) => {
  const baseStyles = 'text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline transition-colors';
  
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseStyles} ${className}`}>
      {children}
    </Link>
  );
};

