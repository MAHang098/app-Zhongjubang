(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopping-mall/all-order/all-order"],{"0ac7":function(e,t,o){},"122a":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){return o.e("components/uni-popup/uni-popup").then(o.bind(null,"73b7"))},r={components:{uniPopup:n},data:function(){return{currentType:0,popupShow:!1,popupType:"",token:"",orderList:[],saleList:[],order_num:"",popupTitle:"宝贝错过就没有啦 真的不要了吗？",orderState:null}},onLoad:function(t){var o=this;e.getStorage({key:"token",success:function(e){o.token=e.data}}),this.afterSale(),t.type?this.changeOrder(t.type):this.changeOrder(0)},methods:{init:function(t){var o=this;e.request({url:this.url+"controller/shopcontroller/getappuserorderlist",data:{pageIndex:1,pageSize:1e3,state:t},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:this.token},success:function(t){if(200==t.data.code){var n=t.data.data.dataList;o.orderList=n}421==t.data.code&&e.navigateTo({url:"/pages/loginPhone/loginPhone"})}})},afterSale:function(){var t=this;e.request({url:this.url+"controller/shopcontroller/getuserordernumbystate",method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:this.token},success:function(o){if(200==o.data.code){var n=o.data.data;t.saleList=n}421==o.data.code&&e.navigateTo({url:"/pages/loginPhone/loginPhone"})}})},cancelOrder:function(e){this.togglePopup("center","tip"),this.order_num=e},changeOrder:function(e){this.currentType=e,0==e&&this.init(""),1==e&&this.init("0"),2==e&&this.init("2"),3==e&&this.init("4"),4==e&&this.saleOrder()},saleOrder:function(){var t=this;e.request({url:this.url+"controller/shopcontroller/getappuserorderaftermarketlist",method:"POST",data:{pageIndex:1,pageSize:50},header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:this.token},success:function(o){if(200==o.data.code){var n=o.data.data.dataList;t.orderList=n}421==o.data.code&&e.navigateTo({url:"/pages/loginPhone/loginPhone"})}})},togglePopup:function(e,t){switch(e){case"top":this.content="顶部弹出 popup";break;case"bottom":this.content="底部弹出 popup";break;case"center":this.content="居中弹出 popup";break}this.popupType=e,"tip"===t?this.popupShow=!0:this.$refs[t].open()},cancel:function(t){var o=this;if("tip"!==t){if("skip"==t){if(7==this.orderState)return void this.deluserorder();e.request({url:this.url+"controller/shopcontroller/delappuserorder",method:"POST",data:{orderNum:this.order_num},header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:this.token},success:function(t){200==t.data.code&&(e.showToast({title:"订单取消成功"}),o.popupShow=!1,o.init(""),o.afterSale()),421==t.data.code&&e.navigateTo({url:"/pages/loginPhone/loginPhone"})}})}}else this.popupShow=!1},change:function(e){},goCart:function(){e.navigateTo({url:"/pages/shop/shop"})},backPage:function(){e.switchTab({url:"/pages/user/user"})},goshop:function(t){e.navigateTo({url:"/pages/shop-command/shop-command?shopId="+t})},pDetail:function(t,o){4!=this.currentType?e.navigateTo({url:"/pages/shopping-mall/order-detail/order-detail?orderNum="+t}):e.navigateTo({url:"/pages/shopping-mall/replacement-applyDetail/replacement-applyDetail?id="+o})},jump:function(t,o){4==t&&e.navigateTo({url:"/pages/shopping-mall/order-comments/order-comments?num="+o}),7==t&&(this.orderState=t,this.order_num=o,this.popupTitle="确定删除订单吗？",this.togglePopup("center","tip"))},deluserorder:function(t){var o=this;e.request({url:this.url+"controller/shopcontroller/deluserorder",method:"POST",data:{orderNum:this.order_num},header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:this.token},success:function(t){200==t.data.code&&(e.showToast({title:"订单删除成功"}),o.popupShow=!1,o.init(""),o.afterSale()),421==t.data.code&&e.navigateTo({url:"/pages/loginPhone/loginPhone"})}})},goSearchOrder:function(){e.navigateTo({url:"/pages/shopping-mall/order-search/order-search"})}}};t.default=r}).call(this,o("6e42")["default"])},1242:function(e,t,o){"use strict";var n=o("0ac7"),r=o.n(n);r.a},"33f8":function(e,t,o){"use strict";o.r(t);var n=o("122a"),r=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=r.a},"7c81":function(e,t,o){"use strict";o.r(t);var n=o("c9a5"),r=o("33f8");for(var a in r)"default"!==a&&function(e){o.d(t,e,function(){return r[e]})}(a);o("1242");var i=o("2877"),s=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},c9a5:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},r=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return r})},d52f:function(e,t,o){"use strict";(function(e){o("19df"),o("921b");n(o("66fd"));var t=n(o("7c81"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])}},[["d52f","common/runtime","common/vendor"]]]);