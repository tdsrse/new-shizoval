// ==UserScript==
// @name             shizoval
// @author           Alastor, tdsrse,sheezmee
// @version          2.1.1

// @match            https://*.test-eu.tankionline.com/browser-public/index.html?*
// @match            https://tankionline.com/play*

// @description      shizoval: Reborn
// @icon             https://www.google.com/s2/favicons?sz=64&domain=tankionline.com

// @grant            GM_addStyle
// @grant            unsafeWindow
// @grant         GM_xmlhttpRequest

// @run-at           document-start
// ==/UserScript==

GM_xmlhttpRequest({
method: 'GET',
url: 'https://raw.githubusercontent.com/tdsrse/new-shizoval/main/shizoval.min.js',
nocache: true,
onload: data => eval(data.responseText)
})
