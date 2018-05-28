<template>
  <view class="container" scroll-y>

 <scroll-view scroll-y @scrolltolower="toLow"  class="content">

    <!-- <view class="content" > -->
      <view class="banner">
          <div>banner</div>
      </view>

      <index-card></index-card>
      <content-v :next="next"></content-v>
    <!-- </view> -->
    </scroll-view>
    <v-footer />
  </view>

</template>

<script>
import { mapState } from 'vuex'
import card from '@/components/card'
import indexCard from '@/components/index-card'
import contentV from '@/components/index-content'
import VFooter from '@/components/footer'
export default {
  data () {
    return {
      motto: 'Hello World',
      next: false
    }
  },

  components: {
    card,
    indexCard,
    contentV,
    VFooter
  },

  computed: {
    ...mapState({
      userInfo: 'user'
    })
  },

  methods: {
    bindViewTap () {
      this.$router.push({ path: '/pages/logs' })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    toLow (e) {
      console.log('1222222222222')
      this.next = true
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background: #f3f3f3;
    position: relative;
    .content {
      width: 100%;
      height: calc(100% - 50px);
    }
    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
    }


.content-tab{
    width:100%; 
    height: calc(100% - 580rpx);
    justify-content: center;
    align-items: center;
}

    .swiper-box {
        display: block;
        width: 100%;
        overflow: hidden;
        .swiper-item {
            height: 100%;
            text-align: center;
        }
    }
    .banner {
      height: 100px;
      background:#61C3B4;
      width: 100%;
      margin-top: 2px;
       -moz-box-shadow:1px 1px 3px #ffffff;
     -webkit-box-shadow:1px 1px 3px #ffffff;
      box-shadow:1px 1px 3px #ffffff;

    }
}
</style>
