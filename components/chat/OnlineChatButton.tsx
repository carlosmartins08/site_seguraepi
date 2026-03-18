'use client';

import React from 'react';
import { Button } from '../actions/Button';
import { openWbotChat } from '../../lib/wbot';
import { CONTACT_INFO } from '../../lib/constants';
import { storeChatContext } from '../../lib/chat-context';

type OnlineChatButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  fallbackHref?: string;
  trackEvent?: string;
  trackParams?: Record<string, any>;
  intent?: string;
  origem?: string;
};

export const OnlineChatButton: React.FC<OnlineChatButtonProps> = ({
  children,
  variant = 'primary',
  className,
  fallbackHref = CONTACT_INFO.whatsapp,
  trackEvent,
  trackParams,
  intent,
  origem,
  type,
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      className={className}
      type={type ?? 'button'}
      onClick={() => {
        storeChatContext({ intent, origem });
        openWbotChat({ fallbackHref, trackEvent, trackParams });
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
