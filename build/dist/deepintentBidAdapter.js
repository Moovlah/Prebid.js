pbjsChunk([301],{408:function(e,r,a){e.exports=a(409)},409:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),a.d(r,"spec",function(){return i});var s=a(1),t=a(2),n=a(0),i={code:"deepintent",supportedMediaTypes:[t.b],aliases:[],isBidRequestValid:function(e){var r=!1;return e&&e.params&&e.params.tagId&&("string"==typeof e.params.tagId||e.params.tagId instanceof String)&&(r=!0),r},interpretResponse:function(e){var r=[];return e&&e.body&&(r=(e.body.seatbid&&e.body.seatbid[0]?e.body.seatbid[0].bid:[]).map(function(e){return{requestId:(r=e)&&r.impid?r.impid:void 0,cpm:r&&r.price?r.price:0,width:r&&r.w?r.w:0,height:r&&r.h?r.h:0,ad:r&&r.adm?r.adm:"",creativeId:r&&r.crid?r.crid:void 0,netRevenue:!1,currency:r&&r.cur?r.cur:"USD",ttl:300,dealId:r&&r.dealId?r.dealId:void 0};var r})),r},buildRequests:function(e,r){var a=e.map(function(e){if(e&&e.params&&e.params.user)return{id:e.params.user.id&&"string"==typeof e.params.user.id?e.params.user.id:void 0,buyeruid:e.params.user.buyeruid&&"string"==typeof e.params.user.buyeruid?e.params.user.buyeruid:void 0,yob:e.params.user.yob&&"number"==typeof e.params.user.yob?e.params.user.yob:null,gender:e.params.user.gender&&"string"==typeof e.params.user.gender?e.params.user.gender:void 0,keywords:e.params.user.keywords&&"string"==typeof e.params.user.keywords?e.params.user.keywords:void 0,customdata:e.params.user.customdata&&"string"==typeof e.params.user.customdata?e.params.user.customdata:void 0}});!function(e){for(var r in e)null!==e[r]&&void 0!==e[r]||delete e[r]}(a);var s={id:n.generateUUID(),at:1,imp:e.map(function(e){return{id:(r=e).bidId,tagid:r.params.tagId||"",secure:"https"===window.location.protocol?1:0,banner:function(e){if(n.deepAccess(e,"mediaTypes.banner")){if(!n.deepAccess(e,"mediaTypes.banner.sizes")||e.params.height||e.params.width)return{h:e.params.height,w:e.params.width,pos:e&&e.params&&e.params.pos?e.params.pos:0};var r=n.deepAccess(e,"mediaTypes.banner.sizes");if(n.isArray(r)&&0<r.length)return{h:r[0][1],w:r[0][0],pos:e&&e.params&&e.params.pos?e.params.pos:0}}}(r),displaymanager:"di_prebid",displaymanagerver:"1.0.0",ext:function(e){return e.params&&e.params.custom?{deepintent:e.params.custom}:{}}(r)};var r}),site:function(e){var r={};e&&e.refererInfo&&e.refererInfo.referer&&(r.page=e.refererInfo.referer,r.domain=function(e){if(e){var r=document.createElement("a");return r.href=e,r.hostname}}(e.refererInfo.referer));return r}(r),device:{ua:navigator.userAgent,js:1,dnt:"yes"==navigator.doNotTrack||"1"===navigator.doNotTrack?1:0,h:screen.height,w:screen.width,language:navigator.language},user:a&&1===a.length?a[0]:{}};return r&&r.uspConsent&&n.deepSetValue(s,"regs.ext.us_privacy",r.uspConsent),r&&r.gdprConsent&&(n.deepSetValue(s,"user.ext.consent",r.gdprConsent.consentString),n.deepSetValue(s,"regs.ext.gdpr",r.gdprConsent.gdprApplies?1:0)),{method:"POST",url:"https://prebid.deepintent.com/prebid",data:JSON.stringify(s),options:{contentType:"application/json"}}},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:"https://cdn.deepintent.com/syncpixel.html"}]}};Object(s.registerBidder)(i)}},[408]);