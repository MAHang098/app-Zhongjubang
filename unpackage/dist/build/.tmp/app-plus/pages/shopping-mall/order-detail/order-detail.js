(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopping-mall/order-detail/order-detail"],{"2c68":function(t,a,e){"use strict";e.r(a);var o=e("50a3"),n=e("cff8");for(var r in n)"default"!==r&&function(t){e.d(a,t,function(){return n[t]})}(r);e("8837");var i=e("2877"),d=Object(i["a"])(n["default"],o["a"],o["b"],!1,null,"4871b338",null);a["default"]=d.exports},"50a3":function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement;t._self._c},n=[];e.d(a,"a",function(){return o}),e.d(a,"b",function(){return n})},"7cd0":function(t,a,e){"use strict";(function(t){e("19df"),e("921b");o(e("66fd"));var a=o(e("2c68"));function o(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},8837:function(t,a,e){"use strict";var o=e("a447"),n=e.n(o);n.a},a2ac:function(t,a,e){"use strict";(function(t,e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o={data:function(){return{reload:!1,page:1,goodsList:[],token:"",orderData:[],adressData:[],detailAdress:"",totalPage:0}},created:function(){},onReachBottom:function(){this.totalPage>1&&this.moreLike()},onLoad:function(a){var e=this;t.getStorage({key:"token",success:function(t){e.token=t.data}}),this.init(a.orderNum),this.page=1,this.goodsList=[],this.moreLike()},methods:{init:function(a){var e=this;t.request({url:this.url+"controller/shopcontroller/getuserorderdetail",data:{orderNum:a},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:this.token},success:function(a){if(t.hideLoading(),200==a.data.code){var o=a.data.data[0];e.orderData=o,e.adressData=o.orderList[0].appOrderAddressDTO[0];var n=JSON.parse(e.adressData.userAddress);e.detailAdress=n.city+n.detail}421==a.data.code&&t.navigateTo({url:"/pages/loginPhone/loginPhone"})}})},goDetails:function(a){t.navigateTo({url:"/pages/shopping-mall/detail/detail?id="+a})},moreLike:function(){var a=this,o={pageIndex:this.page,pageSize:10};t.showLoading({title:"加载中...",mask:!0}),t.request({url:this.url+"controller/shopcontroller/getAppGoodsRecommendGoods",data:o,method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:""},success:function(o){t.hideLoading();var n=o.data.data.pageSize*o.data.data.totalPage;if(this.totalPage=o.data.data.totalPage,a.goodsList.length!=n){if(200==o.data.code){var r=o.data.data.dataList;if(a.goodsList=a.reload?r:a.goodsList.concat(r),o.data.data.totalPage<2)return;console.log(e(a.page," at pages\\shopping-mall\\order-detail\\order-detail.vue:168")),a.page++}421==o.data.code&&t.navigateTo({url:"/pages/loginPhone/loginPhone"})}}})},copyNum:function(a){t.setClipboardData({data:a,success:function(){t.showToast({title:"复制成功",duration:2e3,icon:"none"})}})},refunds:function(a){t.navigateTo({url:"/pages/shopping-mall/replacement-apply/replacement-apply?orderId="+a})},refundsDetail:function(a){t.navigateTo({url:"/pages/shopping-mall/replacement-applyDetail/replacement-applyDetail?num="+a})}}};a.default=o}).call(this,e("6e42")["default"],e("0de9")["default"])},a447:function(t,a,e){},cff8:function(t,a,e){"use strict";e.r(a);var o=e("a2ac"),n=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(a,t,function(){return o[t]})}(r);a["default"]=n.a}},[["7cd0","common/runtime","common/vendor"]]]);