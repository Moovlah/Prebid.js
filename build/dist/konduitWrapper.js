pbjsChunk([236],{557:function(e,r,t){e.exports=t(558)},558:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"errorMessages",function(){return I}),r.processBids=b;var n=t(72),i=t(42),f=t(0),v=t(3),h=t(4),m=t(45),c=t(35),d=t(23);function s(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var y="https",C="p.konduit.me",u="1.0.0",o="Konduit",l="konduit.konduitId",k="enableSendAllBids",I={NO_KONDUIT_ID:"A konduitId param is required to be in configs",NO_BIDS:"No bids received in the auction",NO_BID:"A bid was not found",CACHE_FAILURE:"A bid was not cached"};function _(e){return(e.protocol||"http")+"://"+(e.host||e.hostname+(e.port?":".concat(e.port):""))+(e.pathname||"")+(e.search?"?".concat((t=e.search||"",Object.keys(t).map(function(r){return Array.isArray(t[r])?t[r].map(function(e){return"".concat(r,"[]=").concat(e)}).join("&"):"".concat(r,"=").concat(t[r])}).join("&"))):"")+(e.hash?"#".concat(e.hash):"");var t}function O(e){return(e=[].slice.call(e)).unshift("".concat(o,": ")),e}function T(){f.logError.apply(f,s(O(arguments)))}function b(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},a=v.b.getConfig(l),n=n||{};if(!a)return T(I.NO_KONDUIT_ID),n.callback&&n.callback(new Error(I.NO_KONDUIT_ID),[]),null;var e=n.bids||d.a.getBidsReceived(),p=n.bid||i.c.getWinningBids(n.adUnitCode,e)[0],o=[];if(v.b.getConfig(k)?o.push.apply(o,s(e)):p&&o.push(p),!o.length)return T(I.NO_BIDS),n.callback&&n.callback(new Error(I.NO_BIDS),[]),null;var g=v.b.getConfig("priceGranularity"),t=[];o.forEach(function(e){var r;!function(e,r,t){e.kCpm=e.cpm,e.adserverTargeting||(e.adserverTargeting={});var n=Object(c.h)(t)(e);v.b.getConfig(k)&&(e.adserverTargeting["k_cpm_".concat(e.bidderCode)]=n),r.bidderCode===e.bidderCode&&r.creativeId===e.creativeId&&(e.adserverTargeting.k_cpm=n)}(e,p,g),t.push({auctionId:(r=e).auctionId,vastUrl:r.vastUrl,bidderCode:r.bidderCode,creativeId:r.creativeId,adUnitCode:r.adUnitCode,cpm:r.cpm,currency:r.currency})}),function(e){var r=e.host,t=void 0===r?C:r,n=e.protocol,a=void 0===n?y:n,o=e.method,i=void 0===o?"GET":o,c=e.path,d=e.payload,s=e.callbacks,u=e.timeout,l={protocol:a,hostname:t,pathname:c};"GET"===i&&(l.search=d);var b=_(l);Object(h.b)(u)(b,s,"POST"===i?JSON.stringify(d):null,{contentType:"application/json",method:i,withCredentials:!0})}({method:"POST",path:"/api/bidsProcessor",timeout:n.timeout||1e3,payload:{clientId:a,konduitPrebidModuleVersion:u,enableSendAllBids:v.b.getConfig(k),bids:t,bidResponsesCount:d.a.getBidsReceived().length},callbacks:{success:function(e){var r=null;!function(){f.logInfo.apply(f,s(O(arguments)))}("Bids processed successfully ",e);try{var t=JSON.parse(e),l=t.kCpmData,b=t.cacheData;if(f.isEmpty(b))throw new Error(I.CACHE_FAILURE);p.adserverTargeting.konduit_id=a,p.adserverTargeting.k_id=a,o.forEach(function(e){var r,t,n,a,o,i,c,d,s,u="".concat(e.bidderCode,":").concat(e.creativeId);r=l[u],t=e,n=p,a=g,f.isNumber(r)&&(t.kCpm=r,i=(o=Object(m.a)(r,v.b.getConfig("customPriceBucket"),v.b.getConfig("currency.granularityMultiplier"))).custom||o[a]||o.med,v.b.getConfig(k)&&(t.adserverTargeting["k_cpm_".concat(t.bidderCode)]=i),n.bidderCode===t.bidderCode&&n.creativeId===t.creativeId&&(t.adserverTargeting.k_cpm=i)),c=b[u],d=e,s=p,f.isStr(c)&&(d.konduitCacheKey=c,v.b.getConfig(k)&&(d.adserverTargeting["k_cache_key_".concat(d.bidderCode)]=c),s.bidderCode===d.bidderCode&&s.creativeId===d.creativeId&&(d.adserverTargeting.k_cache_key=c,d.adserverTargeting.konduit_cache_key=c))})}catch(e){T("Error parsing JSON response for bidsProcessor data: ",r=e)}n.callback&&n.callback(r,o)},error:function(e){T("Bids were not processed successfully ",e),n.callback&&n.callback(f.isStr(e)?new Error(e):e,o)}}})}Object(n.a)("konduit",{processBids:b})}},[557]);