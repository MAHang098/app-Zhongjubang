<template>
    <view>
		<view class="header" v-bind:class="{ 'in': scrollFlag }">
			<view class="header-left">
				<image :src="scrollFlag ? '../../static/topic/topic-back.png' : '../../static/img/topicDetails/back.png' " mode=""></image>
				<text class="header-topic">{{scrollFlag ? topic : ''}}</text>
			</view>
			<view class="header-right">
				<image src="../../static/img/topicDetails/interest.png" mode=""></image>
				<image :src="scrollFlag ? '../../static/topic/topic-share.png' : '../../static/img/topicDetails/share.png'" mode=""></image>
			</view>
		</view>
		<view class="topic-detail">
			<view class="title">
				<image src="../../static/img/topicDetails/bg.png" mode=""></image>
				<view class="content">
					<view class="main-title">
						<image src="../../static/img/topicDetails/money.png" mode=""></image>
						<text>{{topic}}</text>
					</view>
					<view class="Subheading">
						<!-- {{talkThemeRemarks}} -->
						因为点击按钮时，到了handleClick()方法中的this已经不是组件里的this了。因为点击按钮时，到了handleClick()方法中的this已经不是组件里的this了。因为点击按钮时，到了handleClick()方法中的this已经不是组件里的this了。
					</view>
					<view class="topic-sum">
						<text>参与{{participateCount}}</text>
						<text class="point"></text>
						<text>关注{{talkThemeNum}}</text>
					</view>
				</view>
			</view>
			
			<!-- 话题详情 start -->
			<view class="topic-participation">
				<view class="detial" v-for="(item, index) in topicList" :key="index">
					<view class="user-list">
						<view class="left">
							<view class="avatar">
								<image src="../../static/avatar.png" mode=""></image>
							</view>
							<view class="user-details">
								<view class="name">{{item.nickName}} <image src="../../static/fans-logo.png" mode=""></image></view>
								<view class="time">{{item.createTime}}</view>
							</view>
						</view>
						<view class="right" @click.stop="focus(index, item.userId)">
							<image :src=" activeIndex == index && isShowFocus ? '../../static/topic/focus.png' : '../../static/img/topicDetails/interest.png'" mode=""></image>
						</view>
					</view>
					
					<!-- 文字内容 start -->
					<view class="describe">
						<view v-if="activeIndex == index && !isShowAllContent" class="text">{{item.content }}</view>
						<view v-else class="text">{{item.content | ellipsis}}</view>
						<view class="anCotent" v-if="item.content.length > 60 " @click.stop="open(index)">{{activeIndex == index && brandFold  ? '收起' : '展开'}}<image :class="brandFold ? '' : 'in'" src="../../static/drafts/arrow-bottom.png" mode=""></image></view>
					</view>
					<!-- 文字内容 end -->
					
					<!-- 图片/视频 start -->
					<view class="imageList">
						<image src="../../static/draftsT.png" mode="" v-show="show"></image>
					</view>
					<!-- <video id="myVideo" :src="item.videoUrl" v-show="!show" enable-danmu danmu-btn controls></video> -->
					<!-- 图片/视频 end -->
					
					<!-- 操作按钮 start -->
					<view class="operate">
						<view class="share"><image src="../../static/img/user/share.png" mode=""></image></view>
						<view class="number">
							<view class="message">
								<image src="../../static/img/user/message.png" mode=""></image>
								<text>{{item.gCollectionDiscussNum}}</text>
							</view>
							<view class="collect" @click.stop="collect(index)">
								<image :src="activeIndex == index && isShowCollect ? '../../static/topic/collect-select.png' : '../../static/img/user/star.png' " mode=""></image>
								<text>{{item.collectionNum}}</text>
							</view>
							<view class="fabulous"  @click.stop="fabulous(index)">
								<image :class="activeIndex == index && isShowFabulous ? 'select' : '' " :src="activeIndex == index && isShowFabulous ? '../../static/topic/fabulous-select.png' : '../../static/img/user/good.png'" mode=""></image>
								<text>{{item.gCollectionLikeNum}}</text>
							</view>
						</view>
					</view>
					<!-- 操作按钮 end -->
				</view>
				
			</view>
			
			<view id="footer" @click.stop="goRelease">
				<view>
					<image src="../../static/topic/camera.png" mode=""></image>
					参与话题
				</view>
			</view>
		</view>
    </view>
</template>

<script>
    

    export default {
        data() {
			return {
				topic: '我家阳台收纳神器',
				brandFold: false,
				isShowAllContent: true,
				show: true,
				talkThemeNum: 0,
				participateCount: 0,
				talkThemeRemarks: '',
				scrollFlag:false,
				content: '某臣氏骑剑活动！水雾质地 很轻薄 不沾黏！在上待几分钟会变成雾面哑光感某臣氏骑剑活动！水雾质地 很轻薄 不沾黏！在上待几分钟会变成雾面哑光感 超高级！显色很持久...不沾黏！在上待几分钟会变成雾面哑光感 超高级！显色很持久...',
				topicList: [],
				activeIndex: -1,
				isShowFocus: false,   //是否显示已关注图标
				isShowFabulous: false,   //是否显示已点赞
				isShowCollect: false,   //是否显示已收藏
			}
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 45) {
				return value.slice(0,45) + '...'
			  }
			  return value
			}
		},
		mounted() {
			// window.addEventListener('scroll', this.handleScroll)
		},
		onLoad(option) {
			this.init(option.id)
		},
		// 监听页面滚动
		onPageScroll(e) {
			 let _this=this;
			if(e.scrollTop > 50) {
				_this.scrollFlag = true
			} else {
				_this.scrollFlag = false
			}
		},
        methods: {
			init(id) {
				let token = '';
				uni.getStorage({
					key:"token",
					success: function (res) {
					 token = res.data;
				  }
				});
				let parmas = {
					talkThemeId: id,
					pageIndex: 1,
					pageSize: 1000
				}
				uni.request({
					url: this.url + 'controller/contentcontroller/getgcriclecontentlistbytalkthemeid',
					method: 'post',
					data: parmas,
					header : {'content-type':'application/x-www-form-urlencoded', 'token': token, 'port': 'app'},
					success:(res) => {
						if(res.data.code == 200) {
							// console.log()
							let data = res.data.data.dataList[0]
							this.topic = data.talkTheme;
							this.talkThemeNum = data.talkThemeNum;
							this.participateCount = data.participateCount
							this.topicList = data.allGContentList;
							this.talkThemeRemarks = data.talkThemeRemarks;
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
            open(index) {
            	this.activeIndex = index;
            	this.isShowAllContent = !this.isShowAllContent;
            	this.brandFold = !this.brandFold
            },
			// 关注
			focus(index, id) {
				this.activeIndex = index;
				this.isShowFocus = !this.isShowFocus;
				let token = '';
				uni.getStorage({
					key:"token",
					success: function (res) {
					 token = res.data;
				  }
				});
			},
			// 收藏
			collect(index) {
				this.activeIndex = index;
				this.isShowCollect = !this.isShowCollect
			},
			// 点赞
			fabulous(index) {
				this.activeIndex = index;
				this.isShowFabulous = !this.isShowFabulous 
			},
			// 发布话题
			goRelease() {
				this.$store.commit('updateType', this.topic );
				uni.navigateTo({
					// url: '/pages/releaseImage/release-image/release-image'
					url: '/pages/releaseImage/search-tag/search-tag'
				})
			},
        }
    }
</script>

<style>
	page {
		background: #F9F9F9;
		width: 100%;
		height: 100%;
		overflow: hidden;
		font-family:PingFang SC;
	}
	.in {
		background: #FFFFFF;
	}
	.header {
		width: 100%;
		height: 120rpx;
		/* line-height: 100rpx; */
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 30rpx;
		/* background: #0FAEFF; */
		position: fixed;
		z-index: 1;
		
	}
	.header view {
		display:flex;
		align-items:center;
		height: 100%;
		margin-top: 15rpx;
	}
	.header-left image {
		width: 15rpx;
		height: 31rpx;
		display: block;
		margin-right: 18rpx;
	}
	.header-right image:first-child {
		width: 106rpx;
		height: 48rpx;
		display: inline-block;
	}
	.header-right image:last-child {
		width: 39rpx;
		height: 37rpx;
		display: inline-block;
		margin-left: 40rpx;
	}
	.header-topic {
		font-size: 32rpx;
	}
	/* 话题标题 */
	.topic-detail {
		width: 100%;
		height: auto;
		background: #F9F9F9;
		overflow: hidden;
	}
	.title {
		width: 100%;
		position: relative;
		color: #FFFFFF;
	}
	.title image {
		width: 100%;
		height: 439rpx;
		display: block;
	}
	.content {
		position: absolute;
		top: 30%;
		width: 100%;
		box-sizing: border-box;
		padding: 0 30rpx;
	}
	.main-title {
		width: 100%;
		display: flex;
		margin-bottom: 24rpx;
		justify-content: center;
		font-size: 36rpx;
	}
	.main-title image {
		width: 33rpx;
		height: 33rpx;
		display: block;
		margin-top: 12rpx;
		margin-right: 10rpx;
	}
	.Subheading {
		margin-bottom: 83rpx;
		text-align: center;
		height: 40rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		line-clamp: 2;
	}
	.topic-sum,  .Subheading {
		font-size: 24rpx;
		font-weight: 500;
	}
	.topic-sum text {
		margin-right: 10rpx;
	}
	.point {
		width: 8rpx;
		height: 8rpx;
		display: inline-block;
		border-radius: 50%;
		background: #FFFFFF;
		margin-bottom: 4rpx;
	}
	/* 话题参与详情 */
	.topic-participation {
		position: absolute;
		top: 29%;
		width: 100%;
		background: #F6F6F6;
		border-radius:32rpx 32rpx 0px 0px;
		overflow: hidden;
	}
	.detial {
		position: static;
		margin-bottom: 20rpx;
		background: #FFFFFF;
		box-sizing: border-box;
		padding: 30rpx;
		box-shadow:0px 0px 9rpx 0px rgba(93,93,93,0.08);
	}
	.detial:last-child {
		margin-bottom: 124rpx;
		
	}
	.user-list {
		height: 126rpx;
		display: flex;
		justify-content: space-between;
	}
	.left {
		display: flex;
		justify-content: flex-start;
	}
	.left view {
		display: block;
		margin-top: 26rpx;
		margin-bottom: 6rpx;
	}
	.name {
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		float: left;
	}
	.time {
		clear: both;
		font-size: 24rpx;
		color: #999999;
	}
	.follow {
		font-size: 26rpx;
		color: #666666;
	}
	.avatar {
		width: 122rpx;
		height: 130rpx;
		display: inline-block;
	}
	.avatar image {
		width: 100%;
		height: 100%;
		margin: auto;
		display: block;
	}
	.user-details image {
		width: 94rpx;
		height: 31rpx;
		display: block;
		float: right;
		margin-top: 2%;
		margin-left: 7px;
	}
	.right {
		display: flex;
		height: 100%;
		align-items: center;
	}
	.right image {
		width: 106rpx;
		height: 48rpx;
		display: block;
		margin-top: 25%;
	}
	/* 文字描述 start */
	.describe {
		padding: 25rpx 0;
		overflow: hidden;
		line-height: 36rpx;
		/* position: relative; */
	}
	.describe view {
		display: inline;
	}
	.text {
		font-size:28rpx;
		/* font-family:PingFang SC; */
		font-weight:400;
		color:rgba(51,51,51,1); 
		/* color: #333333; */
		/* line-height:33rpx; */
		/* line-height:33rpx; */
		/* float: left; */
		position: relative;
	}
	.describe .anCotent {
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(90,124,171,1);
		line-height:33rpx;
		margin-left: 20rpx;
	}
	.describe .anCotent image {
		width: 26rpx;
		height: 19rpx;
		margin-bottom: -1rpx;
	}
	/* 图片样式 */
	.imageList {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.imageList image {
		width: 100%;
	}
	/* .imageList image {
		width: 30%;
		height: 210rpx;
		display: block;
		margin-right: 34rpx;
		margin-bottom: 10rpx;
	}
	.imageList image:nth-of-type(3n) {
		margin: 0 !important;
	} */
	
	/* 操作按钮 start */
	.operate {
		padding-top: 30rpx;
		display: flex;
		justify-content: space-between;
	}
	.share, .message, .collect, .fabulous {
		display: flex;
		align-items: center;
		height: 100%;
	}
	.share image {
		width: 33rpx;
		height: 31rpx;
		display: block;
	}
	.fabulous image {
		margin-bottom: -4rpx;
	}
	.number {
		display: flex;
		justify-content: flex-end;
	}
	.number view {
		margin-left: 40rpx;
	}
	.message image {
		width: 39rpx;
		height: 36rpx;
		display: inlin-block;
	}
	.collect image, .fabulous image {
		width: 32rpx;
		height: 31rpx;
		display: inlin-block;
	}
	.select {
		margin-bottom: 1px !important;
	}
	.number text {
		color: #999999;
		font-size: 26rpx;
		font-weight: 500;
		margin-left: 4rpx;
	}
	#footer {
		position: fixed;
		bottom: 0;
		z-index: 1;
		height: 124rpx;
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		width: 100%;
		background: #FFFFFF;
	}
	#footer view {
		width: 100%;
		height: 84rpx;
		line-height: 84rpx;
		background: #F9B72C;
		color: #FFFFFF;
		text-align: center;
		font-size:30rpx;
		font-weight:bold;
		border-radius: 42rpx;
		font-family:PingFang SC;
	}
	#footer view image {
		width: 25px;
		height: 25px;
		display: inline-block;
		margin-bottom: -5px;
		margin-right: 7px;
	}
</style>
