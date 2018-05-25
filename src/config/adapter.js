/*
 * @Author: senze.fan
 * @Description: 初始化配置, 未来用于支持多平台
 */
import init from './mina'
import utils from '../utils'

let _Vue

export default {
  install (Vue, opts) {
    if (Vue && _Vue === Vue) return

    _Vue = Vue

    const fns = Object.assign(
      utils,
      init(opts)
    )

    Object.defineProperty(Vue.prototype, '$utils', {
      get () { return fns }
    })
  }
}
