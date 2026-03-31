'use client';

import { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../lib/constants';
import { useI18n } from './useI18n';

interface BusinessStatus {
  isOpen: boolean;
  message: string;
  nextOpening?: {
    label: string;
    timeLabel: string;
  };
}

export function useBusinessStatus(): BusinessStatus {
  const { t } = useI18n();
  const [status, setStatus] = useState<BusinessStatus>({
    isOpen: false,
    message: t('status.checking', 'Verificando status...'),
  });

  useEffect(() => {
    const calculateStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hour = now.getHours();
      const minutes = now.getMinutes();
      const currentTimeInMinutes = hour * 60 + minutes;

      const openTimeInMinutes = CONTACT_INFO.businessHours.open * 60;
      const closeTimeInMinutes = CONTACT_INFO.businessHours.close * 60;
      const isBusinessDay = CONTACT_INFO.businessHours.days.includes(day);

      // 1. Esta aberto?
      if (isBusinessDay && currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes) {
        setStatus({
          isOpen: true,
          message: t('status.openNow', 'Central de Atendimento ON'),
        });
        return;
      }

      // 2. Se esta fechado, quando abre?
      const todayLabel = t('status.today', 'Hoje');
      const tomorrowLabel = t('status.tomorrow', 'Amanha');
      const mondayLabel = t('status.monday', 'Segunda-feira');

      let label = '';

      // Se for dia util mas ja fechou
      if (isBusinessDay && currentTimeInMinutes >= closeTimeInMinutes) {
        if (day === 5) {
          // Sexta-feira
          label = mondayLabel;
        } else {
          label = tomorrowLabel;
        }
      }
      // Se for dia util mas ainda nao abriu
      else if (isBusinessDay && currentTimeInMinutes < openTimeInMinutes) {
        label = todayLabel;
      }
      // Se for Sabado
      else if (day === 6) {
        label = mondayLabel;
      }
      // Se for Domingo
      else if (day === 0) {
        label = mondayLabel;
      }

      const timeLabel = `${CONTACT_INFO.businessHours.open.toString().padStart(2, '0')}:00h`;

      let message = '';
      if (label === todayLabel) {
        const diffHours = Math.floor((openTimeInMinutes - currentTimeInMinutes) / 60);
        const diffMins = (openTimeInMinutes - currentTimeInMinutes) % 60;

        if (diffHours > 0) {
          message = t('status.opensIn', 'Abrimos em {hours}h e {minutes}min', {
            hours: diffHours,
            minutes: diffMins,
          });
        } else {
          message = t('status.opensInShort', 'Abrimos em {minutes}min', { minutes: diffMins });
        }
      } else {
        message = t('status.returnsAt', 'Retornamos {label} as {timeLabel}', {
          label,
          timeLabel,
        });
      }

      setStatus({
        isOpen: false,
        message,
        nextOpening: {
          label,
          timeLabel,
        },
      });
    };

    calculateStatus();
    const interval = setInterval(calculateStatus, 60000);
    return () => clearInterval(interval);
  }, [t]);

  return status;
}
