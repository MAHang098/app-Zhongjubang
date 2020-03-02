<template>
    <view>
		<!-- <div class="release-video">
		    <div class="back" @tap="back"><image style="width:15rpx;height:31rpx;" src="http://www.zhongjubang.com/api/upload/static/img/topicDetails/back.png" mode="" /></div> 
			<image class="fly" style="width:39rpx;height:37rpx;" src="http://www.zhongjubang.com/api/upload/static/img/releaseVideo2/share.png" mode="" />
		</div> -->
		
		
        <web-view :src="url"></web-view>
    </view>
</template>
<script>
export default {
    data() {
		return {
			webviewStyles: {
				progress: {
					color: '#FF3333'
				}
			},
			url: ''
		}
    },
	onLoad(options){
		// this.url = options.urlWebview
		let height
		let width
		let token
		uni.getStorage({
			key:"token",
			success: function (res) {
				token = res.data
			}
		})
		uni.getSystemInfo({
		    success: function (res) {
				height = res.screenHeight
				// height = res.screenHeight - 64
				width = res.screenWidth
			},
		})
		// this.url = "http://192.168.0.131:8081/#/pages/swiper-vertical2/swiper-vertical2?token=" + token + "&h=" + height + "&w=" + width + "&id=" + options.id + "&type=" + options.type
		this.url = "http://video.zhongjubang.com/#/pages/swiper-vertical2/swiper-vertical2?token=" + token + "&h=" + height + "&w=" + width + "&id=" + options.id + "&type=" + options.type
		// this.url = "http://192.168.1.6:8081/#/pages/swiper-vertical2/swiper-vertical2?token=" + token + "&h=" + height + "&w=" + width + "&id=" + options.id + "&type=" + options.type
		console.log(this.url)
	},
	methods: {
		back(){
			uni.navigateBack()
		}
	}
}
</script>
<style>
	/* 头部样式start */
	.release-video{
		width:750rpx;
		position:  fixed;
		z-index:10000 !important;
		top: 0;
		left: 0;
		width:750rpx;
		height:64px;
		background-color:rgba(0,0,0,1);
	}
	.back{
		position:  absolute;
		z-index:10000 !important;
		left: 31rpx;
		top: 67rpx;
		width: 15px;
		height: 51rpx;
	}
	.fly{
		position:  absolute;
		right: 27rpx;
		top: 67rpx;
		width: 39rpx;
		height: 37rpx;
	}
</style>