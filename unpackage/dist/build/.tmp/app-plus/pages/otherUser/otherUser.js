(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/otherUser/otherUser"],{"26fb":function(t,e,o){"use strict";o.r(e);var n=o("ac17"),s=o("3273");for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);o("b63e");var i=o("2877"),r=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},3273:function(t,e,o){"use strict";o.r(e);var n=o("efda"),s=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},"7f57":function(t,e,o){"use strict";(function(t){o("19df"),o("921b");n(o("66fd"));var e=n(o("26fb"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},ac17:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.__map(t.releaseImgList,function(e,o){var n=t._f("ellipsis")(e.content);return{$orig:t.__get_orig(e),f0:n}}));t.$mp.data=Object.assign({},{$root:{l0:o}})},s=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return s})},b63e:function(t,e,o){"use strict";var n=o("e2ce"),s=o.n(n);s.a},e2ce:function(t,e,o){},efda:function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){return o.e("components/uni-popup/uni-popup").then(o.bind(null,"73b7"))},a=function(){return o.e("components/uni-drawer/uni-drawer").then(o.bind(null,"b5d2"))},i=function(){return o.e("components/uni-list/uni-list").then(o.bind(null,"2211"))},r=function(){return o.e("components/uni-list-item/uni-list-item").then(o.bind(null,"9294"))},c={components:{uniPopup:s,uniDrawer:a,uniList:i,uniListItem:r},data:function(){return{title:"",designe:"",showAttentionInfo:"",showRigth:!1,showLeft:!1,tabType:["我的动态","短视频"],show:"",show1:"",showDelete:"",fannum:"",attentionnum:"",likenum:"",nickName:"",head:"",feverBranch:"",remarks:"",sex:"",Tokens:"",current:0,cIndex:-1,activeIndex:-1,fabulousIndex:-1,isShowFabulous:!1,isShowCollect:!1,brandFold:!1,isShowAllContent:!0,showEdit:!1,releaseImgList:[],imageDrafts:[],content:"某臣氏骑剑活动！水雾质地 很轻薄 不沾黏！在上待几分钟会变成雾面哑光感某臣氏骑剑活动！水雾质地 很轻薄 不沾黏！在上待几分钟会变成雾面哑光感 超高级！显色很持久...不沾黏！在上待几分钟会变成雾面哑光感 超高级！显色很持久...",popupShow:!1,popupType:"",inputValue:"",outUserId:"",gcircleContentId:"",gCollectionDiscussNum:"",dataList:[],videoList:[],gcircleContentDTO:[],recommendId:"",recommendName:"",getsvdiscussId:"",isShowTopic:!0,replySay:"说点什么把",replyType:"",activeVideo:0,commentItem:[],userid:"",cover:""}},filters:{ellipsis:function(t){return t?t.length>45?t.slice(0,45)+"...":t:""}},onLoad:function(e){""!=e.userid?this.userid=e.userid:console.log(t("没有userid"," at pages\\otherUser\\otherUser.vue:289"))},onShow:function(){this.getAttention();this.url;this.getInfo(),this.initVideo(),this.init()},methods:{back:function(){n.navigateBack()},getInfo:function(){var e=this;n.request({url:this.url+"controller/usercontroller/getothergcirclecontentlist",data:{otherUserId:this.userid},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:this.Tokens},success:function(o){200==o.data.code?(console.log(t(o.data.data.dataList[0]," at pages\\otherUser\\otherUser.vue:322")),e.feverBranch=o.data.data.dataList[0].feverBranch,e.head=o.data.data.dataList[0].head,e.nickName=o.data.data.dataList[0].nickName,e.remarks=o.data.data.dataList[0].remarks,e.sex=o.data.data.dataList[0].sex,e.showAttentionInfo=o.data.data.dataList[0].attentionState,e.cover=o.data.data.dataList[0].cover,e.title=o.data.data.dataList[0].designation,1==o.data.data.dataList[0].sex?e.show=!0:2==o.data.data.dataList[0].sex&&(e.show=!1)):console.log(t("请求异常"," at pages\\otherUser\\otherUser.vue:337"))}})},getAttention:function(){var e,o=this;n.getStorage({key:"token",success:function(t){e=t.data,o.Tokens=t.data}}),n.request({url:this.url+"/controller/usercontroller/getfanattentionlikenum",data:{userId:this.userid},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:e},success:function(e){421==e.data.code&&n.navigateTo({url:"/pages/loginPhone/loginPhone"}),200==e.data.code?(o.attentionnum=e.data.data.attentionnum,o.fannum=e.data.data.fannum,o.likenum=e.data.data.likenum):console.log(t("请求异常"," at pages\\otherUser\\otherUser.vue:377"))}})},addAttention:function(){var e=this;n.request({url:this.url+"controller/usercontroller/addattentionrelationship",data:{outUserId:this.userid},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:this.Tokens},success:function(o){200==o.data.code?(console.log(t(o," at pages\\otherUser\\otherUser.vue:398")),e.getAttention(),e.getInfo()):console.log(t("请求异常"," at pages\\otherUser\\otherUser.vue:403"))}})},deleteVideo:function(t){this.activeVideo=t,this.showDelete=!this.showDelete},videoDelete:function(e){var o=this,s=this.url;n.request({url:s+"/controller/usercontroller/delshortvideo",data:{shortVideoId:e},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:o.Tokens},success:function(e){200==e.data.code?(console.log(t(e," at pages\\otherUser\\otherUser.vue:429")),o.initVideo()):console.log(t("请求异常"," at pages\\otherUser\\otherUser.vue:432"))}})},sendVideo:function(t){n.navigateTo({url:"/pages/index/index?id="+t})},changeProduct:function(t){this.current=t,this.currentType=t+1,this.show1=!this.show1;var e=1;1==t&&(e=2),this.init(e)},open:function(t){this.activeIndex=t,this.isShowAllContent=!this.isShowAllContent,this.brandFold=!this.brandFold},init:function(){var e=this,o={pageIndex:1,pageSize:1e3,otherUserId:this.userid};n.showLoading({title:"加载中...",mask:!0}),n.request({url:this.url+"controller/usercontroller/getothergcirclecontentlist",data:o,method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:this.Tokens},success:function(o){if(n.hideLoading(),200==o.data.code){var s=o.data.data.dataList;console.log(t(s," at pages\\otherUser\\otherUser.vue:479"));for(var a=0;a<s.length;a++)s[a].imgList=JSON.parse(s[a].imgList),s[a].title=JSON.parse(s[a].title);e.releaseImgList=s}}})},initVideo:function(){var e=this,o=this.url;n.showLoading({title:"加载中...",mask:!0}),n.request({url:o+"/controller/usercontroller/getshortvideobyuserid",data:{pageSize:100},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:e.Tokens},success:function(o){if(n.hideLoading(),200==o.data.code){for(var s=0;s<o.data.data.dataList[0].length;s++)o.data.data.dataList[0][s].videoUrl=o.data.data.dataList[0][s].videoUrl.replace("MP4","jpg"),o.data.data.dataList[0][s].videoUrl=o.data.data.dataList[0][s].videoUrl.replace("mp4","jpg");e.videoList=o.data.data.dataList[0]}else console.log(t("请求异常"," at pages\\otherUser\\otherUser.vue:521"))}})},editRelease:function(t,e){this.$store.commit("saveImage",t.imgList);var o={editId:e,title:t.title,content:t.content,type:"user"};this.$store.commit("saveDrafts",o),this.$store.commit("updateType",t.title),n.navigateTo({url:"/pages/releaseImage/release-image/release-image"}),this.showEdit=!this.showEdit},deleteRelease:function(t){var e=this;n.request({url:this.url+"/controller/usercontroller/delgcirclecontent",data:{circlecontentId:t},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:this.Tokens},success:function(t){200==t.data.code&&(n.showToast({title:"删除成功",duration:500}),e.showEdit=!e.showEdit,e.init())}})},collect:function(t,e,o){var s=this;n.request({url:this.url+"controller/usercontroller/addusercollection",method:"post",data:{collectionContentId:e,type:"1"},header:{"content-type":"application/x-www-form-urlencoded",token:this.Tokens,port:"app"},success:function(e){if(200==e.data.code){if(s.init(),s.activeIndex=t,1==o)return void(s.isShowCollect=!1);s.isShowCollect=!s.isShowCollect}else n.showToast({icon:"none",title:e.data.message}),n.hideToast()}})},fabulous:function(t,e,o){var s=this;n.request({url:this.url+"controller/usercontroller/addgcirclecontentlike",method:"post",data:{gcircleContentId:e},header:{"content-type":"application/x-www-form-urlencoded",token:this.Tokens,port:"app"},success:function(e){if(200==e.data.code){if(s.init(),s.fabulousIndex=t,1==o)return void(s.isShowFabulous=!1);s.isShowFabulous=!s.isShowFabulous}else n.showToast({icon:"none",title:e.data.message}),n.hideToast()}})},goTopic:function(t){var e=JSON.parse(t).topicId;n.navigateTo({url:"/pages/topicDetails/topicDetails?id="+e})},commentsFabulous:function(t,e,o){var s=this;n.request({url:this.url+"controller/usercontroller/adddiscusslike",method:"post",data:{discussId:e,type:"1"},header:{"content-type":"application/x-www-form-urlencoded",token:this.Tokens,port:"app"},success:function(e){if(200==e.data.code){if(s.activeIndex=t,s.comments(s.getsvdiscussId),1==o)return void(s.isCommentsFabulous=!1);s.isCommentsFabulous=!s.isCommentsFabulous}else n.showToast({icon:"none",title:e.data.message}),n.hideToast()}})},comments:function(t){var e=this,o={gcircleContentId:t,pageIndex:1,pageSize:1e3};n.request({url:this.url+"controller/usercontroller/getgcdiscusslist",data:o,method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:this.Tokens},success:function(t){200==t.data.code?e.commentItem=t.data.data.dataList[0].listFu:(n.showToast({icon:"none",title:t.data.message}),n.hideToast())}})},testreply:function(t,e){this.recommendId=t,this.recommendName=e,this.replySay="回复@"+e+" :"},recordName:function(e){var o=this,s=this;this.inputValue=e.detail.value,console.log(t(e.detail.value," at pages\\otherUser\\otherUser.vue:683"));var a=this.url;""!=this.recommendId?n.request({url:a+"controller/usercontroller/addanswergcirclecontentdiscuss",data:{outUserId:s.outUserId,id:s.recommendId,outUserName:s.recommendName,gcircleContentDiscuss:e.detail.value},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:s.Tokens},success:function(e){o.init(),200==e.data.code?(n.showToast({title:"已发送",duration:1e3}),o.inputValue="说点什么吧...",o.cancelPopup("comments"),o.init()):console.log(t("请求异常"," at pages\\otherUser\\otherUser.vue:711"))}}):n.request({url:a+"controller/usercontroller/addgcirclecontentdiscuss",data:{outUserId:s.outUserId,gcircleContentId:s.gcircleContentId,outUserName:s.nickName,gcircleContentDiscuss:e.detail.value},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:s.Tokens},success:function(e){o.init(),200==e.data.code?(n.showToast({title:"已发送",duration:1e3}),o.inputValue=" ",o.cancelPopup("comments")):console.log(t("请求异常"," at pages\\otherUser\\otherUser.vue:741"))}})},reply:function(t){n.navigateTo({url:"/pages/ganswer/ganswer?Id="+t})},deleteComment:function(e){var o=this;n.request({url:this.url+"controller/usercontroller/delgcirclecontentdiscuss",data:{gcircleContentDiscussId:e},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:this.Tokens},success:function(e){o.init(),200==e.data.code?(n.showToast({title:"删除成功",duration:500}),o.comments(o.getsvdiscussId)):console.log(t("请求异常"," at pages\\otherUser\\otherUser.vue:775"))}})},replyComments:function(t,e,o){this.replySay="回复@"+o+" :",this.recommendId=e,this.outUserId=t,this.recommendName=o},previewImage:function(t,e){this.$store.commit("saveImage",e);var o=t+1;n.navigateTo({url:"/pages/previewImage/previewImage?current="+t+"&indexImg="+o})},togglePopup:function(t,e,o,n,s,a){switch(this.getsvdiscussId=n,this.outUserId=o,this.gcircleContentId=n,this.gCollectionDiscussNum=a,this.nickName=s,t){case"top":this.content="顶部弹出 popup";break;case"bottom":this.content="底部弹出 popup";break;case"center":this.content="居中弹出 popup";break}this.popupType=t,"tip"===e?this.popupShow=!0:this.$refs[e].open(),this.comments(n)},cancelPopup:function(t){this.$refs[t].close()},popupChange:function(e){console.log(t(e," at pages\\otherUser\\otherUser.vue:829")),1==e.show?n.hideTabBar():n.showTabBar()},goPockets:function(){n.navigateTo({url:"/pages/wallet/wallet"})},goHot:function(){n.navigateTo({url:"/pages/personal/hot-points/hot-points"})},goList:function(){},goDrafts:function(){n.navigateTo({url:"/pages/drafts/drafts"})},goRecommend:function(){},goAccount:function(){n.navigateTo({url:"/pages/account/account"})},goRanked:function(){},goIdentify:function(){n.navigateTo({url:"/pages/ID-card/ID-card"})},goSetting:function(){n.navigateTo({url:"/pages/setting/setting"})},showDrawer:function(t){"left"===t?this.showLeft=!0:this.showRigth=!0},hide:function(){this.showLeft=!1,this.showRigth=!1},closeDrawer:function(t){"left"===t?this.showLeft=!1:this.showRigth=!1}},onNavigationBarButtonTap:function(t){this.showRigth=!this.showRigth},onBackPress:function(){if(this.showRigth||this.showLeft)return this.hide(),!0}};e.default=c}).call(this,o("0de9")["default"],o("6e42")["default"])}},[["7f57","common/runtime","common/vendor"]]]);