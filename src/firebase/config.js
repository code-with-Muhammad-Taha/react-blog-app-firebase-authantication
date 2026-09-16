import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn5fbCmTEReaUn3ZmKkI6dY3GVmo003lI",
  authDomain: "react-first-project-5b2af.firebaseapp.com",
  projectId: "react-first-project-5b2af",
  storageBucket: "react-first-project-5b2af.firebasestorage.app",
  messagingSenderId: "687614353716",
  appId: "1:687614353716:web:4e43c80d4b6a83e0fc8561"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app