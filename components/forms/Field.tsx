import React from 'react';
import { cn } from '../../lib/cn';

export const fieldBase =
  'w-full rounded-md border border-border-default bg-bg-surface px-4 py-3 text-bodySM text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-focus-ring focus:border-action-primary transition-[border-color,box-shadow,color] duration-base ease-standard';

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
      <label htmlFor={id} className="text-labelMD font-semibold text-text-secondary">
        {label}
        {required ? ' *' : ''}
      </label>
      {children}
      {error ? (
        <p className="text-bodySM text-status-danger">{error}</p>
      ) : hint ? (
        <p className="text-bodySM text-text-muted">{hint}</p>
      ) : null}
    </div>
  );
};
