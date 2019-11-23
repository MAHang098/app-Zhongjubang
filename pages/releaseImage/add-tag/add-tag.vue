<template>
	<view >
		<view class="header">
			<image src="../../../static/topic/white-back.png" mode=""></image>
			<view>{{indexImg}}/{{allImg}}</view>
			<view class="next">确定</view>
		</view>
		<!-- 轮播 start -->
		<swiper class="swiper scroll-view_H" ref="pageHeight" :style="{height: clientHeight + 'px'}" :vertical="vertical" :autoplay="autoplay"  @change="changeImage"> 
			<swiper-item class="scroll-list" v-for="(item, index) in items" :key="index">
				<image :src="item.img" mode="widthFix" class="chose-img"></image>
				<image src="../../../static/topic/add-tag.png" mode="" class="add-tag"></image>
				<view class="tag-logo" @click="goSearch(index)">
					<image src="../../../static/topic/tag.png" mode="" ></image>
					<text>标签</text>
				</view>
				<!-- 拖动视图 start -->
				<movable-area>
					<movable-view :x="x" :y="y" direction="all" @change="onChange" class="tagText" >
						<image src="../../../static/upload/indicator.png" mode="" @click="changeMove"></image>
						<view class="tag-detail " :class="rotate ? 'moveright' : 'moveleft' ">{{searchVal}}</view>
					</movable-view>
				</movable-area>
				<!-- 拖动视图 end -->
			</swiper-item>
		</swiper>
		<!-- 轮播 end -->
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				clientHeight: '',
				vertical: false,
				autoplay: false,
				items: [
					{id: 1, img: '../../../static/topic/testbg.png'},
					{id: 2, img: '../../../static/topic/testbg.png'},
					{id: 3, img: '../../../static/topic/testbg.png'},
					{id: 4, img: '../../../static/topic/testbg.png'},
					{id: 5, img: '../../../static/topic/testbg.png'},
					{id: 6, img: '../../../static/topic/testbg.png'}
				],
				x: 0,
				y: 0,
				allImg: 0, // 图片总数
				indexImg: 1, // 当前所在第几张图片
				rotate: true,
				searchVal: 0,
				tagItems: []   // 标签数组
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log(tagItems); //打印出上个页面传递的参数。
			// console.log(option); //打印出上个页面传递的参数。
		},
		created() {
			// 获取当前手机屏幕高度来设置swiper的高
			let height = '';
			uni.getSystemInfo({
			    success: function (res) {
					height = res.windowHeight;
			    }
			}); 
			 this.clientHeight = height;
			 this.allImg =  this.items.length;
		},
		
		   
		methods: {
			changeImage(e) {
				let index = e.detail.current;
				this.indexImg = index + 1
			},
			onChange(e) {
				// this.x = e.detail.x; 
				// this.y = e.detail.y;
			
			},
			// 跳转到搜索标签
			goSearch(index) {
				// console.log(111)
				uni.navigateTo({
					url: '/pages/releaseImage/search-tag/search-tag?index=' + index
				})
			},
			changeMove() {
				this.rotate=!this.rotate;
			},
			
		}
	}
</script>

<style>
	page {
		background: rgba(0,0,0,1);
	}
	.header {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 10rpx 30rpx;
		/* border-bottom: 1px solid #E2E2E2; */
		color: #FFFFFF;
		position: fixed;
		z-index: 1;
		font-size: 36rpx;
		top: 40rpx;
	}
	.header image {
		width: 15rpx;
		height: 31rpx;
		display: block;
		margin: auto 0;
	}
	.next {
		width: 106rpx;
		height: 48rpx;
		line-height: 48rpx;
		margin: auto 0;
		border-radius: 24rpx;
		background: #F9B72C;
		text-align: center;
		font-size: 30rpx;
	}
	.swiper {
		width: 100%;
		display: block;
		position: relative;
		z-index: 0;
	}
	.chose-img {
		width: 100%;
		height: 100%;
		display: block;
	}
	.scroll-list {
		/* position: relative; */
		position: absolute;
		z-index: 2;
	}
	.add-tag, .tag-logo {
		position: absolute;
		top: 0;
		display: block;
		left: 40%;
		z-index: 1;
	}
	.add-tag {
		width: 226rpx;
		height: 50rpx;
		top: 44%;
	}
	.tag-logo {
		color: #FFFFFF;
		text-align: center;
		top: 80%;
		font-size: 28rpx;
		font-weight: 500;
	}
	.tag-logo image {
		width: 120rpx;
		height: 120rpx;
		display: block;
		margin-bottom: 30rpx;
	}
	.tag-logo text {
		
	}
	/* 移动标签 */
	.area {
		
	}
	movable-view {
		position: absolute;
		top: 25%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 87rpx;
		width: 100px;
		/* border: 1px solid red; */
		color: #fff;
		z-index: 1;
	}
	
	movable-area {
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;
		/* border: 1px solid red; */
		/* background-color: #D8D8D8; */
		overflow: hidden;
	}
	
	.max {
		width:500upx;
		height: 500upx;
	}
	.tagText image {
		width: 35rpx;
		height: 35rpx;
		display: block;
	}
	.tag-detail {
		padding: 6rpx 25rpx;
		background: rgba(0,0,0,.6);
		margin-top: 58rpx;
		font-size: 24rpx;
		font-weight: 500;
		
	}
	.moveright {
		margin-left: -1px;
		border-radius:0px 13rpx 0px 13rpx;
		/* transition: all 1s; */
	}
	.moveleft {
		/* transform:rotate(-360deg);	 */
		/* transition: all 2s; */
		margin-left: -125rpx;
		border-radius:13rpx 0px  13rpx 0px;
	}
</style>
