<template>
    <view>
        <view class="horizen"></view>
        <view class="wrap" v-for="(item,index) in dataList" :key="index">
            <image class="wrap-image" style="width:90rpx;height:90rpx;" src="http://www.zhongjubang.com/api/upload/static/img/wallet/money.png" />
            <text class="cash">{{item.log}}</text>
            <text class="data">{{item.create_time}}</text>
            <text class="num">{{item.value}}</text>
            <view class="horizen1"></view>
        </view>
        <!-- <view class="example-body">
        	<uni-pagination :show-icon="true" :total="total*10" title="标题文字" @change="add"/>
        </view> -->
    </view>
</template>
<script>
import uniPagination from '@/components/uni-pagination/uni-pagination.vue'
import uniList from '@/components/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
import uniSection from '@/components/uni-section/uni-section.vue'
export default {
	components: {
		uniPagination,
		uniList,
		uniListItem,
		uniSection
	},
    data() {
        return {
            show: false,
			dataList: [],
			current: 1,
			total: 2,
			pageSize: 5
        }
    },
    onShow(){
   //      let token
   //      let self = this
   //      uni.getStorage({
   //          key:"token",
   //          success: function (res) {
   //              token = res.data;
   //          }
   //      })
   //      const url = this.url
   //      uni.request({
   //          url: url + "/controller/usercontroller/getappuserwalletlog",
   //          data: {
			// 	pageIndex: 1,
			// 	pageSize: 5
			// },
   //          method: 'POST',
   //          header : {
   //              'content-type':'application/x-www-form-urlencoded', 
   //              'port': 'app',
   //              'token': token
   //          },
   //          success: function (res){
   //      		if(res.data.code==421){
   //      			uni.navigateTo({
   //      				url: '/pages/loginPhone/loginPhone'
   //      			})
   //      		}
   //              if(res.data.code==200){
   //      			self.total = res.data.data.totalPage
			// 		console.log(self.total)
			// 		self.total = self.total/self.pageSize
			// 		console.log(self.total)
   //              }else{
   //                  console.log("请求异常")
   //              }
   //          }
   //      })
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
			    url: url + "/controller/usercontroller/getappuserwalletlog",
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
			        console.log(res.data.code)
			        if(res.data.code==200){
			            console.log(res.data.data.dataList)
						self.dataList = res.data.data.dataList
			        }else{
			            console.log("请求异常")
			        }
			    }
			})
		},
		add() {
			this.current += 1
			this.init()
		},
		reset() {
			this.total = 0
			this.current = 1
		},
		change(e) {
			console.log(e)
			this.current = e.current
		}
	}
}
</script>
<style>

    .wrap{
        position: relative;
        height: 158rpx;
        width: 750rpx;
    }
    .wrap-image{
        position: absolute;
        left: 30rpx;
        top: 30rpx;
        height: 90rpx;
        width: 90rpx;
    }
    .cash{
        position: absolute;
        left: 146rpx;
        top: 43rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        color:rgba(51,51,51,1);
    }
    .data{
        position: absolute;
        left: 147rpx;
        top: 96rpx;
        font-size:26rpx;
        font-family:PingFang SC;
        color:rgba(153,153,153,1);
    }
    .num{
        position: absolute;
        left: 584rpx;
        top: 57rpx;
        font-size:36rpx;
        font-family:PingFang SC;
        color:rgba(51,51,51,1);
    }
    .horizen{
        height: 1px;
        width: 750rpx;
        background:rgba(226,226,226,1);
    }
    .horizen1{
        position: absolute;
        left: 146rpx;
        top: 157rpx;
        width: 597rpx;
        height: 1px;
        background:rgba(235,235,235,1);
    }
	
	
	
</style>