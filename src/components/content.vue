<template>
   <!-- <scroll-view scroll-y style="height:100%;"  @scrolltolower="toLow" class="content_card"> -->
     <view class="content_card">
 
        <a :href="'/pages/article/main?id='+item.id" class="content" v-for="(item,index) in list" :key="index">
       
              <div class="item-img">
                <img :src="item.img" alt="图片">
              </div>
              <div class="item">
                 <div class="feed-title">
                    <p>{{item.title}}</p>
                </div>
                <div class="feed-title">
                    <p>报团数：</p><p>{{item.joinNum}}</p>
                </div>
                <div class="feed-title">
                    <p>目标数：</p><p>{{item.joinNum}}</p>
                </div>
                <div class="feed-title">
                    <p>截止时间：</p><p>{{item.endTm}}</p>
                </div>
              </div>
        </a>
 
        <div :v-model="content" class="content">
            {{orderList.reply_count}}
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
      orderList: [],
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
      this.orderList = [{title: '女装时装', joinNum: 12, endTm: '06/30', img: 'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3445296831,311703592&fm=202&src=781&mola=new&crop=v1'}]
      wx.hideLoading()
    }
  },
  computed: {
    list () {
      return this.orderList.map(item => {
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
    .item-img {
      width: 50%;
      height: 100%;

      img{
         width: 100%;
      height: 100%;
      }
    }
    .item{
      width: 49%;
      height: 100%;
    }
  }
</style>
