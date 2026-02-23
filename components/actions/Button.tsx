
import React from 'react';
import { cn } from '../../lib/cn';

type AnchorAttrs = React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface ButtonProps extends AnchorAttrs {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, href, variant = 'primary', className, ...rest }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 font-display font-bold uppercase tracking-wide transition-all duration-base ease-standard rounded-md hover:-translate-y-1 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface";
  
  const variants = {
    primary: "bg-action-primary text-text-onBrand shadow-glow-brand hover:bg-action-primaryHover active:bg-action-primaryPressed",
    secondary: "bg-action-secondary text-text-inverse hover:bg-action-secondaryHover",
    outline: "bg-transparent border-2 border-border-strong text-text-primary hover:bg-bg-inverse hover:text-text-inverse",
    ghost: "bg-transparent text-text-primary hover:bg-bg-surfaceMuted"
  };

  return (
    <a href={href} className={cn(baseStyles, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
};
