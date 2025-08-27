import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBwuuKO630PF25WkdTyuN-jSedyYTOpVT0",
  authDomain: "the-traveller-guide.firebaseapp.com",
  projectId: "the-traveller-guide",
  storageBucket: "the-traveller-guide.appspot.com",
  messagingSenderId: "465005535074",
  appId: "1:465005535074:web:cf5d3c38817738654d563b",
  measurementId: "G-WZ1CLDDW0Y"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);