
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
      "mb-10",
      alignment === 'center' ? "text-center mx-auto max-w-3xl" : "text-left"
    )}>
      {subtitle && (
        <span className="text-action-primary font-display font-bold uppercase tracking-[0.18em] text-[11px] mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "text-2xl md:text-4xl font-display font-bold leading-tight mb-4",
        light ? "text-text-inverse" : "text-text-primary"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-base md:text-lg leading-relaxed max-w-2xl",
          alignment === 'center' ? "mx-auto" : "",
          light ? "text-text-faint" : "text-text-body"
        )}>
          {description}
        </p>
      )}
      <div className={cn(
        "w-12 h-1 bg-action-primary mt-5 rounded-full",
        alignment === 'center' ? "mx-auto" : ""
      )} />
    </div>
  );
};
