
import React from 'react';
import { cn } from '../../lib/cn';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
  as?: 'h1' | 'h2';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  description,
  alignment = 'left',
  light = false,
  as = 'h2',
}) => {
  const TitleTag = as;

  return (
    <div className={cn(
      "mb-8 md:mb-10",
      alignment === 'center' ? "text-center mx-auto max-w-3xl" : "text-left"
    )}>
      {subtitle && (
        <span className="text-action-primary font-display font-semibold uppercase tracking-[0.14em] text-labelSM mb-2 block">
          {subtitle}
        </span>
      )}
      <TitleTag className={cn(
        "text-titleLG md:text-titleXL font-display font-bold leading-tight mb-3 md:mb-4",
        light ? "text-text-inverse" : "text-text-primary"
      )}>
        {title}
      </TitleTag>
      {description && (
        <p className={cn(
          "text-bodyMD md:text-bodyLG leading-relaxed max-w-3xl",
          alignment === 'center' ? "mx-auto" : "",
          light ? "text-text-faint" : "text-text-body"
        )}>
          {description}
        </p>
      )}
      <div className={cn(
        "w-10 h-1 bg-action-primary mt-4 rounded-full",
        alignment === 'center' ? "mx-auto" : ""
      )} />
    </div>
  );
};
