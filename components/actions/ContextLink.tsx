
import React from 'react';
import Link from 'next/link';
import { cn } from '../../lib/cn';

type AnchorAttrs = React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface ContextLinkProps extends AnchorAttrs {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
}

export const ContextLink: React.FC<ContextLinkProps> = ({ children, href, className, onClick, ...rest }) => {
  const isInternal = href.startsWith('/') && !href.startsWith('//');

  if (isInternal) {
    return (
      <Link
        href={href as any}
        onClick={onClick}
        className={cn(
          "text-text-primary font-sans font-semibold text-sm inline-flex items-center gap-2 group transition-colors hover:text-action-primaryHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface",
          className
        )}
        {...(rest as any)}
      >
        {children}
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    );
  }

  return (
    <a 
      href={href} 
      onClick={onClick}
      className={cn(
        "text-text-primary font-sans font-semibold text-sm inline-flex items-center gap-2 group transition-colors hover:text-action-primaryHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface",
        className
      )}
      {...rest}
    >
      {children}
      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  );
};
