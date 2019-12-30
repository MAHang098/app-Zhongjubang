<template>
	<view class="write-circle">
		<image src="http://www.zhongjubang.com/api/upload/static/img/identity/rednet-bg.png" mode="" class="write-circle_bg"></image>
		<view class="circle-massage">
			<view class="circle-massage_explain">以下信息仅用户众居邦房主审核认证，请确保信息真是有效，请 正确填写，众居邦将竭力保护您的隐私，请您放心！</view>
			
			<!-- 资料填写 start -->
			<view class="circle-massage_input">
				<label for="">姓名</label>
				<input type="text" value="" placeholder="必填" @input = "nameInput"/>
			</view>
			<view class="circle-massage_input">
				<label for="">手机号</label>
				<input type="text" value="" placeholder="必填" @input = "phoneInput"/>
			</view>
			<view class="circle-massage_input">
				<label for="">邮箱</label>
				<input type="text" value="" placeholder="选填" @input = "emailInput"/>
			</view>
			<!-- 资料填写 end -->
			<!-- 屋内照片 start -->
			<view class="material">
				<image src="http://www.zhongjubang.com/api/upload/static/img/identity/v.png" mode=""></image>认证材料
			</view>
			<view class="url-address">
				优秀作品链接地址：
				<input type="text" value="" placeholder="必填" @input = "urlInput"/>
			</view>
			<view class="authentication" >
				<image @tap="chooseVideo" v-if="!showVideo" src="http://www.zhongjubang.com/api/upload/static/img/identity/add.png" mode="" class="add-img"></image>
				<view class="video-class" v-if="showVideo">
					<view class="video-class-image" v-for="(item, index) in vidList" :key="index">
						<video class="video-image" :src="item.videoUrl" mode=""></video>
					</view>
					<image @tap="chooseVideo" style="margin-left: 20upx;" src="http://www.zhongjubang.com/api/upload/static/img/identity/add.png" mode="" class="video-image"></image>
				</view>
			</view>
			<!-- 材料认证 start -->
			
			
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
				<view>《众居邦APP金牌业主入驻奖励协议》</view>
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
				showVideo: false,
				phone: '',
				name: '',
				email: '',
				quan: '',
				worksUrl: '',
				vidList: []
			}
		},
		methods: {
			
			nameInput(e) {
				this.name = e.detail.value
			},
			phoneInput(e) {
				this.phone = e.detail.value
			},
			emailInput(e) {
				this.email = e.detail.value
			},
			urlInput(e) {
				this.worksUrl = e.detail.value
			},
			
			change() {
				this.checked = !this.checked;
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
							}
						})
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
									uploadFileRes.data.data.fileName
									uploadFileRes.data.data.fileUrl
									let obj = {
										videoUrl: uploadFileRes.data.data.fileUrl
									}
									self.vidList.push(obj)
									self.showVideo = true
									console.log(self.vidList)
								}else{
									console.log("请求异常")
								}
							}
						})
						
					}
				})

				
			},
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
				let self = this
				if(this.vide(self.name,'姓名')){
					return
				}
				if(this.vide(self.phone,'手机号')){
					return
				}
				if(this.vide(self.worksUrl,'优秀作品链接地址')){
					return
				}
				if(this.vide(self.vidList,'上传视频')){
					return
				}
				if(this.vide(self.identifyOffice,'身份证正面')){
					return
				}
				if(this.vide(self.identifyBack,'身份正反面')){
					return
				}
				if(this.vidList.length<3){
					uni.showToast({
						title: '视频至少为3',
						icon: 'success',
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
				
				let token;
				let url = this.url
				uni.getStorage({
					key:"token",
					success: function (res) {
						token = res.data;
					}
				})
				
				uni.request({
					url: url + "controller/usercontroller/addappuserinternetcelebrity",
					data: {
						internetCelebrityName: self.name,
						phone: self.phone,
						email: self.email,
						worksUrl: self.worksUrl,
						videoUrl: JSON.stringify(self.vidList),
						idCardJust: self.identifyOffice,
						idCardBack: self.identifyBack
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
							title: '提交成功',
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
	.authentication{
		border-bottom: 1px solid #E2E2E2;
	}
	.url-address{
		font-size:28upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		line-height:41px;
		border-bottom: 1px solid #CCCCCC;
		margin-left: 66upx;
		margin-bottom: 84upx;
	}
	.url-address input{
		padding-bottom: 16upx;
	}
	.authentication{
		padding-bottom: 77upx;
	}
	.video-image{
		width: 150upx;
		height: 150upx;
	}
	.video-class{
		width: 580upx;
		height: 300upx;
		margin-left: 40upx;
		overflow: hidden;
	}
	.video-class-image{
		float: left;
		margin-left: 20upx;
	}
</style>
