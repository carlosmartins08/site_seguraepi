
import React from 'react';

interface MethodStepProps {
  number: string;
  title: string;
  description: string;
}

export const MethodStep: React.FC<MethodStepProps> = ({ number, title, description }) => {
  return (
    <div className="relative pl-16 group">
      <div className="absolute left-0 top-0 text-5xl font-display font-black text-segura-primary/10 select-none group-hover:text-segura-primary/20 transition-colors duration-500">
        {number}
      </div>
      <div className="relative z-10 pt-2">
        <h3 className="text-xl font-display font-bold mb-3 text-segura-dark group-hover:text-segura-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-500 leading-relaxed font-sans text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};
