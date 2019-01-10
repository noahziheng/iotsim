import Vue from 'vue'
import App from './App.vue'

import 'normalize.css'
import './plugins/iview.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
