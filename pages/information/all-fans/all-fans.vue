
<template>
	<view class="contant">
		<!-- 搜索栏 start -->
		<!-- <view class="header">
			<view class="search-input">
				<image src="http://www.zhongjubang.com/api/upload/static/search/nav-search.png" mode=""></image>
				<input type="text" value=""  placeholder="搜索您需要的商品"/>
			</view>
			<view class="cancel">取消</view>
		</view> -->
		<!-- 搜索栏 end -->
		
		<!-- 粉丝列表 start -->
		<view class="all-follow">
			<view class="tabList">
				<view  v-for="(item, index) in tabList" :class="index == current ? 'active' : '' " @click="changeProduct(index)" :key="index">
					{{item}}
					<text v-bind:class="index == current ? 'active-status' : '' "></text>
				</view>
			</view>
			<!-- 关注缺省页start -->
			<view v-if="current==0&&requiresAttentions==1" class="requires-content">
				<view class="requires-images">
					<image style="width: 212rpx;height: 214rpx;" src="../../../static/img/requiresPage/attentions.png" mode=""></image>
				</view>
				暂无关注的好友！
			</view>
			<!-- 关注缺省页end -->
			
			<view class="follow-fans"  v-show="current == 0">
				<view class="fans-list" v-for="(item, index) in followData" :key="index">
					<view class="left" @tap="goOtherUser(item.outUserId)">
						<view class="avatar">
							<image :src="item.head" mode=""></image>
						</view>
						<view class="details">
							<view class="name">{{item.nickName}} 
								<image v-if="item.title == '设计达人'" src="../../../static/img/title/design-people.png" mode=""></image>
								<image v-if="item.title == '人气网红'" src="../../../static/img/title/red-hot.png" mode=""></image>
								<image v-if="item.title == '居圈达人'" src="../../../static/img/title/circle-people.png" mode=""></image>
								<image v-if="item.title == '金牌业主'" src="../../../static/img/title/gold-owner.png" mode=""></image>
							</view>
							<text class="follow">粉丝{{item.fanCount}}</text>
						</view>
					</view>
					<view class="right">
						<image :src="item.state == 0 ? 'http://www.zhongjubang.com/api/upload/static/follow-checked.png' :'http://www.zhongjubang.com/api/upload/static/mutual-follow.png'" mode=""  @click.stop="followFnas(item.outUserId, '0')"></image>
					</view>
				</view>
			</view>
			<!-- 粉丝缺省页start -->
			<view v-if="current==1&&requiresFans==1" class="requires-content">
				<view class="requires-images">
					<image style="width: 212rpx;height: 214rpx;" src="../../../static/img/requiresPage/attentions.png" mode=""></image>
				</view>
				您还没有粉丝！
			</view>
			<!-- 粉丝缺省页end -->
			
			<view class="fans" v-show="current == 1">
				<view class="fans-list" v-for="(item, index) in fansData" :key="index">
					<view class="left" @tap="goOtherUser(item.inUserId)">
						<view class="avatar">
							<image :src="item.head" mode=""></image>
						</view>
						<view class="details">
							<view class="name">{{item.nickName}} 
								<image v-if="item.title == '设计达人'" src="../../../static/img/title/design-people.png" mode=""></image>
								<image v-if="item.title == '人气网红'" src="../../../static/img/title/red-hot.png" mode=""></image>
								<image v-if="item.title == '居圈达人'" src="../../../static/img/title/circle-people.png" mode=""></image>
								<image v-if="item.title == '金牌业主'" src="../../../static/img/title/gold-owner.png" mode=""></image>
							</view>
							<text class="follow">粉丝{{item.fanCount}}</text>
						</view>
					</view>
					<view class="right">
						<image :src="item.state == 0 ? 'http://www.zhongjubang.com/api/upload/static/follow.png' : 'http://www.zhongjubang.com/api/upload/static/mutual-follow.png' " mode="" @click.stop="followFnas(item.inUserId, '1')"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 粉丝列表 end -->
		
		<view id="mask" v-show="isShow"></view>
		<view class="bottom" v-show="isShow">
			<view>不在关注</view>
			<view>取消</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				requiresFans: 0,
				requiresAttentions: 0,
				tabList: ["关注", "粉丝"],
				current: 0 ,
				isShow: false,
				token: '',
				followData: [],
				fansData: []
			}
		},
		onLoad(options){
			uni.getStorage({
				key:"token",
				success:((res) => {
					this.token = res.data;
				})
			});
			this.init();
			if(options.id==0){
				this.changeProduct(1)
			}else{
				this.changeProduct(0)
			}
			
		},
		methods: {
			goOtherUser(id){
				uni.navigateTo({
					url: '/pages/otherUser/otherUser?userid=' + id
				})
			},
			// 关注
			init() {
				uni.request({
					url: this.url + "/controller/usercontroller/getattentionrelationlist",
					method: 'POST',
					data: {pageIndex: 1,pageSize: 100},
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						if(res.data.code == 200) {
							let data = res.data.data.dataList;
							if(res.data.data.dataList.length==0){
								this.requiresAttentions = 1
							}else{
								this.requiresAttentions = 0
							}
							this.followData = data;
						}
					})
				})
			},
			// 所有粉丝
			fans() {
				uni.request({
					url: this.url + "/controller/usercontroller/getfanattentionrelationlist",
					method: 'POST',
					data: {pageIndex: 1,pageSize: 100},
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						if(res.data.code == 200) {
							if(res.data.data.dataList.length==0){
								this.requiresFans = 1
							}else{
								this.requiresFans = 0
							}
							let data = res.data.data.dataList;
							this.fansData = data;
						}
						if(res.data.code == 407) {
							uni.showToast({
								title: '请重新登录'
								
							})
						}
					})
				})
			},
			// 关注/取消关注
			followFnas(id, type) {
				
				uni.request({
					url: this.url + "/controller/usercontroller/addattentionrelationship",
					method: 'POST',
					data: {outUserId: id},
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						if(res.data.code == 200) {
							if(res.data.code==421){
								uni.navigateTo({
									url: '/pages/loginPhone/loginPhone'
								})
							}
							let data = res.data.data;
							if(type == '1') {
								this.fans();
								return
							}
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
			changeProduct(index) {
				this.current = index;
				if(index == 1) {
					this.fans();
					return;
				}
				this.init();
			}
		}
	}
</script>

<style>
	@import '../../../static/css/information.css'; /*引入收藏点赞消息的样式*/
	page, .contant {
		height: 100%;
		box-sizing: border-box;
	}
	
	/* 关注列表 */
	.all-follow {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 30rpx;
		/* margin-top: 100rpx; */
		position: relative;
	}
	.tabList {
		width: 100%;
		height: 70rpx;
		display: flex;
		justify-content: flex-start;
	}
	.tabList view {
		width: 20%;
		height: 40rpx;
		line-height: 40rpx;
		color: #666666;
		font-size: 33rpx;
		font-weight: 500;
		text-align: center;
		/* margin-right: 80rpx; */
		border-right: 1px solid #E2E2E2;
	}
	.tabList view:last-child {
		border: none !important;
	}
	.active {
		/* border-bottom: 4rpx solid #F9B72C; */
		color: #333333 !important;
		font-weight: bold !important;
	}
	/* 列表 start */
	.fans-list {
		height: 154rpx;
		box-sizing: border-box;
		padding: 28rpx 0;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #E2E2E2;
		align-items: center;
	}

	.name {
		font-size: 28rpx;
		color: #333333;
		float: left;
		margin-top: 10px;
		margin-bottom: 12px;
	}
	.time {
		font-size: 24rpx;
		color: #999999;
	}
	.follow {
		font-size: 26rpx;
		color: #666666;
	}
	
	
	.right image {
		width: 127rpx;
		height: 54rpx;
		display: block;
	}
	/* 弹出层 start */
	#mask {
		position: fixed;
		top: 0;
		z-index: 1;
		background: rgba(0,0,0,.5);
		height: 100%;
		width: 100%;
	}
	.bottom {
		position: fixed;
		bottom: 0;
		z-index: 2;
		width: 100%;
		height: 250rpx;
		background: rgba(255,255,255,1);
		border-radius: 32rpx 32rpx 2rpx 2rpx
	}
	.bottom  view {
		height: 50%;
		line-height: 125rpx;
		text-align: center;
		border-bottom: 1px solid #E2E2E2;
	}
	.active-status {
	/* 	position: absolute;
		top: 15%;
		left: 13%; */
		margin: 9px auto;
		display: block;
		width:70rpx;
		height:6rpx;
		background:rgba(249,183,44,1);
		border-radius:3px;
	}
	/* 缺省页start */
	.requires-content{
		text-align: center;
		font-size:30rpx;
		font-family:PingFang SC;
		color:rgba(153,153,153,1);
		line-height:30rpx;
	}
	.requires-images{
		display: flex;
		margin-left: 240rpx;
		margin-top: 60rpx;
		width: 212rpx;
		height: 214rpx;
		margin-bottom: 60rpx;
	}
	/* 缺省页end */
</style>
