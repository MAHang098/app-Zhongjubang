<template>
    <view>
		<view class="header" v-bind:class="{ 'in': scrollFlag }">
			<view class="header-left">
				<view class="header-left-image" @click.stop="cancel">
					<image :src="scrollFlag ? 'http://www.zhongjubang.com/api/upload/static/topic/topic-back.png' : 'http://www.zhongjubang.com/api/upload/static/img/topicDetails/back.png' " mode="" ></image>
				</view> 
				<text class="header-topic">{{scrollFlag ? topic : ''}}</text>
			</view>
			<view class="header-right">
				<image v-if="!scrollFlag" :src="talkThemeState == 0 ? 'http://www.zhongjubang.com/api/upload/static/img/topicDetails/interest.png' : 'http://www.zhongjubang.com/api/upload/static/img/topicDetails/focus.png'" mode="" @click.stop="focusTopic"></image>
				<image v-else :src="talkThemeState == 0 ? 'http://www.zhongjubang.com/api/upload/static/img/topicDetails/interest.png' : 'http://www.zhongjubang.com/api/upload/static/topic/focus.png'" mode="" @click.stop="focusTopic"></image>
				<image :src="scrollFlag ? 'http://www.zhongjubang.com/api/upload/static/topic/topic-share.png' : 'http://www.zhongjubang.com/api/upload/static/img/topicDetails/share.png'" mode=""></image>
			</view>
		</view>
		<view class="topic-detail">
			<view class="title">
				<image src="http://www.zhongjubang.com/api/upload/static/img/topicDetails/bg.png" mode=""></image>
				<view class="content">
					<view class="main-title">
						<image src="http://www.zhongjubang.com/api/upload/static/img/topicDetails/money.png" mode=""></image>
						<text>{{topic}}</text>
					</view>
					<view class="Subheading">
						{{talkThemeRemarks}}
					</view>
					<view class="topic-sum">
						<text>参与{{participateCount}}</text>
						<text class="point"></text>
						<text>关注{{talkThemeNum}}</text>
					</view>
				</view>
			</view>
			
			<!-- 话题详情 start -->
			<view class="topic-participation">
				<view class="detial" v-for="(item, index) in topicList" :key="index">
					<view class="user-list">
						<view class="left">
							<view class="avatar">
								<image :src="item.head" mode=""></image>
							</view>
							<view class="user-details">
								<view class="name">{{item.nickName}} <image src="http://www.zhongjubang.com/api/upload/static/fans-logo.png" mode=""></image></view>
								<view class="time">{{item.createTime}}</view>
							</view>
						</view>
						<view class="right" @click.stop="focus(index, item.userId, item.attentionState)">
							<image :src="( activeIndex == index && isShowFocus) || item.attentionState != 0 ? 'http://www.zhongjubang.com/api/upload/static/topic/focus.png' : 'http://www.zhongjubang.com/api/upload/static/img/topicDetails/interest.png'" mode=""></image>
						</view>
					</view>
					
					<!-- 文字内容 start -->
					<view class="describe">
						<view v-if="(activeIndex == index && !isShowAllContent)" class="text">{{item.content }}</view>
						<view v-else class="text">{{item.content | ellipsis}}</view>
						<view class="anCotent" v-if="item.content.length > 60 " @click.stop="open(index)">{{activeIndex == index && brandFold  ? '收起' : '展开'}}<image :class="brandFold ? '' : 'in'" src="http://www.zhongjubang.com/api/upload/static/drafts/arrow-bottom.png" mode=""></image></view>
					</view>
					<!-- 文字内容 end -->
					
					<!-- 图片/视频 start -->
					<view class="imageList">
						<image src="http://www.zhongjubang.com/api/upload/static/draftsT.png" mode="" v-show="show"></image>
					</view>
					<!-- <video id="myVideo" :src="item.videoUrl" v-show="!show" enable-danmu danmu-btn controls></video> -->
					<!-- 图片/视频 end -->
					
					<!-- 操作按钮 start -->
					<view class="operate">
						<view class="share"><image src="http://www.zhongjubang.com/api/upload/static/img/user/share.png" mode=""></image></view>
						<view class="number">
							<view class="message" @click.stop="togglePopup('bottom', 'comments',item.userId, item.gcircleContentId, item.nickName,item.gCollectionDiscussNum)">
								<image src="http://www.zhongjubang.com/api/upload/static/img/user/message.png" mode=""></image>
								<text>{{item.gCollectionDiscussNum}}</text>
							</view>
							<view class="collect" @click.stop="collect(index, item.gcircleContentId, item.collectionState)">
								<image :src="(activeIndex == index && isShowCollect) || item.collectionState != 0 ? 'http://www.zhongjubang.com/api/upload/static/topic/collect-select.png' : 'http://www.zhongjubang.com/api/upload/static/img/user/star.png' " mode=""></image>
								<text>{{item.collectionNum}}</text>
							</view>
							<view class="fabulous"  @click.stop="fabulous(index, item.gcircleContentId,  item.gContentLikeState)">
								<image :src="(fabulousIndex == index && isShowFabulous) || item.gContentLikeState === 1 ? 'http://www.zhongjubang.com/api/upload/static/topic/fabulous-select.png' : 'http://www.zhongjubang.com/api/upload/static/img/user/good.png'" mode=""></image>
								<text>{{item.gCollectionLikeNum}}</text>
								<!-- <text>{{fabulousIndex }}</text> -->
							</view>
						</view>
					</view>
					<!-- 操作按钮 end -->
					<view class="look-more">-{{statusMore== 'end' ? '没有更多' : '上拉加载更多'}}-</view>
				</view>
				
			</view>
			
			<view id="footer" @click.stop="goRelease" v-show="isShowTopic">
				<view>
					<image src="http://www.zhongjubang.com/api/upload/static/topic/camera.png" mode=""></image>
					参与话题
				</view>
			</view>
		</view>
		<!-- 评论弹窗 start -->
		<uni-popup ref="comments" :type="popupType" :custom="true" class="comments-list">
			<view class="uni-comments">
				<view class="uni-comments-title">
					<view>全部评论({{gCollectionDiscussNum}})</view>
					<view @click.stop="cancelPopup('comments')">
						<image src="http://www.zhongjubang.com/api/upload/static/img/releaseVideo2/close.png" mode=""></image>
					</view>
				</view>
				<view class="uni-comments-content">
					<view class="comments-detail" v-for="(row, index) in dataList" :key="index">
						<view class="comments-user">
							<image src="http://www.zhongjubang.com/api/upload/static/drafts.png" mode=""></image>
							<view>
								<text class="comments-name">{{row.nick_name}}</text>
								<text class="date">{{row.cratee_time}}</text>
							</view>
							<view class="fabulous"  @click.stop="commentsFabulous(index, row.id, row.state)">
								{{row.likenum}}
								<image :src="(activeIndex == index && isCommentsFabulous) ||  row.state != 0 ? 'http://www.zhongjubang.com/api/upload/static/topic/fabulous-select.png' : 'http://www.zhongjubang.com/api/upload/static/img/user/good.png'" mode=""></image>
							</view>
						</view>
						<view class="comments-content">
							<text  @click="testreply(row.id, row.nick_name)">{{row.gcircle_content_discuss}}</text>
							<view class="reply-comments" v-show="row.zilist.length > 0">
								<view v-for="(rows, indexs) in row.zilist" :key="indexs">
									<text>{{rows.nick_name}}：{{rows.gcircle_content_discuss}}</text>
								</view>
								<text v-show="row.sonCount>2" class="all-replay" @tap="reply(row.id)">共{{row.sonCount}}条回复 ></text>
							</view>
							<text class="parting-line"></text>
						</view>
					</view>
				</view>
				<!-- <view class="uni-share-btn" @click="cancel('share')">取消分享</view> -->
				<view class="comments-botton">
					<input @confirm="recordName" :placeholder="replySay" :value="inputValue" type="text" />
				</view>
			</view>
		</uni-popup>
		<!-- 评论 end -->
    </view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
    export default {
		components:{ uniPopup},
        data() {
			return {
				isFoucs: false,   // 是否关注当前话题
				talkThemeState: 0,  // 话题状态  0：未关注   1：已关注
				replySay: '说点什么吧...',
				topic: '我家阳台收纳神器',
				brandFold: false,
				isShowAllContent: true,
				show: true,
				talkThemeNum: 0,
				participateCount: 0,
				talkThemeRemarks: '',
				scrollFlag:false,
				content: '',
				topicList: [],
				activeIndex: -1,
				fabulousIndex: -1,
				isShowFocus: false,   //是否显示已关注图标
				isShowFabulous: false,   //是否显示已点赞
				isShowCollect: false,   //是否显示已收藏
				topicId: '',
				// 弹窗所用到的变量
				popupShow: false,
				popupType: '',
				inputValue: '',
				outUserId: '',
				gcircleContentId: '',
				nickName: '',
				gCollectionDiscussNum: '',
				dataList: [],
				recommendId: '',
				recommendName: '',
				getsvdiscussId: '',
				isShowTopic: true,
				reload: false,
				statusMore: 'more',
				contentText: {
					contentdown: '上拉加载更多',
					// contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				page: 1,
				
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
		mounted() {
			// window.addEventListener('scroll', this.handleScroll)
		},
		onLoad(option) {
			if(option.type == 'topic') {
				this.isShowTopic = false;
			}
			this.topicId = option.id;
			this.page = 1;
			this.init(option.id)
		},
		// 监听页面滚动
		onPageScroll(e) {
			 let _this=this;
			if(e.scrollTop > 50) {
				_this.scrollFlag = true
			} else {
				_this.scrollFlag = false
			}
		},
		// 上拉加载
		onReachBottom: function() {
			this.statusMore = 'more';
			this.init(this.topicId);
		},	
        methods: {
			testreply(id, name){
				console.log(id, name)
				this.recommendId = id
				this.recommendName = name
				this.replySay = '回复' + name + ':';
			},
			recordName(e) {  
				this.inputValue = e.detail.value;
				let token
				let self = this
				uni.getStorage({
					key:"token",
					success: function (res) {
						token = res.data;
					}
				})
				const url = this.url
				
				if(this.recommendId!=''){
					uni.request({
						url: url + "controller/usercontroller/addanswergcirclecontentdiscuss",
						data: {
							outUserId: self.outUserId,
							id: self.recommendId,
							outUserName: self.recommendName,
							gcircleContentDiscuss: e.detail.value
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
						url: url + "controller/usercontroller/addgcirclecontentdiscuss",
						data: {
							outUserId: self.outUserId,
							gcircleContentId: self.gcircleContentId,
							outUserName: self.nickName,
							gcircleContentDiscuss: e.detail.value
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
				}
            },
			
			reply(id){
				console.log(id)
				uni.navigateTo({
					url: "/pages/ganswer/ganswer?Id=" + id
				})
			},
			// 关注话题
			focusTopic() {
				let token = '';
				uni.getStorage({
					key:"token",
					success: function (res) {
					 token = res.data;
				  }
				});
				uni.request({
					url: this.url + 'controller/contentcontroller/addtalkthemeuser',
					method: 'post',
					data: {talkThemeId: this.topicId},
					header : {'content-type':'application/x-www-form-urlencoded', 'token': token, 'port': 'app'},
					success:(res) => {
						uni.hideLoading();
						if(res.data.code == 200) {
							this.init(this.topicId);
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
			// 获取话题列表
			init(id) {
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				let token = '';
				uni.getStorage({
					key:"token",
					success: function (res) {
					 token = res.data;
				  }
				});
				let parmas = {
					talkThemeId: id,
					pageIndex: this.page,
					pageSize: 10
				}
				uni.request({
					url: this.url + 'controller/contentcontroller/getgcriclecontentlistbytalkthemeid',
					method: 'post',
					data: parmas,
					header : {'content-type':'application/x-www-form-urlencoded', 'token': token, 'port': 'app'},
					success:((res) => {
						uni.hideLoading();
						let totalPage = res.data.data.pageSize * res.data.data.totalPage;
						if(this.topicList.length == totalPage) {
							this.statusMore = 'end';
							return;
						}
						if(res.data.code == 200) {
							console.log()
							let data = res.data.data.dataList[0]
							this.topic = data.talkTheme;
							this.talkThemeNum = data.talkThemeNum;
							this.participateCount = data.participateCount
							// this.topicList = data.allGContentList;
							this.topicList = this.reload ? data : this.topicList.concat(data.allGContentList);
							this.page++;
							this.talkThemeState = data.talkThemeState;
                            if(data.talkThemeRemarks == null) {
                                this.talkThemeRemarks = ' ';
                                return;
                            }
                            this.talkThemeRemarks = data.talkThemeRemarks;
						} else {
							uni.showToast({
							    icon: 'none',
							    title: res.data.message
							});
							uni.hideToast();
						}
					})
				});
			},
            open(index) {
            	this.activeIndex = index;
            	this.isShowAllContent = !this.isShowAllContent;
            	this.brandFold = !this.brandFold
            },
            // 关注
            focus(index, id, state) {
                let token = '';
                uni.getStorage({
                    key:"token",
                    success: function (res) {
                        token = res.data;
                    }
                });
                uni.request({
                    url: this.url + 'controller/usercontroller/addattentionrelationship',
                    method: 'post',
                    data: {outUserId: id},
                    header : {'content-type':'application/x-www-form-urlencoded', 'token': token, 'port': 'app'},
                    success:(res) => {
                        if(res.data.code == 200) {
                            this.init(this.topicId);
                            this.activeIndex = index;
							if(state == 1) {
								this.isShowFocus = false;
								return;
							}
                            this.isShowFocus = !this.isShowFocus;
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
            // 收藏
            collect(index, id, state) {
                let token = '';
                uni.getStorage({
                    key:"token",
                    success: function (res) {
                        token = res.data;
                    }
                });
                uni.request({
                    url: this.url + 'controller/usercontroller/addusercollection',
                    method: 'post',
                    data: {collectionContentId: id, type: '1'},
                    header : {'content-type':'application/x-www-form-urlencoded', 'token': token, 'port': 'app'},
                    success:(res) => {
                        if(res.data.code == 200) {
                            this.init(this.topicId);
                            this.activeIndex = index;
							if(state == 1) {
								this.isShowCollect = false;
								return;
							}
                            this.isShowCollect = !this.isShowCollect;
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
            // 点赞
            fabulous(index, id, state) {
                let token = '';
                uni.getStorage({
                    key:"token",
                    success: function (res) {
                        token = res.data;
                    }
                });
                uni.request({
                    url: this.url + 'controller/usercontroller/addgcirclecontentlike',
                    method: 'post',
                    data: {gcircleContentId: id},
                    header : {'content-type':'application/x-www-form-urlencoded', 'token': token, 'port': 'app'},
                    success:((res) => {
                        if(res.data.code == 200) {
                            this.init(this.topicId);
                            this.fabulousIndex = index;
							if(state == 1) {
								this.isShowFabulous = false;
								return;
							}
							this.isShowFabulous = !this.isShowFabulous;
                        } else {
                            uni.showToast({
                                icon: 'none',
                                title: res.data.message
                            });
                            uni.hideToast();
                        }
                    })
                });
            },
			// 发布话题
			goRelease() {
				let obj = {
					topic: this.topic,
					topicId: this.topicId
				}
				this.$store.commit('updateType', obj );
				uni.navigateTo({
					url: '/pages/releaseImage/release-image/release-image'
					// url: '/pages/releaseImage/search-tag/search-tag'
				})
			},
			// 评论点赞
			commentsFabulous(index, id, state) {
				
				let token = '';
				uni.getStorage({
					key:"token",
					success: function (res) {
					 token = res.data;
				  }
				});
				uni.request({
					url: this.url + 'controller/usercontroller/adddiscusslike',
					method: 'post',
					data: {discussId: id, type: '1'},
					header : {'content-type':'application/x-www-form-urlencoded', 'token': token, 'port': 'app'},
					success:(res) => {
						if(res.data.code == 200) {
							this.activeIndex = index;
							this.comments(this.getsvdiscussId)
							if(state == 1) {
								this.isCommentsFabulous = false;
								return;
							}
							this.isCommentsFabulous = !this.isCommentsFabulous;
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
			comments(id) {
				let _this = this;
				let token = '';
				uni.getStorage({
					key:"token",
					success: function (res) {
						token = res.data;
					}
				})
				let parmas = {
					id: id,
					pageIndex: 1,
					pageSize: 10000
				}
				uni.request({
					url: _this.url + "controller/usercontroller/getgcdiscusslist",
					data: parmas,
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app','token': token},
					success: function (res){
						if(res.data.code==200){
							_this.dataList = res.data.data.dataList;
						}else{
							uni.showToast({
								icon: 'none',
								title: res.data.message
							});
							uni.hideToast();
						}
					}
				})
			},
			// 弹出层弹出的方式  i:当前标签的下标, name: 当前标签的name
			togglePopup(type, open, id, commendId, name, gCollectionDiscussNum) {
				this.getsvdiscussId = commendId;
				this.outUserId = id
				this.gcircleContentId = commendId
				this.gCollectionDiscussNum = gCollectionDiscussNum
				this.nickName = name
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
				this.popupType = type
				if (open === 'tip') {
					this.popupShow = true
				} else {
					this.$refs[open].open()
				}
				this.comments(commendId);
			},
			// 取消弹出层
			cancelPopup(type) {
				this.$refs[type].close()
			},
			// 返回上一级
			cancel() {
				uni.navigateBack()
			}
        }
    }
</script>

<style>
	/*@import 'http://www.zhongjubang.com/api/upload/static/css/comments.css'; *//*引入评论弹窗的样式 */
	page {
		background: #F9F9F9;
		width: 100%;
		height: 100%;
		overflow: hidden;
		font-family:PingFang SC;
	}
	.in {
		background: #FFFFFF;
	}
	.header {
		width: 100%;
		height: 120rpx;
		/* line-height: 100rpx; */
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 30rpx;
		/* background: #0FAEFF; */
		position: fixed;
		z-index: 1;

	}
	.header view {
		display:flex;
		align-items:center;
		height: 100%;
		margin-top: 15rpx;
	}
	.header-left image {
		width: 15rpx;
		height: 31rpx;
		display: block;
		margin-right: 18rpx;
	}
	.header-left-image{
		width: 80rpx;
		height: 80rpx;
	}
	.header-right image:first-child {
		width: 106rpx;
		height: 48rpx;
		display: inline-block;
	}
	.header-right image:last-child {
		width: 39rpx;
		height: 37rpx;
		display: inline-block;
		margin-left: 40rpx;
	}
	.header-topic {
		font-size: 32rpx;
	}
	/* 话题标题 */
	.topic-detail {
		width: 100%;
		height: auto;
		background: #F9F9F9;
		overflow: hidden;
	}
	.title {
		width: 100%;
		position: relative;
		color: #FFFFFF;
	}
	.title image {
		width: 100%;
		height: 439rpx;
		display: block;
	}
	.content {
		position: absolute;
		top: 30%;
		width: 100%;
		box-sizing: border-box;
		padding: 0 30rpx;
	}
	.main-title {
		width: 100%;
		display: flex;
		margin-bottom: 24rpx;
		justify-content: center;
		font-size: 36rpx;
	}
	.main-title image {
		width: 33rpx;
		height: 33rpx;
		display: block;
		margin-top: 12rpx;
		margin-right: 10rpx;
	}
	.Subheading {
		margin-bottom: 60rpx;
		text-align: center;
		height: 60rpx;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.topic-sum,  .Subheading {
		font-size: 24rpx;
		font-weight: 500;
	}
	.topic-sum text {
		margin-right: 10rpx;
	}
	.point {
		width: 8rpx;
		height: 8rpx;
		display: inline-block;
		border-radius: 50%;
		background: #FFFFFF;
		margin-bottom: 4rpx;
	}
	/* 话题参与详情 */
	.topic-participation {
		position: absolute;
		top: 29%;
		width: 100%;
		background: #F6F6F6;
		border-radius:32rpx 32rpx 0px 0px;
		overflow: hidden;
	}
	.detial {
		position: static;
		margin-bottom: 20rpx;
		background: #FFFFFF;
		box-sizing: border-box;
		padding: 30rpx;
		box-shadow:0px 0px 9rpx 0px rgba(93,93,93,0.08);
	}
	.detial:last-child {
		margin-bottom: 124rpx;

	}
	.user-list {
		height: 126rpx;
		display: flex;
		justify-content: space-between;
	}
	.left {
		display: flex;
		justify-content: flex-start;
	}
	.left view {
		display: block;
		margin-top: 18rpx;
		margin-bottom: 6rpx;
	}
	.name {
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		float: left;
	}
	.time {
		clear: both;
		font-size: 24rpx;
		color: #999999;
	}
	.follow {
		font-size: 26rpx;
		color: #666666;
	}
	.avatar {
		width: 122rpx;
		height: 130rpx;
		display: inline-block;
		margin-right: 14rpx;
		margin-top: 0!important;
	}
	.avatar image {
		width: 100%;
		height: 100%;
		margin: auto;
		display: block;
		border-radius: 50%;

	}
	.user-details image {
		width: 94rpx;
		height: 31rpx;
		display: block;
		float: right;
		margin-top: 2%;
		margin-left: 7px;
	}
	.right {
		display: flex;
		height: 100%;
		align-items: center;
	}
	.right image {
		width: 106rpx;
		height: 48rpx;
		display: block;
		margin-top: 25%;
	}
	/* 文字描述 start */
	.describe {
		padding: 25rpx 0;
		overflow: hidden;
		line-height: 36rpx;
		/* position: relative; */
	}
	.describe view {
		display: inline;
	}
	.text {
		font-size:28rpx;
		/* font-family:PingFang SC; */
		font-weight:400;
		color:rgba(51,51,51,1);
		/* color: #333333; */
		/* line-height:33rpx; */
		/* line-height:33rpx; */
		/* float: left; */
		position: relative;
	}
	.describe .anCotent {
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(90,124,171,1);
		line-height:33rpx;
		margin-left: 20rpx;
	}
	.describe .anCotent image {
		width: 26rpx;
		height: 19rpx;
		margin-bottom: -1rpx;
	}
	/* 图片样式 */
	.imageList {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.imageList image {
		width: 100%;
	}
	/* .imageList image {
		width: 30%;
		height: 210rpx;
		display: block;
		margin-right: 34rpx;
		margin-bottom: 10rpx;
	}
	.imageList image:nth-of-type(3n) {
		margin: 0 !important;
	} */

	/* 操作按钮 start */
	.operate {
		padding-top: 30rpx;
		display: flex;
		justify-content: space-between;
	}
	.share, .message, .collect, .fabulous {
		display: flex;
		align-items: center;
		height: 100%;
	}
	.share image {
		width: 33rpx;
		height: 31rpx;
		display: block;
	}
	.fabulous image {
		margin-bottom: -4rpx;
	}
	.number {
		display: flex;
		justify-content: flex-end;
	}
	.number view {
		margin-left: 40rpx;
	}
	.message image {
		width: 39rpx;
		height: 36rpx;
		display: inlin-block;
	}
	.collect image, .fabulous image, .comments-user .fabulous image {
		width: 32rpx;
		height: 31rpx;
		display: inlin-block;
	}
	.select {
		margin-bottom: 1px !important;
	}
	.number text {
		color: #999999;
		font-size: 26rpx;
		font-weight: 500;
		margin-left: 4rpx;
	}
	#footer {
		position: fixed;
		bottom: 0;
		z-index: 1;
		height: 124rpx;
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		width: 100%;
		background: #FFFFFF;
	}
	#footer view {
		width: 100%;
		height: 84rpx;
		line-height: 84rpx;
		background: #F9B72C;
		color: #FFFFFF;
		text-align: center;
		font-size:30rpx;
		font-weight:bold;
		border-radius: 42rpx;
		font-family:PingFang SC;
	}
	#footer view image {
		width: 25px;
		height: 25px;
		display: inline-block;
		margin-bottom: -5px;
		margin-right: 7px;
	}
	/* 查看更多 start */
	.look-more {
		width: 100%;
		height: 200rpx;
		line-height: 140rpx;
		text-align: center;
		font-size:24rpx;
		font-family:PingFang SC;
		color:rgba(204,204,204,1);
		margin-bottom: 100rpx;
	}
</style>