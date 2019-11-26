<template>
	<view>
        <view class="release-video">
            <image class="back" src="../../static/img/back.png" mode="" />
			<text class="title">发布视频</text>
			<image class="draft" src="../../static/img/releaseVideo/draft.png" mode="" />
			<image class="fly" src="../../static/img/releaseVideo/fly.png" mode="" />
        </view>
		<text class="text">多多分享想法和经验...</text>
		<text class="text2">1/200</text>
		<view class="horizon"></view>
		<view class="video">
			<image class="add" src="../../static/img/releaseVideo/add.png" mode="" />
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
    .release-video{
        position: relative;
        width:750rpx;
        height:128rpx;
        background:rgba(255,255,255,1);
		border-bottom: 2rpx solid rgba(226,226,226,1);
    }
    .back{
        position: absolute;
        left: 31rpx;
        bottom: 26rpx;
        width:54rpx;
        height:54rpx;
    }
    .back image{
        width:54rpx;
        height:54rpx;
    }
	.title{
		position: absolute;
		left: 305rpx;
		bottom: 26rpx;
		font-size:36rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.draft{
	    position: absolute;
	    right: 87rpx;
	    bottom: 24rpx;
	    width:108rpx;
	    height:45rpx;
	}
	.draft image{
	    width:108rpx;
	    height:45rpx;
	}
	.fly{
	    position: absolute;
	    right: 30rpx;
	    bottom: 30rpx;
	    width:36rpx;
	    height:36rpx;
	}
	.fly image{
	    width:36rpx;
	    height:36rpx;
	}
	.text{
		position: absolute;
		left: 34rpx;
		top:136rpx;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.text2{
		position: absolute;
		right: 31rpx;
		top:316rpx;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.horizon{
		position: absolute;
		top:368rpx;
		width:750rpx;
		height:2rpx;
		background:rgba(226,226,226,1);
	}
	.video{
		position: absolute;
		left: 29rpx;
		top:398rpx;
		width:221rpx;
		height:208rpx;
	}
	.video image{
		width:221rpx;
		height:208rpx;
	}
</style>
