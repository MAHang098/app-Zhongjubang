(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopping-mall/replacement-apply/replacement-apply"],{"0ae7":function(t,e,o){"use strict";o.r(e);var a=o("73a5"),n=o("8e02");for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);o("b100");var s=o("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"19c70542",null);e["default"]=r.exports},"0b59":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return o.e("components/uni-popup/uni-popup").then(o.bind(null,"73b7"))},n={components:{uniPopup:a},data:function(){return{token:"",popupType:"",show:!1,imgList:[],detailData:{},goodsState:0,reason:"",detailImg:"",detailId:""}},onLoad:function(e){var o=this;t.getStorage({key:"token",success:function(t){o.token=t.data}}),this.detailId=e.orderId,this.init()},methods:{init:function(){var e=this;t.request({url:this.url+"controller/shopcontroller/getcancelorderdetail",method:"post",data:{appUserOrderId:this.detailId},header:{"content-type":"application/x-www-form-urlencoded",token:this.token,port:"app"},success:function(o){if(200==o.data.code){var a=o.data.data;e.detailImg=a[0].topImgList,e.detailData=a[0]}421==o.data.code&&t.navigateTo({url:"/pages/loginPhone/loginPhone"})}})},deleteImage:function(t,e){this.imgList.forEach(function(o,a,n){o.fileName==t&&e==a&&n.splice(e,1)}),this.isUpload=!0},chooseImage:function(){var e=this;t.chooseImage({count:3,sourceType:["album"],success:function(o){t.showLoading({title:"请稍等",mask:!0});var a=o.tempFilePaths;for(var n in a)t.uploadFile({url:e.url+"/upload",filePath:a[n],name:"file",formData:{user:"test"},success:function(o){t.hideLoading();var a=JSON.parse(o.data),n={fileName:a.data.fileName,fileUrl:a.data.fileUrl,testArr:[]};e.imgList.push(n)}})}})},togglePopup:function(t,e){this.popupType=t,"tip"===e?this.show=!0:this.$refs[e].open()},cancel:function(t){"tip"!==t?this.$refs[t].close():this.show=!1},notArrived:function(t,e){this.goodsState=t,this.$refs[e].close()},commit:function(){if(0!=this.goodsState)if(""!=this.reason){var e={appUserOrderId:this.detailId,orderState:this.goodsState,outOrderCause:this.reason,voucherImg:JSON.stringify(this.imgList),orderRealPrice:this.detailData.goodsPrice};t.request({url:this.url+"controller/shopcontroller/adduserorderout",method:"post",data:e,header:{"content-type":"application/x-www-form-urlencoded",token:this.token,port:"app"},success:function(e){200==e.data.code&&(t.showToast({title:"申请成功"}),t.navigateTo({url:"/pages/shopping-mall/all-order/all-order?type=4"})),421==e.data.code&&t.navigateTo({url:"/pages/loginPhone/loginPhone"})}})}else t.showToast({title:"请填写退款原因",icon:"none"});else t.showToast({title:"请选择货物状态",icon:"none"})}}};e.default=n}).call(this,o("6e42")["default"])},"73a5":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})},"8e02":function(t,e,o){"use strict";o.r(e);var a=o("0b59"),n=o.n(a);for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);e["default"]=n.a},b100:function(t,e,o){"use strict";var a=o("f6e7"),n=o.n(a);n.a},f6e7:function(t,e,o){},fa11:function(t,e,o){"use strict";(function(t){o("19df"),o("921b");a(o("66fd"));var e=a(o("0ae7"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])}},[["fa11","common/runtime","common/vendor"]]]);