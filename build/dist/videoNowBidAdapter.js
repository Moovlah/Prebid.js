pbjsChunk([84],{934:function(e,r,n){e.exports=n(935)},935:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"spec",function(){return i});var E=n(0),t=n(1),o=n(2),x=n(39),g="https://bidder.videonow.ru/prebid",R="videonow",O=300;var i={code:R,supportedMediaTypes:[o.b],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.pId)},buildRequests:function(e,m){E.logInfo("".concat(R,". buildRequests"));var b=[];return e.forEach(function(e){var r,n,t,o,i,c,d,a,u,l,f,s,p,v,h=(r=e,n=m.refererInfo,t=r.ext,o=r.bidId,i=r.params,c=r.code,d=r.sizes,u=(a=i||{}).pId,l=a.bidFloor,f=a.cur,s=a.placementId,v={method:"POST",url:p="".concat(p=a.url||g).concat(~p.indexOf("?")?"&":"?","profile_id=").concat(u),data:{id:o,cpm:l,code:c,sizes:d,cur:f||"RUB",placementId:s,ref:n&&n.referer}},t&&Object.keys(t).forEach(function(e){v.data["ext_".concat(e)]=t[e]}),v);h&&b.push(h)}),b},interpretResponse:function(e,r){if(!e||!e.body)return[];var n=(r&&r.data||{}).id;if(!n)return[];var t=e.body,o=t.seatbid,i=t.cur,c=t.ext;if(!o||!o.length)return[];var d=(c||{}).placementId;if(!d)return[];var a=[];return o.forEach(function(e){var r=e.bid;r&&r.length&&r.forEach(function(e){var r=function(e,r,n,t){var o=e.id,i=e.nurl,c=e.code,d=e.price,a=e.crid,u=e.ext,l=e.ttl,f=e.netRevenue,s=e.w,p=e.h,v=e.adm;if(!o||!d||!v)return null;var h=u||{},m=h.init,b=h.module,g=h.format;if(!m)return E.logError("vnInitModulePath is not defined"),null;var w=b||{},I=w.log,y=w.min;return y||I?{requestId:r,cpm:d,width:s,height:p,creativeId:a,currency:n||"RUB",netRevenue:void 0===f||f,ttl:l||O,ad:c,nurl:i,renderer:{url:y||I,render:function(){var e,r=window.document;t&&r.getElementById(t)?(e={module:b,dataXml:v},g&&(e.format=g),((window.videonow=window.videonow||{}).init=window.videonow.init||{})[1]=e,Object(x.a)("".concat(m).concat(~m.indexOf("?")?"&":"?","profileId=").concat(1),"outstream")):E.logError("bidAdapter ".concat(R,": ").concat(t," not found"))}}}:(E.logError("module's paths are not defined"),null)}(e,n,i,d);r&&a.push(r)})}),a},getUserSyncs:function(o,e){var i=[];return e&&e.length&&(e.forEach(function(e){var r=(e&&e.body||{}).ext||{},n=r.pixels,t=r.iframes;o.iframeEnabled&&t&&t.length&&t.forEach(function(e){return i.push({type:"iframe",url:e})}),o.pixelEnabled&&n&&n.length&&n.forEach(function(e){return i.push({type:"image",url:e})})}),E.logInfo("".concat(R," getUserSyncs() syncs=").concat(i.length))),i},onBidWon:function(e){var r=(e||{}).nurl;r&&E.triggerPixel(E.replaceAuctionPrice(r,e.cpm))}};Object(t.registerBidder)(i)}},[934]);