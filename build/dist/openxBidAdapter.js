pbjsChunk([187],{673:function(e,t,r){e.exports=r(674)},674:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"USER_ID_CODE_TO_QUERY_ARG",function(){return l}),r.d(t,"spec",function(){return h});var o=r(3),n=r(1),c=r(0),u=r(2);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,a=void 0;try{for(var d,s=e[Symbol.iterator]();!(n=(d=s.next()).done)&&(r.push(d.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=[u.b,u.d],p="hb_pb",m="3.0.3",s="USD",l={britepoolid:"britepoolid",criteoId:"criteoid",digitrustid:"digitrustid",fabrickId:"nuestarid",haloId:"audigentid",id5id:"id5id",idl_env:"lre",IDP:"zeotapid",idxId:"idxid",intentIqId:"intentiqid",lipb:"lipbid",lotamePanoramaId:"lotameid",merkleId:"merkleid",netId:"netid",parrableId:"parrableid",pubcid:"pubcid",quantcastId:"quantcastid",sharedId:"sharedid",tapadId:"tapadid",tdid:"ttduuid",verizonMediaId:"verizonmediaid"},h={code:"openx",gvlid:69,supportedMediaTypes:a,isBidRequestValid:function(e){var t=e.params.delDomain||e.params.platform;return c.deepAccess(e,"mediaTypes.banner")&&t?!!e.params.unit||0<c.deepAccess(e,"mediaTypes.banner.sizes.length"):!(!e.params.unit||!t)},buildRequests:function(e,n){if(0===e.length)return[];var i=[],t=d(e.reduce(function(e,t){var r;return r=t,c.deepAccess(r,"mediaTypes.video")&&!c.deepAccess(r,"mediaTypes.banner")||r.mediaType===u.d?e[0].push(t):e[1].push(t),e},[[],[]]),2),r=t[0],a=t[1];return 0<a.length&&i.push(function(e,t){var n=[],i=!1,r=f(e,t),a=c._map(e,function(e){return e.params.unit});r.aus=c._map(e,function(e){return c.parseSizesInput(e.mediaTypes.banner.sizes).join(",")}).join("|"),r.divIds=c._map(e,function(e){return encodeURIComponent(e.adUnitCode)}).join(","),a.some(function(e){return e})&&(r.auid=a.join(","));e.some(function(e){return e.params.doNotTrack})&&(r.ns=1);!0!==o.b.getConfig("coppa")&&!e.some(function(e){return e.params.coppa})||(r.tfcd=1);e.forEach(function(t){var e,r;t.params.customParams?(e=c._map(Object.keys(t.params.customParams),function(e){return function(e,t){var r=t[e];c.isArray(r)&&(r=r.join(","));return(e.toLowerCase()+"="+r.toLowerCase()).replace("+",".").replace("/","_")}(e,t.params.customParams)}),r=window.btoa(e.join("&")),i=!0,n.push(r)):n.push("")}),i&&(r.tps=n.join(","));return b(r,u.b,e),{method:"GET",url:r.ph?"https://u.openx.net/w/1.0/arj":"https://".concat(e[0].params.delDomain,"/w/1.0/arj"),data:r,payload:{bids:e,startTime:new Date}}}(a,n)),0<r.length&&r.forEach(function(e){var t,r;i.push({method:"GET",url:(r=function(e,t){var r,n,i=f([e],t),a=c.deepAccess(e,"params.video")||{},d=c.deepAccess(e,"mediaTypes.video.context"),s=c.deepAccess(e,"mediaTypes.video.playerSize");c.isArray(e.sizes)&&2===e.sizes.length&&!c.isArray(e.sizes[0])?(r=parseInt(e.sizes[0],10),n=parseInt(e.sizes[1],10)):c.isArray(e.sizes)&&c.isArray(e.sizes[0])&&2===e.sizes[0].length?(r=parseInt(e.sizes[0][0],10),n=parseInt(e.sizes[0][1],10)):c.isArray(s)&&2===s.length&&(r=parseInt(s[0],10),n=parseInt(s[1],10));Object.keys(a).forEach(function(e){"openrtb"===e?(a[e].w=r||a[e].w,a[e].v=n||a[e].v,i[e]=JSON.stringify(a[e])):e in i||"url"===e||(i[e]=a[e])}),i.auid=e.params.unit,i.vwd=r||a.vwd,i.vht=n||a.vht,"outstream"===d&&(i.vos="101");a.mimes&&(i.vmimes=a.mimes);e.params.test&&(i.vtest=1);return b(i,u.d,[e]),i}(t=e,n)).ph?"https://u.openx.net/v/1.0/avjp":"https://".concat(t.params.delDomain,"/v/1.0/avjp"),data:r,payload:{bid:t,startTime:new Date}})}),i},interpretResponse:function(e,t){var r=e.body;return((/avjp$/.test(t.url)?u.d:u.b)===u.d?function(e,t){var r=t.bid,n=(t.startTime,[]);{var i,a;void 0!==e&&""!==e.vastUrl&&0<e.pub_rev&&(i=c.parseUrl(e.vastUrl).search||{},(a={}).requestId=r.bidId,e.deal_id&&(a.dealId=e.deal_id),a.ttl=300,a.netRevenue=!0,a.currency=e.currency,a.cpm=parseInt(e.pub_rev,10)/1e3,a.width=parseInt(e.width,10),a.height=parseInt(e.height,10),a.creativeId=e.adid,a.vastUrl=e.vastUrl,a.mediaType=u.d,e.ph=i.ph,e.colo=i.colo,e.ts=i.ts,n.push(a))}return n}:function(e,t){for(var r=t.bids,n=(t.startTime,e.ads.ad),i=[],a=0;a<n.length;a++){var d,s=n[a],o=parseInt(s.idx,10),c={};c.requestId=r[o].bidId,s.pub_rev&&(c.cpm=Number(s.pub_rev)/1e3,(d=s.creative[0])&&(c.width=d.width,c.height=d.height),c.creativeId=d.id,c.ad=s.html,s.deal_id&&(c.dealId=s.deal_id),c.ttl=300,c.netRevenue=!0,c.currency=s.currency,s.tbd&&(c.tbd=s.tbd),c.ts=s.ts,c.meta={},s.brand_id&&(c.meta.brandId=s.brand_id),s.adv_id&&(c.meta.dspid=s.adv_id),i.push(c))}return i})(r,t.payload)},getUserSyncs:function(e,t,r,n){if(e.iframeEnabled||e.pixelEnabled)return[{type:e.iframeEnabled?"iframe":"image",url:c.deepAccess(t,"0.body.ads.pixels")||c.deepAccess(t,"0.body.pixels")||function(e,t){var r=[];e&&(r.push("gdpr="+(e.gdprApplies?1:0)),r.push("gdpr_consent="+encodeURIComponent(e.consentString||"")));t&&r.push("us_privacy="+encodeURIComponent(t));return"".concat("https://u.openx.net/w/1.0/pd").concat(0<r.length?"?"+r.join("&"):"")}(r,n)}]},transformBidParams:function(e){return c.convertTypes({unit:"string",customFloor:"number"},e)}};function f(e,t){var r,n,i,a,d=c.inIframe(),s={ju:o.b.getConfig("pageUrl")||t.refererInfo.referer,ch:document.charSet||document.characterSet,res:"".concat(screen.width,"x").concat(screen.height,"x").concat(screen.colorDepth),ifr:d,tz:(new Date).getTimezoneOffset(),tws:function(e){var t,r,n,i=window,a=document,d=a.documentElement;if(e){try{i=window.top,a=window.top.document}catch(e){return}d=a.documentElement,n=a.body,t=i.innerWidth||d.clientWidth||n.clientWidth,r=i.innerHeight||d.clientHeight||n.clientHeight}else d=a.documentElement,t=i.innerWidth||d.clientWidth,r=i.innerHeight||d.clientHeight;return"".concat(t,"x").concat(r)}(d),be:1,bc:e[0].params.bc||"".concat(p,"_").concat(m),dddid:c._map(e,function(e){return e.transactionId}).join(","),nocache:(new Date).getTime()};return e[0].params.platform&&(s.ph=e[0].params.platform),t.gdprConsent&&(void 0!==(r=t.gdprConsent).consentString&&(s.gdpr_consent=r.consentString),void 0!==r.gdprApplies&&(s.gdpr=r.gdprApplies?1:0),"iab"===o.b.getConfig("consentManagement.cmpApi")&&(s.x_gdpr_f=1)),t&&t.uspConsent&&(s.us_privacy=t.uspConsent),c.deepAccess(e[0],"crumbs.pubcid")&&c.deepSetValue(e[0],"userId.pubcid",c.deepAccess(e[0],"crumbs.pubcid")),n=s,i=e[0].userId,c._each(i,function(e,t){var r=l[t];if(l.hasOwnProperty(t))switch(t){case"digitrustid":n[r]=c.deepAccess(e,"data.id");break;case"lipb":n[r]=e.lipbid;break;case"parrableId":n[r]=e.eid;break;case"id5id":n[r]=e.uid;break;default:n[r]=e}}),s=n,e[0].schain&&(s.schain=(a=e[0].schain,"".concat(a.ver,",").concat(a.complete,"!").concat(function(e){var r=["asi","sid","hp","rid","name","domain"];return e.map(function(t){return r.map(function(e){return t[e]||""}).join(",")}).join("!")}(a.nodes)))),s}function b(e,r,t){var n=[],i=!1;t.forEach(function(e){var t=function(e,t){var r={},n=o.b.getConfig("currency.adServerCurrency")||s;"function"==typeof e.getFloor&&(r=e.getFloor({currency:n,mediaType:t,size:"*"}));var i=r.floor||e.params.customFloor||0;return Math.round(1e3*i)}(e,r);t?(n.push(t),i=!0):n.push(0)}),i&&(e.aumfs=n.join(","))}Object(n.registerBidder)(h)}},[673]);