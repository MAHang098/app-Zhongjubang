<template>
	<view id="order-detail">
		<!-- 物流信息 start -->
		<view class="order-adress_message">
			<image v-if="orderData.state == 2" src="../../../static/img/shopping-mall/detail/receiving.png" mode=""></image>
			<image v-if="orderData.state == 7" src="../../../static/img/shopping-mall/detail/close-order.png" mode=""></image>
			<image v-if="orderData.state == 0" src="../../../static/img/shopping-mall/detail/payment.png" mode=""></image>
			<image v-if="orderData.state == 3 || orderData.state == 4" src="../../../static/img/shopping-mall/detail/receiving-select.png" mode=""></image>
			<view class="adress">
				<image src="http://www.zhongjubang.com/api/upload/static/img/user/hot-point/adress-image.png" mode=""></image>
				<view class="user">
					<text>{{adressData.userName}}</text>
					<text>{{adressData.userPhone}}</text>
					<view>{{detailAdress}}</view>
				</view>
			</view>
		</view>
		
		<!-- 商品信息 start -->
		<view class="order-product_detail">
			<view class="order-product_detail_shop">
				<image src="http://www.zhongjubang.com/api/upload/static/img/shopping-mall/order/shop.png" mode=""></image>
				<view>{{orderData.shopName}}</view>
				<image src="http://www.zhongjubang.com/api/upload/static//topic/arrow.png" mode="" class="arrow-right"></image>
			</view>
			<view class="product-list">
				<view class="product-detail" v-for="item in orderData.orderList" :key="item.appUserOrderId">
					<view class="product-image">
						<image :src="item.topImgList[0]" mode=""></image>
						<!-- <image src="../../../static/img/G-circle/p1.png" mode=""></image> -->
					</view>
					<view class="product-massage">
						<view class="title">{{item.goodsName}}</view>
						<view class="specs">规格：{{item.specifications}}</view>
						<view><text class="price">￥{{item.goodsPrice}}</text> <text class="num">x{{item.quantity}}</text></view>
					</view>
					<view class="refund"><view @click.stop="refunds(item.appUserOrderId)">退款</view></view>
				</view>
				
				<view class="total">商品总价<text class="total-price">￥{{orderData.price}}</text></view>
			</view>
		</view>
		
		<!-- 订单编号 start -->
		<view class="order-detail_number">
			<view class="order-detail_numberText"><text></text>订单信息</view>
			<view class="numbers">订单编号：{{orderData.orderNum}}</view>
			<image src="http://www.zhongjubang.com/api/upload/static/img/shopping-mall/order/copy.png" mode="" @click="copyNum(orderData.orderNum)"></image>
			<view>下单时间：{{orderData.createTime}}</view>
		</view>
		<view class="like">
			<view class="horizen"></view>
			<image class="like-image" src="../../../static/img/paySuccess/like.png" mode=""></image>
			<view class="like-text">猜你喜欢</view>
			<view class="horizen"></view>
		</view>
		<view class="category-content">
			<view class="category-content-box" v-for="(item, index) in goodsList" :key="index" @tap="goDetails(item.shop_id)">
				<image class="category-content-image" :src="item.top_img_list[0]" />
				<view class="category-content-des">{{item.goods_name}}</view>
				<text class="category-content-price">￥{{item.goods_price}}</text>
				<image class="category-content-car" src="http://www.zhongjubang.com/api/upload/static/img/category/car.png" />
			</view>
			
		</view>
		<view class="look-more">- 没有更多了 -</view>
		
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				reload: false,
				page: 1,
				goodsList: [],
				token: '',
				orderData: [],
				adressData: [],
				detailAdress: '',
				totalPage: 0
			}
		},
		created() {
			
		},
		// 上拉加载
		onReachBottom: function() {
			if(this.totalPage > 1) {
				this.moreLike();
			}
		},	
		onLoad(option) {
			uni.getStorage({
				key:"token",
				success:((res) => {
					this.token = res.data;
				})
			});
			this.init(option.orderNum);
			this.page = 1;
			this.goodsList = [];
			this.moreLike();
		},
		methods: {
			init(num) {
				uni.request({
					url: this.url + 'controller/shopcontroller/getuserorderdetail',
					data: {orderNum: num},
					method: "POST",
					header: {'content-type':'application/x-www-form-urlencoded','port':'app','token':this.token},
					success: ((res) => {
						uni.hideLoading()
						if(res.data.code == 200){
							let data = res.data.data[0];
							this.orderData = data;
							this.adressData = data.orderList[0].appOrderAddressDTO[0];
							let userAddress = JSON.parse(this.adressData.userAddress);
							this.detailAdress = userAddress.city + userAddress.detail
						}
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						
					})
				})
			},
			goDetails(id){
				uni.navigateTo({
					url: '/pages/shopping-mall/detail/detail?id='+id
				})
			},
			moreLike() {
				let _self = this;
				let parmas = {
					pageIndex: this.page,
					pageSize: 10
				}
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				uni.request({
					url: this.url + 'controller/shopcontroller/getAppGoodsRecommendGoods',
					data: parmas,
					method: "POST",
					header: {'content-type':'application/x-www-form-urlencoded','port':'app','token':''},
					success: function (res){
						uni.hideLoading()
						let totalPage = res.data.data.pageSize * res.data.data.totalPage;
						this.totalPage = res.data.data.totalPage;
						if(_self.goodsList.length == totalPage ) {
							return;
						}
						if(res.data.code == 200){
							let data = res.data.data.dataList;
							_self.goodsList = _self.reload ? data : _self.goodsList.concat(data);
							if(res.data.data.totalPage < 2) {
								return;
							}
							console.log(_self.page)
							_self.page++;
						}
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						
					}
				})
			},
			// 复制单号
			copyNum(val) {
				uni.setClipboardData({
					data:val,
					success() {
						uni.showToast({
							title: '复制成功',
							duration:2000,
							icon:"none"
						})
					}	
				})
			},
			// 商品退款
			refunds(id){
				uni.navigateTo({
					url: '/pages/shopping-mall/replacement-apply/replacement-apply?orderId='+id
				})
			},
		}
	}
</script>

<style scoped>
	page, #order-detail {
		width: 100%;
		height: 100%;
		background: #F9F9F9;
	}
	/* 物流信息 start */
	.order-adress_message {
		width: 100%;
		box-sizing: border-box;
		padding: 30rpx;
		background: #FFFFFF;
	}
	.order-adress_message image {
		width: 100%;
		height: 278rpx;
		display: block;
	}
	.adress {
		width: 100%;
		height: auto;
		display: flex;
		align-items: center;
		margin-top: 60rpx;
		margin-bottom: 20rpx;
	}
	.adress image {
		width: 32rpx;
		height: 32rpx;
		display: block;
	}
	.user {
		width: 90%;
		font-size: 14px;
		color: #333333;
		margin-left: 10px;
	}
	.user text {
		margin-right: 10px;
	}
	.user view {
		margin-top: 5px;
	}
	
	/* 商品详情 start */
	.order-product_detail {
		width: 100%;
		margin-top: 10px;
	}
	.order-product_detail_shop, .product-detail, .total {
		box-sizing: border-box;
		padding: 0 30rpx;
	}
	.order-product_detail_shop {
		width: 100%;
		display: flex;
		align-items: center;
		align-content: center;
		font-size: 14px;
		color: #333;
		height: 92rpx;
		background: #FFFFFF;
	}
	.order-product_detail_shop view {
		margin: 0 5px;
	}
	.order-product_detail_shop image {
		width: 27rpx;
		height: 24rpx;
		display: block;
	}
	.arrow-right {
		width: 12rpx !important;
		height: 21rpx !important;
		display: inline-block;
	}
	.product-list {
		background: #FFFFFF;
		overflow: hidden;
	}
	.product-detail {
		/* display: flex;
		justify-content: space-between; */
		margin: 15px 0;
		overflow: hidden;
		border-bottom: 1px solid #E2E2E2;
	}
	.product-massage {
		margin-left: 10px;
		width: 75%;
		float: right;
	}
	.product-image {
		width: 150rpx;
		height: 150rpx;
		display: block;
		float: left;
	}
	/* 退款按钮 start */
	.refund {
		height: 50px;
		background: #fff;
		clear: both;
	}
	.refund view {
		width: 75px;
		height: 30px;
		border: 1px solid #999999;
		text-align: center;
		border-radius: 25px;
		font-size: 14px;
		color: #333;
		line-height: 30px;
		float: right;
		margin: 8px 0;
	}
	.product-image image {
		width: 100%;
		height: 100%;
		display: block;
		border-radius: 3px;
	}
	.title {
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.title, .total, .total-price {
		font-size:24rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	.specs {
		width: auto;
		height: 40rpx;
		line-height: 40rpx;
		background: #F9F9F9;
		font-size: 24rpx;
		color: #999999;
		display: inline-block;
		padding: 1px 5px;
		margin: 3px 0;
	}
	.price {
		font-size:28rpx;
		font-family:PingFang SC;
		color:#333333;
		float: left;
	}
	.num {
		font-size:26rpx;
		font-family:PingFang SC;
		color:#333333;
		float: right;
	}
	.total {
		height: 88rpx;
		line-height: 40px;
		background: #FFFFFF;
		overflow: hidden;
		color: #333333;
		font-size: 13px;
	}
	.total-price {
		font-weight: bold;
		float: right;
		color: #F43348;
		font-size: 30rpx;
	}
	/* 订单编号信息 start */
	.order-detail_number {
		background: #FFFFFF;
		box-sizing: border-box;
		padding: 15px;
		margin-top: 10px;
	}
	.order-detail_number view {
		color: #666666;
		font-size: 26rpx;
		padding-left: 20rpx;
		margin-bottom: 7px;
		clear: both;
	}
	.numbers {
		float: left;
	}
	.order-detail_number image {
		width: 19px;
		height: 19px;
		display: block;
		margin-left: 10px;
	}
	.order-detail_numberText {
		font-size:28rpx !important;
		color: #333333 !important;
		padding-left: 0!important;
	}
	.order-detail_numberText text {
		display: inline-block;
		width: 3px;
		height: 23rpx;
		background: #F9B72C;
		margin-right: 5px;
	}
	/* 猜您喜欢 start*/
	.like{
		width: 100%;
		height: 106rpx;
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: center;
	}
	.like image {
		width: 32rpx;
		height: 32rpx;
		display: block;
		margin-right: 3px;
	}
	.horizen {
		width: 92rpx;
		height: 1px;
		background: #999999;
		margin-right: 7px;
	}
	.horizen:last-child{
		margin-left: 7px !important;
	}
	.like-image{
		
	}
	.like-text{
		font-size: 16px;
		color: #333333;
	}
	/* 推荐内容 */
	.category-content{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 20rpx;
		display: flex;
		flex-wrap: wrap;
		background: #fff;
		box-shadow:7rpx 0px 5rpx 0px rgba(202,202,202,0.31);
	}
	.category-content-box {
		width: 48%;
		margin-right: 9px;
		overflow: hidden;
		border: 1px solid #E1E4E6;
		border-radius: 8rpx;
		margin-bottom: 10px;
	}
	.category-content-box:nth-of-type(2n) {
		margin-right: 0;
	}
	.category-content-box:nth-child(even){
	}
	.category-content-image {
		width:100%;
		height:170px;
		display: block;
		overflow: hidden;
		
	}
	.category-content-des {
		width: 100%;
		box-sizing: border-box;
		padding: 0 8rpx;
		font-size: 12px;
		color: #333333;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		margin-top: 15rpx;
		margin-bottom: 6rpx;
	}
	.category-content-price {
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(244,51,72,1);
		float: left;
		padding-left: 3%;
		padding-top: 3%;
		margin-bottom: 5px;
	}
	.category-content-car {
		float: right;
		width: 35rpx;
		height: 35rpx;
		display: block;
		padding-right: 4%;
		padding-top: 3%;
	}
	.look-more {
		width: 100%;
		height: 200rpx;
		line-height: 140rpx;
		text-align: center;
		font-size:24rpx;
		font-family:PingFang SC;
		color:rgba(204,204,204,1);
		margin-bottom: 100rpx;
	}
	
</style>
