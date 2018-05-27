<template>
    <view class="content-tab" scroll-x style="width: 100%">
        <div class="content_title">完成拼单</div>
        <div class="block"></div>
        <view  class="content_card">
 
					<scroll-view scroll-y style="height:100%;"  @scrolltolower="toLow" @scrolltoupper="test">
						<div :v-model="content" class="content">
						<a :href="'/pages/article/main?id='" class="feed-li" v-for="(item,index) in list" :key="index">
							<div class="feed-title">
								<type-block :item="item"></type-block>
								<p>{{item.title}}</p>
							</div>
							<div class="feed-content">
								<avatar :user="item.author"></avatar>
								<div class="feed-right">
									<div class="feed-right-top">
										<div class="avatar-name">{{item.author.loginname}}</div>
											<div class="count"><span>{{item.reply_count}}</span>&nbsp;/&nbsp;{{item.visit_count}}</div>
										</div>

										<div class="feed-right-bottom">
											<div class="feed-time">	{{item.createTime}}</div>
											<div class="feed-pass">{{item.lastReplyTime}}</div>
										</div>
									</div>
								</div>
						</a>
					</div>
				</scroll-view>
 
            <dev v-model="content" class="content">
                我是内容2
            </dev>
        </view>
    </view>
</template>

<script>
import avatar from '@/components/avatar'
export default {
  data () {
    return {
      articleList: [],
      page: 1
    }
  },

  methods: {
    async getList (page = 1) {
      wx.showLoading({
        title: '加载中'
      })
      this.articleList = [{title: '123', reply_count: 1, createTime: 12, lastReplyTime: 12, author: {loginname: '12'}}]
      wx.hideLoading()
    },
    toLow (e) {
      this.page++
      this.getList(this.page)
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



      .feed-li {
        padding: 10px;
        border-bottom: 1px solid #fff;
        .feed-title {
            display: flex;
            align-items: center;
            min-width: 0;
            p {
                margin: 0 0 0 8px;
                font-size: 14px;
                line-height: 24px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                flex: 1;
                min-width: 0;
            }
        }
        .feed-content {
            display: flex;
            position: relative;
            font-size: 13px;
            margin-top: 8px;
            .feed-right {
                flex: 1;
                min-width: 0;
                margin-left: 8px;
                .feed-right-top {
                    display: flex;
                    justify-content: space-between;
                    .author-name {}
                    .count {
                        span {
                            color: #80bd01;
                        }
                    }
                }
                .feed-right-bottom {
                    margin-top: 4px;
                    display: flex;
                    justify-content: space-between;
                    .feed-time {
                        font-size: 12px;
                        color: #666;
                    }
                }
            }
        }
    }
    
}
</style>
