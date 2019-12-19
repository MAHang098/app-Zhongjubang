<template>
    <view>
        <view class="banner">
			<image @tap="back" class="back" style="width:25upx;height:37upx;" src="../../static/img/wanghong/back.png" mode=""></image>
            <text class="title">网红爆品</text>
			<image class="banner-image" style="width:750upx;height:292upx;" src="../../static/img/wanghong/banner.png" mode=""></image>
        </view>
        <view class="wang-content">
			<image class="wang-content-image" style="width:200upx;height:190upx;" src="../../static/img/wanghong/product.png" mode=""></image>
            <text class="wang-content-des">百纯家具布艺沙发小户型客沙发小客沙发小厅整装组合...</text>
            <text class="price">￥8460.00</text>
            <text class="wang-content-tit">索菲亚衣柜</text>
            <view class="know">立即了解</view>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
	        return {
            }
        },
        methods: {
            back(){
                uni.navigateBack()
            }
        }
    }
</script>
<style>
    .banner{
        position: relative;
        width: 750upx;
        height: 292upx;
    }
    .back{
        position: absolute;
        left: 28upx;
        top: 72upx;
    }
    .title{
        position: absolute;
        left: 324upx;
        top: 71upx;
        font-size:36upx;
        font-family:PingFang SC;
        color:rgba(255,255,255,1);
    }
    .banner-image{
        position: absolute;
        z-index: -1;
    }
    .wang-content{
        position: relative;
        margin-top: -24upx;
        width:750upx;
        height:238upx;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 9upx 0px rgba(93,93,93,0.08);
        border-radius:22upx 22upx 0px 0px;
    }
    .wang-content-image{
        position: absolute;
        left: 32upx;
        top: 24upx;
    }
    .wang-content-des{
        position: absolute;
        left: 252upx;
        top: 42upx;
        width: 454upx;
        font-size:24upx;
        font-family:PingFang SC;
        color:rgba(51,51,51,1);
    }
    .price{
        position: absolute;
        left: 252upx;
        top: 112upx;
        font-size:28upx;
        font-family:PingFang SC;
        color:rgba(244,51,72,1);
    }
    .wang-content-tit{
        position: absolute;
        left: 252upx;
        top: 166upx;
        font-size:24upx;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
    }
    .know{
        position: absolute;
        left: 596upx;
        top: 150upx;
        width:124upx;
        height:54upx;
        border:1px solid rgba(249,183,44,1);
        border-radius:27upx;
        font-size:24upx;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(249,183,44,1);
        line-height:54upx;
        text-align: center;
    }
</style>