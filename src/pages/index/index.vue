<template lang='pug'>
  .container(@click='clickHandle("test click", $event)')
    .userinfo(@click='bindViewTap')
      img.userinfo-avatar(v-if='userInfo.avatarUrl' :src='userInfo.avatarUrl' background-size='cover')
      .userinfo-nickname
        card(:text='userInfo.nickName')

    .usermotto
      .user-motto
        card(:text='motto')

    form.form-container
      input.form-control(type='text' v-model='motto' placeholder='v-model')
      input.form-control(type='text' v-model.lazy='motto' placeholder='v-model.lazy')
</template>

<script>
import { mapState } from 'vuex'
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World'
    }
  },

  components: {
    card
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

<style scoped lang='sass'>
@import '../../styles/mixin'

.userinfo
  display: flex
  flex-direction: column
  align-items: center

.userinfo-avatar
  width: 128rpx
  height: 128rpx
  margin: 20rpx
  border-radius: 50%

.userinfo-nickname
  color: #aaa

.usermotto
  +border
  background-color: $B2
  margin-top: 150px

.form-control
  display: block
  padding: 0 12px
  margin-bottom: 5px
  border: 1px solid #ccc
</style>
