<template>
	<view class="write-circle">
		<image src="http://www.zhongjubang.com/api/upload/static/img/identity/design-bg.png" mode="" class="write-circle_bg"></image>
		<view class="circle-massage">
			<view class="circle-massage_explain">以下信息仅用户众居邦房主审核认证，请确保信息真是有效，请 正确填写，众居邦将竭力保护您的隐私，请您放心！</view>
			
			<!-- 资料填写 start -->
			<view class="circle-massage_input">
				<label for="">姓名</label>
				<input type="text" value="" placeholder="选填,推荐人姓名或ID" @input = "recommedInput"/>
			</view>
			<view class="circle-massage_input">
				<label for="">手机号</label>
				<input type="text" value="" placeholder="必填" @input = "nameInput"/>
			</view>
			<view class="circle-massage_input">
				<label for="">邮箱</label>
				<input type="text" value="" placeholder="必填" @input = "addressInput"/>
			</view>
			<view class="circle-massage_input">
				<label for="">服务地区</label>
				<input type="text" value="" placeholder="必填" @input = "addressInput"/>
			</view>
			<view class="circle-massage_input">
				<label for="">擅长风格</label>
				<input type="text" value="" placeholder="必填" @input = "addressInput"/>
			</view>
			<view class="circle-massage_input">
				<label for="">邮箱</label>
				<input type="text" value="" placeholder="必填" @input = "addressInput"/>
			</view>
			<view class="">
				<view class="">设计报价：</view> 
				<view class="designe-price">
					<input class="designe-price" type="text" value="最低价" />
					<view class="horizen"></view>
					<input class="designe-price" type="text" value="最低价" />
				</view>
			</view>
			<!-- 资料填写 start -->
			
			<!-- 屋内照片 start -->
			<view class="authentication">
				<view class="camera">
					<image src="http://www.zhongjubang.com/api/upload/static/img/identity/camera.png" mode=""></image>
					<text>屋内照片</text>
				</view>
				<image  @tap="chooseImageHome" v-if="!homeImage" src="http://www.zhongjubang.com/api/upload/static/img/identity/add.png" mode="" class="add-img"></image>
				<image  @tap="chooseImageHome" v-if="homeImage" :src="homeImage" mode="" class="add-img"></image>
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
			<view class="btn">提交</view>
			
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
				homeImage: '',
				recommend: '',
				name: '',
				address: '',
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
			chooseImageHome() {
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
			                    that.homeImage = data.data.fileUrl
			                }
			            })
				    }
				})
			},
			submit(){
				let token;
				let url = this.url
				let self = this
				uni.getStorage({
				    key:"token",
				    success: function (res) {
						token = res.data;
					}
				})
				uni.request({
					url: url + "controller/usercontroller/addappuserdesigndaren",
					data: {
						designdarenName: self.name,
						pname: self.recommend,
						serviceAddress: self.address,
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
</style>
