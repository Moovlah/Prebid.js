pbjsChunk([353],{282:function(e,r,t){e.exports=t(283)},283:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"ADAPTER_VERSION",function(){return a}),t.d(r,"API_SERVERS_MAP",function(){return d}),t.d(r,"spec",function(){return o});var i=t(1),n=t(2),p=t(3),a="1.0.0",u=[n.b],d={default:"ad2.apx.appier.net",tw:"ad2.apx.appier.net",jp:"ad-jp.apx.appier.net"},o={code:"appier",aliases:["appierBR","appierExt","appierGM"],supportedMediaTypes:u,isBidRequestValid:function(e){return"string"==typeof e.params.hzid},buildRequests:function(e,r){if(0===e.length)return[];var t=this.getApiServer();return[{method:"POST",url:"//".concat(t).concat("/v1/prebid/bid"),data:{bids:e,refererInfo:r.refererInfo,version:a},bidderRequest:r}]},interpretResponse:function(e){return Array.isArray(e.body)?e.body:[]},getApiServer:function(){var e,r=p.b.getConfig("appier.server");return r||(e=p.b.getConfig("appier.farm"),r=d[e]||d.default),r}};Object(i.registerBidder)(o)}},[282]);