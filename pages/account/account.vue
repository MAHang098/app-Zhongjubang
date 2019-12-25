<template>
	<view>
		<view class="account">
            <image class="phone" src="../../static/img/account/phone.png" />
            <text class="phone-text">手机号</text>
            <text class="phone-number">{{phone}}</text>
            <image v-if="state==0" class="binded" @click="togglePopup('center', 'tip')" src="../../static/img/account/binded.png" />
            <image v-else class="binded" @tap="goBindphone" src="../../static/img/account/no-bind.png" />
        </view>
		<view class="account1">
            <image class="phone" src="../../static/img/account/wechat.png" />
            <text class="public-text">微信</text>
            <image v-if="wxToken!=''" @click="togglePopup1('center', 'tip')" class="binded" src="../../static/img/account/binded.png" />
            <image v-else class="binded" @tap="wechatbindLogin" src="../../static/img/account/no-bind.png" />
        </view>
		<view class="account1">
            <image class="phone" src="../../static/img/account/update.png" />
            <text class="public-text">修改密码</text>
            <image class="arrow" src="../../static/img/account/arrow.png" />
        </view>

        <!-- 保存标签 start -->
		<uni-popup :show="show" :popupType ="popupType" :custom="true" :mask-click="false" >
			<view class="uni-tip">
				<!-- <view class="uni-tip-title">提示</view> -->
				<view class="uni-tip-content">您是否取消手机号绑定</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="cancelPopup('tip')" style="color: #F9B72C;">取消</view>
					<view class="uni-tip-button insist-skip" @click="cancelPopup('skip')">确定</view>
				</view>
			</view>
		</uni-popup>
		<!-- 保存标签 end -->

        <!-- 保存标签 start -->
		<uni-popup :show="show1" :popupType ="popupType1" :custom="true" :mask-click="false" >
			<view class="uni-tip">
				<!-- <view class="uni-tip-title">提示</view> -->
				<view class="uni-tip-content">您是否取消微信绑定</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="cancelPopup1('tip')" style="color: #F9B72C;">取消</view>
					<view class="uni-tip-button insist-skip" @click="cancelPopup1('skip')">确定</view>
				</view>
			</view>
		</uni-popup>
		<!-- 保存标签 end -->
	</view>
</template>

<script>
    import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
        components:{ uniPopup},
		data() {
			return {
                show: false,
                popupType: '',
                show1: false,
                popupType1: '',
                type: '',
                wxToken: '',
                state: 0,
                phone: 0,
			}
		},
		onShow(){
            let token
			let self = this
			uni.getStorage({
				key:"token",
				success: function (res) {
					token = res.data;
				}
			})
			const url = this.url
            uni.request({
				url: url + "/controller/usercontroller/getappuser",
				data: {},
				method: 'POST',
				header : {
					'content-type':'application/x-www-form-urlencoded', 
					'port': 'app',
					'token': token
				},
				success: function (res){
					console.log(res.data.code)
					if(res.data.code==421){
						uni.navigateTo({
							url: '/pages/loginPhone/loginPhone'
						})
					}
					if(res.data.code==200){
						console.log(res.data.data)
						console.log(res.data.data.wxToken)
						console.log(res.data.data.state)
						self.wxToken = res.data.data.wxToken
						self.state = res.data.data.state//1:用户没有传入电话0：有电话
						self.phone = res.data.data.phone
					}else{
						console.log("请求异常")
					}
				}
			})
        },
		methods: {
			// 绑定微信
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
			// 绑定手机
			goBindphone(){
				uni.navigateTo({
					url: "/pages/bindPhone1/bindPhone1"
				})
			},
            // 弹出层弹出的方式  i:当前标签的下标, name: 当前标签的name
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
				this.popupType = type
				if (open === 'tip') {
					this.show = true
				} else {
					this.$refs[open].open()
				}
			},
			togglePopup1(type, open) {
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
				this.popupType1 = type
				if (open === 'tip') {
					this.show1 = true
				} else {
					this.$refs[open].open()
				}
			},
			// 取消弹出层
			cancelPopup(type) {
				if (type === 'tip') {
					this.show = false
					return
				}
				if(type === 'skip') {
					console.log("1111")
					// uni.switchTab({
					// 	url: "/pages/main/main"
					// })
				}
			},
			// 取消弹出层
			cancelPopup1(type) {
				if (type === 'tip') {
					this.show1 = false
					return
				}
				if(type === 'skip') {
					let token
                    let self = this
                    uni.getStorage({
                        key:"token",
                        success: function (res) {
                            token = res.data;
                        }
                    })
                    const url = this.url
                    const wxToken = this.wxToken
                    uni.request({
                        url: url + "/controller/usercontroller/updateuserbindwx",
                        data: {
                            wxToken: wxToken
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
                            console.log(res.data.code)
                            if(res.data.code==200){
                                console.log(res)
                                uni.showToast({
                                    title: '微信解绑成功',
                                    duration: 200,
                                });
                                this.show1 = false
					            return
                            }else{
                                console.log("请求异常")
                            }
                        }
                    })
				}
			},
		},
	}
</script>

<style>
	.account{
        position: relative;
        width: 750rpx;
        height: 167rpx;
        border-bottom: 1px solid rgba(194,194,196,1);
        border-top: 1px solid rgba(226,226,226,1);
    }
	.account1{
        position: relative;
        width: 750rpx;
        height: 167rpx;
        border-bottom: 1px solid rgba(194,194,196,1);
    }
    .phone{
        position: absolute;
        left: 30rpx;
        top: 45rpx;
        width: 76rpx;
        height: 76rpx;
    }
    .phone image{
        width: 76rpx;
        height: 76rpx;
    }
    .phone-text{
        position: absolute;
        left: 132rpx;
        top: 42rpx;
        font-size:32rpx;
        font-family:PingFang SC;
        color:#333333;
    }
    .public-text{
        position: absolute;
        left: 132rpx;
        top: 58rpx;
        font-size:32rpx;
        font-family:PingFang SC;
        color:#333333;
    }
    .phone-number{
        position: absolute;
        left: 132rpx;
        bottom: 48rpx;
        font-size:32rpx;
        font-family:PingFang SC;
        color:#666;
    }
    .binded{
        position: absolute;
        right: 30rpx;
        bottom: 48rpx;
        width:114rpx;
        height:52rpx;
    }
    .binded image{
        width:114rpx;
        height:52rpx;
    }
    .arrow{
        position: absolute;
        right: 30rpx;
        bottom: 66rpx;
        width:15rpx;
        height:28rpx;
    }
    .arrow image{
        width:15rpx;
        height:28rpx;
    }

    /* 提示窗口 */
	.uni-tip {
		padding-top: 15px;
		width: 300px;
		background: #fff;
		box-sizing: border-box;
		border-radius: 10rpx;
	}
	
	.uni-tip-title {
		text-align: center;
		font-weight: bold;
		font-size: 41rpx;
		color: #333;
	}
	
	.uni-tip-content {
		padding: 44rpx 0;
		font-size: 32rpx;
		color: #666;
		width: 360rpx;
		color: #666666;
		font-weight: 500;
		margin: auto;
		text-align: center;
	}
	
	.uni-tip-group-button {
		margin-top: 10px;
		display: flex;
	}
	
	.uni-tip-button:nth-child(1) {
		width: 100%;
		text-align: center;
		font-size: 14px;
		color: #333333;
		font-size: 37rpx;
		font-weight: 500;
		border-top: 1px solid #E2E2E2;
		border-right: 1px solid #E2E2E2;
		padding: 10px 0;
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
    
</style>
