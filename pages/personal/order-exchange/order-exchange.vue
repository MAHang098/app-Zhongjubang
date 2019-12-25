<template>
	<view class="order-exchange">
		<view class="no-adress" @click="addAdress" v-show="showAdress">
			<view>请添加收获地址</view>
			<image src="../../../static/img/information/right-arrow.png" mode=""></image>
		</view>
		
		<!-- 默认地址 start -->
		<view class="have-class" @click="addAdress" v-show="!showAdress">
			<!-- <view class="adress-image"> -->
				<image src="../../../static/img/user/hot-point/adress-image.png" mode=""></image>
			<!-- </view> -->
			<view class="adress-detail">
				<text>{{name}}</text>
				<text>{{phone}}</text>
				<view class="adress">
					{{adress}} 
				</view>
			</view>
			<!-- <view class="arrow-right"> -->
				<image src="../../../static/img/information/right-arrow.png" mode=""></image>
			<!-- </view> -->
		</view>
		<!-- 默认地址 end -->
		
		<!-- 商品详情 start -->
		<view class="exchange-list">
			<view class="product-image">
				<image src="../../../static/img/user/hot-point/exchange.png" mode=""></image>
			</view>
			<view class="content">
				<text class="title" :class="content.length > 16 ? '' : 'in'">{{content | ellipsis}}</text>
				<text class="scrore">{{singleScore}}热度分</text>
				<view class="number">
					<text class="reduce" @click.stop="reduce">-</text>
					<text class="input">{{num}}</text>
					<text class="add" @click.stop="add">+</text>
				</view>
			</view>
		</view>
		<!-- 商品详情 end -->
		
		<!-- 底部 start -->
		<view class="foot">
			<view class="available">可用热度分：{{available}}</view>
			<view class="total">
				<view>
					<text>合计：</text>
					<text>{{totleScore}}热度分</text>
				</view>
				<view @click="exchange">兑换</view>
			</view>
		</view>
		<!-- 底部 end -->
		
		<!-- 弹窗 start -->
		<uni-popup :show="show" :popupType ="popupType" :custom="true" :mask-click="false" >
			<view class="uni-tip">
				<!-- <view class="uni-tip-title">提示</view> -->
				<view class="uni-tip-content">您还没有添加收货地址，请点击 添加</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="cancelPopup('tip')" >取消</view>
					<view class="uni-tip-button insist-skip" @click="cancelPopup('skip')">确定</view>
				</view>
			</view>
		</uni-popup>
		<!-- 弹窗 end -->
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components:{ uniPopup},
		data() {
			return {
				show: false,
				popupType: '',
				content: '有温度的保温杯有',
				name: '',
				phone: '',
				adress: '',
				showAdress: true,
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
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
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
			// 计算总热度分
			total() {
				this.totleScore =  this.num * this.singleScore;
			},
			// 增加兑换数量
			add() {
				this.num++;
				this.total();
			},
			// 减少兑换数量
			reduce() {
				if(this.num > 0) {
					this.num--;
				}
				this.total();
			},
			// 兑换商品
			exchange() {
				if(this.totleScore > this.available) {
					uni.showToast({
						title: '兑换成功',
						// icon: 'none'
					});
				}
			},
			// 弹出层弹出的方式  i:当前标签的下标, name: 当前标签的name
			togglePopup(type, open) {
				switch (type) {
					case 'top':
						this.content = '顶部弹出 popup'
						break
			
					case 'bottom':
						this.content = '底部弹出 popup'
						break
					case 'center':
						this.content = '居中弹出 popup'
						break
				}
				this.popupType = type
				if (open === 'tip') {
					this.show = true
				} else {
					this.$refs[open].open()
				}
			},
			// 取消弹出层
			cancelPopup(type) {
				if (type === 'tip') {
					this.show = false
					return
				}
				if(type === 'skip') {
					uni.navigateTo({
						url: '/pages/receiving-address/receiving-address'
					})
				}
			},
		}
	}
</script>

<style>
	@import '../../../static/css/popup.css'; /*引入收藏点赞消息的样式*/
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
		/* background: #F9F9F9; */
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
		margin-bottom: 20rpx;
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
	/* .adress-image imag{
		width: ;
	} */
	/* 商品详情 start */
	.exchange-list {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 30rpx;
		display: flex;
		background: #FFFFFF;
	}
	.product-image {
		width: 238rpx;
		height: 207rpx;
		background: #FFFFFF;
		border-radius: 6rpx;
		margin-right: 30rpx;
	}
	.content {
		width: 80%;
		position: relative;
	}
	.product-image image {
		width: 100%;
		height: 100%;
		display: block;
		border-radius: 6rpx;
	}
	
	.title {
		font-size:28rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		display: block;
		/* height: 76rpx; */
		margin-top: 36rpx;
		/* margin-bottom: 20rpx; */
	}
	.in {
		margin-top: 54rpx;
	}
	.scrore {
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(244,51,72,1);
	}
	.number {
		position: absolute;
		/* text-align: right; */
		right: 0;
		top: 77px;
	}
	.number text {
		width:45rpx;
		height:41rpx;
		line-height: 41rpx;
		background:rgba(242,242,242,1);
		border-radius:2rpx;
		display: inline-block;
		margin-right: 10rpx;
		text-align: center;
		font-size:30rpx;
	}
	.input {
		color: #666666;
		font-size: 24rpx !important;
	}
	.add {
		color: #666666;
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
</style>
