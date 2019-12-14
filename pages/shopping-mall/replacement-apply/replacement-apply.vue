<template>
	<view class="replacement">
		<view class="replacement-product">
			<image src="../../../static/img/G-circle/p1.png" mode=""></image>
			<view class="product-detai">
				<view class="title">索菲亚衣柜索菲亚衣柜索菲亚衣柜索菲亚衣柜索柜 衣柜索菲亚衣柜</view>
				<view class="specs">规格：全部套装</view>
			</view>
		</view>
		
		<view class="replacement-content">
			<view class="goods-state ">
				<view>货物状态</view>
				<view class="state">
					请选择
					<image src="../../../static/topic/arrow.png" mode=""></image>
				</view>
			</view>
			<view class="refund-amount">
				<text>退款金额：</text>
				<text>￥128.00</text>
			</view>
			<view class="refund-amount">
				<text>退款原因：</text>
				<input type="text" value="" placeholder="必填"/>
			</view>
		</view>
		
		<!-- 上传图片 start -->
		<view class="upload-image">
			<view>上传凭证</view>
			<image src="../../../static/img/shopping-mall/order/upload.png" mode=""></image>
			<view id="commit">提交</view>
		</view>
		<!-- 上传图片 end -->
		
		<!-- 提交 start -->
		
		<!-- 提交 end -->
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
	page, .replacement {
		background: #F5F5F5;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
	.replacement-product {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 45rpx 30rpx;
		display: flex;
		justify-content: flex-start;
		background: #FFFFFF;
		border-top: 1px solid #E2E2E2;
	}
	.replacement-product image {
		width: 150rpx;
		height: 150rpx;
		display: block;
		margin-right: 10px;
	}
	.product-detai {
		width: 75%;
	}
	.title {
		font-size:24rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		line-height:32rpx;
		margin-top: 10px;
	}
	.specs {
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(153,153,153,1);
	}
	/* 退款内容 */
	.replacement-content {
		width: 100%;
		height: auto;
		
		background: #FFFFFF;
		margin-top: 10px;
		margin-bottom: 5px;
	}
	.replacement-content>view {
		height: 100rpx;
		line-height: 100rpx;
		box-sizing: border-box;
		padding: 0 32rpx;
		width: 100%;
		display: flex;
		justify-content: flex-start;
		border-bottom: 1px solid #E2E2E2;
		font-size:28rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		/* align-items: center; */
	}
	.replacement-content>view:last-child {
		border: none;
	}
	.replacement-content image {
		width: 19rpx;
		height: 30rpx;
		display: block;
	}
	.replacement-content input {
		height: 100%;
	}
	.goods-state  {
		justify-content: space-between !important;
	}
	.state {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.refund-amount text:last-child {
		font-size:28rpx;
		font-family:PingFang SC;
		color:rgba(224,18,18,1);
	}
	/* 上传图片 start */
	.upload-image {
		background: #FFFFFF;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 0 32rpx;
	}
	.upload-image view {
		height: 100rpx;
		line-height: 100rpx;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.upload-image image {
		width: 223rpx;
		height: 200rpx;
		display: block;
	}
	#commit {
		width: 100%;
		height: 100rpx;
		background: #F9B72D;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: center;
		border-radius: 50rpx;
		margin-top: 35%;
	}
	
</style>
