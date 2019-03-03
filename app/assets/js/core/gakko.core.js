const firebaseConfig = {
    apiKey: "AIzaSyBJ2xe48UwTt0gwrFItAwGyJoq9-wuPAOU",
    authDomain: "gakko-pwa.firebaseapp.com",
    databaseURL: "https://gakko-pwa.firebaseio.com",
    projectId: "gakko-pwa",
    storageBucket: "gakko-pwa.appspot.com",
    messagingSenderId: "959643284605"
};

console.log("-----\nTHIS IS EARLY PREVIEW OF WHAT KIND OF BUGS YOU CAN EXPECT!\nSeriously, this is alpha version and still in development.\n-----");
console.log("core::INIT_SERVICE_WORKER");
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
    });
}

// Initialize Google Firebase
console.log("core::INIT_GOOGLE_FIREBASE");
firebase.initializeApp(firebaseConfig);

// Initialize Google Analytics
console.log("core::INIT_GOOGLE_ANALYTICS");
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-133294265-1');
console.log("core::INIT_MEOW");

/**
 * Gets current date and classStateTime
 * 
 * @returns {Array} Array with DD:MM:YYY hh:mm:ss
 */
function getCurrentDateTime() {
    const date = new Date();
    return [
        date.getDate(),
        (date.getMonth() + 1),
        date.getFullYear(),
        prettifyLTTValues(date.getHours()),
        prettifyLTTValues(date.getMinutes()),
        prettifyLTTValues(date.getSeconds())
    ];
}

/**
 * 
 * @param {String} sourceElement Element to prettify text inside of
 */
function prettifyJSON(sourceElement) {
    setTimeout(function () {
        let uglyJSON = document.getElementById(sourceElement).value;
        let obj = JSON.parse(uglyJSON);
        let prettyJSON = JSON.stringify(obj, undefined, 4);
        document.getElementById(sourceElement).value = prettyJSON;
    }, 100);
}

/**
 * 
 * @param {(String|Number)} i Takes input value and checks if i<10.
 * @returns {String} Prettified value
 */
function prettifyLTTValues(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i
}

/**
 * Shows current date and classStateTime in specified element
 *  
 * @param {String} element ID of the element to have date and classStateTime displayed in.
 * @see getCurrentDateTime()
 */
function showCurrentDateTimeInMainUI(element) {
    setInterval(function () {
        document.getElementById(element).innerHTML = getCurrentDateTime()[0] + '.' +
            getCurrentDateTime()[1] + '.' +
            getCurrentDateTime()[2] + ' ' +
            getCurrentDateTime()[3] + ':' +
            getCurrentDateTime()[4] + ':' +
            getCurrentDateTime()[5]
    }, 1000)
};

/**
 * Logs some shit into console.
 * 
 * @param {String} fun Function that calls consoleHelper
 * @param {String} event What happend
 * @param {String} status Status, duh
 * @param {String} msg Additional message to be logged
 * @param {String} name In case of localStorage, name of the setting
 * @param {String} value localStorage -> value of the saved setting
 */
function consoleHelper(fun, event, status, msg, name, value) {
    console.log(
        '[consoleHelper]' + '\n' +
        '===============' + '\n' +
        'Function:  ' + fun + '\n' +
        'Event:     ' + event + '\n' +
        'Status:    ' + status + '\n' +
        'Message:   ' + msg + '\n' +
        'Name:      ' + name + '\n' +
        'Value:     ' + value + '\n'
    )
}

/**
 * settingsManager
 * @param {String} action What to do
 * @param {(String|Number)} name Name to be used of the saved value
 * @param {(String|Number)} value Value to be saved if action == "store"
 * @param {String} dataSource Source element ID to get data from
 * @param {String} importModal Target modal ID to be hidden after import
 * @see showSnackbar
 * @see consoleHelper
 */
function settingsManager(action, name, value, dataSource, importModal) {
    switch (true) {
        // Get items from localStorage
        case (action == "get"):
            return localStorage.getItem(name);
            // Save items to localStorage
        case (action == "set"):
            if (value) {
                localStorage.setItem(name, value);
                showSnackbar(
                    'snackbarContainer',
                    'Nastavenia boli uložené',
                    'ok');
                consoleHelper(
                    'settingsManager.set',
                    'localStorage',
                    'saved',
                    'item(s) have been updated',
                    name,
                    value);
            }
            break;
        case (action == "qset"):
            if (value) {
                localStorage.setItem(name, value);
            }
            break;
        case (action == "reset"):
            localStorage.clear();
            showSnackbar(
                'snackbarContainer',
                'Nastavenia boli obnovené',
                'ok');
            consoleHelper(
                'settingsManager.reset',
                'localStorage',
                'cleared',
                'all items have been cleared'
            );
            break;
        case (action == "export"):
            navigator.clipboard.writeText(JSON.stringify(localStorage))
            showSnackbar(
                'snackbarContainer',
                'Nastavenia boli exportované do schránky',
                'ok');
            consoleHelper(
                'settingsManager.export',
                'localStorage',
                'exported',
                'items in localStorage have been copied to clipboard',
                'clipboard contents',
                localStorage
            );
            break;
        case (action == "import"):
            let data = JSON.parse(document.getElementById(dataSource).value);
            let modalToClose = document.getElementById(importModal);
            Object.keys(data).forEach(function (k) {
                localStorage.setItem(k, data[k]);
            });
            $(modalToClose).modal('hide');
            showSnackbar(
                'snackbarContainer',
                'Nastavenia boli importované',
                'ok');
            consoleHelper(
                'settingsManager.import',
                'localStorage',
                'imported',
                'items have been imported into localStorage',
                'imported settings',
                localStorage
            );
            break;
        default:
            return;
    }
}