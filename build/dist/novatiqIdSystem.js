pbjsChunk([191],{659:function(e,o,n){e.exports=n(660)},660:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),n.d(o,"novatiqIdSubmodule",function(){return r});var s=n(0),a=n(4),t=n(11),r={name:"novatiq",decode:function(e){return{novatiq:{snowflake:e}}},getId:function(e){var o,n=e.params||{},t=this.getSrcId(n);s.logInfo("NOVATIQ Sync request used sourceid param: "+t),o=window.location.hostname,s.logInfo("NOVATIQ partner hostname: "+o);var r=function e(o){return o?(o^16*Math.random()>>o/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11+1e3).replace(/[018]/g,e)}(),i="https://spadsync.com/sync?sptoken="+r+"&sspid="+t+"&ssphost="+o;return Object(a.a)(i,void 0,void 0,{method:"GET",withCredentials:!1}),s.logInfo("NOVATIQ snowflake: "+r),{id:r}},getSrcId:function(e){var o,n;return s.logInfo("NOVATIQ Configured sourceid param: "+e.sourceid),void 0===e.sourceid||null===e.sourceid||""===e.sourceid?(o="000",s.logInfo("NOVATIQ sourceid param set to value 000 due to undefined parameter or missing value in config section")):e.sourceid.length<3||3<e.sourceid.length?(o="001",s.logInfo("NOVATIQ sourceid param set to value 001 due to wrong size in config section 3 chars max e.g. 1ab")):0==(n=e.sourceid,parseInt(n,16).toString(16)===n)?(o="002",s.logInfo("NOVATIQ sourceid param set to value 002 due to wrong format in config section expecting hex value only")):o=e.sourceid,o}};Object(t.e)("userId",r)}},[659]);