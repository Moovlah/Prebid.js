pbjsChunk([349],{292:function(e,t,r){e.exports=r(293)},293:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return o});var n=r(0),i=r(1);var o={code:"atomx",isBidRequestValid:function(e){return e.params&&!!e.params.id},buildRequests:function(e){return e.map(function(e){return{method:"GET",url:"https://p.ato.mx/placement",data:{v:12,id:e.params.id,size:n.parseSizesInput(e.sizes)[0],prebid:e.bidId,b:0,h:"7t3y9",type:"javascript",screen:window.screen.width+"x"+window.screen.height+"x"+window.screen.colorDepth,timezone:(new Date).getTimezoneOffset(),domain:function(){var e="";try{if(""===e&&window.top==window&&(e=window.location.href),""===e&&window.top==window.parent&&(e=document.referrer),""==e){var t="atomxtest";if(window.location.ancestorOrigins[0]=t,window.location.ancestorOrigins[0]!=t){var r=window.location.ancestorOrigins;if(0==r.length)return"";e=r[r.length-1]}}}catch(e){}return""===e&&(e=document.referrer),""===e&&(e=window.location.href),e.substr(0,512)}(),r:document.referrer.substr(0,512)}}})},interpretResponse:function(e){var t=e.body,r={requestId:t.code,cpm:1e3*t.cpm,width:t.width,height:t.height,creativeId:t.creative_id,currency:"USD",netRevenue:!0,ttl:60};return t.adm?r.ad=t.adm:r.adUrl=t.url,[r]},getUserSyncs:function(){return[]}};Object(i.registerBidder)(o)}},[292]);