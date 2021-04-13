pbjsChunk([107],{884:function(e,t,i){e.exports=i(885)},885:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"spec",function(){return n});var k=i(0),x=i(2),a=i(1),I="theadx",T={0:"title",1:"cta",2:"icon",3:"image",4:"body",5:"sponsoredBy",6:"body2",7:"phone",8:"privacyLink",9:"displayurl",10:"rating",11:"address",12:"downloads",13:"likes",14:"price",15:"saleprice"},w={title:{id:0,name:"title"},body:{id:4,name:"data",type:2},body2:{id:6,name:"data",type:10},privacyLink:{id:8,name:"data",type:501},sponsoredBy:{id:5,name:"data",type:1},image:{id:3,type:3,name:"img"},icon:{id:2,type:1,name:"img"},displayurl:{id:9,name:"data",type:11},cta:{id:1,type:12,name:"data"},rating:{id:7,name:"data",type:3},address:{id:11,name:"data",type:5},downloads:{id:12,name:"data",type:5},likes:{id:13,name:"data",type:4},phone:{id:7,name:"data",type:8},price:{id:14,name:"data",type:6},saleprice:{id:15,name:"data",type:7}},n={code:I,aliases:["theadx"],supportedMediaTypes:[x.b,x.d,x.c],isBidRequestValid:function(e){k.logInfo("theadx.isBidRequestValid",e);var t=!1;return e&&e.params&&(t=!(!e.params.pid||!e.params.tagId)),t},buildRequests:function(e,t){k.logInfo("theadx.buildRequests","validBidRequests",e,"bidderRequest",t);var i=[],a="POST";return k.isEmpty(e)||(i=e.map(function(e){return{method:a,type:a,url:"".concat("https://ssp.theadx.com/request","?tagid=").concat(e.params.tagId),options:{withCredentials:!0},bidder:"theadx",referrer:encodeURIComponent(t.refererInfo.referer),data:r(e,t),mediaTypes:e.mediaTypes,requestId:t.bidderRequestId,bidId:e.bidId,adUnitCode:e.adUnitCode,auctionId:e.auctionId}})),i},interpretResponse:function(e,t){k.logInfo("theadx.interpretResponse","serverResponse",e," request",t);var i,a,n,r,d,s,o,p,c,u,l,m,y,v,h,g,b,f=[];return e.body&&(a=(i=e.body).seatbid,k.isEmpty(a)||k.isEmpty(a[0].bid)||(r=function(e){return void 0===e?null:parseInt(e)},d=null,(n=a[0].bid[0]).ext&&(d=r(n.ext.ttl)?r(n.ext.ttl):2e3),s=r(n.w),o=r(n.h),g=u=c=p=null,t.mediaTypes&&t.mediaTypes.video?(c=n.ext.vast_url,u=x.d):t.mediaTypes&&t.mediaTypes.banner?(u=x.b,p=n.adm):t.mediaTypes&&t.mediaTypes.native&&(u=x.c,m=(l=n.ext.native).assets,y=l.link,v=l.imptrackers,h=l.jstracker,g={clickUrl:y.url,clickTrackers:y.clicktrackers||n.ext.cliu?[]:void 0,impressionTrackers:v||n.nurl?[]:void 0,javascriptTrackers:h?[h]:void 0},n.nurl&&(g.impressionTrackers.unshift(n.ext.impu),g.impressionTrackers.unshift(n.nurl),g.clickTrackers&&g.clickTrackers.unshift(n.ext.cliu)),m.forEach(function(e){var t=T[e.id],i=t&&e[w[t].name];i&&(g[t]=i.text||i.value||{url:i.url,width:i.w,height:i.h})})),b={bidderCode:I,requestId:t.bidId,cpm:n.price,width:0|s,height:0|o,ad:p,ttl:d||3e3,creativeId:n.crid,netRevenue:!0,currency:i.cur,mediaType:u,native:g},u==x.d&&c&&(b.vastUrl=c,b.videoCacheKey=n.ext.rid),f.push(b))),f},getUserSyncs:function(a,e){k.logInfo("theadx.getUserSyncs","syncOptions",a,"serverResponses",e);var n=[];return(a.iframeEnabled||a.pixelEnabled)&&e.forEach(function(e){var t=k.deepAccess(e,"body.ext.sync.iframe"),i=k.deepAccess(e,"body.ext.sync.image");a.iframeEnabled&&t&&t.forEach(function(e){n.push({type:"iframe",url:e})}),a.pixelEnabled&&i&&i.forEach(function(e){n.push({type:"image",url:e})})}),n}};function o(){var e={js:1,language:"language"in navigator?navigator.language:null,ua:"userAgent"in navigator?navigator.userAgent:null,devicetype:/(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)?1:/(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent)?3:2,dnt:k.getDNT()?1:0},t=navigator.connection||navigator.webkitConnection;return t&&t.type&&(e.connectiontype=t.type,t.downlinkMax&&(e.connectionDownlinkMax=t.downlinkMax)),e}function p(e){var t=null,i=null,a=[],n=e.mediaTypes;n&&(n.banner&&n.banner.sizes||n.video&&n.video.sizes)?a=n.banner?n.banner.sizes:n.video.sizes:k.isEmpty(e.sizes)||(a=e.sizes);var r,d=k.parseSizesInput(a);return k.isEmpty(d)||null==d[0]||(r=d[0].split("x"),t=parseInt(r[0]),i=parseInt(r[1])),{w:t,h:i}}function c(e){var t,i,a,n=e.mediaTypes,r=null,d=null,s=null;n&&n.video?d={w:(a=p(e)).w,h:a.h}:n&&n.banner?r={w:(i=p(e)).w,h:i.h}:n&&n.native&&(t=e,s={request:{assets:k._map(t.mediaTypes.native,function(e,t){var i=w[t],a={required:1&e.required};if(i)return a.id=i.id,a[i.name]={len:e.len,wmin:e.sizes&&e.sizes[0],hmin:e.sizes&&e.sizes[1],type:i.type},a}).filter(Boolean)}});var o={id:e.index,tagid:e.params.tagId+""};return r&&(o.banner=r),d&&(o.video=d),s&&(o.native=s),o}var r=function(e,t){var i,a,n,r,d,s={id:e.bidId,site:(i=e,a=t,r=k.parseUrl(a.refererInfo.referer,{decodeSearchAsString:!0}),d={domain:r.hostname,page:r.href,id:i.params.wid,publisher:{id:i.params.pid}},r.search&&(d.search=r.search),!document||(n=document.getElementsByTagName("meta").keywords)&&n.content&&(d.keywords=n.content),d),device:o(),imp:[c(e)]};return JSON.stringify(s)};Object(a.registerBidder)(n)}},[884]);