pbjsChunk([118],{858:function(e,t,i){e.exports=i(859)},859:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"spec",function(){return m});var f=i(0),r=i(4),n=i(1),a=i(2),d=i(71),c=i.n(d);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}function s(e){if(e){var t=f.isArray(e)?e:[e];if(0<t.length){var r={requestId:void 0,siteId:[],adUnit:[],slotId:[]};return t.forEach(function(e){var t,i=(i=f.isArray(e.params)?e.params[0]:e.params)||{};u[e.requestId]&&(i.siteId=u[e.requestId][0],i.id=u[e.requestId][1]),i.siteId&&r.siteId.push(i.siteId),i.id&&r.slotId.push(i.id),e.cpm&&(t=e.meta||{},r.cpm=e.cpm,r.creativeId=e.creativeId,r.adomain=t.advertiserDomains&&t.advertiserDomains[0],r.networkName=t.networkName),r.adUnit.push(e.adUnitCode),r.requestId=e.auctionId||r.requestId,r.timeout=e.timeout||r.timeout}),r}}}var b,p="sspBC",g=window,v=g.navigator,u={};function h(e,t){for(var i,r=0;r<e.length;r++)if(i=f.deepAccess(e[r],t))return i}function o(e){Object(r.a)("https://ssp.wp.pl/bidder/notify",null,JSON.stringify(e),{withCredentials:!1,method:"POST",crossOrigin:!0})}function w(e){var t={id:e.params&&e.params.id?e.params.id:"bidid-"+e.bidId,banner:function(e){if("banner"===e.mediaType||f.deepAccess(e,"mediaTypes.banner")||!e.mediaType&&!e.mediaTypes)return{format:e.sizes.map(function(e){return{w:e[0],h:e[1]}}),id:e.bidId}}(e),tagid:e.adUnitCode},i=e.params&&e.params.bidFloor?parseFloat(e.params.bidFloor):void 0;return i&&(t.bidfloor=i),t}var m={code:p,aliases:[],supportedMediaTypes:[a.b],isBidRequestValid:function(){return!0},buildRequests:function(e,t){if(!e||e.length<1)return!1;var i,r=h(e,"params.siteId"),n=h(e,"params.page")||t.refererInfo.referer,a=h(e,"params.domain")||f.parseUrl(n).hostname,d=h(e,"params.tmax")?parseInt(h(e,"params.tmax"),10):450,s=h(e,"params.test")?1:void 0;try{g.self===g.top&&document.referrer&&(i=document.referrer)}catch(e){}var o,c,p,u,m={id:t.auctionId,site:{id:r,page:n,domain:a,ref:i},imp:e.map(w),tmax:d,user:{},regs:{},test:s};return c=m,(o=t)&&o.gdprConsent&&(b=o.gdprConsent.apiVersion,c.regs=l(c.regs,{"[ortb_extensions.gdpr]":o.gdprConsent.gdprApplies?1:0}),c.user=l(c.user,{"[ortb_extensions.consent]":o.gdprConsent.consentString})),function(e){var t=v.connection||!1,i=g.visualViewport||!1,r=[],n={"CH-Ect":t.effectiveType,"CH-Rtt":t.rtt,"CH-SaveData":t.saveData,"CH-Downlink":t.downlink,"CH-DeviceMemory":v.deviceMemory,"CH-Dpr":g.devicePixelRatio,"CH-ViewportWidth":i.width};Object.keys(n).forEach(function(e){var t=n[e];t&&r.push({name:e,value:t.toString()})});var a=[{id:"12",name:"NetInfo",segment:r}];e.user=l(e.user,{data:a})}(m),{method:"POST",url:"https://ssp.wp.pl/bidder/?cs="+(p=/^((?!chrome|android|crios|fxios).)*safari/i.test(v.userAgent),u=v.cookieEnabled||!!document.cookie.length,!p&&u)+"&bdver=4.7&pbver=4.35.0-pre&inver=0",data:JSON.stringify(m),bidderRequest:t}},interpretResponse:function(e,n){var a,d=e.body,s=[],o=JSON.parse(n.data).site;return o.sn=d.sn||"mc_adapter",void 0!==d.seatbid&&d.seatbid.forEach(function(e){a=e.seat,e.bid.forEach(function(t){var e,i,r=n.bidderRequest.bids.filter(function(e){return(e.params?e.params.id:"bidid-"+e.bidId)===t.impid})[0];o.slot=r&&r.params?r.params.slotid:void 0,t.ext&&(o.id=t.ext.siteid||o.id,o.slot=t.ext.slotid||o.slot),r&&o.id&&!c()(o.id,"bidid")?(u[r.bidId]=[o.id,o.slot],e=r.params&&r.params.bidFloor?r.params.bidFloor:0,0<(i={requestId:r.bidId,creativeId:t.crid||"mcad_"+n.bidderRequest.auctionId+"_"+n.bidderRequest.params.id,cpm:t.price,currency:d.cur,ttl:t.exp||300,width:t.w,height:t.h,bidderCode:p,mediaType:"banner",meta:{advertiserDomains:t.adomain,networkName:a},netRevenue:!0,ad:function(e,t,i,r,n){var a,d={id:t,seat:r,seatbid:[{bid:[i]}]},s=btoa(encodeURI(JSON.stringify(d)));if(i.adm)try{(a=JSON.parse(i.adm).gam)&&Object.keys(a).length?(a.namedSizes=["fluid"],a.div="div-gpt-ad-x01",a.targeting=l(a.targeting||{},{OAS_retarg:"0",PREBID_ON:"1",emptygaf:"0"})):a=void 0,a&&!a.targeting&&(a.targeting={})}catch(e){f.logWarn("Could not parse adm data",i.adm)}var o='<head>\n  <title></title>\n  <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <style>\n    body {\n    background-color: transparent;\n    margin: 0;\n    padding: 0;\n  }\n</style>\n  <script>\n  window.rekid = '.concat(e.id,";\n  window.slot = ").concat(parseInt(e.slot,10),';\n  window.wp_sn = "').concat(e.sn,'";\n  window.mcad = JSON.parse(decodeURI(atob("').concat(s,'")));\n  window.gdpr = ').concat(JSON.stringify(n.gdprConsent),';\n  window.page = "').concat(e.page,'";\n  window.ref = "').concat(e.ref,'";\n  ');return a&&(o+="window.gam = ".concat(JSON.stringify(a),";")),o+='<\/script>\n    </head>\n    <body>\n    <div id="c"></div>\n    <script id="wpjslib" crossorigin src="//std.wpcdn.pl/wpjslib/wpjslib-inline.js" async defer><\/script>\n  </body>\n  </html>'}(o,d.id,t,a,n.bidderRequest)}).cpm&&(e<=i.cpm?s.push(i):f.logWarn("Discarding bid due to bidFloor setting",i.cpm,e))):f.logWarn("Discarding response - no matching request / site id",t.impid)})}),s},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:"https://ssp.wp.pl/bidder/usersync?tcf="+b}];f.logWarn("sspBC adapter requires iframe based user sync.")},onTimeout:function(e){var t=s(e);if(t)return t.event="timeout",o(t),t},onBidWon:function(e){var t=s(e);if(t)return t.event="bidWon",o(t),t}};Object(n.registerBidder)(m)}},[858]);