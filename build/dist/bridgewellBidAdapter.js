pbjsChunk([335],{324:function(e,r,i){e.exports=i(325)},325:function(e,r,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),i.d(r,"spec",function(){return s});var t=i(0),n=i(1),h=i(2),a=i(10),y=i.n(a),d="https://prebid.scupio.com/recweb/prebid.aspx?cb="+Math.random(),s={code:"bridgewell",supportedMediaTypes:[h.b,h.c],isBidRequestValid:function(e){var r=!1;return e&&e.params&&(e.params.cid&&"number"==typeof e.params.cid||e.params.ChannelID)&&(r=!0),r},buildRequests:function(e,r){var i=[];t._each(e,function(e){e.params.cid?i.push({cid:e.params.cid,adUnitCode:e.adUnitCode,requestId:e.bidId,mediaTypes:e.mediaTypes||{banner:{sizes:e.sizes}}}):i.push({ChannelID:e.params.ChannelID,adUnitCode:e.adUnitCode,requestId:e.bidId,mediaTypes:e.mediaTypes||{banner:{sizes:e.sizes}}})});var n="";return r&&r.refererInfo&&(n=r.refererInfo.referer),{method:"POST",url:d,data:{version:{prebid:"4.35.0-pre",bridgewell:"0.0.3"},inIframe:t.inIframe(),url:n,referrer:function(){try{return window.top.document.referrer}catch(e){return""}}(),adUnits:i,refererInfo:r.refererInfo},validBidRequests:e}},interpretResponse:function(p,e){var m=[];return t._each(e.validBidRequests,function(s){var e={};if(p.body){var r=y()(p.body,function(e){var r=!1;if(e&&!e.consumed){var i,n,t,a=s.mediaTypes,d=s.adUnitCode;if(e.adUnitCode)return e.adUnitCode===d;e.width&&e.height&&a&&(a.native?r=!0:a.banner&&a.banner.sizes&&(i=e.width,n=e.height,r="number"==typeof(t=a.banner.sizes)[0]?i===t[0]&&n===t[1]:!!y()(t,function(e){return i===e[0]&&n===e[1]})))}return r});if(r){if(r.consumed=!0,"number"!=typeof r.cpm)return;if("boolean"!=typeof r.netRevenue)return;if("string"!=typeof r.currency)return;if("string"!=typeof r.mediaType)return;switch(e.requestId=s.bidId,e.cpm=r.cpm,e.width=r.width,e.height=r.height,e.ttl=r.ttl,e.creativeId=r.id,e.netRevenue=r.netRevenue,e.currency=r.currency,e.mediaType=r.mediaType,r.mediaType){case h.b:if("string"!=typeof r.ad)return;e.ad=r.ad;break;case h.c:if(!r.native)return;var i=s.mediaTypes.native,n=r.native,t=i.title;if(t&&t.required){if("string"!=typeof n.title)return;if(t.len&&t.len<n.title.length)return}var a=i.body;if(a&&a.required&&"string"!=typeof n.body)return;var d=i.image;if(d&&d.required){if(!n.image)return;if("string"!=typeof n.image.url)return;if(n.image.width!==d.sizes[0]||n.image.height!==d.sizes[1])return}var u=i.sponsoredBy;if(u&&u.required&&"string"!=typeof n.sponsoredBy)return;var f=i.icon;if(f&&f.required){if(!n.icon)return;if("string"!=typeof n.icon.url)return;if(n.icon.width!==f.sizes[0]||n.icon.height!==f.sizes[0])return}if("string"!=typeof n.clickUrl)return;var o=n.clickTrackers;if(!o)return;if(0===o.length)return;var c=n.impressionTrackers;if(!c)return;if(0===c.length)return;e.native=r.native;break;default:return}m.push(e)}}}),m}};Object(n.registerBidder)(s)}},[324]);