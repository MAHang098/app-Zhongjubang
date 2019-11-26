<template>
	<view>
		<view class="top">
			<view class="release-video">
            <image class="back" src="../../static/img/back.png" mode="" />
			<text class="title">1/3</text>
			</view>
			<view class="pic">
				<image src="../../static/img/releaseImage-details/pic.png" mode="" />
			</view>
			<view class="my-active-image10"></view>
			<view class="my-active-nickName10">晴天小猪</view>
			<view class="my-active-data10">2019-12-12  09:11</view>
			<view class="edit-del">
				<image src="../../static/img/topicDetails/interest.png" mode=""></image>
			</view>
			<view class="my-active-recommend">
				某臣氏骑剑活动！水雾质地 很轻薄 不沾黏！在上待几分钟会变成雾面哑光感 超高级！显色很持久...
				<text class="my-active-more">展开</text>
				<view class="my-active-more-image">></view>
			</view>
			<view class="participate-topic"></view>
			<image class="money" src="../../static/img/releaseImage-details/money.png" mode=""></image>
			<text class="participate-topic-text">参与话题</text>
		</view>
        
		<view class="all-content">
			<view class="all-recommend">全部评论</view>
			<view class="my-active-image100"></view>
			<view class="all-content-recommend"></view>
			<image class="all-content-recommend-image" src="../../static/img/releaseImage-details/recommend.png" mode="" />
			<text class="all-content-recommend-text">留下你的评论...</text>
			<view class="my-active-image"></view>
			<view class="my-active-nickName">晴天小猪</view>
			<view class="my-active-data">2019-12-12  09:11</view>
			<image class="recommend-good" src="../../static/img/releaseVideo2/good.png" mode="" />
			<view class="recommend-text">
				我的室内设计是这样的，我觉得很漂亮 我的室内设计是这样的，我觉得很漂亮 我的室内设计我觉得
			</view>
			<view class="horizon2"></view>

			<view class="my-active-image1"></view>
			<view class="my-active-nickName1">晴天小猪</view>
			<view class="my-active-data1">2019-12-12  09:11</view>
			<image class="recommend-good1" src="../../static/img/releaseVideo2/good.png" mode="" />
			<view class="recommend-text1">
				我的室内设计是这样的，我觉得很漂亮 我的室内设计是这样的，我觉得很漂亮 我的室内设计我觉得
			</view>
			<view class="answer">
				<text class="user">屋主：</text> <text class="answer-content">好</text>
				
			</view>
			<view class="horizon3"></view>
			<text class="check">查看全部评论</text>
		</view>
		

		<view class="footer">
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
	    data() {
	        return {
	            
	        }
	    },
	    methods: {
		}
	}
</script>
	
<style>
	page{
		background:rgba(245,245,245,1);
	}
	.top{
        position: relative;
		width:750rpx;
		height:1137rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 9rpx 0px rgba(93,93,93,0.08);
	}
    .release-video{
        position: relative;
        width:750rpx;
        height:128rpx;
        background:rgba(255,255,255,1);
		border-bottom: 2rpx solid rgba(226,226,226,1);
    }
    .back{
        position: absolute;
        left: 31rpx;
        bottom: 26rpx;
        width:54rpx;
        height:54rpx;
    }
    .back image{
        width:54rpx;
        height:54rpx;
    }
	.title{
		position: absolute;
		left: 348rpx;
		bottom: 26rpx;
		font-size:36rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.pic{
		position: absolute;
		width: 750rpx;
		height: 692rpx;
	}
	.pic image{
		width: 750rpx;
		height: 692rpx;
	}

	.my-active-image10{
		position: absolute;
		left: 30rpx;
		bottom: 212rpx;
		width:80rpx;
		height:80rpx;
		background:rgba(149,149,149,1);
		border-radius:50%;
	}
	.my-active-nickName10{
		position: absolute;
		left: 128rpx;
		bottom: 239rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.all-content-recommend{
		position: absolute;
		left: 111rpx;
		top: 83rpx;
		width:608rpx;
		height:70rpx;
		background:rgba(240,240,240,1);
		border-radius:35rpx;
	}
	.all-content-recommend-image{
		position: absolute;
		left: 131rpx;
		top: 106rpx;
		width:24rpx;
		height:24rpx;
	}
	.all-content-recommend-image image{
		width:24rpx;
		height:24rpx;
	}
	.all-content-recommend-text{
		position: absolute;
		left: 170rpx;
		top: 106rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.my-active-data10{
		position: absolute;
		left: 128rpx;
		bottom: 201rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.edit-del{
		position: absolute;
		right: 28rpx;
		bottom: 219rpx;
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
		bottom: 97rpx;
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
	.participate-topic{
		position: absolute;
		left: 30rpx;
		bottom: 30rpx;
		width:138rpx;
		height:42rpx;
		background:rgba(249,183,44,1);
		opacity:0.2;
		border-radius:21rpx;
	}
	.money{
		position: absolute;
		left: 41rpx;
		bottom: 42rpx;
		width:20rpx;
		height:20rpx;
	}
	.money image{
		width:20rpx;
		height:20rpx;
	}
	.participate-topic-text{
		position: absolute;
		left: 65rpx;
		bottom: 16rpx;
		font-size:22rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(249,183,44,1);
		line-height:42px;
	}
	.all-content{
		position: relative;
		margin-top: 10rpx;
		width:750rpx;
		height:782rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 9rpx 0px rgba(93,93,93,0.08);
	}

	.recommend{
		position: relative;
		width:750rpx;
		height:799rpx;
		background:rgba(255,255,255,1);
		border-radius:22rpx 22rpx 0px 0px;
	}
	.all-recommend{
		position: absolute;
		left: 30rpx;
		top: 30rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.my-active-image100{
		position: absolute;
		left: 30rpx;
		top: 83rpx;
		width:72rpx;
		height:70rpx;
		background:rgba(149,149,149,1);
		border-radius:50%;
	}
	.my-active-image{
		position: absolute;
		left: 30rpx;
		top: 193rpx;
		width:68rpx;
		height:68rpx;
		background:rgba(149,149,149,1);
		border-radius:50%;
	}
	.my-active-nickName{
		position: absolute;
		left: 128rpx;
		top: 197rpx;
		font-size:30rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.my-active-data{
		position: absolute;
		left: 128rpx;
		top: 243rpx;
		font-size:22rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.recommend-good{
		position: absolute;
		right: 30rpx;
		top: 225rpx;
		width:31rpx;
		height:31rpx;
	}
	.recommend-good image{
		width:31rpx;
		height:31rpx;
	}
	.recommend-text{
		position: absolute;
		right: 57rpx;
		top: 280rpx;
		width:568rpx;
		height:67rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:40rpx;
	}
	.horizon2{
		position: absolute;
		right: 30rpx;
		top: 384rpx;
		width:594rpx;
		height:2rpx;
		background:rgba(226,226,226,1);
	}
	.horizon2{
		position: absolute;
		right: 30rpx;
		top: 694rpx;
		width:594rpx;
		height:2rpx;
		background:rgba(226,226,226,1);
	}

	.my-active-image1{
		position: absolute;
		left: 30rpx;
		top: 428rpx;
		width:68rpx;
		height:68rpx;
		background:rgba(149,149,149,1);
		border-radius:50%;
	}
	.my-active-nickName1{
		position: absolute;
		left: 128rpx;
		top: 428rpx;
		font-size:30rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.my-active-data1{
		position: absolute;
		left: 128rpx;
		top: 474rpx;
		font-size:22rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.recommend-good1{
		position: absolute;
		right: 30rpx;
		top: 457rpx;
		width:31rpx;
		height:31rpx;
	}
	.recommend-good1 image{
		width:31rpx;
		height:31rpx;
	}
	.recommend-text1{
		position: absolute;
		right: 57rpx;
		top: 511rpx;
		width:568rpx;
		height:67rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:40rpx;
	}
	.answer{
		position: absolute;
		right: 58rpx;
		top: 598rpx;
		width:566rpx;
		height:58rpx;
		background:rgba(248,248,248,1);
		border:1rpx solid rgba(239,239,239,1);
		border-radius:6rpx;
	}
	.user{
		position: absolute;
		left: 19rpx;
		top: 18rpx;	
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.answer-content{
		position: absolute;
		left: 84rpx;
		top: 18rpx;	
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.check{
		position: absolute;
		left: 292rpx;
		top: 725rpx;	
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.footer{
		position: relative;
		margin-top: 10rpx;
		width:750rpx;
		height:100rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 9rpx 0px rgba(93,93,93,0.08);
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
		bottom: 24rpx;
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
		bottom: 24rpx;
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
		bottom: 24rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	
</style>
