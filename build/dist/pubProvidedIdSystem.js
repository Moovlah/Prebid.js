pbjsChunk([168],{718:function(e,d,n){e.exports=n(719)},719:function(e,d,n){"use strict";Object.defineProperty(d,"__esModule",{value:!0}),n.d(d,"pubProvidedIdSubmodule",function(){return u});var o=n(11),i=n(0),u={name:"pubProvidedId",decode:function(e){var d=e?{pubProvidedId:e}:void 0;return i.logInfo("PubProvidedId: Decoded value "+JSON.stringify(d)),d},getId:function(e){var d=e&&e.params||{},n=[];return i.isArray(d.eids)&&(n=n.concat(d.eids)),"function"==typeof d.eidsFunction&&(n=n.concat(d.eidsFunction())),{id:n}}};Object(o.e)("userId",u)}},[718]);