import React from 'react';
import { cn } from '../../lib/cn';

export const fieldBase =
  'w-full rounded-md border border-border-default bg-bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-focus-ring focus:border-action-primary transition-colors';

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}

export const Field: React.FC<FieldProps> = ({
  id,
  label,
  required,
  hint,
  error,
  className,
  children,
}) => {
  return (
    <div className={cn('space-y-2', className)}>
      <label htmlFor={id} className="text-xs font-semibold text-text-muted">
        {label}
        {required ? ' *' : ''}
      </label>
      {children}
      {error ? (
        <p className="text-xs text-status-danger">{error}</p>
      ) : hint ? (
        <p className="text-xs text-text-subtle">{hint}</p>
      ) : null}
    </div>
  );
};
