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
  // 这个字段走 app.json
  config: {
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#00BF00',
      navigationBarTitleText: '行情宝',
      navigationBarTextStyle: '#fff'
    }
  }
}
