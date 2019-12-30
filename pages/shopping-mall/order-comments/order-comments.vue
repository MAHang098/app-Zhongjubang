<template>
	<view class="comment-list">
		<view class="comment-detail" v-for="(item, index) in detailData" :key="item.goodsId">
			<view class="product-detail">
				<image :src="item.topImgList[0]" mode=""></image>
				<view class="contnet">
					<text>{{item.goodsName}}</text>
					<view>规格：{{item.specifications}}</view>
				</view>
			</view>
			<view class="input-text">
				<textarea placeholder-style="color:#999" placeholder="请留下你的评论吧？" maxlength="300" @input="descInput($event, item, index)" @blur="blur" @focus="focus($event, index)"/>
				<view class="num" v-if="showRemnant && currentRement == index">{{item.remnants ? item.remnants: 0}}/300</view>
			</view>
		</view>
		
		<view id="publish"><view @click="clickMe">发布</view></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				remnant: [],
				showRemnant: false,
				token: '',
				detailData: [],
				currentRement: -1,
				commentInput: '',
				data: [],
			}
		},
		onLoad(option) {
			uni.getStorage({
				key:"token",
				success:((res) => {
					this.token = res.data;
				})
			});
			this.init(option.num)
		},
		methods: {
			clickMe() {
				console.log(this.detailData)
			},
			init(num) {
				uni.request({
					url: this.url + "controller/shopcontroller/getuserorderdetail",
					data: {orderNum: num},
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						if(res.data.code==200){
							let data = res.data.data[0].orderList;
							this.detailData = data;
						}
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
					})
				})
			},
			descInput(e, item, index) {
				
				if(typeof item.checked =='undefined'){
					this.$set(item,"value", e.detail.value);
					this.$set(item,"remnants", e.detail.value.length);
				}
			},
			focus(e,index) {
				this.currentRement = index;
				this.showRemnant = true;
			},
			blur() {
				this.showRemnant = false;
			}
		}
	}
</script>

<style>
	page, .comment-list {
		background: #F9F9F9;
		width: 100%;
		height: auto;
		margin-top: 3px;
	}
	.comment-list {
		margin-bottom: 150rpx !important;
	}
	.comment-detail {
		width: 100%;
		height: 346px;
		background: #FFFFFF;
		margin-bottom: 10px;
	}
	.product-detail {
		box-sizing: border-box;
		padding: 36rpx 30rpx;
		display: flex;
	}
	.product-detail image {
		width: 120rpx;
		height: 120rpx;
		display: block;
		margin-right: 10px;
	}
	.product-detail .contnet {
		width: 80%;
		font-size:13px;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	.product-detail .contnet text {
		display: block;
		margin: 4px 0;
		height: 34px;
	}
	.product-detail view {
		font-size:12px;
		font-family:PingFang SC;
		color:rgba(153,153,153,1);
	}
	.input-text {
		position: relative;
	}
	.input-text textarea {
		width: 100%;
		border-top: 1px solid #E2E2E2;
		box-sizing: border-box;
		padding: 15px;
		font-size: 13px;
		height: 500rpx;
	}
	.input-text .num {
		color: #999;
		font-size: 13px;
		position: absolute;
		right: 3%;
		bottom: 3%;
	}
	#publish {
		height: 140rpx;
		position: fixed;
		z-index: 1;
		bottom: 0;
		width: 100%;
		box-sizing: border-box;
		padding: 12px 15px;
		background: #fff;
	}
	#publish view {
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		background: #F9B72D;
		color: #fff;
		font-size: 16px;
		border-radius: 60rpx;
	}
</style>
