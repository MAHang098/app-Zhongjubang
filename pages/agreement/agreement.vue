<template>
    <view>
        <!-- <web-view :webview-styles="webviewStyles" src="http://www.zhongjubang.com/h5/agreement.html"></web-view> -->
        <web-view src="http://www.zhongjubang.com/h5/agreement.html"></web-view>
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