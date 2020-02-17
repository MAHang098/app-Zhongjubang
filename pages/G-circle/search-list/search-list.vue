<template>
	<view>
		<!-- 搜索栏 start -->
		<view class="header">
			<image src="http://www.zhongjubang.com/api/upload/static/img/G-circle/search-back.png" mode="" class="back" @click.stop="gainInput"></image>
			<view class="search-input">
				<image src="http://www.zhongjubang.com/api/upload/static/search/nav-search.png" mode=""></image>
				<input type="text" :value="searchValue"  placeholder="搜索您需要的商品" @input.stop="gainInput" @focus="onFocus" @blur="onBlur"/>
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
		<!-- 缺省页start -->
		<view v-if="current==0&&requiresGcircle==1" class="requires-images">
			<image style="width: 512rpx;height: 435rpx;" src="../../../static/img/requiresPage/searchGcircle.png" mode=""></image>
			<text class="requires-images-text">无搜索结果换个词试试吧~</text>
		</view>
		<view v-if="current==1&&requiresGoods==1" class="requires-images">
			<image style="width: 512rpx;height: 435rpx;" src="../../../static/img/requiresPage/searchGcircle.png" mode=""></image>
			<text class="requires-images-text">无搜索结果换个词试试吧~</text>
		</view>
		<view v-if="current==2&&requiresUser==1" class="requires-images">
			<image style="width: 512rpx;height: 435rpx;" src="../../../static/img/requiresPage/searchGcircle.png" mode=""></image>
			<text class="requires-images-text">无搜索结果换个词试试吧~</text>
		</view>
		<!-- 缺省页end -->
		<!-- 用户列表 start -->
		<view class="user-massage" v-show="current == 2">
			<view class="user-list">
				<view class="user-details" v-for="(item, index) in userList" :key="index" @click.stop="getUser(item.id)">
					<view class="left">
						<view class="avatar">
							<image :src="item.head" mode=""></image>
						</view>
						<view class="details">
							<view class="name">{{item.nickName}} <image src="http://www.zhongjubang.com/api/upload/static/fans-logo.png" mode=""></image></view>
							<view class="follow">粉丝{{item.count}}</view>
						</view>
					</view>
					
				</view>
				
			</view>
		</view>
		<!-- 用户列表 end -->
		
		<!-- 商品列表 start -->
		<view class="product-list" v-show="current == 1">
			<view class="product-list_detail" v-for="(item, index) in productList" :key="index" @tap.stop="goDetail(item.goodsId)">
				<image :src="item.topImgList[0].url" mode=""></image>
				<view class="product-list_detail_title">{{item.goodsName | ellipsis }}</view>
				<view class="product-list_detail_price">{{'￥' + item.goodsPrice}}</view>
				<view class="product-list_detail_shop" @click.stop="goShop(item.shopId)">
					<view class="product-list_detail_shopleft">{{item.shopName}}</view>
					<view class="product-list_detail_shopright">
						<view>巡店</view>
						<image src="http://www.zhongjubang.com/api/upload/static/topic/arrow.png" mode=""></image>
					</view>
				</view>
			</view>
			
		</view>
		<!-- 商品列表 end -->
		
		<!-- 居圈列表 start-->
		<view class="gCircle-list" v-show="current == 0">
			<view class="list-detail" v-for="(item, index) in circleData" :key="index" @click.stop="goGcicle(item.gcircleContentId)">
				<view  class="product-image">
					<image :src="item.imgList[0].fileUrl" mode="widthFix"></image>
				</view>
				<view class="gCircle-list_content">{{item.content | ellipsis}}</view>
				<view class="gCircle-message">
					<image :src="item.head" mode="" class="avatar"></image>
					<text class="nikename">{{item.nickName}}</text>
					<text class="count">{{item.count}}</text>
					<image :src="item.state === 1 ? 'http://www.zhongjubang.com/api/upload/static/topic/collect-select.png' : 'http://www.zhongjubang.com/api/upload/static/img/user/star.png' " mode="" class="collect"></image>
				</view>
			</view>
		</view>
		<!-- 居圈列表 end -->
		<!-- <view class="look-more">-{{ is_more ? '上拉加载更多' : '没有更多'}}-</view> -->
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
				userList: [],
				pageSize: 10,
				page: 1,
				reload: false,
				totalPage: 0,
				is_more: true,
				requiresGcircle: 0,
				requiresGoods: 0,
				requiresUser: 0,
			}
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 20) {
				return value.slice(0,20) + '...'
			  }
			  return value;
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
		// 滚动到底部请求第二页数据
		onReachBottom() {
			// if(this.current == 1) {
			// 	this.page_attention++;
			// 	this.focusUserContent();
			// 	return;
			// }
			if(this.page < this.totalPage) {
				this.page++;
				
				if(this.current == 0) {
					this.init();
				} else if(this.current == 1) {
					this.pList();
				} else {
					this.searchName();
				}
				this.is_more = true;
			} else {
				this.is_more = false;
			}
			
		},
		methods: {
			init() {
				let parmas = {
					pageIndex: this.page,
					pageSize: this.pageSize,
					content: this.searchValue
				}
				uni.showLoading({
					title: '加载中',
				})
				uni.request({
				    url: this.url + 'controller/shopcontroller/getgcriclecontentbycontent',
				    method: 'post',
				    data: parmas,
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:((res) => {
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						// let totalPage = res.data.data.pageSize * res.data.data.totalPage;
						// if(this.releaseImgList.length == totalPage) {
						// 	this.status = 'end';
						// 	return;
						// }
				        if(res.data.code == 200) {
							let data = res.data.data.dataList;
							this.totalPage = res.data.data.totalPage;
							if(data.length==0){
								this.requiresGcircle = 1
							}else{
								this.requiresGcircle = 0
							}
							for(let i=0; i<data.length; i++) {
								data[i].imgList = JSON.parse(data[i].imgList);
							}
							// this.circleData = data;
							this.circleData = this.reload ? data : this.circleData.concat(data);
							uni.hideLoading();
				        } 
				    })
				});
			},
			// 商品列表
			pList() {
				let parmas = {
					pageIndex: this.page,
					pageSize: this.pageSize,
					goodsName: this.searchValue
				}
				uni.request({
				    url: this.url + 'controller/shopcontroller/getgoodslistbygoodsname',
				    method: 'post',
				    data: parmas,
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:((res) => {
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
				        if(res.data.code == 200) {
							this.totalPage = res.data.data.totalPage;
							let data = res.data.data.dataList;
							if(data.length==0){
								this.requiresGoods = 1
							}else{
								this.requiresGoods = 0
							}
							// this.productList = data;
							this.productList = this.reload ? data : this.productList.concat(data);
				        } 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
				    })
				});
			},
			// 搜索用户
			searchName() {
				let parmas = {
					pageIndex: this.page,
					pageSize: this.pageSize,
					search: this.searchValue
				}
				uni.request({
				    url: this.url + 'controller/shopcontroller/getappuserbysearch',
				    method: 'post',
				    data: parmas,
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:((res) => {
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
				        if(res.data.code == 200) {
							let data = res.data.data.dataList;
							this.totalPage = res.data.data.totalPage;
							if(data.length==0){
								this.requiresUser = 1
							}else{
								this.requiresUser = 0
							}
							this.userList = this.reload ? data : this.userList.concat(data);
							// this.userList = data;
				        }
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
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
			// 输入框获取焦点/失去焦点
			onFocus() {
				// #ifdef APP-PLUS
				this.$mp.page.$getAppWebview().setStyle({
					softinputNavBar: 'none'
				})
				// #endif
				uni.navigateTo({
					url: '/pages/G-circle/search-content/search-content'
				})
			},
			onBlur() {
				// #ifdef APP-PLUS
				this.$mp.page.$getAppWebview().setStyle({
					softinputNavBar: 'auto'
				})
				// #endif
				
			},
			// 跳转G圈详情
			goGcicle(id) {
				uni.navigateTo({
					url: '/pages/releaseImage-details/releaseImage-details?id=' + id
				})
			},
			goDetail(id) {
				uni.navigateTo({
					url: '/pages/shopping-mall/detail/detail?id=' + id
				})
			},
			// 跳转到用户信息
			getUser(id) {
				
				uni.navigateTo({
					url: '/pages/otherUser/otherUser?userid=' + id
				})
			},
			// 调整到店铺
			goShop(id) {
				uni.navigateTo({
					url: '/pages/shop-command/shop-command?id=' + id
				})
			}
		}
	}
</script>

<style>
	@import '../../../static/css/information.css'; /*引入收藏点赞消息的样式*/
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
		display: flex;
		align-items: center;
	}
	.search-input image {
		width: 26rpx;
		height: 26rpx;
		display: block;
		margin-left: 15px;
		margin-right: 5px;
	}
	.search-input input {
		width: 88%;
		margin: 0;
		font-size: 26rpx;
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
		padding-bottom: 100px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.list-detail {
		width: 48%;
		height: 500rpx;
		box-shadow:1px 0px 4px 0px rgba(136,136,136,0.4);
		border-radius:4px;
		background: #FFFFFF;
		overflow: auto;
		margin-bottom: 10px;
	}
	
	.list-detail .product-image {
		width: 100%;
		height: 340rpx;
		display: block;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		overflow: hidden;
		display: flex;
		align-items: center;
	}
	.product-image image {
		width: 100%;
		height: 100%;
	}
	.list-detail .gCircle-list_content {
		font-size:12px;
		height: 60rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		display: block;
		line-height: 15px;
		margin-top: 10px;
		overflow: hidden;
		box-sizing: border-box;
		padding: 0 5px;
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
		border-radius: 50%;
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
		margin-top: 8px;
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
		/* height: 164rpx; */
		box-sizing: border-box;
		padding: 0rpx 36rpx;
	}
	.user-list .user-details {
		border-bottom: 1px solid #E2E2E2;
		width: 100%;
		padding: 32rpx 0;
		
	}
	/* .left {
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
	} */
	.details image {
		bottom: -4px;
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
	/* 缺省页start */
	.requires-images{
		position: relative;
		display: flex;
		margin-left: 150rpx;
		margin-top: 140rpx;
		width: 512rpx;
		height: 435rpx;
	}
	.requires-images-text{
		position: absolute;
		top: 400rpx;
		left: 50rpx;
		font-size:30rpx;
		font-family:PingFang SC;
		color:rgba(153,153,153,1);
	}
	/* 缺省页end */ 
</style>
