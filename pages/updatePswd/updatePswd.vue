<template>
	<view class="findPswd">
		<view class="text">
			<view class="is-find_pswd">找回密码？</view>
			<view class="yz-phone">验证当前手机号</view>
		</view>
		<view class="input">
			<view class="phone-number">
				<image src="../../static/phone.png" mode=""></image>
				<input type="text" placeholder="请输入手机号" />
			</view>
			<view class="yzm">
				<image src="../../static/lock.png" mode=""></image>
				<input type="text" placeholder="请输入手机号" />
				<button size="mini" class="send">发送验证码</button>
			</view>
		</view>
		<button class="next" @click="next">下一步</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			next() {
				uni.navigateTo({
					url: '../setPswd/setPswd'
					// url: '../bindPhone/bindPhone'
				})
			}
		}
	}
</script>

<style>
	.findPswd {
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
	.input image {
		width: 36rpx !important;
		height: 42rpx !important;
		display: inline-block;
		padding-right: 27rpx;
		padding-top: 2px;
	}
	.phone-number, .yzm {
		display: flex;
		justify-content: flex-start;
		height: 100rpx;
		border-bottom: 2px solid #DADADA;
		box-sizing: border-box;
		padding: 30rpx 0;
		font-size: 34rpx;
		color: #999999;
		font-weight: 500;
	}
	.send {
		width: 164rpx;
		height: 53rpx;
		border-radius: 27rpx;
		background: #EBEBEB;
		padding: 0;
		color:#999999;
	}
	.send:after, .next:after {
		border: none;
	}
	.next {
		margin-top: 93rpx;
		border-radius: 46rpx;
		background: #F9B72C;
		font-size: 38rpx;
		font-weight: 500;
		color: #FFFFFF;
	}
</style>
