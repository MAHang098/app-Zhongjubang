<template>
	<view>
		<!-- 搜索栏 start -->
		<view class="header">
			<view class="search-input">
				<image src="http://www.zhongjubang.com/api/upload/static/search/nav-search.png" mode=""></image>
				<input type="text" value=""  placeholder="搜索您需要的商品" @input="gainInput" @focus="onFocus" @blur="onBlur" @click.stop="goSearch"/>
			</view>
			<view class="cancel">
				<image src="http://www.zhongjubang.com/api/upload/static/img/G-circle/more.png" mode="" class="more-list" @click.stop="category"></image>
			</view>
		</view>
		<!-- 搜索栏 end -->
		
		<!-- G圈内容 start -->
		<view class="G-cicle_content">
			<!-- 居圈分类 居圈/关注/短视频 start-->
			<view class="G-list_content">
				<view v-for="(item, index) in tabType" :class="index == current ? 'active' : '' " @click="changeProduct(index)" :key="index">
					{{item}}
					<text v-bind:class="index == current ? 'active-status' : '' "></text>
				</view>
			</view>
			<view class="G-list_detial_one" v-if="isShow">
				<view class="category-detial" v-for="(item, index) in recommendList" :key="index" @click.stop="homologousPage(index, item.resource.resource)">
					<image :src="item.resource.img" mode="" class="album-img"></image> 
					<view class="title">{{item.resource.name}}</view>
					<view class="mask"></view>
					<view>{{item.resource.remarks}}</view>
				</view>
			</view>
			<view class="G-list_detial_two" v-else>
				<scroll-view class="G-list_detial_user scroll-view_H" scroll-x="true" :show-scrollbar="isScrollbar">
					<view class="G-list_detial_userDteial scroll-view-item_H" v-for="(item, index) in userList" :key="index">
						<image src="http://www.zhongjubang.com/api/upload/static/img/G-circle/test1.png" mode=""></image>
						<view>{{item.nick_name}}</view>
						<image @click.stop="focus(item.id,  current)" :src="item.followState == '0' ? 'http://www.zhongjubang.com/api/upload/static/follow.png' : item.followState == '2' ? 'http://www.zhongjubang.com/api/upload/static/mutual-follow.png' : 'http://www.zhongjubang.com/api/upload/static/follow-checked.png'" mode=""></image>
					</view>
					
				</scroll-view>
				<view class="refresh" @click.stop="refreshUser">
					<text>换一批</text>
					<image src="http://www.zhongjubang.com/api/upload/static/img/G-circle/refresh.png" mode=""></image>
				</view>
			</view>
			<!-- 居圈分类 居圈/关注/短视频 end --> 
			
			<!-- G圈所有内容 start -->
			<view class="relese-image"  v-for="(items, index) in releaseImgList" :key="index">
				<view class="relese-image_detail" >
					<!-- 用户信息 start -->
					<view class="user">
						<view class="user-message" @click.stop="goUser(items.userId)">
							<image :src="items.head" mode=""></image>
							<view>
								<view class="name">{{items.nickName}}</view>
								<view class="time">{{items.createTime}}</view>
							</view>
						</view>
						<view class="operate-user" @click.stop="operate(index)" v-if="items.state == 1">
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
						<view v-else class="user-right" @click.stop="focus(items.userId, current)">
							<image :src="items.attentionState == 0 ? 'http://www.zhongjubang.com/api/upload/static/follow.png' : items.attentionState == 2 ? 'http://www.zhongjubang.com/api/upload/static/mutual-follow.png' : 'http://www.zhongjubang.com/api/upload/static/follow-checked.png'" mode=""></image>
						</view>
					</view>
					<!-- 用户信息 start -->
					
					<!-- 文字展开/收起 start -->
					<view class="content"  v-if="items.content != '' ">
						<view v-if="!isShowAllContent"  @click.stop="contentDetail(items.gcircleContentId)" class="text">{{items.content }}</view>
						<view v-else class="text"  @click.stop="contentDetail(items.gcircleContentId)">{{items.content | ellipsis}}</view>
						<view class="anCotent" v-if="items.content.length > 60 " @click="open(index)">{{ brandFold  ? '收起' : '展开'}}<image :class="!brandFold ? '' : 'in'" src="http://www.zhongjubang.com/api/upload/static/drafts/arrow-bottom.png" mode=""></image></view>
					</view>
					<!-- 文字展开/收起 end -->
					
					<!-- 图片/视频 start -->
					<view class="imageList">
						<image :mode="items.imgList.length > 1 ? '' : '' " :class="items.imgList.length > 1 ? 'imageListIn' : 'imageListSingle' " :src="row.fileUrl" v-for="(row, indexI) in items.imgList" :key="indexI" @click.stop="previewImage(indexI, items.imgList)"></image>
						<!-- <image src="http://www.zhongjubang.com/api/upload/static/draftsT.png" mode="" ></image> -->
					</view>
					<!-- 图片/视频 end -->
					
					<!-- 话题 start -->
					<view class="release-image_topic"  v-show="show" v-if="items.title.topic != '' ">
						<view class="left" @click.stop="goTopic(items.title.topicId)">
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
							<view class="number-message">
								<image src="http://www.zhongjubang.com/api/upload/static/img/user/message.png" mode=""></image>
								<text>{{items.gCollectionDiscussNum}}</text>
							</view>
							<view class="collect">
								<image @click.stop="collect(index, items.gcircleContentId, items.collectionState, current)" :src="(activeIndex == index && isShowCollect) || items.collectionState === 1 ? 'http://www.zhongjubang.com/api/upload/static/topic/collect-select.png' : 'http://www.zhongjubang.com/api/upload/static/img/user/star.png' " mode=""></image>
								<text>{{items.collectionNum}}</text>
							</view>
							<view class="fabulous" >
								<image @click.stop="fabulous(index, items.gcircleContentId, items.gcircleContentLikeState, current)" :src="(fabulousIndex == index && isShowFabulous) || items.gcircleContentLikeState === 1 ? 'http://www.zhongjubang.com/api/upload/static/topic/fabulous-select.png' : 'http://www.zhongjubang.com/api/upload/static/img/user/good.png'" mode=""></image>
								<text>{{items.gcircleContentLikeNum}}</text>
							</view>
						</view>
					</view>
					<!-- 操作按钮 end -->
				</view>
				
			</view>
			
			<!-- 点击右边三点显示的遮罩层 start -->
			<view id="mask" v-show="showEdit"></view>
			<!-- 点击右边三点显示的遮罩层 end -->
			<view class="look-more">-{{status== 'end' ? '没有更多' : '上拉加载更多'}}-</view>
			<!-- <uni-load-more :status="status" :content-text="contentText" /> -->
			<!-- G圈所有内容 end -->
		</view>
		<!-- G圈内容 end -->
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				reload: false,
				status: 'more',
				contentText: {
					contentdown: '上拉加载更多',
					// contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				page: 1,
				tabType: ['居圈', '关注', '短视频'],
				current: 0,
				cIndex: -1,
				activeIndex: -1,
				show: true,
				token: '',
				isShow: true,
				brandFold: false,
				isShowAllContent: true,
				showEdit: false,
				draftsList: [],
				imageDrafts: [],
				content: '某臣氏骑剑活动！水雾质地 很轻薄 不沾黏！在上待几分钟会变成雾面哑光感某臣氏骑剑活动！水雾质地 很轻薄 不沾黏！在上待几分钟会变成雾面哑光感 超高级！显色很持久...不沾黏！在上待几分钟会变成雾面哑光感 超高级！显色很持久...',
				userList: [],
				isScrollbar: false,
				releaseImgList: [],
				fabulousIndex: -1,
				isShowFabulous: false,   //是否显示已点赞
				isShowCollect: false,   //是否显示已收藏
				isShowFocus: false,   //是否显示已关注图标
				recommendList: [],   	  // G圈推荐
				userListContent: [],		// 关注用户的G圈列表
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
		onShow() {
			uni.getStorage({
				key:"token",
				success:((res) => {
				this.token = res.data;
			  })
			});
			this.current = 0;
			this.isShow = true;
			this.page = 1;
			this.releaseImgList = [];
			this.init();
			this.recommend();
		},
		// 上拉加载
		onReachBottom: function() {
			this.status = 'more';
			if( this.page == 1) {
				this.status = 'end';
				return;
			}
			this.init();
		},	
		methods: {
			// 获取G圈推荐
			recommend() {
				uni.request({
					url: this.url + "/public/public/getGcircleListbyresourcestype",
					data: {resourcesTypeName: 'app_top_list'},
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						uni.hideLoading()
						if(res.data.code == 200) {
							let data = res.data.data;
							this.recommendList = data;
						}
					})
				})
			},
			// 获取居圈内容
			init() {
				let parmas = {
					pageIndex: this.page,
					pageSize: 10
				}
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				
				uni.request({
					url: this.url + "/controller/contentcontroller/getallgcirclecontentlist",
					data: parmas,
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						uni.hideLoading()
						let totalPage = res.data.data.pageSize * res.data.data.totalPage;
						if(this.releaseImgList.length == totalPage) {
							this.status = 'end';
							return;
						}
						if(res.data.code == 200) {
							let data = res.data.data.dataList;
							for(let i=0; i<data.length; i++) {
								data[i].imgList = JSON.parse(data[i].imgList);
								data[i].title = JSON.parse(data[i].title);
							}
							this.releaseImgList = this.reload ? data : this.releaseImgList.concat(data);
							if(res.data.data.totalPage < 2) {
								return;
							}
							this.page++;
						}
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
					})
				})
			},
			// 获取关注页面的用户列表
			focusUser() {
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				
				uni.request({
				    url: this.url + 'controller/usercontroller/getRecommendUserList',
				    method: 'post',
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:(res) => {
						uni.hideLoading()
				        if(res.data.code == 200) {
				            this.userList = res.data.data;
				        } 
						
				    }
				});
			},
			// 刷新用户
			refreshUser() {
				this.focusUser();
			},
			// 获取关注的用户的G圈内容
			focusUserContent() {
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				uni.request({
				    url: this.url + 'controller/contentcontroller/getGcircleContentListByAttention',
				    method: 'post',
					data: {pageSize: 100, pageIndex: 1},
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:(res) => {
						uni.hideLoading();
				        if(res.data.code == 200) {
							let data = res.data.data.dataList;
							for(let i=0; i<data.length; i++) {
								data[i].imgList = JSON.parse(data[i].imgList);
								data[i].title = JSON.parse(data[i].title);
							}
				            this.releaseImgList = data;
				        }
						
				    }
				});
			},
			// 关注
			focus(id,currents) {
			    uni.request({
			        url: this.url + 'controller/usercontroller/addattentionrelationship',
			        method: 'post',
			        data: {outUserId: id},
			        header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
			        success:((res) => {
			            if(res.data.code == 200) {
							if(currents == 0) {
								this.init();
							}
							if(currents == 1) {
								this.focusUserContent();
								this.focusUser();
							}
			                // this.init(this.topicId);
			            } 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
			        })
			    });
			},
			// 收藏
			collect(index, id, state, currents) {
			    uni.request({
			        url: this.url + 'controller/usercontroller/addusercollection',
			        method: 'post',
			        data: {collectionContentId: id, type: '1'},
			        header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
			        success:(res) => {
			            if(res.data.code == 200) {
							if(currents == 0) {
								this.init();
							}
			                if(currents == 1) {
								this.focusUserContent();
							}
			                this.activeIndex = index;
							if(state == 1) {
								this.isShowCollect = false;
								return;
							}
			                this.isShowCollect = !this.isShowCollect;
			            } 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
			        }
			    });
			},
			// 点赞
			fabulous(index, id, state, currents) {
			    uni.request({
			        url: this.url + 'controller/usercontroller/addgcirclecontentlike',
			        method: 'post',
			        data: {gcircleContentId: id},
			        header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
			        success:((res) => {
			            if(res.data.code == 200) {
			               if(currents == 0) {
								this.init();
			               }
							if(currents == 1) {
								this.focusUserContent();
							}
			                this.fabulousIndex = index;
							if(state == 1) {
								this.isShowFabulous = false;
								return;
							}
							this.isShowFabulous = !this.isShowFabulous;
			            } 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
			        })
			    });
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
			// 跳转到G圈详情
			contentDetail(id) {
				uni.navigateTo({
					url: '/pages/releaseImage-details/releaseImage-details?id=' + id
				})
			},
			// 切换居圈/关注/短视频
			changeProduct(index) {
				this.current = index;
				console.log(index)
				if(index == 2) {
					uni.navigateTo({
						url: '/pages/juquanVideo/juquanVideo'
					})
				}
				if(index == 1) {
					this.focusUser();
					this.focusUserContent();
				}
				if(index == 0) {
					this.init();
				}
				this.isShow = !this.isShow;
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
			// 失去焦点后获取输入内容
			gainInput(e) {
				if(e.detail.value == '') {
					this.isShowAdd = false;
					return;
				}
				this.searchInput = e.detail.value;
				this.isShowAdd = true;
			},
			// 输入框获取焦点/失去焦点
			onFocus() {
				// #ifdef APP-PLUS
				this.$mp.page.$getAppWebview().setStyle({
					softinputNavBar: 'none'
				})
				// #endif
				
			},
			onBlur() {
				// #ifdef APP-PLUS
				this.$mp.page.$getAppWebview().setStyle({
					softinputNavBar: 'auto'
				})
				// #endif
				
			},
			// 跳转到搜索页面
			goSearch() {
				uni.navigateTo({
					url: '/pages/G-circle/search-content/search-content'
				})
			},
			// 修改G圈内容
			editRelease(item, id) {
				this.$store.commit('saveImage', item.imgList);
				let obj = {
					editId: id,
					title: item.title,
					content: item.content,
					type: 'juquan'
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
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						if(res.data.code == 200) {
							uni.showToast({
								title: '删除成功',
								duration: 500,
							});
							this.showEdit = !this.showEdit;
							this.init();
						}
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
					})
				})
			},
			// 专辑模块跳转
			homologousPage(index, id) {
				if(index == 0) {
					// 跳转到话题页面
					uni.navigateTo({
						url:'/pages/topicDetails/topicDetails?id=' + id
					})
					return;
				}
				if(index == 1) {
					// 跳转到网红视频页面
					return;
				}
				if(index == 2) {
					// 跳转到话题页面
					uni.navigateTo({
						url:'/pages/topicDetails/topicDetails?id=' + id
					})
					
				}
			},
			// 点击话题跳转到话题详情
			goTopic(id) {
				uni.navigateTo({
					url:'/pages/topicDetails/topicDetails?id=' + id
				})
			},
			// 跳转到更多分类
			category() {
				uni.navigateTo({
					url: '/pages/category/category'
				})
			},
			// 跳转到用户主页
			goUser(id) {
				uni.navigateTo({
					url: '/pages/otherUser/otherUser?userid=' + id
				})
			}
		}
	}
</script>

<style scoped>
	@import '../../static/css/releaseImgList.css'; /*引入G圈列表样式*/
	page {
		width: 100%;
		height: 100%;
		background: #F6F6F6;
	}
	.header {
		width: 100%;
		height: 140rpx;
		/* line-height: 100rpx; */
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 10rpx 30rpx;
		background: #FFFFFF;
		position: fixed;
		z-index: 3;
		top: 0;
		left: 0;
		right: 0;
	}
	.header view {
		margin-top: 40rpx;
	}
	.search-input {
		position: relative;
		width: 100%;
		height: 70rpx;
		background: #f6f6f6;
		border-radius: 35rpx;
	}
	.search-input image {
		width: 26rpx;
		height: 26rpx;
		display: block;
		position: absolute;
		top: 23rpx;
		left: 24rpx;
		
	}
	.search-input input {
		width: 88%;
		margin: 0;
		font-size: 26rpx;
		margin-left: 60rpx;
		margin-top: 10rpx;
	}
	.cancel {
		height: 35px;
	}
	.more-list {
		width: 47rpx;
		height: 47rpx;
		display: block;
		margin-top: 6px;
		margin-left: 15px;
	}
	/* 搜索 end */
	.G-cicle_content {
		width: 100%;
		height: 100%;
		background: #F6F6F6;
		position: relative;
		top: 70px;
	}
	/* 切换搜索内容 start */
	.G-list_content {
		height: 70rpx;
		background: #FFFFFF;
	}
	.G-list_content view {
		width: 20%;
		height: 34rpx;
		line-height: 34rpx;
		text-align: center;
		color: #747474;
		font-size: 32rpx;
		display: inline-block;
		border-right: 1rpx solid #E2E2E2;
	}
	.G-list_content view:last-child {
		border: none;
	}
	.active {
		color: #333333 !important;
		font-weight: bold;
		border-width: 50rpx;
		border-color: red;
		
	}
	.active-status {
		margin: 9px auto;
		display: block;
		width:70rpx;
		height:6rpx;
		background:rgba(249,183,44,1);
		border-radius:3px;
	}
	/* 切换搜索内容 end */
	
	/* G圈类别 start*/
	.G-list_detial_one {
		width: 100%;
		height: 250rpx;
		box-sizing: border-box;
		padding: 25rpx 20rpx;
		display: flex;
		justify-content: flex-start;
		background: #FFFFFF;
	}
	.category-detial {
		width: 34%;
		height: 100%;
		position: relative;
		background-image: url(http://www.zhongjubang.com/api/upload/static/img/G-circle/shadow.png);
		background-repeat: no-repeat;
		background-size: 100%;
	}
	.bg-shadow {
		width: 100%;
		height: 100%;
		display: block;
		position: absolute;
		top: 0;
	}
	.category-detial .album-img {
		width: 228rpx;
		height: 190rpx;
		display: block;
		position: absolute;
		top: -6px;
		border-radius: 3px;
	}
	.category-detial .mask {
		width: 97%;
		height: 190rpx;
		background: rgba(0,0,0,.3);
		z-index: 1;
		position: absolute;
		top: -6px;
		border-radius: 3px;
	}
	.category-detial .title {
		width: 100%;
		font-size:30rpx;
		font-family:PingFang SC;
		color:rgba(255,205,99,1);
		position: absolute;
		top: 54rpx;
		text-align: center;
		z-index: 2;
		
	}
	.category-detial view:last-child {
		width: 100%;
		font-size:24rpx;
		font-family:PingFang SC;
		color:rgba(255,255,255,1);
		position: absolute;
		top: 100rpx;
		text-align: center;
		z-index: 2;
	}
	/* G圈类别 end*/
	/* G圈列表 start */
	.relese-image {
		margin-top: 20rpx;
		background: #FFFFFF;
		padding: 30rpx 20rpx;
	}
	.relese-image_detail {
		margin: 0;
	}
	.release-image_topic {
		margin-top: 10px;
	}
	.operate-bottom {
		padding-top: 10px;
	}
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
	/* 关注 start */
	.G-list_detial_two {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding-left: 20rpx;
		padding-top: 20rpx;
		background: #FFFFFF;
	}
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
		
	}
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
	} 
	.G-list_detial_userDteial {
		width:274rpx;
		height:353rpx;
		background:rgba(255,255,255,1);
		border:1px solid rgba(241, 241, 241, 1);
		box-shadow:1px 1px 12rpx 0px rgba(4,0,0,0.07);
		border-radius:10rpx;
		box-sizing: border-box;
		padding-top: 40rpx;
		display: inline-block;
		margin-right: 20rpx;
	}
	.G-list_detial_userDteial image:first-child {
		width: 138rpx;
		height: 138rpx;
		display: block;
		margin: 0 auto;
	}
	.G-list_detial_userDteial view {
		width: 100%;
		text-align: center;
		height: 48rpx;
		font-size:30rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		line-height:48rpx;
		margin: 20rpx 0;
	}
	.G-list_detial_userDteial image:last-child {
		width: 127rpx;
		height: 54rpx;
		display: block;
		margin: 0 auto;
	}
	.refresh {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		font-size:24rpx;
		font-family:PingFang SC;
		color:rgba(153,153,153,1);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.refresh image {
		width: 23rpx;
		height: 25rpx;
		display: block;
		margin-left: 10rpx;
	}
</style>