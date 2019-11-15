<template>
    <view class="wrap">
        <view class="bg">
        	<image src="../../static/img/user/bg.png" mode=""></image>
        </view>
		<view class="left-menu">
			<image src="../../static/img/user/left-menu.png" mode=""></image>
		</view>
		<view class="right-wechat">
			<image src="../../static/img/user/right-wechat.png" mode=""></image>
		</view>
		<view class="right-wechat">
			<image src="../../static/img/user/right-wechat.png" mode=""></image>
		</view>
		<view class="user-avater">
			<image src="../../static/img/user/user-avater.png" mode=""></image>
		</view>
		<view class="user-info">
			<view class="user-state">
				<image src="../../static/img/user/user-state.png" mode=""></image>
			</view>
			<view class="edit-info">
				<image src="../../static/img/user/edit-info.png" mode=""></image>
			</view>
			<view class="my-order">
				<image src="../../static/img/user/my-order.png" mode=""></image>
			</view>
			<view class="user-nickName">
				晴天小猪
			</view>
			<view class="user-nickName-image"><image src="../../static/img/user/user-gender.png" mode=""></image></view>
			<view class="user-intro">
				介绍一下自己吧！
			</view>
			<view class="user-recommend">
				<text>粉丝799</text><text>关注899</text><text>获赞100</text>
			</view>
			<view class="hot">
				<image src="../../static/img/user/hot.png" mode=""></image>
			</view>
			<text class="number">200</text>
		</view>
		<view class="my-active">

		</view>
    </view>
</template>

<script>
    

    export default {
        
        methods: {
            
            
        }
    }
</script>

<style>
	.wrap{
		background-color: #F7F7F7;
	}
	.bg{
		position: absolute;
		width: 750rpx;
		height: 463rpx;
	}
	.bg image{
		width: 750rpx;
		height: 463rpx;
	}
	.left-menu{
		position: absolute;
		left: 28rpx;
		top: 49rpx;
		width: 44rpx;
		height: 44rpx;
	}
	.left-menu image{
		width:44rpx;
		height: 44rpx;
	}
	.right-wechat{
		position: absolute;
		right: 29rpx;
		top: 51rpx;
		width: 44rpx;
		height: 44rpx;
	}
	.right-wechat image{
		width:44rpx;
		height: 44rpx;
	}
	.user-avater{
		position: absolute;
		left: 22rpx;
		top: 326rpx;
		width: 199rpx;
		height: 193rpx;
		z-index: 99;
	}
	.user-avater image{
		width: 199rpx;
		height: 193rpx;
	}
	.user-info{
		position: relative;
		top: 434rpx;
		width:750rpx;
		height:308rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 9rpx 0px rgba(93,93,93,0.08);
		border-radius:32rpx 32rpx 0px 0px;
	}
	.user-state{
		position: absolute;
		left: 45rpx;
		top: 40rpx;
		width: 149rpx;
		height: 53rpx;
		z-index: 100;
	}
	.user-state image{
		width: 149rpx;
		height: 53rpx;
	}
	.edit-info{
		position: absolute;
		right: 235rpx;
		top: 30rpx;
		width: 191rpx;
		height: 58rpx;
		z-index: 100;
	}
	.edit-info image{
		width: 191rpx;
		height: 58rpx;
	}
	.my-order{
		position: absolute;
		right: 30rpx;
		top: 30rpx;
		width: 191rpx;
		height: 58rpx;
		z-index: 100;
	}
	.my-order image{
		width: 191rpx;
		height: 58rpx;
	}
	.user-nickName{
		position: absolute;
		left: 29rpx;
		top: 95rpx;
		font-size:38rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.user-nickName-image{
		position: absolute;
		left: 185rpx;
		top: 110rpx;
		width: 33rpx;
		height: 33rpx;
	}
	.user-nickName-image image{
		width: 33rpx;
		height: 33rpx;
	}
	.user-intro{
		position: absolute;
		left: 28rpx;
		bottom: 95rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.user-recommend{
		position: absolute;
		font-size:25rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		left: 30rpx;
		bottom: 35rpx;
	}
	.user-recommend text{
		margin-right: 30rpx;
	}
	.hot{
		position: absolute;
		right: 279rpx;
		bottom: 26rpx;
	}
	.hot image{
		width: 28rpx;
		height: 32rpx;
	}
	.number{
		position: absolute;
		font-size:25rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		right: 220rpx;
		bottom: 35rpx;
	}
	.my-active{
		position: relative;
		top: 450rpx;
		width:749rpx;
		height:899rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 9rpx 0px rgba(93,93,93,0.08);
	}
</style>
