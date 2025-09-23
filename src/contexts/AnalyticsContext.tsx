import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useFirebaseAnalytics } from '@/hooks/useFirebaseAnalytics';

interface AnalyticsContextType {
  trackPageView: (pagePath: string, pageTitle?: string, additionalParams?: Record<string, string | number | boolean>) => void;
  trackEvent: (eventName: string, parameters?: Record<string, string | number | boolean>) => void;
  trackSearch: (searchTerm: string, searchCategory?: string, resultCount?: number) => void;
  trackNavigation: (linkText: string, destination: string, linkType?: string) => void;
  trackLanguageChange: (newLanguage: string, previousLanguage: string) => void;
  trackDestinationInterest: (destination: string, destinationType: string, action: string) => void;
  trackContentEngagement: (contentType: string, contentId: string, engagement: string, duration?: number) => void;
  trackUserJourney: (journeyStep: string, additionalData?: Record<string, string | number | boolean>) => void;
  isAnalyticsAvailable: () => boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const analytics = useFirebaseAnalytics();

  useEffect(() => {
    // Generate session ID if not exists
    if (typeof window !== 'undefined' && !sessionStorage.getItem('session_id')) {
      const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('session_id', sessionId);
    }

    // Track initial session start
    analytics.trackEvent('session_start', {
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      language: navigator.language
    });

    // Cleanup function
    return () => {
      analytics.trackEvent('session_end', {
        session_duration: Date.now() - parseInt(sessionStorage.getItem('session_start') || '0')
      });
    };
  }, [analytics]);

  return (
    <AnalyticsContext.Provider value={analytics}>
      {children}
    </AnalyticsContext.Provider>
  );
};
