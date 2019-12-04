<template>
	<view>
		<!-- 热度分 start -->
		<view class="all-point">
			<image src="../../../static/img/user/hot-point/hot-bg.png" mode=""></image>
			<view class="point"><text>{{allPoints}}</text><text>我的热度分</text></view>
			<view class="hot">
				<view>
					<image src="../../../static/img/user/hot-point/detail.png" mode=""></image>
					<view>热度分明细</view>
				</view>
				<view>
					<image src="../../../static/img/user/hot-point/rules.png" mode=""></image>
					<view>热度分规则</view>
				</view>
			</view>
		</view>
		<!-- 热度分 end -->
		
		<!-- 热度分商城/活动 start -->
		<view class="activity">
			<view class="mall">
				<image src="../../../static/img/user/hot-point/mall.png" mode=""></image>
				<text>立即兑换</text>
			</view>
			<view class="mall">
				<image src="../../../static/img/user/hot-point/activity.png" mode=""></image>
				<text>立即兑换</text>
			</view>
		</view>
		<!-- 热度分商城/活动 end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				allPoints: 0
			}
		},
		onLoad() {
			let token = '';
			uni.getStorage({
				key:"token",
				success: function (res) {
				 token = res.data;
			  }
			});
			uni.request({
				url: this.url + 'controller/usercontroller/getappuser',
				method: 'post',
				header : {'content-type':'application/x-www-form-urlencoded', 'token': token, 'port': 'app'},
				success:(res) => {
					if(res.data.code == 200) {
						// console.log()
						let data = res.data.data
						if(data.feverBranch == null) {
							this.allPoints = 0;
							return;
						}
						this.allPoints = data.feverBranch;
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
		methods: {
			
		}
	}
</script>

<style>
	.all-point {
		width: 100%;
		/* height: 400rpx; */
		position: relative;
	}
	.all-point image {
		width: 100%;
		display: block;
		height: 400rpx;
	}
	.point {
		text-align: center;
		position: absolute;
		top: 12%;
		width: 100%;
	}
	.point text {
		color: #FFFFFF;
		font-family:PingFang SC;
		display: block;
	}
	.point text:first-child {
		font-size:64rpx;
		font-weight:bold;
		margin-top: 40rpx;	
	}
	.point text:last-child {
		font-size:32rpx;
	}
	.hot {
		width: 90%;
		height: 148rpx;
		margin: 0 auto;
		position: absolute;
		box-sizing: border-box;
		padding-top: 30rpx;
		bottom: -18%;
		background: #FFFFFF;
		border-radius: 74rpx;
		box-shadow:-3rpx 0px 18rpx 0px rgba(184,184,184,0.42);
		display: flex;
		justify-content: space-between;
		left: 5%;
	}
	.hot image {
		width: 48rpx;
		height: 50rpx;
		display: block;
		margin: 0 auto;
		margin-bottom: 6rpx;
	}
	.hot view {
		font-size:28rpx;
		height: 90rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		width: 50%;
		text-align: center;
		border-right: 1px solid #EEEEEE;
		margin: 0 auto;
	}
	.hot view:last-child {
		border: none;
	}
	
	/* 活动 start */
	.activity {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 100rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
	}
	.activity image {
		width: 100%;
		height: 100%;
		display: block;
	}
	.activity  view {
		position: relative;
		height: 459rpx;
		width: 90%;
	}
	.activity text {
		position: absolute;
		width: 167rpx;
		height: 60rpx;line-height: 60rpx;
		text-align: center;
		background: #F9B72C;
		border-radius: 30rpx;
		color: #FFFFFF;
		font-size:27rpx;
		left: 25%;
		bottom: -2%;
		
	}
</style>
