pbjsChunk([94],{912:function(e,n,t){e.exports=t(913)},913:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.resetUserSync=function(){i=!1},t.d(n,"spec",function(){return p});var d=t(0),o=t(3),s=t(1),a="3.5V",i=!1;d.logMessage("Initializing UDM Adapter. PBJS Version: ".concat("4.35.0-pre"," with adapter version: ").concat(a,"  Updated 20191028"));var p={code:"underdogmedia",bidParams:[],isBidRequestValid:function(e){var n=e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes?e.mediaTypes.banner.sizes:e.sizes;return!!(e.params&&e.params.siteId&&n&&0<n.length)},buildRequests:function(e,n){var t=[],s=0;e.forEach(function(e){var n=e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes?e.mediaTypes.banner.sizes:e.sizes;t=d.flatten(t,d.parseSizesInput(n)),s=e.params.siteId});var i={tid:1,dt:10,sid:s,sizes:t.join(","),version:a};if(n&&n.gdprConsent&&(void 0!==n.gdprConsent.gdprApplies&&(i.gdprApplies=!!n.gdprConsent.gdprApplies),n.gdprConsent.vendorData&&n.gdprConsent.vendorData.vendorConsents&&void 0!==n.gdprConsent.vendorData.vendorConsents[159]&&(i.consentGiven=!!n.gdprConsent.vendorData.vendorConsents[159]),void 0!==n.gdprConsent.consentString&&(i.consentData=n.gdprConsent.consentString)),n.uspConsent&&(i.uspConsent=n.uspConsent),!i.gdprApplies||i.consentGiven)return{method:"GET",url:"https://udmserve.net/udm/img.fetch",data:i,bidParams:e}},getUserSyncs:function(t,e){if(!i&&0<e.length&&e[0].body&&e[0].body.userSyncs&&0<e[0].body.userSyncs.length)return i=!0,e[0].body.userSyncs.filter(function(e){var n=e.type;return!(!t.iframeEnabled||"iframe"!==n)||(!(!t.pixelEnabled||"image"!==n)||void 0)})},interpretResponse:function(e,n){var r=[];return n.bidParams.forEach(function(i){e.body.mids.forEach(function(n){var t,e,s;0<n.useCount||(n.useCount||(n.useCount=0),t=!0,e=i.mediaTypes&&i.mediaTypes.banner&&i.mediaTypes.banner.sizes?i.mediaTypes.banner.sizes:i.sizes,d.parseSizesInput(e).forEach(function(e){e===n.width+"x"+n.height&&(t=!1)}),t||((s={requestId:i.bidId,bidderCode:p.code,cpm:parseFloat(n.cpm),width:n.width,height:n.height,ad:n.ad_code_html,creativeId:n.mid,currency:"USD",netRevenue:!1,ttl:n.ttl||60}).cpm<=0||s.ad.length<=0||(n.useCount++,s.ad+=function(e,n,t){var s=n.notification_url,i=s.indexOf(";version=");i+1&&(s=s.substring(0,i));s+=";version=".concat(a),s+=";cb="+Math.random(),s+=";qqq="+1/e.cpm,s+=";hbt="+o.b.getConfig("_bidderTimeout"),s+=";style=adapter",s+=";vis="+encodeURIComponent(document.visibilityState),s+=";traffic_info="+encodeURIComponent(JSON.stringify(function(){for(var e,n={},t=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),s=0;s<t.length;s++)(e=t[s].split("="))[0].match(/^utm_/)&&(n[e[0]]=e[1].substr(0,150));return n}())),t.params.subId&&(s+=";subid="+encodeURIComponent(t.params.subId));return'<script async src="'+s+'"><\/script>'}(s,n,i),r.push(s))))})}),r}};Object(s.registerBidder)(p)}},[912]);