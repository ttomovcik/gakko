const firebaseConfig = {
    apiKey: "AIzaSyBJ2xe48UwTt0gwrFItAwGyJoq9-wuPAOU",
    authDomain: "gakko-webapp.firebaseapp.com",
    databaseURL: "https://gakko-webapp.firebaseio.com",
    projectId: "gakko-webapp",
    storageBucket: "gakko-webapp.appspot.com",
    messagingSenderId: "959643284605"
};
const firebaseDatabase = firebase.database();
const firebaseAuth = firebase.auth();

// Initialize Google Analytics
window.dataLayer = window.dataLayer || [];

// Push dataLayer, something something. Idk.
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-133294265-1');

// Initialize Google Firebase
firebase.initializeApp(firebaseConfig);