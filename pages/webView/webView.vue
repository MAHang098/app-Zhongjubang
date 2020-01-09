<template>
	<view>
		<image @tap="goBack" class="image" src="http://www.zhongjubang.com/api/upload/static/img/G-circle/search-back.png" mode=""></image>
		 <web-view :src="lian"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lian: '',
			    webviewStyles: {
			        progress: {
			            color: '#FF3333'
			        }
			    }
			}
		},
		onLoad(options){
			this.lian = options.lian
		},
		methods: {
			goBack(){
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	.image{
		position: fixed;
		width: 15px;
		height: 25px;
		left: 5px;
		top: 16px;
		z-index: 1000;
	}
</style>
