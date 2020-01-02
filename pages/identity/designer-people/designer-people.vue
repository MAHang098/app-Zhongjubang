<template>
	<view class="write-circle">
		<image src="http://www.zhongjubang.com/api/upload/static/img/identity/design-bg.png" mode="" class="write-circle_bg"></image>
		<view class="circle-massage">
			<view class="circle-massage_explain">以下信息仅用户众居邦设计狂人审核认证，请确保信息真是有效，请 正确填写，众居邦将竭力保护您的隐私，请您放心！</view>
			
			<!-- 资料填写 start -->
			<view class="circle-massage_input">
				<label for="">姓名</label>
				<input type="text" value="" placeholder="必填" @input = "designdarenNameInput"/>
			</view>
			<view class="circle-massage_input">
				<label for="">手机号</label>
				<input type="text" value="" placeholder="必填" @input = "phoneInput"/>
			</view>
			<view class="circle-massage_input">
				<label for="">邮箱</label>
				<input type="text" value="" placeholder="选填" @input = "emailInput"/>
			</view>
			<view class="circle-massage_input">
				<label for="">服务地区</label>
				<input type="text" value="" placeholder="必填" @input = "serviceAddressInput"/>
			</view>
			<view class="circle-massage_input">
				<label for="">擅长风格</label>
				<input type="text" value="" placeholder="必填" @input = "specialityStyleInput"/>
			</view>
			<view class="class-price">
				<view class="">设计报价：</view> 
				<view class="designe-price">
					<input class="designe-price-input" @input = "priceMinInput" type="text" placeholder="最低价" />
					<view class="horizen"></view>
					<input class="designe-price-input" @input = "priceMinInput" type="text" placeholder="最高价" />
					<view class="carrer">元/m2</view>
				</view>
			</view>
			<view class="class-price">
				<view class="">提供服务：</view> 
				<view class="G-list_content">
					<view v-for="(item, index) in tabType" :class="index == current ? 'active' : '' " @click="changeProduct(index)" :key="index">
						{{item}}
						<text v-bind:class="index == current ? 'active-status' : '' "></text>
					</view>
				</view>
			</view>
			<view class="class-service">
				<text class="class-service-text">其它: </text><input class="class-service-input" type="text" value="" />
			</view>
			<!-- 资料填写 start -->
			
			<!-- 屋内照片 start -->
			<view class="authentication">
				<view class="identify-pic">
					名片(从业资格证)照片：
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
			<view class="caseAddress">
				作品案例链接地址：
				<input @input="worksUrlInput" class="caseAddress-input" type="text" value="" placeholder="选填" />
			</view>
			<!-- 屋内照片 start -->
			<view class="authentication2">
				<image @click.stop="chooseImage" v-if="!showVideo" src="http://www.zhongjubang.com/api/upload/static/img/identity/add.png" mode="" class="add-img"></image>
				
			</view>
			<view class="upload-list" v-if="showVideo">
				<view class="img" v-for="(item, index) in imgList" :key="index">
					<image :src="item.fileUrl" mode="scaleToFill"></image>
					<image src="http://www.zhongjubang.com/api/upload/static/topic/deletes.png" mode="" class="delete" @click.stop="deleteImage(item.fileName, index)"></image>
				</view>
				<image src="http://www.zhongjubang.com/api/upload/static/img/identity/add.png" mode=""  @click.stop="chooseImage" v-show="isUpload"></image>
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
				tabType: ['量房', '平面图', '立体图', '效果图'],
				checked: false,
				identifyOffice: '',
				identifyBack: '',
				homeImage: '',
				designdarenName: '',
				serviceAddress: '',
				priceMin: '',
				provideService: '',
				worksUrl: '',
				address: '',
				videoUrl: '',
				current: 0,
				showVideo: false,
				imgList: [],
				specialityStyle: '',
				isUpload: true,
			}
		},
		methods: {
			// 导航栏切换
			changeProduct(index) {
				console.log(index)
				this.current = index;
			},
			designdarenNameInput(e) {
				this.designdarenName = e.detail.value
			},
			phoneInput(e) {
				this.phone = e.detail.value
			},
			emailInput(e) {
				this.email = e.detail.value
			},
			serviceAddressInput(e) {
				this.serviceAddress = e.detail.value
			},
			priceMinInput(e) {
				this.priceMin = e.detail.value
			},
			priceMaxInput(e) {
				this.priceMax = e.detail.value
			},
			provideServiceInput(e) {
				this.provideService = e.detail.value
			},
			worksUrlInput(e) {
				this.worksUrl = e.detail.value
			},
			specialityStyleInput(e) {
				this.specialityStyle = e.detail.value
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
			// 选择正面身份证
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
			// 选择背面身份证
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
			// 选择名片
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
				let token
				let url = this.url
				let self = this
				if(this.vide(self.designdarenName,'姓名')){
					return
				}
				if(this.vide(self.phone,'手机号')){
					return
				}
				if(this.vide(self.serviceAddress,'服务地区')){
					return
				}
				if(this.vide(self.specialityStyle,'擅长风格')){
					return
				}
				if(this.vide(self.priceMin,'最低价')){
					return
				}
				if(this.vide(self.priceMax,'最高价')){
					return
				}
				if(this.vide(self.homeImage,'名片或从业资格证')){
					return
				}
				if(this.vide(self.identifyOffice,'身份证正面')){
					return
				}
				if(this.vide(self.identifyBack,'身份证反面')){
					return
				}
				if(this.vide(self.imgList,'上传案例作品')){
					return
				}
				uni.getStorage({
				    key:"token",
				    success: function (res) {
						token = res.data;
					}
				})
				if(this.imgList.length<3){
					uni.showToast({
					    title: '上传作品不能少于3个',
					    icon: 'none',
					    duration: 2000,
					})
					return
				}
				if(this.imgList.length>9){
					uni.showToast({
					    title: '上传作品最多不能超过9个',
					    icon: 'none',
					    duration: 2000,
					})
					return
				}
				if(self.phone.length!=11){
					uni.showToast({
						title: '手机号格式不正确',
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
				uni.request({
					url: url + "controller/usercontroller/addappuserdesigndaren",
					data: {
						designdarenName: self.designdarenName,
						phone: self.phone,
						email: self.email,
						serviceAddress: self.serviceAddress,
						specialityStyle: self.specialityStyle,
						priceMax: self.priceMax,
						priceMin: self.priceMin,
						provideService: self.current,
						nameCard: self.homeImage,
						idCardJust: self.identifyOffice,
						idCardBack: self.identifyBack,
						worksUrl: self.worksUrl,
						caseWorks: JSON.stringify(self.imgList)
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
				        console.log(res.data.message)
				        uni.showToast({
				            title: res.data.message,
				            icon: 'none',
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
	.class-price{
		padding-top: 62upx;
		padding-left: 29upx;
		font-size:28upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		line-height:41px;
		box-sizing: border-box;
	}
	
	.designe-price{
		display: flex;
		justify-content: space-around;
		box-sizing: border-box;
		align-items: center;
		padding-left: 0;
	}
	.horizen{
		width:71upx;
		height:1px;
		background: rgba(153,153,153,1);
	}
	.designe-price-input{
		width:211upx;
		height:60upx;
		background:rgba(240,240,240,1);
		border-radius:30upx;
		font-size:26upx;
		font-family:PingFang SC;
		color:rgba(153,153,153,1);
		line-height:60upx;
		text-align: center;
	}
	.carrer{
		font-size:26upx;
		font-family:PingFang SC;
		color:rgba(153,153,153,1);
		line-height:41px;
		padding-right: 60upx;
	}
	
	/* 提供服务： */
	.G-list_content {
	    box-sizing: border-box;
		height: 80upx;
		background: #FFFFFF;
		padding-left: 0;
	}
	
	.G-list_content view {
		/* width: 25%;
		height: 34rpx; */
		margin-right: 20upx;
		font-size:26upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height: 60upx;
		display: inline-block;
		width:158upx;
		height:60upx;
		background:rgba(240,240,240,1);
		border-radius:30upx;
		text-align: center;
		/* border-right: 1rpx solid #E2E2E2; */
	}
	.G-list_content view:nth-child(1){
		padding-left: 0;
	}
	.G-list_content view:last-child {
		border: none;
	}
	.active {
		color: #F9B72C !important;
		font-weight: bold;
		border: 1px solid #F9B72D;
	}
	.class-service{
		position: relative;
		margin-top: 10upx;
		padding-left: 29upx;
		font-size:28upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		line-height:41px;
		box-sizing: border-box;
		margin-bottom: 140upx;
	}
	.class-service-text{
		position: absolute;
		top: 0;
		left: 36upx;
	}
	.class-service-input{
		position: absolute;
		top: 10upx;
		left: 106upx;
		width: 613upx;
		border-bottom: 1px solid #CCCCCC;
	}
	.identify-pic{
		font-size:28upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		margin-bottom: 82upx;
	}
	.authentication{
		padding-bottom: 63upx;
		border-bottom: 1px solid #E2E2E2;
	}
	.material{
		margin-top: 51upx;
	}
	.caseAddress{
		font-size:28upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		line-height:41upx;
		margin-left: 74upx;
		margin-top: 84upx;
	}
	.caseAddress-input{
		border-bottom: 1px solid #CCCCCC;
		width: 639upx;
		font-size:28upx;
		font-family:PingFang SC;
		color:rgba(153,153,153,1);
		line-height:41px;
		padding-top: 20upx;
		padding-bottom: 20upx;
	}
	.authentication2{
		margin-top: 90upx;
	}
	/* 作品上传 */
	.video-image{
		width: 150upx;
		height: 150upx;
	}
	.video-class{
		width: 580upx;
		height: 450upx;
		margin-left: 40upx;
		overflow: hidden;
	}
	.video-class-image{
		float: left;
		margin-left: 20upx;
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
