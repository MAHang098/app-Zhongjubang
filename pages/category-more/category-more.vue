<template>
	<view class="contant">
		<view class="top">
			<image @tap="back" class="back" style="width:26upx;height:35upx;" src="../../static/img/category/back.png" />
			<text class="title">北欧极简</text>
			<image class="search" style="width:42upx;height:42upx;" src="../../static/img/category/search.png" />
		</view>
		<view class="G-list_content">
			<view v-for="(item, index) in tabType" :class="index == current ? 'active' : '' " @click="changeProduct(index)" :key="index">
				{{item}}
				<text v-bind:class="index == current ? 'active-status' : '' "></text>
			</view>
		</view>
		<view class="category-content">
			<view class="category-content-box">
				<image class="category-content-image" style="width:345upx;height:345upx;" src="../../static/img/category/image.png" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				tabType: ['综合', '价格', '销量', '评分'],
				current: 0,
				
			}
		},
		onShow() {
			
		},
		methods: {
			// 导航栏切换
			changeProduct(index) {
				this.current = index;
				let num = index + 1;
				console.log(num)
			},
			back(){
				uni.navigateBack()
			}
		},
	}
</script>

<style>
	.top{
		position: relative;
		height: 128upx;
		border-bottom: 1px solid rgba(226,226,226,1);
	}
	.back{
		position: absolute;
		left: 25upx;
		bottom: 28upx;
	}
	.title{
		position: absolute;
		left: 304upx;
		top: 67upx;
		font-size:36upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	.search{
		position: absolute;
		left: 682upx;
		top: 63upx;
	}
	/* 导航栏分类 */
	.G-list_content {
	    box-sizing: border-box;
		height: 80upx;
		background: #FFFFFF;
		padding-left: 90upx;
		border-bottom: 1px solid rgba(226,226,226,1);
	}
	.G-list_content view {
		width: 25%;
		height: 34rpx;
		font-size:28upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height: 80upx;
		display: inline-block;
		/* border-right: 1rpx solid #E2E2E2; */
	}
	.G-list_content view:last-child {
		border: none;
	}
	.active {
		color: #F9B72C !important;
		font-weight: bold;
		
	}
	.category-content{
		width: 750upx;
	}
	.category-content-box{
		position: relative;
		width:345upx;
		height:470upx;
		background:rgba(255,255,255,1);
		border:1px solid rgba(231,231,231,1);
		box-shadow:0px 0px 7upx 0px rgba(136,136,136,0.2);
		border-radius:6upx;
	}
	.category-content-image{
		position: absolute;
		top: 0;
		left: 0;
	}
</style>

