pbjsChunk([312],{379:function(e,r,n){e.exports=n(380)},380:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"spec",function(){return s});var c=n(0),t=n(1);function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var a=0,d="consumable",s={code:"consumable",isBidRequestValid:function(e){return!!(e.params.networkId&&e.params.siteId&&e.params.unitId&&e.params.unitName)},buildRequests:function(e,r){var n={method:"POST",url:"",data:"",bidRequest:[]};if(e.length<1)return n;a=e[0].params.siteId,d=e[0].bidder;var s=i({placements:[],time:Date.now(),url:r.refererInfo.referer,referrer:document.referrer,source:[{name:"prebidjs",version:"4.35.0-pre"}]},e[0].params);return r&&r.gdprConsent&&(s.gdpr={consent:r.gdprConsent.consentString,applies:"boolean"!=typeof r.gdprConsent.gdprApplies||r.gdprConsent.gdprApplies}),r&&r.uspConsent&&(s.ccpa=r.uspConsent),e.map(function(e){var n,r=e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes||e.sizes||[],t=i({divName:e.bidId,adTypes:e.adTypes||(n=[],r.forEach(function(e){var r=p.indexOf(e[0]+"x"+e[1]);0<=r&&n.push(r)}),n)},e.params);t.networkId&&t.siteId&&t.unitId&&t.unitName&&s.placements.push(t)}),n.data=JSON.stringify(s),n.bidRequest=e,n.bidderRequest=r,n.url="https://e.serverbid.com/api/v2",n},interpretResponse:function(e,r){var n=[],t=r.bidRequest;e=(e||{}).body;for(var s,i=0;i<t.length;i++){var a,d,p,u={},o=(p=t[i]).bidId;e&&(d=(a=e.decisions&&e.decisions[o])&&a.pricing&&a.pricing.clearPrice,a&&d&&(u.requestId=o,u.cpm=d,u.width=a.width,u.height=a.height,u.unitId=p.params.unitId,u.unitName=p.params.unitName,u.ad=(s=a,u.unitId,u.unitName,s.contents&&s.contents[0]&&s.contents[0].body+c.createTrackPixelHtml(s.impressionUrl)),u.currency="USD",u.creativeId=a.adId,u.ttl=30,u.netRevenue=!0,u.referrer=r.bidderRequest.refererInfo.referer,n.push(u)))}return n},getUserSyncs:function(e,r){return e.iframeEnabled?[{type:"iframe",url:"https://sync.serverbid.com/ss/"+a+".html"}]:e.pixelEnabled&&0<r.length?r[0].body.pixels:void c.logWarn(d+": Please enable iframe based user syncing.")}},p=[null,"120x90","120x90","468x60","728x90","300x250","160x600","120x600","300x100","180x150","336x280","240x400","234x60","88x31","120x60","120x240","125x125","220x250","250x250","250x90","0x0","200x90","300x50","320x50","320x480","185x185","620x45","300x125","800x250"];p[77]="970x90",p[123]="970x250",p[43]="300x600",p[286]="970x66",p[3230]="970x280",p[429]="486x60",p[374]="700x500",p[934]="300x1050",p[1578]="320x100",p[331]="320x250",p[3301]="320x267",p[2730]="728x250",Object(t.registerBidder)(s)}},[379]);