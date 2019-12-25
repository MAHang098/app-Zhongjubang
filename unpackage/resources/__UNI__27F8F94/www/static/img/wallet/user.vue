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
		<view class="user-avater">
			<image :src="head" mode=""></image>
		</view>
		<!-- 客户信息 -->
		<view class="user-info">
			<view class="user-state">
				<image src="../../static/img/user/user-state.png" mode=""></image>
			</view>
			<view @tap="editInfo" class="edit-info">
				<image src="../../static/img/user/edit-info.png" mode=""></image>
			</view>
			<view class="my-order">
				<image src="../../static/img/user/my-order.png" mode=""></image>
			</view>
			<view class="user-nickName">
				{{nickName}}
			</view>
			<view v-show="!show" class="user-nickName-image"><image src="../../static/img/user/user-gender.png" mode=""></image></view>
			<view v-show="show" class="user-nickName-image"><image src="../../static/img/editInfo/gender-man.png" mode=""></image></view>
			<view class="user-intro">
				{{remarks}}
			</view>
			<view class="user-recommend">
				<text>粉丝{{fannum}}</text><text>关注{{attentionnum}}</text><text>获赞{{likenum}}</text>
				<image src="../../static/img/user/hot.png" mode=""></image>
				<text id="number">{{feverBranch}}</text>
			</view>
			
			
		</view>
		<!-- 我的动态 -->
		<view class="my-active">
			<view class="my-active-title1">我的动态</view>
			<view class="my-active-index"></view>
			<view class="my-active-vertify"></view>
			<view class="my-active-title2">短视频</view>
			<view class="my-active-vertify2"></view>
			<view class="my-active-title3">收藏</view>
		<!-- 	<view class="my-active-image"></view>
			<view class="my-active-nickName">晴天小猪</view>
			<view class="my-active-data">2019-12-12  09:11</view>
			<view class="edit-del">
				<image src="../../static/img/user/edit-del.png" mode=""></image>
			</view>
			<view class="my-active-recommend">
				某臣氏骑剑活动！水雾质地 很轻薄 不沾黏！在上待几分钟会变成雾面哑光感 超高级！显色很持久...
				<text class="my-active-more">展开</text>
				<view class="my-active-more-image">
					<image src="../../static/img/user/down.png" mode=""></image>
				</view>
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
			<view class="my-active-image1"></view>
			<view class="my-active-nickName1">晴天小猪</view>
			<view class="my-active-data1">2019-12-12  09:11</view>
			<view class="edit-del1">
				<image src="../../static/img/user/edit-del.png" mode=""></image>
			</view>
			<view class="my-active-recommend1">
				某臣氏骑剑活动！水雾质地 很轻薄 不沾黏！在上待几分钟会变成雾面哑光感 超高级！显色很持久...
				<text class="my-active-more1">展开</text>
				<view class="my-active-more-image1">
					<image src="../../static/img/user/down.png" mode=""></image>
				</view>
			</view>
			
			
			<view class="my-active-pic1"></view>
			

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
			<text class="my-active-good">180</text> -->
			
			<!-- G圈列表 start -->
			<view class="relese-image"  >
				<view v-for="(items, index) in releaseImgList" :key="index">
					<view class="relese-image_detail" >
						<!-- 用户信息 start -->
						<view class="user">
							<view class="user-message">
								<image src="../../static/drafts.png" mode=""></image>
								<view>
									<view class="name">晴天小猪</view>
									<view class="time">219-12-30 09:30</view>
								</view>
							</view>
							<view class="operate-user" @click.stop="operate(index)">
								<text></text>
								<text></text>
								<text></text>
								<view class="operate-detail" v-show="cIndex == index && showEdit">
									<view class="operate-arrow"></view>
									<view class="operate-btn">
										<view @click.stop="editRelease(items.gcircleContentDTO, items.gcircleContentDTO.id)"><image src="../../static/edit.png" mode=""></image>编辑</view>
										<view @click.stop="deleteRelease(items.gcircleContentDTO.id)"><image src="../../static/delete.png" mode=""></image>删除</view>
									</view>
								</view>
							</view>
						</view>
						<!-- 用户信息 start -->
						
						<!-- 草稿内容 start -->
						<view class="content"  v-if="items.gcircleContentDTO.content != '' ">
							<view v-if="!isShowAllContent" class="text">{{items.gcircleContentDTO.content }}</view>
							<view v-else class="text">{{items.gcircleContentDTO.content | ellipsis}}</view>
							<view class="anCotent" v-if="items.gcircleContentDTO.content.length > 60 " @click="open()">{{ brandFold  ? '收起' : '展开'}}<image :class="!brandFold ? '' : 'in'" src="../../static/drafts/arrow-bottom.png" mode=""></image></view>
						</view>
						<!-- 草稿内容 end -->
						
						<!-- 图片/视频 start -->
						<view class="imageList">
						<!-- 	<view v-for="(tese, indexT) in JSON.stringify(JSON.parse(items.gcircleContentDTO.imgList))" :key="indexT">
								{{1111}}
							</view> -->
							<image :mode="items.gcircleContentDTO.imgList.length > 1 ? 'aspectFit' : '' " :class="items.gcircleContentDTO.imgList.length > 1 ? 'imageListIn' : 'imageListSingle' " :src="row.fileUrl" v-for="(row, indexI) in items.gcircleContentDTO.imgList" :key="indexI" @click.stop="previewImage(indexI, items.gcircleContentDTO.imgList)"></image>
						</view>
						<!-- 图片/视频 end -->
						
						<!-- 话题 start -->
						<view class="release-image_topic"  v-show="show" v-if="items.gcircleContentDTO.title.topic != '' " >
							<view class="left" @click.stop="goTopic(items.gcircleContentDTO.title)">
								<image src="../../static/topic/topic.png" mode=""></image>
								<view>{{items.gcircleContentDTO.title.topic}}</view>
							</view>
							<view class="right"></view>
						</view>
						<!-- 话题 end -->
						<!-- 操作按钮 start -->
						<view class="operate-bottom">
							<view class="operate-bottom_share"><image src="../../static/img/user/share.png" mode=""></image></view>
							<view class="operate-bottom_number">
								<view class="number-message"  @click.stop="togglePopup('bottom', 'comments',items.gcircleContentDTO.userId, items.gcircleContentDTO.id, nickName,items.gCollectionDiscussNum)">
									<image src="../../static/img/topicDetails/message.png" mode=""></image>
									<text>{{items.gCollectionDiscussNum}}</text>
								</view>
								<view class="collect">
									<image @click.stop="collect(index, items.gcircleContentDTO.id, items.collectionState)" :src="(activeIndex == index && isShowCollect) || items.collectionState === 1 ? '../../static/topic/collect-select.png' : '../../static/img/user/star.png' " mode=""></image>
									<text>{{items.collectionNum}}</text>
								</view>
								<view class="fabulous" >
									<image @click.stop="fabulous(index, items.gcircleContentDTO.id, items.gcircleContentLikeState)" :src="(fabulousIndex == index && isShowFabulous) || items.gcircleContentLikeState === 1 ? '../../static/topic/fabulous-select.png' : '../../static/img/user/good.png'" mode=""></image>
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
			
			<view class="more">-上拉查看更多-</view>
		</view>
		
		<!-- 评论弹窗 start -->
		
		<uni-popup ref="comments" :type="popupType" :custom="true" class="comments-list" @change="popupChange">
			<view class="uni-comments">
				<view class="uni-comments-title">
					<view>全部评论({{gCollectionDiscussNum}})</view>
					<view @click.stop="cancelPopup('comments')">
						<image src="../../static/img/releaseVideo2/close.png" mode=""></image>
					</view>
				</view>
				<view class="uni-comments-content">
					<view class="comments-detail" v-for="(row, index) in dataList" :key="index">
						<view class="comments-user">
							<image src="../../static/drafts.png" mode=""></image>
							<view>
								<text class="comments-name">{{row.nick_name}}</text>
								<text class="date">{{row.cratee_time}}</text>
							</view>
							<view class="fabulous"  @click.stop="commentsFabulous(index, row.id, row.state)">
								{{row.likenum}}
								<image :src="(activeIndex == index && isCommentsFabulous) ||  row.state != 0 ? '../../static/topic/fabulous-select.png' : '../../static/img/user/good.png'" mode=""></image>
							</view>
						</view>
						<view class="comments-content">
							<text  @click="testreply(row.id, row.nick_name)">{{row.gcircle_content_discuss}}</text>
							<view class="reply-comments" v-show="row.zilist.length > 0">
								<view v-for="(rows, indexs) in row.zilist" :key="indexs">
									<!-- <text @click.stop="deleteComment(rows.id)">{{rows.nick_name}}：{{rows.gcircle_content_discuss}}</text> -->
									<text @click.stop="replyComments(rows.pid, rows.id, rows.nick_name)">{{rows.nick_name}}：{{rows.gcircle_content_discuss}}</text>
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
				tabType: ['图片', '视频','收藏'],
				show: '',
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
				recommendId: '',
				recommendName: '',
				getsvdiscussId: '',
				isShowTopic: true,
				replySay: '说点什么把',
				replyType: ''
	        }
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 60) {
				return value.slice(0,60) + '...'
			  }
			  return value
			}
		},
        onShow(){
			let token
			let self = this
			uni.getStorage({
				key:"token",
				success: function (res) {
					token = res.data;
					self.Tokens = res.data;
				}
			})
			const url = this.url
			uni.request({
				url: url + "/controller/usercontroller/getfanattentionlikenum",
				data: {},
				method: 'POST',
				header : {
					'content-type':'application/x-www-form-urlencoded', 
					'port': 'app',
					'token': token
				},
				success: function (res){
					// console.log(res.data.code)
					if(res.data.code==200){
						// console.log(res.data.data.attentionnum)
						self.attentionnum = res.data.data.attentionnum
						self.fannum = res.data.data.fannum
						self.likenum = res.data.data.likenum
					}else{
						console.log("请求异常")
					}
				}
			})
			// 
			uni.request({
				url: url + "/controller/usercontroller/getappuser",
				data: {},
				method: 'POST',
				header : {
					'content-type':'application/x-www-form-urlencoded', 
					'port': 'app',
					'token': token
				},
				success: function (res){
					// console.log(res.data.code)
					if(res.data.code==200){
						// console.log(res.data.data)
						self.feverBranch = res.data.data.feverBranch
						self.head = res.data.data.head
						self.nickName = res.data.data.nickName
						self.remarks = res.data.data.remarks
						self.sex = res.data.data.sex
						if(res.data.data.sex==1){
							self.show = true
						}else if(res.data.data.sex==2){
							self.show = false
						}
					}else{
						console.log("请求异常")
					}
				}
			});
			this.init();
		},
        methods: {
            editInfo(){
				uni.navigateTo({
					url: "/pages/editInfo/editInfo"
				})
			},
			// 文字展开收起
			open(index) {
				// console.log(index)
				this.activeIndex = index;
				this.isShowAllContent = !this.isShowAllContent;
				this.brandFold = !this.brandFold
			},
			// 操作删除/编辑弹窗
			operate(index) {
				this.cIndex = index;
				this.showEdit = !this.showEdit;
			},
			// 获取G圈列表内容
			init() {
				let parmas = {
					pageIndex: 1,
					pageSize: 1000
				}
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				uni.request({
					url: this.url + "/controller/usercontroller/getgcirclecontentlist",
					data: parmas,
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.Tokens},
					success: ((res) => {
						uni.hideLoading()
						if(res.data.code == 200) {
							let data = res.data.data.dataList;
							// 
							for(let i=0; i<data.length; i++) {
								let test = data[i].gcircleContentDTO;
								data[i].gcircleContentDTO.imgList = JSON.parse(data[i].gcircleContentDTO.imgList);
								data[i].gcircleContentDTO.title = JSON.parse(data[i].gcircleContentDTO.title);
							}
							// data.forEach((item, i) => {
							// 	item.gcircleContentDTO.imgList = JSON.stringify(item.gcircleContentDTO.imgList);
							// 	item.gcircleContentDTO.title = JSON.parse(item.gcircleContentDTO.title);
							// })
							this.releaseImgList = data;
						}
					})
				})
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
			// 评论详情
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
					pageSize: 1000
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
			// 回复谁
			testreply(id, name){
				this.recommendId = id
				this.recommendName = name
				this.replySay = '回复@' + name + ' :';
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
							'token': token
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
							// this.inputValue = ' ';
							// this.cancelPopup('comments');
							
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
			}
        }
    }
</script>

<style>
	@import '../../static/css/releaseImgList.css'; /*引入G圈列表样式*/
	@import '../../static/css/comments.css'; /*引入评论弹窗的样式*/
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
	
</style>
