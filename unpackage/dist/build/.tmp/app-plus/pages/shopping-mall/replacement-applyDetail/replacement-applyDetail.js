(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopping-mall/replacement-applyDetail/replacement-applyDetail"],{"06ba":function(t,e,n){"use strict";n.r(e);var o=n("3dcc"),a=n("7d73");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("a538");var u=n("2877"),c=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},"3dcc":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"7d73":function(t,e,n){"use strict";n.r(e);var o=n("f3af"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a},8919:function(t,e,n){},a173:function(t,e,n){"use strict";(function(t){n("19df"),n("921b");o(n("66fd"));var e=o(n("06ba"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a538:function(t,e,n){"use strict";var o=n("8919"),a=n.n(o);a.a},f3af:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"73b7"))},a={components:{uniPopup:o},data:function(){return{show:!1,type:"",orderid:"",token:""}},onLoad:function(e){var n=this;t.getStorage({key:"token",success:function(t){n.token=t.data}}),e.id&&(this.orderid=e.id)},methods:{togglePopup:function(t,e){switch(t){case"top":this.content="顶部弹出 popup";break;case"bottom":this.content="底部弹出 popup";break;case"center":this.content="居中弹出 popup";break}this.type=t,"tip"===e?this.show=!0:this.$refs[e].open()},cancel:function(e){"skip"==e&&t.request({url:this.url+"controller/shopcontroller/cancelorder",method:"POST",data:{appUserOrderId:this.orderid},header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:this.token},success:function(e){200==e.data.code&&(t.showToast({title:"取消成功"}),t.navigateTo({url:"/pages/shopping-mall/all-order/all-order?type=0"})),421==e.data.code&&t.navigateTo({url:"/pages/loginPhone/loginPhone"})}})}}};e.default=a}).call(this,n("6e42")["default"])}},[["a173","common/runtime","common/vendor"]]]);