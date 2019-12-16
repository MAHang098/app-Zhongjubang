<template>
	<view class="collection">
		<view class="collection-list">
			<view class="details-list">
				<view class="left">
					<view class="avatar">
						<image src="../../../static/avatar.png" mode=""></image>
					</view>
					<view class="details">
						<view class="name">我是一颗玻璃心 <image src="../../../static/fans-logo.png" mode=""></image></view>
						<view class="time">11/21 10:23</view>
						<view class="follow">收藏了你的照片</view>
					</view>
				</view>
				<view class="right">
					<image src="../../../static/collection.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="collection-list">
			<view class="details-list">
				<view class="left">
					<view class="avatar">
						<image src="../../../static/avatar.png" mode=""></image>
					</view>
					<view class="details">
						<view class="name">我是一颗玻璃心 <image src="../../../static/fans-logo.png" mode=""></image></view>
						<view class="time">11/21 10:23</view>
						<view class="follow">收藏了你的照片</view>
					</view>
				</view>
				<view class="right">
					<image src="../../../static/collection.png" mode=""></image>
				</view>
			</view>
			
		</view>
		<view class="collection-list">
			<view class="details-list">
				<view class="left">
					<view class="avatar">
						<image src="../../../static/avatar.png" mode=""></image>
					</view>
					<view class="details">
						<view class="name">我是一颗玻璃心 <image src="../../../static/fans-logo.png" mode=""></image></view>
						<view class="time">11/21 10:23</view>
						<view class="follow">收藏了你的照片</view>
					</view>
				</view>
				<view class="right">
					<image src="../../../static/collection.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 0,
				allData: []
			}
		},
		onLoad(option) {
			this.count = option.count;
		},
		mounted() {
			
			uni.getStorage({
				key:"token",
				success:((res) => {
				this.token = res.data;
			  })
			});
			this.init();
		},
		methods: {
			// 所有点赞
			init() {
				if(this.count == 0) {
					this.count = 100;
				}
				uni.request({
					url: this.url + "/controller/usercontroller/getfanattentionrelationlist",
					method: 'POST',
					data: {pageIndex: 1,pageSize: this.count},
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						if(res.data.code == 200) {
							let data = res.data.data;
							this.allData = data;
						}
						if(res.data.code == 407) {
							uni.showToast({
								title: '请重新登录'
								
							})
						}
					})
				})
			},
		}
	}
</script>

<style>
	@import '../../../static/css/information.css'; /*引入收藏点赞消息的样式*/
</style>
