<template>
    <view>
        <view class="horizen"></view>
        <image class="ID-card" style="width:189rpx;height:189rpx;" src="../../static/img/ID-card/ID-card.png" />
        <text class="notice">认证提示</text>
        <text class="notice1">实名认证将您的资产与个人绑定，保障账户资金安全</text>
        <view class="name">
            姓名
            <input class="name-input" placeholder="请输入真实姓名" type="text" @input = "name" />
        </view>
        <view class="horizen1"></view>
        <view class="card-num">
            身份证号码
            <input class="card-num-input" placeholder="请输入身份证号" type="text" @input = "cardNum" />
        </view>
        <view class="horizen2"></view>
        <!-- <view class="submit" @tap="send">提交</view> -->
        <view class="submit" @click="togglePopup('center', 'tip')">提交</view>
        <!-- 认证成功标签 start -->
		<uni-popup :show="show" :popupType ="popupType" :custom="true" :mask-click="false" >
			<view class="uni-tip">
                <image style="width:436rpx;height:393rpx;" src="../../static/img/ID-card/success.png" />
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
            name1: '',
            cardNum1: '',
            length: '',
            popupType: '',
        }
    },
    onShow(){
        
    },
    methods: {
        name(e) {
            this.name1 = e.detail.value
        },
        cardNum(e) {
            this.cardNum1 = e.detail.value
            this.length = e.detail.value.length
        },
        send(){
            if (this.length != 18) {
                uni.showToast({
                    icon: 'none',
                    title: '请输入正确身份证号'
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
				url: url + "controller/usercontroller/addrealname",
				data: {
					idNum: self.cardNum1,
					realName: self.name1,
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
                        self.show = true
                        setTimeout(function() {
                            self.show = false
                        },1000)
					}else{
						console.log("请求异常")
					}
				}
			})
        },
        togglePopup(type, open) {
            let that = this
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
                that.send()
                
            } else {
                this.$refs[open].open()
            }
            
        },
    }
    
}
</script>

<style>
    .horizen{
        width:750rpx;
        height:1px;
        background:rgba(226,226,226,1);
    }
    .ID-card{
        position: absolute;
        left: 281rpx;
        top: 50rpx;
        width:189rpx;
        height:189rpx;
    }
    .notice{
        position: absolute;
        left: 316rpx;
        top: 250rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        color:rgba(59,66,72,1);
    }
    .notice1{
        position: absolute;
        left: 99rpx;
        top: 300rpx;
        font-size:24rpx;
        font-family:PingFang SC;
        color:rgba(137,137,139,1);
    }
    .name{
        position: relative;
        left: 33rpx;
        top: 450rpx;
        font-size:28rpx;
        font-family:PingFang SC;
        color:rgba(51,51,51,1);
    }
    .name-input{
        position: absolute;
        left: 123px;
        top: -6px;
        width: 400rpx;
        height: 60rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        color:rgba(153,153,153,1);
    }
    .horizen1{
        position: absolute;
        top: 500rpx;
        width:750rpx;
        height:1px;
        background:rgba(226,226,226,1);
    }
    .card-num{
        position: relative;
        left: 33rpx;
        top: 490rpx;
        font-size:28rpx;
        font-family:PingFang SC;
        color:rgba(51,51,51,1);
    }
    .card-num-input{
        position: absolute;
        left: 123px;
        top: -6px;
        width: 400rpx;
        height: 60rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        color:rgba(153,153,153,1);
    }
    .horizen2{
        position: absolute;
        top: 590rpx;
        width:750rpx;
        height:1px;
        background:rgba(226,226,226,1);
    }
    .submit{
        position: absolute;
        text-align: center;
        line-height: 90rpx;
        left: 30rpx;
        top: 670rpx;
        width:690rpx;
        height:90rpx;
        background:rgba(250,186,50,1);
        border-radius:45rpx;
        font-size:32rpx;
        font-family:Source Han Sans CN;
        color:rgba(255,255,255,1);
    }
    .uni-tip{
        width:436rpx;
        height:393rpx;
    }
</style>