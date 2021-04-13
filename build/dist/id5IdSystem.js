pbjsChunk([257],{500:function(e,r,t){e.exports=t(501)},501:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"ID5_STORAGE_NAME",function(){return m}),t.d(r,"ID5_PRIVACY_STORAGE_NAME",function(){return b}),t.d(r,"id5IdSubmodule",function(){return s}),r.expDaysStr=v,r.nbCacheName=i,r.storeNbInCache=h,r.getNbFromCache=c,r.getFromLocalStorage=_,r.storeInLocalStorage=y,r.isInControlGroup=T;var u=t(0),p=t(4),n=t(11),d=t(21),a=t(7),l=t(8),g=30,m="id5id",b="".concat(m,"_privacy"),f="html5",o=1e4,I=["pbjs-id5id","id5id.1st"],D=Object(a.b)(131,"id5Id"),s={name:"id5Id",gvlid:131,decode:function(e,r){var t,n=0;if(e&&"string"==typeof e.universal_uid){t=e.universal_uid,n=e.link_type||n;var a=C(r),o=T(t,a.controlGroupPct);!0===a.enabled&&void 0===o?u.logError("User ID - ID5 submodule: A/B Testing controlGroupPct must be a number >= 0 and <= 1! Skipping A/B Testing"):!0===a.enabled&&!0===o?(u.logInfo("User ID - ID5 submodule: A/B Testing Enabled - user is in the Control Group, so the ID5 ID is NOT exposed"),t="",n=0):!0===a.enabled&&u.logInfo("User ID - ID5 submodule: A/B Testing Enabled - user is NOT in the Control Group, so the ID5 ID is exposed");var s={id5id:{uid:t,ext:{linkType:n}}};return!0===a.enabled&&u.deepSetValue(s,"id5id.ext.abTestingControlGroup",void 0!==o&&o),s}},getId:function(a,e,r){if(function(e){if(!e||!e.params||!e.params.partner||"number"!=typeof e.params.partner)return u.logError("User ID - ID5 submodule requires partner to be defined as a number"),!1;if(!e.storage||!e.storage.type||!e.storage.name)return u.logError("User ID - ID5 submodule requires storage to be set"),!1;e.storage.type!==f&&u.logWarn("User ID - ID5 submodule recommends storage type to be '".concat(f,"'. In a future release this will become a strict requirement"));e.storage.name!==m&&u.logWarn("User ID - ID5 submodule recommends storage name to be '".concat(m,"'. In a future release this will become a strict requirement"));return!0}(a)){var t,o="https://id5-sync.com/g/v2/".concat(a.params.partner,".json"),n=e&&"boolean"==typeof e.gdprApplies&&e.gdprApplies?1:0,s=Object(d.a)(),i=r&&r.signature?r.signature:(I.forEach(function(e){D.getCookie(e)&&(t=JSON.parse(D.getCookie(e))||t)}),t&&t.signature||""),c={gdpr:n,gdpr_consent:n?e.consentString:"",partner:a.params.partner,nbPage:S(a.params.partner),o:"pbjs",pd:a.params.pd||"",provider:a.params.provider||"",rf:s.referer,s:i,top:s.reachedTop?1:0,u:s.stack[0]||window.location.href,us_privacy:l.uspDataHandler.getConsentData()||"",v:"4.35.0-pre"};!0===C(a).enabled&&u.deepSetValue(c,"features.ab",1);return{callback:function(n){var e={success:function(e){var r,t;if(e)try{r=JSON.parse(e),h(a.params.partner,0),r.privacy&&y(b,JSON.stringify(r.privacy),g),a.storage.type===f&&(t=a.params.partner,I.forEach(function(e){D.setCookie("".concat(e),"",v(-1)),D.setCookie("".concat(e,"_nb"),"",v(-1)),D.setCookie("".concat(e,"_").concat(t,"_nb"),"",v(-1)),D.setCookie("".concat(e,"_last"),"",v(-1))}))}catch(e){u.logError(e)}n(r)},error:function(e){u.logError("User ID - ID5 submodule getId fetch encountered an error",e),n()}};Object(p.a)(o,e,JSON.stringify(c),{method:"POST",withCredentials:!0})}}}},extendId:function(e,r,t){return S(e&&e.params&&e.params.partner||0),t}};function v(e){return new Date(Date.now()+864e5*e).toUTCString()}function i(e){return"".concat(m,"_").concat(e,"_nb")}function h(e,r){y(i(e),r,g)}function c(e){var r=_(i(e));return r?parseInt(r):0}function S(e){var r=c(e)+1;return h(e,r),r}function _(e){var r=D.getDataFromLocalStorage("".concat(e,"_exp"));return""===r||r&&0<new Date(r).getTime()-Date.now()?D.getDataFromLocalStorage(e):(D.removeDataFromLocalStorage(e),null)}function y(e,r,t){D.setDataInLocalStorage("".concat(e,"_exp"),v(t)),D.setDataInLocalStorage("".concat(e),r)}function C(e){return e&&e.params&&e.params.abTesting||{enabled:!1}}function T(e,r){var t;if(!(!u.isNumber(r)||r<0||1<r))return((t=e)?(u.cyrb53Hash(t)%o+o)%o:Math.floor(Math.random()*o))<r*o}Object(n.e)("userId",s)}},[500]);