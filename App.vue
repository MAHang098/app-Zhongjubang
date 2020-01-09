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
		}
	}
</script>

<style>
	/* html, body {
		 height: 100%;
		 width: 100%;
		 font-family:PingFang SC;
		 overflow:hidden;
	 } */

</style>
