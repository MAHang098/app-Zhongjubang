(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/wanghong/wanghong"],{1921:function(t,e,n){"use strict";n.r(e);var a=n("b1ee"),o=n("bb26");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("e96c");var i=n("2877"),c=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},a543:function(t,e,n){"use strict";(function(t){n("19df"),n("921b");a(n("66fd"));var e=a(n("1921"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},b1ee:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},ba60:function(t,e,n){},bb26:function(t,e,n){"use strict";n.r(e);var a=n("f47a"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},e96c:function(t,e,n){"use strict";var a=n("ba60"),o=n.n(a);o.a},f47a:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{goodsList:[]}},onShow:function(){this.init()},methods:{goDetails:function(e){t.navigateTo({url:"/pages/shopping-mall/detail/detail?id="+e})},back:function(){t.navigateBack()},init:function(){var e,a=this;t.getStorage({key:"token",success:function(t){e=t.data}}),t.request({url:this.url+"controller/shopcontroller/getAppInternetCelebrityGoods",data:{pageIndex:1,pageSize:1e3},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:e},success:function(t){200==t.data.code?a.goodsList=t.data.data.dataList:console.log(n("请求异常"," at pages\\wanghong\\wanghong.vue:66"))}})}}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["a543","common/runtime","common/vendor"]]]);