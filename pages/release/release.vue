<template>
    <view class="wrap">
		<view class="pic" @click="chooseImage">
			<image src="http://www.zhongjubang.com/api/upload/static/img/release/pic.png" mode="" />
		</view>
		<text class="pic-text">图片</text>
		<view class="video" @tap="chooseVideo">
			<!-- <view class="video" @tap="chooseVideo"> -->
			<image src="http://www.zhongjubang.com/api/upload/static/img/release/video.png" mode="" />
		</view>
		<text class="video-text">视频</text>
		<view class="close" @tap="back">
			<image src="http://www.zhongjubang.com/api/upload/static/img/release/close.png" mode="" />
		</view>
		<!-- 强制更新 start -->
		<uni-popup :show="show10" :popupType ="popupType" :custom="true" :mask-click="false" >
			<view class="uni-tip">
				<!-- <view class="uni-tip-title">提示</view> -->
				<view class="uni-tip-content">请更新版本</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button insist-skip" @click="cancelPopup('skip')" style="color: #F9B72C;">确定</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
    export default {
		components:{
			uniPopup
		},
        data() {
            return {
			show10: false,
               src: '',
			   imgList: [],
			   tempFilePaths: []
            }
        },
		onLoad() {
			// 判断是否强制更新，是否需要更新
			const url = this.url
			let self = this
			plus.runtime.getProperty(plus.runtime.appid,function(inf){
				let wgtVer=inf.version
				console.log(inf.version)
				uni.request({
					url: url + 'controller/versioncontroller/getappversion',
					data: {
						version: inf.version,
						appCode: 'zjb_app'
					},
					method:"POST",
					header : {'content-type':'application/x-www-form-urlencoded'},
					success: function (res){
						if(res.data.code=="200"){
							console.log(res.data.data.hasNewVersion)
							
							if(res.data.data.isForceUpdate==1){
								self.show10 = true
							}
							
						}
					}
				})
			})
		},
        methods: {
            back(){
				// uni.navigateBack()
				
				uni.switchTab({
					url: '/pages/juquan/juquan'
				})
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
						
						uni.showLoading({
							title: '加载中...',
							mask: true
						})
						uni.uploadFile({
							url: url + "upload", //仅为示例，非真实的接口地址
							filePath: src,
							name: 'file',
							formData: {
								'user': 'test'
							},
							success: (uploadFileRes) => {
								uploadFileRes.data = JSON.parse(uploadFileRes.data)
								console.log(uploadFileRes.data)
								if(uploadFileRes.data.code==200){
									uni.hideLoading()
									uni.navigateTo({
										url: "/pages/releaseVideo/releaseVideo?fileUrl=" + uploadFileRes.data.data.fileUrl + "&&fileName=" + uploadFileRes.data.data.fileName
									})
								}else{
									console.log("请求异常")
								}
							}, 
							// fail: ((res) => {
							// 	uni.showToast({
							// 		title: '请求超时',
							// 		icon: 'none'
							// 	})
							// })
						})
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
						that.tempFilePaths = res.tempFilePaths;
						for(let i in that.tempFilePaths) {
							// this.imgList.push(tempFilePaths[i]);
							uni.uploadFile({
								url: that.url + '/upload', //仅为示例，非真实的接口地址
								filePath: that.tempFilePaths[i],
								name: 'file',
								formData: {
								},
								success: (uploadFileRes) => {
									
									let data = JSON.parse(uploadFileRes.data);
									let obj = {
										fileName: data.data.fileName,
										fileUrl:data.data.fileUrl,
										testArr: []
									}
									that.imgList.push(obj)
									console.log(that.imgList.length , that.tempFilePaths.length)
									if(that.imgList.length == that.tempFilePaths.length) {
										uni.hideLoading();
										that.$store.commit('saveImage', that.imgList)
										uni.navigateTo({
											url: '/pages/releaseImage/add-tag/add-tag'
										});
										that.imgList = [];
										that.tempFilePaths = [];
									}
									
								},
								fail: ((res) => {
									uni.showToast({
										title: '请求超时',
										icon: 'none'
									})
								})
							});
						}
						
						
				    }
				});
			}
        },
		// 监听页面卸载
		onUnload: function() {
			let _this = this;
			_this.imgList = [];
			_this.tempFilePaths = [];
			
		},
		// 监听安卓物理返回键
		onBackPress(e) {
			let _this = this;
			_this.imgList = [];
			_this.tempFilePaths = [];
			uni.removeStorage({
				key: 'topic_detail',
				success: ((res) => {
					// this.desc = '';
				})
			})
		},
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
	.name-input{
	    position: absolute;
	    left: 250px;
	    top: 19px;
	    width: 400rpx;
	    height: 60rpx;
	    font-size:30rpx;
	    font-family:PingFang SC;
	    color:rgba(153,153,153,1);
	}
</style>
