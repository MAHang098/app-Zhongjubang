<template>
	<view class="fans">
		<view class="fans-list" v-for="(item, index) in allData" :key="index">
			<view class="fans-details">
				<view class="left">
					<view class="avatar" @tap="goOtheruser(item.inUserId)">
						<image :src="item.head" mode=""></image>
					</view>
					<view class="details">
						<view class="name">{{item.nickName}} 
							<image v-if="item.title == '设计达人'" src="../../../static/img/title/design-people.png" mode=""></image>
							<image v-if="item.title == '人气网红'" src="../../../static/img/title/red-hot.png" mode=""></image>
							<image v-if="item.title == '居圈达人'" src="../../../static/img/title/circle-people.png" mode=""></image>
							<image v-if="item.title == '金牌业主'" src="../../../static/img/title/gold-owner.png" mode=""></image>
						</view>
						<view class="time">{{item.createTime}}</view>
						<view class="follow">关注了你</view>
					</view>
				</view>
				<view class="right">
					<image :src="item.state == 0 ? 'http://www.zhongjubang.com/api/upload/static/follow.png' : 'http://www.zhongjubang.com/api/upload/static/mutual-follow.png' " mode="" @click.stop="followFnas(item.inUserId)"></image>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 0,
				allData: []
			}
		},
		onLoad(option) {
			this.count = option.count;
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
			// 所有粉丝
			init() {
				if(this.count == 0) {
					this.count = 10;
				}
				uni.request({
					url: this.url + "/controller/usercontroller/getfanattentionrelationlist",
					method: 'POST',
					data: {pageIndex: 1,pageSize: this.count},
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						if(res.data.code == 200) {
							let data = res.data.data.dataList;
							this.allData = data;
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
			followFnas(id) {
				
				uni.request({
					url: this.url + "/controller/usercontroller/addattentionrelationship",
					method: 'POST',
					data: {outUserId: id},
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						if(res.data.code == 200) {
							let data = res.data.data;
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
			// 跳转到用户详情
			goOtheruser(id){
				uni.navigateTo({
					url: '/pages/otherUser/otherUser?userid=' + id
				})
			},
		}
	}
</script>

<style>
	.fans {
		width: 100%;
		height: 100%;
		border-top: 1px solid #E2E2E2;
	}
	.fans-list {
		height: 188rpx;
		box-sizing: border-box;
		padding: 0rpx 30rpx;
		
		
	}
	.fans-list .fans-details {
		border-bottom: 1px solid #E2E2E2;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 32rpx 0;
	}
	.left {
		display: flex;
		justify-content: flex-start;
	}
	.left text {
		display: block;
	}
	.name {
		font-size: 28rpx;
		color: #333333;
		float: left;
		margin-top: 14rpx;
		/* display: inline-block; */
	}
	.time {
		font-size: 24rpx;
		color: #999999;
		clear: both;
	}
	.follow {
		font-size: 26rpx;
		color: #666666;
	}
	.avatar {
		width: 122rpx;
		height: 130rpx;
		display: inline-block;
		margin-right: 5px;
	}
	.avatar image {
		width: 100%;
		height: 100%;
		margin: auto;
		display: block;
		border-radius: 50%;
	}
	.details image {
		width: 94rpx;
		height: 31rpx;
		display: block;
		float: right;
		margin-top: 2%;
		margin-left: 7px;
	}
	.right image {
		width: 127rpx;
		height: 54rpx;
		display: block;
		margin-top: 25%;
	}
</style>
