pbjsChunk([376],{224:function(e,t,r){e.exports=r(225)},225:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return i});var n=r(1);function c(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function p(i){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach(function(e){var t,r,n;t=i,n=a[r=e],r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(a,e))})}return i}var i={code:"adnuntius",isBidRequestValid:function(e){return!!(e.params.auId||e.params.member&&e.params.invCode)},buildRequests:function(e){for(var t={},r={},n=[],i=(new Date).getTimezoneOffset(),a=0;a<e.length;a++){var c=e[a],u=c.params.network||"network";r[u]=r[u]||[],r[u].push(c),t[u]=t[u]||{},t[u].adUnits=t[u].adUnits||[],t[u].adUnits.push(p(p({},c.params.targeting),{},{auId:c.params.auId,targetId:c.bidId}))}for(var o=Object.keys(t),s=0;s<o.length;s++){var d=o[s];n.push({method:"POST",url:"https://delivery.adnuntius.com/i?tzo="+i+"&format=json",data:JSON.stringify(t[d]),bid:r[d]})}return n},interpretResponse:function(e,t){for(var r=[],n=e.body,i=0;i<n.adUnits.length;i++){var a,c,u=n.adUnits[i];0<u.matchedAdCount&&(c=(a=u.ads[0]).cpc&&a.cpm?a.bid.amount+a.cpm.amount:a.cpc?a.bid.amount:a.cpm?a.cpm.amount:0,r.push({requestId:t.bid[i].bidId,cpm:c,width:Number(a.creativeWidth),height:Number(a.creativeHeight),creativeId:a.creativeId,currency:a.bid?a.bid.currency:"EUR",netRevenue:!1,ttl:360,ad:u.html}))}return r}};Object(n.registerBidder)(i)}},[224]);