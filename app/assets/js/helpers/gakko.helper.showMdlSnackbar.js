/**
 * Shows snackbar with specified parameters
 * 
 * @param {String} snackbar ID of the Snackbar
 * @param {(String|Number)} msg Message to be shown inside the snackbar
 * @param {String} actionMsg Action button message (for example: undo)
 */
function showSnackbar(snackbar, msg, actionMsg) {
    (function () {
        'use strict';
        var snackbarContainer = document.getElementById(snackbar);
        var handler = function (event) {
            console.log('Are you sure about that?')
        };
        var snackbarData = {
            message: msg,
            timeout: 1000,
            actionHandler: handler,
            actionText: actionMsg
        };
        snackbarContainer.MaterialSnackbar.showSnackbar(snackbarData);
    })();
}