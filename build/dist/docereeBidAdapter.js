pbjsChunk([297],{416:function(e,r,t){e.exports=t(417)},417:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return u});var a=t(0),n=t(1),d=t(3),i=t(2),u={code:"doceree",url:"",supportedMediaTypes:[i.b],isBidRequestValid:function(e){return!!e.params.placementId},buildRequests:function(e){var u=[],r=d.b.getConfig("doceree.user").data,t=d.b.getConfig("doceree.context"),p=t.page,o=t.domain,s=t.token,c=window.btoa(encodeURIComponent(JSON.stringify(r)));return e.forEach(function(e){var r=e.params,t=r.publisherUrl,n=r.placementId,d=t||p,i=a.tryAppendQueryString("","id",n);i=a.tryAppendQueryString(i,"publisherDomain",o),i=a.tryAppendQueryString(i,"pubRequestedURL",encodeURIComponent(d)),i=a.tryAppendQueryString(i,"loggedInUser",c),i=a.tryAppendQueryString(i,"currentUrl",d),i=a.tryAppendQueryString(i,"prebidjs",!0),i=a.tryAppendQueryString(i,"token",s),i=a.tryAppendQueryString(i,"requestId",e.bidId),u.push({method:"GET",url:"https://bidder.doceree.com/v1/adrequest?"+i})}),u},interpretResponse:function(e){var r=e?e.body:{},t=r.DIVID;return[{ad:r.sourceHTML,width:Number(r.width),height:Number(r.height),requestId:r.guid,netRevenue:!0,ttl:30,cpm:r.cpmBid,currency:r.currency,mediaType:"banner",creativeId:t,meta:{advertiserDomains:[r.advertiserDomain]}}]}};Object(n.registerBidder)(u)}},[416]);