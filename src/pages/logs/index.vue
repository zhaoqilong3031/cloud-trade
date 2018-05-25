<template lang='pug'>
  div
    ul.container.log-list
      li.log-item(v-for='(log, index) in logs' :class='{ red: aa }' :key='index')
        card(:text='(index + 1) + " . " + log')
</template>

<script>
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      logs: []
    }
  },

  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => this.$utils.formatTime(new Date(log)))
  }
}
</script>

<style lang='sass'>
.log-list
  display: flex
  flex-direction: column
  padding: 40rpx

.log-item
  margin: 10rpx
</style>
