<template>
	<view class="">
		<view class="wrap-top">
			<image class="banner" style="width: 750upx;height: 521upx;" src="http://www.zhongjubang.com/api/upload/static/img/designation/banner.png" />
			<view @tap="goBack" class="back">
				<image src="http://www.zhongjubang.com/api/upload/static/img/designation/back.png" />
			</view>
			<view class="title">我的称号</view>
			<image @click.stop="togglePopup('bottom','comments')" class="aboutDesigne" style="width: 189upx;height: 79upx;" src="http://www.zhongjubang.com/api/upload/static/img/designation/aboutDesigne.png" />
			<image class="head" style="width: 132upx;height: 126upx;border-radius: 50%;" :src="head" />
			<view class="nick-name">{{nickName}}</view>
			<view class="user-state">
				<image src="../../static/img/title/design-people.png" mode=""></image>
				<image v-if="userTitle == '人气网红'" src="../../static/img/title/red-hot.png" mode=""></image>
				<image v-if="userTitle == '居圈达人'" src="../../static/img/title/circle-people.png" mode=""></image>
				<image v-if="userTitle == '金牌业主'" src="../../static/img/title/gold-owner.png" mode=""></image>
			</view>
			
		</view>
		<view class="wrap-content">
			<view class="wrap-content-top">
				<view class="wrap-content-top-left">已获得称号</view>
				<view class="wrap-content-top-right" @tap="goAllauthentication">
					<view class="wrap-content-top-get">去获取</view>
					<image class="more" style="width: 19upx;height: 30upx;" src="http://www.zhongjubang.com/api/upload/static/img/designation/more.png" />
				</view>
			</view>
			<!-- 缺省页 -->
			<view v-if="!show" class="default">
				<image class="huangguan" style="width: 245upx;height: 298upx;" src="http://www.zhongjubang.com/api/upload/static/img/designation/huangguan.png" />
				<view class="huangguan-text">
					<text class="huangguan-nodesigne">您还未获得徽章，</text> 
					<text class="huangguan-get" @tap="goAllauthentication">点击去获得!</text>
				</view>
			</view>
			<!-- 内容 -->
			<view v-if="show" class="wrap-content-all">
				<view class="wrap-content-mid" v-for="(item,index) in dataList" :key="index">
					<image v-if="item.title=='金牌业主'" class="" style="width: 148upx;height: 148upx;" src="http://www.zhongjubang.com/api/upload/static/img/designation/icon.png" />
					<image v-if="item.title=='设计达人'" class="" style="width: 148upx;height: 148upx;" src="../../static/img/designation/icon2.png" />
					<image v-if="item.title=='人气网红'" class="" style="width: 148upx;height: 148upx;" src="../../static/img/designation/icon3.png" />
					<image v-if="item.title=='居圈达人'" class="" style="width: 148upx;height: 148upx;" src="../../static/img/designation/icon4.png" />
					
					<view class="title-designe">{{item.title}}</view>
					<view class="radios">
						<label>
							<radio value="r1" :checked="item.isDefault == 1 ? true : false" color="#FFCC33" style="transform:scale(0.7)" @click.stop="singleChecked(item.id)"/>
						</label>
					</view>
				</view>
				
				
			</view>
		</view>
		<!-- 评论弹窗 start -->
		<uni-popup ref="comments" :type="popupType" :custom="true" class="">
			<view class="uni-about">
				<view class="uni-about2">
					<scroll-view class="swiper" scroll-y="true">
						<view class="uni-about-title">
							称号获取规则
						</view>
						<view class="uni-about-how">
							如何获取称号？
						</view>
						<view class="uni-about-des">系统会根据用户的活跃状态赠送相关称号或自行在申请身份
							页面申请称号;                         
						</view>
						<view class="uni-about-how2">
							称号有什么福利？
						</view>
						<view class="uni-about-des2">你可以选择喜欢的称号佩戴在昵称旁，彰显个性，部分称号
		会获得高福利，您可以在相关称号福利页面查看;
						</view>
						<view class="uni-about-how3">
							注意事项？
						</view>
						<view class="uni-about-des3">注意不要违背众居邦社区规则，如果数据造假抄袭等发布不良行为，可能获得的称号会被取消：
						</view>
					</scroll-view>
					
				</view>
				<view class="close" @click.stop="cancelPopup('comments')">
					<text class="close-text">关闭</text>
				</view>
			</view>
		</uni-popup>
		<!-- 评论 end -->
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components:{
			uniPopup,
		},
		data() {
			return {
				show: false,
				nickName: '',
				head: '',
				dataList: [],
				popupType: '',
				name: '',
				userTitle: ''
			}
		},
		onShow(){
			this.init()
			this.initInfo()
		},
		methods: {
			// 选择标签
			singleChecked(id){
				let token
				let self = this
				uni.getStorage({
				    key:"token",
				    success: function (res) {
				        token = res.data;
				    }
				})
				const url = this.url
				uni.showLoading({
					title: '加载中'
				})
				uni.request({
				    url: url + "controller/usercontroller/updateappusertitle",
				    data: {
						appUserTitleId: id
					},
				    method: 'POST',
				    header : {
				        'content-type':'application/x-www-form-urlencoded', 
				        'port': 'app',
				        'token': token
				    },
				    success: function (res){
						if(res.data.code == 200) {
							self.init();
							uni.hideLoading()
						}
						if(res.data.code==421){
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
				    }
				})
			},
			goBack(){
				uni.navigateBack({
					delta: 1
				});
			},
			// 取消弹出层
			cancelPopup(type) {
				this.$refs[type].close();
			},
			// 弹出层弹出的方式  i:当前标签的下标, name: 当前标签的name
			togglePopup(type,open) {
				
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
			},
			// 取消弹出层
			goAllauthentication(){
				uni.navigateTo({
					url: '/pages/identity/all-authentication/all-authentication'
				})
			},
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
						self.userTitle = res.data.title
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
						console.log(res.data.data)
						if(res.data.code==200){
							self.dataList = res.data.data
							if(res.data.data.length>0){
								self.show = true
							}
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
		padding: 0 56upx;
	}
	.wrap-content-mid{
		float: left;
		margin-left: 96upx;
		margin-top: 56upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 148upx;
	}
	.wrap-content-mid:nth-child(1){
		margin-left: 0;
	}
	.wrap-content-mid:nth-child(4){
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
	/* 弹窗样式 */
	.uni-about{
		position: relative;
		width:750upx;
		height:717upx;
		background:rgba(251,251,251,1);
		border-radius:20upx 20upx 0px 0px;
	}
	.uni-about2{
		position: relative;
		width:750upx;
		height:617upx;
		background:rgba(251,251,251,1);
		border-radius:20upx 20upx 0px 0px;
	}
	.swiper{
		height:617upx;
	}
	.close{
		position: absolute;
		bottom: 0;
		left: 0;
		height: 100upx;
		border-top: 1px solid rgba(226,226,226,1);
		width:750px;
		background:#fff;
		font-size:28upx;
		font-family:PingFang SC;
		color:rgba(249,183,45,1);
		line-height:100upx;
		text-align: center;
	}
	.close-text{
		position: absolute;
		left: 349upx;
	}
	.uni-about-title{
		position: absolute;
		left: 287upx;
		top: 53upx;
		font-size:30upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	.uni-about-how{
		position: absolute;
		left: 31upx;
		top: 145upx;
		font-size:28upx;
		font-family:PingFang SC;
		color:#333333;
	}
	.uni-about-how2{
		position: absolute;
		left: 31upx;
		top: 339upx;
		font-size:28upx;
		font-family:PingFang SC;
		color:#333333;
	}
	.uni-about-how3{
		position: absolute;
		left: 31upx;
		top: 525upx;
		font-size:28upx;
		font-family:PingFang SC;
		color:#333333;
	}
	.uni-about-des{
		position: absolute;
		left: 30upx;
		top: 202upx;
		width:675upx;
		height:67upx;
		font-size:26upx;
		font-family:PingFang SC;
		color:rgba(102,102,102,1);
		line-height:41upx;
	}
	.uni-about-des2{
		position: absolute;
		left: 30upx;
		top: 394upx;
		width:675upx;
		height:67upx;
		font-size:26upx;
		font-family:PingFang SC;
		color:rgba(102,102,102,1);
		line-height:41upx;
	}
	.uni-about-des3{
		position: absolute;
		left: 30upx;
		top: 597upx;
		width:675upx;
		height:67upx;
		font-size:26upx;
		font-family:PingFang SC;
		color:rgba(102,102,102,1);
		line-height:41upx;
	}
	/deep/ uni-radio .uni-radio-input {
		border: 1px solid #999;
	}
	.user-state{
		position: absolute;
		left: 57%;
		top: 77%;
		width: 149rpx;
		height: 53rpx;
		z-index: 100;
	}
	.user-state image{
		width: 149rpx;
		height: 53rpx;
	}
</style>
