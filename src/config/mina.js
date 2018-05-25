import * as R from 'ramda'
import { apiHostDev, apiHostProd } from '@/config/host'

export default function ({ env, store }) {
  const apiHost = env === 'production' ? apiHostProd : apiHostDev
  const { state } = store

  const asyncWrap = fn => (options = {}) => new Promise((resolve, reject) => {
    let conf = {
      success: res => {
        resolve(res)
      },
      fail: err => {
        reject(err)
      }
    }

    wx[fn](R.merge(conf, options))
  })

  // 请求方法
  const request = ({ url, method = 'GET', data }) => (
    new Promise((resolve, reject) => {
      wx.request({
        url: url.startsWith('http') ? url : `${apiHost}${url}`,
        method,
        data,
        success: res => resolve(res),
        fail: res => reject(res)
      })
    }).catch(err => {
      console.log('====================================')
      console.log('request err: ', err.message)
      console.log('store state: ', state)
      console.log('====================================')
    })
  )

  const login = asyncWrap('login')

  const getUserInfo = asyncWrap('getUserInfo')

  // async function getUserInfo () {
  //   await wx.loginAsync()
  //   const res = await asyncWrap('getUserInfo')()
  //   return res
  // }

  // 系统信息
  const getSystemInfo = asyncWrap('getSystemInfo')

  // 支付相关
  const requestPayment = asyncWrap('requestPayment')

  // Toast 相关
  const showToast = (obj = null) => wx.showToast({
    icon: 'none',
    duration: 2000,
    mask: false,
    ...obj
  })
  const hideToast = wx.hideToast

  // Loading 相关
  const showLoading = (obj = null) => wx.showLoading({
    mask: true,
    ...obj
  })
  const hideLoading = wx.hideLoading

  // Tab Bar 相关
  const showTabBar = asyncWrap('showTabBar')
  const hideTabBar = asyncWrap('hideTabBar')

  return {
    request,
    login,
    getUserInfo,
    getSystemInfo,
    requestPayment,
    showToast,
    hideToast,
    showLoading,
    hideLoading,
    showTabBar,
    hideTabBar
  }
}
