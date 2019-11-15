<template>
    <view class="content">
		<view class="bg">
			<view class="input-group">
			    <view class="input-row">
			        <text class="title">修改密码：</text>
			        <m-input type="text" focus clearable v-model="pwd" placeholder="请输入密码"></m-input>
			    </view>
			</view>
			
			<view class="btn-row">
			    <button type="primary" class="primary" @tap="findPassword">提交</button>
			</view>
		</view>
        
    </view>
</template>

<script>
    import service from '../../service.js';
    import mInput from '../../components/m-input.vue';

    export default {
        components: {
            mInput
        },
        data() {
            return {
                pwd: ''
            }
        },
        methods: {
            findPassword() {
				const url = this.url
				uni.getStorage({
				    key:"token",
				    success(e){
				    console.log(e.data)//这就是你想要取的token
					console.log(url)
					// const data = {
					// 	token: e.data,
					// 	port: "app"
					// }
					uni.request({
					    url: url + 'controller/usercontroller/getappuser',
					    data: {},
					    method:"POST",
					    header : {
							'content-type':'application/x-www-form-urlencoded',
							'token': 'a86ded50165f42e1a37f6096503d2aa1',
							'port': "app"
						},
					    success: function (res) {
					        console.log(res);
					    }
					})
				    }
				})
                uni.showToast({
                    icon: 'none',
                    title: '密码已修改成功。',
                    duration: 3000
                });
            }
        }
    }
</script>

<style>
	
	.input-row .title {
		width: 30%;
		height: 50upx;
		min-height: 50upx;
		padding: 15upx 0;
		padding-left: 30upx;
		line-height: 50upx;
	}
</style>
