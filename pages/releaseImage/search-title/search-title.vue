<template>
	<view class="contant">
		<!-- 搜索栏 start -->
		<view class="header">
			<view class="search-input">
				<image src="http://www.zhongjubang.com/api/upload/static/search/nav-search.png" mode=""></image>
				<input class="uni-input" placeholder="搜索您需要参与的话题" @focus="onFocus" @blur="onBlur" @input="searchTopic" value=""/>
			</view>
			<view class="cancel" @click="cancel">取消</view>
		</view>
		<!-- 搜索栏 end -->
		
		<!-- 列表 start -->
		<view class="page-body">
			<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'">
				<view class="nav-left-item" :class="'-1'==categoryActive?'active':''" @click.stop="allTopic('-1')">
					<text class="left-name" :class="'-1'==categoryActive?'in':''">全部话题</text>
				</view>
				<view class="nav-left-item" :class="'-2'==categoryActive?'active':''" @click.stop="allTopic('-2')">
					<text class="left-name" :class="'-2'==categoryActive?'in':''">关注</text>
				</view>
				<view class="nav-left-item" @click="categoryClickMain(item.id, index)"  :key="index" :class="index==categoryActive?'active':''"
				    v-for="(item,index) in categoryList">
					<text class="left-name" :class="index==categoryActive?'in':''">{{item.talkThemeType}}</text>
				</view>
			</scroll-view>
			<scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scrolltolower="scrolltolower" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation>
				<view  :id="index===0?'first':''" class="nav-right-item" v-for="(item,index) in subCategoryList" :key="index" @click.stop="topicDetail(item.talkThemeId)">
					<view class="contnet">
						<view class="left">
							<view class="list-image">
								<image :src="item.talkThemeImg" mode=""></image>
							</view>
							<view class="detail">
								<view class="title">{{item.talkTheme}}</view>
								<view class="num">共{{item.participateCount}}人参与</view>
							</view>
						</view>
						<view class="right" @click.stop="chooseTopic(item.talkTheme, item.talkThemeId)" v-show="showChoose">
							选择
						</view>
					</view>
					
					<text class="border"></text>
				</view>
				<view class="look-more">-{{!statusMore ? '没有更多' : '上拉加载更多'}}-</view>
			</scroll-view>
		</view>
		<!-- 列表 end -->
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				categoryList: [],
				subCategoryList: [],
				height: 0,
				categoryActive: -1,
				scrollTop: 0,
				scrollHeight: 0,
				name: "七月_",
				token: '',
				showChoose: true,
				current_id: -1,
				current_index: -1,
				content: '',
				page: 1,
				pageSize: 10,
				total_page: 0,
				statusMore: true
			}
		},
		onShow() {
			let that = this;
			uni.getStorage({
				key:"token",
				success: function (res) {
				that.token = res.data;
			  }
			});
			if(this.categoryActive == '-2') {
				this.allTopic('-2');
				return;
			}
			if(this.categoryActive == '-1') {
				this.allTopic('-1');
				return;
			}
			if(this.current_id != -1) {
				this.categoryClickMain(this.current_id, this.current_index);
				return;
			}
			this.init();
		},
		onLoad(option) {
			if(option.type == 'Gcircle') {
				this.showChoose = false;
			}
			this.getCategory();
			this.height = uni.getSystemInfoSync().windowHeight;
			// this.detailId = 1;
		},
		methods: {
			scrolltolower() {
				if(this.categoryActive != '-1') {
					this.statusMore = false;
					return;
				}
				if(this.page < this.total_page) {
					this.page++;
					this.init();
				} else {
					this.statusMore = false;
				}
				if(this.page == this.total_page) {
					this.statusMore = false;
				}
			},
			init() {
				uni.showLoading({
					title: '加载中'
				})
				uni.request({
					url: this.url + '/controller/contentcontroller/gettalkthemelist',
					method: 'post',
					header : {'content-type':'application/x-www-form-urlencoded', token: this.token, 'port': 'app'},
					data:  {pageIndex: this.page, pageSize: this.pageSize, content: this.content},
					success: ((res) => {
						if(res.data.code == 200) {
							this.total_page = res.data.data.totalPage;
							// this.subCategoryList = res.data.data.dataList;
							let data = res.data.data.dataList;
							this.subCategoryList = this.reload ? data : this.subCategoryList.concat(data);
						}
						uni.hideLoading()
					}),
					fail:((res) =>{
						uni.showToast({
							title: '网络异常',
							icon: 'none'
						})
					})
				});
			},
			// 关注话题列表
			followTopic() {
				uni.request({
					url: this.url + 'controller/contentcontroller/gettalkthemeuserlistbyuserid',
					method: 'post',
					header : {'content-type':'application/x-www-form-urlencoded', token: this.token, 'port': 'app'},
					data:  {pageIndex: 1, pageSize: 1000},
					success: ((res) => {
						if(res.data.code == 200) {
							this.subCategoryList = res.data.data.dataList;
						}
						
					})
				});
			},
			// 点击所有话题
			allTopic(index) {
				this.categoryActive = index;
				if(index == '-2') {
					this.followTopic();
					return;
				}
				this.subCategoryList = [];
				this.page = 1;
				this.init();
			},
			// 搜索话题
			searchTopic(e) {
				this.content = e.detail.value;
				this.init()
			},
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
			// 选择话题
			chooseTopic(name, id) {
				console.log(name, id)
				uni.setStorage({
					key: 'topic_title',
					data:  {participationTopic:　name, participationTopicId: id},    
					success: function () {
						
					}
				})
				// let pages = getCurrentPages(), prevPage=null;
				// let pages = getCurrentPages();
				// let currPage = pages[pages.length - 1];  //当前页面
				// let prevPage = pages[pages.length - 2];  //上一个页面
				// if(prevPage) {
				// 		prevPage.participationTopic= name;
				// 		prevPage.participationTopicId = id ;
				// 	// #ifdef APP-PLUS || MP-WEIXIN
				// 		prevPage.setData({
				// 			participationTopic : name,
				// 			participationTopicId : id
				// 		})
				// 	// #endif
				// }
				// prevPage.ishow= false;
				// console.log(prevPage)
				uni.navigateBack();
			},
			cancel() {
				uni.navigateBack()
			},
			confirm() {
				uni.showToast({
					title: '搜索'
				})
			},
			scroll(e) {
				this.scrollHeight = e.detail.scrollHeight;
			},
			categoryClickMain(id, index) {
				let token
				let self = this;
				uni.getStorage({
					key:"token",
					success: function (res) {
						token = res.data;
					}
				})
				const url = this.url
				uni.request({
					url: this.url + '/controller/contentcontroller/gettalkthemelistbytypeid',
					method: 'post',
					header : {'content-type':'application/x-www-form-urlencoded', token: this.token, 'port': 'app'},
					data:  {talkThemeTypeId: id},
					success: ((res) => {
						if(res.data.code == 200) {
							
							this.subCategoryList = res.data.data;
						}
						
					})
				});
				this.current_id = id;
				this.current_index = index;
				this.categoryActive = index;
				this.scrollTop = -this.scrollHeight * index;
			},
			getCategory() {
				// 获取话题类型(左侧)
				let token
				let self = this;
				uni.getStorage({
					key:"token",
					success: function (res) {
						token = res.data;
					}
				})
				const url = this.url
				uni.request({
					url: this.url + '/controller/contentcontroller/gettalkthemetypeall',
					method: 'post',
					header : {'content-type':'application/x-www-form-urlencoded',  token: this.token, 'port': 'app'},
					success: (res => {
						if(res.data.code == 200) {
							this.categoryList = res.data.data;
							// this.categoryClickMain(this.categoryList[0].id, 0)
							
						}
						
					})
				});
			
			},
			// 话题详情
			topicDetail(id) {
				let obj = JSON.parse(id);
				if(obj.topicId) {
					id = obj.topicId
				}
				uni.navigateTo({
					url: '/pages/topicDetails/topicDetails?type=topic&id=' + id
				})
			}
			
		},
	}
</script>

<style>
	page, .contant {
		height: 100%;
	}
	.header {
		width: 100%;
		height: 140rpx;
		/* line-height: 10rpx; */
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 10rpx 30rpx;
		background: #FFFFFF;
		position: fixed;
		z-index: 1;
		/* top: 50rpx; */
		left: 0;
		right: 0;
		border-bottom: 1px solid #E2E2E2;
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
		display: flex;
		align-items: center;
	}
	.search-input image {
		width: 26rpx;
		height: 26rpx;
		display: block;
		margin-left: 15px;
		margin-right: 5px;
	}
	.search-input input {
		width: 88%;
		margin: 0;
		font-size: 26rpx;
	}
	.cancel {
		width: 13%;
		line-height: 80rpx;
		text-align: center;
		color: #333333;
		font-size: 28rpx;
	}
	/* 搜索 end */
	
	.page-body {
		display: flex;
		position: relative;
		top: 140rpx;
	}
	
	.nav {
		display: flex;
		width: 100%;
		
	}
	
	.nav-left {
		width: 30%;
		position: fixed;
		background: #F8F8F8;
		box-sizing: border-box;
		padding-bottom: 150rpx;
	}
	
	.nav-left-item {
		height: 100upx;
		font-size: 26rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #666666;
		font-weight: 500;
	}
	
	.left-name {
		display: block;
		width: 100%;
		height: 37rpx;
		text-align: center;
	}
	
	.nav-right {
		width: 70%;
		margin-left: 30%;
		background: #FFFFFF;
		box-sizing: border-box;
		/* padding-bottom: 150rpx; */
	}
	
	.nav-right-item {
		width: 100%;
		height: 150rpx;
		box-sizing: border-box;
		padding: 34rpx 30rpx;
		/* border-bottom: 1px solid #E2E2E2; */
	}
	.contnet {
		display: flex;
		justify-content: space-between;
	}
	.border {
		display: block;
		border-bottom: 1px solid #E2E2E2;
		margin-top: 28rpx;
	}
	.nav-right-item .left {
		height: 100%;
		display: flex;
		justify-content: flex-start;
	}
	.nav-right-item image {
		width: 73rpx;
		height: 75rpx;
		margin-right: 10px;
	}
	
	.title {
		color: #4e4e4e;
		font-size: 26rpx;
		font-weight: bold;
		margin-bottom: 18rpx;
	}
	.num {
		color: #999999;
		font-size: 22rpx;
		font-weight: bold;
	}
	.right {
		width: 95rpx;
		height: 45rpx;
		line-height: 45rpx;
		border: 1px solid #FABE3F;
		border-radius: 23rpx;
		text-align: center;
		color: #FABE3F;
		font-size: 26rpx;
		margin: auto 0;
	}
	.active {
		color: #FABE3F;
		background: #FFFFFF;
	}
	.in {
		border-left: 13rpx solid #FABE3F;
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

