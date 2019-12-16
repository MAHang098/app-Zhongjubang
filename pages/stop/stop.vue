<template>
    <view>
        <view class="search">
			<image class="search-image" style="width:26upx;height:26upx;" src="../../static/img/stop/search.png" mode="" />
			<input class="search-insert" type="text" placeholder="请输入您所需要的商品">
			<image class="car" style="width:41upx;height:39upx;" src="../../static/img/stop/car.png" mode="" />
		</view>
		<view class="banner">
			<image class="banner-image" style="width:663upx;height:345upx;" src="../../static/img/stop/banner.png" mode="" />
			
			<uni-swiper-dot :current="current" :mode="mode" :dots-styles="dotStyle" field="content">
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
    </view>
</template>

<script>
    
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'
    export default {
		components: {
			uniSwiperDot
		},
        data() {
			return {
				info: [{
						url: '../../static/img/main/bg.png',
						content: '内容 A'
					},
					{
						url: '../../static/img/main/bg.png',
						content: '内容 B'
					},
					{
						url: '../../static/img/main/bg.png',
						content: '内容 C'
					}
				],
				dotStyle: {
					backgroundColor: '#CCCCCC',
					border: '1px #CCCCCC solid',
					color: '#F9B72C',
					selectedBackgroundColor: '#F9B72C',
					selectedBorder: '1px #F9B72C solid'
				},
				current: 0,
				mode: 'round',
			}
		},
        methods: {
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
		height: 466upx;
		z-index: -1;
	}

	.swiper-item {
		display: flex;
		justify-content: space-around;
		height: 100%;
		background: #fff;
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
</style>
