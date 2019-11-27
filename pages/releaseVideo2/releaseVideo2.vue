<template>
	<view>
        <view class="release-video">
            <image class="back" src="../../static/img/topicDetails/back.png" mode="" />
			<image class="fly" src="../../static/img/releaseVideo2/share.png" mode="" />
        </view>
		<!-- 内容 -->
		<view class="release-content">
			<!-- <view class="pic">
				<image src="../../static/img/releaseVideo2/pic.png" mode="" />
			</view> -->
			<view class="pic">
				<video :src="videoUrl" />
			</view>
			<!-- <view class="start">
				<image src="../../static/img/releaseVideo2/start.png" mode="" />
			</view> -->
			
			<view class="user-info">
				<view class="my-active-image10">
					<image :src="head" mode="" />
				</view>
				<view class="my-active-nickName10">{{nickName}}</view>
				<view class="edit-del">
					<image src="../../static/img/topicDetails/interest.png" mode=""></image>
				</view>
				<view class="my-active-recommend">
					<!-- 某臣氏骑剑活动！水雾质地 很轻薄 不沾黏！在上待几分钟会变成雾面哑光感 超高级！显色很持久... -->
					<view :class="fold ? 'fold' : 'unfold'" >
						<label>    
							<span>{{content2}}</span>
						</label>	
					</view>
					<text id="the-id" class="my-active-more" @tap="btn" v-show="fold">展开</text>
					<text id="the-id" class="my-active-more" @tap="btn" v-show="!fold">收起</text>
					<!-- <text class="my-active-more">展开</text> -->
					<view class="my-active-more-image">></view>
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="footer">
			<!-- 点赞 -->
			<view class="good">
				<image  src="../../static/img/releaseVideo2/good.png" />
			</view>
			<text class="text10">{{shortVideoLikeNum}}</text>
			<!-- 收藏 -->
			<view class="star">
				<image src="../../static/img/releaseVideo2/star.png" mode="" />
			</view>
			<text class="text11">{{shortVideoCollectionNum}}</text>
			<!-- 评论 -->
			<view class="message">
				<image src="../../static/img/releaseVideo2/message.png" mode="" />
			</view>
			<text class="text12">{{shortVideoDiscussNum}}</text>
				<button class="topic" type="button" @click="togglePopup('bottom', 'popup')">
					<image class="topic-image" src="../../static/img/releaseVideo2/message.png" mode="" />
					<text class="text20">说点什么吧...</text>
				</button>
			<uni-popup ref="popup" :type="type" @change="change">
				<view class="recommend">
					<view class="recommend-content">
						<view class="all-recommend">全部评论 ({{dataList_lenght}})</view>
						<image class="close" src="../../static/img/releaseVideo2/close.png" mode="" />
					</view>
					<view v-for="(row, index) in dataList" :key="index">
						<view class="recommend-content2">
							<view class="my-active-image">
								<image :src="row.head" mode="" />
							</view>
							<view class="nickName-data">
								<view class="my-active-nickName">{{row.nick_name}}</view>
								<view class="my-active-data">{{row.cratee_time}}</view>
							</view>
							
							<image class="recommend-good" src="../../static/img/releaseVideo2/good.png" mode="" />
							
						</view>
						<!-- <view class="recommend-text" @touchstart.prevent="touchstart(index)"   @touchend.prevent="touchend"> -->
						<view class="recommend-text" @click="testreply(row.id, row.nick_name)">
						<!-- <view class="recommend-text" @touchstart.prevent="touchstart(index)"   @touchend.prevent="touchend"> -->
							{{row.short_video_discuss}}
						</view>
						<view class="horizon2"></view>
					</view>
					
					

					<!-- <view class="my-active-image1"></view>
					<view class="my-active-nickName1">晴天小猪</view>
					<view class="my-active-data1">2019-12-12  09:11</view>
					<image class="recommend-good1" src="../../static/img/releaseVideo2/good.png" mode="" />
					<view class="recommend-text1">
						我的室内设计是这样的，我觉得很漂亮 我的室内设计是这样的，我觉得很漂亮 我的室内设计我觉得
					</view>
					<view class="answer">
						<text class="user">屋主：</text> <text class="answer-content">好</text>
						<text class="user1">屋主回复晴天小猪：</text> <text class="answer-content1">ok</text>
						<text class="total-answer">共四条回复></text>
					</view> -->
					<input @confirm="recordName" class="say-something" :placeholder="replySay" :value="inputValue" />
				</view>
				
			</uni-popup>
		</view>
    </view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	
	export default {
		components: {
			uniPopup,
			uniIcons
		},
		data() {
			return {
				replySay: '说点什么吧...',
				spread_url: '我的室内设计是这样的，我觉得很漂亮 我的室内设计是这样的，我觉得很漂亮 我的室内设计我觉得',
				onOff:true,    //默认开启 展示
				onNO:false,    //默认关闭 收起
				fold:true,
				textfont:[],
				show: false,
				type: '',
				list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
				content: '顶部弹 popup',
				bottomData: [{
						text: '微信',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png',
						name: 'wx'
					},
					{
						text: '支付宝',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png',
						name: 'wx'
					},
					{
						text: 'QQ',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png',
						name: 'qq'
					},
					{
						text: '新浪',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png',
						name: 'sina'
					},
					{
						text: '百度',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png',
						name: 'copy'
					},
					{
						text: '其他',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png',
						name: 'more'
					}
				],
				head: '',
				nickName: '',
				noticeList: [{

				}],
				videoUrl: '',
				content2: '',
				shortVideoCollectionNum: '',//收藏次数
				shortVideoDiscussNum: '',//评论次数
				shortVideoLikeNum: '',//点赞次数
				inputValue: '',
				outUserId: '',
				id: '',
				dataList: {},
				dataList_lenght: ''

			}
		},
		onLoad() {
			// var view = uni.createSelectorQuery().select(".fold");
			// view.boundingClientRect(data => {
			// console.log("节点离页面顶部的距离为" + data.height);
			// }).exec();
		},
		onShow:function(){
			let token
			let self = this
			let id = ''
			uni.getStorage({
				key:"token",
				success: function (res) {
					token = res.data;
				}
			})
			const url = this.url
			

			uni.request({
				url: url + "controller/usercontroller/getshortvideolist",
				data: {},
				method: 'POST',
				header : {
					'content-type':'application/x-www-form-urlencoded', 
					'port': 'app',
					// 'token': token
					'token': '3472497a5dbf4778896ab9221490b671'
				},
				success: function (res){
					console.log(res)
					console.log(res.data.data.dataList[0].id)
					id = res.data.data.dataList[0].id

					self.id = res.data.data.dataList[0].id
					self.textfont = res.data.data.dataList
					//获取第一页内容
					uni.request({
						url: url + "/controller/usercontroller/getshortvideobyid",
						data: {shortVideoId:res.data.data.dataList[0].id},
						method: 'POST',
						header : {
							'content-type':'application/x-www-form-urlencoded', 
							'port': 'app',
							'token': token
						},
						success: function (res){
							console.log(res)
							console.log(res.data.data.nickName)
							self.nickName = res.data.data.nickName
							self.head = res.data.data.head
							self.content2 = res.data.data.content
							self.videoUrl = res.data.data.videoUrl
							self.shortVideoCollectionNum = res.data.data.shortVideoCollectionNum
							self.shortVideoDiscussNum = res.data.data.shortVideoDiscussNum
							self.shortVideoLikeNum = res.data.data.shortVideoLikeNum
							self.outUserId = res.data.data.id
						}
					})
					// 获取评论内容
					uni.request({
						url: url + "controller/videocontroller/getsvdiscusslist",
						data: {
							id: res.data.data.dataList[0].id
						},
						method: 'POST',
						header : {
							'content-type':'application/x-www-form-urlencoded', 
							'port': 'app',
							'token': token
						},
						success: function (res){
							console.log(res)
							console.log(res.data.code)
							if(res.data.code==200){
								console.log(res.data.data.dataList.length)
								self.dataList = res.data.data.dataList
								self.dataList_lenght = res.data.data.dataList.length
							}else{
								console.log('请求异常')
							}
						}
					})
				}
			})
			
			
		},
		methods: {
			testreply(id, name){
				console.log(id, name)
				this.replySay = '回复' + name + ':';
				console.log(this.replySay)
			},
			recordName(e) {  
				this.inputValue = e.detail.value;
				console.log(e.detail.value)

				let token
				let self = this
				uni.getStorage({
					key:"token",
					success: function (res) {
						token = res.data;
					}
				})
				const url = this.url
				
				console.log(self.outUserId)
				console.log(self.nickName)
				console.log(self.id)
				uni.request({
					url: url + "controller/usercontroller/addshortvideodiscuss",
					data: {
						outUserId: self.outUserId,
						shortVideoId: self.id,
						outUserName: self.nickName,
						shortVideoDiscuss: e.detail.value
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
							
						}else{
							console.log("请求异常")
						}
					}
				})

            },
			// search(e){
			// 	console.log("777777")
			// 	console.log(e.event.detail)
			// },
			touchstart(index) {
				let that = this;
				clearInterval(this.Loop); //再次清空定时器，防止重复注册定时器
				console.log(index)
				this.Loop = setTimeout(function() {
					uni.showModal({
						title: '删除',
						content: '请问要删除本条消息吗？',
						success: function(res) {
							if (res.confirm) {
								console.log(this.noticeList)
								//alert(this.noticeList[index].id)
								deleteNotify(that.noticeList[index].id, '0').then(res => {
									if (res.data.code == 1) {
										uni.showToast({
											title: '删除成功',
											duration: 2000
										})
										that.getnotify();
									}
								})
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}.bind(this), 1000);
			},
			touchend() {
				console.log('结束')
				clearInterval(this.Loop);
			},
			paste(value) {
				uni.setClipboardData({
					data: value
				});
			},
			btn(){      // 收起 展开
				this.fold=!this.fold;
			},
			togglePopup(type, open) {
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
			cancel(type) {
				if (type === 'tip') {
					this.show = false
					return
				}
				this.$refs[type].close()
			},
			change(e) {
				console.log(e.show)
			}
		}
	}
</script>

<style>
    .release-video{
        position: relative;
        width:750rpx;
        height:128rpx;
        background:#000000;
    }
    .back{
        position: absolute;
        left: 31rpx;
        bottom: 26rpx;
        width:15rpx;
        height:31rpx;
    }
    .back image{
        width:15rpx;
        height:31rpx;
    }
	.fly{
	    position: absolute;
	    right: 27rpx;
	    top: 67rpx;
	    width:39rpx;
	    height:37rpx;
	}
	.fly image{
	    width:39rpx;
	    height:37rpx;
	}
	/* 内容 */
	.release-content{
		position: relative;
		width:750rpx;
	    height:1106rpx;
	}
	.pic{
		position: absolute;
		width:750rpx;
	    height:1106rpx;
	}
	.pic video{
		width:750rpx;
	    height:1106rpx;
	}
	.pic image{
		width:750rpx;
	    height:1106rpx;
	}
	.start{
		position: absolute;
		top: 458rpx;
		left: 301rpx;
		width:148rpx;
	    height:162rpx;
	}
	.start image{
		width:148rpx;
	    height:162rpx;
	}
	.user-info{
		position: relative;
		/* display: flex;
		justify-content: space-around; */
		align-items: center;
		left: 30rpx;
		top: 441px;
		width: 690rpx;
		/* height: 300rpx; */
	}
	.my-active-image10{
		float: left;
		left: 30rpx;
		bottom: 152rpx;
		margin-bottom: 0rpx;
		width:80rpx;
		height:80rpx;
		background:#ff0;
		border-radius:50%;
	}
	.my-active-image10 image{
		border-radius:50%;
		width:80rpx;
		height:80rpx;
	}
	.my-active-nickName10{
		float: left;
		left: 128rpx;
		bottom: 177rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
	}
	.edit-del{
		float: left;
		left: 277rpx;
		bottom: 168rpx;
		width: 106rpx;
		height: 48rpx;
	}
	.edit-del image{
		width: 106rpx;
		height: 48rpx;
	}
	.my-active-recommend{
		float: left;
		left: 32rpx;
		/* bottom: 64rpx; */
		bottom: 4rpx;
		width:674rpx;
		/* height:59rpx; */
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
		line-height:33rpx;
	}
	.fold{
		display: -webkit-box;
		 word-break: break-all;
		 text-overflow: ellipsis;
		 font-size:26rpx;
		 font-family:PingFang SC;
		 font-weight:500;
		 color:rgba(255,255,255,1);
		 line-height:33rpx;
		 overflow: hidden;
		 -webkit-box-orient: vertical;
		 -webkit-line-clamp:2;
	}
	.unfold{
		 font-size:26rpx;
		 font-family:PingFang SC;
		 font-weight:500;
		 color:rgba(255,255,255,1);
		 line-height:33rpx;
	}
	.my-active-more{
		margin-left: 10rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
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
		color:rgba(255,255,255,1);
		line-height:49rpx;
	}
	.footer{
		position: relative;
		width:750rpx;
		height:100rpx;
		background:rgba(0,0,0,1);
	}
	.good{
		position: absolute;
		left: 27rpx;
		bottom: 33rpx;
		width: 31rpx;
		height: 31rpx;
	}
	.good image{
		width: 31rpx;
		height: 31rpx;
	}
	.text10{
		position: absolute;
		left: 66rpx;
		bottom: 24rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.star{
		position: absolute;
		left: 151rpx;
		bottom: 33rpx;
		width: 31rpx;
		height: 31rpx;
	}
	.star image{
		width: 31rpx;
		height: 31rpx;
	}
	.text11{
		position: absolute;
		left: 190rpx;
		bottom: 24rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.message{
		position: absolute;
		left: 274rpx;
		bottom: 33rpx;
		width: 31rpx;
		height: 31rpx;
	}
	.message image{
		width: 31rpx;
		height: 31rpx;
	}
	.text12{
		position: absolute;
		left: 311rpx;
		bottom: 24rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.topic{
		position: absolute;
		right: 30rpx;
		bottom: 14rpx;
		width:302rpx;
		height:70rpx;
		background:rgba(86,86,86,1);
		border-radius:35rpx;
	}
	.topic-image{
		position: absolute;
		left: 20rpx;
		bottom: 23rpx;
		width:24rpx;
		height:24rpx;
	}
	.topic-image image{
		width:24rpx;
		height:24rpx;
	}
	.text20{
		position: absolute;
		left: 58rpx;
		bottom: 6rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
	}
	
	.uni-popup__wrapper.bottom{
		border-radius:22rpx 22rpx 0px 0px;

	}
	.recommend{
		margin-top: -30rpx;
		margin-left: -30rpx;
		width:750rpx;
		height:799rpx;
		background:rgba(255,255,255,1);
		border-radius:22rpx 22rpx 0px 0px;
	}
	.recommend-content{
		height: 111rpx;
		width:750rpx;
		border-bottom: 1px solid rgba(226,226,226,1);
	}
	
	.all-recommend{
		position: absolute;
		left: 30rpx;
		top: 41rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.close{
		position: absolute;
		right: 30rpx;
		top: 44rpx;
		width:25rpx;
		height:25rpx;
	}
	.close image{
		width:25rpx;
		height:25rpx;
	}
	.recommend-content2{
		display: flex;
		justify-content: space-around;
		padding-top: 30rpx;
		padding-left: 26rpx;
		padding-right: 26rpx;
		height: 100rpx;
		/* height: 206rpx; */
		width:698rpx;
	}
	.my-active-image{
		/* float: left;
		margin-left: 30rpx;
		margin-top: 30rpx; */
		width:68rpx;
		height:68rpx;
		background:rgba(149,149,149,1);
		border-radius:50%;
	}
	.my-active-image image{
		width:68rpx;
		height:68rpx;
		border-radius:50%;
	}
	.nickName-data{
		width: 530rpx;
	}
	.my-active-nickName{
		
		font-size:30rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.my-active-data{
		
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
		line-height:60rpx;
	}
	.recommend-good{
		/* float: left;
		right: 30rpx;
		top: 185rpx; */
		padding-top: 40rpx;
		width:31rpx;
		height:31rpx;
	}
	.recommend-good image{
		width:31rpx;
		height:31rpx;
	}
	.recommend-text{
		display: flex;
		/* height:67rpx; */
		overflow: hidden;
		width: 568rpx;
		padding-left: 125rpx;
		padding-right: 57rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:40rpx;
	}
	.horizon2{
		float: right;
		margin-right: 30rpx;
		margin-top: 40rpx;
		width:594rpx;
		height:2rpx;
		background:rgba(226,226,226,1);
	}

	.my-active-image1{
		position: absolute;
		left: 30rpx;
		top: 388rpx;
		width:80rpx;
		height:80rpx;
		background:rgba(149,149,149,1);
		border-radius:50%;
	}
	.my-active-nickName1{
		position: absolute;
		left: 128rpx;
		top: 388rpx;
		font-size:30rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.my-active-data1{
		position: absolute;
		left: 128rpx;
		top: 434rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.recommend-good1{
		position: absolute;
		right: 30rpx;
		top: 417rpx;
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
		top: 471rpx;
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
		right: 61rpx;
		top: 550rpx;
		width:566rpx;
		height:135rpx;
		background:rgba(248,248,248,1);
		border:1px solid rgba(239,239,239,1);
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
	.user1{
		position: absolute;
		left: 19rpx;
		top: 52rpx;	
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.answer-content1{
		position: absolute;
		right: 304rpx;
		top: 52rpx;	
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.total-answer{
		position: absolute;
		left: 20rpx;
		bottom: 20rpx;	
		font-size:22rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(249,183,44,1);
	}
	.say-something{
		position: absolute;
		right: 30rpx;
		bottom: 30rpx;	
		width:671rpx;
		height:70rpx;
		background:rgba(240,240,240,1);
		border-radius:30rpx;
		padding-left: 30rpx;
		
	}
	.say-something-text{
		position: absolute;
		left: 30rpx;
		bottom: 24rpx;	
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
</style>
