pbjsChunk([237],{553:function(r,e,t){r.exports=t(554)},554:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t.d(e,"spec",function(){return o});var i=t(0),n=t(1);function s(r){return function(r){if(Array.isArray(r))return a(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||function(r,e){if(!r)return;if("string"==typeof r)return a(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(r,e)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var o={code:"komoona",isBidRequestValid:function(r){return!!(r&&r.params&&r.params.placementId&&r.params.hbid)},buildRequests:function(r){var e,t=r.map(function(r){var e={uuid:r.bidId,sizes:r.sizes,trid:r.transactionId,hbid:r.params.hbid,placementid:r.params.placementId};return r.params.floorPrice&&(e.floorprice=r.params.floorPrice),e}),n=(new Date).getTime(),a={ts_as:n,hb_placements:[],hb_placement_bidids:{},hb_floors:{},cb:(e=n,Math.floor(e%65536+65536*Math.floor(65536*Math.random()))),tz:(new Date).getTimezoneOffset()};r.forEach(function(r){a.hdbdid=a.hdbdid||r.params.hbid,a.encode_bid=a.encode_bid||r.params.encode_bid,a.hb_placement_bidids[r.params.placementId]=r.bidId,r.params.floorPrice&&(a.hb_floors[r.params.placementId]=r.params.floorPrice),a.hb_placements.push(r.params.placementId)});var o={};return i.isEmpty(t)||(o={bids:s(t),kbConf:a}),{method:"POST",url:"https://bidder.komoona.com/v1/GetSBids",data:JSON.stringify(o)}},interpretResponse:function(r){var e=[];try{r.body&&r.body.bids&&r.body.bids.forEach(function(r){r.requestId=r.uuid,r.ad=r.creative,e.push(r)})}catch(r){i.logError(r)}return e},getUserSyncs:function(r){if(r.iframeEnabled)return[{type:"iframe",url:"https://s.komoona.com/sync/usync.html"}]}};Object(n.registerBidder)(o)}},[553]);