pbjsChunk([170],{714:function(e,t,n){e.exports=n(715)},715:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setStorageItem=h,t.getStorageItem=x,t.removeStorageItem=U,t.isPubcidEnabled=function(){return S.enabled},t.getExpInterval=function(){return S.interval},t.getPubcidConfig=function(){return S},t.requestBidHook=k,t.setCookie=w,t.getCookie=function(e){return s.getCookie(e)},t.setConfig=j,t.initPubcid=L;var r=n(0),o=n(3),a=n(9),i=n.n(a),l=n(5),c=n.n(l),u=n(7);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=Object(u.b)(),f="_pubcid",p="_pubcid_optout",g=525600,v="PublisherCommonId",y="_exp",m="cookie",E="html5",S={enabled:!0,interval:g,typeEnabled:E,create:!0,extend:!0,pixelUrl:""};function h(e,t,n){try{var o;void 0!==n&&null!=n&&(o=new Date(Date.now()+60*n*1e3).toUTCString(),s.setDataInLocalStorage(e+y,o)),s.setDataInLocalStorage(e,t)}catch(e){r.logMessage(e)}}function x(e){var t=null;try{var n=s.getDataFromLocalStorage(e+y);!n||0<new Date(n).getTime()-Date.now()?t=s.getDataFromLocalStorage(e):U(e)}catch(e){r.logMessage(e)}return t}function U(e){try{s.removeDataFromLocalStorage(e+y),s.removeDataFromLocalStorage(e)}catch(e){r.logMessage(e)}}function C(e,t){var n;return(t=t||S.typeEnabled)===m?n=s.getCookie(e):t===E&&(n=x(e)),"undefined"===n||"null"===n?null:n}function D(e,t,n){e&&t&&(S.typeEnabled===m?w(e,t,n,"Lax"):S.typeEnabled===E&&h(e,t,n))}function I(e,t){if(e){t=t||"";var n=r.parseUrl(e);n.search.id=encodeURIComponent("pubcid:"+t);var o=r.buildUrl(n);return i.a.on(c.a.EVENTS.AUCTION_END,function e(){i.a.off(c.a.EVENTS.AUCTION_END,e),r.triggerPixel(o)}),1}}function k(e,t){var n=t.adUnits||pbjs.adUnits,o=null;return S.enabled&&S.typeEnabled&&("object"===b(window[v])?(o=window[v].getId(),r.logMessage(v+": pubcid = "+o)):((o=C(f))?S.extend&&(I(S.pixelUrl,o)||D(f,o,S.interval)):(S.create&&(S.typeEnabled===E&&(o=C(f,m)),o=o||r.generateUUID(),D(f,o,S.interval),o=C(f)),I(S.pixelUrl,o)),r.logMessage("pbjs: pubcid = "+o)),n&&o&&n.forEach(function(e){e.bids&&r.isArray(e.bids)&&e.bids.forEach(function(e){d(e,{crumbs:{pubcid:o}})})})),e.call(this,t)}function w(e,t,n,o){var r=new Date;r.setTime(r.getTime()+1e3*n*60),s.setCookie(e,t,r.toGMTString(),o)}function j(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.enable,n=e.expInterval,o=e.type,r=void 0===o?"html5,cookie":o,a=e.create,i=e.extend,l=e.pixelUrl;void 0!==t&&(S.enabled=t),void 0!==n&&(S.interval=parseInt(n,10)),isNaN(S.interval)&&(S.interval=g),void 0!==a&&(S.create=a),void 0!==i&&(S.extend=i),void 0!==l&&(S.pixelUrl=l),S.typeEnabled=null;for(var c=r.split(","),u=0;u<c.length;++u){var d=c[u].trim();if(d===m){if(s.cookiesAreEnabled()){S.typeEnabled=m;break}}else if(d===E&&s.hasLocalStorage()){S.typeEnabled=E;break}}}function L(){o.b.getConfig("pubcid",function(e){return j(e.pubcid)}),s.cookiesAreEnabled()&&C(p,m)||s.hasLocalStorage()&&C(p,E)||pbjs.requestBids.before(k)}L()}},[714]);