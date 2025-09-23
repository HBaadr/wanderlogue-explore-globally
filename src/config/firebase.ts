import { initializeApp } from 'firebase/app';
import { getAnalytics, Analytics } from 'firebase/analytics';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwuuKO630PF25WkdTyuN-jSedyYTOpVT0",
  authDomain: "the-traveller-guide.firebaseapp.com",
  projectId: "the-traveller-guide",
  storageBucket: "the-traveller-guide.appspot.com",
  messagingSenderId: "465005535074",
  appId: "1:465005535074:web:cf5d3c38817738654d563b",
  measurementId: "G-WZ1CLDDW0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics and get a reference to the service
let analytics: Analytics | null = null;

// Only initialize analytics in browser environment and when measurement ID exists
if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
  try {
    analytics = getAnalytics(app);
    
    // Enable debug mode in development
    if (import.meta.env.DEV) {
      // @ts-ignore
      window.gtag('config', firebaseConfig.measurementId, {
        debug_mode: true,
        send_page_view: false // We'll handle this manually
      });
    }
  } catch (error) {
    console.warn('Failed to initialize Firebase Analytics:', error);
  }
}

export { analytics };
export default app;
