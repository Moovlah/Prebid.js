pbjsChunk([392],{188:function(e,t,r){e.exports=r(189)},189:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return n});var a=r(1),p=r(2),u=r(0);var n={code:"adfinity",supportedMediaTypes:[p.b,p.d,p.c],isBidRequestValid:function(e){return Boolean(e.bidId&&e.params&&!isNaN(e.params.placement_id))},buildRequests:function(e,t){var r,a=window;try{r=new URL(t.refererInfo.referer),a=window.top}catch(e){r=a.location,u.logMessage(e)}var n=[],i={deviceWidth:a.screen.width,deviceHeight:a.screen.height,language:navigator&&navigator.language?navigator.language:"",secure:1,host:r.host,page:r.pathname,placements:n};t&&t.gdprConsent&&(i.gdpr_consent=t.gdprConsent.consentString||"ALL",i.gdpr_require=t.gdprConsent.gdprApplies?1:0);for(var s=0;s<e.length;s++){var o=e[s],c=o.params.traffic||p.b,d={placementId:o.params.placement_id,bidId:o.bidId,sizes:o.mediaTypes[c].sizes,traffic:c};o.schain&&(d.schain=o.schain),n.push(d)}return{method:"POST",url:"https://stat.adfinity.pro/?c=o&m=multi",data:i}},interpretResponse:function(e){var t=[];try{e=e.body;for(var r=0;r<e.length;r++){var a=e[r];!function(e){if(e.requestId&&e.cpm&&e.creativeId&&e.ttl&&e.currency)switch(e.mediaType){case p.b:return Boolean(e.width&&e.height&&e.ad);case p.d:return Boolean(e.vastUrl);case p.c:var t=e.native;return Boolean(t)&&Boolean(t.title)&&Boolean(t.body)&&Boolean(t.image)&&Boolean(t.impression_trackers);default:return}}(a)||t.push(a)}}catch(e){u.logMessage(e)}return t},getUserSyncs:function(){return[{type:"image",url:"https://stat.adfinity.pro/?c=o&m=cookie"}]}};Object(a.registerBidder)(n)}},[188]);