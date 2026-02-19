
import React from 'react';
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
  return (
    <div className={cn(
      "rounded-3xl bg-white p-8 border border-slate-100 shadow-segura-soft transition-all duration-500 group flex flex-col h-full hover:shadow-segura-hover hover:-translate-y-2 hover:border-segura-primary",
      className
    )}>
      {eyebrow && (
        <span className="text-segura-primary font-display font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
          {eyebrow}
        </span>
      )}
      
      {icon && <div className="mb-6 text-segura-primary">{icon}</div>}
      
      <h3 className="text-xl md:text-2xl font-display font-black mb-4 text-segura-dark group-hover:text-segura-primary transition-colors uppercase tracking-tight">
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
              className="px-3 py-1 bg-segura-offwhite border border-slate-100 rounded-lg text-[9px] font-display font-bold uppercase tracking-widest text-slate-400 transition-all duration-500 group-hover:scale-115 group-hover:text-segura-primary group-hover:border-segura-primary/50 group-hover:shadow-segura-glow inline-block origin-center"
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      <a href={href} className="text-segura-dark font-display font-bold uppercase text-xs tracking-widest flex items-center group/link mt-auto">
        {actionText}
        <span className="ml-3 block w-6 h-[2px] bg-segura-primary transition-all duration-300 group-hover/link:w-12 shadow-segura-glow"></span>
      </a>
    </div>
  );
};
