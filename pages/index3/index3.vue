<template>
	<view class="content">
		<video class="video" autoplay="autoplay" :loop="true" :src="res.videoUrl" />

		<view class="video-info-top ">
			<view class="avatar">
				<image class="avatar-image" :src="res.head" mode="" />
			</view>
			<view class="nick-name">
				{{res.nickName}}
			</view>
			<view class="focus">
				<view class="btnFocus" @tap="toggleAttention">
					<image v-if="res.attention==0" style="width:106rpx;height:48rpx;" src="../../static/interest.png" mode=""></image>
					<image v-if="res.attention==1" style="width:106rpx;height:48rpx;" src="../../static/inte-follow.png" mode=""></image>
					<image v-if="res.attention==2" style="width:106rpx;height:48rpx;" src="../../static/mutual-follow.png" mode=""></image>
				</view>
			</view>
			<view class="clearfix">

			</view>
		</view>
		<view class="desc">
			<text v-if="showAllDesc">{{res.content}}</text>
			<text v-else>{{res.content | ellipsis}}</text>
			<view class="btnToggleDesc" v-if="res.content.length > 45 " @tap="toggleDesc">
				{{showAllDesc ? ' 收起 ' : ' 展开 '}}
			</view>
		</view>

		<view class="comment-box">
			<view class="comment-box-title">
				评论
			</view>

			<view v-if="commentList.length===0" class="nocomment-box">
				确认过眼神，你是第一个留言的人
			</view>
			<view v-else class="comment-list-box">
				<view @tap="replyComment(row.id, row.nick_name, 0)" class="comment-item" v-for="(row, index) in commentList" :key="index">
					<view class="comment-left-box">
						<view class="comment-head">
							<image :src="row.fuHead" mode="" />
						</view>
					</view>
					<view class="comment-right-box">
						<view class="comment-nickname">
							{{row.nick_name||'-'}}
						</view>
						<view class="comment-createtime">
							{{row.cratee_time}}
						</view>
						<view class="comment-content">
							<text>
								{{row.short_video_discuss}}
							</text>
						</view>
					</view>
					<view class="commment-action-box">
						<view class="good-wrapper" @tap.stop="toggleLikeComment(index, row.id)">
							<text class="good-num">{{row.likenum}}</text>
							<view class="good">
								<image :class="(activeIndex == index && isCommentsFabulous) ||  row.state == '1'? 'select' : '' " :src="(activeIndex == index && isCommentsFabulous) ||  row.state == '1' ? '../../static/img/icon/fabulous-select.png' : '../../static/img/icon/good.png'"
								 mode=""></image>
							</view>
						</view>

					</view>
					<view class="clearfix"></view>

					<view v-if="row.zilist.length>0" class="recommend-text-reply">
						<view v-for="(rows, indexs) in row.zilist" :key="indexs">
							<text class="recommend-text-reply-user" v-if="rows.nick_name==row.nick_name" @tap="testreply(row.id, row.nick_name)"
							 @touchstart.prevent="touchin(rows.id)" @touchend.prevent="cleartime">{{rows.nick_name}} :
								{{rows.short_video_discuss}}</text>
							<text class="recommend-text-reply-user" v-else @tap="testreply(rows.id, rows.nick_name,rows.inUserId)">{{rows.nick_name}}回复{{row.nick_name}}:{{rows.short_video_discuss}}</text>
						</view>
						<text v-if="row.sonCount>2" class="recommend-text-reply-count" @tap="reply(row.id, row.nick_name)">共{{row.sonCount}}条回复></text>
					</view>
					<view class="horizon2"></view>
				</view>
			</view>
		</view>


		<view class="foot-placeholder">

		</view>
		<view class="foot">
			<!-- 点赞 -->
			<view class="good-wrapper" @tap="toggleLike">
				<view class="good">
					<image src="../../static/img/icon/good.png" v-if="!res.shortVideoLike" />
					<image src="../../static/img/icon/fabulous-select.png" v-if="res.shortVideoLike" />
				</view>
				<text class="text10">{{res.shortVideoLikeNum}}</text>
			</view>

			<!-- 收藏 -->
			<view class="star-wrapper" @tap="toggleCollect">
				<view class="star">
					<image src="../../static/img/icon/star.png" v-if="!res.shortVideoCollection"
					 mode="" />
					<image src="../../static/img/icon/collect-select.png" v-if="res.shortVideoCollection"
					 mode="" />
				</view>
				<text class="text11">{{res.shortVideoCollectionNum}}</text>
			</view>

			<!-- 评论 -->
			<view class="message-wrapper" @click="openCommentsPopup">
				<view class="message">
					<image src="../../static/img/icon/message.png" mode="" />
				</view>
				<text class="text12">{{res.shortVideoDiscussNum}}</text>
			</view>

			<view class="topic-wrapper">
				<view class="topic" @click="openCommentsPopup">
					<image class="topic-image" style="width:24rpx;height:24rpx;" src="../../static/icon/message.png"
					 mode="" />
					<text class="text20">说点什么吧...</text>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import helper from "../../common/helper.js"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				id: '',
				url: "https://www.zhongjubang.com/api/",
				///////
				// videoUrl: "http://192.168.3.21/video/1-1.mp4",
				videoUrl: "http://192.168.0.102/video/1-1.mp4",
				res: {},
				commentList: [],
				showAllDesc: false,
				token: '',
				connectingServer: false
				
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getContent()
			uni.$on('afterCommentSuccess', ()=>{
				this.getCommentList()
			})
		},
		onUnload(){
			uni.$off('afterCommentSuccess')
		},
		methods: {
			getToken() {
				if (this.token === '') {
					this.token = helper.getTokenOrLogin();
				}
				return this.token
			},
			tryConnectServer() {
				if (this.connectingServer) {
					return false;
				}
				this.connectingServer = true
				return true
			},
			closeConnectingServer() {
				this.connectingServer = false
			},
			getContent() {
				// let token = this.getToken();
				uni.getStorage({
					key:"token",
					success:((res) => {
					this.token = res.data;
				  })
				});
				let id = this.id
				let url = this.url
				let self = this
				//获取短视频内容
				uni.request({
					url: self.url + "controller/usercontroller/getshortvideobyid",
					data: {
						shortVideoId: id
					},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'port': 'app',
						'token': this.token
					},
					success: (res) => {
						console.log('got video res', res);
						if (res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						this.res = res.data.data
						this.getCommentList()
					}
				})
			},
			// 打开评论subnvue，并传输数据到$store
			openCommentsPopup() {

				// todo 评论列表接口没有返回评论人的ID，暂时不处理回复评论，以后outUserId不应是必填项
				// todo 然后还要梳理评论和回复两种情况，在这里处理数据提交到$store.state.videoComment中，然后回复和评论的逻辑在subNVue/videoComments.nvue中处理
				let type = 'comment';
				if(type === 'comment'){
					this.$store.commit('videoComment/init', {
						type:'comment',
						shortVideoId: this.id,//
						outUserId: this.res.userId,//
						outUserName: this.res.nickName,//
						shortVideoDiscuss: ''//
					});
				}else{
					this.$store.commit('videoComment/init', {
						type:'reply',
						id: commentData.commentId, // 回复的那条评论id
						//appUserMsgId: //评论消息id，试下不填
						outUserId: commentData.userId,//被评论人ID
						outUserName: commentData.nickName,//被评论人的姓名
						shortVideoDiscuss: ''//评论内容
					});
				}
				
				const snvPopup = uni.getSubNVueById('videoComments');
				snvPopup.show()
			},
			// 展开详情
			toggleDesc() {
				this.showAllDesc = !this.showAllDesc;
			},
			// 关注
			toggleAttention() {
				if (!this.tryConnectServer()) return;
				let token = this.getToken()
				let id = this.id
				let url = this.url
				let self = this

				uni.request({
					url: self.url + "controller/usercontroller/addattentionrelationship",
					data: {
						outUserId: self.res.userId
					},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'port': 'app',
						'token': token
					},
					success: (res) => {
						console.log('attent res', res)
						this.getContent()
					},
					complete: () => {
						this.closeConnectingServer()
					}
				})
			},
			// 点赞 toggle 
			toggleLike() {
				if (!this.tryConnectServer()) return;
				let self = this
				let token = this.getToken()
				let url = this.url

				//添加、删除点赞
				uni.request({
					url: self.url + "controller/usercontroller/addshortvideolike",
					data: {
						shortVideoId: self.id,
					},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'port': 'app',
						'token': token
					},
					success: function(res) {
						console.log(res)
						if (res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})

						}
						if (res.data.code === '200') {
							if (self.res.shortVideoLike === 0) {
								self.res.shortVideoLike = 1
								self.res.shortVideoLikeNum++
							} else {
								self.res.shortVideoLike = 0
								self.res.shortVideoLikeNum--
							}
						} else {
							console.log("请求异常")
						}
					},
					complete: () => {
						this.closeConnectingServer()
					}
				})
			},
			// 收藏
			toggleCollect() {
				if (!this.tryConnectServer()) return;

				let token = this.getToken()
				let self = this
				let url = this.url

				uni.request({
					url: self.url + "controller/usercontroller/addusercollection",
					data: {
						type: 2,
						collectionContentId: self.id,
					},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'port': 'app',
						'token': token
					},
					success: (res) => {
						if (res.data.code == 200) {
							if (this.res.shortVideoCollection === 1) {
								this.res.shortVideoCollection = 0;
								this.res.shortVideoCollectionNum--;
							} else {
								this.res.shortVideoCollection = 1;
								this.res.shortVideoCollectionNum++;
							}
						} else {
							console.log("请求异常")
						}
					},
					complete: () => {
						this.closeConnectingServer()
					}
				})
			},
			getCommentList() {
				let id = this.id
				// let token = this.getToken();
				let self = this
				if (!this.tryConnectServer()) return;
				uni.request({
					url: self.url + "controller/videocontroller/getsvdiscusslist",
					data: {
						id: id,
						pageIndex: 1,
						pageSize: 1000
					},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'port': 'app',
						'token': this.token
					},
					success: (res) => {
						console.log('got comment list res', res)
						if (res.data.code == 200) {
							this.commentList = res.data.data.dataList
							/* uni.$emit('gotCommentList', {  
							    commentList: res.data.data.dataList,
							}); */
						} else {
							console.log('请求异常')
						}
					},
					fail(){
						console.log('请求异常.')
					},
					complete: () => {
						this.closeConnectingServer();
					}
				})
			},
			// todo 子回复跳转，未实现，具体再参考index2.nvue
			reply(id) {
				console.log(id)
				uni.navigateTo({
					url: "/pages/answer/answer?Id=" + id
				})
			},
			// todo 回复评论，未实现
			replyComment(id, name, inUserId) {
				console.log(`${id} ${name} ${inUserId}`);
				let self = this
				uni.request({
					url: self.url + "controller/usercontroller/addanswershortvideodiscuss",
					data: {
						outUserId: self.userID222,
						id: self.recommendId,
						outUserName: self.recommendName,
						shortVideoDiscuss: e.detail.value
					},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'port': 'app',
						'token': token
					},
					success: function(res) {
						console.log(res)
						if (res.data.code == 200) {
							console.log(self.recommendId)
							self.init(self.id)
							self.userID222 = ''
							self.recommendId = ''
							e.detail.value = ''
							self.inputValue = ''
							self.replySay = '说点什么吧...'
						} else {
							console.log("请求异常")
						}
					}
				})
			},
			// 评论点赞
			toggleLikeComment(index, discussId){
				let self = this
				let token = this.getToken();
				
				uni.request({
					url: self.url + "controller/usercontroller/adddiscusslike",
					method: 'post',
					data: {
						discussId: discussId,
						type: '2'
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'token': token,
						'port': 'app'
					},
					success: (res) => {
						if (res.data.code == 200) {
							if(helper.get(self, `commentList[${index}].state`) === 1){
								self.commentList[index].state = 0
								self.commentList[index].likenum --
							}else{
								self.commentList[index].state = 1
								self.commentList[index].likenum ++
							}
						} else {
							console.log('请求异常', res);
						}
					},
					fail(res){
						console.log('请求异常.', res);
					}
				});
			}
		},
		filters: {
			ellipsis(value) {
				if (!value) return ''
				if (value.length > 45) {
					return value.slice(0, 45) + '...'
				}
				return value
			}
		}
	}
</script>

<style lang="scss">
	$font_family_1: PingFang SC;

	/* page{
			height: 100%;
		} */


	.content {
		width: 750upx;
	}

	.clearfix {
		content: "";
		display: block;
		clear: both;
	}

	.video {
		width: 750rpx;
		height: 1100rpx;
	}

	.video-info-top {
		margin-top: 60rpx;
		position: relative;
	}

	.avatar {
		float: left;
		width: 80rpx;
		height: 80rpx;
		background-color: #FFFF00;
		border-radius: 50%;
		margin-left: 10px;
		overflow: hidden;

		.avatar-image {
			width: 100%;
			height: 100%;
		}
	}

	.navigate-image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}

	.nick-name {
		float: left;
		height: 80rpx;
		line-height: 80rpx;
		margin-left: 30rpx;
		font-size: 14px;
	}

	.focus {
		position: relative;
		float: right;
		height: 80rpx;
		line-height: 80rpx;
		margin-right: 30rpx;
	}

	.btnFocus {
		margin-top: 10rpx;
	}

	.desc {
		padding: 10px;
		font-size: 16px;
	}

	.btnToggleDesc {
		color: #0000FF;
		display: inline-block;
	}

	/* comment */
	.comment-box-title {
		font-weight: bold;
		font-size: 20px;
		padding: 10px;
	}

	.nocomment-box {
		font-size: 12px;
		padding-left: 10px;
		color: #999;
	}

	.comment-item {
		position: relative;
		margin-top: 10px;
	}

	.comment-left-box {
		float: left;

		.comment-head {
			width: 72rpx;
			height: 72rpx;
			padding-left: 10px;
			border-radius: 50%;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.comment-right-box {
		float: left;
		margin-left: 10px;

		.comment-nickname {
			font-size: 12px;
			font-family: $font_family_1;
			font-weight: 500;
		}

		.comment-createtime {
			font-size: 10px;
			color: rgba(102, 102, 102, 1);
		}

		.comment-content {
			font-size: 14px;
			line-height: 1.2;
		}
	}

	.commment-action-box {
		position: absolute;
		right: 10px;
		top: 10px;

		.good-wrapper {
			height: 20px;
			width: 40px;
			position: absolute;
			top: 0;
			right: 0;
		}

		.good {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(0, -50%);
			width: 20px;
			height: 20px;

			image {
				position: relative;
				width: 100%;
				height: 100%;
			}
		}

		.good-num {
			position: absolute;
			top: 50%;
			right: 50%;
			transform: translate(0, -50%);
			width: 20px;
			height: 20px;
			line-height: 20px;
			text-align: center;
			font-size: 12px;
			font-family: $font_family_1;
			font-weight: 500;
			color: rgba(153, 153, 153, 1);
		}
	}

	/* page footer */
	.foot-placeholder {
		height: 70px;
	}

	.foot {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 40px;
		background-color: #fff;
	}

	.good-wrapper {
		height: 100%;
		width: 15%;
		position: absolute;
		top: 0;
		right: 0;
	}

	.good {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(0, -50%);
		width: 40rpx;
		height: 40rpx;

		image {
			position: relative;
			width: 40rpx;
			height: 40rpx;
		}
	}

	.text10 {
		position: absolute;
		top: 50%;
		right: 50%;
		transform: translate(0, -50%);
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		font-size: 26rpx;
		font-family: $font_family_1;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}

	.star-wrapper {
		height: 100%;
		width: 15%;
		position: absolute;
		top: 0;
		right: 15%;
	}

	.star {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(0, -50%);
		width: 40rpx;
		height: 40rpx;

		image {
			position: relative;
			width: 40rpx;
			height: 40rpx;
		}
	}

	.text11 {
		position: absolute;
		top: 50%;
		right: 50%;
		transform: translate(0, -50%);
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		font-size: 26rpx;
		font-family: $font_family_1;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}

	.message-wrapper {
		height: 100%;
		width: 15%;
		position: absolute;
		top: 0;
		right: 30%;
	}

	.message {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(0, -50%);
		width: 40rpx;
		height: 40rpx;

		image {
			position: relative;
			width: 40rpx;
			height: 40rpx;
		}
	}

	.text12 {
		position: absolute;
		top: 50%;
		right: 50%;
		transform: translate(0, -50%);
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		font-size: 26rpx;
		font-family: $font_family_1;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}

	.topic-wrapper {
		position: absolute;
		left: 0;
		top: 0;
		width: 55%;
		height: 100%;
	}

	.topic {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 80%;
		height: 60rpx;
		background-color: #eee;
		border-radius: 35rpx;
	}

	.topic-image {
		position: absolute;
		left: 20rpx;
		bottom: 21rpx;
		width: 24rpx;
		height: 24rpx;
	}

	.text20 {
		position: absolute;
		left: 58rpx;
		bottom: 16rpx;
		font-size: 24rpx;
		font-family: $font_family_1;
		font-weight: 500;
		color: #666;
	}
</style>
