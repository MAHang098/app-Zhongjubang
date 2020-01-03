<template>
    <view>
        <view class="account">
            <image class="bg" src="http://www.zhongjubang.com/api/upload/static/img/wallet/bg.png" />
            <text class="text">账户余额 </text>
            <text class="money">￥{{money}} </text>
            <image class="cash" @click="togglePopup('center', 'tip')" src="http://www.zhongjubang.com/api/upload/static/img/wallet/cash.png" />
        </view>
        <view class="bottom">
            <view class="bottom-content" @tap="goBalanceDetails">
                <image class="image" src="http://www.zhongjubang.com/api/upload/static/img/wallet/account-details.png" />
                <text class="account-details">余额明细</text>
            </view>
            <view class="bottom-content" @tap="gobindBank">
                <image class="bank-bind" src="http://www.zhongjubang.com/api/upload/static/img/wallet/bank-bind.png" />
                <text class="account-details">银行卡绑定</text>
            </view>
            <view class="bottom-content">
                <image class="ali-pay" src="http://www.zhongjubang.com/api/upload/static/img/wallet/ali-pay.png" />
                <text class="account-details">支付宝绑定</text>
            </view>
            <view class="bottom-content" @tap="goIdentity">
                <image class="ID-card" src="http://www.zhongjubang.com/api/upload/static/img/wallet/ID-card.png" />
                <text class="account-details">身份认证</text>
            </view>
            <view class="bottom-content" @tap="menu">
                <image class="menu" src="http://www.zhongjubang.com/api/upload/static/img/wallet/menu.png" />
                <text class="account-details">优惠券</text>
            </view>
        </view>
        <!-- 是否身份认证 start -->
		<uni-popup :show="show" :popupType ="popupType" :custom="true" :mask-click="false" >
			<view class="uni-tip">
				<!-- <view class="uni-tip-title">提示</view> -->
				<view class="uni-tip-content">您是否取消手机号绑定</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="cancelPopup('tip')">取消</view>
					<view class="uni-tip-button insist-skip" @click="cancelPopup('skip')" style="color: #F9B72C;">前往认证</view>
				</view>
			</view>
		</uni-popup>
		<!-- 是否身份认证 end -->
    </view>
</template>

<script>
import uniPopup from "@/components/uni-popup/uni-popup.vue"
export default {
    components:{ uniPopup},
    data() {
        return {
            show: false,
            money: 0,
            popupType: '',
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
            url: url + "controller/usercontroller/getappuser",
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
                    if(res.data.data.balance==null){
                        self.money = 0
                    }else{
                        self.money = res.data.data.balance
                    }
                    
                }else{
                    console.log("请求异常")
                }
            }
        })
    },
    methods: {
		goIdentity(){
			uni.navigateTo({
				url: '/pages/identity/all-authentication/all-authentication'
			})
		},
		gobindBank(){
			uni.navigateTo({
				url: '/pages/bindBank/bindBank'
			})
		},
		goBalanceDetails(){
			uni.navigateTo({
				url: '/pages/balanceDetails/balanceDetails'
			})
		},
		
        //判断优惠券
        menu(){
            uni.showToast({
                icon: 'none',
                title: '您还未获得优惠券!'
            });
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
                // uni.switchTab({
                // 	url: "/pages/main/main"
                // })
            }
        },
    }
    
}
</script>

<style>
    page{
        background-color: rgba(245,245,245,1);
    }
    .account{
        position: relative;
        border-top: 1px solid rgba(226,226,226,1);
        width:750rpx;
        height:372rpx;
        background:rgba(255,255,255,1);
    }
    .bg{
        position: absolute;
        left: 30rpx;
        top: 40rpx;
        width: 690rpx;
        height: 290rpx;
    }
    .bg image{
        width: 690rpx;
        height: 290rpx;
    }
    .text{
        position: absolute;
        left: 80rpx;
        top: 137rpx;
        font-size:32rpx;
        font-family:PingFang SC;
        color:rgba(255,255,255,1);
    }
    .money{
        position: absolute;
        left: 64rpx;
        top: 201rpx;
        font-size:60rpx;
        font-weight:bold;
        font-family:PingFang SC;
        color:rgba(255,255,255,1);
    }
    .cash{
        position: absolute;
        left: 572rpx;
        top: 154rpx;
        width: 148rpx;
        height: 74rpx;
    }
    .cash image{
        width: 148rpx;
        height: 74rpx;
    }
    .bottom{
        margin-top: 16rpx;
        width:750Rpx;
        height:809Rpx;
        background:rgba(255,255,255,1);
    }
    .bottom-content{
        position: relative;
        width: 750rpx;
        height: 120rpx;
        border-bottom: 1px solid rgba(226,226,226,1);
    }
    .image{
        position: absolute;
        left: 30rpx;
        top: 40rpx;
        width: 42rpx;
        height: 42rpx;
    }
    .image image{
        width: 42rpx;
        height: 42rpx;
    }
    .bank-bind{
        position: absolute;
        left: 30rpx;
        top: 48rpx;
        width: 48rpx;
        height: 34rpx;
    }
    .bank-bind image{
        width: 48rpx;
        height: 34rpx;
    }
    .ali-pay{
        position: absolute;
        left: 30rpx;
        top: 40rpx;
        width: 47rpx;
        height: 47rpx;
    }
    .ali-pay image{
        width: 47rpx;
        height: 47rpx;
    }
    .ID-card{
        position: absolute;
        left: 30rpx;
        top: 48rpx;
        width: 55rpx;
        height: 42rpx;
    }
    .ID-card image{
        width: 55rpx;
        height: 42rpx;
    }
    .menu{
        position: absolute;
        left: 30rpx;
        top: 48rpx;
        width: 57rpx;
        height: 33rpx;
    }
    .menu image{
        width: 57rpx;
        height: 33rpx;
    }
    .account-details{
        position: absolute;
        left: 106rpx;
        top: 45rpx;
        font-size:32rpx;
        font-family:PingFang SC;
        color:rgba(51,51,51,1);
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