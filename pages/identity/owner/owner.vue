<template>
	<view class="rednet">
		<image src="http://www.zhongjubang.com/api/upload/static/img/identity/owner.png" mode="widthFix" class="rednet-img"></image>
		<image src="http://www.zhongjubang.com/api/upload/static/img/identity/authentication.png" mode="widthFix" class="authentication" @click.stop="ownerPeople"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			ownerPeople() {
				uni.navigateTo({
					url: '/pages/identity/owner-people/owner-people'
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
