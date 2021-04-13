pbjsChunk([71],{960:function(e,i,a){e.exports=a(961)},961:function(e,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),a.d(i,"spec",function(){return t});var c=a(0),n=a(1),r=a(13),m=a.n(r),g={TITLE_LEN:100,DESCR_LEN:200,SPONSORED_BY_LEN:50,IMG_MIN:150,ICON_MIN:50},h=["video/mp4","video/webm","application/x-shockwave-flash","application/javascript"],v=["mimes","skippable","playback_method","protocols","api"],f=[2,3,5,6],I=[1,2],t={code:"windtalker",supportedMediaTypes:["banner","native","video"],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.pubId&&e.params.placementId)},buildRequests:function(e,i){var a,n,r,t,d,o,s,u,p,l={id:e[0].bidderRequestId,at:2,imp:e.map(function(e){return{id:(i=e).bidId,secure:"https:"===window.location.protocol?1:0,banner:function(e){if("banner"===e.mediaType||c.deepAccess(e,"mediaTypes.banner")){var i=c.deepAccess(e,"mediaTypes.banner.sizes");if(1<i.length){for(var a=[],n=0;n<i.length;n++)a.push({w:i[n][0],h:i[n][1]});return{format:a}}return{w:i[0][0],h:i[0][1]}}return null}(i),native:function(e){if("native"===e.mediaType||c.deepAccess(e,"mediaTypes.native")){var i=[];return w(i,function(e,i,a){return i?{id:e,required:i.required?1:0,title:{len:i.len||a}}:null}(1,e.nativeParams.title,g.TITLE_LEN)),w(i,N(2,e.nativeParams.body,2,g.DESCR_LEN)),w(i,N(3,e.nativeParams.sponsoredBy,1,g.SPONSORED_BY_LEN)),w(i,b(4,e.nativeParams.icon,1,g.ICON_MIN,g.ICON_MIN)),w(i,b(5,e.nativeParams.image,3,g.IMG_MIN,g.IMG_MIN)),{request:JSON.stringify({assets:i}),ver:"1.1"}}return null}(i),video:function(i){if("video"===i.mediaType||c.deepAccess(i,"mediaTypes.video")){var e=c.deepAccess(i,"mediaTypes.video.playerSize"),a={w:e[0][0],h:e[0][1],mimes:h,protocols:f,api:I};return i.params.video&&Object.keys(i.params.video).filter(function(e){return m()(v,e)}).forEach(function(e){return a[e]=i.params.video[e]}),a}return null}(i),bidfloor:i.params.bidFloor||"0.000001",tagid:i.params.placementId.toString()};var i}),site:(o=(d=e)&&0<d.length?d[0].params.pubId:"0",s=d&&0<d.length?d[0].params.siteId:"0",d[0].params.app?null:{publisher:{id:o.toString(),domain:window.location.hostname},id:s.toString(),ref:window.top.document.referrer,page:window.location.href}),app:function(e){var i=e&&0<e.length?e[0].params.pubId:"0",a=e[0].params.app;if(a)return{publisher:{id:i.toString()},id:a.id,name:a.name,bundle:a.bundle,storeurl:a.storeUrl,domain:a.domain};return null}(e),device:(n=(a=e)&&0<a.length?a[0].params.latitude:"",r=a&&0<a.length?a[0].params.longitude:"",t=a&&0<a.length?a[0].params.ifa:"",{dnt:c.getDNT()?1:0,ua:navigator.userAgent,language:navigator.language||navigator.browserLanguage||navigator.userLanguage||navigator.systemLanguage,w:window.screen.width||window.innerWidth,h:window.screen.height||window.innerHeigh,geo:{lat:n,lon:r},ifa:t})};return p=l,(u=i)&&u.gdprConsent&&(p.regs={ext:{gdpr:u.gdprConsent.gdprApplies?1:0}},p.user={ext:{consent:u.gdprConsent.consentString}}),{method:"POST",url:"https://windtalkerdisplay.hb.adp3.net/",data:JSON.stringify(l)}},interpretResponse:function(e,i){return function(e,n){var r={},t={};o(e.data).imp.forEach(function(e){r[e.id]=e}),n&&n.seatbid.forEach(function(e){return e.bid.forEach(function(e){t[e.impid]=e})});var d=[];return Object.keys(r).forEach(function(e){var i,a;t[e]&&((i={}).requestId=e,i.adId=e,i.creativeId=e,i.cpm=t[e].price,i.currency=n.cur,i.ttl=360,i.netRevenue=!0,r[e].native?(i.native=function(e,i){if(e.native){var a=o(i.adm),n={image:{},icon:{}};if(a&&a.native&&a.native.assets)return a.native.assets.forEach(function(e){n.title=e.title?e.title.text:n.title,n.body=e.data&&2===e.id?e.data.value:n.body,n.sponsoredBy=e.data&&3===e.id?e.data.value:n.sponsoredBy,n.icon.url=e.img&&4===e.id?e.img.url:n.icon.url,n.icon.width=e.img&&4===e.id?e.img.w:n.icon.width,n.icon.height=e.img&&4===e.id?e.img.h:n.icon.height,n.image.url=e.img&&5===e.id?e.img.url:n.image.url,n.image.width=e.img&&5===e.id?e.img.w:n.image.width,n.image.height=e.img&&5===e.id?e.img.h:n.image.height}),a.native.link&&(n.clickUrl=encodeURIComponent(a.native.link.url)),n}return null}(r[e],t[e]),a=(a=(a=(a=(a=t[e].nurl).replace(/\$(%7B|\{)AUCTION_IMP_ID(%7D|\})/gi,t[e].impid)).replace(/\$(%7B|\{)AUCTION_PRICE(%7D|\})/gi,t[e].price)).replace(/\$(%7B|\{)AUCTION_CURRENCY(%7D|\})/gi,n.cur)).replace(/\$(%7B|\{)AUCTION_BID_ID(%7D|\})/gi,n.bidid),i.native.impressionTrackers=[a],i.mediaType="native"):r[e].video?(i.vastUrl=t[e].adm,i.vastUrl=i.vastUrl.replace(/\$(%7B|\{)AUCTION_PRICE(%7D|\})/gi,t[e].price),i.crid=t[e].crid,i.width=r[e].video.w,i.height=r[e].video.h,i.mediaType="video"):r[e].banner&&(i.ad=t[e].adm,i.ad=i.ad.replace(/\$(%7B|\{)AUCTION_IMP_ID(%7D|\})/gi,t[e].impid),i.ad=i.ad.replace(/\$(%7B|\{)AUCTION_AD_ID(%7D|\})/gi,t[e].adid),i.ad=i.ad.replace(/\$(%7B|\{)AUCTION_PRICE(%7D|\})/gi,t[e].price),i.ad=i.ad.replace(/\$(%7B|\{)AUCTION_CURRENCY(%7D|\})/gi,n.cur),i.ad=i.ad.replace(/\$(%7B|\{)AUCTION_BID_ID(%7D|\})/gi,n.bidid),i.width=t[e].w,i.height=t[e].h,i.mediaType="banner"),d.push(i))}),d}(i,e.body)}};function w(e,i){i&&e.push(i)}function b(e,i,a,n,r){return i?{id:e,required:i.required?1:0,img:{type:a,wmin:i.wmin||n,hmin:i.hmin||r}}:null}function N(e,i,a,n){return i?{id:e,required:i.required?1:0,data:{type:a,len:i.len||n}}:null}function o(e){try{if(e)return JSON.parse(e)}catch(e){c.logError("windtalker.parse","ERROR",e)}return null}Object(n.registerBidder)(t)}},[960]);