pbjsChunk([266],{482:function(e,r,t){e.exports=t(483)},483:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return s}),r.resetUserSync=function(){o=!1},r.getSyncUrl=function(){return i};var a=t(0),n=t(1),p=t(12),c=t(2),i="https://x.bidswitch.net/sync?ssp=themediagrid",o=!1,u="Bid from response has no adm parameter - ",m="Bid from response has no price parameter - ",g="Bid from response has wrong content_type parameter - ",l="Array of bid objects is empty",f="Seatbid array from response has empty item",b="Response is empty",y="Response has empty seatbid array",h="Seatbid from response has no array of bid objects - ",s={code:"gridNM",supportedMediaTypes:[c.d],isBidRequestValid:function(e){var r,t,n,s=!(e.params.source&&a.isStr(e.params.source)&&e.params.secid&&a.isStr(e.params.secid)&&e.params.pubid&&a.isStr(e.params.pubid));return(s=s||(!e.params.video||!e.params.video.protocols||!e.params.video.mimes))||(t=(r=e.params.video).protocols,n=r.mimes,s=(s=!a.isArray(n)||!n.length||n.filter(function(e){return!(e&&a.isStr(e))}).length)||(!a.isArray(t)||!t.length||t.filter(function(e){return!(a.isNumber(e)&&0<e&&!(e%1))}).length)),!s},buildRequests:function(e,i){var o=[];return(e||[]).forEach(function(e){var r=e.params,t=e.bidderRequestId,n=e.sizes,s={sizes:a.parseSizesInput(n).join(","),r:t,wrapperType:"Prebid_js",wrapperVersion:"4.35.0-pre"};i&&(i.refererInfo&&i.refererInfo.referer&&(s.u=i.refererInfo.referer),i.timeout&&(s.wtimeout=i.timeout),i.gdprConsent&&(i.gdprConsent.consentString&&(s.gdpr_consent=i.gdprConsent.consentString),s.gdpr_applies="boolean"==typeof i.gdprConsent.gdprApplies?Number(i.gdprConsent.gdprApplies):1),i.uspConsent&&(s.us_privacy=i.uspConsent)),o.push({method:"POST",url:"https://grid.bidswitch.net/hbnm?"+a.parseQueryStringParameters(s).replace(/\&$/,""),bid:e,data:r})}),o},interpretResponse:function(e,r){var t,n,s,i,o,d=[];return(e=e&&e.body)?e.seatbid&&!e.seatbid.length&&(t=y):t=b,t||!e.seatbid||(n=function(e){e?e.bid?e.bid[0]||a.logError(l):a.logError(h+JSON.stringify(e)):a.logError(f);return e&&e.bid&&e.bid[0]}(e.seatbid[0]))&&(n.adm?n.price?"video"!==n.content_type&&(t=g+n.content_type):t=m+JSON.stringify(n):t=u+JSON.stringify(n),t||(s=r.bid,n.w&&n.h||(i=a.parseSizesInput(s.sizes)[0].split("x"),n.w=i[0],n.h=i[1]),o={requestId:s.bidId,cpm:n.price,width:n.w,height:n.h,creativeId:n.auid||s.bidderRequestId,currency:"USD",netRevenue:!1,ttl:360,dealId:n.dealid,vastXml:n.adm,mediaType:c.d,adResponse:{content:n.adm}},s.renderer||s.mediaTypes&&s.mediaTypes.video&&"outstream"!==s.mediaTypes.video.context||(o.renderer=function(e){var r=p.a.install({id:e.id,url:e.url,loaded:!1});try{r.setRender(S)}catch(e){a.logWarn("Prebid Error calling setRender on renderer",e)}return r}({id:s.bidId,url:"https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js"})),d.push(o))),t&&a.logError(t),d},getUserSyncs:function(e,r,t,n){if(!o&&e.pixelEnabled){var s="";return t&&"string"==typeof t.consentString&&("boolean"==typeof t.gdprApplies?s+="&gdpr=".concat(Number(t.gdprApplies),"&gdpr_consent=").concat(t.consentString):s+="&gdpr_consent=".concat(t.consentString)),n&&(s+="&us_privacy=".concat(n)),o=!0,{type:"image",url:i+s}}}};function S(e){e.renderer.push(function(){window.ANOutstreamVideo.renderAd({targetId:e.adUnitCode,adResponse:e.adResponse})})}Object(n.registerBidder)(s)}},[482]);