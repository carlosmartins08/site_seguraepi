import React from 'react';
import type { LucideProps } from 'lucide-react';
import { cn } from '../../lib/cn';
import { ICON_MAP, type IconName } from './icon-map';

export type IconProps = Omit<LucideProps, 'ref'> & {
  name: IconName;
};

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 20, className, ...rest }, ref) => {
    const IconComponent = ICON_MAP[name];
    if (!IconComponent) return null;

    const hasLabel = Boolean(rest['aria-label'] || rest['aria-labelledby'] || rest.title);

    return (
      <IconComponent
        ref={ref}
        size={size}
        className={cn('shrink-0', className)}
        aria-hidden={hasLabel ? undefined : true}
        {...rest}
      />
    );
  }
);

Icon.displayName = 'Icon';
