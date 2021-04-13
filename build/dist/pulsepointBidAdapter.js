pbjsChunk([163],{740:function(e,r,t){e.exports=t(741)},741:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return i});var c=t(0),n=t(1),p=t(12);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var s={TITLE_LEN:100,DESCR_LEN:200,SPONSORED_BY_LEN:50,IMG_MIN:150,ICON_MIN:50},d=["cp","ct","cf","video","battr","bcat","badv","bidfloor"],i={code:"pulsepoint",gvlid:81,aliases:["pulseLite","pulsepointLite"],supportedMediaTypes:["banner","native","video"],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.cp&&e.params.ct)},buildRequests:function(e,r){var t,n,i;return{method:"POST",url:"https://bid.contextweb.com/header/ortb?src=prebid",data:{id:e[0].bidderRequestId,imp:e.map(function(e){return{id:(r=e).bidId,banner:function(e){var r=function(e){var r=c.deepAccess(e,"mediaTypes.banner.sizes");return r&&c.isArray(r)?r.filter(function(e){return c.isArray(e)&&2===e.length}).map(function(e){return{w:e[0],h:e[1]}}):null}(e),t=function(e,r){if(e.params.cf){var t=e.params.cf.toUpperCase().split("X"),n=parseInt(e.params.cw||t[0],10),i=parseInt(e.params.ch||t[1],10);return[n,i]}return r&&0<r.length?[r[0].w,r[0].h]:[1,1]}(e,r);return e.mediaTypes&&e.mediaTypes.banner?{w:t[0],h:t[1],battr:e.params.battr,format:r}:null}(r),native:function(e){if(e.nativeParams){var r=[];return u(r,function(e,r,t){return r?{id:e,required:r.required?1:0,title:{len:r.len||t}}:null}(r.length+1,e.nativeParams.title,s.TITLE_LEN)),u(r,l(r.length+1,e.nativeParams.body,2,s.DESCR_LEN)),u(r,l(r.length+1,e.nativeParams.sponsoredBy,1,s.SPONSORED_BY_LEN)),u(r,o(r.length+1,e.nativeParams.icon,1,s.ICON_MIN,s.ICON_MIN)),u(r,o(r.length+1,e.nativeParams.image,3,s.IMG_MIN,s.IMG_MIN)),{request:JSON.stringify({assets:r}),ver:"1.1",battr:e.params.battr}}return null}(r),tagid:r.params.ct.toString(),video:function(e){return e.params.video?a({},e.params.video,{battr:e.params.battr}):null}(r),bidfloor:r.params.bidfloor,ext:function(r){var t={},n={};return d.forEach(function(e){return n[e]=1}),Object.keys(r.params).forEach(function(e){n[e]||(t[e]=r.params[e])}),0<Object.keys(t).length?{prebid:t}:null}(r)};var r}),site:(n=r,i=(t=e)&&0<t.length?t[0].params.cp:"0",t[0].params.app?null:{publisher:{id:i.toString()},ref:function(){try{return window.top.document.referrer}catch(e){return document.referrer}}(),page:n&&n.refererInfo?n.refererInfo.referer:""}),app:function(e){var r=e&&0<e.length?e[0].params.cp:"0",t=e[0].params.app;if(t)return{publisher:{id:r.toString()},bundle:t.bundle,storeurl:t.storeUrl,domain:t.domain};return null}(e),device:{ua:navigator.userAgent,language:navigator.language||navigator.browserLanguage||navigator.userLanguage||navigator.systemLanguage},bcat:e[0].params.bcat,badv:e[0].params.badv,user:function(e,r){var t={};r&&r.gdprConsent&&(t.consent=r.gdprConsent.consentString);{var n,i;e&&e.userId&&(t.eids=[],m(t.eids,e.userId.pubcid,"pubcommon"),m(t.eids,e.userId.britepoolid,"britepool.com"),m(t.eids,e.userId.criteoId,"criteo"),m(t.eids,e.userId.idl_env,"identityLink"),m(t.eids,c.deepAccess(e,"userId.id5id.uid"),"id5-sync.com",c.deepAccess(e,"userId.id5id.ext")),m(t.eids,c.deepAccess(e,"userId.parrableId.eid"),"parrable.com"),e.userId.lipb&&e.userId.lipb.lipbid&&m(t.eids,e.userId.lipb.lipbid,"liveintent.com"),m(t.eids,e.userId.tdid,"adserver.org",{rtiPartner:"TDID"}),(n=e.userId.digitrustid)&&n.data&&(i={},n.data.id&&(i.id=n.data.id),n.data.keyv&&(i.keyv=n.data.keyv),t.digitrust=i))}return{ext:t}}(e[0],r),regs:function(e){if(e.gdprConsent||e.uspConsent){var r={};return e.gdprConsent&&(r.gdpr=e.gdprConsent.gdprApplies?1:0),e.uspConsent&&(r.us_privacy=e.uspConsent),{ext:r}}return null}(r),source:function(e){if(e)return{ext:{schain:e}};return null}(e[0].schain)},bidderRequest:r}},interpretResponse:function(e,r){return function(e,r){var a={},s={},d={},u=r.body;e.data.imp.forEach(function(e){a[e.id]=e}),u&&u.seatbid.forEach(function(e){return e.bid.forEach(function(e){s[e.impid]=e})});e.bidderRequest&&e.bidderRequest.bids&&e.bidderRequest.bids.forEach(function(e){d[e.bidId]=e});var o=[];return Object.keys(a).forEach(function(e){var r,t,n,i;s[e]&&(r={requestId:e,cpm:s[e].price,creative_id:s[e].crid,creativeId:s[e].crid,adId:e,ttl:s[e].exp||20,netRevenue:!0,currency:u.cur||"USD"},a[e].video?(d[e]&&"outstream"===c.deepAccess(d[e],"mediaTypes.video.context")&&(r.renderer=(t=c.deepAccess(d[e],"renderer.options"),n=c.deepAccess(s[e],"ext.outstream"),(i=p.a.install({url:n.rendererUrl,config:{defaultOptions:n.config,rendererOptions:t,type:n.type},loaded:!1})).setRender(function(r){r.renderer.push(function(){var e=r.renderer.getConfig();(new window.PulsePointOutstreamRenderer).render({adUnitCode:r.adUnitCode,vastXml:r.vastXml,type:e.type,defaultOptions:e.defaultOptions,rendererOptions:t})})}),i)),r.vastXml=s[e].adm,r.mediaType="video",r.width=s[e].w,r.height=s[e].h):a[e].banner?(r.ad=s[e].adm,r.width=s[e].w||a[e].banner.w,r.height=s[e].h||a[e].banner.h):a[e].native&&(r.native=function(e,r){if(e.native){var t=function(e){try{if(e)return JSON.parse(e)}catch(e){c.logError("pulsepointLite.safeParse","ERROR",e)}return null}(r.adm),n={};if(t&&t.native&&t.native.assets)return t.native.assets.forEach(function(e){n.title=e.title?e.title.text:n.title,n.body=e.data&&2===e.data.type?e.data.value:n.body,n.sponsoredBy=e.data&&1===e.data.type?e.data.value:n.sponsoredBy,n.image=e.img&&3===e.img.type?e.img.url:n.image,n.icon=e.img&&1===e.img.type?e.img.url:n.icon}),t.native.link&&(n.clickUrl=encodeURIComponent(t.native.link.url)),n.impressionTrackers=t.native.imptrackers,n}return null}(a[e],s[e]),r.mediaType="native"),o.push(r))}),o}(r,e)},getUserSyncs:function(e){return e.iframeEnabled?[{type:"iframe",url:"https://bh.contextweb.com/visitormatch"}]:e.pixelEnabled?[{type:"image",url:"https://bh.contextweb.com/visitormatch/prebid"}]:void 0},transformBidParams:function(e){return c.convertTypes({cf:"string",cp:"number",ct:"number"},e)}};function u(e,r){r&&e.push(r)}function o(e,r,t,n,i){return r?{id:e,required:r.required?1:0,img:{type:t,wmin:r.wmin||n,hmin:r.hmin||i}}:null}function l(e,r,t,n){return r?{id:e,required:r.required?1:0,data:{type:t,len:r.len||n}}:null}function m(e,r,t,n){var i;r&&(i={id:r},n&&(i.ext=n),e.push({source:t,uids:[i]}))}Object(n.registerBidder)(i)}},[740]);