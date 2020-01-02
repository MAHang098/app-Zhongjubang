<template>
    <view class="wrap">
        <view class="bg">
        	<image :src="cover" mode=""></image>
        </view>
		<view class="left-menu" @click="showDrawer('left')">
			<image src="http://www.zhongjubang.com/api/upload/static/img/user/left-menu.png" mode=""></image>
		</view>
		<!-- 侧边栏start -->
		<uni-drawer :visible="showLeft" mode="left" @close="closeDrawer('left')">
			<view class="drawer-content">
				<view class="drawer-more">更多</view>
				<view class="more-list" @tap="goPockets">
					<image class="more-list-image" style="width:33rpx;height:36rpx;margin-right:30rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/pockets.png" mode=""></image>
					<text class="my-pockets">我的钱包</text>
				</view>
				<view class="more-list" @tap="goHot">
					<image style="width:31rpx;height:41rpx;margin-right:30rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/hot-num.png" mode=""></image>
					<text class="my-pockets">我的热度分</text>
				</view>
				<view class="more-list" @tap="goList">
					<image style="width:30rpx;height:38rpx;margin-right:30rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/command.png" mode=""></image>
					<text class="my-pockets">我的订单</text>
				</view>
				<view class="horizen"></view>
				<view class="more-list" style="margin-top:30rpx" @tap="goDrafts">
					<image style="width:35rpx;height:39rpx;margin-right:30rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/drafts.png" mode=""></image>
					<text class="my-pockets">草稿箱</text>
				</view>
				<view class="more-list" @tap="goRecommend">
					<image style="width:37rpx;height:36rpx;margin-right:30rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/my-recommend.png" mode=""></image>
					<text class="my-pockets">我的评论</text>
				</view>
				<view class="more-list" @tap="goAccount">
					<image style="width:38rpx;height:37rpx;margin-right:30rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/account.png" mode=""></image>
					<text class="my-pockets">账号与绑定</text>
				</view>
				<view class="horizen"></view>
				<view class="more-list" style="margin-top:30rpx" @tap="goRanked">
					<image style="width:40rpx;height:38rpx;margin-right:30rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/ranked.png" mode=""></image>
					<text class="my-pockets">我的称号</text>
				</view>
				<view class="more-list" @tap="goIdentify">
					<image style="width:41rpx;height:31rpx;margin-right:30rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/identify.png" mode=""></image>
					<text class="my-pockets">身份认证</text>
				</view>
				<view class="more-list" @tap="goSetting">
					<image style="width:38rpx;height:39rpx;margin-right:30rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/setting.png" mode=""></image>
					<text class="my-pockets">设置</text>
				</view>
			</view>
		</uni-drawer>
		<!-- 侧边栏end -->
		<view class="right-wechat" @click.stop="goInformation">
			<image src="http://www.zhongjubang.com/api/upload/static/img/user/right-wechat.png" mode=""></image>
		</view>
		<view class="user-avater">
			<image :src="head" mode=""></image>
		</view>
		<!-- 客户信息 -->
		<view class="user-info">
			<view class="user-state">
				<image v-if="designDarenState" src="http://www.zhongjubang.com/api/upload/static/img/user/user-state.png" mode=""></image>
			</view>
			<view @tap="editInfo" class="edit-info">
				<image src="http://www.zhongjubang.com/api/upload/static/img/user/edit-info.png" mode=""></image>
			</view>
			<view class="my-order" @tap="goList">
				<image src="http://www.zhongjubang.com/api/upload/static/img/user/my-order.png" mode=""></image>
			</view>
			<view class="nickName-gender">
				<view class="user-nickName">
					{{nickName}}
				</view>
				<view v-show="!show" class="user-nickName-image"><image src="http://www.zhongjubang.com/api/upload/static/img/user/user-gender.png" mode=""></image></view>
				<view v-show="show" class="user-nickName-image"><image src="http://www.zhongjubang.com/api/upload/static/img/editInfo/gender-man.png" mode=""></image></view>
			</view>
			
			<view class="user-intro">
				{{remarks | ellipsis2}}
			</view>
			<view class="user-recommend">
				<text @tap="goAddfans(0)">粉丝{{fannum}}</text><text @tap="goAddfans(1)">关注{{attentionnum}}</text><text>获赞{{likenum}}</text>
				<image  @tap="goHot" src="http://www.zhongjubang.com/api/upload/static/img/user/hot.png" mode=""></image>
				<text  @tap="goHot" id="number">{{feverBranch}}</text>
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
			<view class="video-content"  v-if="current==1" v-for="(item, index) in videoList" :key="index" @longtap="deleteVideo(item.shortVideoId)">
				<image class="video-content-start" style="width:52rpx;height:52rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/start.png" mode=""></image>
				<image class="video-content-avator" style="width:60rpx;height:60rpx;border-radius:50%;" :src="item.head" mode=""></image>
				<view class="video-content-nickname">{{item.nickName}}</view>
				<image v-if="activeVideo == item.shortVideoId && showDelete" @tap="videoDelete(item.shortVideoId)" class="video-content-delete" style="width:156rpx;height:156rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/delete.png" mode=""></image>
				<!-- <video style="width:359rpx;height:512rpx;" :src="item.videoUrl"></video> -->
				<image class="video-content-image" style="width:340upx;height:512upx;border-radius:3px;" :src="item.videoUrl" @tap="sendVideo(item.shortVideoId)"></image>
				<view v-if="activeVideo == item.shortVideoId && showDelete" class="video-content-block" style="width:350rpx;height:512rpx;border-radius:3px;"></view>
			</view>
			<!-- 短视频内容end -->
			
			
			
			<!-- <view class="more">-上拉查看更多-</view> -->
		</view>
		<!-- G圈列表 start -->
		<view  class="relese-image" v-if="current==0">
			<view v-for="(items, index) in releaseImgList" :key="index">
				<view class="relese-image_detail" >
					<!-- 用户信息 start -->
					<view class="user">
						<view class="user-message">
							<image :src="items.head" mode=""></image>
							<view>
								<view class="name">{{items.nickName}}</view>
								<view class="time">{{items.createTime}}</view>
							</view>
						</view>
						<view class="operate-user" @click.stop="operate(index)">
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
						</view>
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
			<view class="look-more">-{{statusMore== 'end' ? '没有更多' : '上拉加载更多'}}-</view>
		</view>
		<!-- 点击右边三点显示的遮罩层 start -->
		<view id="mask" v-show="showEdit"></view>
		<!-- 点击右边三点显示的遮罩层 end -->
		
		<!-- G圈列表 end -->
		
		<!-- 收藏start -->
		<view v-if="current==2" class="relese-image"  >
			<view class="allCollect">
				<view class="collect-type">
					<view v-for="(item, index) in collectType" :class="index == current2 ? 'collect-active' : '' " @click="changeCollect(index)" :key="index">
						{{item}}
						<text v-bind:class="index == current ? 'collect-active-status' : '' "></text>
					</view>
				</view>
				<view v-if="current2==0" class=""  >
					
				</view>
				<!-- 收藏短视频内容start -->
				<view class="video-content" v-if="current2==1" v-for="(item, index) in collectVideo" :key="index" @longtap="deleteVideo(item.shortVideoId)">
					<image class="video-content-start" style="width:52rpx;height:52rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/start.png" mode=""></image>
					<image class="video-content-avator" style="width:60rpx;height:60rpx;border-radius:50%;" :src="item.head" mode=""></image>
					<view class="video-content-nickname">{{item.nickName}}</view>
					<image v-if="activeVideo == item.shortVideoId && showDelete" @tap="videoDelete(item.shortVideoId)" class="video-content-delete" style="width:156rpx;height:156rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/delete.png" mode=""></image>
					<!-- <video style="width:359rpx;height:512rpx;" :src="item.videoUrl"></video> -->
					<image class="video-content-image" style="width:340upx;height:512upx;border-radius:3px;" :src="item.videoUrl" @tap="sendVideo(item.shortVideoId)"></image>
					<view v-if="activeVideo == item.shortVideoId && showDelete" class="video-content-block" style="width:350rpx;height:512rpx;border-radius:3px;"></view>
				</view>
				<!-- 收藏短视频内容end -->
				<!-- 收藏商品内容start -->
				<view class="video-wrap" v-if="current2==2" >
					<view class="wang-content-wrap">
						<view class="wang-content" v-for="(item, index) in collectCommand" :key="index">
							<image class="wang-content-image" style="width:200upx;height:190upx;" :src="item.topImgList[0]" @tap="goDetails(item.goodsId)" mode=""></image>
						    <text class="wang-content-des">{{item.goodsName}}</text>
						    <text class="price">￥{{item.goodsPrice}}</text>
						    <image class="wang-collect-delete" style="width:66upx;height:66upx;" src="http://www.zhongjubang.com/api/upload/static/img/user/collect-delete.png" @tap="deleteCommand(item.goodsId)" mode=""></image>
						</view>
					</view>
				</view>
				<!-- 收藏商品内容end -->
				<!-- 收藏店铺内容start -->
				<view class="video-wrap" v-if="current2==3" >
					<view class="wang-content-wrap">
						<view class="wang-content" v-for="(item, index) in collectShop" :key="index">
							<image class="wang-content-image" style="width:200upx;height:190upx;" :src="item.shopLogo" @tap="goDetailsShop(item.shopId)" mode=""></image>
						    <text class="wang-content-des">{{item.shop_name}}</text>
						    <text class="wang-content-goods">{{item.goodsNum}}个商品</text>
						    <text class="wang-content-tit">{{item.colNum}}人收藏</text>
						    <image class="wang-collect-delete" style="width:66upx;height:66upx;" src="http://www.zhongjubang.com/api/upload/static/img/user/collect-delete.png" @tap="deleteCommand(item.shopId)" mode=""></image>
						</view>
					</view>
				</view>
				<!-- 收藏店铺内容end -->
				<!-- 收藏图片内容start -->
				<!-- <view class="video-wrap"> -->
					<view class="category-content">
						<view class="category-content-box"  v-if="current2==0" v-for="(item, index) in collectPic" :key="index" @tap="goDetailsPic(item.id)">
							<image class="category-content-image" style="width:345upx;height:345upx" :src="item.imgList[0].fileUrl" />
							<view class="category-content-des">{{item.content | ellipsis2}}</view>
							<image class="category-content-price" style="width:52upx;height:55upx;border-radius: 50%;" :src="item.head" />
							<view class="category-content-car">{{item.nickName}}</view>
						</view>
					</view>
				<!-- </view> -->
				
				<!-- 收藏图片内容end -->
			</view>
		</view>
		<!-- 收藏end -->
		
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
						<view class="comments-user" @click.stop="goUser(row.userId)">
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
				showRigth: false,
				showLeft: false,
				tabType: ['我的动态', '短视频', '收藏'],
				collectType: ['图片', '视频', '商品', '商铺'],
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
				current2: 0 ,
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
				collectVideo: [],
				collectCommand: [],
				collectShop: [],
				collectPic: [],
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
				deleteType: 0,
				cover: '',
				designDarenState: '',
				reload: false,
				statusMore: 'more',
				contentText: {
					contentdown: '上拉加载更多',
					// contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				page: 1
				
	        }
		},
		filters: {
			ellipsis (value) {
			  if (!value) return ''
			  if (value.length > 45) {
				return value.slice(0,45) + '...'
			  }
			  return value
			},
			ellipsis2 (value) {
			  if (!value) return ''
			  if (value.length > 22) {
				return value.slice(0,22) + '...'
			  }
			  return value
			},
		},
		onLoad(options){
			
		},
        onShow(){
			let token
			let self = this;
			this.current = 0;
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
					if(res.data.code == 421) {
						uni.navigateTo({
							url: '/pages/loginPhone/loginPhone'
						})
					}
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
					self.cover = res.data.data.cover
					self.nickName = res.data.data.nickName
					self.remarks = res.data.data.remarks
					self.sex = res.data.data.sex
					self.designDarenState = res.data.data.designDarenState
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
			this.initVideo()
			this.page = 1;
			this.releaseImgList = [];
			this.init();
		},
		// 上拉加载
		onReachBottom: function() {
			this.statusMore = 'more';
			if( this.page == 1) {
				this.status = 'end';
				return;
			}
			this.init();
		},
        methods: {
			goDetailsPic(id){
				uni.navigateTo({
					url: '/pages/releaseImage-details/releaseImage-details?id=' + id
				})
			},
			goGiveLike(){
				uni.navigateTo({
					url: '/pages/information/give-like/give-like'
				})
			},
			goAddfans(id){
				uni.navigateTo({
					url: '/pages/information/all-fans/all-fans?id=' + id
				})
			},
			//删除商品
			deleteCommand(id){
				console.log(id)
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
					url: url + "controller/usercontroller/addusercollection",
					data: {
						type: this.deleteType,
						collectionContentId: id
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': token
					},
					success: function (res){
						// console.log(res.data.code)
						if(res.data.code==200){
							console.log('dshdsfsdhf')
							console.log(res)
							self.initCollectCommand()
							self.initCollectShop()
						}else{
							console.log('请求异常')
						}
					}
				})
			},
			// 去商品详情
			goDetails(id){
				uni.navigateTo({
					url: '/pages/shopping-mall/detail/detail?id='+id
				})
			},
			// 去店铺详情
			goDetailsShop(id){
				uni.navigateTo({
					url: '/pages/shop-command/shop-command?id='+id
				})
			},
			deleteVideo(activeVideo){
				this.activeVideo = activeVideo
				console.log("1111")
				this.showDelete = !this.showDelete
			},
			videoDelete(id){
				
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
					url: url + "/controller/usercontroller/delshortvideo",
					data: {
						shortVideoId: id
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded', 
						'port': 'app',
						'token': token
					},
					success: function (res){
						// console.log(res.data.code)
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
				if(index==2){
					this.changeCollect(0)
				}
				this.init(type);
			},
			changeCollect(index) {
				this.current2 = index;
				console.log(index)
				if(index == 1){
					this.initCollectVideo()
				}else if(index == 2){
					this.deleteType = 3
					this.initCollectCommand()
				}else if(index == 3){
					this.deleteType = 4
					this.initCollectShop()
				} else{
					this.initCollectPic()
				}
			},
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
			//获取收藏短视频
			initCollectVideo(){
				let self = this
				let parmas = {
					pageIndex: 1,
					pageSize: 1000
				}
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				uni.request({
					url: this.url + "controller/usercontroller/getshortvideolistbycollection",
					data: parmas,
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.Tokens},
					success: ((res) => {
						uni.hideLoading()
						if(res.data.code == 200) {
							for(var i = 0;i < res.data.data.dataList.length;i++){
								
								res.data.data.dataList[i].videoUrl = res.data.data.dataList[i].videoUrl.replace('MP4','jpg')
								res.data.data.dataList[i].videoUrl = res.data.data.dataList[i].videoUrl.replace('mp4','jpg')
								console.log(res.data.data.dataList[i].videoUrl)
							}
							self.collectVideo = res.data.data.dataList;
							
						}
					})
				})
			},
			//获取收藏商品
			initCollectCommand(){
				let self = this
				let parmas = {
					pageIndex: 1,
					pageSize: 1000
				}
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				uni.request({
					url: this.url + "controller/usercontroller/getgoodslistbycollection",
					data: parmas,
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.Tokens},
					success: ((res) => {
						uni.hideLoading()
						if(res.data.code == 200) {
							console.log(res)
							self.collectCommand = res.data.data.dataList;
							
						}
					})
				})
			},
			//获取收藏店铺
			initCollectShop(){
				let self = this
				console.log('dianpu')
				let parmas = {
					pageIndex: 1,
					pageSize: 1000
				}
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				uni.request({
					url: this.url + "controller/usercontroller/getshoplistbycollection",
					data: parmas,
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.Tokens},
					success: ((res) => {
						uni.hideLoading()
						if(res.data.code == 200) {
							console.log(res)
							self.collectShop = res.data.data.dataList;
							
						}
					})
				})
			},
			//获取收藏图片
			initCollectPic(){
				console.log('tupian')
				let self = this
				let parmas = {
					pageIndex: 1,
					pageSize: 1000
				}
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				uni.request({
					url: this.url + "controller/usercontroller/getgcriclecontentlistbycollection",
					data: parmas,
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.Tokens},
					success: ((res) => {
						uni.hideLoading()
						if(res.data.code == 200) {
							console.log(res)
							for(var i = 0;i<res.data.data.dataList.length;i++){
								res.data.data.dataList[i].imgList = JSON.parse(res.data.data.dataList[i].imgList)
							}
							console.log(res.data.data.dataList[0].imgList[0].fileUrl)
							self.collectPic = res.data.data.dataList;
							
							
						}
					})
				})
			},
			// 获取G圈列表内容
			init() {
				let parmas = {
					pageIndex: this.page,
					pageSize: 20
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
						let totalPage = res.data.data.pageSize * res.data.data.totalPage;
						if(this.releaseImgList.length == totalPage) {
							this.statusMore = 'end';
							return;
						}
						if(res.data.code == 200) {
							let data = res.data.data.dataList;
							// 
							for(let i=0; i<data.length; i++) {
								data[i].imgList = JSON.parse(data[i].imgList);
								data[i].title = JSON.parse(data[i].title);
							}
							this.releaseImgList = data;
							// this.releaseImgList = this.reload ? data : this.releaseImgList.concat(data);
							if(res.data.data.totalPage < 2) {
								return;
							}
							// this.page++;
						}
					})
				})
			},
			// 获取短视频内容
			initVideo() {
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
				// uni.showLoading({
				// 	title: '加载中...',
				// 	mask: true
				// })
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
						'token': token
					},
					success: function (res){
						// console.log(res.data.code)
						if(res.data.code==200){
							// console.log(res)
							for(var i = 0;i < res.data.data.dataList[0].length;i++){
								
								res.data.data.dataList[0][i].videoUrl = res.data.data.dataList[0][i].videoUrl.replace('MP4','jpg')
								res.data.data.dataList[0][i].videoUrl = res.data.data.dataList[0][i].videoUrl.replace('mp4','jpg')
								// console.log(res.data.data.dataList[0][i].videoUrl)
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
				// let _this = this;
				let token = '';
				uni.getStorage({
					key:"token",
					success: function (res) {
						token = res.data;
					}
				})
				let parmas = {
					gcircleContentId: id,
					pageIndex: 1,
					pageSize: 1000
				}
				uni.request({
					url: this.url + "controller/usercontroller/getgcdiscusslist",
					data: parmas,
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app','token': token},
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
				uni.navigateTo({
					url: '/pages/shopping-mall/all-order/all-order'
				})
			},
			goDrafts(){
				uni.navigateTo({
					url: '/pages/drafts/drafts'
				})
			},
			goRecommend(){
				uni.navigateTo({
					url: '/pages/my-evaluate/my-evaluate'
				})
				
			},
			goAccount(){
				uni.navigateTo({
					url: '/pages/account/account'
				})
			},
			goRanked(){
				uni.navigateTo({
					url: '/pages/myRanked/myRanked'
				})
			},
			goIdentify(){
				uni.navigateTo({
					url: '/pages/identity/all-authentication/all-authentication'
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
			// 跳转到消息页面
			goInformation() {
				uni.navigateTo({
					url: '/pages/information/information-list/information-list'
				})
			},
			// 跳转到用户主页
			goUser(id) {
				uni.navigateTo({
					url: '/pages/otherUser/otherUser?userid=' + id
				})
				uni.showTabBar();
			}
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
		margin-top: -10rpx;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
		padding-top: 10rpx;
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
		width: 80rpx;
		height: 80rpx;
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
		width: 100%;
		height: 100%;
		margin-top: 33upx;
		background: #fff;
	}
	/* .video-detail{
		float: left;
		top: 20px;
		background: #fff;
	} */
	
	.video-content{
		float: left;
		/* top: 20px; */
		/* margin-top: 10upx; */
		background: #fff;
		position: relative;
		margin-left: 12upx;
	}
	
	.video-content:nth-child(2){
		margin-top: 22upx;
	}
	.video-content:nth-child(3){
		margin-top: 22upx;
	}
	.video-content:nth-last-child(1){
		margin-bottom: 120upx;
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
	/* 收藏start */
	.allCollect{
		border-top: 1px solid #E2E2E2;
		margin-top: -4upx;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
		padding-top: 10rpx;
		background: #fff;
	}
	.collect-type {
		height: 70rpx;
	}
	.collect-type view {
		width: 20%;
		height: 44rpx;
		line-height: 44rpx;
		text-align: center;
		color: #999999;
		font-size: 24rpx;
		display: inline-block;
		font-family: PingFang SC;
	}
	.collect-type view:last-child {
		border: none;
	}
	.collect-active {
		color: #333333 !important;
		font-size: 24rpx !important;
		font-family: PingFang SC;
		width:106rpx;
		height:44rpx;
		line-height: 44rpx;
		background:rgba(229,229,229,1);
		border-radius:22rpx;
	}
	/* 收藏end */
	/* 商品start */
	.wang-content{
	    position: relative;
		/* margin-left: -20upx; */
		z-index: 100;
	    width:750upx;
	    height:238upx;
	    background:rgba(255,255,255,1);
	    box-shadow:0px 0px 9upx 0px rgba(93,93,93,0.08);
		border-bottom: 1px solid #E2E2E2;
	}
	.wang-content:nth-child(1){
		margin-top: -24upx;
		border-radius:22upx 22upx 0px 0px;
	}
	
	.wang-content-image{
	    position: absolute;
	    left: 32upx;
	    top: 24upx;
	}
	.wang-content-des{
	    position: absolute;
	    left: 252upx;
	    top: 72upx;
	    width: 454upx;
	    font-size:24upx;
	    font-family:PingFang SC;
	    color:rgba(51,51,51,1);
	}
	.price{
	    position: absolute;
	    left: 252upx;
	    top: 152upx;
	    font-size:28upx;
	    font-family:PingFang SC;
	    color:rgba(244,51,72,1);
	}
	.wang-collect-delete{
		position: absolute;
		left: 623upx;
		top: 144upx;
	}
	/* 商品end */
	/* 店铺start */
	.wang-content-goods{
	    position: absolute;
	    left: 252upx;
	    top: 152upx;
	    font-size:30upx;
	    font-family:PingFang SC;
	    color:#666666;
	}
	.wang-content-tit{
	    position: absolute;
	    left: 380upx;
	    top: 152upx;
	    font-size:30upx;
	    font-family:PingFang SC;
	    color:#666666;
	}
	/* 店铺end */
	/* 收藏图片内容start */
	.category-content{
		/* margin-left: -20upx; */
	}
	.category-content-box{
		position: relative;
		float: left;
		margin-left: 20upx;
		margin-top: 18upx;
		position: relative;
		width:345upx;
		height:500upx;
		background:rgba(255,255,255,1);
		border:1px solid rgba(231,231,231,1);
		box-shadow:0px 0px 7upx 0px rgba(136,136,136,0.2);
		border-radius:6upx;
	}
	.category-content-box:nth-child(even){
		margin-left: 16upx;
	}
	.category-content-box:nth-last-child(1){
		margin-bottom: 220upx;
	}
	.category-content-image{
		position: absolute;
		top: 0;
		left: 0;
	}
	.category-content-des{
		position: absolute;
		top: 351upx;
		left: 16upx;
		width:314upx;
		height:57upx;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.category-content-price{
		position: absolute;
		top: 424upx;
		left: 16upx;
	}
	.category-content-car{
		position: absolute;
		top: 394upx;
		left: 90upx;
		font-size:22upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(102,102,102,1);
		line-height:64px;
	}
	/* 收藏图片内容end */
	
	/* 查看更多居圈内容 start*/
	.look-more {
		width: 100%;
		height: 200rpx;
		line-height: 140rpx;
		text-align: center;
		font-size:24rpx;
		font-family:PingFang SC;
		color:rgba(204,204,204,1);
		/* margin-bottom: 100rpx; */
	}
</style>
