pbjsChunk([31],{703:function(e,r,t){e.exports=t(704)},704:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.resetSyncedStatus=function(){M=0},r.resetWurlMap=function(){K={}},r.PrebidServer=f;var i=t(93),j=t(34),A=t(0),C=t(5),O=(t.n(C),t(8)),x=t(3),w=t(2),E=t(38),h=t(1),n=t(9),S=t.n(n),s=t(13),k=t.n(s),a=t(705),_=t(4),o=t(10),I=t.n(o);function c(r,e){var t,i=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),i.push.apply(i,t)),i}function P(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach(function(e){T(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}function T(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function U(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],i=!0,n=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(t.push(a.value),!r||t.length!==r);i=!0);}catch(e){n=!0,s=e}finally{try{i||null==o.return||o.return()}finally{if(n)throw s}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return d(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,i=new Array(r);t<r;t++)i[t]=e[t];return i}function R(){return(R=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var D,V,N=x.b.getConfig,q=C.S2S.SRC,M=0,u={enabled:!1,timeout:1e3,maxBids:1,adapter:"prebidServer",adapterOptions:{},syncUrlModifier:{}};function p(e){if(e){var r=Array.isArray(e)?e:[e],i=[];return r.every(function(e,r,t){if(!1!==function(r){if(r.defaultVendor){var t=r.defaultVendor,i=Object.keys(r);if(!a.a[t])return A.logError("Incorrect or unavailable prebid server default vendor option: "+t),!1;Object.keys(a.a[t]).forEach(function(e){u[e]!==r[e]&&k()(i,e)||(r[e]=a.a[t][e])})}}(e)&&!1!==function(e){var r=Object.keys(e);if(0<["accountId","bidders","endpoint"].filter(function(e){return!k()(r,e)&&(A.logError(e+" missing in server to server config"),!0)}).length)return!1}(e))return Array.isArray(e.bidders)&&(t[r].bidders=e.bidders.filter(function(e){return-1===i.indexOf(e)&&(i.push(e),!0)})),!0;return!1})?D=r:void 0}}function z(e,r){var t;0!==e.length&&((t=e.shift()).no_cookie?function(e,r,t,i,n){{var s;n.syncUrlModifier&&"function"==typeof n.syncUrlModifier[t]?(s=n.syncUrlModifier[t](e,r,t),l(e,s,t,i)):l(e,r,t,i)}}(t.usersync.type,t.usersync.url,t.bidder,A.bind.call(z,null,e,r),r):z(e,r))}function l(e,r,t,i){r?"image"===e||"redirect"===e?(A.logMessage('Invoking image pixel user sync for bidder: "'.concat(t,'"')),A.triggerPixel(r,i)):"iframe"==e?(A.logMessage('Invoking iframe user sync for bidder: "'.concat(t,'"')),A.insertUserSyncIframe(r,i)):(A.logError('User sync type "'.concat(e,'" not supported for bidder: "').concat(t,'"')),i()):(A.logError('No sync url for bidder "'.concat(t,'": ').concat(r)),i())}x.b.setDefaults({s2sConfig:u}),N("s2sConfig",function(e){return p(e.s2sConfig)});var J={sponsoredBy:1,body:2,rating:3,likes:4,downloads:5,price:6,salePrice:7,phone:8,address:9,body2:10,cta:12},X=Object.keys(J),F={icon:1,image:3},W={img:1,js:2};[J,F,{impression:1,"viewable-mrc50":2,"viewable-mrc100":3,"viewable-video50":4},W].forEach(function(r){Object.keys(r).forEach(function(e){r[r[e]]=e})});var H={},L={},K={};var G={buildRequest:function(e,r,t,b,i){var f=[],g={},y=r[0];if(t.forEach(function(t){var e,o=Object(E.h)(A.deepAccess(t,"mediaTypes.native"));if(o)try{e=L[t.code]=Object.keys(o).reduce(function(e,r){var t=o[r];function i(e){return R({required:t.required?1:0},e?A.cleanObj(e):{})}switch(r){case"image":case"icon":var n=F[r],s=A.cleanObj({type:n,w:A.deepAccess(t,"sizes.0"),h:A.deepAccess(t,"sizes.1"),wmin:A.deepAccess(t,"aspect_ratios.0.min_width"),hmin:A.deepAccess(t,"aspect_ratios.0.min_height")});if(!(s.w&&s.h||s.hmin&&s.wmin))throw"invalid img sizes (must provide sizes or min_height & min_width if using aspect_ratios)";Array.isArray(t.aspect_ratios)&&(s.ext={aspectratios:t.aspect_ratios.map(function(e){return"".concat(e.ratio_width,":").concat(e.ratio_height)})}),e.push(i({img:s}));break;case"title":if(!t.len)throw"invalid title.len";e.push(i({title:{len:t.len}}));break;default:var a=J[r];a&&e.push(i({data:{type:a,len:t.len}}))}return e},[])}catch(e){A.logError("error creating native request: "+String(e))}var r=A.deepAccess(t,"mediaTypes.video"),i=A.deepAccess(t,"mediaTypes.banner");t.bids.forEach(function(e){var r;H["".concat(t.code).concat(e.bidder)]=e.bid_id,!O.default.aliasRegistry[e.bidder]||(r=O.default.bidderRegistry[e.bidder])&&!r.getSpec().skipPbsAliasing&&(g[e.bidder]=O.default.aliasRegistry[e.bidder])});var n,s={};if(i&&i.sizes&&(n=A.parseSizesInput(i.sizes).map(function(e){var r=U(e.split("x"),2),t=r[0],i=r[1];return{w:parseInt(t,10),h:parseInt(i,10)}}),s.banner={format:n}),A.isEmpty(r)||("outstream"!==r.context||t.renderer?("instream"!==r.context||r.hasOwnProperty("placement")||(r.placement=1),s.video=r):A.logError("Outstream bid without renderer cannot be sent to Prebid Server.")),e)try{s.native={request:JSON.stringify({context:1,plcmttype:1,eventtrackers:[{event:1,methods:[1]}],assets:e}),ver:"1.2"}}catch(e){A.logError("error creating native request: "+String(e))}var a=t.bids.reduce(function(e,r){var t=O.default.bidderRegistry[r.bidder];return t&&t.getSpec().transformBidParams&&(r.params=t.getSpec().transformBidParams(r.params,!0)),e[r.bidder]=b.adapterOptions&&b.adapterOptions[r.bidder]?R({},r.params,b.adapterOptions[r.bidder]):r.params,e},{}),c={id:t.code,ext:a,secure:b.secure},d=P({},A.deepAccess(t,"ortb2Imp.ext.data"));Object.keys(d).forEach(function(e){"pbadslot"===e?"string"==typeof d[e]&&d[e]&&A.deepSetValue(c,"ext.data.pbadslot",d[e]):"adserver"===e?["name","adslot"].forEach(function(e){var r=A.deepAccess(d,"adserver.".concat(e));"string"==typeof r&&r&&A.deepSetValue(c,"ext.data.adserver.".concat(e.toLowerCase()),r)}):A.deepSetValue(c,"ext.data.".concat(e),d[e])}),R(c,s);var u=I()(y.bids,function(e){return e.adUnitCode===t.code&&e.storedAuctionResponse});u&&A.deepSetValue(c,"ext.prebid.storedauctionresponse.id",u.storedAuctionResponse.toString());var p,l=I()(y.bids,function(e){return e.adUnitCode===t.code&&"function"==typeof e.getFloor});if(l){try{p=l.getFloor({currency:x.b.getConfig("currency.adServerCurrency")||"USD"})}catch(e){A.logError("PBS: getFloor threw an error: ",e)}p&&p.currency&&!isNaN(parseFloat(p.floor))&&(c.bidfloor=parseFloat(p.floor),c.bidfloorcur=p.currency)}(c.banner||c.video||c.native)&&f.push(c)}),f.length){var n={id:e.tid,source:{tid:e.tid},tmax:b.timeout,imp:f,test:N("debug")?1:0,ext:{prebid:{auctiontimestamp:y.auctionStart,targeting:{includewinners:!0,includebidderkeys:!1}}}};b.extPrebid&&"object"===B(b.extPrebid)&&(n.ext.prebid=R(n.ext.prebid,b.extPrebid));var s,a,o,c=x.b.getConfig("currency.adServerCurrency");c&&"string"==typeof c?n.cur=[c]:Array.isArray(c)&&c.length&&(n.cur=[c[0]]),s=n,a=r[0].refererInfo.referer,o=b.accountId,s&&("object"===B(x.b.getConfig("app"))?(s.app=x.b.getConfig("app"),s.app.publisher={id:o}):(s.site={},A.isPlainObject(x.b.getConfig("site"))&&(s.site=x.b.getConfig("site")),A.deepAccess(s.site,"publisher.id")||A.deepSetValue(s.site,"publisher.id",o),s.site.page||(s.site.page=a)),"object"===B(x.b.getConfig("device"))&&(s.device=x.b.getConfig("device")),s.device||(s.device={}),s.device.w||(s.device.w=window.innerWidth),s.device.h||(s.device.h=window.innerHeight));var d=A.deepAccess(r,"0.bids.0.schain");d&&(n.source.ext={schain:d}),A.isEmpty(g)||(n.ext.prebid.aliases=P(P({},n.ext.prebid.aliases),g));var u=A.deepAccess(r,"0.bids.0.userIdAsEids");A.isArray(u)&&0<u.length&&A.deepSetValue(n,"user.ext.eids",u),A.isArray(V)&&0<V.length&&(i&&A.isArray(i)&&V.forEach(function(e){e.bidders&&(e.bidders=e.bidders.filter(function(e){return i.includes(e)}))}),A.deepSetValue(n,"ext.prebid.data.eidpermissions",V));var p,l=x.b.getConfig("multibid");l&&A.deepSetValue(n,"ext.prebid.multibid",l.reduce(function(e,r){var t={};return Object.keys(r).forEach(function(e){t[e.toLowerCase()]=r[e]}),e.push(t),e},[])),r&&(y.gdprConsent&&("boolean"==typeof y.gdprConsent.gdprApplies&&(p=y.gdprConsent.gdprApplies?1:0),A.deepSetValue(n,"regs.ext.gdpr",p),A.deepSetValue(n,"user.ext.consent",y.gdprConsent.consentString),y.gdprConsent.addtlConsent&&"string"==typeof y.gdprConsent.addtlConsent&&A.deepSetValue(n,"user.ext.ConsentedProvidersSettings.consented_providers",y.gdprConsent.addtlConsent)),y.uspConsent&&A.deepSetValue(n,"regs.ext.us_privacy",y.uspConsent)),!0===N("coppa")&&A.deepSetValue(n,"regs.coppa",1);var v,m,h,S=N("ortb2")||{};return S.site&&A.mergeDeep(n,{site:S.site}),S.user&&A.mergeDeep(n,{user:S.user}),v=n,m=x.b.getBidderConfig(),(h=Object.keys(m).reduce(function(e,r){var t,i=m[r];return i.ortb2&&(t={},i.ortb2.site&&(t.site=i.ortb2.site),i.ortb2.user&&(t.user=i.ortb2.user),e.push({bidders:[r],config:{ortb2:t}})),e},[])).length&&A.deepSetValue(v,"ext.prebid.bidderconfig",h),n}A.logError("Request to Prebid Server rejected due to invalid media type(s) in adUnit.")},interpretResponse:function(h,S,O){var x=[];return[["errors","serverErrors"],["responsetimemillis","serverResponseTimeMs"]].forEach(function(e){return t=S,r=h,i=e[0],n=e[1],void((s=A.deepAccess(r,"ext.".concat(i)))&&Object.keys(s).forEach(function(r){var e=I()(t,function(e){return e.bidderCode===r});e&&(e[n]=s[r])}));var t,r,i,n,s}),h.seatbid&&h.seatbid.forEach(function(m){(m.bid||[]).forEach(function(e){var r,t="".concat(e.impid).concat(m.seat);H[t]&&(r=A.getBidRequest(H[t],S));var i=e.price,n=0!==i?C.STATUS.GOOD:C.STATUS.NO_BID,s=Object(j.a)(n,r||{bidder:m.seat,src:q});s.cpm=i;var a=A.deepAccess(h,["ext","responsetimemillis",m.seat].join("."));r&&a&&(r.serverResponseTimeMs=a);var o,c,d,u=A.deepAccess(e,"ext.prebid.bidid");A.isStr(u)&&(s.pbsBidId=u),A.isStr(A.deepAccess(e,"ext.prebid.events.win"))&&(o=r.auctionId,c=s.adId,d=A.deepAccess(e,"ext.prebid.events.win"),[o,c].every(A.isStr)&&(K["".concat(o).concat(c)]=d));var p,l,b,f,g,y=A.deepAccess(e,"ext.prebid.targeting");A.isPlainObject(y)&&(A.isStr(A.deepAccess(e,"ext.prebid.events.win"))&&(y=A.getDefinedParams(y,Object.keys(y).filter(function(e){return-1===e.indexOf("hb_winurl")&&-1===e.indexOf("hb_bidid")}))),s.adserverTargeting=y),s.seatBidId=e.id,A.deepAccess(e,"ext.prebid.type")===w.d?(s.mediaType=w.d,p=r.sizes&&r.sizes[0],s.playerWidth=p[0],s.playerHeight=p[1],e.ext.prebid.cache&&"object"===B(e.ext.prebid.cache.vastXml)&&e.ext.prebid.cache.vastXml.cacheId&&e.ext.prebid.cache.vastXml.url?(s.videoCacheKey=e.ext.prebid.cache.vastXml.cacheId,s.vastUrl=e.ext.prebid.cache.vastXml.url):y&&y.hb_uuid&&y.hb_cache_host&&y.hb_cache_path&&(s.videoCacheKey=y.hb_uuid,s.vastUrl="https://".concat(y.hb_cache_host).concat(y.hb_cache_path,"?uuid=").concat(y.hb_uuid)),e.adm&&(s.vastXml=e.adm),!s.vastUrl&&e.nurl&&(s.vastUrl=e.nurl)):A.deepAccess(e,"ext.prebid.type")===w.c?(s.mediaType=w.c,b="string"==typeof e.adm?s.adm=JSON.parse(e.adm):s.adm=e.adm,T(l={},W.img,b.imptrackers||[]),T(l,W.js,b.jstracker?[b.jstracker]:[]),f=l,b.eventtrackers&&b.eventtrackers.forEach(function(e){switch(e.method){case W.img:f[W.img].push(e.url);break;case W.js:f[W.js].push(e.url)}}),A.isPlainObject(b)&&Array.isArray(b.assets)?(g=L[r.adUnitCode],s.native=A.cleanObj(b.assets.reduce(function(r,t){var i=g[t.id];return A.isPlainObject(t.img)?r[i.img.type?F[i.img.type]:"image"]=A.pick(t.img,["url","w as width","h as height"]):A.isPlainObject(t.title)?r.title=t.title.text:A.isPlainObject(t.data)&&X.forEach(function(e){J[e]===i.data.type&&(r[e]=t.data.value)}),r},A.cleanObj({clickUrl:b.link,clickTrackers:A.deepAccess(b,"link.clicktrackers"),impressionTrackers:f[W.img],javascriptTrackers:f[W.js]})))):A.logError("prebid server native response contained no assets")):e.adm&&e.nurl?(s.ad=e.adm,s.ad+=A.createTrackPixelHtml(decodeURIComponent(e.nurl))):e.adm?s.ad=e.adm:e.nurl&&(s.adUrl=e.nurl),s.width=e.w,s.height=e.h,e.dealid&&(s.dealId=e.dealid),s.requestId=r.bidId||r.bid_Id,s.creative_id=e.crid,s.creativeId=e.crid,e.burl&&(s.burl=e.burl),s.currency=h.cur?h.cur:"USD",s.meta=s.meta||{},e.ext&&e.ext.dchain&&(s.meta.dchain=A.deepClone(e.ext.dchain)),e.adomain&&(s.meta.advertiserDomains=e.adomain);var v=O.defaultTtl||60;s.ttl=e.exp?e.exp:v,s.netRevenue=!e.netRevenue||e.netRevenue,x.push({adUnit:e.impid,bid:s})})}),x}};function b(e){var r,t,i=function(e,r){if([e,r].every(A.isStr))return K["".concat(e).concat(r)]}(e.auctionId,e.adId);A.isStr(i)&&(A.logMessage('Invoking image pixel for wurl on BID_WIN: "'.concat(i,'"')),A.triggerPixel(i),r=e.auctionId,t=e.adId,[r,t].every(A.isStr)&&(K["".concat(r).concat(t)]=void 0))}function f(){var e=new i.a("prebidServer");return e.callBids=function(r,t,i,n,e){var s,a,o,c,d,u,p,l,b,f,g,y,v=A.deepClone(r.ad_units).filter(function(e){return e.mediaTypes&&(e.mediaTypes.native||e.mediaTypes.banner&&e.mediaTypes.banner.sizes||e.mediaTypes.video&&e.mediaTypes.video.playerSize)}),m=v.map(function(e){return e.bids.map(function(e){return e.bidder}).filter(A.uniques)}).reduce(A.flatten).filter(A.uniques);Array.isArray(D)&&(r.s2sConfig&&r.s2sConfig.syncEndpoint&&(Array.isArray(t)&&0<t.length&&(s=t[0].gdprConsent,a=t[0].uspConsent),o=r.s2sConfig.bidders.map(function(e){return O.default.aliasRegistry[e]||e}).filter(function(e,r,t){return t.indexOf(e)===r}),u=o,p=s,l=a,b=r.s2sConfig,D.length!==M&&(M++,f={uuid:A.generateUUID(),bidders:u,account:b.accountId},g=b.userSyncLimit,A.isNumber(g)&&0<g&&(f.limit=g),p&&(f.gdpr=p.gdprApplies?1:0,!1!==p.gdprApplies&&(f.gdpr_consent=p.consentString)),l&&(f.us_privacy=l),"boolean"==typeof b.coopSync&&(f.coopSync=b.coopSync),y=JSON.stringify(f),Object(_.a)(b.syncEndpoint,function(e){try{z((e=JSON.parse(e)).bidder_status,b)}catch(e){A.logError(e)}},y,{contentType:"text/plain",withCredentials:!0}))),d=(c=G.buildRequest(r,t,v,r.s2sConfig,m))&&JSON.stringify(c),A.logInfo("BidRequest: "+d),c&&d&&e(r.s2sConfig.endpoint,{success:function(e){return function(e,r,i,n,t,s){var a;try{a=JSON.parse(e),G.interpretResponse(a,i,s).forEach(function(e){var r=e.adUnit,t=e.bid;Object(h.isValid)(r,t,i)&&n(r,t)}),i.forEach(function(e){return S.a.emit(C.EVENTS.BIDDER_DONE,e)})}catch(e){A.logError(e)}(!a||a.status&&k()(a.status,"Error"))&&A.logError("error parsing response: ",a.status);t(),function(e){e.forEach(function(e){var r=O.default.getBidAdapter(e);r&&r.registerSyncs&&r.registerSyncs([])})}(r)}(e,m,t,i,n,r.s2sConfig)},error:n},d,{contentType:"text/plain",withCredentials:!0}))},S.a.on(C.EVENTS.BID_WON,b),R(this,{callBids:e.callBids,setBidderCode:e.setBidderCode,type:q})}Object(A.getPrebidInternal)().setEidPermissions=function(e){V=e},O.default.registerBidAdapter(new f,"prebidServer")},705:function(e,r,t){"use strict";t.d(r,"a",function(){return i});var i={appnexus:{adapter:"prebidServer",enabled:!0,endpoint:"https://prebid.adnxs.com/pbs/v1/openrtb2/auction",syncEndpoint:"https://prebid.adnxs.com/pbs/v1/cookie_sync",timeout:1e3},rubicon:{adapter:"prebidServer",enabled:!0,endpoint:"https://prebid-server.rubiconproject.com/openrtb2/auction",syncEndpoint:"https://prebid-server.rubiconproject.com/cookie_sync",timeout:500},openx:{adapter:"prebidServer",enabled:!0,endpoint:"https://prebid.openx.net/openrtb2/auction",syncEndpoint:"https://prebid.openx.net/cookie_sync",timeout:1e3}}}},[703]);