pbjsChunk([396],{172:function(e,t,i){e.exports=i(173)},173:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"spec",function(){return a});var n=i(0),r=i(3),d=i(1),o=i(2),a={code:"ablida",supportedMediaTypes:[o.b,o.c,o.d],isBidRequestValid:function(e){return!!e.params.placementId},buildRequests:function(e,r){return 0===e.length?[]:e.map(function(e){var t=[];e.mediaTypes&&e.mediaTypes[o.b]&&e.mediaTypes[o.b].sizes?t=e.mediaTypes[o.b].sizes:e.mediaTypes[o.d]&&e.mediaTypes[o.d].playerSize&&(t=e.mediaTypes[o.d].playerSize);var i="atob"in window&&"currentScript"in document,n=function(){var e=navigator.userAgent,t=window.top;if(/(ipad|xoom|sch-i800|playbook|silk|tablet|kindle)|(android(?!.*mobi))/i.test(e))return"tablet";if(/(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(e))return"connectedtv";if(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Windows\sCE|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(e))return"smartphone";if(320<(t.innerWidth||t.document.documentElement.clientWidth||t.document.body.clientWidth))return"desktop";return"other"}();return{method:"POST",url:"https://bidder.ablida.net/prebid",data:{placementId:e.params.placementId,sizes:t,bidId:e.bidId,categories:e.params.categories,referer:r.refererInfo.referer,jaySupported:i,device:n,adapterVersion:5,mediaTypes:e.mediaTypes,gdprConsent:r.gdprConsent}}})},interpretResponse:function(e){var t=[];return e.body.forEach(function(e){e.ttl=r.b.getConfig("_bidderTimeout"),t.push(e)}),t},onBidWon:function(e){e.nurl&&n.triggerPixel(e.nurl)}};Object(d.registerBidder)(a)}},[172]);