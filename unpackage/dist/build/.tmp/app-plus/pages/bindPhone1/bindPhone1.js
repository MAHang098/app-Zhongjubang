(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bindPhone1/bindPhone1"],{7332:function(e,n,t){"use strict";t.r(n);var o=t("7d0b"),i=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=i.a},"7d0b":function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"73b7"))},a={components:{uniPopup:i},data:function(){return{show:!1,type:"",second:60,phone:"",validationCode:"",isActive:!1}},methods:{togglePopup:function(e,n){switch(e){case"top":this.content="顶部弹出 popup";break;case"bottom":this.content="底部弹出 popup";break;case"center":this.content="居中弹出 popup";break}this.type=e,"tip"===n?this.show=!0:this.$refs[n].open()},cancel:function(n){"tip"!==n?"skip"===n&&e.switchTab({url:"../main/main"}):this.show=!1},change:function(e){console.log(o(e.show," at pages\\bindPhone1\\bindPhone1.vue:92"))},sendCod:function(){var n=this;if(this.phone.length<11||this.phone.length>11)e.showToast({icon:"none",title:"请输入正确的电话号码!"});else{this.isActive=!0;var t=setInterval(function(){--n.second},1e3);setTimeout(function(){clearInterval(t),n.isActive=!1,n.second=60},6e4);var o={phone:this.phone,type:"2"};this.url;e.request({url:this.url+"/public/public/sendverificationcode",data:o,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){e.code}})}},bindPhone:function(){if(""!=this.phone)if(this.phone.length<11||this.phone.length>11)e.showToast({icon:"none",title:"请输入正确的电话号码!"});else if(""!=this.validationCode){var n=this.phone,t={phone:this.phone,code:this.validationCode,type:"2"},i=this.url;e.request({url:this.url+"/public/public/checkverificationcode",data:t,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a;200==t.data.code?(console.log(o(n," at pages\\bindPhone1\\bindPhone1.vue:179")),e.getStorage({key:"token",success:function(e){a=e.data}}),console.log(o(a," at pages\\bindPhone1\\bindPhone1.vue:187")),e.request({url:i+"/controller/usercontroller/updateappuserphone",data:{phone:n},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:a},success:function(n){console.log(o(n.data.code," at pages\\bindPhone1\\bindPhone1.vue:200")),console.log(o(n.data," at pages\\bindPhone1\\bindPhone1.vue:201")),e.setStorage({key:"token",data:n.data.token}),200==n.data.code?e.switchTab({url:"/pages/main/main"}):(console.log(o("请求异常"," at pages\\bindPhone1\\bindPhone1.vue:211")),e.showToast({title:"电话已经注册",icon:"none",duration:2e3}))}})):e.showToast({title:t.data.message,icon:"none",duration:2e3})}})}else e.showToast({title:"请输入验证码",icon:"none",duration:2e3});else e.showToast({title:"请输入手机号",icon:"none",duration:2e3})}}};n.default=a}).call(this,t("6e42")["default"],t("0de9")["default"])},9895:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return i})},ac7a:function(e,n,t){"use strict";(function(e){t("19df"),t("921b");o(t("66fd"));var n=o(t("e45f"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},e45f:function(e,n,t){"use strict";t.r(n);var o=t("9895"),i=t("7332");for(var a in i)"default"!==a&&function(e){t.d(n,e,function(){return i[e]})}(a);t("f582");var s=t("2877"),c=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports},f582:function(e,n,t){"use strict";var o=t("fdbd"),i=t.n(o);i.a},fdbd:function(e,n,t){}},[["ac7a","common/runtime","common/vendor"]]]);