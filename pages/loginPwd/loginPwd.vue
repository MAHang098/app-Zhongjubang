<template>
    <view class="">
    	<view class="bg">
    		<image src="../../static/img/loginPhone/bg-2.png" mode=""></image>
    	</view>
    	<text class="left" @tap="tologinPhone">手机登录</text>
    	<text class="right">密码登录</text>
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
    		请输入密码
    	</text>
    	<view class="phone-code">
    	     <!-- <input type="text" v-model="password"/> -->
    		 <m-input type="password" displayable v-model="password"></m-input>
    	</view>
    	<text class="forget-pwd" @tap="toupdatePswd">忘记密码</text>
    	<view class="phone-login" @tap="bindLogin">
    		<image src="../../static/img/loginPhone/phone-login.png" mode=""></image>
    	</view>
    	<view class="wechat-login">
    		<image src="../../static/img/loginPhone/wechat-login.png" mode=""></image>
    	</view>
    	<text class="bottom-left">点击登录按钮代表您同意</text>
    	<text class="bottom-right">《众居邦用户协议》</text>
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
			
            bindLogin() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (this.account.length < 11) {
                    uni.showToast({
                        icon: 'none',
                        title: '请输入正确的电话号码!'
                    });
                    return;
                }
                if (this.password.length < 6) {
                    uni.showToast({
                        icon: 'none',
                        title: '密码最短为 6 个字符'
                    });
                    return;
                }
                /**
                 * 下面简单模拟下服务端的处理
                 * 检测用户账号密码是否在已注册的用户列表中
                 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
                 */
                
				const url = this.url
				let sha256 = require("js-sha256").sha256//这里用的是require方法
				const password = sha256("134283"+"zhongjubang2019")//要加密的密码
				uni.request({
				    url: url + '/controller/usercontroller/appuserlogin',
				    data: {
						phone:"13428395153",
						password: password
					},
				    method:"POST",
				    header : {
						'content-type':'application/x-www-form-urlencoded'
					},
				    success: function (res){
				        console.log(res.data.token);
						console.log(url)
						const token = res.data.token
						uni.request({
						    url: url + '/controller/usercontroller/getappuser',
						    data: {},
						    method:"POST",
						    header : {
								'content-type':'application/x-www-form-urlencoded',
								'token': token,
								'port': 'app'
							},
						    success: function (res){
						        console.log(res)
						    }
						})
				        uni.setStorage({
				            key:"token",
				            data: res.data.token,
				        })
				    }
				})
                
            },
			uploadFile(options = {}) {
				options.url = "http://www.zhongjubang.com/test/controller/usercontroller/getappuser"
				options.header = options.header || this.config.header
				
				
					options.header = Object.assign({}, options.header, {
						'Cookie': `dd`
					})
				
				console.log(options)
				return new Promise((resolve, reject) => {
					options.success = function(result) {
						resolve(JSON.parse(result.data))
					}
					options.fail = function(err) {
						reject(err)
					}
					uni.uploadFile(options)
				})
			},
			tologinPhone(){
				uni.navigateTo({
				    url: "/pages/loginPhone/loginPhone"
				})
			},
			toupdatePswd(){
				uni.navigateTo({
				    url: "/pages/updatePswd/updatePswd"
				})
			},
            
        }
    }
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
    	font-size:43rpx;
    	font-family:PingFang SC;
    	font-weight:bold;
    	color:rgba(136,136,136,1);
    }
    .right{
    	position: absolute;
    	right: 73rpx;
    	top: 449rpx;
    	font-size:46rpx;
    	font-family:PingFang SC;
    	font-weight:500;
    	color:rgba(249,183,44,1);
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
    .forget-pwd{
    	position: absolute;
    	right: 68rpx;
    	bottom: 393rpx;
    	font-size:28rpx;
    	font-family:PingFang SC;
    	font-weight:500;
    	color:rgba(102,102,102,1);
    }
</style>