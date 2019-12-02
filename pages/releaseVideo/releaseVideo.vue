<template>
	<view>
        <view class="release-video">
            <image class="back" src="../../static/img/back.png" mode="" />
			<text class="title">发布视频</text>
			<image class="fly" src="../../static/img/releaseVideo/release.png" mode="" @tap="release" />
        </view>
		<view class="release">
			<view class="desc">
				<textarea placeholder="多多分享想法和经验..."  v-model="desc"  maxlength="200" class="release-text"  @input = "descInput"/>
				<view class="num">{{remnant}}/200</view>
			</view>
		</view>
		
		<view class="video" @tap="chooseVideo">
			<image class="add" src="../../static/img/releaseVideo/add.png" mode="" />
		</view>
		<!--  v-if="src" -->
		<view class="video1" v-if="src">
			<video :src="src" mode=""></video>
			<image class="close" @tap="delectVideo" src="../../static/img/releaseVideo/close.png" mode="" />
		</view>

		<!-- 底部 start -->
		<view class="bottom" @tap="save">
			<image src="../../static/img/releaseVideo/save.png" mode=""></image>
			<view>存草稿</view>
		</view>
    </view>
</template>

<script>
	export default {
	    data() {
	        return {
				fileUrl: '',
				src: '',
				content: '',
				remnant: 0,
				desc: '',
				token: [],
				videoUrl: ''
				// src: '../../static/img/releaseVideo/add.png'
	        }
		},
		onLoad(options){
			let self = this
			if(options){
				console.log(options.fileUrl)
				self.src = options.fileUrl
			}
			
		},
	    methods: {
			descInput(e) {
				this.remnant = e.detail.value.length
			},
			delectVideo(){
				let self = this
                uni.showModal({
                    title:"提示",
                    content:"是否要删除此视频",
                    success:(res) =>{
                        if(res.confirm){
                            self.src = ''
                        }
                    }
                })
			},
			chooseVideo(){
				const url = this.url
				let self = this
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: function (res) {
						console.log(res)
						const src = res.tempFilePath;
						console.log(src)
						self.src = src
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
									self.src = uploadFileRes.data.data.fileName
									self.videoUrl = uploadFileRes.data.data.fileUrl
								}else{
									console.log("请求异常")
								}
							}
						})
						
					}
				})

				
			},
			release(){
				const url = this.url
				const content = this.desc
				let token
				const src = this.src;
				let self = this
				console.log(self.src)
				uni.getStorage({
					key:"token",
					success: function (res) {
						token = res.data;
					}
				})
				console.log(token)

				uni.request({
					url: url + "/controller/usercontroller/addshortvideo",
					data: {
						videoUrl: self.src,
						content: content
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': token
					},
					success: function (res){
						console.log(res)
						console.log(res.data.code)
						if(res.data.code==200){
							uni.navigateTo({
								url: "/pages/releaseVideo2/releaseVideo2"
							})
						}else{
							console.log('请求异常')
						}
					}
				})
				
			},
			save(){
				// 添加草稿
				const url = this.url
				const content = this.desc
				let token
				const src = this.src;
				let self = this
				console.log(self.src)
				uni.getStorage({
					key:"token",
					success: function (res) {
						token = res.data;
					}
				})
				console.log(token)
				let draftsContent = [
					{
						content: content,
						videoName: self.src,
						videoUrl: self.videoUrl
					}
				]
				console.log(draftsContent)
				let str = JSON.stringify(draftsContent);
				let parmas = {
					type: 2,
					draftsContent: str
				}
				uni.request({
					url: url + "/controller/videocontroller/addappuserdrafts",
					data: parmas,
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': token
					},
					success: function (res){
						console.log(res.data.code)
						if(res.data.code==200){
							uni.navigateTo({
								url: "/pages/drafts/drafts"
							})
						}else{
							console.log('请求异常')
						}
					}
				})
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
	}
	
    .release-video{
        position: relative;
        width:750rpx;
        height:128rpx;
        background:rgba(255,255,255,1);
		border-bottom: 2rpx solid rgba(226,226,226,1);
    }
    .back{
        position: absolute;
        left: 31rpx;
        bottom: 26rpx;
        width:54rpx;
        height:54rpx;
    }
    .back image{
        width:54rpx;
        height:54rpx;
    }
	.title{
		position: absolute;
		left: 305rpx;
		bottom: 26rpx;
		font-size:36rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.fly{
	    position: absolute;
	    right: 30rpx;
	    bottom: 24rpx;
	    width:108rpx;
	    height:45rpx;
	}
	.fly image{
	    width:108rpx;
	    height:45rpx;
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
	
	.video{
		position: absolute;
		left: 29rpx;
		top:428rpx;
		width:221rpx;
		height:208rpx;
	}
	.video image{
		width:221rpx;
		height:208rpx;
	}
	.video1{
		position: absolute;
		left: 29rpx;
		top:428rpx;
		width:221rpx;
		height:208rpx;
		z-index: 99;
	}
	.video1 video{
		width:221rpx;
		height:208rpx;
	}
	.close{
		position: absolute;
		left: 180rpx;
		top:20rpx;
		width:26rpx;
		height:26rpx;
		z-index: 999;
	}
	.close image{
		width:26rpx;
		height:26rpx;
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
