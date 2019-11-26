<template>
	<view >
		<view class="header">
			<image src="../../../static/topic/white-back.png" mode="" @click="cancel"></image>
			<view>{{indexImg}}/{{allImg}}</view>
			<view class="next" @click="nextRelease">确定</view>
		</view>
		<!-- 轮播 start -->
		<swiper :disable-programmatic-animation="true" class="swiper scroll-view_H" ref="pageHeight" :style="{height: clientHeight + 'px'}" :vertical="vertical" :autoplay="autoplay"  @change.stop="changeImage" :current="current"> 
			<swiper-item class="scroll-list" v-for="(item, index) in items" :key="index">
				<view class=""  style="display:flex;align-items:center; height: 100%;">
					<image :src="item.fileUrl" mode="widthFix" class="chose-img" ></image>
					<text></text>
				</view>
				<image src="../../../static/topic/add-tag.png" mode="" class="add-tag" v-show="isShowAddTag"  @click="goSearch(index, item.fileName)"></image>
				<view class="tag-logo" @click="goSearch(index, item.fileName)">
					<image src="../../../static/topic/tag.png" mode="" ></image>
					<text>标签</text>
				</view>
				<!-- 拖动视图 start -->
				<movable-area :animation="false">
					<movable-view :animation="false" :x="tag.tagX" :y="tag.tagY" :moveIndex="index" direction="all" 
					@change.stop="onChange($event, tagIndex, index, tag.fileName)"
					 class="tagText" v-for="(tag, tagIndex) in tagItems" :key="tagIndex">
						<image src="../../../static/upload/indicator.png" mode="" @click="changeMove" ></image>
						<view class="tag-detail " :class="rotate ? 'moveright' : 'moveleft' ">{{tag.tagName}}</view>
					</movable-view>
				</movable-area>
				<!-- 拖动视图 end -->
			</swiper-item>
		</swiper>
		<!-- 轮播 end -->
	</view>
</template>

<script>
	// import searchTag from '../search-tag/search-tag.vue'
	export default {
		data() {
			return {
				clientHeight: '',
				vertical: false,
				autoplay: false,
				items: [],
				x: 0,
				y: 0,
				maxY: 480,
				minX: 310,
				allImg: 0, // 图片总数
				indexImg: 1, // 当前所在第几张图片
				rotate: true,
				searchVal: 0,
				tagItems: [],   // 标签数组
				isShowAddTag: true, // 是否显示添加标签的样式
				current: 0,
				tagArr: [],
				testIndex: null,
			}
		},
		
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			
		},
		onShow: function() {
			
			this.items = this.$store.state.uploadImage;
			this.allImg =  this.items.length;
			let once = null;
			this.items.forEach((item, index, arrar) => {
				if(this.items[index].type==='pre-release'){
					once = index;
					return once;
				}
 				if(item.testArr.length == 0) {
					return;
				}
				this.isShowAddTag = false;
				this.tagItems = item.testArr[0].allTagArr;
			})
			
		},
		beforeCreate: function() {
			
			// this.items = this.$store.state.uploadImage;
			// let once = null;
			// for(var i= 0;i<this.items.length;i++){
			// 	console.log(this.items[i])
			// 	if(this.items[i].type==='pre-release'){
			// 		once = i + 1;
			// 		break;
			// 	}
			// }
			// this.current = once;
			// console.log(this.current )
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
			init() {
				
			},
			cancel() {
				uni.navigateBack({
					 delta: 1,
				});
			},
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
			// 拖动标签 e拖动标签后的x，y轴标签， i：当前拖动标签的下表 ， imageIndex：拖动标签当前所在的图片是第几张
			onChange(e, index, imageIndex, name) {
				// console.log(e)
				if(e.detail.source !== 'touch') {
					return;
				}
				let mask = false, testIndex, arrTag=[];
				let arr = this.items[imageIndex].testArr[0];
				if(!arr) {
					return;
				}
				arrTag = arr.allTagArr;
				for(let a = 0; a < arrTag.length; a++) {
					if(a == index) {
						arrTag[index] = {
							tagName: arrTag[a].tagName,
							tagX: e.detail.x,
							tagY: e.detail.y
						}
						break; 
					}
				}
				let arrObj = {
					currentImage: imageIndex,
					fileName: name,
					allTagArr: arrTag,
					type: 'add'
				}
				this.$store.commit('saveImage', arrObj)
			
			},
			// 跳转到搜索标签
			goSearch(index, name) {
				uni.navigateTo({
					url: '/pages/releaseImage/search-tag/search-tag?index=' + index + '&name=' + name
				})
			},
			changeMove() {
				this.rotate=!this.rotate;
			},
			// 跳转到发布页面
			nextRelease() {
				// console.log(this.items)
				uni.navigateTo({
					url: '/pages/releaseImage/release-image/release-image'
				})
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
