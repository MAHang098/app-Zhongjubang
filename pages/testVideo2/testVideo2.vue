<template>
	<view class="content" v-bind:style="{height: clientHeight+ 'px'}">
		<!-- #ifdef H5 -->
		<view v-if="showTab" class="tips cu-bar tabbar border shop fixed" style="top: 0;z-index: 100;">
				
				<view @tap="toPage('/pages/download/download?videoId='+scene)" class="flex-sub text-white text-center ">打开客户端或小程序使用完整功能</view>
				<view @tap="close" class="fr cuIcon-close text-white text-xl" style="margin-right: 40upx;"></view>
		</view>
		<!-- #endif -->
		
		<scroll-view class="scroll-content" v-bind:style="{height: height + 'px'}" :scroll-y="true" :scroll-with-animation="true"  @scroll="scroll" @scrolltolower="scrolltolower" @scrolltoupper="refresh" upper-threshold="-50" :scroll-into-view="scrollToView"  @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"   >
		
		<view v-for="(video,index) in videolist" :key="index" v-bind:id="'view-'+index" class="video-view" v-bind:style="{height: height + 'px'}"  >
				
			<video v-if="index == currentPage "  v-bind:id="'video-'+index" :src="video.videoUrl" v-bind:style="{height: (height-400*width/750)+ 'px'}" loop="true" :controls="false" :show-progress="false" :show-fullscreen-btn="false" :show-play-btn="false" :show-center-play-btn="false" :enable-progress-gesture="false" @tap="play(currentPage)" >
				<!-- <cover-view class="touchlayer" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"> -->
				<!-- <cover-view class="mask" v-bind:style="{backgroundColor:(index===playIndex?'rgba(100,100,100,0)':'rgba(100,100,100,0.5)')}" @tap="play(index)"   > -->
					<cover-image :animation="animationData"  v-if="showCover"  class="play_icon" src="/static/img/play.png" v-bind:style="{display:index!=playIndex?'block':'none'}" ></cover-image>
				<!-- </cover-view> -->
				
				
			</video>
		
				<view  class="goods padding">
					<view class="title text-cut">{{video.goodstitle}}</view>
					<view class="flex">
						<view class="flex-sub">
							<view class="seller">{{video.goodsnick}} | {{video.goodsarea}}</view>
							<view class="payinfo">
								<text class="currency">¥</text>
								<text class="price">{{video.goodsprice}}</text>
								<text class="payernum">{{video.payer_num}}人付款</text>
							</view>
						</view>
						<view class="action flex flex-sub justify-end align-start">
							
								<view @tap="like" :data-index="index" class="favor">
									<image class="favor-img" :src="video.favorId!=null?'/static/img/favor.png':'/static/img/unlike.png'"></image>
									<view class="favor-num">{{video.favorite_num}}</view>
								</view>
								<view class="share">
									<image src='/static/img/share.png'></image>
									<view>{{video.share_num}}</view>
								</view>
							
							<button @tap="toPage('/pages/goods/goods?goodsId='+video.goodsid)"  class="cu-btn round bg-blue">好物详情</button>
						</view>
					</view>
				
				
					<view class="user flex justify-start align-end">
						<image class="head-img" :src="video.head_img" ></image>
						<view class="nickname">{{video.nick_name}}  推荐</view>
						<view class="location flex justify-start align-end">
							<view class="cuIcon-locationfill location-icon"></view>
							<view class="location-name">{{video.location_name}}</view>
						</view>
					</view>
					<view class="desc">{{video.video_desc}}</view>
				</view>
			</view>
		</scroll-view>
		
		
	</view>
	
</template>

<script>
export default {
	data() {
		return {
			videolist:[],
			clientHeight:'0',
			currentPage:0,
			showPage:0,
			nextPage:0,
			
			touchdata:{
				can:true,
				startY:0,
				endY:0,
				diff:0
			},
			playIndex:-1,
			scrollTop:0,
			scrollToView:'view-0',
			
			showCover:true,
			animationData:{},
			playTime:0,
			scrollDetail:{deltaY:0},
			scrollFlag:false,
			scrollStartTop:0,
			pageSize:20,
			pageIndex:0,
			scene:'',
			showTab:true,
			height: '',
			width: ''
		};
	},
	mounted(){
		uni.getSystemInfo({
			success: (res) => {
				console.log(res.model);
				console.log(res.pixelRatio);
				console.log(res.windowWidth);
				console.log(res.windowHeight);
				console.log(res.language);
				console.log(res.version);
				console.log(res.platform);
				this.$data.clientHeight = res.windowHeight;
				
			}
		});
	},
	watch: {
     
    },
	onShareAppMessage(res) {
		let video = this.videolist[this.currentPage];
		
		let title = '「好物短视频」'+video.video_desc;
		
		return {
		  title: title,
		  path: '/pages/video/main?scene='+video.id
		}
	},
	onLoad(option) {
		uni.getSystemInfo({
		    success: function (res) {
				// self.height = res.screenHeight - 116
				self.height = res.screenHeight
				self.width = res.screenWidth
			},
		})
		if(option.scene&&'default'!=option.scene){
			this.scene = option.scene;
			let videoId = option.scene;
			this.postJson({
				path:"/video_one.jsp",
				data:{
					videoId:videoId
				},
				success:(res)=>{
					if("ok" == res.data.status){
						// let videolist = res.data.data;
						// this.videolist = videolist.concat(this.videolist);
						// let video = videolist[0];
						
						//#ifdef H5
						document.title = '「好物短视频」'+video.video_desc;
						//#endif
					}
				}
			});
			
			
		}
		
		
		setInterval(this.listenScroll,200);
	},
	onShow(){
		video.addEventListener("tap", function(e) {
			console.log(video.paused);  
			if (vLength > 0) {  
				if (video.paused) {  
					video.play();  
					evts.initEvent("click", false, true);  
					video.dispatchEvent(evts);  
				}  
				if (headerisshow)  
					videoheaderhide();  
				else  
					videoheadershow();  
			}  
		}, false);
		let url = "https://www.zhongjubang.com/test/"
		let self = this
		uni.request({
			url: url + "controller/videocontroller/getallshortvideolist",
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
		            self.videoList = res.data.data.dataList
				}else{
					console.log("请求异常")
				}
			}
		});
	},
	methods: {
		// 获取全部短视频
		getAllVideo(id){
			let self = this
			const url = this.url
			// 获取全部视频内容
			uni.request({
				url: url + "controller/videocontroller/getallshortvideolist",
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
			            self.videoList = res.data.data.dataList
						// for(var i = 0;i < res.data.data.dataList.length;i++){
						// 	if(res.data.data.dataList[i].shortVideoId==id){
						// 		console.log(i)
						// 		self.item_id = i
						// 	}
						// }
						self.getsvdiscussId = self.id;
						self.init(self.id)
						self.initInfo(self.id)
					}else{
						console.log("请求异常")
					}
				}
			})
		},
		download(e){
		
				
		},
		refresh(){
			this.play(-1);
			uni.showLoading({
				title:"加载中"
			});
			// this.videolist = [];
			this.pageIndex = 0;
			this.postJson({
				path: '/video_main.jsp', //仅为示例，并非真实接口地址。
				data: {
					pageIndex: this.pageIndex,
							pageSize: this.pageSize,
							type: 1
				},
				success: (res) => {
					console.log(res.data);
					if("ok" == res.data.status){
						this.pageIndex++;
						 // this.videolist = res.data.data;
						 this.currentPage = 0;
						 this.scrollToView = 'view-0';
					}
				},
				complete:()=>{
					uni.hideLoading();
				}
			});
		},
		scrolltolower:function(){
			this.postJson({
				path: '/video_main.jsp', //仅为示例，并非真实接口地址。
				data: {
					pageIndex: this.pageIndex,
							pageSize: this.pageSize,
							type: 1
				},
				success: (res) => {
					console.log(res.data);
					if("ok" == res.data.status){
						this.pageIndex++;
						 let videolist = res.data.data;
						 this.videolist = this.videolist.concat(videolist);
					}
				}
			});
		},
		play:function(index){
			// uni.showToast({
			// 	title:this.playIndex+"->"+index
			// });
			let videoId = 'video-'+index;
			let currentVideoId = 'video-'+this.playIndex;
			if(-1 == this.playIndex){
				this.playIndex = index;
				let video = uni.createVideoContext(videoId);
				if(video){
					video.play();
					this.playTime = new Date().getTime();
				}
				
				
			}else{
				let video = uni.createVideoContext(currentVideoId);
				if(video){
					video.pause();
					let playinfo = {
						playTime : this.playTime,
						endTime: new Date().getTime(),
						videoId: this.videolist[this.playIndex].id,
						videoUid: this.videolist[this.playIndex].uid
					};
					
					this.browser(playinfo);
					
					if(index != this.playIndex){
						this.playIndex = index;
						video = uni.createVideoContext(videoId);
						if(video){
							video.play();
							this.playTime = new Date().getTime();
						}
					}else{
						this.playIndex = -1;
					}
				}
			}
		},
		pause:function(index){
			let videoId = 'video-'+index;
			
			let video = uni.createVideoContext(videoId);
			if(video){
				video.pause();
				let playinfo = {
					playTime : this.playTime,
					endTime: new Date().getTime(),
					videoId: this.videolist[index].id,
					videoUid: this.videolist[index].uid
				};
				
				this.browser(playinfo);
			}
			this.playIndex = -1;
		},
		browser:function(playinfo){
			if(playinfo.playTime<=0){
				return;
			}
			this.playTime = 0;
			this.postJson({
				path:"/video_browser_do.jsp",
				data:playinfo,
				success:(res)=>{
					
				}
			});
		},
		listenScroll:function(){
			// console.log("listenScroll");
			if(this.scrollDetail.deltaY!=0){
				if(!this.scrollFlag){
					this.scrollStart();
					this.scrollFlag = true;
					this.scrollStartTop = this.scrollDetail.scrollTop;
				}
				
				this.scrollDetail.deltaY = 0;
			}else{
				if(this.scrollFlag){
					this.scrollEnd();
					this.scrollFlag = false;
				}
			}
			
		},
		scrollStart:function(){
			
		},
		scrollEnd:function(){
			
			if(this.autoScrollFlag-- > 0){
				// this.showCover = true;
				// this.pause(this.currentPage);
				return;
			}
			let diff = this.scrollDetail.scrollTop - this.scrollStartTop;
			
			console.log("clientHeight="+this.clientHeight+",scrollTop="+this.scrollDetail.scrollTop+",diff="+diff);
			
			
			if(diff < 0){
				console.log("this.touchdata.diff>0");
				if(this.scrollDetail.scrollTop%this.clientHeight < this.clientHeight-10 ){
					console.log("e.detail.scrollTop%this.clientHeight < this.clientHeight*3/4");
					this.nextPage = Math.floor(this.scrollDetail.scrollTop / this.clientHeight);
				}else{
					this.nextPage = Math.floor(this.scrollDetail.scrollTop / this.clientHeight + 1);
				}
				
			}else{
				if(this.scrollDetail.scrollTop%this.clientHeight >= 10 ){
					this.nextPage = Math.floor(this.scrollDetail.scrollTop / this.clientHeight  + 1);
				}else{
					this.nextPage = Math.floor(this.scrollDetail.scrollTop / this.clientHeight);
				}
				
			}
			
			if(this.nextPage >= this.videolist.length){
					this.nextPage = this.videolist.length-1;
			}
			if(this.nextPage < 0){
				// this.refresh();
				this.nextPage = 0;
			}
			
			this.scrollToView = 'view-'+this.nextPage;
			this.autoScrollFlag = 1;
			setTimeout(()=>{
				this.scrollToView = '';
			},300);
			
			if(this.currentPage != this.nextPage){
				
				setTimeout(()=>{
					this.currentPage = this.nextPage;
					this.play(this.currentPage);
					this.showCover = true;
				}, 700);
			}else{
				
			}
			
			
		},
		scroll: function(e) {
			this.showCover = false;
            this.scrollDetail = e.detail;
			setTimeout(()=>{
				
				// this.pause(this.currentPage);
			
				if(this.playIndex != -1){
					// this.scrollTop = e.detail.scrollTop;
				}
				// this.touchdata.diff += e.detail.deltaY;
				// console.log("e.detail.scrollTop="+e.detail.scrollTop);
				// if(this.touchdata.diff > 0){
				// 	console.log("this.touchdata.diff>0");
				// 	if(e.detail.scrollTop%this.clientHeight < this.clientHeight-10 ){
				// 		console.log("e.detail.scrollTop%this.clientHeight < this.clientHeight*3/4");
				// 		this.nextPage = Math.floor(e.detail.scrollTop / this.clientHeight);
				// 	}else{
				// 		this.nextPage = Math.floor(e.detail.scrollTop / this.clientHeight+1);
				// 	}
				// 	
				// }else{
				// 	if(e.detail.scrollTop%this.clientHeight >= 10 ){
				// 		this.nextPage = Math.floor(e.detail.scrollTop / this.clientHeight  + 1);
				// 	}else{
				// 		this.nextPage = Math.floor(e.detail.scrollTop / this.clientHeight);
				// 	}
				// 	
				// }
				
				
				
				
				
			},100);
			
			
			
			
        },
		scrollTo: function(index) {
            
			this.play(index);
			
        },
		scrollMove:function(e){
			
			
		},
		touchStart:function(e){
			let touch = e.touches[0];
			this.touchdata.startY = touch.pageY;
			// this.scrollStart = this.scrollTop;
			console.log("y="+this.touchdata.startY);
			this.inDown = -1;
			this.outTop = -1;
			this.inTop = -1;
			this.outDown = -1;
			
			this.touchdata.diff=0;
			
		},
		touchMove:function(e){
	
			
			
			let touch = e.touches[0];
			let endY = touch.pageY;
			this.touchdata.diff = endY - this.touchdata.startY;
			// this.scrollTop = this.scrollStart-this.touchdata.diff;
			// if(this.touchdata.diff>0 && this.currentPage > 0){
			// 	this.nextPage = this.currentPage - 1;
			// }else{
			// 	this.nextPage = this.currentPage + 1;
			// }
			// uni.showToast({
			// 	title:this.touchdata.diff+''
			// });
			console.log("currentPage="+this.currentPage+",nextPage="+this.nextPage+",diff="+this.touchdata.diff+",y="+endY+",startY="+this.touchdata.startY);
			
		},
		touchEnd:function(e){
			
			let diff = this.scrollDetail.scrollTop - this.scrollStartTop;
			if(!this.scrollDetail.scrollTop || (diff>-1&&diff<1)){
				return;
			}
			console.log("clientHeight="+this.clientHeight+",scrollTop="+this.scrollDetail.scrollTop+",diff="+diff);
			
			if(diff < 0){
				console.log("this.touchdata.diff>0");
				if(this.scrollDetail.scrollTop%this.clientHeight < this.clientHeight-10 ){
					console.log("e.detail.scrollTop%this.clientHeight < this.clientHeight*3/4");
					this.nextPage = Math.floor(this.scrollDetail.scrollTop / this.clientHeight);
				}else{
					this.nextPage = Math.floor(this.scrollDetail.scrollTop / this.clientHeight + 1);
				}
				
			}else{
				if(this.scrollDetail.scrollTop%this.clientHeight >= 10 ){
					this.nextPage = Math.floor(this.scrollDetail.scrollTop / this.clientHeight  + 1);
				}else{
					this.nextPage = Math.floor(this.scrollDetail.scrollTop / this.clientHeight);
				}
				
			}
			
			
			if(this.nextPage >= this.videolist.length){
					this.nextPage = this.videolist.length-1;
			}
			if(this.nextPage < 0){
				// this.refresh();
				this.nextPage = 0;
			}
				
			let that = this;
			this.touchdata.diff = 0;
			// this.scrollTop = this.nextPage*this.clientHeight;
			this.scrollToView = 'view-'+this.nextPage;
			this.autoScrollFlag = 2;
			setTimeout(()=>{
				this.scrollToView = "";
			},500);
			if(this.currentPage != this.nextPage){
				// this.currentPage = this.nextPage;
				
				// that.play(that.currentPage);
				
				setTimeout(()=>{
					this.currentPage = this.nextPage;
					this.play(this.currentPage);
					this.showCover = true;
				}, 700);
				
			}else{
				
			}
		
			
			
		},
		like:function(e){
			let index = e.currentTarget.dataset.index;
			if(this.getUserInfo()){
				let video = this.videolist[index];
				let islike =  video.favorId==null;
				video.favorId = islike ? true:null;
				video.favorite_num = islike?video.favorite_num+1:video.favorite_num-1;
				this.postJson({
					path:"/video_favorite_do.jsp",
					data:{
						videoId:video.id,
						videoUid:video.uid,
						isLike:islike
					},
					success:(res)=>{
						
					}
				});
			}else{
				uni.showToast({
					icon:'none',
					title:"请先登录"
				});
			}
		},
		
		touchCacel:function(e){
			this.touchEnd(e);
			
			
		},
		close:function(e){
			this.showTab = false;
		}
	
	
	}
};
</script>

<style>
page{
	overflow-x: display;
}

.play_icon{
	width: 150upx;
	height: 150upx;
	margin-left: auto;
	margin-right: auto;
	margin-top: 50%;
}

.scroll-content{
	width: 750upx;
	
	margin: 0;
	overflow: scroll;
	position: absolute;
}
.video-view{
	background-position: center; 
	background-size: contain;
	background-repeat: no-repeat;
	width: 750upx;
	margin: 0;
	position: relative;
	background-color: black;
}
.video-view video{
	width: 750upx;
	margin: 0;
	position: relative;
	object-fit: contain;
}

.video-view .goods{
	position: absolute;
	width: 100%;
	height: 400upx;
	bottom: 0;
	background-color: black;
}
.video-view .goods .title{
	color: white;
	font-size: 36upx;
}
.video-view .goods .payinfo{
	margin-top: 17upx;
}
.video-view .goods .seller{
	color: gray;
	font-size: 24upx;
	margin-top: 6upx;
}
.video-view .goods .payinfo .currency{
	color: white;
	font-size: 24upx;
}
.video-view .goods .payinfo .price{
	color: white;
	font-size: 40upx;
}
.video-view .goods .payinfo .payernum{
	color: gray;
	font-size: 24upx;
	margin-left: 20upx;
}
.video-view .goods .action{
	padding-top: 40upx;
}
.video-view .goods .action image{
	width: 60upx;
	height: 60upx;
}
.video-view .goods .action .share{
	margin-right: 20upx;
	text-align: center;
	color: gray;
}
.video-view .goods .action .favor{
	margin-right: 20upx;
	text-align: center;
	color: gray;
}
.video-view .goods .action button{
	background-color: #b79846;
}

.video-view .goods .user .head-img{
	border-radius: 50upx;
	width: 60upx;
	height: 60upx;
}
.video-view .goods .user .nickname{
	color: gray;
	font-size: 24upx;
	margin-left: 20upx;
}
.video-view .goods .location{
	background-color: rgba(100,100,100,0.5);
	padding: 5upx 10upx;
	border-radius: 5upx;
	font-size: 19upx;
	color: gray;
	margin-left: 20upx;
}
.video-view .goods .location .location-icon{
	font-size: 22upx;
}
.video-view .goods .location .location_name{
	
}
.video-view .goods .desc{
	margin-top: 20upx;
	font-size: 24upx;
	color: gray;
}
.tips{
	background-color: #b79846;
}

</style>
