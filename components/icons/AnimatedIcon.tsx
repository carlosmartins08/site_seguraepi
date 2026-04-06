'use client';

import React, { useEffect, useRef } from 'react';
import { Icon, type IconProps } from './Icon';
import { attachIconFeedback } from '../../lib/motion/feedback';

export type AnimatedIconProps = IconProps & {
  trigger?: 'hover' | 'click' | 'both';
};

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({ trigger = 'hover', ...props }) => {
  const iconRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!iconRef.current) return;
    return attachIconFeedback(iconRef.current, { trigger });
  }, [trigger]);

  return <Icon ref={iconRef} {...props} />;
};
