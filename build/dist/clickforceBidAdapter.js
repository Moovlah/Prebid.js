pbjsChunk([322],{350:function(e,t,n){e.exports=n(351)},351:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",function(){return a});var r=n(0),i=n(1),c=n(2),d="https://ad.holmesmind.com/adserver/prebid.json?cb="+(new Date).getTime()+"&hb=1&ver=1.21",a={code:"clickforce",supportedMediaTypes:[c.b,c.c],isBidRequestValid:function(e){return e&&e.params&&!!e.params.zone},buildRequests:function(e){var t=[];return r._each(e,function(e){t.push({z:e.params.zone,bidId:e.bidId})}),{method:"POST",url:d,data:t,validBidRequests:e}},interpretResponse:function(e,t){var n=[],i=[];return void 0!==t&&r._each(t.validBidRequests,function(e){i[e.bidId]=e}),r._each(e.body,function(e){null!=e.requestId&&(3==e.width?n.push({requestId:e.requestId,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.creativeId,currency:e.currency,netRevenue:e.netRevenue,ttl:e.ttl,native:{title:e.tag.content.title,body:e.tag.content.content,image:{url:e.tag.content.image,height:900,width:1600},icon:{url:e.tag.content.icon,height:900,width:900},clickUrl:e.tag.cu,cta:e.tag.content.button_text,sponsoredBy:e.tag.content.advertiser,impressionTrackers:e.tag.iu},mediaType:"native"}):n.push({requestId:e.requestId,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.creativeId,currency:e.currency,netRevenue:e.netRevenue,ttl:e.ttl,ad:e.tag,mediaType:"banner"}))}),n},getUserSyncs:function(e){return e.iframeEnabled?[{type:"iframe",url:"https://cdn.holmesmind.com/js/capmapping.htm"}]:e.pixelEnabled?[{type:"image",url:"https://c.holmesmind.com/cm"}]:void 0}};Object(i.registerBidder)(a)}},[350]);