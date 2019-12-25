<template>
	<view class="rednet">
		<image src="../../../static/img/identity/designer.png" mode="widthFix" class="rednet-img"></image>
		<image src="../../../static/img/identity/authentication.png" mode="widthFix" class="authentication" @click.stop="designerPeople"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			designerPeople() {
				uni.navigateTo({
					url: '/pages/identity/designer-people/designer-people'
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
