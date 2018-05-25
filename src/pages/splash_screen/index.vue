<template lang='pug'>
  button(open-type='getUserInfo') 授权
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted () {
    this.getUserInfo()
  },
  data () {
    return {
      text: 'hh'
    }
  },
  methods: {
    jump () {
      this.$router.replace({ path: '/pages/index' })
    },
    async getUserInfo () {
      const { code } = await this.$utils.login()
      const userInfo = await this.$utils.getUserInfo()
      console.log('====================================')
      console.log('code: ', code)
      console.log('userinfo: ', userInfo)
      console.log('====================================')
      this.USER_SIGNIN(userInfo.userInfo)
      this.jump()
    },
    ...mapActions(['USER_SIGNIN', 'USER_SIGNOUT'])
  }
}
</script>
