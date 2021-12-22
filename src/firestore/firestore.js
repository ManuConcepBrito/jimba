import firebase from "firebase";
import { atom } from "recoil";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);

export const firestoreState = atom({
  key: "firestore", // unique ID (with respect to other atoms/selectors)
  default: firebase.app().firestore(), // default value (aka initial value)
});

export const firestoreStorageState = atom({
  key: "firestoreStorage",
  default: firebase.storage(),
});