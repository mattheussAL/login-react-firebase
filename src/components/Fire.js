import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDuZfmtmWpkvcCvm1lupGNIQDLfkr-0r-4",
  authDomain: "login-929d6.firebaseapp.com",
  databaseURL: "https://login-929d6.firebaseio.com",
  projectId: "login-929d6",
  storageBucket: "login-929d6.appspot.com",
  messagingSenderId: "399173320246",
  appId: "1:399173320246:web:6899c2d1d6a133bfa4e297"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;