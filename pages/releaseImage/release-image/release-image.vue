<template>
	<view class="release">
		<view class="desc">
			<textarea placeholder="多多分享想法和经验..."  maxlength="200" class="release-text" v-model="desc"  @input = "descInput"/>
			<view class="num">{{remnant}}/200</view>
		</view>
		<view class="topic">
			<view class="left">
				<image src="../../../static/topic/topic.png" mode=""></image>
				<view>参与话题</view>
			</view>
			<view class="right">
				<view>选择合适的话题会获得更多关注哦~</view>
				<image src="../../../static/topic/arrow.png" mode=""></image>
			</view>
		</view>
		
		<!-- 上传图片 start -->
		<view class="upload-list">
			<view class="img">
				<image src="../../../static/topic/upload.png" mode=""></image>
				<image src="../../../static/topic/deletes.png" mode="" class="delete"></image>
			</view>
			<view class="img">
				<image src="../../../static/topic/upload.png" mode=""></image>
				<image src="../../../static/topic/deletes.png" mode="" class="delete"></image>
			</view>
			<view class="img">
				<image src="../../../static/topic/upload.png" mode=""></image>
				<image src="../../../static/topic/deletes.png" mode="" class="delete"></image>
			</view>
			<image src="../../../static/topic/add-upload.png" mode=""></image>
		</view>
		
		<!-- 底部 start -->
		<view class="bottom">
			<image src="../../../static/topic/img.png" mode=""></image>
			<view>存草稿</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				remnant: 0,
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		        console.log(option); //打印出上个页面传递的参数。
		        // console.log(option); //打印出上个页面传递的参数。
		    },
		methods: {
			descInput() {
				this.remnant = e.detail.value.length
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
	}
	.desc {
		position: relative;
	}
	.release-text {
		width: 100%;
		/* border: 1px solid red; */
		border-top: 1px solid #E2E2E2;
		border-bottom: 1px solid #E2E2E2;
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		font-size: 28rpx;
	}
	.num {
		position: absolute;
		right: 30rpx;
		bottom: 15rpx;
		color: #999999;
		font-size: 24rpx;
		font-weight: bold;
	}
	.topic {
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		font-size: 22rpx;
		font-weight: 500;
		display: flex;
		justify-content: space-between;
	}
	.left {
		width: 160rpx;
		height: 50rpx;
		line-height: 50rpx;
		color: #F9B72C;
		background: rgba(249,183,44, .2);
		border-radius: 30rpx;
		display: flex;
		justify-content: flex-start;
		text-align: center;
	}
	.left image {
		width: 25rpx;
		height: 25rpx;
		display: block;
		margin-top: 12rpx;
		margin-left: 22rpx;
		margin-right: 6rpx;
	}
	.right image {
		width: 15rpx;
		height: 25rpx;
		display: block;
		margin-top: 2px;
		margin-left: 4px;
	}
	.right {
		color: #999999;
		display: flex;
		justify-content: flex-start;
	}
	/* 图片上传 start */
	.upload-list {
		box-sizing: border-box;
		padding: 0 30rpx;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.upload-list image {
		width: 221rpx;
		height: 208rpx;
		display: block;
	}
	.upload-list .img {
		position: relative;
		width: 30%;
		margin-right: 28rpx;
		margin-bottom: 15rpx;
	}
	.upload-list .img:nth-of-type(3n) {
		margin: 0;
	} 
	.delete {
		position: absolute;
		width: 26rpx !important;
		height: 26rpx !important;
		display: block;
		top: 5%;
		right: 0rpx;
	}
	/* 底部 start */
	.bottom {
		width: 100%;
		position: fixed;
		bottom: 0;
		height:100rpx;
		/* line-height: 100rpx; */
		background:rgba(255,255,255,1);
		box-shadow:4px -2px 9px 0px rgba(138,138,138,0.09);
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 30rpx;
		color: #666666;
		font-weight: 500;
		font-size: 26rpx;
	}
	.bottom image {
		width: 42rpx;
		height: 36rpx;
		display: block;
	}
	.bottom view {
		width: 108rpx;
		height: 45rpx;
		line-height: 45rpx;
		border-radius: 23rpx;
		border: 1px solid #999999;
		text-align: center;
	}
</style>
