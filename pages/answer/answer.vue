<template>
	<view>
		<view class="top">
			<view class="release-video">
				<image class="back" src="../../static/img/back.png" @tap="back" mode="" />
				<text class="title">{{length}}条回复</text>
			</view>
			<view class="top-image">
				<image :src="head" mode="" />
			</view>
			<view class="top-nickname">{{nickName}}</view>
			<view class="top-date">{{creatTime}}</view>
			<view class="top-content">{{shortVideoDiscuss}}</view>
			<view class="top-check" @tap="checkContent">查看原内容></view>
			
			<image class="good" src="../../static/img/releaseVideo2/good.png" mode="" />
		</view>

		<view class="all-content">
			<view v-for="(row, index) in dataList" :key="index" class="all-content-details">
				<view class="content-details-image">
					<image :src="row.ziHead" mode="" />
				</view>
				<view class="content-details-left">
					<view class="content-details-nickname">{{row.ziName}}</view>
					<view class="content-details-date">{{row.ziCreateTime}}</view>
					<view  class="content-details-content">{{row.ziContext}}</view>
					<!-- <image class="content-details-good" src="../../static/img/releaseVideo2/good.png" mode="" /> -->
				</view>
				<view class="content-details-good" @click="commentsFabulous(index, row.shortVideoDiscussId)">
					<image style="width: 31rpx;height: 31rpx;" :class="(activeIndex == index && isCommentsFabulous) ||  row.state == '1'? 'select' : '' " :src="(activeIndex == index && isCommentsFabulous) ||  row.state == '1' ? '../../static/topic/fabulous-select.png' : '../../static/img/user/good.png'" mode=""></image>
					<!-- <image src="../../static/img/releaseVideo2/good.png" mode="" /> -->
					<view class="like">{{row.ziLikeNum}}</view>
				</view> 
				<view class="level"></view>
			</view>
			
			<view class="footter">
				<input placeholder="回复晴天小猪：" class="footter-input" />
			</view>
			
		</view>

		
		
		
		


    </view>
</template>

<script>
	export default {
	    data() {
	        return {
				length: 0,
				dataList: {},
				id: 0,
				head: '',
				nickName: '',
				creatTime: '',
				shortVideoDiscuss: '',
				activeIndex: 0,
				isCommentsFabulous: false,
				Tokens:'',
	        }
		},
		// onLoad(options){
		// 	console.log(options.Id)
		// 	this.id = options.Id
		// },
		onShow(){
			this.init()
		},
		
	    methods: {
			init(){
				let token
				let self = this
				uni.getStorage({
					key:"token",
					success: function (res) {
						token = res.data
						self.Tokens = res.data
					}
				})
				const url = this.url
				console.log(this.id)
				uni.request({
					url: url + "/controller/videocontroller/getallzizist",
					data: {
						shortVideoDiscussId: 174,
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': token
					},
					success: function (res){
						console.log(res.data.code)
						if(res.data.code==200){
							console.log(res)
							console.log(res.data.data.dataList[0].ziList.length)
							console.log(res.data.data.dataList[0].ziList)
							console.log(res.data.data.dataList[0].head)
				
							self.head = res.data.data.dataList[0].head
							self.nickName = res.data.data.dataList[0].nickName
							self.creatTime = res.data.data.dataList[0].creatTime
							self.shortVideoDiscuss = res.data.data.dataList[0].shortVideoDiscuss
							self.dataList = res.data.data.dataList[0].ziList
							self.length = res.data.data.dataList[0].ziList.length
							
						}else{
							console.log("请求异常")
						}
					}
				})
			},
			back(){
				uni.navigateBack()
			},
			checkContent(){
				uni.navigateBack()
			},
			// 评论点赞
			commentsFabulous(index, id) {
				console.log(index)
				console.log(id)
				let self = this
				uni.request({
					url: this.url + "controller/usercontroller/adddiscusslike",
					method: 'post',
					data: {discussId: id, type: '2'},
					header : {'content-type':'application/x-www-form-urlencoded', 'token': self.Tokens, 'port': 'app'},
					success:(res) => {
						if(res.data.code == 200) {
							self.activeIndex = id;
							self.isCommentsFabulous = !self.isCommentsFabulous;
							console.log(self.activeIndex, self.isCommentsFabulous)
							self.init()
						} else {
							uni.showToast({
								icon: 'none',
								title: res.data.message
							});
							uni.hideToast();
						}
					}
				});
			},
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
		height:337rpx;
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
		left: 312rpx;
		bottom: 26rpx;
		font-size:36rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.top-image{
		position: absolute;
		left: 30rpx;
		bottom: 110rpx;
		width:68rpx;
		height:68rpx;
		border-radius:50%;
		background-color: #00f;
	}
	.top-image image{
		width:68rpx;
		height:68rpx;
		border-radius:50%;
	}
	.top-nickname{
		position: absolute;
		left: 123rpx;
		bottom: 146rpx;
		font-size:30rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.top-date{
		position: absolute;
		left: 123rpx;
		bottom: 110rpx;
		font-size:22rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.top-content{
		position: absolute;
		left: 123rpx;
		bottom: 64rpx;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.top-check{
		position: absolute;
		left: 123rpx;
		bottom: 23rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(249,183,44,1);
	}
	.good{
		position: absolute;
		right: 30rpx;
		bottom: 115rpx;
		width:31rpx;
		height:31rpx;
	}
	.good image{
		width:31rpx;
		height:31rpx;
	}
	
	.all-content{
		position: relative;
		/* float: left; */
		margin-top: 10rpx;
		padding:0 30rpx;
		padding-bottom: 90rpx;
		width:690rpx;
		height:100%;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 9rpx 0px rgba(93,93,93,0.08);
	}
	.all-content-details{
		/* margin-top: 30rpx; */
		padding-top: 30rpx;
		height: 160rpx;;
	}
	.content-details-image{
		float: left;
		margin-right: 26rpx;
		width:68rpx;
		height:68rpx;
		border-radius:50%;
		background-color: #00f;
	}
	.content-details-image image{
		border-radius:50%;
		width:68rpx;
		height:68rpx;
	}
	.content-details-left{
		float: left;
		font-size:30rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.content-details-date{
		font-size:22rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
		line-height:40rpx;
	}
	.content-details-content{
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:40rpx;
	}
	.like{
		float: right;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.content-details-good{
		float: right;
		margin-top: 45rpx;
		width: 80rpx;
		height: 31rpx;
	}
	.content-details-good image{
		float: right;
		margin-left: 4px;
		width: 31rpx;
		height: 31rpx;
	}
	.level{
		float: left;
		margin-top: 30rpx;
		margin-left: 94rpx;
		width:594rpx;
		height:1px;
		background:rgba(226,226,226,1);
	}
	.footter{
		position: fixed;
		width: 750rpx;
		height: 90rpx;
		bottom: 0;
		background-color: #fff;
		z-index: 10;
	}
	.footter-input{
		position: fixed;
		z-index: 100;
		left: 31rpx;
		bottom: 20rpx;
		width:661rpx;
		padding-left: 30rpx;
		height:70rpx;
		line-height: 70rpx;
		background:rgba(240,240,240,1);
		border-radius:30rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	
	
</style>
