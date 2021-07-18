import firebase from "firebase";
  const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyAKAlv7m9exGMNcxkGbxexcyszktKKOnzo",
        authDomain: "instagram-clone-react-68687.firebaseapp.com",
        databaseURL: "https://instagram-clone-react-68687-default-rtdb.firebaseio.com",
        projectId: "instagram-clone-react-68687",
        storageBucket: "instagram-clone-react-68687.appspot.com",
        messagingSenderId: "286156459323",
        appId: "1:286156459323:web:ad8794e23b253684553b1e",
        measurementId: "G-FDYM7VVMX2"
      
  });
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };