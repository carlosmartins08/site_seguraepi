import React from 'react';
import { cn } from '../../lib/cn';

export type SeguraLogoVariant = 'light' | 'dark' | 'mono-white' | 'mono-black' | 'icon-only';
export type SeguraLogoSize = 'sm' | 'md' | 'lg' | 'xl' | number;
export type SeguraLogoPadding = 'none' | 'tight' | 'base' | 'relaxed' | number;
export type SeguraLogoSection = 'navbar' | 'footer' | 'hero' | 'modal' | 'card' | 'inline';

type LogoRule = {
  variant: SeguraLogoVariant;
  size: SeguraLogoSize;
  padding: SeguraLogoPadding;
  note: string;
};

const WORDMARK_RATIO = 180 / 48;
const MIN_WORDMARK_HEIGHT = 32;
const MIN_ICON_HEIGHT = 28;

export const LOGO_SIZES: Record<Exclude<SeguraLogoSize, number>, number> = {
  sm: 24,
  md: 32,
  lg: 48,
  xl: 56,
};

export const LOGO_PADDING: Record<Exclude<SeguraLogoPadding, number>, number> = {
  none: 0,
  tight: 4,
  base: 8,
  relaxed: 12,
};

export const LOGO_RULES: Record<SeguraLogoSection, LogoRule> = {
  navbar: {
    variant: 'dark',
    size: 'md',
    padding: 'tight',
    note: 'Usar sobre heros/headers escuros; alternar para light ao ganhar background claro no scroll.',
  },
  footer: {
    variant: 'mono-white',
    size: 'lg',
    padding: 'relaxed',
    note: 'Rodap\u00e9 escuro permanente; preferir mono branco para contraste m\u00e1ximo.',
  },
  hero: {
    variant: 'dark',
    size: 'xl',
    padding: 'relaxed',
    note: 'Hero principal escuro; assinatura expandida com glow t\u00e9cnico.',
  },
  modal: {
    variant: 'icon-only',
    size: 'md',
    padding: 'base',
    note: 'Modais de compliance e layouts compactos usam apenas o s\u00edmbolo.',
  },
  card: {
    variant: 'light',
    size: 'sm',
    padding: 'tight',
    note: 'Cart\u00f5es claros ou chips internos.',
  },
  inline: {
    variant: 'light',
    size: 'sm',
    padding: 'tight',
    note: 'Uso inline em textos/links sobre fundo claro.',
  },
};

const ASSETS: Record<SeguraLogoVariant, { horizontal: string; vertical?: string; icon?: string }> = {
  light: {
    horizontal: '/brand/logo-wordmark-h-color.png',
    vertical: '/brand/logo-wordmark-v-color.png',
    icon: '/brand/logo-icon-color.png',
  },
  dark: {
    horizontal: '/brand/logo-wordmark-h-white.png',
    vertical: '/brand/logo-wordmark-v-white.png',
    icon: '/brand/logo-icon-color-light.png',
  },
  'mono-white': {
    horizontal: '/brand/logo-wordmark-h-mono-white.png',
    vertical: '/brand/logo-wordmark-v-mono-white.png',
    icon: '/brand/logo-icon-white.png',
  },
  'mono-black': {
    horizontal: '/brand/logo-wordmark-h-color.png',
    vertical: '/brand/logo-wordmark-v-color.png',
    icon: '/brand/logo-icon-color.png',
  },
  'icon-only': {
    horizontal: '/brand/logo-icon-color.png',
    icon: '/brand/logo-icon-color.png',
  },
};

interface SeguraLogoProps {
  variant?: SeguraLogoVariant;
  size?: SeguraLogoSize;
  padding?: SeguraLogoPadding;
  className?: string;
  section?: SeguraLogoSection;
  ariaLabel?: string;
  decorative?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

const resolveSize = (size?: SeguraLogoSize, isIcon?: boolean) => {
  const base = typeof size === 'number' ? size : LOGO_SIZES[size ?? 'md'];
  const min = isIcon ? MIN_ICON_HEIGHT : MIN_WORDMARK_HEIGHT;
  return Math.max(base, min);
};

const resolvePadding = (padding?: SeguraLogoPadding) =>
  typeof padding === 'number' ? padding : LOGO_PADDING[padding ?? 'base'];

export const SeguraLogo: React.FC<SeguraLogoProps> = ({
  variant,
  size,
  padding,
  className,
  section,
  ariaLabel = 'Segura EPI & Servicos',
  decorative = false,
  orientation = 'horizontal',
}) => {
  const rule = section ? LOGO_RULES[section] : undefined;
  const resolvedVariant = variant ?? rule?.variant ?? 'light';
  const isIcon = resolvedVariant === 'icon-only';
  const resolvedSize = resolveSize(size ?? rule?.size, isIcon);
  const resolvedPadding = resolvePadding(padding ?? rule?.padding);
  const asset = ASSETS[resolvedVariant];
  const src = isIcon
    ? asset.icon ?? ASSETS.light.icon!
    : (orientation === 'vertical' ? asset.vertical : asset.horizontal) ?? asset.horizontal ?? ASSETS.light.horizontal;
  const width = isIcon
    ? resolvedSize
    : orientation === 'vertical'
      ? resolvedSize * 1.1
      : resolvedSize * WORDMARK_RATIO;

  const commonProps = decorative
    ? { 'aria-hidden': true }
    : { role: 'img', 'aria-label': ariaLabel };

  return (
    <div
      className={cn('inline-flex items-center', className)}
      style={{
        padding: resolvedPadding,
        minHeight: isIcon ? MIN_ICON_HEIGHT : MIN_WORDMARK_HEIGHT,
        minWidth: isIcon ? MIN_ICON_HEIGHT : MIN_WORDMARK_HEIGHT * WORDMARK_RATIO,
      }}
      data-logo-section={section}
      data-logo-variant={resolvedVariant}
    >
      <img
        src={src}
        width={width}
        height={resolvedSize}
        alt={decorative ? '' : ariaLabel}
        loading="lazy"
        {...commonProps}
        className="block object-contain"
        style={{
          height: resolvedSize,
          width: 'auto',
          maxHeight: resolvedSize,
        }}
      />
    </div>
  );
};
