<template>
	<view>
		<view class="example-body">
			<uni-nav-bar :fixed="true" class="navbar">
				<view class="input-view">
					<uni-icons type="search" size="22" color="#666666" />
					<input confirm-type="search" class="input" type="text" placeholder="输入搜索关键词" @confirm="confirm">
				</view>
				<block slot="right">
					<view class="city">
						<view>取消</view>
					</view>
				</block>
			</uni-nav-bar>
		</view>
		<view class="page-body">
			<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'">
				<view class="nav-left-item" @click="categoryClickMain(item,index)" :key="index" :class="index==categoryActive?'active':''"
				    v-for="(item,index) in categoryList">
					<text class="left-name" :class="index==categoryActive?'in':''">{{item.NAME}}</text>
				</view>
			</scroll-view>
			<scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation>
				<!-- <view :id="index===0?'first':''" class="nav-right-item" v-for="(item,index) in subCategoryList" :key="index">
					<image :src="item.LOGO" />
					<view>{{item.NAME}}</view>
				</view> -->
				<!-- <page-foot :name="name" v-if="subCategoryList.length > 1"></page-foot> -->
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniIcons,
			uniNavBar
		},
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
				for (var i = 1; i < 18; i++) {
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
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #f9f9f9
	}
	
	view {
		font-size: 28upx;
		line-height: inherit
	}
	.navbar {
		z-index: 10;
	}
	.example {
		/* padding: 0 30upx 30upx */
	}
	
	.example-title {
		display: flex;
		justify-content: flex-start;
		/* align-items: center;
		font-size: 32upx;
		color: #464e52;
		/* padding: 30upx 30upx 30upx 50upx; */
		/* margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid */
	}
	
	.example-title__after {
		/* position: relative;
		color: #031e3c */
	}
	
	.example-title:after {
	/* 	content: '';
		position: absolute;
		left: 30upx;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 6upx;
		height: 32upx; */
		/* background-color: #ccc */
	}
	
	.example .example-title {
		/* margin: 40upx 0 */
	}
	
	.example-body {
		/* padding: 30upx; */
		
		background: #fff;
		border-bottom: 1px solid #E2E2E2;
	}
	
	.example-info {
		/* padding: 30upx; */
		color: #3b4144;
		background: #fff
	}
	
	.city {
		/* display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-left: 8px;
		white-space: nowrap; */
	}
	
	.input-view {
		width: 100%;
		display: flex;
		background-color: #e7e7e7;
		height: 30px;
		border-radius: 15px;
		padding: 0 4%;
		flex-wrap: nowrap;
		margin: 7px 0;
		line-height: 30px;
		background: #f5f5f5;
	}
	
	.input-view .uni-icon {
		line-height: 30px !important;
	}
	
	.input-view .input {
		height: 30px;
		line-height: 30px;
		width: 94%;
		padding: 0 3%;
	}
	
	.page-body {
		display: flex;
	}
	
	.nav {
		display: flex;
		width: 100%;
	}
	
	.nav-left {
		width: 30%;
		position: fixed;
	}
	
	.nav-left-item {
		height: 100upx;
		/* border-right: solid 1px #E0E0E0; */
		/* border-bottom: solid 1px #E0E0E0; */
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #F4F4F4;
		color: #333333;
		font-weight: bold;
	}
	.nav-left-item:last-child {
		margin-bottom: 45px;
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
	}
	
	.nav-right-item {
		width: 28%;
		height: 220upx;
		float: left;
		text-align: center;
		padding: 11upx;
		font-size: 28upx;
	}
	
	.nav-right-item image {
		width: 100upx;
		height: 100upx;
	}
	
	.active {
		color: #FABE3F;
		background: #FFFFFF;
		
	}
	.in {
		border-left: 13rpx solid #FABE3F;
	}
</style>
