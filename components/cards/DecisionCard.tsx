'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '../../lib/cn';
import { MotionCard } from '../motion/MotionCard';

interface DecisionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  eyebrow?: string;
  badges?: string[];
  icon?: React.ReactNode;
  href: string;
  actionText: string;
  className?: string;
  motion?: boolean;
}

export const DecisionCard: React.FC<DecisionCardProps> = ({ 
  title, 
  description, 
  eyebrow,
  badges,
  icon, 
  href, 
  actionText, 
  className,
  motion = true,
  ...rest
}) => {
  const isInternal = href.startsWith('/') && !href.startsWith('//');
  const baseClasses = cn(
    "rounded-xl bg-bg-surface p-6 md:p-7 border border-border-subtle shadow-elevation-1 transition-[transform,box-shadow,border-color] duration-base ease-standard group flex flex-col h-full",
    motion ? "hover:shadow-elevation-2 hover:border-action-primary/40" : "hover:shadow-elevation-2 hover:-translate-y-0.5 hover:border-action-primary/40"
  );

  return (
    <MotionCard className={cn(baseClasses, className)} motion={motion} {...rest}>
      {eyebrow && (
        <span className="text-action-primary font-display font-bold uppercase tracking-[0.18em] text-labelSM mb-3 block">
          {eyebrow}
        </span>
      )}
      
      {icon && <div className="mb-6 text-action-primary">{icon}</div>}
      
      <h3 className="text-titleMD font-display font-semibold mb-3 text-text-primary group-hover:text-action-primaryHover transition-colors">
        {title}
      </h3>
      
      <p className="text-text-body mb-6 flex-grow leading-relaxed font-sans text-bodySM md:text-bodyMD">
        {description}
      </p>

      {badges && badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {badges.map((badge, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 bg-bg-surfaceMuted border border-border-subtle rounded-full text-labelSM font-semibold text-text-muted transition-[transform,color,border-color,box-shadow] duration-base ease-standard group-hover:text-action-primaryHover group-hover:border-action-primary/40 inline-block origin-center"
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      {isInternal ? (
        <Link
          href={href as any}
          className="text-text-primary font-sans font-semibold text-bodySM flex items-center gap-2 group/link mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface"
        >
          {actionText}
          <span className="block w-6 h-[2px] bg-action-primary transition-all duration-300 group-hover/link:w-10"></span>
        </Link>
      ) : (
        <a
          href={href}
          className="text-text-primary font-sans font-semibold text-bodySM flex items-center gap-2 group/link mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface"
        >
          {actionText}
          <span className="block w-6 h-[2px] bg-action-primary transition-all duration-300 group-hover/link:w-10"></span>
        </a>
      )}
    </MotionCard>
  );
};



