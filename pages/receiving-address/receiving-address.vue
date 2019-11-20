<template>
	<view class="reveiving">
		<!-- 无地址 start -->
		<view class="no-adress" v-show="isShow">
			<view class="not">一个地址也没有</view>
			<view class="add">"快去添加地址买买买吧"</view>
			<view class="addAress" @click="goAddaDress">添加收获地址</view>
		</view>
		<!-- 无地址 end -->
		
		<view class="all-adress" v-show="isShowList">
			<radio-group @change="radioChange">
				<view class="message" v-for="(item, index) in items" :key="index">
					<view class="user-message">
						<view class="left">
							<text>{{item.userName}}</text>
							<text>{{item.userPhone}}</text>
							<text class="detail-adress">{{item.userAddress}}</text>
						</view>
						<view class="right" >
							<label v-bind:class="item.isDefault == '1' ? 'checkedIn' : 'radio'" >
								<radio  :checked="item.isDefault == '1'" :color="item.isDefault == '1' ? '#FFCC33' : '' " style="transform:scale(0.7)"/> {{item.isDefault == '1' ? '默认地址' : '设为默认'}}
							</label>
						</view>
					</view>
					<view class="edit-message">
						<view class="delete" @click="togglePopup('center', 'tip', item.id)">
							<img src="../../static/delete.png" alt="">
							<text>删除</text>
						</view>
						<view class="edit" @click="editAdress(item.id)">
							<img src="../../static/edit.png" alt="">
							<text>编辑</text>
						</view>
					</view>
				</view>
			</radio-group>
		</view>
		<uni-popup :show="show" :type="type" :custom="true" :mask-click="false" @change="change">
			<view class="uni-tip">
				<!-- <view class="uni-tip-title">提示</view> -->
				<view class="uni-tip-content">确定要删除该地址吗？</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click="cancel('tip')">取消</view>
					<view class="uni-tip-button insist-skip" @click="cancel('skip')">删除</view>
				</view>
			</view>
		</uni-popup>
		<!-- <view class="goAdd" @click="goAddaDress" v-show="isShowList">添加收获地址</view> -->
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components:{ uniPopup},
		data() {
			return {
				show: false,
				isShow: false,
				items: [
					// {id: 5, appUserId: 20, userName: "张三", userPhone: "13189172519"},
					// {id: 6, appUserId: 20, userName: "张三", userPhone: "13189172519"}
				],
				current: 0,
				isShowList: true, // 是否显示地址列表
				type: '',
				userAddress: '',
				token: '',
				deleteId: ''
			}
		},
		onShow() {
			let that = this;
			uni.getStorage({
				key:"token",
				success: function (res) {
				that.token = res.data;
			  }
			})
			this.init();
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '/pages/add-adress/add-adress'
			})
		},
		methods: {
			init() {
				let that = this;
				uni.request({
					url: this.url + 'controller/usercontroller/getuseradresslist',
					method: 'post',
					header : {'content-type':'application/x-www-form-urlencoded', 'token': that.token, 'port': 'app'},
					success: (res => {
						if(res.data.code == 200) {
							if(res.data.data.length == 0) {
								this.isShow = true;
								this.isShowList = false;
							} else {
								this.isShowList = true;
								this.isShow = false;
							}
							
							let data = res.data.data;
							for(let i =0; i<data.length; i++) {
								let obj = JSON.parse(data[i].userAddress);
								let city = obj.city.split('-');
								data[i].userAddress = city[0] + city[1] + city[2] + obj.detail;
							}
							this.items = data;
						}
						
					})
				});
			},
			// 切换选中地址
			radioChange(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].id === evt.target.id) {
						this.current = i;
						break;
					}
				}
			},
			// 添加地址
			goAddaDress() {
				 uni.navigateTo({
					url: '/pages/add-adress/add-adress'
				})
			},
			// 弹出层弹出的方式
			togglePopup(type, open, id) {
				this.deleteId = id;
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
				this.type = type
				if (open === 'tip') {
					this.show = true
				} else {
					this.$refs[open].open()
				}
			},
			// 弹框关闭
			cancel(type) {
				if (type === 'tip') {
					this.show = false
					return
				}
				if(type === 'skip') {
					// let that = this;
					
					uni.request({
						url: this.url + 'controller/usercontroller/deluseradress',
						method: 'post',
						data: {'userAdressId': this.deleteId},
						header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
						success: (res => {
							console.log(res)
							if(res.data.code == 200) {
								this.show = false;
								uni.showToast({
								    // icon: 'none',
								    title: '删除成功'
								});
								
								this.init();
								uni.hideToast();
							}
						})
					});
				}
				// this.$refs[type].close()
			},
			change(e) {
				console.log(e.show)
			},
			// 编辑
			editAdress(id) {
				uni.navigateTo({
					url: '/pages/add-adress/add-adress?id=' + id
				})
			}
		}
	}
</script>

<style>
	page {
		background: #f9f9f9; 
	}
	uni-page-head .uni-page-head-ft {
		width: 100px !important;
		border: 1px solid red !important;
	}
	uni-page-head .uni-btn-icon {
		width: 200px !important;
	}
	.no-adress {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 50% 154rpx;
		color: #666666;
		text-align: center;
	}
	.not {
		font-size: 30rpx;
	}
	.add {
		font-size: 26rpx;
		margin-top: 5px;
		margin-bottom: 10px;
	}
	.addAress {
		width: 100%;
		height: 82rpx;
		line-height: 82rpx;
		background: #F9B72C;
		color: #FFFFFF;
		font-size: 36rpx;
		border-radius: 41rpx;
		text-align: center;
	}
	/* 无地址 end */
	.message:first-child {
		margin: 0;
		border-top: 1px solid #E2E2E2;
	}
	.message {
		width: 100%;
		height: 224rpx;
		background: #FFFFFF;
		overflow: hidden;
		margin-top: 8px;
	}
	.user-message {
		width: 100%;
		height: 164rpx;
		color: #333333;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 24rpx 31rpx 29rpx 31rpx;
		border-bottom: 1px solid #E2E2E2;
	}
	.left text:first-child {
		margin: 0;
	}
	.left {
		width: 75%;
	}
	.left text {
		display: block;
		font-size: 26rpx;
		margin-top: 3px;
		
	}
	.edit-message {
		height: 60rpx;
		overflow: hidden;
		line-height: 60rpx;
		box-sizing: border-box;
		padding-right: 15px;
	}
	.edit-message view {
		float: right;
		font-size: 26rpx;
		margin-left: 20px;
	}
	.edit-message view img {
		width: 26rpx;
		height: 26rpx;
		display: inline-block;
		
		margin-right: 5px;
	}
	.right {
		color: #F9B72C;
		font-size: 26rpx;
	}
	.isChecked {
		color: #FFCC33;
		transform:scale(0.7);
		background: #FFCC33;
	}
	.goAdd {
		position: fixed;
		top: 12px;
		z-index: 9999;
		right: 15px;
		font-size: 14px;
		color: #666666;
	}
	.radio {
		color: #333333;
	}
	.checkedIn {
		color: #F9B72C;
	}
	.detail-adress {
		width: 100%;
		height: 30rpx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	/* 提示窗口 */
	.uni-tip {
		padding-top: 15px;
		width: 300px;
		background: #fff;
		box-sizing: border-box;
		border-radius: 10px;
	}
	
	.uni-tip-title {
		text-align: center;
		font-weight: bold;
		font-size: 41rpx;
		color: #333;
	}
	
	.uni-tip-content {
		padding: 15px 0;
		font-size: 32rpx;
		color: #666;
		width: 360rpx;
		color: #666666;
		font-weight: 500;
		margin: auto;
	}
	
	.uni-tip-group-button {
		margin-top: 10px;
		display: flex;
	}
	
	.uni-tip-button {
		width: 100%;
		text-align: center;
		font-size: 14px;
		color: #333333;
		font-size: 37rpx;
		font-weight: 500;
		border-top: 1px solid #E2E2E2;
		padding: 10px 0;
	}
	.insist-skip {
		color: #F9B72C;
		border-left: 1px solid #E2E2E2;
	}
</style>
