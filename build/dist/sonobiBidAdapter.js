pbjsChunk([120],{846:function(e,t,r){e.exports=r(847)},847:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return a}),r.d(t,"_isInbounds",function(){return o}),t._getPlatform=O;var n=r(1),y=r(0),i=r(2),d=r(3),g=r(12),u=r(44);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,s=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw s}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l="sonobi",f=Object(y.generateUUID)(),a={code:l,supportedMediaTypes:[i.b,i.d],isBidRequestValid:function(e){if(!e.params)return!1;if(!e.params.ad_unit&&!e.params.placement_id)return!1;if(!Object(y.deepAccess)(e,"mediaTypes.banner")&&!Object(y.deepAccess)(e,"mediaTypes.video"))return!1;if(Object(y.deepAccess)(e,"mediaTypes.banner")){if(!Object(y.deepAccess)(e,"mediaTypes.banner.sizes")&&!e.params.sizes)return!1}else if(Object(y.deepAccess)(e,"mediaTypes.video")){if("outstream"===Object(y.deepAccess)(e,"mediaTypes.video.context")&&!e.params.sizes)return!1;if("instream"===Object(y.deepAccess)(e,"mediaTypes.video.context")&&!Object(y.deepAccess)(e,"mediaTypes.video.playerSize"))return!1}return!0},buildRequests:function(e,t){var r=e.map(function(e){var t=function(e){if(e.params.ad_unit)return e.params.ad_unit;return e.params.placement_id}(e);return/^[\/]?[\d]+[[\/].+[\/]?]?$/.test(t)?(t="/"===t.charAt(0)?t:"/"+t,b({},"".concat(t,"|").concat(e.bidId),"".concat(m(e)).concat(v(e)))):/^[0-9a-fA-F]{20}$/.test(t)&&20===t.length?b({},e.bidId,"".concat(t,"|").concat(m(e)).concat(v(e))):void Object(y.logError)("The ad unit code or Sonobi Placement id for slot ".concat(e.bidId," is invalid"))}),n={};r.forEach(function(e){p(n,e)});var i,s={key_maker:JSON.stringify(n),ref:t.refererInfo.referer,s:Object(y.generateUUID)(),pv:f,vp:O(),lib_name:"prebid",lib_v:"4.35.0-pre",us:0};d.b.getConfig("userSync")&&d.b.getConfig("userSync").syncsPerBidder&&(s.us=d.b.getConfig("userSync").syncsPerBidder),u.a.canBidderRegisterSync("iframe",l)?s.ius=1:s.ius=0,Object(y.deepAccess)(e[0],"params.hfa")&&(s.hfa=Object(y.deepAccess)(e[0],"params.hfa")),e[0].params.referrer&&(s.ref=e[0].params.referrer),t&&t.gdprConsent&&(s.gdpr=t.gdprConsent.gdprApplies?"true":"false",t.gdprConsent.consentString&&(s.consent_string=t.gdprConsent.consentString)),e[0].schain&&(s.schain=JSON.stringify(e[0].schain)),Object(y.deepAccess)(e[0],"userId")&&0<Object.keys(e[0].userId).length&&((i=Object(y.deepClone)(e[0].userId)).id5id&&(i.id5id=Object(y.deepAccess)(i,"id5id.uid")),s.userid=JSON.stringify(i));var a=Object(y.deepAccess)(e[0],"userIdAsEids");Array.isArray(a)&&0<a.length&&(s.eids=JSON.stringify(a));var o=e[0].params.keywords;if(o&&(s.kw=o),t&&t.uspConsent&&(s.us_privacy=t.uspConsent),Object(y.isEmpty)(n))return null;var c="https://apex.go.sonobi.com/trinity.json";return Object(y.deepAccess)(e[0],"params.bid_request_url")&&(c=Object(y.deepAccess)(e[0],"params.bid_request_url")),{method:"GET",url:c,withCredentials:!0,data:s,bidderRequests:e}},interpretResponse:function(e,l){var f=e.body,m=[],v=l.data.ref;return 0===Object.keys(f.slots).length||Object.keys(f.slots).forEach(function(e){var t=f.slots[e],r=e.split("|").slice(-1)[0],n=function(e,t){for(var r=0;r<e.length;r++)if(e[r].bidId===t)return e[r]}(l.bidderRequests,r),i=null;"video"===t.sbi_ct&&(i="video","outstream"===Object(y.deepAccess)(n,"mediaTypes.video.context")&&(i="outstream"));var s,a,o,c,d,u,p,b=j(i,v);t.sbi_aid&&t.sbi_mouse&&t.sbi_size&&(o=void 0===(a=(s=h(t.sbi_size.split("x"),2))[0])?1:a,d=void 0===(c=s[1])?1:c,u={requestId:r,cpm:Number(t.sbi_mouse),width:Number(o),height:Number(d),ad:b(f.sbi_dc,t.sbi_aid),ttl:500,creativeId:t.sbi_crid||t.sbi_aid,aid:t.sbi_aid,netRevenue:!0,currency:"USD"},t.sbi_dozer&&(u.dealId=t.sbi_dozer),"video"===i?(u.mediaType="video",u.vastUrl=b(f.sbi_dc,t.sbi_aid),delete u.ad,delete u.width,delete u.height):"outstream"===i&&n&&(u.mediaType="video",u.vastUrl=b(f.sbi_dc,t.sbi_aid),u.renderer=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},n=g.a.install({id:t.aid,url:"https://mtrx.go.sonobi.com/sbi_outstream_renderer.js",config:r,loaded:!1,adUnitCode:e});try{n.setRender(_)}catch(e){Object(y.logWarn)("Prebid Error calling setRender on renderer",e)}return n.setEventHandlers({impression:function(){return Object(y.logMessage)("Sonobi outstream video impression event")},loaded:function(){return Object(y.logMessage)("Sonobi outstream video loaded event")},ended:function(){Object(y.logMessage)("Sonobi outstream renderer video event")}}),n}(n.adUnitCode,u,Object(y.deepAccess)(n,"renderer.options")),p=Object(y.deepAccess)(n,"params.sizes"),Array.isArray(p)&&Array.isArray(p[0])&&(p=p[0]),p&&(u.width=p[0],u.height=p[1])),m.push(u))}),m},getUserSyncs:function(e,t){var r=[];try{e.pixelEnabled&&t[0].body.sbi_px.forEach(function(e){r.push({type:e.type,url:e.url})})}catch(e){}return r}};function m(e){return Object(y.deepAccess)(e,"mediaTypes.video")?"":e.params.sizes?Object(y.parseSizesInput)(e.params.sizes).join(","):Object(y.deepAccess)(e,"mediaTypes.banner.sizes")?Object(y.parseSizesInput)(Object(y.deepAccess)(e,"mediaTypes.banner.sizes")).join(","):e.sizes?Object(y.parseSizesInput)(e.sizes).join(","):void 0}function v(e){return e.params.floor?"|f=".concat(e.params.floor):""}var j=function(i,s){return function(e,t){return"video"===i||"outstream"===i?(r=t,n=s,"https://".concat(e,"apex.go.sonobi.com/vast.xml?vid=").concat(r,"&ref=").concat(encodeURIComponent(n))):'<script type="text/javascript" src="'+"https://".concat(e,"apex.go.sonobi.com/sbi.js?aid=").concat(t,"&as=null&ref=").concat(encodeURIComponent(s))+'"><\/script>';var r,n}};var o=function(e){var r=0<arguments.length&&void 0!==e?e:window;return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Number.MAX_SAFE_INTEGER;return r.innerWidth>=e&&r.innerWidth<t}};function O(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window,t=o(e),r=992,n=768;return t(0,768)?"mobile":t(n,r)?"tablet":"desktop"}function _(i){i.renderer.push(function(){var e=h(i.getSize().split("x"),2),t=e[0],r=e[1],n=new window.SbiOutstreamRenderer;n.init({vastUrl:i.vastUrl,height:r,width:t}),n.setRootElement(i.adUnitCode)})}Object(n.registerBidder)(a)}},[846]);