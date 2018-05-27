<template>
  <view class="container">
    <view class="banner">
        <div>banner</div>
    </view>

    <index-card></index-card>
    <content-v></content-v>


  </view>
</template>

<script>
import { mapState } from 'vuex'
import card from '@/components/card'
import indexCard from '@/components/index-card'
import contentV from '@/components/index-content'
export default {
  data () {
    return {
      motto: 'Hello World'
    }
  },

  components: {
    card,
    indexCard,
    contentV
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
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    background: #f3f3f3;
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
