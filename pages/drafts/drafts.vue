<template>
	<view class="drafts">
		<view class="drafts-type">
			<view v-for="(item, index) in tabType" :class="index == current ? 'active' : '' " @click="changeProduct(index)" :key="index">
				{{item}}
				<text v-bind:class="index == current ? 'active-status' : '' "></text>
			</view>
		</view>
		
		<view v-for="(items, indexs) in draftsList" :key="indexs">
			<view class="drafts-detail" v-for="(item, index) in JSON.parse(items.draftsContent)" :key="index">
				<!-- 用户信息 start -->
				<view class="user">
					<view class="message">
						<image src="../../static/drafts.png" mode=""></image>
						<view>
							<view class="name">晴天小猪</view>
							<view class="time">219-12-30 09:30</view>
						</view>
					</view>
					<view class="operate" @click.stop="operate(indexs)">
						<text></text>
						<text></text>
						<text></text>
						<view class="operate-detail" v-show="cIndex == indexs && showEdit">
							<view class="operate-arrow"></view>
							<view class="operate-btn">
								<!-- <view v-if="currentType==2" @tap="draftsVideo"></view> -->
								<view @click.stop="editRelease(item, items.appUserDraftsId)"><image src="../../static/edit.png" mode="" ></image>编辑</view>
								<view @click.stop="deleteDraft(items.appUserDraftsId)"><image src="../../static/delete.png" mode=""></image>删除</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 用户信息 start -->
				
				<!-- 草稿内容 start -->
				<view class="content" v-if="item.content != '' ">
					<!-- <view class="text">{{activeIndex == indexs && !isShowAllContent  ? item.content : item.content | ellipsis }}</view> -->
					<!-- <view class="text" v-show="!isShowAllContent">{{item.content }}</view> -->
					<view v-if="activeIndex == indexs && !isShowAllContent" class="text"  @click.stop="editRelease(item, items.appUserDraftsId)">{{item.content }}</view>
					<view v-else class="text"  @click.stop="editRelease(item, items.appUserDraftsId, type)">{{item.content | ellipsis}}</view>
					<view  v-if="item.content.length > 60 " @click.stop="open(indexs)">{{activeIndex == indexs && brandFold  ? '收起' : '展开'}}<image :class="brandFold ? '' : 'in'" src="../../static/drafts/arrow-bottom.png" mode=""></image></view>
				</view>
				<!-- 草稿内容 end -->
				
				<!-- 图片/视频 start -->
				<view class="imageList">
					<image :src="m.fileUrl" mode="" v-show="show" v-for="(m, i) in item.imgList" :key="i" @click.stop="previewImage(i, item.imgList)"></image>
				</view>
				<video id="myVideo" :src="item.videoUrl" v-show="!show" enable-danmu danmu-btn controls></video>
				<!-- 图片/视频 end -->
				<!-- 话题 start -->
				<view class="draftsTopic" v-show="show" v-if="item.title != '' ">
					<view class="left" @click.stop="takePart(item.title.topicId)">
						<image src="../../static/topic/topic.png" mode=""></image>
						<view>{{item.title.name}}</view>
					</view>
					<view class="right"></view>
				</view>
				<!-- 话题 end -->
			</view>
		</view>
		
		
		<view id="mask" v-show="showEdit"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabType: ['图片', '视频'],
				currentType: 1,
				current: 0 ,
				cIndex: -1,
				activeIndex: -1,
				show: true,
				brandFold: false,
				isShowAllContent: true,
				showEdit: false,
				draftsList: [],
				imageDrafts: [],
				content: '某臣氏骑剑活动！水雾质地 很轻薄 不沾黏！在上待几分钟会变成雾面哑光感某臣氏骑剑活动！水雾质地 很轻薄 不沾黏！在上待几分钟会变成雾面哑光感 超高级！显色很持久...不沾黏！在上待几分钟会变成雾面哑光感 超高级！显色很持久...'
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
		onShow() {
			let that = this;
			uni.getStorage({
				key:"token",
				success: function (res) {
				that.token = res.data;
			  }
			})
			this.init(1);
		},
		methods: {
			//视频草稿
			draftsVideo(){
				console.log('1111')
			},
			// 切换草稿类型
			changeProduct(index) {
				this.current = index;
				this.currentType = index + 1;
				this.show = !this.show;
				let type = 1;
				if(index == 1) {
					type = 2;
					
				} 
				this.init(type);
			},
			open(index) {
				this.activeIndex = index;
				this.isShowAllContent = !this.isShowAllContent;
				this.brandFold = !this.brandFold
			},
			// 操作删除/编辑弹窗
			operate(index) {
				this.cIndex = index;
				this.showEdit = !this.showEdit;
			},
			// 删除草稿箱
			deleteDraft(id) {
				let params = {
					appUserDraftsId: id,
					type: this.currentType
				}
				let that = this
				uni.request({
					url: this.url + 'controller/contentcontroller/delappuserdrafts',
					method: 'post',
					data: params,
					header : {'content-type':'application/x-www-form-urlencoded', 'token': that.token, 'port': 'app'},
					success: (res => {
						if(res.data.code == 200) {
							uni.showToast({
								title: '删除成功',
								duration: 500,
							});
							this.showEdit = !this.showEdit;
							this.init(this.currentType);
						}
					})
				});
			},
			init(type) {
				let that = this
				this.draftsList = [];
				uni.request({
					url: this.url + 'controller/videocontroller/getappuserdrafts',
					method: 'post',
					data: {'type': type},
					header : {'content-type':'application/x-www-form-urlencoded', 'token': that.token, 'port': 'app'},
					success: ((res) => {
						if(res.data.code == 200) {
							this.draftsList = res.data.data;
						}
					})
				});
			},
			editRelease(item, id) {
				if(this.currentType==1){
					this.$store.commit('saveImage', item.imgList);
					let obj = {
						id: id,
						title: item.title,
						content: item.content
					}
					this.$store.commit('saveDrafts', obj)
					uni.navigateTo({
						url: '/pages/releaseImage/release-image/release-image?type=drafts&id=' + id
					})
				}else{
					// this.$store.commit('saveVideo', item.content);
					let obj = {
						id: id,
						content: item.content,
						url: item.videoUrl
					}
					this.$store.commit('getListVideo', obj)
					// conole.log( this.$store.state.listVideo)
					uni.navigateTo({
						url: '/pages/releaseVideo/releaseVideo?id=' + id
					})
				}

				
			},
			// 预览图片
			previewImage: function(i, arr) {
				
				this.$store.commit('saveImage', arr);
				let e = i + 1;
				uni.navigateTo({
					url: '/pages/previewImage/previewImage?current=' + i + '&indexImg=' + e
				})
				// var current = e.target.dataset.src
			},
			// 点击话题
			takePart(id) {
				// this.$store.commit('clearData', []);
				// this.$store.commit('clearData', []);
				// this.$store.commit('clearData', []);
				// this.$store.commit('clearData', []);
				// this.$store.commit('defaultPage', '');
				// this.$store.commit('getAdress', {});
				uni.navigateTo({
					url: '/pages/topicDetails/topicDetails?id=' + id
				})
			}
		},
	}
</script>

<style>
	.drafts {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 40rpx 20rpx;
		border-top: 1px solid #E2E2E2;
	}
	.drafts-type {
		height: 70rpx;
	}
	.drafts-type view {
		width: 15%;
		height: 34rpx;
		line-height: 34rpx;
		text-align: center;
		color: #666666;
		font-size: 32rpx;
		display: inline-block;
		border-right: 1rpx solid #E2E2E2;
	}
	.drafts-type view:last-child {
		border: none;
	}
	.active {
		color: #333333 !important;
		font-size: 34rpx !important;
		font-weight: bold;
		border-width: 50rpx;
		border-color: red;
		
	}
	.active-status {
		margin: 9px auto;
		display: block;
		width:50rpx;
		height:4rpx;
		background:#F9B72C;
		/* border-radius:3px; */
	}
	/* 草稿详情 start */
	.drafts-detail {
		width: 100%;
		margin-top: 43rpx
	}
	.user {
		height: 88rpx;
		line-height: 88rpx;
		display: flex;
		justify-content: space-between;
		
	}
	.message {
		display: flex;
		justify-content: flex-start;
		line-height: 35rpx;
	}
	.message image {
		width: 90rpx;
		height: 100%;
		/* border-radius: 50%; */
		display: inline-block;
	}
	.message .name {
		/* width:123rpx; */
		height:31rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		margin-top: 16rpx;
		margin-bottom: 12rpx;
	}
	.message .time {
		width:210rpx;
		height:19rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
		
	}
	.operate {
		position: relative;
	}
	.operate text {
		width:8rpx;
		height:8rpx;
		background:rgba(153,153,153,1);
		border-radius:50%;
		display: inline-block;
		margin-left: 6rpx;
	}
	.content {
		padding-top: 25rpx;
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
		line-height:33rpx;
		/* float: left; */
		position: relative;
	}
	.content view:last-child {
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(90,124,171,1);
		line-height:33rpx;
		margin-left: 20rpx;
	}
	.content view:last-child image {
		width: 26rpx;
		height: 19rpx;
		margin-bottom: -1rpx;
	}
	.draftsTopic {
		margin-top: 10rpx;
		box-sizing: border-box;
		font-size: 22rpx;
		font-weight: 500;
		display: flex;
		justify-content: space-between;
	}
	.left {
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
	.left image {
		width: 25rpx;
		height: 25rpx;
		display: block;
		margin-top: 12rpx;
		margin-left: 22rpx;
		margin-right: 6rpx;
	}
	.in {
		transform: rotate(180deg);
		margin-bottom: 0 !important;
	}
	/* 操作按钮 start*/
	.operate-detail {
		width: 198rpx;
		position: absolute;
		z-index: 10000;
		right: 0;
		top: 68rpx;
	}
	.operate-btn {
		width: 100%;
		height: 178rpx;
		background: #fff;
		border: 1px solid #E7E7E7;
		border-radius:6rpx;
	}
	.operate-btn view {
		width: 100%;
		height: 50%;
		border-bottom: 1px solid #E7E7E7;
		color: #333333;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:90rpx;
		text-align: center;
		
	}
	.operate-btn view:last-child {
		border: none;
	}
	.operate-btn view image {
		width: 25rpx;
		height: 28rpx;
		display: inline-block;
		margin-right: 10rpx;
		margin-bottom: -2rpx;
	}
	.operate-arrow {
		width: 9px;
		height: 9px;
		background: #FFFFFF;
		transform: rotate(45deg);
		position: relative;
		left: 78%;
		top: 5px;

	}
	#mask {
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.4);
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
	}
	/* 图片样式 */
	.imageList {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		margin-top: 20rpx;
	}
	.imageList image {
		width: 30%;
		height: 210rpx;
		display: block;
		margin-right: 34rpx;
		margin-bottom: 10rpx;
	}
	.imageList image:nth-of-type(3n) {
		margin: 0 !important;
	}
</style>
