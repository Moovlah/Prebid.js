pbjsChunk([329],{336:function(e,t,r){e.exports=r(337)},337:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return i});var o=r(0),n=r(1),s=r(2),d=r(12),u=r(25);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i={code:"buzzoola",aliases:["buzzoolaAdapter"],supportedMediaTypes:[s.b,s.d],isBidRequestValid:function(e){var t=e.mediaTypes;return!!(e&&e.mediaTypes&&(t.banner||t.video)&&e.params&&e.params.placementId)},buildRequests:function(e,t){return{url:"https://exchange.buzzoola.com/ssp/prebidjs",method:"POST",data:t}},interpretResponse:function(e,t){var r,n=e.body,a=t.data,i={};try{r=JSON.parse(n)}catch(e){r=n}return Array.isArray(r)||(r=[]),a.bids.forEach(function(e){return i[e.bidId]=e}),r.map(function(e){var t,r=i[e.requestId],n=o.deepAccess(r,"mediaTypes.video.context"),a=o.deepClone(e);return a.mediaType===s.d&&n===u.b&&((t=d.a.install({id:a.requestId,url:"https://tube.buzzoola.com/new/build/buzzlibrary.js",loaded:!1})).setRender(c),a.renderer=t),a})}};function c(e){var t=JSON.parse(e.ad),r=o.deepAccess(t,"placement.unit_settings"),n={width:""+e.width,height:""+e.height,container_height:""+e.height};t.placement=a({},t.placement),t.placement.unit_settings=a({},r,n),e.renderer.push(function(){window.Buzzoola.Core.install(document.querySelector("#".concat(e.adUnitCode)),{data:t})})}Object(n.registerBidder)(i)}},[336]);