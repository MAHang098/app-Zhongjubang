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
				
				<movable-area :animation="false" ref='singleDom'>
					<movable-view :animation="false" :x="tag.tagX" :y="tag.tagY" :moveIndex="index" direction="all" 
					@change="onChange($event, tagIndex, index, tag.fileName)"
					 class="tagText" v-for="(tag, tagIndex) in tagItems" :key="tagIndex" 
					  @click.stop="togglePopup('center', 'tip', tagIndex, tag.tagName, index)">
						<image src="../../../static/upload/indicator.png" mode="" @click.stop="changeMove(tagIndex)" ></image>
						<view class="tag-detail " :class="setIndex == tagIndex && rotate ? 'moveleft' : ' moveright' ">
							<image src="../../../static/tag/cart.png" mode="" v-show="tag.type == 'product' || tag.type != 'tag'"></image>
							{{tag.tagName | ellipsis}}
						</view>
					</movable-view>
				</movable-area>
				<!-- 拖动视图 end -->
			</swiper-item>
		</swiper>
		<!-- 轮播 end -->
		<!-- 删除标签 start -->
		<uni-popup :show="show" :type="type" :custom="true" :mask-click="false" @change="currenChange">
			<view class="uni-tip">
				<!-- <view class="uni-tip-title">提示</view> -->
				<view class="uni-tip-content">确定要删除该标签吗？</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="cancelPopup('tip')">取消</view>
					<view class="uni-tip-button insist-skip" @click="cancelPopup('skip')">删除</view>
				</view>
			</view>
		</uni-popup>
		<!-- 删除标签 end -->
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
				items: [],
				allImg: 0, // 图片总数
				indexImg: 1, // 当前所在第几张图片
				rotate: false,
				searchVal: 0,
				tagItems: [],   // 标签数组
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
				setIndex: -1
			}
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 12) {
				return value.slice(0,12) + '...'
			  }
			  return value
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			// if(option.length)
			if(option.current) {
				this.current = option.current;
				this.indexImg = option.indexImg;
			}
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
				this.items.forEach((item, i, array) => {
					item.testArr = [];
				})
				this.$store.commit('saveImage', this.items);
				uni.navigateTo({
					url: '/pages/releaseImage/release-image/release-image'
				})
			},
			// 弹出层弹出的方式  i:当前标签的下标, name: 当前标签的name
			togglePopup(type, open, i, name, imgIndex) {
				this.tagImageIndex = imgIndex;
				this.currentTagIndex = i;
				this.currentTagName = name;
				switch (type) {
					case 'top':
						this.content = '顶部弹出 popup'
						break
			
					case 'bottom':
						this.content = '底部弹出 popup'
						break
					case 'center':
						this.content = '居中弹出 popup'
						break
				}
				this.type = type
				if (open === 'tip') {
					this.show = true
				} else {
					this.$refs[open].open()
				}
			},
			// 取消弹出层
			cancelPopup(type) {
				if (type === 'tip') {
					this.show = false
					return
				}
				if(type === 'skip') {
					this.items.forEach((item, i) => {
						let tagArr = item.testArr;
						tagArr.forEach((tag, index) => {
							let allTag = tag.allTagArr;
							if(tag.currentImage == this.tagImageIndex) {
								allTag.forEach((single, s, array) => {
									if(s == this.currentTagIndex && single.tagName == this.currentTagName) {
										array.splice(this.currentTagIndex,1);
										this.show = false;
									}
								})
							}
						})
					});
					
				}
			},
			// 显示删除弹窗
			currenChange(e) {
				// console.log(e.show)
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
			// 拖动标签 e拖动标签后的x，y轴标签， i：当前拖动标签的下表 ， imageIndex：拖动标签当前所在的图片是第几张
			onChange(e, index, imageIndex, name) {
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
			changeMove(index) {
				// this.rotate=!this.rotate;
				// this.setIndex = index;
				// let mask = false, testIndex, arrTag=[];
				// let arr = this.items[imageIndex].testArr[0];
				// if(!arr) {
				// 	return;
				// }
				// arrTag = arr.allTagArr;
				// for(let a = 0; a < arrTag.length; a++) {
				// 	if(a == index) {
				// 		arrTag[index] = {
				// 			tagName: arrTag[a].tagName,
				// 			tagX: e.detail.x,
				// 			tagY: e.detail.y,
				// 			left: true
				// 		}
				// 		break; 
				// 	}
				// }
				// let arrObj = {
				// 	currentImage: imageIndex,
				// 	fileName: name,
				// 	allTagArr: arrTag,
				// 	type: 'add'
				// }
				// this.$store.commit('saveImage', arrObj)
			},
			// 跳转到发布页面
			nextRelease() {
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
		position: absolute ;
		top: 25%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 87rpx;
		width: 420rpx;
		/* border: 1px solid red; */
		color: #fff;
		z-index: 1;
	}
	
	movable-area {
		position: absolute !important;
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
		padding: 44rpx 0;
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
