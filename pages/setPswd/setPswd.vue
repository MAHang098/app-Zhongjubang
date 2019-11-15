<template>
	<view class="setPswd">
		<view class="text">
			<view class="is-find_pswd">设置新密码</view>
			<view class="yz-phone">请输入6-20位英文或数字</view>
		</view>
		<view class="input">
			<view class="phone-number">
				<!-- <input type="text" placeholder="请输入新密码" password  /> -->
				<input class="uni-input" placeholder="请输入新密码" :password="showPassword"  v-model="password"/>
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
				token: [],
				phone: '',
				password: ''
				// src: '../../../static/eye-1.png',
			}
		},
		 onLoad:function(options){
			 if(options){
				 console.log(options.phone);
				 this.phone = options.phone
				 // this.setData({
					//  phone: options.phone
				 // })
			 }
		    
		 },
		methods: {
			changePassword: function() {
				this.showPassword = !this.showPassword;
			},
			completes() {
				console.log(this.options)
				console.log(this.password)
				console.log('phone:'+ this.phone)
				// uni.navigateTo({
				// 	url: '../bindPhone/bindPhone'
				// })
			}
		}
	}
</script>

<style>
	@import '../../common/uni.css';
	/*每个页面公共css */
	page {
		min-height: 100%;
		display: flex;
	}
	
	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
	}
	
	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;
	}
	
	/* 原生组件模式下需要注意组件外部样式 */
	custom-component {
		width: 100%;
		min-height: 100%;
		display: flex;
	}
	
	/* #endif */
	
	/* #ifdef MP-ALIPAY */
	page {
		min-height: 100vh;
	}
	
	/* #endif */
	
	/* 原生组件模式下需要注意组件外部样式 */
	m-input {
		width: 100%;
		min-height: 100%;
		display: flex;
	}
	
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
		padding: 20upx;
	}
	
	.input-group {
		background-color: #ffffff;
		margin-top: 40upx;
		position: relative;
	}
	
	.input-group::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	
	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	
	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
	}
	
	.input-row .title {
		width: 20%;
		height: 50upx;
		min-height: 50upx;
		padding: 15upx 0;
		padding-left: 30upx;
		line-height: 50upx;
	}
	
	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 15upx;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	
	.btn-row {
		margin-top: 50upx;
		padding: 20upx;
	}
	
	button.primary {
		background-color: #0faeff;
	}
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
