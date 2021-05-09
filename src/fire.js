import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDSzS28IuplPueZPLRXNGl5BOv3PEYFzAo",
    authDomain: "authentication-form-e482d.firebaseapp.com",
    projectId: "authentication-form-e482d",
    storageBucket: "authentication-form-e482d.appspot.com",
    messagingSenderId: "177507471654",
    appId: "1:177507471654:web:ade7ffd7efca55b5c3f1e7"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire