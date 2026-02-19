
import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/cn';
import { CONTACT_INFO } from '../../lib/constants';
import { useBusinessStatus } from '../../hooks/useBusinessStatus';

export const FloatingChatButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const { isOpen: isOnline, message: statusMessage } = useBusinessStatus();

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / scrollHeight) * 100;

      // Aparece após 50% de scroll
      if (scrollProgress > 50 && !isVisible) {
        setIsVisible(true);
        // Mostra a saudação automaticamente após um pequeno delay
        setTimeout(() => setShowGreeting(true), 1500);
        // Esconde a saudação após 7 segundos
        setTimeout(() => setShowGreeting(false), 10000);
      } else if (scrollProgress <= 50 && isVisible) {
        setIsVisible(false);
        setShowGreeting(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <div className={cn(
      "fixed bottom-8 right-8 z-[90] transition-all duration-700 ease-out transform flex flex-col items-end",
      isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-90 pointer-events-none"
    )}>

      {/* Balão de Saudação Automático */}
      <div className={cn(
        "mb-4 px-5 py-4 bg-segura-dark text-white rounded-2xl shadow-2xl border border-white/10 transition-all duration-500 transform origin-bottom-right max-w-[280px]",
        showGreeting ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-75 pointer-events-none"
      )}>
        <p className="text-[11px] font-display font-bold uppercase tracking-widest flex items-center gap-2 mb-1">
          <span className={cn(
            "w-1.5 h-1.5 rounded-full",
            isOnline ? "bg-segura-primary animate-pulse" : "bg-slate-400"
          )}></span>
          {isOnline ? 'Consultoria Técnica Ativa' : 'Equipe em Descanso'}
        </p>
        <p className="text-[10px] text-slate-400 font-sans leading-relaxed">
          {isOnline
            ? 'Olá! Como podemos ajudar com seus EPIs hoje?'
            : `Estamos offline agora, mas ${statusMessage.toLowerCase()}. Deixe sua dúvida!`
          }
        </p>
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-segura-dark rotate-45 border-r border-b border-white/10"></div>
      </div>

      <a
        href={CONTACT_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-segura-primary text-white p-4 rounded-2xl shadow-segura-glow hover:shadow-segura-hover transition-all duration-500 hover:-translate-y-2 active:scale-95"
      >
        {/* Ícone e Indicador de Status */}
        <div className="relative">
          <div className="relative z-10">
            <svg className="w-6 h-6 animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>

          {/* Status Online Pulsante - Apenas se estiver em horário comercial */}
          {isOnline && (
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 z-20">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-segura-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-segura-success border-2 border-segura-primary"></span>
            </span>
          )}
        </div>

        {/* Texto Expandível no Hover */}
        <div className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
          <span className="font-display font-black uppercase text-xs tracking-widest pl-1">
            {isOnline ? 'Falar com Consultor' : 'Enviar Mensagem'}
          </span>
        </div>
      </a>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};
