<template>
	<view class="contant">
		<!-- 搜索栏 start -->
		<view class="header">
			<view @tap="goSearch" class="search-input">
				<image src="http://www.zhongjubang.com/api/upload/static/search/nav-search.png" mode=""></image>
				<input class="uni-input" placeholder="搜索您所需要的商品" @focus="onFocus" @blur="onBlur" @input="searchTopic" value=""/>
			</view>
			<view class="cancel" @click="cancel">取消</view>
		</view>
		<!-- 搜索栏 end -->
		
		<!-- 列表 start -->
		<view class="page-body">
			<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'">
				
				<view 
					class="nav-left-item" 
					@click="categoryClickMain(item.id, index)"  :key="index" 
					:class="index==categoryActive?'active':''"
				    v-for="(item,index) in categoryList"
				>
					
					<text class="left-name" :class="index==categoryActive?'in':''">{{item.goodsType}}</text>
				</view>
			</scroll-view>
			<image class="banner" style="width: 480rpx;height: 242rpx;" :src="imageStyle" mode="" />
			<scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation>
				<view  :id="index===0?'first':''" class="nav-right-item" v-for="(item,index) in subCategoryList" :key="index" @click.stop="goMorecategory(type,item.goodsStyleId)">
					<view class="content">
						<view class="content-packet">
							<image class="content-image" style="width: 130upx;height: 130upx;border-radius: 50%;" :src="item.goodsStyleImg" mode="" />
							<text class="content-text">{{item.goodsStyle}}</text>
						</view>
						
					</view>
					
				</view>
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
				imageStyle: '',
				type: '',
				id: ''
			}
		},
		onLoad: function (options) {
			this.id = options.id
			this.getCategory();
			this.height = uni.getSystemInfoSync().windowHeight;
		},
		onShow() {
			let that = this;
			uni.getStorage({
				key:"token",
				success: function (res) {
				that.token = res.data;
			  }
			});
			this.init('');
			this.categoryClickMain(this.id,this.id-1)
		},
		methods: {
			goMorecategory(type,style){
				uni.navigateTo({
					url: '/pages/category-more/category-more?type='+type+'&style='+style
				})
			},
			goSearch(){
				uni.navigateTo({
					url: "/pages/G-circle/search-content/search-content"
				})
			},
			init(search) {
				this.categoryClickMain(1)
				let self = this
				// 搜索轮播图
				uni.request({
					url: this.url + 'public/public/getresourcesbyresourcestype',
					data: {
						resourcesTypeName:'app_goods_type_img'
					},
					method:"POST",
					header : {'content-type':'application/x-www-form-urlencoded','port':'app'},
					success: function (res){
						if(res.data.code=="200"){
							self.imageStyle = res.data.data[0].resource
						}
					}
				})
			},
			// 点击所有话题
			allTopic(index) {
				this.categoryActive = index;
				this.init();
			},
			// 搜索话题
			searchTopic(e) {
				this.init(e.detail.value)
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
			// 
			chooseTopic(name, id) {
				
				// let pages = getCurrentPages(), prevPage=null;
				let pages = getCurrentPages();
				let currPage = pages[pages.length - 1];  //当前页面
				let prevPage = pages[pages.length - 2];  //上一个页面
				if(prevPage) {
						prevPage.participationTopic= name;
						prevPage.participationTopicId = id ;
					// #ifdef APP-PLUS || MP-WEIXIN
						prevPage.setData({
							participationTopic : name,
							participationTopicId : id
						})
					// #endif
				}
				prevPage.ishow= false;
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
			//获取右侧
			categoryClickMain(id, index) {
				console.log(id)
				console.log(index)
				this.type = id
				let token
				let self = this;
				console.log(id)
				uni.getStorage({
					key:"token",
					success: function (res) {
						token = res.data;
					}
				})
				const url = this.url
				uni.request({
					url: this.url + 'controller/shopcontroller/getgoodsstyle',
					method: 'post',
					header : {'content-type':'application/x-www-form-urlencoded', token: '', 'port': 'app'},
					data:  {goodsTypeId: id},
					success: ((res) => {
						if(res.data.code == 200) {
							this.subCategoryList = res.data.data
						}
						
					})
				});
				
				this.categoryActive = index;
				this.scrollTop = -this.scrollHeight * index;
			},
			getCategory() {
				let that = this;
				uni.getStorage({
					key:"token",
					success: function (res) {
					that.token = res.data;
				  }
				});
				// 获取(左侧)
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
					url: this.url + 'controller/shopcontroller/getgoodstype',
					method: 'post',
					header : {'content-type':'application/x-www-form-urlencoded',  token: '', 'port': 'app'},
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
		/* line-height: 35rpx; */
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
		border-radius: 35rpx;
		height: 70rpx;
		line-height: 13px;
		margin: 0;
		font-size: 26rpx;
		padding-left: 60rpx;
		background: #f6f6f6;
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
		/* display: flex; */
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
	.banner{
		position: relative;
		left: 248rpx;
		top: 40rpx;
	}
	
	.nav-right {
		margin-top: 60rpx;
		/* margin-left: 200rpx; */
		width: 70%;
		margin-left: 30%;
		background: #FFFFFF;
		box-sizing: border-box;
		padding-bottom: 150rpx;
	}
	
	.nav-right-item {
		/* width: 100%;
		height: 150rpx;
		box-sizing: border-box;
		padding: 34rpx 30rpx; */
		/* border-bottom: 1px solid #E2E2E2; */
	}
	.content {
		float: left;
	}
	.content-packet{
		float: left;
		margin-left: 32rpx;
		/* margin-right: 32upx; */
		margin-bottom: 58upx;
		text-align: center;
		width: 130upx;
		height: 170upx;
	}
	.content-image{
		/* float: left; */
	}
	.content-text{
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
	}
	
	
	.active {
		/* color: #FABE3F; */
		font-weight: bolder;
		background: #FFFFFF;
		font-size: 30rpx;
	}
	.in {
		border-left: 13rpx solid #FABE3F;
	}
</style>

