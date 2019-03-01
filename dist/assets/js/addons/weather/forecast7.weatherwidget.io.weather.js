! function (e, t, i) {
    let n, r = e.getElementsByTagName(t)[0];
    e.getElementById(i) || ((n = e.createElement(t)).id = i,
        n.src = "https://weatherwidget.io/js/widget.min.js",
        r.parentNode.insertBefore(n, r))
}(document, "script", "weatherwidget-io-js");