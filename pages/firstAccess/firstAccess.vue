<template>
	<view>
		<uni-swiper-dot :info="info" :current="current" :mode="mode" :dots-styles="dotStyle" field="content">
			<swiper :style="{height:phoneHeight+'px'}" class="swiper-box" @change="change">
				<swiper-item v-for="(item, index) in info" :key="index">
					<view :class="item.colorClass" class="swiper-item">
						<image @tap="goMain(index)" class="image" :src="item.url"  mode="widthFix" style="width: 100%;"/>
						
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view>
</template>

<script>
	import uniSwiperDot from '@/components/uni-swiper-banner/uni-swiper-banner.vue'
	export default {
		components: {
			uniSwiperDot
		},
		data() {
			return {
				phoneHeight: 0,
				mode: 'round',
				dotStyle: {
					backgroundColor: '#CCCCCC',
					border: '1px #CCCCCC solid',
					color: '#F9B72C',
					selectedBackgroundColor: '#F9B72C',
					selectedBorder: '1px #F9B72C solid'
				},
				current: 0,
				info: [{
						colorClass: 'uni-bg-red',
						url: '../../static/img/1.png',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: '../../static/img/2.png',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: '../../static/img/3.png',
						content: '内容 C'
					},
					{
						colorClass: 'uni-bg-blue',
						url: '../../static/img/4.png',
						content: '内容 C'
					}
				],
			}
		},
		onLoad(){
			let key = uni.getStorageSync('first_access')
			if (!key) {  
				console.log('11111')
				// uni.showToast({  
				// 	title:'请先登录！',  
				// 	icon:'none',    
				// 	success:function(){  
						
				// 	}  
				// });
			}else{
				uni.switchTab({
					url: '/pages/main/main'
				})
				console.log('cechi:::222222')
			}
			uni.setStorage({
				key:"first_access",
				data: 'old'
			})
		},
		onReady() {
		        // 计算屏幕剩余高度  填补剩余高度
		        let _this = this;
		        uni.getSystemInfo({
		            success(res) {
		                _this.phoneHeight = res.windowHeight;
		            }
		        });
		    },
		methods: {
			goMain(index){
				console.log(index)
				if(index==3){
					uni.switchTab({
						url: '/pages/main/main'
					})
				}
				
			},
			change(e) {
				this.current = e.detail.current
				console.log(e.detail.current)
				if(e.detail.current==3){
					setTimeout(function(){ 
						uni.switchTab({
							url: '/pages/main/main'
						})
					}, 3000);
					
				}
			},
		}
	}
</script>

<style>
	page{
		background-color: #fff;
	}
	.swiper-item {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		background: #eee;
		color: #fff;
	}
	.swiper-item image {
		width: 100%;
		height: 100%;
	}
</style>
