<template>
    <view>
        <view class="search">
			<image class="search-image" style="width:26upx;height:26upx;" src="http://www.zhongjubang.com/api/upload/static/img/stop/search.png" mode="" />
			<input @tap="goSearch" class="search-insert" type="text" placeholder="请输入您所需要的商品">
			<image @click.stop="goCart" class="car" style="width:41upx;height:39upx;" src="http://www.zhongjubang.com/api/upload/static/img/stop/car.png" mode="" />
		</view>
		<view class="banner">
			<!-- <image class="banner-image" style="width:663upx;height:345upx;" src="http://www.zhongjubang.com/api/upload/static/img/stop/banner.png" mode="" /> -->
			<swiper class="imageContainer" @change="handleChange" previous-margin="50rpx" next-margin="50rpx" circular  autoplay>
				<block v-for="(item,index) in bannerImg" :key="index">
					<swiper-item class="swiperitem">
						<image class="itemImg" :class="currentIndex == index ? 'swiperactive': ''" :src="item.resource" lazy-load mode="scaleToFill"></image>
					</swiper-item>
				</block>
			</swiper>
			<uni-swiper-dot :info='categoryList' :current="current" :mode="mode" :dots-styles="dotStyle" field="content">
				<swiper class="swiper-box" @change="change">
					<swiper-item v-for="(item, index) in categoryList" :key="index">
						<view :class="item.colorClass" class="swiper-item">
							<view class="banner-content-des" v-for="(item, index) in categoryList[index]" @tap="goCategory(item.id)" :key="index">
								<image class="banner-content-des-image" style="width:85upx;height:86upx;border-radius: 50%;" :src="item.goodsImg" mode="aspectFill" />
								<view class="banner-content-des-title">{{item.goodsType}}</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<view class="buy">
			<view class="buy-left" @tap='goWanghong'>
				<text class="buy-left-title">网红品，大家都在买></text>
				<view class="balance-content">
					<view class="wanghong-box" v-for="(item, index) in wanghongList" :key="index">
						<image class="balance-content-image" style="width:74upx;height:76upx;border-radius: 50%;" :src="item.top_img_list[0]" mode="aspectFill" />
					</view>
					<text class="balance">...</text>
				</view>
				<text class="buy-left-buy">广佛2w人都在买</text>
			</view>
			<view class="buy-left" @tap='goHaodian'>
				<text class="buy-left-title">优选店铺></text>
				<view class="balance-content">
					<view class="wanghong-box" v-for="(item, index) in haodianList" :key="index">
						<image class="balance-content-image" style="width:74upx;height:76upx;border-radius: 6upx;" :src="item.shop_logo" mode="aspectFill" />
					</view>
					<text class="balance">...</text>
				</view>
				<text class="buy-left-buy">大家都在夸</text>
			</view>
		</view>
		<!-- 精品抢购 -->
		<view class="good">
			<view class="good-top">
				<image class="good-left" style="width:66upx;height:62upx;" src="http://www.zhongjubang.com/api/upload/static/img/stop/good-left.png" />
				<text class="good-title">精品抢购</text>
				<image class="good-right" style="width:66upx;height:62upx;" src="http://www.zhongjubang.com/api/upload/static/img/stop/good-right.png" />
				<text class="good-more" @tap="goJingpin">更多</text>
				<image class="good-more-image" style="width:13upx;height:20upx;" src="http://www.zhongjubang.com/api/upload/static/img/stop/more.png" />
			</view>
			<view>
				<swiper
					class="card-swiper-immeuble"
					:class="dotStyle ? 'square-dot' : 'round-dot'"
					:indicator-dots="false"
					:circular="true"
					@change="cardSwiper"
					indicator-color="#8799a3"
					indicator-active-color="#0081ff"
				>
					<swiper-item v-for="(item, index) in goodsList" :key="index" :class="cardCur == index ? 'cur' : ''">
						<!-- <view @tap="goShop(item.shop_id)" class="swiper-item-immeuble"> -->
						<view @tap="goShop(item.shop_id)" class="swiper-item-immeuble">
							<image class="swiper-item-immeuble-take" style="width:80upx;height:38upx;" src="http://www.zhongjubang.com/api/upload/static/img/stop/take.png" mode="" />
							<image class="" style="width:283upx;height:240upx;" :src="item.top_img_list[0]" mode="" />
							<view class="immeuble">
								<view class="immeuble-desc">{{item.goods_name | ellipsis}}</view>
								<view class="immeuble-price">
									<text  class="immeuble-price-text">￥{{item.goods_price}}</text>
									<image class="immeuble-price-image" style="width:29upx;height:25upx;" src="http://www.zhongjubang.com/api/upload/static/img/stop/car.png" mode="" />
								</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
			
		</view>
		<view class="footer">
			-亲，已经到底了-
		</view>
		
    </view>
</template>

<script>
    
	import uniSwiperDot from '@/components/uni-swiper-stop/uni-swiper-stop.vue'
    export default {
		components: {
			uniSwiperDot
		},
        data() {
			return {
				releaseImgList: [],
				dotStyle: {
					backgroundColor: '#CCCCCC',
					border: '1px #CCCCCC solid',
					color: '#F9B72C',
					selectedBackgroundColor: '#F9B72C',
					selectedBorder: '1px #F9B72C solid'
				},
				swiperList: [{
				id: 0,
				type: 'image',
				url: '../../static/img/main/video.png'
				}, {
				id: 1,
					type: 'image',
					url: '../../static/img/main/video.png',
				}, {
				id: 2,
				type: 'image',
				url: '../../static/img/main/video.png'
				}, {
				id: 3,
				type: 'image',
				url: '../../static/img/main/video.png'
				}, {
				id: 4,
				type: 'image',
				url: '../../static/img/main/video.png'
				}, {
				id: 5,
				type: 'image',
				url: '../../static/img/main/video.png'
				}, {
				id: 6,
				type: 'image',
				url: '../../static/img/main/video.png'
				}],
				current: 0,
				mode: 'round',
				cardCur: 0,
				showEdit: false,
				Tokens: '',
				categoryList: [],
				goodsList: [],
				wanghongList: [],
				haodianList: [],
				bannerImg: [],
				currentIndex: 0
			}
		},
		onShow(){
			this.init()
			this.getCategory()
			this.getGoods()
			this.getWanghong()
			this.getHaodian();
			this.getBanner();
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 15) {
				return value.slice(0,15) + '...'
			  }
			  return value
			}
		},
		
        methods: {
			// 第二轮播
		  change(e) {
			console.log(e.detail.current)
			this.current = e.detail.current
		  },
			goShop(id){
				uni.navigateTo({
					url: '/pages/shopping-mall/detail/detail?id=' + id
				})
			},
			goCategory(id){
				uni.navigateTo({
					url: '/pages/category/category?id=' + id
				})
			},
			goWanghong(){
				uni.navigateTo({
					url: '/pages/wanghong/wanghong'
				})
			},
			goHaodian(){
				uni.navigateTo({
					url: '/pages/haodian/haodian'
				})
			},
			goJingpin(){
				uni.navigateTo({
					url: '/pages/jingpin/jingpin'
				})
			},
			// 获取好店
			　getHaodian(){
				let self = this
				uni.request({
					url: this.url + "controller/shopcontroller/getGoodShopRecommend",
					data: {
						pageIndex: 1,
						pageSize: 1000
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': ''
					},
					success: function (res){
						// console.log(res.data.code)
						
						if(res.data.code==200){
							console.log(res)
							self.haodianList = res.data.data.dataList
							
						}else{
							console.log("请求异常")
						}
					}
				})
			},
			// 获取网红
			getWanghong(){
				let self = this
				uni.request({
					url: this.url + "controller/shopcontroller/getAppInternetCelebrityGoods",
					data: {
						pageIndex: 1,
						pageSize: 1000
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': ''
					},
					success: function (res){
						// console.log(res.data.code)
						if(res.data.code==200){
							if(res.data.data.dataList.length>3){
								for(var i = 0;i<3;i++){
									self.wanghongList[i]=res.data.data.dataList[i]
								}
							}else{
								self.wanghongList = res.data.data.dataList
							}
							
						}else{
							console.log("请求异常")
						}
					}
				})
			},
			// 获取精品
			getGoods(){
				let self = this
				uni.request({
					url: this.url + "controller/shopcontroller/getAppGoodMatterGoods",
					data: {
						pageIndex: 1,
						pageSize: 1000
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': ''
					},
					success: function (res){
						// console.log(res.data.code)
						if(res.data.code==200){
							self.goodsList = res.data.data.dataList
							
						}else{
							console.log("请求异常")
						}
					}
				})
			},
			goSearch(){
				uni.navigateTo({
					url: "/pages/G-circle/search-content/search-content"
				})
			},
			// 删除G圈内容
			deleteRelease(id) {
				uni.request({
					url: this.url + "/controller/usercontroller/delgcirclecontent",
					data: {circlecontentId: id},
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.Tokens},
					success: ((res) => {
						if(res.data.code == 200) {
							uni.showToast({
								title: '删除成功',
								duration: 500,
							});
							this.showEdit = !this.showEdit;
							this.init();
						}
					})
				})
			},
			// 修改G圈内容
			editRelease(item, id) {
				this.$store.commit('saveImage', item.imgList);
				let obj = {
					editId: id,
					title: item.title,
					content: item.content,
					type: 'user'
				}
				this.$store.commit('saveDrafts', obj)
				this.$store.commit('updateType', item.title);
				uni.navigateTo({
					url: '/pages/releaseImage/release-image/release-image'
				});
				this.showEdit = !this.showEdit;
			},
			// 获取(左侧)
			getCategory() {
				
				let token
				let self = this
				const url = this.url
				uni.request({
					url: this.url + 'controller/shopcontroller/getgoodstype',
					method: 'post',
					header : {'content-type':'application/x-www-form-urlencoded',  token: '', 'port': 'app'},
					success: (res => {
						if(res.data.code == 200) {
							var result = [];
							var chunk = 4;
							for(var i = 0, j = res.data.data.length;i < j;i += chunk){
								result.push(res.data.data.slice(i, i + chunk));
							}
							this.categoryList = result
						}
						
					})
				});
			},
			// 获取G圈列表内容
			init() {
				let self = this
				let token
				uni.getStorage({
					key:"token",
					success: function (res) {
					token = res.data;
					self.Tokens = res.data;
					}
				})
				let parmas = {
					pageIndex: 1,
					pageSize: 1000
				}
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				uni.request({
					url: this.url + "/controller/usercontroller/getgcirclecontentlist",
					data: parmas,
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': token},
					success: ((res) => {
						uni.hideLoading()
						if(res.data.code == 200) {
							let data = res.data.data.dataList;
							// 
							for(let i=0; i<data.length; i++) {
								data[i].imgList = JSON.parse(data[i].imgList);
								data[i].title = JSON.parse(data[i].title);
							}
							this.releaseImgList = data;
						}
					})
				})
			},
			// 操作删除/编辑弹窗
			operate(index) {
				this.cIndex = index;
				this.showEdit = !this.showEdit;
			},
            handleChange(e) {
				console.log(e.detail.current)
				this.currentIndex = e.detail.current
			},
			// 卡片轮播
			DotStyle(e) {
				this.dotStyle = e.detail.value;
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current;
			},
            // 跳转到购物车
			goCart() {
				uni.navigateTo({
					url:'/pages/shop/shop'
				})
			},
			// 获取banner
			getBanner() {
				let token, self = this;
				uni.getStorage({
					key:"token",
					success: function (res) {
					token = res.data;
					self.Tokens = res.data;
					}
				})
				uni.request({
					url: this.url + "/public/public/getresourcesbyresourcestype",
					data: {resourcesTypeName: 'app_shop_index_img'},
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': token},
					success: ((res) => {
						uni.hideLoading()
						if(res.data.code == 200) {
							let data = res.data.data;
							this.bannerImg = data;
						}
					})
				})
			}
        }
    }
</script>

<style lang="scss">
	@import '../../static/css/releaseImgList.css'; /*引入G圈列表样式*/
	page{
		background:rgba(249,249,249,1);
	}
	.search{
		position: relative;
		margin-top: 80upx;
		width: 750upx;
		height: 88upx;
		box-shadow:0px 2upx 2upx 0px rgba(93,93,93,0.07);
	}
	.search-image{
		position: absolute;
		z-index: 10;
		left: 54upx;
		top: 32upx;
	}
	.search-insert{
		position: absolute;
		box-sizing: border-box;
		padding-left: 30px;
		left: 35upx;
		top: 13upx;
		width:594upx;
		height:62upx;
		background:rgba(244,244,244,1);
		border-radius:30upx;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(153,153,153,1);
		line-height: 62upx;
	}
	.car{
		position: absolute;
		left: 655upx;
		top: 26upx;
	}
	.banner{
		background: #fff;
		width:750upx;
		height:498upx;
		box-shadow:0px 0px 9upx 0px rgba(93,93,93,0.06);
		padding-top: 10px;
	}
	.banner-image{
		margin-top: 23upx;
		margin-left: 44upx;
	}
	/* 商品类别 */
	.swiper-box {
		margin-top: 6upx;
		height: 103px;
		z-index: -1;
	}
	.swiper-item {
		display: flex;
		justify-content: space-around;
		height: 100%;
		background: #fff;
	}
	.swiper-item image {
		width: 100%;
		height: 100%;
	}
	.banner-content-des{
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.banner-content-des-title{
		font-size:24upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	/* 买东西 */
	.buy{
		display: flex;
		justify-content: space-around;
		padding: 0 14upx;
		box-sizing: border-box;
		margin-top: 48upx;
	}
	.buy-left{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width:354upx;
		height:240upx;
		background:rgba(255,255,255,1);
		border:1px solid rgba(235,235,235,1);
		box-shadow:0px 0px 9upx 0px rgba(93,93,93,0.09);
		border-radius:8upx;
		padding: 28upx;
		box-sizing: border-box;
	}
	.buy-left-title{
		font-size:28upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.buy-left-buy{
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(102,102,102,1);
	}
	.balance-content{
		float: left;
		white-space:nowrap;
	}
	.balance-content-image{
		float: left;
		margin-right: 8upx;
	}
	.balance-content-image:nth-child(3){
		margin-right: 0;
	}
	.balance{
		font-size:31upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		line-height: 76upx;
	}
	/* 精品抢购 */
	.good{
		position: relative;
		margin-top: 23upx;
		width:750upx;
		height:532upx;
		box-shadow:0px 0px 9upx 0px rgba(93,93,93,0.06);
		background: #fff;
	}
	.good-top{
		position: relative;
		padding-top: 30upx;
	}
	.good-left{
		position: absolute;
		left: 219upx;
	}
	.good-title{
		position: absolute;
		top: 21px;
		left: 309upx;
		font-size:34upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.good-right{
		position: absolute;
		left: 475upx;
	}
	.good-more{
		position: absolute;
		top: 22px;
		left: 655upx;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(102,102,102,1);
	}
	.good-more-image{
		position: absolute;
		left: 710upx;
		top: 48upx;
	}
	/* 精品抢购 */
	
	.card-swiper-immeuble{
		margin-top: 50px;
		// margin-bottom: 50px;
	}
	.card-swiper-immeuble swiper-item {
		width: 283upx !important;
		left: 16upx;
		box-sizing: border-box;
		/* padding: 40rpx 0rpx 70rpx; */
		overflow: initial;
	}

	.card-swiper-immeuble swiper-item .swiper-item-immeuble {
		height: 360rpx !important;
		border:1px solid rgba(226,226,226,1);
		box-shadow:-2upx 1upx 16upx 0px rgba(0, 0, 0, 0.08);
		width: 100%;
		display: block;
		height: 100%;
		border-radius: 10rpx;
		transform: scale(0.9,0.99);
		transition: all 0.2s ease-in 0s;
		overflow: hidden;
	}

	.card-swiper-immeuble swiper-item.cur .swiper-item-immeuble {
		transform: none;
		transition: all 0.2s ease-in 0s;
	}
	.swiper-item-immeuble{
		float: left;
		box-sizing: border-box;
		/* padding: 12upx 22upx; */
		/* padding-top: 30upx; */
	}
	.immeuble{
		float: left;
		margin-left: 18upx;
		width: 241upx;
	}
	.immeuble-desc{
		margin: 5px auto;
		font-size:22upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height: 30upx;
	}
	.immeuble-price{
		margin-top: 16upx;
		display: flex;
		justify-content: space-between;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(244,51,72,1);
	}
	/* .immeuble-price-text{
		float: left;
	} */
	.immeuble-price-image{
		/* margin-left: 46px; */
	}
	.card-swiper-immeuble {
		height: 392rpx !important;
		margin-right: 26upx;
	}
	.swiper-item-immeuble-take{
		position: absolute;
		z-index: 100;
	}
	.wanghong-box{
		max-width: 270upx;
	}
	.footer{
		position: relative;
		text-align: center;
		margin-top: 30upx;
		margin-bottom: 80upx;
		font-size:24upx;
		font-family:PingFang SC;
		color:rgba(204,204,204,1);
	}
	/* banner start */
	/* // 3D轮播样式 */
	.imageContainer {
		width: 100%;
		/* height: 500rpx; */
		/* background: #000; */
		height: 325upx;
		background-color: #fff;
	}
	
	.swiperitem {
		/* height: 500rpx; */
		height: 255upx;
		padding: 0upx 20upx;
		box-sizing: border-box;
		position: relative;
		.swiperText {
			display: flex;
			flex-direction: column;
			align-items: center;
			position: absolute;
			top: 56upx;
			left: 51upx;
			z-index: 998;
			width:162upx;
			height:163upx;
			background:rgba(255,255,255,1);
			border-radius:8upx;
			padding:10upx;
			.name {
				font-size:26upx;
				font-weight:500;
				color:rgba(253,57,91,1);
				line-height:37upx;
				margin-bottom: 10upx;
			}
			.zq,.cz {
				font-size:20upx;
				color:rgba(253,57,91,1);
				line-height:35upx;
			}
			.addNl {
				width:120upx;
				height:26upx;
				background:rgba(253,57,91,1);
				border-radius:13upx;
				font-size:20upx;
				font-weight:500;
				color:rgba(255,255,255,1);
				text-align: center;
				line-height: 26upx;
				margin-top: 10upx;
			}
			
		}
	}
	
	.itemImg {
		position: absolute;
		width: 95%;
		/* height: 380rpx; */
		height: 255upx;
		border-radius: 15rpx;
		z-index: 5;
		opacity: 0.7;
		top: 5%;
		box-shadow:0px 4upx 15upx 0px rgba(153,153,153,0.24);
	}
	
	.swiperactive {
		width: 95%;
		opacity: 1;
		z-index: 10;
		/* height: 430rpx; */
		height: 287upx;
		top: 0%;
		transition: all .2s ease-in 0s;
	}
	
	.zhankai{
		text-align: center;
		.iconfont{
			margin-left: 10upx;
		}
	}
</style>
