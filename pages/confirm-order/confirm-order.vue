<template>
	<view class="order-exchange">
		<view class="no-adress" @click="addAdress" v-show="showAdress">
			<view>请添加收获地址</view>
			<image src="http://www.zhongjubang.com/api/upload/static/img/information/right-arrow.png" mode=""></image>
		</view>
		
		<!-- 默认地址 start -->
		<view class="have-class" @click="addAdress" v-show="!showAdress">
			<!-- <view class="adress-image"> -->
				<image src="http://www.zhongjubang.com/api/upload/static/img/user/hot-point/adress-image.png" mode=""></image>
			<!-- </view> -->
			<view class="adress-detail">
				<text>{{name}}</text>
				<text>{{phone}}</text>
				<view class="adress">
					{{adress}} 
				</view>
			</view>
			<!-- <view class="arrow-right"> -->
				<image src="http://www.zhongjubang.com/api/upload/static/img/information/right-arrow.png" mode=""></image>
			<!-- </view> -->
		</view>
		<!-- 默认地址 end -->
		
		<!-- 商品详情 start -->
		<view class="order-content">
			<view class="order-title">
				<view class="order-title-image"></view>
				<text class="order-title-text">索菲亚衣柜</text>
			</view>
			<view class="car-content">
				<view class="car-all-image"></view>
				<view class="car-all-des">索菲亚衣柜索菲亚衣柜索菲亚衣柜索菲亚衣衣柜索菲亚衣柜</view>
				<text class="car-all-name">全部套装</text>
				<text class="car-all-price">￥5800.00</text>
				<text class="car-all-count">x1</text>
				<text></text>
			</view>
			<text class="car-send">配送费</text>
			<text class="free-send">免费配送</text>
			<view class="horizen"></view>
			<text class="car-coupon">优惠券</text>
			<text class="car-nouse">暂无可用</text>
			<image class="car-image" style="width: 12upx;height: 23upx;" src="http://www.zhongjubang.com/api/upload/static/img/information/right-arrow.png" mode=""></image>
		</view>
		<view class="mask">
			<textarea placeholder="备注："  v-model="desc"  maxlength="200" class="release-text"  @input = "descInput"/>
			<view v-show="showMask" class="mask-text">给卖家留言</view>
			<view v-show="!showMask" class="mask-num">{{remnant}}/200</view>
		</view>
		
		<!-- 商品详情 end -->
		
		<!-- 底部 start -->
		<view class="footer">
			<text class="total">合计:</text>
			<text class="price">￥5800.00</text>
			<view class="balance">提交订单</view>
		</view>
		<!-- 底部 end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				remnant: 0,
				desc: '',
				show: false,
				showAdress: true,
				showMask: true,
				popupType: '',
				content: '有温度的保温杯有',
				name: '',
				phone: '',
				adress: '',
				available: 0, //可用热度分
				singleScore: 200,
				totleScore: 0,
				num: 1
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
		},
		methods: {
			// 留言
			descInput(e) {
				this.remnant = e.detail.value.length
				this.showMask = !this.showMask
			},
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
							if(res.data.code==421){
								uni.navigateTo({
									url: '/pages/loginPhone/loginPhone'
								})
							}
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
		background: #fff;
		box-shadow:7upx 0px 5upx 0px rgba(202,202,202,0.31);
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
	.car-content{
		position: relative;
		width:750upx;
		height:190upx;
		background:rgba(247,247,247,1);
	}
	.car-all-command{
		position: absolute;
		left: 21upx;
		top: 157upx;
		width:28upx;
		height:28upx;
		background:rgba(255,101,1,0);
		border:1px solid rgba(153, 153, 153, 1);
		border-radius:50%;
	}
	.car-all-image{
		position: absolute;
		left: 30upx;
		top: 21upx;
		width:150upx;
		height:150upx;
		background:#f0f;
	}
	.car-all-des{
		position: absolute;
		left: 200upx;
		top: 25upx;
		width:460upx;
		height:60upx;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:32upx;
	}
	.car-all-name{
		position: absolute;
		left: 200upx;
		top: 103upx;
		font-size:24upx;
		font-family:PingFang SC;
		color:rgba(153,153,153,1);
	}
	.car-all-price{
		position: absolute;
		left: 200upx;
		top: 149upx;
		font-size:28upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(244,51,72,1);
	}
	.car-all-count{
		position: absolute;
		left: 674upx;
		top: 151upx;
		font-size:26upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	.car-send{
		position: absolute;
		left: 30upx;
		top: 354upx;
		font-size:26upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.free-send{
		position: absolute;
		left: 613upx;
		top: 354upx;
		font-size:26upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(153,153,153,1);
	}
	.horizen{
		position: absolute;
		left: 30upx;
		top: 418upx;
		width:690upx;
		height:1px;
		background:rgba(226,226,226,1);
	}
	.car-coupon{
		position: absolute;
		left: 30upx;
		top: 455upx;
		font-size:26upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.car-nouse{
		position: absolute;
		left: 594upx;
		top: 454upx;
		font-size:26upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(153,153,153,1);
	}
	.car-image{
		position: absolute;
		left: 709upx;
		top: 462upx;
	}
	.mask{
		position: relative;
		margin-top: 10upx;
		width:750upx;
		height:448upx;
		background:rgba(255,255,255,1);
		box-shadow:7upx 0px 5upx 0px rgba(202,202,202,0.31);
	}
	.release-text{
		position: absolute;
		top: 0;
		left: 0;
		width:750upx;
		height:448upx;
		background:rgba(255,255,255,1);
		box-shadow:7upx 0px 5upx 0px rgba(202,202,202,0.31);
		font-size:26upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		padding: 29upx;
		box-sizing: border-box;
	}
	.mask-text{
		position: absolute;
		top: 27upx;
		left: 588upx;
		font-size:26upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(153,153,153,1);
	}
	.mask-num{
		position: absolute;
		top: 400upx;
		left: 638upx;
		font-size:26upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(153,153,153,1);
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
