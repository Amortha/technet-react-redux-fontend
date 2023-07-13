import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,

  apiKey: "AIzaSyC47HzwLuxAiOP6o9oatr6NFwWeUxMRGvM",
  authDomain: "technet-react-redux-fontend.firebaseapp.com",
  projectId: "technet-react-redux-fontend",
  storageBucket: "technet-react-redux-fontend.appspot.com",
  messagingSenderId: "138767876061",
  appId: "1:138767876061:web:fe29a01bd5a44cd0e3c034"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
