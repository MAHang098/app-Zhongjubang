<template>
	<view id="releaseDetials">
		<view class="top">
			<view class="release-video">
				<image class="back" src="http://www.zhongjubang.com/api/upload/static/img/back.png" mode="" @click.stop="cacelPage"/>
				<text class="title">{{indexImg}}/{{imageLength}}</text>
				<!-- <view class="header-user" v-else>
					<image :src="dataItem.head" mode="" class="avatar"></image>
					<view class="name">{{dataItem.nickName}}</view>
					<image v-show="dataItem.state == 0 " :src="dataItem.attentionState == 0 ? 'http://www.zhongjubang.com/api/upload/static/follow.png' : dataItem.attentionState == 2 ? 'http://www.zhongjubang.com/api/upload/static/mutual-follow.png' : 'http://www.zhongjubang.com/api/upload/static/follow-checked.png'" mode="" class="follow"  @click.stop="focus(dataItem.userId, dataItem.attentionState)"></image>
				</view> -->
			</view>
			
			<swiper class="swiper"  :autoplay="false" :interval="2000" :duration="500" :circular="true" :current="current" @change.stop="changeImage">
				<swiper-item v-for="(item, index ) in dataItem.imgList" :key="index" >
					<view class="swiper-item">
						<image :src="item.fileUrl" mode="aspectFit"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="user" v-show="!scrollFlag" @tap="goOtheruser(dataItem.userId)">
				<image :src="dataItem.head" mode="" class="avatar"></image>
				<view>
					<view class="name">{{dataItem.nickName}}
						<image v-if="dataItem.designation == '设计达人'" src="../../static/img/title/design-people.png" mode=""></image>
						<image v-if="dataItem.designation == '人气网红'" src="../../static/img/title/red-hot.png" mode=""></image>
						<image v-if="dataItem.designation == '居圈达人'" src="../../static/img/title/circle-people.png" mode=""></image>
						<image v-if="dataItem.designation == '金牌业主'" src="../../static/img/title/gold-owner.png" mode=""></image>
					</view>
					<view class="time">发布时间：{{dataItem.createTime}}</view>
				</view>
				<image v-show="dataItem.state == 0 " :src="dataItem.attentionState == 0 ? 'http://www.zhongjubang.com/api/upload/static/follow.png' : dataItem.attentionState == 2 ? 'http://www.zhongjubang.com/api/upload/static/mutual-follow.png' : 'http://www.zhongjubang.com/api/upload/static/follow-checked.png'" mode="" class="follow"  @click.stop="focus(dataItem.userId, dataItem.attentionState)"></image>
			</view>
			<view class="content" :style="{marginTop: scrollFlag ? '10px' : '0'}">
				<view v-if="!isShowAllContent" class="text">{{dataItem.content }}</view>
				<view v-else class="text">{{dataItem.content | ellipsis}}</view>
				<view class="anCotent" v-if="contentLength > 45 " @click="open()">{{ brandFold  ? '收起' : '展开'}}<image :class="!brandFold ? '' : 'inn'" src="http://www.zhongjubang.com/api/upload/static/drafts/arrow-bottom.png" mode=""></image></view>
			</view>
			<view class="release-image_topic" v-if="titleItem.topic != '' ">
				<view class="left"  @click.stop="goTopic(titleItem)">
					<image src="http://www.zhongjubang.com/api/upload/static/topic/topic.png" mode=""></image>
					<view>{{titleItem.topic}}</view>
				</view>
				<view class="right"></view>
			</view>
		</view> 
		
		<view id="interval"></view>
		
		<!-- 评论 start -->
		<view class="all-comments" id="all-comments">
			<text>全部评论</text>
			<view class="comments-input">
				<image :src="dataItem.head" mode=""></image>
				<view class="comments-text">
					<image src="http://www.zhongjubang.com/api/upload/static/img/releaseImage-details/recommend.png" mode=""></image>
					<input type="text" :value="commentsContent" placeholder="留下你的评论..." @click.stop="togglePopup('bottom', 'popup')" maxlength="200" :disabled="true"/>
					<!-- <input class="uni-input" confirm-type="search" placeholder="键盘右下角按钮显示为搜索" /> -->
				</view>
			</view>
		
			<view class="comments-detail" v-for="(item, index) in dataItem.listFu" :key="index" >
				<view class="comments-user" @click.stop="togglePopup('bottom', 'popup', item.nick_name, item.userId, item.id)">
					<image :src="item.head" mode=""></image>
					<view>
						<text class="comments-name">{{item.nick_name}}</text>
						<text class="date">{{item.createTime}}</text>
					</view>
					<view class="fabulous"  @click.stop="commentsFabulous(item.id)">
						{{item.likenum}}
						<image :src=" item.state == 0 ? 'http://www.zhongjubang.com/api/upload/static/img/user/good.png' : 'http://www.zhongjubang.com/api/upload/static/topic/fabulous-select.png' " mode=""></image>
					</view>
				</view>
				<view class="comments-content">
					<text @click.stop="replyComment(item.id, item.nick_name)">{{item.gcircle_content_discuss}}</text>
					<view v-if="item.zilist.length == 0" ></view>
					<view v-else class="reply-comments" >
						<view  v-for="(z, i) in item.zilist" :key="i" >
							<!-- <text @click.stop="deleteComment(rows.id)">{{rows.nick_name}}：{{rows.gcircle_content_discuss}}</text> -->
							<text @click.stop="togglePopup('bottom', 'popup', z.ziNickName, z.ziId, z.id)">{{z.ziNickName+'回复'+z.outUserName}}：{{z.gcircle_content_discuss}}</text>
						</view>
						<text class="all-replay" v-if="item.sonCount > 2" @tap="reply(item.id)">共{{item.sonCount}}条回复 ></text>
					</view>
					<text class="parting-line"></text>
				</view>
			</view>
			<!-- </view> -->
			<!-- <view class="look-all"  @click.stop="togglePopup('bottom', 'comments')">查看全部评论</view> -->
			
		</view>
		<!-- 评论 end -->
		
		
		
		<view class="operate-bottom">
			<view class="operate-bottom_share"><image src="http://www.zhongjubang.com/api/upload/static/img/user/share.png" mode=""></image></view>
			<view class="operate-bottom_number">
				<view class="number-message" @click.stop="togglePopup('bottom', 'popup')">
					<image src="http://www.zhongjubang.com/api/upload/static/img/user/message.png" mode=""></image>
					<text>{{dataItem.discussNum}}</text>
				</view>
				<view class="collect">
					<image  @click.stop="collect(detailId)" :src="dataItem.collectionState == 0 ? 'http://www.zhongjubang.com/api/upload/static/img/user/star.png' : 'http://www.zhongjubang.com/api/upload/static/topic/collect-select.png' " mode=""></image>
					<text>{{dataItem.collectionNum}}</text>
				</view>
				<view class="fabulous"  @click.stop="fabulous(detailId)">
					<image :src="dataItem.gcircleContentLikeState == 0 ? 'http://www.zhongjubang.com/api/upload/static/img/user/good.png' : 'http://www.zhongjubang.com/api/upload/static/topic/fabulous-select.png'" mode=""></image>
					<text>{{dataItem.gclLikeNum}}</text>
				</view>
			</view>
		</view>
		
		<uni-popup ref="popup" :type="popupType" @change="popupChange" :show="show">
			<input type="text" :value="discussInput" :placeholder="placeholder" id="comment-input" :focus="inputFocus" maxlength="140" @input="relpyContent"/>
			<view class="send" @click="sendinputComments">发送</view>
		</uni-popup>
    </view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components:{ uniPopup},
	    data() {
	        return {
	            detailId: '',
				current: 0,
				indexImg: 1,
				brandFold: false,
				isShowAllContent: true,
				popupType: '',
				dataItem: [],
				imageLength: 0,
				contentLength: 0,
				titleItem: {},
				commentsContent: '',
				token: '',
				scrollFlag: false,
				placeholder: '请输入',
				discussInput: '',
				inputFocus: false,
				show: false,
				userName: '',
				userId: '',
				commentsId: '',
				commentType: null
	        }
	    },
		// 监听页面滚动
		onPageScroll(e) {
			 let _this=this;
			// if(e.scrollTop > 300) {
			// 	_this.scrollFlag = true
			// } else {
			// 	_this.scrollFlag = false
			// }
		},
		
		onLoad(option) {
			this.detailId = option.id;
			// this.detailId = '54'
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 30) {
				return value.slice(0,30) + '...'
			  }
			  return value
			}
		},
		onShow() {
			uni.getStorage({
				key:"token",
				success:((res) => {
				this.token = res.data;
			  })
			});
			this.init();
		},
		// 监听页面卸载
		onUnload: function() {
			let _this = this;
			_this.isRefresh();
		},
		// // 监听安卓物理返回键
		onBackPress(e) {
			let _this = this;
			_this.isRefresh();
		}, 
	    methods: {
			back(){
				uni.navigateBack()
			},
			init() {
				let parmas = {
					pageSize: 100,
					pageIndex: 1,
					gcircleContentId: this.detailId
				}
				uni.showLoading({
					title: '加载中'
				})
				uni.request({
				    url: this.url + 'controller/usercontroller/getgcdiscusslist',
				    method: 'post',
				    data: parmas,
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:((res) => {
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
				        if(res.data.code == 200) {
							let data = res.data.data.dataList[0];
							data.imgList = JSON.parse(data.imgList);
							this.imageLength = data.imgList.length;
							this.contentLength = data.content.length;
							this.titleItem = JSON.parse(data.title);
							// console.log(this.titleItem)
							this.dataItem = data;
							uni.hideLoading()
				        } 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
				    }),
					fail:((res) => {
						uni.showToast({
							title: '网络异常'
						})
					})
				});
			},
			// 关注
			focus(id, state) {
			    uni.request({
			        url: this.url + 'controller/usercontroller/addattentionrelationship',
			        method: 'post',
			        data: {outUserId: id},
			        header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
			        success:(res) => {
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
			            if(res.data.code == 200) {
			                this.init();
			            } 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
			        }
			    });
			},
			// 收藏
			collect(id) {
			    uni.request({
			        url: this.url + 'controller/usercontroller/addusercollection',
			        method: 'post',
			        data: {collectionContentId: id, type: '1'},
			        header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
			        success:(res) => {
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
			            if(res.data.code == 200) {
							this.init();
			            } 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
			        }
			    });
			},
			// 点赞
			fabulous(id) {
			    uni.request({
			        url: this.url + 'controller/usercontroller/addgcirclecontentlike',
			        method: 'post',
			        data: {gcircleContentId: id},
			        header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
			        success:((res) => {
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
			            if(res.data.code == 200) {
			                this.init();
			            } 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
			        })
			    });
			},
			// 评论点赞
			commentsFabulous(id) {
				uni.request({
					url: this.url + 'controller/usercontroller/adddiscusslike',
					method: 'post',
					data: {discussId: id, type: '1'},
					header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
					success:(res) => {
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						if(res.data.code == 200) {
							this.init()
							
						} 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
					}
				});
			},
			
			// 回复评论
			replyComment(id, name) {
				// console.log(id, name)
				
				
			},
			// 滑动图片
			changeImage(e) {
				let index = e.detail.current;
				this.indexImg = index + 1;
			},
			open(){
				this.brandFold = !this.brandFold;
				this.isShowAllContent = !this.isShowAllContent;
			},
			// 弹出层弹出的方式  i:当前标签的下标, name: 当前标签的name
			togglePopup(type, open, name, userId, id) {
				// if(this.userName == name) {
				// 	return;
				// }
				// console.log( name, userId, id)
				if(!name) {
					this.placeholder = '说点什么吧';
					this.commentType = 0;
				} else {
					this.placeholder = '回复@' + name;
					this.commentType = 1;
				}
				this.userName = name;
				this.userId = userId;
				this.commentsId = id;
				this.popupType = type;
				// console.log(name,userId, id )
				
				if (open === 'tip') {
					this.popupShow = true
				} else {
					this.$refs[open].open()
				}
				
			},
			// 取消弹出层
			cancelPopup(type) {
				this.$refs[type].close();
			},
			// 评论内容
			relpyContent(e) {
				this.discussInput = e.detail.value;
			},
			// 显示和隐藏tabbar
			popupChange(e) {
				if(e.show == true) {
					this.inputFocus = true;
				} else {
					this.inputFocus = false;
				}
			},
			// 发布评论
			sendComments() {
				// console.log(this.discussInput);
				// if(this.discussInput == '') {
				// 	console.log(22)
				// 	return;
				// }
				// console.log(33)
				let parmas = {
					outUserId: this.dataItem.userId,
					gcircleContentId: this.detailId,
					outUserName: this.dataItem.nickName,
					gcircleContentDiscuss: this.discussInput
				}
				uni.request({
					url: this.url + 'controller/usercontroller/addgcirclecontentdiscuss',
					method: 'post',
					data: parmas,
					header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
					success:(res) => {
						if(res.data.code == 200) {
							
							this.discussInput = '';
							this.cancelPopup('popup')
							uni.showToast({
								title: '发送成功',
								duration: 500
							})
							this.init()
						} 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
					},
					fail:((res) => {
						console.log('网络异常')
					})
				});
			},
			// 回复评论评论
			sendinputComments() {
				// console.log(this.commentType)
				if(this.commentType == 0) {
					this.sendComments();
					return;
				}
				let params = {
					outUserId: this.userId, 
					id: this.commentsId, 
					outUserName: this.userName,
					gcircleContentDiscuss: this.discussInput
				}
				uni.request({
					url: this.url + "/controller/usercontroller/addanswergcirclecontentdiscuss",
					method: 'POST',
					data: params,
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						// console.log(res);
						if(res.data.code == 200) {
							this.discussInput = '';
							this.cancelPopup('popup')
							uni.showToast({
								title: '发送成功',
								duration: 2000
							})
							this.init();
						} else {
							this.discussInput = '';
							this.cancelPopup('popup')
							uni.showToast({
								title: res.data.message,
								duration: 2000,
								icon: 'none'
							})
							// this.init();
						}
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
					})
				})
			},
			// 评论的所有详情
			reply(id){
				uni.navigateTo({
					url: "/pages/ganswer/ganswer?Id=" + id
				})
			},
			// 点击话题跳转到话题详情
			goTopic(obj) {
				let id = obj.topicId;
				uni.navigateTo({
					url: '/pages/topicDetails/topicDetails?id=' + id
				})
			},
			// 返回上一页
			cacelPage() {
				this.isRefresh();
				uni.navigateBack({
					delta:1
				})
			},
			// 跳转到用户详情
			goOtheruser(id){
				uni.navigateTo({
					url: '/pages/otherUser/otherUser?userid=' + id
				})
			},
			isRefresh() {
				let pages=getCurrentPages(), prevPage=null;
				if(pages.length>1){
					prevPage=pages[pages.length-2];
				}
			   	if(prevPage){
			       	// #ifdef H5
						prevPage.is_refresh=false;
					// #endif
					// #ifdef APP-PLUS || MP-WEIXIN
						prevPage.setData({
							is_refresh : false
						})
					// #endif
			   	}
					
			},
		}
	}
</script>
	
<style scoped>
	@import '../../static/css/comments.css'; /*引入评论弹窗的样式*/
	page, #releaseDetials {
		/*  */
		background: #fff;
		width: 100%;
		height: 100%;
	}
	.top{
		width:100%;
		height:auto;
		background: #FFFFFF;
		box-shadow:0px 0px 9rpx 0px rgba(93,93,93,0.08);
		padding-bottom: 36rpx;
	}
    .release-video{
        position: fixed;
        width:100%;
        height:150rpx;
        background:rgba(255,255,255,1);
		border-bottom: 2rpx solid rgba(226,226,226,1);
		top: 0;
		z-index: 1;
		box-sizing: border-box;
		padding: 0 30rpx;
		padding-top: 30rpx;
    }
    .back{
       float: left;
        width:54rpx;
        height:54rpx;
		margin-top: 5%;
    }
    .back image{
        width:54rpx;
        height:54rpx;
    }
	.title{
		display: block;
		font-size:36rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		width: 92%;
		line-height: 128rpx;
		text-align: center;
		float: right;
	}
	.header-user {
		margin-top: 3%;
		overflow: hidden;
		/* width: 50%; */
	}
	.header-user .avatar {
		float: left;
	}
	.header-user .name {
		float: left;
		margin-top: 3%;
	}
	/* 轮播图 start */
	.swiper-item, .swiper {
		height: 692rpx;
	}
	.swiper  {
		margin-top: 150rpx;
	}
	.swiper-item image {
		width: 100%;
		height: 100%;
		display: block;
	}
	/* 用户信息 start */
	.user {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 30rpx 40rpx ;
		overflow: hidden;
		position: relative;
	}
	.avatar {
		width: 80rpx;
		height: 80rpx;
		display: block;
		float: left;
		border: 1px solid #E2E2E2;
		border-radius: 50%;
		margin-right: 10px;
	}
	.user view {
		float: left;
	}
	.name {
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		margin: 8rpx 0;
		height: 28rpx;
	}
	.name image {
		width: 50px;
		height: 20px;
		/* border-radius: 50%; */
		display: inline-block;
		margin-right: 10px;
		position: absolute;
		left: 5%;
		bottom: 7px;
	}
	.time {
		font-size:20rpx;
		font-family:PingFang SC;
		color:rgba(102,102,102,1);
		clear: both;
		margin-top: 7px;
	}
	.follow {
		float: right;
		height: 48rpx;
		width: 106rpx;
		display: block;
		margin-top: 3%;
	}
	/* 详情 start */
	.content {
		width: 100%;
		box-sizing: border-box;
		padding: 0 40rpx;
		/* padding-top: 25rpx; */
		overflow: hidden;
		/* position: relative; */
	}
	.content view {
		display: inline;
	}
	 .text {
		width: 100%;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		/* float: left; */
		position: relative;
	}
	.anCotent {
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(90,124,171,1);
		line-height:33rpx;
		margin-left: 20rpx;
	}
	.anCotent image {
		width: 26rpx;
		height: 19rpx;
		margin-bottom: -1rpx;
	}
	/* 话题 start */
	.release-image_topic {
		margin-top: 10rpx;
		box-sizing: border-box;
		padding: 0 40rpx;
		font-size: 22rpx;
		font-weight: 500;
		display: flex;
		justify-content: space-between;
	}
	.release-image_topic .left {
		padding-right: 20rpx;
		height: 50rpx;
		line-height: 50rpx;
		color: #F9B72C;
		background: rgba(249,183,44, .2);
		border-radius: 30rpx;
		display: flex;
		justify-content: flex-start;
		text-align: center;
	}
	.release-image_topic .left image {
		width: 25rpx;
		height: 25rpx;
		display: block;
		margin-top: 12rpx;
		margin-left: 22rpx;
		margin-right: 6rpx;
	}
	/* 评论 start */
	.all-comments {
		width: 100%;
		/* height: 100%; */
		box-sizing: border-box;
		padding: 0 40rpx;
		background: #FFFFFF;
		margin-top: 10px;
		margin-bottom: 65px;
	}
	.all-comments>text {
		font-size:26rpx;
		height: 90rpx;
		line-height: 90rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	.comments-input {
		display: flex;
		justify-content: flex-start;
		margin-bottom: 15px;
	}
	.comments-input>image {
		width: 72rpx;
		height: 70rpx;
		display: inline-block;
		border: 1px solid #E2E2E2;
		border-radius: 50%;
		margin-right: 8px;
	}
	.comments-text {
		width: 100%;
		height: 70rpx;
		line-height: 70rpx;
		position: relative;
		background: #F0F0F0;
		border-radius: 30px;
		
	}
	.comments-text image {
		position: absolute;
		width: 24rpx;
		height: 24rpx;
		display: block;
		left: 3%;
		top: 35%;
	}
	.comments-text input {
		height: 100%;
		padding-left: 30px;
		font-size: 24rpx;
	}
	.look-all {
		height: 80rpx;
		line-height: 60rpx;
		text-align: center;
		font-size:28rpx;
		font-family:PingFang SC;
		color:rgba(102,102,102,1);
	}
	
	/* 操作按钮 start */
	.operate-bottom {
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #FFFFFF;
		box-sizing: border-box;
		padding: 0 40rpx;
		position: fixed;
		z-index: 1;
		bottom: 0;
		border-top: 1px solid #E2E2E2;
	}
	.operate-bottom_share, .number-message, .collect, .fabulous {
		display: flex;
		align-items: center;
		height: 100%;
	}
	.operate-bottom_share image {
		width: 33rpx;
		height: 31rpx;
		display: block;
	}
	.fabulous image {
		margin-bottom: -4rpx;
	}
	.operate-bottom_number {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.operate-bottom_number view {
		margin-left: 40rpx;
	}
	
	.collect image, .fabulous image, .comments-user .fabulous image,.number-message image  {
		width: 32rpx;
		height: 31rpx;
		display: inlin-block;
	}
	.relese-image_detail .select {
		margin-bottom: 1px !important;
	}
	.operate-bottom_number text {
		color: #999999;
		font-size: 26rpx;
		font-weight: 500;
		margin-left: 4rpx;
	}
	#comment-input {
		border: 1px solid #e2e2e2;
		border-radius: 20px;
		height: 32px;
		font-size: 28rpx;
		float: left;
		width: 80%;
		padding-left: 15px;
	}
	.send {
		float: right;
		width: 100rpx;
		height: 32px;
		line-height: 32px;
		color: #333333;
		text-align: center;
	}
	/* 修改评论样式 */
	.reply-comments text {
		overflow: hidden;
		height: auto;
		word-break: break-all;
		text-overflow: -o-ellipsis-lastline;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.date {
		display: block;
	}
	#interval {
		width: 100%;
		height: 10px;
		background:rgba(245,245,245,1);
	}
	.inn {
		background: #FFFFFF;
		transform: rotateX(180deg);
	}
</style>
