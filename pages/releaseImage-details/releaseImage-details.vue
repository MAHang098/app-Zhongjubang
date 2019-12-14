<template>
	<view>
		<view class="top">
			<view class="release-video">
				<image class="back" src="../../static/img/back.png" mode="" />
				<text class="title">{{indexImg}}/{{imageLength}}</text>
			</view>
			<swiper class="swiper"  :autoplay="false" :interval="2000" :duration="500" :circular="true" :current="current" @change.stop="changeImage">
				<swiper-item v-for="(item, index ) in dataItem.imgList" :key="index" >
					<view class="swiper-item">
						<image :src="item.fileUrl" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="user">
				<image :src="dataItem.head" mode="" class="avatar"></image>
				<view>
					<view class="name">{{dataItem.nickName}}</view>
					<view class="time">发布时间：{{dataItem.createTime}}</view>
				</view>
				<image v-show="dataItem.state == 0 " :src="dataItem.attentionState == 0 ? '../../static/follow.png' : dataItem.attentionState == 2 ? '../../static/mutual-follow.png' : '../../static/follow-checked.png'" mode="" class="follow"  @click.stop="focus(dataItem.userId, dataItem.attentionState)"></image>
			</view>
			<view class="content">
				<view v-if="!isShowAllContent" class="text">{{dataItem.content }}</view>
				<view v-else class="text">{{dataItem.content | ellipsis}}</view>
				<view class="anCotent" v-if="contentLength > 45 " @click="open()">{{ brandFold  ? '收起' : '展开'}}<image :class="!brandFold ? '' : 'in'" src="../../static/drafts/arrow-bottom.png" mode=""></image></view>
			</view>
			<view class="release-image_topic" v-if="titleItem.topic != '' ">
				<view class="left">
					<image src="../../static/topic/topic.png" mode=""></image>
					<view>{{titleItem.topic}}</view>
				</view>
				<view class="right"></view>
			</view>
		</view> 
		
		
		<!-- 评论 start -->
		<view class="all-comments">
			<text>全部评论</text>
			<view class="comments-input">
				<image :src="dataItem.head" mode=""></image>
				<view class="comments-text">
					<image src="../../static/img/releaseImage-details/recommend.png" mode=""></image>
					<input type="text" :value="commentsContent" placeholder="留下你的评论..." @blur="sendComments" maxlength="200"/>
					<!-- <input class="uni-input" confirm-type="search" placeholder="键盘右下角按钮显示为搜索" /> -->
				</view>
			</view>
		
			<view class="comments-detail" v-for="(item, index) in dataItem.listFu" :key="index" v-if="index < 2">
				<view class="comments-user">
					<image :src="item.head" mode=""></image>
					<view>
						<text class="comments-name">{{item.nick_name}}</text>
						<text class="date">{{item.createTime}}</text>
					</view>
					<view class="fabulous">
						{{item.likenum}}
						<image :src=" '../../static/img/user/good.png'" mode=""></image>
					</view>
				</view>
				<view class="comments-content">
					<text @click="replyComment(item.id, item.nick_name)">{{item.gcircle_content_discuss}}</text>
					<view class="reply-comments">
						<view  v-for="(z, i) in item.zilist" :key="i">
							<!-- <text @click.stop="deleteComment(rows.id)">{{rows.nick_name}}：{{rows.gcircle_content_discuss}}</text> -->
							<text>{{z.nick_name}}：{{z.gcircle_content_discuss}}</text>
						</view>
						<text class="all-replay" v-if="item.sonCount > 2">共{{item.sonCount}}条回复 ></text>
					</view>
					<text class="parting-line"></text>
				</view>
			</view>
			<!-- </view> -->
			<view class="look-all"  @click.stop="togglePopup('bottom', 'comments')">查看全部评论</view>
			
		</view>
		<!-- 评论 end -->
		
		<!-- 评论弹窗 start -->
		<uni-popup ref="comments" :type="popupType" :custom="true" class="comments-list">
			<view class="uni-comments">
				<view class="uni-comments-title">
					<view>全部评论({{dataItem.discussNum}})</view>
					<view @click.stop="cancelPopup('comments')">
						<image src="../../static/img/releaseVideo2/close.png" mode=""></image>
					</view>
				</view>
				<view class="uni-comments-content">
					<view class="comments-detail" v-for="(item, index) in dataItem.listFu" :key="index">
						<view class="comments-user">
							<image :src="item.head" mode=""></image>
							<view>
								<text class="comments-name">{{item.nick_name}}</text>
								<text class="date">{{item.createTime}}</text>
							</view>
							<view class="fabulous">
								{{item.likenum}}
								<image :src="item.state == 1 ? '../../static/topic/fabulous-select.png' : '../../static/img/user/good.png'" mode="" @click.stop="commentsFabulous(item.id)"></image>
							</view>
						</view>
						<view class="comments-content">
							<text>{{item.gcircle_content_discuss}}</text>
							<view class="reply-comments" v-show="item.zilist.length > 0">
								<view  v-for="(z, i) in item.zilist" :key="i">
									<!-- <text @click.stop="deleteComment(rows.id)">{{rows.nick_name}}：{{rows.gcircle_content_discuss}}</text> -->
									<text>{{z.nick_name}}：{{z.gcircle_content_discuss}}</text>
								</view>
								<text class="all-replay" v-if="item.sonCount > 2">共{{item.sonCount}}条回复 ></text>
							</view>
							<text class="parting-line"></text>
						</view>
						
					</view>
				</view>
				<view class="comments-botton">
					<input type="text" placeholder="说点什么吧..."/>
				</view>
			</view>
		</uni-popup>
		<!-- 评论 end -->
		
		<view class="operate-bottom">
			<view class="operate-bottom_share"><image src="../../static/img/user/share.png" mode=""></image></view>
			<view class="operate-bottom_number">
				<view class="number-message" @click.stop="togglePopup('bottom', 'comments')">
					<image src="../../static/img/user/message.png" mode=""></image>
					<text>{{dataItem.discussNum}}</text>
				</view>
				<view class="collect">
					<image  @click.stop="collect(detailId)" :src="dataItem.collectionState == 0 ? '../../static/img/user/star.png' : '../../static/topic/collect-select.png' " mode=""></image>
					<text>{{dataItem.collectionNum}}</text>
				</view>
				<view class="fabulous"  @click.stop="fabulous(detailId)">
					<image :src="dataItem.gcircleContentLikeState == 0 ? '../../static/img/user/good.png' : '../../static/topic/fabulous-select.png'" mode=""></image>
					<text>{{dataItem.gclLikeNum}}</text>
				</view>
			</view>
		</view>
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
				token: '135d521547334e16afad9cf7bb465b6a'
	        }
	    },
		onLoad(option) {
			// this.detailId = option.id;
			this.detailId = '44'
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
			// uni.getStorage({
			// 	key:"token",
			// 	success:((res) => {
			// 	this.token = res.data;
			//   })
			// });
			this.init();
		},
	    methods: {
			init() {
				let parmas = {
					pageSize: 100,
					pageIndex: 1,
					gcircleContentId: this.detailId
				}
				
				uni.request({
				    url: this.url + 'controller/usercontroller/getgcdiscusslist',
				    method: 'post',
				    data: parmas,
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:((res) => {
				        if(res.data.code == 200) {
							let data = res.data.data.dataList[0];
							data.imgList = JSON.parse(data.imgList);
							this.imageLength = data.imgList.length;
							this.contentLength = data.content.length;
							this.titleItem = JSON.parse(data.title);
							this.dataItem = data;
				        } else {
				            uni.showToast({
				                icon: 'none',
				                title: res.data.message
				            });
				            uni.hideToast();
				        }
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
			            if(res.data.code == 200) {
			                this.init();
			            } else {
			                uni.showToast({
			                    icon: 'none',
			                    title: res.data.message
			                });
			                uni.hideToast();
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
			            if(res.data.code == 200) {
							this.init();
			            } else {
			                uni.showToast({
			                    icon: 'none',
			                    title: res.data.message
			                });
			                uni.hideToast();
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
			            if(res.data.code == 200) {
			                this.init();
			            } else {
			                uni.showToast({
			                    icon: 'none',
			                    title: res.data.message
			                });
			                uni.hideToast();
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
						if(res.data.code == 200) {
							this.init()
							
						} else {
							uni.showToast({
								icon: 'none',
								title: res.data.message
							});
							uni.hideToast();
						}
					}
				});
			},
			// 发表评论
			sendComments(e) {
				
				if(e.detail.value == '') {
					return;
				}
				let parmas = {
					outUserId: this.dataItem.userId,
					gcircleContentId: this.detailId,
					outUserName: this.dataItem.nickName,
					gcircleContentDiscuss: e.detail.value
				}
				uni.request({
					url: this.url + 'controller/usercontroller/addgcirclecontentdiscuss',
					method: 'post',
					data: parmas,
					header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
					success:(res) => {
						if(res.data.code == 200) {
							console.log(res.data)
							// uni.showToast({
							// 	title: '已发送',
							// 	duration: 1000
							// });
							this.commentsContent = ' ';
							this.init()
						} else {
							uni.showToast({
								icon: 'none',
								title: res.data.message
							});
							uni.hideToast();
						}
					}
				});
			},
			// 回复评论
			replyComment(id, name) {
				console.log(id, name)
				
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
			togglePopup(type, open) {
				switch (type) {
					case 'top':
						this.content = '顶部弹出 popup'
						break
			
					case 'bottom':
						this.content = '底部弹出 popup'
						break
					case 'center':
						this.content = '居中弹出 popup'
						break
				}
				this.popupType = type
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
			
		}
	}
</script>
	
<style scoped>
	@import '../../static/css/comments.css'; /*引入评论弹窗的样式*/
	page{
		background:rgba(245,245,245,1);
	}
	.top{
		width:100%;
		height:100%;
		background: #FFFFFF;
		box-shadow:0px 0px 9rpx 0px rgba(93,93,93,0.08);
		padding-bottom: 36rpx;
	}
    .release-video{
        position: relative;
        width:750rpx;
        height:128rpx;
        background:rgba(255,255,255,1);
		border-bottom: 2rpx solid rgba(226,226,226,1);
    }
    .back{
        position: absolute;
        left: 31rpx;
        bottom: 26rpx;
        width:54rpx;
        height:54rpx;
    }
    .back image{
        width:54rpx;
        height:54rpx;
    }
	.title{
		position: absolute;
		left: 348rpx;
		bottom: 26rpx;
		font-size:36rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	/* 轮播图 start */
	.swiper-item, .swiper {
		height: 692rpx;
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
	}
	.time {
		font-size:20rpx;
		font-family:PingFang SC;
		color:rgba(102,102,102,1);
		clear: both;
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
		height: auto;
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
</style>
