pbjsChunk([63],{980:function(e,r,t){e.exports=t(981)},981:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return c});var n=t(1),o=t(2),l=t(0),i=t(4),m=t(3);function a(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var u={0:"title",2:"icon",3:"image",5:"sponsoredBy",4:"body",1:"cta"},f={title:{id:0,name:"title"},icon:{id:2,type:1,name:"img"},image:{id:3,type:3,name:"img"},sponsoredBy:{id:5,name:"data",type:1},body:{id:4,name:"data",type:2},cta:{id:1,type:12,name:"data"}},c={code:"zemanta",gvlid:164,supportedMediaTypes:[o.c,o.b],isBidRequestValid:function(e){return!(!m.b.getConfig("zemanta.bidderUrl")&&!m.b.getConfig("outbrain.bidderUrl")||!l.deepAccess(e,"params.publisher.id")||!e.nativeParams&&!e.sizes)},buildRequests:function(e,r){var t=r.refererInfo.referer,n=navigator.userAgent,i=g(e,"params.test"),a=g(e,"params.publisher"),s=g(e,"params.bcat"),o=g(e,"params.badv"),u=m.b.getConfig("zemanta.bidderUrl")||m.b.getConfig("outbrain.bidderUrl"),c=r.timeout,d=e.map(function(e,r){e.netRevenue="net";var t,n={id:r+1+""};return e.params.tagid&&(n.tagid=e.params.tagid),e.nativeParams?n.native={request:JSON.stringify({assets:(t=e,l._map(t.nativeParams,function(e,r){var t,n,i=f[r],a={required:1&e.required};if(i){a.id=i.id;var s,o,u,c=e.aspect_ratios;return c&&c[0]&&(t=(c=c[0]).min_width||0,n=c.ratio_height*t/c.ratio_width|0),e.sizes&&(o=(s=b(e.sizes))[0],u=s[1]),a[i.name]={len:e.len,type:i.type,wmin:t,hmin:n,w:o,h:u},a}}).filter(Boolean))})}:n.banner={format:function(e){if(!l.isArray(e))return[];{if(2===e.length&&!l.isArray(e[0]))return[{w:parseInt(e[0],10),h:parseInt(e[1],10)}];if(l.isArray(e[0]))return e.map(function(e){return{w:parseInt(e[0],10),h:parseInt(e[1],10)}})}return[]}(e.sizes)},n}),p={id:r.auctionId,site:{page:t,publisher:a},device:{ua:n},source:{fd:1},cur:["USD"],tmax:c,imp:d,bcat:s,badv:o};return i&&(p.is_debug=!!i,p.test=1),l.deepAccess(r,"gdprConsent.gdprApplies")&&(l.deepSetValue(p,"user.ext.consent",r.gdprConsent.consentString),l.deepSetValue(p,"regs.ext.gdpr",1&r.gdprConsent.gdprApplies)),r.uspConsent&&l.deepSetValue(p,"regs.ext.us_privacy",r.uspConsent),!0===m.b.getConfig("coppa")&&l.deepSetValue(p,"regs.coppa",1&m.b.getConfig("coppa")),{method:"POST",url:u,data:JSON.stringify(p),bids:e}},interpretResponse:function(e,r){var t=r.bids;if(!e.body)return[];var n=e.body,i=n.seatbid,a=n.cur,s=b(i.map(function(e){return e.bid})).reduce(function(e,r){return e[r.impid-1]=r,e},[]);return t.map(function(e,r){var t=s[r];if(t){var n=e.nativeParams?o.c:o.b,i={requestId:e.bidId,cpm:t.price,creativeId:t.crid,ttl:360,netRevenue:"net"===e.netRevenue,currency:a,mediaType:n,nurl:t.nurl};return n===o.c?i.native=function(e){var r=JSON.parse(e.adm),t=r.assets,n=r.link,i=r.eventtrackers,a={clickUrl:n.url,clickTrackers:n.clicktrackers||void 0};t.forEach(function(e){var r=u[e.id],t=r&&e[f[r].name];t&&(a[r]=t.text||t.value||{url:t.url,width:t.w,height:t.h})}),i&&(a.impressionTrackers=[],i.forEach(function(e){if(1===e.event)switch(e.method){case 1:a.impressionTrackers.push(e.url);break;case 2:a.javascriptTrackers='<script src="'.concat(e.url,'"><\/script>')}}));return a}(t):(i.ad=t.adm,i.width=t.w,i.height=t.h),i.meta={},t.adomain&&0<t.adomain.length&&(i.meta.advertiserDomains=t.adomain),i}}).filter(Boolean)},getUserSyncs:function(e,r,t,n){var i=[],a=m.b.getConfig("zemanta.usersyncUrl")||m.b.getConfig("outbrain.usersyncUrl");return e.pixelEnabled&&a&&(t&&(a+="&gdpr="+(1&t.gdprApplies),a+="&gdpr_consent="+encodeURIComponent(t.consentString||"")),n&&(a+="&us_privacy="+encodeURIComponent(n)),i.push({type:"image",url:a})),i},onBidWon:function(e){Object(i.a)(l.replaceAuctionPrice(e.nurl,e.originalCpm))}};function g(e,r){for(var t,n=0;n<e.length;n++)if(t=l.deepAccess(e[n],r))return t}function b(e){var r;return(r=[]).concat.apply(r,a(e))}Object(n.registerBidder)(c)}},[980]);