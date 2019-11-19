<template>
    <view class="wrap">
		<view class="pic">
			<image src="../../static/img/release/pic.png" mode="" />
		</view>
		<text class="pic-text">图片</text>
		<view class="video">
			<image src="../../static/img/release/video.png" mode="" />
		</view>
		<text class="video-text">视频</text>
		<view class="close">
			<image src="../../static/img/release/close.png" mode="" />
		</view>
	</view>
</template>

<script>
    

    export default {
        
        methods: {
            
            
        }
    }
</script>

<style>
	.wrap{
		width:750rpx;
		height:1334rpx;
		background:rgba(255,255,255,1);
		opacity:0.96;
	}
	.pic{
		position: absolute;
		left: 89rpx;
		bottom: 173rpx;
		width: 234rpx;
		height: 234rpx;
	}
	.pic image{
		width: 234rpx;
		height: 234rpx;
	}
	.pic-text{
		position: absolute;
		left: 175rpx;
		bottom: 155rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.video{
		position: absolute;
		right: 67rpx;
		bottom: 157rpx;
		width: 272rpx;
		height: 272rpx;
	}
	.video image{
		width: 272rpx;
		height: 272rpx;
	}
	.video-text{
		position: absolute;
		right: 173rpx;
		bottom: 155rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.close{
		position: absolute;
		right: 356rpx;
		bottom: 52rpx;
		width: 38rpx;
		height: 38rpx;
	}
	.close image{
		width: 38rpx;
		height: 38rpx;
	}
</style>
