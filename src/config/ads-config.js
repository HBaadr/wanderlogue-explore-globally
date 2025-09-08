// AdSense Configuration
export const ADSENSE_CONFIG = {
  // Client ID for all AdSense ads
  CLIENT_ID: 'ca-pub-8136444506955242',
  
  // Ad Unit IDs for different page types
  AD_UNITS: {
    // Main pages
    HOME_PAGE: '',
    BLOG_PAGE: '', 
    ABOUT_PAGE: '',
    ARTICLE_PAGE: '',
    
    // Travel destination pages
    CONTINENT_PAGE: '',
    COUNTRY_PAGE: 'ca-pub-XXXXXXXXXXXXXXXXX/1234567895',
    CITY_PAGE: '',
    LANDMARK_PAGE: '',
    UNESCO_PAGE: ''
  }
};

// Ad sizes and types
export const AD_FORMATS = {
  DISPLAY_728x90: { width: 728, height: 90, type: 'display' },
  DISPLAY_300x250: { width: 300, height: 250, type: 'display' },
  DISPLAY_320x50: { width: 320, height: 50, type: 'display' },
  RESPONSIVE: { type: 'responsive' }
};
