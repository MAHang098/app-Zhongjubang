<template>
	<view>
		<view class="detail" v-for="(item, index) in detailList" :key="index">
			<view class="left">
				<view>{{item.log}}</view>
				<view>{{item.createTime}}</view>
			</view>
			<view class="right">
				<view class="num">{{item.value}}</view>
				<image src="../../../static/img/user/hot.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detailList: []
			}
		},
		onLoad() {
			this.init();
		},
		methods: {
			init() {
				let token = '';
				uni.getStorage({
					key:"token",
					success: function (res) {
					 token = res.data;
				  }
				});
				let parmas = {
					pageIndex: 1,
					pageSize: 1000
				}
				uni.request({
					url: this.url + 'controller/usercontroller/getappuserloglists',
					method: 'post',
					data: parmas,
					header : {'content-type':'application/x-www-form-urlencoded', 'token': token, 'port': 'app'},
					success:(res) => {
						uni.hideLoading();
						if(res.data.code == 200) {
							// console.log()
							let data = res.data.data
							this.detailList = data.dataList;
						} else {
							uni.showToast({
							    icon: 'none',
							    title: res.data.message
							});
							uni.hideToast();
						}
					}
				});
			}
		}
	}
</script>

<style>
	.detail:first-child {
		border-top: 1px solid #E2E2E2;
	}
	.detail {
		width: 100%;
		height: 160rpx;
		box-sizing: border-box;
		padding: 35rpx 30rpx;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #E2E2E2;
	}
	.left view:first-child {
		font-size:30rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	.left view:last-child {
		font-size:26rpx;
		font-family:PingFang SC;
		color:rgba(153,153,153,1);
		margin-top: 10rpx;
	}
	.right {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.right view {
		font-size:48rpx;
		font-family:PingFang SC;
		color:rgba(249,183,44,1);
		
	}
	.right image {
		width: 47rpx;
		height: 47rpx;
		display: block;
		margin-left: 15px;
	}
</style>
