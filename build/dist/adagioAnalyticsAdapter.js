pbjsChunk([58],{178:function(e,n,t){e.exports=t(179)},179:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(6),a=t(8),o=t(5),u=t.n(o),i=t(0);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var s=Object.keys(u.a.EVENTS).map(function(e){return u.a.EVENTS[e]});var l=c(Object(r.a)({emptyUrl:"",analyticsType:"endpoint"}),{track:function(e){var n,t,r=e.eventType,a=e.args;void 0!==a&&-1!==s.indexOf(r)&&(n="pb-analytics-event",t={eventName:r,args:a},i.getWindowTop().ADAGIO.queue.push({action:n,data:t,ts:Date.now()}))}});l.originEnableAnalytics=l.enableAnalytics,l.enableAnalytics=function(e){var n;!function(){try{if(i.getWindowTop().location.href)return 1}catch(e){return}}()||((n=i.getWindowTop()).ADAGIO=n.ADAGIO||{},n.ADAGIO.queue=n.ADAGIO.queue||[],n.ADAGIO.versions=n.ADAGIO.versions||{},n.ADAGIO.versions.adagioAnalyticsAdapter="2.0.0",l.originEnableAnalytics(e))},a.default.registerAnalyticsAdapter({adapter:l,code:"adagio"}),n.default=l},6:function(e,n,t){"use strict";n.a=function(e){var a,o=e.url,n=e.analyticsType,u=e.global,r=e.handler,i=[],c=0,t=!0;n!==G&&!j||function(){if(t){for(var e=0;e<i.length;e++)i[e]();i.push=function(e){e()},t=!1}v.logMessage("event count sent to ".concat(u,": ").concat(c))}();return{track:function(e){var n=e.eventType,t=e.args;this.getAdapterType()===j&&window[u](r,n,t);this.getAdapterType()===G&&function(e){var n=e.eventType,t=e.args,r=e.callback;Object(p.a)(o,r,JSON.stringify({eventType:n,args:t}))}.apply(void 0,arguments)},enqueue:s,enableAnalytics:l,disableAnalytics:function(){v._each(a,function(e,n){g.off(n,e)}),this.enableAnalytics=this._oldEnable?this._oldEnable:l},getAdapterType:function(){return n},getGlobal:function(){return u},getHandler:function(){return r},getUrl:function(){return o}};function s(e){var n=e.eventType,t=e.args,r=this;u&&window[u]&&n&&t?this.track({eventType:n,args:t}):i.push(function(){c++,r.track({eventType:n,args:t})})}function l(n){var e,t=this,r=this;"object"!==f(n)||"object"!==f(n.options)||(void 0===n.options.sampling||Math.random()<parseFloat(n.options.sampling))?(g.getEvents().forEach(function(e){var n,t;e&&(n=e.eventType,t=e.args,n!==E&&s.call(r,{eventType:n,args:t}))}),y(e={},b,function(e){return t.enqueue({eventType:b,args:e})}),y(e,d,function(e){return t.enqueue({eventType:d,args:e})}),y(e,D,function(e){return t.enqueue({eventType:D,args:e})}),y(e,h,function(e){return t.enqueue({eventType:h,args:e})}),y(e,E,function(e){return t.enqueue({eventType:E,args:e})}),y(e,O,function(e){return t.enqueue({eventType:O,args:e})}),y(e,I,function(e){return t.enqueue({eventType:I,args:e})}),y(e,_,function(e){return t.enqueue({eventType:_,args:e})}),y(e,q,function(e){return t.enqueue({eventType:q,args:e})}),y(e,A,function(e){return t.enqueue({eventType:A,args:e})}),y(e,N,function(e){return t.enqueue({eventType:N,args:e})}),y(e,S,function(e){return t.enqueue({eventType:S,args:e})}),y(e,m,function(e){return t.enqueue({eventType:m,args:e})}),y(e,T,function(e){e.config="object"===f(n)&&n.options||{},t.enqueue({eventType:T,args:e})}),a=e,v._each(a,function(e,n){g.on(n,e)})):v.logMessage('Analytics adapter for "'.concat(u,'" disabled by sampling')),this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return v.logMessage('Analytics adapter for "'.concat(u,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var r=t(5),a=t.n(r),p=t(4);function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g=t(9),v=t(0),o=a.a.EVENTS,T=o.AUCTION_INIT,A=o.AUCTION_END,b=o.REQUEST_BIDS,d=o.BID_REQUESTED,E=o.BID_TIMEOUT,D=o.BID_RESPONSE,h=o.NO_BID,O=o.BID_WON,I=o.BID_ADJUSTMENT,_=o.BIDDER_DONE,q=o.SET_TARGETING,N=o.AD_RENDER_FAILED,S=o.AUCTION_DEBUG,m=o.ADD_AD_UNITS,G="endpoint",j="bundle"}},[178]);