pbjsChunk([114],{868:function(e,r,n){e.exports=n(869)},869:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"spec",function(){return d});var p=n(0),t=n(1),y=n(2),a=n(13),o=n.n(a),h=n(3);function v(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],t=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(t=(i=s.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(e){a=!0,o=e}finally{try{t||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return i(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=["minduration","maxduration","startdelay","placement","linearity","mimes","protocols","api"],l=["1x1","1x2"],d={code:"synacormedia",supportedMediaTypes:[y.b,y.d],sizeMap:{},isVideoBid:function(e){return void 0!==e.mediaTypes&&e.mediaTypes.hasOwnProperty("video")},isBidRequestValid:function(e){var r=e&&e.params&&(e.params.hasOwnProperty("placementId")||e.params.hasOwnProperty("tagId"))&&e.params.hasOwnProperty("seatId"),n=e&&0<Object(p.getAdUnitSizes)(e).filter(function(e){return-1===l.indexOf(e.join("x"))}).length;return!(!r||!n)},buildRequests:function(e,r){var c=this;if(e&&e.length&&r){var n=r.refererInfo,d={id:r.auctionId,site:{domain:h.b.getConfig("publisherDomain")||location.hostname,page:n.referer,ref:document.referrer},device:{ua:navigator.userAgent},imp:[]},t=e[0].schain;t&&(d.source={ext:{schain:t}});var u=null;return e.forEach(function(e,r){var n,t,a,o,i,s;u&&u!==e.params.seatId?Object(p.logWarn)("Synacormedia: there is an inconsistent seatId: ".concat(e.params.seatId," but only sending bid requests for ").concat(u,", you should double check your configuration")):(u=e.params.seatId,n=e.params.tagId||e.params.placementId,t=e.params.bidfloor?parseFloat(e.params.bidfloor):null,isNaN(t)&&Object(p.logWarn)("Synacormedia: there is an invalid bid floor: ".concat(e.params.bidfloor)),a=parseInt(e.params.pos,10),isNaN(a)&&(Object(p.logWarn)("Synacormedia: there is an invalid POS: ".concat(e.params.pos)),a=0),o=c.isVideoBid(e)?"video":"banner",i=Object(p.getAdUnitSizes)(e).filter(function(e){return-1===l.indexOf(e.join("x"))}),s=[],"banner"==o?s=c.buildBannerImpressions(i,e,n,a,t,o):"video"==o&&(s=c.buildVideoImpressions(i,e,n,a,t,o)),0<s.length&&s.forEach(function(e){return d.imp.push(e)}))}),r&&r.uspConsent&&Object(p.deepSetValue)(d,"regs.ext.us_privacy",r.uspConsent),d.imp.length&&u?{method:"POST",url:"".concat("https://").concat(u,".").concat("technoratimedia.com","/openrtb/bids/").concat(u,"?src=prebid_prebid_4.35.0-pre"),data:d,options:{contentType:"application/json",withCredentials:!0}}:void 0}},buildBannerImpressions:function(e,r,n,t,a,o){var i,s=[],c=[];return e.forEach(function(e,r){e&&2===e.length&&s.push({w:e[0],h:e[1]})}),0<s.length&&(i={id:"".concat(o.substring(0,1)).concat(r.bidId),banner:{format:s,pos:t},tagid:n},null===a||isNaN(a)||(i.bidfloor=a),c.push(i)),c},buildVideoImpressions:function(e,i,s,c,d,u){var p=this,l=[];return e.forEach(function(e,r){var n,t,a,o;e&&2==e.length&&(n=e[0],t=e[1],a={id:"".concat(u.substring(0,1)).concat(i.bidId,"-").concat(n,"x").concat(t),tagid:s},null===d||isNaN(d)||(a.bidfloor=d),o={w:n,h:t,pos:c},i.mediaTypes.video&&p.setValidVideoParams(i.mediaTypes.video,i.params.video),i.params.video&&p.setValidVideoParams(i.params.video,o),a[u]=o,l.push(a))}),l},setValidVideoParams:function(r,n){Object.keys(r).filter(function(e){return o()(c,e)&&null!==r[e]&&(!isNaN(parseInt(r[e],10))||!(r[e].length<1))}).forEach(function(e){return n[e]=Array.isArray(r[e])?r[e]:parseInt(r[e],10)})},interpretResponse:function(e,m){function f(e,r){return r?r.replace(/\${AUCTION_PRICE}/g,e.price):r}if(e.body&&"object"==s(e.body)){var r=e.body,n=r.id,t=r.seatbid,b=[];return n&&t&&t.forEach(function(l){l.bid.forEach(function(t){var e=f(t,t.adm),r=f(t,t.nurl),n=v(t.impid.match(/^([vb])([\w\d]+)/),3),a=n[1],o=n[2],i=t.h,s=t.w,c="v"===a,d="b"===a;(!i||!s)&&m.data&&m.data.imp&&0<m.data.imp.length&&m.data.imp.forEach(function(e){var r,n;t.impid===e.id&&(s=c?(i=e.video.h,e.video.w):d?(n=r=1,e.banner.format&&0<e.banner.format.length&&(r=e.banner.format[0].h,n=e.banner.format[0].w),i=r,n):i=1)});var u,p={requestId:o,cpm:parseFloat(t.price),width:parseInt(s,10),height:parseInt(i,10),creativeId:"".concat(l.seat,"_").concat(t.crid),currency:"USD",netRevenue:!0,mediaType:c?y.d:y.b,ad:e,ttl:60};null==t.adomain&&null==t.adomain||(p.meta={advertiserDomains:t.adomain}),c&&(u=v(r.match(/ID=([^&]*)&?/),2)[1],h.b.getConfig("cache.url")||(p.videoCacheKey=encodeURIComponent(u)),p.vastUrl=r),b.push(p)})}),b}Object(p.logWarn)("Synacormedia: server returned empty/non-json response: "+JSON.stringify(e.body))},getUserSyncs:function(e){var r=[];return e.iframeEnabled?r.push({type:"iframe",url:"".concat("https://ad-cdn.technoratimedia.com","/html/usersync.html?src=prebid_prebid_4.35.0-pre")}):Object(p.logWarn)("Synacormedia: Please enable iframe based user sync."),r}};Object(t.registerBidder)(d)}},[868]);