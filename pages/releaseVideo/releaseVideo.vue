<template>
	<view>
        <view class="release-video">
            <image src="../../static/img/back.png" mode="" />
            <!-- <view class="back"></view> -->
            <!-- <text class="release-video-text"></text> -->
            <!-- <image class="back" src="../../static/img/releaseVideo/back.png" mode="" /> -->
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
</style>
