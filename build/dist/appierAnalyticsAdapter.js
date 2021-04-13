pbjsChunk([52],{280:function(e,n,t){e.exports=t(281)},281:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"ANALYTICS_VERSION",function(){return p}),t.d(n,"BIDDER_STATUS",function(){return v}),t.d(n,"getCpmInUsd",function(){return T}),t.d(n,"parseBidderCode",function(){return m}),t.d(n,"parseAdUnitCode",function(){return b}),t.d(n,"appierAnalyticsAdapter",function(){return E});var i=t(4),o=t(6),a=t(5),r=t.n(a),s=t(8),c=t(17),u=t(0);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var p="1.0.0",f="https://prebid-analytics.c.appier.net/v1",l=r.a.EVENTS,g=l.AUCTION_END,y=l.BID_WON,h=l.BID_TIMEOUT,v={BID:"bid",NO_BID:"noBid",BID_WON:"bidWon",TIMEOUT:"timeout"},T=function(e){return"USD"===e.currency?e.cpm:e.getCpmInNewCurrency("USD")},I={},m=function(e){return(e.bidderCode||e.bidder).toLowerCase()},b=function(e){return e.adUnitCode.toLowerCase()},E=d(Object(o.a)({DEFAULT_SERVER:f,analyticsType:"endpoint"}),{cachedAuctions:{},initConfig:function(e){return I.options=Object(u.deepClone)(e.options),"string"!=typeof e.options.affiliateId||e.options.affiliateId.length<1?(Object(u.logError)('"options.affiliateId" is required.'),!1):"string"!=typeof e.options.configId||e.options.configId.length<1?(Object(u.logError)('"options.configId" is required.'),!1):(I.affiliateId=e.options.affiliateId,I.configId=e.options.configId,I.server=e.options.server||f,I.sampled=!0,"number"==typeof e.options.sampling&&(I.sampled=Math.random()<parseFloat(e.options.sampling)),I.adSampled=!1,"number"==typeof e.options.adSampling&&(I.adSampled=Math.random()<parseFloat(e.options.adSampling)),I.autoPick=e.options.autoPick||null,I.predictionId=e.options.predictionId||null,!0)},sendEventMessage:function(e,n){Object(u.logInfo)("AJAX: ".concat(e,": ")+JSON.stringify(n)),Object(i.a)("".concat(I.server,"/").concat(e),null,JSON.stringify(n),{contentType:"application/json",withCredentials:!0})},createCommonMessage:function(e){return{version:p,auctionId:e,affiliateId:I.affiliateId,configId:I.configId,referrer:window.location.href,sampling:I.options.sampling,adSampling:I.options.adSampling,prebid:"4.35.0-pre",autoPick:I.autoPick,predictionId:I.predictionId,adUnits:{}}},serializeBidResponse:function(e,n){var t={prebidWon:n===v.BID_WON,isTimeout:n===v.TIMEOUT,status:n};return n!==v.BID&&n!==v.BID_WON||d(t,{time:e.timeToRespond,cpm:e.cpm,currency:e.currency,originalCpm:e.originalCpm||e.cpm,cpmUsd:T(e),originalCurrency:e.originalCurrency||e.currency}),t},addBidResponseToMessage:function(e,n,t){var i=b(n);e.adUnits[i]=e.adUnits[i]||{};var o=m(n),a=this.serializeBidResponse(n,t);e.adUnits[i][o]=a},createBidMessage:function(e,n,t){var i=this,o=e.auctionId,a=e.timestamp,r=e.timeout,s=e.auctionEnd,c=e.adUnitCodes,u=e.bidsReceived,d=e.noBids,p=this.createCommonMessage(o);return p.auctionElapsed=s-a,p.timeout=r,c.forEach(function(e){p.adUnits[e]={}}),d.forEach(function(e){return i.addBidResponseToMessage(p,e,v.NO_BID)}),u.forEach(function(e){return i.addBidResponseToMessage(p,e,v.BID)}),t.forEach(function(e){return i.addBidResponseToMessage(p,e,v.TIMEOUT)}),n.forEach(function(e){var n=b(e),t=m(e);p.adUnits[n][t].prebidWon=!0}),p},createImpressionMessage:function(e){var n=this.createCommonMessage(e.auctionId);return this.addBidResponseToMessage(n,e,v.BID_WON),n},createCreativeMessage:function(e,n){var i=this.createCommonMessage(e);return n.forEach(function(e){var n=b(e),t=m(e);i.adUnits[n]=i.adUnits[n]||{},i.adUnits[n][t]={ad:e.ad}}),i},getCachedAuction:function(e){return this.cachedAuctions[e]=this.cachedAuctions[e]||{timeoutBids:[]},this.cachedAuctions[e]},handleAuctionEnd:function(e){var n=this.getCachedAuction(e.auctionId),t=Object(c.a)().getHighestCpmBids();this.sendEventMessage("bid",this.createBidMessage(e,t,n.timeoutBids)),I.adSampled&&this.sendEventMessage("cr",this.createCreativeMessage(e.auctionId,e.bidsReceived))},handleBidTimeout:function(e){var n=this;e.forEach(function(e){n.getCachedAuction(e.auctionId).timeoutBids.push(e)})},handleBidWon:function(e){this.sendEventMessage("imp",this.createImpressionMessage(e))},track:function(e){var n=e.eventType,t=e.args;if(I.sampled)switch(n){case y:this.handleBidWon(t);break;case h:this.handleBidTimeout(t);break;case g:this.handleAuctionEnd(t)}},getAnalyticsOptions:function(){return I}});E.originEnableAnalytics=E.enableAnalytics,E.enableAnalytics=function(e){this.initConfig(e)&&E.originEnableAnalytics(e)},s.default.registerAnalyticsAdapter({adapter:E,code:"appierAnalytics"})},6:function(e,n,t){"use strict";n.a=function(e){var o,a=e.url,n=e.analyticsType,r=e.global,i=e.handler,s=[],c=0,t=!0;n!==M&&!S||function(){if(t){for(var e=0;e<s.length;e++)s[e]();s.push=function(e){e()},t=!1}y.logMessage("event count sent to ".concat(r,": ").concat(c))}();return{track:function(e){var n=e.eventType,t=e.args;this.getAdapterType()===S&&window[r](i,n,t);this.getAdapterType()===M&&function(e){var n=e.eventType,t=e.args,i=e.callback;Object(p.a)(a,i,JSON.stringify({eventType:n,args:t}))}.apply(void 0,arguments)},enqueue:u,enableAnalytics:d,disableAnalytics:function(){y._each(o,function(e,n){g.off(n,e)}),this.enableAnalytics=this._oldEnable?this._oldEnable:d},getAdapterType:function(){return n},getGlobal:function(){return r},getHandler:function(){return i},getUrl:function(){return a}};function u(e){var n=e.eventType,t=e.args,i=this;r&&window[r]&&n&&t?this.track({eventType:n,args:t}):s.push(function(){c++,i.track({eventType:n,args:t})})}function d(n){var e,t=this,i=this;"object"!==l(n)||"object"!==l(n.options)||(void 0===n.options.sampling||Math.random()<parseFloat(n.options.sampling))?(g.getEvents().forEach(function(e){var n,t;e&&(n=e.eventType,t=e.args,n!==m&&u.call(i,{eventType:n,args:t}))}),f(e={},T,function(e){return t.enqueue({eventType:T,args:e})}),f(e,I,function(e){return t.enqueue({eventType:I,args:e})}),f(e,b,function(e){return t.enqueue({eventType:b,args:e})}),f(e,E,function(e){return t.enqueue({eventType:E,args:e})}),f(e,m,function(e){return t.enqueue({eventType:m,args:e})}),f(e,A,function(e){return t.enqueue({eventType:A,args:e})}),f(e,B,function(e){return t.enqueue({eventType:B,args:e})}),f(e,O,function(e){return t.enqueue({eventType:O,args:e})}),f(e,D,function(e){return t.enqueue({eventType:D,args:e})}),f(e,v,function(e){return t.enqueue({eventType:v,args:e})}),f(e,_,function(e){return t.enqueue({eventType:_,args:e})}),f(e,C,function(e){return t.enqueue({eventType:C,args:e})}),f(e,U,function(e){return t.enqueue({eventType:U,args:e})}),f(e,h,function(e){e.config="object"===l(n)&&n.options||{},t.enqueue({eventType:h,args:e})}),o=e,y._each(o,function(e,n){g.on(n,e)})):y.logMessage('Analytics adapter for "'.concat(r,'" disabled by sampling')),this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return y.logMessage('Analytics adapter for "'.concat(r,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var i=t(5),o=t.n(i),p=t(4);function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g=t(9),y=t(0),a=o.a.EVENTS,h=a.AUCTION_INIT,v=a.AUCTION_END,T=a.REQUEST_BIDS,I=a.BID_REQUESTED,m=a.BID_TIMEOUT,b=a.BID_RESPONSE,E=a.NO_BID,A=a.BID_WON,B=a.BID_ADJUSTMENT,O=a.BIDDER_DONE,D=a.SET_TARGETING,_=a.AD_RENDER_FAILED,C=a.AUCTION_DEBUG,U=a.ADD_AD_UNITS,M="endpoint",S="bundle"}},[280]);