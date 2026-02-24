/* Simple wrapper to instrument button clicks */
'use client';

import React from 'react';
import { track } from '../../lib/analytics/track';

type TrackButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  event: string;
  params?: Record<string, any>;
};

export const TrackButton: React.FC<TrackButtonProps> = ({ event, params, onClick, children, ...rest }) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    track(event, params);
    onClick?.(e);
  };

  return (
    <button {...rest} onClick={handleClick}>
      {children}
    </button>
  );
};
