pbjsChunk([245],{531:function(e,r,t){e.exports=t(532)},532:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return n});var o=t(0),i=t(1),n={code:"iprom",isBidRequestValid:function(e){var r=0<arguments.length&&void 0!==e?e:{},t=r.bidder,i=r.params,n=void 0===i?{}:i;return n.id?"string"!=typeof n.id?(o.logError("".concat(t,": Parameter 'id' needs to be a string")),!1):n.dimension?"string"==typeof n.dimension||(o.logError("".concat(t,": Parameter 'dimension' needs to be a string")),!1):(o.logError("".concat(t,": Required parameter 'dimension' missing")),!1):(o.logError("".concat(t,": Parameter 'id' missing")),!1)},buildRequests:function(e,r){var t={bids:e,referer:r.refererInfo,version:"v1.0.0"};return{method:"POST",url:"https://core.iprom.net/programmatic",data:JSON.stringify(t)}},interpretResponse:function(e){var r=e.body,t=[];return r.forEach(function(e){t.push({ad:e.ad,requestId:e.requestId,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.creativeId,currency:e.currency||"EUR",netRevenue:e.netRevenue||!0,ttl:e.ttl||360})}),t}};Object(i.registerBidder)(n)}},[531]);