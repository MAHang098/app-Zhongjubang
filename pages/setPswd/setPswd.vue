<template>
	<view class="setPswd">
		<view class="text">
			<view class="is-find_pswd">设置新密码</view>
			<view class="yz-phone">请输入6-20位英文或数字</view>
		</view>
		<view class="input">
			<view class="phone-number">
				<!-- <input type="text" placeholder="请输入新密码" password  /> -->
				<input class="uni-input" placeholder="请输入新密码" :password="showPassword" />
				<view class="uni-icon uni-icon-eye" :class="[!showPassword ? 'uni-active' : '']" @click="changePassword"></view>
				<!-- <image src="../../static/phone.png" mode=""></image> -->
			</view>
		</view>
		<button class="complete" @click="completes">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPassword: true,
				// src: '../../../static/eye-1.png',
			}
		},
		methods: {
			changePassword: function() {
				this.showPassword = !this.showPassword;
			},
			completes() {
				uni.navigateTo({
					url: '../bindPhone/bindPhone'
				})
			}
		}
	}
</script>

<style>
	.setPswd {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 100rpx 45rpx 100rpx 44rpx;
		overflow: hidden;
	}
	.is-find_pswd {
		font-size: 40rpx;
		color: #333333;
		font-weight: bold;
		margin-bottom: 31rpx;
	}
	.yz-phone {
		font-size: 28rpx;
		color: #666666;
		font-weight: 500;
		margin-bottom: 195rpx;
	}
	/* .phone-number view {
		width: 31rpx !important;
		height: 24rpx !important;
		display: inline-block;
		padding-right: 27rpx;
	} */
	.phone-number {
		display: flex;
		justify-content: space-between;
		height: 100rpx;
		border-bottom: 2px solid #DADADA;
		box-sizing: border-box;
		padding: 30rpx 0;
		font-size: 34rpx;
		color: #999999;
		font-weight: 500;
	}
	.phone-number input {
		padding: 0 !important;
	}
	.send {
		width: 164rpx;
		height: 53rpx;
		border-radius: 27rpx;
		background: #EBEBEB;
		padding: 0;
	}
	.send:after, .next:after {
		border: none;
	}
	.complete {
		margin-top: 93rpx;
		border-radius: 46rpx;
		background: #F9B72C;
		font-size: 38rpx;
		font-weight: 500;
		color: #FFFFFF;
	}
</style>
