
import React from 'react';
import { cn } from '../../lib/cn';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'offwhite' | 'immersive';
}

export const Section: React.FC<SectionProps> = ({ id, children, className, variant = 'default' }) => {
  const variantStyles = {
    default: "bg-bg-surface",
    dark: "bg-bg-inverse text-text-inverse",
    offwhite: "bg-bg-canvas",
    immersive: "bg-bg-deep text-text-inverse rounded-t-2xl"
  };

  return (
    <section 
      id={id} 
      className={cn(
        "py-16 md:py-20 transition-colors duration-slow ease-standard", 
        variantStyles[variant],
        className
      )}
    >
      {children}
    </section>
  );
};

