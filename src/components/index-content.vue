<template>
    <view class="content-tab"  scroll-x style="width: 100%">
        <div class="content_title" >
          <img src="../../static/title.jpg" style="height:30px;width:30px"/>
          <span>正在拼团</span>
        </div>
        <div class="block"></div> 
          <v-content :queryParam="queryParam" :next={next} />
        </view>
</template>

<script>
import VContent from '@/components/content'
export default {
  data () {
    return {
      queryParam: {type: 22}
    }
  },
  props: ['next'],
  methods: {
  },
  computed: {
  },
  components: {
    VContent
  }
}
</script>
<style lang="scss" scoped>
.content-tab{
    width:100%; 
    height: calc(100% - 580rpx);
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
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
 
</style>
