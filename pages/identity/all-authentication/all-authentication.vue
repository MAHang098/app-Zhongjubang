<template>
	<view class="rednet">
		<image src="http://www.zhongjubang.com/api/upload/static/img/identity/all-authentication.png" mode="widthFix" class="rednet-img"></image>
		<view class="owner" @click.stop="owner"></view>
		<view class="designer"  @click.stop="designer"></view>
		<view class="rednetA"  @click.stop="rednetA"></view>
		<view class="circle-people"  @click.stop="circlePeople"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			// 跳转到金牌业主
			owner() {
				uni.navigateTo({
					url: '/pages/identity/owner/owner'
				})
			},
			// 跳转到设计达人
			designer() {
				uni.navigateTo({
					url: '/pages/identity/designer/designer'
				})
			},
			// 跳转到网红达人
			rednetA() {
				uni.navigateTo({
					url: '/pages/identity/rednet/rednet'
				})
			},
			// 跳转到居圈达人
			circlePeople() {
				uni.navigateTo({
					url: '/pages/identity/circle-people/circle-people'
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
	.owner, .designer, .rednetA, .circle-people {
		width: 30%;
		height: 17.4%;
		position: absolute;
		top: 0;
		right: 4%;
	}
	.owner {
		top: 15.7%;
	}
	.designer {
		top: 36.5%;
	}
	.rednetA {
		top: 57%;
	}
	.circle-people {
		top: 78%;
	}
</style>
