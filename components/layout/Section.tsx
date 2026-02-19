
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
    default: "bg-white",
    dark: "bg-segura-dark text-white",
    offwhite: "bg-segura-offwhite",
    immersive: "bg-segura-dark text-white rounded-t-4xl md:rounded-t-[5rem]"
  };

  return (
    <section 
      id={id} 
      className={cn(
        "py-20 md:py-32 transition-colors duration-500", 
        variantStyles[variant],
        className
      )}
    >
      {children}
    </section>
  );
};
