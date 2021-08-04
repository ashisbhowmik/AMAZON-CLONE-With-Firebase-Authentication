import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBti8Xtm6QlXhwDzcbfge8tTQXyIPRNDgY",
  authDomain: "clone-4075c.firebaseapp.com",
  projectId: "clone-4075c",
  storageBucket: "clone-4075c.appspot.com",
  messagingSenderId: "9182399963",
  appId: "1:9182399963:web:543c700844310e3b996bfe",
  measurementId: "G-K1KDCEWV6Z",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
