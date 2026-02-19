
import { useState, useEffect } from 'react';

interface LocationInfo {
    region: string;
    isNeighbor: boolean; // Se é vizinho de Cabedelo/PB
    loading: boolean;
}

export function useLocation(): LocationInfo {
    const [location, setLocation] = useState<LocationInfo>({
        region: 'sua região',
        isNeighbor: false,
        loading: true
    });

    useEffect(() => {
        // Simulamos uma detecção de geolocalização por IP
        // Em um cenário real, usaríamos: https://ipapi.co/json/
        const simulateDetection = async () => {
            try {
                // Simulando delay de rede
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Mock de resposta para demonstração
                const mockRegion = "Paraíba";

                setLocation({
                    region: mockRegion,
                    isNeighbor: true,
                    loading: false
                });
            } catch (error) {
                setLocation({
                    region: 'sua região',
                    isNeighbor: false,
                    loading: false
                });
            }
        };

        simulateDetection();
    }, []);

    return location;
}
