pbjsChunk([341],{310:function(e,t,r){e.exports=r(311)},311:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return s});var l=r(0),n=r(1),i=r(7),g=Object(i.b)();function f(e){return e.getTimezoneOffset()<(t=e,r=new Date(t.getFullYear(),0,1),n=new Date(t.getFullYear(),6,1),Math.max(r.getTimezoneOffset(),n.getTimezoneOffset()));var t,r,n}var s={code:"bidfluence",isBidRequestValid:function(e){return!!e.params.placementId||!!e.params.publisherId},buildRequests:function(e,t){var r,n,i,s=document.getElementsByTagName("body")[0],c=t.refererInfo,d=t.gdprConsent,a=Math.max(window.innerWidth||s.clientWidth||0)+2,o=Math.max(window.innerHeight||s.clientHeight||0)+2,u=screen.height>screen.width?screen.height+"x"+screen.width+"x"+screen.colorDepth:screen.width+"x"+screen.height+"x"+screen.colorDepth,p={v:"2.0",azr:!0,ck:g.cookiesAreEnabled(),re:c?c.referer:"",st:c?c.stack:[],tz:(n=new Date,i=n.getTimezoneOffset(),f(n)&&(i+=60),i.toString()),sr:u,tm:t.timeout,vp:a+"x"+o,sdt:(r=new Date).getUTCFullYear()+"/"+("0"+(r.getUTCMonth()+1)).slice(-2)+"/"+("0"+r.getUTCDate()).slice(-2)+" "+("0"+r.getUTCHours()).slice(-2)+":"+("0"+r.getUTCMinutes()).slice(-2)+":"+("0"+r.getUTCSeconds()).slice(-2),top:!!c&&c.reachedTop,gdpr:!!d&&d.gdprApplies,gdprc:d?d.consentString:"",bids:[]};l._each(e,function(e){var t=e.params,r=l.parseSizesInput(e.sizes)[0],n=r.split("x")[0],i=r.split("x")[1],s={bid:e.bidId,tid:t.placementId,pid:t.publisherId,rp:t.reservePrice||0,w:n,h:i};p.bids.push(s)});var h=JSON.stringify(p);return{method:"POST",url:"https://bdf".concat(p.bids[0].pid,".bidfluence.com/Prebid"),data:h,options:{contentType:"text/plain"}}},interpretResponse:function(e){var n=[],t=e.body;return l._each(t.Bids,function(e){var t,r=e.Cpm||0;0<r&&(t={requestId:e.BidId,cpm:r,width:e.Width,height:e.Height,creativeId:e.CreativeId,ad:e.Ad,currency:"USD",netRevenue:!0,ttl:360},n.push(t))}),n},getUserSyncs:function(e){if(e.userSyncs)return e.UserSyncs.map(function(e){return{type:"ifr"===e.Type?"iframe":"image",url:e.Url}})}};Object(n.registerBidder)(s)}},[310]);