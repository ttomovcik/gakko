/**
 * Load website into iframe container with CORS bypass
 * 
 */

let pageArray = [
    settingsManager('get', 'edupageServer'),
    settingsManager('get', 'additionalPage1'),
    settingsManager('get', 'additionalPage2'),
    settingsManager('get', 'additionalPage3')
].filter(function (el) {
    return el;
});
let index = 0;

function prepareArrayForCORS() {
    for (let i = 0; i < pageArray.length; i++) {
        if (pageArray[i].startsWith('www')) {
            console.log(pageArray[i] +
                ' => ' +
                'https://' +
                pageArray[i]);
            pageArray[i] = 'https://' + pageArray[i];
        }
    }
};

async function loadWebsiteIntoContainer() {
    if (index > pageArray + 1) {
        index = 0;
    }
    const website = pageArray[index];
    index++;
    console.log(website);
};