<template>
	<view>
		<!-- 搜索栏 start -->
		<view class="header">
			<image @tap="back" src="../../../static/img/G-circle/search-back.png" mode="" class="back"></image>
			<view class="my-order">我的订单</view>
			<view>
				<image src="../../../static/search/nav-search.png" mode="" class="search"></image>
				<image src="../../../static/img/shopping-mall/order/cart.png" mode="" class="cart"></image>
			</view>
		</view>
		<!-- 搜索栏 end -->
		
		<!-- 订单类型 start -->
		<view class="order-type">
			<view class="all-order" @click.stop="changeOrder(0)">
				<image :src=" currentType == 0 ? '../../../static/img/shopping-mall/order/order-select.png' : '../../../static/img/shopping-mall/order/order.png'" mode=""></image>
				<!-- <view class="all-num">1</view> -->
				<text>全部订单</text>
			</view>
			<view class="all-order" @click.stop="changeOrder(1)">
				<image :src="currentType == 1 ? '../../../static/img/shopping-mall/order/payment-select.png' : '../../../static/img/shopping-mall/order/payment.png' " mode=""></image>
				<view class="all-num all-numIn">19</view>
				<text>待付款</text>
			</view>
			<view class="all-order" @click.stop="changeOrder(2)">
				<image :src="currentType == 2 ? '../../../static/img/shopping-mall/order/harvest-select.png' : '../../../static/img/shopping-mall/order/harvest.png'" mode=""></image>
				<view class="all-num">1</view>
				<text>待收货</text>
			</view>
			<view class="all-order" @click.stop="changeOrder(3)">
				<image :src="currentType == 3 ? '../../../static/img/shopping-mall/order/evaluate-select.png' : '../../../static/img/shopping-mall/order/evaluate.png' " mode=""></image>
				<view class="all-num">1</view>
				<text>待评价</text>
			</view>
			<view class="all-order" @click.stop="changeOrder(4)">
				<image :src="currentType == 4 ? '../../../static/img/shopping-mall/order/after-sale_select.png' : '../../../static/img/shopping-mall/order/after-sale.png'" mode=""></image>
				<!-- <view class="all-num">1</view> -->
				<text>售后</text>
			</view>
		</view>
		<!-- 订单类型 end -->
		
		<!-- 订单详情 start -->
		<view class="order-detail">
			<view class="shop">
				<view class="shop-detail">
					<image src="../../../static/img/shopping-mall/oder/shop.png" mode="" class="shop-image"></image>
					<text>索菲亚衣柜</text>
					<image src="../../../static/topic/arrow.png" mode="" class="arrow-right"></image>
				</view>
				<view class="order-massage">等待买家付款</view>
			</view>
			
			<view class="product-list">
				<view class="product-detail">
					<view class="product-image">
						<image src="../../../static/img/G-circle/p1.png" mode=""></image>
					</view>
					<view class="product-massage">
						<view class="title">索菲亚衣柜索菲亚衣柜索菲亚衣柜索菲亚衣柜索 衣柜索菲亚衣柜</view>
						<view class="specs">规格：全部套装</view>
						<view><text class="price">￥5800.00</text> <text class="num">x1</text></view>
					</view>
				</view>
				<view class="product-detail">
					<view class="product-image">
						<image src="../../../static/img/G-circle/p1.png" mode=""></image>
					</view>
					<view class="product-massage">
						<view class="title">索菲亚衣柜索菲亚衣柜索菲亚衣柜索菲亚衣柜索 衣柜索菲亚衣柜</view>
						<view class="specs">规格：全部套装</view>
						<view><text class="price">￥5800.00</text> <text class="num">x1</text></view>
					</view>
				</view>
				
				<view class="product-detail">
					<view class="product-image">
						<image src="../../../static/img/G-circle/p1.png" mode=""></image>
					</view>
					<view class="product-massage">
						<view class="title">索菲亚衣柜索菲亚衣柜索菲亚衣柜索菲亚衣柜索 衣柜索菲亚衣柜</view>
						<view class="specs">规格：全部套装</view>
						<view><text class="price">￥5800.00</text> <text class="num">x1</text></view>
					</view>
				</view>
				<view class="total">共1件商品，合计： <text class="total-price">￥5800.00</text></view>
			</view>
			<view class="bottom">
				<view>查看物流</view>
				<view @click.stop="togglePopup('center', 'tip')">删除订单</view>
				<view @click.stop="togglePopup('center', 'tip')">取消订单</view>
				<view class="active">立即付款</view>
			</view>
			
		</view>
		<!-- 订单详情 end -->
		
		<uni-popup :show="popupShow" :type="popupType" :custom="true" :mask-click="false" @change="change">
			<view class="uni-tip">
				<!-- <view class="uni-tip-title">提示</view> -->
				<!-- <view class="uni-tip-content">您确定删除此订单？</view> -->
				<view class="uni-tip-content">宝贝错过就没有啦 真的不要了吗？</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click.stop="cancel('tip')">取消</view>
					<view class="uni-tip-button insist-skip" @click.stop="cancel('skip')">删除</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components:{ uniPopup},
		data() {
			return {
				currentType: 0,
				popupShow: false,
				popupType: ''
			}
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			changeOrder(n) {
				this.currentType = n;
			},
			// 弹出层弹出的方式
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
					this.popupShow = true
				} else {
					this.$refs[open].open()
				}
			},
			// 弹框关闭
			cancel(type) {
				// if (type === 'tip') {
					this.popupShow = false
					return
				// }
				
				// this.$refs[type].close()
			},
			change(e) {
				// console.log(e.show)
			},
		}
	}
</script>

<style>
	page {
		background: #F6F6F6;
	}
	.header {
		width: 100%;
		height: 140rpx;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 10rpx 30rpx;
		padding-top: 60rpx;
		background: #FFFFFF;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		right: 0;
		border-bottom: 1px solid #E2E2E2;
		font-size:36rpx;
		align-items: center;
	}
	.my-order {
		width: 72%;
		text-align: center;
	}
	.back {
		width: 15px;
		height: 25px;
		display: inline-block;
		margin-right: 30rpx;
	}
	.search {
		margin-right: 36rpx;
	}
	.search {
		width: 42rpx;
		height: 42rpx;
		display: inline-block;
	}
	.cart {
		width: 50rpx;
		height: 50rpx;
		display: inline-block;
	}
	/* 搜索 end */
	
	/* 订单类型 */
	.order-type {
		margin-top: 140rpx;
		width: 100%;
		height: 188rpx;
		box-sizing: border-box;
		padding: 40rpx 30rpx;
		display: flex;
		justify-content: space-between;
		background: #FFFFFF;
	}
	.order-type .all-order {
		height: 100%;
		position: relative;
	}
	.order-type .all-order image {
		width: 60rpx;
		height: 56rpx;
		display: block;
		margin: 0 auto;
	}
	.order-type .all-order .all-num {
		min-width: 12px;
		min-height: 12px;
		line-height: 12px;
		text-align: center;
		position: absolute;
		top: -2px;
		right: -2px;
		background: red;
		color: #FFFFFF;
		border-radius: 50%;
		font-size: 12px;
		padding: 1px;
	}
	.all-numIn {
		border-radius: 36rpx !important;
		padding: 2px 4px !important;
		right: -9px !important;
	}
	.order-type .all-order text {
		width: 100%;
		display: block;
		text-align: center;
		font-size:26rpx;
		font-family:PingFang SC;
		color:rgba(65,65,65,1);
		margin-top: 5px;
	}
	/* 订单详情 start */
	.order-detail {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 0 15px;
		background: #FFFFFF;
		padding-bottom: 21px;
		margin-top: 10px;
		padding-top: 10px;
	}
	.shop {
		display: flex;
		justify-content: space-between;
		height: 60rpx;
		line-height: 60rpx;
		align-items: center;
	}
	.shop-detail {
		display: flex;
		align-items: center;
	}
	.shop-detail text {
		font-size:28rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		margin: 0 10rpx;
	}
	.shop-image {
		width: 31rpx;
		height: 29rpx;
		display: inline-block;
	}
	.arrow-right {
		width: 12rpx;
		height: 21rpx;
		display: inline-block;
	}
	.order-massage {
		font-size:26rpx;
		font-family:PingFang SC;
		color:rgba(249,183,44,1);
	}
	.product-massage {
		margin-left: 10px;
	}
	.product-list {
		margin: 20rpx 0;
	}
	.product-detail {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}
	
	.product-image {
		width: 222rpx;
		height: 160rpx;
		display: block;
		/* border: 1px solid red; */
		
		
	}
	.product-image image {
		width: 100%;
		height: 100%;
		display: block;
		border-radius: 3px;
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
		font-weight:bold;
		color:#F43348;
		float: left;
	}
	.num {
		font-size:26rpx;
		font-family:PingFang SC;
		color:#333333;
		float: right;
	}
	.total {
		text-align: right;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #e2e2e2;
	}
	.total-price {
		font-weight: 500;
	}
	.bottom {
		width: 100%;
		text-align: right;
		display: flex;
		justify-content: flex-end;
		margin-top: 40rpx;
	}
	.bottom view {
		width: 150rpx;
		height: 60rpx;
		line-height: 60rpx;
		border: 1px solid #999999;
		font-family:PingFang SC;
		border-radius: 50rpx;
		text-align: center;
		font-size:28rpx;
		color: #333333;
		margin-left: 10px;
	}
	.active {
		border: none !important;
		background: #F9B72C;
		color: #FFFFFF !important;
	}
	/* 提示窗口 */
	.uni-tip {
		padding-top: 15px;
		width: 300px;
		background: #fff;
		box-sizing: border-box;
		border-radius: 10px;
	}
	
	.uni-tip-title {
		text-align: center;
		font-weight: bold;
		font-size: 41rpx;
		color: #333;
	}
	
	.uni-tip-content {
		padding: 15px 0;
		font-size: 32rpx;
		color: #666;
		width: 360rpx;
		color: #666666;
		font-weight: 500;
		margin: auto;
	}
	
	.uni-tip-group-button {
		margin-top: 10px;
		display: flex;
	}
	
	.uni-tip-button {
		width: 100%;
		text-align: center;
		font-size: 14px;
		color: #333333;
		font-size: 37rpx;
		font-weight: 500;
		border-top: 1px solid #E2E2E2;
		padding: 10px 0;
	}
	.insist-skip {
		color: #F9B72C;
		border-left: 1px solid #E2E2E2;
	}
</style>
