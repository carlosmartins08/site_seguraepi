import { tokens } from '@/src/styles/tokens';

const toMs = (value: string) => {
  const numeric = Number.parseFloat(value.replace('ms', ''));
  return Number.isFinite(numeric) ? numeric : 0;
};

export const motionPresets = {
  duration: {
    fast: toMs(tokens.motion.duration.fast),
    base: toMs(tokens.motion.duration.base),
    slow: toMs(tokens.motion.duration.slow),
  },
  easing: {
    standard: tokens.motion.easing.standard,
    emphasized: tokens.motion.easing.emphasized,
  },
  distance: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
  },
  stagger: {
    fast: 40,
    base: 60,
    slow: 90,
  },
} as const;

export type MotionPresets = typeof motionPresets;
