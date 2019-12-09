
<template>
	<view class="">
		<view class="bg">
			<image src="../../static/img/loginPhone/bg.png" mode=""></image>
		</view>
		<text class="left">手机登录</text>
		<text class="right" @click="tologinPwd">密码登录</text>
		<view class="phone">
			<image src="../../static/img/loginPhone/phone.png" mode=""></image>
		</view>
		<text class="title-phone">
			请输入手机号
		</text>
		<view class="phone-number">
		     <input v-model="account" type="text" />
		</view>
		<view class="code">
			<image src="../../static/img/loginPhone/code.png" mode=""></image>
		</view>
		<text class="title-code">
			请输入验证码
		</text>
		<view class="phone-code">
		     <input type="text" v-model="password"/>
		</view>
		<!-- <view class="send-code" @tap="sendCod">
			发送验证码
		</view> -->
		<view size="mini" class="send-code" v-bind:class="isActive == true ? 'in' : ''" @tap="sendCod">
			{{isActive == true ? second + 's' : '获取验证码'}}
		</view>
		<!-- <button size="mini" class="send-code" v-bind:class="isActive == true ? 'in' : ''" @tap="sendCod">{{isActive == true ? second + 's' : '发送验证码'}}</button> -->
		<view class="phone-login" @tap="bindLogin">
			<image src="../../static/img/loginPhone/phone-login.png" mode=""></image>
		</view>
		<view class="wechat-login"  @tap="wechatbindLogin">
			<image src="../../static/img/loginPhone/wechat-login.png" mode=""></image>
		</view>
		<text class="bottom-left">点击登录按钮代表您同意</text>
		<text class="bottom-right" @tap="toAgreement">《众居邦用户协议》</text>
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
				token: [],
				isActive: false,
				second: 60
            }
        },
        methods: {
			sendCod(){
				if (this.account.length != 11) {
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
				const phone = this.account
				const data = {
					phone: phone,
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

                if (this.account.length != 11) {

                    uni.showToast({
                        icon: 'none',
                        title: '请输入正确的电话号码!'
                    });
                    return;
                }
                
                /**
                 * 下面简单模拟下服务端的处理
                 * 检测用户账号密码是否在已注册的用户列表中
                 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
                 */
                
				const phone = this.account
				const data = {
				    phone: phone,
					type: "2",
				    code: this.password
				}
				const url = this.url
				uni.request({
				    url: url + '/public/public/checkverificationcode',
				    data: data,
				    method:"POST",
				    header : {'content-type':'application/x-www-form-urlencoded'},
				    success: function (res){
						console.log(res.data.code);
						if(res.data.code=="200"){
							uni.request({
								url: url + '/controller/usercontroller/addappuser',
								data: {phone:phone},
								method:"POST",
								header : {'content-type':'application/x-www-form-urlencoded'},
								success: function (res){
									console.log(res);
									uni.setStorage({
										key:"token",
										data: res.data.token,
									})
									// uni.switchTab({
									// 	url: "/pages/user/user"
									// })
									uni.navigateTo({
										url: "/pages/releaseVideo2/releaseVideo2"
									})
								}
							})
						}else{
							
							uni.showToast({
								icon: 'none',
								title: '验证码错误'
							});
						}
				        // uni.navigateTo({
				        //     url: "/pages/setPswd/setPswd"
				        // })
						
						
				    }
				})
                
            },
			tologinPwd(){
				uni.navigateTo({
				    url: "/pages/loginPwd/loginPwd"
				})
			},
			wechatbindLogin: function() {
				const self = this
				uni.getProvider({
					service: 'oauth',
					success: function(res) {
						console.log(res.provider);
						//支持微信、qq和微博等
						if (~res.provider.indexOf('weixin')) {
							uni.login({
								provider: 'weixin',
								success: function(loginRes) {
									console.log('-------获取openid(unionid)-----');
									console.log(JSON.stringify(loginRes));
									// 获取用户信息
									uni.getUserInfo({
										provider: 'weixin',
										success: function(infoRes) {
											console.log('-------获取微信用户所有-----');
											console.log(JSON.stringify(infoRes.userInfo));
											let userInfo = JSON.stringify(infoRes.userInfo)
											userInfo = JSON.parse(userInfo)
											uni.request({
												url: self.url + "/controller/usercontroller/weixinlogin",
												data: {
													wxToken: userInfo.openId,
													nickName: userInfo.nickName,
													sex: userInfo.gender,
													region: userInfo.province,
													head: userInfo.avatarUrl,
													unionId: userInfo.unionId
												},
												method: 'POST',
												header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app'},
												success: function (res){
													if(res.data.code==200){
														console.log(res.data.token)
														uni.setStorage({
															key:"token",
															data: res.data.token
														})
														// 获取APP用户资料判断是否有手机号
														const token = res.data.token
														console.log("22222")
														uni.request({
															url: self.url + "/controller/usercontroller/getappuser",
															data: {},
															method: 'POST',
															header : {
																'content-type':'application/x-www-form-urlencoded', 
																'port': 'app',
																'token': token
															},
															success: function (res){
																console.log("1111")
																console.log(res)
																console.log(res.data.data.state)
																if(res.data.data.state==0){
																	// uni.switchTab({
																	// 	url: "/pages/main/main"
																	// })
																	uni.navigateTo({
																		url: "/pages/releaseVideo2/releaseVideo2"
																	})
																}else{
																	uni.navigateTo({
																		url: "/pages/bindPhone/bindPhone"
																	})
																}
															}
														})
														
													}else{
														console.log("请求异常")
													}
													console.log(res.data.code)
												}
											})
											
										}
									});
								}
							});
						}
					}
				});
			},
			toAgreement(){
				uni.navigateTo({
					url: "/pages/agreement/agreement"
				})
			}
            
        }
    }
</script>

</script>

<style>
	.bg{
		width: 750rpx;
		height: 1334rpx;
	}
	.bg image{
		width: 750rpx;
		height: 1334rpx;
	}
	.left{
		position: absolute;
		left: 73rpx;
		top: 449rpx;
		font-size:46rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(249,183,44,1);
	}
	.right{
		position: absolute;
		right: 73rpx;
		top: 449rpx;
		font-size:43rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(136,136,136,1);
	}
	.phone{
		position: absolute;
		left: 44rpx;
		top: 580rpx;
		width: 36rpx;
		height: 42rpx;
	}
	.phone image{
		width: 36rpx;
		height: 42rpx;
	}
	.title-phone{
		position: absolute;
		left: 94rpx;
		top: 580rpx;
		font-size:34rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.code{
		position: absolute;
		left: 44rpx;
		top: 750rpx;
		width: 36rpx;
		height: 42rpx;
	}
	.code image{
		width: 36rpx;
		height: 42rpx;
	}
	
	.title-code{
		position: absolute;
		left: 94rpx;
		top: 749rpx;
		font-size:34rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	
	.m-input{
		position: absolute;
		left: 65rpx;
		top: 643rpx;
		width: 635.8rpx;
		height: 60rpx;
	}
	.send-code{
		position: absolute;
		text-align: center;
		line-height: 57rpx;
		top: 803rpx;
		right: 48rpx;
		width:176rpx;
		height:57rpx;
		background:rgba(235,235,235,1);
		border-radius:28rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.phone-login{
		position: absolute;
		left: 45rpx;
		bottom: 281rpx;
		width: 660rpx;
		height: 92rpx;
	}
	.phone-login image{
		width: 660rpx;
		height: 92rpx;
	}
	.wechat-login{
		position: absolute;
		left: 45rpx;
		bottom: 159rpx;
		width: 660rpx;
		height: 92rpx;
	}
	.wechat-login image{
		width: 660rpx;
		height: 92rpx;
	}
	.bottom-left{
		position: absolute;
		left: 136rpx;
		bottom: 27rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.bottom-right{
		position: absolute;
		right: 136rpx;
		bottom: 27rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:#F9B72C;
	}
	.phone-number{
	    /* display: flex;
	    justify-content: flex-start; */
		position: absolute;
		left: 65rpx;
		top: 630rpx;
	    height: 100rpx;
		width: 635rpx;;
	    border-bottom: 2px solid #DADADA;
	    box-sizing: border-box;
	    padding: 30rpx 0;
	    font-size: 34rpx;
	    color: #333333;
	    font-weight: 500;
	}
	.phone-code{
	      /* display: flex;
	      justify-content: flex-start; */
	  	position: absolute;
	  	left: 65rpx;
	  	top: 780rpx;
	    height: 100rpx;
	  	width: 635rpx;;
		border-bottom: 2px solid #DADADA;
		box-sizing: border-box;
		padding: 30rpx 0;
		font-size: 34rpx;
		color: #333333;
		font-weight: 500;
	}
	
</style>