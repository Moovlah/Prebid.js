pbjsChunk([148],{774:function(e,r,n){e.exports=n(775)},775:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"spec",function(){return c});var d=n(1),i=n(3),a=n(2),t=n(0),s=n(12),o="",c={code:"richaudience",gvlid:108,aliases:["ra"],supportedMediaTypes:[a.b,a.d],isBidRequestValid:function(e){return!!(e.params&&e.params.pid&&e.params.supplyType)},buildRequests:function(e,n){return e.map(function(e){var r={bidfloor:e.params.bidfloor,ifa:e.params.ifa,pid:e.params.pid,supplyType:e.params.supplyType,currencyCode:i.b.getConfig("currency.adServerCurrency"),auctionId:e.auctionId,bidId:e.bidId,BidRequestsCount:e.bidRequestsCount,bidder:e.bidder,bidderRequestId:e.bidderRequestId,tagId:e.adUnitCode,sizes:function(e){var r;e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes&&(r=e.mediaTypes.banner.sizes);if(null!=r)return r.map(function(e){return{w:e[0],h:e[1]}})}(e),referer:void 0!==n.refererInfo.referer?encodeURIComponent(n.refererInfo.referer):null,numIframes:void 0!==n.refererInfo.numIframes?n.refererInfo.numIframes:null,transactionId:e.transactionId,timeout:i.b.getConfig("bidderTimeout"),user:function(e){var r=[];e&&e.userId&&(u(0,r,"id5-sync.com",t.deepAccess(e,"userId.id5id.uid")),u(0,r,"pubcommon",t.deepAccess(e,"userId.pubcid")),u(0,r,"criteo.com",t.deepAccess(e,"userId.criteoId")),u(0,r,"liveramp.com",t.deepAccess(e,"userId.idl_env")),u(0,r,"liveintent.com",t.deepAccess(e,"userId.lipb.lipbid")),u(0,r,"adserver.org",t.deepAccess(e,"userId.tdid")));return r}(e),demand:p(e),videoData:function(e){var r;r="video"==p(e)?{format:e.mediaTypes.video.context,playerSize:e.mediaTypes.video.playerSize,mimes:e.mediaTypes.video.mimes}:{format:"banner"};return r}(e),scr_rsl:function(){var e="";void 0!==window.screen&&(e=window.screen.width+"x"+window.screen.height);return e}(),cpuc:void 0!==window.navigator?window.navigator.hardwareConcurrency:null,kws:t.isEmpty(e.params.keywords)?null:e.params.keywords};o=void 0!==n.refererInfo.referer?encodeURIComponent(n.refererInfo.referer):null,r.gdpr_consent="",r.gdpr=null,n&&n.gdprConsent&&(r.gdpr_consent=n.gdprConsent.consentString,r.gdpr=n.gdprConsent.gdprApplies);return{method:"POST",url:"https://shb.richaudience.com/hb/",data:JSON.stringify(r)}})},interpretResponse:function(e,r){var n=[],d=e.body;if(d){var i={requestId:JSON.parse(r.data).bidId,cpm:d.cpm,width:d.width,height:d.height,creativeId:d.creative_id,mediaType:d.media_type,netRevenue:d.netRevenue,currency:d.currency,ttl:d.ttl,dealId:d.dealId};if("video"===d.media_type){i.vastXml=d.vastXML;try{null!=i.vastXml&&("outstream"!=JSON.parse(r.data).videoData.format&&"banner"!=JSON.parse(r.data).videoData.format||(i.renderer=s.a.install({id:r.bidId,adunitcode:r.tagId,loaded:!1,config:d.media_type,url:"https://cdn3.richaudience.com/prebidVideo/player.js"})),i.renderer.setRender(l))}catch(e){i.ad=d.adm}}else i.ad=d.adm;n.push(i)}return n},getUserSyncs:function(e,r,n){var d=[],i=Math.floor(9999999999*Math.random()),a="",t="";return n&&"string"==typeof n.consentString&&void 0!==n.consentString&&(t="consentString=".concat(n.consentString)),e.iframeEnabled&&(a="https://sync.richaudience.com/dcf3528a0b8aa83634892d50e91c306e/?ord="+i,""!=t&&(a+="&".concat(t)),d.push({type:"iframe",url:a})),e.pixelEnabled&&null!=o&&0==d.length&&(a="https://sync.richaudience.com/bf7c142f4339da0278e83698a02b0854/?referrer=".concat(o),""!=t&&(a+="&".concat(t)),d.push({type:"image",url:a})),d}};function p(e){var r="display";return null!=e.mediaTypes&&null!=e.mediaTypes.video&&(r="video"),r}function u(e,r,n,d){t.isStr(d)&&r.push({userId:d,source:n})}function l(d){d.renderer.push(function(){var e,r,n;r="".concat((e=d).vastXml),n={config:null!=e.params[0].player?{end:null!=e.params[0].player.end?e.params[0].player.end:"close",init:null!=e.params[0].player.init?e.params[0].player.init:"close",skin:null!=e.params[0].player.skin?e.params[0].player.skin:"light"}:{end:"close",init:"close",skin:"light"},pid:e.params[0].pid,adUnit:e.adUnitCode},window.raParams(n,r,!0)})}Object(d.registerBidder)(c)}},[774]);