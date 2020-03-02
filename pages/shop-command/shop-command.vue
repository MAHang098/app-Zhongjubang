<template>
	<view>
		<view class="banner" :style="{height:infoHeight+'px'}">
			<image class="banner-image" style="width:750rpx;height:300rpx;" :src="spare3" mode=""></image>
			<image @tap="goBack" class="back" style="width:37rpx;height:46rpx;" src="http://www.zhongjubang.com/api/upload/static/img/shop-command/back.png" mode=""></image>
			<image class="search-image" style="width:31rpx;height:31rpx;" src="http://www.zhongjubang.com/api/upload/static/img/shop-command/search.png" mode=""></image>
			<!-- <input placeholder="搜索品牌内商品" class="search" type="text" value="" /> -->
			<view class="search" @tap="goSearch">搜索品牌内商品</view>
			<image class="share-image" style="width:39upx;height:48upx;" src="http://www.zhongjubang.com/api/upload/static/img/shop-command/share.png" mode=""></image>
			<image class="logo-image" style="width:148upx;height:138upx;" :src="shopLogo" mode=""></image>
			<view class="title">{{shopName}}</view>
			<view class="fans">{{fansnum}}粉丝</view>
			<view @tap="addCollect" v-if="state==0" class="collect">+收藏</view>
			<image @tap="addCollect" v-if="state==1" class="no-collect" style="width:127upx;height:55upx;" src="../../static/img/shop-command/no-collect.png" mode=""></image>
			<view class="des">
				<!-- {{spare1 | ellipsis}} -->
				<view v-if="!isShowAllContent" class="text">{{spare1 }}</view>
				<view v-else class="text">{{spare1 | ellipsis}}</view>
				<!-- {{spare1}} -->
			</view>
			<view class="horizen" :style="{top:horizenHeight+'px'}"></view>
			<view class="more-info" :style="{top:testHeight+'px'}" @tap="InfoDes">更多品牌信息</view>
			<image :style="{top:arrowHeight+'px'}" class="arrow" :class="!brandFold ? '' : 'inn'" style="width:25upx;height:23upx;" src="http://www.zhongjubang.com/api/upload/static/img/shop-command/arrow.png" mode=""></image>
			<view class="horizen2" :style="{top:horizenHeight+'px'}"></view>
		</view>
		<view class="border"></view>
		<view class="">
			<view class="wrap">
				<image class="home" style="width:40upx;height:40upx;" src="http://www.zhongjubang.com/api/upload/static/img/shop-command/home.png" mode=""></image>
				<image class="bag" style="width:40upx;height:40upx;" src="http://www.zhongjubang.com/api/upload/static/img/shop-command/bag.png" mode=""></image>
			</view>
			
			<view class="G-list_content">
				<view v-for="(item, index) in tabType" :class="index == current ? 'active' : '' " @click="changeProduct(index)" :key="index">
					{{item}}
					<text v-bind:class="index == current ? 'active-status' : '' "></text>
				</view>
			</view>
			<view class="border-fix"></view>
		</view>
		<image v-show="isShow" :src="spare2" mode="widthFix" style="width: 100%;"></image>
		<!-- <view class="" v-show="isShow">
			<image :src="spare2" mode="" style="width: 136;height: 736px;"></image>
		</view> -->
		<view class="goods" v-show="!isShow">
			<image class="init" v-if="showPrice==1" style="width:24upx;height:24upx;" src="http://www.zhongjubang.com/api/upload/static/img/category/init.png" />
			<image class="up" v-if="showPrice==3" style="width:22upx;height:14upx;" src="http://www.zhongjubang.com/api/upload/static/img/category/up.png" />
			<image class="down" v-if="showPrice==2" style="width:22upx;height:14upx;" src="http://www.zhongjubang.com/api/upload/static/img/category/down.png" />
			<view class="G-list_content2">
				<view v-for="(item, index) in tabType2" :class="index == current2 ? 'active2' : '' " @click="changeProduct2(index)" :key="index">
					{{item}}
					<text v-bind:class="index == current2 ? 'active-status2' : '' "></text>
				</view>
			</view>
			<view class="category-content" v-for="(item, index) in goodsList" :key="index" @tap="goDetails(item.id)">
				<view class="category-content-box">
					<image class="category-content-image" style="width:345upx;height:345upx;" :src="item.topImgList[0].url" />
					<view class="category-content-des">{{item.goodsName | ellipsis2}}</view>
					<text class="category-content-price">￥{{item.goodsPrice}}</text>
					<image class="category-content-car" style="width:38upx;height:35upx;" src="http://www.zhongjubang.com/api/upload/static/img/category/car.png" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				brandFold: false,
				isShowAllContent: true,
				tabType: ['首页', '商品'],
				current: 0,
				current2: 0,
				isShow: true,
				style: 1,
				tabType2: ['综合', '价格', '销量', '评分'],
				num: 1,
				goodsList: [],
				priceUp: true,
				type: '',
				goodsStyle: '',
				showPrice: 1,
				id: '',
				shopLogo: '',
				shopName: '',
				fansnum: '',
				state: 0,
				spare1: '',
				spare2: '',
				spare3: '',
				infoHeight: 308,
				horizenHeight: 286,
				testHeight: 277,
				arrowHeight: 280,
			}
		},
		onLoad(options) {
			
			if(options.id){
				this.id = options.id
			}
			this.initInfoshop(options.id)
			this.type = 1
			this.style = 1
			this.init(1,options.id)
		},
		// onReady(){
		// 	this.InfoDes()
		// },
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 60) {
				return value.slice(0,60) + '...'
			  }
			  return value
			},
			ellipsis2 (value) {
			  if (!value) return ''
			  if (value.length > 20) {
				return value.slice(0,20) + '...'
			  }
			  return value
			},
		},
		methods: {
			InfoDes(){
				console.log(this.testHeight)
				let self = this
				this.brandFold = !this.brandFold;
				this.isShowAllContent = !this.isShowAllContent;
				setTimeout(function(){
					uni.getSystemInfo({
					　　success: function(res) { // res - 各种参数
					
					　　    let info = uni.createSelectorQuery().select(".des");
						　　　  　info.boundingClientRect(function(data) { //data - 各种参数
								self.infoHeight = data.height + 270
								console.log(self.testHeight)
								self.testHeight = data.height + 240
								self.arrowHeight = data.height + 242
								self.horizenHeight = data.height + 248
								console.log(self.testHeight)  // 获取元素宽度
					　　    }).exec()
					       }
					});
				},1);
				uni.getSystemInfo({
				　　success: function(res) { // res - 各种参数
				
				　　    let info = uni.createSelectorQuery().select(".des");
					　　　  　info.boundingClientRect(function(data) { //data - 各种参数
					　　　  　console.log(data.height)  // 获取元素宽度
							this.infoheight = data.height
				　　    }).exec()
				       }
				});
			},
			goBack(){
				uni.navigateBack({
					delta: 1
				})
			},
			goSearch(){
				uni.navigateTo({
					url: '/pages/G-circle/search-content/search-content'
				})
			},
			goDetails(id){
				uni.navigateTo({
					url: '/pages/shopping-mall/detail/detail?id='+id
				})
			},
			// 添加收藏
			addCollect(){
				let token;
				let url = this.url
				let self = this
				uni.getStorage({
				    key:"token",
				    success: function (res) {
						token = res.data;
					}
				})
				uni.request({
					url: url + "controller/usercontroller/addusercollection",
					data: {
						type: 4,
						collectionContentId: self.id
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': token
					},
				    success: function (res){
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						if(res.data.code==200){
							self.initInfoshop(self.id)
						}
						
				        
				    }
				})
			},
			// 根据id获取商铺内容
			initInfoshop(id){
				let token;
				let url = this.url
				let self = this
				uni.getStorage({
				    key:"token",
				    success: function (res) {
						token = res.data;
					}
				})
				uni.request({
					url: url + "controller/shopcontroller/getshops",
					data: {
						shopId: id
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': token
					},
				    success: function (res){
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						if(res.data.code==200){
							res.data.data.shopLogo = JSON.parse(res.data.data.shopLogo)
							res.data.data.spare2 = JSON.parse(res.data.data.spare2)
							res.data.data.spare3 = JSON.parse(res.data.data.spare3)
							self.shopLogo = res.data.data.shopLogo[0].url
							self.spare2 = res.data.data.spare2[0].url
							self.spare3 = res.data.data.spare3[0].url
							self.fansnum = res.data.data.num
							self.shopName = res.data.data.shopName
							self.state = res.data.data.state
							self.spare1 = res.data.data.spare1
						}
						
				        
				    }
				})
			},
			init(num,id){
				let self = this
				uni.request({
					url: this.url + 'controller/shopcontroller/getshopgoodslist',
					data: {
						state:num,
						shopId:id,
						pageIndex: 1,
						pageSize: 1000
					},
					method:"POST",
					header : {'content-type':'application/x-www-form-urlencoded','port':'app','token':''},
					success: function (res){
						if(res.data.code=="200"){
							for(var i = 0; i < res.data.data.dataList.length;i++){
								res.data.data.dataList[i].topImgList = JSON.parse(res.data.data.dataList[i].topImgList)
							}
							self.goodsList = res.data.data.dataList
						}
					}
				})
			},
			// 首页/商品
			changeProduct(index) {
				this.current = index;
				this.isShow = !this.isShow;
				this.changeProduct2(0)
				
			},
			// 导航栏切换
			changeProduct2(index) {
				let self = this
				this.current2 = index;
				this.num = index + 1;
				var test = index + 1;
				if(test==2){
					if(self.priceUp){
						self.num = 2;
						self.showPrice = 2;
						self.priceUp = false;
					}else{
						self.num = 3;
						self.showPrice = 3;
						self.priceUp = true;
					}
				}
				if(test==3){
					this.num = 4
				}if(test==4){
					this.num = 5
				}
				this.init(this.num,this.id)
			},
		}
	}
</script>

<style>
	.banner{
		position: relative;
		width:750rpx;
		/* height:612rpx; */
	}
	.banner-image{
		position: absolute;
		left: 0;
		top: 0;
	}
	.back{
		position: absolute;
		top: 68upx;
		left: 31upx;
		z-index: 10;
	}
	.search{
		position: absolute;
		top: 56upx;
		left: 89upx;
		width:547upx;
		height:70upx;
		background:rgba(246,246,246,1);
		border-radius:35upx;
		font-size:28upx;
		font-family:PingFang SC;
		color:rgba(153,153,153,1);
		line-height: 70upx;
		padding-left: 80upx;
		box-sizing: border-box;
	}
	.search-image{
		position: absolute;
		z-index: 10;
		top: 76upx;
		left: 116upx;
	}
	.share-image{
		position: absolute;
		z-index: 10;
		top: 72upx;
		left: 681upx;
	}
	.logo-image{
		position: absolute;
		z-index: 10;
		top: 276upx;
		left: 26upx;
	}
	.title{
		position: absolute;
		top: 323upx;
		left: 195upx;
		font-size:30upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.fans{
		position: absolute;
		top: 369upx;
		left: 195upx;
		font-size:26upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(102,102,102,1);
	}
	.collect{
		position: absolute;
		top: 332upx;
		left: 592upx;
		width:127upx;
		height:54upx;
		line-height: 54upx;
		text-align: center;
		background:rgba(249,183,44,1);
		border-radius:27upx;
		font-size:28upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(255,255,255,1);
	}
	.no-collect{
		position: absolute;
		top: 332upx;
		left: 592upx;
	}
	.des{
		position: absolute;
		top: 469upx;
		left: 27upx;
		width:680upx;
		/* height:60upx; */
		/* height:60upx; */
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:36upx;
	}
	.horizen{
		position: absolute;
		top: 569upx;
		left: 30upx;
		width:233upx;
		height:1px;
		background:rgba(153,153,153,1);
	}
	.horizen2{
		position: absolute;
		top: 569upx;
		width:233upx;
		height:1px;
		background:rgba(153,153,153,1);
		left: 487upx;
	}
	.more-info{
		position: absolute;
		/* top: 554upx; */
		left: 289upx;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(153,153,153,1);
	}
	.arrow{
		position: absolute;
		top: 562upx;
		left: 438upx;
	}
	.border{
		width: 750upx;
		height: 10upx;
		background: rgba(245,245,245,1);
	}
	/* 分类start */
	.G-list_content {
		margin-top: 20upx;
	    box-sizing: border-box;
	    padding-left: 90px;
		height: 70rpx;
		background: #FFFFFF;
	}
	.G-list_content view {
		width: 36%;
		height: 34rpx;
		line-height: 34rpx;
		text-align: center;
		color: #666666;
		font-size: 28rpx;
		display: inline-block;
		/* border-right: 1rpx solid #E2E2E2; */
	}
	.G-list_content view:last-child {
		border: none;
	}
	.active {
		color: #F9B72C !important;
		border-width: 50rpx;
		border-color: red;
		
	}
	.active-status {
		margin: 9px auto;
		display: block;
		width:52rpx;
		height:2rpx;
		background:rgba(249,183,44,1);
	    border-radius:4px;
	}
	/* 分类end */
	.wrap{
		/* position: relative;
		width: 750upx;
		height: 40upx; */
		display: flex;
		justify-content: space-between;
		/* padding: 0 270rpx; */
		padding-left: 270rpx;
		padding-right: 240rpx;
		padding-top: 30rpx;
		box-sizing: border-box;
	}
	/* .home{
		position: absolute;
		left: 250upx;
		top: 22upx;
	}
	.bag{
		position: absolute;
		left: 464upx;
		top: 22upx;
	} */
	.border-fix{
		margin-top: -4upx;
		width:750upx;
		height:1px;
		background:rgba(226,226,226,1);
	}
	/* 导航栏分类 */
	.G-list_content2 {
	    box-sizing: border-box;
		height: 80upx;
		background: #FFFFFF;
		padding-left: 90upx;
		border-bottom: 1px solid rgba(226,226,226,1);
	}
	.G-list_content2 view {
		width: 25%;
		height: 34rpx;
		font-size:28upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height: 80upx;
		display: inline-block;
		/* border-right: 1rpx solid #E2E2E2; */
	}
	.G-list_content2 view:last-child {
		border: none;
	}
	.active2 {
		color: #F9B72C !important;
		font-weight: bold;
		
	}
	.category-content{
		width: 750upx;
	}
	.category-content-box{
		float: left;
		margin-left: 20upx;
		margin-top: 18upx;
		position: relative;
		width:345upx;
		height:470upx;
		background:rgba(255,255,255,1);
		border:1px solid rgba(231,231,231,1);
		box-shadow:0px 0px 7upx 0px rgba(136,136,136,0.2);
		border-radius:6upx;
	}
	.category-content-box:nth-child(even){
		margin-left: 16upx;
	}
	.category-content-image{
		position: absolute;
		top: 0;
		left: 0;
	}
	.category-content-des{
		position: absolute;
		top: 351upx;
		left: 16upx;
		width:314upx;
		height:57upx;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.category-content-price{
		position: absolute;
		top: 424upx;
		left: 16upx;
		font-size:30upx;
		font-family:PingFang SC;
		color:rgba(244,51,72,1);
	}
	.category-content-car{
		position: absolute;
		top: 417upx;
		left: 292upx;
	}
	.goods{
		position: relative;
	}
	.init{
		position: absolute;
		left: 316upx;
		top: 30upx;
	}
	.up{
		position: absolute;
		left: 316upx;
		top: 30upx;
		z-index: 10;
	}
	.down{
		position: absolute;
		left: 316upx;
		top: 40upx;
		z-index: 10;
	}
	.inn {
		transform: rotateX(180deg);
	}
	/* .imageDeteils{
		background:url(bg-login.png)no-repeat;
		    width:100%;
		    height:100%;
		    background-size:100% 100%;
		    position:absolute;
		    filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='bg-login.png',sizingMethod='scale');
	} */
</style>
