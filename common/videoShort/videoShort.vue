<template name="videoShort">
    <view>
        <view class="video-content" v-for="(item, index) in videoList" :key="index">
			<image class="video-content-image" style="width:359rpx;height:512rpx;" src="../../static/img/user/image-video.png" mode=""></image>
			<image class="video-content-avator" :src="item.head" style="width:60rpx;height:60rpx;border-radios:50%;" mode=""></image>
            <text class="video-content-nickname">{{item.nickName}}</text>
        </view>
    </view>
</template>
<script>
    export default {
        name: "videoShort",
        props: {
            videoList:[]
        },
        onLoad(){
            let token
			let self = this
			uni.getStorage({
				key:"token",
				success: function (res) {
				token = res.data;
				self.Tokens = res.data;
				}
			})
			const url = this.url
            //获取视频内容
			uni.request({
				url: url + "/controller/usercontroller/getshortvideobyuserid",
				data: {},
				method: 'POST',
				header : {
					'content-type':'application/x-www-form-urlencoded', 
					'port': 'app',
					'token': token
				},
				success: function (res){
					// console.log(res.data.code)
					if(res.data.code==200){
						console.log(res)
						self.videoList = res.data.data.dataList[0]
					}else{
						console.log("请求异常")
					}
				}
			});
        },
        methods: {

        }
    }
</script>
<style lang="stylus" scoped>

</style>