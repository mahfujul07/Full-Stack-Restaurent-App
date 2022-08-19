import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXdnBapPln8qlVygOa5CNKpud74gGO9nY",
  authDomain: "full-stack-restaurent-app.firebaseapp.com",
  databaseURL: "https://full-stack-restaurent-app-default-rtdb.firebaseio.com",
  projectId: "full-stack-restaurent-app",
  storageBucket: "full-stack-restaurent-app.appspot.com",
  messagingSenderId: "324821002148",
  appId: "1:324821002148:web:b5d25421316bec98a08331"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
