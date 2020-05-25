import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './styles/base.styl'
Vue.config.productionTip = false
import './plugins/antd.js'

// import '../mock'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
