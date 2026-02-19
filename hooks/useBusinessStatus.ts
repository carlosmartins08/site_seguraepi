
import { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../lib/constants';

interface BusinessStatus {
    isOpen: boolean;
    message: string;
    nextOpening?: {
        label: string;
        timeLabel: string;
    };
}

export function useBusinessStatus(): BusinessStatus {
    const [status, setStatus] = useState<BusinessStatus>({
        isOpen: false,
        message: 'Verificando status...'
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

            // 1. Está aberto?
            if (isBusinessDay && currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes) {
                setStatus({
                    isOpen: true,
                    message: 'Central de Atendimento ON'
                });
                return;
            }

            // 2. Se está fechado, quando abre?
            let nextDay = day;
            let label = '';
            let daysToAdd = 0;

            // Se for dia útil mas já fechou
            if (isBusinessDay && currentTimeInMinutes >= closeTimeInMinutes) {
                if (day === 5) { // Sexta-feira
                    daysToAdd = 3; // Pula para Segunda
                    label = 'Segunda-feira';
                } else {
                    daysToAdd = 1;
                    label = 'Amanhã';
                }
            }
            // Se for dia útil mas ainda não abriu
            else if (isBusinessDay && currentTimeInMinutes < openTimeInMinutes) {
                daysToAdd = 0;
                label = 'Hoje';
            }
            // Se for Sábado
            else if (day === 6) {
                daysToAdd = 2; // Pula para Segunda
                label = 'Segunda-feira';
            }
            // Se for Domingo
            else if (day === 0) {
                daysToAdd = 1; // Pula para Segunda
                label = 'Segunda-feira';
            }

            const timeLabel = `${CONTACT_INFO.businessHours.open.toString().padStart(2, '0')}:00h`;

            let message = '';
            if (label === 'Hoje') {
                const diffHours = Math.floor((openTimeInMinutes - currentTimeInMinutes) / 60);
                const diffMins = (openTimeInMinutes - currentTimeInMinutes) % 60;

                if (diffHours > 0) {
                    message = `Abrimos em ${diffHours}h e ${diffMins}min`;
                } else {
                    message = `Abrimos em ${diffMins}min`;
                }
            } else {
                message = `Retornamos ${label} às ${timeLabel}`;
            }

            setStatus({
                isOpen: false,
                message,
                nextOpening: {
                    label,
                    timeLabel
                }
            });
        };

        calculateStatus();
        const interval = setInterval(calculateStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    return status;
}
