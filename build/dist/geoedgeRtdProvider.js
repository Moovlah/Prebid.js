pbjsChunk([276],{462:function(e,n,r){e.exports=r(463)},463:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),r.d(n,"WRAPPER_URL",function(){return d}),r.d(n,"HTML_PLACEHOLDER",function(){return p}),r.d(n,"getClientUrl",function(){return s}),r.d(n,"wrapper",function(){return i}),n.fetchWrapper=b,n.setWrapper=l,n.preloadClient=g,n.wrapHtml=m,n.wrapBidResponse=v,r.d(n,"geoedgeSubmodule",function(){return T}),n.beforeInit=j;var i,a,c,t=r(11),o=r(4),u=r(0),d="https://wrappers.geoedge.be/wrapper.html",p="${creative}",f=Object(u.generateUUID)(),s=function(e){return"".concat("https://rumcdn.geoedge.be","/").concat(e,"/").concat("grumi.js")};function b(e){if(a)return e(i);Object(o.a)(d,e)}function l(e){a=!0,i=e}function g(e){var n=document.createElement("link");n.rel="preload",n.as="script",n.href=s(e),n.onload=function(){c=!0},Object(u.insertElement)(n)}function m(e,n){return e.replace(p,(r=n,function(){return r}));var r}function h(e,n,r,t){var i,o,a,c,u={"${key}":t,"%%ADUNIT%%":(i=e).adUnitCode,"%%WIDTH%%":i.width,"%%HEIGHT%%":i.height,"%%PATTERN:hb_adid%%":i.adId,"%%PATTERN:hb_bidder%%":i.bidderCode,"%_isHb!":!0,"%_hbcid!":i.creativeId||"","%%PATTERN:hb_pb%%":i.pbHg,"%%SITE%%":location.hostname,"%_pimp%":f};return o=n,a=u,c=new RegExp("\\"+Object.keys(a).join("|"),"gi"),m(n=o.replace(c,function(e){return a[e]}),r)}function v(e,n){var r,t=h(e,i,e.ad,n);r=t,e.ad=r}function E(e,n){var r,t,i=(r=e.bidderCode,t=n.bidders,Object(u.isEmpty)(t)||!0===t[r]),o=!n.wap||c;return a&&i&&o}var T={name:"geoedge",init:function(e,n){var r=e.params;return r&&r.key?(g(r.key),!0):(Object(u.logError)("missing key for geoedge RTD module provider"),!1)},onBidResponseEvent:function(e,n,r){var t=n.params;E(e,t)&&v(e,t.key)}};function j(){b(l),Object(t.e)("realTimeData",T)}j()}},[462]);