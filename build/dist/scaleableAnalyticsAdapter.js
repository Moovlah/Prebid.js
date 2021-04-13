pbjsChunk([18],{6:function(e,n,t){"use strict";n.a=function(e){var a,o=e.url,n=e.analyticsType,i=e.global,r=e.handler,u=[],c=0,t=!0;n!==q&&!C||function(){if(t){for(var e=0;e<u.length;e++)u[e]();u.push=function(e){e()},t=!1}b.logMessage("event count sent to ".concat(i,": ").concat(c))}();return{track:function(e){var n=e.eventType,t=e.args;this.getAdapterType()===C&&window[i](r,n,t);this.getAdapterType()===q&&function(e){var n=e.eventType,t=e.args,r=e.callback;Object(f.a)(o,r,JSON.stringify({eventType:n,args:t}))}.apply(void 0,arguments)},enqueue:s,enableAnalytics:l,disableAnalytics:function(){b._each(a,function(e,n){y.off(n,e)}),this.enableAnalytics=this._oldEnable?this._oldEnable:l},getAdapterType:function(){return n},getGlobal:function(){return i},getHandler:function(){return r},getUrl:function(){return o}};function s(e){var n=e.eventType,t=e.args,r=this;i&&window[i]&&n&&t?this.track({eventType:n,args:t}):u.push(function(){c++,r.track({eventType:n,args:t})})}function l(n){var e,t=this,r=this;"object"!==p(n)||"object"!==p(n.options)||(void 0===n.options.sampling||Math.random()<parseFloat(n.options.sampling))?(y.getEvents().forEach(function(e){var n,t;e&&(n=e.eventType,t=e.args,n!==E&&s.call(r,{eventType:n,args:t}))}),d(e={},T,function(e){return t.enqueue({eventType:T,args:e})}),d(e,h,function(e){return t.enqueue({eventType:h,args:e})}),d(e,A,function(e){return t.enqueue({eventType:A,args:e})}),d(e,m,function(e){return t.enqueue({eventType:m,args:e})}),d(e,E,function(e){return t.enqueue({eventType:E,args:e})}),d(e,I,function(e){return t.enqueue({eventType:I,args:e})}),d(e,_,function(e){return t.enqueue({eventType:_,args:e})}),d(e,O,function(e){return t.enqueue({eventType:O,args:e})}),d(e,S,function(e){return t.enqueue({eventType:S,args:e})}),d(e,v,function(e){return t.enqueue({eventType:v,args:e})}),d(e,D,function(e){return t.enqueue({eventType:D,args:e})}),d(e,N,function(e){return t.enqueue({eventType:N,args:e})}),d(e,U,function(e){return t.enqueue({eventType:U,args:e})}),d(e,g,function(e){e.config="object"===p(n)&&n.options||{},t.enqueue({eventType:g,args:e})}),a=e,b._each(a,function(e,n){y.on(n,e)})):b.logMessage('Analytics adapter for "'.concat(i,'" disabled by sampling')),this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return b.logMessage('Analytics adapter for "'.concat(i,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var r=t(5),a=t.n(r),f=t(4);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=t(9),b=t(0),o=a.a.EVENTS,g=o.AUCTION_INIT,v=o.AUCTION_END,T=o.REQUEST_BIDS,h=o.BID_REQUESTED,E=o.BID_TIMEOUT,A=o.BID_RESPONSE,m=o.NO_BID,I=o.BID_WON,_=o.BID_ADJUSTMENT,O=o.BIDDER_DONE,S=o.SET_TARGETING,D=o.AD_RENDER_FAILED,N=o.AUCTION_DEBUG,U=o.ADD_AD_UNITS,q="endpoint",C="bundle"},800:function(e,n,t){e.exports=t(801)},801:function(e,I,_){"use strict";Object.defineProperty(I,"__esModule",{value:!0}),function(n){var t=_(4),e=_(5),r=_.n(e),a=_(6),o=_(8),i=_(0);function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var l=Object.entries||function(e){for(var n=Object.keys(e),t=n.length,r=new Array(t);t--;)r[t]=[n[t],e[n[t]]];return r},f=r.a.EVENTS.BID_TIMEOUT,d=r.a.EVENTS.AUCTION_INIT,p=r.a.EVENTS.BID_WON,y=r.a.EVENTS.AUCTION_END,b="https://auction.scaleable.ai/",g={},v=s({},Object(a.a)({URL:b,ANALYTICS_TYPE:"endpoint"}),{track:function(e){var n=e.eventType,t=e.args;switch(n){case d:h(t);break;case y:E(t);break;case p:A(t);break;case f:m(t)}}});v.config={},v.originEnableAnalytics=v.enableAnalytics,v.enableAnalytics=function(e){v.config=e,v.originEnableAnalytics(e),v.enableAnalytics=function(){return i.logMessage('Analytics adapter for "'.concat(n,'" already enabled, unnecessary call to `enableAnalytics`.'))}},v.getAuctionData=function(){return g};function T(e){return Object(t.a)(b,function(){},JSON.stringify(e))}var h=function(e){var n=v.config||{options:{}},t={},a=[];e.adUnitCodes.forEach(function(e){t[e]=[{bidder:"scaleable_adunit_request"}]}),e.bidderRequests.forEach(function(e){e.bids.forEach(function(e){t[e.adUnitCode].push({bidder:e.bidder,params:e.params})})}),l(t).forEach(function(e){var n=u(e,2),t=n[0],r=n[1];a.push({code:t,bidRequests:r})});var r={event:"request",site:n.options.site,adunits:a};T(r)},E=function(e){var n=v.config||{options:{}},t={},a=[];e.bidsReceived.forEach(function(e){t[e.adUnitCode]||(t[e.adUnitCode]=[]),t[e.adUnitCode].push({bidder:e.bidderCode||e.bidder,cpm:e.cpm,currency:e.currency,dealId:e.dealId,type:e.mediaType,ttr:e.timeToRespond,size:e.size})}),l(t).forEach(function(e){var n=u(e,2),t=n[0],r=n[1].concat(g[t]||[]);a.push({code:t,bidData:r}),delete g[t]}),l(g).forEach(function(e){var n=u(e,2),t=n[0],r=n[1];a.push({code:t,bidData:r})});var r={event:"bids",site:n.options.site,adunits:a};a.length&&T(r),g={}},A=function(e){var n={event:"win",site:(v.config||{options:{}}).options.site,adunit:e.adUnitCode,code:e.bidderCode,cpm:e.cpm,ttr:e.timeToRespond,params:e.params};T(n)},m=function(e){e.forEach(function(e){g[e.adUnitCode]||(g[e.adUnitCode]=[]),g[e.adUnitCode].push({timeouts:1,bidder:e.bidder})})};o.default.registerAnalyticsAdapter({adapter:v,code:"scaleable"}),I.default=v}.call(I,_(36))}},[800]);