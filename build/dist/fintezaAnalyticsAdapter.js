pbjsChunk([44],{448:function(e,t,n){e.exports=n(449)},449:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=n(6),a=n(8),i=n(0),c=n(7);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=Object(c.b)(),s=n(5),d="https://content.mql5.com/tr",f="_fz_fvdt",p="_fz_ssn",T=18e5,g=9,v="_fz_tr",y="_fz_uniq";function b(e){var t,n,r,o,a,i,c,u={};if(!e||!l.cookiesAreEnabled())return{};for(a=0,i=(t=e.split(";")).length;a<i;a++)(n=t[a])&&((r=n.split("=")).length<=1||(o=decodeURIComponent(r[0]),u[(c=o).trim?c.trim():c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")]=decodeURIComponent(r[1])));return u}function m(){var t,e,n,r,o,a=new Date,i=new Date(a.getTime()+T),c=Math.floor(a.getTime()/1e3),u=0,s=!1;try{t=b(document.cookie)}catch(e){t={}}(e=t[p])&&function(){var e=h();if((new Date).getTime()>e+T)return!1;return!0}()&&(r=S.context.pageInfo.referrerDomain,o=S.context.pageInfo.domain,""===r||o===r)&&function(){var e=h();if(e){e=new Date(e);var t=new Date;return e.getUTCDate()===t.getUTCDate()&&e.getUTCMonth()===t.getUTCMonth()&&e.getUTCFullYear()===t.getUTCFullYear()}return!1}()?u=function(e){if(!e||"string"!=typeof e)return 0;var t=e.length;if(t&&t<=g)return 0;var n=e.substring(0,t-g);return parseInt(n,10)}(e):(e=""+c+function(e){var t,n="";for(e=e||4,t=0;t<e;t++)n+=""+(10*Math.random()>>>0);return n}(g),u=c,s=!0),n=0<u?Math.floor(c-u):-1;try{l.setCookie(p,e,i.toUTCString())}catch(e){}return{isNew:s,id:e,duration:n}}function h(){var e;try{if(l.hasLocalStorage())return parseInt(l.getDataFromLocalStorage(v)||0,10);if(e=b(document.cookie)[v])return parseInt(e,10)}catch(e){}return 0}function E(e,t){var n=e;return n=(n=(n=n.replace(/\%bidder\%/,t.toLowerCase())).replace(/\%BIDDER\%/,t.toUpperCase())).replace(/\%Bidder\%/,t.charAt(0).toUpperCase()+t.slice(1).toLowerCase())}function D(e){return[{event:encodeURIComponent(E(S.context.bidRequestTrack,e.bidderCode)),ref:encodeURIComponent(window.location.href)}]}function I(e){return[{event:encodeURIComponent(E(S.context.bidResponsePriceTrack,e.bidderCode)),value:e.cpm,unit:"usd"},{event:encodeURIComponent(E(S.context.bidResponseTimeTrack,e.bidderCode)),value:e.timeToRespond,unit:"ms"}]}function _(e){return[{event:encodeURIComponent(E(S.context.bidWonTrack,e.bidderCode)),value:e.cpm,unit:"usd"}]}function R(e){return e.map(function(e){return{event:encodeURIComponent(E(S.context.bidTimeoutTrack,e.bidder)),value:e.timeout,unit:"ms"}})}function w(e,t){var n=null;switch(e){case s.EVENTS.BID_REQUESTED:n=D;break;case s.EVENTS.BID_RESPONSE:n=I;break;case s.EVENTS.BID_WON:n=_;break;case s.EVENTS.BID_TIMEOUT:n=R}if(!n)return null;var r=n(t);if(!r)return null;var o=m();return r.map(function(e){var t,n,r=u(e,{id:S.context.id,ref:encodeURIComponent(window.location.href),title:encodeURIComponent(document.title),scr_res:S.context.screenResolution,fv_date:S.context.firstVisit,ac:(t=new Date,n=99999*Math.random()+1>>>0,[t.getTime(),n].join(""))});return S.context.uniqId&&(r.fz_uniq=S.context.uniqId),o.id&&(r.ssn=o.id),o.isNew&&(o.isNew=!1,r.ssn_start=1),r.ssn_dr=o.duration,r})}function C(e){try{Object(r.a)(S.context.host,null,e,{method:"GET",withCredentials:!0,contentType:"application/x-www-form-urlencoded"}),function(){var e=(new Date).getTime(),t=new Date(e+T);try{l.hasLocalStorage()?l.setDataInLocalStorage(v,e.toString()):l.setCookie(v,e.toString(),t.toUTCString())}catch(e){}}()}catch(e){i.logError("Error on send data: ",e)}}var S=u(Object(o.a)({FINTEZA_HOST:d,ANALYTICS_TYPE:"endpoint"}),{track:function(e){var t=e.eventType,n=e.args;if(void 0!==n){var r=w(t,n);if(!r)return;r.forEach(C)}}});S.originEnableAnalytics=S.enableAnalytics,S.enableAnalytics=function(e){var t;e.options.id?(S.context={host:e.options.host||d,id:e.options.id,bidRequestTrack:e.options.bidRequestTrack||"Bid Request %BIDDER%",bidResponsePriceTrack:e.options.bidResponsePriceTrack||"Bid Response Price %BIDDER%",bidResponseTimeTrack:e.options.bidResponseTimeTrack||"Bid Response Time %BIDDER%",bidTimeoutTrack:e.options.bidTimeoutTrack||"Bid Timeout %BIDDER%",bidWonTrack:e.options.bidWonTrack||"Bid Won %BIDDER%",firstVisit:function(){var e,t,n;try{n=b(document.cookie)}catch(e){n={}}if(!(t=n[f])){e=new Date,t=parseInt(e.getTime()/1e3,10),e.setFullYear(e.getFullYear()+20);try{l.setCookie(f,t,e.toUTCString())}catch(e){}}return t}(),screenResolution:"".concat(window.screen.width,"x").concat(window.screen.height),uniqId:function(){var t,e;try{t=b(document.cookie)}catch(e){t={}}var n=t[y];if(!n)try{l.hasLocalStorage()&&(n=l.getDataFromLocalStorage(y)||"",e=!0)}catch(e){}if(n&&isNaN(n)&&(n=null),n&&e){var r=new Date;r.setFullYear(r.getFullYear()+10);try{l.setCookie(y,n,r.toUTCString())}catch(e){}}return n}(),pageInfo:(t={domain:window.location.hostname},document.referrer&&(t.referrerDomain=i.parseUrl(document.referrer).hostname),t)},S.originEnableAnalytics(e)):i.logError("Client ID (id) option is not defined. Analytics won't work")},a.default.registerAnalyticsAdapter({adapter:S,code:"finteza"}),t.default=S},6:function(e,t,n){"use strict";t.a=function(e){var o,a=e.url,t=e.analyticsType,i=e.global,r=e.handler,c=[],u=0,n=!0;t!==k&&!A||function(){if(n){for(var e=0;e<c.length;e++)c[e]();c.push=function(e){e()},n=!1}g.logMessage("event count sent to ".concat(i,": ").concat(u))}();return{track:function(e){var t=e.eventType,n=e.args;this.getAdapterType()===A&&window[i](r,t,n);this.getAdapterType()===k&&function(e){var t=e.eventType,n=e.args,r=e.callback;Object(d.a)(a,r,JSON.stringify({eventType:t,args:n}))}.apply(void 0,arguments)},enqueue:s,enableAnalytics:l,disableAnalytics:function(){g._each(o,function(e,t){T.off(t,e)}),this.enableAnalytics=this._oldEnable?this._oldEnable:l},getAdapterType:function(){return t},getGlobal:function(){return i},getHandler:function(){return r},getUrl:function(){return a}};function s(e){var t=e.eventType,n=e.args,r=this;i&&window[i]&&t&&n?this.track({eventType:t,args:n}):c.push(function(){u++,r.track({eventType:t,args:n})})}function l(t){var e,n=this,r=this;"object"!==p(t)||"object"!==p(t.options)||(void 0===t.options.sampling||Math.random()<parseFloat(t.options.sampling))?(T.getEvents().forEach(function(e){var t,n;e&&(t=e.eventType,n=e.args,t!==h&&s.call(r,{eventType:t,args:n}))}),f(e={},b,function(e){return n.enqueue({eventType:b,args:e})}),f(e,m,function(e){return n.enqueue({eventType:m,args:e})}),f(e,E,function(e){return n.enqueue({eventType:E,args:e})}),f(e,D,function(e){return n.enqueue({eventType:D,args:e})}),f(e,h,function(e){return n.enqueue({eventType:h,args:e})}),f(e,I,function(e){return n.enqueue({eventType:I,args:e})}),f(e,_,function(e){return n.enqueue({eventType:_,args:e})}),f(e,R,function(e){return n.enqueue({eventType:R,args:e})}),f(e,w,function(e){return n.enqueue({eventType:w,args:e})}),f(e,y,function(e){return n.enqueue({eventType:y,args:e})}),f(e,C,function(e){return n.enqueue({eventType:C,args:e})}),f(e,S,function(e){return n.enqueue({eventType:S,args:e})}),f(e,U,function(e){return n.enqueue({eventType:U,args:e})}),f(e,v,function(e){e.config="object"===p(t)&&t.options||{},n.enqueue({eventType:v,args:e})}),o=e,g._each(o,function(e,t){T.on(t,e)})):g.logMessage('Analytics adapter for "'.concat(i,'" disabled by sampling')),this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return g.logMessage('Analytics adapter for "'.concat(i,'" already enabled, unnecessary call to `enableAnalytics`.'))}}};var r=n(5),o=n.n(r),d=n(4);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var T=n(9),g=n(0),a=o.a.EVENTS,v=a.AUCTION_INIT,y=a.AUCTION_END,b=a.REQUEST_BIDS,m=a.BID_REQUESTED,h=a.BID_TIMEOUT,E=a.BID_RESPONSE,D=a.NO_BID,I=a.BID_WON,_=a.BID_ADJUSTMENT,R=a.BIDDER_DONE,w=a.SET_TARGETING,C=a.AD_RENDER_FAILED,S=a.AUCTION_DEBUG,U=a.ADD_AD_UNITS,k="endpoint",A="bundle"}},[448]);