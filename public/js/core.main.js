function consoleHelper(fun, event, status, msg, name, value) {
    console.log(
        "[consoleHelper]\n===============\nFunction:  " + fun +
        "\nEvent:     " + event +
        "\nStatus:    " + status +
        "\nMessage:   " + msg +
        "\nName:      " + name +
        "\nValue:     " + value + "\n")
}

function getCurrentDateTime() {
    const date = new Date;
    return [date.getDate(),
        date.getMonth() + 1,
        date.getFullYear(),
        prettifyLTTValues(date.getHours()),
        prettifyLTTValues(date.getMinutes()),
        prettifyLTTValues(date.getSeconds())
    ]
}

function showCurrentDateTimeInMainUI(element) {
    setInterval(function () {
        document.getElementById(element).textContent = getCurrentDateTime()[0] +
            "." + getCurrentDateTime()[1] +
            "." + getCurrentDateTime()[2] +
            " " + getCurrentDateTime()[3] +
            ":" + getCurrentDateTime()[4] +
            ":" + getCurrentDateTime()[5]
    }, 1e3)
}

function countdown(endDate) {
    let days, hours, minutes, seconds;
    endDate = new Date(endDate).getTime();

    if (isNaN(endDate)) {
        return;
    }

    setInterval(calculate, 1000);

    function calculate() {
        let startDate = new Date();
        startDate = startDate.getTime();
        let timeRemaining = parseInt((endDate - startDate) / 1000);
        if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);
            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);
            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);
            seconds = parseInt(timeRemaining);
            document.getElementById("days").innerHTML = parseInt(days, 10);
            document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
            document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
            document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        } else {
            return;
        }
    }
}

function prettifyJSON(sourceElement) {
    setTimeout(function () {
        let uglyJSON = document.getElementById(sourceElement).value,
            obj = JSON.parse(uglyJSON),
            prettyJSON = JSON.stringify(obj, void 0, 4);
        document.getElementById(sourceElement).value = prettyJSON
    }, 100)
}

function prettifyLTTValues(i) {
    return i < 10 && (i = "0" + i), i
}

function dora(url) {
    window.open(url, "_self")
}

function settingsManager(action, name, value, dataSource, importModal) {
    switch (!0) {
        case "get" == action:
            return localStorage.getItem(name);
        case "set" == action:
            value && (localStorage.setItem(name, value),
                consoleHelper(
                    "settingsManager.set",
                    "localStorage",
                    "saved",
                    "item(s) have been updated",
                    name,
                    value));
            break;
        case "qset" == action:
            value && localStorage.setItem(name, value);
            break;
        case "reset" == action:
            localStorage.clear(), consoleHelper(
                "settingsManager.reset",
                "localStorage",
                "cleared",
                "all items have been cleared");
            break;
        case "export" == action:
            navigator.clipboard.writeText(JSON.stringify(localStorage)),
                consoleHelper(
                    "settingsManager.export",
                    "localStorage",
                    "exported",
                    "items in localStorage have been copied to clipboard",
                    "clipboard contents",
                    localStorage);
            break;
        case "import" == action:
            let data = JSON.parse(document.getElementById(dataSource).value),
                modalToClose = document.getElementById(importModal);
            Object.keys(data).forEach(function (k) {
                    localStorage.setItem(k, data[k])
                }), $(modalToClose).modal("hide"),
                consoleHelper(
                    "settingsManager.import",
                    "localStorage",
                    "imported",
                    "items have been imported into localStorage",
                    "imported settings",
                    localStorage);
            break;
        default:
            return
    }
}

function easterEggManager(state) {
    state && console.log("^(;,;)^")
}

function gtag() {
    dataLayer.push(arguments)
}
window.dataLayer = window.dataLayer || [], gtag("js", new Date), gtag("config", "UA-133294265-1");