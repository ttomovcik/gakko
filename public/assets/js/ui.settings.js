const input_schoolName = document.getElementById('input_schoolName');
const input_edupageServer = document.getElementById('input_edupageServer');
const input_additionalPage1 = document.getElementById('input_additionalPage1');
const input_additionalPage2 = document.getElementById('input_additionalPage2');
const input_additionalPage3 = document.getElementById('input_additionalPage3');
let labelsArray = [
    document.getElementById('label_schoolName'),
    document.getElementById('label_edupageServer'),
    document.getElementById('label_additionalPage1'),
    document.getElementById('label_additionalPage2'),
    document.getElementById('label_additionalPage3')
]
let storedSettingsArray = [
    settingsManager('get', 'schoolname'),
    settingsManager('get', 'edupageServer'),
    settingsManager('get', 'additionalPage1'),
    settingsManager('get', 'additionalPage2'),
    settingsManager('get', 'additionalPage3')
];

populatePlaceholders();

function goBack() {
    window.history.back();
    consoleHelper(
        'ui.settings.goBack',
        'navigation',
        'see ya later');
}

function saveSettings() {
    settingsManager('set', 'schoolname', input_schoolName.value);
    settingsManager('set', 'edupageServer', input_edupageServer.value);
    settingsManager('set', 'additionalPage1', input_additionalPage1.value);
    settingsManager('set', 'additionalPage2', input_additionalPage2.value);
    settingsManager('set', 'additionalPage3', input_additionalPage3.value);
    document.querySelector('.mdl-js-snackbar').MaterialSnackbar.showSnackbar({
        message: 'Nastavenia boli uložené',
        timeout: 2000
    });
}

function saveSettingsAndGoBack() {
    saveSettings();
    goBack();
}

function exportSettings() {
    settingsManager('export');
    document.querySelector('.mdl-js-snackbar').MaterialSnackbar.showSnackbar({
        message: 'Nastavenia boli exportované',
        actionHandler: function () {},
        actionText: 'OK',
        timeout: 2750
    });
}

function populatePlaceholders() {
    if (storedSettingsArray[0]) {
        labelsArray[0].textContent = storedSettingsArray[0];
    }
    if (storedSettingsArray[1]) {
        labelsArray[1].textContent = storedSettingsArray[1];
    }
    if (storedSettingsArray[2]) {
        labelsArray[2].textContent = storedSettingsArray[2];
    }
    if (storedSettingsArray[3]) {
        labelsArray[3].textContent = storedSettingsArray[3];
    }
    if (storedSettingsArray[4]) {
        labelsArray[4].textContent = storedSettingsArray[4];
    }
}