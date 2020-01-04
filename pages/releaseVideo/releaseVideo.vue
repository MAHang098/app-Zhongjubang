<template>
	<view>
        <view class="release-video">
            <image class="back" src="http://www.zhongjubang.com/api/upload/static/img/back.png" @click="cancel" mode="" />
			<text class="title">发布视频</text>
			<image class="fly" src="http://www.zhongjubang.com/api/upload/static/img/releaseVideo/release.png" mode="" @tap="release" />
        </view>
		<view class="release">
			<view class="desc">
				<textarea placeholder="多多分享想法和经验..."  v-model="desc"  maxlength="200" class="release-text"  @input = "descInput"/>
				<view class="num">{{remnant}}/200</view>
			</view>
		</view>
		
		<view class="video" @tap="chooseVideo">
			<image class="add" src="http://www.zhongjubang.com/api/upload/static/img/releaseVideo/add.png" mode="" />
		</view>
		<!--  v-if="src" -->
		<view class="video1" v-if="videoUrl">
			<video :src="videoUrl" mode=""></video>
			<image class="close" @tap="delectVideo" src="http://www.zhongjubang.com/api/upload/static/img/releaseVideo/close.png" mode="" />
		</view>

		<!-- 底部 start -->
		<view class="bottom" @click="togglePopup('center', 'tip')">
			<image src="http://www.zhongjubang.com/api/upload/static/img/releaseVideo/save.png" mode=""></image>
			<view>存草稿</view>
		</view>

		<!-- 保存标签 start -->
		<uni-popup :show="show" :popupType ="popupType" :custom="true" :mask-click="false" >
			<view class="uni-tip">
				<!-- <view class="uni-tip-title">提示</view> -->
				<view class="uni-tip-content">要保存到草稿箱吗？</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="cancelPopup('tip')">不保存</view>
					<view class="uni-tip-button insist-skip" @click="cancelPopup('skip')" style="color: #F9B72C;">保存</view>
				</view>
			</view>
		</uni-popup>
		<!-- 保存标签 end -->
    </view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	var app = getApp()
	export default {
		components:{ uniPopup},
	    data() {
	        return {
				fileUrl: '',
				src: '',
				remnant: 0,
				desc: '',
				token: [],
				videoUrl: '',
				drafts: {},
				show: false,
				popupType: '',
				type: '',
				appUserDraftsId: '',
				// src: 'http://www.zhongjubang.com/api/upload/static/img/releaseVideo/add.png'
	        }
		},
		onLoad(options){
			let self = this
			if(options.fileUrl){
				console.log(options.fileUrl)
				self.videoUrl = options.fileUrl
				self.fileName = options.src
			}else if(options.id){
				let drafts = this.$store.state.listVideo;
				if(drafts){
					console.log(drafts)
					console.log(drafts.url)
					console.log(drafts.name)
					self.videoUrl = drafts.url
					self.src = drafts.name
					self.desc = drafts.content
					self.appUserDraftsId = options.id
					self.init()
				}
			}
			
			
			
			
		},
		onShow(){

		},
	    methods: {
			init() {
				let that = this
				this.draftsList = [];
				uni.request({
					url: this.url + 'controller/videocontroller/getappuserdrafts',
					method: 'post',
					data: {'type': 2},
					header : {'content-type':'application/x-www-form-urlencoded', 'token': that.token, 'port': 'app'},
					success: ((res) => {
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						if(res.data.code == 200) {
							this.draftsList = res.data.data;
						}
					})
				});
			},
			// 返回键
			cancel() {
				this.togglePopup('center', 'tip');
				// console.log(1111)
				return true;
			},
			descInput(e) {
				this.remnant = e.detail.value.length
			},
			// 删除视频
			delectVideo(){
				let self = this
                uni.showModal({
                    title:"提示",
                    content:"是否要删除此视频",
                    success:(res) =>{
                        if(res.confirm){
                            self.videoUrl = ''
                        }
                    }
                })
			},
			// 选择视频
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
									console.log(self.src)
									console.log(self.videoUrl)
								}else{
									console.log("请求异常")
								}
							}
						})
						
					}
				})

				
			},
			// 发布视频
			release(){
				const url = this.url
				const content = this.desc
				let token
				let self = this
				console.log(self.videoUrl)
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
						videoUrl: self.videoUrl,
						content: content
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': token
					},
					success: function (res){
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						console.log(res)
						console.log(res.data.code)
						if(res.data.code==200){
							uni.switchTab({
								url: "/pages/user/user"
							})
						}else{
							console.log('请求异常')
						}
					}
				})
				
			},
			// 添加草稿
			save(){
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
				if(this.appUserDraftsId){
					let parmas = {
						appUserDraftsId: self.appUserDraftsId,
						draftsContent:  str
					}
					console.log(parmas)
					console.log(src)
					uni.request({
						url: url + "/controller/videocontroller/updateappuserdrafts",
						data: parmas,
						method: 'POST',
						header : {
							'content-type':'application/x-www-form-urlencoded', 
							'port': 'app',
							'token': token
						},
						success: function (res){
							if(res.data.code==421){
								uni.navigateTo({
									url: '/pages/loginPhone/loginPhone'
								})
							}
							console.log(res)
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
				}else{
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
							if(res.data.code==421){
								uni.navigateTo({
									url: '/pages/loginPhone/loginPhone'
								})
							}
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
				
			},
			// 弹出层弹出的方式  i:当前标签的下标, name: 当前标签的name
			togglePopup(type, open) {
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
				this.popupType = type
				if (open === 'tip') {
					this.show = true
				} else {
					this.$refs[open].open()
				}
			},
			// 取消弹出层
			cancelPopup(type) {
				if (type === 'tip') {
					// this.show = false
					uni.navigateBack()
				}
				if(type === 'skip') {
					this.save();
					// uni.switchTab({
					// 	url: "/pages/main/main"
					// })
				}
			},
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

	/* 提示窗口 */
	.uni-tip {
		padding-top: 15px;
		width: 300px;
		background: #fff;
		box-sizing: border-box;
		border-radius: 10rpx;
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
	
	.uni-tip-button:nth-child(1) {
		width: 100%;
		text-align: center;
		font-size: 14px;
		color: #333333;
		font-size: 37rpx;
		font-weight: 500;
		border-top: 1px solid #E2E2E2;
		border-right: 1px solid #E2E2E2;
		padding: 10px 0;
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
</style>
