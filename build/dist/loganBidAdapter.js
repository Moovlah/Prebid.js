pbjsChunk([228],{581:function(e,t,n){e.exports=n(582)},582:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",function(){return a});var r=n(1),g=n(2),h=n(0);var a={code:"logan",supportedMediaTypes:[g.b,g.d,g.c],isBidRequestValid:function(e){return Boolean(e.bidId&&e.params&&!isNaN(parseInt(e.params.placementId)))},buildRequests:function(e,t){var n=0<arguments.length&&void 0!==e?e:[],r=1<arguments.length?t:void 0,a=h.getWindowTop(),s=a.location,i=[],c={deviceWidth:a.screen.width,deviceHeight:a.screen.height,language:navigator&&navigator.language?navigator.language.split("-")[0]:"",secure:1,host:s.host,page:s.pathname,placements:i};r&&(r.uspConsent&&(c.ccpa=r.uspConsent),r.gdprConsent&&(c.gdpr=r.gdprConsent));for(var o=n.length,d=0;d<o;d++){var p=n[d],u={placementId:p.params.placementId,bidId:p.bidId,schain:p.schain||{}},l=p.mediaTypes;l&&l[g.b]&&l[g.b].sizes?(u.sizes=l[g.b].sizes,u.traffic=g.b):l&&l[g.d]&&l[g.d].playerSize?(u.wPlayer=l[g.d].playerSize[0],u.hPlayer=l[g.d].playerSize[1],u.traffic=g.d):l&&l[g.c]&&(u.native=l[g.c],u.traffic=g.c),i.push(u)}return{method:"POST",url:"https://USeast2.logan.ai/?c=o&m=multi",data:c}},interpretResponse:function(e){for(var t=[],n=0;n<e.body.length;n++){var r=e.body[n];!function(e){if(e.requestId&&e.cpm&&e.creativeId&&e.ttl&&e.currency)switch(e.mediaType){case g.b:return Boolean(e.width&&e.height&&e.ad);case g.d:return Boolean(e.vastUrl);case g.c:return Boolean(e.native&&e.native.impressionTrackers);default:return}}(r)||t.push(r)}return t},getUserSyncs:function(e,t,n,r){var a="https://ssp-cookie.logan.ai/html?src=pbjs";return n&&n.consentString&&("boolean"==typeof n.gdprApplies?a+="&gdpr=".concat(Number(n.gdprApplies),"&gdpr_consent=").concat(n.consentString):a+="&gdpr=0&gdpr_consent=".concat(n.consentString)),r&&r.consentString&&(a+="&ccpa_consent=".concat(r.consentString)),[{type:"iframe",url:a}]}};Object(r.registerBidder)(a)}},[581]);