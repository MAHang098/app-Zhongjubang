<template>
    <view class="wrap">
        <view class="bg">
        	<image src="../../static/img/topicDetails/bg.png" mode=""></image>
        </view>
		<view class="left-menu">
			<image src="../../static/img/topicDetails/back.png" mode=""></image>
		</view>
		<view class="right-wechat">
			<image src="../../static/img/topicDetails/interest.png" mode=""></image>
		</view>
		<view class="right-share">
			<image src="../../static/img/topicDetails/share.png" mode=""></image>
		</view>
		<view class="money">
			<image src="../../static/img/topicDetails/money.png" mode=""></image>
		</view>
		<text class="bg-title">我家阳台收纳神器</text>
		<text class="bg-title2">虽然阳台小，但是它是家的乐趣!虽然阳台小，但是它是家的乐趣!</text>
		<text class="bg-title3">参与299</text>
		<view class="point"></view>
		<text class="bg-title4">关注188</text>
		
		<!-- 我的动态 -->
		<view class="my-active">
			<view class="my-active-image"></view>
			<view class="my-active-nickName">晴天小猪</view>
			<view class="my-active-data">2019-12-12  09:11</view>
			<view class="identify">
				<image src="../../static/img/topicDetails/identify.png" mode=""></image>
			</view>
			<view class="edit-del">
				<image src="../../static/img/topicDetails/interest.png" mode=""></image>
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

		<view class="my-active2">
			<view class="my-active-image"></view>
			<view class="my-active-nickName">晴天小猪</view>
			<view class="my-active-data">2019-12-12  09:11</view>
			<view class="identify">
				<image src="../../static/img/topicDetails/identify.png" mode=""></image>
			</view>
			<view class="edit-del">
				<image src="../../static/img/topicDetails/interest.png" mode=""></image>
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
		height: 439rpx;
	}
	.bg image{
		width: 750rpx;
		height: 439rpx;
	}
	.left-menu{
		position: absolute;
		left: 28rpx;
		top: 49rpx;
		width: 15rpx;
		height: 31rpx;
	}
	.left-menu image{
		width: 15rpx;
		height: 31rpx;
	}
	.right-wechat{
		position: absolute;
		right: 92rpx;
		top: 51rpx;
		width: 106rpx;
		height: 48rpx;
	}
	.right-wechat image{
		width: 106rpx;
		height: 48rpx;
	}
	.right-share{
		position: absolute;
		right: 27rpx;
		top: 51rpx;
		width: 39rpx;
		height: 37rpx;
	}
	.right-share image{
		width: 39rpx;
		height: 37rpx;
	}
	.money{
		position: absolute;
		left: 200rpx;
		top: 164rpx;
		width: 33rpx;
		height: 36rpx;
	}
	.money image{
		width: 33rpx;
		height: 36rpx;
	}
	.bg-title{
		position: absolute;
		left: 240rpx;
		top: 166rpx;
		font-size:34rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
	}
	.bg-title2{
		position: absolute;
		left: 61rpx;
		top: 225rpx;
		font-size:22rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
	}
	.bg-title3{
		position: absolute;
		left: 30rpx;
		top: 331rpx;
		font-size:23rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
	}
	.point{
		position: absolute;
		left: 131rpx;
		top: 340rpx;
		width:6rpx;
		height:6rpx;
		background:rgba(255,255,255,1);
		border-radius:50%;
	}
	.bg-title4{
		position: absolute;
		left: 152rpx;
		top: 331rpx;
		font-size:23rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
	}
	
	/* 我的动态 */
	.my-active{
		position: relative;
		display: flex;
		margin-bottom: 20rpx;
		top: -54rpx;
		/* top: 450rpx; */
		width:750rpx;
		height:850rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 9rpx 0px rgba(93,93,93,0.08);
		border-radius:32rpx 32rpx 0px 0px;
	}
	.my-active2{
		position: relative;
		display: flex;
		margin-bottom: 20rpx;
		top: -54rpx;
		/* top: 450rpx; */
		width:750rpx;
		height:850rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 9rpx 0px rgba(93,93,93,0.08);
	}
	
	
	.my-active-image{
		position: absolute;
		left: 30rpx;
		top: 61rpx;
		width:80rpx;
		height:80rpx;
		background:rgba(149,149,149,1);
		border-radius:50%;
	}
	.my-active-nickName{
		position: absolute;
		left: 128rpx;
		top: 62rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.my-active-data{
		position: absolute;
		left: 128rpx;
		top: 105rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.identify{
		position: absolute;
		left: 257rpx;
		top: 62rpx;
		width: 94rpx;
		height: 31rpx;
	}
	.identify image{
		width: 94rpx;
		height: 31rpx;
	}
	.edit-del{
		position: absolute;
		right: 28rpx;
		top: 68rpx;
		width: 106rpx;
		height: 48rpx;
	}
	.edit-del image{
		width: 106rpx;
		height: 48rpx;
	}
	.my-active-recommend{
		position: absolute;
		left: 34rpx;
		top: 155rpx;
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
