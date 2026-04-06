'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '../../lib/cn';
import { attachCardFeedback } from '../../lib/motion/feedback';

export type MotionCardProps = React.HTMLAttributes<HTMLDivElement> & {
  motion?: boolean;
};

export const MotionCard = React.forwardRef<HTMLDivElement, MotionCardProps>(
  ({ className, motion = true, ...rest }, ref) => {
    const localRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!motion || !localRef.current) return;
      return attachCardFeedback(localRef.current);
    }, [motion]);

    const setRef = (node: HTMLDivElement | null) => {
      localRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    return <div ref={setRef} className={cn(className)} {...rest} />;
  }
);

MotionCard.displayName = 'MotionCard';
