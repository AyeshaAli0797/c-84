import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCcLNQm2EuG1cRUEwYvo6q14dL91-Dz3v0",
  authDomain: "book-santa-4f7c1.firebaseapp.com",
  databaseURL: "https://book-santa-4f7c1-default-rtdb.firebaseio.com",
  projectId: "book-santa-4f7c1",
  storageBucket: "book-santa-4f7c1.appspot.com",
  messagingSenderId: "386817692668",
  appId: "1:386817692668:web:a9401ddc7e999d9a475879"
};

if(!firebase.apps.length)
// Initialize Firebase
{
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
