<template>
	<view class="contant">
		<!-- 搜索栏 start -->
		<view class="header">
			<view class="search-input">
				<image src="../../../static/nav-search.png" mode=""></image>
				<input type="text" value=""  placeholder="搜索您需要的商品"/>
			</view>
			<view class="cancel">取消</view>
		</view>
		<!-- 搜索栏 end -->
		
		<!-- 列表 start -->
		<view class="page-body">
			<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'">
				<view class="nav-left-item" @click="categoryClickMain(item,index)" :key="index" :class="index==categoryActive?'active':''"
				    v-for="(item,index) in categoryList">
					<text class="left-name" :class="index==categoryActive?'in':''">{{item.NAME}}</text>
				</view>
			</scroll-view>
			<scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation>
				<view  :id="index===0?'first':''" class="nav-right-item" v-for="(item,index) in subCategoryList" :key="index">
					<view class="contnet">
						<view class="left">
							<view class="list-image">
								<image :src="item.LOGO" mode=""></image>
							</view>
							<view class="detail">
								<view class="title">{{item.NAME}}</view>
								<view class="num">共700人参与</view>
							</view>
						</view>
						<view class="right">
							选择
						</view>
					</view>
					
					<text class="border"></text>
				</view>
			</scroll-view>
		</view>
		<!-- 列表 end -->
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				categoryList: [],
				subCategoryList: [],
				height: 0,
				categoryActive: 0,
				scrollTop: 0,
				scrollHeight: 0,
				name: "七月_"
			}
		},
		methods: {
			cancel() {
				uni.navigateBack()
			},
			confirm() {
				uni.showToast({
					title: '搜索'
				})
			},
			scroll(e) {
				this.scrollHeight = e.detail.scrollHeight;
			},
			categoryClickMain(categroy, index) {
				this.categoryActive = index;
				this.subCategoryList = categroy.subCategoryList;
				this.scrollTop = -this.scrollHeight * index;
			},
			getCategory() {
				for (var i = 1; i < 20; i++) {
					var subList = [];
					for (var j = 1; j < 31; j++) {
						subList.push({
							"NAME": "分类" + i + ":商品" + j,
							"LOGO": "http://placehold.it/50x50"
						})
					}
					this.categoryList.push({
						"NAME": "分类" + i,
						"subCategoryList": subList
					})
				}
				this.subCategoryList = this.categoryList[0].subCategoryList;
			}
		},
			
		onLoad: function () {
			this.getCategory();
			this.height = uni.getSystemInfoSync().windowHeight;
		}
	}
</script>

<style>
	page, .contant {
		height: 100%;
	}
	.header {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 10rpx 30rpx;
		background: #FFFFFF;
		position: fixed;
		z-index: 1;
		top: 50rpx;
		left: 0;
		right: 0;
		border-bottom: 1px solid #E2E2E2;
	}
	.search-input {
		position: relative;
		width: 100%;
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
		border-radius: 35rpx;
		height: 70rpx;
		margin: 0;
		font-size: 26rpx;
		padding-left: 60rpx;
		background: #f6f6f6;
	}
	.cancel {
		width: 13%;
		line-height: 80rpx;
		text-align: center;
		color: #333333;
		font-size: 28rpx;
	}
	/* 搜索 end */
	
	.page-body {
		display: flex;
		position: relative;
		top: 150rpx;
	}
	
	.nav {
		display: flex;
		width: 100%;
		
	}
	
	.nav-left {
		width: 30%;
		position: fixed;
		background: #F8F8F8;
		box-sizing: border-box;
		padding-bottom: 150rpx;
	}
	
	.nav-left-item {
		height: 100upx;
		font-size: 26rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #666666;
		font-weight: 500;
	}
	
	.left-name {
		display: block;
		width: 100%;
		height: 37rpx;
		text-align: center;
	}
	
	.nav-right {
		width: 70%;
		margin-left: 30%;
		background: #FFFFFF;
		box-sizing: border-box;
		padding-bottom: 150rpx;
	}
	
	.nav-right-item {
		width: 100%;
		height: 150rpx;
		box-sizing: border-box;
		padding: 34rpx 30rpx;
		/* border-bottom: 1px solid #E2E2E2; */
	}
	.contnet {
		display: flex;
		justify-content: space-between;
	}
	.border {
		display: block;
		border-bottom: 1px solid #E2E2E2;
		margin-top: 28rpx;
	}
	.nav-right-item .left {
		height: 100%;
		display: flex;
		justify-content: flex-start;
	}
	.nav-right-item image {
		width: 73rpx;
		height: 75rpx;
		border: 1px solid red;
		margin-right: 10px;
	}
	
	.title {
		color: #4e4e4e;
		font-size: 26rpx;
		font-weight: bold;
		margin-bottom: 18rpx;
	}
	.num {
		color: #999999;
		font-size: 22rpx;
		font-weight: bold;
	}
	.right {
		width: 95rpx;
		height: 45rpx;
		line-height: 45rpx;
		border: 1px solid #FABE3F;
		border-radius: 23rpx;
		text-align: center;
		color: #FABE3F;
		font-size: 26rpx;
		margin: auto 0;
	}
	.active {
		color: #FABE3F;
		background: #FFFFFF;
	}
	.in {
		border-left: 13rpx solid #FABE3F;
	}
</style>

