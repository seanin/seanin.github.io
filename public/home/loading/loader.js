/*! device.js 0.1.61 */

/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */

/*!
 * Sizzle CSS Selector Engine v1.10.2
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03
 */

//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

//     (c) 2010-2011 Jeremy Ashkenas, DocumentCloud Inc.
//     (c) 2011-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

/*!
 * VERSION: 1.13.1
 * DATE: 2014-07-19
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

(function () {
    var e, t, n, r, i, s, o, u, a, f;
    e = window.device, window.device = {}, n = window.document.documentElement, f = window.navigator.userAgent.toLowerCase(), device.ios = function () {
        return device.iphone() || device.ipod() || device.ipad()
    }, device.iphone = function () {
        return r("iphone")
    }, device.ipod = function () {
        return r("ipod")
    }, device.ipad = function () {
        return r("ipad")
    }, device.android = function () {
        return r("android")
    }, device.androidPhone = function () {
        return device.android() && r("mobile")
    }, device.androidTablet = function () {
        return device.android() && !r("mobile")
    }, device.blackberry = function () {
        return r("blackberry") || r("bb10") || r("rim")
    }, device.blackberryPhone = function () {
        return device.blackberry() && !r("tablet")
    }, device.blackberryTablet = function () {
        return device.blackberry() && r("tablet")
    }, device.windows = function () {
        return r("windows")
    }, device.windowsPhone = function () {
        return device.windows() && r("phone")
    }, device.windowsTablet = function () {
        return device.windows() && r("touch") && !device.windowsPhone()
    }, device.fxos = function () {
        return (r("(mobile;") || r("(tablet;")) && r("; rv:")
    }, device.fxosPhone = function () {
        return device.fxos() && r("mobile")
    }, device.fxosTablet = function () {
        return device.fxos() && r("tablet")
    }, device.meego = function () {
        return r("meego")
    }, device.cordova = function () {
        return window.cordova && "file:" === location.protocol
    }, device.nodeWebkit = function () {
        return "object" == typeof window.process
    }, device.mobile = function () {
        return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego()
    }, device.tablet = function () {
        return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet()
    }, device.desktop = function () {
        return !device.tablet() && !device.mobile()
    }, device.portrait = function () {
        return window.innerHeight / window.innerWidth > 1
    }, device.landscape = function () {
        return window.innerHeight / window.innerWidth < 1
    }, device.noConflict = function () {
        return window.device = e, this
    }, r = function (e) {
        return -1 !== f.indexOf(e)
    }, s = function (e) {
        var t;
        return t = new RegExp(e, "i"), n.className.match(t)
    }, t = function (e) {
        return s(e) ? void 0 : n.className += " " + e
    }, u = function (e) {
        return s(e) ? n.className = n.className.replace(e, "") : void 0
    }, device.ios() ? device.ipad() ? t("ios ipad tablet") : device.iphone() ? t("ios iphone mobile") : device.ipod() && t("ios ipod mobile") : t(device.android() ? device.androidTablet() ? "android tablet" : "android mobile" : device.blackberry() ? device.blackberryTablet() ? "blackberry tablet" : "blackberry mobile" : device.windows() ? device.windowsTablet() ? "windows tablet" : device.windowsPhone() ? "windows mobile" : "desktop" : device.fxos() ? device.fxosTablet() ? "fxos tablet" : "fxos mobile" : device.meego() ? "meego mobile" : device.nodeWebkit() ? "node-webkit" : "desktop"), device.cordova() && t("cordova"), i = function () {
        return device.landscape() ? (u("portrait"), t("landscape")) : (u("landscape"), t("portrait"))
    }, a = "onorientationchange"in window, o = a ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(o, i, !1) : window.attachEvent ? window.attachEvent(o, i) : window[o] = i, i()
}).call(this), define("libs/device", function (e) {
    return function () {
        var t, n;
        return t || e.device
    }
}(this)), define("config", ["modernizr", "libs/device"], function (e, t) {
    var n = {
        SITE_URL: "http://",
        APP_URL: "https://apps.facebook.com/",
        CDN: "20150213194513_1_0_0c9c3c2",
        ENV: "live",
        OLD_DESKTOP: !e.csstransforms,
        MOBILE: t.mobile(),
        TABLET: t.tablet(),
        IOS: t.ios(),
        ANDROID: t.android(),
        HI_DPI: window.devicePixelRatio > 1,
        FLOWS: {BASIC: "BASIC", EXTENDED: "EXTENDED", MOBILE: "MOBILE", TABLET: "TABLET"},
        FLOW: "none",
        FLASH_VESRION: "11.0.0",
        FLASH: null,
        FLASH_BYPASS: window.location.href.match(/bypass/),
        FACEBOOK_APP_IDS: {
            live: "1553217971600814",
            staging: "1553217971600814",
            dev: "1553217971600814",
            local: "1553221974933747"
        },
        getFBID: function () {
            return this.FACEBOOK_APP_IDS[this.ENV]
        },
        API_URL: {live: "", staging: "", dev: "", local: ""},
        getAPI: function () {
            return this.API_URL[this.ENV]
        },
        GA: "UA-59663620-1",
        SHARE_IMG: "/preload.png"
    };
    return n.BASE_URL = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1), n
}), function (e, t) {
    function H(e) {
        var t = e.length, n = w.type(e);
        return w.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
    }

    function j(e) {
        var t = B[e] = {};
        return w.each(e.match(S) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function q(e, n, r, i) {
        if (!w.acceptData(e))return;
        var s, o, u = w.expando, a = e.nodeType, f = a ? w.cache : e, l = a ? e[u] : e[u] && u;
        if ((!l || !f[l] || !i && !f[l].data) && r === t && typeof n == "string")return;
        l || (a ? l = e[u] = c.pop() || w.guid++ : l = u), f[l] || (f[l] = a ? {} : {toJSON: w.noop});
        if (typeof n == "object" || typeof n == "function")i ? f[l] = w.extend(f[l], n) : f[l].data = w.extend(f[l].data, n);
        return o = f[l], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[w.camelCase(n)] = r), typeof n == "string" ? (s = o[n], s == null && (s = o[w.camelCase(n)])) : s = o, s
    }

    function R(e, t, n) {
        if (!w.acceptData(e))return;
        var r, i, s = e.nodeType, o = s ? w.cache : e, u = s ? e[w.expando] : w.expando;
        if (!o[u])return;
        if (t) {
            r = n ? o[u] : o[u].data;
            if (r) {
                w.isArray(t) ? t = t.concat(w.map(t, w.camelCase)) : t in r ? t = [t] : (t = w.camelCase(t), t in r ? t = [t] : t = t.split(" ")), i = t.length;
                while (i--)delete r[t[i]];
                if (n ? !z(r) : !w.isEmptyObject(r))return
            }
        }
        if (!n) {
            delete o[u].data;
            if (!z(o[u]))return
        }
        s ? w.cleanData([e], !0) : w.support.deleteExpando || o != o.window ? delete o[u] : o[u] = null
    }

    function U(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(I, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : F.test(r) ? w.parseJSON(r) : r
                } catch (s) {
                }
                w.data(e, n, r)
            } else r = t
        }
        return r
    }

    function z(e) {
        var t;
        for (t in e) {
            if (t === "data" && w.isEmptyObject(e[t]))continue;
            if (t !== "toJSON")return !1
        }
        return !0
    }

    function it() {
        return !0
    }

    function st() {
        return !1
    }

    function ot() {
        try {
            return o.activeElement
        } catch (e) {
        }
    }

    function ct(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function ht(e, t, n) {
        if (w.isFunction(t))return w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType)return w.grep(e, function (e) {
            return e === t !== n
        });
        if (typeof t == "string") {
            if (ut.test(t))return w.filter(t, e, n);
            t = w.filter(t, e)
        }
        return w.grep(e, function (e) {
            return w.inArray(e, t) >= 0 !== n
        })
    }

    function pt(e) {
        var t = dt.split("|"), n = e.createDocumentFragment();
        if (n.createElement)while (t.length)n.createElement(t.pop());
        return n
    }

    function Mt(e, t) {
        return w.nodeName(e, "table") && w.nodeName(t.nodeType === 1 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function _t(e) {
        return e.type = (w.find.attr(e, "type") !== null) + "/" + e.type, e
    }

    function Dt(e) {
        var t = Ct.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Pt(e, t) {
        var n, r = 0;
        for (; (n = e[r]) != null; r++)w._data(n, "globalEval", !t || w._data(t[r], "globalEval"))
    }

    function Ht(e, t) {
        if (t.nodeType !== 1 || !w.hasData(e))return;
        var n, r, i, s = w._data(e), o = w._data(t, s), u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)for (r = 0, i = u[n].length; r < i; r++)w.event.add(t, n, u[n][r])
        }
        o.data && (o.data = w.extend({}, o.data))
    }

    function Bt(e, t) {
        var n, r, i;
        if (t.nodeType !== 1)return;
        n = t.nodeName.toLowerCase();
        if (!w.support.noCloneEvent && t[w.expando]) {
            i = w._data(t);
            for (r in i.events)w.removeEvent(t, r, i.handle);
            t.removeAttribute(w.expando)
        }
        if (n === "script" && t.text !== e.text)_t(t).text = e.text, Dt(t); else if (n === "object")t.parentNode && (t.outerHTML = e.outerHTML), w.support.html5Clone && e.innerHTML && !w.trim(t.innerHTML) && (t.innerHTML = e.innerHTML); else if (n === "input" && xt.test(e.type))t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value); else if (n === "option")t.defaultSelected = t.selected = e.defaultSelected; else if (n === "input" || n === "textarea")t.defaultValue = e.defaultValue
    }

    function jt(e, n) {
        var r, s, o = 0, u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!u)for (u = [], r = e.childNodes || e; (s = r[o]) != null; o++)!n || w.nodeName(s, n) ? u.push(s) : w.merge(u, jt(s, n));
        return n === t || n && w.nodeName(e, n) ? w.merge([e], u) : u
    }

    function Ft(e) {
        xt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function tn(e, t) {
        if (t in e)return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--) {
            t = en[i] + n;
            if (t in e)return t
        }
        return r
    }

    function nn(e, t) {
        return e = t || e, w.css(e, "display") === "none" || !w.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, s = [], o = 0, u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style)continue;
            s[o] = w._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && nn(r) && (s[o] = w._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && n !== "none" || !i) && w._data(r, "olddisplay", i ? n : w.css(r, "display")))
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style)continue;
            if (!t || r.style.display === "none" || r.style.display === "")r.style.display = t ? s[o] || "" : "none"
        }
        return e
    }

    function sn(e, t, n) {
        var r = $t.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function on(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0;
        for (; s < 4; s += 2)n === "margin" && (o += w.css(e, n + Zt[s], !0, i)), r ? (n === "content" && (o -= w.css(e, "padding" + Zt[s], !0, i)), n !== "margin" && (o -= w.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += w.css(e, "padding" + Zt[s], !0, i), n !== "padding" && (o += w.css(e, "border" + Zt[s] + "Width", !0, i)));
        return o
    }

    function un(e, t, n) {
        var r = !0, i = t === "width" ? e.offsetWidth : e.offsetHeight, s = qt(e), o = w.support.boxSizing && w.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = Rt(e, t, s);
            if (i < 0 || i == null)i = e.style[t];
            if (Jt.test(i))return i;
            r = o && (w.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function an(e) {
        var t = o, n = Qt[e];
        if (!n) {
            n = fn(e, t);
            if (n === "none" || !n)It = (It || w("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = fn(e, t), It.detach();
            Qt[e] = n
        }
        return n
    }

    function fn(e, t) {
        var n = w(t.createElement(e)).appendTo(t.body), r = w.css(n[0], "display");
        return n.remove(), r
    }

    function vn(e, t, n, r) {
        var i;
        if (w.isArray(t))w.each(t, function (t, i) {
            n || cn.test(e) ? r(e, i) : vn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        }); else if (!n && w.type(t) === "object")for (i in t)vn(e + "[" + i + "]", t[i], n, r); else r(e, t)
    }

    function _n(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i = 0, s = t.toLowerCase().match(S) || [];
            if (w.isFunction(n))while (r = s[i++])r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Dn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, w.each(e[u] || [], function (e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !s && !i[f])return t.dataTypes.unshift(f), o(f), !1;
                if (s)return !(a = f)
            }), a
        }

        var i = {}, s = e === An;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function Pn(e, n) {
        var r, i, s = w.ajaxSettings.flatOptions || {};
        for (i in n)n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
        return r && w.extend(!0, e, r), e
    }

    function Hn(e, n, r) {
        var i, s, o, u, a = e.contents, f = e.dataTypes;
        while (f[0] === "*")f.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
        if (s)for (u in a)if (a[u] && a[u].test(s)) {
            f.unshift(u);
            break
        }
        if (f[0]in r)o = f[0]; else {
            for (u in r) {
                if (!f[0] || e.converters[u + " " + f[0]]) {
                    o = u;
                    break
                }
                i || (i = u)
            }
            o = o || i
        }
        if (o)return o !== f[0] && f.unshift(o), r[o]
    }

    function Bn(e, t, n, r) {
        var i, s, o, u, a, f = {}, l = e.dataTypes.slice();
        if (l[1])for (o in e.converters)f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s) {
            e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift();
            if (s)if (s === "*")s = a; else if (a !== "*" && a !== s) {
                o = f[a + " " + s] || f["* " + s];
                if (!o)for (i in f) {
                    u = i.split(" ");
                    if (u[1] === s) {
                        o = f[a + " " + u[0]] || f["* " + u[0]];
                        if (o) {
                            o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                            break
                        }
                    }
                }
                if (o !== !0)if (o && e["throws"])t = o(t); else try {
                    t = o(t)
                } catch (c) {
                    return {state: "parsererror", error: o ? c : "No conversion from " + a + " to " + s}
                }
            }
        }
        return {state: "success", data: t}
    }

    function zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function Wn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function Yn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = w.now()
    }

    function Zn(e, t, n) {
        var r, i = (Gn[t] || []).concat(Gn["*"]), s = 0, o = i.length;
        for (; s < o; s++)if (r = i[s].call(n, t, e))return r
    }

    function er(e, t, n) {
        var r, i, s = 0, o = Qn.length, u = w.Deferred().always(function () {
            delete a.elem
        }), a = function () {
            if (i)return !1;
            var t = Xn || Yn(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length;
            for (; o < a; o++)f.tweens[o].run(s);
            return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
        }, f = u.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Yn(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = w.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? f.tweens.length : 0;
                if (i)return this;
                i = !0;
                for (; n < r; n++)f.tweens[n].run(1);
                return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
            }
        }), l = f.props;
        tr(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = Qn[s].call(f, e, l, f.opts);
            if (r)return r
        }
        return w.map(l, Zn, f), w.isFunction(f.opts.start) && f.opts.start.call(e, f), w.fx.timer(w.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function tr(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = w.camelCase(n), i = t[r], s = e[n], w.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = w.cssHooks[r];
            if (o && "expand"in o) {
                s = o.expand(s), delete e[r];
                for (n in s)n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function nr(e, t, n) {
        var r, i, s, o, u, a, f = this, l = {}, c = e.style, h = e.nodeType && nn(e), p = w._data(e, "fxshow");
        n.queue || (u = w._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function () {
            u.unqueued || a()
        }), u.unqueued++, f.always(function () {
            f.always(function () {
                u.unqueued--, w.queue(e, "fx").length || u.empty.fire()
            })
        })), e.nodeType === 1 && ("height"in t || "width"in t) && (n.overflow = [c.overflow, c.overflowX, c.overflowY], w.css(e, "display") === "inline" && w.css(e, "float") === "none" && (!w.support.inlineBlockNeedsLayout || an(e.nodeName) === "inline" ? c.display = "inline-block" : c.zoom = 1)), n.overflow && (c.overflow = "hidden", w.support.shrinkWrapBlocks || f.always(function () {
            c.overflow = n.overflow[0], c.overflowX = n.overflow[1], c.overflowY = n.overflow[2]
        }));
        for (r in t) {
            i = t[r];
            if ($n.exec(i)) {
                delete t[r], s = s || i === "toggle";
                if (i === (h ? "hide" : "show"))continue;
                l[r] = p && p[r] || w.style(e, r)
            }
        }
        if (!w.isEmptyObject(l)) {
            p ? "hidden"in p && (h = p.hidden) : p = w._data(e, "fxshow", {}), s && (p.hidden = !h), h ? w(e).show() : f.done(function () {
                w(e).hide()
            }), f.done(function () {
                var t;
                w._removeData(e, "fxshow");
                for (t in l)w.style(e, t, l[t])
            });
            for (r in l)o = Zn(h ? p[r] : 0, r, f), r in p || (p[r] = o.start, h && (o.end = o.start, o.start = r === "width" || r === "height" ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    function ir(e, t) {
        var n, r = {height: e}, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t)n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function sr(e) {
        return w.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }

    var n, r, i = typeof t, s = e.location, o = e.document, u = o.documentElement, a = e.jQuery, f = e.$, l = {}, c = [], h = "1.10.2", p = c.concat, d = c.push, v = c.slice, m = c.indexOf, g = l.toString, y = l.hasOwnProperty, b = h.trim, w = function (e, t) {
        return new w.fn.init(e, t, r)
    }, E = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, S = /\S+/g, x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, C = /^[\],:{}\s]*$/, k = /(?:^|:|,)(?:\s*\[)+/g, L = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, O = /^-ms-/, M = /-([\da-z])/gi, _ = function (e, t) {
        return t.toUpperCase()
    }, D = function (e) {
        if (o.addEventListener || e.type === "load" || o.readyState === "complete")P(), w.ready()
    }, P = function () {
        o.addEventListener ? (o.removeEventListener("DOMContentLoaded", D, !1), e.removeEventListener("load", D, !1)) : (o.detachEvent("onreadystatechange", D), e.detachEvent("onload", D))
    };
    w.fn = w.prototype = {
        jquery: h, constructor: w, init: function (e, n, r) {
            var i, s;
            if (!e)return this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [null, e, null] : i = T.exec(e);
                if (i && (i[1] || !n)) {
                    if (i[1]) {
                        n = n instanceof w ? n[0] : n, w.merge(this, w.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0));
                        if (N.test(i[1]) && w.isPlainObject(n))for (i in n)w.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    s = o.getElementById(i[2]);
                    if (s && s.parentNode) {
                        if (s.id !== i[2])return r.find(e);
                        this.length = 1, this[0] = s
                    }
                    return this.context = o, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : w.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), w.makeArray(e, this))
        }, selector: "", length: 0, toArray: function () {
            return v.call(this)
        }, get: function (e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        }, pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return w.each(this, e, t)
        }, ready: function (e) {
            return w.ready.promise().done(e), this
        }, slice: function () {
            return this.pushStack(v.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: d, sort: [].sort, splice: [].splice
    }, w.fn.init.prototype = w.fn, w.extend = w.fn.extend = function () {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1, f = arguments.length, l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !w.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++)if ((s = arguments[a]) != null)for (i in s) {
            e = u[i], r = s[i];
            if (u === r)continue;
            l && r && (w.isPlainObject(r) || (n = w.isArray(r))) ? (n ? (n = !1, o = e && w.isArray(e) ? e : []) : o = e && w.isPlainObject(e) ? e : {}, u[i] = w.extend(l, o, r)) : r !== t && (u[i] = r)
        }
        return u
    }, w.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
            return e.$ === w && (e.$ = f), t && e.jQuery === w && (e.jQuery = a), w
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? w.readyWait++ : w.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? --w.readyWait : w.isReady)return;
            if (!o.body)return setTimeout(w.ready);
            w.isReady = !0;
            if (e !== !0 && --w.readyWait > 0)return;
            n.resolveWith(o, [w]), w.fn.trigger && w(o).trigger("ready").off("ready")
        }, isFunction: function (e) {
            return w.type(e) === "function"
        }, isArray: Array.isArray || function (e) {
            return w.type(e) === "array"
        }, isWindow: function (e) {
            return e != null && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? l[g.call(e)] || "object" : typeof e
        }, isPlainObject: function (e) {
            var n;
            if (!e || w.type(e) !== "object" || e.nodeType || w.isWindow(e))return !1;
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (r) {
                return !1
            }
            if (w.support.ownLast)for (n in e)return y.call(e, n);
            for (n in e);
            return n === t || y.call(e, n)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, error: function (e) {
            throw new Error(e)
        }, parseHTML: function (e, t, n) {
            if (!e || typeof e != "string")return null;
            typeof t == "boolean" && (n = t, t = !1), t = t || o;
            var r = N.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = w.buildFragment([e], t, i), i && w(i).remove(), w.merge([], r.childNodes))
        }, parseJSON: function (t) {
            if (e.JSON && e.JSON.parse)return e.JSON.parse(t);
            if (t === null)return t;
            if (typeof t == "string") {
                t = w.trim(t);
                if (t && C.test(t.replace(L, "@").replace(A, "]").replace(k, "")))return (new Function("return " + t))()
            }
            w.error("Invalid JSON: " + t)
        }, parseXML: function (n) {
            var r, i;
            if (!n || typeof n != "string")return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && w.error("Invalid XML: " + n), r
        }, noop: function () {
        }, globalEval: function (t) {
            t && w.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(O, "ms-").replace(M, _)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, n) {
            var r, i = 0, s = e.length, o = H(e);
            if (n)if (o)for (; i < s; i++) {
                r = t.apply(e[i], n);
                if (r === !1)break
            } else for (i in e) {
                r = t.apply(e[i], n);
                if (r === !1)break
            } else if (o)for (; i < s; i++) {
                r = t.call(e[i], i, e[i]);
                if (r === !1)break
            } else for (i in e) {
                r = t.call(e[i], i, e[i]);
                if (r === !1)break
            }
            return e
        }, trim: b && !b.call("﻿ ") ? function (e) {
            return e == null ? "" : b.call(e)
        } : function (e) {
            return e == null ? "" : (e + "").replace(x, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return e != null && (H(Object(e)) ? w.merge(n, typeof e == "string" ? [e] : e) : d.call(n, e)), n
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (m)return m.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)if (n in t && t[n] === e)return n
            }
            return -1
        }, merge: function (e, n) {
            var r = n.length, i = e.length, s = 0;
            if (typeof r == "number")for (; s < r; s++)e[i++] = n[s]; else while (n[s] !== t)e[i++] = n[s++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            var r, i = [], s = 0, o = e.length;
            n = !!n;
            for (; s < o; s++)r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i
        }, map: function (e, t, n) {
            var r, i = 0, s = e.length, o = H(e), u = [];
            if (o)for (; i < s; i++)r = t(e[i], i, n), r != null && (u[u.length] = r); else for (i in e)r = t(e[i], i, n), r != null && (u[u.length] = r);
            return p.apply([], u)
        }, guid: 1, proxy: function (e, n) {
            var r, i, s;
            return typeof n == "string" && (s = e[n], n = e, e = s), w.isFunction(e) ? (r = v.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(v.call(arguments)))
            }, i.guid = e.guid = e.guid || w.guid++, i) : t
        }, access: function (e, n, r, i, s, o, u) {
            var a = 0, f = e.length, l = r == null;
            if (w.type(r) === "object") {
                s = !0;
                for (a in r)w.access(e, n, a, r[a], !0, o, u)
            } else if (i !== t) {
                s = !0, w.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function (e, t, n) {
                    return l.call(w(e), n)
                }));
                if (n)for (; a < f; a++)n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)))
            }
            return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
        }, now: function () {
            return (new Date).getTime()
        }, swap: function (e, t, n, r) {
            var i, s, o = {};
            for (s in t)o[s] = e.style[s], e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t)e.style[s] = o[s];
            return i
        }
    }), w.ready.promise = function (t) {
        if (!n) {
            n = w.Deferred();
            if (o.readyState === "complete")setTimeout(w.ready); else if (o.addEventListener)o.addEventListener("DOMContentLoaded", D, !1), e.addEventListener("load", D, !1); else {
                o.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
                var r = !1;
                try {
                    r = e.frameElement == null && o.documentElement
                } catch (i) {
                }
                r && r.doScroll && function s() {
                    if (!w.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (e) {
                            return setTimeout(s, 50)
                        }
                        P(), w.ready()
                    }
                }()
            }
        }
        return n.promise(t)
    }, w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }), r = w(o), function (e, t) {
        function ot(e, t, n, i) {
            var s, o, u, a, f, l, p, m, g, w;
            (t ? t.ownerDocument || t : E) !== h && c(t), t = t || h, n = n || [];
            if (!e || typeof e != "string")return n;
            if ((a = t.nodeType) !== 1 && a !== 9)return [];
            if (d && !i) {
                if (s = Z.exec(e))if (u = s[1]) {
                    if (a === 9) {
                        o = t.getElementById(u);
                        if (!o || !o.parentNode)return n;
                        if (o.id === u)return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && y(t, o) && o.id === u)return n.push(o), n
                } else {
                    if (s[2])return H.apply(n, t.getElementsByTagName(e)), n;
                    if ((u = s[3]) && r.getElementsByClassName && t.getElementsByClassName)return H.apply(n, t.getElementsByClassName(u)), n
                }
                if (r.qsa && (!v || !v.test(e))) {
                    m = p = b, g = t, w = a === 9 && e;
                    if (a === 1 && t.nodeName.toLowerCase() !== "object") {
                        l = mt(e), (p = t.getAttribute("id")) ? m = p.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", f = l.length;
                        while (f--)l[f] = m + gt(l[f]);
                        g = $.test(e) && t.parentNode || t, w = l.join(",")
                    }
                    if (w)try {
                        return H.apply(n, g.querySelectorAll(w)), n
                    } catch (S) {
                    } finally {
                        p || t.removeAttribute("id")
                    }
                }
            }
            return Nt(e.replace(W, "$1"), t, n, i)
        }

        function ut() {
            function t(n, r) {
                return e.push(n += " ") > s.cacheLength && delete t[e.shift()], t[n] = r
            }

            var e = [];
            return t
        }

        function at(e) {
            return e[b] = !0, e
        }

        function ft(e) {
            var t = h.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function lt(e, t) {
            var n = e.split("|"), r = e.length;
            while (r--)s.attrHandle[n[r]] = t
        }

        function ct(e, t) {
            var n = t && e, r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || O) - (~e.sourceIndex || O);
            if (r)return r;
            if (n)while (n = n.nextSibling)if (n === t)return -1;
            return e ? 1 : -1
        }

        function ht(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }

        function pt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }

        function dt(e) {
            return at(function (t) {
                return t = +t, at(function (n, r) {
                    var i, s = e([], n.length, t), o = s.length;
                    while (o--)n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function vt() {
        }

        function mt(e, t) {
            var n, r, i, o, u, a, f, l = N[e + " "];
            if (l)return t ? 0 : l.slice(0);
            u = e, a = [], f = s.preFilter;
            while (u) {
                if (!n || (r = X.exec(u)))r && (u = u.slice(r[0].length) || u), a.push(i = []);
                n = !1;
                if (r = V.exec(u))n = r.shift(), i.push({value: n, type: r[0].replace(W, " ")}), u = u.slice(n.length);
                for (o in s.filter)(r = G[o].exec(u)) && (!f[o] || (r = f[o](r))) && (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), u = u.slice(n.length));
                if (!n)break
            }
            return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
        }

        function gt(e) {
            var t = 0, n = e.length, r = "";
            for (; t < n; t++)r += e[t].value;
            return r
        }

        function yt(e, t, n) {
            var r = t.dir, s = n && r === "parentNode", o = x++;
            return t.first ? function (t, n, i) {
                while (t = t[r])if (t.nodeType === 1 || s)return e(t, n, i)
            } : function (t, n, u) {
                var a, f, l, c = S + " " + o;
                if (u) {
                    while (t = t[r])if (t.nodeType === 1 || s)if (e(t, n, u))return !0
                } else while (t = t[r])if (t.nodeType === 1 || s) {
                    l = t[b] || (t[b] = {});
                    if ((f = l[r]) && f[0] === c) {
                        if ((a = f[1]) === !0 || a === i)return a === !0
                    } else {
                        f = l[r] = [c], f[1] = e(t, n, u) || i;
                        if (f[1] === !0)return !0
                    }
                }
            }
        }

        function bt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function wt(e, t, n, r, i) {
            var s, o = [], u = 0, a = e.length, f = t != null;
            for (; u < a; u++)if (s = e[u])if (!n || n(s, r, i))o.push(s), f && t.push(u);
            return o
        }

        function Et(e, t, n, r, i, s) {
            return r && !r[b] && (r = Et(r)), i && !i[b] && (i = Et(i, s)), at(function (s, o, u, a) {
                var f, l, c, h = [], p = [], d = o.length, v = s || Tt(t || "*", u.nodeType ? [u] : u, []), m = e && (s || !t) ? wt(v, h, e, u, a) : v, g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = wt(g, p), r(f, [], u, a), l = f.length;
                    while (l--)if (c = f[l])g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? j.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = wt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : H.apply(o, g)
            })
        }

        function St(e) {
            var t, n, r, i = e.length, o = s.relative[e[0].type], u = o || s.relative[" "], a = o ? 1 : 0, l = yt(function (e) {
                return e === t
            }, u, !0), c = yt(function (e) {
                return j.call(t, e) > -1
            }, u, !0), h = [function (e, n, r) {
                return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
            }];
            for (; a < i; a++)if (n = s.relative[e[a].type])h = [yt(bt(h), n)]; else {
                n = s.filter[e[a].type].apply(null, e[a].matches);
                if (n[b]) {
                    r = ++a;
                    for (; r < i; r++)if (s.relative[e[r].type])break;
                    return Et(a > 1 && bt(h), a > 1 && gt(e.slice(0, a - 1).concat({value: e[a - 2].type === " " ? "*" : ""})).replace(W, "$1"), n, a < r && St(e.slice(a, r)), r < i && St(e = e.slice(r)), r < i && gt(e))
                }
                h.push(n)
            }
            return bt(h)
        }

        function xt(e, t) {
            var n = 0, r = t.length > 0, o = e.length > 0, u = function (u, a, l, c, p) {
                var d, v, m, g = [], y = 0, b = "0", w = u && [], E = p != null, x = f, T = u || o && s.find.TAG("*", p && a.parentNode || a), N = S += x == null ? 1 : Math.random() || .1;
                E && (f = a !== h && a, i = n);
                for (; (d = T[b]) != null; b++) {
                    if (o && d) {
                        v = 0;
                        while (m = e[v++])if (m(d, a, l)) {
                            c.push(d);
                            break
                        }
                        E && (S = N, i = ++n)
                    }
                    r && ((d = !m && d) && y--, u && w.push(d))
                }
                y += b;
                if (r && b !== y) {
                    v = 0;
                    while (m = t[v++])m(w, g, a, l);
                    if (u) {
                        if (y > 0)while (b--)!w[b] && !g[b] && (g[b] = D.call(c));
                        g = wt(g)
                    }
                    H.apply(c, g), E && !u && g.length > 0 && y + t.length > 1 && ot.uniqueSort(c)
                }
                return E && (S = N, f = x), w
            };
            return r ? at(u) : u
        }

        function Tt(e, t, n) {
            var r = 0, i = t.length;
            for (; r < i; r++)ot(e, t[r], n);
            return n
        }

        function Nt(e, t, n, i) {
            var o, u, f, l, c, h = mt(e);
            if (!i && h.length === 1) {
                u = h[0] = h[0].slice(0);
                if (u.length > 2 && (f = u[0]).type === "ID" && r.getById && t.nodeType === 9 && d && s.relative[u[1].type]) {
                    t = (s.find.ID(f.matches[0].replace(rt, it), t) || [])[0];
                    if (!t)return n;
                    e = e.slice(u.shift().value.length)
                }
                o = G.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    f = u[o];
                    if (s.relative[l = f.type])break;
                    if (c = s.find[l])if (i = c(f.matches[0].replace(rt, it), $.test(u[0].type) && t.parentNode || t)) {
                        u.splice(o, 1), e = i.length && gt(u);
                        if (!e)return H.apply(n, i), n;
                        break
                    }
                }
            }
            return a(e, h)(i, t, !d, n, $.test(e)), n
        }

        var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b = "sizzle" + -(new Date), E = e.document, S = 0, x = 0, T = ut(), N = ut(), C = ut(), k = !1, L = function (e, t) {
            return e === t ? (k = !0, 0) : 0
        }, A = typeof t, O = 1 << 31, M = {}.hasOwnProperty, _ = [], D = _.pop, P = _.push, H = _.push, B = _.slice, j = _.indexOf || function (e) {
                var t = 0, n = this.length;
                for (; t < n; t++)if (this[t] === e)return t;
                return -1
            }, F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", I = "[\\x20\\t\\r\\n\\f]", q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", R = q.replace("w", "w#"), U = "\\[" + I + "*(" + q + ")" + I + "*(?:([*^$|!~]?=)" + I + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + R + ")|)|)" + I + "*\\]", z = ":(" + q + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + U.replace(3, 8) + ")*)|.*)\\)|)", W = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"), X = new RegExp("^" + I + "*," + I + "*"), V = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"), $ = new RegExp(I + "*[+~]"), J = new RegExp("=" + I + "*([^\\]'\"]*)" + I + "*\\]", "g"), K = new RegExp(z), Q = new RegExp("^" + R + "$"), G = {
            ID: new RegExp("^#(" + q + ")"),
            CLASS: new RegExp("^\\.(" + q + ")"),
            TAG: new RegExp("^(" + q.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + U),
            PSEUDO: new RegExp("^" + z),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + F + ")$", "i"),
            needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"), it = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
        };
        try {
            H.apply(_ = B.call(E.childNodes), E.childNodes), _[E.childNodes.length].nodeType
        } catch (st) {
            H = {
                apply: _.length ? function (e, t) {
                    P.apply(e, B.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        u = ot.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, r = ot.support = {}, c = ot.setDocument = function (e) {
            var t = e ? e.ownerDocument || e : E, n = t.defaultView;
            if (t === h || t.nodeType !== 9 || !t.documentElement)return h;
            h = t, p = t.documentElement, d = !u(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function () {
                c()
            }), r.attributes = ft(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), r.getElementsByTagName = ft(function (e) {
                return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ft(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", e.getElementsByClassName("i").length === 2
            }), r.getById = ft(function (e) {
                return p.appendChild(e).id = b, !t.getElementsByName || !t.getElementsByName(b).length
            }), r.getById ? (s.find.ID = function (e, t) {
                if (typeof t.getElementById !== A && d) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, s.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete s.find.ID, s.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), s.find.TAG = r.getElementsByTagName ? function (e, t) {
                if (typeof t.getElementsByTagName !== A)return t.getElementsByTagName(e)
            } : function (e, t) {
                var n, r = [], i = 0, s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++])n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            }, s.find.CLASS = r.getElementsByClassName && function (e, t) {
                    if (typeof t.getElementsByClassName !== A && d)return t.getElementsByClassName(e)
                }, m = [], v = [];
            if (r.qsa = Y.test(t.querySelectorAll))ft(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + F + ")"), e.querySelectorAll(":checked").length || v.push(":checked")
            }), ft(function (e) {
                var n = t.createElement("input");
                n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            });
            return (r.matchesSelector = Y.test(g = p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ft(function (e) {
                r.disconnectedMatch = g.call(e, "div"), g.call(e, "[s!='']:x"), m.push("!=", z)
            }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), y = Y.test(p.contains) || p.compareDocumentPosition ? function (e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            } : function (e, t) {
                if (t)while (t = t.parentNode)if (t === e)return !0;
                return !1
            }, L = p.compareDocumentPosition ? function (e, n) {
                if (e === n)return k = !0, 0;
                var i = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                if (i)return i & 1 || !r.sortDetached && n.compareDocumentPosition(e) === i ? e === t || y(E, e) ? -1 : n === t || y(E, n) ? 1 : l ? j.call(l, e) - j.call(l, n) : 0 : i & 4 ? -1 : 1;
                return e.compareDocumentPosition ? -1 : 1
            } : function (e, n) {
                var r, i = 0, s = e.parentNode, o = n.parentNode, u = [e], a = [n];
                if (e === n)return k = !0, 0;
                if (!s || !o)return e === t ? -1 : n === t ? 1 : s ? -1 : o ? 1 : l ? j.call(l, e) - j.call(l, n) : 0;
                if (s === o)return ct(e, n);
                r = e;
                while (r = r.parentNode)u.unshift(r);
                r = n;
                while (r = r.parentNode)a.unshift(r);
                while (u[i] === a[i])i++;
                return i ? ct(u[i], a[i]) : u[i] === E ? -1 : a[i] === E ? 1 : 0
            }, t
        }, ot.matches = function (e, t) {
            return ot(e, null, null, t)
        }, ot.matchesSelector = function (e, t) {
            (e.ownerDocument || e) !== h && c(e), t = t.replace(J, "='$1']");
            if (r.matchesSelector && d && (!m || !m.test(t)) && (!v || !v.test(t)))try {
                var n = g.call(e, t);
                if (n || r.disconnectedMatch || e.document && e.document.nodeType !== 11)return n
            } catch (i) {
            }
            return ot(t, h, null, [e]).length > 0
        }, ot.contains = function (e, t) {
            return (e.ownerDocument || e) !== h && c(e), y(e, t)
        }, ot.attr = function (e, n) {
            (e.ownerDocument || e) !== h && c(e);
            var i = s.attrHandle[n.toLowerCase()], o = i && M.call(s.attrHandle, n.toLowerCase()) ? i(e, n, !d) : t;
            return o === t ? r.attributes || !d ? e.getAttribute(n) : (o = e.getAttributeNode(n)) && o.specified ? o.value : null : o
        }, ot.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ot.uniqueSort = function (e) {
            var t, n = [], i = 0, s = 0;
            k = !r.detectDuplicates, l = !r.sortStable && e.slice(0), e.sort(L);
            if (k) {
                while (t = e[s++])t === e[s] && (i = n.push(s));
                while (i--)e.splice(n[i], 1)
            }
            return e
        }, o = ot.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (!i)for (; t = e[r]; r++)n += o(t); else if (i === 1 || i === 9 || i === 11) {
                if (typeof e.textContent == "string")return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling)n += o(e)
            } else if (i === 3 || i === 4)return e.nodeValue;
            return n
        }, s = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ot.error(e[0]), e
                }, PSEUDO: function (e) {
                    var n, r = !e[5] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && K.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return e === "*" ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = T[e + " "];
                    return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && T(e, function (e) {
                            return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = ot.attr(r, e);
                        return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth", o = e.slice(-4) !== "last", u = t === "of-type";
                    return r === 1 && i === 0 ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling", m = t.parentNode, g = u && t.nodeName.toLowerCase(), y = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1)return !1;
                                    d = v = e === "only" && !d && "nextSibling"
                                }
                                return !0
                            }
                            d = [o ? m.firstChild : m.lastChild];
                            if (o && y) {
                                l = m[b] || (m[b] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())if (c.nodeType === 1 && ++h && c === t) {
                                    l[e] = [S, p, h];
                                    break
                                }
                            } else if (y && (f = (t[b] || (t[b] = {}))[e]) && f[0] === S)h = f[1]; else while (c = ++p && c && c[v] || (h = p = 0) || d.pop())if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                y && ((c[b] || (c[b] = {}))[e] = [S, h]);
                                if (c === t)break
                            }
                            return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = s.pseudos[e] || s.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], s.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function (e, n) {
                        var i, s = r(e, t), o = s.length;
                        while (o--)i = j.call(e, s[o]), e[i] = !(n[i] = s[o])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: at(function (e) {
                    var t = [], n = [], r = a(e.replace(W, "$1"));
                    return r[b] ? at(function (e, t, n, i) {
                        var s, o = r(e, null, i, []), u = e.length;
                        while (u--)if (s = o[u])e[u] = !(t[u] = s)
                    }) : function (e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }), has: at(function (e) {
                    return function (t) {
                        return ot(e, t).length > 0
                    }
                }), contains: at(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    }
                }), lang: at(function (e) {
                    return Q.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) {
                        var n;
                        do if (n = d ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === p
                }, focus: function (e) {
                    return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4)return !1;
                    return !0
                }, parent: function (e) {
                    return !s.pseudos.empty(e)
                }, header: function (e) {
                    return tt.test(e.nodeName)
                }, input: function (e) {
                    return et.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                }, text: function (e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                }, first: dt(function () {
                    return [0]
                }), last: dt(function (e, t) {
                    return [t - 1]
                }), eq: dt(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: dt(function (e, t) {
                    var n = 0;
                    for (; n < t; n += 2)e.push(n);
                    return e
                }), odd: dt(function (e, t) {
                    var n = 1;
                    for (; n < t; n += 2)e.push(n);
                    return e
                }), lt: dt(function (e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; --r >= 0;)e.push(r);
                    return e
                }), gt: dt(function (e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; ++r < t;)e.push(r);
                    return e
                })
            }
        }, s.pseudos.nth = s.pseudos.eq;
        for (n in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})s.pseudos[n] = ht(n);
        for (n in{submit: !0, reset: !0})s.pseudos[n] = pt(n);
        vt.prototype = s.filters = s.pseudos, s.setFilters = new vt, a = ot.compile = function (e, t) {
            var n, r = [], i = [], s = C[e + " "];
            if (!s) {
                t || (t = mt(e)), n = t.length;
                while (n--)s = St(t[n]), s[b] ? r.push(s) : i.push(s);
                s = C(e, xt(i, r))
            }
            return s
        }, r.sortStable = b.split("").sort(L).join("") === b, r.detectDuplicates = k, c(), r.sortDetached = ft(function (e) {
            return e.compareDocumentPosition(h.createElement("div")) & 1
        }), ft(function (e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#"
        }) || lt("type|href|height|width", function (e, t, n) {
            if (!n)return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), (!r.attributes || !ft(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === ""
        })) && lt("value", function (e, t, n) {
            if (!n && e.nodeName.toLowerCase() === "input")return e.defaultValue
        }), ft(function (e) {
            return e.getAttribute("disabled") == null
        }) || lt(F, function (e, t, n) {
            var r;
            if (!n)return (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
        }), w.find = ot, w.expr = ot.selectors, w.expr[":"] = w.expr.pseudos, w.unique = ot.uniqueSort, w.text = ot.getText, w.isXMLDoc = ot.isXML, w.contains = ot.contains
    }(e);
    var B = {};
    w.Callbacks = function (e) {
        e = typeof e == "string" ? B[e] || j(e) : w.extend({}, e);
        var n, r, i, s, o, u, a = [], f = !e.once && [], l = function (t) {
            r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0;
            for (; a && o < s; o++)if (a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break
            }
            n = !1, a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable())
        }, c = {
            add: function () {
                if (a) {
                    var t = a.length;
                    (function i(t) {
                        w.each(t, function (t, n) {
                            var r = w.type(n);
                            r === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && r !== "string" && i(n)
                        })
                    })(arguments), n ? s = a.length : r && (u = t, l(r))
                }
                return this
            }, remove: function () {
                return a && w.each(arguments, function (e, t) {
                    var r;
                    while ((r = w.inArray(t, a, r)) > -1)a.splice(r, 1), n && (r <= s && s--, r <= o && o--)
                }), this
            }, has: function (e) {
                return e ? w.inArray(e, a) > -1 : !!a && !!a.length
            }, empty: function () {
                return a = [], s = 0, this
            }, disable: function () {
                return a = f = r = t, this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return f = t, r || c.disable(), this
            }, locked: function () {
                return !f
            }, fireWith: function (e, t) {
                return a && (!i || f) && (t = t || [], t = [e, t.slice ? t.slice() : t], n ? f.push(t) : l(t)), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return c
    }, w.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", w.Callbacks("once memory"), "resolved"], ["reject", "fail", w.Callbacks("once memory"), "rejected"], ["notify", "progress", w.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }, always: function () {
                    return i.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return w.Deferred(function (n) {
                        w.each(t, function (t, s) {
                            var o = s[0], u = w.isFunction(e[t]) && e[t];
                            i[s[1]](function () {
                                var e = u && u.apply(this, arguments);
                                e && w.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return e != null ? w.extend(e, r) : r
                }
            }, i = {};
            return r.pipe = r.then, w.each(t, function (e, s) {
                var o = s[2], u = s[3];
                r[s[1]] = o.add, u && o.add(function () {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function () {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t = 0, n = v.call(arguments), r = n.length, i = r !== 1 || e && w.isFunction(e.promise) ? r : 0, s = i === 1 ? e : w.Deferred(), o = function (e, t, n) {
                return function (r) {
                    t[e] = this, n[e] = arguments.length > 1 ? v.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                }
            }, u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++)n[t] && w.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), w.support = function (t) {
        var n, r, s, u, a, f, l, c, h, p = o.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], r = p.getElementsByTagName("a")[0];
        if (!r || !r.style || !n.length)return t;
        u = o.createElement("select"), f = u.appendChild(o.createElement("option")), s = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = p.className !== "t", t.leadingWhitespace = p.firstChild.nodeType === 3, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !!p.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = r.getAttribute("href") === "/a", t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!s.value, t.optSelected = f.selected, t.enctype = !!o.createElement("form").enctype, t.html5Clone = o.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, u.disabled = !0, t.optDisabled = !f.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }
        s = o.createElement("input"), s.setAttribute("value", ""), t.input = s.getAttribute("value") === "", s.value = "t", s.setAttribute("type", "radio"), t.radioValue = s.value === "t", s.setAttribute("checked", "t"), s.setAttribute("name", "t"), a = o.createDocumentFragment(), a.appendChild(s), t.appendChecked = s.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (h in{
            submit: !0,
            change: !0,
            focusin: !0
        })p.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = p.style.backgroundClip === "content-box";
        for (h in w(t))break;
        return t.ownLast = h !== "0", w(function () {
            var n, r, s, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a = o.getElementsByTagName("body")[0];
            if (!a)return;
            n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = p.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", w.swap(a, a.style.zoom != null ? {zoom: 1} : {}, function () {
                t.boxSizing = p.offsetWidth === 4
            }), e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(p, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(p, null) || {width: "4px"}).width === "4px", r = p.appendChild(o.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = p.offsetWidth !== 3, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = s = r = null
        }), n = u = a = f = r = s = null, t
    }({});
    var F = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, I = /([A-Z])/g;
    w.extend({
        cache: {},
        noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return e = e.nodeType ? w.cache[e[w.expando]] : e[w.expando], !!e && !z(e)
        },
        data: function (e, t, n) {
            return q(e, t, n)
        },
        removeData: function (e, t) {
            return R(e, t)
        },
        _data: function (e, t, n) {
            return q(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return R(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9)return !1;
            var t = e.nodeName && w.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), w.fn.extend({
        data: function (e, n) {
            var r, i, s = null, o = 0, u = this[0];
            if (e === t) {
                if (this.length) {
                    s = w.data(u);
                    if (u.nodeType === 1 && !w._data(u, "parsedAttrs")) {
                        r = u.attributes;
                        for (; o < r.length; o++)i = r[o].name, i.indexOf("data-") === 0 && (i = w.camelCase(i.slice(5)), U(u, i, s[i]));
                        w._data(u, "parsedAttrs", !0)
                    }
                }
                return s
            }
            return typeof e == "object" ? this.each(function () {
                w.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                w.data(this, e, n)
            }) : u ? U(u, e, w.data(u, e)) : null
        }, removeData: function (e) {
            return this.each(function () {
                w.removeData(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var r;
            if (e)return t = (t || "fx") + "queue", r = w._data(e, t), n && (!r || w.isArray(n) ? r = w._data(e, t, w.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t), r = n.length, i = n.shift(), s = w._queueHooks(e, t), o = function () {
                w.dequeue(e, t)
            };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return w._data(e, n) || w._data(e, n, {
                    empty: w.Callbacks("once memory").add(function () {
                        w._removeData(e, t + "queue"), w._removeData(e, n)
                    })
                })
        }
    }), w.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? w.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = w.queue(this, e, n);
                w._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && w.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = w.fx ? w.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            var r, i = 1, s = w.Deferred(), o = this, u = this.length, a = function () {
                --i || s.resolveWith(o, [o])
            };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--)r = w._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var W, X, V = /[\t\r\n\f]/g, $ = /\r/g, J = /^(?:input|select|textarea|button|object)$/i, K = /^(?:a|area)$/i, Q = /^(?:checked|selected)$/i, G = w.support.getSetAttribute, Y = w.support.input;
    w.fn.extend({
        attr: function (e, t) {
            return w.access(this, w.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return w.access(this, w.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = w.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        }, addClass: function (e) {
            var t, n, r, i, s, o = 0, u = this.length, a = typeof e == "string" && e;
            if (w.isFunction(e))return this.each(function (t) {
                w(this).addClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(S) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(V, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++])r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = w.trim(r)
                    }
                }
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, s, o = 0, u = this.length, a = arguments.length === 0 || typeof e == "string" && e;
            if (w.isFunction(e))return this.each(function (t) {
                w(this).removeClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(S) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(V, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++])while (r.indexOf(" " + i + " ") >= 0)r = r.replace(" " + i + " ", " ");
                        n.className = e ? w.trim(r) : ""
                    }
                }
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : w.isFunction(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var t, r = 0, s = w(this), o = e.match(S) || [];
                    while (t = o[r++])s.hasClass(t) ? s.removeClass(t) : s.addClass(t)
                } else if (n === i || n === "boolean")this.className && w._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : w._data(this, "__className__") || ""
            })
        }, hasClass: function (e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; n < r; n++)if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(V, " ").indexOf(t) >= 0)return !0;
            return !1
        }, val: function (e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s)return r = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()], r && "get"in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, typeof n == "string" ? n.replace($, "") : n == null ? "" : n);
                return
            }
            return i = w.isFunction(e), this.each(function (n) {
                var s;
                if (this.nodeType !== 1)return;
                i ? s = e.call(this, n, w(this).val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : w.isArray(s) && (s = w.map(s, function (e) {
                    return e == null ? "" : e + ""
                })), r = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()];
                if (!r || !("set"in r) || r.set(this, s, "value") === t)this.value = s
            })
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return t != null ? t : e.text
                }
            }, select: {
                get: function (e) {
                    var t, n, r = e.options, i = e.selectedIndex, s = e.type === "select-one" || i < 0, o = s ? null : [], u = s ? i + 1 : r.length, a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (w.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !w.nodeName(n.parentNode, "optgroup"))) {
                            t = w(n).val();
                            if (s)return t;
                            o.push(t)
                        }
                    }
                    return o
                }, set: function (e, t) {
                    var n, r, i = e.options, s = w.makeArray(t), o = i.length;
                    while (o--) {
                        r = i[o];
                        if (r.selected = w.inArray(w(r).val(), s) >= 0)n = !0
                    }
                    return n || (e.selectedIndex = -1), s
                }
            }
        }, attr: function (e, n, r) {
            var s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2)return;
            if (typeof e.getAttribute === i)return w.prop(e, n, r);
            if (u !== 1 || !w.isXMLDoc(e))n = n.toLowerCase(), s = w.attrHooks[n] || (w.expr.match.bool.test(n) ? X : W);
            if (r === t)return s && "get"in s && (o = s.get(e, n)) !== null ? o : (o = w.find.attr(e, n), o == null ? t : o);
            if (r !== null)return s && "set"in s && (o = s.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r);
            w.removeAttr(e, n)
        }, removeAttr: function (e, t) {
            var n, r, i = 0, s = t && t.match(S);
            if (s && e.nodeType === 1)while (n = s[i++])r = w.propFix[n] || n, w.expr.match.bool.test(n) ? Y && G || !Q.test(n) ? e[r] = !1 : e[w.camelCase("default-" + n)] = e[r] = !1 : w.attr(e, n, ""), e.removeAttribute(G ? n : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!w.support.radioValue && t === "radio" && w.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2)return;
            return o = u !== 1 || !w.isXMLDoc(e), o && (n = w.propFix[n] || n, s = w.propHooks[n]), r !== t ? s && "set"in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get"in s && (i = s.get(e, n)) !== null ? i : e[n]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : J.test(e.nodeName) || K.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function (e, t, n) {
            return t === !1 ? w.removeAttr(e, n) : Y && G || !Q.test(n) ? e.setAttribute(!G && w.propFix[n] || n, n) : e[w.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = w.expr.attrHandle[n] || w.find.attr;
        w.expr.attrHandle[n] = Y && G || !Q.test(n) ? function (e, n, i) {
            var s = w.expr.attrHandle[n], o = i ? t : (w.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return w.expr.attrHandle[n] = s, o
        } : function (e, n, r) {
            return r ? t : e[w.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    });
    if (!Y || !G)w.attrHooks.value = {
        set: function (e, t, n) {
            if (!w.nodeName(e, "input"))return W && W.set(e, t, n);
            e.defaultValue = t
        }
    };
    G || (W = {
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", r === "value" || n === e.getAttribute(r) ? n : t
        }
    }, w.expr.attrHandle.id = w.expr.attrHandle.name = w.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && i.value !== "" ? i.value : null
    }, w.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        }, set: W.set
    }, w.attrHooks.contenteditable = {
        set: function (e, t, n) {
            W.set(e, t === "" ? !1 : t, n)
        }
    }, w.each(["width", "height"], function (e, t) {
        w.attrHooks[t] = {
            set: function (e, n) {
                if (n === "")return e.setAttribute(t, "auto"), n
            }
        }
    })), w.support.hrefNormalized || w.each(["href", "src"], function (e, t) {
        w.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), w.support.style || (w.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), w.support.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    }), w.support.enctype || (w.propFix.enctype = "encoding"), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (w.isArray(t))return e.checked = w.inArray(w(e).val(), t) >= 0
            }
        }, w.support.checkOn || (w.valHooks[this].get = function (e) {
            return e.getAttribute("value") === null ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;
    w.event = {
        global: {},
        add: function (e, n, r, s, o) {
            var u, a, f, l, c, h, p, d, v, m, g, y = w._data(e);
            if (!y)return;
            r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = w.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function (e) {
                return typeof w === i || !!e && w.event.triggered === e.type ? t : w.event.dispatch.apply(h.elem, arguments)
            }, h.elem = e), n = (n || "").match(S) || [""], f = n.length;
            while (f--) {
                u = rt.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort();
                if (!v)continue;
                c = w.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = w.event.special[v] || {}, p = w.extend({
                    type: v,
                    origType: g,
                    data: s,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && w.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l);
                if (!(d = a[v])) {
                    d = a[v] = [], d.delegateCount = 0;
                    if (!c.setup || c.setup.call(e, s, m, h) === !1)e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h)
                }
                c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), w.event.global[v] = !0
            }
            e = null
        },
        remove: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = w.hasData(e) && w._data(e);
            if (!m || !(l = m.events))return;
            t = (t || "").match(S) || [""], f = t.length;
            while (f--) {
                u = rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                if (!p) {
                    for (p in l)w.event.remove(e, p + t[f], n, r, !0);
                    continue
                }
                c = w.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                while (s--)o = h[s], (i || v === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                a && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && w.removeEvent(e, p, m.handle), delete l[p])
            }
            w.isEmptyObject(l) && (delete m.handle, w._removeData(e, "events"))
        },
        trigger: function (n, r, i, s) {
            var u, a, f, l, c, h, p, d = [i || o], v = y.call(n, "type") ? n.type : n, m = y.call(n, "namespace") ? n.namespace.split(".") : [];
            f = h = i = i || o;
            if (i.nodeType === 3 || i.nodeType === 8)return;
            if (nt.test(v + w.event.triggered))return;
            v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = v.indexOf(":") < 0 && "on" + v, n = n[w.expando] ? n : new w.Event(v, typeof n == "object" && n), n.isTrigger = s ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = r == null ? [n] : w.makeArray(r, [n]), c = w.event.special[v] || {};
            if (!s && c.trigger && c.trigger.apply(i, r) === !1)return;
            if (!s && !c.noBubble && !w.isWindow(i)) {
                l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode);
                for (; f; f = f.parentNode)d.push(f), h = f;
                h === (i.ownerDocument || o) && d.push(h.defaultView || h.parentWindow || e)
            }
            p = 0;
            while ((f = d[p++]) && !n.isPropagationStopped())n.type = p > 1 ? l : c.bindType || v, u = (w._data(f, "events") || {})[n.type] && w._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && w.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
            n.type = v;
            if (!s && !n.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), r) === !1) && w.acceptData(i) && a && i[v] && !w.isWindow(i)) {
                h = i[a], h && (i[a] = null), w.event.triggered = v;
                try {
                    i[v]()
                } catch (g) {
                }
                w.event.triggered = t, h && (i[a] = h)
            }
            return n.result
        },
        dispatch: function (e) {
            e = w.event.fix(e);
            var n, r, i, s, o, u = [], a = v.call(arguments), f = (w._data(this, "events") || {})[e.type] || [], l = w.event.special[e.type] || {};
            a[0] = e, e.delegateTarget = this;
            if (l.preDispatch && l.preDispatch.call(this, e) === !1)return;
            u = w.event.handlers.call(this, e, f), n = 0;
            while ((s = u[n++]) && !e.isPropagationStopped()) {
                e.currentTarget = s.elem, o = 0;
                while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())if (!e.namespace_re || e.namespace_re.test(i.namespace))e.handleObj = i, e.data = i.data, r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())
            }
            return l.postDispatch && l.postDispatch.call(this, e), e.result
        },
        handlers: function (e, n) {
            var r, i, s, o, u = [], a = n.delegateCount, f = e.target;
            if (a && f.nodeType && (!e.button || e.type !== "click"))for (; f != this; f = f.parentNode || this)if (f.nodeType === 1 && (f.disabled !== !0 || e.type !== "click")) {
                s = [];
                for (o = 0; o < a; o++)i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? w(r, this).index(f) >= 0 : w.find(r, this, null, [f]).length), s[r] && s.push(i);
                s.length && u.push({elem: f, handlers: s})
            }
            return a < n.length && u.push({elem: this, handlers: n.slice(a)}), u
        },
        fix: function (e) {
            if (e[w.expando])return e;
            var t, n, r, i = e.type, s = e, u = this.fixHooks[i];
            u || (this.fixHooks[i] = u = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new w.Event(s), t = r.length;
            while (t--)n = r[t], e[n] = s[n];
            return e.target || (e.target = s.srcElement || o), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, u.filter ? u.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, s, u = n.button, a = n.fromElement;
                return e.pageX == null && n.clientX != null && (i = e.target.ownerDocument || o, s = i.documentElement, r = i.body, e.pageX = n.clientX + (s && s.scrollLeft || r && r.scrollLeft || 0) - (s && s.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || r && r.scrollTop || 0) - (s && s.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== ot() && this.focus)try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === ot() && this.blur)return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (w.nodeName(this, "input") && this.type === "checkbox" && this.click)return this.click(), !1
                }, _default: function (e) {
                    return w.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = w.extend(new w.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? w.event.trigger(i, null, t) : w.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, w.removeEvent = o.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event))return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : st) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || w.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = it;
            if (!e)return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = it;
            if (!e)return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, w.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        w.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, s = e.handleObj;
                if (!i || i !== r && !w.contains(r, i))e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), w.support.submitBubbles || (w.event.special.submit = {
        setup: function () {
            if (w.nodeName(this, "form"))return !1;
            w.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target, r = w.nodeName(n, "input") || w.nodeName(n, "button") ? n.form : t;
                r && !w._data(r, "submitBubbles") && (w.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), w._data(r, "submitBubbles", !0))
            })
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && w.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            if (w.nodeName(this, "form"))return !1;
            w.event.remove(this, "._submit")
        }
    }), w.support.changeBubbles || (w.event.special.change = {
        setup: function () {
            if (Z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio")w.event.add(this, "propertychange._change", function (e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), w.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), w.event.simulate("change", this, e, !0)
                });
                return !1
            }
            w.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Z.test(t.nodeName) && !w._data(t, "changeBubbles") && (w.event.add(t, "change._change", function (e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && w.event.simulate("change", this.parentNode, e, !0)
                }), w._data(t, "changeBubbles", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox")return e.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return w.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), w.support.focusinBubbles || w.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e), !0)
        };
        w.event.special[t] = {
            setup: function () {
                n++ === 0 && o.addEventListener(e, r, !0)
            }, teardown: function () {
                --n === 0 && o.removeEventListener(e, r, !0)
            }
        }
    }), w.fn.extend({
        on: function (e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (o in e)this.on(o, n, r, e[o], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1)i = st; else if (!i)return this;
            return s === 1 && (u = i, i = function (e) {
                return w().off(e), u.apply(this, arguments)
            }, i.guid = u.guid || (u.guid = w.guid++)), this.each(function () {
                w.event.add(this, e, i, r, n)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj)return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if (typeof e == "object") {
                for (s in e)this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function")r = n, n = t;
            return r === !1 && (r = st), this.each(function () {
                w.event.remove(this, e, r, n)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n)return w.event.trigger(e, t, n, !0)
        }
    });
    var ut = /^.[^:#\[\.,]*$/, at = /^(?:parents|prev(?:Until|All))/, ft = w.expr.match.needsContext, lt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    w.fn.extend({
        find: function (e) {
            var t, n = [], r = this, i = r.length;
            if (typeof e != "string")return this.pushStack(w(e).filter(function () {
                for (t = 0; t < i; t++)if (w.contains(r[t], this))return !0
            }));
            for (t = 0; t < i; t++)w.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? w.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, has: function (e) {
            var t, n = w(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++)if (w.contains(this, n[t]))return !0
            })
        }, not: function (e) {
            return this.pushStack(ht(this, e || [], !0))
        }, filter: function (e) {
            return this.pushStack(ht(this, e || [], !1))
        }, is: function (e) {
            return !!ht(this, typeof e == "string" && ft.test(e) ? w(e) : e || [], !1).length
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, s = [], o = ft.test(e) || typeof e != "string" ? w(e, t || this.context) : 0;
            for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && w.find.matchesSelector(n, e))) {
                n = s.push(n);
                break
            }
            return this.pushStack(s.length > 1 ? w.unique(s) : s)
        }, index: function (e) {
            return e ? typeof e == "string" ? w.inArray(this[0], w(e)) : w.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            var n = typeof e == "string" ? w(e, t) : w.makeArray(e && e.nodeType ? [e] : e), r = w.merge(this.get(), n);
            return this.pushStack(w.unique(r))
        }, addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        }, parents: function (e) {
            return w.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return w.dir(e, "parentNode", n)
        }, next: function (e) {
            return ct(e, "nextSibling")
        }, prev: function (e) {
            return ct(e, "previousSibling")
        }, nextAll: function (e) {
            return w.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return w.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return w.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return w.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return w.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return w.sibling(e.firstChild)
        }, contents: function (e) {
            return w.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : w.merge([], e.childNodes)
        }
    }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = w.filter(r, i)), this.length > 1 && (lt[e] || (i = w.unique(i)), at.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), w.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
                return e.nodeType === 1
            }))
        }, dir: function (e, n, r) {
            var i = [], s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !w(s).is(r)))s.nodeType === 1 && i.push(s), s = s[n];
            return i
        }, sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling)e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", vt = / jQuery\d+="(?:null|\d+)"/g, mt = new RegExp("<(?:" + dt + ")[\\s/>]", "i"), gt = /^\s+/, yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, wt = /<tbody/i, Et = /<|&#?\w+;/, St = /<(?:script|style|link)/i, xt = /^(?:checkbox|radio)$/i, Tt = /checked\s*(?:[^=]|=\s*.checked.)/i, Nt = /^$|\/(?:java|ecma)script/i, Ct = /^true\/(.*)/, kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Lt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: w.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, At = pt(o), Ot = At.appendChild(o.createElement("div"));
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, w.fn.extend({
        text: function (e) {
            return w.access(this, function (e) {
                return e === t ? w.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Mt(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Mt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            var n, r = e ? w.filter(e, this) : this, i = 0;
            for (; (n = r[i]) != null; i++)!t && n.nodeType === 1 && w.cleanData(jt(n)), n.parentNode && (t && w.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            var e, t = 0;
            for (; (e = this[t]) != null; t++) {
                e.nodeType === 1 && w.cleanData(jt(e, !1));
                while (e.firstChild)e.removeChild(e.firstChild);
                e.options && w.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        }, html: function (e) {
            return w.access(this, function (e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t)return n.nodeType === 1 ? n.innerHTML.replace(vt, "") : t;
                if (typeof e == "string" && !St.test(e) && (w.support.htmlSerialize || !mt.test(e)) && (w.support.leadingWhitespace || !gt.test(e)) && !Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(yt, "<$1></$2>");
                    try {
                        for (; r < i; r++)n = this[r] || {}, n.nodeType === 1 && (w.cleanData(jt(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (s) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = w.map(this, function (e) {
                return [e.nextSibling, e.parentNode]
            }), t = 0;
            return this.domManip(arguments, function (n) {
                var r = e[t++], i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), w(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t, n) {
            e = p.apply([], e);
            var r, i, s, o, u, a, f = 0, l = this.length, c = this, h = l - 1, d = e[0], v = w.isFunction(d);
            if (v || !(l <= 1 || typeof d != "string" || w.support.checkClone || !Tt.test(d)))return this.each(function (r) {
                var i = c.eq(r);
                v && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (l) {
                a = w.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = a.firstChild, a.childNodes.length === 1 && (a = r);
                if (r) {
                    o = w.map(jt(a, "script"), _t), s = o.length;
                    for (; f < l; f++)i = a, f !== h && (i = w.clone(i, !0, !0), s && w.merge(o, jt(i, "script"))), t.call(this[f], i, f);
                    if (s) {
                        u = o[o.length - 1].ownerDocument, w.map(o, Dt);
                        for (f = 0; f < s; f++)i = o[f], Nt.test(i.type || "") && !w._data(i, "globalEval") && w.contains(u, i) && (i.src ? w._evalUrl(i.src) : w.globalEval((i.text || i.textContent || i.innerHTML || "").replace(kt, "")))
                    }
                    a = r = null
                }
            }
            return this
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            var n, r = 0, i = [], s = w(e), o = s.length - 1;
            for (; r <= o; r++)n = r === o ? this : this.clone(!0), w(s[r])[t](n), d.apply(i, n.get());
            return this.pushStack(i)
        }
    }), w.extend({
        clone: function (e, t, n) {
            var r, i, s, o, u, a = w.contains(e.ownerDocument, e);
            w.support.html5Clone || w.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild));
            if ((!w.support.noCloneEvent || !w.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !w.isXMLDoc(e)) {
                r = jt(s), u = jt(e);
                for (o = 0; (i = u[o]) != null; ++o)r[o] && Bt(i, r[o])
            }
            if (t)if (n) {
                u = u || jt(e), r = r || jt(s);
                for (o = 0; (i = u[o]) != null; o++)Ht(i, r[o])
            } else Ht(e, s);
            return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s
        }, buildFragment: function (e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length, h = pt(t), p = [], d = 0;
            for (; d < c; d++) {
                s = e[d];
                if (s || s === 0)if (w.type(s) === "object")w.merge(p, s.nodeType ? [s] : s); else if (!Et.test(s))p.push(t.createTextNode(s)); else {
                    u = u || h.appendChild(t.createElement("div")), a = (bt.exec(s) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2], i = l[0];
                    while (i--)u = u.lastChild;
                    !w.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0]));
                    if (!w.support.tbody) {
                        s = a === "table" && !wt.test(s) ? u.firstChild : l[1] === "<table>" && !wt.test(s) ? u : 0, i = s && s.childNodes.length;
                        while (i--)w.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                    }
                    w.merge(p, u.childNodes), u.textContent = "";
                    while (u.firstChild)u.removeChild(u.firstChild);
                    u = h.lastChild
                }
            }
            u && h.removeChild(u), w.support.appendChecked || w.grep(jt(p, "input"), Ft), d = 0;
            while (s = p[d++]) {
                if (r && w.inArray(s, r) !== -1)continue;
                o = w.contains(s.ownerDocument, s), u = jt(h.appendChild(s), "script"), o && Pt(u);
                if (n) {
                    i = 0;
                    while (s = u[i++])Nt.test(s.type || "") && n.push(s)
                }
            }
            return u = null, h
        }, cleanData: function (e, t) {
            var n, r, s, o, u = 0, a = w.expando, f = w.cache, l = w.support.deleteExpando, h = w.event.special;
            for (; (n = e[u]) != null; u++)if (t || w.acceptData(n)) {
                s = n[a], o = s && f[s];
                if (o) {
                    if (o.events)for (r in o.events)h[r] ? w.event.remove(n, r) : w.removeEvent(n, r, o.handle);
                    f[s] && (delete f[s], l ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, c.push(s))
                }
            }
        }, _evalUrl: function (e) {
            return w.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }
    }), w.fn.extend({
        wrapAll: function (e) {
            if (w.isFunction(e))return this.each(function (t) {
                w(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = w(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return w.isFunction(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = w.isFunction(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                w.nodeName(this, "body") || w(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var It, qt, Rt, Ut = /alpha\([^)]*\)/i, zt = /opacity\s*=\s*([^)]*)/, Wt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Vt = /^margin/, $t = new RegExp("^(" + E + ")(.*)$", "i"), Jt = new RegExp("^(" + E + ")(?!px)[a-z%]+$", "i"), Kt = new RegExp("^([+-])=(" + E + ")", "i"), Qt = {BODY: "block"}, Gt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Yt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
    w.fn.extend({
        css: function (e, n) {
            return w.access(this, function (e, n, r) {
                var i, s, o = {}, u = 0;
                if (w.isArray(n)) {
                    s = qt(e), i = n.length;
                    for (; u < i; u++)o[n[u]] = w.css(e, n[u], !1, s);
                    return o
                }
                return r !== t ? w.style(e, n, r) : w.css(e, n)
            }, e, n, arguments.length > 1)
        }, show: function () {
            return rn(this, !0)
        }, hide: function () {
            return rn(this)
        }, toggle: function (e) {
            return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function () {
                nn(this) ? w(this).show() : w(this).hide()
            })
        }
    }), w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Rt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": w.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)return;
            var s, o, u, a = w.camelCase(n), f = e.style;
            n = w.cssProps[a] || (w.cssProps[a] = tn(f, a)), u = w.cssHooks[n] || w.cssHooks[a];
            if (r === t)return u && "get"in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(w.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r))return;
            o === "number" && !w.cssNumber[a] && (r += "px"), !w.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
            if (!u || !("set"in u) || (r = u.set(e, r, i)) !== t)try {
                f[n] = r
            } catch (l) {
            }
        },
        css: function (e, n, r, i) {
            var s, o, u, a = w.camelCase(n);
            return n = w.cssProps[a] || (w.cssProps[a] = tn(e.style, a)), u = w.cssHooks[n] || w.cssHooks[a], u && "get"in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), o === "normal" && n in Yt && (o = Yt[n]), r === "" || r ? (s = parseFloat(o), r === !0 || w.isNumeric(s) ? s || 0 : o) : o
        }
    }), e.getComputedStyle ? (qt = function (t) {
        return e.getComputedStyle(t, null)
    }, Rt = function (e, n, r) {
        var i, s, o, u = r || qt(e), a = u ? u.getPropertyValue(n) || u[n] : t, f = e.style;
        return u && (a === "" && !w.contains(e.ownerDocument, e) && (a = w.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
    }) : o.documentElement.currentStyle && (qt = function (e) {
        return e.currentStyle
    }, Rt = function (e, n, r) {
        var i, s, o, u = r || qt(e), a = u ? u[n] : t, f = e.style;
        return a == null && f && f[n] && (a = f[n]), Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), a === "" ? "auto" : a
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, r) {
                if (n)return e.offsetWidth === 0 && Xt.test(w.css(e, "display")) ? w.swap(e, Gt, function () {
                    return un(e, t, r)
                }) : un(e, t, r)
            }, set: function (e, n, r) {
                var i = r && qt(e);
                return sn(e, n, r ? on(e, t, r, w.support.boxSizing && w.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
            }
        }
    }), w.support.opacity || (w.cssHooks.opacity = {
        get: function (e, t) {
            return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = w.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "", s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if ((t >= 1 || t === "") && w.trim(s.replace(Ut, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (t === "" || r && !r.filter)return
            }
            n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i
        }
    }), w(function () {
        w.support.reliableMarginRight || (w.cssHooks.marginRight = {
            get: function (e, t) {
                if (t)return w.swap(e, {display: "inline-block"}, Rt, [e, "marginRight"])
            }
        }), !w.support.pixelPosition && w.fn.position && w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, n) {
                    if (n)return n = Rt(e, t), Jt.test(n) ? w(e).position()[t] + "px" : n
                }
            }
        })
    }), w.expr && w.expr.filters && (w.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !w.support.reliableHiddenOffsets && (e.style && e.style.display || w.css(e, "display")) === "none"
    }, w.expr.filters.visible = function (e) {
        return !w.expr.filters.hidden(e)
    }), w.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0, i = {}, s = typeof n == "string" ? n.split(" ") : [n];
                for (; r < 4; r++)i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, Vt.test(e) || (w.cssHooks[e + t].set = sn)
    });
    var ln = /%20/g, cn = /\[\]$/, hn = /\r?\n/g, pn = /^(?:submit|button|image|reset|file)$/i, dn = /^(?:input|select|textarea|keygen)/i;
    w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !xt.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return n == null ? null : w.isArray(n) ? w.map(n, function (e) {
                    return {name: t.name, value: e.replace(hn, "\r\n")}
                }) : {name: t.name, value: n.replace(hn, "\r\n")}
            }).get()
        }
    }), w.param = function (e, n) {
        var r, i = [], s = function (e, t) {
            t = w.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        n === t && (n = w.ajaxSettings && w.ajaxSettings.traditional);
        if (w.isArray(e) || e.jquery && !w.isPlainObject(e))w.each(e, function () {
            s(this.name, this.value)
        }); else for (r in e)vn(r, e[r], n, s);
        return i.join("&").replace(ln, "+")
    }, w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, gn, yn = w.now(), bn = /\?/, wn = /#.*$/, En = /([?&])_=[^&]*/, Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Tn = /^(?:GET|HEAD)$/, Nn = /^\/\//, Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, kn = w.fn.load, Ln = {}, An = {}, On = "*/".concat("*");
    try {
        gn = s.href
    } catch (Mn) {
        gn = o.createElement("a"), gn.href = "", gn = gn.href
    }
    mn = Cn.exec(gn.toLowerCase()) || [], w.fn.load = function (e, n, r) {
        if (typeof e != "string" && kn)return kn.apply(this, arguments);
        var i, s, o, u = this, a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), w.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (o = "POST"), u.length > 0 && w.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function (e) {
            s = arguments, u.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
                u.each(r, s || [e.responseText, t, e])
            }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gn,
            type: "GET",
            isLocal: xn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": On,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": w.parseJSON, "text xml": w.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Pn(Pn(e, w.ajaxSettings), t) : Pn(w.ajaxSettings, e)
        },
        ajaxPrefilter: _n(Ln),
        ajaxTransport: _n(An),
        ajax: function (e, n) {
            function N(e, n, r, i) {
                var l, g, y, E, S, T = n;
                if (b === 2)return;
                b = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || e === 304, r && (E = Hn(c, x, r)), E = Bn(c, E, x, l);
                if (l)c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (w.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (w.etag[s] = S)), e === 204 || c.type === "HEAD" ? T = "nocontent" : e === 304 ? T = "notmodified" : (T = E.state, g = E.data, y = E.error, l = !y); else {
                    y = T;
                    if (e || !T)T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : y]), v.fireWith(h, [x, T]), a && (p.trigger("ajaxComplete", [x, c]), --w.active || w.event.trigger("ajaxStop"))
            }

            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = w.ajaxSetup({}, n), h = c.context || c, p = c.context && (h.nodeType || h.jquery) ? w(h) : w.event, d = w.Deferred(), v = w.Callbacks("once memory"), m = c.statusCode || {}, g = {}, y = {}, b = 0, E = "canceled", x = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (b === 2) {
                        if (!l) {
                            l = {};
                            while (t = Sn.exec(o))l[t[1].toLowerCase()] = t[2]
                        }
                        t = l[e.toLowerCase()]
                    }
                    return t == null ? null : t
                },
                getAllResponseHeaders: function () {
                    return b === 2 ? o : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return b || (e = y[n] = y[n] || e, g[e] = t), this
                },
                overrideMimeType: function (e) {
                    return b || (c.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (b < 2)for (t in e)m[t] = [m[t], e[t]]; else x.always(e[x.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || E;
                    return f && f.abort(t), N(0, t), this
                }
            };
            d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = w.trim(c.dataType || "*").toLowerCase().match(S) || [""], c.crossDomain == null && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || (r[1] === "http:" ? "80" : "443")) === (mn[3] || (mn[1] === "http:" ? "80" : "443")))), c.data && c.processData && typeof c.data != "string" && (c.data = w.param(c.data, c.traditional)), Dn(Ln, c, n, x);
            if (b === 2)return x;
            a = c.global, a && w.active++ === 0 && w.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (w.lastModified[s] && x.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && x.setRequestHeader("If-None-Match", w.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
            for (i in c.headers)x.setRequestHeader(i, c.headers[i]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && b !== 2) {
                E = "abort";
                for (i in{success: 1, error: 1, complete: 1})x[i](c[i]);
                f = Dn(An, c, n, x);
                if (!f)N(-1, "No Transport"); else {
                    x.readyState = 1, a && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        b = 1, f.send(g, N)
                    } catch (T) {
                        if (!(b < 2))throw T;
                        N(-1, T)
                    }
                }
                return x
            }
            return x.abort()
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return w.get(e, t, n, "script")
        }
    }), w.each(["get", "post"], function (e, n) {
        w[n] = function (e, r, i, s) {
            return w.isFunction(r) && (s = s || i, i = r, r = t), w.ajax({
                url: e,
                type: n,
                dataType: s,
                data: r,
                success: i
            })
        }
    }), w.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = o.head || w("head")[0] || o.documentElement;
            return {
                send: function (t, i) {
                    n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        if (t || !n.readyState || /loaded|complete/.test(n.readyState))n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                }, abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var jn = [], Fn = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = jn.pop() || w.expando + "_" + yn++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function (n, r, i) {
        var s, o, u, a = n.jsonp !== !1 && (Fn.test(n.url) ? "url" : typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
        if (a || n.dataTypes[0] === "jsonp")return s = n.jsonpCallback = w.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
            return u || w.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", o = e[s], e[s] = function () {
            u = arguments
        }, i.always(function () {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && w.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    });
    var In, qn, Rn = 0, Un = e.ActiveXObject && function () {
            var e;
            for (e in In)In[e](t, !0)
        };
    w.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && zn() || Wn()
    } : zn, qn = w.ajaxSettings.xhr(), w.support.cors = !!qn && "withCredentials"in qn, qn = w.support.ajax = !!qn, qn && w.ajaxTransport(function (n) {
        if (!n.crossDomain || w.support.cors) {
            var r;
            return {
                send: function (i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields)for (u in n.xhrFields)a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i)a.setRequestHeader(u, i[u])
                    } catch (f) {
                    }
                    a.send(n.hasContent && n.data || null), r = function (e, i) {
                        var u, f, l, c;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = w.noop, Un && delete In[o]);
                                if (i)a.readyState !== 4 && a.abort(); else {
                                    c = {}, u = a.status, f = a.getAllResponseHeaders(), typeof a.responseText == "string" && (c.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (h) {
                                        l = ""
                                    }
                                    !u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (p) {
                            i || s(-1, p)
                        }
                        c && s(u, l, c, f)
                    }, n.async ? a.readyState === 4 ? setTimeout(r) : (o = ++Rn, Un && (In || (In = {}, w(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r()
                }, abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Vn, $n = /^(?:toggle|show|hide)$/, Jn = new RegExp("^(?:([+-])=|)(" + E + ")([a-z%]*)$", "i"), Kn = /queueHooks$/, Qn = [nr], Gn = {
        "*": [function (e, t) {
            var n = this.createTween(e, t), r = n.cur(), i = Jn.exec(t), s = i && i[3] || (w.cssNumber[e] ? "" : "px"), o = (w.cssNumber[e] || s !== "px" && +r) && Jn.exec(w.css(n.elem, e)), u = 1, a = 20;
            if (o && o[3] !== s) {
                s = s || o[3], i = i || [], o = +r || 1;
                do u = u || ".5", o /= u, w.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && u !== 1 && --a)
            }
            return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
        }]
    };
    w.Animation = w.extend(er, {
        tweener: function (e, t) {
            w.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; r < i; r++)n = e[r], Gn[n] = Gn[n] || [], Gn[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? Qn.unshift(e) : Qn.push(e)
        }
    }), w.Tween = rr, rr.prototype = {
        constructor: rr, init: function (e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (w.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = rr.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = w.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            }, set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : e.elem.style && (e.elem.style[w.cssProps[e.prop]] != null || w.cssHooks[e.prop]) ? w.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, r, i) {
            return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), w.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = w.isEmptyObject(e), s = w.speed(t, n, r), o = function () {
                var t = er(this, w.extend({}, e), s);
                (i || w._data(this, "finish")) && t.stop(!0)
            };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        }, stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, n = e != null && e + "queueHooks", s = w.timers, o = w._data(this);
                if (n)o[n] && o[n].stop && i(o[n]); else for (n in o)o[n] && o[n].stop && Kn.test(n) && i(o[n]);
                for (n = s.length; n--;)s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && w.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = w._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], s = w.timers, o = r ? r.length : 0;
                n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
                for (t = s.length; t--;)s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++)r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        w.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), w.speed = function (e, t, n) {
        var r = e && typeof e == "object" ? w.extend({}, e) : {
            complete: n || !n && t || w.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !w.isFunction(t) && t
        };
        r.duration = w.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in w.fx.speeds ? w.fx.speeds[r.duration] : w.fx.speeds._default;
        if (r.queue == null || r.queue === !0)r.queue = "fx";
        return r.old = r.complete, r.complete = function () {
            w.isFunction(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, w.timers = [], w.fx = rr.prototype.init, w.fx.tick = function () {
        var e, n = w.timers, r = 0;
        Xn = w.now();
        for (; r < n.length; r++)e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || w.fx.stop(), Xn = t
    }, w.fx.timer = function (e) {
        e() && w.timers.push(e) && w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
        Vn || (Vn = setInterval(w.fx.tick, w.fx.interval))
    }, w.fx.stop = function () {
        clearInterval(Vn), Vn = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fx.step = {}, w.expr && w.expr.filters && (w.expr.filters.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem
        }).length
    }), w.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            w.offset.setOffset(this, e, t)
        });
        var n, r, s = {top: 0, left: 0}, o = this[0], u = o && o.ownerDocument;
        if (!u)return;
        return n = u.documentElement, w.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {
            top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : s
    }, w.offset = {
        setOffset: function (e, t, n) {
            var r = w.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = w(e), s = i.offset(), o = w.css(e, "top"), u = w.css(e, "left"), a = (r === "absolute" || r === "fixed") && w.inArray("auto", [o, u]) > -1, f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), w.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using"in t ? t.using.call(e, f) : i.css(f)
        }
    }, w.fn.extend({
        position: function () {
            if (!this[0])return;
            var e, t, n = {top: 0, left: 0}, r = this[0];
            return w.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), w.nodeName(e[0], "html") || (n = e.offset()), n.top += w.css(e[0], "borderTopWidth", !0), n.left += w.css(e[0], "borderLeftWidth", !0)), {
                top: t.top - n.top - w.css(r, "marginTop", !0),
                left: t.left - n.left - w.css(r, "marginLeft", !0)
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || u;
                while (e && !w.nodeName(e, "html") && w.css(e, "position") === "static")e = e.offsetParent;
                return e || u
            })
        }
    }), w.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        w.fn[e] = function (i) {
            return w.access(this, function (e, i, s) {
                var o = sr(e);
                if (s === t)return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? w(o).scrollLeft() : s, r ? s : w(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), w.each({Height: "height", Width: "width"}, function (e, n) {
        w.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            w.fn[i] = function (i, s) {
                var o = arguments.length && (r || typeof i != "boolean"), u = r || (i === !0 || s === !0 ? "margin" : "border");
                return w.access(this, function (n, r, i) {
                    var s;
                    return w.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? w.css(n, r, u) : w.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), w.fn.size = function () {
        return this.length
    }, w.fn.andSelf = w.fn.addBack, typeof module == "object" && module && typeof module.exports == "object" ? module.exports = w : (e.jQuery = e.$ = w, typeof define == "function" && define.amd && define("jquery", [], function () {
        return w
    }))
}(window), function () {
    var e = this, t = e._, n = Array.prototype, r = Object.prototype, i = Function.prototype, s = n.push, o = n.slice, u = n.concat, a = r.toString, f = r.hasOwnProperty, l = Array.isArray, c = Object.keys, h = i.bind, p = function (e) {
        if (e instanceof p)return e;
        if (!(this instanceof p))return new p(e);
        this._wrapped = e
    };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = p), exports._ = p) : e._ = p, p.VERSION = "1.7.0";
    var d = function (e, t, n) {
        if (t === void 0)return e;
        switch (n == null ? 3 : n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, i) {
                    return e.call(t, n, r, i)
                };
            case 4:
                return function (n, r, i, s) {
                    return e.call(t, n, r, i, s)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    };
    p.iteratee = function (e, t, n) {
        return e == null ? p.identity : p.isFunction(e) ? d(e, t, n) : p.isObject(e) ? p.matches(e) : p.property(e)
    }, p.each = p.forEach = function (e, t, n) {
        if (e == null)return e;
        t = d(t, n);
        var r, i = e.length;
        if (i === +i)for (r = 0; r < i; r++)t(e[r], r, e); else {
            var s = p.keys(e);
            for (r = 0, i = s.length; r < i; r++)t(e[s[r]], s[r], e)
        }
        return e
    }, p.map = p.collect = function (e, t, n) {
        if (e == null)return [];
        t = p.iteratee(t, n);
        var r = e.length !== +e.length && p.keys(e), i = (r || e).length, s = Array(i), o;
        for (var u = 0; u < i; u++)o = r ? r[u] : u, s[u] = t(e[o], o, e);
        return s
    };
    var v = "Reduce of empty array with no initial value";
    p.reduce = p.foldl = p.inject = function (e, t, n, r) {
        e == null && (e = []), t = d(t, r, 4);
        var i = e.length !== +e.length && p.keys(e), s = (i || e).length, o = 0, u;
        if (arguments.length < 3) {
            if (!s)throw new TypeError(v);
            n = e[i ? i[o++] : o++]
        }
        for (; o < s; o++)u = i ? i[o] : o, n = t(n, e[u], u, e);
        return n
    }, p.reduceRight = p.foldr = function (e, t, n, r) {
        e == null && (e = []), t = d(t, r, 4);
        var i = e.length !== +e.length && p.keys(e), s = (i || e).length, o;
        if (arguments.length < 3) {
            if (!s)throw new TypeError(v);
            n = e[i ? i[--s] : --s]
        }
        while (s--)o = i ? i[s] : s, n = t(n, e[o], o, e);
        return n
    }, p.find = p.detect = function (e, t, n) {
        var r;
        return t = p.iteratee(t, n), p.some(e, function (e, n, i) {
            if (t(e, n, i))return r = e, !0
        }), r
    }, p.filter = p.select = function (e, t, n) {
        var r = [];
        return e == null ? r : (t = p.iteratee(t, n), p.each(e, function (e, n, i) {
            t(e, n, i) && r.push(e)
        }), r)
    }, p.reject = function (e, t, n) {
        return p.filter(e, p.negate(p.iteratee(t)), n)
    }, p.every = p.all = function (e, t, n) {
        if (e == null)return !0;
        t = p.iteratee(t, n);
        var r = e.length !== +e.length && p.keys(e), i = (r || e).length, s, o;
        for (s = 0; s < i; s++) {
            o = r ? r[s] : s;
            if (!t(e[o], o, e))return !1
        }
        return !0
    }, p.some = p.any = function (e, t, n) {
        if (e == null)return !1;
        t = p.iteratee(t, n);
        var r = e.length !== +e.length && p.keys(e), i = (r || e).length, s, o;
        for (s = 0; s < i; s++) {
            o = r ? r[s] : s;
            if (t(e[o], o, e))return !0
        }
        return !1
    }, p.contains = p.include = function (e, t) {
        return e == null ? !1 : (e.length !== +e.length && (e = p.values(e)), p.indexOf(e, t) >= 0)
    }, p.invoke = function (e, t) {
        var n = o.call(arguments, 2), r = p.isFunction(t);
        return p.map(e, function (e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, p.pluck = function (e, t) {
        return p.map(e, p.property(t))
    }, p.where = function (e, t) {
        return p.filter(e, p.matches(t))
    }, p.findWhere = function (e, t) {
        return p.find(e, p.matches(t))
    }, p.max = function (e, t, n) {
        var r = -Infinity, i = -Infinity, s, o;
        if (t == null && e != null) {
            e = e.length === +e.length ? e : p.values(e);
            for (var u = 0, a = e.length; u < a; u++)s = e[u], s > r && (r = s)
        } else t = p.iteratee(t, n), p.each(e, function (e, n, s) {
            o = t(e, n, s);
            if (o > i || o === -Infinity && r === -Infinity)r = e, i = o
        });
        return r
    }, p.min = function (e, t, n) {
        var r = Infinity, i = Infinity, s, o;
        if (t == null && e != null) {
            e = e.length === +e.length ? e : p.values(e);
            for (var u = 0, a = e.length; u < a; u++)s = e[u], s < r && (r = s)
        } else t = p.iteratee(t, n), p.each(e, function (e, n, s) {
            o = t(e, n, s);
            if (o < i || o === Infinity && r === Infinity)r = e, i = o
        });
        return r
    }, p.shuffle = function (e) {
        var t = e && e.length === +e.length ? e : p.values(e), n = t.length, r = Array(n);
        for (var i = 0, s; i < n; i++)s = p.random(0, i), s !== i && (r[i] = r[s]), r[s] = t[i];
        return r
    }, p.sample = function (e, t, n) {
        return t == null || n ? (e.length !== +e.length && (e = p.values(e)), e[p.random(e.length - 1)]) : p.shuffle(e).slice(0, Math.max(0, t))
    }, p.sortBy = function (e, t, n) {
        return t = p.iteratee(t, n), p.pluck(p.map(e, function (e, n, r) {
            return {value: e, index: n, criteria: t(e, n, r)}
        }).sort(function (e, t) {
            var n = e.criteria, r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0)return 1;
                if (n < r || r === void 0)return -1
            }
            return e.index - t.index
        }), "value")
    };
    var m = function (e) {
        return function (t, n, r) {
            var i = {};
            return n = p.iteratee(n, r), p.each(t, function (r, s) {
                var o = n(r, s, t);
                e(i, r, o)
            }), i
        }
    };
    p.groupBy = m(function (e, t, n) {
        p.has(e, n) ? e[n].push(t) : e[n] = [t]
    }), p.indexBy = m(function (e, t, n) {
        e[n] = t
    }), p.countBy = m(function (e, t, n) {
        p.has(e, n) ? e[n]++ : e[n] = 1
    }), p.sortedIndex = function (e, t, n, r) {
        n = p.iteratee(n, r, 1);
        var i = n(t), s = 0, o = e.length;
        while (s < o) {
            var u = s + o >>> 1;
            n(e[u]) < i ? s = u + 1 : o = u
        }
        return s
    }, p.toArray = function (e) {
        return e ? p.isArray(e) ? o.call(e) : e.length === +e.length ? p.map(e, p.identity) : p.values(e) : []
    }, p.size = function (e) {
        return e == null ? 0 : e.length === +e.length ? e.length : p.keys(e).length
    }, p.partition = function (e, t, n) {
        t = p.iteratee(t, n);
        var r = [], i = [];
        return p.each(e, function (e, n, s) {
            (t(e, n, s) ? r : i).push(e)
        }), [r, i]
    }, p.first = p.head = p.take = function (e, t, n) {
        return e == null ? void 0 : t == null || n ? e[0] : t < 0 ? [] : o.call(e, 0, t)
    }, p.initial = function (e, t, n) {
        return o.call(e, 0, Math.max(0, e.length - (t == null || n ? 1 : t)))
    }, p.last = function (e, t, n) {
        return e == null ? void 0 : t == null || n ? e[e.length - 1] : o.call(e, Math.max(e.length - t, 0))
    }, p.rest = p.tail = p.drop = function (e, t, n) {
        return o.call(e, t == null || n ? 1 : t)
    }, p.compact = function (e) {
        return p.filter(e, p.identity)
    };
    var g = function (e, t, n, r) {
        if (t && p.every(e, p.isArray))return u.apply(r, e);
        for (var i = 0, o = e.length; i < o; i++) {
            var a = e[i];
            !p.isArray(a) && !p.isArguments(a) ? n || r.push(a) : t ? s.apply(r, a) : g(a, t, n, r)
        }
        return r
    };
    p.flatten = function (e, t) {
        return g(e, t, !1, [])
    }, p.without = function (e) {
        return p.difference(e, o.call(arguments, 1))
    }, p.uniq = p.unique = function (e, t, n, r) {
        if (e == null)return [];
        p.isBoolean(t) || (r = n, n = t, t = !1), n != null && (n = p.iteratee(n, r));
        var i = [], s = [];
        for (var o = 0, u = e.length; o < u; o++) {
            var a = e[o];
            if (t)(!o || s !== a) && i.push(a), s = a; else if (n) {
                var f = n(a, o, e);
                p.indexOf(s, f) < 0 && (s.push(f), i.push(a))
            } else p.indexOf(i, a) < 0 && i.push(a)
        }
        return i
    }, p.union = function () {
        return p.uniq(g(arguments, !0, !0, []))
    }, p.intersection = function (e) {
        if (e == null)return [];
        var t = [], n = arguments.length;
        for (var r = 0, i = e.length; r < i; r++) {
            var s = e[r];
            if (p.contains(t, s))continue;
            for (var o = 1; o < n; o++)if (!p.contains(arguments[o], s))break;
            o === n && t.push(s)
        }
        return t
    }, p.difference = function (e) {
        var t = g(o.call(arguments, 1), !0, !0, []);
        return p.filter(e, function (e) {
            return !p.contains(t, e)
        })
    }, p.zip = function (e) {
        if (e == null)return [];
        var t = p.max(arguments, "length").length, n = Array(t);
        for (var r = 0; r < t; r++)n[r] = p.pluck(arguments, r);
        return n
    }, p.object = function (e, t) {
        if (e == null)return {};
        var n = {};
        for (var r = 0, i = e.length; r < i; r++)t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, p.indexOf = function (e, t, n) {
        if (e == null)return -1;
        var r = 0, i = e.length;
        if (n) {
            if (typeof n != "number")return r = p.sortedIndex(e, t), e[r] === t ? r : -1;
            r = n < 0 ? Math.max(0, i + n) : n
        }
        for (; r < i; r++)if (e[r] === t)return r;
        return -1
    }, p.lastIndexOf = function (e, t, n) {
        if (e == null)return -1;
        var r = e.length;
        typeof n == "number" && (r = n < 0 ? r + n + 1 : Math.min(r, n + 1));
        while (--r >= 0)if (e[r] === t)return r;
        return -1
    }, p.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = n || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r);
        for (var s = 0; s < r; s++, e += n)i[s] = e;
        return i
    };
    var y = function () {
    };
    p.bind = function (e, t) {
        var n, r;
        if (h && e.bind === h)return h.apply(e, o.call(arguments, 1));
        if (!p.isFunction(e))throw new TypeError("Bind must be called on a function");
        return n = o.call(arguments, 2), r = function () {
            if (this instanceof r) {
                y.prototype = e.prototype;
                var i = new y;
                y.prototype = null;
                var s = e.apply(i, n.concat(o.call(arguments)));
                return p.isObject(s) ? s : i
            }
            return e.apply(t, n.concat(o.call(arguments)))
        }, r
    }, p.partial = function (e) {
        var t = o.call(arguments, 1);
        return function () {
            var n = 0, r = t.slice();
            for (var i = 0, s = r.length; i < s; i++)r[i] === p && (r[i] = arguments[n++]);
            while (n < arguments.length)r.push(arguments[n++]);
            return e.apply(this, r)
        }
    }, p.bindAll = function (e) {
        var t, n = arguments.length, r;
        if (n <= 1)throw new Error("bindAll must be passed function names");
        for (t = 1; t < n; t++)r = arguments[t], e[r] = p.bind(e[r], e);
        return e
    }, p.memoize = function (e, t) {
        var n = function (r) {
            var i = n.cache, s = t ? t.apply(this, arguments) : r;
            return p.has(i, s) || (i[s] = e.apply(this, arguments)), i[s]
        };
        return n.cache = {}, n
    }, p.delay = function (e, t) {
        var n = o.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, p.defer = function (e) {
        return p.delay.apply(p, [e, 1].concat(o.call(arguments, 1)))
    }, p.throttle = function (e, t, n) {
        var r, i, s, o = null, u = 0;
        n || (n = {});
        var a = function () {
            u = n.leading === !1 ? 0 : p.now(), o = null, s = e.apply(r, i), o || (r = i = null)
        };
        return function () {
            var f = p.now();
            !u && n.leading === !1 && (u = f);
            var l = t - (f - u);
            return r = this, i = arguments, l <= 0 || l > t ? (clearTimeout(o), o = null, u = f, s = e.apply(r, i), o || (r = i = null)) : !o && n.trailing !== !1 && (o = setTimeout(a, l)), s
        }
    }, p.debounce = function (e, t, n) {
        var r, i, s, o, u, a = function () {
            var f = p.now() - o;
            f < t && f > 0 ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i), r || (s = i = null)))
        };
        return function () {
            s = this, i = arguments, o = p.now();
            var f = n && !r;
            return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i), s = i = null), u
        }
    }, p.wrap = function (e, t) {
        return p.partial(t, e)
    }, p.negate = function (e) {
        return function () {
            return !e.apply(this, arguments)
        }
    }, p.compose = function () {
        var e = arguments, t = e.length - 1;
        return function () {
            var n = t, r = e[t].apply(this, arguments);
            while (n--)r = e[n].call(this, r);
            return r
        }
    }, p.after = function (e, t) {
        return function () {
            if (--e < 1)return t.apply(this, arguments)
        }
    }, p.before = function (e, t) {
        var n;
        return function () {
            return --e > 0 ? n = t.apply(this, arguments) : t = null, n
        }
    }, p.once = p.partial(p.before, 2), p.keys = function (e) {
        if (!p.isObject(e))return [];
        if (c)return c(e);
        var t = [];
        for (var n in e)p.has(e, n) && t.push(n);
        return t
    }, p.values = function (e) {
        var t = p.keys(e), n = t.length, r = Array(n);
        for (var i = 0; i < n; i++)r[i] = e[t[i]];
        return r
    }, p.pairs = function (e) {
        var t = p.keys(e), n = t.length, r = Array(n);
        for (var i = 0; i < n; i++)r[i] = [t[i], e[t[i]]];
        return r
    }, p.invert = function (e) {
        var t = {}, n = p.keys(e);
        for (var r = 0, i = n.length; r < i; r++)t[e[n[r]]] = n[r];
        return t
    }, p.functions = p.methods = function (e) {
        var t = [];
        for (var n in e)p.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, p.extend = function (e) {
        if (!p.isObject(e))return e;
        var t, n;
        for (var r = 1, i = arguments.length; r < i; r++) {
            t = arguments[r];
            for (n in t)f.call(t, n) && (e[n] = t[n])
        }
        return e
    }, p.pick = function (e, t, n) {
        var r = {}, i;
        if (e == null)return r;
        if (p.isFunction(t)) {
            t = d(t, n);
            for (i in e) {
                var s = e[i];
                t(s, i, e) && (r[i] = s)
            }
        } else {
            var a = u.apply([], o.call(arguments, 1));
            e = new Object(e);
            for (var f = 0, l = a.length; f < l; f++)i = a[f], i in e && (r[i] = e[i])
        }
        return r
    }, p.omit = function (e, t, n) {
        if (p.isFunction(t))t = p.negate(t); else {
            var r = p.map(u.apply([], o.call(arguments, 1)), String);
            t = function (e, t) {
                return !p.contains(r, t)
            }
        }
        return p.pick(e, t, n)
    }, p.defaults = function (e) {
        if (!p.isObject(e))return e;
        for (var t = 1, n = arguments.length; t < n; t++) {
            var r = arguments[t];
            for (var i in r)e[i] === void 0 && (e[i] = r[i])
        }
        return e
    }, p.clone = function (e) {
        return p.isObject(e) ? p.isArray(e) ? e.slice() : p.extend({}, e) : e
    }, p.tap = function (e, t) {
        return t(e), e
    };
    var b = function (e, t, n, r) {
        if (e === t)return e !== 0 || 1 / e === 1 / t;
        if (e == null || t == null)return e === t;
        e instanceof p && (e = e._wrapped), t instanceof p && (t = t._wrapped);
        var i = a.call(e);
        if (i !== a.call(t))return !1;
        switch (i) {
            case"[object RegExp]":
            case"[object String]":
                return "" + e == "" + t;
            case"[object Number]":
                if (+e !== +e)return +t !== +t;
                return +e === 0 ? 1 / +e === 1 / t : +e === +t;
            case"[object Date]":
            case"[object Boolean]":
                return +e === +t
        }
        if (typeof e != "object" || typeof t != "object")return !1;
        var s = n.length;
        while (s--)if (n[s] === e)return r[s] === t;
        var o = e.constructor, u = t.constructor;
        if (o !== u && "constructor"in e && "constructor"in t && !(p.isFunction(o) && o instanceof o && p.isFunction(u) && u instanceof u))return !1;
        n.push(e), r.push(t);
        var f, l;
        if (i === "[object Array]") {
            f = e.length, l = f === t.length;
            if (l)while (f--)if (!(l = b(e[f], t[f], n, r)))break
        } else {
            var c = p.keys(e), h;
            f = c.length, l = p.keys(t).length === f;
            if (l)while (f--) {
                h = c[f];
                if (!(l = p.has(t, h) && b(e[h], t[h], n, r)))break
            }
        }
        return n.pop(), r.pop(), l
    };
    p.isEqual = function (e, t) {
        return b(e, t, [], [])
    }, p.isEmpty = function (e) {
        if (e == null)return !0;
        if (p.isArray(e) || p.isString(e) || p.isArguments(e))return e.length === 0;
        for (var t in e)if (p.has(e, t))return !1;
        return !0
    }, p.isElement = function (e) {
        return !!e && e.nodeType === 1
    }, p.isArray = l || function (e) {
            return a.call(e) === "[object Array]"
        }, p.isObject = function (e) {
        var t = typeof e;
        return t === "function" || t === "object" && !!e
    }, p.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
        p["is" + e] = function (t) {
            return a.call(t) === "[object " + e + "]"
        }
    }), p.isArguments(arguments) || (p.isArguments = function (e) {
        return p.has(e, "callee")
    }), typeof /./ != "function" && (p.isFunction = function (e) {
        return typeof e == "function" || !1
    }), p.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, p.isNaN = function (e) {
        return p.isNumber(e) && e !== +e
    }, p.isBoolean = function (e) {
        return e === !0 || e === !1 || a.call(e) === "[object Boolean]"
    }, p.isNull = function (e) {
        return e === null
    }, p.isUndefined = function (e) {
        return e === void 0
    }, p.has = function (e, t) {
        return e != null && f.call(e, t)
    }, p.noConflict = function () {
        return e._ = t, this
    }, p.identity = function (e) {
        return e
    }, p.constant = function (e) {
        return function () {
            return e
        }
    }, p.noop = function () {
    }, p.property = function (e) {
        return function (t) {
            return t[e]
        }
    }, p.matches = function (e) {
        var t = p.pairs(e), n = t.length;
        return function (e) {
            if (e == null)return !n;
            e = new Object(e);
            for (var r = 0; r < n; r++) {
                var i = t[r], s = i[0];
                if (i[1] !== e[s] || !(s in e))return !1
            }
            return !0
        }
    }, p.times = function (e, t, n) {
        var r = Array(Math.max(0, e));
        t = d(t, n, 1);
        for (var i = 0; i < e; i++)r[i] = t(i);
        return r
    }, p.random = function (e, t) {
        return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }, p.now = Date.now || function () {
            return (new Date).getTime()
        };
    var w = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, E = p.invert(w), S = function (e) {
        var t = function (t) {
            return e[t]
        }, n = "(?:" + p.keys(e).join("|") + ")", r = RegExp(n), i = RegExp(n, "g");
        return function (e) {
            return e = e == null ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
        }
    };
    p.escape = S(w), p.unescape = S(E), p.result = function (e, t) {
        if (e == null)return void 0;
        var n = e[t];
        return p.isFunction(n) ? e[t]() : n
    };
    var x = 0;
    p.uniqueId = function (e) {
        var t = ++x + "";
        return e ? e + t : t
    }, p.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var T = /(.)^/, N = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, C = /\\|'|\r|\n|\u2028|\u2029/g, k = function (e) {
        return "\\" + N[e]
    };
    p.template = function (e, t, n) {
        !t && n && (t = n), t = p.defaults({}, t, p.templateSettings);
        var r = RegExp([(t.escape || T).source, (t.interpolate || T).source, (t.evaluate || T).source].join("|") + "|$", "g"), i = 0, s = "__p+='";
        e.replace(r, function (t, n, r, o, u) {
            return s += e.slice(i, u).replace(C, k), i = u + t.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), t
        }), s += "';\n", t.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            var o = new Function(t.variable || "obj", "_", s)
        } catch (u) {
            throw u.source = s, u
        }
        var a = function (e) {
            return o.call(this, e, p)
        }, f = t.variable || "obj";
        return a.source = "function(" + f + "){\n" + s + "}", a
    }, p.chain = function (e) {
        var t = p(e);
        return t._chain = !0, t
    };
    var L = function (e) {
        return this._chain ? p(e).chain() : e
    };
    p.mixin = function (e) {
        p.each(p.functions(e), function (t) {
            var n = p[t] = e[t];
            p.prototype[t] = function () {
                var e = [this._wrapped];
                return s.apply(e, arguments), L.call(this, n.apply(p, e))
            }
        })
    }, p.mixin(p), p.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = n[e];
        p.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), (e === "shift" || e === "splice") && n.length === 0 && delete n[0], L.call(this, n)
        }
    }), p.each(["concat", "join", "slice"], function (e) {
        var t = n[e];
        p.prototype[e] = function () {
            return L.call(this, t.apply(this._wrapped, arguments))
        }
    }), p.prototype.value = function () {
        return this._wrapped
    }, typeof define == "function" && define.amd && define("underscore", [], function () {
        return p
    })
}.call(this), function (e, t) {
    if (typeof define == "function" && define.amd)define("backbone", ["underscore", "jquery", "exports"], function (n, r, i) {
        e.Backbone = t(e, i, n, r)
    }); else if (typeof exports != "undefined") {
        var n = require("underscore"), r;
        try {
            r = require("jquery")
        } catch (i) {
        }
        t(e, exports, n, r)
    } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
}(this, function (e, t, n, r) {
    var i = e.Backbone, s = [], o = s.push, u = s.slice, a = s.splice;
    t.VERSION = "1.1.0", t.$ = r, t.noConflict = function () {
        return e.Backbone = i, this
    }, t.emulateHTTP = !1, t.emulateJSON = !1;
    var f = t.Events = {
        on: function (e, t, n) {
            if (!c(this, "on", e, [t, n]) || !t)return this;
            this._events || (this._events = {});
            var r = this._events[e] || (this._events[e] = []);
            return r.push({callback: t, context: n, ctx: n || this}), this
        }, once: function (e, t, r) {
            if (!c(this, "once", e, [t, r]) || !t)return this;
            var i = this, s = n.once(function () {
                i.off(e, s), t.apply(this, arguments)
            });
            return s._callback = t, this.on(e, s, r)
        }, off: function (e, t, r) {
            var i, s, o, u, a, f, l, h;
            if (!this._events || !c(this, "off", e, [t, r]))return this;
            if (!e && !t && !r)return this._events = void 0, this;
            u = e ? [e] : n.keys(this._events);
            for (a = 0, f = u.length; a < f; a++) {
                e = u[a];
                if (o = this._events[e]) {
                    this._events[e] = i = [];
                    if (t || r)for (l = 0, h = o.length; l < h; l++)s = o[l], (t && t !== s.callback && t !== s.callback._callback || r && r !== s.context) && i.push(s);
                    i.length || delete this._events[e]
                }
            }
            return this
        }, trigger: function (e) {
            if (!this._events)return this;
            var t = u.call(arguments, 1);
            if (!c(this, "trigger", e, t))return this;
            var n = this._events[e], r = this._events.all;
            return n && h(n, t), r && h(r, arguments), this
        }, stopListening: function (e, t, r) {
            var i = this._listeningTo;
            if (!i)return this;
            var s = !t && !r;
            !r && typeof t == "object" && (r = this), e && ((i = {})[e._listenId] = e);
            for (var o in i)e = i[o], e.off(t, r, this), (s || n.isEmpty(e._events)) && delete this._listeningTo[o];
            return this
        }
    }, l = /\s+/, c = function (e, t, n, r) {
        if (!n)return !0;
        if (typeof n == "object") {
            for (var i in n)e[t].apply(e, [i, n[i]].concat(r));
            return !1
        }
        if (l.test(n)) {
            var s = n.split(l);
            for (var o = 0, u = s.length; o < u; o++)e[t].apply(e, [s[o]].concat(r));
            return !1
        }
        return !0
    }, h = function (e, t) {
        var n, r = -1, i = e.length, s = t[0], o = t[1], u = t[2];
        switch (t.length) {
            case 0:
                while (++r < i)(n = e[r]).callback.call(n.ctx);
                return;
            case 1:
                while (++r < i)(n = e[r]).callback.call(n.ctx, s);
                return;
            case 2:
                while (++r < i)(n = e[r]).callback.call(n.ctx, s, o);
                return;
            case 3:
                while (++r < i)(n = e[r]).callback.call(n.ctx, s, o, u);
                return;
            default:
                while (++r < i)(n = e[r]).callback.apply(n.ctx, t)
        }
    }, p = {listenTo: "on", listenToOnce: "once"};
    n.each(p, function (e, t) {
        f[t] = function (t, r, i) {
            var s = this._listeningTo || (this._listeningTo = {}), o = t._listenId || (t._listenId = n.uniqueId("l"));
            return s[o] = t, !i && typeof r == "object" && (i = this), t[e](r, i, this), this
        }
    }), f.bind = f.on, f.unbind = f.off, n.extend(t, f);
    var d = t.Model = function (e, t) {
        var r = e || {};
        t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (r = this.parse(r, t) || {}), r = n.defaults({}, r, n.result(this, "defaults")), this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
    };
    n.extend(d.prototype, f, {
        changed: null, validationError: null, idAttribute: "id", initialize: function () {
        }, toJSON: function (e) {
            return n.clone(this.attributes)
        }, sync: function () {
            return t.sync.apply(this, arguments)
        }, get: function (e) {
            return this.attributes[e]
        }, escape: function (e) {
            return n.escape(this.get(e))
        }, has: function (e) {
            return this.get(e) != null
        }, set: function (e, t, r) {
            var i, s, o, u, a, f, l, c;
            if (e == null)return this;
            typeof e == "object" ? (s = e, r = t) : (s = {})[e] = t, r || (r = {});
            if (!this._validate(s, r))return !1;
            o = r.unset, a = r.silent, u = [], f = this._changing, this._changing = !0, f || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), c = this.attributes, l = this._previousAttributes, this.idAttribute in s && (this.id = s[this.idAttribute]);
            for (i in s)t = s[i], n.isEqual(c[i], t) || u.push(i), n.isEqual(l[i], t) ? delete this.changed[i] : this.changed[i] = t, o ? delete c[i] : c[i] = t;
            if (!a) {
                u.length && (this._pending = r);
                for (var h = 0, p = u.length; h < p; h++)this.trigger("change:" + u[h], this, c[u[h]], r)
            }
            if (f)return this;
            if (!a)while (this._pending)r = this._pending, this._pending = !1, this.trigger("change", this, r);
            return this._pending = !1, this._changing = !1, this
        }, unset: function (e, t) {
            return this.set(e, void 0, n.extend({}, t, {unset: !0}))
        }, clear: function (e) {
            var t = {};
            for (var r in this.attributes)t[r] = void 0;
            return this.set(t, n.extend({}, e, {unset: !0}))
        }, hasChanged: function (e) {
            return e == null ? !n.isEmpty(this.changed) : n.has(this.changed, e)
        }, changedAttributes: function (e) {
            if (!e)return this.hasChanged() ? n.clone(this.changed) : !1;
            var t, r = !1, i = this._changing ? this._previousAttributes : this.attributes;
            for (var s in e) {
                if (n.isEqual(i[s], t = e[s]))continue;
                (r || (r = {}))[s] = t
            }
            return r
        }, previous: function (e) {
            return e == null || !this._previousAttributes ? null : this._previousAttributes[e]
        }, previousAttributes: function () {
            return n.clone(this._previousAttributes)
        }, fetch: function (e) {
            e = e ? n.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = this, r = e.success;
            return e.success = function (n) {
                if (!t.set(t.parse(n, e), e))return !1;
                r && r(t, n, e), t.trigger("sync", t, n, e)
            }, I(this, e), this.sync("read", this, e)
        }, save: function (e, t, r) {
            var i, s, o, u = this.attributes;
            e == null || typeof e == "object" ? (i = e, r = t) : (i = {})[e] = t, r = n.extend({validate: !0}, r);
            if (i && !r.wait) {
                if (!this.set(i, r))return !1
            } else if (!this._validate(i, r))return !1;
            i && r.wait && (this.attributes = n.extend({}, u, i)), r.parse === void 0 && (r.parse = !0);
            var a = this, f = r.success;
            return r.success = function (e) {
                a.attributes = u;
                var t = a.parse(e, r);
                r.wait && (t = n.extend(i || {}, t));
                if (n.isObject(t) && !a.set(t, r))return !1;
                f && f(a, e, r), a.trigger("sync", a, e, r)
            }, I(this, r), s = this.isNew() ? "create" : r.patch ? "patch" : "update", s === "patch" && (r.attrs = i), o = this.sync(s, this, r), i && r.wait && (this.attributes = u), o
        }, destroy: function (e) {
            e = e ? n.clone(e) : {};
            var t = this, r = e.success, i = function () {
                t.trigger("destroy", t, t.collection, e)
            };
            e.success = function (n) {
                (e.wait || t.isNew()) && i(), r && r(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
            };
            if (this.isNew())return e.success(), !1;
            I(this, e);
            var s = this.sync("delete", this, e);
            return e.wait || i(), s
        }, url: function () {
            var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || F();
            return this.isNew() ? e : e + (e.charAt(e.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id)
        }, parse: function (e, t) {
            return e
        }, clone: function () {
            return new this.constructor(this.attributes)
        }, isNew: function () {
            return !this.has(this.idAttribute)
        }, isValid: function (e) {
            return this._validate({}, n.extend(e || {}, {validate: !0}))
        }, _validate: function (e, t) {
            if (!t.validate || !this.validate)return !0;
            e = n.extend({}, this.attributes, e);
            var r = this.validationError = this.validate(e, t) || null;
            return r ? (this.trigger("invalid", this, r, n.extend(t, {validationError: r})), !1) : !0
        }
    });
    var v = ["keys", "values", "pairs", "invert", "pick", "omit"];
    n.each(v, function (e) {
        d.prototype[e] = function () {
            var t = u.call(arguments);
            return t.unshift(this.attributes), n[e].apply(n, t)
        }
    });
    var m = t.Collection = function (e, t) {
        t || (t = {}), t.model && (this.model = t.model), t.comparator !== void 0 && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({silent: !0}, t))
    }, g = {add: !0, remove: !0, merge: !0}, y = {add: !0, remove: !1};
    n.extend(m.prototype, f, {
        model: d, initialize: function () {
        }, toJSON: function (e) {
            return this.map(function (t) {
                return t.toJSON(e)
            })
        }, sync: function () {
            return t.sync.apply(this, arguments)
        }, add: function (e, t) {
            return this.set(e, n.extend({merge: !1}, t, y))
        }, remove: function (e, t) {
            var r = !n.isArray(e);
            e = r ? [e] : n.clone(e), t || (t = {});
            var i, s, o, u;
            for (i = 0, s = e.length; i < s; i++) {
                u = e[i] = this.get(e[i]);
                if (!u)continue;
                o = this.indexOf(u), this.models.splice(o, 1), this.length--, t.silent || (t.index = o, u.trigger("remove", u, this, t)), this._removeReference(u, t)
            }
            return r ? e[0] : e
        }, set: function (e, t) {
            t = n.defaults({}, t, g), t.parse && (e = this.parse(e, t));
            var r = !n.isArray(e);
            e = r ? e ? [e] : [] : n.clone(e);
            var i, s, o, u, a, f, l, c = t.at, h = this.model, p = this.comparator && c == null && t.sort !== !1, v = n.isString(this.comparator) ? this.comparator : null, m = [], y = [], b = {}, w = t.add, E = t.merge, S = t.remove, x = !p && w && S ? [] : !1;
            for (i = 0, s = e.length; i < s; i++) {
                a = e[i] || {}, a instanceof d ? o = u = a : o = a[h.prototype.idAttribute || "id"];
                if (f = this.get(o))S && (b[f.cid] = !0), E && (a = a === u ? u.attributes : a, t.parse && (a = f.parse(a, t)), f.set(a, t), p && !l && f.hasChanged(v) && (l = !0)), e[i] = f; else if (w) {
                    u = e[i] = this._prepareModel(a, t);
                    if (!u)continue;
                    m.push(u), this._addReference(u, t)
                }
                x && x.push(f || u)
            }
            if (S) {
                for (i = 0, s = this.length; i < s; ++i)b[(u = this.models[i]).cid] || y.push(u);
                y.length && this.remove(y, t)
            }
            if (m.length || x && x.length) {
                p && (l = !0), this.length += m.length;
                if (c != null)for (i = 0, s = m.length; i < s; i++)this.models.splice(c + i, 0, m[i]); else {
                    x && (this.models.length = 0);
                    var T = x || m;
                    for (i = 0, s = T.length; i < s; i++)this.models.push(T[i])
                }
            }
            l && this.sort({silent: !0});
            if (!t.silent) {
                for (i = 0, s = m.length; i < s; i++)(u = m[i]).trigger("add", u, this, t);
                (l || x && x.length) && this.trigger("sort", this, t)
            }
            return r ? e[0] : e
        }, reset: function (e, t) {
            t || (t = {});
            for (var r = 0, i = this.models.length; r < i; r++)this._removeReference(this.models[r], t);
            return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({silent: !0}, t)), t.silent || this.trigger("reset", this, t), e
        }, push: function (e, t) {
            return this.add(e, n.extend({at: this.length}, t))
        }, pop: function (e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t
        }, unshift: function (e, t) {
            return this.add(e, n.extend({at: 0}, t))
        }, shift: function (e) {
            var t = this.at(0);
            return this.remove(t, e), t
        }, slice: function () {
            return u.apply(this.models, arguments)
        }, get: function (e) {
            return e == null ? void 0 : this._byId[e] || this._byId[e.id] || this._byId[e.cid]
        }, at: function (e) {
            return this.models[e]
        }, where: function (e, t) {
            return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function (t) {
                for (var n in e)if (e[n] !== t.get(n))return !1;
                return !0
            })
        }, findWhere: function (e) {
            return this.where(e, !0)
        }, sort: function (e) {
            if (!this.comparator)throw new Error("Cannot sort a set without a comparator");
            return e || (e = {}), n.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
        }, pluck: function (e) {
            return n.invoke(this.models, "get", e)
        }, fetch: function (e) {
            e = e ? n.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = e.success, r = this;
            return e.success = function (n) {
                var i = e.reset ? "reset" : "set";
                r[i](n, e), t && t(r, n, e), r.trigger("sync", r, n, e)
            }, I(this, e), this.sync("read", this, e)
        }, create: function (e, t) {
            t = t ? n.clone(t) : {};
            if (!(e = this._prepareModel(e, t)))return !1;
            t.wait || this.add(e, t);
            var r = this, i = t.success;
            return t.success = function (e, n) {
                t.wait && r.add(e, t), i && i(e, n, t)
            }, e.save(null, t), e
        }, parse: function (e, t) {
            return e
        }, clone: function () {
            return new this.constructor(this.models)
        }, _reset: function () {
            this.length = 0, this.models = [], this._byId = {}
        }, _prepareModel: function (e, t) {
            if (e instanceof d)return e;
            t = t ? n.clone(t) : {}, t.collection = this;
            var r = new this.model(e, t);
            return r.validationError ? (this.trigger("invalid", this, r.validationError, t), !1) : r
        }, _addReference: function (e, t) {
            this._byId[e.cid] = e, e.id != null && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
        }, _removeReference: function (e, t) {
            delete this._byId[e.id], delete this._byId[e.cid], this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
        }, _onModelEvent: function (e, t, n, r) {
            if ((e === "add" || e === "remove") && n !== this)return;
            e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments)
        }
    });
    var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
    n.each(b, function (e) {
        m.prototype[e] = function () {
            var t = u.call(arguments);
            return t.unshift(this.models), n[e].apply(n, t)
        }
    });
    var w = ["groupBy", "countBy", "sortBy", "indexBy"];
    n.each(w, function (e) {
        m.prototype[e] = function (t, r) {
            var i = n.isFunction(t) ? t : function (e) {
                return e.get(t)
            };
            return n[e](this.models, i, r)
        }
    });
    var E = t.View = function (e) {
        this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, x)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, S = /^(\S+)\s*(.*)$/, x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    n.extend(E.prototype, f, {
        tagName: "div", $: function (e) {
            return this.$el.find(e)
        }, initialize: function () {
        }, render: function () {
            return this
        }, remove: function () {
            return this.$el.remove(), this.stopListening(), this
        }, setElement: function (e, n) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
        }, delegateEvents: function (e) {
            if (!e && !(e = n.result(this, "events")))return this;
            this.undelegateEvents();
            for (var t in e) {
                var r = e[t];
                n.isFunction(r) || (r = this[e[t]]);
                if (!r)continue;
                var i = t.match(S), s = i[1], o = i[2];
                r = n.bind(r, this), s += ".delegateEvents" + this.cid, o === "" ? this.$el.on(s, r) : this.$el.on(s, o, r)
            }
            return this
        }, undelegateEvents: function () {
            return this.$el.off(".delegateEvents" + this.cid), this
        }, _ensureElement: function () {
            if (!this.el) {
                var e = n.extend({}, n.result(this, "attributes"));
                this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className"));
                var r = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                this.setElement(r, !1)
            } else this.setElement(n.result(this, "el"), !1)
        }
    }), t.sync = function (e, r, i) {
        var s = N[e];
        n.defaults(i || (i = {}), {emulateHTTP: t.emulateHTTP, emulateJSON: t.emulateJSON});
        var o = {type: s, dataType: "json"};
        i.url || (o.url = n.result(r, "url") || F()), i.data == null && r && (e === "create" || e === "update" || e === "patch") && (o.contentType = "application/json", o.data = JSON.stringify(i.attrs || r.toJSON(i))), i.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {model: o.data} : {});
        if (i.emulateHTTP && (s === "PUT" || s === "DELETE" || s === "PATCH")) {
            o.type = "POST", i.emulateJSON && (o.data._method = s);
            var u = i.beforeSend;
            i.beforeSend = function (e) {
                e.setRequestHeader("X-HTTP-Method-Override", s);
                if (u)return u.apply(this, arguments)
            }
        }
        o.type !== "GET" && !i.emulateJSON && (o.processData = !1), o.type === "PATCH" && T && (o.xhr = function () {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var a = i.xhr = t.ajax(n.extend(o, i));
        return r.trigger("request", r, a, i), a
    };
    var T = typeof window != "undefined" && !!window.ActiveXObject && (!window.XMLHttpRequest || !(new XMLHttpRequest).dispatchEvent), N = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    t.ajax = function () {
        return t.$.ajax.apply(t.$, arguments)
    };
    var C = t.Router = function (e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, k = /\((.*?)\)/g, L = /(\(\?)?:\w+/g, A = /\*\w+/g, O = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    n.extend(C.prototype, f, {
        initialize: function () {
        }, route: function (e, r, i) {
            n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(r) && (i = r, r = ""), i || (i = this[r]);
            var s = this;
            return t.history.route(e, function (n) {
                var o = s._extractParameters(e, n);
                i && i.apply(s, o), s.trigger.apply(s, ["route:" + r].concat(o)), s.trigger("route", r, o), t.history.trigger("route", s, r, o)
            }), this
        }, navigate: function (e, n) {
            return t.history.navigate(e, n), this
        }, _bindRoutes: function () {
            if (!this.routes)return;
            this.routes = n.result(this, "routes");
            var e, t = n.keys(this.routes);
            while ((e = t.pop()) != null)this.route(e, this.routes[e])
        }, _routeToRegExp: function (e) {
            return e = e.replace(O, "\\$&").replace(k, "(?:$1)?").replace(L, function (e, t) {
                return t ? e : "([^/]+)"
            }).replace(A, "(.*?)"), new RegExp("^" + e + "$")
        }, _extractParameters: function (e, t) {
            var r = e.exec(t).slice(1);
            return n.map(r, function (e) {
                return e ? decodeURIComponent(e) : null
            })
        }
    });
    var M = t.History = function () {
        this.handlers = [], n.bindAll(this, "checkUrl"), typeof window != "undefined" && (this.location = window.location, this.history = window.history)
    }, _ = /^[#\/]|\s+$/g, D = /^\/+|\/+$/g, P = /msie [\w.]+/, H = /\/$/, B = /[?#].*$/;
    M.started = !1, n.extend(M.prototype, f, {
        interval: 50, getHash: function (e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        }, getFragment: function (e, t) {
            if (e == null)if (this._hasPushState || !this._wantsHashChange || t) {
                e = this.location.pathname;
                var n = this.root.replace(H, "");
                e.indexOf(n) || (e = e.slice(n.length))
            } else e = this.getHash();
            return e.replace(_, "")
        }, start: function (e) {
            if (M.started)throw new Error("Backbone.history has already been started");
            M.started = !0, this.options = n.extend({root: "/"}, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var r = this.getFragment(), i = document.documentMode, s = P.exec(navigator.userAgent.toLowerCase()) && (!i || i <= 7);
            this.root = ("/" + this.root + "/").replace(D, "/"), s && this._wantsHashChange && (this.iframe = t.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(r)), this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window && !s ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = r;
            var o = this.location, u = o.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !u)return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                this._hasPushState && u && o.hash && (this.fragment = this.getHash().replace(_, ""), this.history.replaceState({}, document.title, this.root + this.fragment + o.search))
            }
            if (!this.options.silent)return this.loadUrl()
        }, stop: function () {
            t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), M.started = !1
        }, route: function (e, t) {
            this.handlers.unshift({route: e, callback: t})
        }, checkUrl: function (e) {
            var t = this.getFragment();
            t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
            if (t === this.fragment)return !1;
            this.iframe && this.navigate(t), this.loadUrl()
        }, loadUrl: function (e) {
            return e = this.fragment = this.getFragment(e), n.any(this.handlers, function (t) {
                if (t.route.test(e))return t.callback(e), !0
            })
        }, navigate: function (e, t) {
            if (!M.started)return !1;
            if (!t || t === !0)t = {trigger: !!t};
            var n = this.root + (e = this.getFragment(e || ""));
            e = e.replace(B, "");
            if (this.fragment === e)return;
            this.fragment = e, e === "" && n !== "/" && (n = n.slice(0, -1));
            if (this._hasPushState)this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n); else {
                if (!this._wantsHashChange)return this.location.assign(n);
                this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
            }
            if (t.trigger)return this.loadUrl(e)
        }, _updateHash: function (e, t, n) {
            if (n) {
                var r = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(r + "#" + t)
            } else e.hash = "#" + t
        }
    }), t.history = new M;
    var j = function (e, t) {
        var r = this, i;
        e && n.has(e, "constructor") ? i = e.constructor : i = function () {
            return r.apply(this, arguments)
        }, n.extend(i, r, t);
        var s = function () {
            this.constructor = i
        };
        return s.prototype = r.prototype, i.prototype = new s, e && n.extend(i.prototype, e), i.__super__ = r.prototype, i
    };
    d.extend = m.extend = C.extend = E.extend = M.extend = j;
    var F = function () {
        throw new Error('A "url" property or function must be specified')
    }, I = function (e, t) {
        var n = t.error;
        t.error = function (r) {
            n && n(e, r, t), e.trigger("error", e, r, t)
        }
    };
    return t
}), define("view/common/base_view", ["jquery", "underscore", "backbone"], function (e, t, n) {
    return n.View.extend({
        initialize: function () {
        }, show: function () {
        }, render: function () {
            this.$el.show()
        }, hide: function () {
            this.onHideComplete()
        }, onHideComplete: function () {
            this.trigger("hideComplete")
        }, onResize: function (e) {
        }, destroy: function () {
            this.$el.hide(), this.stopListening(), this.off()
        }
    })
}), define("data/drop", [], function () {
    return [{x: 80.797, y: 55.794}, {x: 80.307, y: 54.927}, {x: 79.792, y: 54.077}, {x: 79.251, y: 53.24}, {
        x: 78.679,
        y: 52.404
    }, {x: 78.094, y: 51.591}, {x: 77.5, y: 50.801}, {x: 76.883, y: 50.011}, {x: 76.253, y: 49.232}, {
        x: 75.612,
        y: 48.465
    }, {x: 74.963, y: 47.708}, {x: 74.306, y: 46.961}, {x: 73.635, y: 46.214}, {x: 72.96, y: 45.477}, {
        x: 72.272,
        y: 44.739
    }, {x: 71.583, y: 44.011}, {x: 70.896, y: 43.293}, {x: 70.199, y: 42.573}, {x: 69.506, y: 41.863}, {
        x: 68.806,
        y: 41.152
    }, {x: 68.1, y: 40.438}, {x: 67.389, y: 39.722}, {x: 66.686, y: 39.016}, {x: 65.98, y: 38.308}, {
        x: 65.271,
        y: 37.597
    }, {x: 64.573, y: 36.895}, {x: 63.863, y: 36.179}, {x: 63.165, y: 35.471}, {x: 62.468, y: 34.761}, {
        x: 61.762,
        y: 34.036
    }, {x: 61.071, y: 33.32}, {x: 60.383, y: 32.6}, {x: 59.689, y: 31.865}, {x: 59.011, y: 31.138}, {
        x: 58.34,
        y: 30.408
    }, {x: 57.665, y: 29.661}, {x: 56.998, y: 28.911}, {x: 56.341, y: 28.156}, {x: 55.693, y: 27.397}, {
        x: 55.056,
        y: 26.633
    }, {x: 54.422, y: 25.852}, {x: 53.8, y: 25.067}, {x: 53.192, y: 24.276}, {x: 52.599, y: 23.479}, {
        x: 52.012,
        y: 22.665
    }, {x: 51.444, y: 21.845}, {x: 50.884, y: 21.006}, {x: 50.353, y: 20.174}, {x: 49.826, y: 19.309}, {
        x: 49.33,
        y: 18.45
    }, {x: 48.849, y: 17.572}, {x: 48.386, y: 16.672}, {x: 47.956, y: 15.78}, {x: 47.547, y: 14.865}, {
        x: 47.167,
        y: 13.943
    }, {x: 46.811, y: 12.999}, {x: 46.492, y: 12.061}, {x: 46.202, y: 11.1}, {x: 45.945, y: 10.13}, {
        x: 45.727,
        y: 9.166
    }, {x: 45.542, y: 8.178}, {x: 45.394, y: 7.181}, {x: 45.287, y: 6.19}, {x: 45.219, y: 5.189}, {
        x: 45.2,
        y: 4.191
    }, {x: 45.2, y: 4.209}, {x: 45.186, y: 5.206}, {x: 45.116, y: 6.208}, {x: 45.007, y: 7.201}, {
        x: 44.861,
        y: 8.185
    }, {x: 44.679, y: 9.159}, {x: 44.458, y: 10.139}, {x: 44.202, y: 11.109}, {x: 43.916, y: 12.057}, {
        x: 43.594,
        y: 13.01
    }, {x: 43.239, y: 13.954}, {x: 42.861, y: 14.876}, {x: 42.453, y: 15.791}, {x: 42.025, y: 16.683}, {
        x: 41.565,
        y: 17.582
    }, {x: 41.086, y: 18.46}, {x: 40.592, y: 19.318}, {x: 40.068, y: 20.182}, {x: 39.54, y: 21.013}, {
        x: 38.984,
        y: 21.852
    }, {x: 38.409, y: 22.684}, {x: 37.835, y: 23.484}, {x: 37.235, y: 24.291}, {x: 36.621, y: 25.093}, {
        x: 36.002,
        y: 25.877
    }, {x: 35.38, y: 26.644}, {x: 34.736, y: 27.418}, {x: 34.092, y: 28.175}, {x: 33.426, y: 28.94}, {
        x: 32.774,
        y: 29.676
    }, {x: 32.102, y: 30.42}, {x: 31.423, y: 31.16}, {x: 30.737, y: 31.896}, {x: 30.057, y: 32.616}, {
        x: 29.361,
        y: 33.345
    }, {x: 28.672, y: 34.058}, {x: 27.969, y: 34.781}, {x: 27.275, y: 35.488}, {x: 26.568, y: 36.203}, {
        x: 25.861,
        y: 36.916
    }, {x: 25.154, y: 37.626}, {x: 24.448, y: 38.334}, {x: 23.745, y: 39.039}, {x: 23.044, y: 39.742}, {
        x: 22.336,
        y: 40.453
    }, {x: 21.632, y: 41.163}, {x: 20.923, y: 41.882}, {x: 20.232, y: 42.588}, {x: 19.527, y: 43.315}, {
        x: 18.842,
        y: 44.029
    }, {x: 18.155, y: 44.753}, {x: 17.469, y: 45.486}, {x: 16.786, y: 46.23}, {x: 16.116, y: 46.973}, {
        x: 15.461,
        y: 47.715
    }, {x: 14.804, y: 48.478}, {x: 14.164, y: 49.241}, {x: 13.535, y: 50.015}, {x: 12.919, y: 50.8}, {
        x: 12.318,
        y: 51.596
    }, {x: 11.734, y: 52.404}, {x: 11.163, y: 53.235}, {x: 10.621, y: 54.066}, {x: 10.099, y: 54.921}, {
        x: 9.606,
        y: 55.789
    }, {x: 9.1, y: 56.66}, {x: 8.62, y: 57.532}, {x: 8.159, y: 58.417}, {x: 7.718, y: 59.313}, {
        x: 7.298,
        y: 60.221
    }, {x: 6.899, y: 61.139}, {x: 6.521, y: 62.069}, {x: 6.166, y: 63.009}, {x: 5.835, y: 63.95}, {
        x: 5.527,
        y: 64.9
    }, {x: 5.242, y: 65.86}, {x: 4.979, y: 66.829}, {x: 4.742, y: 67.797}, {x: 4.529, y: 68.773}, {
        x: 4.339,
        y: 69.757
    }, {x: 4.172, y: 70.749}, {x: 4.033, y: 71.727}, {x: 3.917, y: 72.724}, {x: 3.825, y: 73.727}, {
        x: 3.759,
        y: 74.726
    }, {x: 3.718, y: 75.708}, {x: 3.7, y: 76.72}, {x: 3.708, y: 77.72}, {x: 3.739, y: 78.719}, {
        x: 3.794,
        y: 79.711
    }, {x: 3.873, y: 80.714}, {x: 3.976, y: 81.709}, {x: 4.103, y: 82.697}, {x: 4.255, y: 83.694}, {
        x: 4.428,
        y: 84.667
    }, {x: 4.627, y: 85.648}, {x: 4.852, y: 86.636}, {x: 5.097, y: 87.599}, {x: 5.364, y: 88.553}, {
        x: 5.658,
        y: 89.513
    }, {x: 5.974, y: 90.462}, {x: 6.313, y: 91.401}, {x: 6.673, y: 92.33}, {x: 7.062, y: 93.262}, {
        x: 7.472,
        y: 94.182
    }, {x: 7.897, y: 95.076}, {x: 8.349, y: 95.972}, {x: 8.815, y: 96.842}, {x: 9.309, y: 97.712}, {
        x: 9.823,
        y: 98.57
    }, {x: 10.365, y: 99.426}, {x: 10.919, y: 100.256}, {x: 11.492, y: 101.071}, {x: 12.084, y: 101.872}, {
        x: 12.704,
        y: 102.67
    }, {x: 13.334, y: 103.44}, {x: 13.981, y: 104.195}, {x: 14.656, y: 104.945}, {x: 15.338, y: 105.668}, {
        x: 16.048,
        y: 106.384
    }, {x: 16.764, y: 107.073}, {x: 17.497, y: 107.745}, {x: 18.257, y: 108.409}, {x: 19.021, y: 109.045}, {
        x: 19.813,
        y: 109.672
    }, {x: 20.607, y: 110.271}, {x: 21.417, y: 110.851}, {x: 22.24, y: 111.412}, {x: 23.078, y: 111.954}, {
        x: 23.929,
        y: 112.476
    }, {x: 24.807, y: 112.985}, {x: 25.67, y: 113.459}, {x: 26.56, y: 113.919}, {x: 27.463, y: 114.359}, {
        x: 28.377,
        y: 114.777
    }, {x: 29.303, y: 115.173}, {x: 30.226, y: 115.542}, {x: 31.159, y: 115.889}, {x: 32.102, y: 116.214}, {
        x: 33.056,
        y: 116.517
    }, {x: 34.019, y: 116.797}, {x: 34.992, y: 117.054}, {x: 35.958, y: 117.285}, {x: 36.933, y: 117.492}, {
        x: 37.916,
        y: 117.677
    }, {x: 38.906, y: 117.838}, {x: 39.905, y: 117.976}, {x: 40.894, y: 118.088}, {x: 41.89, y: 118.177}, {
        x: 42.876,
        y: 118.241
    }, {x: 43.885, y: 118.282}, {x: 44.883, y: 118.299}, {x: 45.887, y: 118.293}, {x: 46.885, y: 118.262}, {
        x: 47.878,
        y: 118.208
    }, {x: 48.881, y: 118.13}, {x: 49.877, y: 118.027}, {x: 50.865, y: 117.902}, {x: 51.862, y: 117.75}, {
        x: 52.836,
        y: 117.578
    }, {x: 53.817, y: 117.38}, {x: 54.789, y: 117.159}, {x: 55.768, y: 116.911}, {x: 56.722, y: 116.645}, {
        x: 57.682,
        y: 116.352
    }, {x: 58.632, y: 116.036}, {x: 59.572, y: 115.698}, {x: 60.5, y: 115.338}, {x: 61.433, y: 114.951}, {
        x: 62.339,
        y: 114.548
    }, {x: 63.248, y: 114.117}, {x: 64.13, y: 113.673}, {x: 65.014, y: 113.2}, {x: 65.885, y: 112.707}, {
        x: 66.743,
        y: 112.194
    }, {x: 67.587, y: 111.66}, {x: 68.43, y: 111.099}, {x: 69.246, y: 110.526}, {x: 70.047, y: 109.935}, {
        x: 70.845,
        y: 109.315
    }, {x: 71.616, y: 108.686}, {x: 72.371, y: 108.04}, {x: 73.111, y: 107.376}, {x: 73.845, y: 106.683}, {
        x: 74.562,
        y: 105.974
    }, {x: 75.252, y: 105.258}, {x: 75.924, y: 104.526}, {x: 76.578, y: 103.779}, {x: 77.225, y: 103.003}, {
        x: 77.843,
        y: 102.224
    }, {x: 78.452, y: 101.418}, {x: 79.033, y: 100.609}, {x: 79.595, y: 99.786}, {x: 80.137, y: 98.949}, {
        x: 80.66,
        y: 98.098
    }, {x: 81.162, y: 97.234}, {x: 81.644, y: 96.357}, {x: 82.105, y: 95.468}, {x: 82.545, y: 94.566}, {
        x: 82.964,
        y: 93.652
    }, {x: 83.355, y: 92.741}, {x: 83.73, y: 91.804}, {x: 84.078, y: 90.871}, {x: 84.404, y: 89.928}, {
        x: 84.707,
        y: 88.974
    }, {x: 84.988, y: 88.011}, {x: 85.246, y: 87.039}, {x: 85.477, y: 86.073}, {x: 85.686, y: 85.099}, {
        x: 85.871,
        y: 84.116
    }, {x: 86.034, y: 83.126}, {x: 86.172, y: 82.128}, {x: 86.285, y: 81.139}, {x: 86.374, y: 80.143}, {
        x: 86.439,
        y: 79.157
    }, {x: 86.481, y: 78.148}, {x: 86.499, y: 77.15}, {x: 86.503, y: 76.157}, {x: 86.485, y: 75.149}, {
        x: 86.442,
        y: 74.148
    }, {x: 86.374, y: 73.153}, {x: 86.282, y: 72.164}, {x: 86.163, y: 71.161}, {x: 86.02, y: 70.166}, {
        x: 85.853,
        y: 69.189
    }, {x: 85.659, y: 68.199}, {x: 85.443, y: 67.228}, {x: 85.204, y: 66.265}, {x: 84.935, y: 65.291}, {
        x: 84.649,
        y: 64.347
    }, {x: 84.333, y: 63.392}, {x: 83.994, y: 62.448}, {x: 83.633, y: 61.514}, {x: 83.249, y: 60.591}, {
        x: 82.843,
        y: 59.678
    }, {x: 82.415, y: 58.778}, {x: 81.966, y: 57.888}, {x: 81.495, y: 57.011}, {x: 80.994, y: 56.128}]
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t, n) {
        var r = function (e) {
            var t, n = [], r = e.length;
            for (t = 0; t !== r; n.push(e[t++]));
            return n
        }, i = function (e, t, r) {
            n.call(this, e, t, r), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = i.prototype.render
        }, s = 1e-10, o = n._internals, u = o.isSelector, a = o.isArray, f = i.prototype = n.to({}, .1, {}), l = [];
        i.version = "1.13.1", f.constructor = i, f.kill()._gc = !1, i.killTweensOf = i.killDelayedCallsTo = n.killTweensOf, i.getTweensOf = n.getTweensOf, i.lagSmoothing = n.lagSmoothing, i.ticker = n.ticker, i.render = n.render, f.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), n.prototype.invalidate.call(this)
        }, f.updateTo = function (e, t) {
            var r, i = this.ratio;
            t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (r in e)this.vars[r] = e[r];
            if (this._initted)if (t)this._initted = !1; else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && n._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var s = this._time;
                this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
            } else if (this._time > 0) {
                this._initted = !1, this._init();
                for (var o, u = 1 / (1 - i), a = this._firstPT; a;)o = a.s + a.c, a.c *= u, a.s = o - a.c, a = a._next
            }
            return this
        }, f.render = function (e, t, n) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var r, i, u, a, f, c, h, p, d = this._dirty ? this.totalDuration() : this._totalDuration, v = this._time, m = this._totalTime, g = this._cycle, y = this._duration, b = this._rawPrevTime;
            if (e >= d ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, i = "onComplete"), 0 === y && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (e = 0), (0 === e || 0 > b || b === s) && b !== e && (n = !0, b > s && (i = "onReverseComplete")), this._rawPrevTime = p = !t || e || b === e ? e : s)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === y && b > 0 && b !== s) && (i = "onReverseComplete", r = this._reversed), 0 > e ? (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || n) && (b >= 0 && (n = !0), this._rawPrevTime = p = !t || e || b === e ? e : s)) : this._initted || (n = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (a = y + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 !== (1 & this._cycle) && (this._time = y - this._time), this._time > y ? this._time = y : 0 > this._time && (this._time = 0)), this._easeType ? (f = this._time / y, c = this._easeType, h = this._easePower, (1 === c || 3 === c && f >= .5) && (f = 1 - f), 3 === c && (f *= 2), 1 === h ? f *= f : 2 === h ? f *= f * f : 3 === h ? f *= f * f * f : 4 === h && (f *= f * f * f * f), this.ratio = 1 === c ? 1 - f : 2 === c ? f : .5 > this._time / y ? f / 2 : 1 - f / 2) : this.ratio = this._ease.getRatio(this._time / y)), v === this._time && !n && g === this._cycle)return m !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || l)), void 0;
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc)return;
                if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = v, this._totalTime = m, this._rawPrevTime = b, this._cycle = g, o.lazyTweens.push(this), this._lazy = e, void 0;
                this._time && !r ? this.ratio = this._ease.getRatio(this._time / y) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== v && e >= 0 && (this._active = !0), 0 === m && (2 === this._initted && e > 0 && this._init(), this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : i || (i = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || l))), u = this._firstPT; u;)u.f ? u.t[u.p](u.c * this.ratio + u.s) : u.t[u.p] = u.c * this.ratio + u.s, u = u._next;
            this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, n), t || (this._totalTime !== m || r) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || l)), this._cycle !== g && (t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || l)), i && (!this._gc || n) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || l), 0 === y && this._rawPrevTime === s && p !== s && (this._rawPrevTime = 0))
        }, i.to = function (e, t, n) {
            return new i(e, t, n)
        }, i.from = function (e, t, n) {
            return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new i(e, t, n)
        }, i.fromTo = function (e, t, n, r) {
            return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, new i(e, t, r)
        }, i.staggerTo = i.allTo = function (e, t, s, o, f, c, h) {
            o = o || 0;
            var p, d, v, m, g = s.delay || 0, y = [], b = function () {
                s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), f.apply(h || this, c || l)
            };
            for (a(e) || ("string" == typeof e && (e = n.selector(e) || e), u(e) && (e = r(e))), p = e.length, v = 0; p > v; v++) {
                d = {};
                for (m in s)d[m] = s[m];
                d.delay = g, v === p - 1 && f && (d.onComplete = b), y[v] = new i(e[v], t, d), g += o
            }
            return y
        }, i.staggerFrom = i.allFrom = function (e, t, n, r, s, o, u) {
            return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, i.staggerTo(e, t, n, r, s, o, u)
        }, i.staggerFromTo = i.allFromTo = function (e, t, n, r, s, o, u, a) {
            return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, i.staggerTo(e, t, r, s, o, u, a)
        }, i.delayedCall = function (e, t, n, r, s) {
            return new i(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: n,
                onCompleteScope: r,
                onReverseComplete: t,
                onReverseCompleteParams: n,
                onReverseCompleteScope: r,
                immediateRender: !1,
                useFrames: s,
                overwrite: 0
            })
        }, i.set = function (e, t) {
            return new i(e, 0, t)
        }, i.isTweening = function (e) {
            return n.getTweensOf(e, !0).length > 0
        };
        var c = function (e, t) {
            for (var r = [], i = 0, s = e._first; s;)s instanceof n ? r[i++] = s : (t && (r[i++] = s), r = r.concat(c(s, t)), i = r.length), s = s._next;
            return r
        }, h = i.getAllTweens = function (t) {
            return c(e._rootTimeline, t).concat(c(e._rootFramesTimeline, t))
        };
        i.killAll = function (e, n, r, i) {
            null == n && (n = !0), null == r && (r = !0);
            var s, o, u, a = h(0 != i), f = a.length, l = n && r && i;
            for (u = 0; f > u; u++)o = a[u], (l || o instanceof t || (s = o.target === o.vars.onComplete) && r || n && !s) && (e ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
        }, i.killChildTweensOf = function (e, t) {
            if (null != e) {
                var s, f, l, c, h, p = o.tweenLookup;
                if ("string" == typeof e && (e = n.selector(e) || e), u(e) && (e = r(e)), a(e))for (c = e.length; --c > -1;)i.killChildTweensOf(e[c], t); else {
                    s = [];
                    for (l in p)for (f = p[l].target.parentNode; f;)f === e && (s = s.concat(p[l].tweens)), f = f.parentNode;
                    for (h = s.length, c = 0; h > c; c++)t && s[c].totalTime(s[c].totalDuration()), s[c]._enabled(!1, !1)
                }
            }
        };
        var p = function (e, n, r, i) {
            n = n !== !1, r = r !== !1, i = i !== !1;
            for (var s, o, u = h(i), a = n && r && i, f = u.length; --f > -1;)o = u[f], (a || o instanceof t || (s = o.target === o.vars.onComplete) && r || n && !s) && o.paused(e)
        };
        return i.pauseAll = function (e, t, n) {
            p(!0, e, t, n)
        }, i.resumeAll = function (e, t, n) {
            p(!1, e, t, n)
        }, i.globalTimeScale = function (t) {
            var r = e._rootTimeline, i = n.ticker.time;
            return arguments.length ? (t = t || s, r._startTime = i - (i - r._startTime) * r._timeScale / t, r = e._rootFramesTimeline, i = n.ticker.frame, r._startTime = i - (i - r._startTime) * r._timeScale / t, r._timeScale = e._rootTimeline._timeScale = t, t) : r._timeScale
        }, f.progress = function (e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, f.totalProgress = function (e) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
        }, f.time = function (e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
        }, f.duration = function (t) {
            return arguments.length ? e.prototype.duration.call(this, t) : this._duration
        }, f.totalDuration = function (e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, f.repeat = function (e) {
            return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, f.repeatDelay = function (e) {
            return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, f.yoyo = function (e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, i
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t, n) {
        var r = function (e) {
            t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var n, r, i = this.vars;
            for (r in i)n = i[r], u(n) && -1 !== n.join("").indexOf("{self}") && (i[r] = this._swapSelfInParams(n));
            u(i.tweens) && this.add(i.tweens, 0, i.align, i.stagger)
        }, i = 1e-10, s = n._internals, o = s.isSelector, u = s.isArray, a = s.lazyTweens, f = s.lazyRender, l = [], c = _gsScope._gsDefine.globals, h = function (e) {
            var t, n = {};
            for (t in e)n[t] = e[t];
            return n
        }, p = function (e, t, n, r) {
            e._timeline.pause(e._startTime), t && t.apply(r || e._timeline, n || l)
        }, d = function (e) {
            var t, n = [], r = e.length;
            for (t = 0; t !== r; n.push(e[t++]));
            return n
        }, v = r.prototype = new t;
        return r.version = "1.13.1", v.constructor = r, v.kill()._gc = !1, v.to = function (e, t, r, i) {
            var s = r.repeat && c.TweenMax || n;
            return t ? this.add(new s(e, t, r), i) : this.set(e, r, i)
        }, v.from = function (e, t, r, i) {
            return this.add((r.repeat && c.TweenMax || n).from(e, t, r), i)
        }, v.fromTo = function (e, t, r, i, s) {
            var o = i.repeat && c.TweenMax || n;
            return t ? this.add(o.fromTo(e, t, r, i), s) : this.set(e, i, s)
        }, v.staggerTo = function (e, t, i, s, u, a, f, l) {
            var c, p = new r({
                onComplete: a,
                onCompleteParams: f,
                onCompleteScope: l,
                smoothChildTiming: this.smoothChildTiming
            });
            for ("string" == typeof e && (e = n.selector(e) || e), o(e) && (e = d(e)), s = s || 0, c = 0; e.length > c; c++)i.startAt && (i.startAt = h(i.startAt)), p.to(e[c], t, h(i), c * s);
            return this.add(p, u)
        }, v.staggerFrom = function (e, t, n, r, i, s, o, u) {
            return n.immediateRender = 0 != n.immediateRender, n.runBackwards = !0, this.staggerTo(e, t, n, r, i, s, o, u)
        }, v.staggerFromTo = function (e, t, n, r, i, s, o, u, a) {
            return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, this.staggerTo(e, t, r, i, s, o, u, a)
        }, v.call = function (e, t, r, i) {
            return this.add(n.delayedCall(0, e, t, r), i)
        }, v.set = function (e, t, r) {
            return r = this._parseTimeOrLabel(r, 0, !0), null == t.immediateRender && (t.immediateRender = r === this._time && !this._paused), this.add(new n(e, 0, t), r)
        }, r.exportRoot = function (e, t) {
            e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
            var i, s, o = new r(e), u = o._timeline;
            for (null == t && (t = !0), u._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = u._time, i = u._first; i;)s = i._next, t && i instanceof n && i.target === i.vars.onComplete || o.add(i, i._startTime - i._delay), i = s;
            return u.add(o, 0), o
        }, v.add = function (i, s, o, a) {
            var f, l, c, h, p, d;
            if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, i)), !(i instanceof e)) {
                if (i instanceof Array || i && i.push && u(i)) {
                    for (o = o || "normal", a = a || 0, f = s, l = i.length, c = 0; l > c; c++)u(h = i[c]) && (h = new r({tweens: h})), this.add(h, f), "string" != typeof h && "function" != typeof h && ("sequence" === o ? f = h._startTime + h.totalDuration() / h._timeScale : "start" === o && (h._startTime -= h.delay())), f += a;
                    return this._uncache(!0)
                }
                if ("string" == typeof i)return this.addLabel(i, s);
                if ("function" != typeof i)throw"Cannot add " + i + " into the timeline; it is not a tween, timeline, function, or string.";
                i = n.delayedCall(0, i)
            }
            if (t.prototype.add.call(this, i, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())for (p = this, d = p.rawTime() > i._startTime; p._timeline;)d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
            return this
        }, v.remove = function (t) {
            if (t instanceof e)return this._remove(t, !1);
            if (t instanceof Array || t && t.push && u(t)) {
                for (var n = t.length; --n > -1;)this.remove(t[n]);
                return this
            }
            return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
        }, v._remove = function (e, n) {
            t.prototype._remove.call(this, e, n);
            var r = this._last;
            return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, v.append = function (e, t) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
        }, v.insert = v.insertMultiple = function (e, t, n, r) {
            return this.add(e, t || 0, n, r)
        }, v.appendMultiple = function (e, t, n, r) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e), n, r)
        }, v.addLabel = function (e, t) {
            return this._labels[e] = this._parseTimeOrLabel(t), this
        }, v.addPause = function (e, t, n, r) {
            return this.call(p, ["{self}", t, n, r], this, e)
        }, v.removeLabel = function (e) {
            return delete this._labels[e], this
        }, v.getLabelTime = function (e) {
            return null != this._labels[e] ? this._labels[e] : -1
        }, v._parseTimeOrLabel = function (t, n, r, i) {
            var s;
            if (i instanceof e && i.timeline === this)this.remove(i); else if (i && (i instanceof Array || i.push && u(i)))for (s = i.length; --s > -1;)i[s]instanceof e && i[s].timeline === this && this.remove(i[s]);
            if ("string" == typeof n)return this._parseTimeOrLabel(n, r && "number" == typeof t && null == this._labels[n] ? t - this.duration() : 0, r);
            if (n = n || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t])null == t && (t = this.duration()); else {
                if (s = t.indexOf("="), -1 === s)return null == this._labels[t] ? r ? this._labels[t] = this.duration() + n : n : this._labels[t] + n;
                n = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = s > 1 ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, r) : this.duration()
            }
            return Number(t) + n
        }, v.seek = function (e, t) {
            return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
        }, v.stop = function () {
            return this.paused(!0)
        }, v.gotoAndPlay = function (e, t) {
            return this.play(e, t)
        }, v.gotoAndStop = function (e, t) {
            return this.pause(e, t)
        }, v.render = function (e, t, n) {
            this._gc && this._enabled(!0, !1);
            var r, s, o, u, c, h = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, d = this._startTime, v = this._timeScale, m = this._paused;
            if (e >= h ? (this._totalTime = this._time = h, this._reversed || this._hasPausedChild() || (s = !0, u = "onComplete", 0 === this._duration && (0 === e || 0 > this._rawPrevTime || this._rawPrevTime === i) && this._rawPrevTime !== e && this._first && (c = !0, this._rawPrevTime > i && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : i, e = h + 1e-4) : 1e-7 > e ? (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== i && (this._rawPrevTime > 0 || 0 > e && this._rawPrevTime >= 0)) && (u = "onReverseComplete", s = this._reversed), 0 > e ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (c = !0), this._rawPrevTime = e) : (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : i, e = 0, this._initted || (c = !0))) : this._totalTime = this._time = this._rawPrevTime = e, this._time !== p && this._first || n || c) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && e > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || l)), this._time >= p)for (r = this._first; r && (o = r._next, !this._paused || m);)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = o; else for (r = this._last; r && (o = r._prev, !this._paused || m);)(r._active || p >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = o;
                this._onUpdate && (t || (a.length && f(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || l))), u && (this._gc || (d === this._startTime || v !== this._timeScale) && (0 === this._time || h >= this.totalDuration()) && (s && (a.length && f(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[u] && this.vars[u].apply(this.vars[u + "Scope"] || this, this.vars[u + "Params"] || l)))
            }
        }, v._hasPausedChild = function () {
            for (var e = this._first; e;) {
                if (e._paused || e instanceof r && e._hasPausedChild())return !0;
                e = e._next
            }
            return !1
        }, v.getChildren = function (e, t, r, i) {
            i = i || -9999999999;
            for (var s = [], o = this._first, u = 0; o;)i > o._startTime || (o instanceof n ? t !== !1 && (s[u++] = o) : (r !== !1 && (s[u++] = o), e !== !1 && (s = s.concat(o.getChildren(!0, t, r)), u = s.length))), o = o._next;
            return s
        }, v.getTweensOf = function (e, t) {
            var r, i, s = this._gc, o = [], u = 0;
            for (s && this._enabled(!0, !0), r = n.getTweensOf(e), i = r.length; --i > -1;)(r[i].timeline === this || t && this._contains(r[i])) && (o[u++] = r[i]);
            return s && this._enabled(!1, !0), o
        }, v._contains = function (e) {
            for (var t = e.timeline; t;) {
                if (t === this)return !0;
                t = t.timeline
            }
            return !1
        }, v.shiftChildren = function (e, t, n) {
            n = n || 0;
            for (var r, i = this._first, s = this._labels; i;)i._startTime >= n && (i._startTime += e), i = i._next;
            if (t)for (r in s)s[r] >= n && (s[r] += e);
            return this._uncache(!0)
        }, v._kill = function (e, t) {
            if (!e && !t)return this._enabled(!1, !1);
            for (var n = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = n.length, i = !1; --r > -1;)n[r]._kill(e, t) && (i = !0);
            return i
        }, v.clear = function (e) {
            var t = this.getChildren(!1, !0, !0), n = t.length;
            for (this._time = this._totalTime = 0; --n > -1;)t[n]._enabled(!1, !1);
            return e !== !1 && (this._labels = {}), this._uncache(!0)
        }, v.invalidate = function () {
            for (var e = this._first; e;)e.invalidate(), e = e._next;
            return this
        }, v._enabled = function (e, n) {
            if (e === this._gc)for (var r = this._first; r;)r._enabled(e, !0), r = r._next;
            return t.prototype._enabled.call(this, e, n)
        }, v.duration = function (e) {
            return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
        }, v.totalDuration = function (e) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var t, n, r = 0, i = this._last, s = 999999999999; i;)t = i._prev, i._dirty && i.totalDuration(), i._startTime > s && this._sortChildren && !i._paused ? this.add(i, i._startTime - i._delay) : s = i._startTime, 0 > i._startTime && !i._paused && (r -= i._startTime, this._timeline.smoothChildTiming && (this._startTime += i._startTime / this._timeScale), this.shiftChildren(-i._startTime, !1, -9999999999), s = 0), n = i._startTime + i._totalDuration / i._timeScale, n > r && (r = n), i = t;
                    this._duration = this._totalDuration = r, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== e && this.timeScale(this._totalDuration / e), this
        }, v.usesFrames = function () {
            for (var t = this._timeline; t._timeline;)t = t._timeline;
            return t === e._rootFramesTimeline
        }, v.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, r
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (e, t, n) {
        var r = function (t) {
            e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
        }, i = 1e-10, s = [], o = t._internals, u = o.lazyTweens, a = o.lazyRender, f = new n(null, null, 1, 0), l = r.prototype = new e;
        return l.constructor = r, l.kill()._gc = !1, r.version = "1.13.1", l.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
        }, l.addCallback = function (e, n, r, i) {
            return this.add(t.delayedCall(0, e, r, i), n)
        }, l.removeCallback = function (e, t) {
            if (e)if (null == t)this._kill(null, e); else for (var n = this.getTweensOf(e, !1), r = n.length, i = this._parseTimeOrLabel(t); --r > -1;)n[r]._startTime === i && n[r]._enabled(!1, !1);
            return this
        }, l.tweenTo = function (e, n) {
            n = n || {};
            var r, i, o, u = {ease: f, overwrite: n.delay ? 2 : 1, useFrames: this.usesFrames(), immediateRender: !1};
            for (i in n)u[i] = n[i];
            return u.time = this._parseTimeOrLabel(e), r = Math.abs(Number(u.time) - this._time) / this._timeScale || .001, o = new t(this, r, u), u.onStart = function () {
                o.target.paused(!0), o.vars.time !== o.target.time() && r === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), n.onStart && n.onStart.apply(n.onStartScope || o, n.onStartParams || s)
            }, o
        }, l.tweenFromTo = function (e, t, n) {
            n = n || {}, e = this._parseTimeOrLabel(e), n.startAt = {
                onComplete: this.seek,
                onCompleteParams: [e],
                onCompleteScope: this
            }, n.immediateRender = n.immediateRender !== !1;
            var r = this.tweenTo(t, n);
            return r.duration(Math.abs(r.vars.time - e) / this._timeScale || .001)
        }, l.render = function (e, t, n) {
            this._gc && this._enabled(!0, !1);
            var r, o, f, l, c, p, d = this._dirty ? this.totalDuration() : this._totalDuration, v = this._duration, m = this._time, g = this._totalTime, y = this._startTime, b = this._timeScale, w = this._rawPrevTime, E = this._paused, S = this._cycle;
            if (e >= d ? (this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, l = "onComplete", 0 === this._duration && (0 === e || 0 > w || w === i) && w !== e && this._first && (c = !0, w > i && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : i, this._yoyo && 0 !== (1 & this._cycle) ? this._time = e = 0 : (this._time = v, e = v + 1e-4)) : 1e-7 > e ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === v && w !== i && (w > 0 || 0 > e && w >= 0) && !this._locked) && (l = "onReverseComplete", o = this._reversed), 0 > e ? (this._active = !1, w >= 0 && this._first && (c = !0), this._rawPrevTime = e) : (this._rawPrevTime = v || !t || e || this._rawPrevTime === e ? e : i, e = 0, this._initted || (c = !0))) : (0 === v && 0 > w && (c = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (p = v + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? (this._time = v, e = v + 1e-4) : 0 > this._time ? this._time = e = 0 : e = this._time))), this._cycle !== S && !this._locked) {
                var x = this._yoyo && 0 !== (1 & S), T = x === (this._yoyo && 0 !== (1 & this._cycle)), N = this._totalTime, C = this._cycle, k = this._rawPrevTime, L = this._time;
                if (this._totalTime = S * v, S > this._cycle ? x = !x : this._totalTime += v, this._time = m, this._rawPrevTime = 0 === v ? w - 1e-4 : w, this._cycle = S, this._locked = !0, m = x ? 0 : v, this.render(m, t, 0 === v), t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || s), T && (m = x ? v + 1e-4 : -0.0001, this.render(m, !0, !1)), this._locked = !1, this._paused && !E)return;
                this._time = L, this._totalTime = N, this._cycle = C, this._rawPrevTime = k
            }
            if (!(this._time !== m && this._first || n || c))return g !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), void 0;
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && e > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= m)for (r = this._first; r && (f = r._next, !this._paused || E);)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = f; else for (r = this._last; r && (f = r._prev, !this._paused || E);)(r._active || m >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = f;
            this._onUpdate && (t || (u.length && a(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s))), l && (this._locked || this._gc || (y === this._startTime || b !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (o && (u.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[l] && this.vars[l].apply(this.vars[l + "Scope"] || this, this.vars[l + "Params"] || s)))
        }, l.getActive = function (e, t, n) {
            null == e && (e = !0), null == t && (t = !0), null == n && (n = !1);
            var r, i, s = [], o = this.getChildren(e, t, n), u = 0, a = o.length;
            for (r = 0; a > r; r++)i = o[r], i.isActive() && (s[u++] = i);
            return s
        }, l.getLabelAfter = function (e) {
            e || 0 !== e && (e = this._time);
            var t, n = this.getLabelsArray(), r = n.length;
            for (t = 0; r > t; t++)if (n[t].time > e)return n[t].name;
            return null
        }, l.getLabelBefore = function (e) {
            null == e && (e = this._time);
            for (var t = this.getLabelsArray(), n = t.length; --n > -1;)if (e > t[n].time)return t[n].name;
            return null
        }, l.getLabelsArray = function () {
            var e, t = [], n = 0;
            for (e in this._labels)t[n++] = {time: this._labels[e], name: e};
            return t.sort(function (e, t) {
                return e.time - t.time
            }), t
        }, l.progress = function (e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, l.totalProgress = function (e) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
        }, l.totalDuration = function (t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, l.time = function (e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
        }, l.repeat = function (e) {
            return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, l.repeatDelay = function (e) {
            return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, l.yoyo = function (e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, l.currentLabel = function (e) {
            return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
        }, r
    }, !0), function () {
        var e = 180 / Math.PI, t = [], n = [], r = [], i = {}, s = function (e, t, n, r) {
            this.a = e, this.b = t, this.c = n, this.d = r, this.da = r - e, this.ca = n - e, this.ba = t - e
        }, o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", u = function (e, t, n, r) {
            var i = {a: e}, s = {}, o = {}, u = {c: r}, a = (e + t) / 2, f = (t + n) / 2, l = (n + r) / 2, c = (a + f) / 2, h = (f + l) / 2, p = (h - c) / 8;
            return i.b = a + (e - a) / 4, s.b = c + p, i.c = s.a = (i.b + s.b) / 2, s.c = o.a = (c + h) / 2, o.b = h - p, u.b = l + (r - l) / 4, o.c = u.a = (o.b + u.b) / 2, [i, s, o, u]
        }, a = function (e, i, s, o, a) {
            var f, l, c, h, p, d, v, m, g, y, b, w, E, S = e.length - 1, x = 0, T = e[0].a;
            for (f = 0; S > f; f++)p = e[x], l = p.a, c = p.d, h = e[x + 1].d, a ? (b = t[f], w = n[f], E = .25 * (w + b) * i / (o ? .5 : r[f] || .5), d = c - (c - l) * (o ? .5 * i : 0 !== b ? E / b : 0), v = c + (h - c) * (o ? .5 * i : 0 !== w ? E / w : 0), m = c - (d + ((v - d) * (3 * b / (b + w) + .5) / 4 || 0))) : (d = c - .5 * (c - l) * i, v = c + .5 * (h - c) * i, m = c - (d + v) / 2), d += m, v += m, p.c = g = d, p.b = 0 !== f ? T : T = p.a + .6 * (p.c - p.a), p.da = c - l, p.ca = g - l, p.ba = T - l, s ? (y = u(l, T, g, c), e.splice(x, 1, y[0], y[1], y[2], y[3]), x += 4) : x++, T = v;
            p = e[x], p.b = T, p.c = T + .4 * (p.d - T), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = T - p.a, s && (y = u(p.a, T, p.c, p.d), e.splice(x, 1, y[0], y[1], y[2], y[3]))
        }, f = function (e, r, i, o) {
            var u, a, f, l, c, h, p = [];
            if (o)for (e = [o].concat(e), a = e.length; --a > -1;)"string" == typeof (h = e[a][r]) && "=" === h.charAt(1) && (e[a][r] = o[r] + Number(h.charAt(0) + h.substr(2)));
            if (u = e.length - 2, 0 > u)return p[0] = new s(e[0][r], 0, 0, e[-1 > u ? 0 : 1][r]), p;
            for (a = 0; u > a; a++)f = e[a][r], l = e[a + 1][r], p[a] = new s(f, 0, 0, l), i && (c = e[a + 2][r], t[a] = (t[a] || 0) + (l - f) * (l - f), n[a] = (n[a] || 0) + (c - l) * (c - l));
            return p[a] = new s(e[a][r], 0, 0, e[a + 1][r]), p
        }, l = function (e, s, u, l, c, h) {
            var p, d, v, m, g, y, b, w, E = {}, S = [], x = h || e[0];
            c = "string" == typeof c ? "," + c + "," : o, null == s && (s = 1);
            for (d in e[0])S.push(d);
            if (e.length > 1) {
                for (w = e[e.length - 1], b = !0, p = S.length; --p > -1;)if (d = S[p], Math.abs(x[d] - w[d]) > .05) {
                    b = !1;
                    break
                }
                b && (e = e.concat(), h && e.unshift(h), e.push(e[1]), h = e[e.length - 3])
            }
            for (t.length = n.length = r.length = 0, p = S.length; --p > -1;)d = S[p], i[d] = -1 !== c.indexOf("," + d + ","), E[d] = f(e, d, i[d], h);
            for (p = t.length; --p > -1;)t[p] = Math.sqrt(t[p]), n[p] = Math.sqrt(n[p]);
            if (!l) {
                for (p = S.length; --p > -1;)if (i[d])for (v = E[S[p]], y = v.length - 1, m = 0; y > m; m++)g = v[m + 1].da / n[m] + v[m].da / t[m], r[m] = (r[m] || 0) + g * g;
                for (p = r.length; --p > -1;)r[p] = Math.sqrt(r[p])
            }
            for (p = S.length, m = u ? 4 : 1; --p > -1;)d = S[p], v = E[d], a(v, s, u, l, i[d]), b && (v.splice(0, m), v.splice(v.length - m, m));
            return E
        }, c = function (e, t, n) {
            t = t || "soft";
            var r, i, o, u, a, f, l, c, h, p, d, v = {}, m = "cubic" === t ? 3 : 2, g = "soft" === t, y = [];
            if (g && n && (e = [n].concat(e)), null == e || m + 1 > e.length)throw"invalid Bezier data";
            for (h in e[0])y.push(h);
            for (f = y.length; --f > -1;) {
                for (h = y[f], v[h] = a = [], p = 0, c = e.length, l = 0; c > l; l++)r = null == n ? e[l][h] : "string" == typeof (d = e[l][h]) && "=" === d.charAt(1) ? n[h] + Number(d.charAt(0) + d.substr(2)) : Number(d), g && l > 1 && c - 1 > l && (a[p++] = (r + a[p - 2]) / 2), a[p++] = r;
                for (c = p - m + 1, p = 0, l = 0; c > l; l += m)r = a[l], i = a[l + 1], o = a[l + 2], u = 2 === m ? 0 : a[l + 3], a[p++] = d = 3 === m ? new s(r, i, o, u) : new s(r, (2 * i + r) / 3, (2 * i + o) / 3, o);
                a.length = p
            }
            return v
        }, h = function (e, t, n) {
            for (var r, i, s, o, u, a, f, l, c, h, p, d = 1 / n, v = e.length; --v > -1;)for (h = e[v], s = h.a, o = h.d - s, u = h.c - s, a = h.b - s, r = i = 0, l = 1; n >= l; l++)f = d * l, c = 1 - f, r = i - (i = (f * f * o + 3 * c * (f * u + c * a)) * f), p = v * n + l - 1, t[p] = (t[p] || 0) + r * r
        }, p = function (e, t) {
            t = t >> 0 || 6;
            var n, r, i, s, o = [], u = [], a = 0, f = 0, l = t - 1, c = [], p = [];
            for (n in e)h(e[n], o, t);
            for (i = o.length, r = 0; i > r; r++)a += Math.sqrt(o[r]), s = r % t, p[s] = a, s === l && (f += a, s = r / t >> 0, c[s] = p, u[s] = f, a = 0, p = []);
            return {length: f, lengths: u, segments: c}
        }, d = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.3",
            API: 2,
            global: !0,
            init: function (e, t, n) {
                this._target = e, t instanceof Array && (t = {values: t}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                var r, i, s, o, u, a = t.values || [], f = {}, h = a[0], d = t.autoRotate || n.vars.orientToBezier;
                this._autoRotate = d ? d instanceof Array ? d : [["x", "y", "rotation", d === !0 ? 0 : Number(d) || 0]] : null;
                for (r in h)this._props.push(r);
                for (s = this._props.length; --s > -1;)r = this._props[s], this._overwriteProps.push(r), i = this._func[r] = "function" == typeof e[r], f[r] = i ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), u || f[r] !== a[0][r] && (u = f);
                if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? l(a, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, u) : c(a, t.type, f), this._segCount = this._beziers[r].length, this._timeRes) {
                    var v = p(this._beziers, this._timeRes);
                    this._length = v.length, this._lengths = v.lengths, this._segments = v.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (d = this._autoRotate)for (this._initialRotations = [], d[0]instanceof Array || (this._autoRotate = d = [d]), s = d.length; --s > -1;) {
                    for (o = 0; 3 > o; o++)r = d[s][o], this._func[r] = "function" == typeof e[r] ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)] : !1;
                    r = d[s][2], this._initialRotations[s] = this._func[r] ? this._func[r].call(this._target) : this._target[r]
                }
                return this._startRatio = n.vars.runBackwards ? 1 : 0, !0
            },
            set: function (t) {
                var n, r, i, s, o, u, a, f, l, c, h = this._segCount, p = this._func, d = this._target, v = t !== this._startRatio;
                if (this._timeRes) {
                    if (l = this._lengths, c = this._curSeg, t *= this._length, i = this._li, t > this._l2 && h - 1 > i) {
                        for (f = h - 1; f > i && t >= (this._l2 = l[++i]););
                        this._l1 = l[i - 1], this._li = i, this._curSeg = c = this._segments[i], this._s2 = c[this._s1 = this._si = 0]
                    } else if (this._l1 > t && i > 0) {
                        for (; i > 0 && (this._l1 = l[--i]) >= t;);
                        0 === i && this._l1 > t ? this._l1 = 0 : i++, this._l2 = l[i], this._li = i, this._curSeg = c = this._segments[i], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                    }
                    if (n = i, t -= this._l1, i = this._si, t > this._s2 && c.length - 1 > i) {
                        for (f = c.length - 1; f > i && t >= (this._s2 = c[++i]););
                        this._s1 = c[i - 1], this._si = i
                    } else if (this._s1 > t && i > 0) {
                        for (; i > 0 && (this._s1 = c[--i]) >= t;);
                        0 === i && this._s1 > t ? this._s1 = 0 : i++, this._s2 = c[i], this._si = i
                    }
                    u = (i + (t - this._s1) / (this._s2 - this._s1)) * this._prec
                } else n = 0 > t ? 0 : t >= 1 ? h - 1 : h * t >> 0, u = (t - n * (1 / h)) * h;
                for (r = 1 - u, i = this._props.length; --i > -1;)s = this._props[i], o = this._beziers[s][n], a = (u * u * o.da + 3 * r * (u * o.ca + r * o.ba)) * u + o.a, this._round[s] && (a = Math.round(a)), p[s] ? d[s](a) : d[s] = a;
                if (this._autoRotate) {
                    var m, g, y, b, w, E, S, x = this._autoRotate;
                    for (i = x.length; --i > -1;)s = x[i][2], E = x[i][3] || 0, S = x[i][4] === !0 ? 1 : e, o = this._beziers[x[i][0]], m = this._beziers[x[i][1]], o && m && (o = o[n], m = m[n], g = o.a + (o.b - o.a) * u, b = o.b + (o.c - o.b) * u, g += (b - g) * u, b += (o.c + (o.d - o.c) * u - b) * u, y = m.a + (m.b - m.a) * u, w = m.b + (m.c - m.b) * u, y += (w - y) * u, w += (m.c + (m.d - m.c) * u - w) * u, a = v ? Math.atan2(w - y, b - g) * S + E : this._initialRotations[i], p[s] ? d[s](a) : d[s] = a)
                }
            }
        }), v = d.prototype;
        d.bezierThrough = l, d.cubicToQuadratic = u, d._autoCSS = !0, d.quadraticToCubic = function (e, t, n) {
            return new s(e, (2 * t + e) / 3, (2 * t + n) / 3, n)
        }, d._cssRegister = function () {
            var e = _gsScope._gsDefine.globals.CSSPlugin;
            if (e) {
                var t = e._internals, n = t._parseToProxy, r = t._setPluginRatio, i = t.CSSPropTween;
                t._registerComplexSpecialProp("bezier", {
                    parser: function (e, t, s, o, u, a) {
                        t instanceof Array && (t = {values: t}), a = new d;
                        var f, l, c, h = t.values, p = h.length - 1, v = [], m = {};
                        if (0 > p)return u;
                        for (f = 0; p >= f; f++)c = n(e, h[f], o, u, a, p !== f), v[f] = c.end;
                        for (l in t)m[l] = t[l];
                        return m.values = v, u = new i(e, "bezier", 0, 0, c.pt, 2), u.data = c, u.plugin = a, u.setRatio = r, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (f = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != c.end.left ? [["left", "top", "rotation", f, !1]] : null != c.end.x ? [["x", "y", "rotation", f, !1]] : !1), m.autoRotate && (o._transform || o._enableTransforms(!1), c.autoRotate = o._target._gsTransform), a._onInitTween(c.proxy, m, o._tween), u
                    }
                })
            }
        }, v._roundProps = function (e, t) {
            for (var n = this._overwriteProps, r = n.length; --r > -1;)(e[n[r]] || e.bezier || e.bezierThrough) && (this._round[n[r]] = t)
        }, v._kill = function (e) {
            var t, n, r = this._props;
            for (t in this._beziers)if (t in e)for (delete this._beziers[t], delete this._func[t], n = r.length; --n > -1;)r[n] === t && r.splice(n, 1);
            return this._super._kill.call(this, e)
        }
    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (e, t) {
        var n, r, i, s, o = function () {
            e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
        }, u = {}, a = o.prototype = new e("css");
        a.constructor = o, o.version = "1.13.1", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", a = "px", o.suffixMap = {
            top: a,
            right: a,
            bottom: a,
            left: a,
            width: a,
            height: a,
            fontSize: a,
            padding: a,
            margin: a,
            perspective: a,
            lineHeight: ""
        };
        var f, l, c, h, p, d, v = /(?:\d|\-\d|\.\d|\-\.\d)+/g, m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, y = /[^\d\-\.]/g, b = /(?:\d|\-|\+|=|#|\.)*/g, w = /opacity *= *([^)]*)/i, E = /opacity:([^;]*)/i, S = /alpha\(opacity *=.+?\)/i, x = /^(rgb|hsl)/, T = /([A-Z])/g, N = /-([a-z])/gi, C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, k = function (e, t) {
            return t.toUpperCase()
        }, L = /(?:Left|Right|Width)/i, A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, M = /,(?=[^\)]*(?:\(|$))/gi, _ = Math.PI / 180, D = 180 / Math.PI, P = {}, H = document, B = H.createElement("div"), j = H.createElement("img"), F = o._internals = {_specialProps: u}, I = navigator.userAgent, q = function () {
            var e, t = I.indexOf("Android"), n = H.createElement("div");
            return c = -1 !== I.indexOf("Safari") && -1 === I.indexOf("Chrome") && (-1 === t || Number(I.substr(t + 8, 1)) > 3), p = c && 6 > Number(I.substr(I.indexOf("Version/") + 8, 1)), h = -1 !== I.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(I) && (d = parseFloat(RegExp.$1)), n.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", e = n.getElementsByTagName("a")[0], e ? /^0.55/.test(e.style.opacity) : !1
        }(), R = function (e) {
            return w.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, U = function (e) {
            window.console && console.log(e)
        }, z = "", W = "", X = function (e, t) {
            t = t || B;
            var n, r, i = t.style;
            if (void 0 !== i[e])return e;
            for (e = e.charAt(0).toUpperCase() + e.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === i[n[r] + e];);
            return r >= 0 ? (W = 3 === r ? "ms" : n[r], z = "-" + W.toLowerCase() + "-", W + e) : null
        }, V = H.defaultView ? H.defaultView.getComputedStyle : function () {
        }, $ = o.getStyle = function (e, t, n, r, i) {
            var s;
            return q || "opacity" !== t ? (!r && e.style[t] ? s = e.style[t] : (n = n || V(e)) ? s = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(T, "-$1").toLowerCase()) : e.currentStyle && (s = e.currentStyle[t]), null == i || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : i) : R(e)
        }, J = F.convertToPixels = function (e, n, r, i, s) {
            if ("px" === i || !i)return r;
            if ("auto" === i || !r)return 0;
            var u, a, f, l = L.test(n), c = e, h = B.style, p = 0 > r;
            if (p && (r = -r), "%" === i && -1 !== n.indexOf("border"))u = r / 100 * (l ? e.clientWidth : e.clientHeight); else {
                if (h.cssText = "border:0 solid red;position:" + $(e, "position") + ";line-height:0;", "%" !== i && c.appendChild)h[l ? "borderLeftWidth" : "borderTopWidth"] = r + i; else {
                    if (c = e.parentNode || H.body, a = c._gsCache, f = t.ticker.frame, a && l && a.time === f)return a.width * r / 100;
                    h[l ? "width" : "height"] = r + i
                }
                c.appendChild(B), u = parseFloat(B[l ? "offsetWidth" : "offsetHeight"]), c.removeChild(B), l && "%" === i && o.cacheWidths !== !1 && (a = c._gsCache = c._gsCache || {}, a.time = f, a.width = 100 * (u / r)), 0 !== u || s || (u = J(e, n, r, i, !0))
            }
            return p ? -u : u
        }, K = F.calculateOffset = function (e, t, n) {
            if ("absolute" !== $(e, "position", n))return 0;
            var r = "left" === t ? "Left" : "Top", i = $(e, "margin" + r, n);
            return e["offset" + r] - (J(e, t, parseFloat(i), i.replace(b, "")) || 0)
        }, Q = function (e, t) {
            var n, r, i = {};
            if (t = t || V(e, null))if (n = t.length)for (; --n > -1;)i[t[n].replace(N, k)] = t.getPropertyValue(t[n]); else for (n in t)i[n] = t[n]; else if (t = e.currentStyle || e.style)for (n in t)"string" == typeof n && void 0 === i[n] && (i[n.replace(N, k)] = t[n]);
            return q || (i.opacity = R(e)), r = Tt(e, t, !1), i.rotation = r.rotation, i.skewX = r.skewX, i.scaleX = r.scaleX, i.scaleY = r.scaleY, i.x = r.x, i.y = r.y, St && (i.z = r.z, i.rotationX = r.rotationX, i.rotationY = r.rotationY, i.scaleZ = r.scaleZ), i.filters && delete i.filters, i
        }, G = function (e, t, n, r, i) {
            var s, o, u, a = {}, f = e.style;
            for (o in n)"cssText" !== o && "length" !== o && isNaN(o) && (t[o] !== (s = n[o]) || i && i[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (a[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof t[o] || "" === t[o].replace(y, "") ? s : 0 : K(e, o), void 0 !== f[o] && (u = new ct(f, o, f[o], u)));
            if (r)for (o in r)"className" !== o && (a[o] = r[o]);
            return {difs: a, firstMPT: u}
        }, Y = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, Z = ["marginLeft", "marginRight", "marginTop", "marginBottom"], et = function (e, t, n) {
            var r = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight), i = Y[t], s = i.length;
            for (n = n || V(e, null); --s > -1;)r -= parseFloat($(e, "padding" + i[s], n, !0)) || 0, r -= parseFloat($(e, "border" + i[s] + "Width", n, !0)) || 0;
            return r
        }, tt = function (e, t) {
            (null == e || "" === e || "auto" === e || "auto auto" === e) && (e = "0 0");
            var n = e.split(" "), r = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0], i = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
            return null == i ? i = "0" : "center" === i && (i = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t && (t.oxp = -1 !== r.indexOf("%"), t.oyp = -1 !== i.indexOf("%"), t.oxr = "=" === r.charAt(1), t.oyr = "=" === i.charAt(1), t.ox = parseFloat(r.replace(y, "")), t.oy = parseFloat(i.replace(y, ""))), r + " " + i + (n.length > 2 ? " " + n[2] : "")
        }, nt = function (e, t) {
            return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
        }, rt = function (e, t) {
            return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) + t : parseFloat(e)
        }, it = function (e, t, n, r) {
            var i, s, o, u, a = 1e-6;
            return null == e ? u = t : "number" == typeof e ? u = e : (i = 360, s = e.split("_"), o = Number(s[0].replace(y, "")) * (-1 === e.indexOf("rad") ? 1 : D) - ("=" === e.charAt(1) ? 0 : t), s.length && (r && (r[n] = t + o), -1 !== e.indexOf("short") && (o %= i, o !== o % (i / 2) && (o = 0 > o ? o + i : o - i)), -1 !== e.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * i) % i - (0 | o / i) * i : -1 !== e.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * i) % i - (0 | o / i) * i)), u = t + o), a > u && u > -a && (u = 0), u
        }, st = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, ot = function (e, t, n) {
            return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 0 | 255 * (1 > 6 * e ? t + 6 * (n - t) * e : .5 > e ? n : 2 > 3 * e ? t + 6 * (n - t) * (2 / 3 - e) : t) + .5
        }, ut = function (e) {
            var t, n, r, i, s, o;
            return e && "" !== e ? "number" == typeof e ? [e >> 16, 255 & e >> 8, 255 & e] : ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), st[e] ? st[e] : "#" === e.charAt(0) ? (4 === e.length && (t = e.charAt(1), n = e.charAt(2), r = e.charAt(3), e = "#" + t + t + n + n + r + r), e = parseInt(e.substr(1), 16), [e >> 16, 255 & e >> 8, 255 & e]) : "hsl" === e.substr(0, 3) ? (e = e.match(v), i = Number(e[0]) % 360 / 360, s = Number(e[1]) / 100, o = Number(e[2]) / 100, n = .5 >= o ? o * (s + 1) : o + s - o * s, t = 2 * o - n, e.length > 3 && (e[3] = Number(e[3])), e[0] = ot(i + 1 / 3, t, n), e[1] = ot(i, t, n), e[2] = ot(i - 1 / 3, t, n), e) : (e = e.match(v) || st.transparent, e[0] = Number(e[0]), e[1] = Number(e[1]), e[2] = Number(e[2]), e.length > 3 && (e[3] = Number(e[3])), e)) : st.black
        }, at = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (a in st)at += "|" + a + "\\b";
        at = RegExp(at + ")", "gi");
        var ft = function (e, t, n, r) {
            if (null == e)return function (e) {
                return e
            };
            var i, s = t ? (e.match(at) || [""])[0] : "", o = e.split(s).join("").match(g) || [], u = e.substr(0, e.indexOf(o[0])), a = ")" === e.charAt(e.length - 1) ? ")" : "", f = -1 !== e.indexOf(" ") ? " " : ",", l = o.length, c = l > 0 ? o[0].replace(v, "") : "";
            return l ? i = t ? function (e) {
                var t, h, p, d;
                if ("number" == typeof e)e += c; else if (r && M.test(e)) {
                    for (d = e.replace(M, "|").split("|"), p = 0; d.length > p; p++)d[p] = i(d[p]);
                    return d.join(",")
                }
                if (t = (e.match(at) || [s])[0], h = e.split(t).join("").match(g) || [], p = h.length, l > p--)for (; l > ++p;)h[p] = n ? h[0 | (p - 1) / 2] : o[p];
                return u + h.join(f) + f + t + a + (-1 !== e.indexOf("inset") ? " inset" : "")
            } : function (e) {
                var t, s, h;
                if ("number" == typeof e)e += c; else if (r && M.test(e)) {
                    for (s = e.replace(M, "|").split("|"), h = 0; s.length > h; h++)s[h] = i(s[h]);
                    return s.join(",")
                }
                if (t = e.match(g) || [], h = t.length, l > h--)for (; l > ++h;)t[h] = n ? t[0 | (h - 1) / 2] : o[h];
                return u + t.join(f) + a
            } : function (e) {
                return e
            }
        }, lt = function (e) {
            return e = e.split(","), function (t, n, r, i, s, o, u) {
                var a, f = (n + "").split(" ");
                for (u = {}, a = 0; 4 > a; a++)u[e[a]] = f[a] = f[a] || f[(a - 1) / 2 >> 0];
                return i.parse(t, u, s, o)
            }
        }, ct = (F._setPluginRatio = function (e) {
            this.plugin.setRatio(e);
            for (var t, n, r, i, s = this.data, o = s.proxy, u = s.firstMPT, a = 1e-6; u;)t = o[u.v], u.r ? t = Math.round(t) : a > t && t > -a && (t = 0), u.t[u.p] = t, u = u._next;
            if (s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === e)for (u = s.firstMPT; u;) {
                if (n = u.t, n.type) {
                    if (1 === n.type) {
                        for (i = n.xs0 + n.s + n.xs1, r = 1; n.l > r; r++)i += n["xn" + r] + n["xs" + (r + 1)];
                        n.e = i
                    }
                } else n.e = n.s + n.xs0;
                u = u._next
            }
        }, function (e, t, n, r, i) {
            this.t = e, this.p = t, this.v = n, this.r = i, r && (r._prev = this, this._next = r)
        }), ht = (F._parseToProxy = function (e, t, n, r, i, s) {
            var o, u, a, f, l, c = r, h = {}, p = {}, d = n._transform, v = P;
            for (n._transform = null, P = t, r = l = n.parse(e, t, r, i), P = v, s && (n._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); r && r !== c;) {
                if (1 >= r.type && (u = r.p, p[u] = r.s + r.c, h[u] = r.s, s || (f = new ct(r, "s", u, f, r.r), r.c = 0), 1 === r.type))for (o = r.l; --o > 0;)a = "xn" + o, u = r.p + "_" + a, p[u] = r.data[a], h[u] = r[a], s || (f = new ct(r, a, u, f, r.rxp[a]));
                r = r._next
            }
            return {proxy: h, end: p, firstMPT: f, pt: l}
        }, F.CSSPropTween = function (e, t, r, i, o, u, a, f, l, c, h) {
            this.t = e, this.p = t, this.s = r, this.c = i, this.n = a || t, e instanceof ht || s.push(this.n), this.r = f, this.type = u || 0, l && (this.pr = l, n = !0), this.b = void 0 === c ? r : c, this.e = void 0 === h ? r + i : h, o && (this._next = o, o._prev = this)
        }), pt = o.parseComplex = function (e, t, n, r, i, s, o, u, a, l) {
            n = n || s || "", o = new ht(e, t, 0, 0, o, l ? 2 : 1, null, !1, u, n, r), r += "";
            var c, h, p, d, g, y, b, w, E, S, T, N, C = n.split(", ").join(",").split(" "), k = r.split(", ").join(",").split(" "), L = C.length, A = f !== !1;
            for ((-1 !== r.indexOf(",") || -1 !== n.indexOf(",")) && (C = C.join(" ").replace(M, ", ").split(" "), k = k.join(" ").replace(M, ", ").split(" "), L = C.length), L !== k.length && (C = (s || "").split(" "), L = C.length), o.plugin = a, o.setRatio = l, c = 0; L > c; c++)if (d = C[c], g = k[c], w = parseFloat(d), w || 0 === w)o.appendXtra("", w, nt(g, w), g.replace(m, ""), A && -1 !== g.indexOf("px"), !0); else if (i && ("#" === d.charAt(0) || st[d] || x.test(d)))N = "," === g.charAt(g.length - 1) ? ")," : ")", d = ut(d), g = ut(g), E = d.length + g.length > 6, E && !q && 0 === g[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(k[c]).join("transparent")) : (q || (E = !1), o.appendXtra(E ? "rgba(" : "rgb(", d[0], g[0] - d[0], ",", !0, !0).appendXtra("", d[1], g[1] - d[1], ",", !0).appendXtra("", d[2], g[2] - d[2], E ? "," : N, !0), E && (d = 4 > d.length ? 1 : d[3], o.appendXtra("", d, (4 > g.length ? 1 : g[3]) - d, N, !1))); else if (y = d.match(v)) {
                if (b = g.match(m), !b || b.length !== y.length)return o;
                for (p = 0, h = 0; y.length > h; h++)T = y[h], S = d.indexOf(T, p), o.appendXtra(d.substr(p, S - p), Number(T), nt(b[h], T), "", A && "px" === d.substr(S + T.length, 2), 0 === h), p = S + T.length;
                o["xs" + o.l] += d.substr(p)
            } else o["xs" + o.l] += o.l ? " " + d : d;
            if (-1 !== r.indexOf("=") && o.data) {
                for (N = o.xs0 + o.data.s, c = 1; o.l > c; c++)N += o["xs" + c] + o.data["xn" + c];
                o.e = N + o["xs" + c]
            }
            return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
        }, dt = 9;
        for (a = ht.prototype, a.l = a.pr = 0; --dt > 0;)a["xn" + dt] = 0, a["xs" + dt] = "";
        a.xs0 = "", a._next = a._prev = a.xfirst = a.data = a.plugin = a.setRatio = a.rxp = null, a.appendXtra = function (e, t, n, r, i, s) {
            var o = this, u = o.l;
            return o["xs" + u] += s && u ? " " + e : e || "", n || 0 === u || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = r || "", u > 0 ? (o.data["xn" + u] = t + n, o.rxp["xn" + u] = i, o["xn" + u] = t, o.plugin || (o.xfirst = new ht(o, "xn" + u, t, n, o.xfirst || o, 0, o.n, i, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {s: t + n}, o.rxp = {}, o.s = t, o.c = n, o.r = i, o)) : (o["xs" + u] += t + (r || ""), o)
        };
        var vt = function (e, t) {
            t = t || {}, this.p = t.prefix ? X(e) || e : e, u[e] = u[this.p] = this, this.format = t.formatter || ft(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
        }, mt = F._registerComplexSpecialProp = function (e, t, n) {
            "object" != typeof t && (t = {parser: n});
            var r, i, s = e.split(","), o = t.defaultValue;
            for (n = n || [o], r = 0; s.length > r; r++)t.prefix = 0 === r && t.prefix, t.defaultValue = n[r] || o, i = new vt(s[r], t)
        }, gt = function (e) {
            if (!u[e]) {
                var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                mt(e, {
                    parser: function (e, n, r, i, s, o, a) {
                        var f = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[t];
                        return f ? (f._cssRegister(), u[r].parse(e, n, r, i, s, o, a)) : (U("Error: " + t + " js file not loaded."), s)
                    }
                })
            }
        };
        a = vt.prototype, a.parseComplex = function (e, t, n, r, i, s) {
            var o, u, a, f, l, c, h = this.keyword;
            if (this.multi && (M.test(n) || M.test(t) ? (u = t.replace(M, "|").split("|"), a = n.replace(M, "|").split("|")) : h && (u = [t], a = [n])), a) {
                for (f = a.length > u.length ? a.length : u.length, o = 0; f > o; o++)t = u[o] = u[o] || this.dflt, n = a[o] = a[o] || this.dflt, h && (l = t.indexOf(h), c = n.indexOf(h), l !== c && (n = -1 === c ? a : u, n[o] += " " + h));
                t = u.join(", "), n = a.join(", ")
            }
            return pt(e, this.p, t, n, this.clrs, this.dflt, r, this.pr, i, s)
        }, a.parse = function (e, t, n, r, s, o) {
            return this.parseComplex(e.style, this.format($(e, this.p, i, !1, this.dflt)), this.format(t), s, o)
        }, o.registerSpecialProp = function (e, t, n) {
            mt(e, {
                parser: function (e, r, i, s, o, u) {
                    var a = new ht(e, i, 0, 0, o, 2, i, !1, n);
                    return a.plugin = u, a.setRatio = t(e, r, s._tween, i), a
                }, priority: n
            })
        };
        var yt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), bt = X("transform"), wt = z + "transform", Et = X("transformOrigin"), St = null !== X("perspective"), xt = F.Transform = function () {
            this.skewY = 0
        }, Tt = F.getTransform = function (e, t, n, r) {
            if (e._gsTransform && n && !r)return e._gsTransform;
            var i, s, u, a, f, l, c, h, p, d, v, m, g, y = n ? e._gsTransform || new xt : new xt, b = 0 > y.scaleX, w = 2e-5, E = 1e5, S = 179.99, x = S * _, T = St ? parseFloat($(e, Et, t, !1, "0 0 0").split(" ")[2]) || y.zOrigin || 0 : 0;
            if (bt ? i = $(e, wt, t, !0) : e.currentStyle && (i = e.currentStyle.filter.match(A), i = i && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), y.x || 0, y.y || 0].join(",") : ""), i && "none" !== i && "matrix(1, 0, 0, 1, 0, 0)" !== i) {
                for (s = (i || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], u = s.length; --u > -1;)a = Number(s[u]), s[u] = (f = a - (a |= 0)) ? (0 | f * E + (0 > f ? -0.5 : .5)) / E + a : a;
                if (16 === s.length) {
                    var N = s[8], C = s[9], k = s[10], L = s[12], O = s[13], M = s[14];
                    if (y.zOrigin && (M = -y.zOrigin, L = N * M - s[12], O = C * M - s[13], M = k * M + y.zOrigin - s[14]), !n || r || null == y.rotationX) {
                        var P, H, B, j, F, I, q, R = s[0], U = s[1], z = s[2], W = s[3], X = s[4], V = s[5], J = s[6], K = s[7], Q = s[11], G = Math.atan2(J, k), Y = -x > G || G > x;
                        y.rotationX = G * D, G && (j = Math.cos(-G), F = Math.sin(-G), P = X * j + N * F, H = V * j + C * F, B = J * j + k * F, N = X * -F + N * j, C = V * -F + C * j, k = J * -F + k * j, Q = K * -F + Q * j, X = P, V = H, J = B), G = Math.atan2(N, R), y.rotationY = G * D, G && (I = -x > G || G > x, j = Math.cos(-G), F = Math.sin(-G), P = R * j - N * F, H = U * j - C * F, B = z * j - k * F, C = U * F + C * j, k = z * F + k * j, Q = W * F + Q * j, R = P, U = H, z = B), G = Math.atan2(U, V), y.rotation = G * D, G && (q = -x > G || G > x, j = Math.cos(-G), F = Math.sin(-G), R = R * j + X * F, H = U * j + V * F, V = U * -F + V * j, J = z * -F + J * j, U = H), q && Y ? y.rotation = y.rotationX = 0 : q && I ? y.rotation = y.rotationY = 0 : I && Y && (y.rotationY = y.rotationX = 0), y.scaleX = (0 | Math.sqrt(R * R + U * U) * E + .5) / E, y.scaleY = (0 | Math.sqrt(V * V + C * C) * E + .5) / E, y.scaleZ = (0 | Math.sqrt(J * J + k * k) * E + .5) / E, y.skewX = 0, y.perspective = Q ? 1 / (0 > Q ? -Q : Q) : 0, y.x = L, y.y = O, y.z = M
                    }
                } else if (!(St && !r && s.length && y.x === s[4] && y.y === s[5] && (y.rotationX || y.rotationY) || void 0 !== y.x && "none" === $(e, "display", t))) {
                    var Z = s.length >= 6, et = Z ? s[0] : 1, tt = s[1] || 0, nt = s[2] || 0, rt = Z ? s[3] : 1;
                    y.x = s[4] || 0, y.y = s[5] || 0, l = Math.sqrt(et * et + tt * tt), c = Math.sqrt(rt * rt + nt * nt), h = et || tt ? Math.atan2(tt, et) * D : y.rotation || 0, p = nt || rt ? Math.atan2(nt, rt) * D + h : y.skewX || 0, d = l - Math.abs(y.scaleX || 0), v = c - Math.abs(y.scaleY || 0), Math.abs(p) > 90 && 270 > Math.abs(p) && (b ? (l *= -1, p += 0 >= h ? 180 : -180, h += 0 >= h ? 180 : -180) : (c *= -1, p += 0 >= p ? 180 : -180)), m = (h - y.rotation) % 180, g = (p - y.skewX) % 180, (void 0 === y.skewX || d > w || -w > d || v > w || -w > v || m > -S && S > m && !1 | m * E || g > -S && S > g && !1 | g * E) && (y.scaleX = l, y.scaleY = c, y.rotation = h, y.skewX = p), St && (y.rotationX = y.rotationY = y.z = 0, y.perspective = parseFloat(o.defaultTransformPerspective) || 0, y.scaleZ = 1)
                }
                y.zOrigin = T;
                for (u in y)w > y[u] && y[u] > -w && (y[u] = 0)
            } else y = {
                x: 0,
                y: 0,
                z: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
                skewX: 0,
                perspective: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                zOrigin: 0
            };
            return n && (e._gsTransform = y), y.xPercent = y.yPercent = 0, y
        }, Nt = function (e) {
            var t, n, r = this.data, i = -r.rotation * _, s = i + r.skewX * _, o = 1e5, u = (0 | Math.cos(i) * r.scaleX * o) / o, a = (0 | Math.sin(i) * r.scaleX * o) / o, f = (0 | Math.sin(s) * -r.scaleY * o) / o, l = (0 | Math.cos(s) * r.scaleY * o) / o, c = this.t.style, h = this.t.currentStyle;
            if (h) {
                n = a, a = -f, f = -n, t = h.filter, c.filter = "";
                var p, v, m = this.t.offsetWidth, g = this.t.offsetHeight, y = "absolute" !== h.position, E = "progid:DXImageTransform.Microsoft.Matrix(M11=" + u + ", M12=" + a + ", M21=" + f + ", M22=" + l, S = r.x + m * r.xPercent / 100, x = r.y + g * r.yPercent / 100;
                if (null != r.ox && (p = (r.oxp ? .01 * m * r.ox : r.ox) - m / 2, v = (r.oyp ? .01 * g * r.oy : r.oy) - g / 2, S += p - (p * u + v * a), x += v - (p * f + v * l)), y ? (p = m / 2, v = g / 2, E += ", Dx=" + (p - (p * u + v * a) + S) + ", Dy=" + (v - (p * f + v * l) + x) + ")") : E += ", sizingMethod='auto expand')", c.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(O, E) : E + " " + t, (0 === e || 1 === e) && 1 === u && 0 === a && 0 === f && 1 === l && (y && -1 === E.indexOf("Dx=0, Dy=0") || w.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && c.removeAttribute("filter")), !y) {
                    var T, N, C, k = 8 > d ? 1 : -1;
                    for (p = r.ieOffsetX || 0, v = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > u ? -u : u) * m + (0 > a ? -a : a) * g)) / 2 + S), r.ieOffsetY = Math.round((g - ((0 > l ? -l : l) * g + (0 > f ? -f : f) * m)) / 2 + x), dt = 0; 4 > dt; dt++)N = Z[dt], T = h[N], n = -1 !== T.indexOf("px") ? parseFloat(T) : J(this.t, N, parseFloat(T), T.replace(b, "")) || 0, C = n !== r[N] ? 2 > dt ? -r.ieOffsetX : -r.ieOffsetY : 2 > dt ? p - r.ieOffsetX : v - r.ieOffsetY, c[N] = (r[N] = Math.round(n - C * (0 === dt || 2 === dt ? 1 : k))) + "px"
                }
            }
        }, Ct = F.set3DTransformRatio = function (e) {
            var t, n, r, i, s, o, u, a, f, l, c, p, d, v, m, g, y, b, w, E, S, x, T, N = this.data, C = this.t.style, k = N.rotation * _, L = N.scaleX, A = N.scaleY, O = N.scaleZ, M = N.x, D = N.y, P = N.z, H = N.perspective;
            if (!(1 !== e && 0 !== e || "auto" !== N.force3D || N.rotationY || N.rotationX || 1 !== O || H || P))return kt.call(this, e), void 0;
            if (h) {
                var B = 1e-4;
                B > L && L > -B && (L = O = 2e-5), B > A && A > -B && (A = O = 2e-5), !H || N.z || N.rotationX || N.rotationY || (H = 0)
            }
            if (k || N.skewX)b = Math.cos(k), w = Math.sin(k), t = b, s = w, N.skewX && (k -= N.skewX * _, b = Math.cos(k), w = Math.sin(k), "simple" === N.skewType && (E = Math.tan(N.skewX * _), E = Math.sqrt(1 + E * E), b *= E, w *= E)), n = -w, o = b; else {
                if (!(N.rotationY || N.rotationX || 1 !== O || H))return C[bt] = (N.xPercent || N.yPercent ? "translate(" + N.xPercent + "%," + N.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + D + "px," + P + "px)" + (1 !== L || 1 !== A ? " scale(" + L + "," + A + ")" : ""), void 0;
                t = o = 1, n = s = 0
            }
            c = 1, r = i = u = a = f = l = p = d = v = 0, m = H ? -1 / H : 0, g = N.zOrigin, y = 1e5, k = N.rotationY * _, k && (b = Math.cos(k), w = Math.sin(k), f = c * -w, d = m * -w, r = t * w, u = s * w, c *= b, m *= b, t *= b, s *= b), k = N.rotationX * _, k && (b = Math.cos(k), w = Math.sin(k), E = n * b + r * w, S = o * b + u * w, x = l * b + c * w, T = v * b + m * w, r = n * -w + r * b, u = o * -w + u * b, c = l * -w + c * b, m = v * -w + m * b, n = E, o = S, l = x, v = T), 1 !== O && (r *= O, u *= O, c *= O, m *= O), 1 !== A && (n *= A, o *= A, l *= A, v *= A), 1 !== L && (t *= L, s *= L, f *= L, d *= L), g && (p -= g, i = r * p, a = u * p, p = c * p + g), i = (E = (i += M) - (i |= 0)) ? (0 | E * y + (0 > E ? -0.5 : .5)) / y + i : i, a = (E = (a += D) - (a |= 0)) ? (0 | E * y + (0 > E ? -0.5 : .5)) / y + a : a, p = (E = (p += P) - (p |= 0)) ? (0 | E * y + (0 > E ? -0.5 : .5)) / y + p : p, C[bt] = (N.xPercent || N.yPercent ? "translate(" + N.xPercent + "%," + N.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | t * y) / y, (0 | s * y) / y, (0 | f * y) / y, (0 | d * y) / y, (0 | n * y) / y, (0 | o * y) / y, (0 | l * y) / y, (0 | v * y) / y, (0 | r * y) / y, (0 | u * y) / y, (0 | c * y) / y, (0 | m * y) / y, i, a, p, H ? 1 + -p / H : 1].join(",") + ")"
        }, kt = F.set2DTransformRatio = function (e) {
            var t, n, r, i, s, o = this.data, u = this.t, a = u.style, f = o.x, l = o.y;
            return o.rotationX || o.rotationY || o.z || o.force3D === !0 || "auto" === o.force3D && 1 !== e && 0 !== e ? (this.setRatio = Ct, Ct.call(this, e), void 0) : (o.rotation || o.skewX ? (t = o.rotation * _, n = t - o.skewX * _, r = 1e5, i = o.scaleX * r, s = o.scaleY * r, a[bt] = (o.xPercent || o.yPercent ? "translate(" + o.xPercent + "%," + o.yPercent + "%) matrix(" : "matrix(") + (0 | Math.cos(t) * i) / r + "," + (0 | Math.sin(t) * i) / r + "," + (0 | Math.sin(n) * -s) / r + "," + (0 | Math.cos(n) * s) / r + "," + f + "," + l + ")") : a[bt] = (o.xPercent || o.yPercent ? "translate(" + o.xPercent + "%," + o.yPercent + "%) matrix(" : "matrix(") + o.scaleX + ",0,0," + o.scaleY + "," + f + "," + l + ")", void 0)
        };
        mt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
            parser: function (e, t, n, r, s, u, a) {
                if (r._transform)return s;
                var f, l, c, h, p, d, v, m = r._transform = Tt(e, i, !0, a.parseTransform), g = e.style, y = 1e-6, b = yt.length, w = a, E = {};
                if ("string" == typeof w.transform && bt)c = B.style, c[bt] = w.transform, c.display = "block", c.position = "absolute", H.body.appendChild(B), f = Tt(B, null, !1), H.body.removeChild(B); else if ("object" == typeof w) {
                    if (f = {
                            scaleX: rt(null != w.scaleX ? w.scaleX : w.scale, m.scaleX),
                            scaleY: rt(null != w.scaleY ? w.scaleY : w.scale, m.scaleY),
                            scaleZ: rt(w.scaleZ, m.scaleZ),
                            x: rt(w.x, m.x),
                            y: rt(w.y, m.y),
                            z: rt(w.z, m.z),
                            xPercent: rt(w.xPercent, m.xPercent),
                            yPercent: rt(w.yPercent, m.yPercent),
                            perspective: rt(w.transformPerspective, m.perspective)
                        }, v = w.directionalRotation, null != v)if ("object" == typeof v)for (c in v)w[c] = v[c]; else w.rotation = v;
                    "string" == typeof w.x && -1 !== w.x.indexOf("%") && (f.x = 0, f.xPercent = rt(w.x, m.xPercent)), "string" == typeof w.y && -1 !== w.y.indexOf("%") && (f.y = 0, f.yPercent = rt(w.y, m.yPercent)), f.rotation = it("rotation"in w ? w.rotation : "shortRotation"in w ? w.shortRotation + "_short" : "rotationZ"in w ? w.rotationZ : m.rotation, m.rotation, "rotation", E), St && (f.rotationX = it("rotationX"in w ? w.rotationX : "shortRotationX"in w ? w.shortRotationX + "_short" : m.rotationX || 0, m.rotationX, "rotationX", E), f.rotationY = it("rotationY"in w ? w.rotationY : "shortRotationY"in w ? w.shortRotationY + "_short" : m.rotationY || 0, m.rotationY, "rotationY", E)), f.skewX = null == w.skewX ? m.skewX : it(w.skewX, m.skewX), f.skewY = null == w.skewY ? m.skewY : it(w.skewY, m.skewY), (l = f.skewY - m.skewY) && (f.skewX += l, f.rotation += l)
                }
                for (St && null != w.force3D && (m.force3D = w.force3D, d = !0), m.skewType = w.skewType || m.skewType || o.defaultSkewType, p = m.force3D || m.z || m.rotationX || m.rotationY || f.z || f.rotationX || f.rotationY || f.perspective, p || null == w.scale || (f.scaleZ = 1); --b > -1;)n = yt[b], h = f[n] - m[n], (h > y || -y > h || null != P[n]) && (d = !0, s = new ht(m, n, m[n], h, s), n in E && (s.e = E[n]), s.xs0 = 0, s.plugin = u, r._overwriteProps.push(s.n));
                return h = w.transformOrigin, (h || St && p && m.zOrigin) && (bt ? (d = !0, n = Et, h = (h || $(e, n, i, !1, "50% 50%")) + "", s = new ht(g, n, 0, 0, s, -1, "transformOrigin"), s.b = g[n], s.plugin = u, St ? (c = m.zOrigin, h = h.split(" "), m.zOrigin = (h.length > 2 && (0 === c || "0px" !== h[2]) ? parseFloat(h[2]) : c) || 0, s.xs0 = s.e = h[0] + " " + (h[1] || "50%") + " 0px", s = new ht(m, "zOrigin", 0, 0, s, -1, s.n), s.b = c, s.xs0 = s.e = m.zOrigin) : s.xs0 = s.e = h) : tt(h + "", m)), d && (r._transformType = p || 3 === this._transformType ? 3 : 2), s
            }, prefix: !0
        }), mt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), mt("borderRadius", {
            defaultValue: "0px", parser: function (e, t, n, s, o) {
                t = this.format(t);
                var u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], T = e.style;
                for (v = parseFloat(e.offsetWidth), m = parseFloat(e.offsetHeight), u = t.split(" "), a = 0; x.length > a; a++)this.p.indexOf("border") && (x[a] = X(x[a])), c = l = $(e, x[a], i, !1, "0px"), -1 !== c.indexOf(" ") && (l = c.split(" "), c = l[0], l = l[1]), h = f = u[a], p = parseFloat(c), y = c.substr((p + "").length), b = "=" === h.charAt(1), b ? (d = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), d *= parseFloat(h), g = h.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(h), g = h.substr((d + "").length)), "" === g && (g = r[n] || y), g !== y && (w = J(e, "borderLeft", p, y), E = J(e, "borderTop", p, y), "%" === g ? (c = 100 * (w / v) + "%", l = 100 * (E / m) + "%") : "em" === g ? (S = J(e, "borderLeft", 1, "em"), c = w / S + "em", l = E / S + "em") : (c = w + "px", l = E + "px"), b && (h = parseFloat(c) + d + g, f = parseFloat(l) + d + g)), o = pt(T, x[a], c + " " + l, h + " " + f, !1, "0px", o);
                return o
            }, prefix: !0, formatter: ft("0px 0px 0px 0px", !1, !0)
        }), mt("backgroundPosition", {
            defaultValue: "0 0", parser: function (e, t, n, r, s, o) {
                var u, a, f, l, c, h, p = "background-position", v = i || V(e, null), m = this.format((v ? d ? v.getPropertyValue(p + "-x") + " " + v.getPropertyValue(p + "-y") : v.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"), g = this.format(t);
                if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (h = $(e, "backgroundImage").replace(C, ""), h && "none" !== h)) {
                    for (u = m.split(" "), a = g.split(" "), j.setAttribute("src", h), f = 2; --f > -1;)m = u[f], l = -1 !== m.indexOf("%"), l !== (-1 !== a[f].indexOf("%")) && (c = 0 === f ? e.offsetWidth - j.width : e.offsetHeight - j.height, u[f] = l ? parseFloat(m) / 100 * c + "px" : 100 * (parseFloat(m) / c) + "%");
                    m = u.join(" ")
                }
                return this.parseComplex(e.style, m, g, s, o)
            }, formatter: tt
        }), mt("backgroundSize", {defaultValue: "0 0", formatter: tt}), mt("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), mt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), mt("transformStyle", {prefix: !0}), mt("backfaceVisibility", {prefix: !0}), mt("userSelect", {prefix: !0}), mt("margin", {parser: lt("marginTop,marginRight,marginBottom,marginLeft")}), mt("padding", {parser: lt("paddingTop,paddingRight,paddingBottom,paddingLeft")}), mt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (e, t, n, r, s, o) {
                var u, a, f;
                return 9 > d ? (a = e.currentStyle, f = 8 > d ? " " : ",", u = "rect(" + a.clipTop + f + a.clipRight + f + a.clipBottom + f + a.clipLeft + ")", t = this.format(t).split(",").join(f)) : (u = this.format($(e, this.p, i, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, u, t, s, o)
            }
        }), mt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), mt("autoRound,strictUnits", {
            parser: function (e, t, n, r, i) {
                return i
            }
        }), mt("border", {
            defaultValue: "0px solid #000", parser: function (e, t, n, r, s, o) {
                return this.parseComplex(e.style, this.format($(e, "borderTopWidth", i, !1, "0px") + " " + $(e, "borderTopStyle", i, !1, "solid") + " " + $(e, "borderTopColor", i, !1, "#000")), this.format(t), s, o)
            }, color: !0, formatter: function (e) {
                var t = e.split(" ");
                return t[0] + " " + (t[1] || "solid") + " " + (e.match(at) || ["#000"])[0]
            }
        }), mt("borderWidth", {parser: lt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), mt("float,cssFloat,styleFloat", {
            parser: function (e, t, n, r, i) {
                var s = e.style, o = "cssFloat"in s ? "cssFloat" : "styleFloat";
                return new ht(s, o, 0, 0, i, -1, n, !1, 0, s[o], t)
            }
        });
        var Lt = function (e) {
            var t, n = this.t, r = n.filter || $(this.data, "filter"), i = 0 | this.s + this.c * e;
            100 === i && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (n.removeAttribute("filter"), t = !$(this.data, "filter")) : (n.filter = r.replace(S, ""), t = !0)), t || (this.xn1 && (n.filter = r = r || "alpha(opacity=" + i + ")"), -1 === r.indexOf("pacity") ? 0 === i && this.xn1 || (n.filter = r + " alpha(opacity=" + i + ")") : n.filter = r.replace(w, "opacity=" + i))
        };
        mt("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (e, t, n, r, s, o) {
                var u = parseFloat($(e, "opacity", i, !1, "1")), a = e.style, f = "autoAlpha" === n;
                return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + u), f && 1 === u && "hidden" === $(e, "visibility", i) && 0 !== t && (u = 0), q ? s = new ht(a, "opacity", u, t - u, s) : (s = new ht(a, "opacity", 100 * u, 100 * (t - u), s), s.xn1 = f ? 1 : 0, a.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = e, s.plugin = o, s.setRatio = Lt), f && (s = new ht(a, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== u ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), s.xs0 = "inherit", r._overwriteProps.push(s.n), r._overwriteProps.push(n)), s
            }
        });
        var At = function (e, t) {
            t && (e.removeProperty ? ("ms" === t.substr(0, 2) && (t = "M" + t.substr(1)), e.removeProperty(t.replace(T, "-$1").toLowerCase())) : e.removeAttribute(t))
        }, Ot = function (e) {
            if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                this.t.setAttribute("class", 0 === e ? this.b : this.e);
                for (var t = this.data, n = this.t.style; t;)t.v ? n[t.p] = t.v : At(n, t.p), t = t._next;
                1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        mt("className", {
            parser: function (e, t, r, s, o, u, a) {
                var f, l, c, h, p, d = e.getAttribute("class") || "", v = e.style.cssText;
                if (o = s._classNamePT = new ht(e, r, 0, 0, o, 2), o.setRatio = Ot, o.pr = -11, n = !0, o.b = d, l = Q(e, i), c = e._gsClassPT) {
                    for (h = {}, p = c.data; p;)h[p.p] = 1, p = p._next;
                    c.setRatio(1)
                }
                return e._gsClassPT = o, o.e = "=" !== t.charAt(1) ? t : d.replace(RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), s._tween._duration && (e.setAttribute("class", o.e), f = G(e, l, Q(e), a, h), e.setAttribute("class", d), o.data = f.firstMPT, e.style.cssText = v, o = o.xfirst = s.parse(e, f.difs, o, u)), o
            }
        });
        var Mt = function (e) {
            if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var t, n, r, i, s = this.t.style, o = u.transform.parse;
                if ("all" === this.e)s.cssText = "", i = !0; else for (t = this.e.split(","), r = t.length; --r > -1;)n = t[r], u[n] && (u[n].parse === o ? i = !0 : n = "transformOrigin" === n ? Et : u[n].p), At(s, n);
                i && (At(s, bt), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (mt("clearProps", {
            parser: function (e, t, r, i, s) {
                return s = new ht(e, r, 0, 0, s, 2), s.setRatio = Mt, s.e = t, s.pr = -10, s.data = i._tween, n = !0, s
            }
        }), a = "bezier,throwProps,physicsProps,physics2D".split(","), dt = a.length; dt--;)gt(a[dt]);
        a = o.prototype, a._firstPT = null, a._onInitTween = function (e, t, u) {
            if (!e.nodeType)return !1;
            this._target = e, this._tween = u, this._vars = t, f = t.autoRound, n = !1, r = t.suffixMap || o.suffixMap, i = V(e, ""), s = this._overwriteProps;
            var a, h, d, v, m, g, y, b, w, S = e.style;
            if (l && "" === S.zIndex && (a = $(e, "zIndex", i), ("auto" === a || "" === a) && this._addLazySet(S, "zIndex", 0)), "string" == typeof t && (v = S.cssText, a = Q(e, i), S.cssText = v + ";" + t, a = G(e, a, Q(e)).difs, !q && E.test(t) && (a.opacity = parseFloat(RegExp.$1)), t = a, S.cssText = v), this._firstPT = h = this.parse(e, t, null), this._transformType) {
                for (w = 3 === this._transformType, bt ? c && (l = !0, "" === S.zIndex && (y = $(e, "zIndex", i), ("auto" === y || "" === y) && this._addLazySet(S, "zIndex", 0)), p && this._addLazySet(S, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : S.zoom = 1, d = h; d && d._next;)d = d._next;
                b = new ht(e, "transform", 0, 0, null, 2), this._linkCSSP(b, null, d), b.setRatio = w && St ? Ct : bt ? kt : Nt, b.data = this._transform || Tt(e, i, !0), s.pop()
            }
            if (n) {
                for (; h;) {
                    for (g = h._next, d = v; d && d.pr > h.pr;)d = d._next;
                    (h._prev = d ? d._prev : m) ? h._prev._next = h : v = h, (h._next = d) ? d._prev = h : m = h, h = g
                }
                this._firstPT = v
            }
            return !0
        }, a.parse = function (e, t, n, s) {
            var o, a, l, c, h, p, d, v, m, g, y = e.style;
            for (o in t)p = t[o], a = u[o], a ? n = a.parse(e, p, o, this, n, s, t) : (h = $(e, o, i) + "", m = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || m && x.test(p) ? (m || (p = ut(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), n = pt(y, o, h, p, !0, "transparent", n, 0, s)) : !m || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (l = parseFloat(h), d = l || 0 === l ? h.substr((l + "").length) : "", ("" === h || "auto" === h) && ("width" === o || "height" === o ? (l = et(e, o, i), d = "px") : "left" === o || "top" === o ? (l = K(e, o, i), d = "px") : (l = "opacity" !== o ? 0 : 1, d = "")), g = m && "=" === p.charAt(1), g ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), v = p.replace(b, "")) : (c = parseFloat(p), v = m ? p.substr((c + "").length) || "" : ""), "" === v && (v = o in r ? r[o] : d), p = c || 0 === c ? (g ? c + l : c) + v : t[o], d !== v && "" !== v && (c || 0 === c) && l && (l = J(e, o, l, d), "%" === v ? (l /= J(e, o, 100, "%") / 100, t.strictUnits !== !0 && (h = l + "%")) : "em" === v ? l /= J(e, o, 1, "em") : "px" !== v && (c = J(e, o, c, v), v = "px"), g && (c || 0 === c) && (p = c + l + v)), g && (c += l), !l && 0 !== l || !c && 0 !== c ? void 0 !== y[o] && (p || "NaN" != p + "" && null != p) ? (n = new ht(y, o, c || l || 0, 0, n, -1, o, !1, 0, h, p), n.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : h) : U("invalid " + o + " tween value: " + t[o]) : (n = new ht(y, o, l, c - l, n, 0, o, f !== !1 && ("px" === v || "zIndex" === o), 0, h, p), n.xs0 = v)) : n = pt(y, o, h, p, !0, null, n, 0, s)), s && n && !n.plugin && (n.plugin = s);
            return n
        }, a.setRatio = function (e) {
            var t, n, r, i = this._firstPT, s = 1e-6;
            if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -0.000001)for (; i;) {
                if (t = i.c * e + i.s, i.r ? t = Math.round(t) : s > t && t > -s && (t = 0), i.type)if (1 === i.type)if (r = i.l, 2 === r)i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2; else if (3 === r)i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3; else if (4 === r)i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4; else if (5 === r)i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4 + i.xn4 + i.xs5; else {
                    for (n = i.xs0 + t + i.xs1, r = 1; i.l > r; r++)n += i["xn" + r] + i["xs" + (r + 1)];
                    i.t[i.p] = n
                } else-1 === i.type ? i.t[i.p] = i.xs0 : i.setRatio && i.setRatio(e); else i.t[i.p] = t + i.xs0;
                i = i._next
            } else for (; i;)2 !== i.type ? i.t[i.p] = i.b : i.setRatio(e), i = i._next; else for (; i;)2 !== i.type ? i.t[i.p] = i.e : i.setRatio(e), i = i._next
        }, a._enableTransforms = function (e) {
            this._transformType = e || 3 === this._transformType ? 3 : 2, this._transform = this._transform || Tt(this._target, i, !0)
        };
        var _t = function () {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        a._addLazySet = function (e, t, n) {
            var r = this._firstPT = new ht(e, t, 0, 0, this._firstPT, 2);
            r.e = n, r.setRatio = _t, r.data = this
        }, a._linkCSSP = function (e, t, n, r) {
            return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, r = !0), n ? n._next = e : r || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = n), e
        }, a._kill = function (t) {
            var n, r, i, s = t;
            if (t.autoAlpha || t.alpha) {
                s = {};
                for (r in t)s[r] = t[r];
                s.opacity = 1, s.autoAlpha && (s.visibility = 1)
            }
            return t.className && (n = this._classNamePT) && (i = n.xfirst, i && i._prev ? this._linkCSSP(i._prev, n._next, i._prev._prev) : i === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, i._prev), this._classNamePT = null), e.prototype._kill.call(this, s)
        };
        var Dt = function (e, t, n) {
            var r, i, s, o;
            if (e.slice)for (i = e.length; --i > -1;)Dt(e[i], t, n); else for (r = e.childNodes, i = r.length; --i > -1;)s = r[i], o = s.type, s.style && (t.push(Q(s)), n && n.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Dt(s, t, n)
        };
        return o.cascadeTo = function (e, n, r) {
            var i, s, o, u = t.to(e, n, r), a = [u], f = [], l = [], c = [], h = t._internals.reservedProps;
            for (e = u._targets || u.target, Dt(e, f, c), u.render(n, !0), Dt(e, l), u.render(0, !0), u._enabled(!0), i = c.length; --i > -1;)if (s = G(c[i], f[i], l[i]), s.firstMPT) {
                s = s.difs;
                for (o in r)h[o] && (s[o] = r[o]);
                a.push(t.to(c[i], n, s))
            }
            return a
        }, e.activate([o]), o
    }, !0), function () {
        var e = _gsScope._gsDefine.plugin({
            propName: "roundProps", priority: -1, API: 2, init: function (e, t, n) {
                return this._tween = n, !0
            }
        }), t = e.prototype;
        t._onInitAllProps = function () {
            for (var e, t, n, r = this._tween, i = r.vars.roundProps instanceof Array ? r.vars.roundProps : r.vars.roundProps.split(","), s = i.length, o = {}, u = r._propLookup.roundProps; --s > -1;)o[i[s]] = 1;
            for (s = i.length; --s > -1;)for (e = i[s], t = r._firstPT; t;)n = t._next, t.pg ? t.t._roundProps(o, !0) : t.n === e && (this._add(t.t, e, t.s, t.c), n && (n._prev = t._prev), t._prev ? t._prev._next = n : r._firstPT === t && (r._firstPT = n), t._next = t._prev = null, r._propLookup[e] = u), t = n;
            return !1
        }, t._add = function (e, t, n, r) {
            this._addTween(e, t, n, n + r, t, !0), this._overwriteProps.push(t)
        }
    }(), _gsScope._gsDefine.plugin({
        propName: "attr", API: 2, version: "0.3.3", init: function (e, t) {
            var n, r, i;
            if ("function" != typeof e.setAttribute)return !1;
            this._target = e, this._proxy = {}, this._start = {}, this._end = {};
            for (n in t)this._start[n] = this._proxy[n] = r = e.getAttribute(n), i = this._addTween(this._proxy, n, parseFloat(r), t[n], n), this._end[n] = i ? i.s + i.c : t[n], this._overwriteProps.push(n);
            return !0
        }, set: function (e) {
            this._super.setRatio.call(this, e);
            for (var t, n = this._overwriteProps, r = n.length, i = 1 === e ? this._end : e ? this._proxy : this._start; --r > -1;)t = n[r], this._target.setAttribute(t, i[t] + "")
        }
    }), _gsScope._gsDefine.plugin({
        propName: "directionalRotation", version: "0.2.1", API: 2, init: function (e, t) {
            "object" != typeof t && (t = {rotation: t}), this.finals = {};
            var n, r, i, s, o, u, a = t.useRadians === !0 ? 2 * Math.PI : 360, f = 1e-6;
            for (n in t)"useRadians" !== n && (u = (t[n] + "").split("_"), r = u[0], i = parseFloat("function" != typeof e[n] ? e[n] : e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), s = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? i + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, o = s - i, u.length && (r = u.join("_"), -1 !== r.indexOf("short") && (o %= a, o !== o % (a / 2) && (o = 0 > o ? o + a : o - a)), -1 !== r.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * a) % a - (0 | o / a) * a : -1 !== r.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * a) % a - (0 | o / a) * a)), (o > f || -f > o) && (this._addTween(e, n, i, i + o, n), this._overwriteProps.push(n)));
            return !0
        }, set: function (e) {
            var t;
            if (1 !== e)this._super.setRatio.call(this, e); else for (t = this._firstPT; t;)t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
        }
    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (e) {
        var t, n, r, i = _gsScope.GreenSockGlobals || _gsScope, s = i.com.greensock, o = 2 * Math.PI, u = Math.PI / 2, a = s._class, f = function (t, n) {
            var r = a("easing." + t, function () {
            }, !0), i = r.prototype = new e;
            return i.constructor = r, i.getRatio = n, r
        }, l = e.register || function () {
            }, c = function (e, t, n, r) {
            var i = a("easing." + e, {easeOut: new t, easeIn: new n, easeInOut: new r}, !0);
            return l(i, e), i
        }, h = function (e, t, n) {
            this.t = e, this.v = t, n && (this.next = n, n.prev = this, this.c = n.v - t, this.gap = n.t - e)
        }, p = function (t, n) {
            var r = a("easing." + t, function (e) {
                this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
            }, !0), i = r.prototype = new e;
            return i.constructor = r, i.getRatio = n, i.config = function (e) {
                return new r(e)
            }, r
        }, d = c("Back", p("BackOut", function (e) {
            return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
        }), p("BackIn", function (e) {
            return e * e * ((this._p1 + 1) * e - this._p1)
        }), p("BackInOut", function (e) {
            return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
        })), v = a("easing.SlowMo", function (e, t, n) {
            t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = n === !0
        }, !0), m = v.prototype = new e;
        return m.constructor = v, m.getRatio = function (e) {
            var t = e + (.5 - e) * this._p;
            return this._p1 > e ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
        }, v.ease = new v(.7, .7), m.config = v.config = function (e, t, n) {
            return new v(e, t, n)
        }, t = a("easing.SteppedEase", function (e) {
            e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
        }, !0), m = t.prototype = new e, m.constructor = t, m.getRatio = function (e) {
            return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
        }, m.config = t.config = function (e) {
            return new t(e)
        }, n = a("easing.RoughEase", function (t) {
            t = t || {};
            for (var n, r, i, s, o, u, a = t.taper || "none", f = [], l = 0, c = 0 | (t.points || 20), p = c, d = t.randomize !== !1, v = t.clamp === !0, m = t.template instanceof e ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --p > -1;)n = d ? Math.random() : 1 / c * p, r = m ? m.getRatio(n) : n, "none" === a ? i = g : "out" === a ? (s = 1 - n, i = s * s * g) : "in" === a ? i = n * n * g : .5 > n ? (s = 2 * n, i = .5 * s * s * g) : (s = 2 * (1 - n), i = .5 * s * s * g), d ? r += Math.random() * i - .5 * i : p % 2 ? r += .5 * i : r -= .5 * i, v && (r > 1 ? r = 1 : 0 > r && (r = 0)), f[l++] = {
                x: n,
                y: r
            };
            for (f.sort(function (e, t) {
                return e.x - t.x
            }), u = new h(1, 1, null), p = c; --p > -1;)o = f[p], u = new h(o.x, o.y, u);
            this._prev = new h(0, 0, 0 !== u.t ? u : u.next)
        }, !0), m = n.prototype = new e, m.constructor = n, m.getRatio = function (e) {
            var t = this._prev;
            if (e > t.t) {
                for (; t.next && e >= t.t;)t = t.next;
                t = t.prev
            } else for (; t.prev && t.t >= e;)t = t.prev;
            return this._prev = t, t.v + (e - t.t) / t.gap * t.c
        }, m.config = function (e) {
            return new n(e)
        }, n.ease = new n, c("Bounce", f("BounceOut", function (e) {
            return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }), f("BounceIn", function (e) {
            return 1 / 2.75 > (e = 1 - e) ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }), f("BounceInOut", function (e) {
            var t = .5 > e;
            return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
        })), c("Circ", f("CircOut", function (e) {
            return Math.sqrt(1 - (e -= 1) * e)
        }), f("CircIn", function (e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }), f("CircInOut", function (e) {
            return 1 > (e *= 2) ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        })), r = function (t, n, r) {
            var i = a("easing." + t, function (e, t) {
                this._p1 = e || 1, this._p2 = t || r, this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0)
            }, !0), s = i.prototype = new e;
            return s.constructor = i, s.getRatio = n, s.config = function (e, t) {
                return new i(e, t)
            }, i
        }, c("Elastic", r("ElasticOut", function (e) {
            return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * o / this._p2) + 1
        }, .3), r("ElasticIn", function (e) {
            return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2))
        }, .3), r("ElasticInOut", function (e) {
            return 1 > (e *= 2) ? -0.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2) + 1
        }, .45)), c("Expo", f("ExpoOut", function (e) {
            return 1 - Math.pow(2, -10 * e)
        }), f("ExpoIn", function (e) {
            return Math.pow(2, 10 * (e - 1)) - .001
        }), f("ExpoInOut", function (e) {
            return 1 > (e *= 2) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        })), c("Sine", f("SineOut", function (e) {
            return Math.sin(e * u)
        }), f("SineIn", function (e) {
            return -Math.cos(e * u) + 1
        }), f("SineInOut", function (e) {
            return -0.5 * (Math.cos(Math.PI * e) - 1)
        })), a("easing.EaseLookup", {
            find: function (t) {
                return e.map[t]
            }
        }, !0), l(i.SlowMo, "SlowMo", "ease,"), l(n, "RoughEase", "ease,"), l(t, "SteppedEase", "ease,"), d
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (e, t) {
    var n = e.GreenSockGlobals = e.GreenSockGlobals || e;
    if (!n.TweenLite) {
        var r, i, s, o, u, a = function (e) {
            var t, r = e.split("."), i = n;
            for (t = 0; r.length > t; t++)i[r[t]] = i = i[r[t]] || {};
            return i
        }, f = a("com.greensock"), l = 1e-10, c = function (e) {
            var t, n = [], r = e.length;
            for (t = 0; t !== r; n.push(e[t++]));
            return n
        }, h = function () {
        }, p = function () {
            var e = Object.prototype.toString, t = e.call([]);
            return function (n) {
                return null != n && (n instanceof Array || "object" == typeof n && !!n.push && e.call(n) === t)
            }
        }(), d = {}, v = function (r, i, s, o) {
            this.sc = d[r] ? d[r].sc : [], d[r] = this, this.gsClass = null, this.func = s;
            var u = [];
            this.check = function (f) {
                for (var l, c, h, p, m = i.length, g = m; --m > -1;)(l = d[i[m]] || new v(i[m], [])).gsClass ? (u[m] = l.gsClass, g--) : f && l.sc.push(this);
                if (0 === g && s)for (c = ("com.greensock." + r).split("."), h = c.pop(), p = a(c.join("."))[h] = this.gsClass = s.apply(s, u), o && (n[h] = p, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function () {
                    return p
                }) : r === t && "undefined" != typeof module && module.exports && (module.exports = p)), m = 0; this.sc.length > m; m++)this.sc[m].check()
            }, this.check(!0)
        }, m = e._gsDefine = function (e, t, n, r) {
            return new v(e, t, n, r)
        }, g = f._class = function (e, t, n) {
            return t = t || function () {
                }, m(e, [], function () {
                return t
            }, n), t
        };
        m.globals = n;
        var y = [0, 0, 1, 1], b = [], w = g("easing.Ease", function (e, t, n, r) {
            this._func = e, this._type = n || 0, this._power = r || 0, this._params = t ? y.concat(t) : y
        }, !0), E = w.map = {}, S = w.register = function (e, t, n, r) {
            for (var i, s, o, u, a = t.split(","), l = a.length, c = (n || "easeIn,easeOut,easeInOut").split(","); --l > -1;)for (s = a[l], i = r ? g("easing." + s, null, !0) : f.easing[s] || {}, o = c.length; --o > -1;)u = c[o], E[s + "." + u] = E[u + s] = i[u] = e.getRatio ? e : e[u] || new e
        };
        for (s = w.prototype, s._calcEnd = !1, s.getRatio = function (e) {
            if (this._func)return this._params[0] = e, this._func.apply(null, this._params);
            var t = this._type, n = this._power, r = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
            return 1 === n ? r *= r : 2 === n ? r *= r * r : 3 === n ? r *= r * r * r : 4 === n && (r *= r * r * r * r), 1 === t ? 1 - r : 2 === t ? r : .5 > e ? r / 2 : 1 - r / 2
        }, r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], i = r.length; --i > -1;)s = r[i] + ",Power" + i, S(new w(null, null, 1, i), s, "easeOut", !0), S(new w(null, null, 2, i), s, "easeIn" + (0 === i ? ",easeNone" : "")), S(new w(null, null, 3, i), s, "easeInOut");
        E.linear = f.easing.Linear.easeIn, E.swing = f.easing.Quad.easeInOut;
        var x = g("events.EventDispatcher", function (e) {
            this._listeners = {}, this._eventTarget = e || this
        });
        s = x.prototype, s.addEventListener = function (e, t, n, r, i) {
            i = i || 0;
            var s, a, f = this._listeners[e], l = 0;
            for (null == f && (this._listeners[e] = f = []), a = f.length; --a > -1;)s = f[a], s.c === t && s.s === n ? f.splice(a, 1) : 0 === l && i > s.pr && (l = a + 1);
            f.splice(l, 0, {c: t, s: n, up: r, pr: i}), this !== o || u || o.wake()
        }, s.removeEventListener = function (e, t) {
            var n, r = this._listeners[e];
            if (r)for (n = r.length; --n > -1;)if (r[n].c === t)return r.splice(n, 1), void 0
        }, s.dispatchEvent = function (e) {
            var t, n, r, i = this._listeners[e];
            if (i)for (t = i.length, n = this._eventTarget; --t > -1;)r = i[t], r.up ? r.c.call(r.s || n, {
                type: e,
                target: n
            }) : r.c.call(r.s || n)
        };
        var T = e.requestAnimationFrame, N = e.cancelAnimationFrame, C = Date.now || function () {
                return (new Date).getTime()
            }, k = C();
        for (r = ["ms", "moz", "webkit", "o"], i = r.length; --i > -1 && !T;)T = e[r[i] + "RequestAnimationFrame"], N = e[r[i] + "CancelAnimationFrame"] || e[r[i] + "CancelRequestAnimationFrame"];
        g("Ticker", function (e, t) {
            var n, r, i, s, a, f = this, c = C(), p = t !== !1 && T, d = 500, v = 33, m = function (e) {
                var t, o, u = C() - k;
                u > d && (c += u - v), k += u, f.time = (k - c) / 1e3, t = f.time - a, (!n || t > 0 || e === !0) && (f.frame++, a += t + (t >= s ? .004 : s - t), o = !0), e !== !0 && (i = r(m)), o && f.dispatchEvent("tick")
            };
            x.call(f), f.time = f.frame = 0, f.tick = function () {
                m(!0)
            }, f.lagSmoothing = function (e, t) {
                d = e || 1 / l, v = Math.min(t, d, 0)
            }, f.sleep = function () {
                null != i && (p && N ? N(i) : clearTimeout(i), r = h, i = null, f === o && (u = !1))
            }, f.wake = function () {
                null !== i ? f.sleep() : f.frame > 10 && (k = C() - d + 5), r = 0 === n ? h : p && T ? T : function (e) {
                    return setTimeout(e, 0 | 1e3 * (a - f.time) + 1)
                }, f === o && (u = !0), m(2)
            }, f.fps = function (e) {
                return arguments.length ? (n = e, s = 1 / (n || 60), a = this.time + s, f.wake(), void 0) : n
            }, f.useRAF = function (e) {
                return arguments.length ? (f.sleep(), p = e, f.fps(n), void 0) : p
            }, f.fps(e), setTimeout(function () {
                p && (!i || 5 > f.frame) && f.useRAF(!1)
            }, 1500)
        }), s = f.Ticker.prototype = new f.events.EventDispatcher, s.constructor = f.Ticker;
        var L = g("core.Animation", function (e, t) {
            if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, z) {
                u || o.wake();
                var n = this.vars.useFrames ? U : z;
                n.add(this, n._time), this.vars.paused && this.paused(!0)
            }
        });
        o = L.ticker = new f.Ticker, s = L.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
        var A = function () {
            u && C() - k > 2e3 && o.wake(), setTimeout(A, 2e3)
        };
        A(), s.play = function (e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
        }, s.pause = function (e, t) {
            return null != e && this.seek(e, t), this.paused(!0)
        }, s.resume = function (e, t) {
            return null != e && this.seek(e, t), this.paused(!1)
        }, s.seek = function (e, t) {
            return this.totalTime(Number(e), t !== !1)
        }, s.restart = function (e, t) {
            return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
        }, s.reverse = function (e, t) {
            return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
        }, s.render = function () {
        }, s.invalidate = function () {
            return this
        }, s.isActive = function () {
            var e, t = this._timeline, n = this._startTime;
            return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= n && n + this.totalDuration() / this._timeScale > e
        }, s._enabled = function (e, t) {
            return u || o.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
        }, s._kill = function () {
            return this._enabled(!1, !1)
        }, s.kill = function (e, t) {
            return this._kill(e, t), this
        }, s._uncache = function (e) {
            for (var t = e ? this : this.timeline; t;)t._dirty = !0, t = t.timeline;
            return this
        }, s._swapSelfInParams = function (e) {
            for (var t = e.length, n = e.concat(); --t > -1;)"{self}" === e[t] && (n[t] = this);
            return n
        }, s.eventCallback = function (e, t, n, r) {
            if ("on" === (e || "").substr(0, 2)) {
                var i = this.vars;
                if (1 === arguments.length)return i[e];
                null == t ? delete i[e] : (i[e] = t, i[e + "Params"] = p(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, i[e + "Scope"] = r), "onUpdate" === e && (this._onUpdate = t)
            }
            return this
        }, s.delay = function (e) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
        }, s.duration = function (e) {
            return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, s.totalDuration = function (e) {
            return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
        }, s.time = function (e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
        }, s.totalTime = function (e, t, n) {
            if (u || o.wake(), !arguments.length)return this._totalTime;
            if (this._timeline) {
                if (0 > e && !n && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var r = this._totalDuration, i = this._timeline;
                    if (e > r && !n && (e = r), this._startTime = (this._paused ? this._pauseTime : i._time) - (this._reversed ? r - e : e) / this._timeScale, i._dirty || this._uncache(!1), i._timeline)for (; i._timeline;)i._timeline._time !== (i._startTime + i._totalTime) / i._timeScale && i.totalTime(i._totalTime, !0), i = i._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (this.render(e, t, !1), P.length && W())
            }
            return this
        }, s.progress = s.totalProgress = function (e, t) {
            return arguments.length ? this.totalTime(this.duration() * e, t) : this._time / this.duration()
        }, s.startTime = function (e) {
            return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
        }, s.timeScale = function (e) {
            if (!arguments.length)return this._timeScale;
            if (e = e || l, this._timeline && this._timeline.smoothChildTiming) {
                var t = this._pauseTime, n = t || 0 === t ? t : this._timeline.totalTime();
                this._startTime = n - (n - this._startTime) * this._timeScale / e
            }
            return this._timeScale = e, this._uncache(!1)
        }, s.reversed = function (e) {
            return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, s.paused = function (e) {
            if (!arguments.length)return this._paused;
            if (e != this._paused && this._timeline) {
                u || e || o.wake();
                var t = this._timeline, n = t.rawTime(), r = n - this._pauseTime;
                !e && t.smoothChildTiming && (this._startTime += r, this._uncache(!1)), this._pauseTime = e ? n : null, this._paused = e, this._active = this.isActive(), !e && 0 !== r && this._initted && this.duration() && this.render(t.smoothChildTiming ? this._totalTime : (n - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !e && this._enabled(!0, !1), this
        };
        var O = g("core.SimpleTimeline", function (e) {
            L.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        s = O.prototype = new L, s.constructor = O, s.kill()._gc = !1, s._first = s._last = null, s._sortChildren = !1, s.add = s.insert = function (e, t) {
            var n, r;
            if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), n = this._last, this._sortChildren)for (r = e._startTime; n && n._startTime > r;)n = n._prev;
            return n ? (e._next = n._next, n._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = n, this._timeline && this._uncache(!0), this
        }, s._remove = function (e, t) {
            return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, this._timeline && this._uncache(!0)), this
        }, s.render = function (e, t, n) {
            var r, i = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = e; i;)r = i._next, (i._active || e >= i._startTime && !i._paused) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)), i = r
        }, s.rawTime = function () {
            return u || o.wake(), this._totalTime
        };
        var M = g("TweenLite", function (t, n, r) {
            if (L.call(this, n, r), this.render = M.prototype.render, null == t)throw"Cannot tween a null target.";
            this.target = t = "string" != typeof t ? t : M.selector(t) || t;
            var i, s, o, u = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType), a = this.vars.overwrite;
            if (this._overwrite = a = null == a ? R[M.defaultOverwrite] : "number" == typeof a ? a >> 0 : R[a], (u || t instanceof Array || t.push && p(t)) && "number" != typeof t[0])for (this._targets = o = c(t), this._propLookup = [], this._siblings = [], i = 0; o.length > i; i++)s = o[i], s ? "string" != typeof s ? s.length && s !== e && s[0] && (s[0] === e || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(i--, 1), this._targets = o = o.concat(c(s))) : (this._siblings[i] = X(s, this, !1), 1 === a && this._siblings[i].length > 1 && V(s, this, null, 1, this._siblings[i])) : (s = o[i--] = M.selector(s), "string" == typeof s && o.splice(i + 1, 1)) : o.splice(i--, 1); else this._propLookup = {}, this._siblings = X(t, this, !1), 1 === a && this._siblings.length > 1 && V(t, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -l, this.render(-this._delay))
        }, !0), _ = function (t) {
            return t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
        }, D = function (e, t) {
            var n, r = {};
            for (n in e)q[n] || n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!j[n] || j[n] && j[n]._autoCSS) || (r[n] = e[n], delete e[n]);
            e.css = r
        };
        s = M.prototype = new L, s.constructor = M, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, M.version = "1.13.1", M.defaultEase = s._ease = new w(null, null, 1, 1), M.defaultOverwrite = "auto", M.ticker = o, M.autoSleep = !0, M.lagSmoothing = function (e, t) {
            o.lagSmoothing(e, t)
        }, M.selector = e.$ || e.jQuery || function (t) {
                var n = e.$ || e.jQuery;
                return n ? (M.selector = n, n(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
        var P = [], H = {}, B = M._internals = {
            isArray: p,
            isSelector: _,
            lazyTweens: P
        }, j = M._plugins = {}, F = B.tweenLookup = {}, I = 0, q = B.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1
        }, R = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }, U = L._rootFramesTimeline = new O, z = L._rootTimeline = new O, W = B.lazyRender = function () {
            var e = P.length;
            for (H = {}; --e > -1;)r = P[e], r && r._lazy !== !1 && (r.render(r._lazy, !1, !0), r._lazy = !1);
            P.length = 0
        };
        z._startTime = o.time, U._startTime = o.frame, z._active = U._active = !0, setTimeout(W, 1), L._updateRoot = M.render = function () {
            var e, t, n;
            if (P.length && W(), z.render((o.time - z._startTime) * z._timeScale, !1, !1), U.render((o.frame - U._startTime) * U._timeScale, !1, !1), P.length && W(), !(o.frame % 120)) {
                for (n in F) {
                    for (t = F[n].tweens, e = t.length; --e > -1;)t[e]._gc && t.splice(e, 1);
                    0 === t.length && delete F[n]
                }
                if (n = z._first, (!n || n._paused) && M.autoSleep && !U._first && 1 === o._listeners.tick.length) {
                    for (; n && n._paused;)n = n._next;
                    n || o.sleep()
                }
            }
        }, o.addEventListener("tick", L._updateRoot);
        var X = function (e, t, n) {
            var r, i, s = e._gsTweenID;
            if (F[s || (e._gsTweenID = s = "t" + I++)] || (F[s] = {
                    target: e,
                    tweens: []
                }), t && (r = F[s].tweens, r[i = r.length] = t, n))for (; --i > -1;)r[i] === t && r.splice(i, 1);
            return F[s].tweens
        }, V = function (e, t, n, r, i) {
            var s, o, u, a;
            if (1 === r || r >= 4) {
                for (a = i.length, s = 0; a > s; s++)if ((u = i[s]) !== t)u._gc || u._enabled(!1, !1) && (o = !0); else if (5 === r)break;
                return o
            }
            var f, c = t._startTime + l, h = [], p = 0, d = 0 === t._duration;
            for (s = i.length; --s > -1;)(u = i[s]) === t || u._gc || u._paused || (u._timeline !== t._timeline ? (f = f || $(t, 0, d), 0 === $(u, f, d) && (h[p++] = u)) : c >= u._startTime && u._startTime + u.totalDuration() / u._timeScale > c && ((d || !u._initted) && 2e-10 >= c - u._startTime || (h[p++] = u)));
            for (s = p; --s > -1;)u = h[s], 2 === r && u._kill(n, e) && (o = !0), (2 !== r || !u._firstPT && u._initted) && u._enabled(!1, !1) && (o = !0);
            return o
        }, $ = function (e, t, n) {
            for (var r = e._timeline, i = r._timeScale, s = e._startTime; r._timeline;) {
                if (s += r._startTime, i *= r._timeScale, r._paused)return -100;
                r = r._timeline
            }
            return s /= i, s > t ? s - t : n && s === t || !e._initted && 2 * l > s - t ? l : (s += e.totalDuration() / e._timeScale / i) > t + l ? 0 : s - t - l
        };
        s._init = function () {
            var e, t, n, r, i, s = this.vars, o = this._overwrittenProps, u = this._duration, a = !!s.immediateRender, f = s.ease;
            if (s.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), i = {};
                for (r in s.startAt)i[r] = s.startAt[r];
                if (i.overwrite = !1, i.immediateRender = !0, i.lazy = a && s.lazy !== !1, i.startAt = i.delay = null, this._startAt = M.to(this.target, 0, i), a)if (this._time > 0)this._startAt = null; else if (0 !== u)return
            } else if (s.runBackwards && 0 !== u)if (this._startAt)this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                n = {};
                for (r in s)q[r] && "autoCSS" !== r || (n[r] = s[r]);
                if (n.overwrite = 0, n.data = "isFromStart", n.lazy = a && s.lazy !== !1, n.immediateRender = a, this._startAt = M.to(this.target, 0, n), a) {
                    if (0 === this._time)return
                } else this._startAt._init(), this._startAt._enabled(!1)
            }
            if (this._ease = f = f ? f instanceof w ? f : "function" == typeof f ? new w(f, s.easeParams) : E[f] || M.defaultEase : M.defaultEase, s.easeParams instanceof Array && f.config && (this._ease = f.config.apply(f, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)for (e = this._targets.length; --e > -1;)this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], o ? o[e] : null) && (t = !0); else t = this._initProps(this.target, this._propLookup, this._siblings, o);
            if (t && M._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)for (n = this._firstPT; n;)n.s += n.c, n.c = -n.c, n = n._next;
            this._onUpdate = s.onUpdate, this._initted = !0
        }, s._initProps = function (t, n, r, i) {
            var s, o, u, a, f, l;
            if (null == t)return !1;
            H[t._gsTweenID] && W(), this.vars.css || t.style && t !== e && t.nodeType && j.css && this.vars.autoCSS !== !1 && D(this.vars, t);
            for (s in this.vars) {
                if (l = this.vars[s], q[s])l && (l instanceof Array || l.push && p(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[s] = l = this._swapSelfInParams(l, this)); else if (j[s] && (a = new j[s])._onInitTween(t, this.vars[s], this)) {
                    for (this._firstPT = f = {
                        _next: this._firstPT,
                        t: a,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: s,
                        pg: !0,
                        pr: a._priority
                    }, o = a._overwriteProps.length; --o > -1;)n[a._overwriteProps[o]] = this._firstPT;
                    (a._priority || a._onInitAllProps) && (u = !0), (a._onDisable || a._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = n[s] = f = {
                    _next: this._firstPT,
                    t: t,
                    p: s,
                    f: "function" == typeof t[s],
                    n: s,
                    pg: !1,
                    pr: 0
                }, f.s = f.f ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), f.c = "string" == typeof l && "=" === l.charAt(1) ? parseInt(l.charAt(0) + "1", 10) * Number(l.substr(2)) : Number(l) - f.s || 0;
                f && f._next && (f._next._prev = f)
            }
            return i && this._kill(i, t) ? this._initProps(t, n, r, i) : this._overwrite > 1 && this._firstPT && r.length > 1 && V(t, this, n, this._overwrite, r) ? (this._kill(n, t), this._initProps(t, n, r, i)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (H[t._gsTweenID] = !0), u)
        }, s.render = function (e, t, n) {
            var r, i, s, o, u = this._time, a = this._duration, f = this._rawPrevTime;
            if (e >= a)this._totalTime = this._time = a, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, i = "onComplete"), 0 === a && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (e = 0), (0 === e || 0 > f || f === l) && f !== e && (n = !0, f > l && (i = "onReverseComplete")), this._rawPrevTime = o = !t || e || f === e ? e : l); else if (1e-7 > e)this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== u || 0 === a && f > 0 && f !== l) && (i = "onReverseComplete", r = this._reversed), 0 > e ? (this._active = !1, 0 === a && (this._initted || !this.vars.lazy || n) && (f >= 0 && (n = !0), this._rawPrevTime = o = !t || e || f === e ? e : l)) : this._initted || (n = !0); else if (this._totalTime = this._time = e, this._easeType) {
                var c = e / a, h = this._easeType, p = this._easePower;
                (1 === h || 3 === h && c >= .5) && (c = 1 - c), 3 === h && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), this.ratio = 1 === h ? 1 - c : 2 === h ? c : .5 > e / a ? c / 2 : 1 - c / 2
            } else this.ratio = this._ease.getRatio(e / a);
            if (this._time !== u || n) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc)return;
                    if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = this._totalTime = u, this._rawPrevTime = f, P.push(this), this._lazy = e, void 0;
                    this._time && !r ? this.ratio = this._ease.getRatio(this._time / a) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== u && e >= 0 && (this._active = !0), 0 === u && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : i || (i = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === a) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || b))), s = this._firstPT; s;)s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, n), t || (this._time !== u || r) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || b)), i && (!this._gc || n) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[i] && this.vars[i].apply(this.vars[i + "Scope"] || this, this.vars[i + "Params"] || b), 0 === a && this._rawPrevTime === l && o !== l && (this._rawPrevTime = 0))
            }
        }, s._kill = function (e, t) {
            if ("all" === e && (e = null), null != e || null != t && t !== this.target) {
                t = "string" != typeof t ? t || this._targets || this.target : M.selector(t) || t;
                var n, r, i, s, o, u, a, f;
                if ((p(t) || _(t)) && "number" != typeof t[0])for (n = t.length; --n > -1;)this._kill(e, t[n]) && (u = !0); else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)if (t === this._targets[n]) {
                            o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                    } else {
                        if (t !== this.target)return !1;
                        o = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        a = e || o, f = e !== r && "all" !== r && e !== o && ("object" != typeof e || !e._tempKill);
                        for (i in a)(s = o[i]) && (s.pg && s.t._kill(a) && (u = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete o[i]), f && (r[i] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return u
            }
            return this._lazy = !1, this._enabled(!1, !1)
        }, s.invalidate = function () {
            return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = !1, this._propLookup = this._targets ? {} : [], this
        }, s._enabled = function (e, t) {
            if (u || o.wake(), e && this._gc) {
                var n, r = this._targets;
                if (r)for (n = r.length; --n > -1;)this._siblings[n] = X(r[n], this, !0); else this._siblings = X(this.target, this, !0)
            }
            return L.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? M._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
        }, M.to = function (e, t, n) {
            return new M(e, t, n)
        }, M.from = function (e, t, n) {
            return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new M(e, t, n)
        }, M.fromTo = function (e, t, n, r) {
            return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, new M(e, t, r)
        }, M.delayedCall = function (e, t, n, r, i) {
            return new M(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: n,
                onCompleteScope: r,
                onReverseComplete: t,
                onReverseCompleteParams: n,
                onReverseCompleteScope: r,
                immediateRender: !1,
                useFrames: i,
                overwrite: 0
            })
        }, M.set = function (e, t) {
            return new M(e, 0, t)
        }, M.getTweensOf = function (e, t) {
            if (null == e)return [];
            e = "string" != typeof e ? e : M.selector(e) || e;
            var n, r, i, s;
            if ((p(e) || _(e)) && "number" != typeof e[0]) {
                for (n = e.length, r = []; --n > -1;)r = r.concat(M.getTweensOf(e[n], t));
                for (n = r.length; --n > -1;)for (s = r[n], i = n; --i > -1;)s === r[i] && r.splice(n, 1)
            } else for (r = X(e).concat(), n = r.length; --n > -1;)(r[n]._gc || t && !r[n].isActive()) && r.splice(n, 1);
            return r
        }, M.killTweensOf = M.killDelayedCallsTo = function (e, t, n) {
            "object" == typeof t && (n = t, t = !1);
            for (var r = M.getTweensOf(e, t), i = r.length; --i > -1;)r[i]._kill(n, e)
        };
        var J = g("plugins.TweenPlugin", function (e, t) {
            this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = J.prototype
        }, !0);
        if (s = J.prototype, J.version = "1.10.1", J.API = 2, s._firstPT = null, s._addTween = function (e, t, n, r, i, s) {
                var o, u;
                return null != r && (o = "number" == typeof r || "=" !== r.charAt(1) ? Number(r) - n : parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2))) ? (this._firstPT = u = {
                    _next: this._firstPT,
                    t: e,
                    p: t,
                    s: n,
                    c: o,
                    f: "function" == typeof e[t],
                    n: i || t,
                    r: s
                }, u._next && (u._next._prev = u), u) : void 0
            }, s.setRatio = function (e) {
                for (var t, n = this._firstPT, r = 1e-6; n;)t = n.c * e + n.s, n.r ? t = Math.round(t) : r > t && t > -r && (t = 0), n.f ? n.t[n.p](t) : n.t[n.p] = t, n = n._next
            }, s._kill = function (e) {
                var t, n = this._overwriteProps, r = this._firstPT;
                if (null != e[this._propName])this._overwriteProps = []; else for (t = n.length; --t > -1;)null != e[n[t]] && n.splice(t, 1);
                for (; r;)null != e[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
                return !1
            }, s._roundProps = function (e, t) {
                for (var n = this._firstPT; n;)(e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")]) && (n.r = t), n = n._next
            }, M._onPluginEvent = function (e, t) {
                var n, r, i, s, o, u = t._firstPT;
                if ("_onInitAllProps" === e) {
                    for (; u;) {
                        for (o = u._next, r = i; r && r.pr > u.pr;)r = r._next;
                        (u._prev = r ? r._prev : s) ? u._prev._next = u : i = u, (u._next = r) ? r._prev = u : s = u, u = o
                    }
                    u = t._firstPT = i
                }
                for (; u;)u.pg && "function" == typeof u.t[e] && u.t[e]() && (n = !0), u = u._next;
                return n
            }, J.activate = function (e) {
                for (var t = e.length; --t > -1;)e[t].API === J.API && (j[(new e[t])._propName] = e[t]);
                return !0
            }, m.plugin = function (e) {
                if (!(e && e.propName && e.init && e.API))throw"illegal plugin definition.";
                var t, n = e.propName, r = e.priority || 0, i = e.overwriteProps, s = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps"
                }, o = g("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function () {
                    J.call(this, n, r), this._overwriteProps = i || []
                }, e.global === !0), u = o.prototype = new J(n);
                u.constructor = o, o.API = e.API;
                for (t in s)"function" == typeof e[t] && (u[s[t]] = e[t]);
                return o.version = e.version, J.activate([o]), o
            }, r = e._gsQueue) {
            for (i = 0; r.length > i; i++)r[i]();
            for (s in d)d[s].func || e.console.log("GSAP encountered missing dependency: com.greensock." + s)
        }
        u = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), define("TweenMax", function () {
}), define("view/preloader", ["jquery", "underscore", "view/common/base_view", "data/drop", "TweenMax"], function (e, t, n, r, i) {
    return n.extend({
        instance: null,
        ctx0: null,
        ctx1: null,
        ctx2: null,
        ctx3: null,
        drawLenght: 303,
        step: 10,
        index: 0,
        lineSize: 1,
        progress: 0,
        ratio: 2,
        lineThickness: 1,
        color: 150,
        canvasApha: 0,
        $loader_canvas: null,
        initialize: function () {
            t.bindAll(this, "loop", "update", "animate", "colorAnimate", "colorAnimateBack", "kill", "destroyPreloader"), this.$loader_canvas = e(".loader-canvas-js")
        },
        show: function () {
            i.to(this.$loader_canvas, 0, {opacity: 0}), i.to(this.$loader_canvas, 2, {
                opacity: 1,
                delay: 1,
                onStart: this.animate,
                ease: Power4.easeInOut
            }), this.createCanvas(), this.colorAnimate()
        },
        hide: function () {
            this.destroyPreloader()
        },
        colorAnimate: function () {
            i.to(this.$can0, .75, {opacity: .4, ease: Power0.easeInOut}), i.to(this.$can1, .75, {
                opacity: .4,
                ease: Power0.easeInOut
            }), i.to(this.$can2, .75, {opacity: .4, onComplete: this.colorAnimateBack, ease: Power0.easeInOut})
        },
        colorAnimateBack: function () {
            i.to(this.$can0, .75, {opacity: .1, ease: Power0.easeInOut}), i.to(this.$can1, .75, {
                opacity: .1,
                ease: Power0.easeInOut
            }), i.to(this.$can2, .75, {opacity: .1, onComplete: this.colorAnimate, ease: Power0.easeInOut})
        },
        animate: function () {
            this.progress = 1, i.to(this, 3, {
                progress: .001,
                onUpdate: this.update,
                onComplete: this.animate,
                ease: Power4.easeInOut
            })
        },
        update: function () {
            this.index = parseInt((r.length - 1) * this.progress, 10), this.loop()
        },
        destroyPreloader: function () {
            i.to(e("#preloader-container"), 2, {opacity: 0, delay: 2, onComplete: this.kill, ease: Power4.easeInOut})
        },
        stop: function () {
            i.killTweensOf(this)
        },
        kill: function () {
            i.killTweensOf(this), e("#preloader-container").remove(), this.onHideComplete()
        },
        createCanvas: function () {
            var t = e("#logo-canvas-0")[0];
            this.$can0 = e("#logo-canvas-0"), this.ctx0 = t.getContext("2d"), t.width = 100 * this.ratio, t.height = 150 * this.ratio, this.$can0.css({
                width: 100,
                height: 150
            });
            var n = e("#logo-canvas-1")[0];
            this.$can1 = e("#logo-canvas-1"), this.ctx1 = n.getContext("2d"), n.width = 100 * this.ratio, n.height = 150 * this.ratio, this.$can1.css({
                width: 100,
                height: 150
            });
            var r = e("#logo-canvas-2")[0];
            this.$can2 = e("#logo-canvas-2"), this.ctx2 = r.getContext("2d"), r.width = 100 * this.ratio, r.height = 150 * this.ratio, this.$can2.css({
                width: 100,
                height: 150
            });
            var i = e("#logo-canvas-3")[0];
            this.$can3 = e("#logo-canvas-3"), this.ctx3 = i.getContext("2d"), i.width = 100 * this.ratio, i.height = 150 * this.ratio, this.$can3.css({
                width: 100,
                height: 150
            })
        },
        drawLinePart: function (e, t, n, r, i) {
            r.beginPath(), r.lineWidth = i, r.moveTo(e.x * this.ratio, e.y * this.ratio), r.strokeStyle = "rgba(0, 0, 0," + n + ")", r.lineTo(t.x * this.ratio, t.y * this.ratio), r.stroke(), r.closePath()
        },
        loop: function () {
            var e = {x: r[this.index].x, y: r[this.index].y}, t = 1, n = 1 / this.step, i = r.length;
            this.ctx0.clearRect(0, 0, 100 * this.ratio, 150 * this.ratio), this.ctx1.clearRect(0, 0, 100 * this.ratio, 150 * this.ratio), this.ctx2.clearRect(0, 0, 100 * this.ratio, 150 * this.ratio), this.ctx3.clearRect(0, 0, 100 * this.ratio, 150 * this.ratio);
            for (var s = 1; s < this.drawLenght; s++) {
                s % this.step === 0 && (t -= n);
                var o;
                this.index + s >= i ? o = this.index + s - i : o = this.index + s;
                var u = r[o];
                this.drawLinePart(e, u, t, this.ctx0, 6 * this.ratio), this.drawLinePart(e, u, 1, this.ctx1, this.lineThickness * this.ratio), this.drawLinePart(e, u, t, this.ctx2, this.lineThickness * this.ratio), this.drawLinePart(e, u, t, this.ctx3, this.lineThickness * this.ratio), e = u
            }
        }
    })
}), require.config({
    urlArgs: "v=1.02",
    paths: {
        jquery: "libs/jquery-1.10.2",
        underscore: "libs/underscore",
        backbone: "libs/backbone",
        swfobject: "libs/swfobject",
        handlebars: "libs/handlebars-v2.0.0",
        text: "libs/text",
        TweenMax: "libs/greensock/TweenMax.min",
        TweenLite: "libs/greensock/TweenLite.min",
        TimelineLite: "libs/greensock/TimelineLite.min",
        TimelineMax: "libs/greensock/TimelineMax.min",
        console: "util/debugger",
        modernizr: "empty:",
        "libs/imgcenter": "libs/jquery.blImageCenter",
        "libs/createjs/preloadjs": "libs/createjs/preloadjs-0.4.1.min",
        "libs/createjs/tweenjs": "libs/createjs/tweenjs-0.5.1.min",
        "libs/createjs/easeljs": "libs/createjs/easeljs-0.7.1.min",
        "libs/createjs/movieclip": "libs/createjs/movieclip-0.7.1.min",
        "libs/createjs/soundjs": "libs/createjs/soundjs-0.5.2.min",
        threejs: "libs/three",
        detector: "libs/Detector",
        "libs/device": "libs/device.min",
        FlowerSpawner: "view/scene/flower_spawner",
        Stalk: "view/scene/stalk",
        "libs/dat.gui": "libs/dat.gui2",
        "libs/seedrandom": "libs/seedrandom",
        "libs/greensock/easing/EasePack": "libs/greensock/easing/EasePack.min",
        OBJLoader: "libs/loaders/OBJLoader"
    },
    shim: {
        "libs/console-shim": {exports: "console"},
        jquery: {exports: "jQuery"},
        "libs/device": {exports: "device"},
        underscore: {exports: "_"},
        backbone: {deps: ["underscore", "jquery"], exports: "Backbone"},
        handlebars: {exports: "Handlebars"},
        console: {exports: "console"},
        "libs/createjs/preloadjs": {exports: "createjs.LoadQueue"},
        "libs/createjs/tweenjs": {exports: "createjs.Tween", deps: ["libs/createjs/easeljs"]},
        "libs/createjs/movieclip": {deps: ["libs/createjs/easeljs", "libs/createjs/tweenjs"], exports: "createjs"},
        "libs/createjs/soundjs": {deps: ["libs/createjs/preloadjs"], exports: "createjs.Sound"},
        "libs/mocha": {exports: "mocha"},
        "libs/swfobject": {deps: ["jquery"], exports: "swfobject"},
        "libs/swffit": ["libs/swfobject"],
        "libs/swfmacmousewheel": ["libs/swfobject"],
        "libs/jquery-swfobject": ["jquery"],
        "libs/imgcenter": ["jquery"],
        threejs: {exports: "THREE"},
        //detector: {exports: "Detector"},
        FlowerSpawner: {exports: "FlowerSpawner"},
        Stalk: {exports: "Stalk"},
        OBJLoader: {deps: ["threejs"], exports: "OBJLoader"}
    },
    waitSeconds: 0
}), define("modernizr", [], function () {
    return window.Modernizr
}), require(["config", "view/preloader"], function (e, t) {
    function r(e) {
        var t = document.getElementsByTagName("head")[0];
        for (var n = 0; n < e.length; n++) {
            var r = document.createElement("link");
            //r.setAttribute("rel", "stylesheet"), r.setAttribute("type", "text/css"), r.setAttribute("href", e[n]), t.appendChild(r)
        }
    }

    var n = new t;
    t.instance = n, n.show(), document.getElementsByClassName("js-loader")[0].style.display = "";
    var i = [], s = [], o = null;
    e.MOBILE ? (e.FLOW = e.FLOWS.MOBILE, s.push(e.CDN + "/css/main.css"), i.push("main_desktop_extended")) : e.OLD_DESKTOP ? (e.FLOW = e.FLOWS.BASIC, s.push(e.CDN + "/css/main.css"), i.push("main_desktop_extended")) : e.TABLET ? (e.FLOW = e.FLOWS.TABLET, s.push(e.CDN + "/css/main.css"), i.push("main_desktop_extended")) : (e.FLOW = e.FLOWS.EXTENDED, s.push(e.CDN + "/css/main.css"), i.push("main_desktop_extended")), window.location.toString().indexOf("?testing") > -1 && (o = "tests/mocha"), r(s), require(i, function (e) {
        o ? require([o], function (t) {
            e.start(), t.run()
        }) : e.start()
    })
}), define("loader", function () {
});