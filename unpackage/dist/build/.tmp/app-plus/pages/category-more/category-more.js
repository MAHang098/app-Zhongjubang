(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category-more/category-more"],{"273c":function(t,e,a){"use strict";var o=a("fdec"),n=a.n(o);n.a},"2e8d":function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{tabType:["综合","价格","销量","评分"],current:0,num:1,goodsList:[],priceUp:!0,type:"",goodsStyle:"",showPrice:1,style:1}},filters:{ellipsis:function(t){return t?t.length>30?t.slice(0,30)+"...":t:""}},onLoad:function(t){t.type&&(this.type=t.type,this.style=t.style,this.init(1))},onShow:function(){},methods:{goDetails:function(e){t.navigateTo({url:"/pages/shopping-mall/detail/detail?id="+e})},changeProduct:function(t){var e=this;this.current=t,this.num=t+1;var o=t+1;2==o&&(e.priceUp?(e.num=2,e.showPrice=2,e.priceUp=!1):(e.num=3,e.showPrice=3,e.priceUp=!0)),3==o&&(this.num=4),4==o&&(this.num=5),this.init(this.num),console.log(a(this.num," at pages\\category-more\\category-more.vue:95"))},init:function(e){var o=this;t.request({url:this.url+"controller/shopcontroller/getgoodslistbystyle",data:{state:e,goodsStyleId:o.style,goodsTypeId:o.type,pageIndex:1,pageSize:1e3},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:""},success:function(t){if("200"==t.data.code){console.log(a(t," at pages\\category-more\\category-more.vue:112")),console.log(a(t.data.data.dataList," at pages\\category-more\\category-more.vue:113")),console.log(a(t.data.data.dataList[0].goodsStyle," at pages\\category-more\\category-more.vue:114")),o.goodsStyle=t.data.data.dataList[0].goodsStyle;for(var e=0;e<t.data.data.dataList.length;e++)t.data.data.dataList[e].topImgList=JSON.parse(t.data.data.dataList[e].topImgList);o.goodsList=t.data.data.dataList}}})},back:function(){t.navigateBack()}}};e.default=o}).call(this,a("6e42")["default"],a("0de9")["default"])},"39b6":function(t,e,a){"use strict";a.r(e);var o=a("2e8d"),n=a.n(o);for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);e["default"]=n.a},"3ae2":function(t,e,a){"use strict";a.r(e);var o=a("c1a9"),n=a("39b6");for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);a("273c");var r=a("2877"),s=Object(r["a"])(n["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},"5f76":function(t,e,a){"use strict";(function(t){a("19df"),a("921b");o(a("66fd"));var e=o(a("3ae2"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},c1a9:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n})},fdec:function(t,e,a){}},[["5f76","common/runtime","common/vendor"]]]);