pbjsChunk([340],{312:function(e,t,i){e.exports=i(313)},313:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"spec",function(){return r});var s=i(0),n=i(1);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r={code:"bidglass",aliases:["bg"],isBidRequestValid:function(e){return!(!e.params.adUnitId||isNaN(parseFloat(e.params.adUnitId))||!isFinite(e.params.adUnitId))},buildRequests:function(e){var r=[],o=window.bidglass;s._each(e,function(e){e.sizes=s.isArray(e.sizes)&&s.isArray(e.sizes[0])?e.sizes:[e.sizes],e.sizes=e.sizes.filter(function(e){return s.isArray(e)});var t,i=s.getBidIdParameter("adUnitId",e.params),n=s.deepClone(e.params);delete n.adUnitId,"object"!==a(o)||!o.getTargeting||(t=o.getTargeting(i,n.targeting))&&0<Object.keys(t).length&&(n.targeting=t),r.push({bidId:e.bidId,sizes:e.sizes,adUnitId:i,options:n})});var t={reqId:s.getUniqueIdentifierStr(),imps:r,ref:window===window.top?window.location.href:window.parent===window.top?document.referrer:null,ori:function(){var e,t=[window.location.protocol+"//"+window.location.hostname];if(window.location.ancestorOrigins)for(var i=0;i<window.location.ancestorOrigins.length;i++)t.push(window.location.ancestorOrigins[i]);else window!==window.top&&(e=document.referrer.split("/"),t.push(e[0]+"//"+e[2]),window.parent!==window.top&&t.push("null"));return t}()};return{method:"POST",url:"https://bid.glass/ad/hb.php?src=prebid_prebid_4.35.0-pre",data:JSON.stringify(t),options:{contentType:"text/plain",withCredentials:!1}}},interpretResponse:function(e){var t=[];return s._each(e.body.bidResponses,function(e){t.push({requestId:e.requestId,cpm:parseFloat(e.cpm),width:parseInt(e.width,10),height:parseInt(e.height,10),creativeId:e.creativeId,dealId:e.dealId||null,currency:e.currency||"USD",mediaType:e.mediaType||"banner",netRevenue:!0,ttl:e.ttl||10,ad:e.ad})}),t}};Object(n.registerBidder)(r)}},[312]);