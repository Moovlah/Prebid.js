pbjsChunk([337],{318:function(e,t,r){e.exports=r(319)},319:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return l});var n=r(1),d=r(2),p=r(0),y=r(3);function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=s(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,d=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){d=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(d)throw a}}}}function s(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return void 0!==p.deepAccess(e,"mediaTypes.".concat(t))}var v="[account_id]",b="https://us-e-node1.bizzclick.com/bid?rtb_seat_id=prebidjs&secret_key=".concat(v),c={0:"title",2:"icon",3:"image",5:"sponsoredBy",4:"body",1:"cta"},u={title:{id:0,name:"title"},icon:{id:2,type:1,name:"img"},image:{id:3,type:3,name:"img"},sponsoredBy:{id:5,name:"data",type:1},body:{id:4,name:"data",type:2},cta:{id:1,type:12,name:"data"}},l={code:"bizzclick",supportedMediaTypes:[d.b,d.d,d.c],isBidRequestValid:function(e){return Boolean(e.params.accountId)&&Boolean(e.params.placementId)},buildRequests:function(e,t){if(e&&0===e.length)return[];var r,n=e[0].params.accountId,i=b.replace(v,n),a=window;try{r=new URL(t.refererInfo.referer),a=window.top}catch(e){r=a.location,p.logMessage(e)}var o,d=[],s=m(e);try{for(s.s();!(o=s.n()).done;){var c=o.value,u=g(c),l={id:c.bidId,test:y.b.getConfig("debug")?1:0,at:1,cur:["USD"],device:{w:a.screen.width,h:a.screen.height,dnt:p.getDNT()?1:0,language:navigator&&navigator.language?-1!=navigator.language.indexOf("-")?navigator.language.split("-")[0]:navigator.language:""},site:{page:r.pathname,host:r.host},source:{tid:c.transactionId},regs:{coppa:!0===y.b.getConfig("coppa")?1:0,ext:{}},user:{ext:{}},tmax:c.timeout,imp:[u]};c&&(c.gdprConsent&&c.gdprConsent.gdprApplies&&(p.deepSetValue(l,"regs.ext.gdpr",c.gdprConsent.gdprApplies?1:0),p.deepSetValue(l,"user.ext.consent",c.gdprConsent.consentString)),void 0!==c.uspConsent&&p.deepSetValue(l,"regs.ext.us_privacy",c.uspConsent)),d.push(l)}}catch(e){s.e(e)}finally{s.f()}return{method:"POST",url:i,data:d}},interpretResponse:function(e){if(!e||!e.body)return[];var t,r=[],n=m(e.body);try{for(n.s();!(t=n.n()).done;){var i=t.value,a=i.seatbid[0].bid[0].ext&&i.seatbid[0].bid[0].ext.mediaType?i.seatbid[0].bid[0].ext.mediaType:d.b,o={requestId:i.id,cpm:i.seatbid[0].bid[0].price,width:i.seatbid[0].bid[0].w,height:i.seatbid[0].bid[0].h,ttl:i.ttl||1200,currency:i.cur||"USD",netRevenue:!0,creativeId:i.seatbid[0].bid[0].crid,dealId:i.seatbid[0].bid[0].dealid,mediaType:a};switch(a){case d.d:o.vastXml=i.seatbid[0].bid[0].adm,o.vastUrl=i.seatbid[0].bid[0].ext.vastUrl;break;case d.c:o.native=f(i.seatbid[0].bid[0].adm);break;default:o.ad=i.seatbid[0].bid[0].adm}r.push(o)}}catch(e){n.e(e)}finally{n.f()}return r}},f=function(e){var t=e.native,r=t.assets,n=t.link,i=t.imptrackers,a=t.jstracker,o={clickUrl:n.url,clickTrackers:n.clicktrackers||void 0,impressionTrackers:i||void 0,javascriptTrackers:a?[a]:void 0};return r.forEach(function(e){var t=c[e.id],r=t&&e[u[t].name];r&&(o[t]=r.text||r.value||{url:r.url,width:r.w,height:r.h})}),o},g=function(e){var t={id:e.transactionId,secure:1,ext:{placementId:e.params.placementId}};return o(e,d.b)&&(t.banner=w(e)),o(e,d.d)&&(t.video=z(e)),o(e,d.c)&&(t.native={ver:"1.2",request:h(e)}),t},h=function(e){var t={id:e.transactionId,ver:"1.2"},r=p._map(e.mediaTypes.native,function(e,t){var r=u[t],n={required:1&e.required};if(r){n.id=r.id;var i,a,o,d=e.aspect_ratios;return d&&d[0]&&(a=(d=d[0]).min_width||0,o=d.ratio_height*a/d.ratio_width|0),e.sizes&&(a=(i=k(e.sizes))[0],o=i[1]),n[r.name]={},e.len&&(n[r.name].len=e.len),r.type&&(n[r.name].type=r.type),a&&(n[r.name].wmin=a),o&&(n[r.name].hmin=o),n}}).filter(Boolean);return t.assets=r,t},w=function(e){var t={},r=A(e,"banner");return t.w=r[0],t.h=r[1],t},A=function(e,t){var r=e.mediaTypes;if("video"===t){var n=[];return r.video&&r.video.w&&r.video.h?n=[r.video.w,r.video.h]:Array.isArray(p.deepAccess(e,"mediaTypes.video.playerSize"))&&1===e.mediaTypes.video.playerSize.length?n=e.mediaTypes.video.playerSize[0]:Array.isArray(e.sizes)&&0<e.sizes.length&&Array.isArray(e.sizes[0])&&1<e.sizes[0].length&&(n=e.sizes[0]),n}var i=[];return Array.isArray(r.banner.sizes)?i=r.banner.sizes[0]:Array.isArray(e.sizes)&&0<e.sizes.length?i=e.sizes:p.logWarn("no sizes are setup or found"),i},z=function(e){for(var t={},r=0,n=["mimes","minduration","maxduration","protocols","startdelay","placement","skip","skipafter","minbitrate","maxbitrate","delivery","playbackmethod","api","linearity"];r<n.length;r++){var i=n[r];void 0!==e.mediaTypes.video[i]&&(t[i]=e.mediaTypes.video[i])}var a=A(e,"video");return t.w=a[0],t.h=a[1],t},k=function(e){var t;return(t=[]).concat.apply(t,i(e))};Object(n.registerBidder)(l)}},[318]);