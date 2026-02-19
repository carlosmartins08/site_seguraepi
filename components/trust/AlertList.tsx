
import React from 'react';

interface AlertListProps {
  items: string[];
}

export const AlertList: React.FC<AlertListProps> = ({ items }) => {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-segura-soft hover:shadow-segura-hover transition-all duration-300">
          <div className="w-10 h-10 rounded-lg bg-segura-primary/10 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-segura-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <span className="text-segura-dark font-sans font-medium text-sm md:text-base leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
