<template>
    <view>
        <!-- <web-view :webview-styles="webviewStyles" src="http://www.zhongjubang.com/h5/agreement.html"></web-view> -->
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
		this.url = "http://192.168.0.131:8081/#/pages/swiper-vertical2/swiper-vertical2?token=" + token + "&h=" + height + "&w=" + width + "&id=" + options.id + "&type=" + options.type
		console.log(this.url)
	},
	methods: {
		
	}
}
</script>
<style>

</style>