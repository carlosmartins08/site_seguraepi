import React from 'react';
import { cn } from '../../lib/cn';

interface LastUpdatedProps {
  date: string;
  label?: string;
  variant?: 'light' | 'dark';
  className?: string;
}

const formatDate = (date: string) => {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString('pt-BR');
};

export const LastUpdated: React.FC<LastUpdatedProps> = ({
  date,
  label = 'Ultima atualizacao',
  variant = 'light',
  className,
}) => {
  const isDark = variant === 'dark';
  return (
    <p
      className={cn(
        'text-bodySM font-sans font-medium tracking-wide',
        isDark ? 'text-text-faint' : 'text-text-muted',
        className
      )}
    >
      {label}: {formatDate(date)}
    </p>
  );
};

