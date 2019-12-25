<template>
	<view class="rednet">
		<image src="../../../static/img/identity/circle.png" mode="widthFix" class="rednet-img"></image>
		<image src="../../../static/img/identity/authentication.png" mode="widthFix" class="authentication" @click.stop="circlePeople"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			circlePeople() {
				uni.navigateTo({
					url: '/pages/identity/write/write'
				})
			}
		}
	}
</script>

<style>
	.rednet {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
	}
	.rednet-img {
		width: 100%;
		height: 100%;
		display: block;
	}
	.authentication {
		width: 85.3%;
		position: absolute;
		bottom: 1.2%;
		right: 0;
		left: 0;
		margin: 0 auto;
	}
</style>
