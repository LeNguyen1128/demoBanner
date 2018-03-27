//Replace All
String.prototype.replaceAll = function(e, t) {
    var r = this;
    return r.replace(new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), t)
}
//Check IE version
function getInternetExplorerVersion() {
    var e = -1;
    if ("Microsoft Internet Explorer" == navigator.appName) {
        var t = navigator.userAgent,
            r = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
        null != r.exec(t) && (e = parseFloat(RegExp.$1)) } else if ("Netscape" == navigator.appName) {
        var t = navigator.userAgent,
            r = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
        null != r.exec(t) && (e = parseFloat(RegExp.$1)) }
    return e
}
//add browser detection for Jquery ver > 1.9
jQuery.uaMatch = function(a) { a = a.toLowerCase();
    var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || /(trident)[\/]([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
    return { browser: b[1] || "", version: b[2] || "0" } }, matched = jQuery.uaMatch(navigator.userAgent), browser = {}, matched.browser && (browser[matched.browser] = !0, browser.version = matched.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0), jQuery.browser = browser;
//Function Read/Set/Delete Cookie
function getCookie(e) {
    var t = document.cookie,
        r = t.indexOf(" " + e + "=");
    if (-1 == r && (r = t.indexOf(e + "=")), -1 == r) t = null;
    else { r = t.indexOf("=", r) + 1;
        var n = t.indexOf(";", r); - 1 == n && (n = t.length), t = unescape(t.substring(r, n)) }
    return t
}
function setCookie(cookieName, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = cookieName + "=" + value + expires + "; path=/";
}
function deleteCookie(name) {
    setCookie(name, "", -1);
}
//Detect local/session storage support ?
//eg: return storageAvailable('localStorage')
function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true; } catch (e) {
        return false; } };
//Random number for range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; }
//function get query string
function getParameterByName(e) { e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
        r = t.exec(location.search);
    return null == r ? "" : decodeURIComponent(r[1].replace(/\+/g, " ")) }
