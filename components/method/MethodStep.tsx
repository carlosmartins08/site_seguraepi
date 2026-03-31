
import React from 'react';

interface MethodStepProps {
  number: string;
  title: string;
  description: string;
}

export const MethodStep: React.FC<MethodStepProps> = ({ number, title, description }) => {
  return (
    <div className="relative pl-16 group">
      <div className="absolute left-0 top-0 text-4xl font-display font-bold text-action-primary/15 select-none group-hover:text-action-primaryHover/25 transition-colors duration-500">
        {number}
      </div>
      <div className="relative z-10 pt-2">
        <h3 className="text-lg font-display font-semibold mb-2 text-text-primary group-hover:text-action-primaryHover transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text-body leading-relaxed font-sans text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};


