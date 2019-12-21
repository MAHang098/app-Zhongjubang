<template>
    <view>
        <view class="navigate">
            <text class="navigate-image">
				<image style="width: 15upx;height: 31upx;" src="../../static/img/juquanVideo/back.png" />
			</text>
            <text class="car">购物车({{length}})</text>
            <text class="edit">编辑</text>
        </view>
		<!-- <image class="content-shop-image" style="width:429upx;height:266upx;" src="../../static/img/shop-car.png" mode=""></image> -->
		<view class="car-content" v-for="(item, index) in goodsList" :key="index" >
			<!-- <view :class="sex==1?'active':''" data-index="1" @click="checkSex"> -->
			    <!-- <view class="car-all-picker"></view> -->
			<!-- </view> -->
			<view class="">
				<view class="car-all-picker"></view>
				<image  class="car-all-icon" style="width: 29upx;height: 28upx;" :src="item.shopLogo" />
				<text class="car-title">{{item.shopName}} ></text>
			</view>
			
			<view v-if="item.goodsTypeId==1" class="car-all-box">
				
				<view class="car-all-command"></view>
				<view class="car-all-image">
					<image style="width: 150upx;height: 150upx;" :src="item.topImgList[0]" />
				</view>
				<view class="car-all-des">{{item.goodsName}}</view>
				<text class="car-all-name">全部套装</text>
				<text class="car-all-price">￥{{item.goodsPrice}}</text>
				<text class="car-all-count">x{{item.quantity}}</text>
			</view>
			
			
		</view>
		<view class="footer">
			<view class="picker"></view>
			<text class="all-pick">全选</text>
			<text class="total">合计:</text>
			<text class="price">￥0</text>
			<view class="balance">结算(0）</view>
		</view>
    </view>
</template>
<script>
	export default {
		data() {
			return {
				sex: 1,
                Tokens: '',
				goodsList: [],
				length: ''
			}
		},
		onShow(){
			this.init()
		},
		methods: {
			init(){
				let token
				let self = this
				uni.getStorage({
					key:"token",
					success: function (res) {
					token = res.data;
					self.Tokens = res.data;
					}
				})
				const url = this.url
				uni.request({
					url: url + "controller/shopcontroller/getshoppingcartlist",
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
							if(res.data.data.dataList.length==0){
								uni.showToast({
								    icon: 'none',
								    title: '请加购商品',
									duration: 3000
								});
							}
							self.goodsList = res.data.data.dataList
							self.length = res.data.data.dataList.length
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
		background:rgba(249,249,249,1);
	}
    .navigate{
        position: relative;
        width: 750upx;
        height: 128upx;
		background:#fff;
    }
    .navigate-image{
        position: absolute;
        left: 32upx;
        top: 34px;
        width:15upx;
        height:31upx;
    }
    .car{
        position: absolute;
        left: 300upx;
        top: 68upx;
        font-size:36upx;
        font-family:PingFang SC;
        color:rgba(51,51,51,1);
    }
    .edit{
        position: absolute;
        left: 658upx;
        top: 68upx;
        font-size:32upx;
        font-family:PingFang SC;
        color:rgba(249,183,44,1);
    }
	.content-shop-image{
		position: absolute;
		left: 167upx;
		top: 535upx;
		
	}
	.footer{
		position: fixed;
		width:750upx;
		height:105upx;
		border-top: 1px solid rgba(226,226,226,1);
		background:rgba(249,249,249,1);
		bottom: 0;
		
	}
	.picker{
		float: left;
		margin-left: 30upx;
		margin-top: 35upx;
		width:28upx;
		height:28upx;
		background:rgba(255,101,1,0);
		border:1px solid rgba(153, 153, 153, 1);
		border-radius:50%;
	}
	.all-pick{
		float: left;
		margin-left: 17upx;
		margin-top: 38upx;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.total{
		float: left;
		margin-left: 199upx;
		margin-top: 36upx;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(102,102,102,1);
	}
	.price{
		float: left;
		margin-left: 4upx;
		margin-top: 36upx;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:#F43348;
	}
	.balance{
		float: left;
		margin-left: 13px;
		width:310upx;
		height:105upx;
		background:rgba(249,183,44,1);
		font-size:36upx;
		font-family:PingFang SC;
		color:rgba(255,255,255,1);
		line-height: 105upx;
		text-align: center;
	}
	.car-content{
		position: relative;
		left: 20upx;
		top: 20upx;
		width:710upx;
		height:282upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 1px 5upx 0px rgba(202,202,202,0.31);
		border-radius:10upx;
	}
	.car-all-picker{
		position: absolute;
		left: 21upx;
		top: 29upx;
		width:28upx;
		height:28upx;
		background:rgba(255,101,1,0);
		border:1px solid rgba(153, 153, 153, 1);
		border-radius:50%;
	}
	.active .car-all-picker{
		border: 1px solid transparent;
		background: url("../../static/img/shop-command/pick.png") no-repeat center/cover;
	}
	.car-all-icon{
		position: absolute;
		left: 65upx;
		top: 30upx;
		width:29upx;
		height:28upx;
		background: #ff0;
	}
	.car-title{
		position: absolute;
		left: 102upx;
		top: 14px;
		font-size:28upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	.car-all-command{
		position: absolute;
		left: 21upx;
		top: 157upx;
		width:28upx;
		height:28upx;
		background:rgba(255,101,1,0);
		border:1px solid rgba(153, 153, 153, 1);
		border-radius:50%;
	}
	.car-all-image{
		position: absolute;
		left: 65upx;
		top: 99upx;
		width:150upx;
		height:150upx;
		background:#f0f;
	}
	.car-all-des{
		position: absolute;
		left: 234upx;
		top: 99upx;
		width:460upx;
		height:60upx;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:32upx;
	}
	.car-all-name{
		position: absolute;
		left: 259upx;
		top: 177upx;
		font-size:24upx;
		font-family:PingFang SC;
		color:rgba(153,153,153,1);
	}
	.car-all-price{
		position: absolute;
		left: 234upx;
		top: 228upx;
		font-size:28upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(244,51,72,1);
	}
	.car-all-count{
		position: absolute;
		left: 652upx;
		top: 228upx;
		font-size:26upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
</style>