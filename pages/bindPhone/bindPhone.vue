<template>
	
	<view class="findPswd">
		<view class="skip" @click="togglePopup('center', 'tip')">跳过</view>
		<!-- 文本 start -->
		<view class="text">
			<view class="is-find_pswd">绑定手机号</view>
			<view class="yz-phone"></view>
		</view>
		<!-- 文本 end -->
		
		<!-- 手机号输入框 start -->
		<view class="input">
			<view class="phone-number">
				<image src="../../static/phone.png" mode=""></image>
				<input type="text" placeholder="请输入手机号" v-model="phone" />
			</view>
			<view class="yzm">
				<image src="../../static/lock.png" mode=""></image>
				<input type="text" placeholder="请输入验证码" v-model="validationCode" />
				<button size="mini" class="send" v-bind:class="isActive == true ? 'in' : ''" @tap="sendCod">{{isActive == true ? second + 's' : '发送验证码'}}</button>
			</view>
		</view>
		<button class="next" @tap="bindPhone">绑定手机号</button>
		<!-- 手机号输入框 end -->
		
		<!-- 跳过提示 start -->
		<uni-popup :show="show" :type="type" :custom="true" :mask-click="false" @change="change">
			<view class="uni-tip">
				<view class="uni-tip-title">提示</view>
				<view class="uni-tip-content">未实名制账号不能进行发布、评论、交易等操作</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="cancel('tip')">留下</view>
					<view class="uni-tip-button insist-skip" @click="cancel('skip')">仍然跳过</view>
				</view>
			</view>
		</uni-popup>
		<!-- 跳过提示 end -->
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components:{ uniPopup},
		data() {
			return {
				show: false,
				type: '',
				second: 60,
				phone: '',
				validationCode: '',
				isActive: false
			}
		},
		methods: {
			// 弹出层弹出的方式
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
				this.type = type
				if (open === 'tip') {
					this.show = true
				} else {
					this.$refs[open].open()
				}
			},
			// 弹框关闭
			cancel(type) {
				if (type === 'tip') {
					this.show = false
					return
				}
				if(type === 'skip') {
					uni.navigateTo({
						url: '../updatePswd/updatePswd'
					})
				}
				// this.$refs[type].close()
			},
			change(e) {
				console.log(e.show)
			},
			sendCod(){
				
				if (this.phone.length < 11 || this.phone.length > 11) {
				    uni.showToast({
				        icon: 'none',
				        title: '请输入正确的电话号码!'
				    });
				    return;
				}
				this.isActive = true;
				// 发送验证码60s倒计时 start
				let interval = setInterval(() => {
				  --this.second;
				}, 1000)
				setTimeout(() => {
					clearInterval(interval)
					this.isActive = false;
					this.second = 60;
				}, 60000);
				// 发送验证码60s倒计时 end
				const data = {
					phone: this.phone,
					type: "2"
				}
				const url = this.url
				
				// uni.request({
				//     url: this.url + '/public/public/sendverificationcode',
				//     data: data,
				//     method:"POST",
				//     header : {'content-type':'application/x-www-form-urlencoded'},
				//     success: function (res){
				// 		if(res.code == 200) {
				// 			uni.setStorage({
				// 			    key:"token",
				// 			    data: res.data.token,
				// 			})
				// 		}
						
				//     }
				// })
			},
			// 绑定手机号
			bindPhone() {
				if(this.phone == '' ) {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none',
						duration: 2000,
					});
					return;
				}
				if (this.phone.length < 11 || this.phone.length > 11) {
				    uni.showToast({
				        icon: 'none',
				        title: '请输入正确的电话号码!'
				    });
				    return;
				}
				if(this.validationCode == '') {
					uni.showToast({
						title: '请输入验证码',
						icon: 'none',
						duration: 2000,
					})
					return;
				}
				let params = {
					phone: this.phone,
					code: this.validationCode,
					type: "2"
				}
				// uni.navigateTo({
				// 	url: "/pages/setPswd/setPswd?phone=" + this.phone
				// })
				// 校验验证码和手机， 后期解除注释
				uni.request({
					url: this.url + '/public/public/checkverificationcode',
					data: params,
					method:"POST",
					header : {'content-type':'application/x-www-form-urlencoded'},
					success: function (res){
						if(res.data.code == 200) {
							// uni.navigateTo({
							// 	// url: "/pages/setPswd/setPswd?phone=" +  params.phone
							// })
						} else {
							uni.showToast({
								title: res.data.message,
								icon: 'none',
								duration: 2000,
							})
						}
						
					}
				})
			}
		}
	}
</script>

<style>
	.findPswd {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 100rpx 45rpx 100rpx 44rpx;
		overflow: hidden;
		position: relative;
	}
	.skip {
		position: fixed;
		right: 38rpx;
		top: 13px;
		z-index: 9999;
		color: #666666;
		font-size: 30rpx;
		font-weight: 500;
	}
	.is-find_pswd {
		font-size: 40rpx;
		color: #333333;
		font-weight: bold;
		margin-bottom: 31rpx;
	}
	.yz-phone {
		font-size: 28rpx;
		color: #666666;
		font-weight: 500;
		margin-bottom: 195rpx;
	}
	.input image {
		width: 36rpx !important;
		height: 42rpx !important;
		display: inline-block;
		padding-right: 27rpx;
		padding-top: 2px;
	}
	.phone-number, .yzm {
		display: flex;
		justify-content: flex-start;
		height: 100rpx;
		border-bottom: 2px solid #DADADA;
		box-sizing: border-box;
		padding: 30rpx 0;
		font-size: 34rpx;
		color: #999999;
		font-weight: 500;
	}
	.send {
		width: 164rpx;
		height: 53rpx;
		line-height: 53rpx;
		border-radius: 27rpx;
		/* background: #EBEBEB; */
		background: #F9B72C;
		padding: 0;
		color:#FFFFFF;
	}
	.in {
		background: #EBEBEB;
		color:#999999;
	}
	.send:after, .next:after {
		border: none;
	}
	.next {
		margin-top: 93rpx;
		border-radius: 46rpx;
		background: #F9B72C;
		font-size: 38rpx;
		font-weight: 500;
		color: #FFFFFF;
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
		padding: 15px 0;
		font-size: 32rpx;
		color: #666;
		width: 360rpx;
		color: #666666;
		font-weight: 500;
		margin: auto;
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
	.insist-skip {
		color: #F9B72C;
		border-left: 1px solid #E2E2E2;
	}
</style>
