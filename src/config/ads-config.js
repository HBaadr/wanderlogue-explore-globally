// AdSense Configuration
export const ADSENSE_CONFIG = {
  // Client ID for all AdSense ads
  CLIENT_ID: 'ca-pub-8136444506955242',
  
  // Ad Unit IDs for different page types
  AD_UNITS: {
    // Main pages
    HOME_PAGE: '5244376096',
    BLOG_PAGE: '2510116135', 
    ABOUT_PAGE: '2618212755',
    ARTICLE_PAGE: '3847248530',
    
    // Travel destination pages
    CONTINENT_PAGE: '7650762174',
    COUNTRY_PAGE: '6896369114',
    CITY_PAGE: '1304845674',
    LANDMARK_PAGE: '3711517163',
    UNESCO_PAGE: '8249527976'
  }
};

// Ad sizes and types
export const AD_FORMATS = {
  DISPLAY_728x90: { width: 728, height: 90, type: 'display' },
  DISPLAY_300x250: { width: 300, height: 250, type: 'display' },
  DISPLAY_320x50: { width: 320, height: 50, type: 'display' },
  RESPONSIVE: { type: 'responsive' }
};
