pbjsChunk([347],{298:function(e,r,n){e.exports=n(299)},299:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"spec",function(){return s});var t=n(1),a=n(0),i=n(2),o=n(4),s={code:"automatad",aliases:["atd"],supportedMediaTypes:[i.b],isBidRequestValid:function(e){return e&&e.hasOwnProperty("params")&&e.params.hasOwnProperty("siteId")&&e.params.hasOwnProperty("placementId")&&e.hasOwnProperty("mediaTypes")&&e.mediaTypes.hasOwnProperty("banner")},buildRequests:function(e,r){if(e&&r){var n=e[0].params.siteId,t=e.map(function(e){return{id:e.bidId,adUnitCode:e.adUnitCode,placement:e.params.placementId,banner:{format:e.sizes.map(function(e){return{w:e[0],h:e[1]}})}}}),a={id:e[0].auctionId,imp:t,site:{id:n,domain:window.location.hostname,page:window.location.href,ref:r.refererInfo&&r.refererInfo.referer||null}};return{method:"POST",url:"https://rtb2.automatad.com/ortb2/resp",data:JSON.stringify(a),options:{contentType:"application/json",withCredentials:!1,crossOrigin:!0}}}},interpretResponse:function(e){var r=[],n=(e||{}).body;return n&&n.seatbid&&n.seatbid[0].bid&&n.seatbid[0].bid.length?n.seatbid.forEach(function(e){e.bid.forEach(function(e){r.push({requestId:e.impid,cpm:e.price,ad:e.adm,meta:{advertiserDomains:e.adomain},currency:"USD",ttl:30,creativeId:e.crid,width:e.w,height:e.h,netRevenue:!0,nurl:e.nurl})})}):a.logInfo("automatad :: no valid responses to interpret"),r},getUserSyncs:function(){return[{type:"iframe",url:"https://rtb2.automatad.com/ortb2/async_usersync"}]},onBidWon:function(e){if(e.nurl){var r=e.hasOwnProperty("originalCpm")?e.originalCpm:e.cpm,n=e.hasOwnProperty("originalCurrency")&&e.hasOwnProperty("originalCpm")?e.originalCurrency:e.currency,t=e.nurl.replace(/\$\{AUCTION_PRICE\}/,r).replace(/\$\{AUCTION_IMP_ID\}/,e.requestId).replace(/\$\{AUCTION_CURRENCY\}/,n).replace(/\$\{AUCTION_ID\}/,e.auctionId);return s.ajaxCall(t,null),!0}},ajaxCall:function(e,r){Object(o.a)(e,r)}};Object(t.registerBidder)(s)}},[298]);