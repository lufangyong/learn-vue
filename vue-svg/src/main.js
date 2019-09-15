import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons/index' // svg 文件都自动导入
import './plugins/element.js' // 引入 elementUI
import './lib/Captcha' // 图形验证码

import './common/scss/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
