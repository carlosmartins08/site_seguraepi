'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '../../lib/cn';
import { track } from '../../lib/analytics/track';

type CommonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  trackEvent?: string;
  trackParams?: Record<string, any>;
};

type AnchorButtonProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className' | 'href' | 'onClick'> & {
    href: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  };

type ActionButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className' | 'onClick'> & {
    href?: undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };

export type ButtonProps = AnchorButtonProps | ActionButtonProps;

export const Button: React.FC<ButtonProps> = (props) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-[0.01em] transition-[transform,box-shadow,background-color,border-color,color] duration-base ease-standard rounded-md hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-action-primary text-text-onBrand shadow-elevation-1 hover:bg-action-primaryHover active:bg-action-primaryPressed",
    secondary: "bg-action-secondary text-text-inverse hover:bg-action-secondaryHover",
    outline: "bg-transparent border border-border-strong text-text-primary hover:border-action-primary hover:text-action-primaryHover",
    ghost: "bg-transparent text-text-primary hover:bg-bg-surfaceMuted"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs rounded-sm",
    md: "px-6 py-3 text-sm rounded-md",
    lg: "px-8 py-4 text-base rounded-lg",
  };

  if (typeof (props as any).href === 'string') {
    const { children, href, variant = 'primary', size = 'md', className, trackEvent, trackParams, onClick, ...rest } =
      props as AnchorButtonProps;

    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
      if (trackEvent) track(trackEvent, { href, ...trackParams });
      onClick?.(e);
    };

    const isInternal = href.startsWith('/') && !href.startsWith('//');

    if (isInternal) {
      return (
        <Link
          href={href as any}
          className={cn(baseStyles, sizes[size], variants[variant], className)}
          onClick={handleClick}
          {...(rest as any)}
        >
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={cn(baseStyles, sizes[size], variants[variant], className)} onClick={handleClick} {...rest}>
        {children}
      </a>
    );
  }

  const { children, variant = 'primary', size = 'md', className, trackEvent, trackParams, onClick, type, ...rest } =
    props as ActionButtonProps;
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (trackEvent) track(trackEvent, { ...trackParams });
    onClick?.(e);
  };

  return (
    <button
      type={type ?? 'button'}
      className={cn(baseStyles, sizes[size], variants[variant], className)}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};
