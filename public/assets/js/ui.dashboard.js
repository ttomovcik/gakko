const defaults_appName = "Gakkō";
const defaults_appVersion = "0.1.0-alpha";
const defaults_alphaSuperScript = "<sup>α</sup>";
let ui_header_appTitle = document.getElementById('appTitle');
let stored_school_schoolName = settingsManager("get", "schoolname");
let stored_school_edupageServer = settingsManager("get", "edupageserver");
let stored_school_additionalPages1 = settingsManager("get", "additionalapages1");
let stored_school_additionalPages2 = settingsManager("get", "additionalapages2");
let stored_school_additionalPages3 = settingsManager("get", "additionalapages3");
let stored_app_webpageinterval = settingsManager("get", "webpageinterval");

if (stored_school_schoolName) {
    ui_header_appTitle.innerHTML = stored_school_schoolName;
} else {
    ui_header_appTitle = defaults_appName + defaults_alphaSuperScript;
}

showCurrentDateTimeInMainUI('clock');

! function (e, t, i) {
    let n, r = e.getElementsByTagName(t)[0];
    e.getElementById(i) || ((n = e.createElement(t)).id = i,
        n.src = "https://weatherwidget.io/js/widget.min.js",
        r.parentNode.insertBefore(n, r))
}(document, "script", "weatherwidget-io-js");

new showCurrentClassState('ccIcon', 'ccName', 'ucName');