'use client';

import { useEffect } from 'react';

export const NoJs = () => {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('js');
    root.classList.remove('no-js');
  }, []);

  return null;
};
