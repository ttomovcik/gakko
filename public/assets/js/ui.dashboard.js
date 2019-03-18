const defaults_appName = "Gakkō";
const defaults_alphaSuperScript = "<sup>α</sup>";
const ui_header_appTitle = document.getElementById('appTitle');
const stored_school_schoolName = settingsManager("get", "schoolname");

if (stored_school_schoolName) {
    ui_header_appTitle.innerHTML = stored_school_schoolName;
} else {
    ui_header_appTitle = defaults_appName + defaults_alphaSuperScript;
}

showCurrentDateTimeInMainUI('clock');

// ! This will be obsolete in future releases
// TODO Make weather helper class
! function (e, t, i) {
    let n, r = e.getElementsByTagName(t)[0];
    e.getElementById(i) || ((n = e.createElement(t)).id = i,
        n.src = "https://weatherwidget.io/js/widget.min.js",
        r.parentNode.insertBefore(n, r))
}(document, "script", "weatherwidget-io-js");

// ? Prolly change the constructor since the dashboard won't change much.
new showCurrentClassState('ccIcon', 'ccName', 'ucName');