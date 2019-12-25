<template>
	<view class="">
		<view class="wrap-top">
			<image class="banner" style="width: 750upx;height: 521upx;" src="../../static/img/designation/banner.png" />
			<view class="back">
				<image src="../../static/img/designation/back.png" />
			</view>
			<view class="title">我的称号</view>
			<image class="aboutDesigne" style="width: 189upx;height: 79upx;" src="../../static/img/designation/aboutDesigne.png" />
			<image class="head" style="width: 132upx;height: 126upx;border-radius: 50%;" :src="head" />
			<view class="nick-name">{{nickName}}</view>
		</view>
		<view class="wrap-content">
			<view class="wrap-content-top">
				<view class="wrap-content-top-left">已获得称号</view>
				<view class="wrap-content-top-right">
					<view class="wrap-content-top-get">去获取</view>
					<image class="more" style="width: 19upx;height: 30upx;" src="../../static/img/designation/more.png" />
				</view>
			</view>
			<!-- 缺省页 -->
			<view v-if="!show" class="default">
				<image class="huangguan" style="width: 245upx;height: 298upx;" src="../../static/img/designation/huangguan.png" />
				<view class="huangguan-text">
					<text class="huangguan-nodesigne">您还未获得徽章，</text> 
					<text class="huangguan-get">点击去获得!</text>
				</view>
			</view>
			<!-- 内容 -->
			<view v-if="show" class="wrap-content-all">
				<view class="wrap-content-mid">
					<image class="" style="width: 148upx;height: 148upx;" src="../../static/img/designation/icon.png" />
					<view class="title-designe">金牌业主</view>
					<view class="">
						<label>
							<radio value="r1" color="#FFCC33" style="transform:scale(0.7)" @click.stop=""/>
						</label>
					</view>
				</view>
				<view class="wrap-content-mid">
					<image class="" style="width: 148upx;height: 148upx;" src="../../static/img/designation/icon.png" />
					<view class="title-designe">金牌业主</view>
					<view class="">
						<label>
							<radio value="r1" color="#FFCC33" style="transform:scale(0.7)" @click.stop=""/>
						</label>
					</view>
				</view>
				<view class="wrap-content-mid">
					<image class="" style="width: 148upx;height: 148upx;" src="../../static/img/designation/icon.png" />
					<view class="title-designe">金牌业主</view>
					<view class="">
						<label>
							<radio value="r1" color="#FFCC33" style="transform:scale(0.7)" @click.stop=""/>
						</label>
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
				show: false,
				nickName: '',
				head: '',
			}
		},
		onShow(){
			this.init()
			this.initInfo()
		},
		methods: {
			initInfo(){
				let token
				let self = this
				uni.getStorage({
				    key:"token",
				    success: function (res) {
				        token = res.data;
				    }
				})
				const url = this.url
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
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
				        self.nickName = res.data.data.nickName
				        self.head = res.data.data.head
				    }
				})
			},
			init(){
				let token
				let self = this
				uni.getStorage({
					key:"token",
					success: function (res) {
						token = res.data;
					}
				})
				const url = this.url
				
				uni.request({
					url: url + "controller/usercontroller/getappusertitle",
					data: {},
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
		}
	}
</script>

<style>
	.wrap-top{
		position: relative;
		width:750upx;
		height:521upx;
	}
	.banner{
		position: absolute;
		top: 0;
		left: 0;
	}
	.back{
		position: absolute;
		top: 64upx;
		left: 24upx;
		width: 60upx;
		height: 80upx;
	}
	.back image{
		width: 29upx;
		height: 43upx;
	}
	.title{
		position: absolute;
		top: 68upx;
		left: 303upx;
		font-size:36upx;
		font-family:PingFang SC;
		color:rgba(255,255,255,1);
	}
	.aboutDesigne{
		position: absolute;
		top: 54upx;
		left: 568upx;
	}
	.head{
		position: absolute;
		top: 245upx;
		left: 310upx;
	}
	.nick-name{
		position: absolute;
		left: 0;
		top: 408upx;
		width: 750upx;
		height: 30upx;
		text-align: center;
		font-size:28upx;
		font-family:PingFang SC;
		color:rgba(255,255,255,1);
	}
	.wrap-content{
		position: relative;
		margin-top: -41upx;
		width:750upx;
		height:853upx;
		background:rgba(255,255,255,1);
		border-radius:28upx 28upx 0px 0px;
	}
	.wrap-content-top{
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 3%;
		height: 102upx;
		width: 750upx;
		border-bottom: 1px solid #E2E2E2;
	}
	.wrap-content-top-left{
		font-size:30upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
		line-height:102upx;
	}
	.wrap-content-top-right{
		font-size:26upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:102upx;
	}
	.wrap-content-top-get{
		float: left;
	}
	.more{
		float: left;
		top: 38upx;
		margin-left: 10upx;
	}
	.wrap-content-all{
		width: 750upx;
		height: 100%;
		padding: 56upx;
	}
	.wrap-content-mid{
		float: left;
		margin-left: 96upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 148upx;
	}
	.wrap-content-mid:nth-child(1){
		margin-left: 0;
	}
	.title-designe{
		font-size:27upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	.default{
		position: relative;
		width: 750upx;
		height: 750upx;
	}
	.huangguan{
		position: absolute;
		left: 219upx;
		top: 110upx;
	}
	.huangguan-text{
		position: absolute;
		left: 177upx;
		top: 440upx;
		
	}
	.huangguan-nodesigne{
		font-size:30upx;
		font-family:PingFang SC;
		color:rgba(153,153,153,1);
	}
	.huangguan-get{
		font-size:30upx;
		font-family:PingFang SC;
		color:#F9B72D;
	}
</style>
