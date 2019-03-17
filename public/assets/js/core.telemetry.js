const firebaseConfig = {
    apiKey: "AIzaSyBJ2xe48UwTt0gwrFItAwGyJoq9-wuPAOU",
    authDomain: "gakko-pwa.firebaseapp.com",
    databaseURL: "https://gakko-pwa.firebaseio.com",
    projectId: "gakko-pwa",
    storageBucket: "gakko-pwa.appspot.com",
    messagingSenderId: "959643284605"
};

(function () {
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
});