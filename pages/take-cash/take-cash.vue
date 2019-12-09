<template>
    <view>
        <view class="account">
            <image class="bg" src="../../static/img/wallet/bg.png" />
            <text class="text">可提现余额 </text>
            <text class="money">￥{{money}} </text>
            <view class="cash">0.00元结算中</view>
            <!-- <image class="cash" @click="togglePopup('center', 'tip')" src="../../static/img/wallet/cash.png" /> -->
        </view>
        <view class="bottom">
            <view class="bottom-content">
                <text class="account-details">提现金额</text>
                <input class="name-input" placeholder="单次最少提现100元" type="text" @input = "name" />
            </view>
            <view class="bottom-content">
                <text class="account-details">提现至</text>
                <view :class="sex==1?'active':''" data-index="1" @click="checkSex">
                    <!-- <image class="gender-man" src="../../static/img/editInfo/gender-man.png" mode=""></image> -->
                    <view class="gender-man"></view>
                    
                </view>
                <text class="gender-textMan">支付宝</text>
                <view :class="sex==2?'active':''" data-index="2" @click="checkSex">
                    <!-- <image class="gender-women" src="../../static/img/editInfo/gender-women.png" mode=""></image> -->
                    <view class="gender-women"></view>
                    
                </view>
                <text class="gender-textWomen">银行卡</text>
            </view>
            
        </view>
        <view class="submit" @click="togglePopup('center', 'tip')">提交</view>
        <!-- 是否绑定银行卡弹窗 start -->
		<uni-popup :show="show" :popupType ="popupType" :custom="true" :mask-click="false" >
			<view class="uni-tip">
				<!-- <view class="uni-tip-title">提示</view> -->
				<view class="uni-tip-content">您还未绑定银行卡</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="cancelPopup('tip')">取消</view>
					<view class="uni-tip-button insist-skip" @click="cancelPopup('skip')" style="color: #F9B72C;">前往绑定</view>
				</view>
			</view>
		</uni-popup>
		<!-- 是否绑定银行卡弹窗 end -->
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
            sex: '',
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
        // 判断提现方式
        checkSex:function(e){
            this.sex = e.currentTarget.dataset.index;
            console.log(e.currentTarget.dataset.index)
            if(e.currentTarget.dataset.index==1){

            }else{
                this.togglePopup('center', 'tip')
            }
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
                uni.navigateTo({
                    url: "/pages/bindBank/bindBank"
                })
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
        text-align: center;
        left: 516rpx;
        top: 154rpx;
        width:200rpx;
        height:74rpx;
        line-height: 74rpx;
        background:rgba(255,255,255,1);
        border:1px solid rgba(255,255,255,1);
        border-radius:37rpx 0px 0px 37rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        color:rgba(254,133,25,1);
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
    .account-details{
        position: absolute;
        left: 30rpx;
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
    /* 判断提现方式 */
    .gender-man{
        position: absolute;
        left: 397rpx;
        bottom: 36rpx;
        
        /* border:1rpx solid rgba(148,148,148,1); */
        width:28rpx;
        height:28rpx;
		border-radius: 50%;
		overflow: hidden;
        border: 1px solid #949494;
		/* background: url("../../static/img/editInfo/gender-man.png") no-repeat center/cover; */
    }
    .active .gender-man{
        background: url("../../static/img/ID-card/cash.png") no-repeat center/cover;
    }
     .gender-textMan{
        position: absolute;
        left: 444rpx;
        bottom: 35rpx;
        font-size:32rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(102,102,102,1);
    }
    .gender-women{
        position: absolute;
        left: 584rpx;
        bottom: 36rpx;
        width:28rpx;
        height:28rpx;
		border-radius: 50%;
		overflow: hidden;
        border: 1px solid #949494;
		/* background: url("../../static/img/editInfo/gender-women.png") no-repeat center/cover; */
    }
    .active .gender-women{
        background: url("../../static/img/ID-card/cash.png") no-repeat center/cover;
    }
    .gender-textWomen{
        position: absolute;
        left: 631rpx;
        bottom: 35rpx;
        font-size:32rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(102,102,102,1);
    }
    .submit{
        position: absolute;
        text-align: center;
        line-height: 90rpx;
        left: 30rpx;
        top: 710rpx;
        width:690rpx;
        height:90rpx;
        background:rgba(250,186,50,1);
        border-radius:45rpx;
        font-size:32rpx;
        font-family:Source Han Sans CN;
        color:rgba(255,255,255,1);
    }
</style>