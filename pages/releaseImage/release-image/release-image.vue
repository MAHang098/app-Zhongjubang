<template>
	<view class="release">
		<view class="desc">
			<textarea placeholder="多多分享想法和经验..."  maxlength="200" class="release-text" v-model="desc"  @input = "descInput"/>
			<view class="num">{{remnant}}/200</view>
		</view>
		<view class="topic">
			<view class="left">
				<image src="../../../static/topic/topic.png" mode=""></image>
				<view>参与话题</view>
			</view>
			<view class="right">
				<view>选择合适的话题会获得更多关注哦~</view>
				<image src="../../../static/topic/arrow.png" mode=""></image>
			</view>
		</view>
		
		<!-- 上传图片 start -->
		<view class="upload-list">
			<view class="img" v-for="(item, index) in allImage" :key="index">
				<image :src="item.fileUrl" mode="" @tap="previewImage(index)"></image>
				<image src="../../../static/topic/deletes.png" mode="" class="delete" @click="deleteImage(item.fileName, index)"></image>
			</view>
			<image src="../../../static/topic/add-upload.png" mode=""  @click="chooseImage" v-show="isUpload"></image>
		</view>
		
		<!-- 底部 start -->
		<view class="bottom">
			<image src="../../../static/topic/img.png" mode="" @click="chooseImage"></image>
			<view>存草稿</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				remnant: 0,
				desc: '',
				allImage: [],
				allTag: [],
				imgList: [],
				isUpload: true
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			// console.log(this.$store.state.itemImage); //打印出上个页面传递的参数。
			// this.allTag = this.$store.state.itemImage;
			this.allImage = this.$store.state.uploadImage;
			console.log(this.allImage.length)
			if(this.allImage.length > 8) {
				this.isUpload = false;
			}
		},
		methods: {
			descInput() {
				this.remnant = e.detail.value.length
			},
			previewImage(e) {
				let uuuu = []
				console.log(this.allImage[e].fileUrl)
				uuuu = this.allImage[e].fileUrl
				let uu = [uuuu]
				console.log(uu)
				let self = this
				var pages = getCurrentPages();
				var currPage = pages[pages.length - 1];  //当前页面
				var prevPage = pages[pages.length - 2];  //上一个页面
				prevPage.current= e;
			   uni.navigateBack();
			
			},
			// 删除图片
			deleteImage(name, index) {
				this.allImage.forEach((item, i, array) => {
					if(item.fileName == name && index == i) {
						// console.log(item)
						array.splice(index,1)
					}
				})
				this.isUpload = true;
				this.$store.commit('saveImage', this.allImage);
			},
			// 选择上传图片
			chooseImage() {
				let pic = this.$store.state.uploadImage;
				if(pic.length > 8) {
					console.log("已经有9张图片了")
					this.isUpload = false;
					return;
				}
				let that = this;
				uni.chooseImage({
				    count: 9, //默认9
				    // sizeType:'compressed', //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
						uni.showLoading({
							title: '请稍等',
							mask: true
						})
						const tempFilePaths = res.tempFilePaths;
						
						for(let i in tempFilePaths) {
							// this.imgList.push(tempFilePaths[i]);
							uni.uploadFile({
								url: that.url + '/upload', //仅为示例，非真实的接口地址
								filePath: tempFilePaths[i],
								name: 'file',
								formData: {
									'user': 'test'
								},
								success: (uploadFileRes) => {
									uni.hideLoading();
									
									
									let data = JSON.parse(uploadFileRes.data);
									let obj = {
										fileName: data.data.fileName,
										fileUrl:data.data.fileUrl,
										type: 'pre-release',
										testArr: []
									}
									that.imgList.push(obj)
									that.imgList.type = 'pre-release';
									if(that.imgList.length == tempFilePaths.length) {
										
										let currentLength = that.allImage.length;
										let pages = getCurrentPages();
										let currPage = pages[pages.length - 1];  //当前页面
										let prevPage = pages[pages.length - 2];  //上一个页面
										prevPage.current= currentLength;
										prevPage.indexImg = currentLength +1 ;
										that.$store.commit('saveImage', that.imgList);
										uni.navigateBack();
										
									}
									
								}
							});
						}
						
						
				    }
				});
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
	}
	.desc {
		position: relative;
	}
	.release-text {
		width: 100%;
		/* border: 1px solid red; */
		border-top: 1px solid #E2E2E2;
		border-bottom: 1px solid #E2E2E2;
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		font-size: 28rpx;
	}
	.num {
		position: absolute;
		right: 30rpx;
		bottom: 15rpx;
		color: #999999;
		font-size: 24rpx;
		font-weight: bold;
	}
	.topic {
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		font-size: 22rpx;
		font-weight: 500;
		display: flex;
		justify-content: space-between;
	}
	.left {
		width: 160rpx;
		height: 50rpx;
		line-height: 50rpx;
		color: #F9B72C;
		background: rgba(249,183,44, .2);
		border-radius: 30rpx;
		display: flex;
		justify-content: flex-start;
		text-align: center;
	}
	.left image {
		width: 25rpx;
		height: 25rpx;
		display: block;
		margin-top: 12rpx;
		margin-left: 22rpx;
		margin-right: 6rpx;
	}
	.right image {
		width: 15rpx;
		height: 25rpx;
		display: block;
		margin-top: 2px;
		margin-left: 4px;
	}
	.right {
		color: #999999;
		display: flex;
		justify-content: flex-start;
	}
	/* 图片上传 start */
	.upload-list {
		box-sizing: border-box;
		padding: 0 30rpx;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.upload-list image {
		width: 221rpx;
		height: 208rpx;
		display: block;
	}
	.upload-list .img {
		position: relative;
		width: 30%;
		margin-right: 28rpx;
		margin-bottom: 15rpx;
	}
	.upload-list .img:nth-of-type(3n) {
		margin: 0;
	} 
	.delete {
		position: absolute;
		width: 26rpx !important;
		height: 26rpx !important;
		display: block;
		top: 5%;
		right: 0rpx;
	}
	/* 底部 start */
	.bottom {
		width: 100%;
		position: fixed;
		bottom: 0;
		height:100rpx;
		/* line-height: 100rpx; */
		background:rgba(255,255,255,1);
		box-shadow:4px -2px 9px 0px rgba(138,138,138,0.09);
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 30rpx;
		color: #666666;
		font-weight: 500;
		font-size: 26rpx;
	}
	.bottom image {
		width: 42rpx;
		height: 36rpx;
		display: block;
	}
	.bottom view {
		width: 108rpx;
		height: 45rpx;
		line-height: 45rpx;
		border-radius: 23rpx;
		border: 1px solid #999999;
		text-align: center;
	}
</style>
