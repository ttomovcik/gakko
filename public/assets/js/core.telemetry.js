const firebaseConfig = {
    apiKey: "AIzaSyBJ2xe48UwTt0gwrFItAwGyJoq9-wuPAOU",
    authDomain: "gakko-pwa.firebaseapp.com",
    databaseURL: "https://gakko-pwa.firebaseio.com",
    projectId: "gakko-pwa",
    storageBucket: "gakko-pwa.appspot.com",
    messagingSenderId: "959643284605"
};

// Initialize Google Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Google Analytics
window.dataLayer = window.dataLayer || [];

// Push dataLayer, something something. Idk.
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-133294265-1');

Sentry.init({
    dsn: 'https://fc1c3e73696a43408b16b88c4eab2cf5@sentry.io/1418165'
});