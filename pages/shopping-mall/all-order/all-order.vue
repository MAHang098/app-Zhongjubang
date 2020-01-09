<template>
	<view id="allOrder">
		<!-- 搜索栏 start -->
		<view class="header">
			<view class="header-top">
				<image @click.stop="backPage" src="http://www.zhongjubang.com/api/upload/static/img/G-circle/search-back.png" mode="" class="back"></image>
				<view class="my-order">我的订单</view>
				<view>
					<image src="http://www.zhongjubang.com/api/upload/static/search/nav-search.png" mode="" class="search" @click.stop="goSearchOrder"></image>
					<image src="http://www.zhongjubang.com/api/upload/static/img/shopping-mall/order/cart.png" mode="" class="cart" @click.stop="goCart"></image>
				</view>
			</view>
			<!-- 订单类型 start -->
			<view class="order-type">
				
				<view class="all-order" @click.stop="changeOrder(0)">
					
					<image :src="currentType == 0 ? 'http://www.zhongjubang.com/api/upload/static/img/shopping-mall/order/order-select.png' : 'http://www.zhongjubang.com/api/upload/static/img/shopping-mall/order/order.png'" mode=""></image>
					<text>全部订单</text>
				</view>
				<view class="all-order" @click.stop="changeOrder(1)">
					<image :src="currentType == 1 ? 'http://www.zhongjubang.com/api/upload/static/img/shopping-mall/order/payment-select.png' : 'http://www.zhongjubang.com/api/upload/static/img/shopping-mall/order/payment.png' " mode=""></image>
					<view v-if="saleList.num1 != 0" class="all-num" :class="saleList.num1 > 10 ? 'all-numIn' : ''">{{saleList.num1}}</view>
					<text>待付款</text>
				</view>
				<view class="all-order" @click.stop="changeOrder(2)">
					<image :src="currentType == 2 ? 'http://www.zhongjubang.com/api/upload/static/img/shopping-mall/order/harvest-select.png' : 'http://www.zhongjubang.com/api/upload/static/img/shopping-mall/order/harvest.png'" mode=""></image>
					<view v-if="saleList.num2 != 0" class="all-num" :class="saleList.num2 > 10 ? 'all-numIn' : ''">{{saleList.num2}}</view>
					<text>待收货</text>
				</view>
				<view class="all-order" @click.stop="changeOrder(3)">
					<image :src="currentType == 3 ? 'http://www.zhongjubang.com/api/upload/static/img/shopping-mall/order/evaluate-select.png' : 'http://www.zhongjubang.com/api/upload/static/img/shopping-mall/order/evaluate.png' " mode=""></image>
					<view v-if="saleList.num3 != 0" class="all-num" :class="saleList.num3 > 10 ? 'all-numIn' : ''">{{saleList.num3}}</view>
					<text>待评价</text>
				</view>
				<view class="all-order" @click.stop="changeOrder(4)">
					<image :src="currentType == 4 ? 'http://www.zhongjubang.com/api/upload/static/img/shopping-mall/order/after-sale_select.png' : 'http://www.zhongjubang.com/api/upload/static/img/shopping-mall/order/after-sale.png'" mode=""></image>
					<view  v-if="saleList.num4 != 0" class="all-num" :class="saleList.num4 > 10 ? 'all-numIn' : ''">{{saleList.num4}}</view>
					<text>售后</text>
				</view>
			</view>
			<!-- 订单类型 end -->
		</view>
		<!-- 搜索栏 end -->
		
		
		
		<!-- 订单详情 start -->
		<view id="all-order_detail">
			 <view v-if="currentType==0&&requiresSaleNum2==1" class="requires-images">
			 	<image style="width: 447rpx;height: 344rpx;" src="../../../static/img/requiresPage/order.png" mode=""></image>
			 	<text class="requires-collect-text">没有相关订单</text>
			 </view>
			<view class="order-detail" v-for="(item, index) in orderList" :key="index">
				<view class="shop" @click.stop="goshop(item.shopId)">
					<view class="shop-detail">
						<image src="http://www.zhongjubang.com/api/upload/static/img/shopping-mall/order/shop.png" mode="" class="shop-image"></image>
						<text>{{item.shopName}}</text>
						<image src="http://www.zhongjubang.com/api/upload/static/topic/arrow.png" mode="" class="arrow-right"></image>
					</view>
					<view class="order-massage" v-if="currentType != 4">
						{{item.state == 0 ? '待付款' : item.state == 2 ? '待收货' : item.state == '3' ? '已完成' : item.state == 4 ? '评价' : item.state == 7 ? '取消订单' : '退款成功' }}
					</view>
					<view class="order-massage" v-else>
						{{item.state == 0 ? '处理中' : '退款成功'}}
					</view>
				</view>
				
				<view class="product-list">
					<view class="product-detail" v-for="(row, i) in item.list" :key="i" @click.stop="pDetail(row.orderNum, row.appUserOrderId)">
						<view class="product-image">
							<image :src="row.topImgList[0]" mode=""></image>
						</view>
						<view class="product-massage">
							<view class="title">{{row.goodsName}}</view>
							<view class="specs">规格：{{row.specifications}}</view>
							<view><text class="price">￥{{row.goodsPrice}}</text> <text class="num">x{{row.quantity}}</text></view>
						</view>
					</view>
					<view class="total">共{{item.num}}件商品，合计： <text class="total-price">￥{{item.price}}</text></view>
				</view>
				<view class="bottom" v-if="currentType != 4">
					<view v-if="item.state == 0" @click.stop="cancelOrder(item.orderNum)">取消订单</view>
					<view v-if="item.state == 2 ||  item.state == 1  || item.state == 4 || item.state == 3">查看物流</view>
					<view v-if="item.state == 2 ||  item.state == 1  || item.state == 4 || item.state == 3" @click.stop="pDetail(item.orderNum)">申请退换</view>
					
					<view :class="item.state == 4 || item.state == 3 || item.state == 0 || item.state == 2 ||  item.state == 1 ? 'active' : ''" @click.stop="jump(item.state, item.orderNum)">
						{{item.state == 0? '立即付款' : item.state == 2 ||  item.state == 1 ? '确认收货'  : item.state == 4 || item.state == 3 ? '立即评价' : '删除订单' }}
					</view>
					<!-- <view :class="item.state == 4 || item.state == 0 || item.state == 2 ? 'active' : ''" @click.stop="jump(item.state, item.orderNum)">
						{{item.state == 2 ? '待收货' : item.state == 3 ? '已完成' : item.state == 4 ? '评价' : item.state == 5 ? '售后' : item.state == 6 ? '其他' : item.state == 7 ? '取消订单' : '待付款'}}
					</view> -->
				</view>
				<view class="bottom" v-else>
					
					<view class="active" @click.stop="jump(item.state, item.orderNum)">
						{{item.state == 0 ? '退款中' : '退款成功'  }}
					</view>
				</view>
			</view>
			<!-- 订单详情 end -->
		</view>
		
		
		<uni-popup :show="popupShow" :type="popupType" :custom="true" :mask-click="false" @change="change">
			<view class="uni-tip">
				<!-- <view class="uni-tip-title">提示</view> -->
				<!-- <view class="uni-tip-content">您确定删除此订单？</view> -->
				<view class="uni-tip-content">{{popupTitle}}</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click.stop="cancel('tip')">取消</view>
					<view class="uni-tip-button insist-skip" @click.stop="cancel('skip')">确定</view>
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
				requiresSaleNum2: 0,
				currentType: 0,
				popupShow: false,
				popupType: '',
				token: '',
				orderList: [],
				saleList: [],
				order_num: '',
				popupTitle: '宝贝错过就没有啦 真的不要了吗？',
				orderState: null
			}
		},
		onLoad(option) {
			uni.getStorage({
				key:"token",
				success:((res) => {
					this.token = res.data;
				})
			});
			this.afterSale();
			if(option.type) {
				this.changeOrder(option.type)
			} else {
				this.changeOrder(0)
			}
		},
		methods: {
			// 所有订单
			init(state) {
				uni.request({
					url: this.url + "controller/shopcontroller/getappuserorderlist",
					data: {pageIndex: 1, pageSize: 1000, state: state},
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						// console.log(res.data.code)
						if(res.data.code==200){
							let data = res.data.data.dataList;
							if(data.length==0){
								this.requiresSaleNum2 = 1
							}else{
								this.requiresSaleNum2 = 0
							}
							this.orderList = data;
						}
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
					})
				})
			},
			// 顶部订单数量
			afterSale() {
				uni.request({
					url: this.url + "controller/shopcontroller/getuserordernumbystate",
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						if(res.data.code==200){
							let data = res.data.data;
							this.saleList = data;
						}
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
					})
				})
			},
			// 取消订单
			cancelOrder(orderNum) {
				this.togglePopup('center', 'tip')
				this.order_num = orderNum
			},
			changeOrder(n) {
				this.currentType = n;
				// 全部订单
				if(n == 0) {
					this.init('');
				}
				// 待付款
				if(n == 1) {
					this.init('0')
				}
				// 待收货
				if(n == 2) {
					this.init('2')
				}
				// 待评价
				if(n == 3) {
					this.init('4')
				}
				// 售后
				if(n == 4) {
					this.saleOrder();
				}
				
			},
			// 售后列表
			saleOrder() {
				uni.request({
					url: this.url + "controller/shopcontroller/getappuserorderaftermarketlist",
					method: 'POST',
					data: {pageIndex: 1, pageSize: 50},
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						if(res.data.code==200){
							let data = res.data.data.dataList;
							this.orderList = data;
						}
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
					})
				})
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
				if (type === 'tip') {
					this.popupShow = false
					return
				}
				if(type == 'skip') {
					if(this.orderState == 7) {
						this.deluserorder();
						return;
					}
					uni.request({
						url: this.url + "controller/shopcontroller/delappuserorder",
						method: 'POST',
						data: {orderNum: this.order_num},
						header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
						success: ((res) => {
							if(res.data.code==200){
								uni.showToast({
									title: '订单取消成功'
								})
								this.popupShow = false;
								this.init('');
								this.afterSale()
							}
							if(res.data.code == 421) {
								uni.navigateTo({
									url: '/pages/loginPhone/loginPhone'
								})
							}
						})
					})
				}
				// this.$refs[type].close()
			},
			change(e) {
				// console.log(e.show)
			},
			// 跳转购物车
			goCart() {
				uni.navigateTo({
					url: '/pages/shop/shop'
				})
			},
			// 返回上一级
			backPage() {
				uni.switchTab({
					url: '/pages/user/user'
				})
			},
			// 跳转到店铺
			goshop(id) {
				uni.navigateTo({
					url:'/pages/shop-command/shop-command?shopId='+id
				})
			},
			// 跳转到订单详情
			pDetail(num, id) {
				if(this.currentType == 4) {
					uni.navigateTo({
						url:'/pages/shopping-mall/replacement-applyDetail/replacement-applyDetail?id='+id
					})
					return;
				}
				uni.navigateTo({
					url:'/pages/shopping-mall/order-detail/order-detail?orderNum='+num
				})
			},
			// 跳转到相应的页面
			jump(state, num) {
				if(state == 4) {
					uni.navigateTo({
						url:'/pages/shopping-mall/order-comments/order-comments?num=' + num
					})
				}
				if(state == 7) {
					this.orderState = state;
					this.order_num = num;
					this.popupTitle = '确定删除订单吗？';
					this.togglePopup('center', 'tip')
					
				}
			},
			// 删除订单
			deluserorder(num) {
				uni.request({
					url: this.url + "controller/shopcontroller/deluserorder",
					method: 'POST',
					data: {orderNum: this.order_num},
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						if(res.data.code==200){
							
							uni.showToast({
								title: '订单删除成功'
							})
							this.popupShow = false;
							this.init('');
							this.afterSale()
						}
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
					})
				})
			},
			// 跳转到订单搜索
			goSearchOrder() {
				uni.navigateTo({
					url: '/pages/shopping-mall/order-search/order-search'
				})
			}
		}
	}
</script>

<style>
	page, #allOrder {
		background: #F6F6F6;
	}
	.header {
		width: 100%;
		
		padding-top: 60rpx;
		background: #FFFFFF;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		right: 0;
		
	}
	.header-top {
		box-sizing: border-box;
		padding: 10rpx 30rpx;
		height: 140rpx;
		display: flex;
		justify-content: space-between;
		
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
	#all-order_detail {
		margin-top: 54%;
	}
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
		width: 100%;
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
		text-align: center;
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
	/* 缺省页start */
	.requires-images{
		position: relative;
		display: flex;
		margin-left: 38rpx;
		margin-top: 60rpx;
		width: 447rpx;
		height: 344rpx;
	}
	.requires-collect-text{
		position: absolute;
		top: 400rpx;
		left: 230rpx;
		font-size:30rpx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(102,102,102,1);
		line-height:23px;
	}
	/* 缺省页end */
</style>
