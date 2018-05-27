import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from './App'
import Adapter from '@/config/adapter'
import store from '@/vuex'

Vue.use(MpvueRouterPatch)
Vue.use(Adapter, { env: 'development', store })

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})

app.$mount()

export default {
  // 这个字段走 app.json //#3CC4C4 444c5f 6BAFFA 61C3B4
  config: {
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#61C3B4',
      navigationBarTitleText: '云工厂',
      navigationBarTextStyle: '#fff'
    }
  }
}
