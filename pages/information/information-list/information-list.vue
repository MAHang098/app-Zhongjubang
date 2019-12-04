<template>
	<view class="information">
		<view class="information-list">
			<view @click="goAddFans">
				<text class="num">1</text>
				<image src="../../../static/img/information/people.png" mode=""></image>
				<view class="name">新粉丝</view>
			</view>
			<view>
				<text class="num">1</text>
				<image src="../../../static/img/information/message.png" mode=""></image>
				<view class="name">评论</view>
			</view>
			<view @click="goCollect">
				<text class="num">1</text>
				<image src="../../../static/img/information/collection.png" mode=""></image>
				<view class="name">收藏</view>
			</view>
			<view @click="goGiveLike">
				<text class="num">1</text>
				<image src="../../../static/img/information/fabulous.png" mode=""></image>
				<view class="name">点赞</view>
			</view>
		</view>
		
		<!-- 信息详情 start -->
		<view class="information-detail">
			<view class="small-bell">
				<text class="num">1</text>
				<view class="images">
					<image src="../../../static/img/information/small-bell.png" mode=""></image>
				</view>
				<view class="message">
					<text>系统信息</text>
					<text>暂无消息</text>
				</view>
				<view class="timers">11-19</view>
			</view>
			<view class="home">
				<text class="num">1</text>
				<view class="images">
					<image src="../../../static/img/information/home.png" mode=""></image>
				</view>
				<view class="message">
					<text>系统信息</text>
					<text>暂无消息</text>
				</view>
				<view class="timers">11-19</view>
			</view>
			<view class="private-letter">
				<text class="num">1</text>
				<view class="images">
					<image src="../../../static/img/information/private-letter.png" mode=""></image>
				</view>
				<view class="message">
					<text>系统信息</text>
					<text>暂无消息</text>
				</view>
				<view class="timers">11-19</view>
			</view>
		</view>
		<!-- 信息详情 end -->
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				
			}
		},
		methods: {
			goAddFans() {
				uni.navigateTo({
					url: '/pages/information/add-fans/add-fans'
				})
			},
			goCollect() {
				uni.navigateTo({
					url: '/pages/information/collection/collection'
				})
			},
			goGiveLike() {
				uni.navigateTo({
					url: '/pages/information/give-like/give-like'
				})
			}
		}
	}
</script>

<style>
	.information {
		text-align: center;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.information-list {
		width: 100%;
		height: 216rpx;
		box-sizing: border-box;
		padding: 40rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 9rpx 0px rgba(93,93,93,0.08);
		display: flex;
		justify-content: space-between;
		font-size:31rpx;
		border-top: 1px solid #E2E2E2;
		border-bottom: 1px solid #E2E2E2;
		
	}
	.information-list>view {
		width: 20%;
		position: relative;
	}
	
	.information-list image {
		width: 88rpx;
		height: 88rpx;
		display: block;
		margin: 0 auto;
	}
	.information-list .name {
		margin-top: 14rpx;
	}
	.num {
		position: absolute;
		width: 14rpx;
		height: 14rpx;
		line-height: 14rpx;
		font-size: 22rpx;
		text-align: center;
		display: block;
		border-radius: 50%;
		background: #ff1717;
		color: #FFFFFF;
		padding: 10rpx;
		z-index: 1;
	}
	.information-list .num {
		
		left: 62%;
		top: -10%;
	}
	
	/* 信息详情 */
	.information-detail {
		width: 100%;
	}
	.information-detail>view {
		box-sizing: border-box;
		padding: 35rpx 44rpx 35rpx 33rpx;
		border-bottom: 1px solid #E2E2E2;
		overflow: hidden;
		height: 100%;
		position: relative;
	}
	.information-detail .num {
		left: 72rpx;
		width: 10rpx;
		height: 10rpx;
		line-height: 10rpx;
		font-size: 20rpx;
		text-align: center;
	}
	.home .num {
		left: 80rpx;
	}
	.private-letter .num {
		left: 86rpx;
	}
	.information-detail image {
		display: inline-block;
		float: left;
		width: 62rpx;
		height: 56rpx;
	}
	.information-detail .images {
		margin-top: 10rpx;
		float: left;
	}
	.information-detail .message {
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		float: left;
		text-align: center;
		margin-left: 20rpx;
	}
	.information-detail .message text {
		display: block;
		margin-left: 20rpx;
		font-size: 14px;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51,51,51,1);
		
	}
	.information-detail .message text:last-child {
		font-size:24rpx;
		color:rgba(102,102,102,1);
		margin-top: 8rpx;
	}
	.information-detail .timers {
		float: right;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
</style>