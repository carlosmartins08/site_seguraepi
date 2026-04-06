'use client';

import { useEffect } from 'react';
import { initReveal, type RevealConfig } from '../../lib/motion/reveal';

export type RevealProps = RevealConfig;

export const Reveal = ({ selector, once, threshold, rootMargin }: RevealProps) => {
  useEffect(() => {
    return initReveal({ selector, once, threshold, rootMargin });
  }, [selector, once, threshold, rootMargin]);

  return null;
};
