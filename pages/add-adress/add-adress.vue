<template>
	<view class="add-adress">
		<view class="user-name">
			<label for="">收货人</label>
			<input type="text" placeholder="请填写姓名">
		</view>
		<view class="user-phone">
			<label for="">联系电话</label>
			<input type="text" placeholder="请填写联系电话">
		</view>
		<view class="mpvue-picker">
			<!-- <view class="uni-padding-wrap uni-common-mt"> -->
				
				<!-- <view class="uni-btn-v"> -->
				<label for="">收货地址</label>
				<input type="text" placeholder="请选择省市区" @click="showMulLinkageThreePicker">
					<!-- <button type="default" @click="showMulLinkageThreePicker">三级城市联动</button> -->
				<!-- </view> -->
			<!-- </view> -->
			<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
			 @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
			<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
			 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
		</view>
		<view class="textarea">
			<textarea value="" placeholder="请填写详细地址(街道 楼牌号等)" />
		</view>
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
				pickerValueArray:[]
			}
		},
		methods: {
			// 三级联动选择
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			onCancel(e) {
				console.log(e)
			},
			onConfirm(e) {
				this.pickerText = JSON.stringify(e)
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
		background: #FFFFFF;
	}
	.add-adress view {
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		justify-content: flex-start;
		box-sizing: border-box;
		padding: 0 15px;
		border-top: 1px solid #E2E2E2;
		
	}
	.add-adress view label {
		color: #333333;
		width: 25%;
		font-size: 30rpx;
	}
	.add-adress view input {
		height: 100%;
	}
	.textarea {
		height: 170rpx;
	}
	.textarea textarea {
		width: 100%;
		padding-top: 15px;
	}
	
</style>
