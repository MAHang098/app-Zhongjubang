<template>
	<view class="collection">
		<view class="collection-list" v-for="(item, index) in allData" :key="index">
			<view class="details-list">
				<view class="left">
					<view class="avatar">
						<image src="../../../static/avatar.png" mode=""></image>
					</view>
					<view class="details">
						<view class="name">{{item.msg.nickName}} <image src="../../../static/fans-logo.png" mode=""></image></view>
						<view class="time">{{item.createTime}}</view>
						<view class="follow">{{item.msg.text}}</view>
					</view>
				</view>
				<view class="right">
					<image :src="item.topImg" v-if="item.topImg" @click.stop="contentDetail(item.msg.id, item.topImg)"></image>
					<image :src="item.msg.imgList[0].fileUrl" mode="" v-else @click.stop="contentDetail(item.msg.id, item.topImg)"></image>
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
				allData: [],
				type: ''
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
			// 所有点赞
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
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						if(res.data.code == 200) {
							let data = res.data.data.dataList;
							for(let i=0; i<data.length; i++) {
								data[i].msg = JSON.parse(data[i].msg);
							}
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
			// 跳转详情
			contentDetail(id, img) {
				// console.log(id, img)
				if(img) {
					// 跳转到视频详情
				} else {
					// 跳转到G圈
					uni.navigateTo({
						url: '/pages/releaseImage-details/releaseImage-details?id=' + id
					})
				}
			}
		}
	}
</script>

<style>
	@import '../../../static/css/information.css'; /*引入收藏点赞消息的样式*/
</style>
