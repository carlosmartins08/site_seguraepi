import React from 'react';
import { Icon, type IconName } from './Icon';

type LegacyIconName =
  | 'shield'
  | 'clock'
  | 'box'
  | 'truck'
  | 'heart'
  | 'check'
  | 'book'
  | 'spark'
  | 'bolt'
  | 'users'
  | 'search'
  | 'home';

interface SeguraIconProps {
  name: LegacyIconName;
  className?: string;
}

const LEGACY_MAP: Record<LegacyIconName, IconName> = {
  shield: 'shield-check',
  clock: 'clock',
  box: 'box',
  truck: 'truck-fast',
  heart: 'health',
  check: 'check-circle',
  book: 'document-search',
  spark: 'spark',
  bolt: 'energy',
  users: 'user-gear',
  search: 'search',
  home: 'grid',
};

export const SeguraIcon: React.FC<SeguraIconProps> = ({ name, className = 'w-5 h-5' }) => {
  return <Icon name={LEGACY_MAP[name]} className={className} aria-hidden />;
};
