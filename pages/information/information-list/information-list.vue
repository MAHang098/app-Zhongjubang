<template>
	<view class="information">
		<view class="information-list">
			<view @click.stop="goAddFans(item.fanCount)">
				<text class="num" v-show="item.fanCount > 0">{{item.fanCount}}</text>
				<image src="../../../static/img/information/people.png" mode=""></image>
				<view class="name">新粉丝</view>
			</view>
			<view @click.stop="goDiscussCount(item.discussCount)">
				<text class="num" v-show="item.discussCount > 0">{{item.discussCount}}</text>
				<image src="../../../static/img/information/message.png" mode=""></image>
				<view class="name">评论</view>
			</view>
			<view @click.stop="goCollect(item.collectionCount)">
				<text class="num" v-show="item.collectionCount > 0">{{item.collectionCount}}</text>
				<image src="../../../static/img/information/collection.png" mode=""></image>
				<view class="name">收藏</view>
			</view>
			<view @click.stop="goGiveLike(item.likeCount)">
				<text class="num" v-show="item.likeCount > 0">{{item.likeCount}}</text>
				<image src="../../../static/img/information/fabulous.png" mode=""></image>
				<view class="name">点赞</view>
			</view>
		</view>
		
		<!-- 信息详情 start -->
		<view class="information-detail">
			<view class="small-bell" @click.stop="goSystem">
				<text class="num" v-show="system.count > 0">{{system.count}}</text>
				<view class="images">
					<image src="../../../static/img/information/small-bell.png" mode=""></image>
				</view>
				<view class="message">
					<text>系统信息</text>
					<text>{{system.count > 0 ? '您有新的消息，请查看': '暂无消息'}}</text>
				</view>
				<view class="timers">{{system.createTime}}</view>
			</view>
			<view class="home" @click.stop="goGood">
				<text class="num" v-show="good.count > 0">{{good.count}}</text>
				<view class="images">
					<image src="../../../static/img/information/home.png" mode=""></image>
				</view>
				<view class="message">
					<text>商品消息</text>
					<text>{{good.count > 0 ? '您有新的消息，请查看': '暂无消息'}}</text>
				</view>
				<view class="timers">{{good.createTime}}</view>
			</view>
			<view class="private-letter">
				<text class="num" v-show="item.likeCount > 0">{{item.likeCount}}</text>
				<view class="images">
					<image src="../../../static/img/information/private-letter.png" mode=""></image>
				</view>
				<view class="message">
					<text>私信消息</text>
					<text>{{item.likeCount > 0 ? '您有新的消息，请查看': '暂无消息'}}</text>
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
				token: '',
				item: [],
				good: {},
				system: []
			}
		},
		onShow() {
			let _this = this;
			uni.getStorage({
				key:"token",
				success: function (res) {
					_this.token = res.data;
				}
			})
			this.init();
		},
		methods: {
			init() {
				uni.request({
					url: this.url + "/controller/messagecontroller/getallmsgtypemessage",
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': this.token
					},
					success: ((res) => {
						// console.log(res.data.code)
						if(res.data.code==200){
							let data = res.data.data;
							this.item = data;
							this.good = data.goods[0];
							this.system = data.system[0];
						}
					})
				})
			},
			// 新粉丝
			goAddFans(count) {
				uni.navigateTo({
					url: '/pages/information/add-fans/add-fans?type=1&count=' +count 
				});
				this.readMessage('1');
			},
			// 新收藏
			goCollect(count) {
				uni.navigateTo({
					url: '/pages/information/collection/collection?type=4&count=' +count 
				});
				this.readMessage('4');
			},
			// 新的点赞
			goGiveLike(count) {
				uni.navigateTo({
					url: '/pages/information/give-like/give-like?type=3&count='+count
				});
				this.readMessage('3');
			},
			// 新的评论
			goDiscussCount(count) {
				uni.navigateTo({
					url: '/pages/information/comments/comments?type=2&count='+count
				});
				this.readMessage('2');
			},
			// 系统通知
			goSystem() {
				this.readMessage('5');
			},
			// 商品信息
			goGood() {
				this.readMessage('6');
			},
			// 消息为已读
			readMessage(type) {
				uni.request({
					url: this.url + "/controller/messagecontroller/updateappusermsgstate",
					method: 'POST',
					data: {msgType: type},
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': this.token
					},
					success: ((res) => {
						this.init();
					})
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
		text-align: left;
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