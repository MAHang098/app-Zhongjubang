<template>
	<view>
		<view class="header" v-bind:class="{ 'in': scrollFlag }">
			<view class="header-left" @click.stop="backPreve">
				<image :class="scrollFlag ? 'scroolImg1' : ''"  :src="scrollFlag ? 'http://www.zhongjubang.com/api/upload/static/img/shopping-mall/detail/back-select.png' : 'http://www.zhongjubang.com/api/upload/static/img/shopping-mall/detail/product-back.png' " mode=""></image>
			</view>
			<scroll-view class="scroll-Y" style='height:100%;'>
				<view class="type-detail" v-if="scrollFlag">
					<view :class="current == index ? 'active' : '' " @tap.stop="changeType(index)" v-for="(item, index) in detailType" :key="index">{{item}}</view>
				</view>
			</scroll-view>
			<!-- <view class="header-shop">
				
			</view> -->
			
			<view class="header-right">
				<!-- <image @tap="goShopCar" style="margin-right: 10rpx;" src="http://www.zhongjubang.com/api/upload/static/img/stop/car.png" mode=""></image> -->
				<image :class="scrollFlag ? 'scroolImg' : '' " :src="scrollFlag ? 'http://www.zhongjubang.com/api/upload/static/img/shopping-mall/detail/share-select.png' : 'http://www.zhongjubang.com/api/upload/static/img/shopping-mall/detail/product-share.png'" mode=""></image>
			</view>
		</view>
		
		<!-- 商品轮播 start -->
		<view class="uni-padding-wrap" id="swiper">
			<view class="page-section">
				<view class="page-section-spacing">
					<uni-swiper-dot :info="swiperItem" :current="swiperCurrent" :mode="mode" :dotsStyles="dotsStyles">
					    <swiper class="swiper-box" @change="swiperChange" :autoplay="true" :interval="2000" :duration="1000" :circular="true">
					        <swiper-item v-for="(item ,index) in swiperItem" :key="index">
					           <image :src="item.url" mode=""></image>
					        </swiper-item>
					    </swiper>
					</uni-swiper-dot>
				
				</view>
			</view>
		</view>
		<!-- 商品轮播 end -->
		<!-- 商品title start -->
		<view class="product">
			<view class="main-title" >{{detailItem.goodsName}}</view>
			<view class="adress">
				<image src="http://www.zhongjubang.com/api/upload/static/img/shopping-mall/detail/map.png" mode=""></image>
				<view>广东佛山</view>
			</view>
			<view class="price">
				{{'￥' + detailItem.goodsPrice}}
			</view>
		</view>
		<!-- 商品title end -->
		
		<!-- 保障 start -->
		<view class="guarantee">
			<view v-for="(item, index) in detailItem.tag" :key="index">
				<image src="http://www.zhongjubang.com/api/upload/static/img/shopping-mall/detail/checked.png" mode=""></image>
				<text>{{item.contents}}</text>
			</view>
			
		</view>
		<!-- 保障 end -->
		<!-- 规格/说明 start -->
		<view class="description">
			<view  @click.stop="togglePopup('bottom', 'spec')">
				<text>选择产品规格</text>
				<view class="description-spec_type">
					<text>{{spec_type_name}}</text>
					<image src="http://www.zhongjubang.com/api/upload/static/topic/arrow.png" mode=""></image>
				</view>
			</view>
			<view @click.stop="explainShow">
				<text>产品说明</text>
				<image src="http://www.zhongjubang.com/api/upload/static/topic/arrow.png" mode="" :class="showExplain ? 'arrowTr' : ''"></image>
			</view>
			<text class="explain" v-show="showExplain">{{detailItem.goodsShow}}</text>
		</view>
		<!-- 规格/说明 end -->
		
		<!-- 商品评论 start -->
		<view class="comment-list">
			<view class="all-comment">评论({{commentList.length}})</view>
			<view>
				<view class="comment-detail" v-for="(item, index) in commentList" :key="index">
					<image :src="item.head" mode=""></image>
					<text>{{item.nickName}}</text>
					<view class="comment-date">{{item.crateeTime}}</view>
					<view>{{item.goodsContentDiscuss}} </view>
				</view>
			</view>
			<view v-show="commentList.length > 2" class="get-comment" @click.stop="getAllComments(detailItem.id)">查看全部评论 <image src="http://www.zhongjubang.com/api/upload/static/img/shopping-mall/detail/y-arrow.png" mode=""></image></view>
		</view>
		<!-- 商品评论 end -->
		
		<!-- 店铺/商品推荐  start-->
		<view class="shop-detail">
			<view class="shop">
				<view class="shop-content">
					<image :src="shopLogo" mode=""></image>
					<view class="shop-name">{{shopItem.shopName}}</view>
					<view>{{shopItem.num}}粉丝</view>
				</view>
				<view class="shop-collect">
					<text  @click.stop="collectShop(shopItem.shopId)" v-if="shopItem.state == 0">+收藏</text>
					<text class="isShop-collect" @click.stop="collectShop(shopItem.shopId)" v-else>已收藏</text>
					<text @tap="goShop(shopItem.shopId)">进店逛逛</text>
				</view>
			</view>
			
			<view class="product-recommend">
				<view>商品推荐</view>
				<view class="page-section swiper-product">
					<view class="page-section-spacing">
						<swiper class="swipers" :indicator-dots="false" :autoplay="true" :circular="true" :interval="2000" :duration="1000" :display-multiple-items="2" :next-margin="40+'px'">
							<swiper-item class="swiper-item" v-for="(item, index) in recommendItem" :key="index" @click.stop="recommendDetails(item.id)">
								<!-- <view class="swiper-item uni-bg-red">A</view> -->
								<view class="recommend-detail">
									<image :src="item.top_img_list[0].url" mode=""></image>
									<view class="recommend-detail_text">
										<text>{{item.goods_name　|　ellipsis}}</text>
										<view>￥{{item.goods_price}}</view>
										<image src="http://www.zhongjubang.com/api/upload/static/img/shopping-mall/detail/cart.png" mode=""></image>
									</view>
								</view>
							</swiper-item>
							
						</swiper>
					</view>
				</view>
			</view>
		</view>
		<!-- 店铺/商品推荐  end -->
		
		<!-- 商品详情 start -->
		<view class="image-detail">
			<view class="image-detail_text">
				<text></text>
				<view>商品详情</view>
				<text></text>
			</view>
			<image :src="item.url" mode="widthFix"  v-for="(item, index) in imaData" :key="index" @click.stop="imgPreview(imaData, index)"></image>
			
		</view>
		<!-- 商品详情 end -->
		
		<!-- 弹窗 start -->
		<uni-popup ref="spec" :type="popupType" :custom="true" id="spec" >
			<view class="spec-type">
				<view class="message">
					<image :src="swiperItem[0].url" mode=""></image>
					<view><text>{{'￥' + detailItem.goodsPrice}}</text><text>库存:{{activeIndex == -1 ? '请选择规格' :  reserve}}</text></view>
					<image src="http://www.zhongjubang.com/api/upload/static/img/shopping-mall/detail/close.png" mode="" @click.stop="cancelPopup('spec')"></image>
				</view>	
				<view class="category">
					<view>分类</view>
					<view class="types"> 
						<text v-for="(item, index) in typeItem" :key="index" @click.stop="choseType(item.specifications, index, item.id, item.reserve)" :class="activeIndex == index ? 'inTypes' : '' ">{{item.specifications}}</text>
					</view>
				</view>
				
				<view class="num">
					<view>数量</view>
					<view>
						<text @click.stop="reduce">-</text>
						<text>{{product_num}}</text>
						<text @click.stop="add">+</text>
					</view>
				</view>
				<view class="define" @click.stop="define">确定</view>
			</view>
		</uni-popup>
		<!-- 弹窗 end -->
		
		<view id="detail-bottom">
			
			
			<!-- <view class="kefu">
				<image src="http://www.zhongjubang.com/api/upload/static/img/shopping-mall/detail/kefu.png" mode=""></image>
				<view>客服</view>
			</view> -->
			
			<view class="kefu" @tap="goShop(shopItem.shopId)">
				<image src="http://www.zhongjubang.com/api/upload/static/img/shopping-mall/detail/shop.png" mode=""></image>
				<view>进店</view>
			</view>
			<view class="in-shop" @tap.stop="collectProduct(detailItem.id)">
				<image style="margin-right: 20rpx;" :src="detailItem.state == 0 ? 'http://www.zhongjubang.com/api/upload/static/img/shopping-mall/detail/collet.png' : 'http://www.zhongjubang.com/api/upload/static/img/shopping-mall/detail/collet-select.png'" mode=""></image>
				<view>收藏</view>
			</view>
			<view class="kefu" @tap="goShopCar()">
				<image style="margin-right: 26rpx;" src="../../../static/img/icon/shopCar.png" mode=""></image>
				<view>购物车</view>
			</view>
			<view class="join">
				<text @click.stop="addCart">加入购物车</text>
				<text @click.stop="buy">立即购买</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import uniSwiperDot from '@/components/uni-swiper-stop/uni-swiper-stop.vue'
	export default {
		components:{uniPopup, uniSwiperDot},
		data() {
			return {
				scrollFlag: false,
				swiperItem: [],
				token: '',
				showExplain: false,
				popupType: '',
				imaData: [],
				showPlus: true,
				typeItem: ['红色336*286', '红色336*286', '红色336*286', '红色336*286'],
				spec_type_name: '',
				activeIndex: -1,
				detailItem: [],
				commentList: [],
				product_num: 1,
				specificationsId: '',
				addType: 0,
				recommendItem: [],
				detailId: '',
				shopItem: {},
				reserve: null,
				scolltop: 0, //记录评论节点位置
				detailType: ['商品', '评论', '推荐', '详情'],
				current: 0,
				scrollTop: 0,
				swiperCurrent: 0,
				mode: 'round',
				dotsStyles: {
					width: 7,
					height: 6,
					backgroundColor: 'rgba(0, 0, 0,0.3)',
					border: '1px rgba(0, 0, 0,0) solid',
					color: '#fff',
					selectedBackgroundColor: 'rgba(249,183,45,1)',
					selectedBorder: '1px rgba(249,183,45,1) solid'
				},
				shopLogo: ''
			}
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 10) {
				return value.slice(0,10) + '...'
			  }
			  return value
			}
		},
		// 监听页面滚动
		onPageScroll(e) {
			 let _this=this;
			if(e.scrollTop > 50) {
				_this.scrollFlag = true
			} else {
				_this.scrollFlag = false
			}
		},
		onLoad(option) {
			this.detailId = option.id;
			// this.detailId = 1;
		},
		onShow() {
			uni.getStorage({
				key:"token",
				success:((res) => {
					this.token = res.data;
				})
			});
			this.init();
			this.gainProductRecommend();
		},
		methods: {
			goShopCar(){
				uni.navigateTo({
					url: '/pages/shop/shop'
				})
			},
			goShop(id){
				uni.navigateTo({
					url: '/pages/shop-command/shop-command?id=' + id
				})
			},
			swiperChange(e) {
				 this.swiperCurrent = e.detail.current;
			}, 
			changeType(index) {
				this.current = index;
				let explainH = 0
				let info = uni.createSelectorQuery().select(".explain");
				info.boundingClientRect(function(data) { //data - 各种参数
					explainH = data.height ;
					if(index == 0) {
						uni.pageScrollTo({
							duration:0,
							scrollTop: 0
						})
					}
					if(index == 1) {
						uni.pageScrollTo({
							duration:0,
							scrollTop: 611 + explainH
						})
					}
					if(index == 2) {
						uni.pageScrollTo({
							duration:0,
							scrollTop: 900 + explainH
						})
					}
					if(index == 3) {
						uni.pageScrollTo({
							duration:0,
							scrollTop: 1110 + explainH
						})
					}
		　　    }).exec();
				
			},
			init() {
				uni.request({
				    url: this.url + 'controller/shopcontroller/getgoodsbyid',
				    method: 'post',
				    data: {goodsId: this.detailId},
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:((res) => {
				        if(res.data.code == 200) {
							let result = [];
							let data = res.data.data[0];
							this.commentList = data.goodsDiscussList;
							this.shopItem = data.shop;
							let shop_logo = data.shop.shopLogo;
							this.shopLogo = shop_logo[0].url;
							data.goodsDTO.tag = data.goodsDTO.tag;
							console.log(data.goodsDTO)
							this.detailItem = data.goodsDTO;
							this.swiperItem = data.goodsDTO.topImgList;
							this.imaData = data.goodsDTO.goodsContent;
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
			// 获取商品推荐
			gainProductRecommend() {
				uni.request({
				    url: this.url + 'controller/shopcontroller/getAppGoodsRecommendGoods',
				    method: 'post',
				    data: {pageIndex: 1, pageSize: 100},
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:((res) => {
				        if(res.data.code == 200) {
							for(var i = 0;i<res.data.data.dataList.length;i++){
							  res.data.data.dataList[i].top_img_list = JSON.parse(res.data.data.dataList[i].top_img_list)
							}
							this.recommendItem = res.data.data.dataList;
				        } 
						
				    })
				});
			},
			// 显示说明
			explainShow() {
				this.showExplain = !this.showExplain;
			},
			// 弹出层弹出的方式  i:当前标签的下标, name: 当前标签的name
			togglePopup(type, open) {
				this.specDetail();
				this.popupType = type;
				if (open === 'tip') {
					// this.showLogin = true;
				} else {
					this.$refs[open].open()
				}
			},
			// 取消弹出层
			cancelPopup(type) {
				this.$refs[type].close();
			},
			// 预览详情图
			imgPreview(arr, index) {
				 uni.previewImage({
					urls: arr,
					current: index, 
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},
			// 收藏店铺
			collectShop(id) {
				uni.request({
				    url: this.url + 'controller/usercontroller/addusercollection',
				    method: 'post',
				    data: {type: '4', collectionContentId: id},
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:((res) => {
				        if(res.data.code == 200) {
							// this.typeItem = res.data.data;
							this.init();
				        } 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
				    })
				});
			},
			// 收藏商品
			collectProduct(id) {
				uni.showLoading({
					title:'加载中'
				})
				uni.request({
				    url: this.url + 'controller/usercontroller/addusercollection',
				    method: 'post',
				    data: {type: '3', collectionContentId: id},
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:((res) => {
						console.log(res)
				        if(res.data.code == 200) {
							// this.typeItem = res.data.data;
							this.init();
							uni.hideLoading()
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
				});
			},
			// 商品规格
			specDetail() {
				uni.request({
				    url: this.url + 'controller/shopcontroller/getgoodsspecificationslist',
				    method: 'post',
				    data: {goodsId: this.detailId},
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:((res) => {
				        if(res.data.code == 200) {
							
							this.typeItem = res.data.data;
				        } 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
				    })
				});
			},
			// 选择规格
			choseType(name, index, id, num) {
				this.spec_type_name = name;
				this.reserve = num;
				if(index == this.activeIndex) {
					this.activeIndex = -1;
					return;
				}
				this.activeIndex = index;
				this.specificationsId = id;
			},
			// 点击确定关闭弹窗
			define() {
				this.cancelPopup('spec');
				if(this.spec_type_name == '') {
					return;
				}
				if(this.addType == 1) {
					// 跳转到购物车
					this.addCart();
					return;
				}
				if(this.addType == 2) {
					// 跳转到下单页面
					// console.log(this.specificationsId, this.product_num)
					this.buy();
					return;
				}
			},
			// 获取所有评论
			getAllComments(id) {
				uni.navigateTo({
					url: '/pages/shopping-mall/detail-evaluate/detail-evaluate?id='+ id
				})
			},
			// 加入购物车
			addCart() {
				if(this.reserve == 0 ) {
					uni.showToast({
						title: '此商品暂时缺货',
						icon: 'none'
					})
					return;
				}
				if(this.spec_type_name == '') {
					this.togglePopup('bottom', 'spec');
					this.addType = 1;
					return;
				}
				uni.request({
				    url: this.url + 'controller/shopcontroller/addshoppingcart',
				    method: 'post',
				    data: {goodsId: this.detailItem.id, quantity: this.product_num, specificationsId: this.specificationsId, shopId: this.shopItem.shopId},
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:((res) => {
				        if(res.data.code == 200) {
							uni.showToast({
								title: '添加成功'
							})
				        } 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
				    })
				});
			},
			// 立即下单
			buy() {
				if(this.reserve == 0) {
					uni.showToast({
						title: '此商品暂时缺货',
						icon: 'none'
					})
					return;
				}
				if(this.spec_type_name == '') {
					this.addType = 2;
					this.togglePopup('bottom', 'spec');
				}
				let goodsList = [{
					id: this.detailId,
					specificationsList :[{
						specificationsId: this.specificationsId,
						specificationsNum: this.product_num
					}]
				}];
				uni.request({
				    url: this.url + 'controller/shopcontroller/addorder',
				    method: 'post',
				    data: {goodsList: JSON.stringify(goodsList)},
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:((res) => {
				        if(res.data.code == 200) {
							uni.navigateTo({
								url: '/pages/confirm-order/confirm-order?num='+res.data.data.orderNum
							})
				        } 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
				    })
				});
			},
			// 添加数量
			add() {
				this.product_num++;
			},
			// 减少数量
			reduce() {
				if(this.product_num > 1) {
					this.product_num--;
				}
			},
			// 推荐商品详情
			recommendDetails(id) {
				uni.navigateTo({
					url: '/pages/shopping-mall/detail/detail?id='+id
				})
			},
			// 返回上一页
			backPreve() {
				uni.navigateBack({
					delta:1
				})
			},
				
		}
	}
</script>

<style>
	page {
		background: #F9F9F9;
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		font-family:PingFang SC;
	}
	.in {
		background: #FFFFFF;
	}
	.scroolImg {
		width: 44rpx !important;
		height: 44rpx !important;
	}
	.scroolImg1 {
		width: 40rpx !important;
		height: 40rpx !important;
		margin-top: 15rpx;
	}
	.header {
		width: 100%;
		height: 120rpx;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 30rpx;
		position: fixed;
		z-index: 1;
	}
	.header view {
		display:flex;
		align-items:center;
		height: 100%;
		margin-top: 19rpx;
	}
	/* .header-shop{
		position: absolute;
		top: 0;
		left: 0;
	} */
	.header-left, .header-right {
		margin-top: 24rpx !important;
	}
	.header-left image {
		width: 48rpx;
		height: 48rpx;
		display: block;
		margin-right: 18rpx;
	}
	.header-right image {
		width: 52rpx;
		height: 52rpx;
		display: inline-block;
	}
	.active {
		border-bottom: 3px solid #F9B72D;
	}
	.scroll-Y {
		margin-top: 16px;
		height: 30px;
	}
	.type-detail {
		width: 60%;
		font-size:28rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		display: flex;
		justify-content: space-between;
		margin: 0 auto !important;
		height: 27px !important;
	}
	.type-detail view {
		margin: 0 !important;
	}
	/* .type-detail view {
		width: 25%;
		text-align: center;
	} */
	.header-topic {
		font-size: 32rpx;
	}
	/* 轮播 start */
	#swiper, .swiper-box {
		width: 100%;
		height: 682rpx;
	}
	#swiper swiper-item {
		width: 100%;
		height: 100%;
		display: block;
	}
	#swiper image {
		width: 100%;
		height: 100%;
		display: block;
	}
	/deep/ uni-swiper .uni-swiper-dot-active {
		
	}
	/* 商品 start */
	.product {
		width: 100%;
		height: 204rpx;
		box-sizing: border-box;
		padding: 40rpx 30rpx;
		background: #FFFFFF;
		font-size:28rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		border-bottom: 1px solid #E2E2E2;
	}
	.main-title {
		float: left;
		width: 80%;
		border-right: 1px solid #CACACA;
		margin-bottom: 5px;
	}
	.adress {
		float: right;
		font-size:22rpx;
		color: #666666;
	}
	.price {
		clear: both;
		font-size:36rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(244,51,72,1);
		margin-top: 7px;
	}
	.product image {
		width: 27rpx;
		height: 27rpx;
		display: block;
		margin: 0 auto;
	}
	/* 保障 start */
	.guarantee {
		width: 100%;
		height: 134rpx;
		box-sizing: border-box;
		padding: 20rpx 30rpx 40rpx 30rpx;
		display: flex;
		justify-content: flex-start;
		background: #FFFFFF;
		flex-wrap: wrap;
		box-shadow:7rpx 0px 5rpx 0px rgba(202,202,202,0.31);
	}
	.guarantee image {
		width: 26rpx;
		height: 26rpx;
		display: inline-block;
		margin-right: 5px;
	}
	.guarantee view {
		align-items: center;
		display: flex;
		width: 25%;
		font-size:22rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		margin-bottom: 10px;
	}
	/* 规格/说明 start */
	.description {
		width: 100%;
		box-sizing: border-box;
		padding: 0 30rpx;
		background: #FFFFFF;
		box-shadow:7rpx 0px 5rpx 0px rgba(202,202,202,0.31);
		margin-top: 7px;
	}
	.description view:first-child {
		border-bottom: 1px solid #E2E2E2;
	}
	.description view {
		height: 100rpx;
		
		font-size:28rpx;
		font-weight: bold;
		color: #333333;
		display: flex;
		justify-content: space-between;
		align-items: center;
		align-content: center;
	}
	.description image {
		width: 18rpx;
		height: 34rpx;
	}
	.description-spec_type text {
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(102,102,102,1);
		margin-right: 5px;
	}
	.arrowTr {
		transform: rotate(90deg)
	}
	.explain {
		font-size:24rpx;
		font-family:PingFang SC;
		color:rgba(102,102,102,1);
		line-height:36rpx;
	}
	/* 规格弹窗 start */
	.spec-type {
		background: #fff;
		border-radius: 30rpx 30rpx 0px 0px;
		position: relative;
		box-sizing: border-box;
		padding: 0 15px;
		padding-bottom: 15px;
	}
	.message {
		height: 91px;
		position: relative;
		top: -23px;
	}
	.message image:first-child {
		width: 93px;
		height: 93px;
		float: left;
	}
	.message view {
		    position: absolute;
		    left: 30%;
		    top: 40%;
	}
	.message view  text {
		display: block;
		font-size:22rpx;
		font-family:PingFang SC;
		color:rgba(102,102,102,1);
		line-height:34rpx;
	}
	.message view  text:first-child {
		font-size:34rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(244,51,72,1);
		margin-bottom: 15px;
	}
	.message image:last-child {
		    width: 11px;
		    height: 16px;
		    float: right;
		    position: absolute;
		    right: 0;
		    top: 42%;
	}
	.category {
		clear: both;
		font-size: 13px;
		font-family: PingFang SC;
		color: rgba(51,51,51,1);
	}
	.types {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-content: center;
		flex-wrap: warp;
		margin-top: 13px;
		padding-bottom: 46rpx;
		border-bottom: 1px solid #E2E2E2;
		flex-wrap: wrap;
	}
	.inTypes {
		border: 1px solid #F9B72D !important;
		color: #F9B72D !important;
	}
	.types text {
		/* width: 20%; */
		display: block;
		padding: 3px 5px;
		border: 1px solid #afafaf;
		color: #afafaf;
		margin-right: 10px;
		margin-bottom: 7px;
	}
	.num {
		margin-top: 50rpx;
		margin-bottom: 313rpx;
		color: #333333;
		font-size: 25rpx;
	}
	.num text {
		width: 45rpx;
		height: 45rpx;
		display: inline-block;
		color: #666666;
		font-size: 30rpx;
		margin-top: 5px;
		background: #EBEBEB;
		text-align: center;
		line-height: 45rpx;
		margin-right: 3px;
	}
	.define {
		width: 100%;
		height: 45px;
		line-height: 45px;
		text-align: center;
		background: #F9B72D;
		color: #fff;
		border-radius: 25px;
		font-size: 32rpx;
	}
	
	/* 商品评论 */
	.comment-list {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 30rpx;
		background: #FFFFFF;
		margin: 10px 0;
	}
	.all-comment {
		border-left: 3px solid #F9B72D;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		padding-left: 10px;
	}
	.comment-detail {
		width: 100%;
		overflow: hidden;
		font-size:24rpx;
		font-family:PingFang SC;
		color:rgba(102,102,102,1);
		margin-top: 10px;
		
	}
	.comment-detail image {
		width: 50rpx;
		height: 50rpx;
		display: inline-block;
		border-radius: 50%;
		float: left;
		margin-right: 8px;
	}
	.comment-detail text {
		height: 25px;
		    line-height: 25px;
	}
	.comment-detail .comment-date {
		float: right;
		font-weight:bold;
	}
	.comment-detail view:last-child {
		clear: both;
		margin-top: 3px;
	}
	.get-comment {
		width: 100%;
		height: 50rpx;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #F9B72D;
		font-size: 24rpx;
	}
	.get-comment image {
		width: 26rpx;
		height: 20rpx;
		display: block;
	}
	
	/* 电铺/商品推荐 start */
	.shop-detail {
		background: #FFFFFF;
		width: 100%;
		height: auto;
		box-sizing: border-box;
		/* padding: 30rpx; */
	}
	.shop {
		padding: 0 30rpx;
		border-bottom: 1px solid #e2e2e2;
		padding-top: 30rpx;
	}
	.shop-content {
		overflow: hidden
	}
	.shop-content image {
		width: 128rpx;
		height: 128rpx;
		float: left;
		margin-right: 10px;
	}
	.shop-content view:last-child {
		font-size: 13px;
		font-family: PingFang SC;
		color: rgba(102,102,102,1);
	}
	.shop-content .shop-name {
		margin-top: 15px;
		font-size: 15px;
		font-family: PingFang SC;
		color: rgba(51,51,51,1);
		margin-bottom: 7px;
	}
	.shop-collect {
		display: flex;
		justify-content: space-between;
		margin: 60rpx 0;
	}
	.shop-collect text {
		width: 45%;
		height: 60rpx;
		line-height: 60rpx;
		border: 1px solid #F9B72D;
		display: block;
		text-align: center;
		border-radius: 40rpx;
		color: #f9b72d;
		font-size: 30rpx;
	}
	.isShop-collect {
		color: #999 !important;
		border: 1px solid #999 !important;
	}
	/* 商品推荐 start */
	.product-recommend {
		padding-left: 30rpx;
		height: 461rpx;
	}
	.swipers {
		height: 386rpx;
	}
	.product-recommend>view:first-child {
		height: 32px;
		line-height: 32px;
		font-size: 14px;
		color: #333;
	}
	.recommend-detail {
		border:1px solid rgba(226,226,226,1);
		box-shadow:0px 1px 9rpx 0px rgba(93,93,93,0.13);
		margin-right: 10px;
		padding-bottom: 10px;
		overflow: hidden;
		border-top-left-radius: 6rpx;
		border-top-right-radius: 6rpx;
	}
	.recommend-detail image {
		width: 100%;
		height: 240rpx;
		display: block;
		border-top-left-radius: 6rpx;
		border-top-right-radius: 6rpx;
	}
	
	.recommend-detail_text {
		padding: 0 7px;
		font-size:20rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		
		margin-top: 7px;
	}
	.recommend-detail_text text {
		margin-bottom: 8px;
		display: block;
		line-height:30rpx;
	}
	.recommend-detail_text image {
		width: 42rpx;
		height: 40rpx;
		display: block;
		float: right;
		margin-top: -5px;
	}
	.recommend-detail_text view {
		float: left;
		clear: both;
		font-size: 12px;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(244,51,72,1);
	}
	/* 图片详情 start */
	.image-detail {
		width: 100%;
		height: auto;
		
	}
	.image-detail_text {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 77rpx;
	}
	.image-detail_text text {
		width: 57rpx;
		height: 1px;
		display: block;
		background: #999999;
	}
	.image-detail_text view {
		font-size:28rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		margin: 0 5px;
	}
	.image-detail image {
		width: 100%;
	}
	.image-detail image:last-child {
		margin-bottom: 150rpx;
	}
	/* 底部 start */
	#detail-bottom {
		width: 100%;
		height: 112rpx;
		position: fixed;
		z-index: 1;
		background: #FFFFFF;
		display: flex;
		bottom: 0;
		box-sizing: border-box;
		padding: 18rpx 30rpx;
		box-shadow:7rpx 0px 5rpx 0px rgba(202,202,202,0.31)
	}
	#detail-bottom image {
		width: 46rpx;
		height: 46rpx;
		display: block;
		margin: 0 auto;
	}
	/* #detail-bottom image:nth-child(3){
		margin-right: 1px;
	} */
	.kefu, .in-shop {
		width: 20%;
		text-align: center;
		font-size: 11px;
		color: #333;
	}
	.join {
		width: 100%;
		color: #fff;
		line-height: 36px;
		/* line-height: 42px; */
		font-size: 14px;
		border-radius: 25px;
		background: linear-gradient(90deg,rgba(252,190,58,1),rgba(249,183,44,1));
	}
	.join text:first-child {
		background: rgba(255,255,255,.4);
	}
	.join text {
		/* line-height: 42px; */
		width: 50%;
		height: 100%;
		display: inline-block;
		text-align: center;
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
</style>
