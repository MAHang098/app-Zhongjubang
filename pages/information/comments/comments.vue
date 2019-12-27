<template>
	<view class="collection">
		<view class="collection-list" v-for="(item, index) in allData" :key="index">
			<view class="details-list">
				<view class="left">
					<view class="avatar">
						<image src="../../../static/avatar.png" mode=""></image>
					</view>
					<view class="details">
						<view class="name">{{item.msg.nickName}} <image src="http://www.zhongjubang.com/api/upload/static/fans-logo.png" mode=""></image></view>
						<view class="time">{{item.createTime}}</view>
						<view class="follow">
							{{item.msg.discuss | ellipsis}}
							<view class="reply"  @click.stop="togglePopup('bottom', 'popup', item.msg.nickName, item.userId, item.msg.state, item.msg.discussId, item.appUserMsgId)">回复</view>
						</view>
					</view>
				</view>
				<view class="right">
					<image :src="item.topImg" v-if="item.topImg" @click.stop="contentDetail(item.msg.id, item.topImg)"></image>
					<image :src="item.msg.imgList[0].fileUrl" mode="aspectFill" v-else @click.stop="contentDetail(item.msg.id, item.topImg)"></image>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" :type="popupType" @change="popupChange" :show="show">
			<input type="text" :value="discussInput" :placeholder="placeholder" id="comment-input" :focus="focus" maxlength="140" @input="relpyContent"/>
			<view class="send" @click="sendComments">发送</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {uniPopup},
		data() {
			return {
				content: '某臣氏骑剑活动！水雾质地 很轻薄 不',
				count: 0,
				type: '',
				token: '',
				allData: [],
				popupType: '',
				show: false,
				focus: false,
				discussInput: '',
				name: '', 
				userId: '', 
				state: '',
				id: '',
				placeholder: '请输入',
				userMsgId: ''
			}
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
		onLoad(option) {
			this.count = option.count;
			this.type = option.type;
			
		},
		mounted() {
			uni.getStorage({
				key:"token",
				success:((res) => {
				this.token = res.data;
			  })
			});
			this.init();
		},
		methods: {
			init() {
				if(this.count == 0) {
					this.count = 100;
				}
				uni.request({
					url: this.url + "/controller/usercontroller/getusermsg",
					method: 'POST',
					data: {pageIndex: 1,pageSize: this.count, msgType: this.type},
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						if(res.data.code == 200) {
							let data = res.data.data.dataList;
							for(let i=0; i<data.length; i++) {
								data[i].msg = JSON.parse(data[i].msg);
							}
							this.allData = data;
						}
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
					})
				})
			},
			// 评论内容
			relpyContent(e) {
				this.discussInput = e.detail.value;
			},
			// 短视频的评论
			videoUrl() {
				let params = {
					outUserId: this.userId, 
					id: this.id, 
					outUserName: this.name,
					shortVideoDiscuss: this.discussInput,
					appUserMsgId: this.userMsgId
				}
				uni.request({
					url: this.url + "/controller/usercontroller/addanswershortvideodiscuss",
					method: 'POST',
					data: params,
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						if(res.data.code == 200) {
							this.discussInput = '';
							this.cancel('popup')
							uni.showToast({
								title: '发送成功',
								duration: 500
							})
							this.init();
						} else {
							this.cancel('popup')
							uni.showToast({
								title: '当前评论已删除',
								duration: 500,
								icon: 'none'
							});
							this.init();
						}
						if(res.data.code == 407) {
							uni.showToast({
								title: '请重新登录'
								
							})
						}
					})
				})
			},
			// G圈的评论
			circleUrl() {
				let params = {
					outUserId: this.userId, 
					id: this.id, 
					outUserName: this.name,
					gcircleContentDiscuss: this.discussInput,
					appUserMsgId: this.userMsgId
				}
				uni.request({
					url: this.url + "/controller/usercontroller/addanswergcirclecontentdiscuss",
					method: 'POST',
					data: params,
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						if(res.data.code == 200) {
							if(res.data.code==421){
								uni.navigateTo({
									url: '/pages/loginPhone/loginPhone'
								})
							}
							this.discussInput = '';
							this.cancel('popup')
							uni.showToast({
								title: '发送成功',
								duration: 500
							})
							this.init();
						} else {
							this.cancel('popup')
							uni.showToast({
								title: '当前评论已删除',
								duration: 500,
								icon: 'none'
							});
							this.init();
						}
						if(res.data.code == 407) {
							uni.showToast({
								title: '请重新登录'
								
							})
						}
					})
				})
			},
			// 发送评论
			sendComments() {
				if(this.state == 1) {
					this.videoUrl();
				}  else {
					this.circleUrl();
				}
			},
			// 跳转到G圈详情
			contentDetail(id, img) {
				if(img) {
					// 跳转到视频详情
				} else {
					// 跳转到G圈
					uni.navigateTo({
						url: '/pages/releaseImage-details/releaseImage-details?id=' + id
					})
				}
			},
			// 显示弹窗  name： 回复的用户名， userId： 被评论人的ID state：状态：1（视频）  0（G圈）
			togglePopup(type, open, name, userId, state, id, msgId) {
				this.placeholder = '回复@' + name;
				this.name = name;
				this.userId = userId;
				this.state = state;
				this.id = id;
				this.userMsgId = msgId;
				this.popupType = type;
				if (open === 'tip') {
					this.show = true
				} else {
					this.$refs[open].open()
				}
			},
			// 显示和隐藏tabbar
			popupChange(e) {
				if(e.show == true) {
					this.focus = true;
				} else {
					this.focus = false;
				}
			},
			cancel(type) {
				if (type === 'tip') {
					this.show = false
					return
				}
				this.$refs[type].close()
			},
			
		}
	}
</script>

<style>
	@import '../../../static/css/information.css'; /*引入收藏点赞消息的样式*/
	.details  {
		width: 70%;
	}
	.name {
		display: flex;
	}
	.follow .reply {
		color: #F9B72C;
		font-size:24rpx;
		text-align: left;
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
	/* 底部分享 */
	view {
		font-size: 28upx;
		line-height: inherit
	}
	
	.example {
		padding: 0 30upx 30upx
	}
	
	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx 30upx 30upx 50upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid
	}
	
	.example-title__after {
		position: relative;
		color: #031e3c
	}
	
	.example-title:after {
		content: '';
		position: absolute;
		left: 30upx;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 6upx;
		height: 32upx;
		background-color: #ccc
	}
	
	.example .example-title {
		margin: 40upx 0
	}
	
	.example-body {
		padding: 30upx;
		background: #fff
	}
	
	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}
	
	.example-body {
		padding: 10upx 30upx;
	}
	
	.button {
		margin: 20upx 0;
	}
	
	/* 提示窗口 */
	.uni-tip {
		padding: 15px;
		width: 300px;
		background: #fff;
		box-sizing: border-box;
		border-radius: 10px;
	}
	
	.uni-tip-title {
		text-align: center;
		font-weight: bold;
		font-size: 16px;
		color: #333;
	}
	
	.uni-tip-content {
		padding: 15px;
		font-size: 14px;
		color: #666;
	}
	
	.uni-tip-group-button {
		margin-top: 10px;
		display: flex;
	}
	
	.uni-tip-button {
		width: 100%;
		text-align: center;
		font-size: 14px;
		color: #3b4144;
	}
	
	/* 插屏广告 */
	.uni-image {
		position: relative;
		width: 200px;
		height: 200px;
	}
	
	.uni-image .image {
		width: 100%;
		height: 100%;
	}
	
	.uni-image-close {
		position: absolute;
		right: -30px;
		top: -30px;
		z-index: 2;
	}
	
	/* 底部分享 */
	.uni-share {
		background: #fff;
	}
	
	.uni-share-title {
		line-height: 60upx;
		font-size: 24upx;
		padding: 15upx 0;
		text-align: center;
	}
	
	.uni-share-content {
		display: flex;
		flex-wrap: wrap;
		padding: 15px;
	}
	
	.uni-share-content-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 25%;
		box-sizing: border-box;
	}
	
	.uni-share-content-image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60upx;
		height: 60upx;
		overflow: hidden;
		border-radius: 10upx;
	}
	
	.uni-share-content-image .image {
		width: 100%;
		height: 100%;
	}
	
	.uni-share-content-text {
		font-size: 26upx;
		color: #333;
		padding-top: 5px;
		padding-bottom: 10px;
	}
	
	.uni-share-btn {
		height: 90upx;
		line-height: 90upx;
		border-top: 1px #f5f5f5 solid;
		text-align: center;
		color: #666;
	}
</style>
