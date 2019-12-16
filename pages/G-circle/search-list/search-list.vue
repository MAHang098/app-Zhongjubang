<template>
	<view>
		<!-- 搜索栏 start -->
		<view class="header">
			<image src="../../../static/img/G-circle/search-back.png" mode="" class="back" @click.stop="gainInput"></image>
			<view class="search-input">
				<image src="../../../static/search/nav-search.png" mode=""></image>
				<input type="text" :value="searchValue"  placeholder="搜索您需要的商品" @input="gainInput" @focus="onFocus" @blur="onBlur"/>
			</view>
			<view class="cancel" @click.stop="gainInput">取消</view>
		</view>
		<!-- 搜索栏 end -->
		
		<!-- 居圈/商品/用户 start-->
		<view class="G-list_content">
			<view v-for="(item, index) in tabType" :class="index == current ? 'active' : '' " @click.stop="changeProduct(index)" :key="index">
				{{item}}
				<!-- <text v-bind:class="index == current ? 'active-status' : '' "></text> -->
			</view>
		</view>
		<!-- 居圈/商品/用户 end -->
		
		<!-- 用户列表 start -->
		<view class="user-massage" v-show="current == 2">
			<view class="user-list">
				<view class="user-details" v-for="(item, index) in userList" :key="index">
					<view class="left">
						<view class="avatar">
							<image :src="item.head" mode=""></image>
						</view>
						<view class="details">
							<view class="name">{{item.nickName}} <image src="../../../static/fans-logo.png" mode=""></image></view>
							<view class="follow">粉丝{{item.count}}</view>
						</view>
					</view>
					
				</view>
				
			</view>
		</view>
		<!-- 用户列表 end -->
		
		<!-- 商品列表 start -->
		<view class="product-list" v-show="current == 1">
			<view class="product-list_detail" v-for="(item, index) in productList" :key="index">
				<image :src="item.topImgList[0]" mode=""></image>
				<view class="product-list_detail_title">{{item.goodsContent | ellipsis }}</view>
				<view class="product-list_detail_price">{{'￥' + item.goodsPrice}}</view>
				<view class="product-list_detail_shop">
					<view class="product-list_detail_shopleft">{{item.shopName}}</view>
					<view class="product-list_detail_shopright">
						<view>巡店</view>
						<image src="../../../static/topic/arrow.png" mode=""></image>
					</view>
				</view>
			</view>
			
		</view>
		<!-- 商品列表 end -->
		
		<!-- 居圈列表 start-->
		<view class="gCircle-list" v-show="current == 0">
			<view class="list-detail" v-for="(item, index) in circleData" :key="index">
				<image src="../../../static/img/G-circle/liu1.png" mode="widthFix"></image>
				<text>{{item.content | ellipsis}}</text>
				<view class="gCircle-message">
					<image src="../../../static/avatar.png" mode="" class="avatar"></image>
					<text class="nikename">{{item.nickName}}</text>
					<text class="count">{{item.count}}</text>
					<image :src="(activeIndex == index && isShowCollect) || item.state === 1 ? '../../../static/topic/collect-select.png' : '../../../static/img/user/star.png' " mode="" class="collect"></image>
				</view>
			</view>
			
			
			
		</view>
		<!-- 居圈列表 end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabType: ['居圈', '商品', '用户'],
				current: 0,
				searchValue: '',
				token: '',
				circleData: [],
				activeIndex: -1,
				productList: [],
				userList: []
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
		onLoad(option) {
			this.searchValue = option.name;
			
		},
		onShow() {
			let that = this;
			uni.getStorage({
				key:"token",
				success: ((res) => {
				that.token = res.data;
			  })
			})
			this.init();
		},
		methods: {
			init() {
				let parmas = {
					pageIndex: 1,
					pageSize: 100,
					content: this.searchValue
				}
				uni.request({
				    url: this.url + 'controller/shopcontroller/getgcriclecontentbycontent',
				    method: 'post',
				    data: parmas,
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:((res) => {
				        if(res.data.code == 200) {
							let data = res.data.data.dataList;
							for(let i=0; i<data.length; i++) {
								data[i].imgList = JSON.parse(data[i].imgList);
							}
							this.circleData = data;
				        } else {
				            uni.showToast({
				                icon: 'none',
				                title: res.data.message
				            });
				            uni.hideToast();
				        }
				    })
				});
			},
			// 商品列表
			pList() {
				let parmas = {
					pageIndex: 1,
					pageSize: 100,
					goodsName: this.searchValue
				}
				uni.request({
				    url: this.url + 'controller/shopcontroller/getgoodslistbygoodsname',
				    method: 'post',
				    data: parmas,
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:((res) => {
				        if(res.data.code == 200) {
							let data = res.data.data.dataList;
							this.productList = data;
				        } else {
				            uni.showToast({
				                icon: 'none',
				                title: res.data.message
				            });
				            uni.hideToast();
				        }
				    })
				});
			},
			// 搜索用户
			searchName() {
				let parmas = {
					pageIndex: 1,
					pageSize: 100,
					search: this.searchValue
				}
				uni.request({
				    url: this.url + 'controller/shopcontroller/getappuserbysearch',
				    method: 'post',
				    data: parmas,
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:((res) => {
				        if(res.data.code == 200) {
							let data = res.data.data.dataList;
							this.userList = data;
				        } else {
				            uni.showToast({
				                icon: 'none',
				                title: res.data.message
				            });
				            uni.hideToast();
				        }
				    })
				});
			},
			changeProduct(index) {
				this.current = index;
				if(this.current == 0) {
					this.init();
					return;
				}
				if(this.current == 1) {
					this.pList();
					return;
				}
				if(this.current == 2) {
					this.searchName();
					return;
				}
			},
			// 返回搜索页面
			gainInput() {
				uni.navigateTo({
					url: '/pages/G-circle/search-content/search-content'
				})
			},
			
		}
	}
</script>

<style>
	.header {
		width: 100%;
		height: 140rpx;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 10rpx 30rpx;
		background: #FFFFFF;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		right: 0;
	}
	.back {
		width: 19px;
		height: 31px;
		display: inline-block;
		margin-top: 48rpx;
		margin-right: 30rpx;
	}
	.header view {
		margin-top: 40rpx;
	}
	.search-input {
		position: relative;
		width: 100%;
		height: 70rpx;
		background: #f6f6f6;
		border-radius: 35rpx;
	}
	.search-input image {
		width: 26rpx;
		height: 26rpx;
		display: block;
		position: absolute;
		top: 23rpx;
		left: 24rpx;
		
	}
	.search-input input {
		width: 88%;
		margin: 0;
		font-size: 26rpx;
		margin-left: 60rpx;
		margin-top: 10rpx;
	}
	.cancel {
		width: 13%;
		line-height: 80rpx;
		text-align: center;
		color: #333333;
		font-size: 28rpx;
	}
	/* 搜索 end */
	
	/* 居圈 商品 用户 */
	/* 切换搜索内容 start */
	.G-list_content {
		height: 70rpx;
		background: #FFFFFF;
		margin-top: 80px;
	}
	.G-list_content view {
		width: 20%;
		height: 34rpx;
		line-height: 34rpx;
		text-align: center;
		color: #747474;
		font-size: 32rpx;
		display: inline-block;
		border-right: 1rpx solid #E2E2E2;
	}
	.G-list_content view:last-child {
		border: none;
	}
	.active {
		color: #333333 !important;
		font-weight: bold;
		border-width: 50rpx;
		border-color: red;
	}
	/* 居圈列表 */
	.gCircle-list {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
		-moz-column-count: 2;  
		-webkit-column-count: 2;  
		column-count: 2;     
		-moz-column-gap: 10px;
		-webkit-column-gap: 10px;
		column-gap: 10px;
		padding-bottom: 100px;
	}
	.list-detail {
		-moz-page-break-inside: avoid;
		-webkit-column-break-inside: avoid;
		break-inside: avoid;
		height: 100%;
		box-shadow:1px 0px 4px 0px rgba(136,136,136,0.4);
		border-radius:4px;
		background: #FFFFFF;
		overflow: auto;
		/* margin-bottom: 30px; */
	}
	
	.list-detail image {
		width: 100%;
		display: block;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		overflow: hidden;
	}
	.list-detail text {
		font-size:12px;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		display: block;
		line-height: 15px;
		margin-top: 10px;
		
	}
	.list-detail>text {
		box-sizing: border-box;
		padding: 0 20rpx;
	}
	.gCircle-message {
		height: 30px;
		padding: 5px 16rpx;
	}
	.gCircle-message .avatar {
		float: left;
		width: 52rpx;
		height: 55rpx;
		display: block;
	}
	.gCircle-message .nikename {
		font-size:11px;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(102,102,102,1);
		float: left;
		margin: 0;
		padding-left: 5px;
		margin-top: 7px;
	}
	.gCircle-message .collect {
		width: 27rpx;
		height: 26rpx;
		display: block;
		float: right;
		margin-top: 10px;
	}
	.gCircle-message .count {
		float: right;
		font-size:24rpx;
		font-family:PingFang SC;
		color:rgba(153,153,153,1);
	}
	
	/* 商品列表 start */
	.product-list {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 0 20rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.product-list_detail {
		width: 48.5%;
		border:1px solid rgba(231,231,231,1);
		box-shadow:1px 0px 7rpx 0px rgba(136,136,136,0.4);
		border-radius:6rpx;
		margin-bottom: 10px;
		overflow: hidden;
	}
	.product-list_detail image {
		width: 347rpx;
		height: 337rpx;
		display: block;
		
	}
	.product-list_detail_title, .product-list_detail_price, .product-list_detail_shop {
		box-sizing: border-box;
		padding: 0 17rpx;
	}
	.product-list_detail_title {
		font-size:13px;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		margin: 5px 0;
	}
	.product-list_detail_price {
		font-size:15px;
		font-family:PingFang SC;
		color:rgba(244,51,72,1);
		margin-bottom: 5px;
	}
	.product-list_detail_shop {
		width: 100%;
		height: 60rpx;
		line-height: 60rpx;
		display: flex;
		justify-content: space-between;
		font-size:24rpx;
		font-family:PingFang SC;
		color:rgba(102,102,102,1);
		border-top: 1px solid #E2E2E2;
	}
	
	.product-list_detail_shopright {
		display: flex;
		height: 100%;
		align-items: center;
	}
	.product-list_detail_shopright image {
		width: 15rpx;
		height: 23rpx;
		display: block;
		margin-left: 5px;
	}
	
	/* 用户 start */
	.user-massage {
		width: 100%;
		height: 100%;
	}
	.user-list {
		height: 164rpx;
		box-sizing: border-box;
		padding: 0rpx 36rpx;
	}
	.user-list .user-details {
		border-bottom: 1px solid #E2E2E2;
		width: 100%;
		padding: 32rpx 0;
		
	}
	.left {
		display: flex;
		justify-content: flex-start;
	}
	.left text {
		display: block;
	}
	.name {
		font-size: 28rpx;
		color: #333333;
		float: left;
		margin-top: 22rpx;
		margin-bottom: 14rpx;
	}
	.time {
		font-size: 24rpx;
		color: #999999;
	}
	.follow {
		font-size: 26rpx;
		color: #999999;
	}
	.avatar {
		width: 122rpx;
		height: 130rpx;
		display: inline-block;
		margin-right: 5px;
	}
	.avatar image {
		width: 100%;
		height: 100%;
		margin: auto;
		display: block;
		border-radius: 50%;
		
	}
	.details image {
		width: 94rpx;
		height: 31rpx;
		display: block;
		float: right;
		margin-top: 2%;
		margin-left: 7px;
	}
</style>
