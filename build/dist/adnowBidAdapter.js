pbjsChunk([377],{222:function(e,t,r){e.exports=r(223)},223:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return o});var n=r(1),s=r(2),d=r(0),i=r(13),a=r.n(i);function u(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function c(i){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach(function(e){var t,r,n;t=i,n=a[r=e],r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(a,e))})}return i}var o={code:"adnow",supportedMediaTypes:[s.c,s.b],isBidRequestValid:function(e){if(!e||!e.params)return!1;if(!parseInt(e.params.codeId,10))return!1;var t=e.params.mediaType||s.c;return a()(this.supportedMediaTypes,t)},buildRequests:function(e){var a=this;return e.map(function(e){var t,r,n=a._isBannerRequest(e)?s.b:s.c,i={Id:parseInt(e.params.codeId,10),mediaType:n,out:"prebid",d_user_agent:navigator.userAgent,requestid:e.bidId};return n===s.b?i.sizes=d.parseSizesInput(e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes).join("|"):(i.width=i.height=200,0<(t=d.deepAccess(e,"mediaTypes.native.image.sizes",[])).length&&(r=Array.isArray(t[0])?t[0]:t,i.width=r[0]||i.width,i.height=r[1]||i.height)),{method:"GET",url:"https://n.ads3-adnow.com/a",data:d.parseQueryStringParameters(i),options:{withCredentials:!1,crossOrigin:!0},bidRequest:e}})},interpretResponse:function(e,t){var r=t.bidRequest,n=e.body;if(!n||!n.currency||!n.cpm)return[];var i=n.meta.mediaType||s.c;return a()(this.supportedMediaTypes,i)?(n.requestId=r.bidId,i===s.b?[this._getBannerBid(n)]:i===s.c?[this._getNativeBid(n)]:[]):[]},_commonBidData:function(e){return{requestId:e.requestId,currency:e.currency||"USD",cpm:e.cpm||0,creativeId:e.creativeId||"undefined-creative",netRevenue:e.netRevenue||!0,ttl:e.ttl||360,meta:e.meta||{}}},_isBannerRequest:function(e){return!(!e.mediaTypes||!e.mediaTypes.banner)},_getBannerBid:function(e){return c(c({},this._commonBidData(e)),{},{width:e.width||300,height:e.height||250,ad:e.ad||"<div>Empty Ad</div>"})},_getNativeBid:function(e){return c(c({},this._commonBidData(e)),{},{native:e.native||{}})}};Object(n.registerBidder)(o)}},[222]);