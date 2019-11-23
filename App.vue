<script>
	export default {
		onLaunch: function() {
			uni.onTabBarMidButtonTap((e)=>{
							 console.log('222')
			       uni.navigateTo({
			       	url: '/pages/release/release'
			       })
			   });  
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		},
	}
</script>

<style>
	.uni-tabbar__bd:nth-of-type(4) {
	    top: -17px !important;
	  }
	  uni-tabbar .uni-tabbar__icon.uni-tabbar__icon__diff  {
	    width: 94rpx;
	    height: 94rpx;
	    top: -17px !important;
	  }
	 html, body {
		 height: 100%;
		 width: 100%;
		 font-family:PingFang SC;
	 }
	 body{overflow:hidden}
	 html{/*overflow-y:scroll;*/ }
	 html{overflow: auto; }
</style>
