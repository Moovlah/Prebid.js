pbjsChunk([334],{326:function(e,t,n){e.exports=n(327)},327:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",function(){return a});var r=n(1),p=n(2),u=n(0),a={code:"bmtm",aliases:["brightmountainmedia"],supportedMediaTypes:[p.b,p.d,p.c],isBidRequestValid:function(e){return Boolean(e.bidId&&e.params&&e.params.placement_id)},buildRequests:function(e,t){var n,r=window;try{n=new URL(t.refererInfo.referer),r=window.top}catch(e){n=r.location,u.logMessage(e)}var a=[],i={deviceWidth:r.screen.width,deviceHeight:r.screen.height,language:navigator&&navigator.language?navigator.language:"",secure:1,host:n.host,page:n.pathname,placements:a};t&&t.gdprConsent&&(i.gdpr_consent=t.gdprConsent.consentString||"ALL",i.gdpr_require=t.gdprConsent.gdprApplies?1:0);for(var s=0;s<e.length;s++){var o=e[s],d=o.params.traffic||p.b,c={placementId:o.params.placement_id,bidId:o.bidId,sizes:o.mediaTypes[d].sizes,traffic:d};o.schain&&(c.schain=o.schain),a.push(c)}return{method:"POST",url:"https://one.elitebidder.com/api/hb",data:i}},interpretResponse:function(e){var t=[];try{e=e.body;for(var n=0;n<e.length;n++){var r=e[n];t.push(r)}}catch(e){u.logMessage(e)}return t},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:"https://console.brightmountainmedia.com:8443/cookieSync"}]}};Object(r.registerBidder)(a)}},[326]);