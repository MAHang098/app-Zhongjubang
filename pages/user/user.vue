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
		<!-- 客户信息 -->
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
		<!-- 我的动态 -->
		<view class="my-active">
			<view class="my-active-title1">我的动态</view>
			<view class="my-active-index"></view>
			<view class="my-active-vertify"></view>
			<view class="my-active-title2">短视频</view>
			<view class="my-active-vertify2"></view>
			<view class="my-active-title3">收藏</view>
			<view class="my-active-image"></view>
			<view class="my-active-nickName">晴天小猪</view>
			<view class="my-active-data">2019-12-12  09:11</view>
			<view class="edit-del">
				<image src="../../static/img/user/edit-del.png" mode=""></image>
			</view>
			<view class="my-active-recommend">
				某臣氏骑剑活动！水雾质地 很轻薄 不沾黏！在上待几分钟会变成雾面哑光感 超高级！显色很持久...
				<text class="my-active-more">展开</text>
				<view class="my-active-more-image">></view>
			</view>
			<view class="my-active-pic"></view>
			<view class="add-topic">
				
				
			</view>
			<view class="add-topic-image">
				<image src="../../static/img/user/add-topic.png" mode=""></image>
			</view>
			<text class="add-topic-text">添加你的话题</text>

			<view class="share">
				<image src="../../static/img/user/share.png" mode=""></image>
			</view>
			<view class="message">
				<image src="../../static/img/user/message.png" mode=""></image>
			</view>
			<text class="my-active-message">700</text>
			<view class="star">
				<image src="../../static/img/user/star.png" mode=""></image>
			</view>
			<text class="my-active-star">120</text>
			<view class="good">
				<image src="../../static/img/user/good.png" mode=""></image>
			</view>
			<text class="my-active-good">180</text>
			
		</view>


		<view class="my-active">
			<view class="my-active-title1">我的动态</view>
			<view class="my-active-index"></view>
			<view class="my-active-vertify"></view>
			<view class="my-active-title2">短视频</view>
			<view class="my-active-vertify2"></view>
			<view class="my-active-title3">收藏</view>
			<view class="my-active-image"></view>
			<view class="my-active-nickName">晴天小猪</view>
			<view class="my-active-data">2019-12-12  09:11</view>
			<view class="edit-del">
				<image src="../../static/img/user/edit-del.png" mode=""></image>
			</view>
			<view class="my-active-recommend">
				某臣氏骑剑活动！水雾质地 很轻薄 不沾黏！在上待几分钟会变成雾面哑光感 超高级！显色很持久...
				<text class="my-active-more">展开</text>
				<view class="my-active-more-image">></view>
			</view>
			
			
			<view class="my-active-pic"></view>
			<view class="add-topic">
				
				
			</view>
			<view class="add-topic-image">
				<image src="../../static/img/user/add-topic.png" mode=""></image>
			</view>
			<text class="add-topic-text">添加你的话题</text>

			<view class="share">
				<image src="../../static/img/user/share.png" mode=""></image>
			</view>
			<view class="message">
				<image src="../../static/img/user/message.png" mode=""></image>
			</view>
			<text class="my-active-message">700</text>
			<view class="star">
				<image src="../../static/img/user/star.png" mode=""></image>
			</view>
			<text class="my-active-star">120</text>
			<view class="good">
				<image src="../../static/img/user/good.png" mode=""></image>
			</view>
			<text class="my-active-good">180</text>
			<view class="more">-上拉查看更多-</view>
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
		padding-bottom: 120rpx;
		height: 100%;
	}
	.bg{
		position: relative;
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
	/* 客户信息 */
	.user-info{
		position: relative;
		top: -30rpx;
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
	/* 我的动态 */
	.my-active{
		position: relative;
		display: flex;
		margin-bottom: 20rpx;
		top: -10rpx;
		/* top: 450rpx; */
		width:749rpx;
		height:899rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 9rpx 0px rgba(93,93,93,0.08);
	}
	.my-active-title1{
		position: absolute;
		left: 29rpx;
		top: 24rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.my-active-index{
		position: absolute;
		left: 75rpx;
		top: 83rpx;
		width:52rpx;
		height:5rpx;
		background:rgba(249,183,44,1);
		border-radius:3rpx;
	}
	.my-active-vertify{
		position: absolute;
		left: 212rpx;
		top: 34rpx;
		width:1rpx;
		height:36rpx;
		background:rgba(226,226,226,1);
	}
	.my-active-title2{
		position: absolute;
		right: 392rpx;
		top: 28rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(116,116,116,1);
	}
	.my-active-vertify2{
		position: absolute;
		left: 408rpx;
		top: 34rpx;
		width:1rpx;
		height:36rpx;
		background:rgba(226,226,226,1);
	}
	.my-active-title3{
		position: absolute;
		right: 222rpx;
		top: 28rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(116,116,116,1);
	}
	.my-active-image{
		position: absolute;
		left: 30rpx;
		top: 120rpx;
		width:80rpx;
		height:80rpx;
		background:rgba(149,149,149,1);
		border-radius:50%;
	}
	.my-active-nickName{
		position: absolute;
		left: 128rpx;
		top: 132rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.my-active-data{
		position: absolute;
		left: 128rpx;
		top: 175rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.edit-del{
		position: absolute;
		right: 28rpx;
		top: 146rpx;
		width: 36rpx;
		height: 23rpx;
	}
	.edit-del image{
		width: 36rpx;
		height: 23rpx;
	}
	.my-active-recommend{
		position: absolute;
		left: 34rpx;
		top: 225rpx;
		width:674rpx;
		height:59rpx;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:33rpx;
	}
	.my-active-more{
		margin-left: 10rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(90,124,171,1);
		line-height:33rpx;
	}
	.my-active-more-image{
		display: inline-block;
		padding-bottom: 6rpx;
		margin-left: 6rpx;
		transform: rotate(90deg);
		font-size:36rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(90,124,171,1);
		line-height:49rpx;
	}
	.my-active-pic{
		position: absolute;
		left: 29rpx;
		bottom: 137rpx;
		width:690rpx;
		height:450rpx;
		background: #959595;
	}
	.add-topic{
		position: absolute;
		left: 29rpx;
		bottom: 79rpx;
		width:181rpx;
		height:42rpx;
		background:rgba(249,183,44,.8);
		opacity:0.2;
		border-radius:21rpx;
	}
	.add-topic-image{
		position: absolute;
		left: 34rpx;
		bottom: 110rpx;
		width:20rpx;
		height:20rpx;
		z-index: 999;
	}
	.add-topic-image image{
		width:20rpx;
		height:20rpx;
	}
	.add-topic-text{
		position: absolute;
		left: 54rpx;
		bottom: 78rpx;
		font-size:22rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:#F9B72C;
		line-height:42rpx;
	}
	.share{
		position: absolute;
		left: 26rpx;
		bottom: 42rpx;
		width:32rpx;
		height:30rpx;
	}
	.share image{
		width:32rpx;
		height:30rpx;
	}
	.message{
		position: absolute;
		right: 322rpx;
		bottom: 34rpx;
		width:39rpx;
		height:35rpx;
	}
	.message image{
		width:39rpx;
		height:35rpx;
	}
	.my-active-message{
		position: absolute;
		right: 274rpx;
		bottom: 30rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.star{
		position: absolute;
		right: 204rpx;
		bottom: 34rpx;
		width:39rpx;
		height:35rpx;
	}
	.star image{
		width:39rpx;
		height:35rpx;
	}
	.my-active-star{
		position: absolute;
		right: 153rpx;
		bottom: 30rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.good{
		position: absolute;
		right: 83rpx;
		bottom: 34rpx;
		width:39rpx;
		height:35rpx;
	}
	.good image{
		width:39rpx;
		height:35rpx;
	}
	.my-active-good{
		position: absolute;
		right: 31rpx;
		bottom: 30rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.more{
		position: absolute;
		left: 289rpx;
		bottom: -90rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(204,204,204,1);
	}
	
</style>
