import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/home/main',
      'pages/spike/main',
      '^pages/cart/main',
      'pages/personal/main',
      'pages/my-orders/main',
      'pages/order-confirmation/main',
      'pages/shipping-address/main',
      'pages/product-detail/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '小程序',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#000',
      selectedColor: 'blue',
      backgroundColor: '#fff',
      list: [{
        pagePath: 'pages/home/main',
        text: '首页',
        iconPath: '',
        selectedIconPath: ''
      }, {
        pagePath: 'pages/spike/main',
        text: '秒杀',
        iconPath: '',
        selectedIconPath: ''
      }, {
        pagePath: 'pages/cart/main',
        text: '购物车',
        iconPath: '',
        selectedIconPath: ''
      }, {
        pagePath: 'pages/personal/main',
        text: '我的',
        iconPath: '',
        selectedIconPath: ''
      }],
      position: 'bottom'
    }
  }
}
