<template>
	<view class="wrap">
        <view class="release-video">
            <image class="back" src="http://www.zhongjubang.com/api/upload/static/img/back.png" @tap="back" mode="" />
			<text class="title">编辑个人资料</text>
            <view class="save" @tap="save">保存</view>
        </view>
        <!-- <button class="save" form-type="submit">保存</button> -->
        <!-- <view class="save" @tap="save">保存</view> -->
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
            <view :class="sex==1?'active':''" data-index="1" @click="checkSex">
                <view class="gender-man"></view>
            </view>
            <text class="gender-textMan">男</text>
            <view :class="sex==2?'active':''" data-index="2" @click="checkSex">
                <view class="gender-women"></view>
            </view>
            <text class="gender-textWomen">女</text>
            
            

        </view>
        <view class="gender">
            <view class="gender-text">个性签名</view>
            <input class="signature-infini" placeholder=""  v-model="remarks"  maxlength="30"  @input = "remarkInput"/>
            <!-- <view class="signature-infini">未填写</view> -->
            <view v-show="okRemark" class="nick-name-text3">{{remarks_num}}/30</view>
        </view>
        <view class="gender">
            <view class="gender-text">我的生日</view>
            <picker mode="date" :value="birthday" @change="bindDateChange">
                <view class="born-date">{{birthday}}</view>
                <!-- <view class="uni-input">{{birthday}}</view> -->
            </picker>
            <!-- <view class="born-date">{{birthday}}</view> -->
        </view>
        <view class="gender" @tap="chooseImage2">
            <view class="gender-text">个人封面</view>
        </view>
        <view class="gender" @tap="goAddress">
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
                sex: 0,
                remarks: '',
                birthday: '',
                cover: '',
                nickName_num: 0,
                ok: false,
                okRemark: false,
                param: '1',
                remarks_num: 0,
                
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
					if(res.data.code==421){
						uni.navigateTo({
							url: '/pages/loginPhone/loginPhone'
						})
					}
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
			goAddress(){
				uni.navigateTo({
					url: '/pages/add-adress/add-adress'
				})
			},
            back(){
                uni.switchTab({
					url: '/pages/user/user'
				})
            },
            checkSex:function(e){
                this.sex = e.currentTarget.dataset.index;
                console.log(e.currentTarget.dataset.index)
            },
            bindDateChange: function(e) {
                this.birthday = e.target.value
                console.log(e.target.value)
			},
            descInput(e) {
                this.ok = true
				this.nickName_num = e.detail.value.length
			},
            remarkInput(e) {
                this.okRemark = true
				this.remarks_num = e.detail.value.length
            },
            chooseImage() {
				let that = this;
				uni.chooseImage({
				    count: 9, //默认9
				    // sizeType:'compressed', //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
                        const tempFilePaths = res.tempFilePaths[0];
                        console.log(res.tempFilePaths[0])
                        uni.uploadFile({
                            url: that.url + '/upload', //仅为示例，非真实的接口地址
                            filePath: res.tempFilePaths[0],
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
            chooseImage2() {
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
                                that.cover = data.data.fileUrl
                            }
                        })
						
						
						
				    }
				})
			},
            save(e){
                let token;
                let url = this.url
                
                
                let self = this
                
                uni.getStorage({
				    key:"token",
				    success: function (res) {
						token = res.data;
					}
				})
				
                
                uni.request({
					url: url + "/controller/usercontroller/updateappuser",
					data: {
						nickName: self.nickName,
						head: self.head,
						birthday: self.birthday,
						sex: self.sex,
						remarks: self.remarks,
						cover: self.cover
					},
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
                        console.log(res)
                        uni.showToast({
                            title: '保存成功',
                            icon: 'success',
                            duration: 2000,
                        })
                    }
                })
                
            }
		}
	}
</script>

<style>
    .wrap{
        height: 100%;
        background-color: #F9F9F9;
    }
    .release-video{
        position: relative;
        width:750rpx;
        height:128rpx;
        background:rgba(255,255,255,1);
		border-bottom: 2rpx solid rgba(226,226,226,1);
    }
    .back{
        position: absolute;
        left: 31rpx;
        bottom: 26rpx;
        width:54rpx;
        height:54rpx;
    }
    .back image{
        width:54rpx;
        height:54rpx;
    }
	.title{
		position: absolute;
		left: 305rpx;
		bottom: 26rpx;
		font-size:36rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
    .save{
        position: fixed;
        top: 66rpx;
        right: 32rpx;
        font-size:28rpx;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(249,183,44,1);
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
        border-radius: 50%;
        overflow: hidden;
        box-shadow:0px 1rpx 5rpx 0px rgba(202,202,202,0.31);
    }
    .avater image{
        border-radius: 50%;
        overflow: hidden;
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
        left: 258rpx;
        bottom: 36rpx;
        
        width:28rpx;
        height:28rpx;
		border-radius: 50%;
		overflow: hidden;
        border: 1px solid #949494;
    }
    .active .gender-man{
        border: 1px solid transparent;
        background: url("http://www.zhongjubang.com/api/upload/static/img/editInfo/gender-man.png") no-repeat center/cover;
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
        left: 358rpx;
        bottom: 36rpx;
        width:28rpx;
        height:28rpx;
		border-radius: 50%;
		overflow: hidden;
        border: 1px solid #949494;
		/* background: url("http://www.zhongjubang.com/api/upload/static/img/editInfo/gender-women.png") no-repeat center/cover; */
    }
    .active .gender-women{
        border: 1px solid transparent;
        background: url("http://www.zhongjubang.com/api/upload/static/img/editInfo/gender-women.png") no-repeat center/cover;
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

    /* 裁剪 */
    .cropper-config {
		padding: 20upx 40upx;
	}

	.cropper-content {
		min-height: 750upx;
		width: 100%;
	}

	.uni-corpper {
		position: relative;
		overflow: hidden;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		box-sizing: border-box;
	}

	.uni-corpper-content {
		position: relative;
	}

	.uni-corpper-content image {
		display: block;
		width: 100%;
		min-width: 0 !important;
		max-width: none !important;
		height: 100%;
		min-height: 0 !important;
		max-height: none !important;
		image-orientation: 0deg !important;
		margin: 0 auto;
	}
	/* 移动图片效果 */

	.uni-cropper-drag-box {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		cursor: move;
		background: rgba(0, 0, 0, 0.6);
		z-index: 1;
	}
	/* 内部的信息 */

	.uni-corpper-crop-box {
		position: absolute;
		background: rgba(255, 255, 255, 0.3);
		z-index: 2;
	}

	.uni-corpper-crop-box .uni-cropper-view-box {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		overflow: visible;
		outline: 1upx solid #69f;
		outline-color: rgba(102, 153, 255, .75)
	}
	/* 横向虚线 */

	.uni-cropper-dashed-h {
		position: absolute;
		top: 33.33333333%;
		left: 0;
		width: 100%;
		height: 33.33333333%;
		border-top: 1upx dashed rgba(255, 255, 255, 0.5);
		border-bottom: 1upx dashed rgba(255, 255, 255, 0.5);
	}
	/* 纵向虚线 */

	.uni-cropper-dashed-v {
		position: absolute;
		left: 33.33333333%;
		top: 0;
		width: 33.33333333%;
		height: 100%;
		border-left: 1upx dashed rgba(255, 255, 255, 0.5);
		border-right: 1upx dashed rgba(255, 255, 255, 0.5);
	}
	/* 四个方向的线  为了之后的拖动事件*/

	.uni-cropper-line-t {
		position: absolute;
		display: block;
		width: 100%;
		background-color: #69f;
		top: 0;
		left: 0;
		height: 1upx;
		opacity: 0.1;
		cursor: n-resize;
	}

	.uni-cropper-line-t::before {
		content: '';
		position: absolute;
		top: 50%;
		right: 0upx;
		width: 100%;
		-webkit-transform: translate3d(0, -50%, 0);
		transform: translate3d(0, -50%, 0);
		bottom: 0;
		height: 41upx;
		background: transparent;
		z-index: 11;
	}

	.uni-cropper-line-r {
		position: absolute;
		display: block;
		background-color: #69f;
		top: 0;
		right: 0upx;
		width: 1upx;
		opacity: 0.1;
		height: 100%;
		cursor: e-resize;
	}

	.uni-cropper-line-r::before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		width: 41upx;
		-webkit-transform: translate3d(-50%, 0, 0);
		transform: translate3d(-50%, 0, 0);
		bottom: 0;
		height: 100%;
		background: transparent;
		z-index: 11;
	}

	.uni-cropper-line-b {
		position: absolute;
		display: block;
		width: 100%;
		background-color: #69f;
		bottom: 0;
		left: 0;
		height: 1upx;
		opacity: 0.1;
		cursor: s-resize;
	}

	.uni-cropper-line-b::before {
		content: '';
		position: absolute;
		top: 50%;
		right: 0upx;
		width: 100%;
		-webkit-transform: translate3d(0, -50%, 0);
		transform: translate3d(0, -50%, 0);
		bottom: 0;
		height: 41upx;
		background: transparent;
		z-index: 11;
	}

	.uni-cropper-line-l {
		position: absolute;
		display: block;
		background-color: #69f;
		top: 0;
		left: 0;
		width: 1upx;
		opacity: 0.1;
		height: 100%;
		cursor: w-resize;
	}

	.uni-cropper-line-l::before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		width: 41upx;
		-webkit-transform: translate3d(-50%, 0, 0);
		transform: translate3d(-50%, 0, 0);
		bottom: 0;
		height: 100%;
		background: transparent;
		z-index: 11;
	}

	.uni-cropper-point {
		width: 5upx;
		height: 5upx;
		background-color: #69f;
		opacity: .75;
		position: absolute;
		z-index: 3;
	}

	.point-t {
		top: -3upx;
		left: 50%;
		margin-left: -3upx;
		cursor: n-resize;
	}

	.point-tr {
		top: -3upx;
		left: 100%;
		margin-left: -3upx;
		cursor: n-resize;
	}

	.point-r {
		top: 50%;
		left: 100%;
		margin-left: -3upx;
		margin-top: -3upx;
		cursor: n-resize;
	}

	.point-rb {
		left: 100%;
		top: 100%;
		-webkit-transform: translate3d(-50%, -50%, 0);
		transform: translate3d(-50%, -50%, 0);
		cursor: n-resize;
		width: 36upx;
		height: 36upx;
		background-color: #69f;
		position: absolute;
		z-index: 1112;
		opacity: 1;
	}

	.point-b {
		left: 50%;
		top: 100%;
		margin-left: -3upx;
		margin-top: -3upx;
		cursor: n-resize;
	}

	.point-bl {
		left: 0%;
		top: 100%;
		margin-left: -3upx;
		margin-top: -3upx;
		cursor: n-resize;
	}

	.point-l {
		left: 0%;
		top: 50%;
		margin-left: -3upx;
		margin-top: -3upx;
		cursor: n-resize;
	}

	.point-lt {
		left: 0%;
		top: 0%;
		margin-left: -3upx;
		margin-top: -3upx;
		cursor: n-resize;
	}
	/* 裁剪框预览内容 */

	.uni-cropper-viewer {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.uni-cropper-viewer image {
		position: absolute;
		z-index: 2;
	}
</style>
