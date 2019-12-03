<template>
	<view>
        <view class="release-video">
            <image class="back" src="../../static/img/topicDetails/back.png" @tap="back" mode="" />
			<image class="fly" src="../../static/img/releaseVideo2/share.png" mode="" />
        </view>
		<!-- 内容 -->
		<view class="release-content">
			
			<view class="pic">
				<video show-center-play-btn="false" :src="videoUrl" />
			</view>
			<!-- <view class="start">
				<image @play="start" src="../../static/img/releaseVideo2/start.png" mode="" />
			</view> -->
			
			<view class="user-info">
				<view class="my-active-image10" :style="{bottom:height-10+'px'}">
					<image :src="head" mode="" />
				</view>
				<view class="my-active-nickName10" :style="{bottom:height+3+'px'}">{{nickName}}</view>
				<view class="edit-del" :style="{bottom:height+'px'}" @tap="attention">
					<image src="../../static/img/topicDetails/interest.png" mode=""></image>
				</view>
				<view class="content">
					<view v-if="!isShowAllContent" class="text">{{content2}}</view>
					<view v-else class="text">{{content2 | ellipsis}}</view>
					<view v-if="content2.length > 60 " @click="open()">{{brandFold  ? '收起' : '展开'}}<image :class="brandFold ? '' : 'in'" src="../../static/drafts/arrow-bottom.png" mode=""></image></view>
				</view>
				
			</view>
		</view>
		<!-- 底部 -->
		<view class="footer">
			<!-- 点赞 -->
			<view class="good">
				<image  src="../../static/img/releaseVideo2/good.png"  v-show="showUpImg2" @click="good" />
				<image  src="../../static/topic/fabulous-select.png"  v-show="!showUpImg2" @click="good" />
			</view>
			<text class="text10">{{shortVideoLikeNum}}</text>
			<!-- 收藏 -->
			<view class="star">
				<image src="../../static/img/releaseVideo2/star.png"  v-show="showUpImg" @click="collect" mode="" />
				<image src="../../static/topic/collect-select.png"  v-show="!showUpImg" @click="collect" mode="" />
			</view>
			<text class="text11">{{shortVideoCollectionNum}}</text>
			<!-- 评论 -->
			<view @click="togglePopup('bottom', 'popup')" class="message">
				<image src="../../static/img/releaseVideo2/message.png" mode="" />
			</view>
			<text class="text12">{{shortVideoDiscussNum}}</text>
				<button class="topic" type="button" @click="togglePopup('bottom', 'popup')">
					<image class="topic-image" src="../../static/img/releaseVideo2/message.png" mode="" />
					<text class="text20">说点什么吧...</text>
				</button>
			<uni-popup  ref="popup" :type="type" @change="change" >
				<view class="recommend">
					<view class="recommend-content">
						<view class="all-recommend">全部评论 ({{shortVideoDiscussNum}})</view>
						<image class="close" src="../../static/img/releaseVideo2/close.png" mode="" />
					</view>
					<view v-for="(row, index) in dataList" :key="index" class="replay-detail">
						<view class="recommend-content2">
							<view class="my-active-image">
								<image :src="row.head" mode="" />
							</view>
							<view class="nickName-data">
								<view class="my-active-nickName">{{row.nick_name}}</view>
								<view class="my-active-data">{{row.cratee_time}}</view>
							</view>
							<text class="my-active-like">{{row.likenum}}</text>
							<!-- <image @click="replyLike(row.id)" class="recommend-good" src="../../static/img/releaseVideo2/good.png" mode="" /> -->
							<image  src="../../static/img/releaseVideo2/good.png" class="recommend-good" v-if="showUpImg3"  @click="replyLike(row.id)" />
							<image  src="../../static/topic/fabulous-select.png" class="recommend-good" v-if="!showUpImg3"  @click="replyLike(row.id)" />
						</view>
						<!-- <view class="recommend-text" @touchstart.prevent="touchstart(index)"   @touchend.prevent="touchend"> -->
						<view class="recommend-text" @click="testreply(row.id, row.nick_name)">
						<!-- <view class="recommend-text" @touchstart.prevent="touchstart(index)"   @touchend.prevent="touchend"> -->
							{{row.short_video_discuss}}
						</view>
						<!-- <view class="recommend-text" @click="testreply(row.id, row.nick_name)">
							{{row.zilist.length}}
						</view> -->
						
						<view v-show="row.zilist.length>0" class="recommend-text-reply">
							<view v-for="(rows, indexs) in row.zilist" :key="indexs">
								<text class="recommend-text-reply-user">{{rows.nick_name}}:</text>
								<text class="recommend-text-reply-user2">{{rows.short_video_discuss}}</text>
							</view>
							<text v-show="row.sonCount>2" class="recommend-text-reply-count" @tap="reply(row.id, row.nick_name)">共{{row.sonCount}}条回复></text>
						</view>
						<view class="horizon2"></view>
					</view>
					
					<view class="replay-input">
						<input @confirm="recordName" class="say-something" :placeholder="replySay" :value="inputValue" />
					</view>
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
				isShowAllContent: true,
				brandFold: true,
				showUpImg3:true,
				showUpImg2:true,
				showUpImg:true,//收藏点亮
				replySay: '说点什么吧...',
				spread_url: '我的室内设计是这样的，我觉得很漂亮 我的室内设计是这样的，我觉得很漂亮 我的室内设计我觉得',
				onOff:true,    //默认开启 展示
				onNO:false,    //默认关闭 收起
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
				shortVideoCollection: '',//收藏判断
				shortVideoDiscussNum: '',//评论次数
				shortVideoLikeNum: '',//点赞次数
				inputValue: '',
				outUserId: '',
				id: '',
				dataList: {},
				dataLists: {},
				dataListss: {},
				height: 79,
				userId: '',
				recommendId: '',
				recommendName: '',
				panduanId: 0
			}
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 45) {
				return value.slice(0,45) + '...'
			  }
			  return value
			}
		},
		onLoad() {
			let views = uni.createSelectorQuery().select(".content");
			views.fields({
				size: true
			}, data => {
				console.log("得到节点信息" + JSON.stringify(data));
				// console.log("节点的宽为" + data.height);
				// self.height = data.height
			}).exec();
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
					'token': token
				},
				success: function (res){
					console.log(res)
					console.log(res.data.data.dataList[0].id)
					id = res.data.data.dataList[0].id

					self.id = res.data.data.dataList[0].id
					self.userId = res.data.data.dataList[0].userId
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
							console.log(self.content2.length)
							self.videoUrl = res.data.data.videoUrl
							self.shortVideoCollectionNum = res.data.data.shortVideoCollectionNum
							self.shortVideoDiscussNum = res.data.data.shortVideoDiscussNum
							self.shortVideoLikeNum = res.data.data.shortVideoLikeNum
							self.outUserId = res.data.data.id
							// res.data.data.shortVideoCollection
							// res.data.data.shortVideoLike
							
							if(res.data.data.shortVideoCollection==1){
								self.showUpImg = false
							}
							if(res.data.data.shortVideoLike==1){
								self.showUpImg2 = false
							}
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
								self.dataList = res.data.data.dataList
								console.log(res.data.data.dataList[1].id)
								if(res.data.data.shortVideoLike==1){
									self.showUpImg2 = false
								}
								console.log(self.dataList)
							}else{
								console.log('请求异常')
							}
						}
					})
				}
			})
			
			
		},
		methods: {
			start(e){
				console.log(e)
			},
			back(){
				uni.navigatorBack()
			},
			attention(){

			},
			open() {
				let self = this
				this.isShowAllContent = !this.isShowAllContent;
				this.brandFold = !this.brandFold
				setTimeout(function() {
					let views = uni.createSelectorQuery().select(".content");
					views.fields({
						size: true
					}, data => {
						console.log("得到节点信息" + JSON.stringify(data));
						console.log("节点的宽为" + data.height);
						self.height = data.height
					}).exec();
				},1)
				
			},
			replyLike(id){
				this.showUpImg3 = !this.showUpImg3
				this.panduanId = id
				let token
				let self = this
				uni.getStorage({
					key:"token",
					success: function (res) {
						token = res.data;
					}
				})
				const url = this.url
				console.log(id)
				//添加、删除点赞
				uni.request({
					url: url + "/controller/usercontroller/adddiscusslike",
					data: {
						type: '2',
						discussId: id,
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
							
						}else{
							console.log("请求异常")
						}
					}
				})
				if(this.showUpImg3==false){
					self.state = self.state+1
				}else{
					self.state = self.state-1
				}
			},
			good(){
				this.showUpImg2 = !this.showUpImg2
				let token
				let self = this
				uni.getStorage({
					key:"token",
					success: function (res) {
						token = res.data;
					}
				})
				const url = this.url
				
				console.log(self.id)
				//添加、删除点赞
				uni.request({
					url: url + "/controller/usercontroller/addshortvideolike",
					data: {
						shortVideoId: self.id,
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
							
						}else{
							console.log("请求异常")
						}
					}
				})
				if(this.showUpImg2==false){
					self.shortVideoLikeNum = self.shortVideoLikeNum+1
				}else{
					self.shortVideoLikeNum = self.shortVideoLikeNum-1
				}
			},
			collect(){
				this.showUpImg = !this.showUpImg 
				let token
				let self = this
				uni.getStorage({
					key:"token",
					success: function (res) {
						token = res.data;
					}
				})
				const url = this.url
				
				console.log(self.id)
				uni.request({
					url: url + "/controller/usercontroller/addusercollection",
					data: {
						type: 2,
						collectionContentId: self.id,
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
						}else{
							console.log("请求异常")
						}
					}
				})
				
				if(this.showUpImg==false){
					//添加收藏
					self.shortVideoCollectionNum = self.shortVideoCollectionNum+1
				}else{
					self.shortVideoCollectionNum = self.shortVideoCollectionNum-1
				}
				
			},
			testreply(id, name){
				console.log(id, name)
				this.recommendId = id
				this.recommendName = name
				this.replySay = '回复' + name + ':';
				console.log(this.replySay)
			},
			reply(id){
				console.log(id)
				uni.navigateTo({
					url: "/pages/answer/answer?Id=" + id
				})
			},
			testreply2(id){
				console.log(id)
				
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
				if(this.recommendId!=''){
					uni.request({
						url: url + "controller/usercontroller/addanswershortvideodiscuss",
						data: {
							outUserId: self.outUserId,
							id: self.recommendId,
							outUserName: self.recommendName,
							shortVideoDiscuss: e.detail.value
						},
						method: 'POST',
						header : {
							'content-type':'application/x-www-form-urlencoded', 
							'port': 'app',
							'token': token
						},
						success: function (res){
							console.log(res)
							if(res.data.code==200){
								
							}else{
								console.log("请求异常")
							}
						}
					})
				}else{
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
				}
				
            },
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
				let self = this
				self.fold=!self.fold;
				if(self.fold==false){
					let views = uni.createSelectorQuery().select(".fold");
					views.fields({
						size: true
					}, data => {
						if(JSON.stringify(data) == "null") {
							return
						}
						console.log("得到节点信息" + JSON.stringify(data));
						console.log("节点的宽为" + data.height);
						self.height = data.height
					}).exec();
				}else{
					let view = uni.createSelectorQuery().select(".unfold");
					console.log(view)
					view.fields({
						size: true
					}, data => {
						if(JSON.stringify(data) == "null") {
							return
						}
						console.log("得到节点信息" + JSON.stringify(data));
						console.log("节点的宽为" + data.height);
						self.height = data.height
					}).exec();
				}
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
	page{
		background-color: #000;
	}
	.in {
		transform: rotate(180deg);
		margin-bottom: 0 !important;
	}
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
		position: absolute;
		align-items: center;
		left: 30rpx;
		bottom: 0;
		width: 690rpx;
		height: 300rpx;
	}
	.my-active-image10{
		position: absolute;
		left: 10rpx;
		bottom: 158rpx;
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
		position: absolute;
		left: 120rpx;
		bottom: 173rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
	}
	.edit-del{
		/* position: absolute; */
		display: none;
		left: 277rpx;
		bottom: 168rpx;
		width: 106rpx;
		height: 48rpx;
	}
	.edit-del image{
		width: 106rpx;
		height: 48rpx;
	}
	
	/* 展开 */
	.content {
		z-index: 99;
		position: absolute;
		bottom: 0rpx;
		padding: 30rpx 0;
		overflow: hidden;
	}
	.content view {
		display: inline;
	}
	.text {
		width: 100%;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
		line-height:33rpx;
		/* float: left; */
		position: relative;
	}
	.content view:last-child {
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(90,124,171,1);
		line-height:33rpx;
		margin-left: 20rpx;
	}
	.content view:last-child image {
		width: 26rpx;
		height: 19rpx;
		margin-bottom: -1rpx;
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
		right: 27rpx;
		bottom: 44rpx;
		width: 31rpx;
		height: 31rpx;
	}
	.good image{
		width: 31rpx;
		height: 31rpx;
	}
	.text10{
		position: absolute;
		right: 62rpx;
		bottom: 36rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.star{
		position: absolute;
		right: 151rpx;
		bottom: 44rpx;
		width: 31rpx;
		height: 31rpx;
	}
	.star image{
		width: 31rpx;
		height: 31rpx;
	}
	.text11{
		position: absolute;
		right: 190rpx;
		bottom: 36rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.message{
		position: absolute;
		right: 274rpx;
		bottom: 44rpx;
		width: 31rpx;
		height: 31rpx;
	}
	.message image{
		width: 31rpx;
		height: 31rpx;
	}
	.text12{
		position: absolute;
		right: 311rpx;
		bottom: 36rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.topic{
		position: absolute;
		left: 30rpx;
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
		z-index: 99;
		margin-top: -30rpx;
		margin-left: -30rpx;
		width:750rpx;
		height:100%;
		background:rgba(255,255,255,1);
		border-radius:22rpx 22rpx 0px 0px;
		padding-bottom: 140rpx;
	}
	.replay-detail{
		z-index: 99;
		margin-top: -30rpx;
		margin-left: -30rpx;
		width:750rpx;
		height:100%;
		background:rgba(255,255,255,1);
		border-radius:22rpx 22rpx 0px 0px;
		padding-bottom: 140rpx;
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
	.my-active-like{
		margin-top: 36rpx;
		font-size:26rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
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
	.recommend-text-reply{
		position: relative;
		top: 12rpx;
		left: 123rpx;
		width:566rpx;
		height:135rpx;
		background:rgba(248,248,248,1);
		border:1px solid rgba(239,239,239,1);
		border-radius:6rpx;
	}
	.recommend-text-reply-user{
		margin-left: 16rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
		line-height:28rpx;
	}
	.recommend-text-reply-user2{
		margin-left: 16rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
		line-height:28rpx;
	}
	.recommend-text-reply-count{
		position: absolute;
		bottom: 2px;
		margin-left: 16rpx;
		font-size:22rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(249,183,44,1);
		line-height:28rpx;
	}
	.horizon2{
		float: right;
		margin-right: 30rpx;
		margin-top: 40rpx;
		width:594rpx;
		height:2rpx;
		background:rgba(226,226,226,1);
	}

	
	.replay-input {
		width: 100%;
		height: 120rpx;
		background: #FFFFFF;
		box-sizing: border-box;
		padding: 20rpx;
		position: fixed;
		bottom: 0;
	}
	.replay-input2 {
		display: none;
	}
	.say-something{
		/* position: absolute;
		right: 30rpx;
		bottom: 30rpx;	
		width:671rpx;*/
		height:70rpx; 
		background:rgba(240,240,240,1);
		border-radius:30rpx;
		padding-left: 30rpx;
		/* border: 1px solid red; */
	}
</style>
