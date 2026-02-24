'use client';

/* Simple wrapper to instrument anchor clicks */

import React from 'react';
import { track } from '../../lib/analytics/track';

type TrackLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  params?: Record<string, any>;
};

export const TrackLink = React.forwardRef<HTMLAnchorElement, TrackLinkProps>(
  ({ event, params, onClick, children, ...rest }, ref) => {
    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
      track(event, params);
      onClick?.(e);
    };

    return (
      <a ref={ref} {...rest} onClick={handleClick}>
        {children}
      </a>
    );
  }
);

TrackLink.displayName = 'TrackLink';
