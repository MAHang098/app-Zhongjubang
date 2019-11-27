<template>
    <view class="wrap">
		<view class="pic" @click="chooseImage">
			<image src="../../static/img/release/pic.png" mode="" />
		</view>
		<text class="pic-text">图片</text>
		<view class="video" @tap="chooseVideo">
			<!-- <view class="video" @tap="chooseVideo"> -->
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
               src: ''
            }
        },
        methods: {
            back(){
				uni.navigateBack()
			},
			chooseVideo(){
				const url = this.url
				
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
								uploadFileRes.data = JSON.parse(uploadFileRes.data)
								if(uploadFileRes.data.code==200){
									uni.navigateTo({
										url: "/pages/releaseVideo/releaseVideo?fileUrl=" + uploadFileRes.data.data.fileUrl
									})
								}else{
									console.log("请求异常")
								}
								
							}
						})
					}
				})

				
            },
            chooseImage() {
				const url = this.url
				uni.chooseImage({
				    count: 4, //默认9
				    sizeType: ['original', 'compressed'],//可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album','camera'], //从相册选择
				    success: function (res) {
						console.log(res)
				   
						const src = res.tempFilePaths;
						console.log(src)
						console.log(url)
						
						uni.uploadFile({
							url: url + "/upload", //仅为示例，非真实的接口地址
							filePath: src,
							name: 'file',
							formData: {
								'user': 'test'
							},
							header:{"Content-Type": "multipart/form-data"},
							success: (res) => {
								console.log(res)
								// uploadFileRes.data = JSON.parse(uploadFileRes.data)
								// if(uploadFileRes.data.code==200){
								// 	uni.navigateTo({
								// 		url: "/pages/releaseVideo/releaseVideo?fileUrl=" + uploadFileRes.data.data.fileUrl
								// 	})
								// }else{
								// 	console.log("请求异常")
								// }
								
							},
							fail: (err) => {
								console.log(err)
							}
						})
						
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
