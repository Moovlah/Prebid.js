pbjsChunk([367],{248:function(e,r,s){e.exports=s(249)},249:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),s.d(r,"spec",function(){return a});var d=s(0),n=s(1),o=s(2),p=s(3),t=s(10),u=s.n(t);function f(){return(f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}var b="display",i={},a={code:"adtarget",supportedMediaTypes:[o.d,o.b],isBidRequestValid:function(e){return!!d.deepAccess(e,"params.aid")},getUserSyncs:function(t,e){var a=[];function r(e){var r=e.cookieURLs,n=e.cookieURLSTypes||[];Array.isArray(r)&&r.forEach(function(e,r){var s=n[r]||"image";!t.pixelEnabled&&"image"===s||!t.iframeEnabled&&"iframe"===s||i[e]||(i[e]=!0,a.push({type:s,url:e}))})}return(t.pixelEnabled||t.iframeEnabled)&&d.isArray(e)&&e.forEach(function(e){e.body&&(d.isArray(e.body)?e.body.forEach(function(e){r(e)}):r(e.body))}),a},buildRequests:function(e,r){var s=p.b.getConfig(r.bidderCode),n=d.deepAccess(s,"chunkSize",10),t=function(e,r){var s={Domain:d.deepAccess(r,"refererInfo.referer")};!0===p.b.getConfig("coppa")&&(s.Coppa=1);d.deepAccess(r,"gdprConsent.gdprApplies")&&(s.GDPR=1,s.GDPRConsent=d.deepAccess(r,"gdprConsent.consentString"));d.deepAccess(r,"uspConsent")&&(s.USP=d.deepAccess(r,"uspConsent"));d.deepAccess(e[0],"schain")&&(s.Schain=d.deepAccess(e[0],"schain"));d.deepAccess(e[0],"userId")&&(s.UserIds=d.deepAccess(e[0],"userId"));for(var n=[],t=0,a=e.length;t<a;t++){var i=function(e){var r=d.deepAccess(e,"mediaTypes.video")?o.d:b,s=r===o.d?d.deepAccess(e,"mediaTypes.video.playerSize"):d.deepAccess(e,"mediaTypes.banner.sizes");return{CallbackId:e.bidId,Aid:e.params.aid,AdType:r,Sizes:d.parseSizesInput(s).join(",")}}(e[t]);n.push(i)}return{tag:s,bids:n}}(e,r),a=t.tag,i=t.bids,c=d.chunk(i,n);return d._map(c,function(e){return{data:f({},a,{BidRequests:e}),adapterRequest:r,method:"POST",url:"https://ghb.console.adtarget.com.tr/v2/auction/"}})},interpretResponse:function(e,r){var s=r.adapterRequest;e=e.body;var n=[];return d.isArray(e)?(e.forEach(function(e){n=d.flatten(n,c(e,s))}),n):c(e,s)}};function c(e,i){var r=!e||!d.isArray(e.bids),c=[];if(r){var s=e&&e.ext&&e.ext.message?": ".concat(e.ext.message):"",n="in response for ".concat(i.bidderCode," adapter ").concat(s);return d.logError(n),c}return e.bids.forEach(function(r){var e,s,n,t,a=u()(i.bids,function(e){return e.bidId===r.requestId});0!==r.cpm&&void 0!==a&&(s=r,n=function(e){return d.deepAccess(e,"mediaTypes.video")?o.d:o.b}(a),t={requestId:s.requestId,creativeId:s.cmpId,height:s.height,currency:s.cur,width:s.width,cpm:s.cpm,netRevenue:!0,mediaType:n,ttl:300},e=n!==o.b?(f(t,{vastUrl:s.vastUrl}),t):f(t,{ad:s.ad}),c.push(e))}),c}Object(n.registerBidder)(a)}},[248]);