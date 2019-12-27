<template>
	<view class="comment-list">
		<view class="comment-detail">
			<view class="product-detail">
				<image src="../../../static/topic/upload.png" mode=""></image>
				<view class="contnet">
					<text>索菲亚衣柜索菲亚衣柜索菲亚衣柜索菲亚衣柜索 衣柜索菲亚衣柜</text>
					<view>规格：全部套装</view>
				</view>
			</view>
			<view class="input-text">
				<textarea placeholder-style="color:#999" placeholder="请留下你的评论吧？" maxlength="300" @input="descInput" @blur="blur"/>
				<view class="num" v-if="showRemnant">{{remnant}}/300</view>
			</view>
		</view>
		<view class="comment-detail">
			<view class="product-detail">
				<image src="../../../static/topic/upload.png" mode=""></image>
				<view class="contnet">
					<text>索菲亚衣柜索菲亚衣柜索菲亚衣柜索菲亚衣柜索 衣柜索菲亚衣柜</text>
					<view>规格：全部套装</view>
				</view>
			</view>
			<view class="input-text">
				<textarea placeholder-style="color:#999" placeholder="请留下你的评论吧？" maxlength="300" @input="descInput" @focus="focus" @blur="blur"/>
				<view class="num" v-if="showRemnant">{{remnant}}/300</view>
			</view>
		</view>
		
		<view id="publish"><view>发布</view></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				remnant: 0,
				showRemnant: false
			}
		},
		methods: {
			descInput(e) {
				this.remnant =  e.detail.value.length;
			},
			focus() {
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
		height: 100%;
		margin-top: 3px;
	}
	.comment-detail {
		width: 100%;
		height: auto;
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
