pbjsChunk([96],{908:function(e,n,t){e.exports=t(909)},909:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"spec",function(){return a});var o=t(1),s=t(2),i=t(7),c=t(3),p=t(0);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=Object(i.b)(),m="ucf_uid",g=0,f=2,a={code:"ucfunnel",gvlid:607,ENDPOINT:"https://hb.aralego.com/header",supportedMediaTypes:[s.b,s.d,s.c],isBidRequestValid:function(e){var n=e.mediaTypes&&null!=e.mediaTypes.video,t=e.mediaTypes&&null!=e.mediaTypes.video?e.mediaTypes.video.videoContext:"";return"object"===r(e.params)&&"string"==typeof e.params.adid&&(!n||"outstream"!==t)},buildRequests:function(e,n){return e.map(function(e){return{method:"GET",url:a.ENDPOINT,data:function(e,n){var t=y(e),o=navigator.language,i="yes"==navigator.doNotTrack||"1"==navigator.doNotTrack||"1"==navigator.msDoNotTrack?1:0,r=e.userId&&e.userId.tdid?e.userId.tdid:"",a=function(e){var n="";if(null!=e&&e.nodes){n=e.ver+","+e.complete;for(var t=0;t<e.nodes.length;t++)n+="!",n+=e.nodes[t].asi?encodeURIComponent(e.nodes[t].asi):"",n+=",",n+=e.nodes[t].sid?encodeURIComponent(e.nodes[t].sid):"",n+=",",n+=e.nodes[t].hp?encodeURIComponent(e.nodes[t].hp):"",n+=",",n+=e.nodes[t].rid?encodeURIComponent(e.nodes[t].rid):"",n+=",",n+=e.nodes[t].name?encodeURIComponent(e.nodes[t].name):"",n+=",",n+=e.nodes[t].domain?encodeURIComponent(e.nodes[t].domain):""}return n}(e.schain),d={ver:"ADGENT_PREBID-2018011501",ifr:0,bl:o,je:1,dnt:i,adid:e.params.adid,tdid:r,schain:a,fp:e.params.bidfloor};!function(t,e){p._each(e,function(e,n){switch(n){case"sharedid":e.id&&(t[n+"_id"]=e.id),e.third&&(t[n+"_third"]=e.third);break;case"haloId":e.haloId&&(t[n+"haloId"]=e.haloId),e.auSeg&&(t[n+"_auSeg"]=e.auSeg);break;case"parrableId":e.eid&&(t[n+"_eid"]=e.eid);break;case"id5id":e.uid&&(t[n+"_uid"]=e.uid),e.ext&&e.ext.linkType&&(t[n+"_linkType"]=e.ext.linkType);break;default:t[n]=e}})}(d,e.userId);try{d.host=window.top.location.hostname,d.u=c.b.getConfig("publisherDomain")||window.top.location.href,d.xr=0}catch(e){d.host=window.location.hostname,d.u=c.b.getConfig("publisherDomain")||n.refererInfo.referrer||document.referrer||window.location.href,d.xr=1}window.location.ancestorOrigins&&0<window.location.ancestorOrigins.length&&(d.ao=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]);{var s;u.cookiesAreEnabled()&&(s="",null!=u.getCookie(m)?(s=u.getCookie(m),d.ucfUid=s):(s=p.generateUUID(),d.ucfUid=s,u.setCookie(m,s)))}null!=t&&2==t.length&&(d.w=t[0],d.h=t[1]);n&&n.uspConsent&&l(d,{usprivacy:n.uspConsent});if(e.mediaTypes&&null!=e.mediaTypes.video){switch(e.mediaTypes.video.context){case"outstream":d.atype=f;break;case"instream":default:d.atype=g}}n&&n.gdprConsent&&(1==n.gdprConsent.apiVersion?l(d,{gdpr:n.gdprConsent.gdprApplies?1:0,euconsent:n.gdprConsent.consentString}):2==n.gdprConsent.apiVersion&&l(d,{gdpr:n.gdprConsent.gdprApplies?1:0,"euconsent-v2":n.gdprConsent.consentString}));c.b.getConfig("coppa")&&(d.coppa=!0);return d}(e,n),bidRequest:e}})},interpretResponse:function(e,n){var t=n.bidRequest,o=e?e.body:{},i=y(t),r={requestId:t.bidId,cpm:o.cpm||0,creativeId:o.crid||o.ad_id||t.params.adid,dealId:o.deal||null,currency:o.currency||"USD",netRevenue:!0,ttl:1800,meta:{}};switch(t.params&&t.params.bidfloor&&o.cpm&&o.cpm<t.params.bidfloor&&(r.cpm=0),o.creative_type&&(r.mediaType=o.creative_type,r.meta.mediaType=o.creative_type),o.adomain&&(r.meta.advertiserDomains=o.adomain),o.creative_type){case s.c:var a=o.native;l(r,{width:1,height:1,native:{title:a.title,body:a.desc,cta:a.ctatext,sponsoredBy:a.sponsored,image:a.image||a.image.url,icon:a.icon||a.icon.url,clickUrl:a.clickUrl,clickTrackers:a.clicktrackers?a.clicktrackers:[],impressionTrackers:a.impressionTrackers}});break;case s.d:l(r,{vastUrl:o.vastUrl,vastXml:o.vastXml}),i&&2===i.length&&l(r,{width:i[0],height:i[1]});break;case s.b:default:var d=y(t);l(r,{width:o.width||d[0],height:o.height||d[1],ad:o.adm||""})}return[r]},getUserSyncs:function(e,n,t,o){var i=2<arguments.length&&void 0!==t?t:{},r=3<arguments.length?o:void 0,a=i&&i.gdprApplies?"1":"",d=i?i.apiVersion:"",s=i?i.consentString:"";return e.iframeEnabled?[{type:"iframe",url:"https://cdn.aralego.net/ucfad/cookie/sync.html"+h(a,d,s,r)}]:e.pixelEnabled?[{type:"image",url:"https://sync.aralego.com/idSync"+h(a,d,s,r)}]:void 0}};function h(e,n,t,o){var i="?";return"1"==e&&(i+="gdpr=1&"),1==n?i=i+"euconsent="+t+"&":2==n&&(i=i+"euconsent-v2="+t+"&"),o&&(i=i+"usprivacy="+o),"?"==i?"":i}function y(e){var n=e.params;if(e.mediaType===s.d){if(n.video&&n.video.playerWidth&&n.video.playerHeight)return[n.video.playerWidth,n.video.playerHeight]}return function(e){if("object"===r(e)&&e.length)return e[0]}(e.sizes)}Object(o.registerBidder)(a)}},[908]);