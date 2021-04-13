pbjsChunk([17],{6:function(e,n,t){"use strict";n.a=function(e){var a,o=e.url,n=e.analyticsType,i=e.global,r=e.handler,u=[],s=0,t=!0;n!==C&&!N||function(){if(t){for(var e=0;e<u.length;e++)u[e]();u.push=function(e){e()},t=!1}g.logMessage("event count sent to ".concat(i,": ").concat(s))}();return{track:function(e){var n=e.eventType,t=e.args;this.getAdapterType()===N&&window[i](r,n,t);this.getAdapterType()===C&&function(e){var n=e.eventType,t=e.args,r=e.callback;Object(l.a)(o,r,JSON.stringify({eventType:n,args:t}))}.apply(void 0,arguments)},enqueue:c,enableAnalytics:p,disableAnalytics:function(){g._each(a,function(e,n){d.off(n,e)}),this.enableAnalytics=this._oldEnable?this._oldEnable:p},getAdapterType:function(){return n},getGlobal:function(){return i},getHandler:function(){return r},getUrl:function(){return o}};function c(e){var n=e.eventType,t=e.args,r=this;i&&window[i]&&n&&t?this.track({eventType:n,args:t}):u.push(function(){s++,r.track({eventType:n,args:t})})}function p(n){var e,t=this,r=this;"object"!==f(n)||"object"!==f(n.options)||(void 0===n.options.sampling||Math.random()<parseFloat(n.options.sampling))?(d.getEvents().forEach(function(e){var n,t;e&&(n=e.eventType,t=e.args,n!==A&&c.call(r,{eventType:n,args:t}))}),y(e={},h,function(e){return t.enqueue({eventType:h,args:e})}),y(e,T,function(e){return t.enqueue({eventType:T,args:e})}),y(e,S,function(e){return t.enqueue({eventType:S,args:e})}),y(e,E,function(e){return t.enqueue({eventType:E,args:e})}),y(e,A,function(e){return t.enqueue({eventType:A,args:e})}),y(e,_,function(e){return t.enqueue({eventType:_,args:e})}),y(e,m,function(e){return t.enqueue({eventType:m,args:e})}),y(e,O,function(e){return t.enqueue({eventType:O,args:e})}),y(e,D,function(e){return t.enqueue({eventType:D,args:e})}),y(e,v,function(e){return t.enqueue({eventType:v,args:e})}),y(e,I,function(e){return t.enqueue({eventType:I,args:e})}),y(e,q,function(e){return t.enqueue({eventType:q,args:e})}),y(e,B,function(e){return t.enqueue({eventType:B,args:e})}),y(e,b,function(e){e.config="object"===f(n)&&n.options||{},t.enqueue({eventType:b,args:e})}),a=e,g._each(a,function(e,n){d.on(n,e)})):g.logMessage('Analytics adapter for "'.concat(i,'" disabled by sampling')),this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return g.logMessage('Analytics adapter for "'.concat(i,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var r=t(5),a=t.n(r),l=t(4);function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=t(9),g=t(0),o=a.a.EVENTS,b=o.AUCTION_INIT,v=o.AUCTION_END,h=o.REQUEST_BIDS,T=o.BID_REQUESTED,A=o.BID_TIMEOUT,S=o.BID_RESPONSE,E=o.NO_BID,_=o.BID_WON,m=o.BID_ADJUSTMENT,O=o.BIDDER_DONE,D=o.SET_TARGETING,I=o.AD_RENDER_FAILED,q=o.AUCTION_DEBUG,B=o.ADD_AD_UNITS,C="endpoint",N="bundle"},814:function(e,n,t){e.exports=t(815)},815:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(6),a=t(8);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i=t(0),u=o(Object(r.a)({emptyUrl:"",analyticsType:"endpoint"}),{STR_BEACON_HOST:"https://b.sharethrough.com/butler?",placementCodeSet:{},track:function(e){var n=e.eventType,t=e.args;if("bidRequested"===n&&"sharethrough"===t.bidderCode)for(var r=t.bids,a=Object.keys(r),o=0;o<a.length;o++)this.placementCodeSet[r[a[o]].placementCode]=t.bids[a[o]];"bidWon"===n&&this.bidWon(t)},bidWon:function(e){var n,t=e.bidderCode;"sharethrough"!==t&&e.adUnitCode in this.placementCodeSet&&(n=this.placementCodeSet[e.adUnitCode],this.fireLoseBeacon(t,e.cpm,n.adserverRequestId,"headerBidLose"))},fireLoseBeacon:function(e,n,t,r){var a=this.STR_BEACON_HOST,a=i.tryAppendQueryString(a,"winnerBidderCode",e);a=i.tryAppendQueryString(a,"winnerCpm",n),a=i.tryAppendQueryString(a,"arid",t),a=i.tryAppendQueryString(a,"type",r),a=this.appendEnvFields(a),this.fireBeacon(a)},appendEnvFields:function(e){return e=i.tryAppendQueryString(e,"hbVersion","4.35.0-pre"),e=i.tryAppendQueryString(e,"strVersion","0.1.0"),e=i.tryAppendQueryString(e,"hbSource","prebid")},fireBeacon:function(e){(new Image).src=e}});a.default.registerAnalyticsAdapter({adapter:u,code:"sharethrough"}),n.default=u}},[814]);