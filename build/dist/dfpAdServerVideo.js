pbjsChunk([300],{410:function(e,r,t){e.exports=t(411)},411:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"adpodUtils",function(){return A}),r.buildDfpVideoUrl=u,r.notifyTranslationModule=_,r.buildAdpodVideoUrl=E;var a=t(72),p=t(42),b=t(0),n=t(3),o=t(11),c=t(23),g=t(8),d=t(9),i=t.n(d),s=t(5),l=t.n(s);function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function v(){return(v=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var T={env:"vp",gdfp_req:1,output:"vast",unviewed_position_start:1},A={};function u(e){if(e.params||e.url){var r=e.adUnit,t=e.bid||p.c.getWinningBids(r.code)[0],a={};if(e.url&&(a=Object(b.parseUrl)(e.url,{noDecodeWholeURL:!0}),Object(b.isEmpty)(e.params)))return function(e,r,t){var a=j(r,e,"search");a&&(e.search.description_url=a);var n=m(r,t);return e.search.cust_params=e.search.cust_params?e.search.cust_params+"%26"+n:n,Object(b.buildUrl)(e)}(a,t,e);var n={correlator:Date.now(),sz:Object(b.parseSizesInput)(Object(b.deepAccess)(r,"mediaTypes.video.playerSize")).join("|"),url:encodeURIComponent(location.href)},o=m(t,e),c=v({},T,a.search,n,e.params,{cust_params:o}),d=j(t,e,"params");d&&(c.description_url=d);var i=g.gdprDataHandler.getConsentData();i&&("boolean"==typeof i.gdprApplies&&(c.gdpr=Number(i.gdprApplies)),i.consentString&&(c.gdpr_consent=i.consentString),i.addtlConsent&&(c.addtl_consent=i.addtlConsent));var s=g.uspDataHandler.getConsentData();return s&&(c.us_privacy=s),Object(b.buildUrl)({protocol:"https",host:"securepubads.g.doubleclick.net",pathname:"/gampad/ads",search:c})}Object(b.logError)("A params object or a url is required to use pbjs.adServers.dfp.buildVideoUrl")}function _(e){e.call(this,"dfp")}function E(){var p,r,e,t,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},l=a.code,u=a.params,_=a.callback;u&&_?(p={correlator:Date.now(),sz:(r=l,e=c.a.getAdUnits().filter(function(e){return e.code===r}),t=Object(b.deepAccess)(e[0],"mediaTypes.video.playerSize"),Object(b.parseSizesInput)(t).join("|")),url:encodeURIComponent(location.href)},A.getTargeting({codes:[l],callback:function(e,r){var t;if(e)return void _(e,null);var a=(f(t={},A.TARGETING_KEY_PB_CAT_DUR,void 0),f(t,A.TARGETING_KEY_CACHE_ID,void 0),t),n={};r[l]&&(n=r[l].reduce(function(e,r){return Object.keys(r)[0]===A.TARGETING_KEY_PB_CAT_DUR?e[A.TARGETING_KEY_PB_CAT_DUR]=void 0!==e[A.TARGETING_KEY_PB_CAT_DUR]?e[A.TARGETING_KEY_PB_CAT_DUR]+","+r[A.TARGETING_KEY_PB_CAT_DUR]:r[A.TARGETING_KEY_PB_CAT_DUR]:Object.keys(r)[0]===A.TARGETING_KEY_CACHE_ID&&(e[A.TARGETING_KEY_CACHE_ID]=r[A.TARGETING_KEY_CACHE_ID]),e},a));var o=encodeURIComponent(Object(b.formatQS)(n)),c=v({},T,p,u,{cust_params:o}),d=g.gdprDataHandler.getConsentData();d&&("boolean"==typeof d.gdprApplies&&(c.gdpr=Number(d.gdprApplies)),d.consentString&&(c.gdpr_consent=d.consentString),d.addtlConsent&&(c.addtl_consent=d.addtlConsent));var i=g.uspDataHandler.getConsentData();i&&(c.us_privacy=i);var s=Object(b.buildUrl)({protocol:"https",host:"securepubads.g.doubleclick.net",pathname:"/gampad/ads",search:c});_(null,s)}})):Object(b.logError)("A params object and a callback is required to use pbjs.adServers.dfp.buildAdpodVideoUrl")}function j(e,r,t){if(!n.b.getConfig("cache.url"))if(Object(b.deepAccess)(r,"".concat(t,".description_url")))Object(b.logError)("input cannnot contain description_url");else{var a=e&&e.vastUrl;if(a)return encodeURIComponent(a)}}function m(e,r){var t,a=e&&e.adserverTargeting||{},n={},o=r&&r.adUnit;o&&(n=(t=p.c.getAllTargeting(o.code))?t[o.code]:{});var c=v({},{hb_uuid:e&&e.videoCacheKey},{hb_cache_id:e&&e.videoCacheKey},n,a);i.a.emit(l.a.EVENTS.SET_TARGETING,f({},o.code,c));var d=v({},c,Object(b.deepAccess)(r,"params.cust_params"));return encodeURIComponent(Object(b.formatQS)(d))}Object(o.a)("registerAdserver").before(_),Object(a.a)("dfp",{buildVideoUrl:u,buildAdpodVideoUrl:E,getAdpodTargeting:function(e){return A.getTargeting(e)}}),Object(o.e)("adpod",A)}},[410]);