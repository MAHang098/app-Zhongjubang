(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-command/shop-command"],{"08dd":function(t,a,o){"use strict";(function(t,o){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{tabType:["首页","商品"],current:0,isShow:!0,style:1,tabType2:["综合","价格","销量","评分"],num:1,goodsList:[],priceUp:!0,type:"",goodsStyle:"",showPrice:1,id:"",shopLogo:"",shopName:"",fansnum:"",state:0,spare1:""}},onLoad:function(t){t.id&&(this.id=t.id),this.initInfoshop(t.id),this.type=1,this.style=1,this.init(1)},filters:{ellipsis:function(t){return t?t.length>60?t.slice(0,60)+"...":t:""}},methods:{goBack:function(){t.navigateBack({delta:1})},goSearch:function(){t.navigateTo({url:"/pages/G-circle/search-content/search-content"})},goDetails:function(a){t.navigateTo({url:"/pages/shopping-mall/detail/detail?id="+a})},addCollect:function(){var a,e=this.url,n=this;t.getStorage({key:"token",success:function(t){a=t.data}}),t.request({url:e+"controller/usercontroller/addusercollection",data:{type:4,collectionContentId:n.id},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:a},success:function(a){421==a.data.code&&t.navigateTo({url:"/pages/loginPhone/loginPhone"}),200==a.data.code&&(console.log(o(a," at pages\\shop-command\\shop-command.vue:147")),n.initInfoshop(n.id))}})},initInfoshop:function(a){var e,n=this.url,s=this;t.getStorage({key:"token",success:function(t){e=t.data}}),t.request({url:n+"controller/shopcontroller/getshops",data:{shopId:a},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:e},success:function(a){421==a.data.code&&t.navigateTo({url:"/pages/loginPhone/loginPhone"}),200==a.data.code&&(console.log(o(a," at pages\\shop-command\\shop-command.vue:184")),s.shopLogo=a.data.data.shopLogo,s.fansnum=a.data.data.num,s.shopName=a.data.data.shopName,s.state=a.data.data.state,s.spare1=a.data.data.spare1)}})},init:function(a){var e=this;t.request({url:this.url+"controller/shopcontroller/getgoodslistbystyle",data:{state:a,goodsStyleId:e.style,goodsTypeId:e.type,pageIndex:1,pageSize:1e3},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:""},success:function(t){if("200"==t.data.code){console.log(o(t," at pages\\shop-command\\shop-command.vue:211")),console.log(o(t.data.data.dataList," at pages\\shop-command\\shop-command.vue:212")),console.log(o(t.data.data.dataList[0]," at pages\\shop-command\\shop-command.vue:213"));for(var a=0;a<t.data.data.dataList.length;a++)t.data.data.dataList[a].topImgList=JSON.parse(t.data.data.dataList[a].topImgList);e.goodsList=t.data.data.dataList}}})},changeProduct:function(t){this.current=t,console.log(o(t," at pages\\shop-command\\shop-command.vue:225")),this.isShow=!this.isShow},changeProduct2:function(t){var a=this;this.current=t,this.num=t+1;var e=t+1;2==e&&(a.priceUp?(a.num=2,a.showPrice=2,a.priceUp=!1):(a.num=3,a.showPrice=3,a.priceUp=!0)),3==e&&(this.num=4),4==e&&(this.num=5),this.init(this.num),console.log(o(this.num," at pages\\shop-command\\shop-command.vue:252"))}}};a.default=e}).call(this,o("6e42")["default"],o("0de9")["default"])},"23ae":function(t,a,o){"use strict";o.r(a);var e=o("454e"),n=o("6bb8");for(var s in n)"default"!==s&&function(t){o.d(a,t,function(){return n[t]})}(s);o("e099");var i=o("2877"),d=Object(i["a"])(n["default"],e["a"],e["b"],!1,null,null,null);a["default"]=d.exports},"454e":function(t,a,o){"use strict";var e=function(){var t=this,a=t.$createElement,o=(t._self._c,t._f("ellipsis")(t.spare1));t.$mp.data=Object.assign({},{$root:{f0:o}})},n=[];o.d(a,"a",function(){return e}),o.d(a,"b",function(){return n})},"6bb8":function(t,a,o){"use strict";o.r(a);var e=o("08dd"),n=o.n(e);for(var s in e)"default"!==s&&function(t){o.d(a,t,function(){return e[t]})}(s);a["default"]=n.a},"8d52":function(t,a,o){"use strict";(function(t){o("19df"),o("921b");e(o("66fd"));var a=e(o("23ae"));function e(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,o("6e42")["createPage"])},dadd:function(t,a,o){},e099:function(t,a,o){"use strict";var e=o("dadd"),n=o.n(e);n.a}},[["8d52","common/runtime","common/vendor"]]]);