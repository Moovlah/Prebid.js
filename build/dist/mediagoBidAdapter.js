pbjsChunk([214],{611:function(e,t,n){e.exports=n(612)},612:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",function(){return c});var d=n(0),r=n(7),o=n(1);function m(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f="https:"===window.document.location.protocol?1:0,g=Object(r.b)(),i={},b={};function v(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,v)}var h="__mguid_";function y(e){for(var t=e,n=arguments.length,r=new Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var i=0,a=r;i<a.length;i++){var c=a[i];if(!t||!t[c])return"";t=t[c]}return t}function w(e){var t=[];for(var n in e){var r,o,i=e[n],a=void 0,c=y(i,"mediaTypes"),u=void 0,s=m(function(e){var t=[],n={};if(d.isArray(e)&&2===e.length&&!d.isArray(e[0]))n.width=parseInt(e[0],10),n.height=parseInt(e[1],10),t.push(n);else if("object"===p(e))for(var r=0;r<e.length;r++){var o=e[r];(n={}).width=parseInt(o[0],10),n.height=parseInt(o[1],10),t.push(n)}return t}(y(i,"sizes")));try{for(s.s();!(r=s.n()).done;){var l=r.value;if(300===l.width&&250===l.height){u=l;break}}}catch(e){s.e(e)}finally{s.f()}u&&c.banner&&(a={id:o=""+(+n+1),banner:{h:u.height,w:u.width,pos:1},secure:f},b[o]={req:i,ret:a}),a&&t.push(a)}return t}function a(e,t){var n,r,o,i,a=(i=!1,n=navigator.userAgent||navigator.vendor||window.opera,r=new RegExp(["(android|bbd+|meego)",".+mobile|avantgo|bada/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)","|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone","|p(ixi|re)/|plucker|pocket|psp|series(4|6)0|symbian|treo|up.(browser|link)|vodafone|wap","|windows ce|xda|xiino|android|ipad|playbook|silk"].join(""),"i"),o=new RegExp(["1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)","|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )","|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55/|capi|ccwa|cdm-|cell","|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)","|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene","|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c","|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|/)|ibro|idea|ig01|ikom","|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |/)|klon|kpt |kwc-|kyo(c|k)","|le(no|xi)|lg( g|/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50/|ma(te|ui|xo)|mc(01|21|ca)","|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]","|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)","|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio","|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55/|sa(ge|ma|mm|ms","|ny|va)|sc(01|h-|oo|p-)|sdk/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al","|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)","|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)|utst|","v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)","|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-","|your|zeto|zte-"].join(""),"i"),(r.test(n)||o.test(n.substr(0,4)))&&(i=!0),i?1:0),c=y(t,"auctionId")||v(),u=w(e),s=document.domain,l=d.deepAccess(t,"refererInfo.referer");return u&&u.length?{id:"mgprebidjs_"+c,test:0,at:1,cur:["USD"],device:{js:1,os:navigator.platform||"",ua:navigator.userAgent,language:/en/.test(navigator.language)?"en":navigator.language},user:{id:function(){var e=g.getCookie(h);if(null!==e)return e;var t=d.generateUUID();return g.setCookie(h,t),t}()},site:{name:s,domain:s,page:l,ref:l,mobile:a,cat:[],publisher:{id:s,name:s}},imp:u}:null}var c={code:"mediago",isBidRequestValid:function(e){return e.params.token&&(i.token=e.params.token),!!e.params.token},buildRequests:function(e,t){var n=a(e,t);if(n){var r=JSON.stringify(n);return{method:"POST",url:"https://rtb-us.mediago.io/api/bid?tn="+i.token,data:r}}return null},interpretResponse:function(e){var t,n=y(e,"body","seatbid",0,"bid"),r=y(e,"body","cur"),o=[],i=m(n);try{for(i.s();!(t=i.n()).done;){var a,c=t.value,u=y(c,"impid");b[u]&&(a={requestId:y(b[u],"req","bidId"),cpm:y(c,"price"),width:y(c,"w"),height:y(c,"h"),creativeId:y(c,"crid"),dealId:"",currency:r,netRevenue:!0,ttl:500,ad:y(c,"adm")},o.push(a))}}catch(e){i.e(e)}finally{i.f()}return o},onTimeout:function(){},onBidWon:function(){},onSetTargeting:function(){}};Object(o.registerBidder)(c)}},[611]);