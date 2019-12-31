<template>
	<view class="">
		<!-- 轮播图 -->
		<view class="banner">
			<text class="address">广州</text>
			<image class="arrow" style="width:23upx;height:19upx;" src="http://www.zhongjubang.com/api/upload/static/img/main/arrow.png" mode="" />
			<image class="info" style="width:44upx;height:44upx;" src="http://www.zhongjubang.com/api/upload/static/img/main/info.png" mode="" />
			<image class="search-image" style="width:29upx;height:29upx;" src="http://www.zhongjubang.com/api/upload/static/img/main/search.png" mode="" />
			<input @tap="goSearch" class="search" type="text" placeholder="搜你想搜的一切">
			<image class="search-white" style="width:750upx;height:105upx;" src="http://www.zhongjubang.com/api/upload/static/img/main/white.png" mode="" />
			<uni-swiper-dot :info=bannerList :current="current" :mode="mode" :dots-styles="dotStyle" field="content">
				<swiper class="swiper-box" @change="change">
					<swiper-item v-for="(item, index) in bannerList" :key="index">
						<view :class="item.colorClass" class="swiper-item">
							<image :src="item.resource" mode="aspectFill" />
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<!-- 短视频导航 -->
		<view class="">
			<view class="video-nav">
				<text class="video-nav-hot">网红短视频</text>
				<text class="video-nav-eye">一秒吸引你的眼球</text>
				<text @tap="goJuquanVideo" class="video-nav-more">更多</text>
				<image @tap="goJuquanVideo" class="video-nav-more-image" style="width:11upx;height:20upx;" src="http://www.zhongjubang.com/api/upload/static/img/main/more.png" mode="" />
			</view>
			
			<view>
				<swiper
					class="card-swiper"
					:class="dotStyle ? 'square-dot' : 'round-dot'"
					:indicator-dots="false"
					:circular="true"
					@change="cardSVideo"
				>
					<swiper-item @tap="goJuquanVideo" v-for="(item, index) in videoList" :key="index" :class="cardvvideo == index ? 'cur' : ''">
						<view class="swiper-item">
							<image :src="item.videoUrl" mode="aspectFill"></image>
							<image v-if="cardvvideo == index" class="video-image" style="width:94upx;height:94upx;z-index:400;" src="http://www.zhongjubang.com/api/upload/static/img/main/start.png" mode="aspectFill"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 众话题 -->
		<view class="zhong">
			<view class="zhong-nav">
				<text class="video-nav-hot">众话题</text>
				<text class="video-nav-eye">热门话题等你来参与</text>
				<text class="video-nav-more">更多</text>
				<image class="video-nav-more-image" style="width:11upx;height:20upx;" src="http://www.zhongjubang.com/api/upload/static/img/main/more.png" mode="" />
			</view>

			<view >
				<view class="zhong-content">
					<view 
						class="zhong-content-image"
						v-for="(item, index) in zhongList" :key="index"
						:style="{backgroundImage: 'url(' + item.talk_theme_img + ')', backgroundSize:'contain'}"
						@tap="goTopicDetails(item.id)"
					>
						<text class="zhong-content-text">#{{item.talk_theme}}</text>
					</view> 
				</view>
			</view>
		</view>
		<view style="clear:both"></view>
		<!-- 精选好物 -->
		<view class="quality">
			<view class="zhong-nav">
				<text class="video-nav-hot">精选好物</text>
				<text class="video-nav-eye">什么值得买</text>
				<text class="video-nav-more">更多</text>
				<image class="video-nav-more-image" style="width:11upx;height:20upx;" src="http://www.zhongjubang.com/api/upload/static/img/main/more.png" mode="" />
			</view>
			<view>
				<swiper
					class="card-swiper-immeuble"
					:class="dotStyle ? 'square-dot' : 'round-dot'"
					:indicator-dots="false"
					:circular="true"
					interval="3000"
					duration="500"
					@change="cardSwiper"
					indicator-color="#8799a3"
					indicator-active-color="#0081ff"
				>
					<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
						<view class="swiper-item-immeuble">
							
							<view v-for="(item, index) in gootList" :key="index">
								<view class="immeuble">
									<image class="" style="width:179upx;height:160upx;" :src="item.top_img_list[0]" mode="" />
									<view class="immeuble-desc">{{item.goods_name}}</view>
									<view class="immeuble-price">￥{{item.goods_price}}</view>
								</view>
								
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 居圈 -->
		<view class="juquan">
			<view class="juquan-nav">
				<text class="video-nav-hot">居圈</text>
				<text class="video-nav-eye">居家生活趣味多</text>
				<text @tap="goAlljuquan" class="video-nav-more">更多</text>
				<image @tap="goAlljuquan" class="video-nav-more-image" style="width:11upx;height:20upx;" src="http://www.zhongjubang.com/api/upload/static/img/main/more.png" mode="" />
			</view>
			<image class="" style="width:750upx;height:230upx;" src="http://www.zhongjubang.com/api/upload/static/img/main/juquan-bg.png" mode="" />
			<view class="juquan-content" v-for="(item, index) in topList" :key="index">
				<view class="juquan-content-model">
					<image @tap="goJuquan(item.id)" class="juquan-content-model-image" style="width:347upx;height:355upx;" :src="item.img_list[0].fileUrl" mode="" />
					<view class="juquan-content-model-des">{{item.content | ellipsis}}</view>
					<image class="juquan-content-info-avator" style="width:52upx;height:55upx;border-radius: 50%;" :src="item.head" mode="" />
					<view class="juquan-content-info-nickname">{{item.nickName}}</view>
				</view>
				
			</view>
			
		</view>
		<view class="footer-more">-上拉查看更多-</view>
	</view>
</template>

<script>
	import uniSwiperDot from '@/components/uni-swiper-banner/uni-swiper-banner.vue'
	export default {
		components: {
			uniSwiperDot
		},
		data() {
			return {
				dotStyle: {
					backgroundColor: '#CCCCCC',
					border: '1px #CCCCCC solid',
					color: '#F9B72C',
					selectedBackgroundColor: '#F9B72C',
					selectedBorder: '1px #F9B72C solid'
				},
				modeIndex: 2,
				current: 0,
				mode: 'round',
				cardCur: 0,
				cardvvideo: 0,
				swiperList: [{
				id: 0,
				type: 'image',
				url: 'http://www.zhongjubang.com/api/upload/static/img/main/video.png'
				}, {
				id: 1,
					type: 'image',
					url: 'http://www.zhongjubang.com/api/upload/static/img/main/video.png',
				}, {
				id: 2,
				type: 'image',
				url: 'http://www.zhongjubang.com/api/upload/static/img/main/video.png'
				}, {
				id: 3,
				type: 'image',
				url: 'http://www.zhongjubang.com/api/upload/static/img/main/video.png'
				}, {
				id: 4,
				type: 'image',
				url: 'http://www.zhongjubang.com/api/upload/static/img/main/video.png'
				}, {
				id: 5,
				type: 'image',
				url: 'http://www.zhongjubang.com/api/upload/static/img/main/video.png'
				}, {
				id: 6,
				type: 'image',
				url: 'http://www.zhongjubang.com/api/upload/static/img/main/video.png'
				}],
				backs: '',
				videoList: [],
				gootList: [],
				topList: [],
				zhongList: [],
				bannerList: [],
			}
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 22) {
				return value.slice(0,22) + '...'
			  }
			  return value
			}
		},
		onLoad() {},
		onShow() {
			
			const url = this.url
			let self = this
			// app主页轮播图
			uni.showLoading({
				title: '加载中...',
				mask: true
			})
			uni.request({
				url: url + 'public/public/getresourcesbyresourcestype',
				data: {
					resourcesTypeName:'app_shop_index_img'
				},
				method:"POST",
				header : {'content-type':'application/x-www-form-urlencoded','port':'app'},
				success: function (res){
					uni.hideLoading()
					if(res.data.code=="200"){
						self.bannerList = res.data.data
					}
				}
			})
			// 网红短视频
			uni.request({
				url: url + 'controller/videocontroller/getInternetCelebrityShortVideo',
				data: {
					pageIndex: 1,
					pageSize: 100
				},
				method:"POST",
				header : {'content-type':'application/x-www-form-urlencoded','port':'app'},
				success: function (res){
					uni.hideLoading()
					if(res.data.code=="200"){
						for(var i = 0;i < res.data.data.dataList.length;i++){
							
							res.data.data.dataList[i].videoUrl = res.data.data.dataList[i].videoUrl.replace('MP4','jpg')
							res.data.data.dataList[i].videoUrl = res.data.data.dataList[i].videoUrl.replace('mp4','jpg')
						}
						self.videoList = res.data.data.dataList
					}
				}
			})
			// 众话题
			uni.request({
				url: url + 'controller/videocontroller/getZhongTalkThemeList',
				data: {
					pageIndex: 1,
					pageSize: 100
				},
				method:"POST",
				header : {'content-type':'application/x-www-form-urlencoded','port':'app'},
				success: function (res){
					if(res.data.code=="200"){
						self.zhongList = res.data.data.dataList
					}
				}
			})
			// 获取精品好物
			uni.request({
				url: url + 'controller/shopcontroller/getGoodThingsToShare',
				data: {
					pageIndex: 1,
					pageSize: 100
				},
				method:"POST",
				header : {'content-type':'application/x-www-form-urlencoded','port':'app'},
				success: function (res){
					if(res.data.code=="200"){
						self.gootList = res.data.data.dataList
					}
				}
			})
			// 居圈专辑
			uni.request({
				url: url + 'controller/contentcontroller/getIndexRecommendGcircleContent',
				data: {
					pageIndex: 1,
					pageSize: 1000
				},
				method:"POST",
				header : {'content-type':'application/x-www-form-urlencoded'},
				success: function (res){
					if(res.data.code=="200"){
						console.log(res)
						for(var i = 0; i<res.data.data.dataList.length;i++){
							res.data.data.dataList[i].img_list = JSON.parse(res.data.data.dataList[i].img_list);
							// console.log(res.data.data.dataList[i].img_list[0].fileUrl)
						}
						self.topList = res.data.data.dataList
					}
				}
			})
		},
		methods: {
			goAlljuquan(){
				uni.switchTab({
					url: '/pages/juquan/juquan'
				})
			},
			goJuquan(id){
				uni.navigateTo({
					url: '/pages/releaseImage-details/releaseImage-details?id=' + id
				})
			},
			goTopicDetails(id){
				uni.navigateTo({
					url: '/pages/topicDetails/topicDetails?id=' + id
				})
			},
			goJuquanVideo(){
				uni.navigateTo({
					url: '/pages/juquanVideo/juquanVideo?type=' + 1 
				})
			},
			goSearch(){
				uni.navigateTo({
					url: "/pages/G-circle/search-content/search-content"
				})
			},
			change(e) {
				this.current = e.detail.current
			},
			// 卡片轮播
			DotStyle(e) {
				this.dotStyle = e.detail.value;
			},
			// cardSwiper
			cardSVideo(e) {
				this.cardvvideo = e.detail.current;
			},// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current;
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2));
					list[i].mLeft = i - parseInt(list.length / 2);
				}
				this.swiperList = list;
			},
	
			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX;
			},
	
			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left';
			},
	
			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft;
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex;
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft;
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex;
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = '';
				this.swiperList = this.swiperList;
			}
			
		}
	}
</script>

<style>
	.banner{
		position: relative;
		width: 750upx;
		height: 466upx;
		background-color: #fff;
	}
	.address{
		position: absolute;
		z-index: 100;
		top: 63upx;
		left: 30upx;
		font-size:24upx;
		font-family:PingFang SC;
		color:rgba(255,255,255,1);
	}
	.arrow{
		position: absolute;
		z-index: 100;
		top: 68upx;
		left: 79upx;
	}
	.info{
		position: absolute;
		z-index: 100;
		top: 59upx;
		left: 678upx;
	}
	.search-image{
		position: absolute;
		z-index: 1000;
		top: 334upx;
		left: 93upx;
	}
	.search-white{
		position: absolute;
		z-index: 1000;
		top: 364upx;
	}
	.search{
		position: absolute;
		box-sizing: border-box;
		z-index: 100;
		top: 316upx;
		left: 63upx;
		width: 624upx;
		height: 64upx;
		background:rgba(246,246,246,1);
		border-radius:36upx;
		padding-left: 60upx;
		font-size: 26upx;
	}
	
	.swiper-box {
		height: 466upx;
		z-index: -1;
	}

	.swiper-item {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		background: #eee;
		color: #fff;
	}
	.video-image{
		position: absolute;
		/* margin-top: -60upx; */
		top: 322upx;
		left: 152upx;
	} 
	.swiper-item image {
		width: 100%;
		height: 100%;
	}
	.video-nav{
		position: relative;
		text-align: center;
		/* margin-bottom: -26upx; */
	}
	.video-nav-hot{
		position: absolute;
		top: 8upx;
		left: 30upx;
		font-size:34upx;
		font-family:PingFang SC;
		font-weight:600;
		color:rgba(51,51,51,1);
	}
	.video-nav-eye{
		top: 10upx;
		font-size:24upx;
		font-family:PingFang SC;
		color:rgba(102,102,102,1);
	}
	.video-nav-more{
		position: absolute;
		top: 20upx;
		left: 656upx;
		font-size:24upx;
		font-family:PingFang SC;
		color:rgba(102,102,102,1);
	}
	.video-nav-more-image{
		position: absolute;
		top: 26upx;
		left: 710upx;
	}
	/* 卡片轮播 */
	.swiper-item{
		background-color: #fff;
		position: relative;
	}
	/* .swiper-item image,
	.swiper-item video {
		width: 100%;
		display: block;
		height: 100%;
		margin: 0;
		pointer-events: none;
	} */
	.card-swiper {
		height: 646upx !important;
	}

	.card-swiper swiper-item {
		width: 368upx !important;
		left: 180upx;
		box-sizing: border-box;
		padding: 25rpx 0rpx 70rpx;
		overflow: initial;
	}

	.card-swiper swiper-item .swiper-item {
		display: block;
		transform: scale(0.9,0.75);
		
		transition: all 0.2s ease-in 0s;
		overflow: hidden;
		width:368upx;
		height:443upx;
		background:rgba(204,204,204,1);
		border:1px solid rgba(226,226,226,1);
		box-shadow:1px 2px 13upx 0px rgba(38,38,38,0.31);
		border-radius:50upx;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
	}
	/* 众话题 */
	.zhong{
		margin-top: -130upx;
		margin-bottom: 16px;
	}
	.zhong-nav{
		position: relative;
		text-align: center;
	}
	.zhong-content{
		float: left;
		margin-top: 10px;
		margin-bottom: 30upx;
	}
	.zhong-content-image{
		float: left;
		margin-left: 26upx;
		margin-bottom: 6px;
		width:346upx;
		height:218upx;
		background:rgba(0,0,0,1);
		border-radius:14upx;
		text-align: center;
		font-size:30upx;
		font-family:PingFang SC;
		color:rgba(255,255,255,1);
		line-height: 218upx;
	}
	.zhong-content-image:nth-child(even){
		margin-left: 16upx;
	}
	
	
	
	/* 精选好物 */
	.quality{
		margin-bottom: 10px;
	}
	.card-swiper-immeuble{
		margin-top: -10px;
	}
	.card-swiper-immeuble swiper-item {
		width: 626upx !important;
		left: 26upx;
		box-sizing: border-box;
		padding: 40rpx 0rpx 70rpx;
		overflow: initial;
	}

	.card-swiper-immeuble swiper-item .swiper-item-immeuble {
		height: 322rpx !important;
		border:1px solid rgba(226,226,226,1);
		box-shadow:-2upx 1upx 16upx 0px rgba(0, 0, 0, 0.08);
		border-radius:20upx;
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
		padding: 12upx 22upx;
		padding-top: 30upx;
	}
	.immeuble{
		float: left;
		margin-left: 12upx;
		width: 179upx;
	}
	.immeuble-desc{
		margin: 5px 0;
		font-size:24upx;
		line-height: 24upx !important;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		line-height: 30upx;
	}
	.immeuble-price{
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(244,51,72,1);
	}
	.card-swiper-immeuble {
		height: 392rpx !important;
		margin-right: 26upx;
	}
	/* 居圈 */
	.juquan{
		margin-bottom: 60px;
	}
	.juquan-nav{
		position: relative;
		text-align: center;
		margin-bottom: 22upx;
	}
	.juquan-content{
		float: left;
		margin-top:10px;
		margin-left: 11px;
	}
	.juquan-content:nth-last-child(1){
		margin-bottom: 60px;
	}
	.juquan-content-model{
		position: relative;
		width: 347upx;
		height: 508upx;
		background:rgba(255,255,255,1);
		box-shadow:1px 0px 7upx 0px rgba(136,136,136,0.4);
		border-radius:8upx;
	}
	
	.juquan-content-model-image{
		position: absolute;
	}
	.juquan-content-model-des{
		position: absolute;
		left: 20upx;
		top: 363upx;
		width: 298upx;
		height: 58upx;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		line-height:32upx;
	}
	.juquan-content-info-avator{
		position: absolute;
		left: 20upx;
		top: 434upx;
	}
	.juquan-content-info-nickname{
		position: absolute;
		left: 86upx;
		top: 446upx;
		font-size:22upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(102,102,102,1);
	}
	.footer-more{
		height: 120upx;
		line-height: 120upx;
		padding-bottom: 100rpx;
		box-sizing: border-box;
		bottom: 134px;
		text-align: center;
		font-size:24upx;
		font-family:PingFang SC;
		color:rgba(204,204,204,1);
	}
	/* 流海屏 */
	.titleNview-placing {
		height: var(--status-bar-height);
		padding-top: 44px;
		box-sizing: content-box;
	}
</style>