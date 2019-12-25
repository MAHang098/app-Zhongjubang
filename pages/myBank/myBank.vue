<template>
    <view>
        <view class="addBank" @tap="goBindbank">
            <image class="addBank-image" style="width:46rpx;height:31rpx;" src="../../static/img/wallet/bank-bind.png" />
            <text class="addBank-text">添加银行卡</text>
            <image class="addBank-image2" style="width:15rpx;height:28rpx;" src="../../static/img/wallet/go.png" />
        </view>
        <view class="bank" v-for="(row, index) in dataList" :key="index">
            <image class="bank-image" style="width:690rpx;height:208rpx;" src="../../static/img/wallet/bg1.png" />
            <image class="business" style="width:88rpx;height:88rpx;" src="../../static/img/wallet/gongshang.png" />
            <text class="bank-name">{{row.bank}}</text>
            <text class="bank-num">{{row.bankCardNum}}</text>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                show: false,
                bankCardNum: '',
                bank: '',
                dataList: []
            }
        },
        onShow(){
            // var str = '2016060520103600466';
            // var str=str.replace(/\s/g,'').replace(/(.{4})/g,"$1 ");
            // console.log(str);
            // return
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
                url: url + "/controller/usercontroller/getUserBankList",
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
                        console.log(res.data.data.dataList.length)
                        // for(var i = 0;i < res.data.data.dataList.length;i++){
                        //     res.data.data.dataList[i].bankCardNum=res.data.data.dataList[i].bankCardNum.replace(/\s/g,'').replace(/(.{4})/g,"$1 ");
                        // }
                        console.log(res.data.data.dataList)
                        self.dataList = res.data.data.dataList
                    }else{
                        console.log("请求异常")
                    }
                }
            })
        },
        methods: {
            goBindbank(){
                uni.navigateTo({
                    url: "/pages/bindBank/bindBank"
                })
            },
            kongge(){
                str=str.replace(/\s/g,'').replace(/(.{4})/g,"$1 ");
            }
        }
    }
</script>
<style>
    .addBank{
        position: relative;
        width: 750rpx;
        height: 114rpx;
        border-bottom: 1px solid rgba(224,224,224,1);
        border-top: 1px solid rgba(224,224,224,1);
    }
    .addBank-image{
        position: absolute;
        left: 30rpx;
        top: 43rpx;
    }
    .addBank-image2{
        position: absolute;
        left: 705rpx;
        top: 43rpx;
    }
    .addBank-text{
        position: absolute;
        left: 100rpx;
        line-height: 114rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        color:rgba(102,102,102,1);
    }
    .bank{
        position: relative;
        left: 30rpx;
        margin-top: 50rpx;
        width:690rpx;
        height:208rpx;
    }
    .business{
        position: absolute;
        left: 126rpx;
        top: 37rpx;
        width:88rpx;
        height:88rpx;
    }
    .bank-name{
        position: absolute;
        left: 260rpx;
        top: 32rpx;
        font-size:32rpx;
        font-family:PingFang SC;
        color:rgba(50,50,50,1);
    }
    .bank-type{
        position: absolute;
        left: 260rpx;
        top: 89rpx;
        font-size:24rpx;
        font-family:PingFang SC;
        color:rgba(120,120,120,1);
    }
    .bank-num{
        position: absolute;
        left: 136rpx;
        top: 142rpx;
        font-size:40rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(50,50,50,1);
    }
</style>