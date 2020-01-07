<template>
    <view>
        <!-- <web-view :webview-styles="webviewStyles" src="http://www.zhongjubang.com/h5/agreement.html"></web-view> -->
		<div class="release-video">
		    <div class="back" @tap="back"><image style="width:15rpx;height:31rpx;" src="http://www.zhongjubang.com/api/upload/static/img/topicDetails/back.png" mode="" /></div> 
			<image class="fly" style="width:39rpx;height:37rpx;" src="http://www.zhongjubang.com/api/upload/static/img/releaseVideo2/share.png" mode="" />
		</div>
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
			token: '',
			url: ''
		}
    },
	onLoad(options){
		let self = this
		let token
		let height
		let width
		uni.getSystemInfo({
		    success: function (res) {
				// self.height = res.screenHeight - 116
				height = res.screenHeight
				width = res.screenWidth
			},
		})
		uni.getStorage({
			key:"token",
			success: function (res) {
				self.token = res.data
				token = res.data
			}
		})
		// 判断token过期
		const url = "https://www.zhongjubang.com/test/"
		
		//获取短视频内容
		uni.request({
			url: url + "controller/usercontroller/getshortvideobyid",
			data: {shortVideoId:id},
			method: 'POST',
			header : {
				'content-type':'application/x-www-form-urlencoded', 
				'port': 'app',
				'token': token
			},
			success: function (res){
				
				if(res.data.code==421){
					uni.navigateTo({
						url: '/pages/loginPhone/loginPhone'
					})
				}
				if(res.data.code==200){
					self.url = "http://192.168.0.131:8081/#/pages/swiper-vertical2/swiper-vertical2?token=" + token + "&h=" + height + "&w=" + width + "&id=" + options.id + "&type=" + options.type
					console.log(this.url)
				}
			}
		})
		
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
		z-index:1000 !important;
		top: 0;
		left: 0;
		width:750rpx;
		height:64px;
		background-color:rgba(0,0,0,1);
	}
	.back{
		position:  absolute;
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