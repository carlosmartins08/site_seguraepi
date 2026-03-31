
import React from 'react';
import { cn } from '../../lib/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'narrow' | 'default' | 'wide';
}

export const Container: React.FC<ContainerProps> = ({ children, className, size = 'default' }) => {
  const sizes = {
    narrow: 'max-w-3xl',
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
  };

  return (
    <div className={cn(`${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8`, className)}>
      {children}
    </div>
  );
};
