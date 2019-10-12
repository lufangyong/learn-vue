import Vue from 'vue'
import App from './App.vue'

import LuUI from './index.js'
Vue.use(LuUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
