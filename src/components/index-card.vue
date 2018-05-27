<template>
    <view class="swiper-tab" scroll-x style="width: 100%">
        <div class="tab_title">发拼单</div>
        <div class="tab_slider"></div>
        <div class="tab_title">找拼单</div>
    </view>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>

.tab_title{
    display:inline-block;
    width:49.5%;
    text-align:center;
    line-height:300rpx; 
    background: #ffffff;

}
.tab_slider{
    display:inline-block;
    width:1%;
}
.swiper-tab {
    width: 100%;
    text-align: center;
    line-height: 42px;
    white-space: nowrap;
   /* position: relative;*/
    display: -webkit-flex; /* Safari */
    display: flex;
	justify-content: space-around;
}
</style>
