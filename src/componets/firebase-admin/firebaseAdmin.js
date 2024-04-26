// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX3hBMDS3k2pA-G-LSFFo2sHvLyNDI4pM",
  authDomain: "badehe-enterprise.firebaseapp.com",
  projectId: "badehe-enterprise",
  storageBucket: "badehe-enterprise.appspot.com",
  messagingSenderId: "168911341474",
  appId: "1:168911341474:web:c780a6e2c2ba30382654fb",
  measurementId: "G-13JXSG7KFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
const badehestore = getFirestore(app);
export const imageDb = getStorage(app)


export default badehestore;

   