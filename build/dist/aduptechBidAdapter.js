pbjsChunk([364],{254:function(e,r,t){e.exports=t(255)},255:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"BIDDER_CODE",function(){return o}),t.d(r,"PUBLISHER_PLACEHOLDER",function(){return c}),t.d(r,"ENDPOINT_URL",function(){return u}),t.d(r,"ENDPOINT_METHOD",function(){return s}),t.d(r,"spec",function(){return a}),r.extractSizesFromBidRequest=p,r.extractParamsFromBidRequest=f,r.extractGdprFromBidderRequest=b,r.extractTopWindowUrlFromBidRequest=l,r.extractTopWindowReferrerFromBidRequest=h;var n=t(1),d=t(2),i=t(0),o="aduptech",c="{PUBLISHER}",u="https://rtb.d.adup-tech.com/prebid/"+c+"_bid",s="POST",a={code:o,supportedMediaTypes:[d.b],isBidRequestValid:function(e){if(!e)return!1;var r=p(e);if(!r||0===r.length)return!1;var t=f(e);return!!(t&&t.publisher&&t.placement)},buildRequests:function(e,r){var t=[],n=b(r);return e.forEach(function(e){t.push({url:u.replace(c,encodeURIComponent(e.params.publisher)),method:s,data:{bidId:e.bidId,auctionId:e.auctionId,transactionId:e.transactionId,adUnitCode:e.adUnitCode,pageUrl:l(e),referrer:h(e),sizes:p(e),params:f(e),gdpr:n}})}),t},interpretResponse:function(e){var r=[];return e.body&&e.body.bid&&e.body.creative&&r.push({requestId:e.body.bid.bidId,cpm:e.body.bid.price,netRevenue:e.body.bid.net,currency:e.body.bid.currency,ttl:e.body.bid.ttl,creativeId:e.body.creative.id,width:e.body.creative.width,height:e.body.creative.height,ad:e.body.creative.html}),r}};function p(e){return e&&i.deepAccess(e,"mediaTypes.banner.sizes")?e.mediaTypes.banner.sizes:e&&e.sizes?e.sizes:[]}function f(e){return e&&e.params?e.params:null}function b(e){var r=null;return e&&e.gdprConsent&&(r={consentString:e.gdprConsent.consentString,consentRequired:"boolean"!=typeof e.gdprConsent.gdprApplies||e.gdprConsent.gdprApplies}),r}function l(e){if(e&&i.deepAccess(e,"refererInfo.canonicalUrl"))return e.refererInfo.canonicalUrl;try{return window.top.location.href}catch(e){return window.location.href}}function h(e){if(e&&i.deepAccess(e,"refererInfo.referer"))return e.refererInfo.referer;try{return window.top.document.referrer}catch(e){return window.document.referrer}}Object(n.registerBidder)(a)}},[254]);