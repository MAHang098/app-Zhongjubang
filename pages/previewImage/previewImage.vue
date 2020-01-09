<template>
	<view @click="cancel">
		<view class="header">
			<!-- <image src="../http://www.zhongjubang.com/api/upload/static/topic/white-back.png" mode="" @click="cancel"></image> -->
			<view>{{indexImg}}/{{allImg}}</view>
			<!-- <view class="next" @click="nextRelease">确定</view> -->
		</view>
		<!-- 轮播 start -->
		<swiper :disable-programmatic-animation="true" class="swiper scroll-view_H" ref="pageHeight" :style="{height: clientHeight + 'px'}" :vertical="vertical" :autoplay="autoplay"  @change.stop="changeImage" :current="current"> 
			<swiper-item class="scroll-list" v-for="(item, index) in items" :key="index">
				<view class=""  style="display:flex;align-items:center; height: 100%;">
					<image :src="item.fileUrl" mode="widthFix" class="chose-img" ></image>
					<text></text>
				</view>
				<!-- 拖动视图 start -->
				
				<view class="tag-list">
					<view :style="{transform: 'translateX(' + tag.tagX+'px) translateY(' + tag.tagY+'px) translateZ(0px) scale(1)'}"  class="tagText" v-for="(tag, tagIndex) in tagItems" :key="tagIndex" >
						<image src="http://www.zhongjubang.com/api/upload/static/upload/indicator.png" mode=""></image>
						<view class="tag-detail "  :class="rotate ? 'moveright' : 'moveleft' " @click.stop="goDetail(tag.goodsId)">
							<image src="http://www.zhongjubang.com/api/upload/static/tag/cart.png" mode="" v-if="tag.type == 'product' || tag.type != 'tag'"></image>
							{{tag.tagName | ellipsis}}
						</view>
					</view>
				</view>
				<!-- 拖动视图 end -->
			</swiper-item>
		</swiper>
		<!-- 轮播 end -->
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	// import searchTag from '../search-tag/search-tag.vue'
	export default {
		components:{ uniPopup},
		data() {
			return {
				clientHeight: '',
				vertical: false,
				autoplay: false,
				items: [
					// {id: 1, fileUrl: 'http://www.zhongjubang.com/api/upload/de9ea073-43a8-49d6-b56d-4f76d09f0e9a-3909.png'},
					// {id: 2, fileUrl: 'http://www.zhongjubang.com/api/upload/de9ea073-43a8-49d6-b56d-4f76d09f0e9a-3909.png'},
					// {id: 3, fileUrl: 'http://www.zhongjubang.com/api/upload/de9ea073-43a8-49d6-b56d-4f76d09f0e9a-3909.png'},
					// {id: 4, fileUrl: 'http://www.zhongjubang.com/api/upload/de9ea073-43a8-49d6-b56d-4f76d09f0e9a-3909.png'},
					// {id: 5, fileUrl: 'http://www.zhongjubang.com/api/upload/de9ea073-43a8-49d6-b56d-4f76d09f0e9a-3909.png'}
				],
				allImg: 0, // 图片总数
				indexImg: 1, // 当前所在第几张图片
				tagItems: [
					
				],   // 标签数组
				isShowAddTag: true, // 是否显示添加标签的样式
				current: 0,
				tagArr: [],
				testIndex: null,
				// 弹窗所用到的变量
				show: false,
				type: '',
				currentTagIndex: '',  // 用于删除当前标签  当前标签的下标
				currentTagName: '',  // 用于删除当前标签  当前标签的标签名
				tagImageIndex: 0	,// 用于删除当前标签  当前第几张图片,
				autoIndex: null,
				rotate: true
			}
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 6) {
				return value.slice(0,6) + '...'
			  }
			  return value
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			// if(option.length)
			// if(option.current) {
				this.current = option.current;
				this.indexImg = option.indexImg;
			// }
		},
		onShow: function() {
			let mark = false, autoIndex ;
			this.items = this.$store.state.uploadImage;
			this.allImg =  this.items.length;
			this.tagItems = [];
			for(let i = 0; i< this.items.length; i++) {
				let imgI = this.indexImg -1;
				this.isShowAddTag = true;
				if(this.items[i].testArr.length > 0) {
					if(parseInt(this.items[i].testArr[0].currentImage) == imgI) {
						this.isShowAddTag = false;
						mark = true;
						autoIndex = i;
						break;
					}
				}
			}
			
			if(mark) {
				this.tagItems = this.items[autoIndex].testArr[0].allTagArr;
			}
		},
		
		created:function(option) {
			// 获取当前手机屏幕高度来设置swiper的高
			let height = '';
			uni.getSystemInfo({
			    success: function (res) {
					height = res.windowHeight;
			    }
			}); 
			this.clientHeight = height;
			
		},
		   
		methods: {
			// 返回
			cancel() {
				this.$store.commit('clearData', []);
				uni.navigateBack();
				let pages = getCurrentPages(); //获取所有页面栈实例列表
				let nowPage = pages[pages.length - 1]; //当前页页面实例
				let prevPage = pages[pages.length - 2]; //上一页页面实例
				prevPage.$vm.is_refresh = false; //修改上一页data里面的searchVal参数值为1211
			},
			
			
		
			// 滑动图片
			changeImage(e) {
				let index = e.detail.current;
				this.indexImg = index + 1;
				this.tagItems = [];
				this.isShowAddTag = true;
				let arr = this.items[index].testArr[0];
				if(!arr) {
					return;
				}
				this.tagItems = arr.allTagArr;
				this.isShowAddTag = false;
				
			},
			// 跳转到商品详情
			goDetail(id) {
				if(id) {
					uni.navigateTo({
						url: '/pages/shopping-mall/detail/detail?id='+id
					})
				}
			}
		}
	}
</script>

<style>
	.imgIn {
		position: relative;
		top: 25%;
	}
	page {
		background: rgba(0,0,0,1);
	}
	.header {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		padding: 10rpx 30rpx;
		/* border-bottom: 1px solid #E2E2E2; */
		color: #FFFFFF;
		position: fixed;
		z-index: 1;
		font-size: 36rpx;
		top: 40rpx;
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
	.tagText {
		position: absolute ;
		top: 25%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 87rpx;
		width: auto;
		/* border: 1px solid red; */
		color: #fff;
		z-index: 1;
	}
	
	.tag-list {
		position: absolute !important;
		top: 0;
		height: 100%;
		width: 100%;
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
		padding: 8rpx 25rpx;
		background: rgba(0,0,0,.6);
		margin-top: 58rpx;
		font-size: 24rpx;
		font-weight: 500;
		border: 1px solid rgba(255,255,255,.3);
		display: flex;
		align-items: center;
	}
	.tag-detail image {
		margin-right: 10rpx;
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
