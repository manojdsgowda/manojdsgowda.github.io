import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAIVKYgjfjE-hkYCWfi3QEEzza1XG7ZmVs",
  authDomain: "manojdsgowda-3e3f6.firebaseapp.com",
  projectId: "manojdsgowda-3e3f6",
  storageBucket: "manojdsgowda-3e3f6.appspot.com",
  messagingSenderId: "131998572942",
  appId: "1:131998572942:web:3fa63294226918da7744df",
  measurementId: "G-MYBNH76M8Q",
  databaseURL: "https://manojdsgowda-3e3f6-default-rtdb.firebaseio.com/",
};

const fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();
