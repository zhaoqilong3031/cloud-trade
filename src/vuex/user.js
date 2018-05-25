// import Vue from 'vue'
export const USER_SIGNIN = 'USER_SIGNIN' // 登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' // 退出登录

export default {
  state: {},
  mutations: {
    [USER_SIGNIN] (state, user) {
      console.log('====================================')
      console.log('sign in: ', user)
      console.log('====================================')
      Object.assign(state, user)
    },
    [USER_SIGNOUT] (state) {
      Object.assign(state, { user: null })
      console.log('====================================')
      console.log('sign out: ', state.user)
      console.log('====================================')
    }
  },
  actions: {
    [USER_SIGNIN] ({commit}, user) {
      commit(USER_SIGNIN, user)
    },
    [USER_SIGNOUT] ({commit}) {
      commit(USER_SIGNOUT)
    }
  }
}
