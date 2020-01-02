<template>
	<view class="write-circle">
		<image src="http://www.zhongjubang.com/api/upload/static/img/identity/owner-bg.png" mode="" class="write-circle_bg"></image>
		<view class="circle-massage">
			<view class="circle-massage_explain">以下信息仅用户众居金牌业主审核认证，请确保信息真是有效，请 正确填写，众居邦将竭力保护您的隐私，请您放心！</view>
			
			<!-- 资料填写 start -->
			<view class="circle-massage_input">
				<label for="">推荐人</label>
				<input type="text" value="" placeholder="选填,推荐人姓名或ID" @input = "recommedInput"/>
			</view>
			<view class="circle-massage_input">
				<label for="">户主姓名</label>
				<input type="text" value="" placeholder="必填" @input = "nameInput"/>
			</view>
			<view class="circle-massage_input">
				<label for="">详细地址</label>
				<input type="text" value="" placeholder="必填" @input = "addressInput"/>
			</view>
			<!-- 资料填写 start -->
			
			<!-- 屋内照片 start -->
			<view class="authentication">
				<view class="camera">
					<image src="http://www.zhongjubang.com/api/upload/static/img/identity/camera.png" mode=""></image>
					<text>屋内照片</text>
				</view>
				<image @click.stop="chooseImage" v-if="!showVideo" src="http://www.zhongjubang.com/api/upload/static/img/identity/add.png" mode="" class="add-img"></image>
				
			</view>
			<view class="upload-list" v-if="showVideo">
				<view class="img" v-for="(item, index) in imgList" :key="index">
					<image :src="item.fileUrl" mode="scaleToFill"></image>
					<image src="http://www.zhongjubang.com/api/upload/static/topic/deletes.png" mode="" class="delete" @click.stop="deleteImage(item.fileName, index)"></image>
				</view>
				<image src="http://www.zhongjubang.com/api/upload/static/img/identity/add.png" mode=""  @click.stop="chooseImage" v-show="isUpload"></image>
			</view>
			
			<!-- 材料认证 start -->
			<view class="material">
				<image src="http://www.zhongjubang.com/api/upload/static/img/identity/v.png" mode=""></image>认证材料
			</view>
			
			<!-- 材料类型 start -->
			<view class="material-type">
				<text>身份证</text>
				<radio value="r1" checked="true" color="#FFCC33" style="transform:scale(0.6);"/>
			</view>
			
			<!-- 身份证照片 start -->
			<view class="idCard">
				<image @tap="chooseImageOffice" v-if="!identifyOffice" src="http://www.zhongjubang.com/api/upload/static/img/identity/facade.png" mode=""></image>
				<image @tap="chooseImageOffice" v-if="identifyOffice" :src="identifyOffice" mode=""></image>
				<image @tap="chooseImageBack" v-if="!identifyBack" src="http://www.zhongjubang.com/api/upload/static/img/identity/reverse.png" mode=""></image>
				<image @tap="chooseImageBack" v-if="identifyBack" :src="identifyBack" mode=""></image>
				
			</view>
			
			<!-- 提交 start -->
			<view @tap="submit" class="btn">提交</view>
			
			<!-- 勾选协议 start -->
			<view class="agreement">
				<radio value="r1" :checked="checked" color="#FFCC33" style="transform:scale(0.6)" @tap.stop="change"/>
				<view>我同意</view>
				<view>《众居邦APP奖励协议》</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: false,
				identifyOffice: '',
				identifyBack: '',
				homeImage: '',
				recommend: '',
				name: '',
				address: '',
				isUpload: true,
				showVideo: false,
				imgList: [],
				certificationMaterials: [],
				
			}
		},
		methods: {
			recommedInput(e) {
				this.recommend = e.detail.value
			},
			nameInput(e) {
				this.name = e.detail.value
			},
			addressInput(e) {
				this.address = e.detail.value
			},
			change() {
				this.checked = !this.checked;
			},
			// 删除图片
			deleteImage(name, index) {
				this.imgList.forEach((item, i, array) => {
					if(item.fileName == name && index == i) {
						array.splice(index,1)
					}
				})
				this.isUpload = true;
				this.$store.commit('saveImage', this.imgList);
			},
			// 选择屋内照片
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
						const tempFilePaths = res.tempFilePaths;
						
						for(let i in tempFilePaths) {
							// this.imgList.push(tempFilePaths[i]);
							uni.uploadFile({
								url: that.url + '/upload', //仅为示例，非真实的接口地址
								filePath: tempFilePaths[i],
								name: 'file',
								formData: {},
								success: (uploadFileRes) => {
									
									
									let data = JSON.parse(uploadFileRes.data);
									console.log(data)
									let obj = {
										fileUrl: data.data.fileUrl
									}
									that.imgList.push(obj)
									that.showVideo = true
								}
							});
						}
						
						
				    }
				});
			},
			chooseImageOffice() {
				let that = this;
				uni.chooseImage({
				    count: 9, //默认9
				    // sizeType:'compressed', //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
			            const tempFilePaths = res.tempFilePaths[0];
			            console.log(res.tempFilePaths[0])
			            uni.uploadFile({
			                url: that.url + '/upload', //仅为示例，非真实的接口地址
			                filePath: res.tempFilePaths[0],
			                name: 'file',
			                formData: {
			                    'user': 'test'
			                },
			                success: (uploadFileRes) => {
			                    let data = JSON.parse(uploadFileRes.data);
			                    console.log(data.data.fileUrl)
			                    that.identifyOffice = data.data.fileUrl
								let obj = {
									identifyOffice: data.data.fileUrl
								}
								that.certificationMaterials.push(obj)
			                }
			            })
				    }
				})
			},
			chooseImageBack() {
				let that = this;
				uni.chooseImage({
				    count: 9, //默认9
				    // sizeType:'compressed', //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
			            const tempFilePaths = res.tempFilePaths[0];
			            console.log(res.tempFilePaths[0])
			            uni.uploadFile({
			                url: that.url + '/upload', //仅为示例，非真实的接口地址
			                filePath: res.tempFilePaths[0],
			                name: 'file',
			                formData: {
			                    'user': 'test'
			                },
			                success: (uploadFileRes) => {
			                    let data = JSON.parse(uploadFileRes.data);
			                    console.log(data.data.fileUrl)
			                    that.identifyBack = data.data.fileUrl
								let obj = {
									identifyBack: data.data.fileUrl
								}
								that.certificationMaterials.push(obj)
			                }
			            })
				    }
				})
			},
			// 判断是否为空
			vide(content,indexContent){
				if(content==''){
					uni.showToast({
						title: indexContent+'不能为空',
						icon: 'none',
						duration: 2000,
					})
					return true
				}
				return false
			},
			submit(){
				let token;
				let url = this.url
				let self = this
				if(this.vide(self.name,'户主姓名')){
					return
				}
				if(this.vide(self.address,'详细地址')){
					return
				}
				if(this.vide(self.imgList,'屋内照片')){
					return
				}
				if(this.vide(self.identifyOffice,'身份证正面')){
					return
				}
				if(this.vide(self.identifyBack,'身份证反面')){
					return
				}
				if(self.imgList.length<3){
					uni.showToast({
						title: '屋内照片至少上传3张',
						icon: 'none',
						duration: 2000,
					})
					return
				}
				if(self.imgList.length>9){
					uni.showToast({
						title: '屋内照片最多上传9张',
						icon: 'none',
						duration: 2000,
					})
					return
				}
				if(this.checked==false){
					uni.showToast({
						title: '请同意众居邦协议',
						icon: 'none',
						duration: 2000,
					})
					return
				}
				uni.getStorage({
				    key:"token",
				    success: function (res) {
						token = res.data;
					}
				})
				uni.request({
					url: url + "controller/usercontroller/adduserowner",
					data: {
						ownerName: self.name,
						ownerAddress: self.address,
						houseImg: JSON.stringify(self.imgList),
						certificationMaterials: JSON.stringify(self.certificationMaterials),
						appUserOrderId: self.recommend,
						pname: self.recommend,
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
				        uni.showToast({
				            title: '保存成功',
				            icon: 'success',
				            duration: 2000,
				        })
				    }
				})
			}
		}
	}
</script>

<style>
	@import '../../../static/css/identity.css'; /*引入G圈列表样式*/
	.circle-massage {
		top: -10px;
	}
	/* 作品上传 */
	.video-image{
		width: 150upx;
		height: 150upx;
	}
	/* .video-class{
		width: 580upx;
		height: 450upx;
		margin-left: 40upx;
		overflow: hidden;
	} */
	.video-class-image{
		float: left;
		margin-left: 20upx;
	}
	.authentication{
		margin-top: ;
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
</style>
