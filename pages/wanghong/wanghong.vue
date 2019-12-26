<template>
    <view>
        <view class="banner">
			<image @tap="back" class="back" style="width:25upx;height:37upx;" src="http://www.zhongjubang.com/api/upload/static/img/wanghong/back.png" mode=""></image>
            <text class="title">网红爆品</text>
			<image class="banner-image" style="width:750upx;height:292upx;" src="http://www.zhongjubang.com/api/upload/static/img/wanghong/banner.png" mode=""></image>
        </view>
		<view class="wang-content-wrap">
			<view class="wang-content" v-for="(item, index) in goodsList" :key="index" @tap="goDetails(item.id)">
				<image class="wang-content-image" style="width:200upx;height:190upx;" :src="item.top_img_list[0]" mode=""></image>
			    <text class="wang-content-des">{{item.goods_name}}</text>
			    <text class="price">￥{{item.goods_price}}</text>
			    <text class="wang-content-tit">索菲亚衣柜</text>
			    <view class="know">立即了解</view>
			</view>
		</view>
        
    </view>
</template>
<script>
    export default {
        data() {
	        return {
				goodsList: []
            }
        },
		onShow(){
			this.init()
		},
        methods: {
			goDetails(id){
				uni.navigateTo({
					url: '/pages/shopping-mall/detail/detail?id='+id
				})
			},
            back(){
                uni.navigateBack()
            },
			init(){
				let self = this
				let token
				uni.getStorage({
					key:"token",
					success: function (res) {
					token = res.data;
					}
				})
				uni.request({
					url: this.url + "controller/shopcontroller/getAppInternetCelebrityGoods",
					data: {
						pageIndex: 1,
						pageSize: 1000
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': token
					},
					success: function (res){
						// console.log(res.data.code)
						if(res.data.code==200){
							console.log(res)
							console.log(res.data.data.dataList[0].top_img_list[0])
							console.log(res.data.data.dataList[0].goods_name)
							self.goodsList = res.data.data.dataList
							
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
		background: rgba(245,245,245,1);
	}
    .banner{
        position: relative;
        width: 750upx;
        height: 292upx;
    }
    .back{
        position: absolute;
        left: 28upx;
        top: 72upx;
		z-index: 10;
    }
    .title{
        position: absolute;
        left: 324upx;
        top: 71upx;
        font-size:36upx;
        font-family:PingFang SC;
        color:rgba(255,255,255,1);
		z-index: 10;
    }
    .banner-image{
        position: absolute;
        z-index: 5;
    }
	
    .wang-content{
        position: relative;
		z-index: 100;
        margin-top: 10upx;
        width:750upx;
        height:238upx;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 9upx 0px rgba(93,93,93,0.08);
    }
	.wang-content:nth-child(1){
		margin-top: -24upx;
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