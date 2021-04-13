pbjsChunk([314],{370:function(n,t,e){n.exports=e(371)},371:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"allowAuction",function(){return w}),e.d(t,"userCMP",function(){return d}),e.d(t,"consentTimeout",function(){return l}),e.d(t,"gdprScope",function(){return g}),e.d(t,"staticConsentData",function(){return m}),t.requestBidsHook=h,t.resetConsentData=function(){C=void 0,d=void 0,D=0,a.gdprDataHandler.setConsentData(null)},t.setConsentConfig=_;var u=e(0),o=e(3),a=e(8),i=e(13),s=e.n(i),r=e(71),f=e.n(r);function c(n){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var d,l,g,m,C,v="iab",b=1e4,y=!0,w={value:y,definedInConfig:!1},D=0,k=!1,M={iab:function(o,e,s){function n(n,t){u.logInfo("Received a response from CMP",n),t?!1!==n.gdprApplies&&"tcloaded"!==n.eventStatus&&"useractioncomplete"!==n.eventStatus||o(n,s):e("CMP unable to register callback function.  Please check CMP setup.",s)}var t=function(){var t={};function e(){t.getConsentData&&t.getVendorConsents&&(u.logInfo("Received all requested responses from CMP",t),o(t,s))}return{consentDataCallback:function(n){t.getConsentData=n,e()},vendorConsentsCallback:function(n){t.getVendorConsents=n,e()}}}(),c={},a=function(){for(var n,t,e=window;!n;){try{if("function"==typeof e.__tcfapi||"function"==typeof e.__cmp){t="function"==typeof e.__tcfapi?(D=2,e.__tcfapi):(D=1,e.__cmp),n=e;break}}catch(n){}try{if(e.frames.__tcfapiLocator){D=2,n=e;break}}catch(n){}try{if(e.frames.__cmpLocator){D=1,n=e;break}}catch(n){}if(e===window.top)break;e=e.parent}return{cmpFrame:n,cmpFunction:t}}(),i=a.cmpFrame,r=a.cmpFunction;if(!i)return e("CMP not found.",s);u.isFn(r)?(u.logInfo("Detected CMP API is directly accessible, calling it now..."),1===D?(r("getConsentData",null,t.consentDataCallback),r("getVendorConsents",null,t.vendorConsentsCallback)):2===D&&r("addEventListener",D,n)):1===D&&window.$sf&&window.$sf.ext&&"function"==typeof window.$sf.ext.cmp?(u.logInfo("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."),d("getConsentData",t.consentDataCallback),d("getVendorConsents",t.vendorConsentsCallback)):(u.logInfo("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."),1===D?(l("getConsentData",i,t.consentDataCallback),l("getVendorConsents",i,t.vendorConsentsCallback)):2===D&&l("addEventListener",i,n));function d(o,a){var n,t=s.adUnits,e=1,i=1;Array.isArray(t)&&0<t.length&&(e=(n=u.getAdUnitSizes(t[0]))[0][0],i=n[0][1]),window.$sf.ext.register(e,i,function(n,t){var e;"cmpReturn"===n&&(e="getConsentData"===o?t.vendorConsentData:t.vendorConsents,a(e))}),window.$sf.ext.cmp(o)}function l(n,i,t){var a=2===D?"__tcfapi":"__cmp",s=Math.random()+"",r="".concat(a,"Call");function e(n){var t,e="".concat(a,"Return"),o="string"==typeof n.data&&f()(n.data,e)?JSON.parse(n.data):n.data;o[e]&&o[e].callId&&(t=o[e],void 0!==c[t.callId]&&c[t.callId](t.returnValue,t.success))}2===D?(window[a]=function(n,t,e,o){var a=p({},r,{command:n,version:t,parameter:o,callId:s});c[s]=e,i.postMessage(a,"*")},window.addEventListener("message",e,!1),window[a](n,D,t)):(window[a]=function(n,t,e){var o=p({},r,{command:n,parameter:t,callId:s});c[s]=e,i.postMessage(o,"*")},window.addEventListener("message",e,!1),window[a](n,void 0,t))}},static:function(n,t,e){n(m,e)}};function h(n,t){var e={context:this,args:[t],nextFn:n,adUnits:t.adUnits||pbjs.adUnits,bidsBackHandler:t.bidsBackHandler,haveExited:!1,timer:null};return C?(u.logInfo("User consent information already known.  Pulling internally stored information..."),S(null,e)):s()(Object.keys(M),d)?(M[d].call(this,A,P,e),void(e.haveExited||(0===l?A(void 0,e):e.timer=setTimeout(function(n){P("CMP workflow exceeded timeout threshold.",n)}.bind(null,e),l)))):(u.logWarn("CMP framework (".concat(d,") is not a supported framework.  Aborting consentManagement module and resuming auction.")),e.nextFn.apply(e.context,e.args))}function A(e,n){"static"===d&&2===(D=e.getConsentData?1:e.getTCData?2:0)&&(e=e.getTCData);var t=1===D?function(n){var t=n&&n.getConsentData&&n.getConsentData.gdprApplies;return!("boolean"==typeof t&&(!0!==t||u.isStr(n.getConsentData.consentData)&&u.isPlainObject(n.getVendorConsents)&&1<Object.keys(n.getVendorConsents).length))}:2===D?function(){var n=e&&"boolean"==typeof e.gdprApplies?e.gdprApplies:g,t=e&&e.tcString;return!("boolean"==typeof n&&(!0!==n||u.isStr(t)))}:null;w.definedInConfig&&2===D?u.logWarn("'allowAuctionWithoutConsent' ignored for TCF 2"):w.definedInConfig||1!==D||u.logInfo("'allowAuctionWithoutConsent' using system default: (".concat(y,").")),u.isFn(t)?t(e)?P("CMP returned unexpected value during lookup process.",n,e):(clearTimeout(n.timer),I(e),S(null,n)):P("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.",n,e)}function P(n,t,e){clearTimeout(t.timer),w.value&&1===D&&I(void 0),S(n,t,e)}function I(n){1===D?C={consentString:n?n.getConsentData.consentData:void 0,vendorData:n?n.getVendorConsents:void 0,gdprApplies:n?n.getConsentData.gdprApplies:g}:(C={consentString:n?n.tcString:void 0,vendorData:n||void 0,gdprApplies:n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:g},n&&n.addtlConsent&&u.isStr(n.addtlConsent)&&(C.addtlConsent=n.addtlConsent)),C.apiVersion=D,a.gdprDataHandler.setConsentData(C)}function S(n,t,e){var o,a,i;!1===t.haveExited&&(t.haveExited=!0,o=t.context,a=t.args,i=t.nextFn,n?w.value&&1===D?(u.logWarn(n+" 'allowAuctionWithoutConsent' activated.",e),i.apply(o,a)):(u.logError(n+" Canceling auction as per consentManagement config.",e),"function"==typeof t.bidsBackHandler?t.bidsBackHandler():u.logError("Error executing bidsBackHandler")):i.apply(o,a))}function _(n){(n=n&&(n.gdpr||n.usp?n.gdpr:n))&&"object"===c(n)?(u.isStr(n.cmpApi)?d=n.cmpApi:(d=v,u.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat(v,")."))),u.isNumber(n.timeout)?l=n.timeout:(l=b,u.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(b,")."))),"boolean"==typeof n.allowAuctionWithoutConsent&&(w.value=n.allowAuctionWithoutConsent,w.definedInConfig=!0),g=!0===n.defaultGdprScope,u.logInfo("consentManagement module has been activated..."),"static"===d&&(u.isPlainObject(n.consentData)?(m=n.consentData,l=0):u.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),k||pbjs.requestBids.before(h,50),k=!0):u.logWarn("consentManagement config not defined, exiting consent manager")}o.b.getConfig("consentManagement",function(n){return _(n.consentManagement)})}},[370]);