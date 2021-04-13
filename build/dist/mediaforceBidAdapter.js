pbjsChunk([215],{609:function(e,t,r){e.exports=r(610)},610:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return o});var y=r(0),a=r(1),b=r(2);function h(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m={},g={title:{id:1,name:"title"},icon:{id:2,type:1,name:"img"},image:{id:3,type:3,name:"img"},body:{id:4,name:"data",type:2},sponsoredBy:{id:5,name:"data",type:1},cta:{id:6,type:12,name:"data"},body2:{id:7,name:"data",type:10},rating:{id:8,name:"data",type:3},likes:{id:9,name:"data",type:4},downloads:{id:10,name:"data",type:5},displayUrl:{id:11,name:"data",type:11},price:{id:12,name:"data",type:6},salePrice:{id:13,name:"data",type:7},address:{id:14,name:"data",type:9},phone:{id:15,name:"data",type:8}};Object.keys(g).forEach(function(e){m[g[e].id]=e});var o={code:"mediaforce",supportedMediaTypes:[b.b,b.c],isBidRequestValid:function(e){return!("object"!==n(e.params)||!e.params.placement_id||!e.params.publisher_id)},buildRequests:function(e,t){if(0!==e.length){var s=t&&t.refererInfo?encodeURIComponent(t.refererInfo.referer):"",c=t&&t.auctionId,u=t&&t.timeout,p=y.getDNT()?1:0,l={},m=[],f=!1;return e.forEach(function(e){f=f||e.params.is_test;var t=e.params.placement_id,r=e.params.bidfloor?parseFloat(e.params.bidfloor):0,a=!1,i={id:e.bidId,tagid:t,secure:"https:"===window.location.protocol?1:0,bidfloor:r,ext:{mediaforce:{transactionId:e.transactionId}}};for(var n in e.mediaTypes)switch(n){case b.b:i.banner=function(e){var t=e.mediaTypes.banner.sizes;if(!t.length)return;for(var r=[],a=y.parseGPTSingleSizeArrayToRtbSize(t[0]),i=1;i<t.length;i++)r.push(y.parseGPTSingleSizeArrayToRtbSize(t[i]));r.length&&(a.format=r);return a}(e),a=!0;break;case b.c:i.native=function(y){var b=[];y.nativeParams&&Object.keys(y.nativeParams).forEach(function(e){var t,r,a,i,n,o,d,s,c,u,p,l,m,f;g[e]&&(r=(t=g[e]).name,a=t.type,i=t.id,n=a?{type:a}:{},d=(o=y.nativeParams[e]).len,m=o.sizes,s=o.required,c=o.aspect_ratios,d&&(n.len=d),c&&c[0]&&(u=(c=c[0]).min_width||0,p=c.ratio_height*u/c.ratio_width|0,n.wmin=u,n.hmin=p),m&&m.length&&(m=(l=[]).concat.apply(l,h(m)),n.w=m[0],n.h=m[1]),(f={required:s?1:0,id:i})[r]=n,b.push(f))});return{ver:"1.2",request:{assets:b,context:1,plcmttype:1,ver:"1.2"}}}(e),a=!0;break;default:return}var o,d=l[e.params.publisher_id];d||(d={id:Math.round(1e16*Math.random()).toString(16),site:{page:window.location.href,ref:s,id:e.params.publisher_id,publisher:{id:e.params.publisher_id}},device:{ua:navigator.userAgent,js:1,dnt:p,language:(o=navigator.language?"language":"userLanguage",navigator[o].split("-")[0])},ext:{mediaforce:{hb_key:c}},tmax:u,imp:[]},l[e.params.publisher_id]=d,m.push({method:"POST",url:"https://rtb.mfadsrvr.com/header_bid",data:d})),a&&d.imp.push(i)}),m.forEach(function(e){f&&(e.url="https://rtb.mfadsrvr.com/header_bid?debug_key=abcdefghijklmnop"),e.data=JSON.stringify(e.data)}),m}},interpretResponse:function(e){if(!e||!e.body)return[];var t=e.body,p=[],l=t.cur;return t.seatbid.forEach(function(e){e.bid.forEach(function(e){var t,r={requestId:e.impid,cpm:parseFloat(e.price),creativeId:e.adid,currency:l,netRevenue:!0,ttl:e.ttl||300,burl:e.burl};e.dealid&&(r.dealId=e.dealid);var a,i,n,o,d,s,c=e.adm,u=e.ext;try{t=JSON.parse(c)}catch(e){}t&&t.native&&((u=u||{}).native=t.native,c=null),c?(r.width=e.w,r.height=e.h,r.ad=c,r.mediaType=b.b):u&&u.native&&(r.native=(a=u.native,i=a.assets,n=a.link,o=a.imptrackers,d=a.jstracker,s={clickUrl:n.url,clickTrackers:n.clicktrackers||[],impressionTrackers:o||[],javascriptTrackers:d?[d]:[]},(i||[]).forEach(function(e){var t=e.id,r=e.img,a=e.data,i=e.title,n=m[t];n&&(y.isEmpty(i)?y.isEmpty(r)?y.isEmpty(a)||(s[n]=a.value):s[n]={url:r.url,height:r.h,width:r.w}:s.title=i.text)}),s),r.mediaType=b.c),p.push(r)})}),p},onBidWon:function(e){var t=y.deepAccess(e,"adserverTargeting.hb_pb")||"";y.isStr(e.burl)&&""!==e.burl&&(e.burl=y.replaceAuctionPrice(e.burl,t),y.triggerPixel(e.burl))}};Object(a.registerBidder)(o)}},[609]);