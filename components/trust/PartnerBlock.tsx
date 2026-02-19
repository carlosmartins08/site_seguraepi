
import React from 'react';
import { cn } from '../../lib/cn';

interface PartnerBlockProps {
  names: string[];
}

export const PartnerBlock: React.FC<PartnerBlockProps> = ({ names }) => {
  // Duplicating for seamless marquee effect
  const marqueeItems = [...names, ...names, ...names];

  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Gradient masks for a smooth fade effect at the edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-segura-offwhite to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-segura-offwhite to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee gap-8 items-center">
        {marqueeItems.map((name, index) => {
          const isStrategic = index % 4 === 0;
          
          return (
            <div 
              key={index} 
              className={cn(
                "flex-shrink-0 group relative",
                "w-64 h-32 bg-white rounded-2xl border border-slate-200",
                "flex items-center justify-center p-6 transition-all duration-500",
                "shadow-segura-soft hover:shadow-segura-hover hover:-translate-y-2",
                "cursor-pointer overflow-hidden",
                isStrategic ? "border-segura-primary/20" : "border-slate-100"
              )}
            >
              {/* Internal Accent Glow */}
              <div className="absolute -right-4 -top-4 w-12 h-12 bg-segura-primary/5 rounded-full blur-2xl group-hover:bg-segura-primary/20 transition-all duration-500"></div>
              
              {/* Content Container */}
              <div className="flex flex-col items-center gap-2 relative z-10">
                <span className={cn(
                  "font-display font-black text-sm tracking-[0.2em] uppercase transition-all duration-500",
                  "text-slate-400 group-hover:text-segura-dark group-hover:tracking-[0.3em]",
                  isStrategic && "text-slate-500"
                )}>
                  {name}
                </span>
                
                {/* Technical Divider */}
                <div className="w-0 h-[1.5px] bg-segura-primary transition-all duration-500 ease-in-out group-hover:w-full opacity-0 group-hover:opacity-100 shadow-segura-glow"></div>
              </div>

              {/* Strategic Badge */}
              {isStrategic && (
                <div className="absolute top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[8px] font-display font-bold text-segura-primary uppercase tracking-[0.2em] whitespace-nowrap">
                    Premium Partner
                  </span>
                </div>
              )}

              {/* Progress-like decorative line at the bottom */}
              <div className="absolute bottom-0 left-0 h-[3px] bg-slate-50 w-full">
                <div className="h-full bg-segura-primary w-0 group-hover:w-full transition-all duration-700 ease-out opacity-0 group-hover:opacity-20"></div>
              </div>
            </div>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-256px * ${names.length} - 32px * ${names.length})); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
};
