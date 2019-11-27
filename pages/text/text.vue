<template>
    <view>
	  <view>
	   <progress :percent="percent" stroke-width="10"></progress>
	  </view>
	  <view>
	   <button type="primary" :loading="loading" :disabled="disabled" @click="upload">选择照片</button>
	  </view>
	</view>
 
</template>
<script>
var _self;
export default {
	data() {
	    return {
	       percent:0,
	       loading:false,
	       disabled:false,
		   imageList: []
	    }
	},
 methods : {
  upload : function(){
   _self = this;
   console.log(_self.url)
   uni.chooseImage({
    count: 8 - _self.imageList.length,
    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album'], //从相册选择
    success: function (res) {
	_self.imageList = _self.imageList.concat(res.tempFilePaths)
	let imgs = _self.imageList.map((value, index) => {
		return {
			name: "image" + index,
			uri: value
		}
	})
     const tempFilePaths = res.tempFilePaths;
     const uploadTask = uni.uploadFile({
      url : _self.url + "/upload",
      // filePath: tempFilePaths,
      // name: 'file',
	  files: imgs,
      formData: {
       'user': 'test'
      },
      success: function (uploadFileRes) {
       console.log(uploadFileRes.data);
      }
     });
 
     uploadTask.onProgressUpdate(function (res) {
      _self.percent = res.progress;
      console.log('上传进度' + res.progress);
      console.log('已经上传的数据长度' + res.totalBytesSent);
      console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
     });
    },
    error : function(e){
     console.log(e);
    }
   });
  }
 },
    onLoad:function(){
  
    }
}
</script>