<template>
    <view>
        <!-- <web-view :webview-styles="webviewStyles" src="http://www.zhongjubang.com/h5/agreement.html"></web-view> -->
        <web-view src="http://192.168.0.131:8080/#/pages/swiper-vertical/swiper-vertical"></web-view>
    </view>
</template>
<script>
export default {
    data() {
            return {
                webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                }
            }
        }
}
</script>
<style>

</style>