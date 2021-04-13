pbjsChunk([130],{822:function(e,t,a){e.exports=a(823)},823:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSegmentsAndCategories=o,t.setGlobalOrtb2=O,t.setBidderOrtb2=w,t.loadCustomFunction=v,t.getSegAndCatsArray=P,t.addSegmentData=g,t.init=d,a.d(t,"sirdataSubmodule",function(){return i});var h=a(17),x=a(0),r=a(11),m=a(4),s=a(69),f=a.n(s),u=a(21),n=a(3);function c(t,e){var a,r=Object.keys(t);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(t),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)),r}function _(s){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach(function(e){var t,a,r;t=s,r=o[a=e],a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach(function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(o,e))})}return s}function o(e,r,s,t){var o=e.adUnits||Object(h.a)().adUnits;s.params=s.params||{};var a,n,c=t&&t.gdpr&&t.gdpr.consentString?t.gdpr.consentString:"",d=t&&t.gdpr&&t.gdpr.gdprApplies?t.gdpr.gdprApplies:"";s.params.partnerId=s.params.partnerId?s.params.partnerId:1,s.params.key=s.params.key?s.params.key:1,t.coppa||t.usp&&"1"==t.usp[0]&&("N"==t.usp[1]||"Y"==t.usp[2])?(n=!(a="cookieless-data.com"),d=null,c=""):Object(h.a)().getConfig("consentManagement.gdpr")&&(n=!(a="cookieless-data.com")),a&&d&&!(x.deepAccess(t,"gdpr.vendorData.vendor.consents")&&t.gdpr.vendorData.vendor.consents[53]&&t.gdpr.vendorData.purpose.consents[1]&&t.gdpr.vendorData.purpose.consents[4])||(a="sddan.com",n=!0);var i=s.params.actualUrl||Object(u.a)().referer,p="https://kvt."+a+"/api/v1/public/p/"+s.params.partnerId+"/d/"+s.params.key+"/s?callback=&gdpr="+d+"&gdpr_consent="+c+(i?"&url="+i:"");Object(m.a)(p,{success:function(e,t){if(200===t.status)try{var a=JSON.parse(e);a&&a.segments?g(o,a,s,r):r()}catch(e){r(),x.logError("unable to parse Sirdata data"+e)}else 204===t.status&&r()},error:function(){r(),x.logError("unable to get Sirdata data")}},null,{contentType:"text/plain",method:"GET",withCredentials:n,referrerPolicy:"unsafe-url",crossOrigin:!0})}function O(e,t){try{var a,r={},s=Object(h.a)().getConfig("ortb2")||{};x.deepAccess(s,"user.ext.data.sd_rtd")&&x.deepEqual(s.user.ext.data.sd_rtd,e)||x.deepSetValue(r,"user.ext.data.sd_rtd",e||{}),x.deepAccess(s,"site.ext.data.sd_rtd")&&x.deepEqual(s.site.ext.data.sd_rtd,t)||x.deepSetValue(r,"site.ext.data.sd_rtd",t||{}),x.isEmpty(r)||(a={ortb2:x.mergeDeep({},s,r)},Object(h.a)().setConfig(a))}catch(e){x.logError(e)}return!0}function w(e,t,a){try{var r,s={},o=x.deepAccess(n.b.getBidderConfig(),e+".ortb2")||{};x.deepAccess(o,"user.ext.data.sd_rtd")&&x.deepEqual(o.user.ext.data.sd_rtd,t)||x.deepSetValue(s,"user.ext.data.sd_rtd",t||{}),x.deepAccess(o,"site.ext.data.sd_rtd")&&x.deepEqual(o.site.ext.data.sd_rtd,a)||x.deepSetValue(s,"site.ext.data.sd_rtd",a||{}),x.isEmpty(s)||(r={ortb2:x.mergeDeep({},o,s)},Object(h.a)().setBidderConfig({bidders:[e],config:r}))}catch(e){x.logError(e)}return!0}function v(e,t,a,r,s){try{"function"==typeof e&&e(t,a,r,s)}catch(e){x.logError(e)}return!0}function P(e,t){var a={segments:[],categories:[]};t=t&&"number"==typeof t?t:30;try{if(e&&e.contextual_categories)for(var r in e.contextual_categories){t<=e.contextual_categories[r]&&-1===a.categories.indexOf(r)&&a.categories.push(r.toString())}}catch(e){x.logError(e)}try{if(e&&e.segments)for(var s in e.segments)a.segments.push(e.segments[s].toString())}catch(e){x.logError(e)}return a}function g(e,c,d,t){(d=d||{}).params=d.params||{};var i=d.params.hasOwnProperty("contextualMinRelevancyScore")?d.params.contextualMinRelevancyScore:30,p=P(c,i);if(!p||p.segments.length<1&&p.categories.length<1)return x.logError("no cats"),t(),e;var m=p.segments.concat(p.categories),u={segments:[],categories:[]},g="1",b=!(!d.params||!d.params.bidders);if(b||O(p.segments,p.categories),void 0!==window.googletag&&(d.params.setGptKeyValues||!d.params.hasOwnProperty("setGptKeyValues")))try{g=d.params.gptCurationId?d.params.gptCurationId:"27449",c.shared_taxonomy&&c.shared_taxonomy[g]&&(u=P(c.shared_taxonomy[g],i)),window.googletag.pubads().getSlots().forEach(function(e){void 0!==e.setTargeting&&e.setTargeting("sd_rtd",m.concat(u.segments).concat(u.categories))})}catch(e){x.logError(e)}var y,l;return e.forEach(function(n){b||x.deepAccess(n,"ortb2Imp.ext.data.sd_rtd")||x.deepSetValue(n,"ortb2Imp.ext.data.sd_rtd",m),n.hasOwnProperty("bids")&&n.bids.forEach(function(t){y=!!d.params.hasOwnProperty("bidders")&&f()(d.params.bidders,function(e){return e.bidder===t.bidder}),l=!!("number"==typeof y&&0<=y);try{u={segments:[],categories:[]};var a,r,s,e=l&&d.params.bidders[y].hasOwnProperty("contextualMinRelevancyScore")?d.params.bidders[y].contextualMinRelevancyScore:i;if(!b||l&&(!d.params.bidders[y].hasOwnProperty("adUnitCodes")||-1!==d.params.bidders[y].adUnitCodes.indexOf(n.code)))switch(t.bidder){case"appnexus":case"appnexusAst":case"brealtime":case"emxdigital":case"pagescience":case"gourmetads":case"matomy":case"featureforward":case"oftmedia":case"districtm":case"adasta":case"beintoo":case"gravity":case"msq_classic":case"msq_max":case"366_apx":g=l&&d.params.bidders[y].hasOwnProperty("curationId")?d.params.bidders[y].curationId:"27446",c.shared_taxonomy&&c.shared_taxonomy[g]&&(u=P(c.shared_taxonomy[g],e)),l&&d.params.bidders[y].hasOwnProperty("customFunction")?v(d.params.bidders[y].customFunction,n,m.concat(u.segments).concat(u.categories),c,t):x.deepSetValue(t,"params.keywords.sd_rtd",m.concat(u.segments).concat(u.categories));break;case"smartadserver":case"smart":var o=[];t.hasOwnProperty("params")&&t.params.hasOwnProperty("target")&&o.push(t.params.target),g=l&&d.params.bidders[y].hasOwnProperty("curationId")?d.params.bidders[y].curationId:"27440",c.shared_taxonomy&&c.shared_taxonomy[g]&&(u=P(c.shared_taxonomy[g],e)),l&&d.params.bidders[y].hasOwnProperty("customFunction")?v(d.params.bidders[y].customFunction,n,m.concat(u.segments).concat(u.categories),c,t):(m.concat(u.segments).concat(u.categories).forEach(function(e){-1===o.indexOf("sd_rtd="+e)&&o.push("sd_rtd="+e)}),x.deepSetValue(t,"params.target",o.join(";")));break;case"rubicon":g=l&&d.params.bidders[y].hasOwnProperty("curationId")?d.params.bidders[y].curationId:"27452",c.shared_taxonomy&&c.shared_taxonomy[g]&&(u=P(c.shared_taxonomy[g],e)),l&&d.params.bidders[y].hasOwnProperty("customFunction")?v(d.params.bidders[y].customFunction,n,m.concat(u.segments).concat(u.categories),c,t):w(t.bidder,c.segments.concat(u.segments),m.concat(u.segments).concat(u.categories));break;case"ix":Object(h.a)().getConfig("ix.firstPartyData.sd_rtd")||(g=l&&d.params.bidders[y].hasOwnProperty("curationId")?d.params.bidders[y].curationId:"27248",c.shared_taxonomy&&c.shared_taxonomy[g]&&(u=P(c.shared_taxonomy[g],e)),l&&d.params.bidders[y].hasOwnProperty("customFunction")?v(d.params.bidders[y].customFunction,n,m.concat(u.segments).concat(u.categories),c,t):(a=[],r=0,s=l&&d.params.bidders[y].hasOwnProperty("sizeLimit")?d.params.bidders[y].sizeLimit:1e3,m.concat(u.segments).concat(u.categories).forEach(function(e){r<s&&(a.push(e),r+=e.toString().length)}),Object(h.a)().setConfig({ix:{firstPartyData:{sd_rtd:a}}})));break;case"proxistore":g=l&&d.params.bidders[y].hasOwnProperty("curationId")?d.params.bidders[y].curationId:"27484",c.shared_taxonomy&&c.shared_taxonomy[g]?u=P(c.shared_taxonomy[g],e):c.shared_taxonomy[g]={contextual_categories:{}},l&&d.params.bidders[y].hasOwnProperty("customFunction")?v(d.params.bidders[y].customFunction,n,m.concat(u.segments).concat(u.categories),c,t):x.deepSetValue(t,"ortb2.user.ext.data",{segments:p.segments.concat(u.segments),contextual_categories:_(_({},c.contextual_categories),c.shared_taxonomy[g].contextual_categories)});break;case"criteo":g=l&&d.params.bidders[y].hasOwnProperty("curationId")?d.params.bidders[y].curationId:"27443",c.shared_taxonomy&&c.shared_taxonomy[g]&&(u=P(c.shared_taxonomy[g],e)),l&&d.params.bidders[y].hasOwnProperty("customFunction")?v(d.params.bidders[y].customFunction,n,m.concat(u.segments).concat(u.categories),c,t):w(t.bidder,m.concat(u.segments).concat(u.categories),m.concat(u.segments).concat(u.categories));break;case"triplelift":g=l&&d.params.bidders[y].hasOwnProperty("curationId")?d.params.bidders[y].curationId:"27518",c.shared_taxonomy&&c.shared_taxonomy[g]&&(u=P(c.shared_taxonomy[g],e)),l&&d.params.bidders[y].hasOwnProperty("customFunction")?v(d.params.bidders[y].customFunction,n,m.concat(u.segments).concat(u.categories),c,t):w(t.bidder,c.segments.concat(u.segments),m.concat(u.segments).concat(u.categories));break;case"avct":case"avocet":g=l&&d.params.bidders[y].hasOwnProperty("curationId")?d.params.bidders[y].curationId:"27522",c.shared_taxonomy&&c.shared_taxonomy[g]&&(u=P(c.shared_taxonomy[g],e)),l&&d.params.bidders[y].hasOwnProperty("customFunction")?v(d.params.bidders[y].customFunction,n,m.concat(u.segments).concat(u.categories),c,t):w(t.bidder,c.segments.concat(u.segments),m.concat(u.segments).concat(u.categories));break;case"smaato":g=l&&d.params.bidders[y].hasOwnProperty("curationId")?d.params.bidders[y].curationId:"27520",c.shared_taxonomy&&c.shared_taxonomy[g]&&(u=P(c.shared_taxonomy[g],e)),l&&d.params.bidders[y].hasOwnProperty("customFunction")?v(d.params.bidders[y].customFunction,n,m.concat(u.segments).concat(u.categories),c,t):w(t.bidder,c.segments.concat(u.segments),m.concat(u.segments).concat(u.categories));break;default:b&&!l||(x.deepAccess(t,"ortb2.site.ext.data.sd_rtd")||x.deepSetValue(t,"ortb2.site.ext.data.sd_rtd",p.categories),x.deepAccess(t,"ortb2.user.ext.data.sd_rtd")||x.deepSetValue(t,"ortb2.user.ext.data.sd_rtd",p.segments))}}catch(e){x.logError(e)}})}),t(),e}function d(e){return!0}var i={name:"SirdataRTDModule",init:d,getBidRequestData:o};Object(r.e)("realTimeData",i)}},[822]);