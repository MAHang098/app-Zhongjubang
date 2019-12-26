<template>
    <view>
        <view class="horizen"></view>
        <view class="wrap">
            <image class="wrap-image" style="width:90rpx;height:90rpx;" src=".http://www.zhongjubang.com/api/upload/static/img/wallet/money.png" />
            <text class="cash">余额提现到银行卡</text>
            <text class="data">2019-09-12  09:31:30</text>
            <text class="num">-100.00</text>
            <view class="horizen1"></view>
        </view>
        <view class="wrap">
            <image class="wrap-image" style="width:90rpx;height:90rpx;" src=".http://www.zhongjubang.com/api/upload/static/img/wallet/money.png" />
            <text class="cash">余额提现到银行卡</text>
            <text class="data">2019-09-12  09:31:30</text>
            <text class="num">-100.00</text>
            <view class="horizen1"></view>
        </view>
        
    </view>
</template>
<script>
export default {
    data() {
        return {
            show: false,
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
            url: url + "/controller/usercontroller/getappuserwalletlog",
            data: {},
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
                    console.log(res.data.data)
                }else{
                    console.log("请求异常")
                }
            }
        })
    },
}
</script>
<style>

    .wrap{
        position: relative;
        height: 158rpx;
        width: 750rpx;
    }
    .wrap-image{
        position: absolute;
        left: 30rpx;
        top: 30rpx;
        height: 90rpx;
        width: 90rpx;
    }
    .cash{
        position: absolute;
        left: 146rpx;
        top: 43rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        color:rgba(51,51,51,1);
    }
    .data{
        position: absolute;
        left: 147rpx;
        top: 96rpx;
        font-size:26rpx;
        font-family:PingFang SC;
        color:rgba(153,153,153,1);
    }
    .num{
        position: absolute;
        left: 584rpx;
        top: 57rpx;
        font-size:36rpx;
        font-family:PingFang SC;
        color:rgba(51,51,51,1);
    }
    .horizen{
        height: 1px;
        width: 750rpx;
        background:rgba(226,226,226,1);
    }
    .horizen1{
        position: absolute;
        left: 146rpx;
        top: 157rpx;
        width: 597rpx;
        height: 1px;
        background:rgba(235,235,235,1);
    }
</style>