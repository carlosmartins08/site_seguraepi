'use client';

import { useEffect } from 'react';
import { useBusinessStatus } from '../../hooks/useBusinessStatus';

export const WbotInitializer = () => {
  const { isOpen, message } = useBusinessStatus();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    (window as any).WBOTdata = {
      greeting: isOpen
        ? 'Olá! Sou o consultor técnico da SeguraEPI. Precisa validar um C.A. ou de um orçamento rápido agora?'
        : 'Estamos fora do horário, mas registre sua dúvida e retornaremos às 07:30 com um consultor técnico.',
      status: message,
      online: isOpen,
    };
  }, [isOpen, message]);

  return null;
};
