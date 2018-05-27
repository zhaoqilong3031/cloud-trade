<template>
    <view class="content-tab" scroll-x style="width: 100%">
        <div class="content_title">完成拼单</div>
        <div class="block"></div>
        <view  class="content_card">
 
            <dev v-model="content" class="content">
                我是内容1
            </dev>
            <dev v-model="content" class="content">
                我是内容2
            </dev>
        </view>
    </view>
</template>

<script>

export default {
}
</script>
<style lang="scss" scoped>
.content-tab{
    width:100%; 
    height: 540px;
    justify-content: center;
    align-items: center;

    .block {
        display: block;
        position: absolute;
        left: 0;
        height: 2px;
        bottom: 20px;
        z-index: 99;
    }
}
.content_title{
    width:100%;
    height:80rpx; 
    background: #ffffff;
    margin-top: 5px;
}
 

.content_card{
    width: 98%;
    height: 100%;
    white-space: nowrap;
    margin-left: auto;
    margin-right: auto;
}
.content{
    width: 100%;
    white-space: nowrap;
   /* position: relative;*/
    display: -webkit-flex; /* Safari */
    display: flex;
	justify-content: space-around;
    background: #ffffff;
    margin-top: 10px;
    height: 260rpx;
     -moz-box-shadow:1px 1px 3px #333333;
     -webkit-box-shadow:1px 1px 3px #333333;
      box-shadow:1px 1px 3px #585757;
      border-radius:9px;


 
}
</style>
