! function(e) {
    var t, n, o, i, c, d, l = '<svg><symbol id="icon-guanbi" viewBox="0 0 1024 1024"><path d="M92.848153 957.245643c-6.560416 0-13.118785-2.50403-18.120706-7.513114-9.996678-10.007935-9.986445-26.224268 0.021489-36.220946l419.563728-419.049005c9.999748-9.987468 26.198685-9.986445 36.199457 0l419.547355 419.050028c10.007935 9.996678 10.017144 26.211988 0.021489 36.220946-9.995655 10.007935-26.210965 10.017144-36.220946 0.021489L512.411881 548.782741l-401.464511 400.972301C105.947496 954.748776 99.397313 957.245643 92.848153 957.245643z"  ></path><path d="M512.411881 537.215288c-6.550183 0-13.100366-2.496867-18.10024-7.490601L74.748936 110.642936c-10.007935-9.996678-10.017144-26.213012-0.021489-36.220946s26.213012-10.018168 36.220946-0.021489l401.463488 401.001977L913.856949 74.402547c10.007935-9.997702 26.223245-9.988492 36.220946 0.020466 9.996678 10.007935 9.987468 26.224268-0.021489 36.220946L530.513144 529.723663C525.512247 534.717398 518.963087 537.215288 512.411881 537.215288z"  ></path></symbol></svg>',
        a = (a = document.getElementsByTagName("script"))[a.length - 1].getAttribute("data-injectcss");
    if (a && !e.__iconfont__svg__cssinject__) { e.__iconfont__svg__cssinject__ = !0; try { document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>") } catch (e) { console && console.log(e) } }

    function s() { c || (c = !0, o()) }
    t = function() {
        var e, t, n;
        (n = document.createElement("div")).innerHTML = l, l = null, (t = n.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", e = t, (n = document.body).firstChild ? (t = n.firstChild).parentNode.insertBefore(e, t) : n.appendChild(e))
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(t, 0) : (n = function() { document.removeEventListener("DOMContentLoaded", n, !1), t() }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = t, i = e.document, c = !1, (d = function() {
        try { i.documentElement.doScroll("left") } catch (e) { return void setTimeout(d, 50) }
        s()
    })(), i.onreadystatechange = function() { "complete" == i.readyState && (i.onreadystatechange = null, s()) })
}(window);