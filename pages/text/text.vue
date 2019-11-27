<template>
    <view id="yuyue">
     <input type="radio" name="sex" value="" checked="checked" class="sex" />
     <view class="dianji"></view>
     <input type="radio" name="sex" value="" class="sex sex1" />
     <view class="dianji dianji1"></view>
    </view>
</template>
<script>

export default {
	data() {
	    return{

        }
	},
 methods : {
  
     
    
 },
    
}
</script>
<style>
    #yuyue{
        position: relative;
    }
    .sex{
                width:20px;
                height:20px;
                top:158px;
                left: 82px;
                position: absolute;
                opacity: 0;
                z-index: 3;
            }
    .sex1{margin-left: 94px;}
    .dianji{
                width:20px;
                height:20px;
                left:86px;
                top:161px;
                position: absolute;
                background: url("../../static/img/editInfo/gender-women.png") no-repeat;
                z-index: 2;
            }
    .dianji1{margin-left: 90px;}
    #yuyue input:checked + .dianji{
        background: url("../../static/img/editInfo/gender-man.png") no-repeat;
    }
</style>