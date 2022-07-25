import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKaCbe7Z50qdnYbCzXvTVe8EzgHFYm4VY",
  authDomain: "project-60-ceee7.firebaseapp.com",
  databaseURL: "https://project-60-ceee7-default-rtdb.firebaseio.com",
  projectId: "project-60-ceee7",
  storageBucket: "project-60-ceee7.appspot.com",
  messagingSenderId: "714375801539",
  appId: "1:714375801539:web:53b8e80b3adee19f3d9076"
};
 firebase.initializeApp(firebaseConfig)


export default firebase.database()
  