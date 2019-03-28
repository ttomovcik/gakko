const firebaseConfig = {
    apiKey: "AIzaSyCOh3GXwzisRdFuKJjJGZy3q9T8jafWiMU",
    authDomain: "gakko-webapp.firebaseapp.com",
    databaseURL: "https://gakko-webapp.firebaseio.com",
    projectId: "gakko-webapp",
    storageBucket: "gakko-webapp.appspot.com",
    messagingSenderId: "31535272637"
};
firebase.initializeApp(firebaseConfig);
const firebaseDatabase = firebase.firestore();
const firebaseAuth = firebase.auth();