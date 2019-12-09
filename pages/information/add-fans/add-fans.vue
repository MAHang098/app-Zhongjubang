<template>
	<view class="fans">
		<view class="fans-list">
			<view class="fans-details">
				<view class="left">
					<view class="avatar">
						<image src="../../../static/avatar.png" mode=""></image>
					</view>
					<view class="details">
						<view class="name">我是一颗玻璃心 <image src="../../../static/fans-logo.png" mode=""></image></view>
						<view class="time">11/21 10:23</view>
						<view class="follow">关注了你</view>
					</view>
				</view>
				<view class="right">
					<image src="../../../static/follow.png" mode=""></image>
				</view>
			</view>
			
		</view>
		<view class="fans-list">
			<view class="fans-details">
				<view class="left">
					<view class="avatar">
						<image src="../../../static/avatar.png" mode=""></image>
					</view>
					<view class="details">
						<view class="name">我是一颗玻璃心 <image src="../../../static/fans-logo.png" mode=""></image></view>
						<view class="time">11/21 10:23</view>
						<view class="follow">关注了你</view>
					</view>
				</view>
				<view class="right">
					<image src="../../../static/mutual-follow.png" mode=""></image>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
