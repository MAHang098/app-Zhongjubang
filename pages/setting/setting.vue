<template>
    <view>
        <view class="horizen"></view>
        <view class="wrap" @tap="goEditinfo">
            <text class="editInfo">编辑个人资料</text>
            <image class="wrap-image" style="width:16rpx;height:27rpx;" src="../../static/img/wallet/go.png" />
        </view>
        <view class="horizen"></view>
        <view class="wrap">
            <text class="editInfo">消息推送</text>
            <view class="uni-list-cell uni-list-cell-pd">
				<switch class="indice" indicator-active-color="#000000" :checked="indicatorDots" @change="changeIndicatorDots" />
			</view>
        </view>
        <view class="wrap1" @tap="toAgreement">
            <text class="editInfo">用户协议</text>
            <image class="wrap-image" style="width:16rpx;height:27rpx;" src="../../static/img/wallet/go.png" />
        </view>
        <view class="wrap" @tap="goAbout">
            <text class="editInfo">关于众居邦</text>
            <image class="wrap-image" style="width:16rpx;height:27rpx;" src="../../static/img/wallet/go.png" />
        </view>
        <view class="horizen"></view>
        <view class="wrap">
            <text class="editInfo">喜欢去鼓励下我们</text>
            <image class="wrap-image" style="width:16rpx;height:27rpx;" src="../../static/img/wallet/go.png" />
        </view>
        <view class="wrap2" @click="togglePopup('center', 'tip')">
            退出登录
        </view>
        <!-- 是否退出登录弹窗 start -->
		<uni-popup :show="show" :popupType ="popupType" :custom="true" :mask-click="false" >
			<view class="uni-tip">
				<!-- <view class="uni-tip-title">提示</view> -->
				<view class="uni-tip-content">您确定要退出登录吗</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="cancelPopup('tip')">取消</view>
					<view class="uni-tip-button insist-skip" @click="cancelPopup('skip')" style="color: #F9B72C;">确定</view>
				</view>
			</view>
		</uni-popup>
		<!-- 是否退出登录弹窗 end -->
    </view>
</template>
<script>
    import uniPopup from "@/components/uni-popup/uni-popup.vue"
    export default {
        components:{ uniPopup},
        data() {
			return {
                show: false,
                indicatorDots: true,
                popupType: '',
				token: [],
			}
        },
        methods: {
			goAbout(){
				uni.navigateTo({
					url: "/pages/about/about"
				})
			},
            toAgreement(){
				uni.navigateTo({
					url: "/pages/agreement/agreement"
				})
			},
            goEditinfo(){
                uni.navigateTo({
                    url: "/pages/editInfo/editInfo"
                })
            },
            changeColor(e){
                console.log(e.target.value) 
            },
			changeIndicatorDots(e) {
                // indecator-color="rgba(250,186,50,1)"
                this.indicatorDots = !this.indicatorDots
                console.log(e.target.value)
                let params = {
                    indicatorColor: 'red',
                    indicatorActiveColor: '#05C7CC'
                }
                return params
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
            // 取消弹出层
            cancelPopup(type) {

                if (type === 'tip') {
                    this.show = false
                    return
                }
                if(type === 'skip') {
                    console.log("1111")
                    this.removeLogin()
                }
            },
            // 退出接口
            removeLogin(){
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
                    url: url + "controller/usercontroller/removeLogin",
                    data: {
                    },
                    method: 'POST',
                    header : {
                        'content-type':'application/x-www-form-urlencoded', 
                        'port': 'app',
                        'token': token
                    },
                    success: function (res){
                        console.log(res.data.code)
                        if(res.data.code==200){
                            console.log(res)
							uni.setStorage({
								key:"token",
								data: '0',
							})
                            uni.navigateTo({
                                url: '/pages/loginPhone/loginPhone'
                            })
                        }else{
                            console.log("请求异常")
                        }
                    }
                })
            }
        }
    }
</script>
<style>
    page{
        background: #F5F5F5;
    }
    .horizen{
        height: 1px;
        width: 750rpx;
        background: #F5F5F5;
    }
    .wrap{
        position: relative;
        width: 750rpx;
        height:116rpx;
        background:rgba(255,255,255,1);
        box-shadow:0px 1px 0px 0px rgba(0, 0, 0, 0.02);
    }
    .wrap1{
        position: relative;
        width: 750rpx;
        height:116rpx;
        background:rgba(255,255,255,1);
        box-shadow:0px 1px 0px 0px rgba(0, 0, 0, 0.02);
        margin: 12rpx 0;
    }
    .wrap2{
        position: relative;
        width: 750rpx;
        height:116rpx;
        line-height: 116rpx;
        text-align: center;
        background:rgba(255,255,255,1);
        box-shadow:0px 1px 0px 0px rgba(0, 0, 0, 0.02);
        margin-top: 34rpx;
        font-size:32rpx;
        font-family:PingFang SC;
        color:rgba(51,51,51,1);
    }
    .editInfo{
        position: absolute;
        left: 30rpx;
        font-size:32rpx;
        font-family:PingFang SC;
        color:rgba(51,51,51,1);
        line-height:130rpx;
    }
    .wrap-image{
        position: absolute;
        right: 30rpx;
        top: 48rpx;
    }
    .indice{
        position: absolute;
        left: 614upx;
        top: 30rpx;
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
    .name-input{
        position: absolute;
        left: 250px;
        top: 19px;
        width: 400rpx;
        height: 60rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        color:rgba(153,153,153,1);
    }
</style>