<template>
	<view class="order-exchange">
		<view class="no-adress" @click="addAdress" v-if="JSON.stringify(user_adress)=='{}'">
			<view>请添加收获地址</view>
			<image src="http://www.zhongjubang.com/api/upload/static/img/information/right-arrow.png" mode=""></image>
		</view>
		
		<!-- 默认地址 start -->
		<view class="have-class" @click="addAdress" v-else>
			<!-- <view class="adress-image"> -->
				<image src="http://www.zhongjubang.com/api/upload/static/img/user/hot-point/adress-image.png" mode=""></image>
			<!-- </view> -->
			<view class="adress-detail">
				<text>{{user_adress.userName}}</text>
				<text>{{user_adress.userPhone}}</text>
				<view class="adress">
					{{user_adress.userAddress}} 
				</view>
			</view>
			<!-- <view class="arrow-right"> -->
				<image src="http://www.zhongjubang.com/api/upload/static/img/information/right-arrow.png" mode=""></image>
			<!-- </view> -->
		</view>
		<!-- 默认地址 end -->
		
		<!-- 商品详情 start -->
		<view class="order-content">
			<view class="product_detail" v-for="(item, index) in goodsItem" :key="index">
				<view class="order-title">
					<image class="order-title-image" src="http://www.zhongjubang.com/api/upload/static/img/shopping-mall/detail/shop.png" mode=""></image>
					<text class="order-title-text">{{item.shop_name}}</text>
				</view>
				<view class="car-content" v-for="(g, s) in item.goods" :key="s">
					<!-- <view ></view> -->
					<image :src="g.top_img_list[0]" mode="" class="car-all-image"></image>
					<view class="product_content">
						<view class="car-all-des">{{g.goods_name}}</view>
						<view class="car-all-name">{{g.specifications}}</view>
						<view class="car-all-price">￥{{g.goods_price}}</view>
						<text class="car-all-count">x{{g.count}}</text>
					</view>
				</view>
			</view>
			
			<view class="product_send">
				<view class="car-send">
					<view>配送费</view>
					<view>免费配送</view>
				</view>
				<view class="car-send">
					<view>优惠券</view>
					<view>
						<text>暂无可用</text>
						<image class="car-image"  src="http://www.zhongjubang.com/api/upload/static/img/information/right-arrow.png" mode=""></image>
					</view>
				</view>
			</view>
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
			<text class="price">￥{{total_price | priceFilter}}</text>
			<view class="balance" @click.stop="commitOrder">提交订单</view>
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
				showMask: true,
				popupType: '',
				content: '有温度的保温杯有',
				name: '',
				phone: '',
				adress: '',
				available: 0, //可用热度分
				singleScore: 200,
				totleScore: 0,
				num: 1,
				
				order_num: '',
				user_adress: {},
				goodsItem: [],
				total_price: 0
			}
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 30) {
				return value.slice(0,30) + '...'
			  }
			  return value
			},
			priceFilter (value) {
				let realVal = parseFloat(value).toFixed(3);
				return realVal.substring(0, realVal.length - 1)
			}
		},
		onLoad(e) {
			let _this = this;
			uni.getStorage({
				key:"token",
				success: function (res) {
				_this.token = res.data;
			  }
			})
			this.order_num = e.num;
			this.init();
		},
		methods: {
			// 留言
			descInput(e) {
				this.remnant = e.detail.value.length
				this.showMask = !this.showMask
			},
			init() {
				uni.request({
					url: this.url + '/controller/shopcontroller/getorderbyordernums',
					method: 'post',
					data: {orderNum: this.order_num},
					header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
					success:((res) => {
						if(res.data.code == 200) {
							let data = res.data.data;
							if(JSON.parse(data.address.userAddress) != '{}') {
								let obj = JSON.parse(data.address.userAddress);
								let city = obj.city.split('-');
								this.adress = city[0] + city[1] + city[2] + obj.detail;
								this.user_adress = {
									userName: data.address.userName,
									userPhone: data.address.userPhone,
									userAddress: this.adress,
								}
							}
							
							let arr1 = data.goodsList;
							let idArr=arr1.map(function(x){return x.shop_id});   // 获取ID集合 
							idArr=Array.from(new Set(idArr));					// 去重
							//遍历此数组并在arr1找到shop_id相同的放入新数组
							let newArr=[];
							let arr2 = []
							idArr.forEach((v) => {
								let obj = {
									goods: []
								}
								arr2 = arr1.filter((x) => {
									if( x.shop_id == v) {
										obj.shop_id = x.shop_id;
										obj.shop_name = x.shop_name;
										obj.goods.push(x)
									}
							    })
								
								newArr.push(obj)
							})
							this.goodsItem = newArr;
							arr1.forEach((item) => {
								this.total_price += item.goods_price*item.count
								
							})
						}
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
					}),
					fail: ((res) => {
						uni.showToast({
							title: '请求超时',
							icon: 'none'
						})
					})
				})
			},
			// 添加地址
			addAdress() {
				// this.$store.commit('defaultPage', 'orderExchange');
				uni.navigateTo({
					url: '/pages/receiving-address/receiving-address?type=confirm&num='+this.order_num
				})
			},
			// 确认订单
			commitOrder() {
				uni.getProvider({
				    service: 'oauth',
				    success: function (res) {
				        console.log(res.provider)
				        // if (~res.provider.indexOf('qq')) {
				        //     uni.login({
				        //         provider: 'qq',
				        //         success: function (loginRes) {
				        //             console.log(JSON.stringify(loginRes));
				        //         }
				        //     });
				        // }
				    }
				});
				// uni.requestPayment({
				//     provider: 'alipay',
				//     orderInfo: 'orderInfo', //微信、支付宝订单数据
				//     success: function (res) {
				//         console.log('success:' + JSON.stringify(res));
				//     },
				//     fail: function (err) {
				//         console.log('fail:' + JSON.stringify(err));
				//     }
				// });
			}
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
	.product_detail {
		width: 100%;
		height: 100%;
		overflow: hidden;
		margin-top: 7px;
		background: #fff;
	}
	.order-content .product_detail:first-child {
		margin-top: 0 ;
	}
	.order-content {
		width: 100%;
		box-shadow:7rpx 0px 5rpx 0px rgba(202,202,202,0.31);
		overflow: hidden;
	}
	.order-title, .car-content, .product_send {
		box-sizing: border-box;
		padding: 0 30rpx;
	}
	.order-title {
		background: #fff;
		height: 80rpx;
		display: flex;
		align-items: center;
	}
	
	.order-title-image {
		width:27rpx;
		height:24rpx;
		display: block;
		margin-right: 3px;
	}
	.order-title-text{
		font-size:14px;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	.car-content {
		width: 100%;
		height: 95px;
		display: flex;
		padding-top: 10px;
	}
	.car-all-command{
		width:28rpx;
		height:28rpx;
		background:rgba(255,101,1,0);
		border:1px solid rgba(153, 153, 153, 1);
		border-radius:50%;
	}
	.car-all-image{
		width:75px;
		height:75px;
		background:#f0f;
		margin-right: 7px;
	}
	.product_content {
		width:75%;
	}
	.car-all-des{
		width: 100%;
		height:30px;
		font-size:12px;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.car-all-name{
		font-size:12px;
		font-family:PingFang SC;
		color:rgba(153,153,153,1);
		margin: 6px 0;
	}
	.car-all-price{
		font-size:14px;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(244,51,72,1);
		float: left;
	}
	.car-all-count{
		font-size:13px;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		float: right;
	}
	.product_send {
		/* margin-top: 15px; */
		background: #fff;
	}
	.car-send {
		height: 51px;
		font-size:13px;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		display: flex;
		justify-content: space-between;
		align-content: center;
		align-items: center;
	}
	.car-send:last-child {
		border-top: 1px solid #E2E2E2;
	}
	.car-send image {
		margin-left: 5px;
		width: 7px;
		height: 12px;
		display: inline-block;
		margin-bottom: -1px;
	}
	.car-send view {
		font-size: 13px;
		color: #333;
		font-weight: bold;
	}
	.car-send view:last-child {
		color: #999;
	}
	.horizen{
		width:100%;
		height:1px;
		background:rgba(226,226,226,1);
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
		line-height: 105upx;
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
		top: 2px;
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
