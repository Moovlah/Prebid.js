pbjsChunk([111],{874:function(e,n,a){e.exports=a(875)},875:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),a.d(n,"spec",function(){return t});var T,_,P=a(0),r=a(1),s=a(2),z=a(3),I="tappx",t={code:I,supportedMediaTypes:[s.b],isBidRequestValid:function(e){return null!=e.params&&null!=e.params.endpoint&&null!=e.params.tappxkey||(P.logWarn("[TAPPX]: Please review the mandatory Tappx parameters. ".concat(JSON.stringify(e))),!1)},buildRequests:function(e,n){var a=[];return e.forEach(function(e){a.push(function(e,n){var a=function(e){var n={};n.domain=e.split("/",1)[0],n.url=e;var a=new RegExp("^(zz.*|testing).ssp.tappx.com$","i"),r=new RegExp("^[a-z]{3}.[a-z]{3}.tappx.com$","i");{var s;a.test(n.domain)?-1===(s=n.domain.split(".",1)[0]).toUpperCase().indexOf("TESTING")&&(n.endpoint=s,n.new_endpoint=!0):r.test(n.domain)&&(n.new_endpoint=!1)}return n}(T=P.deepAccess(e,"params.host"));_=a.domain;var r,s=P.deepAccess(e,"params.endpoint"),t=P.deepAccess(e,"params.tappxkey"),p=P.deepAccess(e,"params.bidfloor"),o=P.deepAccess(e,"mediaTypes.banner"),i=n.refererInfo,d={},c={},u={};{var m,l;P.deepAccess(e,"params.app")?((m={}).name=P.deepAccess(e,"params.app.name"),m.bundle=P.deepAccess(e,"params.app.bundle"),m.domain=P.deepAccess(e,"params.app.domain"),c.name=P.deepAccess(e,"params.app.publisher.name"),c.domain=P.deepAccess(e,"params.app.publisher.domain"),r="".concat(m.name,"_typeAdBanVid_").concat(O()),d.app=m,u[0]=P.deepAccess(e,"params.api")?P.deepAccess(e,"params.api"):[3,5]):((l={}).name=n&&i?P.parseUrl(i.referer).hostname:window.location.hostname,l.bundle=n&&i?P.parseUrl(i.referer).hostname:window.location.hostname,l.domain=n&&i?P.parseUrl(i.referer).hostname:window.location.hostname,c.name=n&&i?P.parseUrl(i.referer).hostname:window.location.hostname,c.domain=n&&i?P.parseUrl(i.referer).hostname:window.location.hostname,r="".concat(l.name,"_typeAdBanVid_").concat(O()),d.site=l)}var g,f,h={};{var v,b;o&&(v={},g=o.sizes[0][0],f=o.sizes[0][1],v.w=g,v.h=f,0<=o.sizes[0].indexOf(480)&&0<=o.sizes[0].indexOf(320)||0<=o.sizes[0].indexOf(768)&&0<=o.sizes[0].indexOf(1024)?v.pos=7:v.pos=4,v.api=u,(b={0:{}})[0].w=g,b[0].h=f,v.format=b,h.banner=v)}h.id=e.bidId,h.tagid=r,h.secure=1,h.bidfloor=P.deepAccess(e,"params.bidfloor");var y={};y.tappxkey=t,y.endpoint=s,y.host=a.url,h.ext={},h.ext.bidder=y;var A={};A.os=O(),A.ip="peer",A.ua=navigator.userAgent,A.ifa=e.ifa,A.h=screen.height,A.w=screen.width,A.dnt=P.getDNT()?1:0,A.language=function(){var e=navigator.language?"language":"userLanguage";return navigator[e].split("-")[0]}(),A.make=navigator.vendor?navigator.vendor:"",P.deepAccess(e,"params.geo.country");var w={host:"tappx.com"};w.bidfloor=p;var x={gdpr:0};null!=n.gdprConsent&&("boolean"==typeof n.gdprConsent.gdprApplies&&(x.gdpr=n.gdprConsent.gdprApplies),x.gdpr&&(x.consent=n.gdprConsent.consentString));x.ext={},null!=n.uspConsent&&(x.ext.us_privacy=n.uspConsent);!0===z.b.getConfig("coppa")&&(x.coppa=!0===z.b.getConfig("coppa")?1:0);var C=P.deepAccess(e,"userIdAsEids");return d.user={ext:{eids:C}},d.id=e.auctionId,d.test=P.deepAccess(e,"params.test")?1:0,d.at=1,d.tmax=n.timeout?n.timeout:600,d.bidder=I,d.imp=[h],d.device=A,d.params=w,d.regs=x,{method:"POST",url:"https://".concat(T,"/").concat(s,"?type_cnn=").concat("prebidjs","&v=").concat("0.1.10329"),data:JSON.stringify(d),bids:e}}(e,n))}),a},interpretResponse:function(e,a){var n=e.body;if(!e.body)return P.logWarn("[TAPPX]: Empty response body HTTP 204, no bids"),[];var r=[];return n.seatbid.forEach(function(e){e.bid.forEach(function(e){var n;r.push((n=e,{requestId:a.bids.bidId,cpm:n.price,currency:n.cur?n.cur:"USD",width:n.w,height:n.h,ad:n.adm,ttl:360,creativeId:n.crid,netRevenue:!0,mediaType:s.b}))})}),r},getUserSyncs:function(e,n,a,r){var s="https://".concat(_,"/cs/usersync.php?");return a&&(s+="&gdpr="+(a.gdprApplies?1:0),s+="&gdpr_consent="+encodeURIComponent(a.consentString||"")),r&&(s+="&us_privacy="+encodeURIComponent(r)),e.iframeEnabled?[{type:"iframe",url:s+="&type=iframe"}]:[{type:"image",url:s+="&type=img"}]}};function O(){var e=navigator.userAgent;return null==e?"unknown":e.match(/(iPhone|iPod|iPad)/)?"ios":e.match(/Android/)?"android":e.match(/Window/)?"windows":"unknown"}Object(r.registerBidder)(t)}},[874]);