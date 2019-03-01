/**
 * Shows current date and classStateTime in specified element
 *  
 * @param {String} element ID of the element to have date and classStateTime displayed in.
 * @see getCurrentDateTime()
 */
function showCurrentDateTimeInMainUI(element) {
    document.getElementById(element).innerHTML = getCurrentDateTime()[0] + '.' +
        getCurrentDateTime()[1] + '.' +
        getCurrentDateTime()[2] + ' ' +
        getCurrentDateTime()[3] + ':' +
        getCurrentDateTime()[4] + ':' +
        getCurrentDateTime()[5]
};