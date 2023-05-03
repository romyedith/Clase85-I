import firebase from 'firebase';
// require('firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyBvNl2zTSz6C8j1rPlCEZbTuaN4_7RlPcA",
  authDomain: "story-5fdac.firebaseapp.com",
  databaseURL: "https://story-5fdac-default-rtdb.firebaseio.com",
  projectId: "story-5fdac",
  storageBucket: "story-5fdac.appspot.com",
  messagingSenderId: "558463443690",
  appId: "1:558463443690:web:9ec5ceb4a0c7e3772aed93"
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
