<template>
    <view class="cart">
		
		<!-- 头部 start -->
        <view class="navigate">
            <view class="navigate-image" @click.stop="backPage">
				<image style="width: 15upx;height: 31upx;" src="http://www.zhongjubang.com/api/upload/static/img/juquanVideo/back.png" />
			</view>
            <text class="car">购物车({{cartTotal}})</text>
            <text class="edit" @click.stop="editP">{{isShowEdit ? '完成' : '编辑'}}</text>
        </view>

		<!-- 购物车为空 start -->
		<image src="http://www.zhongjubang.com/api/upload/static/img/shop/carts.png" mode="" v-if="this.goodsList.length == 0" class="empty-cart"></image>
		
		<!-- 店铺/商品详情 start -->
		<scroll-view scroll-y="true" class="scroll-Y" v-else>
			<view class="cart-detail" v-for="(item, index) in goodsList" :key="index">
				<view class="shop-detail" @click.stop="goshop(item.shopId)">
					<label>
						<radio value="r1" :checked="item.checked" color="#FFCC33" style="transform:scale(0.7)" @click.stop="singleChecked(item)"/>
					</label>
					<image src="http://www.zhongjubang.com/api/upload/static/img/shopping-mall/detail/shop.png" mode="" class="shop-image"></image>
					<text>{{item.shopName}}</text>
					<image src="http://www.zhongjubang.com/api/upload/static/topic/arrow.png" mode="" class="arrow"></image>
				</view>
				<view class="product-detail" v-for="(row, i) in item.list" :key="i" @click.stop="cartDetail(row.goodsId)">
					<label>
						<radio value="r1" :checked="row.checked"  color="#FFCC33" style="transform:scale(0.7)" @click.stop="selectGoods(row, item)"/>
					</label>
					<image :src="row.topImgList[0]" mode=""></image>
					<view class="product-detail_text">
						<view class="title">{{row.goodsName}}</view>
						<view class="spec">{{row.specifications}}</view>
						<view class="price-num"><text>￥{{row.goodsPrice}}</text><text>x{{row.quantity}}</text></view>
					</view>
				</view>
			</view>
		</scroll-view>
		

		<!-- 全选 start -->
		<view id="cart-fotter">
			<label>
				<radio value="r1" :checked="isCheckedAll" color="#FFCC33" style="transform:scale(0.7)" @click.stop="isSelectAll()"/>全选
			</label>
			<view class="right" v-if="!isShowEdit">
				<text>合计：</text>
				<text class="total">￥{{totalMoney}}</text>
				<text class="settlement" @click.stop="toDo">结算({{checkNum}})</text>
			</view>
			<view class="right" v-if="isShowEdit">
				<text class="settlement" @click.stop="togglePopup('center', 'tip')">删除</text>
			</view>
		</view>
		
		<!-- 弹窗 start -->
		<uni-popup :show="show" :type="type" :custom="true" :mask-click="false">
			<view class="uni-tip">
				<!-- <view class="uni-tip-title">提示</view> -->
				<view class="uni-tip-content">您确定要删除这个商品吗？</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @click.stop="cancel('tip')">取消</view>
					<view class="uni-tip-button insist-skip" @click.stop="cancel('skip')">删除</view>
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
				token: '',
				goodsList: [],
				isCheckedAll: false,  // 是否全选
				shopChecked: false,  // 店铺选择
				pChecked: false,     // 商品选择
				totalMoney: 0,		// 总价
				checkNum: 0,   // 选择的商品数量
				isShowEdit: false, // 是否显示删除
				deleteIds: [],   // 删除的数组
				cartTotal: 0,   // 总数
				settlementP: []
			}
		},
		onLoad(){
			uni.getStorage({
				key:"token",
				success:((res) => {
					this.token = res.data;
				})
			});
			this.init()
		},
		methods: {
			init(){
				uni.request({
					url: this.url + "controller/shopcontroller/getshoppingcartlist",
					data: {pageIndex: 1, pageSize: 1000},
					method: 'POST',
					header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
					success: ((res) => {
						// console.log(res.data.code)
						if(res.data.code==200){
							let data =  res.data.data.dataList;
							this.goodsList = res.data.data.dataList;
							let arr = []
							data.forEach((item, index) => {
								item.list.forEach((r, i) => {
									arr.push(r)
								})
							})
							this.cartTotal = arr.length;
						}
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
					})
				})
			},
			// 跳转详情
			cartDetail(id) {
				uni.navigateTo({
					url: '/pages/shopping-mall/detail/detail?id='+id
				})
			},
			// 选择店铺
			singleChecked(item) {
				let _this = this;
				if(typeof item.checked =='undefined'){
					this.$set(item,"checked",true);
				}else{
					//  如果已经注册，则设置checked否(这里不能设置为false,因为当已经注册过之后再点击为flase，那么再点击一次则为true)
					item.checked = !item.checked;
				}
				
				item.list.forEach((row, i) => {
				
					if(item.checked == true) {
						this.$set(row,"checked",true);
					} else {
						this.$set(row,"checked",false);
					}
					row.checked ? this.checkNum ++ : this.checkNum --;
				})
				this.totalPrice();
				this.cartTotal == this.checkNum ? this.isCheckedAll = true : this.isCheckedAll = false;
			},
			// (单选)选择商品
			selectGoods(item, str){
				//判断是否未定义，如果没点击过按钮是没有注册的，则需要先注册checked属性
				let _this = this,mark = true;
				if(typeof item.checked =='undefined') {
					this.$set(item,"checked",true);
					this.checkNum ++;
				} else {
					item.checked = !item.checked;
					item.checked ? this.checkNum ++ : this.checkNum --;
				}
				let data = str.list
				data.forEach((m, i) => {
					if(!m.checked) {
						mark = false
					}
				})
				if(mark) {
					this.$set(str,"checked",true);
				} else {
					this.$set(str,"checked",false);
				}
				
				// 求总价
				this.totalPrice();
				this.cartTotal == this.checkNum ? this.isCheckedAll = true : this.isCheckedAll = false;
			},
			// 编辑
			editP() {
				this.isShowEdit = !this.isShowEdit
			},
			// 结算
			toDo() {
				this.settlementP = [];
				if(this.checkNum == 0) {
					uni.showToast({
						title: '请选择需要结算的商品',
						icon: 'none'
					})
					return;
				}
				let list = [];
				this.goodsList.forEach((item, index) => {
					item.list.forEach((m, i) => {
						if(m.checked) {
							let obj = [{
								specificationsId: m.specificationsId,
								specificationsNum: m.quantity
							}]
							let arr = {
								id: m.goodsId,
								specificationsList: obj
							}
							
							this.settlementP.push(arr);
						}
						
					})
				})
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
				    url: this.url + 'controller/shopcontroller/addorder',
				    method: 'post',
				    data: {goodsList: JSON.stringify(this.settlementP)},
				    header : {'content-type':'application/x-www-form-urlencoded', 'token': this.token, 'port': 'app'},
				    success:((res) => {
				        if(res.data.code == 200) {
							uni.navigateTo({
								url: '/pages/confirm-order/confirm-order?num='+res.data.data.orderNum
							})
							uni.hideLoading()
				        } 
						if(res.data.code == 421) {
							uni.navigateTo({
								url: '/pages/loginPhone/loginPhone'
							})
						}
				    }),
					fail:((res) => {
						uni.hideLoading()
						uni.showToast({
							title: '网络异常',
							icon: 'none'
						})
					})
				});
			},
			// 全选
			isSelectAll() {
				this.isCheckedAll = !this.isCheckedAll;
				let _this = this;
				this.checkNum = 0;
				this.goodsList.forEach((item, index) => {
					if(typeof item.checked == 'undefined') {
						_this.$set(item, "checked", this.isCheckedAll)
					} else {
						item.checked = _this.isCheckedAll;
					}
					item.list.forEach((row, i) => {
						if(item.checked == true) {
							this.$set(row,"checked",true);
							row.checked ? this.checkNum ++ : this.checkNum --;
							return;
						}
						if(typeof row.checked == 'undefined') {
							_this.$set(row, "checked", this.isCheckedAll)
						} else {
							row.checked = row.isCheckedAll;
						}
					})
				})
				this.totalPrice();
			},
			// 计算总价
			totalPrice() {
				let _this = this;
				this.totalMoney = 0;
				this.goodsList.forEach((item, index) => {
					item.list.forEach((row, i) => {
						if(row.checked) {
							_this.totalMoney += row.goodsPrice*row.quantity;
						}
					})
					
				})
			},
			// 弹出层弹出的方式
			togglePopup(type, open) {
				this.type = type;
				if(this.checkNum == 0) {
					uni.showToast({
						title: '请选择需要删除的商品',
						icon: 'none'
					});
					return;
				}
				if (open === 'tip') {
					this.show = true;
				} else {
					this.$refs[open].open()
				}
			},
			// 弹框关闭
			cancel(type) {
				let _this = this;
				if (type === 'tip') {
					this.show = false;
					this.deleteIds = [];
					return
				}
				if(type === 'skip') {
					this.goodsList.forEach((item, index) => {
						item.list.forEach((m, i) => {
							console.log(m.checked)
							if(m.checked) {
								if(_this.deleteIds.length > 0) {
									for(let i=0; i<this.deleteIds.length; i++) {
										if(this.deleteIds[i] == item.goodsId) {
											return;
										}
									}
								}
								_this.deleteIds.push(m.goodsId);
							}
						})
					})
					uni.request({
						url: this.url + "controller/shopcontroller/delshoppingcartbyidlist",
						data: {ids: this.deleteIds.toString()},
						method: 'POST',
						header : {'content-type':'application/x-www-form-urlencoded', 'port': 'app', 'token': this.token},
						success: ((res) => {
							// console.log(res.data.code)
							if(res.data.code==200){
								this.isShowEdit = true;
								uni.showToast({
									title: '删除成功'
								})
								this.init();
								this.show = false;
							}else{
								console.log("请求异常")
							}
						})
					})
				}
				// this.$refs[type].close()
			},
			// 跳转到店铺
			goshop(id) {
				uni.navigateTo({
					url:'/pages/shop-command/shop-command?shopId='+id
				})
			},
			// 返回上一级
			backPage() {
				uni.navigateBack({
					delta:1
				})
			},
		
		}
	}
</script>
<style>
	
	page{
		background:rgba(249,249,249,1);
	}
    .navigate{
        position: fixed;
		z-index: 1;
        width: 100%;
        height: 128upx;
		background:#fff;
    }
    .navigate-image{
        position: absolute;
        left: 32upx;
        top: 34px;
        width:15upx;
        height:31upx;
    }
    .car{
        position: absolute;
        left: 300upx;
        top: 68upx;
        font-size:36upx;
        font-family:PingFang SC;
        color:rgba(51,51,51,1);
    }
    .edit{
        position: absolute;
        left: 658upx;
        top: 68upx;
        font-size:32upx;
        font-family:PingFang SC;
        color:rgba(249,183,44,1);
    }
	/* 购物车没有商品 start*/
	.empty-cart {
		width: 429rpx;
		height: 266rpx;
		display: block;
		margin: auto;
		padding-top: 55%;
	}
	/* 店铺 start */
	.scroll-Y {
		margin-bottom: 100px;
		padding-top: 128upx;
	}
	.cart-detail {
		width: 95%;
		height: auto;
		box-sizing: border-box;
		padding: 28rpx 21rpx;
		background: #FFFFFF;
		margin: 12px auto;
		overflow: hidden;
	}
	.shop-detail {
		width: 100%;
		height: 35px;
		display: flex;
		align-items: center;
		font-size: 14px;
	}
	.shop-image {
		width: 29rpx;
		height: 28rpx;
		display: inline-block;
		margin-right: 3px;
	}
	.arrow {
		width: 13rpx;
		height: 23rpx;
		display: inline-block;
		margin-left: 5px;
		color: #333333;
	}
	/deep/ uni-checkbox .uni-checkbox-input {
	/* 	width: 23px;
		height: 23px;
		line-height: 23px; */
		border-radius: 50%;
		/* background: #F9B72C; */
		/* border: none; */
		/* border: 1px solid #999999;
		background: #FFFFFF; */
	}
	.product-detail {
		display: flex;
		height: 150rpx;
		width: 100%;
		align-items: center;
		margin-bottom: 15px;
	}
	.product-detail image {
		width: 75px;
		height: 75px;
	}
	.product-detail_text {
		width: 62%;
		font-size: 12px;
		color: #333;
		margin-left: 15px;
	}
	.product-detail_text view {
		text-align: left;
	}
	.product-detail_text>.title {
		height: 32px;
	}
	.spec {
		height: 25px;
		line-height: 25px;
		width: auto;
		padding: 0 7px;
		font-size: 12px;
		color: #999999;
		background: #F9F9F9;
		float: left;
	}
	.price-num {
		overflow: hidden;
		clear: both;
	}
	.price-num text:first-child {
		font-size: 14px;
		color: #F43348;
		font-weight: bold;
		float: left;
	}
	.price-num text:last-child {
		float: right;
		font-size: 13px;
		color: #333333;
	}
	/* 结算 start */
	#cart-fotter {
		width: 100%;
		height: 50px;
		line-height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		z-index: 1;
		box-sizing: border-box;
		padding-left: 15px;
		font-size: 12px;
		border-top: 1px solid #E2E2E2;
		background: #ffffff;
	}
	.total {
		font-size: 14px;
		color: #F43348;
	}
	.settlement {
		width: 310rpx;
		height: 100%;
		display: inline-block;
		background: #F9B72C;
		color: #FFFFFF;
		font-size: 18px;
		text-align: center;
		margin-left: 7px;
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
		width: 400rpx;
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