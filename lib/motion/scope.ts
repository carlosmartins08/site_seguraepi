import { createScope } from 'animejs';
import type { RefObject } from 'react';

export type MotionScope = ReturnType<typeof createScope>;

export const prefersReducedMotion = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const createMotionScope = (root?: HTMLElement | RefObject<HTMLElement>) => {
  return createScope({
    root,
    mediaQueries: {
      reduce: '(prefers-reduced-motion: reduce)',
    },
  });
};
