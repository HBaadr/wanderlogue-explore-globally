import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from '@/contexts/AnalyticsContext';

export const PageViewTracker: React.FC = () => {
  const location = useLocation();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    // Small delay to ensure page title is updated
    const timer = setTimeout(() => {
      const pagePath = location.pathname + location.search;
      const pageTitle = document.title;
      
      // Extract language from path for additional context
      const langMatch = location.pathname.match(/^\/([a-z]{2})\b/);
      const language = langMatch ? langMatch : 'en';
      
      trackPageView(pagePath, pageTitle, {
        language: language,
        has_search_params: location.search.length > 0,
        path_segments: location.pathname.split('/').length - 1
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [location, trackPageView]);

  return null;
};
