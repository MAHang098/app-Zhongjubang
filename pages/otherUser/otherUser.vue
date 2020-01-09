<template>
    <view class="wrap">
        <view class="bg">
        	<image :src="cover" mode=""></image>
        </view>
		<view class="left-menu" @click="back">
			<image src="http://www.zhongjubang.com/api/upload/static/img/back.png" mode=""></image>
		</view>
		
		<!-- <view class="right-wechat">
			<image src="http://www.zhongjubang.com/api/upload/static/img/user/right-wechat.png" mode=""></image>
		</view> -->
		
		<view class="user-avater">
			<image :src="head" mode=""></image>
		</view>
		<!-- 客户信息 -->
		<view class="user-info">
			<view class="user-state">
				<!-- <image src="http://www.zhongjubang.com/api/upload/static/img/user/user-state.png" mode=""></image> -->
				<image v-if="title=='金牌业主'" class="" src="../../static/img/designation/jinpai.png" />
				<image v-if="title=='设计达人'" class="" src="../../static/img/designation/sheji.png" />
				<image v-if="title=='网红达人'" class="" src="../../static/img/designation/wanghong.png" />
				<image v-if="title=='居圈达人'" class="" src="../../static/img/designation/juquan.png" />
			</view>
			<view class="info-attention" @tap="addAttention">
				<image v-if='showAttentionInfo==0' src="../../static/img/user/attention.png" mode=""></image>
				<image v-if='showAttentionInfo==1' src="../../static/img/user/no-attention.png" mode=""></image>
			</view>
			<view class="nickName-gender">
				<view class="user-nickName">
					{{nickName}}
				</view>
				<view v-show="!show" class="user-nickName-image"><image src="http://www.zhongjubang.com/api/upload/static/img/user/user-gender.png" mode=""></image></view>
				<view v-show="show" class="user-nickName-image"><image src="http://www.zhongjubang.com/api/upload/static/img/editInfo/gender-man.png" mode=""></image></view>
			</view>
			
			<view class="user-intro">
				{{remarks}}
			</view>
			<view class="user-recommend">
				<text>粉丝{{fannum}}</text><text>关注{{attentionnum}}</text><text>获赞{{likenum}}</text>
				<image src="http://www.zhongjubang.com/api/upload/static/img/user/hot.png" mode=""></image>
				<text id="number">{{feverBranch}}</text>
			</view>
			
			
		</view>
		<!-- 我的动态 -->
		<!-- <view class="my-active"> -->
		<view class="drafts">

			<view class="drafts-type">
				<view v-for="(item, index) in tabType" :class="index == current ? 'active' : '' " @click="changeProduct(index)" :key="index">
					{{item}}
					<text v-bind:class="index == current ? 'active-status' : '' "></text>
				</view>
			</view>
			<!-- 短视频内容start -->
			
			<view class="video-wrap" v-if="show1" >
				<view class="video-detail" v-for="(item, index) in videoList" :key="index">
					<view class="video-content" @longtap="deleteVideo(item.shortVideoId)">
						<image class="video-content-start" style="width:52rpx;height:52rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/start.png" mode=""></image>
						<image class="video-content-avator" style="width:60rpx;height:60rpx;border-radius:50%;" :src="item.head" mode=""></image>
						<view class="video-content-nickname">{{item.nickName}}</view>
						<image v-if="activeVideo == item.shortVideoId && showDelete" @tap="videoDelete(item.shortVideoId)" class="video-content-delete" style="width:156rpx;height:156rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/delete.png" mode=""></image>
						<image class="video-content-image" style="width:340upx;height:512upx;border-radius:3px;" :src="item.videoUrl" @tap="sendVideo(item.shortVideoId)"></image>
						<view v-if="activeVideo == item.shortVideoId && showDelete" class="video-content-block" style="width:350rpx;height:512rpx;border-radius:3px;"></view>
					</view>
					
				</view>
			</view>
			<!-- 短视频内容end -->
			
			
			
			<!-- <view class="more">-上拉查看更多-</view> -->
		</view>
		<!-- G圈列表 start -->
		<view v-if="!show1" class="relese-image"  >
			<view v-for="(items, index) in releaseImgList" :key="index">
				<view class="relese-image_detail" >
					<!-- 用户信息 start -->
					<view class="user">
						<view class="user-message">
							<image :src="head" mode=""></image>
							<view>
								<view class="name">{{items.nickName}}</view>
								<view class="time">{{items.createTime}}</view>
							</view>
						</view>
						<!-- <view class="operate-user" @click.stop="operate(index)">
							<text></text>
							<text></text>
							<text></text>
							<view class="operate-detail" v-show="cIndex == index && showEdit">
								<view class="operate-arrow"></view>
								<view class="operate-btn">
									<view @click.stop="editRelease(items, items.gcircleContentId)"><image src="http://www.zhongjubang.com/api/upload/static/edit.png" mode=""></image>编辑</view>
									<view @click.stop="deleteRelease(items.gcircleContentId)"><image src="http://www.zhongjubang.com/api/upload/static/delete.png" mode=""></image>删除</view>
								</view>
							</view>
						</view> -->
					</view>
					<!-- 用户信息 start -->
					
					<!-- 草稿内容 start -->
					<view class="content"  v-if="items.content != '' ">
						<view v-if="!isShowAllContent" class="text">{{items.content }}</view>
						<view v-else class="text">{{items.content | ellipsis}}</view>
						<view class="anCotent" v-if="items.content.length > 45 " @click="open()">{{ brandFold  ? '收起' : '展开'}}<image :class="!brandFold ? '' : 'in'" src="http://www.zhongjubang.com/api/upload/static/drafts/arrow-bottom.png" mode=""></image></view>
					</view>
					<!-- 草稿内容 end -->
					
					<!-- 图片/视频 start -->
					<view class="imageList">
					<!-- 	<view v-for="(tese, indexT) in JSON.stringify(JSON.parse(items.gcircleContentDTO.imgList))" :key="indexT">
							{{1111}}
						</view> -->
						<image :mode="items.imgList.length > 1 ? 'aspectFit' : '' " :class="items.imgList.length > 1 ? 'imageListIn' : 'imageListSingle' " :src="row.fileUrl" v-for="(row, indexI) in items.imgList" :key="indexI" @click.stop="previewImage(indexI, items.imgList)"></image>
					</view>
					<!-- 图片/视频 end -->
					
					<!-- 话题 start -->
					<view class="release-image_topic"  v-show="show" v-if="items.title.topic != '' " >
						<view class="left" @click.stop="goTopic(items.title)">
							<image src="http://www.zhongjubang.com/api/upload/static/topic/topic.png" mode=""></image>
							<view>{{items.title.topic}}</view>
						</view>
						<view class="right"></view>
					</view>
					<!-- 话题 end -->
					<!-- 操作按钮 start -->
					<view class="operate-bottom">
						<view class="operate-bottom_share"><image src="http://www.zhongjubang.com/api/upload/static/img/user/share.png" mode=""></image></view>
						<view class="operate-bottom_number">
							<view class="number-message"  @click.stop="togglePopup('bottom', 'comments',items.userId, items.gcircleContentId, nickName,items.gCollectionDiscussNum)">
								<image src="http://www.zhongjubang.com/api/upload/static/img/topicDetails/message.png" mode=""></image>
								<text>{{items.gCollectionDiscussNum}}</text>
							</view>
							<view class="collect">
								<image @click.stop="collect(index, items.gcircleContentId, items.collectionState)" :src="(activeIndex == index && isShowCollect) || items.collectionState === 1 ? 'http://www.zhongjubang.com/api/upload/static/topic/collect-select.png' : 'http://www.zhongjubang.com/api/upload/static/img/user/star.png' " mode=""></image>
								<text>{{items.collectionNum}}</text>
							</view>
							<view class="fabulous" >
								<image @click.stop="fabulous(index, items.gcircleContentId, items.gcircleContentLikeState)" :src="(fabulousIndex == index && isShowFabulous) || items.gcircleContentLikeState === 1 ? 'http://www.zhongjubang.com/api/upload/static/topic/fabulous-select.png' : 'http://www.zhongjubang.com/api/upload/static/img/user/good.png'" mode=""></image>
								<text>{{items.gcircleContentLikeNum}}</text>
							</view>
						</view>
					</view>
					<!-- 操作按钮 end -->
				</view>
			</view>
			
		</view>
		<!-- 点击右边三点显示的遮罩层 start -->
		<view id="mask" v-show="showEdit"></view>
		<!-- 点击右边三点显示的遮罩层 end -->
		
		<!-- G圈列表 end -->
		
		<!-- 评论弹窗 start -->
		<uni-popup ref="comments" :type="popupType" :custom="true" class="comments-list" @change="popupChange">
			<view class="uni-comments">
				<view class="uni-comments-title">
					<view>全部评论({{gCollectionDiscussNum}})</view>
					<view @click.stop="cancelPopup('comments')">
						<image src="http://www.zhongjubang.com/api/upload/static/img/releaseVideo2/close.png" mode=""></image>
					</view>
				</view>
				<view class="uni-comments-content">
					<view class="comments-detail" v-for="(row, index) in commentItem" :key="index">
						<view class="comments-user">
							<image :src="row.head" mode=""></image>
							<view>
								<text class="comments-name">{{row.nick_name}}</text>
								<text class="date">{{row.createTime}}</text>
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
									<text @click.stop="replyComments(rows.pid, rows.id, rows.nick_name)">{{rows.ziNickName+'回复'+rows.outUserName}}：{{rows.gcircle_content_discuss}}</text>
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
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
    export default {
		components:{ 
			uniPopup,
			uniDrawer,
			uniList,
			uniListItem
		},
		data() {
	        return {
				title: '',
				designe: '',
				showAttentionInfo: '',
				showRigth: false,
				showLeft: false,
				tabType: ['我的动态', '短视频'],
				show: '',
				show1: '',
				showDelete: '',
				fannum: '',
				attentionnum: '',
				likenum: '',
				nickName: '',
				head: '',
				feverBranch: '',
				remarks: '',
				sex: '',
				// G圈列表所需要的参数
				Tokens: '',
				current: 0 ,
				cIndex: -1,
				activeIndex: -1,
				fabulousIndex: -1,
				isShowFabulous: false,   //是否显示已点赞
				isShowCollect: false,   //是否显示已收藏
				brandFold: false,
				isShowAllContent: true,
				showEdit: false,
				releaseImgList: [],
				imageDrafts: [],
				content: '某臣氏骑剑活动！水雾质地 很轻薄 不沾黏！在上待几分钟会变成雾面哑光感某臣氏骑剑活动！水雾质地 很轻薄 不沾黏！在上待几分钟会变成雾面哑光感 超高级！显色很持久...不沾黏！在上待几分钟会变成雾面哑光感 超高级！显色很持久...',
				// 弹窗所用到的变量
				popupShow: false,
				popupType: '',
				inputValue: '',
				outUserId: '',
				gcircleContentId: '',
				// nickName: '',
				gCollectionDiscussNum: '',
				dataList: [],
				videoList: [],
				gcircleContentDTO: [],
				recommendId: '',
				recommendName: '',
				getsvdiscussId: '',
				isShowTopic: true,
				replySay: '说点什么把',
				replyType: '',
				activeVideo: 0,
				commentItem: [],
				userid: '',
				cover: '',
				
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
		onLoad(options){
            if(options.userid!=''){
				this.userid = options.userid
			}else{
				console.log('没有userid')
			}
		},
        onShow(){
			// 获取关注
			this.getAttention()
			let self = this
			const url = this.url
			
			this.getInfo()
			this.initVideo()
			this.init();
		},
        methods: {
			back(){
				uni.navigateBack()
			},
			// 获取客户信息
			getInfo(){
				let self = this
				uni.request({
					url: this.url + "controller/usercontroller/getothergcirclecontentlist",
					data: {
						otherUserId: this.userid
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': this.Tokens
					},
					success: function (res){
					if(res.data.code==200){
						if(res.data.data.dataList.length == 0) {
							return;
						}
						console.log(res.data.data.dataList[0])
						self.feverBranch = res.data.data.dataList[0].feverBranch
						self.head = res.data.data.dataList[0].head
						self.nickName = res.data.data.dataList[0].nickName
						self.remarks = res.data.data.dataList[0].remarks
						self.sex = res.data.data.dataList[0].sex
						self.showAttentionInfo = res.data.data.dataList[0].attentionState
						self.cover = res.data.data.dataList[0].cover
						self.title = res.data.data.dataList[0].designation
						if(res.data.data.dataList[0].sex==1){
							self.show = true
						}else if(res.data.data.dataList[0].sex==2){
							self.show = false
						}
						}else{
							console.log("请求异常")
						}
					}
				});
			},
			// 获取关注
			
			getAttention(){
				let token
				let self = this
				uni.getStorage({
					key:"token",
					success: function (res) {
					token = res.data;
					self.Tokens = res.data;
					}
				})
				
				uni.request({
					url: this.url + "/controller/usercontroller/getfanattentionlikenum",
					data: {
						userId: this.userid
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': token
					},
					success: function (res){
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
						if(res.data.code==200){
							self.attentionnum = res.data.data.attentionnum
							self.fannum = res.data.data.fannum
							self.likenum = res.data.data.likenum
						}else{
							console.log("请求异常")
						}
					}
				})
			},
			// 添加关注
			addAttention(){
				let self = this
				uni.request({
					url: this.url + "controller/usercontroller/addattentionrelationship",
					data: {
						outUserId: this.userid
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': this.Tokens
					},
					success: function (res){
						if(res.data.code==200){
							console.log(res)
							self.getAttention()
							self.getInfo()
							
						}else{
							console.log('请求异常')
						}
					}
				})
			},
			deleteVideo(activeVideo){
				this.activeVideo = activeVideo
				this.showDelete = !this.showDelete
			},
			videoDelete(id){
				let token
				let self = this
				const url = this.url
				uni.request({
					url: url + "/controller/usercontroller/delshortvideo",
					data: {
						shortVideoId: id
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': self.Tokens
					},
					success: function (res){
						if(res.data.code==200){
							console.log(res)
							self.initVideo()
						}else{
							console.log('请求异常')
						}
					}
				})
			},
			sendVideo(id){
				uni.navigateTo({
					url: '/pages/index/index?id=' + id
				})
			},
			// 切换草稿类型
			changeProduct(index) {
				this.current = index;
				this.currentType = index + 1;
				this.show1 = !this.show1;
				let type = 1;
				if(index == 1) {
					type = 2;
				} 
				this.init(type);
			},
			// 文字展开收起
			open(index) {
				this.activeIndex = index;
				this.isShowAllContent = !this.isShowAllContent;
				this.brandFold = !this.brandFold
			},
			// 获取G圈列表内容
			init() {
				let parmas = {
					pageIndex: 1,
					pageSize: 1000,
					otherUserId: this.userid
				}
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				uni.request({
					url: this.url + "controller/usercontroller/getothergcirclecontentlist",
					data: parmas,
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.Tokens},
					success: ((res) => {
						uni.hideLoading()
						if(res.data.code == 200) {
							let data = res.data.data.dataList;
							console.log(data)
							for(let i=0; i<data.length; i++) {
								data[i].imgList = JSON.parse(data[i].imgList);
								data[i].title = JSON.parse(data[i].title);
							}
							this.releaseImgList = data;
						}
					})
				})
			},
			// 获取短视频内容
			initVideo() {
				let token
				let self = this
				
				const url = this.url
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				//获取视频内容
				uni.request({
					url: url + "/controller/usercontroller/getshortvideobyuserid",
					data: {
						pageSize: 100
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': self.Tokens
					},
					success: function (res){
						uni.hideLoading()
						if(res.data.code==200){
							for(var i = 0;i < res.data.data.dataList[0].length;i++){
								
								res.data.data.dataList[0][i].videoUrl = res.data.data.dataList[0][i].videoUrl.replace('MP4','jpg')
								res.data.data.dataList[0][i].videoUrl = res.data.data.dataList[0][i].videoUrl.replace('mp4','jpg')
							}
							self.videoList = res.data.data.dataList[0]
						}else{
							console.log("请求异常")
						}
					}
				});
			},
			// 修改G圈内容
			editRelease(item, id) {
				this.$store.commit('saveImage', item.imgList);
				let obj = {
					editId: id,
					title: item.title,
					content: item.content,
					type: 'user'
				}
				this.$store.commit('saveDrafts', obj)
				this.$store.commit('updateType', item.title);
				uni.navigateTo({
					url: '/pages/releaseImage/release-image/release-image'
				});
				this.showEdit = !this.showEdit;
			},
			// 删除G圈内容
			deleteRelease(id) {
				uni.request({
					url: this.url + "/controller/usercontroller/delgcirclecontent",
					data: {circlecontentId: id},
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.Tokens},
					success: ((res) => {
						if(res.data.code == 200) {
							uni.showToast({
								title: '删除成功',
								duration: 500,
							});
							this.showEdit = !this.showEdit;
							this.init();
						}
					})
				})
			},
			// 收藏
			collect(index, id, state) {
			    uni.request({
			        url: this.url + 'controller/usercontroller/addusercollection',
			        method: 'post',
			        data: {collectionContentId: id, type: '1'},
			        header : {'content-type':'application/x-www-form-urlencoded', 'token': this.Tokens, 'port': 'app'},
			        success:(res) => {
			            if(res.data.code == 200) {
			                 this.init();
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
			    uni.request({
			        url: this.url + 'controller/usercontroller/addgcirclecontentlike',
			        method: 'post',
			        data: {gcircleContentId: id},
			        header : {'content-type':'application/x-www-form-urlencoded', 'token': this.Tokens, 'port': 'app'},
			        success:((res) => {
			            if(res.data.code == 200) {
			                this.init();
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
			// 点击话题到话题详情
			goTopic(obj) {
				let id = JSON.parse(obj).topicId;
				uni.navigateTo({
					url: '/pages/topicDetails/topicDetails?id=' + id
				})
			},
			// 评论点赞
			commentsFabulous(index, id, state) {
				
				
				uni.request({
					url: this.url + 'controller/usercontroller/adddiscusslike',
					method: 'post',
					data: {discussId: id, type: '1'},
					header : {'content-type':'application/x-www-form-urlencoded', 'token': this.Tokens, 'port': 'app'},
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
			// 评论详情
			comments(id) {
				
				let parmas = {
					gcircleContentId: id,
					pageIndex: 1,
					pageSize: 1000
				}
				uni.request({
					url: this.url + "controller/usercontroller/getgcdiscusslist",
					data: parmas,
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app','token': this.Tokens},
					success: ((res) => {
						if(res.data.code==200){
							this.commentItem = res.data.data.dataList[0].listFu;
						}else{
							uni.showToast({
								icon: 'none',
								title: res.data.message
							});
							uni.hideToast();
						}
					})
				})
			},
			// 回复谁
			testreply(id, name){
				this.recommendId = id
				this.recommendName = name
				this.replySay = '回复@' + name + ' :';
			},
			recordName(e) {  
				let self = this
				this.inputValue = e.detail.value;
				console.log(e.detail.value)
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
							'token': self.Tokens
						},
						success: ((res) => {
							this.init();
							if(res.data.code==200){
								uni.showToast({
									title: '已发送',
									duration: 1000
								});
								this.inputValue = '说点什么吧...'
								this.cancelPopup('comments');
								this.init();
							}else{
								console.log("请求异常")
							}
						})
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
							'token': self.Tokens
						},
						success:((res) => {
							this.init();
							if(res.data.code==200){
								uni.showToast({
									title: '已发送',
									duration: 1000
								});
								this.inputValue = ' ';
								this.cancelPopup('comments');
								
							}else{
								console.log("请求异常")
							}
						})
					})
				}
			},
			// 评论详情
			reply(id){
				uni.navigateTo({
					url: "/pages/ganswer/ganswer?Id=" + id
				})
			},
			// 删除自己的评论
			deleteComment(id) {
				uni.request({
					url: this.url + "controller/usercontroller/delgcirclecontentdiscuss",
					data: {gcircleContentDiscussId: id},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': this.Tokens
					},
					success:((res) => {
						this.init();
						if(res.data.code==200){
							uni.showToast({
								title: '删除成功',
								duration: 500
							});
							this.comments(this.getsvdiscussId)
						
							
						}else{
							console.log("请求异常")
						}
					})
				})
			},
			// 回复他人的评论
			replyComments(parentId, id, name) {
				this.replySay = '回复@' + name + ' :'
				this.recommendId = id;
				this.outUserId = parentId;
				this.recommendName = name;
			},
			// 预览图片
			previewImage(i, arr) {
				this.$store.commit('saveImage', arr);
				let e = i + 1;
				uni.navigateTo({
					url: '/pages/previewImage/previewImage?current=' + i + '&indexImg=' + e
				})
				// var current = e.target.dataset.src
			},
			// 弹出层弹出的方式  i:当前标签的下标, name: 当前标签的name
			togglePopup(type, open, id, commendId, name, gCollectionDiscussNum) {
				this.getsvdiscussId = commendId;
				this.outUserId = id;
				this.gcircleContentId = commendId;
				this.gCollectionDiscussNum = gCollectionDiscussNum;
				this.nickName = name;
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
				this.$refs[type].close();
			},
			// 显示和隐藏tabbar
			popupChange(e) {
				console.log(e)
				if(e.show == true) {
					uni.hideTabBar();
				} else {
					uni.showTabBar();
				}
			},
			//侧边栏start
			goPockets(){
				uni.navigateTo({
					url: '/pages/wallet/wallet'
				})
			},
			goHot(){
				uni.navigateTo({
					url: '/pages/personal/hot-points/hot-points'
				})
			},
			goList(){
			},
			goDrafts(){
				uni.navigateTo({
					url: '/pages/drafts/drafts'
				})
			},
			goRecommend(){
			},
			goAccount(){
				uni.navigateTo({
					url: '/pages/account/account'
				})
			},
			goRanked(){
			},
			goIdentify(){
				uni.navigateTo({
					url: '/pages/ID-card/ID-card'
				})
			},
			goSetting(){
				uni.navigateTo({
					url: '/pages/setting/setting'
				})
			},
			showDrawer(e) {
				if (e === 'left') {
					this.showLeft = true
				} else {
					this.showRigth = true
				}
			},
			hide() {
				this.showLeft = false
				this.showRigth = false
			},
			closeDrawer(e) {
				if (e === 'left') {
					this.showLeft = false
				} else {
					this.showRigth = false
				}
			},
			// 侧边栏end
		},
		// 侧边栏
		onNavigationBarButtonTap(e) {
			this.showRigth = !this.showRigth
		},
		onBackPress() {
			if (this.showRigth || this.showLeft) {
				this.hide()
				return true
			}
		}
    }
</script>

<style>
	@import '../../static/css/releaseImgList.css'; /*引入G圈列表样式*/
	@import '../../static/css/comments.css'; /*引入评论弹窗的样式*/
	
	.uni-video-container{
		background-color: transparent !important;
	}
	/* 内容导航栏start */
	.drafts {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 40rpx 20rpx;
		border-top: 1px solid #E2E2E2;
		background: #fff;
	}
	.drafts-type {
		height: 70rpx;
	}
	.drafts-type view {
		width: 30%;
		height: 34rpx;
		line-height: 34rpx;
		text-align: center;
		color: #666666;
		font-size: 32rpx;
		display: inline-block;
		border-right: 1rpx solid #E2E2E2;
	}
	.drafts-type view:last-child {
		border: none;
	}
	.active {
		color: #333333 !important;
		font-size: 34rpx !important;
		font-weight: bold;
		border-width: 50rpx;
		border-color: red;
		
	}
	.active-status {
		margin: 9px auto;
		display: block;
		width:50rpx;
		height:4rpx;
		background:#F9B72C;
		/* border-radius:3px; */
	}
	/* 内容导航栏end */
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
		border-radius: 50%;
		width: 199rpx;
		height: 193rpx;
	}
	/* 客户信息 */
	.user-info{
		position: relative;
		top: -30rpx;
		width:750rpx;
		height:308rpx;
		/* height:100%; */
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
	.info-attention{
		position: absolute;
		left: 296rpx;
		top: 30rpx;
		width: 364rpx;
		height: 60rpx;
		z-index: 100;
	}
	.info-attention image{
		width: 364rpx;
		height: 60rpx;
	}
	.nickName-gender{
		position: absolute;
		left: 29rpx;
		top: 95rpx;
	}
	.user-nickName{
		float: left;
		font-size:38rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	
	.user-nickName-image{
		float: left;
		margin-left: 8upx;
		left: 180rpx;
		top: 98rpx;
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
	.user-recommend image{
		top: 2px;
		width: 28rpx;
		height: 32rpx;
	}
	
	/* 我的动态 */
	.my-active{
		position: relative;
		display: flex;
		margin-bottom: 20rpx;
		top: -10rpx;
		/* top: 450rpx; */
		width:100%;
		/* height:899rpx; */
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 9rpx 0px rgba(93,93,93,0.08);
	}
	.my-active2{
		position: relative;
		display: flex;
		margin-bottom: 20rpx;
		top: -10rpx;
		/* top: 450rpx; */
		width:750rpx;
		height:776rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 9rpx 0px rgba(93,93,93,0.08);
	}
	.my-active-title1{
		position: absolute;
		left: 29rpx;
		top: 24rpx;
		font-size:34rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.my-active-index{
		position: absolute;
		left: 70rpx;
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
		color:#666;
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
		width: 26rpx;
		height: 19rpx;
	}
	.my-active-more-image image{
		display: inline-block;
		width: 26rpx;
		height: 19rpx;
	}


	.my-active-image1{
		position: absolute;
		left: 30rpx;
		top: 40rpx;
		width:80rpx;
		height:80rpx;
		background:rgba(149,149,149,1);
		border-radius:50%;
	}
	.my-active-nickName1{
		position: absolute;
		left: 128rpx;
		top: 52rpx;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	.my-active-data1{
		position: absolute;
		left: 128rpx;
		top: 95rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
	}
	.edit-del1{
		position: absolute;
		right: 28rpx;
		top: 75rpx;
		width: 36rpx;
		height: 23rpx;
	}
	.edit-del1 image{
		width: 36rpx;
		height: 23rpx;
	}
	.my-active-recommend1{
		position: absolute;
		left: 34rpx;
		top: 145rpx;
		width:674rpx;
		height:59rpx;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:33rpx;
	}
	.my-active-more1{
		margin-left: 10rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(90,124,171,1);
		line-height:33rpx;
	}
	.my-active-more-image1{
		display: inline-block;
		width: 26rpx;
		height: 19rpx;
	}
	.my-active-more-image1 image{
		display: inline-block;
		width: 26rpx;
		height: 19rpx;
	}
	.my-active-pic1{
		position: absolute;
		left: 29rpx;
		bottom: 94rpx;
		width:690rpx;
		height:450rpx;
		background: #959595;
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
	.more{
		position: absolute;
		left: 289rpx;
		bottom: -90rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(204,204,204,1);
	}
	.date {
		margin-top: 1px;
		display: block;
	}
	/* 侧边栏样式start */
	.horizen{
		float: left;
		margin-top: 30rpx;
		width:374rpx;
		height:1px;
		background:rgba(226,226,226,1);
	}
	.uni-drawer__content{
		width: 50%;
	}
	.drawer-content{
		float: left;

	}
	.drawer-more{
		float: left;
		margin-left: 44rpx;
		margin-top: 121rpx;
		font-size:42rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	
	.more-list{
		float: left;
		margin-left: 44rpx;
		margin-right: 90rpx;
		margin-top: 64rpx;
	}
	.more-list:first-child{
		margin-top: 72rpx;
	}
	.more-list-image{
		float: left;
	}
	.my-pockets{
		float: right;
		font-size:29rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	/* 侧边栏样式end */
	/* 短视频样式start */
	
	.video-wrap{
		margin-top: 50upx;
		background: #fff;
	}
	.video-detail{
		float: left;
		top: 20px;

	}
	.video-content{
		position: relative;
		margin-left: 12upx;
	}
	.video-content-start{
		position: absolute;
		z-index: 100;
		left: 274upx;
		top: 20upx;
	}
	.video-content-avator{
		position: absolute;
		z-index: 100;
		top: 426upx;
		left: 24upx;
	}
	.video-content-delete{
		position: absolute;
		z-index: 300;
		top: 194upx;
		left: 102upx;
	}
	.video-content-image{
	}
	.video-content-block{
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 200;
		background: rgba(0,0,0,.3);
	}
	.video-content-nickname{
		position: absolute;
		z-index: 100;
		top: 440upx;
		left: 104upx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
	}
	/* 短视频样式end */
	
	/* G圈样式 start */
	.relese-image {
		background: #F6F6F6;
		padding: 0;
	}
	.relese-image_detail:first-child {
		box-shadow: 0px 0px 0px 0px rgba(93,93,93,0.08);
	}
	.relese-image_detail {
		margin: 0;
		background: #FFFFFF;
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		margin-bottom: 10px;
		box-shadow:0px 0px 9rpx 0px rgba(93,93,93,0.08);
	}
</style>
