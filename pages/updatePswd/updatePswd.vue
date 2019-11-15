<template>
	<view class="findPswd">
		<view class="text">
			<view class="is-find_pswd">找回密码？</view>
			<view class="yz-phone">验证当前手机号</view>
		</view>
		<view class="input">
			<view class="phone-number">
				<image src="../../static/phone.png" mode=""></image>
				<input v-model="account" type="text" placeholder="请输入手机号" />
			</view>
			<view class="yzm">
				<image src="../../static/lock.png" mode=""></image>
				<input type="text" placeholder="请输入验证码"  v-model="password"/>
				<button size="mini" class="send" @tap="sendCod">发送验证码</button>
			</view>
		</view>
		<button class="next" @tap="bindLogin">下一步</button>
	</view>
</template>

<script>
	import mInput from '../../components/m-input.vue'
	export default {
	    components: {
	        mInput
	    },
	    data() {
	        return {
	            providerList: [],
	            hasProvider: false,
	            account: '',
	            password: '',
	            positionTop: 0,
				token: []
	        }
	    },
	    // computed: mapState(['forcedLogin']),
	    methods: {
			sendCod(){
				if (this.account.length < 11) {
				    uni.showToast({
				        icon: 'none',
				        title: '请输入正确的电话号码!'
				    });
				    return;
				}
				const data = {
					phone: this.account,
					type: "2"
				}
				const url = this.url
				uni.request({
				    url: url + '/public/public/sendverificationcode',
				    data: data,
				    method:"POST",
				    header : {'content-type':'application/x-www-form-urlencoded'},
				    success: function (res){
				        console.log(res);
				    }
				})
			},
	        bindLogin() {
	            /**
	             * 客户端对账号信息进行一些必要的校验。
	             * 实际开发中，根据业务需要进行处理，这里仅做示例。
	             */
				console.log(this.account)
				uni.navigateTo({
				    url: "/pages/setPswd/setPswd?phone=" + this.account
				})
				
	            // if (this.account.length < 11) {
	            //     uni.showToast({
	            //         icon: 'none',
	            //         title: '请输入正确的电话号码!'
	            //     });
	            //     return;
	            // }
	            // if (this.password.length < 6) {
	            //     uni.showToast({
	            //         icon: 'none',
	            //         title: '密码最短为 6 个字符'
	            //     });
	            //     return;
	            // }
	            /**
	             * 下面简单模拟下服务端的处理
	             * 检测用户账号密码是否在已注册的用户列表中
	             * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
	             */
	            
				
				// const data = {
				//     phone: this.account,
				// 	type: "2",
				//     code: this.password
				// }
				// const phone = this.account
				// const url = this.url
				// uni.request({
				//     url: url + '/public/public/checkverificationcode',
				//     data: data,
				//     method:"POST",
				//     header : {'content-type':'application/x-www-form-urlencoded'},
				//     success: function (res){
				//         console.log(res);
				//         uni.navigateTo({
				//             url: "/pages/updatePswd/updatePswd?phone=" + phone
				//         })
						
				//     }
				// })
	            
	        },
			tologinPwd(){
				uni.navigateTo({
				    url: "/pages/loginPwd/loginPwd"
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
		border-radius: 27rpx;
		background: #EBEBEB;
		padding: 0;
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
</style>
