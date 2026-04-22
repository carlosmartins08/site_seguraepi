'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '../../lib/analytics/track';

export function RouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    const query = typeof window !== 'undefined' ? window.location.search : '';
    const fullPath = `${pathname}${query}`;
    const location = typeof window !== 'undefined' ? window.location.href : fullPath;
    const pageTitle = typeof document !== 'undefined' ? document.title : '';
    const language = typeof document !== 'undefined' ? document.documentElement.lang : 'pt-BR';

    track('page_view', {
      page_path: pathname,
      page_location: location,
      page_title: pageTitle,
      language,
    });

    track('route_view', {
      path: pathname,
      query,
      url: fullPath,
      page_path: pathname,
      page_location: location,
      page_title: pageTitle,
      language,
    });
  }, [pathname]);

  return null;
}
