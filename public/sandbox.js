/**
 * What's this file about?
 * =======================
 * 
 * I just test random shit in here 'cuz I'm too lazy
 * to open browser window or something like that
 */

let pageArray = [
    'https://www.000.com',
    '',
    'https://www.bbb.com',
    'www.ccc.com'
].filter(function (el) {
    return el;
});
let index = 0;

// Add 'https://' to items starting with 'www'
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