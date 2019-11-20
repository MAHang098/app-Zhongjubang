<template>
	<view class="wrap">
        <view class="save" @tap="save">保存</view>
        <!-- 点击更换头像 -->
        <view class="change-image">
            <view class="avater">
                <image src="../../static/img/editInfo/avater.png" mode=""></image>
            </view>
            <text class="click-change">点击更换头像</text>
        </view>

        <!-- 个人资料 -->
        <view class="nick-name">
            <view class="nick-name-text">昵称</view>
            <input class="nick-name-text2" type="text" v-model="nickName" placeholder="晴天小猪" />
            <view class="nick-name-text3">4/10</view>
        </view>
        <view class="gender">
            <view class="gender-text">性别</view>
            <image class="gender-man" src="../../static/img/editInfo/gender-man.png" mode=""></image>
            <text class="gender-textMan">男</text>
            <image class="gender-women" src="../../static/img/editInfo/gender-women.png" mode=""></image>
            <text class="gender-textWomen">女</text>
        </view>
        <view class="gender">
            <view class="gender-text">个性签名</view>
            <view class="signature-infini">未填写</view>
            <view class="nick-name-text3">0/30</view>
        </view>
        <view class="gender">
            <view class="gender-text">我的生日</view>
            <view class="born-date">1999-02-09</view>
        </view>
        <view class="gender">
            <view class="gender-text">个人封面</view>
        </view>
        <view class="gender">
            <view class="address">收货地址</view>
        </view>
	</view>


</template>

<script>
	export default {
	    
	    data() {
	        return {
                nickName: ''
	        }
	    },
	    methods: {
            save(){
                var token;
                uni.getStorage({
				    key:"token",
				    success: function (res) {
						token = res.data;
					}
				})
                console.log(this.nickName)
            }
		}
	}
</script>

<style>
    .wrap{
        height: 100%;
        background-color: #F9F9F9;
    }
    .save{
        position: absolute;
        right: 32rpx;
        font-size:28rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(249,183,44,1);
        z-index: 99;
    }
    .change-image{
        position: relative;
        width:750rpx;
        height:227rpx;
        background:rgba(255,255,255,1);
        box-shadow:0px 1rpx 5rpx 0px rgba(202,202,202,0.31);
    }
    .avater{
        position: absolute;
        left: 292rpx;
        top: 20rpx;
        width:162rpx;
        height:155rpx;
        background:rgba(255,255,255,1);
        box-shadow:0px 1rpx 5rpx 0px rgba(202,202,202,0.31);
    }
    .avater image{
        width:162rpx;
        height:155rpx;
    }
    .click-change{
        position: absolute;
        left: 292rpx;
        bottom: 11rpx;
        font-size:26rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(153,153,153,1);
    }
    .nick-name{
        position: relative;
        margin-top: 20rpx;
        width:750rpx;
        height:100rpx;
        background:rgba(255,255,255,1);
        box-shadow:0px 1rpx 5rpx 0px rgba(202,202,202,0.31);
    }
    .nick-name-text{
        position: absolute;
        left: 30rpx;
        bottom: 34rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(102,102,102,1);
    }
    .nick-name-text2{
        position: absolute;
        left: 259rpx;
        bottom: 34rpx;
        font-size:32rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .nick-name-text3{
        position: absolute;
        right: 32rpx;
        bottom: 34rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(102,102,102,1);
    }
    .gender{
        position: relative;
        margin-top: 4rpx;
        width:750rpx;
        height:100rpx;
        background:rgba(255,255,255,1);
        box-shadow:0px 1px 0px 0px rgba(226,226,226,1);
    }
    .gender-text{
        position: absolute;
        left: 30rpx;
        bottom: 36rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(102,102,102,1);
    }
    .gender-man{
        position: absolute;
        left: 259rpx;
        bottom: 36rpx;
        width:28rpx;
        height:28rpx;
        border:1rpx solid rgba(148,148,148,1);
        border-radius:50%;
    }
    
    .gender-textMan{
        position: absolute;
        left: 298rpx;
        bottom: 35rpx;
        font-size:32rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .gender-women{
        position: absolute;
        left: 354rpx;
        bottom: 36rpx;
        width:28rpx;
        height:28rpx;
        border:1rpx solid rgba(148,148,148,1);
        border-radius:50%;
    }
    .gender-textWomen{
        position: absolute;
        right: 327rpx;
        bottom: 35rpx;
        font-size:32rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .signature-infini{
        position: absolute;
        left: 260rpx;
        bottom: 37rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(102,102,102,1);
    }
    .born-date{
        position: absolute;
        left: 260rpx;
        bottom: 38rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .address{
        position: absolute;
        left: 31rpx;
        bottom: 38rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(249,183,44,1);
    }
</style>
