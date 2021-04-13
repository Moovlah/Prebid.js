pbjsChunk([359],{268:function(e,t,n){e.exports=n(269)},269:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",function(){return a});var o=n(0),r=n(1),s=n(3),i=n(10),c=n.n(i),d=n(2);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l="USD",m={image:{required:!0},title:{required:!0},sponsoredBy:{required:!0},clickUrl:{required:!0},body:{required:!1},icon:{required:!1},cta:{required:!1}},a={code:"adyoulike",supportedMediaTypes:[d.b,d.c,d.d],aliases:["ayl"],isBidRequestValid:function(e){var t=h(f(e)),n=0<t.width&&0<t.height;return e.params&&e.params.placement&&(n||e.mediaTypes&&e.mediaTypes.native)},buildRequests:function(e,t){var n={Version:"1.0",Bids:e.reduce(function(e,t){var n,r=function(e){var t=d.b;o.deepAccess(e,"mediaTypes.native")?t=d.c:o.deepAccess(e,"mediaTypes.video")&&(t=d.d);return t}(t),i=f(t),a=h(i);return e[t.bidId]={},e[t.bidId].PlacementID=t.params.placement,e[t.bidId].TransactionID=t.transactionId,e[t.bidId].Width=a.width,e[t.bidId].Height=a.height,e[t.bidId].AvailableSizes=i.join(","),"function"==typeof t.getFloor&&(e[t.bidId].Pricing=function(e,t,n){var r=e.getFloor({currency:l,mediaType:n,size:[t.width,t.height]});if(!isNaN(r.floor)&&r.currency===l)return r.floor}(t,a,r)),r===d.c&&("image"===(n=t.mediaTypes.native).type&&(n=u({},m,n)),e[t.bidId].Native=n),r===d.d&&(e[t.bidId].Video=t.mediaTypes.video),e},{}),PageRefreshed:function(){try{if(performance&&performance.navigation)return performance.navigation.type===performance.navigation.TYPE_RELOAD}catch(e){}return!1}()};t&&t.gdprConsent&&(n.gdprConsent={consentString:t.gdprConsent.consentString,consentRequired:"boolean"==typeof t.gdprConsent.gdprApplies?t.gdprConsent.gdprApplies:null}),t&&t.uspConsent&&(n.uspConsent=t.uspConsent);var r,i,a=JSON.stringify(n);return{method:"POST",url:(r=t,i=function(e){var t=c()(e,function(e){return e.params.DC});if(t)return"-"+t.params.DC;return""}(e),o.buildUrl({protocol:"https",host:"".concat("hb-api").concat(i,".omnitagjs.com"),pathname:"/hb-api/prebid/v1",search:function(e){var t,n={};!e||(t=e.refererInfo)&&(n.RefererUrl=encodeURIComponent(t.referer),0<t.numIframes&&(n.SafeFrame=!0));var r=function(){var e;if(window.self!==window.top)try{e=window.top.document.head.querySelector('link[rel="canonical"][href]')}catch(e){}else e=document.head.querySelector('link[rel="canonical"][href]');return e?e.href:""}();r&&(n.CanonicalUrl=encodeURIComponent(r));var i=s.b.getConfig("publisherDomain");return i&&(n.PublisherDomain=encodeURIComponent(i)),n}(r)})),data:a,options:{withCredentials:!0}}},interpretResponse:function(e,t){var n=[],r={};try{r=JSON.parse(t.data).Bids}catch(e){}return e.body.forEach(function(e){var t=function(e,t){if(!e||!e.Ad&&!e.Native)return;var n=t&&t[e.BidID];n&&(e.Width&&"0"!==e.Width||(e.Width=n.Width),e.Height&&"0"!==e.Height||(e.Height=n.Height));var r={requestId:e.BidID,ttl:3600,creativeId:e.CreativeID,cpm:e.Price,netRevenue:!0,currency:l};{var i;n&&n.Native?(r.native=function(i,a){var o={},s={},c={};{var e,t;"string"==typeof i.Ad&&(s=JSON.parse(i.Ad.match(/\/\*PREBID\*\/(.*)\/\*PREBID\*\//)[1]),c=s.Content.Preview.Text,e=s.TrackingPrefix+"/pixel?event_kind=IMPRESSION&attempt="+s.Attempt,t=s.TrackingPrefix+"/pixel?event_kind=INSERTION&attempt="+s.Attempt,s.Campaign&&(e+="&campaign="+s.Campaign,t+="&campaign="+s.Campaign),o.clickUrl=s.TrackingPrefix+"/ar?event_kind=CLICK&attempt="+s.Attempt+"&campaign="+s.Campaign+"&url="+encodeURIComponent(s.Content.Landing.Url),s.OnEvents?(o.clickTrackers=y(s.OnEvents.CLICK),o.impressionTrackers=y(s.OnEvents.IMPRESSION),o.javascriptTrackers=y(s.OnEvents.IMPRESSION,!0)):o.impressionTrackers=[],o.impressionTrackers.push(e,t))}return Object.keys(a).map(function(e,t){if("object"===p(i.Native))o[e]=i.Native[e];else switch(e){case"title":o[e]=c.TITLE;break;case"body":o[e]=c.DESCRIPTION;break;case"cta":o[e]=c.CALLTOACTION;break;case"sponsoredBy":o[e]=s.Content.Preview.Sponsor.Name;break;case"image":var n=a.image.sizes||[];n.length||(n[0]=i.Width||300,n[1]=i.Height||250),o[e]={url:g(s,s.Content.Preview.Thumbnail.Image,n[0],n[1]),width:n[0],height:n[1]};break;case"icon":var r;s.HasSponsorImage&&((r=a.icon.sizes||[]).length||(r[0]=50,r[1]=50),o[e]={url:g(s,s.Content.Preview.Sponsor.Logo.Resource,r[0],r[1]),width:r[0],height:r[1]});break;case"privacyIcon":o[e]=g(s,s.Content.Preview.Credit.Logo.Resource,25,25);break;case"privacyLink":o[e]=s.Content.Preview.Credit.Url}}),o}(e,n.Native),r.mediaType="native"):n&&n.Video?(i=e.Vast||function(e){var t={};if("string"==typeof e.Ad)return t=JSON.parse(e.Ad.match(/\/\*PREBID\*\/(.*)\/\*PREBID\*\//)[1]),o.deepAccess(t,"Content.MainVideo.Vast")}(e),r.vastXml=i?window.atob(i):"",r.mediaType="video"):(r.width=e.Width,r.height=e.Height,r.ad=e.Ad)}return r}(e,r);t&&n.push(t)}),n}};function f(e){var t=e.sizes||[];return e.mediaTypes&&e.mediaTypes.banner&&(t=e.mediaTypes.banner.sizes||[]),o.parseSizesInput(t)}function h(e){var t={},n=e[0];if("string"!=typeof n)return t;var r=n.toUpperCase().split("X"),i=parseInt(r[0],10);i&&(t.width=i);var a=parseInt(r[1],10);return a&&(t.height=a),t}function v(e){return e?"https://blobs.omnitagjs.com/blobs/"+e.substr(16,2)+"/"+e.substr(16)+"/"+e:""}function g(e,t,n,r){var i="";switch(t.Kind){case"INTERNAL":i=v(t.Data.Internal.BlobReference.Uid);break;case"EXTERNAL":var a,o=e.DynamicPrefix,s=t.Data.External.Url;i=0<=(s=(s=s.replace(/\[height\]/i,""+r)).replace(/\[width\]/i,""+n)).indexOf(o)?(i=(a=/.*url=([^&]*)/gm.exec(s))?a[1]:"")||v(/.*key=([^&]*)/gm.exec(s)[1]):s}return i}function y(e,n){var r=[];return e&&e.map(function(e,t){(n&&"JAVASCRIPT_URL"===e.Kind||!n&&"PIXEL_URL"===e.Kind)&&r.push(e.Url)}),r}Object(r.registerBidder)(a)}},[268]);