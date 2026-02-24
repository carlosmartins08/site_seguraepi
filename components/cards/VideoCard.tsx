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
        "group relative block overflow-hidden rounded-2xl border border-border-inverse",
        "bg-gradient-to-b from-bg-inverse/10 to-bg-inverse shadow-elevation-1",
        "transition-[transform,box-shadow,border-color] duration-base ease-standard",
        "hover:-translate-y-0.5 hover:border-action-primary/50 hover:shadow-elevation-2",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg-canvas",
        className
      )}
    >
      <div className="aspect-video relative overflow-hidden bg-neutral-950">
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950/60 to-transparent pointer-events-none"></div>
        
        <img 
          src={thumbnail} 
          alt={title} 
          className={cn(
            "w-full h-full object-cover grayscale opacity-50",
            "group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-80",
            "transition-[transform,filter,opacity] duration-slow ease-standard"
          )}
        />
        
        {/* Play Overlay - Industrial Styled */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="relative">
            {/* Pulsing ring for hover */}
            <div className="absolute inset-0 bg-action-primary rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-base ease-standard animate-pulse-soft"></div>
            <div className="relative w-16 h-16 bg-action-primary text-text-onBrand flex items-center justify-center rounded-xl transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-[transform,opacity] duration-base ease-standard shadow-elevation-2">
              <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Duration Badge - Enhanced Contrast */}
        <div className="absolute bottom-3 right-3 z-30">
          <span className="bg-bg-inverse/90 backdrop-blur-md text-text-inverse text-labelSM font-display px-3 py-1.5 uppercase rounded-md border border-border-inverse">
            {duration}
          </span>
        </div>
      </div>

      <div className="p-6 relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1.5 h-1.5 bg-action-primary animate-pulse-soft"></div>
          <span className="text-action-primary text-labelSM font-display uppercase opacity-90">
            Segura TV
          </span>
        </div>
        
        <h3 className="text-text-inverse/80 font-display text-titleMD leading-[1.2] group-hover:text-text-inverse transition-colors duration-base ease-standard">
          {title}
        </h3>
        
        {/* Subtle Bottom Accent */}
        <div className="mt-4 w-0 h-px bg-action-primary/50 group-hover:w-full transition-[width] duration-slow ease-standard"></div>
      </div>
    </a>
  );
};
