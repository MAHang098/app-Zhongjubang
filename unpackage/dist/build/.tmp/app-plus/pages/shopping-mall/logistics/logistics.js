(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopping-mall/logistics/logistics"],{"24c9":function(t,i,n){"use strict";var e=n("9ddc"),s=n.n(e);s.a},4539:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=function(){return n.e("components/uni-icons/uni-icons").then(n.bind(null,"91c9"))},s={components:{uniIcons:e},data:function(){return{show:!0,isShowMore:!0,direction:"column",active:0,activeColor:"#FABE3F",list0:[],list1:[],list2:[{title:"交易完成",desc:"2018-11-14"},{title:"买家签收",desc:"2018-11-13"},{title:"卖家发货",desc:"2018-11-12"},{title:"买家下单",desc:"2018-11-11"}]}},onShow:function(){this.init()},methods:{init:function(){this.list2;this.list0=this.list2.slice(0,2),this.list1=this.list2.slice(2,4)},change:function(){this.active<this.list1.length-1?this.active+=1:this.active=0},lookMore:function(){this.list0=this.list0.concat(this.list1),this.isShowMore=!1},copyNum:function(i){t.setClipboardData({data:i,success:function(){t.showToast({title:"复制成功",duration:2e3,icon:"none"})}})}}};i.default=s}).call(this,n("6e42")["default"])},"73db":function(t,i,n){"use strict";n.r(i);var e=n("aeb0"),s=n("8801");for(var c in s)"default"!==c&&function(t){n.d(i,t,function(){return s[t]})}(c);n("24c9");var o=n("2877"),u=Object(o["a"])(s["default"],e["a"],e["b"],!1,null,"4a35e4eb",null);i["default"]=u.exports},"7ee2":function(t,i,n){"use strict";(function(t){n("19df"),n("921b");e(n("66fd"));var i=e(n("73db"));function e(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,n("6e42")["createPage"])},8801:function(t,i,n){"use strict";n.r(i);var e=n("4539"),s=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(i,t,function(){return e[t]})}(c);i["default"]=s.a},"9ddc":function(t,i,n){},aeb0:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement;t._self._c},s=[];n.d(i,"a",function(){return e}),n.d(i,"b",function(){return s})}},[["7ee2","common/runtime","common/vendor"]]]);