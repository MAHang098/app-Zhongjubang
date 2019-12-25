<template>
    <view>
        <view class="info">
            请输入银行卡信息
        </view>
        <view class="name">
            <text class="account-details">真实姓名</text>
            <input class="name-input" placeholder="请输入姓名" type="text" @input = "name" />
        </view>
        <view class="name">
            <text class="account-details">银行卡号</text>
            <input class="name-input" placeholder="请输入卡号" type="text" @input = "num" />
        </view>
        <view class="name">
            <text class="account-details">开户行</text>
            <input class="name-input" placeholder="请输入开户行" type="text" @input = "bank" />
        </view>
        <view class="confirm" @tap="confirm">确定</view>
    </view>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            money: 0,
            popupType: '',
            sex: '',
            name1: '',
            num1: '',
            bank1: '',
            length: '',
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
				if(res.data.code==421){
					uni.navigateTo({
						url: '/pages/loginPhone/loginPhone'
					})
				}
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
        name(e) {
            this.name1 = e.detail.value
        },
        num(e) {
            this.num1 = e.detail.value
            this.length = e.detail.value.length
        },
        bank(e) {
            this.bank1 = e.detail.value
        },
        confirm(){
            if (this.length != 16) {
                uni.showToast({
                    icon: 'none',
                    title: '请输入正确银行卡号'
                });
                return;
            }
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
				url: url + "controller/usercontroller/adduserbank",
				data: {
					bank: self.bank1,
					bankCardNum: self.num1,
					openBankName: self.name1,
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
                        uni.showToast({
                            icon: 'success',
                            title: '绑定成功',
                            duration: 2000
                        });
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
    .info{
        width: 750rpx;
        height: 45px;
        line-height: 45px;
        padding-left: 30rpx;
        background:rgba(245,245,245,1);
        font-size:26rpx;
        font-family:PingFang SC;
        color:rgba(33,33,33,1);
        opacity:0.6;
        box-sizing: border-box;
    }
    .name{
        position: relative;
        width: 750rpx;
        height: 114rpx;
        border-bottom: 1px solid rgba(224,224,224,1);
    }
    .account-details{
        position: absolute;
        left: 30rpx;
        top: 45rpx;
        font-size:32rpx;
        font-family:PingFang SC;
        color:rgba(51,51,51,1);
    }
    .name-input{
        position: absolute;
        left: 238rpx;
        top: 19px;
        width: 400rpx;
        height: 60rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        color:rgba(153,153,153,1);
    }
    .confirm{
        position: absolute;
        text-align: center;
        line-height: 90rpx;
        top: 500rpx;
        left: 30rpx;
        width:690rpx;
        height:90rpx;
        background:rgba(250,186,50,1);
        border-radius:45rpx;
        font-size:36rpx;
        font-family:PingFang SC;
        color:rgba(255,255,255,1);
    }
</style>