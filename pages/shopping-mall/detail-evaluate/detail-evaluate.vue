<template>
	<view>
		<!-- 商品评论 start -->
		<view class="comment-list">
			<view class="comment-detail" v-for="(item, index) in commentList" :key="index">
				<image :src="item.head" mode=""></image>
				<text>{{item.nickName}}</text>
				<view class="comment-date">{{item.crateeTime}}</view>
				<view>{{item.goodsContentDiscuss}} </view>
			</view>
		</view>
		<!-- 商品评论 end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commentList: [],
				token: '',
				goodsId: ''
			}
		},
		onLoad(option) {
			this.goodsId = option.id;
		},
		onShow() {
			uni.getStorage({
				key:"token",
				success:((res) => {
				this.token = res.data;
			  })
			});
			this.init();
		},
		methods: {
			init() {
				let params = {
					goodsId: this.goodsId,
					pageIndex: 1,
					pageSize: 100
				}
				uni.request({
				    url: this.url + 'controller/shopcontroller/getallgoodsdiscusslist',
				    method: 'post',
				    data: params,
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:((res) => {
				        if(res.data.code == 200) {
							this.commentList = res.data.data.dataList;
				        } 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
				    })
				});
			}
		}
	}
</script>

<style>
	/* 商品评论 */
	.comment-list {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 30rpx;
		background: #FFFFFF;
		margin-top: 10px;
	}
	.all-comment {
		border-left: 3px solid #F9B72D;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		padding-left: 10px;
	}
	.comment-detail {
		width: 100%;
		overflow: hidden;
		font-size:24rpx;
		font-family:PingFang SC;
		color:rgba(102,102,102,1);
		margin-top: 10px;
		
	}
	.comment-detail image {
		width: 50rpx;
		height: 50rpx;
		display: inline-block;
		border-radius: 50%;
		float: left;
		margin-right: 8px;
	}
	.comment-detail text {
		height: 25px;
		    line-height: 25px;
	}
	.comment-detail .comment-date {
		float: right;
		font-weight:bold;
	}
	.comment-detail view:last-child {
		clear: both;
		margin-top: 3px;
	}
	.get-comment {
		width: 100%;
		height: 50rpx;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #F9B72D;
		font-size: 24rpx;
	}
	.get-comment image {
		width: 26rpx;
		height: 20rpx;
		display: block;
	}
	
</style>
