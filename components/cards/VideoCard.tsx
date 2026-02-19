
import React from 'react';
import { cn } from '../../lib/cn';

interface VideoCardProps {
  title: string;
  duration: string;
  thumbnail: string;
  url: string;
  className?: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ title, duration, thumbnail, url, className }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "group relative block overflow-hidden corner-notch transition-all duration-500",
        "bg-gradient-to-b from-segura-dark/10 to-segura-black border border-white/10",
        "hover:border-segura-orange/50 hover:shadow-[0_20px_40px_-15px_rgba(255,156,42,0.15)]",
        className
      )}
    >
      <div className="aspect-video relative overflow-hidden bg-segura-black">
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-segura-black/60 to-transparent pointer-events-none"></div>
        
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" 
        />
        
        {/* Play Overlay - Industrial Styled */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="relative">
            {/* Pulsing ring for hover */}
            <div className="absolute inset-0 bg-segura-orange rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative w-16 h-16 bg-segura-orange text-segura-black flex items-center justify-center corner-notch transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out shadow-2xl">
              <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Duration Badge - Enhanced Contrast */}
        <div className="absolute bottom-3 right-3 z-30">
          <span className="bg-segura-black/90 backdrop-blur-md text-white text-[10px] font-industrial font-bold px-3 py-1.5 uppercase tracking-widest corner-notch border border-white/10">
            {duration}
          </span>
        </div>
      </div>

      <div className="p-6 relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1.5 h-1.5 bg-segura-orange animate-pulse"></div>
          <span className="text-segura-orange text-[10px] font-industrial font-bold uppercase tracking-[0.3em] opacity-90">
            Segura TV
          </span>
        </div>
        
        <h3 className="text-segura-offwhite font-industrial font-bold text-xl leading-[1.2] group-hover:text-white transition-colors">
          {title}
        </h3>
        
        {/* Subtle Bottom Accent */}
        <div className="mt-4 w-0 h-[1px] bg-segura-orange/50 group-hover:w-full transition-all duration-700 ease-in-out"></div>
      </div>
    </a>
  );
};
