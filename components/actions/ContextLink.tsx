
import React from 'react';
import { cn } from '../../lib/cn';

type AnchorAttrs = React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface ContextLinkProps extends AnchorAttrs {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
}

export const ContextLink: React.FC<ContextLinkProps> = ({ children, href, className, onClick, ...rest }) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className={cn(
        "text-text-primary font-display font-bold uppercase text-[10px] tracking-widest inline-flex items-center group transition-colors hover:text-action-primaryHover",
        className
      )}
      {...rest}
    >
      {children}
      <svg className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  );
};
