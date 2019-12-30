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
				Tokens: ''
			}
		},
		methods: {
			// 跳转到金牌业主
			owner() {
				let token;
				let url = this.url
				let self = this
				uni.getStorage({
				    key:"token",
				    success: function (res) {
						token = res.data;
					}
				})
				uni.request({
					url: url + "controller/usercontroller/adduserowner",
					data: {
					},
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
						if(res.data.message=='您已认证'){
							uni.showToast({
							    title: res.data.message,
							    icon: 'none',
							    duration: 2000,
							})
						}
						if(res.data.message=='户主姓名不能为空'){
							uni.navigateTo({
								url: '/pages/identity/owner/owner'
							})
						}
				        
				    }
				})
				
			},
			// 跳转到设计达人
			designer() {
				let token;
				let url = this.url
				let self = this
				uni.getStorage({
				    key:"token",
				    success: function (res) {
						token = res.data;
					}
				})
				uni.request({
					url: url + "controller/usercontroller/addappuserdesigndaren",
					data: {
					},
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
						if(res.data.message=='您已认证'){
							uni.showToast({
							    title: res.data.message,
							    icon: 'none',
							    duration: 2000,
							})
						}
						if(res.data.message=='姓名不能为空'){
							uni.navigateTo({
								url: '/pages/identity/designer/designer'
							})
						}
				        
				    }
				})
				
			},
			// 跳转到网红达人
			rednetA() {
				let token;
				let url = this.url
				let self = this
				uni.getStorage({
				    key:"token",
				    success: function (res) {
						token = res.data;
					}
				})
				uni.request({
					url: url + "controller/usercontroller/addappuserinternetcelebrity",
					data: {
					},
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
						if(res.data.message=='您已认证'){
							uni.showToast({
							    title: res.data.message,
							    icon: 'none',
							    duration: 2000,
							})
						}
						if(res.data.message=='网红名不能为空'){
							uni.navigateTo({
								url: '/pages/identity/rednet/rednet'
							})
						}
				        
				    }
				})
				
			},
			// 跳转到居圈达人
			circlePeople() {
				let token;
				let url = this.url
				let self = this
				uni.getStorage({
				    key:"token",
				    success: function (res) {
						token = res.data;
					}
				})
				uni.request({
					url: url + "controller/usercontroller/addappusergcircledaren",
					data: {
					},
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
						if(res.data.message=='您已认证'){
							uni.showToast({
							    title: res.data.message,
							    icon: 'none',
							    duration: 2000,
							})
						}
						if(res.data.message=='姓名不能为空'){
							uni.navigateTo({
								url: '/pages/identity/circle-people/circle-people'
							})
						}
				        
				    }
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
