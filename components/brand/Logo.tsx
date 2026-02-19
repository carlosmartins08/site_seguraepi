
import React from 'react';
import { cn } from '../../lib/cn';

interface LogoProps {
  variant?: 'full' | 'icon';
  className?: string;
  theme?: 'white' | 'colored' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'full', 
  className, 
  theme = 'colored' 
}) => {
  const getLogoSrc = () => {
    if (variant === 'icon') return '/logo-icon.svg';
    if (theme === 'white') return '/logo-white.svg';
    return '/logo-colored.svg';
  };

  return (
    <div className={cn("relative flex items-center transition-all duration-300", className)}>
      <img 
        src={getLogoSrc()} 
        alt="Segura EPI & Serviços" 
        className={cn(
          "h-full object-contain",
          variant === 'full' ? "max-w-[280px]" : "w-12 h-12"
        )}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      {/* Fallback Texto Industrial Modern */}
      <div className="hidden font-display font-black text-xl tracking-tighter uppercase logo-fallback">
        SEGURA<span className="text-segura-primary">EPI</span>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        img[style*="display: none"] + .logo-fallback { display: block !important; }
      `}} />
    </div>
  );
};
