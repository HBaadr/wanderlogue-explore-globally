import { useCallback } from 'react';
import { logEvent, Analytics } from 'firebase/analytics';
import { analytics } from '@/config/firebase';

interface EventParams {
  [key: string]: string | number | boolean;
}

interface CustomEventParams {
  action?: string;
  category?: string;
  label?: string;
  value?: number;
}

export const useFirebaseAnalytics = () => {
  // Check if analytics is available
  const isAnalyticsAvailable = useCallback(() => {
    return analytics !== null && typeof window !== 'undefined';
  }, []);

  // Track page view with enhanced data
  const trackPageView = useCallback((pagePath: string, pageTitle?: string, additionalParams?: EventParams) => {
    if (!isAnalyticsAvailable()) return;
    
    try {
      logEvent(analytics!, 'page_view', {
        page_path: pagePath,
        page_title: pageTitle || document.title,
        page_location: window.location.href,
        page_referrer: document.referrer || 'direct',
        timestamp: Date.now(),
        ...additionalParams
      });
    } catch (error) {
      console.warn('Failed to track page view:', error);
    }
  }, [isAnalyticsAvailable]);

  // Track custom events
  const trackEvent = useCallback((eventName: string, parameters?: EventParams) => {
    if (!isAnalyticsAvailable()) return;
    
    try {
      logEvent(analytics!, eventName, {
        timestamp: Date.now(),
        ...parameters
      });
    } catch (error) {
      console.warn('Failed to track event:', error);
    }
  }, [isAnalyticsAvailable]);

  // Track search events specifically for travel website
  const trackSearch = useCallback((searchTerm: string, searchCategory?: string, resultCount?: number) => {
    if (!isAnalyticsAvailable()) return;
    
    try {
      logEvent(analytics!, 'search', {
        search_term: searchTerm.toLowerCase(),
        search_category: searchCategory || 'destination',
        result_count: resultCount || 0,
        page_path: window.location.pathname
      });
    } catch (error) {
      console.warn('Failed to track search:', error);
    }
  }, [isAnalyticsAvailable]);

  // Track navigation events
  const trackNavigation = useCallback((linkText: string, destination: string, linkType?: string) => {
    if (!isAnalyticsAvailable()) return;
    
    try {
      logEvent(analytics!, 'select_content', {
        content_type: linkType || 'navigation',
        item_id: linkText.toLowerCase().replace(/\s+/g, '_'),
        destination: destination,
        source_page: window.location.pathname
      });
    } catch (error) {
      console.warn('Failed to track navigation:', error);
    }
  }, [isAnalyticsAvailable]);

  // Track language changes
  const trackLanguageChange = useCallback((newLanguage: string, previousLanguage: string) => {
    if (!isAnalyticsAvailable()) return;
    
    try {
      logEvent(analytics!, 'language_change', {
        new_language: newLanguage,
        previous_language: previousLanguage,
        page_path: window.location.pathname
      });
    } catch (error) {
      console.warn('Failed to track language change:', error);
    }
  }, [isAnalyticsAvailable]);

  // Track travel-specific events
  const trackDestinationInterest = useCallback((destination: string, destinationType: string, action: string) => {
    if (!isAnalyticsAvailable()) return;
    
    try {
      logEvent(analytics!, 'destination_interest', {
        destination_name: destination,
        destination_type: destinationType, // city, country, continent, landmark
        action: action, // view, click, bookmark
        page_path: window.location.pathname
      });
    } catch (error) {
      console.warn('Failed to track destination interest:', error);
    }
  }, [isAnalyticsAvailable]);

  // Track content engagement
  const trackContentEngagement = useCallback((contentType: string, contentId: string, engagement: string, duration?: number) => {
    if (!isAnalyticsAvailable()) return;
    
    try {
      logEvent(analytics!, 'content_engagement', {
        content_type: contentType, // article, destination, guide
        content_id: contentId,
        engagement_type: engagement, // read, share, bookmark, click
        engagement_duration: duration || 0,
        page_path: window.location.pathname
      });
    } catch (error) {
      console.warn('Failed to track content engagement:', error);
    }
  }, [isAnalyticsAvailable]);

  // Track user journey events
  const trackUserJourney = useCallback((journeyStep: string, additionalData?: EventParams) => {
    if (!isAnalyticsAvailable()) return;
    
    try {
      logEvent(analytics!, 'user_journey', {
        journey_step: journeyStep,
        page_path: window.location.pathname,
        session_id: sessionStorage.getItem('session_id') || 'unknown',
        ...additionalData
      });
    } catch (error) {
      console.warn('Failed to track user journey:', error);
    }
  }, [isAnalyticsAvailable]);

  return {
    trackPageView,
    trackEvent,
    trackSearch,
    trackNavigation,
    trackLanguageChange,
    trackDestinationInterest,
    trackContentEngagement,
    trackUserJourney,
    isAnalyticsAvailable
  };
};
