/**
 * @param {String} fun - Function that calls consoleHelper
 * @param {String} event - What happened
 * @param {String} status - Status, duh
 * @param {String} msg - Additional message to be logged
 * @param {String} name - In case of localStorage, name of the setting
 * @param {String} value - localStorage -> value of the saved setting
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
    );
}

/**
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
 * Shows current date and classStateTime in specified element
 *  
 * @param {String} element ID of the element to have date and classStateTime displayed in.
 * @see getCurrentDateTime()
 */
function showCurrentDateTimeInMainUI(element) {
    setInterval(function () {
        document.getElementById(element).textContent = getCurrentDateTime()[0] + '.' +
            getCurrentDateTime()[1] + '.' +
            getCurrentDateTime()[2] + ' ' +
            getCurrentDateTime()[3] + ':' +
            getCurrentDateTime()[4] + ':' +
            getCurrentDateTime()[5]
    }, 1000)
};

/**
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
 * Adds 0 to numbers if input is <10
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
 * Opens webpage in new tab
 * 
 * @param {String} url - URL of website to open
 */
function dora(url) {
    window.open(url, "_self");
}

/**
 * @param {String} action What to do (get, set, qset, reset, export, import)
 * @param {(String|Number)} name Name to be used of the saved value
 * @param {(String|Number)} value Value to be saved if action == "store"
 * @param {String} dataSource Source element ID to get data from
 * @param {String} importModal Target modal ID to be hidden after import
 * @see consoleHelper
 */
function settingsManager(action, name, value, dataSource, importModal) {
    switch (true) {
        case (action == "get"):
            return localStorage.getItem(name);
        case (action == "set"):
            if (value) {
                localStorage.setItem(name, value);
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
                // console.log('^(;,;)^');
            }
            break;
        case (action == "reset"):
            localStorage.clear();
            consoleHelper(
                'settingsManager.reset',
                'localStorage',
                'cleared',
                'all items have been cleared'
            );
            break;
        case (action == "export"):
            navigator.clipboard.writeText(JSON.stringify(localStorage));
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
            Object.keys(data).forEach(function (key) {
                localStorage.setItem(key, data[key]);
            });
            $(modalToClose).modal('hide');
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

/**
 * @param {*} state - Starts easter egg manager if any parameter is provided
 */
function easterEggManager(state) {
    if (state) {
        console.log('^(;,;)^');
    } else {
        return;
    }
}