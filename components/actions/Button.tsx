'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '../../lib/cn';
import { track } from '../../lib/analytics/track';
import { attachButtonFeedback } from '../../lib/motion/feedback';

type CommonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'outline-inverse' | 'ghost-inverse';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  trackEvent?: string;
  trackParams?: Record<string, any>;
  motion?: boolean;
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
  const motionEnabled = Boolean((props as { motion?: boolean }).motion);
  const motionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!motionEnabled || !motionRef.current) return;
    return attachButtonFeedback(motionRef.current);
  }, [motionEnabled]);

  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-[0.01em] ui-interactive rounded-lg border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface disabled:opacity-50 disabled:cursor-not-allowed",
    !motionEnabled && "ui-lift ui-press"
  );
  
  const variants = {
    primary: "bg-action-primary text-text-onBrand shadow-elevation-1 hover:bg-action-primaryHover hover:shadow-elevation-2 active:bg-action-primaryPressed",
    secondary: "bg-action-secondary text-text-inverse shadow-elevation-1 hover:bg-action-secondaryHover hover:shadow-elevation-2 active:bg-action-secondary",
    outline: "bg-transparent border-border-strong text-text-primary hover:border-action-primary hover:text-action-primaryHover hover:bg-bg-surfaceMuted",
    ghost: "bg-transparent text-text-primary hover:bg-bg-surfaceMuted",
    'outline-inverse': "bg-transparent border-bg-surface/40 text-text-inverse hover:border-action-primary hover:text-action-primaryHover hover:bg-bg-surface/10",
    'ghost-inverse': "bg-transparent text-text-inverse border-bg-surface/20 hover:bg-bg-surface/10 hover:border-bg-surface/40",
  };

  const sizes = {
    sm: "px-4 py-2 text-labelMD min-h-10",
    md: "px-6 py-3 text-bodySM min-h-11",
    lg: "px-8 py-4 text-bodyMD min-h-12",
  };

  if (typeof (props as any).href === 'string') {
    const { children, href, variant = 'primary', size = 'md', className, trackEvent, trackParams, onClick, motion: motionProp, ...rest } =
      props as AnchorButtonProps & { motion?: boolean };

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
          ref={motionRef as React.Ref<HTMLAnchorElement>}
          {...(rest as any)}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={cn(baseStyles, sizes[size], variants[variant], className)}
        onClick={handleClick}
        ref={motionRef as React.Ref<HTMLAnchorElement>}
        target={
          rest.target ??
          (href.startsWith('http://') || href.startsWith('https://') ? '_blank' : undefined)
        }
        rel={
          rest.rel ??
          (href.startsWith('http://') || href.startsWith('https://')
            ? 'noopener noreferrer'
            : undefined)
        }
        {...rest}
      >
        {children}
      </a>
    );
  }

  const { children, variant = 'primary', size = 'md', className, trackEvent, trackParams, onClick, type, motion: motionProp, ...rest } =
    props as ActionButtonProps & { motion?: boolean };
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (trackEvent) track(trackEvent, { ...trackParams });
    onClick?.(e);
  };

  return (
    <button
      type={type ?? 'button'}
      className={cn(baseStyles, sizes[size], variants[variant], className)}
      onClick={handleClick}
      ref={motionRef as React.Ref<HTMLButtonElement>}
      {...rest}
    >
      {children}
    </button>
  );
};

