<template>
	<view class="order-exchange">
		<view class="no-adress" @click="addAdress" v-show="showAdress">
			<view>请添加收获地址</view>
			<image src="../../static/img/information/right-arrow.png" mode=""></image>
		</view>
		
		<!-- 默认地址 start -->
		<view class="have-class" @click="addAdress" v-show="!showAdress">
			<!-- <view class="adress-image"> -->
				<image src="../../static/img/user/hot-point/adress-image.png" mode=""></image>
			<!-- </view> -->
			<view class="adress-detail">
				<text>{{name}}</text>
				<text>{{phone}}</text>
				<view class="adress">
					{{adress}} 
				</view>
			</view>
			<!-- <view class="arrow-right"> -->
				<image src="../../static/img/information/right-arrow.png" mode=""></image>
			<!-- </view> -->
		</view>
		<!-- 默认地址 end -->
		
		<!-- 商品详情 start -->
		<view class="order-content">
			<view class="order-title">
				<view class="order-title-image"></view>
				<text class="order-title-text">索菲亚衣柜</text>
			</view>
		</view>
		<!-- 商品详情 end -->
		
		<!-- 底部 start -->
		<view class="footer">
			<text class="total">合计:</text>
			<text class="price">￥5800.00</text>
			<view class="balance">提交订单</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				showAdress: true,
			}
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 30) {
				return value.slice(0,30) + '...'
			  }
			  return value
			}
		},
		onShow() {
			let that = this;
			uni.getStorage({
				key:"token",
				success: function (res) {
				that.token = res.data;
			  }
			})
			let adress = that.$store.state.adress;
			if(adress.userName != undefined) {
				this.showAdress = true;
				console.log(this.showAdress)
				that.name = adress.userName;
				that.phone = adress.userPhone;
				that.adress = adress.userAddress;
				that.showAdress = !that.showAdress;
				return;
			} 
			that.init();
			that.total();
		},
		methods: {
			// 获取默认地址
			init() {
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				uni.request({
					url: this.url + 'controller/usercontroller/getuseradresslist',
					method: 'post',
					header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
					success: ((res) => {
						uni.hideLoading();
						if(res.data.code == 200) {
							let data = res.data.data;
							for(let i =0; i<data.length; i++) {
								if(data[i].isDefault == 1) {
									this.showAdress = !this.showAdress;
									this.name = data[i].userName;
									this.phone = data[i].userPhone;
									let obj = JSON.parse(data[i].userAddress);
									let city = obj.city.split('-');
									this.adress = city[0] + city[1] + city[2] + obj.detail;
									let objs = {
										userName: data[i].userName,
										userPhone: data[i].userPhone,
										userAddress: this.adress,
									}
									this.$store.commit('getAdress', objs);
									break;
								}
							}
						}
						
					})
				});
			},
			// 添加地址
			addAdress() {
				this.$store.commit('defaultPage', 'orderExchange');
				uni.navigateTo({
					url: '/pages/receiving-address/receiving-address'
				})
			},
			
		}
	}
</script>

<style>
	.order-exchange {
		background: #F9F9F9;
		height: 100%;
	}
	.no-adress {
		height: 100rpx;
		line-height: 100rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size:30rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.no-adress image {
		width: 15rpx;
		height: 30rpx;
		display: block;
	}
	.have-class {
		width: 100%;
		height: 200rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: 0 30rpx;
		background: #FFFFFF;
		bottom: 20rpx;
		border-top: 1px solid #E2E2E2;
	}
	.have-class image:first-child {
		width: 32rpx;
		height: 30rpx;
		display: block;
	}
	.have-class image:last-child {
		width: 15rpx;
		height: 30rpx;
		display: block;
	}
	.adress-detail text {
		margin-right: 20px;
	}
	.adress-detail {
		width: 86%;
		font-size: 28rpx;
		color: #333333;
		line-height: 50rpx;
	}
	/* 商品详情 start */
	.order-content{
		position: relative;
		width: 750upx;
		height: 521upx;
	}
	.order-title{
		position: relative;
		background: #fff;
		height: 80upx;
	}
	.order-title-image{
		position: absolute;
		left: 30upx;
		top: 30upx;
		width:27upx;
		height:24upx;
		background: #f0f;
	}
	.order-title-text{
		position: absolute;
		left: 67upx;
		top: 30upx;
		font-size:28upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	
	
	/* 底部 start */
	.foot {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: auto;
	}
	.available {
		height: 66rpx;
		line-height: 66rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
		background: rgba(249,183,44, .2);
		color: #F9B72C;
		font-size: 26rpx;
	}
	.total {
		width: 100%;
		height: 106rpx;
		line-height: 106rpx;
		display: flex;
	}
	.total view {
		width: 50%;
		text-align: center;
	}
	.total  text {
		font-size:32rpx;
		font-family:PingFang SC;
	}
	.total  text:first-child {
		color: #333333;
	}
	.total  text:last-child {
		color: #F43348;
	}
	.total view:last-child {
		background: #F9B72C;
		color: #FFFFFF;
		font-size: 36rpx;
	}
	.uni-tip-content {
		width: 450rpx;
		font-size:32rpx;
	}
	/* 底部内容 */
	.footer{
		position: fixed;
		width:750upx;
		height:105upx;
		border-top: 1px solid rgba(226,226,226,1);
		background:rgba(249,249,249,1);
		bottom: 0;
		
	}
	.total{
		position: absolute;
		left: 134px;
		top: 2px;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(102,102,102,1);
	}
	.price{
		position: absolute;
		left: 167px;
		top: 22px;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:#F43348;
	}
	.balance{
		position: absolute;
		left: 242px;
		width:310upx;
		height:105upx;
		background:rgba(249,183,44,1);
		font-size:36upx;
		font-family:PingFang SC;
		color:rgba(255,255,255,1);
		line-height: 105upx;
		text-align: center;
	}
</style>
