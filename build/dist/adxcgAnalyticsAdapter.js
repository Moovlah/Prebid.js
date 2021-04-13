pbjsChunk([54],{262:function(e,t,n){e.exports=n(263)},263:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),r=n(6),i=n(8),o=n(5),s=n.n(o),c=n(0);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var d=u(Object(r.a)({emptyUrl:"",analyticsType:"endpoint"}),{track:function(e){var t,n,a,r,i=e.eventType,o=e.args;switch(i){case s.a.EVENTS.AUCTION_INIT:d.context.events.auctionInit={timeout:o.timeout},d.context.auctionTimestamp=o.timestamp;break;case s.a.EVENTS.BID_REQUESTED:d.context.auctionId=o.auctionId,d.context.events.bidRequests.push({bidderCode:(r=o).bidderCode,time:r.start,bids:r.bids.map(function(e){return{transactionId:e.transactionId,adUnitCode:e.adUnitCode,bidId:e.bidId,start:e.startTime,sizes:c.parseSizesInput(e.sizes).toString(),params:e.params}})});break;case s.a.EVENTS.BID_ADJUSTMENT:break;case s.a.EVENTS.BID_TIMEOUT:d.context.events.bidTimeout=o.map(function(e){return e.bidder}).filter(c.uniques);break;case s.a.EVENTS.BIDDER_DONE:break;case s.a.EVENTS.BID_RESPONSE:d.context.events.bidResponses.push((a=i,{bidderCode:(n=o).bidder,transactionId:n.transactionId,adUnitCode:n.adUnitCode,statusMessage:n.statusMessage,mediaType:n.mediaType,renderedSize:n.size,cpm:n.cpm,currency:n.currency,netRevenue:n.netRevenue,timeToRespond:n.timeToRespond,bidId:a===s.a.EVENTS.BID_TIMEOUT?n.bidId:n.requestId,dealId:n.dealId,status:n.status,creativeId:n.creativeId.toString()}));break;case s.a.EVENTS.BID_WON:p({bidWons:[{bidderCode:(t=o).bidder,adUnitCode:t.adUnitCode,statusMessage:t.statusMessage,mediaType:t.mediaType,renderedSize:t.size,cpm:t.cpm,currency:t.currency,netRevenue:t.netRevenue,timeToRespond:t.timeToRespond,bidId:t.requestId,dealId:t.dealId,status:t.status,creativeId:t.creativeId.toString()}]});break;case s.a.EVENTS.AUCTION_END:p(d.context.events)}}});function p(e){var t,n=c.buildUrl({protocol:"https",hostname:d.context.host,pathname:"/pbrx/v2",search:{pid:d.context.initOptions.publisherId,aid:d.context.auctionId,ats:d.context.auctionTimestamp,aav:"v2.01",iob:(t=window)&&t.IntersectionObserver&&t.IntersectionObserverEntry&&t.IntersectionObserverEntry.prototype&&"intersectionRatio"in t.IntersectionObserverEntry.prototype?"1":"0",pbv:pbjs.version,sz:window.screen.width+"x"+window.screen.height}});Object(a.a)(n,void 0,JSON.stringify(e),{contentType:"text/plain",method:"POST",withCredentials:!0})}d.context={},d.originEnableAnalytics=d.enableAnalytics,d.enableAnalytics=function(e){e.options.publisherId?(d.context={events:{bidRequests:[],bidResponses:[]},initOptions:e.options,host:e.options.host||"hbarxs.adxcg.net"},d.originEnableAnalytics(e)):c.logError("PublisherId option is not defined. Analytics won't work")},i.default.registerAnalyticsAdapter({adapter:d,code:"adxcg"}),t.default=d},6:function(e,t,n){"use strict";t.a=function(e){var r,i=e.url,t=e.analyticsType,o=e.global,a=e.handler,s=[],c=0,n=!0;t!==R&&!q||function(){if(n){for(var e=0;e<s.length;e++)s[e]();s.push=function(e){e()},n=!1}T.logMessage("event count sent to ".concat(o,": ").concat(c))}();return{track:function(e){var t=e.eventType,n=e.args;this.getAdapterType()===q&&window[o](a,t,n);this.getAdapterType()===R&&function(e){var t=e.eventType,n=e.args,a=e.callback;Object(p.a)(i,a,JSON.stringify({eventType:t,args:n}))}.apply(void 0,arguments)},enqueue:u,enableAnalytics:d,disableAnalytics:function(){T._each(r,function(e,t){b.off(t,e)}),this.enableAnalytics=this._oldEnable?this._oldEnable:d},getAdapterType:function(){return t},getGlobal:function(){return o},getHandler:function(){return a},getUrl:function(){return i}};function u(e){var t=e.eventType,n=e.args,a=this;o&&window[o]&&t&&n?this.track({eventType:t,args:n}):s.push(function(){c++,a.track({eventType:t,args:n})})}function d(t){var e,n=this,a=this;"object"!==y(t)||"object"!==y(t.options)||(void 0===t.options.sampling||Math.random()<parseFloat(t.options.sampling))?(b.getEvents().forEach(function(e){var t,n;e&&(t=e.eventType,n=e.args,t!==E&&u.call(a,{eventType:t,args:n}))}),l(e={},g,function(e){return n.enqueue({eventType:g,args:e})}),l(e,I,function(e){return n.enqueue({eventType:I,args:e})}),l(e,h,function(e){return n.enqueue({eventType:h,args:e})}),l(e,m,function(e){return n.enqueue({eventType:m,args:e})}),l(e,E,function(e){return n.enqueue({eventType:E,args:e})}),l(e,S,function(e){return n.enqueue({eventType:S,args:e})}),l(e,N,function(e){return n.enqueue({eventType:N,args:e})}),l(e,D,function(e){return n.enqueue({eventType:D,args:e})}),l(e,O,function(e){return n.enqueue({eventType:O,args:e})}),l(e,v,function(e){return n.enqueue({eventType:v,args:e})}),l(e,_,function(e){return n.enqueue({eventType:_,args:e})}),l(e,A,function(e){return n.enqueue({eventType:A,args:e})}),l(e,U,function(e){return n.enqueue({eventType:U,args:e})}),l(e,f,function(e){e.config="object"===y(t)&&t.options||{},n.enqueue({eventType:f,args:e})}),r=e,T._each(r,function(e,t){b.on(t,e)})):T.logMessage('Analytics adapter for "'.concat(o,'" disabled by sampling')),this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return T.logMessage('Analytics adapter for "'.concat(o,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var a=n(5),r=n.n(a),p=n(4);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b=n(9),T=n(0),i=r.a.EVENTS,f=i.AUCTION_INIT,v=i.AUCTION_END,g=i.REQUEST_BIDS,I=i.BID_REQUESTED,E=i.BID_TIMEOUT,h=i.BID_RESPONSE,m=i.NO_BID,S=i.BID_WON,N=i.BID_ADJUSTMENT,D=i.BIDDER_DONE,O=i.SET_TARGETING,_=i.AD_RENDER_FAILED,A=i.AUCTION_DEBUG,U=i.ADD_AD_UNITS,R="endpoint",q="bundle"}},[262]);