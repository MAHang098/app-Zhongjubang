<template>
    <view>
        <view class="wrap">
        	<image class="paySuccess" style="width: 214upx;height: 202upx;" src="../../static/img/paySuccess/paySuccess.png" mode=""></image>
			<text class="pay-notice">订单支付成功</text>
        </view>
		<view class="like">
			<view class="horizen"></view>
			<view class="horizen"></view>
			<image class="like-image" style="width: 32upx;height: 32upx;" src="../../static/img/paySuccess/like.png" mode=""></image>
			<view class="like-text">猜你喜欢</view>
		</view>
		<view class="category-content" v-for="(item, index) in goodsList" :key="index" @tap="goDetails(item.shop_id)">
			<view class="category-content-box">
				<image class="category-content-image" style="width:345upx;height:345upx;" :src="item.top_img_list[0]" />
				<view class="category-content-des">{{item.goods_name}}</view>
				<text class="category-content-price">￥{{item.goods_price}}</text>
				<image class="category-content-car" style="width:38upx;height:35upx;" src="../../static/img/category/car.png" />
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
			init(){
				let self = this
				uni.request({
					url: this.url + 'controller/shopcontroller/getAppGoodsRecommendGoods',
					data: {
						pageIndex: 1,
						pageSize: 1000
					},
					method:"POST",
					header : {'content-type':'application/x-www-form-urlencoded','port':'app','token':''},
					success: function (res){
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						if(res.data.code=="200"){
							console.log(res)
							console.log(res.data.data.dataList)
							self.goodsList = res.data.data.dataList
						}
					}
				})
			},
		}
	}
</script>
<style>
    .wrap{
		position: relative;
		border-top: 1px solid rgba(226,226,226,1);
		width:750upx;
		height:390upx;
		background:rgba(255,255,255,1);
		box-shadow:7upx 0px 5upx 0px rgba(202,202,202,0.31);
	}
	.paySuccess{
		position: absolute;
		left: 269upx;
		top: 66upx;
	}
	.pay-notice{
		position: absolute;
		left: 284upx;
		top: 305upx;
		font-size:30upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	.like{
		position: relative;
		width: 750upx;
		height: 106upx;
		background:rgba(249,249,249,1);
	}
	.horizen{
		position: absolute;
		left: 185upx;
		top: 55upx;
		width:92upx;
		height:1px;
		background:rgba(153,153,153,1);
	}
	.horizen:nth-child(2){
		left: 474upx;
	}
	.like-image{
		position: absolute;
		left: 291upx;
		top: 42upx;
	}
	.like-text{
		position: absolute;
		left: 335upx;
		top: 36upx;
		font-size:32upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	/* 推荐内容 */
	.category-content{
		width: 750upx;
	}
	.category-content-box{
		float: left;
		margin-left: 20upx;
		margin-top: 18upx;
		position: relative;
		width:345upx;
		height:470upx;
		background:rgba(255,255,255,1);
		border:1px solid rgba(231,231,231,1);
		box-shadow:0px 0px 7upx 0px rgba(136,136,136,0.2);
		border-radius:6upx;
	}
	.category-content-box:nth-child(even){
		margin-left: 16upx;
	}
	.category-content-image{
		position: absolute;
		top: 0;
		left: 0;
	}
	.category-content-des{
		position: absolute;
		top: 351upx;
		left: 16upx;
		width:314upx;
		height:57upx;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.category-content-price{
		position: absolute;
		top: 424upx;
		left: 16upx;
		font-size:30upx;
		font-family:PingFang SC;
		color:rgba(244,51,72,1);
	}
	.category-content-car{
		position: absolute;
		top: 417upx;
		left: 292upx;
	}
</style>