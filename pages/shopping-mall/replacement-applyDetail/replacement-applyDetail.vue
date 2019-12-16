<template>
	<view>
		<view class="progress">
			<view class="store-progress">
				<text>退</text>
				<text>等待商家处理</text>
			</view>
			<view class="time">2018-12-25 07:14:30</view>
		</view>
		
		<view class="manage">
			<view class="success">您已成功发起售后申请，请耐心等待商家处理</view>
			<view class="sale-progress">
				<text></text>
				<text>后台售后管理人员反馈售后进度</text>
			</view>
			<view class="revoke-apply">撤销申请</view>
		</view>
		
		<uni-popup :show="show" :type="type" :custom="true" :mask-click="false">
			<view class="uni-tip">
				<view class="uni-tip-content">您确定要撤销申请吗 一旦撤销就不能再次申请售后了</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click.stop="cancel('tip')">取消</view>
					<view class="uni-tip-button insist-skip" @click.stop="cancel('skip')">确定</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components:{ uniPopup},
		data() {
			return {
				show: false,
				type: ''
			}
		},
		methods: {
			// 弹出层弹出的方式
			togglePopup(type, open, id) {
				this.deleteId = id;
				switch (type) {
					case 'top':
						this.content = '顶部弹出 popup'
						break
			
					case 'bottom':
						this.content = '底部弹出 popup'
						break
					case 'center':
						this.content = '居中弹出 popup'
						break
				}
				this.type = type
				if (open === 'tip') {
					this.show = true
				} else {
					this.$refs[open].open()
				}
			},
			// 弹框关闭
			cancel(type) {
				if (type === 'tip') {
					this.show = false
					return
				}
				this.$refs[type].close()
			},
		}
	}
</script>

<style>
	.progress {
		width: 100%;
		height: 213rpx;
		height: auto;
		background: #FAF0DA;
		box-sizing: border-box;
		padding: 78rpx 30rpx;
	}
	.store-progress text:first-child {
		display: inline-block;
		width: 40rpx;
		height: 40rpx;
		border: 1px solid #FABE3F;
		color: #FABE3F;
		font-size: 28rpx;
		border-radius: 50%;
		text-align: center;
		margin-right: 5px;
	}
	.store-progress text:last-child {
		font-size:30rpx;
		color: #333333;
	}
	.time {
		font-size:24rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		margin-top: 5px;
		padding-left: 52rpx;
	}
	.manage {
		width: 100%;
		box-sizing: border-box;
		padding: 0 30rpx;
		overflow: hidden;
	}
	.success {
		border-bottom: 1px solid #E2E2E2;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 26rpx;
		color: #333333;
	}
	.sale-progress text:first-child {
		width: 7px;
		height: 7px;
		display: inline-block;
		background: #E2E2E2;
		border-radius: 50%;
		margin-right: 5px;
	}
	.sale-progress text:last-child {
		font-size: 26rpx;
		color: #333333;
	}
	.revoke-apply {
		width: 150rpx;
		height: 60rpx;
		border: 1px solid #999999;
		border-radius: 30rpx;
		font-size: 26rpx;
		color: #333333;
		text-align: center;
		line-height: 60rpx;
		float: right;
		margin-top: 25%;
	}
	/* 提示窗口 */
	.uni-tip {
		padding-top: 15px;
		width: 300px;
		background: #fff;
		box-sizing: border-box;
		border-radius: 10px;
	}
	
	.uni-tip-title {
		text-align: center;
		font-weight: bold;
		font-size: 41rpx;
		color: #333;
	}
	
	.uni-tip-content {
		padding: 15px 0;
		font-size: 32rpx;
		color: #666;
		width: 360rpx;
		color: #666666;
		font-weight: 500;
		margin: auto;
	}
	
	.uni-tip-group-button {
		margin-top: 10px;
		display: flex;
	}
	
	.uni-tip-button {
		width: 100%;
		text-align: center;
		font-size: 14px;
		color: #333333;
		font-size: 37rpx;
		font-weight: 500;
		border-top: 1px solid #E2E2E2;
		padding: 10px 0;
	}
	.insist-skip {
		color: #F9B72C;
		border-left: 1px solid #E2E2E2;
	}
</style>
