import React from 'react';
import { cn } from '../../lib/cn';

interface QuickSummaryProps {
  title?: string;
  items: string[];
  variant?: 'light' | 'dark';
  className?: string;
}

export const QuickSummary: React.FC<QuickSummaryProps> = ({
  title = 'Resumo rapido',
  items,
  variant = 'light',
  className,
}) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'rounded-2xl border p-5 md:p-6 shadow-elevation-1',
        isDark ? 'bg-white/10 border-white/10 text-text-faint' : 'bg-bg-surfaceMuted border-border-subtle text-text-body',
        className
      )}
    >
      <p className={cn(
        'text-[11px] font-display font-semibold uppercase tracking-[0.18em]',
        isDark ? 'text-action-primary' : 'text-action-primary'
      )}>
        {title}
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className={cn('mt-1 h-2 w-2 rounded-full', isDark ? 'bg-action-primary' : 'bg-action-primary')} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};


