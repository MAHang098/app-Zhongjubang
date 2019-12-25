<template>
	<view>
		<view class="banner">
			<image style="width: 750upx;height: 376upx;" src="../../static/img/designeConfirm/banner.png" />
		</view>
		<view class="wrap">
			<view class="des">
				以下信息仅用户众居邦房主审核认证，请确保信息真是有效，请
				正确填写，众居邦将竭力保护您的隐私，请您放心！                           
			</view>
			<view class="wrap-input-box">
				<view class="wrap-input-recommend">
					<text class="wrap-input-name">推荐人</text>
					<input class="wrap-input-id" type="text" value="" placeholder="选填,推荐人姓名或ID" />
				</view>
				<view class="wrap-input-recommend">
					<text class="wrap-input-name">户主姓名</text>
					<input class="wrap-input-id" type="text" value="" placeholder="必填" />
				</view>
				<view class="wrap-input-recommend">
					<text class="wrap-input-name">邮箱</text>
					<input class="wrap-input-id" type="text" value="" placeholder="必填" />
				</view>
				<view class="wrap-input-recommend">
					<text class="wrap-input-name">居圈用户名</text>
					<input class="wrap-input-id" type="text" value="" placeholder="必填" />
				</view>
			</view>
			
			<view class="matriel">
				<image class="diote" style="width: 44upx;height: 44upx;" src="../../static/img/designeConfirm/diote.png" />
				<text class="certify">认证材料</text>
				<text class="identify">身份证</text>
				<label class="radio">
					<radio value="r1" color="#FFCC33" style="transform:scale(0.7)" @click.stop=""/>
				</label>
				<text class="order">众居邦订单</text>
				<label class="radio2">
					<radio value="r1" color="#FFCC33" style="transform:scale(0.7)" @click.stop=""/>
				</label>
				<image class="office" style="width: 351upx;height: 289upx;" src="../../static/img/designeConfirm/office.png" />
				<image class="back" style="width: 351upx;height: 289upx;" src="../../static/img/designeConfirm/back.png" />
				<view class="submit">
					提交
				</view>
				<label class="radio3">
					<radio value="r1" color="#FFCC33" style="transform:scale(0.7)" @click.stop=""/>
				</label>
				<view class="agree">
					
					<text class="agree-first">我同意 </text><text class="agree-second">《众居邦APP金牌业主入驻奖励协议》</text>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShow(){
			this.init()
		},
		methods: {
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
	.banner{
		position: relative;
		width: 750upx;
		height: 376upx;
	}
	.wrap{
		position: relative;
		margin-top: -20upx;
		width:750upx;
		height:1466upx;
		background:rgba(255,255,255,1);
		border-radius:26upx 26upx 0px 0px;
	}
	.des{
		position: absolute;
		left: 27upx;
		top: 28upx;
		width:671upx;
		height:65upx;
		font-size:24upx;
		font-family:PingFang SC;
		color:rgba(102,102,102,1);
		line-height:41upx;
	}
	.wrap-input-box{
		position: relative;
		top: 198upx;
		height: 400upx;
	}
	.wrap-input-recommend{
		position: relative;
		height: 90upx;
		border-bottom: 1px solid #E2E2E2;
	}
	.wrap-input-name{
		position: absolute;
		top: 40upx;
		left: 30upx;
	}
	.wrap-input-id{
		position: absolute;
		top: 40upx;
		left: 266upx;
		font-size:28upx;
		font-family:PingFang SC;
		color:rgba(102,102,102,1);
	}
	.wrap-input-name{
		font-size:28upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	.matriel{
		position: relative;
		top: 230upx;
		height: 1000upx;
	}
	.diote{
		position: absolute;
		top: 0;
		left: 25upx;
	}
	.certify{
		position: absolute;
		top: 0;
		left: 75upx;
		font-size:30upx;
		font-family:PingFang SC;
		color:rgba(249,183,45,1);
	}
	.identify{
		position: absolute;
		top: 75upx;
		left: 75upx;
		font-size:28upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	.order{
		position: absolute;
		top: 75upx;
		left: 274upx;
		font-size:28upx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	.radio{
		position: absolute;
		top: 68upx;
		left: 169upx;
	}
	.radio2{
		position: absolute;
		top: 68upx;
		left: 424upx;
	}
	.office{
		position: absolute;
		top: 178upx;
		left: 23upx;
	}
	.back{
		position: absolute;
		top: 178upx;
		left: 382upx;
	}
	.submit{
		position: absolute;
		text-align: center;
		top: 568upx;
		left: 216upx;
		width:318upx;
		height:90upx;
		line-height: 70upx;
		font-size:32upx;
		font-family:PingFang SC;
		color:rgba(249,183,44,1);
		background:rgba(255,255,255,1);
		border:1px solid rgba(249,183,44,1);
		border-radius:45upx;
	}
	.radio3{
		position: absolute;
		top: 788upx;
		left: 122upx;
	}
	.agree{
		position: absolute;
		top: 788upx;
		left: 166upx;
	}
	.agree-first{
		font-size:24upx;
		font-family:PingFang SC;
		color:rgba(153,153,153,1);
	}
	.agree-second{
		font-size:24upx;
		font-family:PingFang SC;
		color:#F9B72C;
	}
</style>
