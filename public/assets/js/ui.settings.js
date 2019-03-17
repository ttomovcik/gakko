/**
 * TODO: (4): Autofill placeholders if settings are saved previously
 */

const input_schoolName = document.getElementById('input_schoolName');
const input_edupageServer = document.getElementById('input_edupageServer');
const input_additionalPage1 = document.getElementById('input_additionalPage1');
const input_additionalPage2 = document.getElementById('input_additionalPage2');
const input_additionalPage3 = document.getElementById('input_additionalPage3');

function goBack() {
    window.history.back();
    consoleHelper(
        'ui.settings.goBack',
        'navigation',
        'see ya later');
}

/**
 * ? I should prolly do something about this
 * TODO: Create global routing shit. Too lazy to use Angular
 * @param {x} x What link to open
 */
function navigate(x) {
    this.x = x;
    switch (true) {
        case (this.x = 'wiki'):
            window.location.href = 'https://github.com/ttomovcik/gakko/wiki'
            break;
        case (this.x = 'bugreport'):
            window.location.href = 'https://github.com/ttomovcik/gakko/issues/new'
            break;
        default:
            break

    }
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