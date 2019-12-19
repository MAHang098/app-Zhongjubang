<template>
    <view>
        <view class="search">
			<image class="search-image" style="width:26upx;height:26upx;" src="../../static/img/stop/search.png" mode="" />
			<input @tap="goSearch" class="search-insert" type="text" placeholder="请输入您所需要的商品">
			<image class="car" style="width:41upx;height:39upx;" src="../../static/img/stop/car.png" mode="" />
		</view>
		<view class="banner">
			<image class="banner-image" style="width:663upx;height:345upx;" src="../../static/img/stop/banner.png" mode="" />
			<uni-swiper-dot :info="info" :current="current" :mode="mode" :dots-styles="dotStyle" field="content">
				<swiper class="swiper-box" @change="change">
					<swiper-item v-for="(item, index) in info" :key="index">
						<view :class="item.colorClass" class="swiper-item">
							<!-- <image :src="item.url" mode="aspectFill" /> -->
							<view class="banner-content-des">
								<image class="banner-content-des-image" style="width:85upx;height:86upx;" src="../../static/img/stop/banner-image.png" mode="aspectFill" />
								<view class="banner-content-des-title">全屋定制</view>
							</view>
							<view class="banner-content-des">
								<image class="banner-content-des-image" style="width:85upx;height:86upx;" src="../../static/img/stop/banner-image.png" mode="aspectFill" />
								<view class="banner-content-des-title">全屋定制</view>
							</view>
							<view class="banner-content-des">
								<image class="banner-content-des-image" style="width:85upx;height:86upx;" src="../../static/img/stop/banner-image.png" mode="aspectFill" />
								<view class="banner-content-des-title">全屋定制</view>
							</view>
							<view class="banner-content-des">
								<image class="banner-content-des-image" style="width:85upx;height:86upx;" src="../../static/img/stop/banner-image.png" mode="aspectFill" />
								<view class="banner-content-des-title">全屋定制</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
			
		</view>
		<view class="buy">
			<view class="buy-left">
				<text class="buy-left-title">网红品，大家都在买></text>
				<view class="balance-content">
					<image class="balance-content-image" style="width:74upx;height:76upx;" src="../../static/img/stop/banner-image.png" mode="aspectFill" />
					<image class="balance-content-image" style="width:74upx;height:76upx;" src="../../static/img/stop/banner-image.png" mode="aspectFill" />
					<image class="balance-content-image" style="width:74upx;height:76upx;" src="../../static/img/stop/banner-image.png" mode="aspectFill" />
					<text class="balance">...</text>
				</view>
				<text class="buy-left-buy">广佛2w人都在买</text>
			</view>
			<view class="buy-left">
				<text class="buy-left-title">网红品，大家都在买></text>
				<view class="balance-content">
					<image class="balance-content-image" style="width:74upx;height:76upx;" src="../../static/img/stop/banner-image.png" mode="aspectFill" />
					<image class="balance-content-image" style="width:74upx;height:76upx;" src="../../static/img/stop/banner-image.png" mode="aspectFill" />
					<image class="balance-content-image" style="width:74upx;height:76upx;" src="../../static/img/stop/banner-image.png" mode="aspectFill" />
					<text class="balance">...</text>
				</view>
				<text class="buy-left-buy">广佛2w人都在买</text>
			</view>
		</view>
		<!-- 精品抢购 -->
		<view class="good">
			<view class="good-top">
				<image class="good-left" style="width:66upx;height:62upx;" src="../../static/img/stop/good-left.png" />
				<text class="good-title">精品抢购</text>
				<image class="good-right" style="width:66upx;height:62upx;" src="../../static/img/stop/good-right.png" />
				<text class="good-more">更多</text>
				<image class="good-more-image" style="width:13upx;height:20upx;" src="../../static/img/stop/more.png" />
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
					<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
						<view class="swiper-item-immeuble">

							<image class="swiper-item-immeuble-take" style="width:80upx;height:38upx;" src="../../static/img/stop/take.png" mode="" />
							<image class="" style="width:283upx;height:240upx;" src="../../static/img/stop/immeuble.png" mode="" />
							<view class="immeuble">
								<view class="immeuble-desc">百纯家具沙发客厅整沙发装组合...</view>
								<view class="immeuble-price">
									<text  class="immeuble-price-text">￥8460.00</text>
									<image class="immeuble-price-image" style="width:29upx;height:25upx;" src="../../static/img/stop/car.png" mode="" />
								</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- G圈列表 start -->
		<view class="">
			<view v-for="(items, index) in releaseImgList" :key="index">
				<view class="relese-image_detail" >
					<!-- 用户信息 start -->
					<view class="user">
						<view class="user-message">
							<image src="../../static/drafts.png" mode=""></image>
							<view>
								<view class="name">晴天小猪</view>
								<view class="time">219-12-30 09:30</view>
							</view>
						</view>
						<view class="operate-user" @click.stop="operate(index)">
							<text></text>
							<text></text>
							<text></text>
							<view class="operate-detail" v-show="cIndex == index && showEdit">
								<view class="operate-arrow"></view>
								<view class="operate-btn">
									<view @click.stop="editRelease(items.gcircleContentDTO, items.gcircleContentDTO.id)"><image src="../../static/edit.png" mode=""></image>编辑</view>
									<view @click.stop="deleteRelease(items.gcircleContentDTO.id)"><image src="../../static/delete.png" mode=""></image>删除</view>
								</view>
							</view>
						</view>
					</view>
					<!-- 用户信息 start -->
					
					<!-- 草稿内容 start -->
					<view class="content"  v-if="items.gcircleContentDTO.content != '' ">
						<view v-if="!isShowAllContent" class="text">{{items.gcircleContentDTO.content }}</view>
						<view v-else class="text">{{items.gcircleContentDTO.content | ellipsis}}</view>
						<view class="anCotent" v-if="items.gcircleContentDTO.content.length > 45 " @click="open()">{{ brandFold  ? '收起' : '展开'}}<image :class="!brandFold ? '' : 'in'" src="../../static/drafts/arrow-bottom.png" mode=""></image></view>
					</view>
					<!-- 草稿内容 end -->
					
					<!-- 图片/视频 start -->
					<view class="imageList">
					<!-- 	<view v-for="(tese, indexT) in JSON.stringify(JSON.parse(items.gcircleContentDTO.imgList))" :key="indexT">
							{{1111}}
						</view> -->
						<image :mode="items.gcircleContentDTO.imgList.length > 1 ? 'aspectFit' : '' " :class="items.gcircleContentDTO.imgList.length > 1 ? 'imageListIn' : 'imageListSingle' " :src="row.fileUrl" v-for="(row, indexI) in items.gcircleContentDTO.imgList" :key="indexI" @click.stop="previewImage(indexI, items.gcircleContentDTO.imgList)"></image>
					</view>
					<!-- 图片/视频 end -->
					
					<!-- 话题 start -->
					<view class="release-image_topic"  v-show="show" v-if="items.gcircleContentDTO.title.topic != '' " >
						<view class="left" @click.stop="goTopic(items.gcircleContentDTO.title)">
							<image src="../../static/topic/topic.png" mode=""></image>
							<view>{{items.gcircleContentDTO.title.topic}}</view>
						</view>
						<view class="right"></view>
					</view>
					<!-- 话题 end -->
					<!-- 操作按钮 start -->
					<view class="operate-bottom">
						<view class="operate-bottom_share"><image src="../../static/img/user/share.png" mode=""></image></view>
						<view class="operate-bottom_number">
							<view class="number-message"  @click.stop="togglePopup('bottom', 'comments',items.gcircleContentDTO.userId, items.gcircleContentDTO.id, nickName,items.gCollectionDiscussNum)">
								<image src="../../static/img/topicDetails/message.png" mode=""></image>
								<text>{{items.gCollectionDiscussNum}}</text>
							</view>
							<view class="collect">
								<image @click.stop="collect(index, items.gcircleContentDTO.id, items.collectionState)" :src="(activeIndex == index && isShowCollect) || items.collectionState === 1 ? '../../static/topic/collect-select.png' : '../../static/img/user/star.png' " mode=""></image>
								<text>{{items.collectionNum}}</text>
							</view>
							<view class="fabulous" >
								<image @click.stop="fabulous(index, items.gcircleContentDTO.id, items.gcircleContentLikeState)" :src="(fabulousIndex == index && isShowFabulous) || items.gcircleContentLikeState === 1 ? '../../static/topic/fabulous-select.png' : '../../static/img/user/good.png'" mode=""></image>
								<text>{{items.gcircleContentLikeNum}}</text>
							</view>
						</view>
					</view>
					<!-- 操作按钮 end -->
				</view>
			</view>
			
		</view>
		<!-- 点击右边三点显示的遮罩层 start -->
		<view id="mask" v-show="showEdit"></view>
		<!-- 点击右边三点显示的遮罩层 end -->
		
		<!-- G圈列表 end -->
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
				info: [{
						url: '../../static/img/main/bg.png',
						content: '内容 A'
					},
					{
						url: '../../static/img/main/bg.png',
						content: '内容 B'
					}
				],
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
			}
		},
		onShow(){
			this.init()
		},
		
        methods: {
			goSearch(){
				uni.navigateTo({
					url: "/pages/G-circle/search-list/search-list"
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
			// 获取G圈列表内容
			init() {
				let token
				let self = this
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
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.Tokens},
					success: ((res) => {
						uni.hideLoading()
						if(res.data.code == 200) {
							let data = res.data.data.dataList;
							// 
							for(let i=0; i<data.length; i++) {
								let test = data[i].gcircleContentDTO;
								data[i].gcircleContentDTO.imgList = JSON.parse(data[i].gcircleContentDTO.imgList);
								data[i].gcircleContentDTO.title = JSON.parse(data[i].gcircleContentDTO.title);
							}
							// data.forEach((item, i) => {
							// 	item.gcircleContentDTO.imgList = JSON.stringify(item.gcircleContentDTO.imgList);
							// 	item.gcircleContentDTO.title = JSON.parse(item.gcircleContentDTO.title);
							// })
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
            change(e) {
				this.current = e.detail.current
			},
			// 卡片轮播
			DotStyle(e) {
				this.dotStyle = e.detail.value;
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current;
			},
            
        }
    }
</script>

<style>
	page{
		background:rgba(249,249,249,1);
	}
	.search{
		position: relative;
		margin-top: 41upx;
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
		height:579upx;
		box-shadow:0px 0px 9upx 0px rgba(93,93,93,0.06);
	}
	.banner-image{
		top: 23upx;
		left: 33upx;
	}
	/* 商品类别 */
	.swiper-box {
		margin-top: 22px;
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
		margin-top: 21upx;
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
	}
	.balance-content-image{
		float: left;
		margin-right: 8upx;
	}
	.balance{
		font-size:31upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		line-height: 76upx;
	}
	.good{
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
		left: 392px;
		top: 25px;
	}
	/* 精品抢购 */
	
	.card-swiper-immeuble{
		margin-top: 50px;
		margin-bottom: 50px;
	}
	.card-swiper-immeuble swiper-item {
		width: 283upx !important;
		left: 16upx;
		box-sizing: border-box;
		/* padding: 40rpx 0rpx 70rpx; */
		overflow: initial;
	}

	.card-swiper-immeuble swiper-item .swiper-item-immeuble {
		height: 380rpx !important;
		border:1px solid rgba(226,226,226,1);
		box-shadow:-2upx 1upx 16upx 0px rgba(0, 0, 0, 0.08);
		width: 100%;
		display: block;
		height: 100%;
		border-radius: 10rpx;
		transform: scale(0.9);
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
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(244,51,72,1);
	}
	/* .immeuble-price-text{
		float: left;
	} */
	.immeuble-price-image{
		margin-left: 46px;
	}
	.card-swiper-immeuble {
		height: 392rpx !important;
		margin-right: 26upx;
	}
	.swiper-item-immeuble-take{
		position: absolute;
		z-index: 100;
	}
</style>
