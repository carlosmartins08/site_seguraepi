
import React from 'react';
import { cn } from '../../lib/cn';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, href, variant = 'primary', className }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 font-display font-bold uppercase tracking-wide transition-all duration-300 rounded-xl hover:-translate-y-1 active:scale-95";
  
  const variants = {
    primary: "bg-segura-primary text-white shadow-segura-glow hover:bg-white hover:text-segura-primary hover:ring-2 hover:ring-segura-primary",
    secondary: "bg-segura-secondary text-white hover:bg-segura-dark",
    outline: "bg-transparent border-2 border-segura-dark text-segura-dark hover:bg-segura-dark hover:text-white",
    ghost: "bg-transparent text-segura-dark hover:bg-segura-offwhite"
  };

  return (
    <a href={href} className={cn(baseStyles, variants[variant], className)}>
      {children}
    </a>
  );
};
