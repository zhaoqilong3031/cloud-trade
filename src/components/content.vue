<template>
   <!-- <scroll-view scroll-y style="height:100%;"  @scrolltolower="toLow" class="content_card"> -->
     <view class="content_card">
        <div :v-model="content" class="content">
           {{articleList.reply_count}}
        </div>

        <dev v-model="content" class="content">
              我是内容2
        </dev>
  <!-- </scroll-view> -->
     </view>
</template>

<script>
import avatar from '@/components/avatar'
export default {
  name: 'content',
  props: ['queryParam', 'next'],
  data () {
    return {
      articleList: [],
      page: 1
    }
  },
  watch: {
    next: function (val) {
      console.log('下一页')
      this.page++
      this.getList(this.page)
    }
  },
  methods: {
    async getList (page = 1) {
      wx.showLoading({
        title: '加载中'
      })
      console.log(this.queryParam)
      this.articleList = [{title: '123', reply_count: 1 + this.page, createTime: 12, lastReplyTime: 12, author: {loginname: '12'}}]
      wx.hideLoading()
    }
  },
  computed: {
    list () {
      return this.articleList.map(item => {
        delete item.content
        return item
      })
    }
  },
  components: {
    avatar
  },
  async created () {
    this.getList()
  }
}
</script>
<style lang="scss" scoped>

.content_card{
    width: 95%;
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
