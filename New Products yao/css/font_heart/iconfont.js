! function(e) {
    var t, n, o, i, c, d, l = '<svg><symbol id="icon-aixin" viewBox="0 0 1024 1024"><path d="M512 901.747c-13.584 0-26.122-4.18-37.094-13.061-8.882-7.315-225.698-175.02-312.424-311.38-28.735-44.93-68.441-106.057-68.441-192.784 0-144.718 108.147-262.269 240.326-262.269 67.396 0 131.657 30.825 177.633 84.637 45.453-54.335 109.192-84.637 177.11-84.637 132.702 0 240.327 117.551 240.327 262.27 0 85.159-37.094 143.673-67.396 191.216l-1.045 1.567c-86.727 136.36-303.543 304.588-312.425 311.38-10.449 8.359-22.987 13.06-36.571 13.06zM334.367 164.049c-109.714 0-198.53 98.743-198.53 220.473 0 74.188 33.959 127.478 61.649 170.319 83.07 130.09 294.138 294.139 303.02 300.93 3.657 2.613 7.314 4.18 11.494 4.18s7.837-1.567 11.494-4.18c8.882-6.791 219.95-170.84 303.02-300.93l1.045-1.568c28.212-44.93 60.604-95.608 60.604-168.75 0-121.209-89.339-220.474-198.53-220.474-60.082 0-115.984 29.257-153.6 80.98l-6.27 8.881c-4.18 5.225-10.449 8.36-16.718 8.36s-13.061-3.135-16.718-8.36l-6.27-8.881c-39.706-51.2-96.13-80.98-155.69-80.98z"  ></path></symbol></svg>',
        s = (s = document.getElementsByTagName("script"))[s.length - 1].getAttribute("data-injectcss");
    if (s && !e.__iconfont__svg__cssinject__) { e.__iconfont__svg__cssinject__ = !0; try { document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>") } catch (e) { console && console.log(e) } }

    function a() { c || (c = !0, o()) }
    t = function() {
        var e, t, n;
        (n = document.createElement("div")).innerHTML = l, l = null, (t = n.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", e = t, (n = document.body).firstChild ? (t = n.firstChild).parentNode.insertBefore(e, t) : n.appendChild(e))
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(t, 0) : (n = function() { document.removeEventListener("DOMContentLoaded", n, !1), t() }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = t, i = e.document, c = !1, (d = function() {
        try { i.documentElement.doScroll("left") } catch (e) { return void setTimeout(d, 50) }
        a()
    })(), i.onreadystatechange = function() { "complete" == i.readyState && (i.onreadystatechange = null, a()) })
}(window);