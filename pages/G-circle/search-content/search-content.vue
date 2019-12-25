<template>
	<view>
		<!-- 搜索栏 start -->
		<view class="header">
			<image src="../../../static/img/G-circle/search-back.png" mode="" class="back"  @click.stop="cancelBack"></image>
			<view class="search-input">
				<image src="../../../static/search/nav-search.png" mode=""></image>
				<input type="text" v-model="searchInput"  placeholder="搜索您需要的商品" @input="gainInput" @focus="onFocus" @blur="onBlur"/>
			</view>
			<view class="cancel" @click.stop="cancelBack">取消</view>
		</view>
		<!-- 搜索栏 end -->
		<!-- 列表 start -->
		<view class="item-list" v-show="!isShowList">
			<view class="list-detail" @click.stop="searchContent(item.resourcesValue)" v-for="(item, index) in productList" :key="index" v-html="item.resourcesValue"></view>
		</view>
		<!-- 列表 end -->
		<!-- 历史搜索 start -->
		<view class="history-all content-list" v-show="isShowList">
			<view class="history-operate content-list_operate">
				<view class="history-operate_left content-list_operate_left">
					<image src="../../../static/img/G-circle/history.png" mode=""></image>
					<text>历史搜索</text>
				</view>
				<image src="../../../static/img/G-circle/history-del.png" mode="" class="history-operate_right content-list_operate_right" @click.stop="togglePopup('center', 'tip')"></image>
			</view>
			
			<view class="search-list">
				<view class="search-list_detial" v-for="(item, index) in historyList" :key="index" @click.stop="searchContent(item)">{{item}}</view>
			</view>
		</view>
		<!-- 历史搜索 end -->
		
		<!-- 热门话题 start -->
		<view class="content-list hot-topic" v-show="isShowList">
			<view class="topic-operate content-list_operate">
				<view class="content-list_operate_left">
					<image src="../../../static/img/G-circle/hot-topic.png" mode=""></image>
					<text>热门话题</text>
				</view>
				<!-- <image src="../../../static/img/G-circle/history-del.png" mode="" class="history-operate_right"></image> -->
			</view>
			
			<view class="search-list">
				<view class="search-list_detial active">橱柜</view>
				<view class="search-list_detial">橱柜</view>
			</view>
		</view>
		<!-- 热门话题 end -->
		
		<uni-popup :show="show" :type="type" :custom="true" :mask-click="false">
			<view class="uni-tip">
				<view class="uni-tip-content">您确定要清除全部历史搜索</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click.stop="cancel('tip')">取消</view>
					<view class="uni-tip-button insist-skip" @click.stop="cancel('skip')">确定</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components:{ uniPopup},
		data() {
			return {
				show: false,
				type: '',
				isShowList: true,
				historyList: [],
				productList: [],
				token: '',
				searchInput: '',
				searchAll: []  
			}
		},
		onShow() {
			uni.getStorage({
				key:"token",
				success:((res) => {
				this.token = res.data;
			  })
			});
			// 将搜索记录存本地
			const _this = this;
			uni.getStorage({
				key: 'searchAll_key',
				success: ((res) =>  {
					_this.historyList = res.data.reverse();
				})
			})

		},
		
		methods: {
			clearTimer () {
				if (this.timer) {
					clearTimeout(this.timer)
				}
			},
			gainInput(e) {
				this.clearTimer();
				this.timer = setTimeout(() => {
				  // console.log(this.lastTime)
				  // if (this.lastTime - event.timeStamp === 0) {
					uni.request({
						url: this.url + 'controller/usercontroller/getSearchCompletion',
						method: 'post',
						data: {search: e.detail.value},
						header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
						success:((res) => {
							if(res.data.code==421){
								uni.navigateTo({
									url: '/pages/loginPhone/loginPhone'
								})
							}
							if(res.data.code == 200) {
								this.changeColor(res.data.data)
				  			// this.productList = res.data.data;
								this.isShowList = !this.isShowList;
							} 
							if(res.data.code == 421) {
								uni.navigateTo({
									url: '/pages/loginPhone/loginPhone'
								})
							}
						})
				  });
				  // }
				}, 500)
			},
			// 关键字高亮
			changeColor (resultsList) {
			      resultsList.map((item, index) => {
			        // console.log('item', item)
			        if (this.searchInput && this.searchInput.length > 0) {
			          // 匹配关键字正则
			          let replaceReg = new RegExp(this.searchInput, 'g')
			          // 高亮替换v-html值
			          let replaceString =
			            '<span class="search-text" style="color: #F9B72C">' + this.searchInput + '</span>'
			          resultsList[index].resourcesValue = item.resourcesValue.replace(
			            replaceReg,
			            replaceString
			          )
			        }
			      });
				 
			      this.productList = []
			      this.productList = resultsList
			},
			// 点击搜索列表的其中一个，跳转到商品详情
			searchContent(name) {
				if(name!= null && name!= ""){  
					var reg = /[\u4e00-\u9fa5]/g;   
					name = name.match(reg).join("");  
				}  
				uni.navigateTo({
					url: '/pages/G-circle/search-list/search-list?name=' + name
				});
				this.isShowList = !this.isShowList;
				if(this.historyList.length > 0) {
					for(let i=0; i<this.historyList.length; i++) {
						if(this.historyList[i] == name) {
							return;
						}
					}
				}
				this.historyList.unshift(name);
				if(this.historyList.length > 10) {
					this.historyList.pop();
				}
				uni.setStorage({
					key: 'searchAll_key',
					data: this.historyList,    
					success: function () {
						
					}
				})
				// this.historyList.push(name);
				
			},
			delHistory() {
				
			},
			// 输入框获取焦点/失去焦点
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
					// 清除历史记录
					uni.removeStorage({
					    key: 'searchAll_key',
					    success: ((res) => {
							this.historyList = [];
							this.searchInput = '';
					        uni.showToast({
					        	title: '删除成功'
					        });
							
							this.show = false;
					    })
					});
				}
			},
			// 取消
			cancelBack() {
				uni.switchTab({
					url: '/pages/juquan/juquan'
				})
			},
		}
	}
</script>

<style>
	.header {
		width: 100%;
		height: 140rpx;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 10rpx 30rpx;
		background: #FFFFFF;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		right: 0;
	}
	.back {
		width: 19px;
		height: 31px;
		display: inline-block;
		margin-top: 48rpx;
		margin-right: 30rpx;
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
		margin: 0;
		font-size: 26rpx;
		margin-left: 60rpx;
		margin-top: 10rpx;
	}
	.cancel {
		width: 13%;
		line-height: 80rpx;
		text-align: center;
		color: #333333;
		font-size: 28rpx;
	}
	/* 搜索 end */
	
	/* 搜索记录 start */
	.history-all {
		margin-top: 160rpx;
	}
	.content-list {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 0 30rpx;
	}
	.content-list_operate {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.content-list_operate_left {
		display: flex;
		align-items: center;
		font-size:28rpx;
		font-family:PingFang SC;
		color:rgba(51,51,51,1);
	}
	.content-list_operate_left text {
		margin-top: 6rpx;
		margin-left: 10rpx;
	}
	.content-list_operate_left image {
		width: 31rpx;
		height: 44rpx;
		display: inline-block;
	}
	.content-list .content-list_operate_right {
		width: 37rpx;
		height: 44rpx;
		display: block;
	}
	.search-list {
		width: 100%;
		box-sizing: border-box;
		padding: 30rpx 10rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.search-list_detial {
		width: auto;
		height: 54rpx;
		line-height: 54rpx;
		text-align: center;
		color: #333333;
		font-size: 24rpx;
		border-radius: 27rpx;
		padding: 0rpx 30rpx;
		border: 1px solid #D8D8D8;
		margin-left: 5%;
		margin-bottom: 5%;
	}
	.active {
		background: #F9B72C;
		color: #FFFFFF;
		border: none;
	}
	
	/* 列表 start */
	.item-list {
		width: 100%;
		margin-top: 75px;
	}
	.list-detail {
		height: 98rpx;
		line-height: 98rpx;
		width: 100%;
		box-sizing: border-box;
		padding-left: 15px;
		border-bottom: 1px solid #E2E2E2;
		font-size:15px;
		font-family:PingFang SC;
		color:#666666;
	}
	.list-detail:last-child {
		border: none;
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
