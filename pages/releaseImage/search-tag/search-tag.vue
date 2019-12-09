<template>
	<view>
		<!-- 搜索栏 start -->
		<view class="header">
			<view class="search-input">
				<image src="../../../static/search/nav-search.png" mode=""></image>
				<input type="text" value=""  placeholder="搜索您需要的商品" @input="gainInput" @focus="onFocus" @blur="onBlur"/>
			</view>
			<view class="cancel" @click="cancel">取消</view>
		</view>
		<!-- 搜索栏 end -->
		
		<!-- 列表 start -->
		<view class="content-body" >
			<!-- add tag start -->
			<view class="tag-list" v-show="isShowAdd" >
				<view class="add-tag" @click="goBack('tag')">
					<image src="../../../static/img/release.png" mode=""></image>
					<text>点击添加{{searchInput}}</text>
				</view>
			</view>
			<!-- add tag end -->
			
			<view class="product">
				<view class="product-tag">
					<view v-for="(item, index) in tabType" :class="index == current ? 'active' : '' " @click="changeProduct(index)" :key="index">
						{{item}}
						<text v-bind:class="index == current ? 'active-status' : '' "></text>
					</view>
				</view>
				<view class="product-list">
					<view class="list" v-for="(item, index) in productItem" :key="index" @click.stop="goBack('product', item.title)">
						<view><image src="../../../static/search/product.png" mode=""></image></view>
						<view class="detail">
							<view>{{item.title}}</view>
							<view class="price">{{item.price}}</view>
						</view>
					</view>
				</view>
				
			</view>
		</view>
		<!-- 列表 end -->
	</view>
</template>

<script>
	// import {imageUpload} from 'vuex'
	export default {
		data() {
			return {
				tabType: ["已添标商品", "已收藏商品"],
				current: 0,
				isShowAdd: false,   // 是否显示搜索出来的标签
				searchInput: '',
				currentImg: '', // 当前是第几张图片
				arrImage: [],   // 所有图片的详细信息
				tagArr: [],
				fileName: '',
				imageHeight: 0,
				imageWidth: 0,
				productItem: [
					{title: '百醇家具布衣111沙发小户型客厅整111装组合百醇1111家具布衣沙发小户型客厅整装组合户型客厅整装组合装组合', price: '￥8460.00'},
					{title: '百醇家具布衣111沙发小户型客厅整111装组合百醇1111家具布衣沙发小户型客厅整装组合户型客厅整装组合装组合', price: '￥8460.00'},
					{title: '百醇家具布衣111沙发小户型客厅整111装组合百醇1111家具布衣沙发小户型客厅整装组合户型客厅整装组合装组合', price: '￥8460.00'},
					{title: '百醇家具布衣111沙发小户型客厅整111装组合百醇1111家具布衣沙发小户型客厅整装组合户型客厅整装组合装组合', price: '￥8460.00'},
					{title: '百醇家具布衣111沙发小户型客厅整111装组合百醇1111家具布衣沙发小户型客厅整装组合户型客厅整装组合装组合', price: '￥8460.00'},
					{title: '百醇家具布衣111沙发小户型客厅整111装组合百醇1111家具布衣沙发小户型客厅整装组合户型客厅整装组合装组合', price: '￥8460.00'}
				]
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			this.currentImg = option.index;
			this.fileName = option.name;
			this.imageHeight = option.height;
			this.imageWidth = option.width;
		},
		methods: {
			// 输入框获取焦点/失去焦点
			onFocus() {
				// this.$mp.page.$getAppWebview().setStyle({
				// 	softinputNavBar: 'none'
				// })
			},
			onBlur() {
				// this.$mp.page.$getAppWebview().setStyle({
				// 	softinputNavBar: 'auto'
				// })
			},
			// 设置标签的x，y轴坐标
			fRandomBy(under, over) {
				switch(arguments.length){
				case 1: return parseInt(Math.random()*under+1);
				case 2: return parseInt(Math.random()*(over-under+1) + under);
				default: return 0;
				}
			},
			cancel() {
				uni.navigateBack({
					 delta: 1,
				});
			},
			changeProduct(index) {
				this.current = index;
			},
			// 失去焦点后获取输入内容
			gainInput(e) {
				if(e.detail.value == '') {
					this.isShowAdd = false;
					return;
				}
				this.searchInput = e.detail.value;
				this.isShowAdd = true;
			},
			// 点击添加标签按钮返回图片标签页面
			goBack(type, name) {
				
				if(name) {
					this.searchInput = name;
				}
				let pages = getCurrentPages();  //获取所有页面栈实例列表
				let nowPage = pages[ pages.length - 1];  //当前页页面实例
				let prevPage = pages[ pages.length - 2 ];  //上一页页面实例
				// let tagArr = []; // 标签数组
				let ImageTag = {};
				if(type == 'product') {
					// 当前图片标签对象
					ImageTag = {
						tagName: this.searchInput,
						tagX: this.fRandomBy(0,225),
						tagY: this.fRandomBy(-76,400),
						type: type
					}
				} else {
					// 当前图片标签对象
					ImageTag = {
						tagName: this.searchInput,
						tagX: this.fRandomBy(-20,300),
						tagY: this.fRandomBy(-76,400),
						type: type
					}
				}
				
				this.tagArr.push(ImageTag);
				let arrObj = {
					currentImage: this.currentImg,
					allTagArr: this.tagArr,
					type: 'search'
				}
				this.$store.commit('saveImage', arrObj)
				uni.navigateBack({
					 delta: 1,
				});
				
			}
		},
	}
</script>

<style>
	page, .contant {
		height: 100%;
		box-sizing: border-box;
	}
	.header {
		width: 100%;
		height: 140rpx;
		/* line-height: 100rpx; */
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 10rpx 30rpx;
		background: #FFFFFF;
		position: fixed;
		z-index: 1;
		/* top: 50rpx; */
		top: 0;
		left: 0;
		right: 0;
		border-bottom: 1px solid #E2E2E2;
	}
	.header view {
		margin-top: 40rpx;
	}
	.search-input {
		position: relative;
		width: 100%;
		height: 70rpx;
		background: #f6f6f6;
		border-radius: 35rpx;
	}
	.search-input image {
		width: 26rpx;
		height: 26rpx;
		display: block;
		position: absolute;
		top: 23rpx;
		left: 24rpx;
		
	}
	.search-input input {
		width: 88%;
		margin: 0;
		font-size: 26rpx;
		margin-left: 60rpx;
		margin-top: 10rpx;
	}
	.cancel {
		width: 13%;
		line-height: 80rpx;
		text-align: center;
		color: #333333;
		font-size: 28rpx;
	}
	/* 搜索 end */
	.content-body {
		width: 100%;
		height: 100%;
		background: #F6F6F6;
		position: relative;
		top: 75px;
	}
	.tag-list {
		height: 85rpx;
		box-sizing: border-box;
		padding: 31rpx 30rpx;
		background: #FFFFFF;
		font-size: 28rpx;
		color: #333333;
	}
	.tag-list image {
		width: 30rpx;
		height: 30rpx;
		margin-right: 10rpx;
		margin-bottom: -4rpx;
	}
	/* 商品列表 start */
	.product {
		margin-top: 14rpx;
		background: #FFFFFF;
		height: 100%;
		padding: 30rpx;
	}
	.product-tag {
		height: 70rpx;
		/* border: 1px solid red; */
	}
	.product-tag view {
		width: 30%;
		height: 34rpx;
		line-height: 34rpx;
		text-align: center;
		color: #747474;
		font-size: 28rpx;
		display: inline-block;
		border-right: 1rpx solid #E2E2E2;
	}
	.product-tag view:last-child {
		border: none;
	}
	.active {
		color: #333333 !important;
		font-size: 30rpx !important;
		font-weight: bold;
		border-width: 50rpx;
		border-color: red;
		
	}
	/* 商品列表 start */
	.product-list {
		padding-top: 43rpx;
		position: relative;
	}
	.list {
		display: flex;
		justify-content: flex-start;
		margin-bottom: 10px;
	}
	.list image {
		width: 214rpx;
		height: 202rpx;
		display: block;
		margin-right: 25rpx;
	}
	.detail {
		padding-top: 40rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:35rpx;
		
	}
	.detail view:first-child {
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		width: 431rpx;
		font-weight: 500;
	}
	.price {
		font-size:30rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(244,51,72,1);
		margin-top: 20rpx;
	}
	.active-status {
	/* 	position: absolute;
		top: 15%;
		left: 13%; */
		margin: 9px auto;
		display: block;
		width:70rpx;
		height:6rpx;
		background:rgba(249,183,44,1);
		border-radius:3px;
	}
</style>

