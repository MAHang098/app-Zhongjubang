<template>
	<view class="exchange-list">
		<view class="exchange">
			<image src="../../../static/img/user/hot-point/exchange.png" mode=""></image>
			<view class="title">有温度的保温杯有温度的热</view>
			<view class="score">2000热度分</view>
			<view class="btn">兑换</view>
		</view>
		<view class="exchange">
			<image src="../../../static/img/user/hot-point/exchange.png" mode=""></image>
			<view class="title">有温度的保温杯有温度的热</view>
			<view class="score">2000热度分</view>
			<view class="btn">兑换</view>
		</view>
		<view class="exchange">
			<image src="../../../static/img/user/hot-point/exchange.png" mode=""></image>
			<view class="title">有温度的保温杯有温度的热</view>
			<view class="score">2000热度分</view>
			<view class="btn">兑换</view>
		</view>
		<view class="exchange">
			<image src="../../../static/img/user/hot-point/exchange.png" mode=""></image>
			<view class="title">有温度的保温杯有温度的热</view>
			<view class="score">2000热度分</view>
			<view class="btn">兑换</view>
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
	.exchange-list {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 17rpx 26rpx;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		border-top: 1px solid #E2E2E2;
	}
	.exchange:nth-of-type(2n) {
		margin: 0 !important;
	}
	.exchange {
		width: 48.5%;
		margin-right: 20rpx;
		height: 466rpx;
		padding-bottom: 50rpx;
		box-shadow:1rpx 0px 7rpx 0px rgba(136,136,136,0.28);
		border-radius:8px;
		margin-bottom: 20rpx;
	}
	.exchange image {
		width: 100%;
		height: 288rpx;
		display: block;
		/* border: 1px solid red; */
		border-top-right-radius: 8rpx;
		border-top-left-radius: 8rpx;
	}
	.title, .score {
		box-sizing: border-box;
		padding: 0 20rpx;
		margin: 10rpx 0;
		font-family:PingFang SC;
	}
	.title {
		font-size:26rpx;
		color:rgba(51,51,51,1);
		/* line-height:30px; */
		width: 100%;
		
	}
	.score {
		font-size:26rpx;
		margin-bottom: 26rpx;
		font-weight:bold;
		color:rgba(244,51,72,1);
	}
	.btn {
		width:200rpx;
		height:54rpx;
		line-height: 54rpx;
		background:rgba(249,183,44,1);
		border-radius:27px;
		margin: 0 auto;
		text-align: center;
		color: #FFFFFF;
		font-size:28rpx;
	}
</style>
