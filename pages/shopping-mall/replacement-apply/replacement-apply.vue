<template>
	<view class="replacement">
		<view class="replacement-product">
			<image :src="detailImg[0]" mode=""></image>
			<view class="product-detai">
				<view class="title">{{detailData.goodsName}}</view>
				<view class="specs">规格：{{detailData.specifications}}</view>
			</view>
		</view>
		
		<view class="replacement-content">
			<view class="goods-state ">
				<view>货物状态</view>
				<view class="state" @click="togglePopup('bottom', 'popup')">
					{{goodsState == 2 ? '未收到货': goodsState == 3 ? '已收到货' : '请选择'}}
					<image src="http://www.zhongjubang.com/api/upload/static/topic/arrow.png" mode=""></image>
				</view>
			</view>
			<view class="refund-amount">
				<text>退款金额：</text>
				<text>￥{{detailData.goodsPrice}}</text>
			</view>
			<view class="refund-amount">
				<text>退款原因：</text>
				<input type="text" v-model="reason" placeholder="必填"/>
			</view>
		</view>
		
		<!-- 上传图片 start -->
		<view class="upload-image">
			<view class="upload-text">上传凭证</view>
			<view class="upload-list">
				<view class="img"  v-for="(item, index) in imgList" :key="index" v-if="imgList.length > 0">
					<image :src="item.fileUrl" mode="scaleToFill" @click.stop="previewImage(index)"></image>
					<image src="http://www.zhongjubang.com/api/upload/static/topic/deletes.png" mode="" class="delete" @click.stop="deleteImage(item.fileName, index)"></image>
				</view>
				<image src="http://www.zhongjubang.com/api/upload/static/img/shopping-mall/order/upload.png" mode=""  @click.stop="chooseImage" v-show="imgList.length < 3"></image>
			</view>
			<!-- <image :src="item.fileUrl" mode="" v-for="(item, index) in imgList" :key="index" v-if="imgList.length > 0"></image>
			<image src="http://www.zhongjubang.com/api/upload/static/img/shopping-mall/order/upload.png" mode="" @click.stop="chooseImage"></image> -->
			<view id="commit" @click.stop="commit">提交</view>
		</view>
		<!-- 上传图片 end -->
		
		<!-- 货物状态 start -->
		<uni-popup ref="popup" :type="popupType" :show="show" id="popup">
			<view class="product-state" @click.stop="notArrived(2, 'popup')">未收到货</view>
			<view class="product-state"  @click.stop="notArrived(3, 'popup')">已收到货</view>
			<view class="product-state" @click.stop="cancel('popup')">取消</view>
		</uni-popup>
		<!-- 货物状态 end -->
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components:{ uniPopup},
		data () {
			return {
				token: '',
				popupType: '',
				show: false,
				imgList: [],
				detailData: {},
				goodsState: 0,
				reason: '',
				detailImg: '',
				detailId: ''
			}
		},
		onLoad(option) {
			uni.getStorage({
				key:"token",
				success:((res) => {
					this.token = res.data;
				})
			});
			this.detailId = option.orderId;
			this.init()
		},
		methods: {
			init() {
				uni.request({
					url: this.url + 'controller/shopcontroller/getcancelorderdetail',
					method: 'post',
					data: {appUserOrderId: this.detailId},
					header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
					success:((res) => {
						if(res.data.code == 200) {
							let data = res.data.data;
							this.detailImg = data[0].topImgList;
							this.detailData = data[0];
						} 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
					})
				});
			},
			// 删除图片
			deleteImage(name, index) {
				this.imgList.forEach((item, i, array) => {
					if(item.fileName == name && index == i) {
						array.splice(index,1)
					}
				})
				this.isUpload = true;
			},
			// 选择图片
			chooseImage() {
				let that = this;
				uni.chooseImage({
				    count: 3, //默认9
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
										testArr: []
									}
									that.imgList.push(obj)
								}
							});
						}
						
						
				    }
				});
			},
			// 弹出层弹出的方式
			togglePopup(type, open) {
				this.popupType = type
				if (open === 'tip') {
					this.show = true
				} else {
					this.$refs[open].open()
				}
			},
			// 弹框关闭
			cancel(type) {
				if (type === 'tip') {
					this.show = false;
					return
				}
				this.$refs[type].close()
			},
			notArrived(name, type) {
				this.goodsState = name;
				this.$refs[type].close()
			},
			// 提交
			commit() {
				if(this.goodsState == 0) {
					uni.showToast({
						title: '请选择货物状态',
						icon: 'none'
					})
					return;
				}
				if(this.reason == '') {
					uni.showToast({
						title: '请填写退款原因',
						icon: 'none'
					})
					return;
				}
				let params = {
					appUserOrderId: this.detailId,
					orderState: this.goodsState,
					outOrderCause: this.reason,
					voucherImg: JSON.stringify(this.imgList),
					orderRealPrice: this.detailData.goodsPrice
				}
				uni.request({
					url: this.url + 'controller/shopcontroller/adduserorderout',
					method: 'post',
					data: params,
					header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
					success:((res) => {
						if(res.data.code == 200) {
							uni.showToast({
								title: '申请成功'
							})
							uni.navigateTo({
								url: '/pages/shopping-mall/all-order/all-order?type=4'
							})
						} 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
					})
				});
			},
		}
	}
</script>

<style scoped>
	page, .replacement {
		background: #F5F5F5;
		height: 100%;
		width: 100%;
		overflow-y: auto;
	}
	.replacement-product {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 45rpx 30rpx;
		display: flex;
		justify-content: flex-start;
		background: #FFFFFF;
		border-top: 1px solid #E2E2E2;
	}
	.replacement-product image {
		width: 150rpx;
		height: 150rpx;
		display: block;
		margin-right: 10px;
	}
	.product-detai {
		width: 75%;
	}
	.title {
		font-size:24rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		line-height:32rpx;
		margin-top: 10px;
	}
	.specs {
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(153,153,153,1);
	}
	/* 退款内容 */
	.replacement-content {
		width: 100%;
		height: auto;
		
		background: #FFFFFF;
		margin-top: 10px;
		margin-bottom: 5px;
	}
	.replacement-content>view {
		height: 100rpx;
		line-height: 100rpx;
		box-sizing: border-box;
		padding: 0 32rpx;
		width: 100%;
		display: flex;
		justify-content: flex-start;
		border-bottom: 1px solid #E2E2E2;
		font-size:28rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		/* align-items: center; */
	}
	.replacement-content>view:last-child {
		border: none;
	}
	.replacement-content image {
		width: 19rpx;
		height: 30rpx;
		display: block;
		margin-left: 5px;
		margin-top: -2px;
	}
	.replacement-content input {
		height: 100%;
	}
	.goods-state  {
		justify-content: space-between !important;
	}
	.state {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.refund-amount text:last-child {
		font-size:28rpx;
		font-family:PingFang SC;
		color:rgba(224,18,18,1);
	}
	/* 上传图片 start */
	.upload-image {
		background: #FFFFFF;
		width: 100%;
		box-sizing: border-box;
		padding: 0 32rpx;
	}
	.upload-image .upload-text {
		height: 100rpx;
		line-height: 100rpx;
	}
	.upload-image view {
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.upload-image image {
		width: 223rpx;
		height: 200rpx;
		display: block;
	}
	#commit {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		background: #F9B72D;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: center;
		border-radius: 50rpx;
		margin-top: 35%;
	}
	/* 图片上传 start */
	.upload-list {
		height: auto;
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
		margin-right: 26rpx;
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
		right: 0;
	}
	/* 弹窗 */
	/deep/ .uni-popup__wrapper-box {
		padding: 0 !important;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		background: #EDEDED !important;
	}
	.product-state:first-child {
		
	}
	.product-state {
		height: 109rpx;
		line-height: 109rpx;
		width: 100%;
		text-align: center;
		font-size:30rpx;
		font-family:PingFang SC;
		color:rgba(102,102,102,1);
		border-bottom: 1px solid #E2E2E2;
		background: #FFFFFF;
	}
	.product-state:last-child {
		border: none;
		margin-top: 3px;
	}
</style>
