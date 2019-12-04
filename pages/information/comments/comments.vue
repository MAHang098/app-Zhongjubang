<template>
	<view class="collection">
		<view class="collection-list">
			<view class="details-list">
				<view class="left">
					<view class="avatar">
						<image src="../../../static/avatar.png" mode=""></image>
					</view>
					<view class="details">
						<view class="name">我是一颗玻璃心 <image src="../../../static/fans-logo.png" mode=""></image></view>
						<view class="time">11/21 10:23</view>
						<view class="follow">
							{{content | ellipsis}}
							<view class="reply">回复</view>
						</view>
					</view>
				</view>
				<view class="right">
					<image src="../../../static/collection.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="collection-list">
			<view class="details-list">
				<view class="left">
					<view class="avatar">
						<image src="../../../static/avatar.png" mode=""></image>
					</view>
					<view class="details">
						<view class="name">我是一颗玻璃心 <image src="../../../static/fans-logo.png" mode=""></image></view>
						<view class="time">11/21 10:23</view>
						<view class="follow">
							{{content | ellipsis}}
							<view class="reply">回复</view>
						</view>
					</view>
				</view>
				<view class="right">
					<image src="../../../static/collection.png" mode=""></image>
				</view>
			</view>
			
		</view>
		<view class="collection-list">
			<view class="details-list">
				<view class="left">
					<view class="avatar">
						<image src="../../../static/avatar.png" mode=""></image>
					</view>
					<view class="details">
						<view class="name">我是一颗玻璃心 <image src="../../../static/fans-logo.png" mode=""></image></view>
						<view class="time">11/21 10:23</view>
						<view class="follow">
							{{content | ellipsis}}
							<view class="reply">回复</view>
						</view>
					</view>
				</view>
				<view class="right">
					<image src="../../../static/collection.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				content: '某臣氏骑剑活动！水雾质地 很轻薄 不',
			}
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 30) {
				return value.slice(0,30) + '...'
			  }
			  return value
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	@import '../../../static/css/information.css'; /*引入收藏点赞消息的样式*/
	.details  {
		width: 70%;
	}
	.name {
		display: flex;
	}
	.follow .reply {
		color: #F9B72C;
		font-size:24rpx;
		text-align: left;
	}
</style>
