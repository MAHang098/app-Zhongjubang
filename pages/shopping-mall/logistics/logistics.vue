<template>
	<view>
		<view class="express-type">
			<view class="detail">
				<view class="number">
					<view>运单号：</view>
					<view>125458587458</view>
					<image src="../../../static/img/shopping-mall/order/copy.png" mode="" @click="copyNum('125458587458')"></image>
					<view class="express">中通快递</view>
				</view>
				<view class="product-detai">
					<image src="../../../static/img/G-circle/p1.png" mode=""></image>
					<view>
						<view class="title">索菲亚衣柜索菲亚衣柜索菲亚衣柜索菲亚衣柜索柜 衣柜索菲亚衣柜</view>
						<view class="specs">规格：全部套装</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="example-body uni-steps">
			<view :class="'uni-steps-' + direction" class="uni-steps-items" >
				<view v-for="(item, index) in list0" :key="index" :class="{ 'uni-steps-process': index === active, 'uni-steps-finish': index < active }" class="uni-steps-item">
					<view :style="{ color: index === active ? activeColor : '' }" class="uni-steps-item-title-container">
						<view class="uni-steps-item-title">{{ item.title }}</view>
						<view v-if="item.desc" class="uni-steps-item-desc">{{ item.desc }}</view>
					</view>
					<view class="uni-steps-item-circle-container">
						<view v-if="index !== active" :style="{ backgroundColor: index == active ? activeColor : '' }" class="uni-steps-item-circle"  />
						<uni-icons v-else :color="activeColor" type="checkbox-filled" size="20" />
					</view>
					
					<view v-if=" index !== list2.length - 1"  class="uni-steps-item-line" />
				</view>
			</view>
			<view class="more-express" @click="lookMore" v-show="isShowMore">
				<text>点击查看更多</text>
				<image src="../../../static/img/shopping-mall/order/bottom-arrow.png" mode=""></image>
			</view> 
		</view>
		
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				show: true,
				isShowMore: true,
				direction: 'column',
				active: 0,
				activeColor: '#FABE3F',
				list0: [],
				list1: [],
				list2: [
					{
						title: '交易完成',
						desc: '2018-11-14'
					},
					{
						title: '买家签收',
						desc: '2018-11-13'
					},
					{
						title: '卖家发货',
						desc: '2018-11-12'
					},
					{
						title: '买家下单',
						desc: '2018-11-11'
					}
				]
			}
		},
		onShow() {
			this.init();
		},
		methods: {
			init() {
				let arr = this.list2;
				this.list0 = this.list2.slice(0, 2);
				this.list1 =  this.list2.slice(2, 4);
				
			},
			change() {
				if (this.active < this.list1.length - 1) {
					this.active += 1
				} else {
					this.active = 0
				}
			},
			lookMore() {
				// console.log(this.list2);
				this.list0 = this.list0.concat(this.list1);
				this.isShowMore = false;
			},
			copyNum(val) {
				uni.setClipboardData({
					data:val,
					success() {
						uni.showToast({
							title: '复制成功',
							duration:2000,
							icon:"none"
						})
					}	
				})
			}
		}
	}
</script>

<style scoped>

	.express-type {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		background: #F5F5F5;
	}
	.detail {
		width: 100%;
		height: auto;
		background: #FFFFFF;
		border-radius: 5px;
	}
	.number {
		height: 76rpx;
		line-height: 76rpx;
		box-sizing: border-box;
		/* padding: 28rpx 30rpx 25rpx 30rpx; */
		padding:  0 30rpx;
		border-bottom: 1px solid #E2E2E2;
		overflow: hidden;
	}
	.number view {
		float: left;
		font-size:24rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	.number image {
		width: 19px;
		height: 19px;
		display: block;
		float: left;
		margin-top: 20rpx;
		margin-left: 5px;
	}
	.express {
		float: right !important;
	}
	.product-detai {
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		overflow: hidden;
	}
	.product-detai image {
		width: 125rpx;
		height: 125rpx;
		display: block;
		float: left;
		margin-right: 20rpx;
		border-radius: 3px;
	}
	.product-detai view {
		font-size:22rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		line-height: 40rpx;
	}
	.product-detai .specs {
		color:#999999;
	}
	
	/* 时间轴 start*/
	.example-body {
		padding: 30upx;
		background: #fff
	}
	
	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}
	.more-express {
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.more-express text {
		font-size:24rpx;
		font-family:PingFang SC;
		color:rgba(170,170,170,1);
	}
	.more-express image {
		width: 12px;
		height: 8px;
		display: block;
		margin-left: 12rpx;
	}
	
	/* 物流样式 */
	.uni-steps {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		position: relative
	}
	
	.uni-steps-items {
		position: relative;
		display: flex;
		flex-direction: row;
		margin: 10px;
		box-sizing: border-box;
		overflow: hidden
	}
	
	.uni-steps-items.uni-steps-column {
		margin: 10px 0;
		padding-left: 31px;
		flex-direction: column
	}
	
	.uni-steps-items.uni-steps-column .uni-steps-item:last-child {
		position: relative
	}
	
	.uni-steps-items.uni-steps-column .uni-steps-item:last-child:after {
		height: 0
	}
	
	.uni-steps-items.uni-steps-column .uni-steps-item:last-child .uni-steps-item-title-container {
		text-align: left
	}
	
	.uni-steps-items.uni-steps-column .uni-steps-item:last-child .uni-steps-item-circle-container {
		left: -17px;
		right: auto
	}
	
	.uni-steps-items.uni-steps-column .uni-steps-item-title-container {
		transform: none;
		display: block;
		line-height: 36upx
	}
	
	.uni-steps-items.uni-steps-column .uni-steps-item-title {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden
	}
	
	.uni-steps-items.uni-steps-column .uni-steps-item-desc {
		white-space: normal;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden
	}
	
	.uni-steps-items.uni-steps-column .uni-steps-item-circle-container {
		left: -17px;
		top: -1px;
		bottom: auto;
		padding: 8px 0;
		z-index: 1
	}
	
	.uni-steps-items.uni-steps-column .uni-steps-item-line {
		height: 100%;
		width: 1px;
		left: -13px;
		top: -1px;
		bottom: auto
	}
	
	.uni-steps-items.uni-steps-column .uni-steps-item.uni-steps-process .uni-steps-item-circle-container {
		bottom: auto;
		left: -21px
	}
	
	.uni-steps-item {
		flex: 1;
		position: relative;
		padding-bottom: 36px
	}
	
	.uni-steps-item-title-container {
		text-align: left;
		margin-left: 3px;
		display: inline-block;
		transform: translateX(-50%);
		color: #999
	}
	
	.uni-steps-item-title {
		font-size: 28upx
	}
	
	.uni-steps-item-desc {
		font-size: 24upx
	}
	
	.uni-steps-item:first-child .uni-steps-item-title-container {
		transform: none;
		margin-left: 5px !important;
	}
	
	.uni-steps-item:last-child {
		position: absolute;
		right: 0
	}
	
	.uni-steps-item:last-child .uni-steps-item-title-container {
		transform: none;
		text-align: right
	}
	
	.uni-steps-item:last-child .uni-steps-item-circle-container {
		left: auto;
		right: -8px
	}
	
	.uni-steps-item-circle-container {
		position: absolute;
		bottom: 8px;
		left: -8px;
		padding: 0 8px;
		background-color: #fff;
		z-index: 1
	}
	
	.uni-steps-item-circle {
		width: 10px;
		height: 10px;
		background-color: #999;
		border-radius: 50%
	}
	
	.uni-steps-item-line {
		background-color: #ebedf0;
		position: absolute;
		bottom: 10px;
		left: 0;
		width: 100%;
		height: 1px
	}
	
	.uni-steps-item.uni-steps-finish .uni-steps-item-title-container {
		color: #333
	}
	
	.uni-steps-item.uni-steps-process .uni-steps-item-circle-container {
		bottom: 3px;
		height: 14px;
		line-height: 14px;
		display: flex
	}
	.in {
		width: 15px !important;
		height: 15px !important;
	}
</style>
