<template>
	<view class="contant">
		<view class="top">
			<image @tap="back" class="back" style="width:26upx;height:35upx;" src="http://www.zhongjubang.com/api/upload/static/img/category/back.png" />
			<text class="title">{{goodsStyle}}</text>
			<image class="search" style="width:42upx;height:42upx;" src="http://www.zhongjubang.com/api/upload/static/img/category/search.png" />
		</view>
		<!-- 价格切换 -->
		<image class="init" v-if="showPrice==1" style="width:24upx;height:24upx;" src="http://www.zhongjubang.com/api/upload/static/img/category/init.png" />
		<image class="up" v-if="showPrice==3" style="width:22upx;height:14upx;" src="http://www.zhongjubang.com/api/upload/static/img/category/up.png" />
		<image class="down" v-if="showPrice==2" style="width:22upx;height:14upx;" src="http://www.zhongjubang.com/api/upload/static/img/category/down.png" />
		<view class="G-list_content">
			<view v-for="(item, index) in tabType" :class="index == current ? 'active' : '' " @click="changeProduct(index)" :key="index">
				{{item}}
				<text v-bind:class="index == current ? 'active-status' : '' "></text>
			</view>
		</view>
		<view class="category-content" v-for="(item, index) in goodsList" :key="index" @tap="goDetails(item.goodsId)">
			<view class="category-content-box">
				<image class="category-content-image" style="width:345upx;height:345upx;" :src="item.topImgList[1]" />
				<view class="category-content-des">{{item.goodsName}}</view>
				<text class="category-content-price">￥{{item.goodsPrice}}</text>
				<image class="category-content-car" style="width:38upx;height:35upx;" src="http://www.zhongjubang.com/api/upload/static/img/category/car.png" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				tabType: ['综合', '价格', '销量', '评分'],
				current: 0,
				num: 1,
				goodsList: [],
				priceUp: true,
				type: '',
				goodsStyle: '',
				showPrice: 1,
				style: 1,
				
			}
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 30) {
				return value.slice(0,30) + '...'
			  }
			  return value
			}
		},
		onLoad(options) {
			if(options.type){
				this.type = options.type
				this.style = options.style
				this.init(1)
			}
		},
		
		onShow() {
			// this.changeProduct(0)
		},
		methods: {
			goDetails(id){
				uni.navigateTo({
					url: '/pages/shopping-mall/detail/detail?id='+id
				})
			},
			// 导航栏切换
			changeProduct(index) {
				let self = this
				this.current = index;
				this.num = index + 1;
				var test = index + 1;
				if(test==2){
					if(self.priceUp){
						self.num = 2;
						self.showPrice = 2;
						self.priceUp = false;
					}else{
						self.num = 3;
						self.showPrice = 3;
						self.priceUp = true;
					}
				}
				if(test==3){
					this.num = 4
				}if(test==4){
					this.num = 5
				}
				this.init(this.num)
				console.log(this.num)
			},
			init(num){
				let self = this
				uni.request({
					url: this.url + 'controller/shopcontroller/getgoodslistbystyle',
					data: {
						state:num,
						goodsStyleId: self.style,
						goodsTypeId: self.type,
						pageIndex: 1,
						pageSize: 1000
					},
					method:"POST",
					header : {'content-type':'application/x-www-form-urlencoded','port':'app','token':''},
					success: function (res){
						if(res.data.code=="200"){
							console.log(res)
							console.log(res.data.data.dataList)
							console.log(res.data.data.dataList[0].goodsStyle)
							self.goodsStyle = res.data.data.dataList[0].goodsStyle
							for(var i = 0; i < res.data.data.dataList.length;i++){
								res.data.data.dataList[i].topImgList = JSON.parse(res.data.data.dataList[i].topImgList)
							}
							self.goodsList = res.data.data.dataList
						}
					}
				})
			},
			back(){
				uni.navigateBack()
			}
		},
	}
</script>

<style>
	.top{
		position: relative;
		height: 128upx;
		border-bottom: 1px solid rgba(226,226,226,1);
	}
	.back{
		position: absolute;
		left: 25upx;
		bottom: 28upx;
	}
	.title{
		position: absolute;
		left: 324upx;
		top: 67upx;
		font-size:36upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	.search{
		position: absolute;
		left: 682upx;
		top: 63upx;
	}
	/* 导航栏分类 */
	.G-list_content {
	    box-sizing: border-box;
		height: 80upx;
		background: #FFFFFF;
		padding-left: 90upx;
		border-bottom: 1px solid rgba(226,226,226,1);
	}
	.G-list_content view {
		width: 25%;
		height: 34rpx;
		font-size:28upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height: 80upx;
		display: inline-block;
		/* border-right: 1rpx solid #E2E2E2; */
	}
	.G-list_content view:last-child {
		border: none;
	}
	.active {
		color: #F9B72C !important;
		font-weight: bold;
		
	}
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
	.init{
		position: fixed;
		left: 316upx;
		top: 158upx;
	}
	.up{
		position: fixed;
		left: 316upx;
		top: 158upx;
		z-index: 10;
	}
	.down{
		position: fixed;
		left: 316upx;
		top: 170upx;
		z-index: 10;
	}
</style>


