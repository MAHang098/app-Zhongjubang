(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/releaseImage-details/releaseImage-details"],{1689:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"73b7"))},s={components:{uniPopup:a},data:function(){return{detailId:"",current:0,indexImg:1,brandFold:!1,isShowAllContent:!0,popupType:"",dataItem:[],imageLength:0,contentLength:0,titleItem:{},commentsContent:"",token:"",scrollFlag:!1,placeholder:"请输入",discussInput:"",inputFocus:!1,show:!1,userName:"",userId:"",commentsId:"",commentType:null}},onPageScroll:function(e){var t=this;e.scrollTop>300?t.scrollFlag=!0:t.scrollFlag=!1},onLoad:function(e){this.detailId=e.id},filters:{ellipsis:function(e){return e?e.length>30?e.slice(0,30)+"...":e:""}},onShow:function(){var t=this;e.getStorage({key:"token",success:function(e){t.token=e.data}}),this.init()},methods:{back:function(){e.navigateBack()},init:function(){var t=this,n={pageSize:100,pageIndex:1,gcircleContentId:this.detailId};e.request({url:this.url+"controller/usercontroller/getgcdiscusslist",method:"post",data:n,header:{"content-type":"application/x-www-form-urlencoded",token:this.token,port:"app"},success:function(n){if(421==n.data.code&&e.navigateTo({url:"/pages/loginPhone/loginPhone"}),200==n.data.code){var o=n.data.data.dataList[0];o.imgList=JSON.parse(o.imgList),t.imageLength=o.imgList.length,t.contentLength=o.content.length,t.titleItem=JSON.parse(o.title),t.dataItem=o}421==n.data.code&&e.navigateTo({url:"/pages/loginPhone/loginPhone"})}})},focus:function(t,n){var o=this;e.request({url:this.url+"controller/usercontroller/addattentionrelationship",method:"post",data:{outUserId:t},header:{"content-type":"application/x-www-form-urlencoded",token:this.token,port:"app"},success:function(t){421==t.data.code&&e.navigateTo({url:"/pages/loginPhone/loginPhone"}),200==t.data.code&&o.init(),421==t.data.code&&e.navigateTo({url:"/pages/loginPhone/loginPhone"})}})},collect:function(t){var n=this;e.request({url:this.url+"controller/usercontroller/addusercollection",method:"post",data:{collectionContentId:t,type:"1"},header:{"content-type":"application/x-www-form-urlencoded",token:this.token,port:"app"},success:function(t){421==t.data.code&&e.navigateTo({url:"/pages/loginPhone/loginPhone"}),200==t.data.code&&n.init(),421==t.data.code&&e.navigateTo({url:"/pages/loginPhone/loginPhone"})}})},fabulous:function(t){var n=this;e.request({url:this.url+"controller/usercontroller/addgcirclecontentlike",method:"post",data:{gcircleContentId:t},header:{"content-type":"application/x-www-form-urlencoded",token:this.token,port:"app"},success:function(t){421==t.data.code&&e.navigateTo({url:"/pages/loginPhone/loginPhone"}),200==t.data.code&&n.init(),421==t.data.code&&e.navigateTo({url:"/pages/loginPhone/loginPhone"})}})},commentsFabulous:function(t){var n=this;e.request({url:this.url+"controller/usercontroller/adddiscusslike",method:"post",data:{discussId:t,type:"1"},header:{"content-type":"application/x-www-form-urlencoded",token:this.token,port:"app"},success:function(t){421==t.data.code&&e.navigateTo({url:"/pages/loginPhone/loginPhone"}),200==t.data.code&&n.init(),421==t.data.code&&e.navigateTo({url:"/pages/loginPhone/loginPhone"})}})},replyComment:function(e,t){console.log(o(e,t," at pages\\releaseImage-details\\releaseImage-details.vue:316"))},changeImage:function(e){var t=e.detail.current;this.indexImg=t+1},open:function(){this.brandFold=!this.brandFold,this.isShowAllContent=!this.isShowAllContent},togglePopup:function(e,t,n,a,s){console.log(o(n,a,s," at pages\\releaseImage-details\\releaseImage-details.vue:333")),n?(this.placeholder="回复@"+n,this.commentType=1):(this.placeholder="说点什么吧",this.commentType=0),this.userName=n,this.userId=a,this.commentsId=s,this.popupType=e,"tip"===t?this.popupShow=!0:this.$refs[t].open()},cancelPopup:function(e){this.$refs[e].close()},relpyContent:function(e){this.discussInput=e.detail.value},popupChange:function(e){1==e.show?this.inputFocus=!0:this.inputFocus=!1},sendComments:function(){var t=this;if(console.log(o(this.discussInput," at pages\\releaseImage-details\\releaseImage-details.vue:370")),""!=this.discussInput){console.log(o(33," at pages\\releaseImage-details\\releaseImage-details.vue:375"));var n={outUserId:this.dataItem.userId,gcircleContentId:this.detailId,outUserName:this.dataItem.nickName,gcircleContentDiscuss:this.discussInput};console.log(o(n," at pages\\releaseImage-details\\releaseImage-details.vue:382")),e.request({url:this.url+"controller/usercontroller/addgcirclecontentdiscuss",method:"post",data:n,header:{"content-type":"application/x-www-form-urlencoded",token:this.token,port:"app"},success:function(n){200==n.data.code&&(t.discussInput="",t.cancelPopup("popup"),e.showToast({title:"发送成功",duration:500}),t.init()),421==n.data.code&&e.navigateTo({url:"/pages/loginPhone/loginPhone"})}})}else console.log(o(22," at pages\\releaseImage-details\\releaseImage-details.vue:372"))},sendinputComments:function(){var t=this;if(0!=this.commentType){var n={outUserId:this.userId,id:this.commentsId,outUserName:this.userName,gcircleContentDiscuss:this.discussInput};e.request({url:this.url+"/controller/usercontroller/addanswergcirclecontentdiscuss",method:"POST",data:n,header:{"content-type":"application/x-www-form-urlencoded",port:"app",token:this.token},success:function(n){200==n.data.code?(t.discussInput="",t.cancelPopup("popup"),e.showToast({title:"发送成功",duration:500}),t.init()):(t.discussInput="",t.cancelPopup("popup"),e.showToast({title:n.data.message,duration:500,icon:"none"}),t.init()),421==n.data.code&&e.navigateTo({url:"/pages/loginPhone/loginPhone"})}})}else this.sendComments()},reply:function(t){e.navigateTo({url:"/pages/ganswer/ganswer?Id="+t})},goTopic:function(t){e.navigateTo({url:"/pages/topicDetails/topicDetails?id="+t})},cacelPage:function(){e.navigateBack({delta:1})},goOtheruser:function(t){e.navigateTo({url:"/pages/otherUser/otherUser?userid="+t})}}};t.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},"34bd":function(e,t,n){},"3c65":function(e,t,n){"use strict";n.r(t);var o=n("aa6e"),a=n("d284");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);n("f77a");var i=n("2877"),l=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,"0933c6c8",null);t["default"]=l.exports},"66ac":function(e,t,n){"use strict";(function(e){n("19df"),n("921b");o(n("66fd"));var t=o(n("3c65"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},aa6e:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=(e._self._c,e._f("ellipsis")(e.dataItem.content));e.$mp.data=Object.assign({},{$root:{f0:n}})},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},d284:function(e,t,n){"use strict";n.r(t);var o=n("1689"),a=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);t["default"]=a.a},f77a:function(e,t,n){"use strict";var o=n("34bd"),a=n.n(o);a.a}},[["66ac","common/runtime","common/vendor"]]]);