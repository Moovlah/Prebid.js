pbjsChunk([154],{760:function(e,i,t){e.exports=t(761)},761:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),t.d(i,"spec",function(){return n});var o=t(0),a=t(1),r=t(2),n={code:"reklamstore",supportedMediaTypes:[r.b],isBidRequestValid:function(e){return!!e.params.regionId},buildRequests:function(e,i){var t=i.refererInfo.referer,a=[];return o._each(e,function(e){var i;a.push({method:"GET",url:"https://ads.rekmob.com/m/prebid",data:{regionId:e.params.regionId,dt:function(){var i=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(i=!0)}(navigator.userAgent||navigator.vendor||window.opera),i}()?0:function(){var i=!1;return function(e){/ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(e)&&(i=!0)}(navigator.userAgent||navigator.vendor||window.opera),i}()?2:3,os:(i=navigator.userAgent).match(/(iPhone|iPod|iPad)/)?"1":i.match(/Android/)?"0":"3",ref:function(e){var i;i=-1<e.indexOf("://")?e.split("/")[2]:e.split("/")[0];return i=i.split(":")[0]}(t),_:(new Date).getTime(),mobile_web:1},bidId:e.bidId})}),a},interpretResponse:function(e,i){try{var t=e.body,a=[];return t&&a.push({requestId:i.bidId,cpm:parseFloat(t.cpm),width:t.w,height:t.h,creativeId:t.adId||1,currency:"USD",netRevenue:!0,ttl:360,ad:t.ad}),a}catch(e){return o.logError(e),[]}},getUserSyncs:function(i,e){var t=[];return o._each(e,function(e){o._each(e.body.syncs,function(e){(i.pixelEnabled&&"image"==e.type||i.iframeEnabled&&"iframe"==e.type)&&t.push({type:e.type,url:e.url})})}),t}};Object(a.registerBidder)(n)}},[760]);