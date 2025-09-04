// AdSense Configuration
export const ADSENSE_CONFIG = {
  // Client ID for all AdSense ads
  CLIENT_ID: 'ca-pub-XXXXXXXXXXXXXXXXX', // Replace with your actual AdSense client ID
  
  // Ad Unit IDs for different page types
  AD_UNITS: {
    // Main pages
    HOME_PAGE: 'ca-pub-XXXXXXXXXXXXXXXXX/1234567890',
    BLOG_PAGE: 'ca-pub-XXXXXXXXXXXXXXXXX/1234567891', 
    ABOUT_PAGE: 'ca-pub-XXXXXXXXXXXXXXXXX/1234567892',
    ARTICLE_PAGE: 'ca-pub-XXXXXXXXXXXXXXXXX/1234567893',
    
    // Travel destination pages
    CONTINENT_PAGE: 'ca-pub-XXXXXXXXXXXXXXXXX/1234567894',
    COUNTRY_PAGE: 'ca-pub-XXXXXXXXXXXXXXXXX/1234567895',
    CITY_PAGE: 'ca-pub-XXXXXXXXXXXXXXXXX/1234567896',
    LANDMARK_PAGE: 'ca-pub-XXXXXXXXXXXXXXXXX/1234567897',
    UNESCO_PAGE: 'ca-pub-XXXXXXXXXXXXXXXXX/1234567898'
  }
};

// Ad sizes and types
export const AD_FORMATS = {
  DISPLAY_728x90: { width: 728, height: 90, type: 'display' },
  DISPLAY_300x250: { width: 300, height: 250, type: 'display' },
  DISPLAY_320x50: { width: 320, height: 50, type: 'display' },
  RESPONSIVE: { type: 'responsive' }
};