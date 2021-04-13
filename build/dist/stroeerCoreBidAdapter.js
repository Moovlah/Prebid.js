pbjsChunk([117],{862:function(e,t,n){e.exports=n(863)},863:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",function(){return u});var r=n(1),o=n(2),m=n(0);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return function(){var e=m.getWindowSelf();try{for(;m.getWindowTop().top!==e&&e.parent.location.href.length;)e=e.parent}catch(e){}return e}()===m.getWindowTop()}var d,u={code:"stroeerCore",gvlid:136,supportedMediaTypes:[o.b],isBidRequestValid:((d=[]).push(s(function(e){return!(t=e).mediaTypes&&!t.mediaType||t.mediaTypes&&t.mediaTypes.banner||t.mediaType===o.b;var t},function(e){return"bid request ".concat(e.bidId," is not a banner")})),d.push(s(function(e){return"object"===i(e.params)},function(e){return"bid request ".concat(e.bidId," does not have custom params")})),d.push(s(function(e){return m.isStr(e.params.sid)},function(e){return"bid request ".concat(e.bidId," does not have a sid string field")})),function(t){return d.every(function(e){return e(t)})}),buildRequests:function(e,t){var n=0<arguments.length&&void 0!==e?e:[],r=1<arguments.length?t:void 0,o=r.bids[0],i={id:r.auctionId,bids:[],ref:function(){try{return m.getWindowTop().document.referrer}catch(e){return m.getWindowSelf().referrer}}(),ssl:"https:"===m.getWindowSelf().location.protocol,mpa:g(),timeout:r.timeout-(Date.now()-r.auctionStart)},d=o.userId;m.isEmpty(d)||(i.user={euids:d});var u,s,c,a,p,f,l,b,h=r.gdprConsent;return h&&null!=h.consentString&&null!=h.gdprApplies&&(i.gdpr={consent:r.gdprConsent.consentString,applies:r.gdprConsent.gdprApplies}),n.forEach(function(e){var t;i.bids.push({bid:e.bidId,sid:e.params.sid,siz:(t=e,m.deepAccess(t,"mediaTypes.banner.sizes")||t.sizes||[]),viz:function(e){var t;try{return function e(t,n){var r=t.getBoundingClientRect(),o=0<=r.top+r.height&&r.top<=n.innerHeight;return n!==n.parent?o&&e(n.frameElement,n.parent):o}((t=e,m.getWindowSelf().document.getElementById(t)),m.getWindowSelf())}catch(e){}}(e.adUnitCode)})}),{method:"POST",url:(u=o.params,s=u.host,c=void 0===s?"hb.adscale.de":s,a=u.port,p=void 0===a?"":a,f=u.securePort,l=u.path,b=void 0===l?"/dsh":l,f&&(p=f),m.buildUrl({protocol:"https",hostname:c,port:p,pathname:b})),data:i}},interpretResponse:function(e){var t=[];return e.body&&"object"===i(e.body)&&e.body.bids.forEach(function(e){t.push({requestId:e.bidId,cpm:e.cpm||0,width:e.width||0,height:e.height||0,ad:e.ad,ttl:300,currency:"EUR",netRevenue:!0,creativeId:""})}),t},getUserSyncs:function(e,t,n){return 0<t.length&&e.iframeEnabled?[{type:"iframe",url:"https://js.adscale.de/pbsync.html"+function(e){if(e){var t=encodeURIComponent(e.consentString||""),n=e.gdprApplies?1:0;return"?gdpr=".concat(n,"&gdpr_consent=").concat(t)}return""}(n)}]:[]}};function s(t,n){return function(e){return!!t(e)||(m.logError("invalid bid: ".concat(n(e)),"ERROR"),!1)}}Object(r.registerBidder)(u)}},[862]);