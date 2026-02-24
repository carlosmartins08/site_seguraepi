
import React from 'react';
import Link from 'next/link';
import { cn } from '../../lib/cn';

interface DecisionCardProps {
  title: string;
  description: string;
  eyebrow?: string;
  badges?: string[];
  icon?: React.ReactNode;
  href: string;
  actionText: string;
  className?: string;
}

export const DecisionCard: React.FC<DecisionCardProps> = ({ 
  title, 
  description, 
  eyebrow,
  badges,
  icon, 
  href, 
  actionText, 
  className 
}) => {
  const isInternal = href.startsWith('/') && !href.startsWith('//');

  return (
    <div className={cn(
      "rounded-lg bg-bg-surface p-8 border border-border-default shadow-elevation-1 transition-[transform,box-shadow,border-color] duration-base ease-standard group flex flex-col h-full hover:shadow-elevation-2 hover:-translate-y-0.5 hover:border-action-primary",
      className
    )}>
      {eyebrow && (
        <span className="text-action-primary font-display font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
          {eyebrow}
        </span>
      )}
      
      {icon && <div className="mb-6 text-action-primary">{icon}</div>}
      
      <h3 className="text-xl md:text-2xl font-display font-black mb-4 text-text-primary group-hover:text-action-primaryHover transition-colors uppercase tracking-tight">
        {title}
      </h3>
      
      <p className="text-slate-500 mb-6 flex-grow leading-relaxed font-sans text-sm md:text-base">
        {description}
      </p>

      {badges && badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {badges.map((badge, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 bg-bg-surfaceMuted border border-border-default rounded-md text-[9px] font-display font-bold uppercase tracking-widest text-text-muted transition-[transform,color,border-color,box-shadow] duration-base ease-standard group-hover:scale-110 group-hover:text-action-primaryHover group-hover:border-action-primary/50 group-hover:shadow-glow-brand inline-block origin-center"
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      {isInternal ? (
        <Link href={href} className="text-text-primary font-display font-bold uppercase text-xs tracking-widest flex items-center group/link mt-auto">
          {actionText}
          <span className="ml-3 block w-6 h-[2px] bg-action-primary transition-all duration-300 group-hover/link:w-12 shadow-glow-brand"></span>
        </Link>
      ) : (
        <a href={href} className="text-text-primary font-display font-bold uppercase text-xs tracking-widest flex items-center group/link mt-auto">
          {actionText}
          <span className="ml-3 block w-6 h-[2px] bg-action-primary transition-all duration-300 group-hover/link:w-12 shadow-glow-brand"></span>
        </a>
      )}
    </div>
  );
};

