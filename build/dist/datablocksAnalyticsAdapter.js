pbjsChunk([46],{402:function(e,n,t){e.exports=t(403)},403:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(6),a=t(8),u=Object(r.a)({global:"datablocksAnalytics",handler:"on",analyticsType:"bundle"});a.default.registerAnalyticsAdapter({adapter:u,code:"datablocks"}),n.default=u},6:function(e,n,t){"use strict";n.a=function(e){var a,u=e.url,n=e.analyticsType,o=e.global,r=e.handler,i=[],c=0,t=!0;n!==U&&!B||function(){if(t){for(var e=0;e<i.length;e++)i[e]();i.push=function(e){e()},t=!1}T.logMessage("event count sent to ".concat(o,": ").concat(c))}();return{track:function(e){var n=e.eventType,t=e.args;this.getAdapterType()===B&&window[o](r,n,t);this.getAdapterType()===U&&function(e){var n=e.eventType,t=e.args,r=e.callback;Object(f.a)(u,r,JSON.stringify({eventType:n,args:t}))}.apply(void 0,arguments)},enqueue:s,enableAnalytics:l,disableAnalytics:function(){T._each(a,function(e,n){g.off(n,e)}),this.enableAnalytics=this._oldEnable?this._oldEnable:l},getAdapterType:function(){return n},getGlobal:function(){return o},getHandler:function(){return r},getUrl:function(){return u}};function s(e){var n=e.eventType,t=e.args,r=this;o&&window[o]&&n&&t?this.track({eventType:n,args:t}):i.push(function(){c++,r.track({eventType:n,args:t})})}function l(n){var e,t=this,r=this;"object"!==p(n)||"object"!==p(n.options)||(void 0===n.options.sampling||Math.random()<parseFloat(n.options.sampling))?(g.getEvents().forEach(function(e){var n,t;e&&(n=e.eventType,t=e.args,n!==A&&s.call(r,{eventType:n,args:t}))}),y(e={},d,function(e){return t.enqueue({eventType:d,args:e})}),y(e,E,function(e){return t.enqueue({eventType:E,args:e})}),y(e,_,function(e){return t.enqueue({eventType:_,args:e})}),y(e,h,function(e){return t.enqueue({eventType:h,args:e})}),y(e,A,function(e){return t.enqueue({eventType:A,args:e})}),y(e,D,function(e){return t.enqueue({eventType:D,args:e})}),y(e,I,function(e){return t.enqueue({eventType:I,args:e})}),y(e,q,function(e){return t.enqueue({eventType:q,args:e})}),y(e,N,function(e){return t.enqueue({eventType:N,args:e})}),y(e,v,function(e){return t.enqueue({eventType:v,args:e})}),y(e,S,function(e){return t.enqueue({eventType:S,args:e})}),y(e,O,function(e){return t.enqueue({eventType:O,args:e})}),y(e,m,function(e){return t.enqueue({eventType:m,args:e})}),y(e,b,function(e){e.config="object"===p(n)&&n.options||{},t.enqueue({eventType:b,args:e})}),a=e,T._each(a,function(e,n){g.on(n,e)})):T.logMessage('Analytics adapter for "'.concat(o,'" disabled by sampling')),this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return T.logMessage('Analytics adapter for "'.concat(o,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var r=t(5),a=t.n(r),f=t(4);function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g=t(9),T=t(0),u=a.a.EVENTS,b=u.AUCTION_INIT,v=u.AUCTION_END,d=u.REQUEST_BIDS,E=u.BID_REQUESTED,A=u.BID_TIMEOUT,_=u.BID_RESPONSE,h=u.NO_BID,D=u.BID_WON,I=u.BID_ADJUSTMENT,q=u.BIDDER_DONE,N=u.SET_TARGETING,S=u.AD_RENDER_FAILED,O=u.AUCTION_DEBUG,m=u.ADD_AD_UNITS,U="endpoint",B="bundle"}},[402]);