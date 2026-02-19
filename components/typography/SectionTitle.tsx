
import React from 'react';
import { cn } from '../../lib/cn';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  description,
  alignment = 'left',
  light = false 
}) => {
  return (
    <div className={cn(
      "mb-12",
      alignment === 'center' ? "text-center mx-auto max-w-3xl" : "text-left"
    )}>
      {subtitle && (
        <span className="text-segura-primary font-display font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-5xl font-display font-extrabold leading-tight mb-4",
        light ? "text-white" : "text-segura-dark"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg leading-relaxed max-w-2xl",
          alignment === 'center' ? "mx-auto" : "",
          light ? "text-slate-300" : "text-slate-500"
        )}>
          {description}
        </p>
      )}
      <div className={cn(
        "w-16 h-1.5 bg-segura-primary mt-6 rounded-full",
        alignment === 'center' ? "mx-auto" : ""
      )} />
    </div>
  );
};
