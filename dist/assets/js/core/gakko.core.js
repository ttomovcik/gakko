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
        var uglyJSON = document.getElementById(sourceElement).value;
        var obj = JSON.parse(uglyJSON);
        var prettyJSON = JSON.stringify(obj, undefined, 4);
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
 * Logs some shit into console
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
        case (action == "qsave"):
            if (value) {
                console.log('saving');
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
            let modalToClose = document.getElementById(importModal)
            Object.keys(data).forEach(function (k) {
                localStorage.setItem(k, data[k]);
            });
            $(modalToClose).modal('hide')
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