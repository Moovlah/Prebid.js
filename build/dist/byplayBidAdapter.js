pbjsChunk([328],{338:function(e,t,r){e.exports=r(339)},339:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return d});var i=r(3),n=r(1),o=r(12),c=r(2);function s(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function a(i){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach(function(e){var t,r,n;t=i,n=o[r=e],r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(o,e))})}return i}var d={code:"byplay",supportedMediaTypes:[c.d],isBidRequestValid:function(e){return!!e.params.sectionId},buildRequests:function(e){return e.map(function(e){var t=a({requestId:e.bidId,sectionId:e.params.sectionId},e.params.env?{env:e.params.env}:{});return{method:"POST",url:"https://prebid.byplay.net/bidder",data:JSON.stringify(t),options:{withCredentials:!1}}})},interpretResponse:function(e,t){var r,n=e.body;return[{requestId:JSON.parse(t.data).requestId,cpm:n.cpm,width:n.width,height:n.height,creativeId:n.creativeId||"0",ttl:i.b.getConfig("_bidderTimeout"),currency:"JPY",netRevenue:n.netRevenue,mediaType:c.d,vastXml:n.vastXml,renderer:((r=o.a.install({url:"https://cdn.byplay.net/prebid-byplay-v2.js"})).setRender(function(e){e.renderer.push(function(){window.adtagRender(e)})}),r)}]}};Object(n.registerBidder)(d)}},[338]);