pbjsChunk([290],{430:function(e,r,t){e.exports=t(431)},431:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return s});var i=t(2),a=t(1).registerBidder;function p(){var e=window.location.href;return function(){try{var r=window.self!==window.top}catch(e){r=!0}return r}()&&(e=document.referrer?document.referrer:e),e=encodeURIComponent(e)}var s={code:"engageya",supportedMediaTypes:[i.b,i.c],isBidRequestValid:function(e){return e&&e.params&&e.params.hasOwnProperty("widgetId")&&e.params.hasOwnProperty("websiteId")&&!isNaN(e.params.widgetId)&&!isNaN(e.params.websiteId)},buildRequests:function(e,n){var d=[];return e&&0<e.length&&e.forEach(function(e){var r,t,i,a,s;e.params&&(r=e.hasOwnProperty("nativeParams")?1:2,i=t=-1,e.sizes&&0<e.sizes.length?(t=e.sizes[0][0],i=e.sizes[0][1]):e.nativeParams&&e.nativeParams.image&&e.nativeParams.image.sizes&&(t=e.nativeParams.image.sizes[0],i=e.nativeParams.image.sizes[1]),a=e.params.widgetId,s="https://recs.engageya.com/rec-api/getrecs.json?pubid=0&webid="+e.params.websiteId+"&wid="+a+"&url="+((e.params.pageUrl&&"[PAGE_URL]"!=e.params.pageUrl?e.params.pageUrl:"")||(n&&n.refererInfo&&n.refererInfo.referer?n.refererInfo.referer:p()))+"&ireqid="+e.bidId+"&pbtpid="+r+"&imw="+t+"&imh="+i,n&&n.gdprConsent&&n.gdprApplies&&n.consentString&&(s+="&is_gdpr=1&gdpr_consent="+n.consentString),d.push({url:s,method:"GET",data:""}))}),d},interpretResponse:function(e){var a,s,n=[];return e.body&&e.body.recs&&0<e.body.recs.length&&(a=e.body,s=1==a.pbtypeId,a.recs.forEach(function(e){var r,t,i=-1==e.thumbnail_path.indexOf("http")?"https:"+e.thumbnail_path:e.thumbnail_path;s?n.push({requestId:a.ireqId,cpm:e.ecpm,width:a.imageWidth,height:a.imageHeight,creativeId:e.postId,currency:"USD",netRevenue:!1,ttl:360,native:{title:e.title,body:"",image:{url:i,width:a.imageWidth,height:a.imageHeight},privacyLink:"",clickUrl:e.clickUrl,displayUrl:e.url,cta:"",sponsoredBy:e.displayName,impressionTrackers:[]}}):(r='<html><div id="ENG_TAG"><a href="'+e.clickUrl+'" target=_blank><img src="'+i+'" style="width:'+a.imageWidth+"px;height:"+a.imageHeight+'px;"/></a></div></html>',t=e.tag?e.tag:r,n.push({requestId:a.ireqId,cpm:e.ecpm,width:a.imageWidth,height:a.imageHeight,creativeId:e.postId,currency:"USD",netRevenue:!1,ttl:360,ad:t}))})),n}};a(s)}},[430]);