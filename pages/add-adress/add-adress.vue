<template>
	<view class="add-adress">
		<view class="user-name input">
			<label for="">收货人</label>
			<input type="text" placeholder="请填写姓名" v-model="userName">
		</view>
		<view class="user-phone input">
			<label for="">联系电话</label>
			<input type="text" placeholder="请填写联系电话" v-model="phoneNumber">
		</view>
		<view class="mpvue-picker input">
				<label for="">收货地址</label>
				<input type="text" placeholder="请选择省市区" @click.stop="showMulLinkageThreePicker" disabled v-model="cityAdress">
				
		</view>
		<view class="textarea">
			<textarea value="" placeholder="请填写详细地址(街道 楼牌号等)" v-model="detailedAddress"/>
		</view>
		
		<view class="set-address input">
				<view class="uni-list-cell-db">设为默认地址</view>
				<switch color="#FFCC33" style="transform:scale(0.7)"  :checked="isDefault" @change.stop="changeSwith"/>
					<!-- <switch color="#FFCC33" style="transform:scale(0.7)"/> -->
		</view>
		<!-- <button type="default" @click="showMulLinkageThreePicker">三级城市联动</button> -->
		<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvuePicker from '../../components/mpvue-picker/mpvuePicker.vue';
	// https://github.com/zhetengbiji/mpvue-citypicker
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	import cityData from '../../common/city.data.js';
	export default {
		components: {
			mpvuePicker,
			mpvueCityPicker
		},
		data() {
			return {
				themeColor: '#007AFF',
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				cityPickerValueDefault: [0, 0, 1],
				pickerValueArray:[],
				cityAdress: '',
				detailedAddress: '',
				userName: '',
				phoneNumber: '',
				isDefault: false,
				detailsId: ''
			}
		},
		// 点击保存
		onNavigationBarButtonTap(e){
			let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if (this.phoneNumber.length < 11 || this.phoneNumber.length > 11 ) {
			    uni.showToast({
			        icon: 'none',
			        title: '请输入正确的电话号码!'
			    });
				uni.hideToast();
			    return;
			}
			if(!myreg.test(this.phoneNumber)) {
				uni.showToast({
				    icon: 'none',
				    title: '请输入正确的电话号码!'
				});
				uni.hideToast();
				return;
			}
			let token = '';
			uni.getStorage({
				key:"token",
				success: function (res) {
				 token = res.data;
			  }
			})
			let userAddress = {
				city: this.cityAdress,
				detail: this.detailedAddress
			}
			
			let city = this.cityAdress.split('-');
			let obj = {
				userName: this.userName,
				userPhone: this.phoneNumber,
				userAddress: city[0] + city[1] + city[2] + this.detailedAddress
			}
			let parmas = {
				userName: this.userName,
				userPhone: this.phoneNumber,
				userAddress: JSON.stringify(userAddress),
				isDefault: this.isDefault == true || this.isDefault == '1' ? '1' : '0'
			}
			if(this.detailsId) {
				parmas.userAdressId = this.detailsId;
				uni.request({
					url: this.url + 'controller/usercontroller/updateuseradress',
					method: 'post',
					data: parmas,
					header : {'content-type':'application/x-www-form-urlencoded', 'token': token, 'port': 'app'},
					success: ((res) => {
						if(res.data.code == 200) {
							uni.showToast({
								title: '修改成功',
								duration: 500,
							});
							if(this.$store.state.pageType && this.$store.state.pageType == 'orderExchange') {
								this.$store.commit('getAdress', obj);
								this.$store.commit('defaultPage', '');
								uni.navigateTo({
									url: '/pages/personal/order-exchange/order-exchange'
								})
								return;
							}
							setTimeout(() => {
								uni.navigateTo({
									url: '/pages/receiving-address/receiving-address'
								})
							}, 1000);
							// uni.hideToast();
						} else {
							uni.showToast({
							    icon: 'none',
							    title: res.data.message
							});
							uni.hideToast();
						}
					})
				});
				return;
			}
			uni.request({
				url: this.url + 'controller/usercontroller/adduseradress',
				method: 'post',
				data: parmas,
				header : {'content-type':'application/x-www-form-urlencoded', 'token': token, 'port': 'app'},
				success: ((res) => {
					if(res.data.code == 200) {
						uni.showToast({
							title: '添加成功',
							duration: 500,
						});
						if(this.$store.state.pageType && this.$store.state.pageType == 'orderExchange') {
							this.$store.commit('getAdress', obj);
							this.$store.commit('defaultPage', '');
							uni.navigateTo({
								url: '/pages/personal/order-exchange/order-exchange'
							})
							return;
						}
						setTimeout(() => {
							uni.navigateTo({
								url: '/pages/receiving-address/receiving-address'
							})
						}, 1000);
						// uni.hideToast();
					} else {
						uni.showToast({
						    icon: 'none',
						    title: res.data.message
						});
						uni.hideToast();
					}
				})
			});
		},
		onLoad: function (option) { 
			if(option.id) {
				this.detailsId = option.id;
				let token = '';
				uni.getStorage({
					key:"token",
					success: function (res) {
					 token = res.data;
				  }
				})
				uni.request({
					url: this.url + 'controller/usercontroller/getuseradressbyid',
					method: 'post',
					data: {'id': option.id},
					header : {'content-type':'application/x-www-form-urlencoded', 'token': token, 'port': 'app'},
					success: (res => {
						if(res.data.code == 200) {
							let data = res.data.data;
							console.log(data);
							this.userName = data.userName;
							this.phoneNumber = data.userPhone;
							let adress = JSON.parse(data.userAddress)
							this.cityAdress = adress.city;
							this.detailedAddress = adress.detail;
							this.detail = data.detail;
							if(data.isDefault == '1') {
								this.isDefault = true;
							} else {
								this.isDefault = false;
							}
						}
					})
				});
			}
			// this.userName = option.userName;
			// this.userName = option.userName;
		},
		methods: {
			// 是否是默认地址
			changeSwith(e) {
				if(e.target.value == true) {
					this.isDefault = '1';
				} else {
					this.isDefault = '0';
				}
			},
			// 三级联动选择
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			onCancel(e) {
				// console.log(e)
			},
			onConfirm(e) {
				this.cityAdress = JSON.stringify(e.label).replace(/\"/g, "");;
				// console.log(e)
				
			},
			onBackPress() {
			  if (this.$refs.mpvuePicker.showPicker) {
			  	this.$refs.mpvuePicker.pickerCancel();
			    return true;
			  }
			  if (this.$refs.mpvueCityPicker.showPicker) {
			  	this.$refs.mpvueCityPicker.pickerCancel();
			    return true;
			  }
			},
			onUnload() {
				if (this.$refs.mpvuePicker.showPicker) {
					this.$refs.mpvuePicker.pickerCancel()
				}
				if (this.$refs.mpvueCityPicker.showPicker) {
					this.$refs.mpvueCityPicker.pickerCancel()
				}
			}
		}
	}
</script>

<style>
	page {
		background: #f9f9f9;
	}
	.add-adress {
		width: 100%;
		height: 100%;
	}
	.add-adress .input {
		height: 100rpx; 
		line-height: 100rpx;
		display: inline-block;
		display: flex;
		justify-content: flex-start;
		box-sizing: border-box;
		padding: 0 15px;
		border-top: 1px solid #E2E2E2;
		background: #FFFFFF;
	}
	.add-adress view label {
		color: #333333;
		width: 25%;
		font-size: 30rpx;
	} 
	.add-adress view input {
		padding: 15px 0;
		font-size: 29rpx;
	}
	.mpvue-picker {
		border: none;
	}
	.textarea {
		height: 170rpx;
		margin-top: 1px;
		background: #FFFFFF;
		box-sizing: border-box;
		padding: 0 15px;
	}
	.textarea textarea {
		width: 100%;
		padding-top: 15px;
		height: 100%;
		font-size: 28rpx;
	}
	.set-address {
		justify-content: space-between !important;
		padding-left: 15px;
		padding-right: 0 !important;
		margin-top: 10px;
		border: none !important;
		font-size: 30rpx;
	}
	.set-address .uni-list-cell-db {
		border: none !important;
	}
</style>
