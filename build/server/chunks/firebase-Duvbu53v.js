import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDJHJT6hb1YbwuWCU85v5mLfeERB2B1h-4",
  authDomain: "shuert-85343.firebaseapp.com",
  projectId: "shuert-85343",
  storageBucket: "shuert-85343.appspot.com",
  messagingSenderId: "214454270113",
  appId: "1:214454270113:web:d14aa0b1d1ac6824e518e0",
  measurementId: "G-2WHJMHC98M"
};
const app = initializeApp(firebaseConfig);
getStorage(app);
getAuth(app);
getFirestore(app);
//# sourceMappingURL=firebase-Duvbu53v.js.map
