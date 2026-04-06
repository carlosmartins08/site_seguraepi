
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
        <span className="text-action-primary font-display uppercase text-labelSM mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "text-titleLG md:text-titleXL font-display font-bold leading-tight mb-4",
        light ? "text-text-inverse" : "text-text-primary"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-bodyMD md:text-bodyLG leading-relaxed max-w-2xl",
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
