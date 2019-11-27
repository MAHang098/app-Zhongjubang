<template>
	<view class="wrap">
        <view class="save" @tap="save">保存</view>
        <!-- 点击更换头像 -->
        <view class="change-image" @tap="chooseImage">
            <view class="avater">
                <image :src="head" mode=""></image>
            </view>
            <text class="click-change">点击更换头像</text>
        </view>

        <!-- 个人资料 -->
        <view class="nick-name">
            <view class="nick-name-text">昵称</view>
            <input class="nick-name-text2" placeholder="请输入昵称"  v-model="nickName"  maxlength="10"  @input = "descInput"/>

			<view v-show="ok" class="nick-name-text3">{{nickName_num}}/10</view>
            <!-- <input class="nick-name-text2" type="text" v-model="nickName" placeholder="晴天小猪" /> -->
            <!-- <view class="nick-name-text3">4/10</view> -->
        </view>
        <view class="gender">
            <view class="gender-text">性别</view>
            <!-- <image class="gender-man" src="../../static/img/editInfo/gender-man.png" mode=""></image>
            <text class="gender-textMan">男</text>
            <image class="gender-women" src="../../static/img/editInfo/gender-women.png" mode=""></image>
            <text class="gender-textWomen">女</text> -->
            <radio-group name="radio">
                <label>
                    <radio class="gender-man" value="radio1" /><text class="gender-textMan">男</text>
                </label>
                <label>
                    <radio class="gender-women" value="radio2" /><text class="gender-textWomen">女</text>
                </label>
            </radio-group>
        </view>
        <view class="gender">
            <view class="gender-text">个性签名</view>
            <view class="signature-infini">未填写</view>
            <view class="nick-name-text3">0/30</view>
        </view>
        <view class="gender">
            <view class="gender-text">我的生日</view>
            <view class="born-date">1999-02-09</view>
        </view>
        <view class="gender">
            <view class="gender-text">个人封面</view>
        </view>
        <view class="gender">
            <view class="address">收货地址</view>
        </view>
	</view>


</template>

<script>
	export default {
	    
	    data() {
	        return {
                head: '',
                nickName: '',
                sex: '',
                remarks: '',
                birthday: '',
                cover: '',
                nickName_num: 0,
                ok: false,
                param: '1'
	        }
        },
        onShow:function(){
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
                url: url + "/controller/usercontroller/getappuser",
                data: {},
                method: 'POST',
                header : {
                    'content-type':'application/x-www-form-urlencoded', 
                    'port': 'app',
                    'token': token
                },
                success: function (res){
                    console.log(res.data.data.nickName);
                    self.nickName = res.data.data.nickName
                    self.sex = res.data.data.sex
                    self.remarks = res.data.data.remarks
                    self.birthday = res.data.data.birthday
                    self.cover = res.data.data.cover
                    self.head = res.data.data.head
                }
            })
            
        },
	    methods: {
            descInput(e) {
                this.ok = true
				this.nickName_num = e.detail.value.length
			},
            chooseImage() {
				let that = this;
				uni.chooseImage({
				    count: 9, //默认9
				    // sizeType:'compressed', //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
						
						const tempFilePaths = res.tempFilePaths[0];
						
							
                        uni.uploadFile({
                            url: that.url + '/upload', //仅为示例，非真实的接口地址
                            filePath: tempFilePaths,
                            name: 'file',
                            formData: {
                                'user': 'test'
                            },
                            success: (uploadFileRes) => {
                                let data = JSON.parse(uploadFileRes.data);
                                console.log(data.data.fileUrl)
                                that.head = data.data.fileUrl
                            }
                        })
						
						
						
				    }
				})
			},
            save(){
                let token;
                uni.getStorage({
				    key:"token",
				    success: function (res) {
						token = res.data;
					}
				})
                console.log(this.nickName)
            }
		}
	}
</script>

<style>
    .wrap{
        height: 100%;
        background-color: #F9F9F9;
    }
    .save{
        position: absolute;
        right: 32rpx;
        font-size:28rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(249,183,44,1);
        z-index: 99;
    }
    .change-image{
        position: relative;
        width:750rpx;
        height:227rpx;
        background:rgba(255,255,255,1);
        box-shadow:0px 1rpx 5rpx 0px rgba(202,202,202,0.31);
    }
    .avater{
        position: absolute;
        left: 292rpx;
        top: 20rpx;
        width:162rpx;
        height:155rpx;
        background:rgba(255,255,255,1);
        box-shadow:0px 1rpx 5rpx 0px rgba(202,202,202,0.31);
    }
    .avater image{
        border-radius: 50%;
        width:162rpx;
        height:155rpx;
    }
    .click-change{
        position: absolute;
        left: 292rpx;
        bottom: 11rpx;
        font-size:26rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(153,153,153,1);
    }
    .nick-name{
        position: relative;
        margin-top: 20rpx;
        width:750rpx;
        height:100rpx;
        background:rgba(255,255,255,1);
        box-shadow:0px 1rpx 5rpx 0px rgba(202,202,202,0.31);
    }
    .nick-name-text{
        position: absolute;
        left: 30rpx;
        bottom: 34rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(102,102,102,1);
    }
    .nick-name-text2{
        position: absolute;
        left: 259rpx;
        bottom: 34rpx;
        font-size:32rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .nick-name-text3{
        position: absolute;
        right: 32rpx;
        bottom: 34rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(102,102,102,1);
    }
    .gender{
        position: relative;
        margin-top: 4rpx;
        width:750rpx;
        height:100rpx;
        background:rgba(255,255,255,1);
        box-shadow:0px 1px 0px 0px rgba(226,226,226,1);
    }
    .gender-text{
        position: absolute;
        left: 30rpx;
        bottom: 36rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(102,102,102,1);
    }
    .gender-man{
        position: absolute;
        left: 242rpx;
        bottom: 56rpx;
        width:28rpx;
        height:28rpx;
        /* border:1rpx solid rgba(148,148,148,1); */
        border-radius:50%;
    }
    
    .gender-textMan{
        position: absolute;
        left: 298rpx;
        bottom: 35rpx;
        font-size:32rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .gender-women{
        position: absolute;
        left: 338rpx;
        bottom: 56rpx;
        width:28rpx;
        height:28rpx;
        /* border:1rpx solid rgba(148,148,148,1); */
        border-radius:50%;
    }
    .gender-textWomen{
        position: absolute;
        right: 327rpx;
        bottom: 35rpx;
        font-size:32rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .signature-infini{
        position: absolute;
        left: 260rpx;
        bottom: 37rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(102,102,102,1);
    }
    .born-date{
        position: absolute;
        left: 260rpx;
        bottom: 38rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
    }
    .address{
        position: absolute;
        left: 31rpx;
        bottom: 38rpx;
        font-size:30rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(249,183,44,1);
    }
</style>
