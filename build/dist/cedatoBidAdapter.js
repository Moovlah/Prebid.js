pbjsChunk([324],{346:function(e,r,t){e.exports=t(347)},347:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return d});var p=t(0),n=t(1),i=t(2),o=t(7);function a(r,e){var t,n=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),n.push.apply(n,t)),n}function s(i){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach(function(e){var r,t,n;r=i,n=o[t=e],t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(o,e))})}return i}var c=Object(o.b)(),d={code:"cedato",supportedMediaTypes:[i.b,i.d],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.player_id&&p.checkCookieSupport()&&c.cookiesAreEnabled())},buildRequests:function(e,r){var t={domain:document.domain},n={ua:navigator.userAgent,w:screen.width,h:screen.height},i=r.timeout,o=r.auctionId,a=r.auctionStart,c=r.bidderRequestId,d={version:"4.35.0-pre",site:t,device:n,imp:e.map(function(e){var r=u(e,"banner"),t=u(e,"video"),n=e.params;return{bidId:e.bidId,banner:r,video:t,adUnitCode:e.adUnitCode,bidRequestsCount:e.bidRequestsCount,bidderWinsCount:e.bidderWinsCount,transactionId:e.transactionId,params:n}}),currency:"USD",tmax:i,auctionId:o,auctionStart:a,bidderRequestId:c};return r&&(d.referer_info=r.refererInfo,d.us_privacy=r.uspConsent,r.gdprConsent&&(d.gdpr_consent={consent_string:r.gdprConsent.consentString,consent_required:r.gdprConsent.gdprApplies})),function(t,e){var n={},r=[];for(var i in t.imp.forEach(function(e){var r=e.params.bid_url||"https://h.cedatoplayer.com/hb";n[r]||(n[r]=s(s({},t),{},{imp:[]})),n[r].imp.push(e)}),n)r.push({url:i,method:"POST",data:JSON.stringify(n[i]),bidderRequest:e});return r}(d,r)},interpretResponse:function(t,e){var n=e.bidderRequest;t=t.body;var i=[];return t&&t.seatbid[0].bid.map(function(e){var r=function(e,r){var t=p.getBidRequest(e.uuid,[r]),n=e.price,i=e.uuid,o=e.w,a=e.h,c=e.crid,d=e.dealid,s=e.media_type,u={cpm:n,requestId:i,width:o,height:a,mediaType:s,creativeId:c,dealId:d,netRevenue:!0,ttl:1e4};{"video"==s?"instream"==p.deepAccess(t,"mediaTypes.video.context")&&(u.vastUrl=e.vast_url,u.vastImpUrl=e.notify_url):u.ad=e.adm}return u}(e,n);r.currency=t.cur,i.push(r)}),i},getUserSyncs:function(e,r,t,n){var i=[];return e.iframeEnabled?i.push(b("iframe",t,n)):e.pixelEnabled&&i.push(b("image",t,n)),i}};function u(e,r){var t=e.mediaTypes;if(t)switch(r){case"banner":if(t.banner){var n=t.banner.sizes;return{format:f(n)}}break;case"video":if(t.video){var i=t.video,o=i.playerSize;return{context:i.context,format:f(o)}}}}var b=function(e,r,t){var n="?type="+e+"&us_privacy="+(2<arguments.length&&void 0!==t?t:"");return r&&"string"==typeof r.consentString&&("boolean"==typeof r.gdprApplies?n+="&gdpr=".concat(Number(r.gdprApplies),"&gdpr_consent=").concat(r.consentString):n+="&gdpr_consent=".concat(r.consentString)),{type:e,url:"https://h.cedatoplayer.com/hb_usync"+n}},f=function(e){return e.map(function(e){return{w:e[0],h:e[1]}})};Object(n.registerBidder)(d)}},[346]);