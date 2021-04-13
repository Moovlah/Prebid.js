pbjsChunk([238],{551:function(e,t,r){e.exports=r(552)},552:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return p});var s=r(0),d=r(3),n=r(1),a=r(7);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o,i,c,u="kargo",l=Object(a.b)(972,u),p={gvlid:972,code:u,isBidRequestValid:function(e){return!(!e||!e.params)&&!!e.params.placementId},buildRequests:function(e,t){var r,n=d.b.getConfig("currency"),a=n&&n.adServerCurrency||"USD",o={},i={};s._each(e,function(e){o[e.bidId]=e.params.placementId,i[e.bidId]=e.sizes}),0<e.length&&e[0].userId&&e[0].userId.tdid&&(r=e[0].userId.tdid);var c=g({},{sessionId:p._getSessionId(),requestCount:p._getRequestCount(),timeout:t.timeout,currency:a,cpmGranularity:1,timestamp:(new Date).getTime(),cpmRange:{floor:0,ceil:20},bidIDs:o,bidSizes:i,prebidRawBidRequests:e},p._getAllMetadata(r,t.uspConsent,t.gdprConsent)),u=encodeURIComponent(JSON.stringify(c));return g({},t,{method:"GET",url:"".concat("https://krk.kargo.com","/api/v2/bid"),data:"json=".concat(u),currency:a})},interpretResponse:function(e,t){var r=e.body,n=[];for(var a in r){var o=r[a],i=void 0;o.metadata&&o.metadata.landingPageDomain&&(i={clickUrl:o.metadata.landingPageDomain,advertiserDomains:[o.metadata.landingPageDomain]}),n.push({requestId:a,cpm:Number(o.cpm),width:o.width,height:o.height,ad:o.adm,ttl:300,creativeId:o.id,dealId:o.targetingCustom,netRevenue:!0,currency:t.currency,meta:i})}return n},getUserSyncs:function(e,t,r,n){var a=[],o=p._generateRandomUuid(),i=p._getClientId(),c=r&&r.gdprApplies?1:0,u=r&&r.consentString?r.consentString:"";if("string"==typeof n&&4==n.length&&1==n[0]&&"Y"==n[2])return a;if(e.iframeEnabled&&o&&i)for(var s=0;s<5;s++)a.push({type:"iframe",url:"https://crb.kargo.com/api/v1/initsyncrnd/{UUID}?seed={SEED}&idx={INDEX}&gdpr={GDPR}&gdpr_consent={GDPR_CONSENT}&us_privacy={US_PRIVACY}".replace("{UUID}",i).replace("{SEED}",o).replace("{INDEX}",s).replace("{GDPR}",c).replace("{GDPR_CONSENT}",u).replace("{US_PRIVACY}",n||"")});return a},_readCookie:function(e){if(!l.cookiesAreEnabled())return null;for(var t="".concat(e,"="),r=document.cookie.split(";"),n=0;n<r.length;n++){for(var a=r[n];" "===a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return null},_getCrbFromCookie:function(){try{var e=JSON.parse(decodeURIComponent(p._readCookie("krg_crb")));if(e&&e.v){var t=JSON.parse(atob(e.v));if(t)return t}return{}}catch(e){return{}}},_getCrbFromLocalStorage:function(){try{return JSON.parse(atob(p._getLocalStorageSafely("krg_crb")))}catch(e){return{}}},_getCrb:function(){var e=p._getCrbFromLocalStorage();return Object.keys(e).length?e:p._getCrbFromCookie()},_getKruxUserId:function(){return p._getLocalStorageSafely("kxkar_user")},_getKruxSegments:function(){return p._getLocalStorageSafely("kxkar_segs")},_getKrux:function(){var e=p._getKruxSegments(),t=[];return e&&(t=e.split(",")),{userID:p._getKruxUserId(),segments:t}},_getLocalStorageSafely:function(e){try{return l.getDataFromLocalStorage(e)}catch(e){return null}},_getUserIds:function(e,t,r){var n=p._getCrb(),a={kargoID:n.userId,clientID:n.clientId,crbIDs:n.syncIds||{},optOut:n.optOut,usp:t};try{r&&(a.gdpr={consent:r.consentString||"",applies:!!r.gdprApplies})}catch(e){}return e&&(a.tdID=e),a},_getClientId:function(){return p._getCrb().clientId},_getAllMetadata:function(e,t,r){return{userIDs:p._getUserIds(e,t,r),krux:p._getKrux(),pageURL:window.location.href,rawCRB:p._readCookie("krg_crb"),rawCRBLocalStorage:p._getLocalStorageSafely("krg_crb")}},_getSessionId:function(){return o=o||p._generateRandomUuid()},_getRequestCount:function(){return i===window.location.pathname?++c:(i=window.location.pathname,c=0)},_generateRandomUuid:function(){try{var e=new Uint8Array(16);crypto.getRandomValues(e),e[6]=-177&e[6]|64,e[8]=-65&e[8]|128;var t=Array.prototype.map.call(new Uint8Array(e),function(e){return("00"+e.toString(16)).slice(-2)}).join("");return t.slice(0,8)+"-"+t.slice(8,12)+"-"+t.slice(12,16)+"-"+t.slice(16,20)+"-"+t.slice(20)}catch(e){return""}}};Object(n.registerBidder)(p)}},[551]);