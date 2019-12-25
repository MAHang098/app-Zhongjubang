<template>
	<view class="write-circle">
		<image src="../../../static/img/identity/rednet-bg.png" mode="" class="write-circle_bg"></image>
		<view class="circle-massage">
			<view class="circle-massage_explain">以下信息仅用户众居邦房主审核认证，请确保信息真是有效，请 正确填写，众居邦将竭力保护您的隐私，请您放心！</view>
			
			<!-- 资料填写 start -->
			<view class="circle-massage_input">
				<label for="">推荐人</label>
				<input type="text" value="" placeholder="选填,推荐人姓名或ID"/>
			</view>
			<view class="circle-massage_input">
				<label for="">户主姓名</label>
				<input type="text" value="" placeholder="必填"/>
			</view>
			<view class="circle-massage_input">
				<label for="">邮箱</label>
				<input type="text" value="" placeholder="必填"/>
			</view>
			<view class="circle-massage_input">
				<label for="">居圈用户名</label>
				<input type="text" value="" placeholder="必填"/>
			</view>
			<!-- 资料填写 start -->
			
			<!-- 材料认证 start -->
			<view class="material">
				<image src="../../../static/img/identity/v.png" mode=""></image>认证材料
			</view>
			
			<!-- 材料类型 start -->
			<view class="material-type">
				<text>身份证</text>
				<radio value="r1" checked="true" color="#FFCC33" style="transform:scale(0.6);"/>
			</view>
			
			<!-- 身份证照片 start -->
			<view class="idCard">
				<image src="../../../static/img/identity/facade.png" mode=""></image>
				<image src="../../../static/img/identity/reverse.png" mode=""></image>
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
				checked: false
			}
		},
		methods: {
			change() {
				this.checked = !this.checked;
			}
		}
	}
</script>

<style>
	@import '../../../static/css/identity.css'; /*引入G圈列表样式*/
</style>
