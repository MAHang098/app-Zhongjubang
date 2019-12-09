<template>
	<view class="release">
		<view class="header">
			<image src="../../../static/topic/topic-back.png" mode="" @click="cancel"></image>
			<view class="release-image">发布图片</view>
			<view class="next" @click="release">发布</view>
		</view>
		<view class="desc">
			<textarea placeholder="多多分享想法和经验..."  maxlength="200" class="release-text" v-model="desc"  @input="descInput"/>
			<view class="num">{{remnant}}/200</view>
		</view>
		<view class="topic" @click="addTopic">
			<view class="left">
				<image src="../../../static/topic/topic.png" mode=""></image>
				<view>{{participationTopic}}</view>
			</view>
			<view class="right" v-show="ishow">
				<view>选择合适的话题会获得更多关注哦~</view>
				<image src="../../../static/topic/arrow.png" mode=""></image>
			</view>
		</view>
		
		<!-- 上传图片 start -->
		<view class="upload-list">
			<view class="img" v-for="(item, index) in allImage" :key="index">
				<image :src="item.fileUrl" mode="scaleToFill" @click.stop="previewImage(index)"></image>
				<image src="../../../static/topic/deletes.png" mode="" class="delete" @click.stop="deleteImage(item.fileName, index)"></image>
			</view>
			<image src="../../../static/topic/add-upload.png" mode=""  @click.stop="chooseImage" v-show="isUpload"></image>
		</view>
		
		<!-- 底部 start -->
		<view class="bottom">
			<image src="../../../static/topic/img.png" mode="" @click.stop="chooseImage"></image>
			<view @click="togglePopup('center', 'tip')">存草稿</view>
		</view>
		
		<!-- 删除标签 start -->
		<uni-popup :show="show" :popupType ="popupType" :custom="true" :mask-click="false" >
			<view class="uni-tip">
				<!-- <view class="uni-tip-title">提示</view> -->
				<view class="uni-tip-content">要保存到草稿箱吗？</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="cancelPopup('tip')" style="color: #F9B72C;">不保存</view>
					<view class="uni-tip-button insist-skip" @click="cancelPopup('skip')">保存</view>
				</view>
			</view>
		</uni-popup>
		<!-- 删除标签 end -->
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components:{ uniPopup},
		data() {
			return {
				remnant: 0,
				desc: '',
				allImage: [],
				allTag: [],
				imgList: [],
				isUpload: true,
				participationTopic: '参与话题',
				ishow: true,
				type: '',
				appUserDraftsId: '', // 用户草稿ID
				// 弹窗所用到的变量
				show: false,
				popupType: '',
			}
		},
		// 监听页面上和手机上的返回键
		
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			if(this.$store.state.topic != '') {
				this.participationTopic = this.$store.state.topic;
			}
			// this.allTag = this.$store.state.itemImage;
			let drafts = this.$store.state.drafts;
			if(drafts.length > 0) {
				this.desc = drafts[0].content;
				this.appUserDraftsId = drafts[0].id
				if(drafts[0].title != '') {
					this.participationTopic = drafts[0].title;
				}
			}
			if(option.type) {
				this.type = option.type;
				
			}
			this.allImage = this.$store.state.uploadImage;
			if(this.allImage.length > 8) {
				this.isUpload = false;
			}
		},
		// 发布图片
		onNavigationBarButtonTap(e) {
			
		},
		methods: {
			// 发布
			release() {
				let token = '';
				uni.getStorage({
					key:"token",
					success: function (res) {
					 token = res.data;
				  }
				})
				if(this.participationTopic == '参与话题') {
					this.participationTopic = '';
				}
				let parmas = {
					content: this.desc,
					imgList: JSON.stringify(this.allImage),
					title: this.participationTopic
				}
				uni.request({
					url: this.url + 'controller/usercontroller/addgcirclecontent',
					method: 'post',
					data: parmas,
					header : {'content-type':'application/x-www-form-urlencoded', 'token': token, 'port': 'app'},
					success:(res) => {
						if(res.data.code == 200) {
							this.$store.commit('clearData', []);
							
							uni.showToast({
								title: '发布成功',
								duration: 500,
							});
							// setTimeout(() => {
							// 	uni.navigateTo({
							// 		url: '/pages/receiving-address/receiving-address'
							// 	})
							// }, 1000);
							// uni.hideToast();
						} else {
							uni.showToast({
							    icon: 'none',
							    title: res.data.message
							});
							uni.hideToast();
						}
					}
				});
			},
			// 返回键
			cancel() {
				this.togglePopup('center', 'tip');
				// console.log(1111)
				return true;
			},
			// 存草稿
			saveDrafts() {
				let token = '';
				uni.getStorage({
					key:"token",
					success: function (res) {
					 token = res.data;
				  }
				})
				if(this.participationTopic == '参与话题') {
					this.participationTopic = '';
				}
				let draftsContent = [
					{
						content: this.desc,
						imgList: this.allImage,
						title: this.participationTopic
					}
				]
				let str = JSON.stringify(draftsContent);
				let parmas = {
					type: 1,
					draftsContent:  str
				}
				
				if(this.appUserDraftsId) {
					let parmas = {
						appUserDraftsId: this.appUserDraftsId,
						draftsContent:  str
					}
					uni.request({
						url: this.url + 'controller/videocontroller/updateappuserdrafts',
						method: 'post',
						data: parmas,
						header : {'content-type':'application/x-www-form-urlencoded', 'token': token, 'port': 'app'},
						success: (res) => {
							if(res.data.code == 200) {
								uni.showToast({
									title: '保存成功',
									duration: 500,
								});
								this.show = false;
								this.$store.commit('clearData', []);
								this.$store.commit('clearDrafts', [])
								// setTimeout(() => {
								// 	uni.navigateTo({
								// 		url: '/pages/receiving-address/receiving-address'
								// 	})
								// }, 1000);
								// uni.hideToast();
							} else {
								uni.showToast({
								    icon: 'none',
								    title: res.data.message
								});
								uni.hideToast();
							}
						}
					});
					return;
				}
				uni.request({
					url: this.url + 'controller/videocontroller/addappuserdrafts',
					method: 'post',
					data: parmas,
					header : {'content-type':'application/x-www-form-urlencoded', 'token': token, 'port': 'app'},
					success: (res) => {
						if(res.data.code == 200) {
							uni.showToast({
								title: '保存成功',
								duration: 500,
							});
							this.show = false;
							this.$store.commit('clearData', []);
							this.$store.commit('clearDrafts', [])
							// setTimeout(() => {
							// 	uni.navigateTo({
							// 		url: '/pages/receiving-address/receiving-address'
							// 	})
							// }, 1000);
							// uni.hideToast();
						} else {
							uni.showToast({
							    icon: 'none',
							    title: res.data.message
							});
							uni.hideToast();
						}
					}
				});
			},
			descInput(e) {
				this.remnant = e.detail.value.length
			},
			// 选择话题
			addTopic() {
				if(this.$store.state.topic != '') {
					uni.showToast({
						icon: 'none',
						title: '当前不能修改话题'
					})
					return;
				}
				uni.navigateTo({
					url: '/pages/releaseImage/search-title/search-title'
				})
			},
			// 预览图片
			previewImage(e) {
				if(this.type == 'drafts') {
					let i = e +1
					uni.navigateTo({
						url: '/pages/releaseImage/add-tag/add-tag?current=' + e + '&indexImg=' + i
					})
					return;
				}
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
										if(that.type == 'drafts') {
											let i = currentLength +1
											uni.navigateTo({
												url: '/pages/releaseImage/add-tag/add-tag?current=' + currentLength + '&indexImg=' + i
											})
											return;
										}
										uni.navigateBack();
									}
									
								}
							});
						}
						
						
				    }
				});
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
					this.show = false
					return
				}
				if(type === 'skip') {
					this.saveDrafts();
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
	.header {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		align-items: center;
		padding: 10rpx 30rpx;
		/* border-bottom: 1px solid #E2E2E2; */
		color: #FFFFFF;
		font-size: 36rpx;
	}
	.release-image {
		font-size:36rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.header image {
		width: 15rpx;
		height: 31rpx;
		display: block;
		/* margin: auto 0; */
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
		padding-right: 20rpx;
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
		align-items: center;
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
</style>
