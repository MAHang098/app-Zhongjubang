<template>
	<view class="release">
		<view class="header">
			<view id="cancelImg" @click="cancel">
				<image src="http://www.zhongjubang.com/api/upload/static/topic/topic-back.png" mode="" ></image>
			</view>
			<view class="release-image">发布图片</view>
			<view class="next" :class="isshowScusse ? 'successRelease' : ''" @click.stop="release">发布</view>
		</view>
		<view class="desc">
			<textarea placeholder="多多分享想法和经验..."  maxlength="200" class="release-text" v-model="desc"  @input="descInput" />
			<view class="num">{{remnant}}/200</view>
		</view>
		<view class="topic" @click="addTopic">
			<view class="left">
				<image src="http://www.zhongjubang.com/api/upload/static/topic/topic.png" mode=""></image>
				<view>{{participationTopic}}</view>
			</view>
			<view class="right" v-show="ishow">
				<view>选择合适的话题会获得更多关注哦~</view>
				<image src="http://www.zhongjubang.com/api/upload/static/topic/arrow.png" mode=""></image>
			</view>
		</view>
		
		<!-- 上传图片 start -->
		<view class="upload-list">
			<view class="img" v-for="(item, index) in allImage" :key="index">
				<image :src="item.fileUrl" mode="scaleToFill" @click.stop="previewImage(index)"></image>
				<image src="http://www.zhongjubang.com/api/upload/static/topic/deletes.png" mode="" class="delete" @click.stop="deleteImage(item.fileName, index)"></image>
			</view>
			<image src="http://www.zhongjubang.com/api/upload/static/topic/add-upload.png" mode=""  @click.stop="chooseImage" v-show="isUpload"></image>
		</view>
		
		<!-- 底部 start -->
		<view class="bottom">
			<image src="http://www.zhongjubang.com/api/upload/static/topic/img.png" mode="" @click.stop="chooseImage"></image>
			<view @click="togglePopup('center', 'tip')">存草稿</view>
		</view>
		
		<!-- 删除标签 start -->
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
				participationTopicId: '',    // 话题Id
				ishow: true,
				previewType: '',
				appUserDraftsId: '', // 用户草稿ID
				// 弹窗所用到的变量
				show: false,
				popupType: '',
				gcircleContentId: '',
				isshowScusse: false
			}
		},
		onShow(e) {
			let pages = getCurrentPages();
			let currPage = pages[pages.length-1];
			// if(pages.length>1){
			// 	prevPage=pages[pages.length-1];
			// }
			if(currPage) {
				// #ifdef APP-PLUS || MP-WEIXIN
				// if(currPage.data.participationTopic==undefined || currPage.data.participationTopic==''){
					
				// }else{
				// 	this.participationTopic = currPage.data.participationTopic
				// 	this.participationTopicId = currPage.data.participationTopicId
				// }
				// #endif
			}
			let _this = this;
			uni.getStorage({
				key: 'topic_detail',
				success: ((res) =>  {
					_this.desc = res.data;
				})
			})
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			if(this.$store.state.topic != '') {
				this.participationTopic = this.$store.state.topic;
				this.participationTopicId = this.$store.state.topicId;
			}
			console.log(this.participationTopic, this.participationTopicId)
			// this.allTag = this.$store.state.itemImage;
			let drafts = this.$store.state.drafts;
			// this.participationTopic = '参与话题'
			if(drafts.length > 0) {
				this.desc = drafts[0].content;
				this.remnant = drafts[0].content.length;
				this.appUserDraftsId = drafts[0].id;
				if(drafts[0].type && drafts[0].type == 'user' || drafts[0].type && drafts[0].type == 'juquan') {
					this.gcircleContentId = drafts[0].editId;
				}
				
			}
			if(option.type) {
				this.previewType = option.type;
			}
			this.allImage = this.$store.state.uploadImage;
			if(this.allImage.length > 8) {
				this.isUpload = false;
			}
		},
		// 发布图片
		onNavigationBarButtonTap(e) {
		},
		onBackPress(e) {
			console.log(e)
			 if(e.from == 'backbutton'){
				 
			    return true;//阻止默认返回行为
			    }
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
				uni.showLoading({
					title: '请稍等'
				})
				if(this.isshowScusse) {
					return;
				}
				
				if(this.participationTopic == '参与话题') {
					this.participationTopic = '';
				}
				let topicObj = {
					topic: this.participationTopic,
					topicId: this.participationTopicId
				}
				let parmas = {
					content: this.desc,
					imgList: JSON.stringify(this.allImage),
					title: JSON.stringify(topicObj)
				}
				if(this.desc == '' &&　this.allImage.length == 0) {
					uni.showToast({
						title:'请分享经验或者上传图片',
						icon: 'none'
					})
					return;
				}
				this.isshowScusse = true;
				if(this.gcircleContentId) {
					parmas.gcircleContentId = this.gcircleContentId;
					uni.request({
						url: this.url + 'controller/usercontroller/updategetgcirclecontent',
						method: 'post',
						data: parmas,
						header : {'content-type':'application/x-www-form-urlencoded', 'token': token, 'port': 'app'},
						success:(res) => {
							if(res.data.code == 200) {
								
								uni.showToast({
									title: '发布成功',
									duration: 500,
								});
								setTimeout(() => {
									uni.switchTab({
										url: '/pages/user/user'
									})
								}, 500);
								uni.removeStorage({
									key: 'topic_detail',
									success: ((res) => {
										this.desc = '';
									})
								})
								uni.hideLoading();
								this.isshowScusse = false;
								this.$store.commit('clearData', []);    // 清空存在vuex中图片上的所有数据
								this.$store.commit('clearDrafts', []);  // 清空草稿箱到发布页的数据
								this.$store.commit('defaultPage', '');  // 清空页面类型
								this.$store.commit('updateType', {topic: '', topicId: ''});
							} 
							if(res.data.code == 421) {
								uni.navigateTo({
									url: '/pages/loginPhone/loginPhone'
								})
							}
						}
					});
					return;
				}
				uni.request({
					url: this.url + 'controller/usercontroller/addgcirclecontent',
					method: 'post',
					data: parmas,
					header : {'content-type':'application/x-www-form-urlencoded', 'token': token, 'port': 'app'},
					success:(res) => {
						if(res.data.code == 200) {
							uni.showToast({
								title: '发布成功',
								duration: 500,
							});
							setTimeout(() => {
								uni.switchTab({
									url: '/pages/user/user'
								})
							}, 500);
							uni.hideLoading();
							this.$store.commit('clearData', []);    // 清空存在vuex中图片上的所有数据
							this.$store.commit('clearDrafts', []);  // 清空草稿箱到发布页的数据
							this.$store.commit('defaultPage', '');  // 清空页面类型
							this.$store.commit('updateType', {topic: '', topicId: ''});
							this.isshowScusse = false;
							uni.removeStorage({
								key: 'topic_detail',
								success: ((res) => {
									this.desc = '';
								})
							})
						} 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
					}
				});
			},
			// 返回键
			cancel() {
				// if(this.previewType==''){
				// 	// uni.switchTab({
				// 	// 	url: '/pages/juquan/juquan'
				// 	// })
				// 	uni.navigateBack();
				// 	this.$store.commit('clearData', []);    // 清空存在vuex中图片上的所有数据
				// 	this.$store.commit('clearDrafts', []);  // 清空草稿箱到发布页的数据
				// 	this.$store.commit('defaultPage', '');  // 清空页面类型
				// 	this.$store.commit('updateType', {topic: '', topicId: ''});
				// }
				
				this.togglePopup('center', 'tip');
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
						title: {
							topic: this.participationTopic,
							topicId: this.participationTopicId
						}
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
								this.$store.commit('clearData', []);    // 清空存在vuex中图片上的所有数据
								this.$store.commit('clearDrafts', []);  // 清空草稿箱到发布页的数据
								this.$store.commit('defaultPage', '');  // 清空页面类型
								this.$store.commit('updateType', {topic: '', topicId: ''});
								setTimeout(() => {
									uni.switchTab({
										url: '/pages/user/user'
									})
								}, 1000);
								uni.removeStorage({
									key: 'topic_detail',
									success: ((res) => {
										this.desc = '';
									})
								})
							} 
							if(res.data.code == 421) {
								uni.navigateTo({
									url: '/pages/loginPhone/loginPhone'
								})
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
							this.$store.commit('clearData', []);    // 清空存在vuex中图片上的所有数据
							this.$store.commit('clearDrafts', []);  // 清空草稿箱到发布页的数据
							this.$store.commit('defaultPage', '');  // 清空页面类型
							this.$store.commit('updateType', {topic: '', topicId: ''});
							setTimeout(() => {
								uni.switchTab({
									url: '/pages/user/user'
								})
							}, 1000);
							// uni.hideToast();
							uni.removeStorage({
								key: 'topic_detail',
								success: ((res) => {
									this.desc = '';
								})
							})
						} 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
					}
				});
			},
			descInput(e) {
				this.remnant = e.detail.value.length;
				uni.setStorage({
					key: 'topic_detail',
					data:  e.detail.value,    
					success: function () {
						
					}
				})
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
				// if(this.type == 'drafts') {
				if(this.previewType != 'addTag') {
					let i = e +1
					uni.navigateTo({
						url: '/pages/releaseImage/add-tag/add-tag?current=' + e + '&indexImg=' + i
					})
					return;
				}
				
				var pages = getCurrentPages();
				var currPage = pages[pages.length - 1];  //当前页面
				var prevPage = pages[pages.length - 2];  //上一个页面
				if(prevPage) {
					prevPage.current= e;
					// #ifdef APP-PLUS || MP-WEIXIN
						prevPage.setData({
							current : e
						})
					// #endif
				}
				
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
								formData: {},
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
										if(prevPage) {
												prevPage.current= currentLength;
												prevPage.indexImg = currentLength +1 ;
												// #ifdef APP-PLUS || MP-WEIXIN
												prevPage.setData({
													current : currentLength,
													indexImg : currentLength +1
												})
												// #endif
										}
										// prevPage.current= currentLength;
										// prevPage.indexImg = currentLength +1 ;
										that.$store.commit('saveImage', that.imgList);
										if(that.previewType != 'addTag') {
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
				let drafts = this.$store.state.drafts;
				if (type === 'tip') {
					this.show = false;
					this.$store.commit('clearData', []);    // 清空存在vuex中图片上的所有数据
					this.$store.commit('clearDrafts', []);  // 清空草稿箱到发布页的数据
					this.$store.commit('defaultPage', '');  // 清空页面类型
					this.$store.commit('updateType', {topic: '', topicId: ''});
					if(this.previewType == '') {
						uni.navigateBack({
							delta:1
						})
						return;
					}
					if(this.previewType == 'drafts' || drafts.length != 0 && drafts[0].type == 'drafts') {
						uni.navigateTo({
							url: '/pages/drafts/drafts'
						})
						return;
					}
					if(this.previewType == 'user' || drafts.length != 0 && drafts[0].type == 'drafts') {
						uni.switchTab({
							url: '/pages/main/main'
						})
						return;
					}
					if(this.previewType == 'juquan' || drafts.length != 0 && drafts[0].type == 'juquan') {
						uni.switchTab({
							url: '/pages/juquan/juquan'
						})
						return;
					}
					
					setTimeout(() => {
						uni.switchTab({
							url: '/pages/user/user'
						})
					}, 1000);
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
		margin-top: 36upx;
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
	.successRelease {
		background: #fff !important;
		border: 1px solid #e2e2e2 !important;
		color: #999 !important;
	}
	.desc {
		position: relative;
		height: 360rpx;
	}
	.release-text {
		width: 100%;
		/* border: 1px solid red; */
		border-top: 1px solid #E2E2E2;
		border-bottom: 1px solid #E2E2E2;
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		font-size: 28rpx;
		height: 360rpx;
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
	#cancelImg {
		width: 50px;
		height: 48px;
		display: flex;
	}
</style>
