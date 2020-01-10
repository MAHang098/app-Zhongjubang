<template>
	<view>
		<!-- G圈内容 start -->
        <view class="G-cicle_content" v-if="!show">
            <image style="width:38upx;height:56upx;" src="http://www.zhongjubang.com/api/upload/static/img/juquanVideo/back.png" mode="" class="back"  @tap="searchBack"></image>
		    <image style="width:30upx;height:28upx;" src="http://www.zhongjubang.com/api/upload/static/img/juquanVideo/search.png" mode="" class="input-search"></image>
            <text class="search-text" @tap="search">取消</text>
			<input class="input" @confirm="recordName" placeholder="搜索视频内容" type="text" :value="inputValue">
			<view class="search-wrap">
			    <view class="video-detail" v-for="(item, index) in searchList" :key="index">
			        <view class="video-content">
			            <image class="video-content-start" style="width:52rpx;height:52rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/start.png" mode=""></image>
						<view class="" @tap="goOtherUser(item.userId)">
							<image class="video-content-avator" style="width:60rpx;height:60rpx;border-radius:50%;" :src="item.head" mode=""></image>
							<view class="video-content-nickname">{{item.nickName}}</view>
						</view>
			            
			            <image class="video-content-image" style="width:350rpx;height:512rpx;border-radius:3px;" :src="item.videoUrl" @tap="sendVideoWanghong(item.shortVideoId)"></image>
			        </view>
			    </view>
			</view>
        </view>
		<view v-if="show" class="G-cicle_content">
			<!-- 居圈分类 居圈/关注/短视频 start-->
		    <image style="width:38upx;height:56upx;" src="http://www.zhongjubang.com/api/upload/static/img/juquanVideo/back.png" mode="" class="back"  @tap="goBack"></image>
		    <image style="width:38upx;height:38upx;" src="http://www.zhongjubang.com/api/upload/static/img/juquanVideo/search.png" mode="" class="search"  @tap="search"></image>
			<view class="G-list_content">
				<view v-for="(item, index) in tabType" :class="index == current ? 'active' : '' " @click="changeProduct(index)" :key="index">
					{{item}}
					<text v-bind:class="index == current ? 'active-status' : '' "></text>
				</view>
			</view>
            
            <view class="video-all">
				<!-- 全部 -->
                <view class="video-wrap" v-if="current==0">
                    <view class="video-detail" v-for="(item, index) in videoList" :key="index">
                        <view class="video-content">
                            <image class="video-content-start" style="width:52rpx;height:52rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/start.png" mode=""></image>
                            <view class="" @tap="goOtherUser(item.userId)">
                            	<image class="video-content-avator" style="width:60rpx;height:60rpx;border-radius:50%;" :src="item.head" mode=""></image>
                            	<view class="video-content-nickname">{{item.nickName}}</view>
                            </view>
                            <image @tap="sendVideo(item.shortVideoId)" class="video-content-image" style="width:350rpx;height:512rpx;border-radius:3px;" :src="item.videoUrl"></image>
                        </view>
                    </view>
                </view>
				<!-- 网红 -->
                <view class="video-wrap" v-if="current==1">
                    <image class="video-wrap-image" style="width:750rpx;height:359rpx;" :src="wanghongtuList" mode=""></image>
                    <view class="video-detail" v-for="(item, index) in InternetCelebrityList" :key="index">
                        <view class="video-content">
                            <image class="video-content-start" style="width:52rpx;height:52rpx;" src="http://www.zhongjubang.com/api/upload/static/img/user/start.png" mode=""></image>
							<view class="" @tap="goOtherUser(item.userId)">
								<image class="video-content-avator" style="width:60rpx;height:60rpx;border-radius:50%;" :src="item.head" mode=""></image>
								<view class="video-content-nickname">{{item.nickName}}</view>
							</view>
                            
                            <image class="video-content-image" style="width:350rpx;height:512rpx;border-radius:3px;" :src="item.videoUrl" @tap="sendVideo(item.shortVideoId)"></image>
                        </view>
                    </view>
                </view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
                tabType: ['全部视频', '网红视频'],
                current: 0,
                isShow: true,
                show: true,
                videoList: [],
                InternetCelebrityList: [],
				searchList: [],
				inputValue: '',
				type: 0,
				wanghongtuList: ''
				
			}
		},
		onLoad(options){
			this.type = options.type
			if(options.type==1){
				this.changeProduct(1)
			}
			this.page_type = options.page_type
		},
		onShow() {
			this.initVideo()
			this.getWanghongtu()
		},
		onReachBottom() {
			if(this.current == 1) {
				
				return
			}
			if(this.page < this.totalPage) {
				this.page++;
				this.initVideo();
			} else {
				this.status_more = 'end'
			}
		},
		methods: {
			// 获取网红列表图片
			getWanghongtu(){
				const url = this.url
				let self = this
				uni.request({
					url: url + "public/public/getresourcesbyresourcestype",
					data: {
				       resourcesTypeName:'app_video_top_img',
					   'port':'app'
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded',
						'port':'app'
					},
					success: function (res){
						// console.log(res.data.code)
						if(res.data.code=="200"){
							self.wanghongtuList = res.data.data[0].resource
							console.log(self.wanghongtuList)
						}
					},
					fail:((res) =>{
						uni.showToast({
							title:'网络异常',
							icon:'none'
						})
					})
				});
			},
			changeVideoType(id){
				id = id.replace('MP4','jpg')
				id = id.replace('mp4','jpg')
				id = id.replace('flv','jpg')
				id = id.replace('avi','jpg')
				id = id.replace('rmvb','jpg')
				id = id.replace('rm','jpg')
				id = id.replace('wmv','jpg')
				id = id.replace('MOV','jpg')
				id = id.replace('mov','jpg')
				return id
			},
			goOtherUser(id){
				uni.navigateTo({
					url: '/pages/otherUser/otherUser?userid=' + id
				})
			},
			// 搜索短视频
			recordName(e) {
				this.inputValue = e.detail.value;
				console.log(e.detail.value)
				let self = this
				
				const url = this.url
				uni.request({
					url: url + "controller/videocontroller/getallshortvideolist",
					data: {
				        pageIndex: 1,
						pageSize: 100,
						search: e.detail.value
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded'
					},
					success: function (res){
						// console.log(res.data.code)
						if(res.data.code==200){
				            console.log(res)
							for(var i = 0;i < res.data.data.dataList.length;i++){
								res.data.data.dataList[i].videoUrl = self.changeVideoType(res.data.data.dataList[i].videoUrl)
							}
				            self.searchList = res.data.data.dataList
						}else{
							console.log("请求异常")
						}
					}
				});
			},
			
            search(){
                this.show = !this.show
            },
			// 全部视频/网红视频
			changeProduct(index) {
				this.current = index;
				console.log(index)
				
            },
			searchBack(){
				uni.navigateBack()
			},
            goBack(){
    //             uni.navigateBack({
				// 	delta: 1
				// })
				console.log(this.type)
				if(this.type==1){
					uni.switchTab({
						url: '/pages/main/main'
					})
				}
				if(this.type==2){
					uni.switchTab({
						url: '/pages/juquan/juquan'
					})
				}
				if(this.type==3){
					uni.navigateTo({
						url: '/pages/releaseVideo/releaseVideo'
					})
				}
				
				
            },
            // 获取短视频内容
			initVideo(type) {
				let self = this
				uni.showLoading({
					title: '加载中'
				})
				const url = this.url
				// 获取全部视频内容
				uni.request({
					url: url + "controller/videocontroller/getallshortvideolist",
					data: {
                       pageIndex: this.page,
                       pageSize: this.pageSize
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded'
					},
					success: function (res){
						// console.log(res.data.code)
						if(res.data.code==200){
                            self.totalPage = res.data.data.totalPage;
							for(var i = 0;i < res.data.data.dataList.length;i++){
								res.data.data.dataList[i].videoUrl = self.changeVideoType(res.data.data.dataList[i].videoUrl)
							}
                            let data = res.data.data.dataList
							self.videoList = self.reload ? data : self.videoList.concat(data);
							
						}else{
							console.log("请求异常")
						}
						uni.hideLoading()
					},
					fail:((res) =>{
						uni.showToast({
							title:'网络异常',
							icon:'none'
						})
					})
				});
				// 获取网红视频内容
				uni.request({
					url: url + "controller/videocontroller/getInternetCelebrityShortVideo",
					data: {
                        pageIndex: 1,
						pageSize: 100
					},
					method: 'POST',
					header : {
						'content-type':'application/x-www-form-urlencoded'
					},
					success: function (res){
						// console.log(res.data.code)
						if(res.data.code==200){
                            console.log(res)
							for(var i = 0;i < res.data.data.dataList.length;i++){
								
								res.data.data.dataList[i].videoUrl = self.changeVideoType(res.data.data.dataList[i].videoUrl)
							}
                            self.InternetCelebrityList = res.data.data.dataList
						}else{
							console.log("请求异常")
						}
					}
				})
            },
            sendVideo(id){
				// uni.navigateTo({
				// 	url: '/pages/index2/index2?id=' + id
				// })
				let token
				uni.getStorage({
					key:"token",
					success: function (res) {
						token = res.data
					}
				})
				// 判断token过期
				const url = "https://www.zhongjubang.com/test/"
				
				//获取短视频内容
				uni.request({
					url: url + "controller/usercontroller/getshortvideobyid",
					data: {shortVideoId:id},
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
							uni.navigateTo({
								url: '/pages/testVideo/testVideo?id=' + id + '&type=1'
							})
						}
					}
				})
				
			},
			sendVideoWanghong(id){
				// uni.navigateTo({
				// 	url: '/pages/index2/index2?id=' + id
				// })
				let token
				uni.getStorage({
					key:"token",
					success: function (res) {
						token = res.data
					}
				})
				// 判断token过期
				const url = "https://www.zhongjubang.com/test/"
				
				//获取短视频内容
				uni.request({
					url: url + "controller/usercontroller/getshortvideobyid",
					data: {shortVideoId:id},
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
							uni.navigateTo({
								url: '/pages/testVideo/testVideo?id=' + id + '&type=2'
							})
						}
					}
				})
				
			},
			
		}
	}
</script>

<style>
    /* 搜索 */
    .search-text {
        position: absolute;
		top: 7px;
        left: 660upx;
        font-size:32upx;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
	}
	.G-cicle_content {
		width: 100%;
		height: 100%;
		background: #fff;
		position: relative;
		
		top: 80upx;
	}
    .input{
        position: absolute;
        left: 87upx;
        padding-left: 67upx;
        box-sizing: border-box;
        width:547upx;
        height:70upx;
        background:rgba(246,246,246,1);
        border-radius:35upx;
        font-size:28upx;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height: 70upx;
    }
    .input-search{
        position: absolute;
		top: 11px;
        left: 114upx;
        z-index: 10;
    }
	.search-wrap{
		
		background: #fff;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
		padding-top: 60px;
	}
	/* 切换视频类型 start */
	.back {
        position: absolute;
		top: 3px;
        left: 10px;
	}
	.search {
        position: absolute;
		top: 7px;
        left: 683upx;
	}
	.G-list_content {
        box-sizing: border-box;
        padding-left: 90px;
		height: 70rpx;
		background: #FFFFFF;
	}
	.G-list_content view {
		width: 38%;
		height: 34rpx;
		line-height: 34rpx;
		text-align: center;
		color: #747474;
		font-size: 32rpx;
		display: inline-block;
		/* border-right: 1rpx solid #E2E2E2; */
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
		width:52rpx;
		height:6rpx;
		background:rgba(249,183,44,1);
        border-radius:4px;
	}
	/* 切换视频类型 end */
	
    /* 短视频样式start */
	.video-all{
        width: 100%;
		height: 100%;
        box-sizing: border-box;
		padding: 0 20rpx;
    }
	.video-wrap{
		margin-top: 15px;
		background: #fff;
	}
	.video-wrap-image{
		box-sizing: border-box;
		margin-left: -11px;
	}
	.video-detail{
		float: left;
		top: 20px;
	}
	.video-content{
		position: relative;
		margin-left: 4upx;
	}
	.video-content-start{
		position: absolute;
		z-index: 100;
		left: 276upx;
		top: 20upx;
	}
	.video-content-avator{
		position: absolute;
		z-index: 100;
		top: 440upx;
		left: 24upx;
	}
	.video-content-delete{
		position: absolute;
		z-index: 300;
		top: 102px;
		left: 51px;
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
		top: 450upx;
		left: 100upx;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
	}
	/* 短视频样式end */
</style>
