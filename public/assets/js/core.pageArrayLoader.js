const corsProxy = [
    'https://cors.io/?',
    'https://jsonp.afeld.me/?url=',
    'https://cors-anywhere.herokuapp.com/'
]
let pageArray = [
    settingsManager('get', 'edupageServer'),
    settingsManager('get', 'additionalPage1'),
    settingsManager('get', 'additionalPage2'),
    settingsManager('get', 'additionalPage3')
].filter(function (item) {
    return item;
});
let index = 0;

function initPageArrayForCORS() {
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
    initPageArrayForCORS();
    const website = pageArray[index];
    index++;
    console.log(website);
    document.getElementById('iframe_container').src = corsProxy[0] + website;
};