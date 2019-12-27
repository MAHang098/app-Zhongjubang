<template>
	<view>
		<view class="header">
			<view class="input-view">
				<uni-icon type="search" size="22" color="#666666" />
				<input confirm-type="search" class="input" type="text" placeholder="输入搜索关键词" @confirm="confirm">
			</view>
		</view>
		<view class="uni-drawer-info">这是抽屉式导航组件使用示例，可以指定菜单左侧或者右侧弹出（仅初始化生效），组件内部可以放置任何内容。点击页面按钮即可显示导航菜单。</view>
		<view>
			<view class="example-title">左侧滑出</view>
			<view class="example-body">
				<button type="default" @click="show('left')">显示Drawer</button>
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
			</view>
			
		</view>
	</view>
</template>
<script>
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniDrawer,
			uniList,
			uniListItem
		},
		data() {
			return {
				showRigth: false,
				showLeft: false
			}
		},
		methods: {
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
			},
			goDrafts(){
				uni.navigateTo({
					url: '/pages/drafts/drafts'
				})
			},
			goRecommend(){
			},
			goAccount(){
				uni.navigateTo({
					url: '/pages/account/account'
				})
			},
			goRanked(){
			},
			goIdentify(){
				uni.navigateTo({
					url: '/pages/ID-card/ID-card'
				})
			},
			goSetting(){
				uni.navigateTo({
					url: '/pages/setting/setting'
				})
			},
			show(e) {
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
			confirm() {}
		},
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
	
	
</style>