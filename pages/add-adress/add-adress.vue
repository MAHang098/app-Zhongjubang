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
				<input type="text" placeholder="请选择省市区" @click="showMulLinkageThreePicker" disabled v-model="cityAdress">
			
			<!-- <mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
			 @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
			<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
			 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker> -->
		</view>
		<view class="textarea input">
			<textarea value="" placeholder="请填写详细地址(街道 楼牌号等)" />
		</view>
		
		<view class="set-address input">
				<view class="uni-list-cell-db">设为默认地址</view>
				<switch color="#FFCC33" style="transform:scale(0.7)" @change="changeSwith"/>
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
				userName: '',
				phoneNumber: ''
			}
		},
		// 点击保存
		onNavigationBarButtonTap(e){
			// console.log("输入内容："+ e.text);
			let parmas = {
				name: this.userName,
				phone: this.phoneNumber,
				adress: this.cityAdress
			}
			console.log(parmas)
		},
		methods: {
			// 是否是默认地址
			changeSwith(e) {
				console.log(e.target.value)
			},
			// 三级联动选择
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			onCancel(e) {
				console.log(e)
			},
			onConfirm(e) {
				this.cityAdress = JSON.stringify(e.label).replace(/\"/g, "");;
				console.log(e)
				
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
		height: 100%;
		font-size: 29rpx;
	}
	.mpvue-picker {
		border: none;
	}
	.textarea {
		height: 170rpx !important;
		margin-top: 1px
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
