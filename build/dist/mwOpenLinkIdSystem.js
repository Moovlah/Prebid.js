pbjsChunk([203],{635:function(e,n,o){e.exports=o(636)},636:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),o.d(n,"writeCookie",function(){return s}),o.d(n,"mwOpenLinkIdSubModule",function(){return m});var d=o(0),u=o(4),t=o(11),r=o(7),i={name:"mwol",cookie_expiration:31536e6},a=Object(r.b)();function c(e){if(e)if(e.accountId){if(e.partnerId)return 1;d.logError("User ID - mwOlId submodule requires partnerId to be defined")}else d.logError("User ID - mwOlId submodule requires accountId to be defined");else d.logError("User ID - mwOlId submodule requires configParams")}function p(e){e=e||i.name;var n,o,t=a.getCookie(e);return t?(n=decodeURIComponent(t),o={},n.split(",").forEach(function(e){var n=e.split(":");o[n[0]]=1==+n[1]||n[1]}),o):null}function s(e){var n,o,t;e&&(n=encodeURIComponent((t=[],(o=e).eid&&t.push("eid:"+o.eid),o.ibaOptout&&t.push("ibaOptout:1"),o.ccpaOptout&&t.push("ccpaOptout:1"),t.join(","))),a.setCookie(i.name,n,new Date(d.timestamp()+i.cookie_expiration).toGMTString(),"lax"))}function l(e){if(c(e)){var n,o,t,r=p(),i=r?d.deepClone(r):{eid:d.generateUUID()};return s(i),n=e,o=i.eid,t="https://ol.mediawallahscript.com/?account_id="+n.accountId+"&partner_id="+n.partnerId+"&uid="+n.uid+"&olid="+o+"&cb="+Math.random(),Object(u.a)(t),{id:i}}}var m={name:"mwOpenLinkId",decode:function(e){var n=e&&d.isPlainObject(e)?e.eid:void 0;return n?{mwOpenLinkId:n}:void 0},getId:function(e){var n=e&&e.params||{};if(c(n))return l(n)}};Object(t.e)("userId",m)}},[635]);