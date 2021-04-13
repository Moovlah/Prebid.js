pbjsChunk([331],{332:function(t,e,r){t.exports=r(333)},333:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addBrowsiTag=y,e.collectData=m,e.setData=O,e.isIdMatchingAdUnit=h,e.getMacroId=j,r.d(e,"browsiSubmodule",function(){return v});var u=r(0),n=r(11),i=r(4),o=r(39),a=r(7),c=r(10),s=r.n(c);function l(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)),n}function p(o){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach(function(t){var e,r,n;e=o,n=a[r=t],r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(a,t))})}return o}var b=Object(a.b)(),d={},g=null,f="browsiViewability";function y(t){var e=Object(o.a)(t.u,"browsi");return e.async=!0,e.setAttribute("data-sitekey",d.siteKey),e.setAttribute("data-pubkey",d.pubKey),e.setAttribute("prebidbpt","true"),e.setAttribute("id","browsi-tag"),e.setAttribute("src",t.u),e.prebidData=u.deepClone(t),d.keyName&&(e.prebidData.kn=d.keyName),e}function m(){var t=window.top,e=t.document,r=null;try{r=b.getDataFromLocalStorage("__brtd")}catch(t){u.logError("unable to parse __brtd")}var n,o,a=p(p(p(p({},{sk:d.siteKey,sw:t.screen&&t.screen.width||-1,sh:t.screen&&t.screen.height||-1,url:"".concat(e.location.protocol,"//").concat(e.location.host).concat(e.location.pathname)}),r?{us:r}:{us:"{}"}),document.referrer?{r:document.referrer}:{}),document.title?{at:document.title}:{});n="//".concat(d.url,"/prebid?").concat((o=a,Object.keys(o).map(function(t){return t+"="+encodeURIComponent(o[t])}).join("&"))),Object(i.b)()(n,{success:function(t,e){if(200===e.status)try{var r=JSON.parse(t);r&&r.p&&r.kn?O({p:r.p,kn:r.kn,pmd:r.pmd}):O({}),y(r)}catch(t){u.logError("unable to parse data"),O({})}else 204===e.status&&O({})},error:function(){O({}),u.logError("unable to get prediction data")}})}function O(t){g=t}function w(t,e){var r=t<0?"NA":(Math.floor(10*t)/10).toFixed(2),n={};return n[(d.keyName||e||f).toString()]=r.toString(),n}function h(t,e){if(!e||!e.length||!t)return!0;var r=t.getAdUnitPath();return-1!==e.indexOf(r)}function j(e,r){if(e)try{return function(t,e,r,n){var o=t.p.replace(/['"]+/g,"").replace(/<DIV_ID>/g,e);r&&(o=o.replace(/<AD_UNIT>/g,r));n&&(o=o.replace(/<KEY_(\w+)>/g,n));t.s&&(o=o.substring(t.s.s,t.s.e));return o}(e,r.getSlotElementId(),r.getAdUnitPath(),function(t,e){return e&&r.getTargeting(e).join("_")||"NA"})}catch(t){u.logError("failed to evaluate: ".concat(e))}return r.getSlotElementId()}var v={name:"browsi",getTargetingData:function(t){try{var c=g&&g.p||{};return t.reduce(function(t,e){if(!e)return t;var r,n,o=(r=e,(n=u.isGptPubadsDefined()&&window.googletag.pubads().getSlots())&&n.length&&s()(n,function(t){return t.getSlotElementId()===r||t.getAdUnitPath()===r})||null),a=o?j(g.pmd,o):e,i=c[a];if(t[e]=w(-1,g.kn),!i)return t;if(i.p){if(!h(o,i.w))return t;t[e]=w(i.p,g.kn)}return t},{})}catch(t){return{}}},init:function(t){(d=t.params)&&d.siteKey&&d.pubKey&&d.url?m():u.logError("missing params for Browsi provider");return!0}};Object(n.e)("realTimeData",v)}},[332]);