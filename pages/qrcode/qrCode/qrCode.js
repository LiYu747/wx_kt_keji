(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qrcode/qrCode/qrCode"],{1374:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("a6bb")),a=i(e("8031"));function i(t){return t&&t.__esModule?t:{default:t}}var c=function(){e.e("components/sub-unit/subunit").then(function(){return resolve(e("e864"))}.bind(null,e)).catch(e.oe)},u=function(){Promise.all([e.e("common/vendor"),e.e("components/qrcode/tki-qrcode/tki-qrcode")]).then(function(){return resolve(e("c7ca"))}.bind(null,e)).catch(e.oe)},s={name:"",components:{subunit:c,tkiQrcode:u},props:{},data:function(){return{val:"",size:500,unit:"upx",background:"#ffffff",foreground:"#000000",pdground:"#000000",icon:"",iconsize:40,lv:3,onval:!0,loadMake:!0,text:"刷新成功",flag:0,show:0,time:60,timetext:"有效时间:60s"}},methods:{goback:function(){t.navigateBack({delta:1})},add:function(){this.text="刷新成功",this.flag=0,this.show=0,this.time=60,this.loadUserData()},loadUserData:function(){var n=this;a.default.doOnlyTokenValid({showModal:!0,keepSuccess:!1,success:function(){n.data()},fail:function(){t.switchTab({url:"/pages/index/index"})}})},countdown:function(){var t=this,n=setInterval((function(){t.time>0&&(t.time--,t.timetext="有效时间:"+t.time+"s",(t.time<=0||0===t.flag)&&(t.time=60,t.show=0,clearInterval(n)))}),1e3)},data:function(){var n=this;t.showLoading({title:"加载中"}),o.default.obtaincode({data:{},fail:function(n){t.hideLoading(),t.showToast({title:"网络错误",icon:"none"})},success:function(e){if(t.hideLoading(),200==e.statusCode)if(200==e.data.code){n.val=e.data.data.content;setTimeout((function(){n.text="手动刷新",n.flag=1,n.countdown(),n.show=1}),2e3)}else t.showToast({title:e.data.msg,icon:"none"});else t.showToast({title:"网络出错了",icon:"none"})}})}},onShow:function(){this.loadUserData()},mounted:function(){},onLoad:function(){},filters:{},computed:{},watch:{},directives:{}};n.default=s}).call(this,e("543d")["default"])},"405a":function(t,n,e){"use strict";e.r(n);var o=e("1374"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=a.a},"5e98":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}));var a=function(){var t=this,n=t.$createElement;t._self._c},i=[]},"8a1c":function(t,n,e){"use strict";var o=e("f9c9"),a=e.n(o);a.a},bf8e:function(t,n,e){"use strict";e.r(n);var o=e("5e98"),a=e("405a");for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("8a1c");var c,u=e("f0c5"),s=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"b820f53c",null,!1,o["a"],c);n["default"]=s.exports},e581:function(t,n,e){"use strict";(function(t){e("d774");o(e("66fd"));var n=o(e("bf8e"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},f9c9:function(t,n,e){}},[["e581","common/runtime","common/vendor"]]]);