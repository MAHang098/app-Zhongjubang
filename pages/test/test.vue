<template>
	 <yy-video-player 
        :auto-play="false" 
        :url="url"  
        :poster="poster" 
        :danmu-list="danmuList"
        :show-back-btn="true"
  ></yy-video-player>
</template>

<script>
    // import yyVideoPlayer from '@/components/yy-video-player/yy-video-player.nvue';
	export default {
        components: {
            yyVideoPlayer
        },
	    data() {
	        return {

	        }
		},
	    methods: {
			
		}
	}
</script>
	
<style>
	
	
	
</style>
