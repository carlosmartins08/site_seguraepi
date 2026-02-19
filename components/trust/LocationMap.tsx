
import React from 'react';
import { cn } from '../../lib/cn';
import { CONTACT_INFO } from '../../lib/constants';

interface LocationMapProps {
  className?: string;
}

export const LocationMap: React.FC<LocationMapProps> = ({ className }) => {
  // Coordenadas aproximadas para o endereço: Av. Santa Isabel, 96 - Renascer, Cabedelo - PB
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.508544641324!2d-34.8465922!3d-7.0668943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace7998980839f%3A0x60028e37604a162b!2s${encodeURIComponent(CONTACT_INFO.fullAddress)}!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr`;

  return (
    <div className={cn(
      "relative w-full h-[300px] md:h-[450px] bg-segura-dark rounded-3xl overflow-hidden border border-white/10 group shadow-segura-hover",
      className
    )}>
      {/* Overlay de carregamento/textura industrial */}
      <div className="absolute inset-0 bg-segura-dark pointer-events-none z-0"></div>

      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização Segura EPI"
        className="relative z-10 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
      />

      {/* Label de endereço flutuante */}
      <div className="absolute bottom-4 left-4 right-4 z-20 md:bottom-6 md:left-6 md:right-6">
        <a
          href={CONTACT_INFO.googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-segura-dark/80 backdrop-blur-md p-4 rounded-2xl border border-white/5 flex items-center justify-between gap-3 shadow-2xl hover:bg-segura-dark transition-colors group/label"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-segura-primary/20 flex items-center justify-center shrink-0 group-hover/label:bg-segura-primary group-hover/label:text-segura-dark transition-all">
              <svg className="w-5 h-5 text-segura-primary group-hover/label:text-current" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-display font-bold text-segura-primary uppercase tracking-widest mb-1">Nossa Unidade Física</p>
              <p className="text-white text-xs font-sans leading-tight opacity-90 max-w-[200px]">{CONTACT_INFO.fullAddress}</p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover/label:border-segura-primary/50 group-hover/label:text-segura-primary transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};
