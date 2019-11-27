<template>
    <view class="wrap">
		<view class="pic" @click="chooseImage">
			<image src="../../static/img/release/pic.png" mode="" />
		</view>
		<text class="pic-text">图片</text>
		<view class="video" @tap="chooseVideo">
			<image src="../../static/img/release/video.png" mode="" />
		</view>
		<text class="video-text">视频</text>
		<view class="close" @tap="back">
			<image src="../../static/img/release/close.png" mode="" />
		</view>
	</view>
</template>

<script>
    export default {
        data() {
            return {
               src: '',
			   imgList: []
            }
        },
        methods: {
            back(){
				uni.navigateBack()
			},
			chooseVideo(){
				const url = this.url
				// uni.chooseVideo({
				// 	success: (chooseImageRes) => {
				// 		const tempFilePaths = chooseImageRes.tempFilePaths;
				// 		uni.uploadFile({
				// 			url: url + "/upload", //仅为示例，非真实的接口地址
				// 			filePath: tempFilePaths[0],
				// 			name: 'file',
				// 			formData: {
				// 				'user': 'test'
				// 			},
				// 			success: (uploadFileRes) => {
				// 				console.log(uploadFileRes.data);
				// 			}
				// 		});
				// 	}
				// });
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: function (res) {
						console.log(res)
						const src = res.tempFilePath;
						console.log(src)
						
						uni.uploadFile({
							url: url + "/upload", //仅为示例，非真实的接口地址
							filePath: src,
							name: 'file',
							formData: {
								'user': 'test'
							},
							success: (uploadFileRes) => {
								console.log(uploadFileRes.data);
							}
						});
					}
				})

				
            },
            chooseImage() {
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
											testArr: []
										}
										that.imgList.push(obj)
									// console.log(that.imgList.length , tempFilePaths.length)
									if(that.imgList.length == tempFilePaths.length) {
										that.$store.commit('saveImage', that.imgList)
										uni.navigateTo({
											url: '/pages/releaseImage/add-tag/add-tag'
										})
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
		background:rgba(255,255,255,0);
	}
	.wrap{
		width:750rpx;
		height:1334rpx;
		background:rgba(255,255,255,.5);
		/* opacity:0.96; */
	}
	.pic{
		position: absolute;
		left: 89rpx;
		bottom: 173rpx;
		width: 234rpx;
		height: 234rpx;
	}
	.pic image{
		width: 234rpx;
		height: 234rpx;
	}
	.pic-text{
		position: absolute;
		left: 175rpx;
		bottom: 155rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.video{
		position: absolute;
		right: 67rpx;
		bottom: 157rpx;
		width: 272rpx;
		height: 272rpx;
	}
	.video image{
		width: 272rpx;
		height: 272rpx;
	}
	.video-text{
		position: absolute;
		right: 173rpx;
		bottom: 155rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.close{
		position: absolute;
		right: 356rpx;
		bottom: 52rpx;
		width: 38rpx;
		height: 38rpx;
	}
	.close image{
		width: 38rpx;
		height: 38rpx;
	}
</style>
