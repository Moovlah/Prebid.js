pbjsChunk([272],{470:function(e,t,r){e.exports=r(471)},471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return o});var n=r(1),i=r(10),d=r.n(i),s=r(2),o={code:"glomex",supportedMediaTypes:[s.b],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.integrationId)},buildRequests:function(e,t){var r=1<arguments.length&&void 0!==t?t:{},n=r.refererInfo||{},i=r.gdprConsent||{};return{method:"POST",url:"".concat("https://prebid.mes.glomex.cloud/request-bid"),data:{auctionId:r.auctionId,refererInfo:{isAmp:n.isAmp,numIframes:n.numIframes,reachedTop:n.reachedTop,referer:n.referer},gdprConsent:{consentString:i.consentString,gdprApplies:i.gdprApplies},bidRequests:e.map(function(e){var t=e.params,r=e.sizes;return{bidId:e.bidId,adUnitCode:e.adUnitCode,params:t,sizes:r}})},options:{withCredentials:!1,contentType:"application/json"},validBidRequests:e}},interpretResponse:function(n,e){var i=[];return e.validBidRequests.forEach(function(t){var e,r;!n.body||(e=d()(n.body.bids,function(e){return String(t.bidId)===String(e.id)}))&&(r={requestId:t.bidId,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.creativeId,dealId:e.dealId,currency:e.currency,netRevenue:e.netRevenue,ttl:e.ttl,ad:e.ad},i.push(r))}),i}};Object(n.registerBidder)(o)}},[470]);