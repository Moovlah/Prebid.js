pbjsChunk([195],{651:function(e,t,r){e.exports=r(652)},652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return d});var n=r(0),i=r(1),a=r(2),s="https://brainlyads.com",d={code:"nextMillennium",supportedMediaTypes:[a.b],isBidRequestValid:function(e){return!(!e.params.placement_id||!n.isNumber(e.params.placement_id))},buildRequests:function(e){var t=[];return n._each(e,function(e){t.push({method:"POST",url:s+"/hb/s2s",options:{contentType:"application/json",withCredentials:!0},data:JSON.stringify({placement_id:n.getBidIdParameter("placement_id",e.params)}),bidId:e.bidId})}),t},interpretResponse:function(e,t){try{var r=e.body,i=[];return 0<Number(r.cpm)&&i.push({requestId:t.bidId,cpm:r.cpm,width:r.width,height:r.height,creativeId:r.creativeId,currency:"USD",netRevenue:!1,ttl:360,ad:r.ad}),i}catch(e){return n.logError(e),[]}},getUserSyncs:function(e){var t=[];return e.iframeEnabled&&t.push({type:"iframe",url:s+"/hb/s2s/matching"}),e.pixelEnabled&&t.push({type:"image",url:s+"/hb/s2s/matching"}),t}};Object(i.registerBidder)(d)}},[651]);