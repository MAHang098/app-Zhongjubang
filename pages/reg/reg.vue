<template>
    <view class="content">
        <view class="input-group">
            <view class="input-row border">
                <text class="title">账号：</text>
                <m-input type="text" focus clearable v-model="account" placeholder="请输入账号"></m-input>
            </view>
            <view class="input-row border">
                <text class="title">密码：</text>
                <m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
            </view>
            <!-- <view class="input-row">
                <text class="title">邮箱：</text>
                <m-input type="text" clearable v-model="email" placeholder="请输入邮箱"></m-input>
            </view> -->
        </view>
        <view class="btn-row">
            <button type="primary" class="primary" @tap="register">注册</button>
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
                account: '',
                password: '',
                // email: ''
                token: []
            }
        },
        methods: {
            register() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (this.account.length < 5) {
                    uni.showToast({
                        icon: 'none',
                        title: '账号最短为 5 个字符'
                    });
                    return;
                }
                if (this.password.length < 6) {
                    uni.showToast({
                        icon: 'none',
                        title: '密码最短为 6 个字符'
                    });
                    return;
                }
                
                uni.getStorage({
                    key:"token",
                    success(e){
                    console.log(e.data)//这就是你想要取的token
                    }
                })
                let sha256 = require("js-sha256").sha256//这里用的是require方法
                const password = sha256(this.password+"zhongjubang2019")//要加密的密码
                
                var data = {
                    phone: this.account,
                    password: password
                    // email: this.email
                }
                
                const url = this.url
                uni.request({
                    url: url + '/controller/usercontroller/addappuser',
                    data: data,
                    method:"POST",
                    header : {'content-type':'application/x-www-form-urlencoded'},
                    success: function (res) {
                        console.log(res);
                        if(res.data.code == 400){
                            uni.showToast({
                                title: '您已注册'
                            });
                        }else{
                            uni.showToast({
                                title: '注册成功'
                            });
                        }
                    }
                })
                service.addUser(data);
                
                // uni.navigateBack({
                //     delta: 1
                // });
            }
        }
    }
</script>

<style>

</style>
