<template>
	<view class="collection">
		<view class="collection-list" v-for="(item, index) in allData " :key="index">
			<view class="details-list">
				<view class="left">
					<view class="avatar">
						<image :src="item.msg.head" mode=""></image>
					</view>
					<view class="details">
						<view class="name">{{item.msg.nickName}} <image src="../../../static/fans-logo.png" mode=""></image></view>
						<view class="time">{{item.createTime}}</view>
						<view class="follow">{{item.msg.text}}</view>
					</view>
				</view>
				<view class="right">
					<!-- {{item.msg.imgList.fileUrl}} -->
					<!-- <image :src="item.msg.imgList" mode=""></image> -->
				</view>
			</view>
		</view>
		<!-- <view class="collection-list">
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
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: '',
				count: 0,
				type: '',
				allData: [],
				collectionImg: ''
			}
		},
		onLoad(option) {
			this.count = option.count;
			this.type = option.type;
			
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
			init() {
				if(this.count == 0) {
					this.count = 100;
				}
				uni.request({
					url: this.url + "/controller/usercontroller/getusermsg",
					method: 'POST',
					data: {pageIndex: 1,pageSize: this.count, msgType: this.type},
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						if(res.data.code == 200) {
							let data = res.data.data.dataList;
							console.log(data[0].msg);
							// console.log(data)
							// for(let i=0; i<data.length; i++) {
							// 	data[i].msg = JSON.parse(data[i].msg);
							// }
							this.allData = data;
						}
						if(res.data.code == 407) {
							uni.showToast({
								title: '请重新登录'
								
							})
						}
					})
				})
			}
			
		}
	}
</script>

<style>
	@import '../../../static/css/information.css'; /*引入收藏点赞消息的样式*/
</style>
