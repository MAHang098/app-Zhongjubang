
<template>
	<view class="contant">
		<!-- 搜索栏 start -->
		<!-- <view class="header">
			<view class="search-input">
				<image src="../../../static/search/nav-search.png" mode=""></image>
				<input type="text" value=""  placeholder="搜索您需要的商品"/>
			</view>
			<view class="cancel">取消</view>
		</view> -->
		<!-- 搜索栏 end -->
		
		<!-- 粉丝列表 start -->
		<view class="all-follow">
			<view class="tabList">
				<view  v-for="(item, index) in tabList" :class="index == current ? 'active' : '' " @click="changeProduct(index)" :key="index">
					{{item}}
					<text v-bind:class="index == current ? 'active-status' : '' "></text>
				</view>
			</view>
			<view class="follow-fans"  v-show="current == 0">
				<view class="fans-list">
					<view class="left">
						<view class="avatar">
							<image src="../../../static/avatar.png" mode=""></image>
						</view>
						<view class="details">
							<text class="name">我是一颗玻璃心 <image src="../../../static/fans-logo.png" mode=""></image></text>
							<text class="time">11/21 10:23</text>
							<text class="follow">关注了你</text>
						</view>
					</view>
					<view class="right">
						<image src="../../../static/follow-checked.png" mode=""></image>
					</view>
				</view>
				<view class="fans-list">
					<view class="left">
						<view class="avatar">
							<image src="../../../static/avatar.png" mode=""></image>
						</view>
						<view class="details">
							<text class="name">我是一颗玻璃心 <image src="../../../static/fans-logo.png" mode=""></image></text>
							<text class="time">11/21 10:23</text>
							<text class="follow">关注了你</text>
						</view>
					</view>
					<view class="right">
						<image src="../../../static/mutual-follow.png" mode=""></image>
					</view>
				</view>
			</view>
			
			
			<view class="fans" v-show="current == 1">
				<view class="fans-list">
					<view class="left">
						<view class="avatar">
							<image src="../../../static/avatar.png" mode=""></image>
						</view>
						<view class="details">
							<text class="name">我是一颗玻璃心 <image src="../../../static/fans-logo.png" mode=""></image></text>
							<text class="time">11/21 10:23</text>
							<text class="follow">关注了你</text>
						</view>
					</view>
					<view class="right">
						<image src="../../../static/follow.png" mode=""></image>
					</view>
				</view>
				<view class="fans-list">
					<view class="left">
						<view class="avatar">
							<image src="../../../static/avatar.png" mode=""></image>
						</view>
						<view class="details">
							<text class="name">我是一颗玻璃心 <image src="../../static/fans-logo.png" mode=""></image></text>
							<text class="time">11/21 10:23</text>
							<text class="follow">关注了你</text>
						</view>
					</view>
					<view class="right">
						<image src="../../../static/follow-checked.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 粉丝列表 end -->
		
		<view id="mask" v-show="isShow"></view>
		<view class="bottom" v-show="isShow">
			<view>不在关注</view>
			<view>取消</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: ["关注", "粉丝"],
				current: 0 ,
				isShow: false
			}
		},
		methods: {
			changeProduct(index) {
				this.current = index;
				
			}
		}
	}
</script>

<style>
	page, .contant {
		height: 100%;
		box-sizing: border-box;
	}
	
	/* 关注列表 */
	.all-follow {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 30rpx;
		/* margin-top: 100rpx; */
		position: relative;
	}
	.tabList {
		width: 100%;
		height: 70rpx;
		display: flex;
		justify-content: flex-start;
	}
	.tabList view {
		width: 20%;
		height: 40rpx;
		line-height: 40rpx;
		color: #666666;
		font-size: 33rpx;
		font-weight: 500;
		text-align: center;
		/* margin-right: 80rpx; */
		border-right: 1px solid #E2E2E2;
	}
	.tabList view:last-child {
		border: none !important;
	}
	.active {
		/* border-bottom: 4rpx solid #F9B72C; */
		color: #333333 !important;
		font-weight: bold !important;
	}
	/* 列表 start */
	.fans-list {
		height: 188rpx;
		/* width: 30%; */
		box-sizing: border-box;
		padding: 28rpx 0;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #E2E2E2;
	}
	.left {
		display: flex;
		justify-content: flex-start;
	}
	.left text {
		display: block;
	}
	.name {
		font-size: 28rpx;
		color: #333333;
		float: left;
		/* display: inline-block; */
	}
	.time {
		font-size: 24rpx;
		color: #999999;
	}
	.follow {
		font-size: 26rpx;
		color: #666666;
	}
	.avatar {
		width: 122rpx;
		height: 130rpx;
		display: inline-block;
	}
	.avatar image {
		width: 100%;
		height: 100%;
		margin: auto;
		display: block;
	}
	.details image {
		width: 94rpx;
		height: 31rpx;
		display: block;
		float: right;
		margin-top: 2%;
		margin-left: 7px;
	}
	.right image {
		width: 127rpx;
		height: 54rpx;
		display: block;
		margin-top: 25%;
	}
	/* 弹出层 start */
	#mask {
		position: fixed;
		top: 0;
		z-index: 1;
		background: rgba(0,0,0,.5);
		height: 100%;
		width: 100%;
	}
	.bottom {
		position: fixed;
		bottom: 0;
		z-index: 2;
		width: 100%;
		height: 250rpx;
		background: rgba(255,255,255,1);
		border-radius: 32rpx 32rpx 2rpx 2rpx
	}
	.bottom  view {
		height: 50%;
		line-height: 125rpx;
		text-align: center;
		border-bottom: 1px solid #E2E2E2;
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
