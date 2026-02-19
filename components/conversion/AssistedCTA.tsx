
import React from 'react';
import { Button } from '../actions/Button';
import { LocationMap } from '../trust/LocationMap';
import { CONTACT_INFO } from '../../lib/constants';
import { useBusinessStatus } from '../../hooks/useBusinessStatus';
import { cn } from '../../lib/cn';

export const AssistedCTA: React.FC = () => {
  const { isOpen: isOnline, message: statusMessage } = useBusinessStatus();

  return (
    <div className="bg-segura-dark text-white p-8 md:p-20 rounded-4xl relative overflow-hidden shadow-segura-hover border border-white/5">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-segura-primary/10 rounded-full blur-4xl -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Lado Esquerdo: Conteúdo e Ações */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[3px] bg-segura-primary rounded-full"></div>
            <span className="text-segura-primary font-display font-bold uppercase tracking-[0.3em] text-xs">Agilidade Logística</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 leading-[1.1] uppercase tracking-tight">
            PRONTO PARA ELEVAR O NÍVEL DE <br />
            <span className="text-segura-primary">PROTEÇÃO INDUSTRIAL?</span>
          </h2>

          <p className="text-slate-400 text-lg mb-10 leading-relaxed font-sans">
            Nossos consultores técnicos estão prontos para diagnosticar suas necessidades e propor o mix ideal de EPIs para sua operação, garantindo conformidade total com as NRs e retirada rápida em nossa unidade física.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6 mb-10">
            <Button
              href={CONTACT_INFO.whatsapp}
              variant="primary"
              className="px-10 py-5 shadow-segura-glow w-full sm:w-auto"
            >
              Falar com Consultor
            </Button>

            <Button
              href={CONTACT_INFO.googleMapsLink}
              variant="outline"
              className="border-slate-700 text-white hover:border-white px-10 py-5 w-full sm:w-auto flex items-center justify-center gap-2 group/btn"
            >
              <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Traçar Rota
            </Button>
          </div>

          {/* Informações detalhadas do Google Meu Negócio */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-segura-primary/20 flex items-center justify-center text-segura-primary">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-display font-bold text-segura-primary uppercase tracking-widest">Endereço Oficial</p>
                  <p className="text-xs text-white opacity-80">{CONTACT_INFO.fullAddress}</p>
                </div>
                {/* Simulated Distance Badge */}
                <div className="hidden sm:block text-right">
                  <span className="text-[9px] bg-segura-primary/10 text-segura-primary px-2 py-1 rounded-full border border-segura-primary/20 font-display font-bold">UNIDADE PB</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-segura-primary/20 flex items-center justify-center text-segura-primary relative">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {/* Indicador de Status no Ícone */}
                <span className={cn(
                  "absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-segura-dark",
                  isOnline ? "bg-segura-success animate-pulse" : "bg-slate-500"
                )}></span>
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-display font-bold text-segura-primary uppercase tracking-widest flex items-center justify-between">
                  <span>Horário de Atendimento</span>
                  {isOnline ? (
                    <span className="text-[8px] bg-segura-success/20 text-segura-success px-1.5 py-0.5 rounded-sm">ABERTO AGORA</span>
                  ) : (
                    <span className="text-[8px] bg-white/10 text-slate-400 px-1.5 py-0.5 rounded-sm uppercase">{statusMessage}</span>
                  )}
                </p>
                <p className="text-xs text-white opacity-80">{CONTACT_INFO.supportTime}</p>
              </div>
            </div>

            {/* Google Trust Footer */}
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Maps_icon_%282020%29.svg" className="w-4 h-4" alt="Google Maps" />
                <span className="text-[9px] font-display font-bold text-slate-500 uppercase tracking-widest">Unidade Verificada no Google</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-display font-black text-white">4.9/5</span>
                <div className="flex gap-0.5 text-segura-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito: Mapa */}
        <div className="w-full animate-pop">
          <LocationMap />
        </div>
      </div>
    </div>
  );
};
